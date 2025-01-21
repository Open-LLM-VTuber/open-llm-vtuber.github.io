---
sidebar_position: 7
---

# Docker 容器部署指南 [实验性功能]

:::danger
由于重构幅度较大，Docker 镜像暂时还没有更新到 `v1.0.0` 版本，但是很快会更新。
:::

:::warning
⚠️ 请注意：此功能目前处于实验阶段，但在大多数情况下可以正常工作。
:::

您可以选择自行构建 Docker 镜像，或者直接从 Docker Hub 拉取已构建的镜像：[![](https://img.shields.io/badge/t41372%2FOpen--LLM--VTuber-%25230db7ed.svg?logo=docker&logoColor=blue&labelColor=white&color=blue)](https://hub.docker.com/r/t41372/open-llm-vtuber)

## 使用须知

- Docker 镜像体积较大（约 13GB），且某些可选模型在使用时需要额外下载，会占用更多存储空间
- 仅支持 NVIDIA GPU 的设备
- 需要安装并配置 [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) 以支持 GPU 直通
- 目前存在的问题：容器停止后部分模型需要重新下载（该问题将在后续版本修复）
- 不建议在 ARM 架构的设备上构建镜像，因为依赖项 gRPC 可能会出现构建失败的情况（[相关 issue](https://github.com/grpc/grpc/issues/34998)）
- 如需在远程服务器上运行，必须配置 HTTPS。这是因为前端网页的麦克风功能只能在安全上下文（localhost 或 HTTPS 环境）中使用

## 预装模型说明

默认镜像已预装大部分语音识别（ASR）和文本转语音（TTS）模型。但考虑到体积因素（约 8GB，会使总体积增加到 25GB）和性能表现，默认构建不包含以下模型：
- Bark TTS
- 原版 OpenAI Whisper（注意：这里指的是 Whisper，而非 WhisperCPP）

如需在镜像中包含这些模型，请在构建时添加参数：
```bash
--build-arg INSTALL_ORIGINAL_WHISPER=true --build-arg INSTALL_BARK=true
```

## 部署步骤

1. 在构建镜像前，请先检查并调整 `conf.yaml` 配置文件（目前配置会被构建进镜像）

2. 构建 Docker 镜像：
```bash
docker build -t open-llm-vtuber .
```
   > 提示：构建过程可能需要较长时间

3. 准备 `conf.yaml` 配置文件
   您可以从项目仓库获取，或直接通过此[链接](https://raw.githubusercontent.com/t41372/Open-LLM-VTuber/main/conf.yaml)下载

4. 运行容器：
```bash
docker run -it --net=host --rm -v $(pwd)/conf.yaml:/app/conf.yaml -p 12393:12393 open-llm-vtuber
```
   注意：请将 `$(pwd)/conf.yaml` 替换为您的配置文件实际路径

5. 访问 `localhost:12393` 进行测试
