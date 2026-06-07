---
sidebar_position: 9
---

# Agent-Assisted First Setup

The first Open-LLM-VTuber setup can involve dependency installation, `conf.yaml`, LLM, ASR, TTS, Live2D, frontend connection, and local network issues at the same time. You can ask Claude, Codex, Gemini CLI, Cursor, or another coding agent to help, but you should constrain its scope first so it does not write API keys into the repository or modify source code unnecessarily.

This page provides copyable workflows and prompts. They are tool-agnostic: any agent that can read and edit local files can use them.

:::warning
Do not put real API keys, tokens, private endpoints, or account information in public issues, PRs, chat logs, or commits. When an agent edits local `conf.yaml`, also confirm that the file will not be committed.
:::

## Recommended Workflow

### 1. Start with a read-only check

Ask the agent to inspect the project structure and current configuration before editing files. The goal is to confirm:

- Whether dependencies are already installed.
- Whether `conf.yaml` exists in the project root.
- Which character config is currently used.
- Which `llm_provider` is used by `basic_memory_agent`.
- Whether key LLM, ASR, TTS, and Live2D settings are missing.
- Whether there are obvious local port, proxy, or model-name issues.

### 2. Choose a runtime route

Ask the agent to confirm which route you want before editing configuration:

- Local-first: use Ollama, LM Studio, llama.cpp, or another local model.
- Cloud-first: use OpenAI, Gemini, Claude, or another OpenAI-compatible API to reduce local hardware requirements.
- Hybrid: use a cloud LLM with local TTS, ASR, or Live2D.

### 3. Edit configuration only

First setup usually only requires editing `conf.yaml`. Unless you explicitly ask for it, do not let the agent modify Python source code, frontend code, model files, or Live2D assets.

### 4. Validate in small steps

Change one module at a time, then run the smallest useful validation:

1. Generate or copy `conf.yaml`.
2. Configure the LLM and start the backend once.
3. Confirm the web page can connect.
4. Then configure ASR, TTS, Live2D, or MCP.

If something fails, ask the agent to preserve the full error text and explain the likely cause before making another change.

## General Prompt

Give the following prompt to your agent, and add your actual provider, model name, or local model name as needed.

```text
You are helping me set up Open-LLM-VTuber for the first time.

Rules:
- Work only inside this local Open-LLM-VTuber project.
- Do not commit, print, or expose API keys, tokens, private endpoints, or account information.
- Prefer editing conf.yaml and local setup files. Do not modify source code unless I explicitly ask.
- Before changing anything, inspect the current project structure and tell me what config files exist.
- If conf.yaml does not exist, create it by copying the closest default template from config_templates.
- Keep every change small and explain what file you changed.
- After each change, run the smallest useful validation command and report the exact error if it fails.

Setup goal:
- Help me choose a working first-run route.
- Configure the default character's basic_memory_agent.
- Configure one LLM provider.
- Keep ASR, TTS, and Live2D on defaults unless I ask to customize them.
- Start the backend and tell me the local URL to open.

Ask me before making changes if you need to know:
- Whether I want a local or cloud LLM.
- Which API provider or local model I want.
- Where I store secrets locally.
- Whether I want to use the web UI or the Electron client.
```

## Cloud LLM Setup Prompt

If you want to reduce local hardware requirements, ask the agent to configure a cloud LLM first. This prompt fits OpenAI, Gemini, DeepSeek, Groq, Mistral, or any OpenAI-compatible service.

```text
Configure Open-LLM-VTuber to use a cloud LLM provider.

Constraints:
- Edit only conf.yaml.
- Do not insert a real API key unless I provide a safe local secret handling method.
- Use placeholders like YOUR_API_KEY when writing examples.
- Do not commit conf.yaml if it contains secrets.

Steps:
1. Find character_config -> agent_config -> agent_settings -> basic_memory_agent.
2. Set llm_provider to the provider I choose.
3. Find character_config -> agent_config -> llm_configs.
4. Update only the matching provider block.
5. Set model, llm_api_key, base_url if needed, and temperature.
6. Keep ASR, TTS, Live2D, and persona settings unchanged.
7. Start the backend once and report whether the chat endpoint works.

Provider examples:
- openai_llm for OpenAI official API.
- gemini_llm for Gemini API.
- claude_llm for Claude.
- openai_compatible_llm for any provider exposing an OpenAI-compatible Chat Completions endpoint.
```

## Local LLM Setup Prompt

If you want to use Ollama, LM Studio, or llama.cpp, use this prompt.

```text
Configure Open-LLM-VTuber to use a local LLM.

Constraints:
- Edit only conf.yaml unless installation commands are required.
- Do not download a large model until I confirm the model name and size.
- Prefer a small model for the first smoke test.
- Keep API keys out of the config unless the local server requires a dummy value.

Steps:
1. Check whether Ollama, LM Studio, or llama.cpp is already installed.
2. Ask me which local backend I want.
3. Verify the local server URL or model file path.
4. Set basic_memory_agent.llm_provider to ollama_llm, lmstudio_llm, or llama_cpp_llm.
5. Update only the matching llm_configs block.
6. Run the smallest validation command, such as listing local models or starting the backend.
7. If the model is missing, report the exact model name that should be downloaded.
```

## Validation Prompt

After setup, use this prompt for a final check.

```text
Validate my Open-LLM-VTuber first-run setup.

Check:
1. conf.yaml exists and is not staged for commit if it contains secrets.
2. The selected basic_memory_agent.llm_provider exists under llm_configs.
3. The selected model name is not empty.
4. The backend starts without a configuration validation error.
5. If the LLM call fails, report whether it looks like a wrong model name, wrong base_url, missing API key, rate limit, network/proxy issue, or local server not running.
6. Do not hide the original error text.

End with:
- Files changed.
- Commands run.
- What still needs user action.
- The local URL to open if the backend is running.
```

## Good Tasks for an Agent

- Copy a default config to `conf.yaml`.
- Switch `basic_memory_agent.llm_provider`.
- Fill in model name, `base_url`, and temperature.
- Check whether a local model server is running.
- Explain startup errors.
- Compare a local route and a cloud route.

## Avoid During First Setup

- Rewriting the Agent architecture.
- Changing LLM, ASR, TTS, Live2D, and MCP at the same time.
- Committing `conf.yaml` or secrets automatically.
- Downloading large local models before confirming model size.
- Guessing and editing several files without preserving the original error.

