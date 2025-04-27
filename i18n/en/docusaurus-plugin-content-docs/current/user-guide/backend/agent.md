---
sidebar_position: 5
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