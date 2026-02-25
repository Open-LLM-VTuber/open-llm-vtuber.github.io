---
sidebar_position: 8
---

# Translation

### Translation Feature

The translation feature is implemented to enable the program to communicate in a language different from the conversation language.

For example, the LLM might be thinking in English, the subtitles are in English, and you're speaking English, but the LLM's voice is in Japanese. This is achieved by translating the sentences before sending the audio generation request.

Currently, the only supported translation backend is [DeepLX](https://github.com/OwO-Network/DeepLX). You need to deploy the DeepLX service and configure it in `conf.yaml` to use it.

### DeepLX Configuration Steps

1. Install and deploy the DeepLX service. Documentation can be found here: https://deeplx.owo.network/
2. At the bottom of `conf.yaml`, set `translate_audio` under `translator_config` to True
3. Set `deeplx_target_lang` to your desired language. Make sure this language matches the language of the TTS speaker (e.g., if `deeplx_target_lang` is "JA" for Japanese, then the TTS should also speak Japanese).
4. Confirm that the DeepLX service is running, locate the endpoint where the server is running, and fill in the DeepLX service endpoint in `deeplx_api_endpoint`

### Contributing
If you want to contribute more translation models or translation APIs to the project, they are located in the `translate` directory, and the process is very similar to adding new TTS or ASR.