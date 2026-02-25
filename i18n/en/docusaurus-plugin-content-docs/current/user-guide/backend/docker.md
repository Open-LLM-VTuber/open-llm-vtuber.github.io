---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docker Deployment

> For building Docker images locally, refer to the [Docker Local Build Guide](../../development-guide/backend/docker.mdx)

## About Our Docker Team
We have established the [openllmvtuber team](https://hub.docker.com/orgs/openllmvtuber/members) on Docker Hub.  
The Docker images are currently maintained by [@Harry_Y](https://github.com/Harry-Yu-Shuhang).  

## Download configuration files

### Git clone (for users familiar with git)
First, [install git following the Quick Start](../../quick-start.md#install-git), then download the Docker user configuration:

```bash
git clone https://github.com/Open-LLM-VTuber/OLV-Docker-Config
```

### Download ZIP (for users without coding experience)
:::warning 
If you download it this way, the configuration file `conf.yaml` can only be [updated manually](#manual-update).
:::
First, [click here to go to the user configuration repository](https://github.com/Open-LLM-Vtuber/OLV-Docker-Config)

Then, on the repository page, click `Code` -> `Download ZIP` to download the Docker user configuration, as shown below.

![](/docker_img/download_docker_conf_repo.png)

## Edit configuration files
If you want to change any settings, edit the `conf.yaml` file.

:::info 
The default `conf.yaml` is in English. If you want to replace it with Chinese, copy `conf.ZH.default.yaml` from the `config_templates` folder, go back one level, and replace the original `conf.yaml`.
:::

If you're a beginner, it's recommended to use the default configuration file for one-click startup.

If you want to change settings like character profile, model, ASR, TTS, etc., modify the corresponding fields in `conf.yaml`.

For information about each field in the config file, refer to the comments inside the configuration file.

## Install Docker

:::tip About installation methods
Two installation methods are supported currently:
- If you're a beginner, we recommend [using Docker Desktop](#install-docker-using-docker-desktop).
- If you're familiar with Docker, you can [use terminal commands](#install-docker-using-terminal-commands).
:::

:::caution About GPU support
Currently **only CPU and Nvidia GPU** are supported. Nvidia GPUs require proper Nvidia driver configuration. If you haven't set it up yet, please [**click here to view the setup guide in Quick Start**](../../quick-start.md#nvidia-gpu-support).

If you don't plan to use a GPU and will instead **use API calls** (this is **the best experience for most users**) or use CPU only, you can skip this step.
:::

:::note About our Docker team
We created an [openllmvtuber team on Docker Hub](https://hub.docker.com/orgs/openllmvtuber/members). Docker images are currently maintained by [@Harry_Y](https://github.com/Harry-Yu-Shuhang).
:::

## Install Docker using Docker Desktop

:::warning 
Docker Desktop may hang during restart; try to avoid restarting when possible. If it becomes unresponsive for a long time, kill the Docker Desktop background process in Task Manager (Windows) or Activity Monitor (macOS) and then start it again.
:::

### Download Docker Desktop

Visit the [Docker Desktop download page](https://www.docker.com/products/docker-desktop).

Click "Download Docker Desktop"

![alt text](/docker_img/download_docker_desktop.png)

Choose the version that matches your computer.

:::tip How to choose the right version for your computer
- **Mac Apple Silicon** → Newer Macs (M1/M2/M3 chips)  
- **Mac Intel Chip** → Older Macs (Intel processors)  
- **Windows AMD64** → Most Windows PCs (Intel/AMD 64-bit)  
- **Windows ARM64** → Rare, for ARM-based Windows (e.g., Surface Pro X)  
:::

If you are not sure, check your system settings as follows:

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

1. Right-click "This PC" → Properties  
2. Under "System type" check:  
   - "x64-based processor" → Choose **Windows AMD64**  
   - "ARM-based processor" → Choose **Windows ARM64**

  </TabItem>
  <TabItem value="macos" label="macOS">

1. Click the Apple icon at the top-left → "About This Mac"  
2. Check the "Chip" (or "Processor") field:  
   - Shows **Apple M1/M2/M3** → Choose **Mac Apple Silicon**  
   - Shows **Intel** → Choose **Mac Intel Chip**

  </TabItem>
</Tabs>

### Start Docker Desktop

Double-click the downloaded installer and follow the prompts to install.

After installation, click the Docker Desktop icon to start Docker.

On first start, Docker Desktop will ask you to sign in to a Docker Hub account. If you don't have one, register first.

### Pull the Docker image

Click the top menu "Search" icon (or use the shortcut `Ctrl + K` on Windows or `Cmd + K` on macOS).

![alt text](/docker_img/click_search.png)

Enter the following in the search box. When you find it, click the "Pull" button on the right.

```
openllmvtuber/open-llm-vtuber:latest
```

![alt text](/docker_img/openllmvtuber_image.png)

### Configure LLM
:::info About how to use LLM
If you use a local model (for example the default `Ollama`), this step is required.

If you choose API calls, you can skip this step.
:::

:::info 
If you are a beginner with no coding background
We recommend following these steps to use the default `Ollama` model and avoid extra configuration.

<details>
  1. Download and install the Ollama client from the [Ollama official site](https://ollama.com/).

  2. Verify Ollama installation:
  ```bash
  ollama --version
  ```

  3. Download and run a model (the default config uses `qwen2.5:latest` as an example):
  ```bash
  ollama run qwen2.5:latest
  ```

  4. List installed models:
  ```bash
  ollama list
  ```
</details>
:::

For more details, refer to the LLM configuration section in [Quick Start](/docs/quick-start.md#3-configure-llm).

### Run the Docker container

Click "Images", find **openllmvtuber/open-llm-vtuber**, and click the run button on the right.
![alt text](/docker_img/run_image.png)

Open "Optional settings" and configure as shown below:
![alt text](/docker_img/container_config_en.png)

### Open the web interface in your browser
When you see lines like the ones below, the service has started successfully. The first pull may be slow because it installs necessary tools—please be patient.
![](/docker_img/docker_run_success.png)

Click the `12393:12393` link in the top-left as shown below, or open `http://localhost:12393` in your browser.
![](/docker_img/click_12393.png)

**Congratulations — it's working!** Chat with your virtual companion!

## Install Docker using terminal commands
1. Install Docker Desktop.
<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

```bash
winget install -e --id Docker.DockerDesktop
```

  </TabItem>
  <TabItem value="macos" label="macOS">

```bash
brew install --cask docker
```

  </TabItem>
</Tabs>

2. Pull the latest image.

```bash
docker pull openllmvtuber/open-llm-vtuber:latest
```

3. Start the container. You can modify `docker-compose.yml` if needed; the default can also be started with one command.
```bash
cd OLV-Docker-Config
```

```bash
docker-compose up -d
```

4. View container logs.
```bash
docker logs -f open-llm-vtuber-latest
```

5. Open the web interface in your browser.

After the logs show `Uvicorn running on http://0.0.0.0:12393`, open `http://localhost:12393` in your browser to access the web interface.

That's it — you have successfully deployed Open LLM VTuber!

## Update

### Update configuration file
There are two ways to update: via git or manually.

#### Git update
Run the following commands in the `OLV-Docker-Config` directory:
```bash
git stash
git pull
git stash pop
```
If there are conflicts, please resolve them manually.

#### Manual update
Manually compare the new `conf.yaml` with the old `conf.yaml` and copy the parts that need updating into the old `conf.yaml`.

ChatGPT recommends this website: [DiffCheck.ai — YAML Diff Checker](https://diffcheck.ai/yaml), but you can also use any other suitable site.

### Pull the latest image
If you're using Docker Desktop, click the `Pull` button next to `Image`.

If you're using the terminal, run:
```bash
docker pull openllmvtuber/open-llm-vtuber:latest
```

### Restart the container
If you're using Docker Desktop, click `Restart` under `Containers`.

If you're using the terminal, run:
```bash
docker-compose up -d
```