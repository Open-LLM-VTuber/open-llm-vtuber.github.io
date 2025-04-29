const OpenAI = require('openai');
const db = require('./db');
const path = require('path');

const DEFAULT_EMBEDDING_MODEL = 'text-embedding-ada-002';
const DEFAULT_CHAT_MODEL = 'gpt-4o';
const MAX_CONTEXT_TOKENS = 4000;
const MAX_PATHS = 3;

// Convert embedding array to PostgreSQL vector format
function formatEmbeddingForPostgres(embedding) {
  return `[${embedding.join(',')}]`;
}

async function findSimilarContent(embedding, pathEmbedding, project) {
  try {
    // First check the data in the database
    const checkQuery = `
      SELECT id, path, fullpath, content 
      FROM pages 
      WHERE project = $1 
      LIMIT 1
    `;
    const checkResult = await db.query(checkQuery, [project]);
    console.log('Database check:', checkResult.rows[0]);

    // First get the most similar documents and their paths
    const initialQuery = `
      WITH similarity_scores AS (
        SELECT 
          p.id,
          p.path,
          p.fullpath,
          p.content,
          (p.embedding <=> $1) * 0.7 + (p.path_embedding <=> $2) * 0.3 as similarity,
          CASE 
            WHEN position('/' in p.fullpath) > 0 THEN 
              substring(p.fullpath from 1 for position('/' in p.fullpath) - 1)
            ELSE 
              ''
          END as top_dir
        FROM pages p
        WHERE p.project = $3
          AND p.embedding IS NOT NULL 
          AND p.path_embedding IS NOT NULL
      )
      SELECT DISTINCT ON (top_dir)
        id,
        path,
        fullpath,
        content,
        similarity,
        top_dir
      FROM similarity_scores
      ORDER BY top_dir, similarity ASC
      LIMIT ${MAX_PATHS}
    `;

    console.log('Executing initial query...');
    const result = await db.query(initialQuery, [embedding, pathEmbedding, project]);

    if (!result.rows || result.rows.length === 0) {
      console.log('No similar documents found');
      return [];
    }

    console.log('Found initial documents:', result.rows.map(row => ({
      id: row.id,
      path: row.path,
      fullPath: row.fullpath,
      topDir: row.top_dir,
      similarity: row.similarity
    })));

    // Get all top-level directories
    const topDirs = result.rows
      .map(row => row.top_dir)
      .filter(dir => dir !== null);

    console.log('Top level directories:', topDirs);
    
    if (topDirs.length === 0) {
      console.log('No valid directories found, falling back to general search');
      const fallbackQuery = `
        WITH similarity_scores AS (
          SELECT 
            p.id,
            p.path,
            p.fullpath,
            p.content,
            (p.embedding <=> $1) * 0.7 + (p.path_embedding <=> $2) * 0.3 as similarity
          FROM pages p
          WHERE p.project = $3
            AND p.embedding IS NOT NULL 
            AND p.path_embedding IS NOT NULL
        )
        SELECT 
          id,
          path,
          fullpath,
          content,
          similarity
        FROM similarity_scores
        ORDER BY similarity ASC
        LIMIT 5
      `;

      const fallbackResult = await db.query(fallbackQuery, [embedding, pathEmbedding, project]);
      return fallbackResult.rows;
    }

    // Build final query conditions
    const conditions = topDirs.map((dir, i) => 
      dir === '' ? 
        `(position('/' in p.fullpath) = 0 OR p.fullpath IS NULL OR p.fullpath LIKE '%')` : 
        `p.fullpath LIKE $${i + 4}`
    ).join(' OR ');

    const params = topDirs
      .filter(dir => dir !== '')
      .map(dir => `${dir}/%`);

    console.log('Final search conditions:', {
      conditions,
      params,
      query: `
        WITH similarity_scores AS (
          SELECT 
            p.id,
            p.path,
            p.fullpath,
            p.content,
            (p.embedding <=> $1) * 0.7 + (p.path_embedding <=> $2) * 0.3 as similarity
          FROM pages p
          WHERE p.project = $3
            AND p.embedding IS NOT NULL 
            AND p.path_embedding IS NOT NULL
            AND (${conditions})
        )
        SELECT 
          id,
          path,
          fullpath,
          content,
          similarity
        FROM similarity_scores
        ORDER BY similarity ASC
        LIMIT 5
      `
    });
    
    const finalQuery = `
      WITH similarity_scores AS (
        SELECT 
          p.id,
          p.path,
          p.fullpath,
          p.content,
          (p.embedding <=> $1) * 0.7 + (p.path_embedding <=> $2) * 0.3 as similarity
        FROM pages p
        WHERE p.project = $3
          AND p.embedding IS NOT NULL 
          AND p.path_embedding IS NOT NULL
          AND (${conditions})
      )
      SELECT 
        id,
        path,
        fullpath,
        content,
        similarity
      FROM similarity_scores
      ORDER BY similarity ASC
      LIMIT 5
    `;

    const queryParams = [embedding, pathEmbedding, project, ...params];
    // console.log('Query parameters:', {
    //   paramCount: queryParams.length,
    //   params: queryParams.map((p, i) => `$${i + 1}: ${p}`)
    // });

    const finalResult = await db.query(finalQuery, queryParams);

    console.log('Final results:', finalResult.rows.map(row => ({
      id: row.id,
      path: row.path,
      fullPath: row.fullpath,
      similarity: row.similarity
    })));

    return finalResult.rows;
  } catch (err) {
    console.error('Error finding similar content:', err);
    throw new Error('Failed to find similar content');
  }
}

// Send SSE message
function sendSseMessage(res, data) {
  const message = typeof data === 'string' ? { content: data } : data;
  res.write(`data: ${JSON.stringify(message)}\n\n`);
}

// Handle streaming response
async function handleStreamResponse(res, messages, openai, chatModel) {
  // Set SSE response headers
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  });

  try {
    // Create streaming completion
    const stream = await openai.chat.completions.create({
      model: chatModel,
      messages: messages,
      temperature: 0.7,
      max_tokens: 1500,
      stream: true,
    });

    // Process each chunk
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        sendSseMessage(res, {
          type: 'content',
          content: content
        });
      }
    }

    // Send completion signal
    sendSseMessage(res, {
      type: 'done'
    });
    res.end();
  } catch (error) {
    console.error('Stream error:', error);
    sendSseMessage(res, {
      type: 'error',
      error: error.message
    });
    res.end();
  }
}

// Handle regular response
async function handleNormalResponse(res, messages, openai, chatModel) {
  try {
    const completion = await openai.chat.completions.create({
      model: chatModel,
      messages: messages,
      temperature: 0.7,
      max_tokens: 1500,
    });

    return res.send(completion.choices[0].message.content);
  } catch (error) {
    console.error('Error in normal response:', error);
    return res.status(500).send('Error processing question: ' + error.message);
  }
}

async function handleAsk(req, res) {
  try {
    const { 
      project = 'default',
      question,
      stream = false,
      chatModel = process.env.OPENAI_CHAT_MODEL || DEFAULT_CHAT_MODEL,
      embeddingModel = process.env.OPENAI_EMBEDDING_MODEL || DEFAULT_EMBEDDING_MODEL
    } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(400).json({ error: 'OPENAI_API_KEY environment variable is not set' });
    }

    // Configure OpenAI client
    const openaiConfig = {
      apiKey: process.env.OPENAI_API_KEY,
    };
    
    if (process.env.OPENAI_API_BASE) {
      openaiConfig.baseURL = process.env.OPENAI_API_BASE;
    }

    const openai = new OpenAI(openaiConfig);

    // Generate embedding vectors for the question
    const embeddingResponse = await openai.embeddings.create({
      model: embeddingModel,
      input: [question, question], // Generate twice, once for content matching, once for path matching
    });

    const questionEmbedding = formatEmbeddingForPostgres(embeddingResponse.data[0].embedding);
    const pathQuestionEmbedding = formatEmbeddingForPostgres(embeddingResponse.data[1].embedding);

    // Find similar content
    const similarDocs = await findSimilarContent(questionEmbedding, pathQuestionEmbedding, project);

    if (similarDocs.length === 0) {
      const noContentMessage = "Sorry, I couldn't find relevant content in the documentation. Please try to describe your question differently, or check if the relevant documents have been uploaded.";
      if (stream) {
        res.writeHead(200, {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        });
        sendSseMessage(res, {
          type: 'content',
          content: noContentMessage
        });
        sendSseMessage(res, {
          type: 'done'
        });
        return res.end();
      }
      return res.send(noContentMessage);
    }

    // Prepare context
    const context = similarDocs.map(doc => {
      let displayPath = doc.fullpath || doc.path;
      const localBasePath = process.env.DOCS_LOCAL_PATH;
      const docsBaseUrl = process.env.DOCS_BASE_URL;
      
      if (localBasePath && docsBaseUrl && displayPath.includes(localBasePath)) {
        displayPath = displayPath.replace(localBasePath, docsBaseUrl).replace('.md', '');
      }
      
      return `File path: ${displayPath}\nContent:\n${doc.content}\n`;
    }).join('\n---\n');

    // Build base system prompt
    const baseSystemPrompt = `You are a professional documentation assistant. Please answer user questions based on the provided document content.
Answer requirements:
1. If there is directly relevant content in the document, please explain in detail
2. If code is involved, please provide code examples
3. If there is no relevant information in the document, please clearly state so
4. The answer should be well-organized and use markdown format
5. Maintain professionalism while being easy to understand
6. If content comes from multiple files, please note the source file paths in your answer`;

    // Add additional prompt (if it exists)
    const additionalPrompt = process.env.ADDITIONAL_PROMPT ? `\n${process.env.ADDITIONAL_PROMPT}` : '';

    // Prepare prompts
    const messages = [
      {
        role: 'system',
        content: baseSystemPrompt + additionalPrompt
      },
      {
        role: 'user',
        content: `Answer the question based on the following document content:\n\n${context}\n\nQuestion: ${question}`
      }
    ];

    console.log('===== SENDING TO LLM =====');
    console.log('System prompt:', baseSystemPrompt + additionalPrompt);
    console.log('Context and question:', `Answer the question based on the following document content:\n\n${context}\n\nQuestion: ${question}`);
    console.log('========================');

    // Choose response method based on stream parameter
    if (stream) {
      return handleStreamResponse(res, messages, openai, chatModel);
    } else {
      return handleNormalResponse(res, messages, openai, chatModel);
    }

  } catch (error) {
    console.error('Error in ask handler:', error);
    if (!res.headersSent) {
      return res.status(500).send('Error processing question: ' + error.message);
    }
  }
}

module.exports = handleAsk;
