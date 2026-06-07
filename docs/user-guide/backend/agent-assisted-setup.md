---
sidebar_position: 9
---

# Agent 辅助初次设置

Open-LLM-VTuber 的第一次设置会同时碰到依赖安装、`conf.yaml`、LLM、ASR、TTS、Live2D、前端连接和本地网络问题。你可以让 Claude、Codex、Gemini CLI、Cursor 或其他代码 Agent 帮你处理这些步骤，但要先限制它的工作范围，避免它把 API key 写进仓库，或在不需要的时候修改源代码。

这个页面提供一套可以直接复制的工作流程和提示词。它们是工具中立的：只要你的 Agent 能读取和编辑本地文件，就可以使用。

:::warning
不要把真实 API key、token、私有端点或账号信息写进公开 issue、PR、聊天记录或提交记录。让 Agent 修改本地 `conf.yaml` 时，也要确认这些文件不会被提交。
:::

## 建议工作流程

### 1. 先做只读检查

先让 Agent 读取项目结构和当前配置，不要立刻修改文件。目标是确认：

- 是否已经安装依赖。
- 项目根目录下是否有 `conf.yaml`。
- 目前使用哪个角色配置。
- `basic_memory_agent` 使用哪个 `llm_provider`。
- LLM、ASR、TTS、Live2D 的关键配置是否缺失。
- 是否有明显的本地端口、代理或模型名称问题。

### 2. 选择运行路线

让 Agent 先问你要走哪条路线，再修改配置：

- 本地优先：使用 Ollama、LM Studio、llama.cpp 等本地模型。
- 云端优先：使用 OpenAI、Gemini、Claude 或其他 OpenAI 兼容 API，降低本地硬件需求。
- 混合路线：云端 LLM 加本地 TTS、ASR 或 Live2D。

### 3. 只修改配置文件

第一次设置通常只需要修改 `conf.yaml`。除非你明确要求，不要让 Agent 修改 Python 源代码、前端代码、模型文件或 Live2D 资源。

### 4. 小步验证

每次只改一个模块，然后运行最小验证：

1. 生成或复制 `conf.yaml`。
2. 配置 LLM 并启动一次后端。
3. 确认网页能连接。
4. 再配置 ASR、TTS、Live2D 或 MCP。

如果出错，让 Agent 保留完整错误信息，并先解释它认为的原因，再做下一次修改。

## 通用提示词

把下面提示词交给你的 Agent，并根据你的实际路线补充 API 提供商、模型名称或本地模型名称。

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

## 云端 LLM 设置提示词

如果你想降低本地硬件需求，可以让 Agent 先配置云端 LLM。下面提示词适合 OpenAI、Gemini、DeepSeek、Groq、Mistral 或任何 OpenAI 兼容服务。

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

## 本地 LLM 设置提示词

如果你想使用 Ollama、LM Studio 或 llama.cpp，可以使用下面提示词。

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

## 验证提示词

设置完成后，用下面提示词让 Agent 做一次收尾检查。

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

## 适合交给 Agent 的任务

- 复制默认配置为 `conf.yaml`。
- 切换 `basic_memory_agent` 的 `llm_provider`。
- 填写模型名称、`base_url` 和温度。
- 检查本地模型服务是否正在运行。
- 解释启动失败的错误信息。
- 帮你比较本地路线和云端路线。

## 不适合第一次就交给 Agent 的任务

- 重写 Agent 架构。
- 同时更换 LLM、ASR、TTS、Live2D 和 MCP。
- 自动提交包含 `conf.yaml` 或密钥的变更。
- 在没有确认模型大小前下载大型本地模型。
- 在没有错误信息的情况下猜测问题并连续修改多个文件。

