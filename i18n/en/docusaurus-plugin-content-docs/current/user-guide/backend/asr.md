---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Speech Recognition (ASR)

Speech Recognition (ASR, Automatic Speech Recognition) converts user's speech into text. This project supports the implementation of multiple speech recognition models.

Speech recognition related configuration items are under `asr_config` in `conf.yaml`.

Here are the speech recognition options you can choose from:

## `sherpa_onnx_asr` (Local & Project Default)

:::note
(Added in `v0.5.0-alpha.1` version's PR: [Add sherpa-onnx support #50](https://github.com/t41372/Open-LLM-VTuber/pull/50))
:::

[sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) is a feature-rich inference tool that can run various speech recognition (ASR) models.

:::info
Starting from version `v1.0.0`, this project uses `sherpa-onnx` to run the `SenseVoiceSmall` (int8 quantized) model as the default speech recognition solution. This is an out-of-the-box configuration - you don't need to do any additional setup, the system will automatically download the model files and extract them to the project's `models` directory on first run.
:::

### CUDA Inference
`sherpa-onnx` supports both CPU and CUDA inference. Although the default `SenseVoiceSmall` model performs well on CPU, if you have an NVIDIA GPU, you can enable CUDA inference for better performance by following these steps:

[Official doc on CUDA](https://k2-fsa.github.io/sherpa/onnx/python/install.html#method-2-from-pre-compiled-wheels-cpu-cuda)

:::warning
Warning: We suspect that sherpa onnx only support CUDA 11.8, but I'm not sure. Please refer to the [official documentation](https://k2-fsa.github.io/sherpa/onnx/python/install.html#method-2-from-pre-compiled-wheels-cpu-cuda) for CUDA 11.8 installation and more details.
:::

1. First, uninstall the CPU version dependencies:
```sh
uv remove sherpa-onnx onnxruntime
```

1. Install the CUDA version of `sherpa-onnx` and `onnxruntime-gpu` dependencies:
```sh
uv add onnxruntime-gpu sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html 
```

1. Modify the configuration file:
In `conf.yaml`, find the `sherpa_onnx_asr` section and set `provider` to `cuda`

### Using Other sherpa-onnx Models

If you want to try other speech recognition models:
1. Download the desired model from [sherpa-onnx ASR models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/asr-models)
2. Place the model files in the project's `models` directory
3. Modify the relevant configurations for `sherpa_onnx_asr` in `conf.yaml` according to the instructions

## `fun_asr` (Local)

[FunASR](https://github.com/modelscope/FunASR?tab=readme-ov-file) is a basic end-to-end speech recognition toolkit from ModelScope that supports various ASR models. Among them, Alibaba's [FunAudioLLM](https://github.com/FunAudioLLM/SenseVoice) SenseVoiceSmall model performs well in terms of both performance and speed.

:::tip
Although FunASR can run the SenseVoiceSmall model, we recommend using the project's default `sherpa_onnx_asr`. The FunASR project has some stability issues and may encounter anomalies on certain devices.
:::

### Installation

In the project directory, run
```sh
uv add funasr modelscope huggingface_hub onnxconverter_common torch torchaudio onnx
```

:::info Dependency Issue Solution
If you encounter the following dependency issue:

```sh
help: `llvmlite` (v0.36.0) was included because `open-llm-vtuber` (v1.0.0a1) depends on `funasr` (v1.2.2) which depends on `umap-learn` (v0.5.7)
      which depends on `pynndescent` (v0.5.13) which depends on `llvmlite`
```
You can try using the following command instead:

```sh
uv pip install funasr modelscope huggingface_hub torch torchaudio onnx onnxconverter_common
```
:::

:::warning
Even if the model files are already local, an internet connection is still required at startup.

Solution: Directly specify the local path of the model in the configuration, so it doesn't need to connect to the internet when running. But you need to download the model files in advance. See [FunASR Issue #1897](https://github.com/modelscope/FunASR/issues/1897) for details
:::

## `faster_whisper` (Local)

This is an optimized Whisper inference engine that can run original Whisper and distilled Whisper models. It provides faster inference speed compared to the original Whisper but cannot automatically detect language.

:::info
On macOS systems, as it can only run on CPU, the performance is average. It is recommended to use it on devices equipped with NVIDIA GPUs for the best performance.
:::

If you want to use GPU acceleration (NVIDIA GPU users only), you need to install the following NVIDIA dependency libraries. For detailed installation steps, please refer to [Quick Start](/docs/quick-start.md):
- [cuBLAS for CUDA 12](https://developer.nvidia.com/cublas)
- [cuDNN 8 for CUDA 12](https://developer.nvidia.com/cudnn)

If you don't care much about running speed, or if you have a powerful CPU, you can also choose to set the `device` parameter of `faster-whisper` to `cpu` in the `conf.yaml` configuration file. This way, you can avoid the hassle of installing NVIDIA dependency libraries.

## `whisper_cpp` (Local)
- `whipser_cpp` can be accelerated via CoreML on macOS, achieving faster inference speeds
- When running on CPU or NVIDIA GPU, performance may not be as good as Faster-Whisper
- Mac users, please refer to the instructions below to configure WhisperCPP with CoreML support; if you need to use CPU or NVIDIA GPU, just run `pip install pywhispercpp` to install

### Installation

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

### CoreML Configuration
- Method 1: Follow the instructions in the Whisper.cpp repository documentation to convert the Whisper model to CoreML format
- Method 2: Download the pre-converted CoreML model from the [Hugging Face repository](https://huggingface.cochidiwilliams/whisper.cpp-coreml/tree/main). Note: After downloading, you need to unzip the model file, otherwise the program cannot load it and will crash.
- Configuration instructions: When configuring the model in `conf.yaml`, you don't need to include the special prefix in the file name. For example, when the CoreML model file name is `ggml-base-encoder.mlmodelc`, you only need to fill in `base` in the `model_name` parameter of `WhisperCPP`.

## `whisper` (Local)

OpenAI's original Whisper. Install using `uv pip install -U openai-whisper`. Inference speed is very slow.

## `groq_whisper_asr` (API key required)

Groq's Whisper endpoint, very accurate (supports multiple languages) and fast, with many free uses per day. It's pre-installed. Get an API key from [groq](https://console.groq.com/keys) and add it to the `groq_whisper_asr` settings in `conf.yaml`. For mainland China and other unsupported regions, a proxy is required (Hong Kong region is not supported) to use.

## `azure_asr` (API key required)

- Azure Speech Recognition.
- Configure API key and region under the `azure_asr` option

:::warning
`api_key.py` has been deprecated after `v0.2.5`. Please set API keys in `conf.yaml`.
:::