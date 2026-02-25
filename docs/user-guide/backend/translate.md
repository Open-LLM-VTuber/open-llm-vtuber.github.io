---
sidebar_position: 8
---

# 翻译 (Translate)

### 翻译功能

翻译功能的实现是为了让程序能够使用与对话语言不同的语言进行交流。

例如，LLM 可能在用英语思考，字幕是英语，你也在说英语，但 LLM 的声音是日语。这是通过在发送音频生成请求之前翻译句子来实现的。

目前，唯一支持的翻译后端是 [DeepLX](https://github.com/OwO-Network/DeepLX)。你需要部署 deeplx 服务并在 `conf.yaml` 中进行配置才能使用它。

### DeepLX 配置步骤

1. 安装，部署 DeepLX 服务。文档在此 https://deeplx.owo.network/
2. 在 `conf.yaml` 的最下面，将 `translator_config` 下的 `translate_audio` 设置为 True
3. 将 `deeplx_target_lang` 设置为你想要的语言。确保此语言与 TTS 说话者的语言匹配（例如，如果 `deeplx_target_lang` 是 "JA"，即日语，那么 TTS 也应该说日语）。
4. 确认 DeepLX 服务运行，找到服务器运行的端点，并在 `deeplx_api_endpoint` 中填入 DeepLX 服务的端点


### 贡献
如果你想给项目贡献更多的翻译模型或翻译API，它们位于 `translate` 目录中，步骤与添加新的 TTS 或 ASR 非常相似。