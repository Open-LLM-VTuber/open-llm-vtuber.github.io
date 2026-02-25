---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Speech Recognition (ASR)

Speech Recognition (ASR, Automatic Speech Recognition) converts user speech to text. This project supports multiple speech recognition model implementations.
Speech Recognition (ASR, Automatic Speech Recognition) converts user speech to text. This project supports multiple speech recognition model implementations.

ASR-related configuration items are under `asr_config` in `conf.yaml`.
ASR-related configuration items are under `asr_config` in `conf.yaml`.

Here are the speech recognition options you can choose from:

## `sherpa_onnx_asr` (Local & Project Default)

:::note
(Added in `v0.5.0-alpha.1` PR: [Add sherpa-onnx support #50](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/pull/50))
(Added in `v0.5.0-alpha.1` PR: [Add sherpa-onnx support #50](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/pull/50))
:::

[sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx) is a feature-rich inference tool that can run various speech recognition (ASR) models.

:::info
Starting from version `v1.0.0`, this project uses `sherpa-onnx` to run the `SenseVoiceSmall` (int8 quantized) model as the default speech recognition solution. This is an out-of-the-box configuration - you don't need any additional setup. The system will automatically download and extract model files to the project's `models` directory on first run.
Starting from version `v1.0.0`, this project uses `sherpa-onnx` to run the `SenseVoiceSmall` (int8 quantized) model as the default speech recognition solution. This is an out-of-the-box configuration - you don't need any additional setup. The system will automatically download and extract model files to the project's `models` directory on first run.
:::

### Recommended Users
- All users (hence it's the default)
- Especially Mac users (due to limited options)
- Non-NVIDIA GPU users
- Chinese users
- Fast CPU inference
- Configuration difficulty: No configuration needed as it's the project default

The SenseVoiceSmall model may have average English performance.

### Recommended Users
- All users (hence it's the default)
- Especially Mac users (due to limited options)
- Non-NVIDIA GPU users
- Chinese users
- Fast CPU inference
- Configuration difficulty: No configuration needed as it's the project default

The SenseVoiceSmall model may have average English performance.

### CUDA Inference
`sherpa-onnx` supports both CPU and CUDA inference. While the default `SenseVoiceSmall` model performs well on CPU, if you have an NVIDIA GPU, you can enable CUDA inference for better performance by following these steps:
`sherpa-onnx` supports both CPU and CUDA inference. While the default `SenseVoiceSmall` model performs well on CPU, if you have an NVIDIA GPU, you can enable CUDA inference for better performance by following these steps:

1. First uninstall the CPU version dependencies:
1. First uninstall the CPU version dependencies:
```sh
uv remove sherpa-onnx onnxruntime
# Avoid introducing onnxruntime through dependencies
uv remove faster-whisper
```

> Note that sherpa-onnx is installed via pre-built wheels in the example, which means you need to install
> 
> CUDA Toolkit 11.x + CUDNN 8.x for CUDA 11.x (and add `%SystemDrive%\Program Files\NVIDIA\CUDNN\v8.x\bin` to your `PATH`)
>
> > Where x is your cudnn minor version number, e.g., for version `v8.9.7`, write `v8.9` here.
> 
> to link to the correct CUDA environment.
>
> If you don't want to use the NVIDIA official installer/manually set PATH, consider using [`pixi`](https://pixi.sh/) to manage a local conda environment.
> This approach doesn't require you to install dependencies via uv.
>
> ```nushell
> pixi remove --pypi onnxruntime sherpa-onnx
> pixi add --pypi onnxruntime-gpu==1.17.1 pip
> pixi run python -m pip install sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html
> ```

2. Install CUDA version of `sherpa-onnx` and `onnxruntime-gpu` dependencies:
# Avoid introducing onnxruntime through dependencies
uv remove faster-whisper
```

> Note that sherpa-onnx is installed via pre-built wheels in the example, which means you need to install
> 
> CUDA Toolkit 11.x + CUDNN 8.x for CUDA 11.x (and add `%SystemDrive%\Program Files\NVIDIA\CUDNN\v8.x\bin` to your `PATH`)
>
> > Where x is your cudnn minor version number, e.g., for version `v8.9.7`, write `v8.9` here.
> 
> to link to the correct CUDA environment.
>
> If you don't want to use the NVIDIA official installer/manually set PATH, consider using [`pixi`](https://pixi.sh/) to manage a local conda environment.
> This approach doesn't require you to install dependencies via uv.
>
> ```nushell
> pixi remove --pypi onnxruntime sherpa-onnx
> pixi add --pypi onnxruntime-gpu==1.17.1 pip
> pixi run python -m pip install sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html
> ```

2. Install CUDA version of `sherpa-onnx` and `onnxruntime-gpu` dependencies:
```sh
# sherpa-onnx provided pre-built wheels are compatible with onnxruntime-gpu==1.17.1
uv add onnxruntime-gpu==1.17.1 sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html 
# sherpa-onnx provided pre-built wheels are compatible with onnxruntime-gpu==1.17.1
uv add onnxruntime-gpu==1.17.1 sherpa-onnx==1.10.39+cuda -f https://k2-fsa.github.io/sherpa/onnx/cuda.html 
```

3. Modify configuration file:
3. Modify configuration file:
In `conf.yaml`, find the `sherpa_onnx_asr` section and set `provider` to `cuda`

### Using Other sherpa-onnx Models

If you want to try other speech recognition models:
1. Download the required model from [sherpa-onnx ASR models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/asr-models)
1. Download the required model from [sherpa-onnx ASR models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/asr-models)
2. Place the model files in the project's `models` directory
3. Modify the relevant configuration of `sherpa_onnx_asr` according to the instructions in `conf.yaml`
3. Modify the relevant configuration of `sherpa_onnx_asr` according to the instructions in `conf.yaml`

### Using Fire Red ASR Model

[Fire Red ASR](https://github.com/FireRedTeam/FireRedASR) is a high-quality Chinese-English speech recognition model that is also supported in sherpa-onnx. Compared to the default SenseVoiceSmall model, Fire Red ASR performs better in Chinese-English mixed scenarios.

#### Recommended Users
- Users who need high-quality Chinese-English mixed recognition
- Users with high requirements for recognition accuracy
- Configuration difficulty: Simple

#### Download Model

First, ensure `huggingface_hub` is installed to use the command line for downloading models:

```sh
uv add huggingface_hub
```

Use huggingface-cli to download the model:

```sh
uv run hf download csukuangfj/sherpa-onnx-fire-red-asr-large-zh_en-2025-02-16 --local-dir models/sherpa-onnx-fire-red-asr-large-zh_en-2025-02-16
```

#### Configuration

Configure the Fire Red ASR model in `conf.yaml`:

```yaml
asr_config:
  asr_model: 'sherpa_onnx_asr'
  
  sherpa_onnx_asr:
    model_type: 'fire_red_asr'
    
    fire_red_asr_encoder: './models/sherpa-onnx-fire-red-asr-large-zh_en-2025-02-16/encoder.int8.onnx'
    fire_red_asr_decoder: './models/sherpa-onnx-fire-red-asr-large-zh_en-2025-02-16/decoder.int8.onnx'
    tokens: './models/sherpa-onnx-fire-red-asr-large-zh_en-2025-02-16/tokens.txt'
    
    num_threads: 4
    provider: 'cpu'  # Options: 'cpu' or 'cuda'
    use_itn: False
```

:::info
If you're using CUDA inference, it's recommended to download the fp16 version of the model for better results. Replace `encoder.int8.onnx` and `decoder.int8.onnx` with their fp16 counterparts in the configuration above.
:::

## `fun_asr` (Local)

[FunASR](https://github.com/modelscope/FunASR?tab=readme-ov-file) is a fundamental end-to-end speech recognition toolkit from ModelScope that supports various ASR models. Among them, Alibaba's [FunAudioLLM](https://github.com/FunAudioLLM/SenseVoice) SenseVoiceSmall model performs well in both performance and speed.
[FunASR](https://github.com/modelscope/FunASR?tab=readme-ov-file) is a fundamental end-to-end speech recognition toolkit from ModelScope that supports various ASR models. Among them, Alibaba's [FunAudioLLM](https://github.com/FunAudioLLM/SenseVoice) SenseVoiceSmall model performs well in both performance and speed.

:::tip
Although FunASR can run the SenseVoiceSmall model, we recommend using the project's default `sherpa_onnx_asr`. The FunASR project has some stability issues and may encounter exceptions on certain devices.

However, FunASR utilizes GPU better, so it might be faster for NVIDIA GPU users.
:::

### Recommended Users
- Users with NVIDIA GPUs who want to utilize GPU inference for the SenseVoiceSmall model
- Chinese users
- Fast CPU inference
- Configuration difficulty: Simple

SenseVoiceSmall may have average English performance.
Although FunASR can run the SenseVoiceSmall model, we recommend using the project's default `sherpa_onnx_asr`. The FunASR project has some stability issues and may encounter exceptions on certain devices.

However, FunASR utilizes GPU better, so it might be faster for NVIDIA GPU users.
:::

### Recommended Users
- Users with NVIDIA GPUs who want to utilize GPU inference for the SenseVoiceSmall model
- Chinese users
- Fast CPU inference
- Configuration difficulty: Simple

SenseVoiceSmall may have average English performance.

### Installation

In the project directory, run:
In the project directory, run:
```sh
uv add funasr modelscope huggingface_hub onnxconverter_common torch torchaudio onnx
```

:::info Dependency Issue Solutions
If you encounter the following dependency issues:
:::info Dependency Issue Solutions
If you encounter the following dependency issues:

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
Even if model files are already local, an internet connection is still required at startup.
Even if model files are already local, an internet connection is still required at startup.

Solution: Directly specify the local path of the model in the configuration, so no internet connection is needed during runtime. However, you need to download the model files in advance. See [FunASR Issue #1897](https://github.com/modelscope/FunASR/issues/1897) for details.
Solution: Directly specify the local path of the model in the configuration, so no internet connection is needed during runtime. However, you need to download the model files in advance. See [FunASR Issue #1897](https://github.com/modelscope/FunASR/issues/1897) for details.
:::

## `faster_whisper` (Local)
- [Official Repository](https://github.com/SYSTRAN/faster-whisper)
- [Official Repository](https://github.com/SYSTRAN/faster-whisper)

This is an optimized Whisper inference engine that can run original Whisper and distilled Whisper models. It provides faster inference speed compared to the original Whisper but cannot automatically detect language.

:::info
Faster Whisper [does not support Mac GPU inference](https://github.com/SYSTRAN/faster-whisper/issues/911) and can only run on CPU with average performance. It's recommended for use on devices equipped with NVIDIA GPUs for optimal performance.
:::

### Recommended Users
- Users with NVIDIA GPUs who want to utilize GPU inference for Whisper models
- Non-Chinese users. Whisper series models have good multilingual support
- CPU inference is relatively slow
- Configuration difficulty: Simple

### Installation and Configuration
Faster Whisper [does not support Mac GPU inference](https://github.com/SYSTRAN/faster-whisper/issues/911) and can only run on CPU with average performance. It's recommended for use on devices equipped with NVIDIA GPUs for optimal performance.
:::

### Recommended Users
- Users with NVIDIA GPUs who want to utilize GPU inference for Whisper models
- Non-Chinese users. Whisper series models have good multilingual support
- CPU inference is relatively slow
- Configuration difficulty: Simple

### Installation and Configuration

If you want to use GPU acceleration (NVIDIA GPU users only), you need to install the following NVIDIA dependency libraries. For detailed installation steps, please refer to [Quick Start](/docs/quick-start.md):
- [cuBLAS for CUDA 12](https://developer.nvidia.com/cublas)
- [cuDNN 8 for CUDA 12](https://developer.nvidia.com/cudnn)

**Installing faster whisper**
```sh
uv pip install faster-whisper
```

If you don't care much about running speed or have a powerful CPU, you can also set the `device` parameter of `faster-whisper` to `cpu` in the `conf.yaml` configuration file. This avoids the hassle of installing NVIDIA dependency libraries.

```yaml
# Faster Whisper Configuration
faster_whisper:
  model_path: 'large-v3-turbo' # Model path, model name, or HF hub model id
  download_root: 'models/whisper' # Model download root directory
  language: 'zh' # Language, en, zh or others. Leave empty for auto-detection
  device: 'auto' # Device, cpu, cuda or auto. faster-whisper doesn't support mps
  compute_type: 'int8'
```

### Model Selection (model_path)
`model_path` can be filled with model name, local path of the model (if you downloaded it in advance), or model id on HuggingFace (must be a model already converted to CTranslate2 format).

**Available model names:**

`tiny`, `tiny.en`, `base`, `base.en`, `small`, `small.en`, `distil-small.en`, `medium`, `medium.en`, `distil-medium.en`, `large-v1`, `large-v2`, `large-v3`, `large`, `distil-large-v2`, `distil-large-v3`, `large-v3-turbo`, `turbo`

The distil series models may only support English.

The selected model will be automatically downloaded from Hugging Face to the `models/whisper` folder in the project directory.

Test results on 4060 (Thanks to Lena from the QQ group for providing test results in [#187](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/issues/187#issuecomment-2814846254), [#188](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/pull/188))

> Using 22-second generated audio, tested with int8 on 13th gen i5 and 4060 8GB, CUDA 12.8, cuDNN 9.8:
> - CPU: v3-turbo took 5.98 seconds, small took 1.56 seconds
> - GPU: v3-turbo took 1.04 seconds, small took 0.48 seconds
> 
> Summary:
> - Without 4060, choose small, because medium and v3-turbo are similar in size, small might be the best recognition effect while ensuring speed for 20/30 series cards.
> - With 4060, choose v3-turbo, higher accuracy is naturally better if speed is not an issue.
> - Accuracy reference: faster-whisper-small has 244M parameters, faster-whisper-v3-turbo has 809M parameters.

Test results on MacBook Pro M1 Pro:
> Don't even try, it's very slow. Using whisper cpp with CoreML acceleration or sense voice small model would be much faster.

**Hugging Face model id format**
```
"username/whisper-large-v3-ct2"
```
Note that faster whisper requires models already converted to CTranslate2 format.

The selected model will be automatically downloaded from Hugging Face to the `models/whisper` folder in the project directory.
If you don't care much about running speed or have a powerful CPU, you can also set the `device` parameter of `faster-whisper` to `cpu` in the `conf.yaml` configuration file. This avoids the hassle of installing NVIDIA dependency libraries.

```yaml
# Faster Whisper Configuration
faster_whisper:
  model_path: 'large-v3-turbo' # Model path, model name, or HF hub model id
  download_root: 'models/whisper' # Model download root directory
  language: 'zh' # Language, en, zh or others. Leave empty for auto-detection
  device: 'auto' # Device, cpu, cuda or auto. faster-whisper doesn't support mps
  compute_type: 'int8'
```

### Model Selection (model_path)
`model_path` can be filled with model name, local path of the model (if you downloaded it in advance), or model id on HuggingFace (must be a model already converted to CTranslate2 format).

**Available model names:**

`tiny`, `tiny.en`, `base`, `base.en`, `small`, `small.en`, `distil-small.en`, `medium`, `medium.en`, `distil-medium.en`, `large-v1`, `large-v2`, `large-v3`, `large`, `distil-large-v2`, `distil-large-v3`, `large-v3-turbo`, `turbo`

The distil series models may only support English.

The selected model will be automatically downloaded from Hugging Face to the `models/whisper` folder in the project directory.

Test results on 4060 (Thanks to Lena from the QQ group for providing test results in [#187](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/issues/187#issuecomment-2814846254), [#188](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/pull/188))

> Using 22-second generated audio, tested with int8 on 13th gen i5 and 4060 8GB, CUDA 12.8, cuDNN 9.8:
> - CPU: v3-turbo took 5.98 seconds, small took 1.56 seconds
> - GPU: v3-turbo took 1.04 seconds, small took 0.48 seconds
> 
> Summary:
> - Without 4060, choose small, because medium and v3-turbo are similar in size, small might be the best recognition effect while ensuring speed for 20/30 series cards.
> - With 4060, choose v3-turbo, higher accuracy is naturally better if speed is not an issue.
> - Accuracy reference: faster-whisper-small has 244M parameters, faster-whisper-v3-turbo has 809M parameters.

Test results on MacBook Pro M1 Pro:
> Don't even try, it's very slow. Using whisper cpp with CoreML acceleration or sense voice small model would be much faster.

**Hugging Face model id format**
```
"username/whisper-large-v3-ct2"
```
Note that faster whisper requires models already converted to CTranslate2 format.

The selected model will be automatically downloaded from Hugging Face to the `models/whisper` folder in the project directory.

## `whisper_cpp` (Local)
- `whisper_cpp` can be accelerated through CoreML on macOS for faster inference speed
- `whisper_cpp` can be accelerated through CoreML on macOS for faster inference speed
- When running on CPU or NVIDIA GPU, performance may not be as good as Faster-Whisper
- Mac users please refer to the instructions below to configure WhisperCPP with CoreML support; if you need to use CPU or NVIDIA GPU, just run `pip install pywhispercpp` to install

### Recommended Users
- Mac users who want to utilize GPU inference for Whisper series models
- Chinese users
- CPU inference is relatively slow, GPU is needed
- Configuration difficulty: Setting up GPU acceleration might be a bit challenging

SenseVoiceSmall may have average English performance.
- Mac users please refer to the instructions below to configure WhisperCPP with CoreML support; if you need to use CPU or NVIDIA GPU, just run `pip install pywhispercpp` to install

### Recommended Users
- Mac users who want to utilize GPU inference for Whisper series models
- Chinese users
- CPU inference is relatively slow, GPU is needed
- Configuration difficulty: Setting up GPU acceleration might be a bit challenging

SenseVoiceSmall may have average English performance.

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
- Method 1: Follow the Whisper.cpp repository documentation to convert Whisper models to CoreML format
- Method 2: Download pre-converted CoreML models from [Hugging Face repository](https://huggingface.co/chidiwilliams/whisper.cpp-coreml/tree/main). Note: After downloading, you need to extract the model files, otherwise the program cannot load and will crash.
- Configuration note: When configuring models in `conf.yaml`, you don't need to include the special prefix in the filename. For example, when the CoreML model filename is `ggml-base-encoder.mlmodelc`, you only need to fill in `base` in the `model_name` parameter of `WhisperCPP`.
- Method 1: Follow the Whisper.cpp repository documentation to convert Whisper models to CoreML format
- Method 2: Download pre-converted CoreML models from [Hugging Face repository](https://huggingface.co/chidiwilliams/whisper.cpp-coreml/tree/main). Note: After downloading, you need to extract the model files, otherwise the program cannot load and will crash.
- Configuration note: When configuring models in `conf.yaml`, you don't need to include the special prefix in the filename. For example, when the CoreML model filename is `ggml-base-encoder.mlmodelc`, you only need to fill in `base` in the `model_name` parameter of `WhisperCPP`.

## `whisper` (Local)

OpenAI's original Whisper. Install with `uv pip install -U openai-whisper`. Very slow inference speed.

### Recommended Users
- Not recommended
OpenAI's original Whisper. Install with `uv pip install -U openai-whisper`. Very slow inference speed.

### Recommended Users
- Not recommended

## `groq_whisper_asr` (Online, requires API key, but easy to register with generous free quota)
## `groq_whisper_asr` (Online, requires API key, but easy to register with generous free quota)

Groq's Whisper endpoint, very accurate (supports multiple languages) and fast, with many free uses per day. It's pre-installed. Get an API key from [groq](https://console.groq.com/keys) and add it to the `groq_whisper_asr` settings in `conf.yaml`. Users in mainland China and other unsupported regions need a proxy (may not support Hong Kong region) to use it.

### Recommended Users
- Users who accept using online speech recognition
- Multilingual users
- No local computation, very fast speed (depends on your network speed)
- Configuration difficulty: Simple

SenseVoiceSmall may have average English performance.
Groq's Whisper endpoint, very accurate (supports multiple languages) and fast, with many free uses per day. It's pre-installed. Get an API key from [groq](https://console.groq.com/keys) and add it to the `groq_whisper_asr` settings in `conf.yaml`. Users in mainland China and other unsupported regions need a proxy (may not support Hong Kong region) to use it.

### Recommended Users
- Users who accept using online speech recognition
- Multilingual users
- No local computation, very fast speed (depends on your network speed)
- Configuration difficulty: Simple

SenseVoiceSmall may have average English performance.

## `azure_asr` (Online, requires API key)
## `azure_asr` (Online, requires API key)

- Azure Speech Recognition
- Azure Speech Recognition
- Configure API key and region under the `azure_asr` option

:::warning
`api_key.py` has been deprecated after `v0.2.5`. Please set API keys in `conf.yaml`.
:::

### Recommended Users
- People who have Azure API keys (Azure accounts are not easy to register)
- Multilingual users
- No local computation, very fast speed (depends on your network speed)
- Configuration difficulty: Simple