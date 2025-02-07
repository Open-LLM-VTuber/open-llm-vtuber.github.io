---
sidebar_position: 2
---

:::warning
This is a placeholder. Don't look at this guide. It's incomplete and wrong.
:::

### Add support for new Speech Recognition provider
1. Implement `ASRInterface` defined in `asr/asr_interface.py`.
2. Add your new ASR provider into `asr_factory`: the factory to instantiate and return the ASR instance.
3. Add configuration to `conf.yaml`. The dict with the same name will be passed into the constructor of your class as kwargs.

### Add support for new LLM provider
1. Implement `LLMInterface` defined in `llm/llm_interface.py`.
2. Add your new LLM provider into `llm_factory`: the factory to instantiate and return the LLM instance.
3. Add configuration to `conf.yaml`. The dict with the same name will be passed into the constructor of your class as kwargs.