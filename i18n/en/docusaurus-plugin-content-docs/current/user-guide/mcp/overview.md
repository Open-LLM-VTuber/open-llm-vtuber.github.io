---
sidebar_position: 1
---

# MCP Basic Guide

## 📄 Introduction

> MCP (Model Context Protocol) is an open protocol designed to standardize how applications provide context to large language models (LLMs). MCP can be viewed as the USB-C interface for AI applications: just as USB-C provides a standardized way for devices to connect to various peripherals and accessories, MCP provides a standardized approach for AI models to connect to different data sources and tools.
> 
> Source: [MCP Official Documentation](https://modelcontextprotocol.io/introduction)

## Enabling MCP Functionality

Before using MCP servers, you need to enable MCP functionality in the `conf.yaml` configuration file:

```yaml
character_config:
  # ... other configurations ...
  
  agent_config:
    # ... other configurations ...
    
    agent_settings:
      basic_memory_agent:
        # ... other configurations ...
        
        # Set to True to enable MCP functionality
        use_mcpp: True
```

If your model doesn't support the tools parameter, you'll also need to ensure the MCP prompt is enabled in the system settings:

```yaml
system_config:
  # ... other configurations ...
  
  tool_prompts:
    # ... other prompts ...
    
    # Uncomment or ensure this line exists
    mcp_prompt: 'mcp_prompt'
```

:::info
While we provide support for models without native tools/function calling capabilities through the MCP prompt, we strongly recommend using models that natively support the tools/function calling parameter. Native support provides a more stable and reliable tool calling experience.

Currently, mainstream API providers such as OpenAI (GPT series), Anthropic (Claude), Google (Gemini), DeepSeek, Grok, and Ollama models like Llama and Mistral all support the tools parameter. We recommend prioritizing these models.
:::

## 🔧 Configuration and Usage

This section will guide users on how to add and configure MCP servers in Open-LLM-VTuber.

### Built-in Servers

Open-LLM-VTuber comes with several commonly used MCP servers built-in:

- **time**: A server that provides current time and date information.
- **ddg-search**: An MCP server based on the DuckDuckGo search engine, allowing AI to search the internet.

These built-in servers are pre-configured and ready to use without additional setup.

### Step 1: Locate the Configuration File

If you want to add more MCP servers, locate the MCP server configuration file `mcp_servers.json` in the project root directory.

### Step 2: Add Server Configuration

Add a new entry under the `mcp_servers` field in the `mcp_servers.json` file to configure your MCP server. Each entry represents a server, with its key being the unique name you assign to that server.

Server configuration needs to include the following information:

-   `command`: The command used to start the server (e.g., `node`, `uv`, `python`, `npx`, `uvx`, etc.).
-   `args`: A list containing parameters passed to the `command`. This typically includes the server script path or executable name.
-   `env` (optional): An object containing required environment variables and their values. If the server needs API keys or other configurations, you can set them here.

**Example:**

Below are some examples of MCP server configurations (conforming to the MCP protocol, you can directly paste MCP server configurations you obtain from the internet):

```json
{
  "mcp_servers": {
    // ... other configured servers ...

    "stagehand": {
      "command": "node",
      "args": [
        "mcp-server-browserbase/stagehand/dist/index.js" // Script path
      ],
      "env": {
        "BROWSERBASE_API_KEY": "YOUR_API_KEY",
        "BROWSERBASE_PROJECT_ID": "YOUR_PROJECT_ID",
        "OPENAI_API_KEY": "YOUR_API_KEY",
        "CONTEXT_ID": "YOUR_CONTEXT_ID"
      }
    },

    // Built-in server configuration examples
    "time": {
      "command": "uvx",
      "args": ["mcp-server-time", "--local-timezone=Asia/Shanghai"]
    },
    
    "ddg-search": {
      "command": "uvx",
      "args": ["duckduckgo-mcp-server"]
    },

    // ... other server configurations ...
  }
}
```

**Notes:**

-   `time` and `ddg-search` are built-in MCP servers that are already pre-configured and don't need to be added again in the configuration file. The examples above are shown for reference only.
-   Parameters in `args` can be script absolute/relative paths (relative to the root directory), package names (like `mcp-server-time`, `duckduckgo-mcp-server`), or executable file names that can be found directly in the system environment variable `PATH`.
-   For servers using the `uvx` or `npx` command, you typically specify the package name directly as a parameter, as shown in the built-in server examples above.
-   Ensure each server has a unique name (like `stagehand`, `time`, `ddg-search`).

### Step 3: Restart the Application

After configuration is complete, restart the Open-LLM-VTuber application. The new MCP server will be loaded and available for use in the application.

## How to Use MCP

After enabling MCP functionality, the AI will be able to automatically use the available MCP servers. For example:

- **Time Server**: The AI can query and display the current time, date, or time in specific time zones.
- **Search Server**: The AI can search the internet for information, answering questions about real-time events, news, or data.

Users don't need to specifically instruct the AI to use these tools. It will automatically decide when to use these features based on the conversation content. 