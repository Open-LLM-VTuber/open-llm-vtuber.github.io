const express = require('express');
const handleUpload = require('./upload');
const handleAsk = require('./ask');

const app = express();

// CORS middleware
function corsMiddleware(req, res, next) {
  // Check environment variable, CORS enabled by default
  const enableCors = process.env.ENABLE_CORS !== 'false';
  
  if (enableCors) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Handle OPTIONS requests
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
  }
  
  next();
}

// API key authentication middleware
function apiKeyMiddleware(req, res, next) {
  const apiKey = process.env.API_KEY;
  
  // Skip authentication if API_KEY is not configured
  if (!apiKey) {
    console.warn('API_KEY not configured, skipping authentication');
    return next();
  }

  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ error: 'Missing Authorization header' });
  }

  // Validate Authorization header value
  if (authHeader !== apiKey) {
    return res.status(403).json({ error: 'Invalid API key' });
  }

  next();
}

// Use CORS middleware
app.use(corsMiddleware);

app.use(express.json());

// Protect upload route with API key authentication middleware
app.post('/upload', apiKeyMiddleware, handleUpload);
app.post('/ask', handleAsk);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message,
    details: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`CORS is ${process.env.ENABLE_CORS !== 'false' ? 'enabled' : 'disabled'}`);
}); 