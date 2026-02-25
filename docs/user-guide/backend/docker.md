---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Docker 部署

> 关于本地构建 docker 镜像，参考 [Docker 本地构建指南](../../development-guide/backend/docker.mdx)

## 关于我们的docker团队
我们在 docker hub 成立了[openllmvtuber团队](https://hub.docker.com/orgs/openllmvtuber/members)，目前docker镜像由[@Harry_Y](https://github.com/Harry-Yu-Shuhang)维护。

## 下载配置文件

### git下载（适合有git基础的用户）
先[按照Quick Start安装 git](../../quick-start.md#安装-git)
, 然后下载docker用户配置文件:

```bash
git clone https://github.com/Open-LLM-VTuber/OLV-Docker-Config
```

### zip下载（适合没有代码基础的用户）
:::warning 
这样下载的话,配置文件`conf.yaml`只能[手动更新](#手动更新)。
:::
首先，[点击这里前往用户配置代码仓库](https://github.com/Open-LLM-VTuber/OLV-Docker-Config)

然后，在网页右上角，点击 `Code` -> `Download ZIP` 下载 docker 用户配置, 如下图。

![](/docker_img/download_docker_conf_repo.png)

## 修改配置文件
如果自己有想修改的配置，就修改配置文件`conf.yaml`。

:::info 默认的 `conf.yaml` 是英文的，如果想替换成中文，请到 `config_templates` 文件夹下复制 `conf.ZH.default.yaml`, 然后回到上一级, 替换掉原来的 `conf.yaml`
:::

如果你是小白，建议直接用默认的配置文件，可以一键启动。

如果你想改一些配置，比如人设、模型、asr、tts等，请修改`conf.yaml`的对应字段。

关于配置文件里各个字段的作用，可以参考配置文件里的注释。

## 安装 Docker

:::tip 关于安装方式
目前支持两种方式。
- 如果您是小白，推荐您[使用 Docker DeskTop](#使用-docker-desktop-安装-docker) 。
- 如果您对 Docker 比较熟悉，也可以[使用终端命令](#使用终端命令安装-docker)。
:::

:::caution 关于GPU支持
目前**仅支持CPU和Nvidia GPU**, 且GPU需要配置好Nvidia驱动, 如果还没配置好, 请[**点击这里前往Quick Start查看配置攻略**](../../quick-start.md#nvidia-gpu-支持)。

如果您不打算使用GPU，而是**调用api**（这也是**绝大多数用户体验最好的方式**），或者使用CPU，可以忽略此步。
:::

:::note 关于我们`Docker`团队
我们在 docker hub 成立了[openllmvtuber团队](https://hub.docker.com/orgs/openllmvtuber/members)，目前Docker镜像由[@Harry_Y](https://github.com/Harry-Yu-Shuhang)维护。
:::

## 使用 Docker Desktop 安装 Docker

:::warning 由于 `Docker Desktop` 退出重启经常卡死，建议尽量避免重启，如果重启很久以后没有反应，可以在任务管理器 (`Windows`) 或者 活动监视器 (`macOS`) 里杀掉 `Docker Desktop` 的后台进程，然后再次启动。
:::

### 下载 Docker Desktop

访问 [Docker Desktop 下载页面](https://www.docker.com/products/docker-desktop)。

点击 "Download Docker Desktop"

![alt text](/docker_img/download_docker_desktop.png)

根据电脑类型选择对应版本

:::tip 如何选择适用于自己电脑的版本
- **Mac Apple Silicon** → 新款 Mac (M1/M2/M3 芯片)  
- **Mac Intel Chip** → 老款 Mac (Intel 处理器)  
- **Windows AMD64** → 大部分 Windows 电脑 (Intel/AMD 64 位)  
- **Windows ARM64** → 少见，仅 ARM 架构 Windows (如 Surface Pro X)  
:::

如果您还不确定，可以按如下方法查看系统设置：

<Tabs groupId="operating-systems">
  <TabItem value="windows" label="Windows">

1. 右键 **此电脑 → 属性**
2. 在 **系统类型** 一栏查看：  
   - “基于 x64 的处理器” → 选择 **Windows AMD64**  
   - “基于 ARM 的处理器” → 选择 **Windows ARM64**

  </TabItem>
  <TabItem value="macos" label="macOS">

1. 点击屏幕左上角苹果图标 → **关于本机**  
2. 在“芯片”一栏查看：  
   - 显示 **Apple M1/M2/M3** → 选择 **Mac Apple Silicon**  
   - 显示 **Intel** → 选择 **Mac Intel Chip**

  </TabItem>
</Tabs>

### 启动 Docker Desktop

双击下载好的安装包，按照提示完成安装。

安装完成后，点击 Docker Desktop 图标启动 Docker。

首次启动时，Docker Desktop 会要求您登录 Docker Hub 账号。如果您没有账号，需要先注册一个。

### 获取 Docker 镜像

点击顶部菜单的 **Search** 图标（或使用快捷键 `Ctrl + K`(Windows)或者`Cmd + K`(MacOS)）。

![alt text](/docker_img/click_search.png)

在搜索框中输入以下内容，搜索到以后点击右侧的**Pull**按钮。

```
openllmvtuber/open-llm-vtuber:latest
```

![alt text](/docker_img/openllmvtuber_image.png)

### 配置 LLM
:::info 关于调用LLM的方式
如果您使用本地模型，比如默认配置的 `Ollama`， 这一步必须做。

如果你选择api调用，可以跳过这一步。
:::

:::info 如果您是没有代码基础的小白
建议按照以下步骤，直接使用默认的 `Ollama` 模型调用方式，省去配置麻烦。

<details>
  1. 从 [Ollama 官网](https://ollama.com/) 下载并安装 Ollama 客户端。

  2. 终端输入以下指令，验证Ollama是否安装成功:
  ```bash
  ollama --version
  ```

  3. 下载并运行模型（以默认配置文件的 `qwen2.5:latest` 为例）：
  ```bash
  ollama run qwen2.5:latest
  ```

  4. 查看已安装的模型。
  ```bash
  ollama list
  ```
</details>
:::


更多注意事项，可以参考 [Quick Start 里的配置 LLM 部分](../../quick-start.md#3-配置-llm)。


### 运行 Docker 容器

点击**Images**, 找到**openllmvtuber/open-llm-vtuber**, 点击右侧的运行按钮。
![alt text](/docker_img/run_image.png)

点开"Optional settings", 按照下图配置，
![alt text](/docker_img/container_config_cn.png)


### 在浏览器打开web界面
等到出现这几行字，如下图，就说明启动成功了。第一次拉取会比较慢，因为要安装一些必要工具，请耐心等待。
![](/docker_img/docker_run_success.png)

点击左上角的 `12393:12393`，如下图，或者在浏览器输入 `http://localhost:12393`
![](/docker_img/click_12393.png)

**恭喜你，成功了**，和你的虚拟伴侣对话吧！

## 使用终端命令安装 Docker
1. 安装 Docker Desktop。
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

2. 拉取最新镜像。

```bash
docker pull openllmvtuber/open-llm-vtuber:latest
```

3. 打包容器。可以更改 `docker-compose.yml`，默认的也可以直接一键启动。
```bash
cd OLV-Docker-Config
```

```bash 
docker-compose up -d
```

4. 查看容器的日志。
```bash 
docker logs -f open-llm-vtuber-latest
```

5. 在浏览器打开web界面。

等到日志里出现 `Uvicorn running on http://0.0.0.0:12393` 以后，在浏览器输入 `http://localhost:12393` 打开web界面。

至此，你就成功部署了 Open LLM VTuber！

## 更新
### 更新配置文件
有 git 更新和手动更新两种方式。
#### git 更新
在 `OLV-Docker-Config` 目录下运行以下命令：
```bash
git stash
git pull
git stash pop
```
如有冲突请手动处理。

#### 手动更新
手动对比新版 `conf.yaml` 与旧版 `conf.yaml`的不同，将需要更新的部分复制到旧的 `conf.yaml` 中。 

ChatGPT推荐这个网站 [DiffCheck.ai — YAML Diff Checker](https://diffcheck.ai/yaml)，你也可以自己找合适的网站。

### 拉取最新镜像
如果用 `Docker Desktop`, 点击 `Image` 旁边的 `Pull` 即可。

如果用终端，运行以下命令：
```bash
docker pull openllmvtuber/open-llm-vtuber:latest
```

### 重启容器
如果用 `Docker Desktop`, 点击 `Containers` 的 `Restart` 即可。

如果用终端，运行以下命令：
```bash
docker-compose up -d
```