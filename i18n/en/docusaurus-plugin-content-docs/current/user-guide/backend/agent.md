---
sidebar_position: 6
---

# Agent

An Agent is an LLM system that includes memory, tools, and personality. The default option in the current version is `basic_memory_agent`.

Agent-related settings are under `agent_config` in `conf.yaml`. You can modify the agent you're conversing with by changing the `conversation_agent_choice`.

Currently, this project implements the following agents:
- Basic Memory Agent
- HumeAI Agent (EVI)

## Basic Memory Agent
Basic Memory Agent is the project's default, featuring short-term memory, conversation record storage/switching, and other capabilities.

```yaml
basic_memory_agent:
  # Basic AI agent, nothing special.
  # Choose an LLM provider from llm_config
  # and set the required parameters in the corresponding field
  # For example:
  # "openai_compatible_llm", "llama_cpp_llm", "claude_llm", "ollama_llm"
  # "openai_llm", "gemini_llm", "zhipu_llm", "deepseek_llm", "groq_llm"
  llm_provider: "openai_compatible_llm" # LLM solution used
  # Whether to generate audio immediately upon encountering a comma in the first response to reduce initial delay (default: True)
  faster_first_response: True
```

You can switch between different large language model backends by modifying `llm_provider`. The specific configuration items for each large language model (such as model selection, API Key, etc.) are located under the `llm_configs` configuration block.

For detailed configuration instructions for each large language model, please refer to [Large Language Model Configuration](/docs/user-guide/backend/llm.md).

## HumeAI Agent (EVI)

### Introduction

Hume AI's EVI (Empathic Voice Interface) is the world's first voice AI interface with emotional intelligence.

It can measure subtle changes in speech and respond through an empathic large language model (eLLM), which guides language and speech generation. Trained on millions of human interactions, it combines language modeling and text-to-speech with better emotional intelligence (EQ), prosody, turn-end detection, interruptibility, and alignment.

New users get $20 of free credit without needing to bind a card. Registration and API access **require a proxy in mainland China**.

- [Hume AI Official Website](https://www.hume.ai/)
- [Hume AI Developer Documentation](https://dev.hume.ai/intro)

:::note
To ensure system architecture consistency and compatibility, when using EVI, ASR is still required to transcribe speech to text before processing. This choice allows EVI to seamlessly integrate into the existing `conversation_chain` process, but it also means that EVI's unique audio emotion analysis capabilities cannot be fully utilized.

We plan to implement a new architecture in the future to fully support APIs like EVI that have real-time interaction features such as interruption detection, ASR, TTS, and camera support. Contributions from developers are welcome.
:::

:::info EVI Memory Management
EVI's conversation memory is stored on its server side, meaning it cannot access chat histories of other Agents and can only manage and switch its own conversation history.
:::

### Configuration Instructions

Configure HumeAI Agent in `conf.yaml`:

```yaml
agent_config:
  conversation_agent_choice: "hume_ai_agent"
  
  agent_settings:
    hume_ai_agent:
      api_key: "your_api_key"        # Hume AI API key
      config_id: "your_config_id"    # Optional, used to specify a particular Hume AI configuration.
      host: "api.hume.ai"            # API address provided by HumeAI, no need to modify.
      idle_timeout: 15               # Automatically disconnect from HumeAI after being idle for this many seconds.
```

You can obtain the `api_key` from the [API keys page](https://platform.hume.ai/settings/keys).

For detailed explanations about `config_id` and other configurations, please refer to [Configuring EVI](https://dev.hume.ai/docs/empathic-voice-interface-evi/configuration).

:::info
The LLM selection and Prompt for EVI need to be set in the configuration corresponding to `config_id`. The Prompt set in `persona_prompt` is not effective for EVI.
:::

:::warning
Since EVI continues to charge when the WebSocket is idle, it is recommended not to set `idle_timeout` too large. However, also note that if `idle_timeout` is set too small, it will cause frequent disconnections and reconnections, thereby increasing response latency. Therefore, set this parameter reasonably based on actual usage.
:::

### Frequently Asked Questions

[Empathic Voice Interface FAQ](https://dev.hume.ai/docs/empathic-voice-interface-evi/faq)

## ~~Mem0 Agent (Experimental)~~ Temporarily removed

### Introduction

Mem0 is an experimental long-term memory solution. Although it's still under development and may not be very suitable for this project's use case, we keep its code for reference.

#### Advantages
- Simpler configuration compared to MemGPT
- Faster processing than MemGPT (but still consumes a significant amount of LLM tokens)

#### Limitations
- Can only remember user preferences and ideas, unable to remember LLM's response content
- Unstable triggering mechanism for memory storage

## Letta Agent

### Introduction

[Letta](https://github.com/letta-ai/letta) is a stateful AI system that evolves and learns over time, maintaining consistency in memory and behavior, overcoming the limitations of traditional LLMs. The Letta platform integrates a visual development environment (ADE), production API, and complex server runtime, supporting the creation and deployment of stateful agents.

Simply put, it allows large models to have long-term memory and autonomously manage their memory.

You can also view the visual memory repository, which roughly includes:
- `Core Memory`: Such as role settings, user identity information, etc.
- `Archival Memory`: Other information

To use Letta for implementing long-term memory in this project, follow these steps:
1. Install, configure, and run Letta
2. Create and configure an Agent in Letta
3. Fill in the Agent ID in our project configuration file

For Windows and macOS users, you can currently try the beta version of [Letta Desktop](https://docs.letta.com/install). In addition to that, Letta can be deployed using Docker, or you can set up the environment from scratch.

Since the specific operations for the above steps may change, please refer to Letta's official documentation for the first two steps.

- [Here is Letta's Github page](https://github.com/letta-ai/letta)
- [Here is Letta's official documentation](https://docs.letta.com/)


### Configuration File
To use it, replace `conversation_agent_choice` with `letta_agent` in `agent_config`.

Also, modify the following content:
```yaml
letta_agent:
        host: 'localhost' # Host address
        port: 8283 # Port number
        id: xxx # ID number of the Agent running on Letta Server
        faster_first_response: True
        # Sentence segmentation method: 'regex' or 'pysbd'
        segment_method: 'pysbd'
```

:::info
When you set to use letta_agent in the config, the configuration for llm in conf.yaml will become invalid. The large model used ultimately depends on the model running on the Letta Server.
:::

:::warning
When Letta is enabled, sending multimodal information such as images is not supported temporarily.
:::

