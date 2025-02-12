"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2723],{4002:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"quick-start","title":"Quick Start","description":"This guide will help you quickly deploy and run the Open-LLM-VTuber project.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/en/docs/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/quick-start.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"Project Overview","permalink":"/en/docs/intro"},"next":{"title":"\u7528\u6237\u6307\u5357","permalink":"/en/docs/user-guide"}}');var r=i(4848),t=i(8453),o=i(5537),l=i(9329);const a={sidebar_position:2},d="Quick Start",c={},h=[{value:"Device Requirements",id:"device-requirements",level:2},{value:"Minimum Requirements",id:"minimum-requirements",level:3},{value:"Recommended Device Requirements for Local Operation",id:"recommended-device-requirements-for-local-operation",level:3},{value:"Environment Preparation",id:"environment-preparation",level:2},{value:"Install Git",id:"install-git",level:3},{value:"Install FFmpeg",id:"install-ffmpeg",level:3},{value:"Verify ffmpeg installation",id:"verify-ffmpeg-installation",level:4},{value:"NVIDIA GPU Support",id:"nvidia-gpu-support",level:3},{value:"Windows Installation Steps:",id:"windows-installation-steps",level:4},{value:"Verify Installation:",id:"verify-installation",level:4},{value:"Python Environment Management",id:"python-environment-management",level:3},{value:"Manual Deployment Guide",id:"manual-deployment-guide",level:2},{value:"1. Get the Project Code",id:"1-get-the-project-code",level:3},{value:"2. Install Project Dependencies",id:"2-install-project-dependencies",level:3},{value:"3. Configure LLM",id:"3-configure-llm",level:3},{value:"Install Ollama",id:"install-ollama",level:4},{value:"Modify Configuration File",id:"modify-configuration-file",level:4},{value:"4. Configure Other Modules",id:"4-configure-other-modules",level:3},{value:"5. Start the Project",id:"5-start-the-project",level:3},{value:"Further Reading",id:"further-reading",level:2},{value:"Desktop Pet Mode, Desktop Mode, and Web Mode",id:"desktop-pet-mode-desktop-mode-and-web-mode",level:3},{value:"Modifying Live2D Models",id:"modifying-live2d-models",level:3},{value:"Community, Discussion, and Communication",id:"community-discussion-and-communication",level:3},{value:"Common Issue Troubleshooting &amp; Frequently Asked Questions",id:"common-issue-troubleshooting--frequently-asked-questions",level:2},{value:"If you encounter the <code>Error calling the chat endpoint...</code> error, please check:",id:"if-you-encounter-the-error-calling-the-chat-endpoint-error-please-check",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,r.jsx)(n.p,{children:"This guide will help you quickly deploy and run the Open-LLM-VTuber project."}),"\n",(0,r.jsxs)(n.p,{children:["The configuration deployed in this guide is Ollama + sherpa-onnx-asr (SenseVoiceSmall) + edge_tts. For in-depth customization, please refer to the relevant sections in the ",(0,r.jsx)(n.a,{href:"/docs/user-guide",children:"User Guide"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"If you replace Ollama with OpenAI Compatible and sherpa-onnx-asr (SenseVoiceSmall) with groq_whisper_asr, you only need to configure the API Key to use it. There is no need to download model files, and you can skip configuring the local GPU."})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["This project only recommends using ",(0,r.jsx)(n.strong,{children:"Chrome"}),". Known issues exist with browsers like Edge and Safari, such as model expressions not working."]})}),"\n",(0,r.jsxs)(n.admonition,{title:"About Proxies",type:"danger",children:[(0,r.jsx)(n.p,{children:"If you are located in mainland China, it is recommended to enable a proxy before deploying and using this project to ensure that all resources can be downloaded smoothly."}),(0,r.jsxs)(n.p,{children:["If you encounter an issue where local services (ollama, deeplx, gptsovits) cannot be accessed after enabling the proxy but can be accessed after disabling the proxy, please ensure that your proxy bypasses local addresses (localhost), or close the proxy after all resources are downloaded before running this project. For more information, refer to ",(0,r.jsx)(n.a,{href:"https://www.clashverge.dev/guide/bypass.html",children:"Setting Proxy Bypass"}),"."]}),(0,r.jsx)(n.p,{children:"Groq Whisper API, OpenAI API, and other foreign large model/inference platform APIs generally cannot use proxies from Hong Kong."})]}),"\n",(0,r.jsx)(n.h2,{id:"device-requirements",children:"Device Requirements"}),"\n",(0,r.jsx)(n.h3,{id:"minimum-requirements",children:"Minimum Requirements"}),"\n",(0,r.jsx)(n.p,{children:"Most of the heavy components (ASR, LLM, TTS, and translation) of this project can be chosen to use APIs instead of local computing, allowing you to choose which components you wish to run locally while using APIs for those that your local system cannot handle."}),"\n",(0,r.jsx)(n.p,{children:"Therefore, the minimum device requirements for this project are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A computer"}),"\n",(0,r.jsx)(n.li,{children:"A Raspberry Pi as well if you insist"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"recommended-device-requirements-for-local-operation",children:"Recommended Device Requirements for Local Operation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mac with M series chip"}),"\n",(0,r.jsx)(n.li,{children:"Nvidia GPU"}),"\n",(0,r.jsx)(n.li,{children:"Newer AMD GPU (great if it supports ROCm)"}),"\n",(0,r.jsx)(n.li,{children:"Other GPUs"}),"\n",(0,r.jsx)(n.li,{children:"Or a CPU powerful enough to substitute for a GPU"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This project supports various backends for speech recognition (ASR), large language models (LLM), and text-to-speech (TTS). Please choose wisely according to your hardware capabilities. If you find the operation too slow, please select smaller models or use APIs."}),"\n",(0,r.jsx)(n.p,{children:"For the components selected in this quick start guide, you will need a CPU with normal speed (for ASR), a GPU supported by Ollama (for LLM), and an internet connection (for TTS)."}),"\n",(0,r.jsx)(n.h2,{id:"environment-preparation",children:"Environment Preparation"}),"\n",(0,r.jsx)(n.h3,{id:"install-git",children:"Install Git"}),"\n",(0,r.jsxs)(o.A,{groupId:"operating-systems",children:[(0,r.jsxs)(l.A,{value:"windows",label:"Windows",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Run in the command line\nwinget install Git.Git\n"})}),(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Regarding winget"})}),(0,r.jsxs)(n.p,{children:["If you are using an older version of Windows (",(0,r.jsx)(n.strong,{children:"prior to Windows 11 (21H2)"}),"), your computer may ",(0,r.jsx)(n.strong,{children:"not have the winget package manager built-in"}),". You can search for and download winget from the Microsoft Store."]}),(0,r.jsxs)(n.p,{children:["If you are using a version ",(0,r.jsx)(n.strong,{children:"before Windows 10 1809 (build 17763)"}),", your computer may ",(0,r.jsx)(n.strong,{children:"not support winget"}),". Please visit the ",(0,r.jsx)(n.a,{href:"https://git-scm.com/downloads/win",children:"Git official website"})," to download and install Git. For ffmpeg, please search online for ffmpeg installation guides."]})]})]}),(0,r.jsx)(l.A,{value:"macos",label:"macOS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# If Homebrew is not installed, please run this command to install it, or refer to https://brew.sh/zh-cn/ for installation\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# Install Git\nbrew install git\n'})})}),(0,r.jsx)(l.A,{value:"linux",label:"Linux",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Ubuntu/Debian\nsudo apt install git\n\n# CentOS/RHEL\nsudo dnf install git\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"install-ffmpeg",children:"Install FFmpeg"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"FFmpeg is a required dependency. Without FFmpeg, errors related to missing audio files will occur."})}),"\n",(0,r.jsxs)(o.A,{groupId:"operating-systems",children:[(0,r.jsx)(l.A,{value:"windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Run in the command line\nwinget install ffmpeg\n"})})}),(0,r.jsx)(l.A,{value:"macos",label:"macOS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# If Homebrew is not installed, please run this command to install it, or refer to https://brew.sh/zh-cn/ for installation\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# Install ffmpeg\nbrew install ffmpeg\n'})})}),(0,r.jsx)(l.A,{value:"linux",label:"Linux",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Ubuntu/Debian\nsudo apt install ffmpeg\n\n# CentOS/RHEL\nsudo dnf install ffmpeg\n"})})})]}),"\n",(0,r.jsx)(n.h4,{id:"verify-ffmpeg-installation",children:"Verify ffmpeg installation"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command in the command line:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"ffmpeg -version\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you see text similar to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"ffmpeg version 7.1 Copyright (c) 2000-2024 the FFmpeg developers\n...(followed by a long string of text)\n"})}),"\n",(0,r.jsx)(n.p,{children:"it indicates that you have successfully installed ffmpeg."}),"\n",(0,r.jsx)(n.h3,{id:"nvidia-gpu-support",children:"NVIDIA GPU Support"}),"\n",(0,r.jsx)(n.p,{children:"If you have an NVIDIA GPU and want to use it to run local models, you need to:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Install NVIDIA GPU drivers"}),"\n",(0,r.jsx)(n.li,{children:"Install CUDA Toolkit (recommended version 11.8 or higher)"}),"\n",(0,r.jsx)(n.li,{children:"Install the corresponding version of cuDNN"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"windows-installation-steps",children:"Windows Installation Steps:"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The following paths are for reference only and need to be modified according to the version and actual installation path."})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Check GPU Driver Version"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Right-click on the desktop and select "NVIDIA Control Panel"'}),"\n",(0,r.jsx)(n.li,{children:"Help -> System Information -> Components, check the driver version"}),"\n",(0,r.jsxs)(n.li,{children:["Or visit the ",(0,r.jsx)(n.a,{href:"https://www.nvidia.cn/drivers/lookup/",children:"NVIDIA Driver Download Page"})," to download the latest driver"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Install CUDA Toolkit"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Visit ",(0,r.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html",children:"CUDA Version Compatibility"})," to check the CUDA version supported by your driver version"]}),"\n",(0,r.jsxs)(n.li,{children:["Visit the ",(0,r.jsx)(n.a,{href:"https://developer.nvidia.com/cuda-toolkit-archive",children:"CUDA Toolkit Download Page"})," to download the corresponding version"]}),"\n",(0,r.jsxs)(n.li,{children:["After installation, add the following paths to the system environment variable PATH:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"C:\\NVIDIA GPU Computing Toolkit\\CUDA\\v<version>\\bin\nC:\\NVIDIA GPU Computing Toolkit\\CUDA\\v<version>\\lib\\x64\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Install cuDNN"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Visit the ",(0,r.jsx)(n.a,{href:"https://developer.nvidia.com/cudnn",children:"cuDNN Download Page"})," (requires an NVIDIA account)"]}),"\n",(0,r.jsx)(n.li,{children:"Download the cuDNN version that matches your CUDA version"}),"\n",(0,r.jsxs)(n.li,{children:["After extracting, copy the files to the CUDA installation directory:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Copy files from ",(0,r.jsx)(n.code,{children:"cuda/bin"})," to ",(0,r.jsx)(n.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v<version>\\bin"})]}),"\n",(0,r.jsxs)(n.li,{children:["Copy files from ",(0,r.jsx)(n.code,{children:"cuda/include"})," to ",(0,r.jsx)(n.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v<version>\\include"})]}),"\n",(0,r.jsxs)(n.li,{children:["Copy files from ",(0,r.jsx)(n.code,{children:"cuda/lib/x64"})," to ",(0,r.jsx)(n.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v<version>\\lib\\x64"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"verify-installation",children:"Verify Installation:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Check driver installation:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nvidia-smi\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Check CUDA installation:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nvcc --version\n"})}),"\n",(0,r.jsx)(n.h3,{id:"python-environment-management",children:"Python Environment Management"}),"\n",(0,r.jsxs)(n.p,{children:["Starting from version v1.0.0, we recommend using ",(0,r.jsx)(n.a,{href:"https://docs.astral.sh/uv/",children:"uv"})," as the dependency management tool."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"If you prefer to use conda or venv, you can also use these tools. The project is fully compatible with the standard pip installation method."})}),"\n",(0,r.jsxs)(o.A,{groupId:"operating-systems",children:[(0,r.jsx)(l.A,{value:"windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:'# Method 1: PowerShell\npowershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"\n# Or wget -qO- https://astral.sh/uv/install.sh | sh if you don\'t have curl\n\n# Method 2: winget\nwinget install --id=astral-sh.uv -e\n\n# Important: If you choose winget, restart the shell or source the shell config file.\n'})})}),(0,r.jsx)(l.A,{value:"unix",label:"macOS/Linux",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Method 1:  curl\ncurl -LsSf https://astral.sh/uv/install.sh | sh\n# Or wget -qO- https://astral.sh/uv/install.sh | sh if you don't have curl.\n\n# Method 2: homebrew (if installed)\nbrew install uv\n\n# Important: If you choose curl or wget, restart the shell or source the shell config file.\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["For more uv installation methods, refer to: ",(0,r.jsx)(n.a,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:"Installing uv"})]}),"\n",(0,r.jsx)(n.h2,{id:"manual-deployment-guide",children:"Manual Deployment Guide"}),"\n",(0,r.jsx)(n.h3,{id:"1-get-the-project-code",children:"1. Get the Project Code"}),"\n",(0,r.jsx)(n.p,{children:"There are two methods to acquire the project code."}),"\n",(0,r.jsxs)(o.A,{groupId:"code-clone-method",children:[(0,r.jsxs)(l.A,{value:"release",label:"Download Stable Release from GitHub",children:[(0,r.jsxs)(n.p,{children:["Visit the latest ",(0,r.jsx)(n.a,{href:"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/releases",children:"release page"})," and download the ZIP file named similar to ",(0,r.jsx)(n.code,{children:"Open-LLM-VTuber-v1.x.x.zip"}),"."]}),(0,r.jsxs)(n.p,{children:["If you want Desktop Pet Mode or desktop client version, you can also download files starting with ",(0,r.jsx)(n.code,{children:"open-llm-vtuber-electron"})," - Windows users download the exe file, while the macOS users download the dmg file. This desktop client can launch Pet Mode after you configured backend and successfully start the backend server."]})]}),(0,r.jsxs)(l.A,{value:"git",label:"Git Command Pull",children:[(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Ensure stable network connection when using Git. Mainland China users may need to use a proxy."})}),(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Starting from ",(0,r.jsx)(n.code,{children:"v1.0.0"}),", frontend code (user interface) has been moved to a separate repository. We've established build workflows and linked frontend code via git submodule to the ",(0,r.jsx)(n.code,{children:"frontend"})," directory. Adding the ",(0,r.jsx)(n.code,{children:"--recursive"})," flag is therefore required in git clone command."]})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Clone repository / Download latest Github Release\ngit clone https://github.com/Open-LLM-VTuber/Open-LLM-VTuber --recursive\n\n# Enter project directory\ncd Open-LLM-VTuber\n"})}),(0,r.jsxs)(n.p,{children:["For Desktop Pet Mode or desktop client, visit ",(0,r.jsx)(n.a,{href:"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases/latest",children:"Open-LLM-VTuber-Web Releases"})," and download ",(0,r.jsx)(n.code,{children:"open-llm-vtuber-electron"})," files - Windows users download the exe file, while the macOS users download the dmg file. This desktop client can launch Pet Mode after you configured backend and successfully start the backend server."]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"2-install-project-dependencies",children:"2. Install Project Dependencies"}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u26a0\ufe0f"," If you are not located in mainland China, don't use mirror sources."]}),"\n"]}),(0,r.jsx)(n.p,{children:"Users in mainland China can configure mirrors for Python and pip to improve download speeds. Here, we'll set up the Alibaba mirror."}),(0,r.jsxs)(s,{children:[(0,r.jsxs)(n.p,{children:["Please add the following content to the bottom of the ",(0,r.jsx)(n.code,{children:"pyproject.toml"})," file in your project directory."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[[tool.uv.index]]\nurl = "https://mirrors.aliyun.com/pypi/simple"\ndefault = true\n'})}),(0,r.jsx)(n.p,{children:"Some other mirror sources (modify the url part above):"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Tencent mirror: ",(0,r.jsx)(n.a,{href:"https://mirrors.cloud.tencent.com/pypi/simple/",children:"https://mirrors.cloud.tencent.com/pypi/simple/"})]}),"\n",(0,r.jsxs)(n.li,{children:["USTC mirror: ",(0,r.jsx)(n.a,{href:"https://pypi.mirrors.ustc.edu.cn/simple",children:"https://pypi.mirrors.ustc.edu.cn/simple"})]}),"\n",(0,r.jsxs)(n.li,{children:["Tsinghua mirror (seems to have some issues with our project): ",(0,r.jsx)(n.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple",children:"https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple"})]}),"\n",(0,r.jsxs)(n.li,{children:["Huawei mirror: ",(0,r.jsx)(n.a,{href:"https://repo.huaweicloud.com/repository/pypi/simple",children:"https://repo.huaweicloud.com/repository/pypi/simple"})]}),"\n",(0,r.jsxs)(n.li,{children:["Baidu mirror: ",(0,r.jsx)(n.a,{href:"https://mirror.baidu.com/pypi/simple",children:"https://mirror.baidu.com/pypi/simple"})]}),"\n"]}),(0,r.jsx)(n.p,{children:"Some mirrors may be unstable at times. If you encounter issues, try switching to a different mirror.\nDon't enable proxy when using mirror sources."})]})]}),"\n",(0,r.jsx)(n.p,{children:"Verify that uv is installed correctly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"uv --version\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create the environment and install dependencies:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Make sure you run this command in the project root directory\nuv sync\n# This command will create a `.venv` virtual environment\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"For users in mainland China who encountered a problem at this step, please enable your proxy and try again."})}),"\n",(0,r.jsx)(n.h3,{id:"3-configure-llm",children:"3. Configure LLM"}),"\n",(0,r.jsxs)(n.p,{children:["We will use ",(0,r.jsx)(n.a,{href:"https://github.com/ollama/ollama",children:"Ollama"})," as an example for configuration. For other options, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/user-guide/backend/llm",children:"LLM Configuration Guide"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Other Options",type:"info",children:[(0,r.jsx)(n.p,{children:"If you do not want to use Ollama / encounter difficult issues with Ollama configuration, this project also supports:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"OpenAI Compatible API"}),"\n",(0,r.jsx)(n.li,{children:"OpenAI Official API"}),"\n",(0,r.jsx)(n.li,{children:"Claude"}),"\n",(0,r.jsx)(n.li,{children:"Gemini"}),"\n",(0,r.jsx)(n.li,{children:"Mistral"}),"\n",(0,r.jsx)(n.li,{children:"Zhipu"}),"\n",(0,r.jsx)(n.li,{children:"DeepSeek"}),"\n",(0,r.jsx)(n.li,{children:"LM Studio (similar to Ollama, easier to use)"}),"\n",(0,r.jsx)(n.li,{children:"vLLM (better performance, more complex configuration)"}),"\n",(0,r.jsx)(n.li,{children:"llama.cpp (directly runs .gguf format models)"}),"\n",(0,r.jsx)(n.li,{children:"And more (most LLM inference backends and APIs support OpenAI format and can be directly integrated into this project)"}),"\n"]}),(0,r.jsxs)(n.p,{children:["For more information, refer to the ",(0,r.jsx)(n.a,{href:"/docs/user-guide/backend/llm",children:"LLM Configuration Guide"}),"."]})]}),"\n",(0,r.jsx)(n.h4,{id:"install-ollama",children:"Install Ollama"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Download and install from the ",(0,r.jsx)(n.a,{href:"https://ollama.com/",children:"Ollama Official Website"})]}),"\n",(0,r.jsx)(n.li,{children:"Verify installation:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ollama --version\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Download and run a model (using ",(0,r.jsx)(n.code,{children:"qwen2.5:latest"})," as an example):"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ollama run qwen2.5:latest\n# After successful execution, you can directly chat with qwen2.5:latest\n# You can exit the chat interface (Ctrl/Command + D), but do not close the command line\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"View installed models:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ollama list\n# NAME                ID              SIZE      MODIFIED\n# qwen2.5:latest      845dbda0ea48    4.7 GB    2 minutes ago\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["When looking for model names, use the ",(0,r.jsx)(n.code,{children:"ollama list"})," command to check the models downloaded in ollama, and directly copy and paste the model name into the ",(0,r.jsx)(n.code,{children:"model"})," option to avoid issues like incorrect model names, full-width colons, or spaces."]})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"When selecting a model, consider your GPU memory capacity and computing power. If the model file size exceeds the GPU memory capacity, the model will be forced to use CPU computation, which is very slow. Additionally, the smaller the model's parameter count, the lower the conversation latency. If you want to reduce conversation latency, choose a model with a lower parameter count."})}),"\n",(0,r.jsx)(n.h4,{id:"modify-configuration-file",children:"Modify Configuration File"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can overwrite the contents of ",(0,r.jsx)(n.code,{children:"conf.yaml"})," with the contents of ",(0,r.jsx)(n.code,{children:"conf.CN.yaml"})," to get preset configurations more suitable for Chinese use."]})}),"\n",(0,r.jsxs)(n.p,{children:["Edit ",(0,r.jsx)(n.code,{children:"conf.yaml"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Set ",(0,r.jsx)(n.code,{children:"llm_provider"})," under ",(0,r.jsx)(n.code,{children:"basic_memory_agent"})," to ",(0,r.jsx)(n.code,{children:"ollama_llm"})]}),"\n",(0,r.jsxs)(n.li,{children:["Adjust the settings under ",(0,r.jsx)(n.code,{children:"ollama_llm"})," in the ",(0,r.jsx)(n.code,{children:"llm_configs"})," section:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"base_url"})," can remain default for local operation, no need to modify."]}),"\n",(0,r.jsxs)(n.li,{children:["Set ",(0,r.jsx)(n.code,{children:"model"})," to the model you are using, such as ",(0,r.jsx)(n.code,{children:"qwen2.5:latest"})," used in this guide."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"ollama_llm:\n  base_url: http://localhost:11434  # Keep default for local operation\n  model: qwen2.5:latest            # Model name obtained from ollama list\n  temperature: 0.7                 # Controls response randomness, higher values are more random (0~1)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For detailed explanations of the configuration file, refer to ",(0,r.jsx)(n.a,{href:"/docs/user-guide/backend/config.md",children:"User Guide/Configuration File"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"4-configure-other-modules",children:"4. Configure Other Modules"}),"\n",(0,r.jsxs)(n.p,{children:["The default configuration in this project's ",(0,r.jsx)(n.code,{children:"conf.yaml"})," uses sherpa-onnx-asr (SenseVoiceSmall) and edgeTTS, and translation is disabled by default, so you do not need to make modifications."]}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, you can refer to the ",(0,r.jsx)(n.a,{href:"/en/docs/user-guide/backend/asr",children:"ASR Configuration Guide"}),", ",(0,r.jsx)(n.a,{href:"/en/docs/user-guide/backend/tts",children:"TTS Configuration Guide"}),", and ",(0,r.jsx)(n.a,{href:"/en/docs/user-guide/backend/translate",children:"Translator Configuration Guide"})," for modifications."]}),"\n",(0,r.jsx)(n.h3,{id:"5-start-the-project",children:"5. Start the Project"}),"\n",(0,r.jsx)(n.p,{children:"Run the backend service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"uv run run_server.py\n# The first run may take longer as some models are downloaded.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After successful execution, visit ",(0,r.jsx)(n.code,{children:"http://localhost:12393"})," to open the web interface."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Desktop Application",type:"tip",children:[(0,r.jsxs)(n.p,{children:["If you prefer an Electron application (window mode + desktop mode), you can download the corresponding platform Electron client from ",(0,r.jsx)(n.a,{href:"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases",children:"Open-LLM-VTuber-Web Releases"}),", which can be used directly while the backend service is running. You may encounter ",(0,r.jsx)(n.strong,{children:"security warnings"})," due to the lack of code signing - please check ",(0,r.jsx)(n.a,{href:"/en/docs/user-guide/frontend/mode",children:"Mode Introduction"})," for details and solutions."]}),(0,r.jsxs)(n.p,{children:["For more information about the frontend, refer to the ",(0,r.jsx)(n.a,{href:"./user-guide/frontend/",children:"Frontend Guide"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsx)(n.h3,{id:"desktop-pet-mode-desktop-mode-and-web-mode",children:"Desktop Pet Mode, Desktop Mode, and Web Mode"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(8195).A+"",width:"1358",height:"748"})}),"\n",(0,r.jsxs)(n.p,{children:["For an introduction and usage guide of the Desktop Pet Mode, please refer to ",(0,r.jsx)(n.a,{href:"user-guide/frontend/mode",children:"Frontend/Mode Introduction"})]}),"\n",(0,r.jsx)(n.h3,{id:"modifying-live2d-models",children:"Modifying Live2D Models"}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to the ",(0,r.jsx)(n.a,{href:"user-guide/live2d",children:"Live2D Guide"})]}),"\n",(0,r.jsx)(n.h3,{id:"community-discussion-and-communication",children:"Community, Discussion, and Communication"}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to ",(0,r.jsx)(n.a,{href:"community/contact",children:"Participate in Discussions"})]}),"\n",(0,r.jsx)(n.h2,{id:"common-issue-troubleshooting--frequently-asked-questions",children:"Common Issue Troubleshooting & Frequently Asked Questions"}),"\n",(0,r.jsxs)(n.p,{children:["Please refer to the ",(0,r.jsx)(n.a,{href:"faq/",children:"FAQ"})]}),"\n",(0,r.jsxs)(n.h3,{id:"if-you-encounter-the-error-calling-the-chat-endpoint-error-please-check",children:["If you encounter the ",(0,r.jsx)(n.code,{children:"Error calling the chat endpoint..."})," error, please check:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Whether ",(0,r.jsx)(n.a,{href:"http://localhost:11434/",children:"http://localhost:11434/"})," is accessible. If not, it may be because ",(0,r.jsx)(n.code,{children:"ollama run"})," did not run successfully, or the command line was closed after successful execution."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If the error message indicates ",(0,r.jsx)(n.code,{children:"Model not found, try pulling it..."}),", use ",(0,r.jsx)(n.code,{children:"ollama list"})," to check the installed model names and ensure the model name in the configuration file matches the list exactly."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If your proxy software does not bypass local addresses, Ollama will not be able to connect. Try temporarily disabling the proxy or refer to the previous section to set up proxy bypass for local addresses."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9329:(e,n,i)=>{i.d(n,{A:()=>o});i(6540);var s=i(4164);const r={tabItem:"tabItem_Ymn6"};var t=i(4848);function o(e){let{children:n,hidden:i,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:i,children:n})}},5537:(e,n,i)=>{i.d(n,{A:()=>w});var s=i(6540),r=i(4164),t=i(5627),o=i(6347),l=i(372),a=i(604),d=i(1861),c=i(8749);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:r}}=e;return{value:n,label:i,attributes:s,default:r}}))}(i);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:i}=e;const r=(0,o.W6)(),t=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,a.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function f(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,t=u(e),[o,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[d,h]=m({queryString:i,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,c.Dv)(i);return[r,(0,s.useCallback)((e=>{i&&t.set(e)}),[i,t])]}({groupId:r}),j=(()=>{const e=d??f;return p({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{j&&a(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),x(e)}),[h,x,t]),tabValues:t}}var x=i(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(4848);function v(e){let{className:n,block:i,selectedValue:s,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.a_)(),c=e=>{const n=e.currentTarget,i=a.indexOf(n),r=l[i].value;r!==s&&(d(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=a.indexOf(e.currentTarget)+1;n=a[i]??a[0];break}case"ArrowLeft":{const i=a.indexOf(e.currentTarget)-1;n=a[i]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:l.map((e=>{let{value:n,label:i,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{a.push(e)},onKeyDown:h,onClick:c,...t,className:(0,r.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function y(e){let{lazy:n,children:i,selectedValue:t}=e;const o=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function b(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,g.jsx)(b,{...e,children:h(e.children)},String(n))}},8195:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pet-c04e08647b1b49f977aac0c85d71f9c2.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);