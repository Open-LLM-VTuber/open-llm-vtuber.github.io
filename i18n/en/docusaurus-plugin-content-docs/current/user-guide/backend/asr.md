--- 
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Speech Recognition (ASR)

Speech Recognition (ASR, Automatic Speech Recognition) converts user speech into text. This project supports multiple speech recognition models.

ASR-related configuration options are under `asr_config` in `conf.yaml`.

Here are the available ASR options:

## `sherpa_onnx_asr` (Local & Project Default)

:::note
(Added in `v0.5.0-alpha.1` PR: [Add sherpa-onnx support #50](https://github.com/t41372/Open-LLM-VTuber/pull/50))
:::

[sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) is a powerful inference toolkit that supports a variety of ASR models.

:::info
Starting from `v1.0.0`, this project uses `sherpa-onnx` with the `SenseVoiceSmall` (int8 quantized) model as the default ASR solution. It's plug-and-play — no setup needed. The system will auto-download and extract the model to the `models` directory on first run.
:::

### Recommended For
- All users (that's why it's the default)
- Especially Mac users (since there aren't many alternatives)
- Non-NVIDIA GPU users
- Chinese speakers
- Fast CPU inference
- Setup difficulty: None — it's the project default

Note: SenseVoiceSmall's English performance may be average.

### CUDA Inference
`sherpa-onnx` supports both CPU and CUDA inference. The default `SenseVoiceSmall` model already runs well on CPU, but if you have an NVIDIA GPU, you can enable CUDA for better performance:

1. First, uninstall the CPU version dependencies:
```sh
uv remove sherpa-onnx onnxruntime
# To avoid onnxruntime being pulled in by dependencies
uv remove faster-whisper
```

> Note: The example uses a prebuilt sherpa-onnx wheel, so you need to install
>
> CUDA Toolkit 11.x + CUDNN 8.x for CUDA 11.x (and add `%SystemDrive%\Program Files\NVIDIA\CUDNN\v8.x\bin` to your `PATH`)
>
> > Here, x is your CUDNN minor version, e.g. for `v8.9.7`, use `v8.9`.
>
> to link to the correct CUDA environment.
>
> If you don't want to use the NVIDIA installer or manually set PATH, consider using [`pixi`](https://pixi.sh/) to manage a local conda environment.
> With this, you don't need to install dependencies via uv.
>
> ```nushell
> pixi remove --pypi onnxruntime sherpa-onnx
> pixi add --pypi onnxruntime-gpu==1.17.1 pip
> pixi run python -m pip install sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html
> ```

2. Install the CUDA version of `sherpa-onnx` and `onnxruntime-gpu`:
```sh
# sherpa-onnx prebuilt wheels are compatible with onnxruntime-gpu==1.17.1
uv add onnxruntime-gpu==1.17.1 sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html 
```

3. Edit your config:
In `conf.yaml`, find the `sherpa_onnx_asr` section and set `provider` to `cuda`.

### Using Other sherpa-onnx Models

If you want to try other ASR models:
1. Download your model from [sherpa-onnx ASR models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/asr-models)
2. Place the model files in the project's `models` directory
3. Update the `sherpa_onnx_asr` config in `conf.yaml` as needed

:::info
If you're on Mac, we recommend Sherpa-onnx. The latest dolphin-small-int8 model (April 2, 2023) is a bit larger than the current default, but is said to be faster, more accurate, and supports more languages. The base-int8 model is just 103MB — both may perform exceptionally well. Mac CPUs are well-optimized, so the default Sherpa-onnx is a solid choice.
:::

## `fun_asr` (Local)

[FunASR](https://github.com/modelscope/FunASR?tab=readme-ov-file) is ModelScope's end-to-end ASR toolkit, supporting various models. Alibaba's [FunAudioLLM](https://github.com/FunAudioLLM/SenseVoice) SenseVoiceSmall model performs well in both speed and accuracy.

:::tip
While FunASR can run the SenseVoiceSmall model, we recommend the default `sherpa_onnx_asr`. FunASR has some stability issues and may behave unexpectedly on some devices.

However, FunASR makes better use of GPUs, so it may be faster for NVIDIA GPU users.
:::

### Recommended For
- NVIDIA GPU users who want to run SenseVoiceSmall on GPU
- Chinese speakers
- Fast CPU inference
- Setup difficulty: Easy

Note: SenseVoiceSmall's English performance may be average.

### Installation

In your project directory, run:
```sh
uv add funasr modelscope huggingface_hub onnxconverter_common torch torchaudio onnx
```

:::info Dependency Issue Solution
If you see this dependency issue:

```sh
help: `llvmlite` (v0.36.0) was included because `open-llm-vtuber` (v1.0.0a1) depends on `funasr` (v1.2.2) which depends on `umap-learn` (v0.5.7)
      which depends on `pynndescent` (v0.5.13) which depends on `llvmlite`
```
Try this instead:

```sh
uv pip install funasr modelscope huggingface_hub torch torchaudio onnx onnxconverter_common
```
:::

:::warning
Even if the model files are local, FunASR still requires an internet connection at startup.

Solution: Specify the local model path in your config to avoid needing internet at runtime. Download the model files in advance. See [FunASR Issue #1897](https://github.com/modelscope/FunASR/issues/1897) for details.
:::

## `faster_whisper` (Local)
- [Official Repo](https://github.com/SYSTRAN/faster-whisper)

This is an optimized Whisper inference engine that can run both original and distilled Whisper models. It's much faster than the original Whisper, but can't auto-detect language.

:::info
Faster Whisper [does NOT support GPU acceleration on Mac](https://github.com/SYSTRAN/faster-whisper/issues/911) — only CPU is available, and performance is mediocre. For best results, use on a machine with an NVIDIA GPU.
:::

### Recommended For
- NVIDIA GPU users who want to run Whisper models on GPU
- Non-Chinese users (Whisper models have strong multilingual support)
- CPU inference is slow
- Setup difficulty: Easy

### Installation & Configuration

If you want GPU acceleration (NVIDIA GPU only), install these NVIDIA libraries. See [Quick Start](/docs/quick-start.md) for details:
- [cuBLAS for CUDA 12](https://developer.nvidia.com/cublas)
- [cuDNN 8 for CUDA 12](https://developer.nvidia.com/cudnn)

If you don't care about speed, or have a powerful CPU, you can set `device: cpu` for `faster-whisper` in `conf.yaml` to skip installing NVIDIA libraries.

```yaml
# Faster Whisper config
faster_whisper:
  model_path: 'large-v3-turbo' # Model path, model name, or HF Hub model id
  download_root: 'models/whisper' # Model download root
  language: 'zh' # Language: en, zh, or others. Leave blank for auto-detect.
  device: 'auto' # Device: cpu, cuda, or auto. faster-whisper does not support mps
  compute_type: 'int8'
```

### Model Selection (model_path)
`model_path` can be a model name, a local path (if pre-downloaded), or a Hugging Face model id (must be CTranslate2 format).

**Available model names:**

`tiny`, `tiny.en`, `base`, `base.en`, `small`, `small.en`, `distil-small.en`, `medium`, `medium.en`, `distil-medium.en`, `large-v1`, `large-v2`, `large-v3`, `large`, `distil-large-v2`, `distil-large-v3`, `large-v3-turbo`, `turbo`

Distil models may only support English.

The selected model will be auto-downloaded from Hugging Face to `models/whisper`.

Test results on RTX 4060 (thanks to Lena from QQ group, see [#187](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/issues/187#issuecomment-2814846254), [#188](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/pull/188)):

> 22s generated audio, int8, 13th-gen i5 and 4060 8GB, CUDA 12.8, cuDNN 9.8:
> - CPU: v3-turbo 5.98s, small 1.56s
> - GPU: v3-turbo 1.04s, small 0.48s
>
> Summary:
> - No 4060? Use `small`. Since `medium` and `v3-turbo` are similar in size, `small` is likely the best for speed and accuracy on 20/30-series GPUs.
> - Have a 4060? Use `v3-turbo` — if speed is fine, higher accuracy is always better.
> - Accuracy reference: faster-whisper-small has 244M params, faster-whisper-v3-turbo has 809M params.

Tested on MacBook Pro M1 Pro:
> Don't bother — it's slow. Whisper.cpp with CoreML or SenseVoiceSmall will be much faster.

**Hugging Face model id format**
```
"username/whisper-large-v3-ct2"
```
Note: faster-whisper requires models already converted to CTranslate2 format.

The selected model will be auto-downloaded to `models/whisper`.

:::warning
SenseVoiceSmall requires an internet check on load, which slows startup. Not recommended.
:::

:::info
If you use int8 models, inference can be faster than float32. bf16 is not supported.
:::

## `whisper_cpp` (Local)
- `whisper_cpp` can use CoreML acceleration on macOS for fast inference
- On CPU or NVIDIA GPU, performance may not match Faster-Whisper
- Mac users: see below for CoreML setup; for CPU/NVIDIA GPU, just run `pip install pywhispercpp`

### Recommended For
- Mac users who want to run Whisper models on GPU
- Chinese speakers
- CPU inference is slow, GPU is needed
- Setup difficulty: GPU acceleration can be tricky

Note: SenseVoiceSmall's English performance may be average.

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
### Recommended For
- Not recommended

## `groq_whisper_asr` (Cloud, API key required, easy signup, generous free tier)

Groq's Whisper endpoint, very accurate (supports multiple languages) and fast, with many free uses per day. It's pre-installed. Get an API key from [groq](https://console.groq.com/keys) and add it to the `groq_whisper_asr` settings in `conf.yaml`. For mainland China and other unsupported regions, a proxy is required (Hong Kong region is not supported) to use.

### Recommended For
- Users okay with cloud-based ASR
- Multilingual users
- No local computation, extremely fast (depends on your network)
- Setup difficulty: Easy

Note: SenseVoiceSmall's English performance may be average.

## `azure_asr` (Cloud, API key required)

- Azure Speech Recognition.
- Configure API key and region under `azure_asr` in your config

:::warning
`api_key.py` was deprecated after `v0.2.5`. Please set API keys in `conf.yaml`.
:::

### Recommended For
- Anyone with an Azure API key (Azure accounts can be hard to register)
- Multilingual users
- No local computation, extremely fast (depends on your network)
- Setup difficulty: Easy