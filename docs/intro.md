---
sidebar_position: 1
---

# 项目简介

> 常见问题文档：https://docs.qq.com/pdf/DTFZGQXdTUXhIYWRq
>
> 用户调查问卷 (英文)：https://forms.gle/w6Y6PiHTZr1nzbtWA
>
> 用户调查问卷 (中文)：https://wj.qq.com/s2/16150415/f50a/



> :warning: 本项目仍处于早期阶段，目前正在**积极开发中**。

> :warning: 如果你想远程运行服务端并在其他设备上访问 (比如在电脑上运行服务端，在手机上访问)，由于前端的麦克风功能仅能在安全环境下使用（即 https 或 localhost），请参阅 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)，你需要配置反向代理和 https 才能在非本机 (non-localhost) 上正常访问。



## ⭐️ 项目简介

**Open-LLM-VTuber** 是一款**语音交互 AI**，支持**语音打断**，并拥有 **Live2D 形象**，所有功能都可以在你的电脑上本地运行（支持离线模式）。

你可以把它当作你的`虚拟女友`/`男友`/`宠物`/`或者别的`，支持在 `macOS`/`Linux`/`Windows` 上本地运行。同时提供网页前端和 Electron 前端（支持透明背景的桌宠模式！）

长期记忆功能暂时被移除（将很快加回），但聊天记录持久化功能可以让你随时继续之前的对话。

本项目支持广泛的 LLM 后端、文本转语音模型和语音识别模型。你也可以按照[文档](https://open-llm-vtuber.github.io/docs/user-guide/live2d)的指引使用自定义的 Live2D 模型。

本项目的初衷是尝试使用可在 Windows 以外平台离线运行的开源方案复现闭源的 AI 虚拟主播 `neuro-sama`。

| ![](img/i1_app_mode.jpg) | ![](img/i2_pet_vscode.jpg) |
|:---:|:---:|
| ![](img/i3_browser_world_fun.jpg) | ![](img/i4_pet_desktop.jpg) |

### 👀 效果演示
[待完善]


## ✨ 功能和亮点

- 🖥️ **跨平台支持**：完美支持 macOS、Linux 和 Windows。我们支持英伟达和非英伟达 GPU，可以选择在 CPU 上运行或使用云 API 处理资源密集型任务。部分组件在 macOS 上支持 GPU 加速。

- 🔒 **支持离线模式**：使用本地模型完全离线运行 - 无需联网。你的对话只会待在你的设备上，确保隐私安全。

- 🎯 **高级交互功能**：
  - 🎤 语音打断，无需耳机（AI 不会听到自己的声音）
  - 🐱 宠物模式，支持透明背景 - 可以将你的 AI 伙伴拖到屏幕上的任意位置
  - 🗣️ AI 主动说话功能
  - 💾 聊天记录持久化，可以随时继续之前的对话
  - 🌍 音频翻译支持（例如，用中文聊天的同时，AI语音是日文的）

- 🧠 **广泛的模型支持**：
  - 🤖 大语言模型 (LLM)：Ollama、OpenAI（以及任何与 OpenAI 兼容的 API）、Gemini、Claude、Mistral、DeepSeek、智谱、GGUF、LM Studio、vLLM 等
  - 🎵 多种语音识别和 TTS 后端可供选择
  - 🖥️ 好看的网页和桌面客户端

本项目在 `v1.0.0` 版本后进行了代码重构，目前正处于积极开发阶段，未来还有许多令人兴奋的功能即将推出！🚀 你可以看看我们的 [Roadmap](https://github.com/users/t41372/projects/1/views/5)，了解更新计划。

