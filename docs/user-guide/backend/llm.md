---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 语言模型 (LLM)


本项目支持多种大语言模型后端与模型。

:::note
几乎所有的大语言模型 API 和推理引擎都支持 OpenAI 格式，所以如果你发现你想用的那个 LLM API 在我们项目中没有明确的被支持，直接把相关信息 (base url, api key, 模型名称) 填到 `openai_compatible_llm` 里面，基本都能直接用。

实际上，除了 llama.cpp 和 claude 以外，其他所有本项目支持的 LLM api 或 llm 后端都是 `openai_compatible_llm` 的换皮 (Ollama 我们加了个模型加载的逻辑)，代码完全相同。区别只是 base url 和一些设定被提前填好了。
:::

### 如何配置和切换不同的大语言模型后端

> 项目预设的智能体 (Agent) 是 `basic_memory_agent`，所以要切换预设 Agent 的语言模型，在 `basic_memory_agent` 的 `llm_provider` 选项下进行选择。


#### 1. 配置大语言模型设置
参考下方 [支持的大语言模型后端](#支持的大语言模型后端) 配置对应大语言模型后端的配置。

比如，如果你想使用 Ollama，请根据 [Ollama](#ollama-ollama_llm) 部分的指南安装和配置 ollama 相关配置

在 `agent_config` 下的 `llm_config`，可以配置后端与各个 LLM 的连接配置。
#### 2. 在对应的 智能体(Agent) 的设置，切换到对应的大语言模型(LLM)
> 有些 Agent 可能不支持自定义 LLM

前往 `basic_memory_agent` 设置下

```yaml
basic_memory_agent:
    # "openai_compatible_llm", "llama_cpp_llm", "claude_llm", "ollama_llm"
    # "openai_llm", "gemini_llm", "zhipu_llm", "deepseek_llm", "groq_llm"
    # "mistral_llm"
    llm_provider: "openai_compatible_llm" # 使用的 LLM 方案
    faster_first_response: True
```

把 `basic_memory_agent` 换成你想使用的大语言模型(LLM)。

注意，`llm_provider`中只能填写 `llm_configs` 下面存在的大语言模型后端，比如 `openai_compatible_llm`, `claude_llm` 等等




## 支持的大语言模型后端

### OpenAI 兼容的 API (`openai_compatible_llm`)
与所有支持 OpenAI Chat Completion 格式的 API 端点兼容。这包括 LM Studio, vLLM, 以及绝大部分的推理工具和 API 提供商。

后面的 OpenAI 官方API，Gemini，智谱，DeepSeek，Mistral 和 Groq 都是 `openai_compatible_llm` 的套壳 (Ollama也是套壳，不过加上了特殊的内存管理机制)，只是我帮你们把正确的 `base_url` 和相关配置提前填好了。

#### 设置说明

```yaml
# OpenAI 兼容推理后端
openai_compatible_llm:
    base_url: "http://localhost:11434/v1" # 基础 URL
    llm_api_key: "somethingelse" # API 密钥
    organization_id: "org_eternity" # 组织 ID
    project_id: "project_glass" # 项目 ID
    model: "qwen2.5:latest" # 使用的模型
    temperature: 1.0 # 温度，介于 0 到 2 之间
```

### Ollama (`ollama_llm`)
Ollama 是一个流行的 LLM 推理工具，可以方便的下载和运行大语言模型。

#### Ollama 安装指南

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

### OpenAI 官方 API (`openai_llm`)
请先去 OpenAI 官网获取 API key

然后到这边调整设置

```yaml
openai_llm:
    llm_api_key: "Your Open AI API key" # OpenAI API 密钥
    model: "gpt-4o" # 使用的模型
    temperature: 1.0 # 温度，介于 0 到 2 之间
```


### Gemini API (`gemini_llm`)
前往 [Google AI Studio](https://aistudio.google.com/) 生成一个 API key。

然后在这边调整设置

```yaml
gemini_llm:
    llm_api_key: "Your Gemini API Key" # Gemini API 密钥
    model: "gemini-2.0-flash-exp" # 使用的模型
    temperature: 1.0 # 温度，介于 0 到 2 之间
```

### 智谱 API (`zhipu_llm`)
前往[智谱](https://bigmodel.cn/) 获取 API key。

```yaml
zhipu_llm:
    llm_api_key: "Your ZhiPu AI API key" # 智谱 AI API 密钥
    model: "glm-4-flash" # 使用的模型
    temperature: 1.0 # 温度，介于 0 到 2 之间
```

### DeepSeek API (`deepseek`)
前往 [DeepSeek](#deepseek-api-deepseek) 获取 API key

```yaml
zhipu_llm:
    llm_api_key: "Your ZhiPu AI API key" # 智谱 AI API 密钥
    model: "glm-4-flash" # 使用的模型
    temperature: 1.0 # 温度，介于 0 到 2 之间
```

### Mistral API (`mistral_llm`)
前往 [Mistral官网](https://example.com) 获取 API key

```yaml
mistral_llm:
    llm_api_key: "Your Mistral API key" # Mistral API 密钥
    model: "pixtral-large-latest" # 使用的模型
    temperature: 1.0 # 温度，介于 0 到 2 之间
```

### Groq API (`groq_llm`)
前往 [Groq 官网](https://console.groq.com/keys) 获取 API key

```yaml
groq_llm:
    llm_api_key: "your groq API key" # Groq API 密钥
    model: "llama-3.3-70b-versatile" # 使用的模型
    temperature: 1.0 # 温度，介于 0 到 2 之间
```


### Claude (`claude_llm`)

在 https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/pull/35 中，`v0.3.1` 版本添加了对 Claude 的支持。

将 `LLM_PROVIDER` 更改为 `claude` 并在 `claude` 下完成设置。

### LLama CPP (`llama_cpp_llm`)

llama cpp 提供了一种**在本项目内**直接运行 LLM (gguf 文件) 的方法，无需任何外部工具（如 Ollama），不用额外启动任何服务器。您只需要一个 `.gguf` 模型文件。

#### 设备要求

根据 [项目仓库](https://github.com/abetlen/llama-cpp-python)

要求：

- Python 3.8+
- C 编译器
  - Linux：gcc 或 clang
  - Windows：Visual Studio 或 MinGW
  - MacOS：Xcode

安装过程中，将会从源代码构建 `llama.cpp` 并将其与此 Python 包一起安装。

如果后面失败，请在 `pip install` 命令中添加 `--verbose` 以查看完整的 cmake 构建日志。



### 安装

请根据你的设备，在项目目录下运行命令。

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

如果上面没有找到你的设备，可以在[此处](https://github.com/abetlen/llama-cpp-python?tab=readme-ov-file#supported-backends)查找适用于您平台的 `pip install llama-cpp-python` 命令。

:::warning
所有 `pip` 命令都要改成 `uv pip`，这样才会安装在项目虚拟环境中。比如，如果项目页面上写 `pip install llama-cpp-python`，你要改成 `uv pip install llama-cpp-python`
:::


如果你在这一步遇到问题，可以看看 [Windows Note](https://github.com/abetlen/llama-cpp-python?tab=readme-ov-file#windows-notes) 和 [macOS Note](https://github.com/abetlen/llama-cpp-python?tab=readme-ov-file#macos-notes)







