---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 语音识别 (ASR)

语音识别 (ASR, Automatic Speech Recognition) 将用户的语音转换成文字。本项目支持多个语音识别模型的实现。

语音识别相关的配置项，在 `conf.yaml` 中的 `asr_config` 下面。

以下是您可以选择的语音识别选项：


## `sherpa_onnx_asr` (本地 & 项目预设)

:::note
(在 `v0.5.0-alpha.1` 版本的 PR: [Add sherpa-onnx support #50](https://github.com/t41372/Open-LLM-VTuber/pull/50) 中添加)
:::

[sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) 是一个功能丰富的推理工具，能运行多种语音识别(ASR)模型。

:::info
从 `v1.0.0` 版本开始，本项目默认使用 `sherpa-onnx` 运行 `SenseVoiceSmall` (int8 量化) 模型作为语音识别方案。这是一个开箱即用的配置 - 你无需进行任何额外设置，系统会在首次运行时自动下载模型文件并解压到项目的 `models` 目录下。
:::

### CUDA 推理
`sherpa-onnx` 支持 CPU 和 CUDA 推理。虽然预设的 `SenseVoiceSmall` 模型在 CPU 上已经表现不错，但如果您有 NVIDIA GPU，可以通过以下步骤启用 CUDA 推理来获得更好的性能：

1. 首先卸载 CPU 版本的依赖：
```sh
uv remove sherpa-onnx onnxruntime
```

2. 安装 CUDA 版本的 `sherpa-onnx` 和 `onnxruntime-gpu` 依赖：
```sh
uv add onnxruntime-gpu sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html 
```

3. 修改配置文件：
在 `conf.yaml` 中找到 `sherpa_onnx_asr` 部分，将 `provider` 设置为 `cuda`

### 使用其他 sherpa-onnx 模型

如果您想尝试其他语音识别模型：
1. 从 [sherpa-onnx ASR models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/asr-models) 下载所需模型
2. 将模型文件放置在项目的 `models` 目录下
3. 按照 `conf.yaml` 中的说明修改 `sherpa_onnx_asr` 的相关配置

## `fun_asr` (本地)

[FunASR](https://github.com/modelscope/FunASR?tab=readme-ov-file) 是 ModelScope 的一个基础端到端语音识别工具包，支持多种 ASR 模型。其中，阿里巴巴集团 [FunAudioLLM](https://github.com/FunAudioLLM/SenseVoice) 的 SenseVoiceSmall 模型在性能和速度上都表现不错。

:::tip
虽然 FunASR 可以运行 SenseVoiceSmall 模型，但我们更推荐使用项目预设的 `sherpa_onnx_asr`。FunASR 项目存在一定的稳定性问题，可能在某些设备上出现异常。
:::

### 安装

在项目目录下，运行
```sh
uv add funasr modelscope huggingface_hub onnxconverter_common torch torchaudio onnx
```

:::info 依赖问题解决方案
如果遇到以下依赖问题：

```sh
help: `llvmlite` (v0.36.0) was included because `open-llm-vtuber` (v1.0.0a1) depends on `funasr` (v1.2.2) which depends on `umap-learn` (v0.5.7)
      which depends on `pynndescent` (v0.5.13) which depends on `llvmlite`
```
可以尝试使用以下命令替代：

```sh
uv pip install funasr modelscope huggingface_hub torch torchaudio onnx onnxconverter_common
```
:::

:::warning
即使模型文件已在本地，启动时仍需要互联网连接。详见 [FunASR Issue #1897](https://github.com/modelscope/FunASR/issues/1897)

解决方案：在配置中直接指定模型的本地路径，这样运行时就不需要联网。但需要提前下载好模型文件。
:::

## `faster_whisper` (本地)

这是一个优化版的 Whisper 推理引擎，可以运行原版 Whisper 和 distill whisper 模型。相比原版 Whisper 提供了更快的推理速度，但是无法自动识别语言。

:::info
在 macOS 系统上，由于只能使用 CPU 运行，性能表现一般。建议在配备 NVIDIA GPU 的设备上使用，可以获得最佳性能。
:::

如果您想使用 GPU 加速（仅限 NVIDIA GPU 用户），需要安装以下 NVIDIA 依赖库。详细的安装步骤请参考[快速开始](/docs/quick-start.md)：
- [cuBLAS for CUDA 12](https://developer.nvidia.com/cublas)
- [cuDNN 8 for CUDA 12](https://developer.nvidia.com/cudnn)

如果您不太在意运行速度，或者拥有性能强劲的 CPU，也可以选择在 `conf.yaml` 配置文件中将 `faster-whisper` 的 `device` 参数设置为 `cpu`。这样可以避免安装 NVIDIA 依赖库的麻烦。

## `whisper_cpp` (本地)
- `whipser_cpp` 在 macOS 上可通过 CoreML 加速，实现较快的推理速度
- 在 CPU 或 NVIDIA GPU 上运行时，性能可能不如 Faster-Whisper
- Mac 用户请参考下方说明配置支持 CoreML 的 WhisperCPP；如需使用 CPU 或 NVIDIA GPU，只需运行 `pip install pywhispercpp` 安装即可

### 安装

<Tabs>
  <TabItem value="nvidia-gpu" label="NVIDIA GPU">

```bash
GGML_CUDA=1 uv pip install git+https://github.com/absadiki/pywhispercpp
```

  </TabItem>
  <TabItem value="macos" label="macOS">

```bash
WHISPER_COREML=1 uv pip install git+https://github.com/absadiki/pywhispercpp
```

  </TabItem>
  <TabItem value="vulkan" label="Vulkan">

```bash
GGML_VULKAN=1 pip install git+https://github.com/absadiki/pywhispercpp
```

  </TabItem>
</Tabs>

### CoreML 配置
- 方法一：按照 Whisper.cpp 仓库文档说明，将 Whisper 模型转换为coreML 格式
- 方法二：在 [Hugging Face 仓库](https://huggingface.cochidiwilliams/whisper.cpp-coreml/tree/main) 下载已转换好的 coreML 模型。注意：下载后需要解压模型文件，否则程序无法加载并会崩溃。
- 配置说明：在 `conf.yaml` 中配置模型时，无需包含文件名中的特殊前缀。如，当 coreML 模型文件名为 `ggml-base-encoder.mlmodelc` 时，只需在`WhisperCPP` 的 `model_name` 参数中填写 `base` 即可。

## `Whisper` (本地)

OpenAI 的原始 Whisper。使用 `uv pip install -U openai-whisper` 安装。推理速度很慢。


## `GroqWhisperASR` (需要 API 密钥)

Groq 的 Whisper 端点，非常准确（支持多语言）且速度快，并且每天都有很多免费使用次数。它已预安装。从 [groq](https://console.groq.com/keys) 获取 API 密钥并将其添加到 `conf.yaml` 中的 `groq_whisper_asr` 设置中。中国大陆及其他的不支持地区，需要代理（不支持香港地区）才能使用。

## `AzureASR` (需要 API 密钥)

- Azure 语音识别。
- 在 `azure_asr` 选项下配置 API key 和地区

:::warning
`api_key.py` 在 `v0.2.5` 之后已弃用。请在 `conf.yaml` 中设置 API 密钥。
:::
