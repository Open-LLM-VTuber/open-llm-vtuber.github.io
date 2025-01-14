---
sidebar_position: 2
---

# 快速开始

# 自动部署后端

还没写完 👻

旧版的自动安装脚本应该不能运行了，所以需要更新。

在此之前，先手动部署吧。


# 手动部署后端

(#开发版)
:::note
目前的后端部署属于开发版，`v1.0.0` 正式发布之前会优化部署过程并修改文档。

标记为 `(#开发版)` 的部分，是完整打包流程构建之前的文档，在 `v1.0.0` 发布之前要改掉。
:::



## 开始部署之前:

### 安装 ffmpeg
非常重要，没有 ffmpeg 在播放音频时可能会遇到 "找不到音频文件" 的错误！


- Windows 用户，在命令行中运行 `winget install ffmpeg` 安装
- macOS 用户，可以用 brew 包管理器用 `brew install ffmpeg` 安装
- Linux 用户直接用系统包管理器安装，你知道我在说什么。


### Nvidia 显卡用户，检查 Cuda 


:::note
CUDA 和 N 卡驱动部分需要补充
:::


### 准备虚拟环境

自 `v1.0.0` 版本开始，这个项目开始使用 [uv](https://docs.astral.sh/uv/)作为依赖和项目管理工具。

如果你不熟悉 conda 或是 venv，我推荐你跟着我们一起使用 uv。

如果你懂 python 的依赖，可以看一下 [uv 的命令指南](https://docs.astral.sh/uv/getting-started/features/#scripts) 熟悉一下 (毕竟这玩意儿比较新)。

如果你坚持使用 conda 或是 venv (或是其他虚拟环境的工具)，这个项目依旧可以使用 conda 或是 venv 来安装，后面会提到使用 pip 来安装项目依赖的方式。



#### 安装 uv

可以参考 [uv 官方安装文档](https://docs.astral.sh/uv/getting-started/installation)。安装 uv 的方式有很多，包括 pip, winget, brew 等等。不过如果你看不太懂，下面是我推荐的安装方式。


Windows
- 在命令行里执行 `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"` 来安装 uv
- 如果上面这个命令行不通，我们可以试试 winget。试试在命令行运行这个命令 `winget install --id=astral-sh.uv -e`

macOS & Linux
- 命令行运行 `curl -LsSf https://astral.sh/uv/install.sh | sh`





## 开始部署

### 下载项目后端 (#开发版)


#### 获取 superb-refactoring 开发版本 (#开发版)

一般来说，在正式发布后，我会把最新的压缩包放在 release 页面。

不过我们 `v1.0.0` 还没正式发布，就先来 `git clone` 一下吧。

注意，国内用户可能需要开启代理或是使用 github 镜像源。

首先确保你的电脑上有 git

```sh
git -v
```

接着来克隆项目仓库。

```sh
git clone https://github.com/t41372/Open-LLM-VTuber
```


由于现在主分支还在 `v0.5.2` 版本，我们要切换到 `v1.0.0` 版本的工作分支。

先进入 Open LLM VTuber 项目目录

```sh
cd Open-LLM-VTuber/
```


接着切换到 `superb-refactoring` 重构分支

```sh
git switch superb-refactoring
```


现在你已经在 `v1.0.0` 的开发分支上啦！


自 `v1.0.0` 开始，前端代码被拆分到了单独的仓库去，我们搭建了一个构建流程，并用 git submodule 链接到了项目主仓库当中的 `frontend`目录。

不过用 git submodule 链接的东西不会自动出现在目录下，我们要手动获取一下。

运行下面命令来从前端构建仓库中获取前端网页代码。

```sh
git submodule update --init --recursive
```


### 创建虚拟环境


我们将使用 [uv](#安装-uv) 创建虚拟环境 来管理项目的依赖。

首先确保你的 uv 安装好了。

```sh
uv --version
```

你应该会看到类似这样的东西

```
uv 0.5.7 (3ca155ddd 2024-12-06)
```


这样就代表你 uv 安装好了。



接着我们来安装项目的依赖。

在项目目录下，运行:

```
uv sync
```

这个命令会在项目目录下创建一个 `.venv` 虚拟环境，并准备好合适的 Python 版本。


接着，用 uv 来启动项目

```sh
uv run run_server.py
```


然后项目后端就启动啦！可以在浏览器访问 `localhost:12393` 来打开网页。

以后记得都用这个命令来运行这个项目捏。

第一次运行会下载一些模型。目前开发版本的有些模型以及一些预设选项，发布之前会修改掉。


如果你比起浏览器中的网页，更喜欢本地应用，或是你想要背景透明能在桌面上拖来拖去的桌宠 (又或是你在网页端遇到了奇奇怪怪的问题...)，可以前往 [Open-LLM-VTuber-Web Release](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) 下载并安装已经构建好的 electron 前端应用。在后端启动之后，启动你在这边下载的东西就行了。

如果你希望使用最新的前端，或是你希望对前端页面做一些修改，可以参考 [前端安装部署指南](/docs/user-guide/frontend/install)



