---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 语音识别 (ASR)

语音识别 (ASR, Automatic Speech Recognition) 将用户的语音转换成文字。本项目支持多个语音识别模型的实现。

语音识别相关的配置项，在 `conf.yaml` 中的 `asr_config` 下面。

以下是您可以选择的语音识别选项：

## 本地推理

### `sherpa_onnx_asr` (推荐。项目预设)
> (在 `v0.5.0-alpha.1` 版本的 PR: [Add sherpa-onnx support #50](https://github.com/t41372/Open-LLM-VTuber/pull/50) 中添加)

[sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) 是一个功能丰富的推理工具，能运行多种语音识别(ASR)模型。

`sherpa-onnx` 运行 `SenseVoiceSmall` (int8 量化) 是这个项目`v1.0.0` 版本后的预设配置，你不需要做任何额外的配置。模型会在第一次运行时自动下载并解压到项目目录下的 `models` 目录下。



#### Cuda 推理
`sherpa-onnx` 目前只支持 CPU 与 Cuda 推理。

预设安装的 `sherpa-onnx` 只能使用 CPU 推理。虽然 `SenseVoiceSmall` 模型在CPU上推理，速度就很快了，不过你如果你是用的是 Nvidia GPU，也可以尝试配置 CUDA 推理。

细节可以参考[官方文档](https://k2-fsa.github.io/sherpa/onnx/python/install.html#method-2-from-pre-compiled-wheels-cpu-cuda)


首先，解除安装项目自带的 CPU 版本的 `sherpa-onnx`，顺便把 `onnxruntime` 也换成 gpu 版本
```sh
uv remove sherpa-onnx onnxruntime
```

接着，安装 CUDA 版本的 `sherpa-onnx` 和 `onnxruntime-gpu`
```sh
uv add onnxruntime-gpu sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html 
```


最后，前往 `conf.yaml` 配置文件中，`sherpa_onnx_asr` 配置下，把 `provider` 选项设为 `cuda`。

#### 用 sherpa-onnx 运行其他语音识别模型

- 从 [sherpa-onnx ASR models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/asr-models) 下载您需要的模型 (推荐放在项目目录 `models` 文件夹下)。
- 参考`conf.yaml`中的说明，修改 `sherpa_onnx_asr` 的配置。



### `fun_asr`
[FunASR](https://github.com/modelscope/FunASR?tab=readme-ov-file) 是 ModelScope 的一个基础端到端语音识别工具包，可以运行许多 ASR 模型。来自阿里巴巴集团 [FunAudioLLM](https://github.com/FunAudioLLM/SenseVoice) 的 SenseVoiceSmall 的结果和速度都相当不错。

不过 SenseVoiceSmall 模型的推理，现在推荐使用项目预设的 `sherpa_onnx_asr`。 FunASR 项目并不稳定，在部分电脑上会出现奇怪的问题。

#### 安装
在项目目录下，运行
```sh
uv add funasr modelscope huggingface_hub onnxconverter_common torch torchaudio onnx
```

如果你遇到了这个问题
```text
  help: `llvmlite` (v0.36.0) was included because `open-llm-vtuber` (v1.0.0a1) depends on `funasr` (v1.2.2) which depends on `umap-learn` (v0.5.7)
        which depends on `pynndescent` (v0.5.13) which depends on `llvmlite`
```
可以运行这个命令
```sh
uv pip install funasr modelscope huggingface_hub torch torchaudio onnx onnxconverter_common
```

即使模型在本地可用，启动时也需要互联网连接。请参阅 https://github.com/modelscope/FunASR/issues/1897

他们提供的方案是直接在模型名称的地方写模型的路径，这样在运行时就不需要互联网连接了，但模型文件必须提前下载好。

### faster_whisper` (本地)
能运行 Whisper 和 distill whisper 的推理工具。基本就是Whisper，但速度更快。

在 macOS 上，它仅在 CPU 上运行，速度不是很快。推荐在有 nvidia gpu 的电脑上运行。


对于 Nvidia GPU 用户，要使用 GPU 加速，您需要安装以下 NVIDIA 库。具体指南在[快速开始](/docs/quick-start.md) 中有说明。
- [cuBLAS for CUDA 12](https://developer.nvidia.com/cublas)
- [cuDNN 8 for CUDA 12](https://developer.nvidia.com/cudnn)

或者，如果您不太在意速度，或是你的CPU 非常强劲，可以在 `conf.yaml` 的 `faster-whisper` 选项下把 `device` 设置为 `cpu` 以减少麻烦。

### `whisper_cpp` (本地)
- Whisper cpp python 绑定。它可以通过配置在 coreML 上运行，这使得它在 macOS 上很快。
- 在 CPU 或 Nvidia GPU 上，它可能比 Faster-Whisper 慢
- 如果您使用的是 Mac，请阅读以下说明以设置支持 coreML 的 WhisperCPP。如果您想使用 CPU 或 Nvidia GPU，请运行 `pip install pywhispercpp` 安装该软件包。

#### 安装：

<Tabs>
  <TabItem value="nvidia-gpu" label="Nvidia GPU">

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

coreML:
- 准备适当的 coreML 模型。
  - 您可以根据 Whisper.cpp 仓库的文档将模型转换为 coreml
  - ...或者您可以找到一些 [神奇的 huggingface 仓库](https://huggingface.co/chidiwilliams/whisper.cpp-coreml/tree/main)，它们碰巧有这些转换后的模型。只需记住解压缩它们。如果程序无法加载模型，它将产生分段错误。
  - 您不需要在 `conf.yaml` 中的模型名称中包含那些奇怪的前缀。例如，如果 coreML 模型的名称类似于 `ggml-base-encoder.mlmodelc`，只需将 `base` 放入 `conf.yaml` 中 `WhisperCPP` 设置下的 `model_name` 中。


### `Whisper` (本地)
- OpenAI 的原始 Whisper。使用 `uv pip install -U openai-whisper` 安装
- 最慢的一个。添加它是为了试验看看它是否可以利用 macOS GPU。它不行。


## 联网推理

### `GroqWhisperASR` (在线，需要 API 密钥)

- Groq 的 Whisper 端点。非常快，并且每天都有很多免费使用次数。它已预安装。从 [groq](https://console.groq.com/keys) 获取 API 密钥并将其添加到 `conf.yaml` 中的 `groq_whisper_asr` 设置中。
- 需要 API 密钥和互联网连接。

### `AzureASR` (在线，需要 API 密钥)

- Azure 语音识别。
- 在 `azure_asr` 选项下配置 API key 和地区

:::warning
`api_key.py` 在 `v0.2.5` 之后已弃用。请在 `conf.yaml` 中设置 API 密钥。
:::
