---
sidebar_position: 1
---

# MCP 基础教程

## 📄 简介

> MCP（Model Context Protocol，模型上下文协议）是一个开放协议，旨在标准化应用程序向大语言模型（LLM）提供上下文信息的方式。它允许 LLM 与外部工具和服务进行交互，例如搜索引擎、日历、或者控制其他应用程序。
>
> 可以将 MCP 视为 AI 应用领域的 USB-C 接口：正如 USB-C 为设备连接各类外设和配件提供了统一标准，MCP 也为 AI 模型连接不同的数据源和工具提供了标准化途径。
>
> 在 Open-LLM-VTuber 中，集成 MCP 使得 AI 角色能够利用外部工具来完成更广泛的任务，例如查询实时信息（天气、新闻）、控制智能家居设备（如果配置了相应服务器）等，极大地扩展了 AI 的能力边界。
>
> 来源：[MCP 官方文档](https://modelcontextprotocol.io/)

## 🔧 配置 MCP 服务器 (`mcp_servers.json`)

要让 Open-LLM-VTuber 能够启动和管理 MCP 工具服务器，您首先需要在项目根目录下的 `mcp_servers.json` 文件中定义这些服务器。

此文件包含一个 `mcp_servers` 对象，其中的每个键值对代表一个 MCP 服务器的配置。

**配置结构：**

每个服务器配置都需要一个唯一的名称（作为键），并包含以下信息：

-   `command`: 启动服务器所使用的命令（例如 `node`, `uv`, `python`, `npx`, `uvx` 等）。
-   `args`: 一个包含传递给 `command` 的参数的列表。通常包含服务器脚本的路径、可执行文件名或包名。
-   `env` (可选): 一个包含所需环境变量及其值的对象。如果服务器需要 API 密钥或其他配置，可以在这里设置。

**示例 (`mcp_servers.json`)：**

```json
{
  "mcp_servers": {
    // 内置服务器配置示例 (通常无需手动添加)
    "time": {
      "command": "uvx",
      "args": ["mcp-server-time", "--local-timezone=Asia/Shanghai"]
    },
    "ddg-search": {
      "command": "uvx",
      "args": ["duckduckgo-mcp-server"]
    },

    // 添加自定义服务器示例
    "stagehand": {
      "command": "node",
      "args": [
        "mcp-server-browserbase/stagehand/dist/index.js" // 脚本路径
      ],
      "env": {
        "BROWSERBASE_API_KEY": "YOUR_API_KEY",
        "BROWSERBASE_PROJECT_ID": "YOUR_PROJECT_ID",
        // ... 其他环境变量
      }
    },
    "my_custom_tool": {
        "command": "python",
        "args": ["path/to/your/custom_tool_server.py", "--port", "9001"],
        "env": {
            "CUSTOM_API_TOKEN": "your_secret_token"
        }
    }
    // ... 其他服务器配置 ...
  }
}
```

**注意：**

-   确保为每个服务器提供唯一的名称（键）。
-   `args` 中的路径可以是相对于项目根目录的相对路径或绝对路径。
-   对于使用 `uvx` 或 `npx` 启动的服务器，通常直接在 `args` 中指定包名。



## ✨ 启用 MCP 功能与指定服务器 (`conf.yaml`)

仅在 `mcp_servers.json` 中定义服务器是不够的，您还需要在 `conf.yaml` 文件中为具体的 AI Agent (目前仅有 `basic_memory_agent` 支持) 启用 MCP 功能，并明确指定该 Agent 可以使用哪些已定义的服务器。

**步骤：**

1.  **定位配置**: 打开 `conf.yaml` 文件，找到您想要配置的角色的 `character_config` -> `agent_config` -> `agent_settings` -> `basic_memory_agent` 部分。
2.  **启用 MCP**: 将 `use_mcpp` 设置为 `True`。
3.  **指定服务器**: 添加 `mcp_enabled_servers` 列表，并在其中列出您希望该 Agent 使用的、已在 `mcp_servers.json` 中定义的服务器名称。

**示例 (`conf.yaml`)：**

```yaml
character_config:
  # ... 其他配置 ...

  agent_config:
    conversation_agent_choice: 'basic_memory_agent' # 或其他支持 MCP 的 Agent

    agent_settings:
      basic_memory_agent:
        # ... 其他 basic_memory_agent 配置 ...

        # 设置为 True 以启用 MCP 功能
        use_mcpp: True
        # 指定此 Agent 可以使用的 MCP 服务器列表
        # 这些名称必须是在 mcp_servers.json 中定义的键
        mcp_enabled_servers: ["time", "ddg-search"] # 示例：启用了时间和搜索

# 如果你的 LLM 模型本身不支持 Function Calling / Tools 参数，
# 你还需要确保在 system_config 中启用了 MCP 提示词：
system_config:
  # ... 其他配置 ...
  
  tool_prompts:
    # ... 其他提示词 ...
    
    # 确保此行存在且未被注释
    mcp_prompt: 'mcp_prompt' 
```

:::info 推荐使用原生支持工具调用的模型
虽然我们通过 `mcp_prompt` 为不支持工具调用的模型提供了兼容，但强烈推荐使用原生支持 `tools` 或 `function calling` 参数的 LLM（如 GPT、Claude、Gemini、DeepSeek、Grok、以及 Ollama 中的部分模型如 Llama 3, Mistral 等）。原生支持能提供更稳定、可靠的工具调用体验。
:::

**重要：**

-   只有在 `mcp_enabled_servers` 列表中明确指定的服务器才会被该 Agent 加载和使用。
-   每次启动应用或切换配置时，系统会实时连接 `mcp_enabled_servers` 中列出的服务器，动态获取其提供的工具信息，并为 LLM 准备好相应的调用格式。不再需要 `servers_prompt.json` 或 `formatted_tools.json` 文件。



## 🚀 内置服务器

Open-LLM-VTuber 默认在 `mcp_servers.json` 中预配置了一些常用的 MCP 服务器：

-   **`time`**: 提供查询当前时间和日期的功能。
-   **`ddg-search`**: 基于 DuckDuckGo 搜索引擎，使 AI 能够搜索互联网获取实时信息。

您可以在 `conf.yaml` 的 `mcp_enabled_servers` 列表中直接使用这些名称来启用它们。

