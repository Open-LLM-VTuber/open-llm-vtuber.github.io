---
sidebar_position: 6
---

# 语音合成 (TTS)

安装所需的依赖并在 `conf.yaml` 进行配置后后，通过修改 `conf.yaml` 中的 `TTS_MODEL` 选项来启用相应的语音合成引擎。


## sherpa-onnx（本地 & 推荐）
> 自 `v0.5.0-alpha.1` 版本起可用（[PR#50](https://github.com/t41372/Open-LLM-VTuber/pull/50)）

sherpa-onnx 是一个强大的推理引擎，支持多种 TTS 模型（包括 MeloTTS）。项目已内置支持，默认使用 CPU 推理。

**配置步骤：**
1. 从 [sherpa-onnx TTS models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/tts-models) 下载所需模型
2. 参考 `config_alts` 中的配置示例修改 `conf.yaml` 

:::tip
如需使用 GPU 推理（仅支持 CUDA），请参考 [CUDA推理](/docs/user-guide/backend/asr#cuda-推理)。
:::

## pyttsx3（轻量快速）
简单易用的本地 TTS 引擎，使用系统默认语音合成器。使用 `py3-tts` 而不是更著名的 `pyttsx3`，因为 `pyttsx3` 似乎无人维护，且在测试电脑上无法运行。

**配置步骤：**
1. 执行 `uv pip install py3-tts` 安装
2. 在 `conf.yaml` 中设置 `tts_model: pyttsx3_tts`

- 1. 使用命令 `uv pip install py3-tts` 安装。
- 2. 这个 TTS 引擎没有任何配置项，直接在 `conf.yaml` 中设置 `tts_model: pyttsx3_tts` 即可。

:::info
这个包将使用您系统上的默认 TTS 引擎:
- Windows 使用 sapi5 引擎
- macOS 使用 nsss 引擎
- 其他平台使用 espeak 引擎
:::


## MeloTTS（本地部署）
:::warning 重要提示
- 强烈推荐通过 sherpa-onnx 使用 MeloTTS，而非安装较为复杂的官方版本
- MeloTTS 与 Coqui-TTS 存在依赖冲突，请勿同时安装
- MeloTTS 官方版本在 macOS 上可能出现 mps 相关错误（欢迎提供解决方案）
:::

### 安装步骤
> 从项目 `v1.0.0` 版本开始，我们采用 `uv` 管理依赖，这大大简化了 MeloTTS 的安装流程。

1. 安装 MeloTTS 和必要组件：
```sh
# 安装 MeloTTS
uv add git+https://github.com/myshell-ai/MeloTTS.git

# 下载 unidic
python -m unidic download
```

2. 下载额外依赖：
```sh
# 进入 Python 解释器
python

# 下载必要的 NLTK 数据
>>> import nltk
>>> nltk.download('averaged_perceptron_tagger_eng')
# 完成后按 Ctrl+D 退出解释器
```

3. 配置启用：
- 编辑项目的 `conf.yaml` 文件
- 将 `tts_model` 设置为 `melo_tts`

### 补充说明
- 官方文档：[MeloTTS Installation Guide](https://github.com/myshell-ai/MeloTTS/blob/main/docs/install.md)
- 如遇到 `mecab-python` 相关问题，可尝试使用此[分支](https://github.com/polm/MeloTTS)（注：截至 2024/7/16 尚未合并至主分支）


## Coqui-TTS（本地部署）

Coqui-TTS 是一个开源语音合成工具包，支持多种模型和语言。推理速度取决于所选模型的大小和复杂度。

### 安装步骤
```sh
# 安装 Coqui-TTS 及其语言支持
uv pip install "coqui-tts[languages]"
```

### 模型配置
1. 查看可用模型：
```sh
uv run tts --list_models
```

2. 在 `conf.yaml` 中配置：
```yaml
 coqui_tts:
      # 要使用的 TTS 模型的名称。如果为空，将使用默认模型
      # 执行 "tts --list_models" 以列出 coqui-tts 支持的模型
      # 一些示例：
      # - "tts_models/en/ljspeech/tacotron2-DDC"（单说话人）
      # - "tts_models/zh-CN/baker/tacotron2-DDC-GST"（中文单说话人）
      # - "tts_models/multilingual/multi-dataset/your_tts"（多说话人）
      # - "tts_models/multilingual/multi-dataset/xtts_v2"（多说话人）
      model_name: "tts_models/en/ljspeech/tacotron2-DDC" # 模型名称
      speaker_wav: "" # 参考音频文件路径
      language: "en" # 语言
      device: "" # 设备
```

- **单语言模型**：
   - 默认配置为英文单语言模型
   - 如需中文支持，请更换为中文模型 (如 `tts_models/zh-CN/baker/tacotron2-DDC-GST`)

- **多语言模型**：
   - `speaker_wav`：参考音频文件路径
     - 支持相对路径（如 `./voices/reference.wav`）
     - Windows 使用绝对路径时注意将 `\` 改为 `\\`
     - 确保参考音频文件存在于指定位置
   
   - `language`：设置优先使用的语言
     - 中文设置为 `"zh"`
     - 英文设置为 `"en"`
     - 此参数与 `speaker_wav` 对应


## GPTSoVITS（本地部署，性能适中）
> 在 [PR #40](https://github.com/t41372/Open-LLM-VTuber/pull/40) 中引入，于 v0.4.0 版本正式发布

GPT-SoVITS 是一个强大的语音合成引擎，可实现高质量的声音克隆。

:::note
以下部分内容整理自 QQ 群的 [腾讯文档](https://docs.qq.com/doc/DTHR6WkZ3aU9JcXpy)

GPTSoVITS 的官方教程暂时不完善，可以参考腾讯文进行部署。
:::

### [GPTSoVITS-V2 整合包](https://www.yuque.com/baicaigongchang1145haoyuangong/ib3g1e/dkxgpiy9zb96hob4#KTvnO)

### [米哈游一键包](https://www.bilibili.com/video/BV1D7421R7Rn)

## Bark (本地部署、较慢)
1. 安装依赖：
    ```sh
    uv pip install git+https://github.com/suno-ai/bark.git
    ```
2. 在 `conf.yaml` 中设置 `tts_model: bark_tts`
3. 首次启动时会自动下载所需模型
## CosyVoice TTS（本地部署、较慢）
1. 按照 [CosyVoice 官方文档](https://github.com/FunAudioLLM/CosyVoice) 配置并启动 WebUI
2. 参考 WebUI 中的 API 文档，在 `conf.yaml` 的 `cosyvoiceTTS` 部分进行相应配置

#### X-TTS（本地部署、较慢）
> 自 `v0.2.4` 版本起可用（[PR#23](https://github.com/t41372/Open-LLM-VTuber/pull/23)）

推荐使用 xtts-api-server，提供了清晰的 API 文档且部署相对简单。

## Edge TTS（在线、无需 API 密钥）
- 特点：
  - 响应速度快
  - 需要保持网络连接
- 配置：在 `conf.yaml` 中设置 `tts_model: edge_tts`

#### Fish Audio TTS（在线、需要 API 密钥）
> 自 `v0.3.0-beta` 版本起可用

1. 安装依赖：
```sh
uv pip install fish-audio-sdk
```
2. 配置步骤：
   - 在 [Fish Audio](https://fish.audio/) 注册账号并获取 API 密钥
   - 选择所需声音并复制其 Reference ID
   - 在 `conf.yaml` 中设置：
     - `tts_model: fish_api_tts`
     - 在 `fish_api_tts` 部分填写 `api_key` 和 `reference_id`

### Azure TTS（在线、需要 API 密钥）
> 与 neuro-sama 相同的 TTS 服务

1. 从 Azure 获取文本转语音服务的 API 密钥
2. 在 `conf.yaml` 的 `azure_tts` 部分填写相关配置
:::warning
自 `v0.2.5` 版本起，`api_key.py` 已弃用，请务必在 `conf.yaml` 中设置 API 密钥
:::
:::tip
`conf.yaml` 中默认使用的是 neuro-sama 同款语音
:::
