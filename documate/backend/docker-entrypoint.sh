#!/usr/bin/env bash
set -Eeo pipefail

# Initialize database
if [ ! -s "$PGDATA/PG_VERSION" ]; then
    echo "Initializing PostgreSQL database..."
    initdb -D "$PGDATA"

    # Configure listening address and access control
    cat > "$PGDATA/postgresql.conf" << EOF
listen_addresses = '*'
max_connections = 100
shared_buffers = 128MB
EOF

    # Configure client authentication
    cat > "$PGDATA/pg_hba.conf" << EOF
# TYPE  DATABASE        USER            ADDRESS                 METHOD
local   all            all                                     trust
host    all            all             127.0.0.1/32           trust
host    all            all             ::1/128                trust
host    all            all             0.0.0.0/0              trust
host    all            all             ::/0                   trust
EOF

    # Start PostgreSQL service
    pg_ctl -D "$PGDATA" -w start

    # Create database and extensions
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname postgres <<-EOSQL
        CREATE DATABASE $POSTGRES_DB;
EOSQL

    # Switch to target database
    psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
        CREATE EXTENSION IF NOT EXISTS zhparser;
        CREATE TEXT SEARCH CONFIGURATION chinese (PARSER = zhparser);
        ALTER TEXT SEARCH CONFIGURATION chinese ADD MAPPING FOR n,v,a,i,e,l WITH simple;
EOSQL

    # Execute initialization scripts
    echo "Running initialization scripts..."
    for f in /docker-entrypoint-initdb.d/*.sql; do
        echo "Executing $f..."
        psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -f "$f"
    done

    # Stop PostgreSQL service
    pg_ctl -D "$PGDATA" -m fast -w stop
fi

# Start PostgreSQL service
exec postgres -D "$PGDATA"