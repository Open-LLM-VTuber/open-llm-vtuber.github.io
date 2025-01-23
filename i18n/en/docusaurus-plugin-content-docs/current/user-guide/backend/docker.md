---
sidebar_position: 8
---

# Docker Deployment

:::danger
Due to significant refactoring, the Docker image has not yet been updated to version `v1.0.0`, but it will be updated soon.
:::

:::warning
⚠️ Please note: This feature is currently in an experimental stage but works normally in most cases.
:::

You can choose to build the Docker image yourself or pull the pre-built image directly from Docker Hub: [![](https://img.shields.io/badge/t41372%2FOpen--LLM--VTuber-%25230db7ed.svg?logo=docker&logoColor=blue&labelColor=white&color=blue)](https://hub.docker.com/r/t41372/open-llm-vtuber)

## Usage Notes

- The Docker image is large (about 13GB), and some optional models require additional downloads when used, occupying more storage space
- Only supports devices with NVIDIA GPUs
- Requires installation and configuration of [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html) to support GPU passthrough
- Current issue: Some models need to be re-downloaded after the container stops (this will be fixed in future versions)
- Building the image on ARM architecture devices is not recommended due to potential build failures with the gRPC dependency ([related issue](https://github.com/grpc/grpc/issues/34998))
- If running on a remote server, HTTPS must be configured. This is because the frontend webpage's microphone/camera/screen recording features can only be used in a secure context (localhost or HTTPS environment)

## Pre-installed Model Information

The default image comes with most Automatic Speech Recognition (ASR) and Text-to-Speech (TTS) models pre-installed. However, considering size factors (about 8GB, which would increase the total size to 25GB) and performance, the default build does not include the following models:
- Bark TTS
- Original OpenAI Whisper (Note: This refers to Whisper, not WhisperCPP)

To include these models in the image, add the following parameters when building:
```bash
--build-arg INSTALL_ORIGINAL_WHISPER=true --build-arg INSTALL_BARK=true
```

## Deployment Steps

1. Before building the image, check and adjust the `conf.yaml` configuration file (the current configuration will be built into the image)

2. Build the Docker image:
```bash
docker build -t open-llm-vtuber .
```
   > Note: The build process may take a considerable amount of time

3. Prepare the `conf.yaml` configuration file
   You can obtain it from the project repository or download it directly via this [link](https://raw.githubusercontent.com/t41372/Open-LLM-VTuber/main/conf.yaml)

4. Run the container:
```bash
docker run -it --net=host --rm -v $(pwd)/conf.yaml:/app/conf.yaml -p 12393:12393 open-llm-vtuber
```
   Note: Replace `$(pwd)/conf.yaml` with the actual path to your configuration file

5. Access `localhost:12393` for testing