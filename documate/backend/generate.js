// @see https://docs.aircode.io/guide/functions/
const OpenAI = require('openai');
const db = require('./db');

// Default model configuration
const DEFAULT_EMBEDDING_MODEL = 'text-embedding-ada-002';

// Convert embedding array to PostgreSQL vector format
function formatEmbeddingForPostgres(embedding) {
  if (!Array.isArray(embedding)) {
    throw new Error('Embedding must be an array');
  }
  return `[${embedding.join(',')}]`;
}

// Ensure input is a valid string
function sanitizeInput(input) {
  if (!input) return '';
  return String(input).trim() || 'unknown';
}

async function generateEmbeddings(project, embeddingModel = process.env.OPENAI_EMBEDDING_MODEL || DEFAULT_EMBEDDING_MODEL) {
  try {
    // First fix potential empty path issues
    await db.query(
      'UPDATE pages SET fullPath = path WHERE fullPath IS NULL OR fullPath = \'\'',
      []
    ).catch(err => {
      console.warn('Failed to fix empty paths:', err);
    });

    // Find all the pages without embeddings
    const result = await db.query(
      'SELECT * FROM pages WHERE project = $1 AND (embedding IS NULL OR path_embedding IS NULL)',
      [project]
    ).catch(err => {
      console.error('Database query failed:', err);
      throw new Error('Failed to query database');
    });

    const pages = result.rows;
    console.log('Query result:', {
      rowCount: pages?.length,
      sampleRow: pages?.[0] ? {
        id: pages[0].id,
        project: pages[0].project,
        path: pages[0].path,
        fullPath: pages[0].fullPath,
      } : null
    });

    if (!pages || pages.length === 0) {
      console.log(`No pages found needing embeddings for project: ${project}`);
      return { ok: 1 };
    }

    // Replace newlines with spaces for OpenAI embeddings and ensure valid input
    const contentInput = pages.map(page => {
      const content = sanitizeInput(page.content).replace(/\n/g, ' ');
      console.log('Processing content:', {
        id: page.id,
        contentLength: content.length,
        contentPreview: content.substring(0, 50)
      });
      return content;
    });

    const pathInput = pages.map(page => {
      // If fullPath is empty, use path
      const path = sanitizeInput(page.fullPath || page.path);
      console.log('Processing path:', {
        id: page.id,
        path: page.path,
        fullPath: page.fullPath,
        finalPath: path
      });
      return path;
    });

    // Validate input
    if (contentInput.some(text => !text)) {
      console.error('Empty content found in:', contentInput);
      throw new Error('Invalid input: some content is empty');
    }
    if (pathInput.some(text => !text)) {
      console.error('Empty paths found in:', pathInput);
      throw new Error('Invalid input: some paths are empty');
    }
    
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }

    // Configure OpenAI client
    const openaiConfig = {
      apiKey: process.env.OPENAI_API_KEY,
    };
    
    // If custom API base is set, add it to the configuration
    if (process.env.OPENAI_API_BASE) {
      openaiConfig.baseURL = process.env.OPENAI_API_BASE;
    }

    const openai = new OpenAI(openaiConfig);

    // Generate content embeddings
    const contentEmbeddings = await openai.embeddings.create({
      model: embeddingModel,
      input: contentInput,
    }).catch(err => {
      console.error('OpenAI API call failed for content:', err.message);
      throw new Error('Failed to generate content embeddings from OpenAI');
    });

    // Generate path embeddings
    const pathEmbeddings = await openai.embeddings.create({
      model: embeddingModel,
      input: pathInput,
    }).catch(err => {
      console.error('OpenAI API call failed for paths:', err.message);
      throw new Error('Failed to generate path embeddings from OpenAI');
    });

    // Update embeddings in batches
    for (let i = 0; i < pages.length; i++) {
      try {
        const formattedContentEmbedding = formatEmbeddingForPostgres(contentEmbeddings.data[i].embedding);
        const formattedPathEmbedding = formatEmbeddingForPostgres(pathEmbeddings.data[i].embedding);
        
        await db.query(
          'UPDATE pages SET embedding = $1, path_embedding = $2 WHERE id = $3',
          [formattedContentEmbedding, formattedPathEmbedding, pages[i].id]
        );
      } catch (err) {
        console.error(`Failed to update embeddings for page ${pages[i].id}:`, err);
        console.error('Embedding data:', {
          id: pages[i].id,
          contentEmbeddingLength: contentEmbeddings.data[i].embedding?.length,
          pathEmbeddingLength: pathEmbeddings.data[i].embedding?.length
        });
        throw new Error(`Failed to update embeddings in database: ${err.message}`);
      }
    }

    // Try to create indices
    try {
      await db.query('SELECT create_vector_indices()');
    } catch (err) {
      console.warn('Failed to create vector indices:', err.message);
      // Not throwing an error because this is not a fatal error
    }

    console.log(`Successfully generated embeddings for ${pages.length} pages in project: ${project}`);
    return { ok: 1, count: pages.length };
  } catch (error) {
    console.error(`Failed to generate embeddings for project ${project}:`, error.message);
    return { 
      ok: 0, 
      error: error.message,
      details: error.stack 
    };
  }
}

module.exports = {
  generateEmbeddings,
}
