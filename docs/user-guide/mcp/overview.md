---
sidebar_position: 1
---

# MCP 基础教程

## 📄 简介

> MCP（Model Context Protocol，模型上下文协议）是一个开放协议，旨在标准化应用程序向大语言模型（LLM）提供上下文信息的方式。可以将 MCP 视为 AI 应用领域的 USB-C 接口：正如 USB-C 为设备连接各类外设和配件提供了统一标准，MCP 也为 AI 模型连接不同的数据源和工具提供了标准化途径。
> 
> 来源：[MCP 官方文档](https://modelcontextprotocol.io/introduction)

## 启用 MCP 功能

在使用 MCP 服务器前，您需要在 `conf.yaml` 配置文件中启用 MCP 功能：

```yaml
character_config:
  # ... 其他配置 ...
  
  agent_config:
    # ... 其他配置 ...
    
    agent_settings:
      basic_memory_agent:
        # ... 其他配置 ...
        
        # 设置为 True 以启用 MCP 功能
        use_mcpp: True
```

如果你的模型不支持 tools 参数，你还需要系统设置中还需要确保启用了 MCP 提示词：

```yaml
system_config:
  # ... 其他配置 ...
  
  tool_prompts:
    # ... 其他提示词 ...
    
    # 取消注释或确保此行存在
    mcp_prompt: 'mcp_prompt'
```

:::info
虽然我们通过 MCP 提示词为不支持 tools 函数调用的模型提供了支持，但我们强烈推荐使用原生支持 tools/function calling 参数的模型。原生支持会提供更稳定可靠的工具调用体验。

目前主流的 API 提供商如 OpenAI（GPT 系列）、Anthropic（Claude）、Google（Gemini）、DeepSeek、Grok、以及 Ollama 中的 Llama 和 Mistral 等模型都已支持 tools 参数，建议优先选择这些模型。
:::


## 🔧 配置与使用

本节将指导用户如何在 Open-LLM-VTuber 中添加并配置 MCP 服务器。

### 内置服务器

Open-LLM-VTuber 已经内置了一些常用的 MCP 服务器：

- **time**: 提供当前时间和日期信息的服务器。
- **ddg-search**: 基于 DuckDuckGo 搜索引擎的 MCP 服务器，使 AI 能够搜索互联网。

这些内置服务器默认已经配置好，可以直接使用，无需额外设置。

### 步骤 1：定位配置文件

如果您想添加更多的 MCP 服务器，请找到项目根目录下的 MCP 服务器配置文件 `mcp_servers.json`。

### 步骤 2：添加服务器配置

在 `mcp_servers.json` 文件中的 `mcp_servers` 字段下添加一个新的条目来配置您的 MCP 服务器。每个条目代表一个服务器，其键（key）是您为该服务器指定的唯一名称。

服务器配置需要包含以下信息：

-   `command`: 启动服务器所使用的命令（例如 `node`, `uv`, `python`, `npx`, `uvx` 等）。
-   `args`: 一个包含传递给 `command` 的参数的列表。通常包含服务器脚本的路径或可执行文件名。
-   `env` (可选): 一个包含所需环境变量及其值的对象。如果服务器需要 API 密钥或其他配置，可以在这里设置。

**示例：**

以下是几个 MCP 服务器配置的示例（符合 MCP 协议，你可以直接粘贴你从网络上获取的 MCP 服务器配置）：

```json
{
  "mcp_servers": {
    // ... 其他已配置的服务器 ...

    "stagehand": {
      "command": "node",
      "args": [
        "mcp-server-browserbase/stagehand/dist/index.js" // 脚本路径
      ],
      "env": {
        "BROWSERBASE_API_KEY": "YOUR_API_KEY",
        "BROWSERBASE_PROJECT_ID": "YOUR_PROJECT_ID",
        "OPENAI_API_KEY": "YOUR_API_KEY",
        "CONTEXT_ID": "YOUR_CONTEXT_ID"
      }
    },

    // 系统内置的服务器配置示例
    "time": {
      "command": "uvx",
      "args": ["mcp-server-time", "--local-timezone=Asia/Shanghai"]
    },
    
    "ddg-search": {
      "command": "uvx",
      "args": ["duckduckgo-mcp-server"]
    },

    // ... 其他服务器配置 ...
  }
}
```

**注意：**

-   `time` 和 `ddg-search` 是系统内置的 MCP 服务器，已经预先配置好，无需在配置文件中重新添加。上面只是展示了它们的配置方式作为参考。
-   `args` 中的参数可以是脚本的绝对/相对路径（相对于根目录），也可以是包名（如 `mcp-server-time`、`duckduckgo-mcp-server`）或系统环境变量 `PATH` 中可以直接找到的可执行文件名。
-   对于使用 `uvx` 或 `npx` 命令的服务器，通常直接指定包名作为参数，如上面的内置服务器示例所示。
-   确保为每个服务器提供唯一的名称（如 `stagehand`, `time`, `ddg-search`）。

### 步骤 3：重启应用

配置完成后，重新启动 Open-LLM-VTuber 应用程序。新的 MCP 服务器将被加载并可以在应用中使用。

## 如何使用 MCP

启用 MCP 功能后，AI 将能够自动使用可用的 MCP 服务器。例如：

- **时间服务器**: AI 可以查询和显示当前时间、日期或特定时区的时间。
- **搜索服务器**: AI 可以搜索互联网获取信息，回答关于实时事件、新闻或数据的问题。

用户不需要特别指示 AI 使用这些工具，它会根据对话内容自动决定何时使用这些功能。