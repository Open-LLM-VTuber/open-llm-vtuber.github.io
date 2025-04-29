# Documate Setup Guide

## Initial Setup
1. Copy `.env.example` to `.env`
2. Add your `OPENAI_API_KEY` to the `.env` file (only OpenAI is supported as we use their embedding model)
3. Generate a secure API key (recommended length >= 64 characters) and add it as:
   - `API_KEY` in `.env`
   - `token` in `documate.json` (this authenticates document uploads)

## Backend Setup
4. Navigate to the `backend/` directory and run:
   ```
   docker-compose up -d
   ```
   The server will be available at port 2493 (mapped to container port 3000)

## Frontend Integration
5. Add the Documate search component to your Docusaurus site by modifying `docusaurus.config.ts`:
   ```javascript
   {
     type: "custom-documate",
     position: "right",
     endpoint: "http://localhost:2493/ask",
   }
   ```

## Document Indexing
6. Build and link the Documate CLI:
   ```
   cd documate/cli/documate
   npm run build
   npm link
   cd ../../..  # Return to root directory
   ```

7. Index your documentation:
   ```
   npm run documate:upload
   ```
   Ensure the token in `documate.json` matches the `API_KEY` in `.env`

8. Start your Docusaurus site:
   ```
   npm start
   ```

## Maintenance

### Restarting the Service
```
docker compose down && docker compose build app && docker compose up -d
```

### Updating the Document Index
To add new documents or update existing ones:
```
npm run documate:upload
```
This automatically handles replacing and adding files to the index.