---
sidebar_position: 6
---

# 语音合成


## 安装语音合成 (text to speech) (TTS)
安装相应的软件包并使用 `conf.yaml` 中的 `TTS_MODEL` 选项将其打开。


# 本地方案

### `sherpa-onnx` (本地) 
> (在 `v0.5.0-alpha.1` 中，[pr#50](https://github.com/t41372/Open-LLM-VTuber/pull/50)添加 )

`sherpa-onnx` 已经内置，但预装的版本只能使用 CPU 推理。如果需要 GPU 推理 (目前仅支持 Cuda)，可以参考 [CUDA推理](/docs/user-guide/backend/tts.md)。

`sherpa-onnx` 是一个很不错的推理引擎，可以推理包括 MeloTTS 在内的许多 TTS 模型。(也可以推理 ASR 语音识别模型，具体可以参考 `sherpa-onnx-asr`部分)

- 从 [sherpa-onnx TTS models](https://github.com/k2-fsa/sherpa-onnx/releases/tag/tts-models) 下载您需要的模型。
- 参考仓库中的 `config_alts` 获取配置示例，并相应地修改 `conf.yaml` 中的模型路径。

### `pyttsx3_tts` (本地，快速)

- 使用命令 `uv pip install py3-tts` 安装。
- 此软件包将使用您系统上的默认 TTS 引擎。它在 Windows 上使用 `sapi5`，在 Mac 上使用 `nsss`，在其它平台上使用 `espeak`。
- 这个 TTS 引擎没有任何配置项。你直接在 `conf.yaml` 的 `tts_model` 选项填入 `pyttsx3_tts` 即可。
- 使用 `py3-tts` 而不是更著名的 `pyttsx3`，因为 `pyttsx3` 似乎无人维护，并且 `pyttsx3` 在我电脑上跑不起来。

### `melo_tts` (本地，快速，部署难度极高)
:::warning
建议使用 `sherpa-onnx` 进行 MeloTTS 推理。此处的 MeloTTS 官方版本**安装难度极高**。
:::

:::warning
MeloTTS 与 coqui_tts 存在依赖冲突，请不要同时安装这两个 tts。
:::

:::warning
此处的 MeloTTS 官方实现无法在 macOS 上正常运行，会出现 mps 错误。如果有解决的，可以提供一下解法。
:::

MeloTTS 是一个速度非常快且效果还行的本地 TTS 引擎。不过由于安装难度较高，推荐使用上面的 `sherpa-onnx` 下载 MeloTTS 的模型进行推理。

如果你执意要安装，这里是安装指南。

> 你很幸运，我的朋友。在项目 `v1.0.0` 改用 `uv` 管理依赖之后，MeloTTS 的安装难度变低了不少。

首先用 uv 安装 MeloTTS 并下载 unidic
```sh
uv add git+https://github.com/myshell-ai/MeloTTS.git
python -m unidic download
```

然后用Python下载一些东西。先进入 Python 解释器
```sh
python
# 进入python 解释器环境，此时你的输入栏会变成 ">>" 的样子
```
```sh
import nltk
nltk.download('averaged_perceptron_tagger_eng')
```
下载完毕之后按下 `ctrl` + `d` 键退出 Python 解释器环境。

安装完毕。

接着前往我们项目 `conf.yaml` 配置文件，将 `tts_model` 选项设为 `melo_tts` 即可。

#### 其他

- [MeloTTS 官方文档](https://github.com/myshell-ai/MeloTTS/blob/main/docs/install.md)

:::info
如果您遇到与 `mecab-python` 相关的问题，请尝试此 [fork](https://github.com/polm/MeloTTS)（截至 2024 年 7 月 16 日尚未合并到主分支）。
:::


### `coqui_tts` (本地，可推理不同模型，速度可快可慢，具体取决于您运行的模型)

- 似乎易于安装
- 使用命令 `uv pip install "coqui-tts[languages]"` 安装
- 支持许多不同的 TTS 模型。使用 `uv run tts --list_models` 命令列出所有支持的模型。
- 默认模型是仅限英语的模型。
- 使用 `tts_models/zh-CN/baker/tacotron2-DDC-GST` 作为中文模型。（但一致性很奇怪...）
- 如果您找到了好用的模型，请告诉我！模型太多了，我甚至不知道从哪里开始...

### `gpt_sovits_tts` (本地，速度还行) 
> (在 https://github.com/t41372/Open-LLM-VTuber/pull/40 的 `v0.4.0` 中添加)

- 请查看 [此文档](https://docs.qq.com/doc/DTHR6WkZ3aU9JcXpy) 以获取安装说明。

`bark_tts` (本地，慢)

- 使用此命令 `uv pip install git+https://github.com/suno-ai/bark.git` 安装 pip 软件包并在 `conf.yaml` 中将其打开。
- 所需的模型将在首次启动时下载。

`cosyvoice_tts` (本地，慢)
- 根据其文档配置 [CosyVoice](https://github.com/FunAudioLLM/CosyVoice) 并启动 WebUI 演示。
- 编辑 `conf.yaml` 以匹配您所需的配置。查看其 WebUI 和 WebUI 上的 API 文档，以了解 `conf.yaml` 中 `cosyvoiceTTS` 设置下配置的含义。

`x_tts` (本地，慢) (在 https://github.com/t41372/Open-LLM-VTuber/pull/23 的 `v0.2.4` 中添加)
- 建议使用 xtts-api-server，它有清晰的 API 文档并且相对容易部署。

`edge_tts` (在线，无需 API 密钥，预设选项)
- 听起来不错。运行速度很快。
- 使用 edge tts 时请记住连接到互联网。

`fish_api_tts` (在线，需要 API 密钥) `(在 v0.3.0-beta 中添加)`

- 使用 `uv pip install fish-audio-sdk` 安装
- 注册一个帐户，获取一个 API 密钥，找到您想要使用的声音，然后在 [Fish Audio](https://fish.audio/) 上复制参考 ID。
- 在 `conf.yaml` 文件中，将 `tts_model` 设置为 `fish_api_tts`，并在 `fish_api_tts` 设置下，设置 `api_key` 和 `reference_id`。

`azure_tts` (在线，需要 API 密钥) (这与 neuro-sama 使用的 TTS 完全相同)

- 从 Azure 获取 API 密钥（用于文本转语音），填入 `azure_tts` 设置下的相关设置。
- **⚠️ ‼️ `api_key.py` 在 `v0.2.5` 中已弃用。请在 `conf.yaml` 中设置 API 密钥。**
- `conf.yaml` 中的默认设置是 neuro-sama 使用的声音。
