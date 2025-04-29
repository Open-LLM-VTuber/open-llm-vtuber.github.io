-- Ensure extension directory exists
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_extension
        WHERE extname = 'zhparser'
    ) THEN
        -- Create zhparser extension
        CREATE EXTENSION IF NOT EXISTS zhparser;

        -- Create Chinese full-text search configuration
        DROP TEXT SEARCH CONFIGURATION IF EXISTS chinese;
        CREATE TEXT SEARCH CONFIGURATION chinese (PARSER = zhparser);

        -- Add part-of-speech mappings
        ALTER TEXT SEARCH CONFIGURATION chinese
            ADD MAPPING FOR n,v,a,i,e,l WITH simple;
    END IF;
END
$$;

-- Update existing tables to support Chinese search
DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM information_schema.tables
        WHERE table_name = 'pages'
    ) THEN
        -- Check if index exists
        IF EXISTS (
            SELECT 1
            FROM pg_class c
            JOIN pg_namespace n ON n.oid = c.relnamespace
            WHERE c.relname = 'pages_content_idx'
        ) THEN
            DROP INDEX pages_content_idx;
        END IF;
        
        -- Create new full-text search index
        CREATE INDEX pages_content_idx ON pages USING gin(to_tsvector('chinese', content));
    END IF;
END
$$; 