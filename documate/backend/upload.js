const crypto = require('crypto');
const db = require('./db');
const { generateEmbeddings } = require('./generate');

async function handleUpload(req, res) {
  const { operation, project, path, fullPath, content } = req.body;
  
  console.log('Upload request:', {
    operation,
    project,
    path,
    fullPath,
    contentLength: content?.length
  });

  // Check if operation is valid
  if (!['add', 'delete', 'clean', 'generate'].includes(operation)) {
    return res.status(400).json({ error: 'Invalid operation' });
  }

  // clean and generate operations only need project parameter
  if (operation === 'clean' || operation === 'generate') {
    try {
      if (operation === 'clean') {
        // Delete all pages for the project
        await db.query('DELETE FROM pages WHERE project = $1', [project || 'default']);
        return res.json({ message: 'Project cleaned successfully' });
      } else {
        // Generate vectors for all pages in the project
        const result = await generateEmbeddings(project || 'default');
        return res.json(result);
      }
    } catch (err) {
      console.error(`Error in ${operation} operation:`, err);
      return res.status(500).json({ error: `Failed to ${operation} project: ${err.message}` });
    }
  }

  // For add and delete operations, check required fields
  const missingFields = [];
  if (!path) missingFields.push('path');
  if (operation === 'add' && !content) missingFields.push('content');

  if (missingFields.length > 0) {
    return res.status(400).json({ 
      error: 'Missing required fields', 
      missingFields,
      receivedFields: {
        operation: !!operation,
        project: !!project,
        path: !!path,
        fullPath: !!fullPath,
        content: !!content
      }
    });
  }

  try {
    switch (operation) {
      case 'add': {
        // Calculate MD5 checksum of content
        const checksum = crypto.createHash('md5').update(content).digest('hex');

        // Check if a page with the same content already exists
        try {
          const existingPage = await db.query(
            'SELECT checksum FROM pages WHERE project = $1 AND path = $2 LIMIT 1',
            [project || 'default', path]
          );

          if (existingPage.rows.length > 0 && existingPage.rows[0].checksum === checksum) {
            return res.json({ message: 'Page already exists with same content' });
          }
        } catch (err) {
          console.error('Error checking existing page:', err);
          throw new Error('Failed to check existing page');
        }

        // Delete existing page (if exists)
        try {
          await db.query(
            'DELETE FROM pages WHERE project = $1 AND path = $2',
            [project || 'default', path]
          );
        } catch (err) {
          console.error('Error in delete operation:', err);
          throw new Error('Failed to delete existing page');
        }

        // Normalize path
        const normalizedPath = path.replace(/\\/g, '/');
        const finalPath = fullPath ? fullPath.replace(/\\/g, '/') : normalizedPath;

        // Add new page
        try {
          console.log('Inserting page with path:', {
            project: project || 'default',
            path: normalizedPath,
            fullPath: finalPath,
            checksum
          });

          await db.query(
            'INSERT INTO pages (project, path, fullPath, content, checksum) VALUES ($1, $2, $3, $4, $5)',
            [project || 'default', normalizedPath, finalPath, content, checksum]
          );
        } catch (err) {
          console.error('Error in add operation:', err);
          throw new Error('Failed to add new page');
        }

        // Generate embeddings
        try {
          await generateEmbeddings(project || 'default');
        } catch (err) {
          console.error('Error generating embeddings:', err);
          throw new Error('Failed to generate embeddings');
        }

        return res.json({ message: 'Page added successfully' });
      }

      case 'delete': {
        try {
          await db.query(
            'DELETE FROM pages WHERE project = $1 AND path = $2',
            [project || 'default', path]
          );
        } catch (err) {
          console.error('Error in delete operation:', err);
          throw new Error('Failed to delete page');
        }

        return res.json({ message: 'Page deleted successfully' });
      }

      default:
        return res.status(400).json({ error: 'Invalid operation' });
    }
  } catch (error) {
    console.error('Error in upload handler:', error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = handleUpload;
