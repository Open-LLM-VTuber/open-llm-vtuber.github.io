---
sidebar_position: 1
---

# MCP Basic Tutorial

## 📄 Introduction

> MCP (Model Context Protocol) is an open protocol designed to standardize how applications provide context information to large language models (LLMs). It allows LLMs to interact with external tools and services, such as search engines, calendars, or controlling other applications.
>
> MCP can be viewed as the USB-C interface for the AI application domain: just as USB-C provides a unified standard for devices to connect to various peripherals and accessories, MCP provides a standardized approach for AI models to connect to different data sources and tools.
>
> In Open-LLM-VTuber, integrating MCP enables AI characters to utilize external tools to complete a wider range of tasks, such as querying real-time information (weather, news), controlling smart home devices (if configured with the appropriate server), etc., greatly expanding the AI's capability boundaries.
>
> Source: [MCP Official Documentation](https://modelcontextprotocol.io/)

## 🔧 Configuring MCP Servers (`mcp_servers.json`)

To enable Open-LLM-VTuber to launch and manage MCP tool servers, you first need to define these servers in the `mcp_servers.json` file in the project's root directory.

This file contains an `mcp_servers` object, where each key-value pair represents the configuration of an MCP server.

**Configuration Structure:**

Each server configuration needs a unique name (as the key) and includes the following information:

- `command`: The command used to start the server (e.g., `node`, `uv`, `python`, `npx`, `uvx`, etc.).
- `args`: A list containing the parameters passed to the `command`. This typically includes the path to the server script, executable name, or package name.
- `env` (optional): An object containing required environment variables and their values. If the server needs API keys or other configurations, they can be set here.

**Example (`mcp_servers.json`):**

```json
{
  "mcp_servers": {
    // Built-in server configuration examples (usually no need to add manually)
    "time": {
      "command": "uvx",
      "args": ["mcp-server-time", "--local-timezone=Asia/Shanghai"]
    },
    "ddg-search": {
      "command": "uvx",
      "args": ["duckduckgo-mcp-server"]
    },

    // Custom server examples
    "stagehand": {
      "command": "node",
      "args": [
        "mcp-server-browserbase/stagehand/dist/index.js" // Script path
      ],
      "env": {
        "BROWSERBASE_API_KEY": "YOUR_API_KEY",
        "BROWSERBASE_PROJECT_ID": "YOUR_PROJECT_ID",
        // ... Other environment variables
      }
    },
    "my_custom_tool": {
        "command": "python",
        "args": ["path/to/your/custom_tool_server.py", "--port", "9001"],
        "env": {
            "CUSTOM_API_TOKEN": "your_secret_token"
        }
    }
    // ... Other server configurations ...
  }
}
```

**Notes:**

- Make sure to provide a unique name (key) for each server.
- Paths in `args` can be relative to the project root directory or absolute paths.
- For servers launched with `uvx` or `npx`, the package name is typically specified directly in `args`.

## ✨ Enabling MCP Features and Specifying Servers (`conf.yaml`)

Just defining servers in `mcp_servers.json` is not enough. You also need to enable MCP functionality for specific AI Agents (currently only `basic_memory_agent` is supported) in the `conf.yaml` file, and explicitly specify which defined servers that Agent can use.

**Steps:**

1. **Locate Configuration**: Open the `conf.yaml` file and find the `character_config` -> `agent_config` -> `agent_settings` -> `basic_memory_agent` section for the character you want to configure.
2. **Enable MCP**: Set `use_mcpp` to `True`.
3. **Specify Servers**: Add an `mcp_enabled_servers` list, and include the names of the servers that you want the Agent to use, which have been defined in `mcp_servers.json`.

**Example (`conf.yaml`):**

```yaml
character_config:
  # ... Other configurations ...

  agent_config:
    conversation_agent_choice: 'basic_memory_agent' # Or other Agent supporting MCP

    agent_settings:
      basic_memory_agent:
        # ... Other basic_memory_agent configurations ...

        # Set to True to enable MCP functionality
        use_mcpp: True
        # Specify the list of MCP servers this Agent can use
        # These names must be keys defined in mcp_servers.json
        mcp_enabled_servers: ["time", "ddg-search"] # Example: enabling time and search

# If your LLM model doesn't natively support Function Calling / Tools parameters,
# you also need to ensure that MCP prompts are enabled in system_config:
system_config:
  # ... Other configurations ...
  
  tool_prompts:
    # ... Other prompts ...
    
    # Make sure this line exists and is not commented out
    mcp_prompt: 'mcp_prompt' 
```

:::info Recommendation to use models with native tool calling support
Although we provide compatibility through `mcp_prompt` for models that don't support tool calling, we strongly recommend using LLMs that natively support `tools` or `function calling` parameters (such as GPT, Claude, Gemini, DeepSeek, Grok, and certain models in Ollama like Llama 3, Mistral, etc.). Native support provides a more stable and reliable tool calling experience.
:::

**Important:**

- Only servers explicitly specified in the `mcp_enabled_servers` list will be loaded and used by that Agent.
- Each time the application starts or the configuration is switched, the system will connect to the servers listed in `mcp_enabled_servers` in real-time, dynamically retrieve the tool information they provide, and prepare the appropriate calling format for the LLM. The `servers_prompt.json` or `formatted_tools.json` files are no longer needed.

## 🚀 Built-in Servers

Open-LLM-VTuber has pre-configured some commonly used MCP servers in `mcp_servers.json` by default:

- **`time`**: Provides functionality to query current time and date.
- **`ddg-search`**: Based on the DuckDuckGo search engine, enabling AI to search the internet for real-time information.

You can directly use these names in the `mcp_enabled_servers` list in `conf.yaml` to enable them.
