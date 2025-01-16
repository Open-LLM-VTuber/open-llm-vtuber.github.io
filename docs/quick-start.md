---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 快速开始

本指南将帮助你快速部署并运行 Open-LLM-VTuber 项目。

:::info
本指南着重于使用预设选项进行基础部署。如需深入定制，请参考[用户指南](/docs/category/用户指南)的相关章节。
:::

## 环境准备

### 安装 FFmpeg

:::caution
FFmpeg 是必需的依赖项。没有 FFmpeg 可能会导致音频播放错误。
:::

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

```bash
winget install ffmpeg
```

  </TabItem>
  <TabItem value="macos" label="macOS">

```bash
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
```

  </TabItem>
  <TabItem value="unix" label="macOS/Linux">

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

  </TabItem>
</Tabs>


更多 uv 安装方法参考：[Installing uv](https://docs.astral.sh/uv/getting-started/installation/)


## 部署步骤

### 1. 获取项目代码

:::info 开发版说明
目前处于 v1.0.0 开发阶段，需要切换到 `superb-refactoring` 分支。
:::

```bash
# 克隆仓库
git clone https://github.com/t41372/Open-LLM-VTuber

# 进入项目目录
cd Open-LLM-VTuber

# 切换到开发分支
git switch superb-refactoring

# 获取前端代码
git submodule update --init --recursive
```

### 2. 创建虚拟环境

确认 uv 已正确安装:

```bash
uv --version
```

创建环境并安装依赖:

```bash
uv sync
```

### 3. 配置 LLM

我们以 [Ollama](https://github.com/ollama/ollama) 为例进行配置。其他选项请参考[LLM 配置指南](/docs/user-guide/backend/llm)。

#### 安装 Ollama

1. 从 [Ollama 官网](https://ollama.com/) 下载并安装
2. 验证安装:
```bash
ollama --version
```
3. 下载并运行模型（以 Qwen 2.5 7B 为例，你可以进行修改）
```bash
ollama run qwen2.5 
```

#### 修改配置文件

编辑 `conf.yaml`:

1. 将 `basic_memory_agent.llm_provider` 设置为 `ollama_llm`
2. 在 `llm_configs.ollama_llm` 下:
   - `base_url` 本地运行保持默认即可，无需修改。
   - 设置 `model` 为你使用的模型，比如本指南使用的 `qwen2.5:latest`

:::tip 
可以用 `conf.CN.yaml` 的内容覆盖 `conf.yaml` 的内容，获得更适合中文使用的预设配置。
:::

### 4. 启动项目

运行后端服务:

```bash
uv run run_server.py
```

访问 `http://localhost:12393` 打开 Web 界面。

:::tip 桌面应用
如果你更喜欢 Electron 应用 (窗口模式 + 桌充模式)，可以从 [Open-LLM-VTuber-Web Releases](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) 下载对应平台 Electron 客户端，可以在后端服务运行的前提下直接使用。
:::

:::info
有关前端的更多信息，请参考 [前端指南](./user-guide/frontend/)
:::
