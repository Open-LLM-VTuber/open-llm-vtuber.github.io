CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS pages (
  id SERIAL PRIMARY KEY,
  project VARCHAR(255) NOT NULL,
  path VARCHAR(255) NOT NULL,
  fullPath TEXT NOT NULL,
  title TEXT,
  content TEXT NOT NULL,
  checksum VARCHAR(32),
  chunk_index INTEGER,
  embedding vector(1536),
  path_embedding vector(1536)
);

-- Create a function to check and create indices
CREATE OR REPLACE FUNCTION create_vector_indices()
RETURNS void AS $$
BEGIN
  -- Check the amount of data in the table
  IF (SELECT COUNT(*) FROM pages) >= 100 THEN
    -- If the index doesn't exist and there's enough data, create it
    IF NOT EXISTS (
      SELECT 1 FROM pg_class c
      JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE c.relname = 'pages_embedding_idx'
    ) THEN
      CREATE INDEX pages_embedding_idx ON pages USING ivfflat (embedding vector_cosine_ops)
      WITH (lists = 100);
    END IF;

    IF NOT EXISTS (
      SELECT 1 FROM pg_class c
      JOIN pg_namespace n ON n.oid = c.relnamespace
      WHERE c.relname = 'pages_path_embedding_idx'
    ) THEN
      CREATE INDEX pages_path_embedding_idx ON pages USING ivfflat (path_embedding vector_cosine_ops)
      WITH (lists = 100);
    END IF;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Create a function to fix paths
CREATE OR REPLACE FUNCTION fix_paths()
RETURNS void AS $$
BEGIN
  -- Update all records where fullPath is NULL or empty
  UPDATE pages 
  SET 
    path = REPLACE(path, '\', '/'),
    fullPath = REPLACE(path, '\', '/')
  WHERE fullPath IS NULL OR fullPath = '';

  -- Update all records using backslashes
  UPDATE pages 
  SET 
    path = REPLACE(path, '\', '/'),
    fullPath = REPLACE(fullPath, '\', '/')
  WHERE path LIKE '%\%' OR fullPath LIKE '%\%';
END;
$$ LANGUAGE plpgsql;

-- Execute path fix
SELECT fix_paths(); 