---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 语音识别 (ASR)

语音识别 (ASR, Automatic Speech Recognition) 将用户的语音转换成文字。本项目支持多个语音识别模型的实现。

语音识别相关的配置项，在 `conf.yaml` 中的 `asr_config` 下面。

以下是您可以选择的语音识别选项：


## `sherpa_onnx_asr` (本地 & 项目预设)

:::note
(在 `v0.5.0-alpha.1` 版本的 PR: [Add sherpa-onnx support #50](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/pull/50) 中添加)
:::

[sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) 是一个功能丰富的推理工具，能运行多种语音识别(ASR)模型。

:::info
从 `v1.0.0` 版本开始，本项目默认使用 `sherpa-onnx` 运行 `SenseVoiceSmall` (int8 量化) 模型作为语音识别方案。这是一个开箱即用的配置 - 你无需进行任何额外设置，系统会在首次运行时自动下载模型文件并解压到项目的 `models` 目录下。
:::

### 推荐用户
- 所有用户 (所以是预设)
- 但特别是 mac 用户 (因为没啥选择)。
- 非 N 卡用户。
- 中文用户。
- CPU 推理就很快。
- 配置难度: 不用配置，因为是项目预设

SenseVoiceSmall 模型可能英文一般。

### CUDA 推理

`sherpa-onnx` 支持 CPU 和 CUDA 推理。虽然预设的 `SenseVoiceSmall` 模型在 CPU 上已经表现不错，但如果您有 NVIDIA GPU，可以通过以下步骤启用 CUDA 推理来获得更好的性能：

[官方文档](https://k2-fsa.github.io/sherpa/onnx/python/install.html#method-2-from-pre-compiled-wheels-cpu-cuda)

:::warning
注意: sherpa onnx 似乎只支持 CUDA 11.8，但我没有证据。请参考[官方文档](https://k2-fsa.github.io/sherpa/onnx/python/install.html#method-2-from-pre-compiled-wheels-cpu-cuda)，安装 CUDA 11.8 以及获取更多信息。
:::

1. 首先卸载 CPU 版本的依赖：
```sh
uv remove sherpa-onnx onnxruntime
# 避免通过依赖引入 onnxruntime
uv remove faster-whisper
```

> 注意，示例中 sherpa-onnx 通过预构建 wheel 安装，这意味着您需要安装
> 
> CUDA Toolkit 11.x + CUDNN 8.x for CUDA 11.x （并将 `%SystemDrive%\Program Files\NVIDIA\CUDNN\v8.x\bin` 添加到您的 `PATH`）
>
> > 此处x为您的 cudnn 次版本号，如 `v8.9.7` 版本，此处写 `v8.9`。
> 
> 以链接到正确的 CUDA 环境。
>
> 如果您不希望使用 NVIDIA 官方安装器/手动设置PATH，可以考虑使用 [`pixi`](https://pixi.sh/) 管理一个局部的 conda 环境。
> 这种方式不需要您通过 uv 安装依赖。
>
> ```nushell
> pixi remove --pypi onnxruntime sherpa-onnx
> pixi add --pypi onnxruntime-gpu==1.17.1 pip
> pixi run python -m pip install sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html
> ```

2. 安装 CUDA 版本的 `sherpa-onnx` 和 `onnxruntime-gpu` 依赖：
```sh
# sherpa-onnx 提供的预构建 wheels 和 onnxruntime-gpu==1.17.1 兼容
uv add onnxruntime-gpu==1.17.1 sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html 
```

3. 修改配置文件：
在 `conf.yaml` 中找到 `sherpa_onnx_asr` 部分，将 `provider` 设置为 `cuda`

### 使用其他 sherpa-onnx 模型

如果您想尝试其他语音识别模型：
1. 从 [sherpa-onnx ASR models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/asr-models) 下载所需模型
2. 将模型文件放置在项目的 `models` 目录下
3. 按照 `conf.yaml` 中的说明修改 `sherpa_onnx_asr` 的相关配置

### 使用 Fire Red ASR 模型

[Fire Red ASR](https://github.com/FireRedTeam/FireRedASR) 是一个高质量的中英文语音识别模型，在 sherpa-onnx 中也得到了支持。相比默认的 SenseVoiceSmall 模型，Fire Red ASR 在中英文混合场景下表现更好。

#### 推荐用户
- 需要高质量中英文混合识别的用户
- 对识别准确度要求较高的用户
- 配置难度: 简单

#### 下载模型

首先确保安装了 `huggingface_hub`，以便使用命令行下载模型：

```sh
uv add huggingface_hub
```

使用 huggingface-cli 下载模型：

```sh
uv run hf download csukuangfj/sherpa-onnx-fire-red-asr-large-zh_en-2025-02-16 --local-dir models/sherpa-onnx-fire-red-asr-large-zh_en-2025-02-16
```

#### 配置使用

在 `conf.yaml` 中配置 Fire Red ASR 模型：

```yaml
asr_config:
  asr_model: 'sherpa_onnx_asr'
  
  sherpa_onnx_asr:
    model_type: 'fire_red_asr'
    
    fire_red_asr_encoder: './models/sherpa-onnx-fire-red-asr-large-zh_en-2025-02-16/encoder.int8.onnx'
    fire_red_asr_decoder: './models/sherpa-onnx-fire-red-asr-large-zh_en-2025-02-16/decoder.int8.onnx'
    tokens: './models/sherpa-onnx-fire-red-asr-large-zh_en-2025-02-16/tokens.txt'
    
    num_threads: 4
    provider: 'cpu'  # 可选 'cpu' 或 'cuda'
    use_itn: False
```

:::info
如果您使用 CUDA 推理，建议下载 fp16 版本的模型以获得更好的效果。将上述配置中的 `encoder.int8.onnx` 和 `decoder.int8.onnx` 替换为对应的 fp16 版本文件即可。
:::

## `fun_asr` (本地)

[FunASR](https://github.com/modelscope/FunASR?tab=readme-ov-file) 是 ModelScope 的一个基础端到端语音识别工具包，支持多种 ASR 模型。其中，阿里的 [FunAudioLLM](https://github.com/FunAudioLLM/SenseVoice) 的 SenseVoiceSmall 模型在性能和速度上都表现不错。

:::tip
虽然 FunASR 可以运行 SenseVoiceSmall 模型，但我们更推荐使用项目预设的 `sherpa_onnx_asr`。FunASR 项目存在一定的稳定性问题，可能在某些设备上出现异常。

不过 FunASR 对 GPU 的利用更好，所以对于 N 卡用户可能会更快。
:::

### 推荐用户
- 有 N 卡，希望利用 GPU 推理 SenseVoiceSmall 模型的用户。
- 中文用户。
- CPU 推理就很快。
- 配置难度: 简单

SenseVoiceSmall 可能英文一般。

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
即使模型文件已在本地，启动时仍需要互联网连接。

解决方案：在配置中直接指定模型的本地路径，这样运行时就不需要联网。但需要提前下载好模型文件。详见 [FunASR Issue #1897](https://github.com/modelscope/FunASR/issues/1897)
:::

## `faster_whisper` (本地)
- [官方仓库](https://github.com/SYSTRAN/faster-whisper)

这是一个优化版的 Whisper 推理引擎，可以运行原版 Whisper 和 distill whisper 模型。相比原版 Whisper 提供了更快的推理速度，但是无法自动识别语言。

:::info
Faster Whisper [不支持 mac GPU 推理](https://github.com/SYSTRAN/faster-whisper/issues/911)，只能使用 CPU 运行，性能表现一般。建议在配备 NVIDIA GPU 的设备上使用，可以获得最佳性能。
:::

### 推荐用户
- 有 N 卡，希望利用 GPU 推理 Whisper 模型的用户。
- 非中文用户。Whisper 系列模型多语言支持比较好。
- CPU 推理比较慢，。
- 配置难度: 简单


### 安装与配置

如果您想使用 GPU 加速（仅限 NVIDIA GPU 用户），需要安装以下 NVIDIA 依赖库。详细的安装步骤请参考[快速开始](/docs/quick-start.md)：
- [cuBLAS for CUDA 12](https://developer.nvidia.com/cublas)
- [cuDNN 8 for CUDA 12](https://developer.nvidia.com/cudnn)

**安装 Faster Whisper**
```sh
uv pip install faster-whisper
```

如果您不太在意运行速度，或者拥有性能强劲的 CPU，也可以选择在 `conf.yaml` 配置文件中将 `faster-whisper` 的 `device` 参数设置为 `cpu`。这样可以避免安装 NVIDIA 依赖库的麻烦。

```yaml
# Faster Whisper 配置
faster_whisper:
  model_path: 'large-v3-turbo' # 模型路径，模型名称，或 hf hub 的模型 id
  download_root: 'models/whisper' # 模型下载根目录
  language: 'zh' # 语言，en、zh 或其他。留空表示自动检测。
  device: 'auto' # 设备，cpu、cuda 或 auto。faster-whisper 不支持 mps
  compute_type: 'int8'
```

### 模型选择 (model_path)
`model_path` 可以填入模型名称，模型的本地路径 (如果你提前下载好了)，或是 HuggingFace 上的模型 id (必须是已经转换成 CTranslate2 格式的模型)。

**可以填入的模型名称:**

`tiny`, `tiny.en`, `base`, `base.en`, `small`, `small.en`, `distil-small.en`, `medium`, `medium.en`, `distil-medium.en`, `large-v1`, `large-v2`, `large-v3`, `large`, `distil-large-v2`, `distil-large-v3`, `large-v3-turbo`, `turbo`

distil 系列模型可能只支持英文。

选择的模型会自动从 Hugging Face 上下载到项目目录下 `models/whisper` 文件夹中。

在 4060 上的测试 (感谢 qq 群 Lena 在 [#187](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/issues/187#issuecomment-2814846254), [#188](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/pull/188) 提供的测试结果)

> 使用 22 秒生成音频，走 int8 测试13代i5 和 4060 8GB, CUDA 12.8, cuDNN 9.8:
> - cpu部分是v3-turbo用时5.98秒、small是1.56秒，
> - 显卡是v3-turbo用时1.04秒、small用时0.48秒。
> 
> 总结：
> - 没有 4060 就选 small，因为 medium 和 v3-turbo 差不多大小，small 可能是比如20系30系保证速度的前提下，识别效果最好的。
> - 有4060就选v3-turbo，速度没问题的话精度自然越高越好。
> - 精度参考资料：faster-whisper-small是2.44亿参数，faster-whisper-v3-turbo是8.09亿参数。

在 MacBook Pro m1 pro 上的测试
> 不用试了，很慢。用带 CoreML 加速的 whisper cpp 或 sense voice small 模型都会快很多。

**Hugging Face 模型 id 格式**
```
"username/whisper-large-v3-ct2"
```
注意，faster whisper 需要已经转换成 CTranslate2 格式的模型。

选择的模型会自动从 Hugging Face 上下载到项目目录下 `models/whisper` 文件夹中。



## `whisper_cpp` (本地)
- `whipser_cpp` 在 macOS 上可通过 CoreML 加速，实现较快的推理速度
- 在 CPU 或 NVIDIA GPU 上运行时，性能可能不如 Faster-Whisper
- Mac 用户请参考下方说明配置支持 CoreML 的 WhisperCPP；如需使用 CPU 或 NVIDIA GPU，只需运行 `pip install pywhispercpp` 安装即可

### 推荐用户
- mac 用户，希望利用 GPU 推理 Whisper 系列模型的用户。
- 中文用户。
- CPU 推理比较慢，得用 GPU 才行。
- 配置难度: 配 GPU 加速可能有点难。

SenseVoiceSmall 可能英文一般。

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

## `whisper` (本地)

OpenAI 的原始 Whisper。使用 `uv pip install -U openai-whisper` 安装。推理速度很慢。

### 推荐用户
- 不推荐


## `groq_whisper_asr` (联网，需要 API 密钥，但注册容易，免费额度慷慨)

Groq 的 Whisper 端点，非常准确（支持多语言）且速度快，并且每天都有很多免费使用次数。它已预安装。从 [groq](https://console.groq.com/keys) 获取 API 密钥并将其添加到 `conf.yaml` 中的 `groq_whisper_asr` 设置中。中国大陆及其他的不支持地区，需要代理（可能不支持香港地区）才能使用。

### 推荐用户
- 接受使用联网语音识别的用户
- 多语言用户
- 不做本地运算，速度非常快 (取决你的网速)
- 配置难度: 简单

SenseVoiceSmall 可能英文一般。

## `azure_asr` (联网，需要 API 密钥)

- Azure 语音识别。
- 在 `azure_asr` 选项下配置 API key 和地区

:::warning
`api_key.py` 在 `v0.2.5` 之后已弃用。请在 `conf.yaml` 中设置 API 密钥。
:::

### 推荐用户
- 有 Azure API key 的人 (Azure 账号不太好注册)
- 多语言用户
- 不做本地运算，速度非常快 (取决你的网速)
- 配置难度: 简单
