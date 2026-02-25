---
sidebar_position: 6
---

# 智能体 (Agent)
智能体 (Agent) 是包含记忆，工具，人格的 LLM 系统。当前版本的预设选项是 `basic_memory_agent`。

智能体 (Agent) 相关的设置在 `conf.yaml` 的 `agent_config` 下面，你可以透过修改 `conversation_agent_choice` 来修改与你对话的智能体。

目前，这个项目中有以下的智能体实现:
- Basic Memory Agent 基础记忆智能体
- HumeAI Agent (EVI)

## Basic Memory Agent
Basic Memory Agent 是项目的预设，具有短期记忆，对话记录储存/切换等能力。

```yaml
basic_memory_agent:
  # 基础 AI 代理，没什么特别的。
  # 从 llm_config 中选择一个 llm 提供商
  # 并在相应的字段中设置所需的参数
  # 例如：
  # "openai_compatible_llm", "llama_cpp_llm", "claude_llm", "ollama_llm"
  # "openai_llm", "gemini_llm", "zhipu_llm", "deepseek_llm", "groq_llm"
  llm_provider: "openai_compatible_llm" # 使用的 LLM 方案
  # 是否在第一句回应时遇上逗号就直接生成音频以减少首句延迟（默认：True）
  faster_first_response: True
```

你可以通过修改 `llm_provider` 来切换不同的大语言模型后端。每个大语言模型的具体配置项（如模型选择、API Key 等）都位于 `llm_configs` 配置块下。

如需了解各个大语言模型的详细配置说明，请参考 [大语言模型配置](/docs/user-guide/backend/llm.md)。


## HumeAI Agent (EVI)

### 介绍

Hume AI 的 EVI (Empathic Voice Interface) 是世界上第一个具有情感智能的语音 AI 接口。

它能够测量语音中的细微变化并通过共情大语言模型(eLLM)做出响应，该模型可以指导语言和语音生成。它在数百万人类互动的基础上进行训练，将语言建模和文本转语音与更好的情商(EQ)、韵律、轮次结束检测、可中断性和对齐结合在一起。

新用户有 20 美元的无需绑卡的免费额度，注册与获取 API **在大陆内地需要代理**。

- [Hume AI 官网](https://www.hume.ai/)
- [Hume AI 开发者文档](https://dev.hume.ai/intro)

:::note
为了确保系统架构的一致性和兼容性，在使用 EVI 时仍需配置 ASR 将语音转录为文本后再进行处理。这个选择让 EVI 能够无缝集成到现有的 `conversation_chain` 流程中，但同时也意味着无法充分使用 EVI 独特的音频情绪分析功能。

我们计划在未来实现一个新的架构，以完整支持像 EVI 这样具备打断检测、ASR、TTS、摄像头等实时交互功能的 API。欢迎各位开发者参与贡献。
:::

:::info EVI 记忆管理
EVI 的对话记忆存储在其服务器端，这意味着它无法访问其他 Agent 的聊天历史记录，只能管理和切换其自身的对话历史。
:::


### 配置说明

在 `conf.yaml` 中配置 HumeAI Agent:

```yaml
agent_config:
  conversation_agent_choice: "hume_ai_agent"
  
  agent_settings:
    hume_ai_agent:
      api_key: "your_api_key"        # Hume AI API 密钥，
      config_id: "your_config_id"    # 可选，用于指定特定的 Hume AI 配置。
      host: "api.hume.ai"            # HumeAI 提供的 API 地址，无需修改。
      idle_timeout: 15               # 处于空闲状态多少秒，自动断开与 HumeAI 的链接。
```

你可以在 [API keys page](https://platform.hume.ai/settings/keys) 获取 `api_key`。

关于 `config_id` 和其他配置的详细说明，请参考 [Configuring EVI](https://dev.hume.ai/docs/empathic-voice-interface-evi/configuration)。

:::info
EVI 的 LLM 选择和 Prompt 需要在 `config_id` 对应的配置中进行设置，在 `persona_prompt` 设置的 Prompt 对 EVI 无效。
:::

:::warning
由于 EVI 在 WebSocket 空闲状态下仍会持续计费，建议不要将 `idle_timeout` 设置过大。但同时也要注意，如果 `idle_timeout` 设置过小，会导致频繁断开重连，从而增加响应延迟。因此需要根据实际使用情况，合理设置这个参数。
:::

### 常见问题

[Empathic Voice Interface FAQ](https://dev.hume.ai/docs/empathic-voice-interface-evi/faq)



## ~~Mem0 Agent（实验性）~~ 目前暂时移除

### 简介

Mem0 是一个实验性的长期记忆解决方案。虽然目前仍在开发中，且可能不太适合本项目的使用场景，但我们仍将其代码保留以供参考。

#### 优点
- 相比 MemGPT 配置更简单
- 处理速度比 MemGPT 快（但仍然需要消耗较多的 LLM tokens）

#### 局限性
- 仅能记住用户的偏好和想法，无法记住 LLM 的回复内容
- 记忆存储的触发机制不稳定
- 存在记忆错误的可能
- 需要具备优秀函数调用能力的 LLM，这对于较小的模型来说比较困难

:::warning
由于以上局限性，我们目前不推荐在生产环境中使用 Mem0 智能体。
:::


## Letta Agent

### 简介

[Letta](https://github.com/letta-ai/letta) 是有状态的 AI 系统，能够随着时间推移不断演进和学习，保持记忆和行为的一致性，突破了传统 LLM 的限制。Letta 平台整合了可视化开发环境 (ADE)、生产 API 和复杂的服务器运行时，支持创建和部署有状态代理。

简单理解就是可以让大模型拥有长期记忆，自主管理记忆。

同时也可以查看可视化的记忆库，大概包括：
- `Core Memory`：例如角色的设定，用户的身份信息等
- `Archival Memory`: 其它的信息

**要在本项目中使用 Letta 实现长期记忆，有以下几个步骤**
1. 安装，配置，运行Letta
2. 在Letta 中创建并配置 Agent
3. 将 Agent 的 ID 填入我们项目的配置文件中。

由于上述步骤具体操作可能发生变化，前两步请参考 Letta 官方文档。

- [这里是Letta的Github地址](https://github.com/letta-ai/letta)
- [这里是Letta的官方文档](https://docs.letta.com/)

对于 Windows 和 macOS 用户，目前可以尝试使用测试版本的 [Letta Desktop](https://docs.letta.com/install)。除此之外，Letta可以使用Docker部署，也可以从零自己搭环境运行。


### 配置文件
如需使用，请在`agent_config`下的`conversation_agent_choice`替换为`letta_agent`

同时修改以下内容
```yaml
letta_agent:
        host: 'localhost' #主机地址
        port: 8283 # 端口号
        id: xxx #letta server运行的Agent的id编号
        faster_first_response: True
        # 句子分割方法：'regex' 或 'pysbd'
        segment_method: 'pysbd'
```

:::info
当在config中设置使用`letta_agent`之后，`conf.yaml`中对于`llm`的配置将会失效，最终使用的大模型取决于Letta Server上正在运行的大模型
:::

:::warning
当启用Letta之后，暂时不支持发送图片这种多模态信息。
:::
