---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Language Models (LLM)

This project supports multiple large language model backends and models.

:::note
Almost all large language model (LLM) APIs and inference engines support the OpenAI format. So, if you find that an LLM API you want to use isn't explicitly supported in our project, you can usually just fill in the relevant information (base URL, API key, model name) into the `openai_compatible_llm` section, and it should work right away.

In fact, apart from llama.cpp and Claude, all other LLM APIs or backends supported by this project are essentially just variations of `openai_compatible_llm` (we added some model loading logic for Ollama), using the exact same code. The only difference is that we've pre-filled the base URL and some other settings for you.
:::

### How to configure and switch between different large language model backends

> The project's default agent is `basic_memory_agent`, so to switch the language model for the default agent, make selections under the `llm_provider` option of `basic_memory_agent`.

#### 1. Configure large language model settings
Refer to the [Supported Large Language Model Backends](#supported-large-language-model-backends) section below to configure the corresponding large language model backend.

For example, if you want to use Ollama, please follow the guide in the [Ollama](#ollama-ollama_llm) section to install and configure Ollama-related settings.

Under `agent_config` in `llm_config`, you can configure the connection settings for the backend and various LLMs.

#### 2. Switch to the corresponding large language model (LLM) in the settings of the respective agent
> Some agents may not support custom LLMs

Go to the `basic_memory_agent` settings:

```yaml
basic_memory_agent:
    # "openai_compatible_llm", "llama_cpp_llm", "claude_llm", "ollama_llm"
    # "openai_llm", "gemini_llm", "zhipu_llm", "deepseek_llm", "groq_llm"
    # "mistral_llm"
    llm_provider: "openai_compatible_llm" # LLM solution to use
    faster_first_response: True
```

Replace `basic_memory_agent` with the large language model (LLM) you want to use.

Note that `llm_provider` can only be filled with large language model backends that exist under `llm_configs`, such as `openai_compatible_llm`, `claude_llm`, etc.

## Supported Large Language Model Backends

### OpenAI Compatible API (`openai_compatible_llm`)
Compatible with all API endpoints that support the OpenAI Chat Completion format. This includes LM Studio, vLLM, and most inference tools and API providers.

The later official OpenAI API, Gemini, Zhipu, DeepSeek, Mistral, and Groq are all wrappers of `openai_compatible_llm` (Ollama is also a wrapper, but with added special memory management mechanisms). I've just pre-filled the correct `base_url` and related configurations for you.

#### Configuration Instructions

```yaml
# OpenAI compatible inference backend
openai_compatible_llm:
    base_url: "http://localhost:11434/v1" # Base URL
    llm_api_key: "somethingelse" # API key
    organization_id: "org_eternity" # Organization ID
    project_id: "project_glass" # Project ID
    model: "qwen2.5:latest" # Model to use
    temperature: 1.0 # Temperature, between 0 and 2
```

### Ollama (`ollama_llm`)
Ollama is a popular LLM inference tool that allows easy downloading and running of large language models.

#### Ollama Installation Guide

1. Download and install from the [Ollama official website](https://ollama.com/)
2. Verify installation:
```bash
ollama --version
```

3. Download and run the model (using `qwen2.5:latest` as an example):
```bash
ollama run qwen2.5:latest
# After successful execution, you can directly chat with qwen2.5:latest
# You can exit the chat interface (Ctrl/Command + D), but don't close the command line
```

4. View installed models:
```bash
ollama list
# NAME                ID              SIZE      MODIFIED
# qwen2.5:latest      845dbda0ea48    4.7 GB    2 minutes ago
```

:::tip
When looking for model names, please use the `ollama list` command to check the models downloaded in ollama, and directly copy and paste the model name under the `model` option to avoid issues such as misspelling the model name, full-width colons, spaces, etc.
:::

:::caution
When selecting a model, please consider your VRAM capacity and GPU computing power. If the model file size is larger than the VRAM capacity, the model will be forced to use CPU computation, which is extremely slow. Additionally, the smaller the model parameter count, the lower the conversation latency. If you want to reduce conversation latency, please choose a model with fewer parameters.
:::

#### Modify Configuration File

Edit `conf.yaml`:

1. Set `llm_provider` under `basic_memory_agent` to `ollama_llm`
2. Adjust the settings under `ollama_llm` in the `llm_configs` option:
   - Keep `base_url` default for local running, no need to modify.
   - Set `model` to the model you're using, such as `qwen2.5:latest` used in this guide.
   ```yaml
   ollama_llm:
     base_url: http://localhost:11434  # Keep default for local running
     model: qwen2.5:latest            # Model name obtained from ollama list
     temperature: 0.7                 # Controls answer randomness, higher is more random (0~1)
   ```

### OpenAI Official API (`openai_llm`)
First, obtain an API key from the OpenAI official website.

Then adjust the settings here:

```yaml
openai_llm:
    llm_api_key: "Your Open AI API key" # OpenAI API key
    model: "gpt-4o" # Model to use
    temperature: 1.0 # Temperature, between 0 and 2
```

### Gemini API (`gemini_llm`)
Go to [Google AI Studio](https://aistudio.google.com/) to generate an API key.

Then adjust the settings here:

```yaml
gemini_llm:
    llm_api_key: "Your Gemini API Key" # Gemini API key
    model: "gemini-2.0-flash-exp" # Model to use
    temperature: 1.0 # Temperature, between 0 and 2
```

### Zhipu API (`zhipu_llm`)
Go to [Zhipu](https://bigmodel.cn/) to obtain an API key.

```yaml
zhipu_llm:
    llm_api_key: "Your ZhiPu AI API key" # Zhipu AI API key
    model: "glm-4-flash" # Model to use
    temperature: 1.0 # Temperature, between 0 and 2
```

### DeepSeek API (`deepseek`)
Go to [DeepSeek](#deepseek-api-deepseek) to obtain an API key.

```yaml
zhipu_llm:
    llm_api_key: "Your ZhiPu AI API key" # Zhipu AI API key
    model: "glm-4-flash" # Model to use
    temperature: 1.0 # Temperature, between 0 and 2
```

### Mistral API (`mistral_llm`)
Go to the [Mistral official website](https://example.com) to obtain an API key.

```yaml
mistral_llm:
    llm_api_key: "Your Mistral API key" # Mistral API key
    model: "pixtral-large-latest" # Model to use
    temperature: 1.0 # Temperature, between 0 and 2
```

### Groq API (`groq_llm`)
Go to the [Groq official website](https://console.groq.com/keys) to obtain an API key.

```yaml
groq_llm:
    llm_api_key: "your groq API key" # Groq API key
    model: "llama-3.3-70b-versatile" # Model to use
    temperature: 1.0 # Temperature, between 0 and 2
```

### Claude (`claude_llm`)

In https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/pull/35, version `v0.3.1` added support for Claude.

Change `LLM_PROVIDER` to `claude` and complete the settings under `claude`.

### LLama CPP (`llama_cpp_llm`)

llama cpp provides a way to run LLM (gguf files) directly **within this project** without any external tools (such as Ollama) and without starting any additional servers. You only need a `.gguf` model file.

#### Device Requirements

According to the [project repository](https://github.com/abetlen/llama-cpp-python)

Requirements:

- Python 3.8+
- C compiler
  - Linux: gcc or clang
  - Windows: Visual Studio or MinGW
  - MacOS: Xcode

During installation, `llama.cpp` will be built from source and installed along with this Python package.

If it fails later, please add `--verbose` to the `pip install` command to view the full cmake build log.

### Installation

Please run the command in the project directory according to your device.

<Tabs>
<TabItem value="nvidia" label="Nvidia GPU">

```bash
CMAKE_ARGS="-DGGML_CUDA=on" uv pip install llama-cpp-python
```

</TabItem>
<TabItem value="apple" label="Apple Silicon Mac">

```bash
CMAKE_ARGS="-DGGML_METAL=on" uv pip install llama-cpp-python
```

</TabItem>
<TabItem value="amd" label="AMD GPU (ROCm)">

```bash
CMAKE_ARGS="-DGGML_HIPBLAS=on" uv pip install llama-cpp-python
```

</TabItem>
<TabItem value="cpu" label="CPU (OpenBlas)">

```bash
CMAKE_ARGS="-DGGML_BLAS=ON -DGGML_BLAS_VENDOR=OpenBLAS" uv pip install llama-cpp-python
```

</TabItem>
</Tabs>

If you can't find your device above, you can look for the `pip install llama-cpp-python` command suitable for your platform [here](https://github.com/abetlen/llama-cpp-python?tab=readme-ov-file#supported-backends).

:::warning
All `pip` commands should be changed to `uv pip`, so that they will be installed in the project's virtual environment. For example, if the project page says `pip install llama-cpp-python`, you should change it to `uv pip install llama-cpp-python`
:::

If you encounter problems at this step, you can check out the [Windows Note](https://github.com/abetlen/llama-cpp-python?tab=readme-ov-file#windows-notes) and [macOS Note](https://github.com/abetlen/llama-cpp-python?tab=readme-ov-file#macos-notes)
```


