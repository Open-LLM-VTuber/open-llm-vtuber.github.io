---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 快速开始

本指南将帮助你快速部署并运行 Open-LLM-VTuber 项目。

本指南部署的配置为 Ollama + sherpa-onnx-asr (SenseVoiceSmall) + edge_tts。如需深入定制，请参考[用户指南](/docs/user-guide)的相关章节。

:::info
如果用 OpenAI Compatible 代替 Ollama，用 groq_whisper_asr 代替 sherpa-onnx-asr (SenseVoiceSmall)，那么只需配置 API Key 即可使用，无需下载模型文件，也可以跳过对本地 GPU 的配置。
:::

:::warning
本项目只推荐使用 **Chrome 浏览器**。已知 Edge、Safari 等浏览器都存在不同的问题，比如模型表情无法使用。
:::

:::danger 关于代理
如果你位于中国大陆，建议你开启代理后再部署和使用本项目，确保能顺利下载所有资源。

如果你遇到开启代理后本地服务 (ollama、deeplx、gptsovits) 无法访问，但关闭代理后就能访问的问题。请你确保你的代理绕过本地地址 (localhost)，或者在所有资源下载完毕后关闭代理再运行本项目。更多信息参考 [设置代理绕过
](https://www.clashverge.dev/guide/bypass.html)。

Groq Whisper API、OpenAI API 等国外大模型/推理平台 API 一般无法使用香港地区的代理。
:::

:::tip 关于桌面应用
如果你更喜欢 Electron 应用 (窗口模式 + 桌宠模式)，可以从 [Open-LLM-VTuber-Web Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) 下载对应平台 Electron 客户端，可以在后端服务运行的前提下直接使用。但你有可能会遇到因为没有签名验证而导致的**安全警告**，具体情况和解决方案请查看 [模式介绍](./user-guide/frontend/mode.md)

有关前端的更多信息，请参考 [前端指南](./user-guide/frontend/)
:::

## 环境准备

### 安装 Git

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

```bash
# 在命令行中运行
winget install Git.Git
```

或者从 [Git 官网](https://git-scm.com/downloads/win) 下载安装包进行安装。

  </TabItem>
  <TabItem value="macos" label="macOS">

```bash
# 如果没有安装 Homebrew，请先运行这个命令进行安装，或者参考 https://brew.sh/zh-cn/ 进行安装
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 安装 Git
brew install git
```

  </TabItem>
  <TabItem value="linux" label="Linux">

```bash
# Ubuntu/Debian
sudo apt install git

# CentOS/RHEL
sudo dnf install git
```

  </TabItem>
</Tabs>

### 安装 FFmpeg

:::caution
FFmpeg 是必需的依赖项。没有 FFmpeg 会导致找不到音频文件的错误。
:::

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

```bash
# 在命令行中运行
winget install ffmpeg
```

  </TabItem>
  <TabItem value="macos" label="macOS">

```bash
# 如果没有安装 Homebrew，请先运行这个命令进行安装，或者参考 https://brew.sh/zh-cn/ 进行安装
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 安装 ffmpeg
brew install ffmpeg
```

  </TabItem>
  <TabItem value="linux" label="Linux">

```bash
# Ubuntu/Debian
sudo apt install ffmpeg

# CentOS/RHEL
sudo dnf install ffmpeg
```

  </TabItem>
</Tabs>

### NVIDIA GPU 支持

如果你有 NVIDIA 显卡并希望使用 GPU 运行本地模型，你需要:

1. 安装 NVIDIA 显卡驱动
2. 安装 CUDA Toolkit (推荐 11.8 或更高版本)
3. 安装对应版本的 cuDNN

#### Windows 安装步骤:

:::note
以下路径仅供参考，需要根据版本和实际安装路径进行修改。
:::

1. **检查显卡驱动版本**
   - 右键点击桌面，选择"NVIDIA 控制面板"
   - 帮助 -> 系统信息 -> 组件，查看驱动程序版本
   - 或访问 [NVIDIA 驱动下载页面](https://www.nvidia.cn/drivers/lookup/) 下载最新驱动

2. **安装 CUDA Toolkit**
   - 访问 [CUDA 版本对应关系](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html) 查看驱动版本支持的 CUDA 版本
   - 访问 [CUDA Toolkit 下载页面](https://developer.nvidia.com/cuda-toolkit-archive) 下载对应版本
   - 安装完成后将以下路径添加到系统环境变量 PATH 中:
     ```
     C:\NVIDIA GPU Computing Toolkit\CUDA\v<版本号>\bin
     C:\NVIDIA GPU Computing Toolkit\CUDA\v<版本号>\lib\x64
     ```

3. **安装 cuDNN**
   - 访问 [cuDNN 下载页面](https://developer.nvidia.com/cudnn)（需要注册 NVIDIA 账号）
   - 下载与 CUDA 版本匹配的 cuDNN
   - 解压后将文件复制到 CUDA 安装目录:
     - 将 `cuda/bin` 中的文件复制到 `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v<版本号>\bin`
     - 将 `cuda/include` 中的文件复制到 `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v<版本号>\include`
     - 将 `cuda/lib/x64` 中的文件复制到 `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v<版本号>\lib\x64`

#### 验证安装:

1. 检查驱动安装:
```bash
nvidia-smi
```

2. 检查 CUDA 安装:
```bash
nvcc --version
```

### Python 环境管理

从 v1.0.0 版本开始，我们推荐使用 [uv](https://docs.astral.sh/uv/) 作为依赖管理工具。

:::note
如果你更希望使用 conda 或 venv，也可以使用这些工具。项目完全兼容标准的 pip 安装方式。
:::

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

```powershell
# 方法 1: PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# 方法 2: winget
winget install --id=astral-sh.uv -e

# 重要：如果使用 winget，安装完成后需要重启命令行或重新加载配置文件
```

  </TabItem>
  <TabItem value="unix" label="macOS/Linux">

```bash
# 方法 1: curl
curl -LsSf https://astral.sh/uv/install.sh | sh
# 或者运行 wget -qO- https://astral.sh/uv/install.sh | sh 如果你的电脑上不存在 curl

# 方法 2: homebrew (如果已安装)
brew install uv

# 重要：如果使用 curl 或 wget ，安装完成后需要重启命令行或重新加载配置文件
```

  </TabItem>
</Tabs>

更多 uv 安装方法参考：[Installing uv](https://docs.astral.sh/uv/getting-started/installation/)

## 手动部署指南

### 1. 获取项目代码

:::info 开发版说明
自 `v1.0.0` 开始，前端代码已被拆分到独立仓库中。我们建立了完整的构建流程，并通过 git submodule 将前端代码链接到主仓库的 `frontend` 目录下。
:::

```bash
# 克隆仓库 / 下载最新的 Github Release
git clone https://github.com/t41372/Open-LLM-VTuber

# 进入项目目录
cd Open-LLM-VTuber

# 由于 git submodule 链接的内容不会自动同步到本地目录，我们需要手动获取前端代码。
git submodule update --init --recursive
```

### 2. 安装项目依赖

:::info
> :warning: 如果你不在中国大陆境内，没有必要使用镜像源。

内地用户可以配置 Python 与 pip 的镜像源，提高下载速度。此处我们配置阿里镜像。

<details>
  请在项目目录下的 `pyproject.toml` 文件底部添加下面内容。
  ```toml
  [[tool.uv.index]]
  url = "https://mirrors.aliyun.com/pypi/simple"
  default = true
  ```
  一些其他镜像源 (修改上面的 url 部分)
  - 腾讯镜像: https://mirrors.cloud.tencent.com/pypi/simple/
  - 中科大镜像: https://pypi.mirrors.ustc.edu.cn/simple
  - 清华镜像(安装我们项目好像有点问题): https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple 
  - 华为镜像: https://repo.huaweicloud.com/repository/pypi/simple
  - 百度镜像: https://mirror.baidu.com/pypi/simple

  有些镜像源有时候可能会不稳定，如果出现问题，可以换一个镜像源试试。
  使用镜像源的时候不要打开代理。
</details>
:::

确认 uv 已正确安装:

```bash
uv --version
```

创建环境并安装依赖:

```bash
# 确保你在项目根目录下运行这个命令
uv sync
# 这个命令将创建一个 `.venv` 虚拟环境，
```

### 3. 配置 LLM

我们以 [Ollama](https://github.com/ollama/ollama) 为例进行配置。其他选项请参考[LLM 配置指南](/docs/user-guide/backend/llm)。

:::info 其他选项
如果你不想使用 Ollama / 在 Ollama 的配置上遇到了难以解决的问题，本项目也支持：
- OpenAI 兼容 API
- OpenAI 官方 API
- Claude
- Gemini
- Mistral
- 智谱
- DeepSeek
- LM Studio（类似 Ollama，使用更简单）
- vLLM（性能更好，配置较复杂）
- llama.cpp（直接运行 .gguf 格式模型）
- 以及更多 (大部分的 LLM 推理后端和API都支持 OpenAI 格式，可以直接接入本项目)

更多信息请参考[LLM 配置指南](/docs/user-guide/backend/llm)。
:::

#### 安装 Ollama

1. 从 [Ollama 官网](https://ollama.com/) 下载并安装
2. 验证安装:
```bash
ollama --version
```

3. 下载并运行模型（以 `qwen2.5:latest` 为例）：
```bash
ollama run qwen2.5:latest
# 运行成功后，你就可以直接跟 qwen2.5:latest 对话了
# 可以先退出聊天界面 (Ctrl/Command + D)，但一定不要关闭命令行
```

4. 查看已安装的模型：
```bash
ollama list
# NAME                ID              SIZE      MODIFIED
# qwen2.5:latest      845dbda0ea48    4.7 GB    2 minutes ago
```

:::tip
寻找模型名时，请使用 `ollama list` 命令，查看 ollama 中已下载的模型，并将模型名称直接复制粘贴到 `model` 选项下，避免模型名打错，全形冒号，空格之类的问题。
:::

:::caution
选择模型时，请考虑你的显存容量与GPU算力。如果模型文件大小大于显存容量，模型会被迫使用 CPU 运算，速度极慢。另外，模型参数量越小，对话延迟越小。如果你希望降低对话延迟，请选择一个参数量较低的模型。
:::

#### 修改配置文件

:::tip 
可以用 `conf.CN.yaml` 的内容覆盖 `conf.yaml` 的内容，获得更适合中文使用的预设配置。
:::

编辑 `conf.yaml`：

1. 将 `basic_memory_agent` 下的 `llm_provider` 设置为 `ollama_llm`
2. 调整 `llm_configs` 选项下的 `ollama_llm` 下的设置:
   - `base_url` 本地运行保持默认即可，无需修改。
   - 设置 `model` 为你使用的模型，比如本指南使用的 `qwen2.5:latest`。
   ```yaml
   ollama_llm:
     base_url: http://localhost:11434  # 本地运行保持默认
     model: qwen2.5:latest            # ollama list 得到的模型名称
     temperature: 0.7                 # 控制回答随机性，越高越随机 (0~1)
   ```

关于配置文件的详细说明，可以参考 [用户指南/配置文件](/docs/user-guide/backend/config.md)。

### 4. 配置其他模块

本项目 `conf.yaml` 默认配置中使用了 sherpa-onnx-asr (SenseVoiceSmall) 和 edgeTTS，并默认关闭翻译功能，你可以不用进行修改。

或者你可以参考 [ASR 配置指南](./user-guide/backend/asr.md)、[TTS 配置指南](./user-guide/backend/tts.md) 和 [Translator 配置指南](./user-guide/backend/translate.md) 进行修改。

### 5. 启动项目

运行后端服务:

```bash
uv run run_server.py
# 第一次运行可能会下载一些模型，导致等待时间较久。
```

运行成功后，访问 `http://localhost:12393` 打开 Web 界面。


## 深入阅读

### 桌宠模式，桌面模式与 Web 模式
![](user-guide/frontend/img/mode/pet.jpg)

桌宠模式介绍与使用，参考 [前端/模式介绍](user-guide/frontend/mode)


### 修改 Live2D 模型
参考 [Live2D指南](user-guide/live2d)


### 社区，讨论，交流
参考 [参与讨论](community/contact)



## 常见问题

常见问题请参考 [常见问题](faq/)

### 如果遇到 `Error calling the chat endpoint...` 错误，请检查：

- http://localhost:11434/ 是否能正常访问，如果不能，可能是因为 `ollama run` 没有运行成功，或者运行成功后命令行被关闭了。

- 报错中提示`Model not found, try pulling it...`，请使用 `ollama list` 查看已安装的模型名称，确保配置文件中的模型名称与列表中的完全一致。

- 如果你的代理软件没有绕过本地地址，会导致 Ollama 无法连接。尝试临时关闭代理，或参考前文设置代理绕过本地地址。
