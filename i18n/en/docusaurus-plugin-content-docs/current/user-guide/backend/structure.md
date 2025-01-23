---
sidebar_position: 1
---

# Backend Architecture Overview

## Core Component Interaction Flow

```mermaid
sequenceDiagram
    participant User
    participant Live2D
    participant Frontend
    participant WebSocket
    participant Backend
    participant ASR
    participant Agent
    participant Translator
    participant TTS

    User->>Frontend: Speak/Input text
    
    alt Voice input
        Frontend->>WebSocket: Send audio data
        WebSocket->>Backend: Forward audio data
        Backend->>ASR: Speech recognition
        ASR-->>Backend: Return text
    else Text input
        Frontend->>WebSocket: Send text data
    end

    Backend->>Agent: Process user input
    Note over Agent: 1. Compatible with multiple types of Agents<br>2. Save conversation history
    
    loop For each sentence
        Agent-->>Backend: Generate reply text
        opt Translation needed
            Backend->>Translator: Translate reply text
            Translator-->>Backend: Return translated text
        end
        Backend->>TTS: Text-to-speech
        TTS-->>Backend: Return audio
        Backend->>WebSocket: Send audio and expression data
        WebSocket->>Frontend: Forward data
        Frontend->>User: Play audio
        Frontend->>Live2D: Control model expressions
        Live2D-->>User: Display animation effects
    end

    Note over Frontend,Backend: The entire process supports:<br>1. Interrupting conversations<br>2. Switching character configurations<br>3. History management
```

## Code Structure

```
├── background/                # Background image resource directory
├── characters/               # Character configuration file directory
├── frontend/                # Frontend page file directory
├── live2d-models/           # Live2D model resource directory
├── logs/                    # Log file directory
├── models/                  # AI model file directory
├── prompts/                 # Prompt template directory
│   ├── presona/            # Character persona prompts
│   ├── utils/              # Utility prompts
│   └── prompt_loader.py    # Prompt loader
├── src/                     # Source code directory
│   └── open_llm_vtuber/    # Main code package
│       ├── agent/          # AI dialogue agent module
│       │   ├── agents/     # Different types of dialogue agent implementations
│       │   └── stateless_llm/  # Stateless LLM interface implementation
│       ├── asr/            # Speech recognition module
│       ├── tts/            # Text-to-speech module
│       ├── chat_history_manager.py  # Chat history manager
│       ├── conversation.py          # Conversation management
│       ├── live2d_model.py          # Live2D model manager
│       ├── routes.py                # FastAPI route definitions
│       ├── server.py                # WebSocket server
│       └── service_context.py       # Service context manager
├── conf.yaml                # Default configuration file
└── run_server.py           # Startup script
```
