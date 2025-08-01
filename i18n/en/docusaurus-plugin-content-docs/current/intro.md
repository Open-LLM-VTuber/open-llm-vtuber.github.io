---
sidebar_position: 1
---

# Project Overview

> [Frequently Asked Questions Document](faq)
>
> [User Survey (English)](https://forms.gle/w6Y6PiHTZr1nzbtWA)
>
> [User Survey (Chinese)](https://wj.qq.com/s2/16150415/f50a/)

:::caution
This project is still in its early stages and is currently **under active development**.
:::

**Open-LLM-VTuber** is a powerful **voice-interactive AI companion** that not only supports **real-time voice conversations**, **visual perception**, and **multi-tool calling**, but also features a lively **Live2D avatar (supporting Cubism 5)**. It can even **control your browser** to perform tasks for you and connect to **live streaming platforms** to interact with audiences! All core functionalities can run completely offline on your computer!

You can treat it as your personal AI companion — whether you want a `virtual girlfriend`, `boyfriend`, `intelligent assistant`, or any other character, it can meet your expectations. The project fully supports `Windows`, `macOS`, and `Linux`, and offers two usage modes: web version and desktop client (with **transparent background desktop pet mode**).

Thanks to the **long-term memory** system based on **Letta** and persistent storage of chat logs, the AI can remember past conversations, allowing you to always continue your previous unfinished conversations without losing any precious interactive moments.

We have integrated a rich variety of LLM, TTS, and ASR solutions, and support calling external tools (like web search, time query, etc.) via the **MCP protocol**. If you want to personalize your AI companion, you can refer to the [Character Customization Guide](user-guide/live2d) to customize your AI companion's appearance and persona.

The reason it's called `Open-LLM-Vtuber` instead of `Open-LLM-Companion` or `Open-LLM-Waifu` is because the project's initial development goal was to use open-source solutions that can run offline on platforms other than Windows to recreate the closed-source AI Vtuber `neuro-sama`.

This project is currently in active development, with many exciting features coming soon! 🚀 Check out our [Roadmap](https://github.com/users/t41372/projects/1/views/5) to learn about update plans.

## 👀 Demo

<div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
  <img src={require('./img/i1.jpg').default} style={{width: '410px'}} />
  <img src={require('./img/i2.jpg').default} style={{width: '410px'}} />
  <img src={require('./img/i3.jpg').default} style={{width: '410px'}} />
  <img src={require('./img/i4.jpg').default} style={{width: '410px'}} />
</div>

## ✨ Features and Highlights

- 🖥️ **Cross-platform support**: Perfect compatibility with macOS, Linux, and Windows. We support NVIDIA and non-NVIDIA GPUs, with options to run on CPU or use cloud APIs for resource-intensive tasks. Some components support GPU acceleration on macOS.

- 🔒 **Offline mode support**: Run completely offline using local models - no internet required. Your conversations stay on your device, ensuring privacy and security.

- 💻 **Attractive and powerful web and desktop clients**: Offers both web version and desktop client usage modes, supporting rich interactive features and personalization settings. The desktop client can switch freely between window mode and desktop pet mode, allowing the AI companion to be by your side at all times.

- 🎯 **Advanced interaction features**:
  - 👁️ **Visual perception**: Supports camera, screen recording and screenshots, allowing your AI companion to see you and your screen.
  - 🛠️ **Tool Calling (MCP Support)**: AI can call external tools supporting the MCP protocol (like search, time query) to complete tasks, with real-time status display on the frontend.
  - 🌐 **Browser Control**: AI can operate the browser to perform tasks, with real-time browser view available on the frontend.
  - 🔴 **Live Streaming Integration**: Built-in BiliBili live streaming client, can receive comments and interact with the audience. Flexible interface implementation allows connection to other platforms or custom comment handling logic.
  - 🧠 **Long-term Memory**: Implemented based on Letta, allowing the AI to remember past conversations.
  - 🎤 **Voice interruption**: Interrupt AI speech without headphones (AI won't hear its own voice).
  - 👥 **Group chat**: Supports multiple AI characters participating in conversation interactions simultaneously.
  - 👆 **Live2D Interaction (Cubism 5)**: Supports the latest Cubism 5 models, interact with your AI companion through clicks, with expressions controllable from the backend.
  - 🐱 **Pet mode**: Supports transparent background, global top-most, and mouse click-through - drag your AI companion anywhere on the screen.
  - 🗣️ **AI proactive speaking**: AI can initiate conversations based on settings.
  - 🤔 **Display AI's inner thoughts**: See AI's expressions, thoughts, and actions without them being spoken.
  - 💾 **Chat log persistence**: Switch to previous conversations anytime.
  - 🌍 **TTS translation support**: e.g., chat in Chinese while AI uses Japanese voice.

- 🧠 **Extensive model support**:
  - 🤖 **Large Language Models (LLM)**: Ollama, OpenAI (and any OpenAI-compatible API), Gemini, Claude, Mistral, DeepSeek, Zhipu AI, GGUF, LM Studio, vLLM, etc.
  - 🎙️ **Automatic Speech Recognition (ASR)**: sherpa-onnx, FunASR, Faster-Whisper, Whisper.cpp, Whisper, Groq Whisper, Azure ASR, etc.
  - 🔊 **Text-to-Speech (TTS)**: sherpa-onnx, pyttsx3, MeloTTS, Coqui-TTS, GPTSoVITS, Bark, CosyVoice, Edge TTS, Fish Audio, Azure TTS, OpenAI TTS (and compatible APIs), SparkTTS,SiliconFlowTTS,etc.

- 🔧 **Highly customizable**:
  - ⚙️ **Simple module configuration**: Switch various functional modules through simple configuration file modifications, without delving into the code.
  - 🎨 **Character customization**: Import custom Live2D models to give your AI companion a unique appearance. Shape your AI companion's persona by modifying the Prompt. Perform voice cloning to give your AI companion the voice you desire.
  - 🧩 **Flexible Agent implementation**: Inherit and implement the Agent interface to integrate any Agent architecture, such as HumeAI EVI, OpenAI Her, Mem0, etc.
  - 🔌 **Good extensibility**: Modular design allows you to easily add your own LLM, ASR, TTS, MCP tools, and other module implementations, extending new features at any time.

## 👥 User Reviews
> Thanks to the developer for open-sourcing and sharing the girlfriend for everyone to use
>
> This girlfriend has been used over 100,000 times
