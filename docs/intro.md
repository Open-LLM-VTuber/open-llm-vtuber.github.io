---
sidebar_position: 1
---

# 项目简介

> [常见问题文档](faq)
>
> [用户调查问卷(英文)](https://forms.gle/w6Y6PiHTZr1nzbtWA)
>
> [用户调查问卷(中文)](https://wj.qq.com/s2/16150415/f50a/)


:::caution
本项目仍处于早期阶段，目前正在**积极开发中**。
:::

**Open-LLM-VTuber** 是一款功能强大的**语音交互 AI 伴侣**，它不仅支持**实时语音对话**、**视觉感知**和**多工具调用**，还配备了生动的 **Live2D 形象 (支持 Cubism 5)**。它甚至可以**控制你的浏览器**为你执行任务，并接入**直播平台**与观众互动！所有核心功能都可以在你的电脑上完全离线运行！

你可以把它当作你的专属 AI 伴侣 —— 无论你想要一个`虚拟女友`、`男友`、`智能助手`还是其他角色，它都能满足你的期待。项目完美支持 `Windows`、`macOS` 和 `Linux` 系统，并提供两种使用方式：网页版和桌面客户端（支持中文界面，并提供**透明背景的桌宠模式**）。

借助基于 **Letta** 的**长期记忆**系统和聊天记录持久化存储，AI 能够记住过去的对话，让你随时都能继续之前未完的对话，不会丢失任何珍贵的互动瞬间。

我们集成了丰富多样的 LLM、TTS、ASR 方案，并支持通过 **MCP 协议**调用外部工具（如网络搜索、时间查询等）。如果你想让 AI 伴侣更有个性，还可以参考 [角色定制指南](user-guide/live2d) 来自定义专属的 AI 伴侣形象和人设。

关于为什么叫 `Open-LLM-Vtuber` 而不是 `Open-LLM-Companion` 或者 `Open-LLM-Waifu`，是因为项目的开发初衷是采用可在 Windows 以外平台离线运行的开源方案，复现闭源的 AI Vtuber `neuro-sama`。

本项目正处于积极开发阶段，未来还有许多令人兴奋的功能即将推出！🚀 查看我们的 [Roadmap](https://github.com/users/t41372/projects/1/views/5)，了解更新计划。


## 👀 效果演示

<div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
  <img src={require('./img/i1.jpg').default} style={{width: '410px'}} />
  <img src={require('./img/i2.jpg').default} style={{width: '410px'}} />
  <img src={require('./img/i3.jpg').default} style={{width: '410px'}} />
  <img src={require('./img/i4.jpg').default} style={{width: '410px'}} />
</div>


## ✨ 功能和亮点

- 🖥️ **跨平台支持**：完美支持 macOS、Linux 和 Windows。我们支持英伟达和非英伟达 GPU，可以选择在 CPU 上运行或使用云 API 处理资源密集型任务。部分组件在 macOS 上支持 GPU 加速。

- 🔒 **支持离线模式**：使用本地模型完全离线运行 - 无需联网。你的对话只会待在你的设备上，确保隐私安全。

- 💻 **好看且功能强大的网页和桌面客户端**：提供网页版和桌面客户端两种使用方式，支持丰富的交互功能和个性化设置，桌面客户端还可以在窗口模式和桌宠模式之间自由切换，让 AI 伴侣随时陪伴在身边

- 🎯 **高级交互功能**：
  - 👁️ **视觉感知**：支持摄像头、屏幕录制和截图，让 AI 伙伴能看到你和你的屏幕。
  - 🛠️ **工具调用 (MCP 支持)**：AI 可以调用支持 MCP 协议的外部工具（如搜索、时间查询）来完成任务，前端实时显示工具调用状态。
  - 🌐 **浏览器控制**：AI 可以操作浏览器执行任务，并支持在前端实时查看浏览器画面。
  - 🔴 **直播对接**：内置 BiliBili 直播客户端，可接收弹幕并与观众互动。也可以灵活实现接口，接入其他直播平台或者制定自己的弹幕处理逻辑。
  - 🧠 **长期记忆**：基于 Letta 实现长期记忆，让 AI 记住过去的对话。
  - 🎤 **语音打断**：无需耳机即可打断 AI 发言（AI 不会听到自己的声音）。
  - 👥 **群组聊天**：支持多个 AI 角色同时参与对话交互。
  - 👆 **Live2D 交互 (Cubism 5)**：支持最新的 Cubism 5 模型，通过点击与 AI 伙伴互动，表情可通过后端控制。
  - 🐱 **桌宠模式**：支持透明背景、全局置顶和鼠标穿透 - 可以将你的 AI 伙伴拖到屏幕上的任意位置
  - 🗣️ **AI 主动说话**：AI 可以根据设定主动发起对话。
  - 🤔 **AI 内心 OS**：AI 的表情、想法和动作可以被看到，但不会被读出来。
  - 💾 **聊天记录持久化**：可以随时切换到以前的对话。
  - 🌍 **TTS 翻译支持**：例如，用中文聊天的同时，AI 使用日语声音。

- 🧠 **广泛的模型支持**：
  - 🤖 **大语言模型 (LLM)**：Ollama、OpenAI（及兼容 API）、Gemini、Claude、Mistral、DeepSeek、智谱、GGUF、LM Studio、vLLM 等。
  - 🎙️ **语音识别 (ASR)**：sherpa-onnx、FunASR、Faster-Whisper、Whisper.cpp、Whisper、Groq Whisper、Azure ASR 等。
  - 🔊 **语音合成 (TTS)**：sherpa-onnx、pyttsx3、MeloTTS、Coqui-TTS、GPTSoVITS、Bark、CosyVoice、Edge TTS、Fish Audio、Azure TTS、OpenAI TTS (及兼容 API)、SparkTTS、SiliconFlowTTS
等。

- 🔧 **高度可定制**：
  - ⚙️ **简单的模块配置**：通过简单的配置文件修改，即可切换各种功能模块，无需深入代码。
  - 🎨 **角色随心定制**：导入自定义 Live2D 模型，让你的 AI 伴侣拥有独特外观。通过修改 Prompt，塑造你 AI 伴侣的人设。进行音色克隆，让你的 AI 伴侣有着你想要的声线。
  - 🧩 **Agent自由实现**：继承并实现 Agent 接口，接入任何架构的 Agent，如 HumeAI EVI、OpenAI Her、Mem0 等。
  - 🔌 **良好的可扩展性**：模块化设计让你能轻松添加自己的 LLM、ASR、TTS、MCP 工具等模块实现，随时扩展新特性。


## 👥 用户评价
> 感谢开发者把女朋友开源分享出来让大家一起使用
>
> 该女友使用次数已达 10w+
