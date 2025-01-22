"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2723],{4002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"quick-start","title":"Quick Start","description":"This guide will help you quickly deploy and run the Open-LLM-VTuber project.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/en/docs/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/quick-start.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"\u9879\u76ee\u7b80\u4ecb","permalink":"/en/docs/intro"},"next":{"title":"\u7528\u6237\u6307\u5357","permalink":"/en/docs/user-guide"}}');var i=t(4848),s=t(8453),r=t(5537),o=t(9329);const a={sidebar_position:2},c="Quick Start",d={},h=[{value:"Environment Preparation",id:"environment-preparation",level:2},{value:"Install Git",id:"install-git",level:3},{value:"Install FFmpeg",id:"install-ffmpeg",level:3},{value:"NVIDIA GPU Support",id:"nvidia-gpu-support",level:3},{value:"Windows Installation Steps:",id:"windows-installation-steps",level:4},{value:"Verify Installation:",id:"verify-installation",level:4},{value:"Python Environment Management",id:"python-environment-management",level:3},{value:"Manual Deployment Guide",id:"manual-deployment-guide",level:2},{value:"1. Get the Project Code",id:"1-get-the-project-code",level:3},{value:"2. Install Project Dependencies",id:"2-install-project-dependencies",level:3},{value:"3. Configure LLM",id:"3-configure-llm",level:3},{value:"Install Ollama",id:"install-ollama",level:4},{value:"Modify Configuration File",id:"modify-configuration-file",level:4},{value:"4. Configure Other Modules",id:"4-configure-other-modules",level:3},{value:"5. Start the Project",id:"5-start-the-project",level:3},{value:"Common Issue Troubleshooting",id:"common-issue-troubleshooting",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,i.jsx)(n.p,{children:"This guide will help you quickly deploy and run the Open-LLM-VTuber project."}),"\n",(0,i.jsxs)(n.p,{children:["The configuration deployed in this guide is Ollama + sherpa-onnx-asr (SenseVoiceSmall) + edge_tts. For in-depth customization, please refer to the relevant sections in the ",(0,i.jsx)(n.a,{href:"/docs/user-guide",children:"User Guide"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If you replace Ollama with OpenAI Compatible and sherpa-onnx-asr (SenseVoiceSmall) with groq_whisper_asr, you only need to configure the API Key to use it. There is no need to download model files, and you can skip configuring the local GPU."})}),"\n",(0,i.jsxs)(n.admonition,{title:"About Proxies",type:"danger",children:[(0,i.jsx)(n.p,{children:"If you are located in mainland China, it is recommended to enable a proxy before deploying and using this project to ensure that all resources can be downloaded smoothly."}),(0,i.jsxs)(n.p,{children:["If you encounter an issue where local services (ollama, deeplx, gptsovits) cannot be accessed after enabling the proxy but can be accessed after disabling the proxy, please ensure that your proxy bypasses local addresses (localhost), or close the proxy after all resources are downloaded before running this project. For more information, refer to ",(0,i.jsx)(n.a,{href:"https://www.clashverge.dev/guide/bypass.html",children:"Setting Proxy Bypass"}),"."]}),(0,i.jsx)(n.p,{children:"Groq Whisper API, OpenAI API, and other foreign large model/inference platform APIs generally cannot use proxies from Hong Kong."})]}),"\n",(0,i.jsx)(n.h2,{id:"environment-preparation",children:"Environment Preparation"}),"\n",(0,i.jsx)(n.h3,{id:"install-git",children:"Install Git"}),"\n",(0,i.jsxs)(r.A,{groupId:"operating-systems",children:[(0,i.jsxs)(o.A,{value:"windows",label:"Windows",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Run in the command line\nwinget install Git.Git\n"})}),(0,i.jsxs)(n.p,{children:["Or download the installation package from the ",(0,i.jsx)(n.a,{href:"https://git-scm.com/downloads/win",children:"Git official website"})," to install."]})]}),(0,i.jsx)(o.A,{value:"macos",label:"macOS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# If Homebrew is not installed, please run this command to install it, or refer to https://brew.sh/zh-cn/ for installation\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# Install Git\nbrew install git\n'})})}),(0,i.jsx)(o.A,{value:"linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Ubuntu/Debian\nsudo apt install git\n\n# CentOS/RHEL\nsudo dnf install git\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"install-ffmpeg",children:"Install FFmpeg"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"FFmpeg is a required dependency. Without FFmpeg, errors related to missing audio files will occur."})}),"\n",(0,i.jsxs)(r.A,{groupId:"operating-systems",children:[(0,i.jsx)(o.A,{value:"windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Run in the command line\nwinget install ffmpeg\n"})})}),(0,i.jsx)(o.A,{value:"macos",label:"macOS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# If Homebrew is not installed, please run this command to install it, or refer to https://brew.sh/zh-cn/ for installation\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# Install ffmpeg\nbrew install ffmpeg\n'})})}),(0,i.jsx)(o.A,{value:"linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Ubuntu/Debian\nsudo apt install ffmpeg\n\n# CentOS/RHEL\nsudo dnf install ffmpeg\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"nvidia-gpu-support",children:"NVIDIA GPU Support"}),"\n",(0,i.jsx)(n.p,{children:"If you have an NVIDIA GPU and want to use it to run local models, you need to:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install NVIDIA GPU drivers"}),"\n",(0,i.jsx)(n.li,{children:"Install CUDA Toolkit (recommended version 11.8 or higher)"}),"\n",(0,i.jsx)(n.li,{children:"Install the corresponding version of cuDNN"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"windows-installation-steps",children:"Windows Installation Steps:"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The following paths are for reference only and need to be modified according to the version and actual installation path."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Check GPU Driver Version"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Right-click on the desktop and select "NVIDIA Control Panel"'}),"\n",(0,i.jsx)(n.li,{children:"Help -> System Information -> Components, check the driver version"}),"\n",(0,i.jsxs)(n.li,{children:["Or visit the ",(0,i.jsx)(n.a,{href:"https://www.nvidia.cn/drivers/lookup/",children:"NVIDIA Driver Download Page"})," to download the latest driver"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install CUDA Toolkit"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html",children:"CUDA Version Compatibility"})," to check the CUDA version supported by your driver version"]}),"\n",(0,i.jsxs)(n.li,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://developer.nvidia.com/cuda-toolkit-archive",children:"CUDA Toolkit Download Page"})," to download the corresponding version"]}),"\n",(0,i.jsxs)(n.li,{children:["After installation, add the following paths to the system environment variable PATH:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"C:\\NVIDIA GPU Computing Toolkit\\CUDA\\v<version>\\bin\nC:\\NVIDIA GPU Computing Toolkit\\CUDA\\v<version>\\lib\\x64\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install cuDNN"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://developer.nvidia.com/cudnn",children:"cuDNN Download Page"})," (requires an NVIDIA account)"]}),"\n",(0,i.jsx)(n.li,{children:"Download the cuDNN version that matches your CUDA version"}),"\n",(0,i.jsxs)(n.li,{children:["After extracting, copy the files to the CUDA installation directory:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Copy files from ",(0,i.jsx)(n.code,{children:"cuda/bin"})," to ",(0,i.jsx)(n.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v<version>\\bin"})]}),"\n",(0,i.jsxs)(n.li,{children:["Copy files from ",(0,i.jsx)(n.code,{children:"cuda/include"})," to ",(0,i.jsx)(n.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v<version>\\include"})]}),"\n",(0,i.jsxs)(n.li,{children:["Copy files from ",(0,i.jsx)(n.code,{children:"cuda/lib/x64"})," to ",(0,i.jsx)(n.code,{children:"C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v<version>\\lib\\x64"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"verify-installation",children:"Verify Installation:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Check driver installation:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nvidia-smi\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Check CUDA installation:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nvcc --version\n"})}),"\n",(0,i.jsx)(n.h3,{id:"python-environment-management",children:"Python Environment Management"}),"\n",(0,i.jsxs)(n.p,{children:["Starting from version v1.0.0, we recommend using ",(0,i.jsx)(n.a,{href:"https://docs.astral.sh/uv/",children:"uv"})," as the dependency management tool."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If you prefer to use conda or venv, you can also use these tools. The project is fully compatible with the standard pip installation method."})}),"\n",(0,i.jsxs)(r.A,{groupId:"operating-systems",children:[(0,i.jsx)(o.A,{value:"windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:'# Method 1: PowerShell\npowershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"\n\n# Method 2: winget\nwinget install --id=astral-sh.uv -e\n'})})}),(0,i.jsx)(o.A,{value:"unix",label:"macOS/Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -LsSf https://astral.sh/uv/install.sh | sh\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["For more uv installation methods, refer to: ",(0,i.jsx)(n.a,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:"Installing uv"})]}),"\n",(0,i.jsx)(n.h2,{id:"manual-deployment-guide",children:"Manual Deployment Guide"}),"\n",(0,i.jsx)(n.h3,{id:"1-get-the-project-code",children:"1. Get the Project Code"}),"\n",(0,i.jsxs)(n.admonition,{title:"Development Version Note",type:"info",children:[(0,i.jsxs)(n.p,{children:["Currently in the v1.0.0 development phase, you need to switch to the ",(0,i.jsx)(n.code,{children:"superb-refactoring"})," branch."]}),(0,i.jsxs)(n.p,{children:["Starting from ",(0,i.jsx)(n.code,{children:"v1.0.0"}),", the frontend code has been split into a separate repository. We have established a complete build process and linked the frontend code to the main repository's ",(0,i.jsx)(n.code,{children:"frontend"})," directory via git submodule."]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Clone the repository\ngit clone https://github.com/t41372/Open-LLM-VTuber\n\n# Enter the project directory\ncd Open-LLM-VTuber\n\n# Switch to the development branch\ngit switch superb-refactoring\n\n# Since git submodule linked content is not automatically synced to the local directory, we need to manually fetch the frontend code.\ngit submodule update --init --recursive\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-install-project-dependencies",children:"2. Install Project Dependencies"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Users in mainland China can configure Python and pip mirror sources to improve download speed."}),(0,i.jsxs)(n.p,{children:["Please add the following content to the bottom of the ",(0,i.jsx)(n.code,{children:"pyproject.toml"})," file in the project directory:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[[tool.uv.index]]\nurl = "https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple"\ndefault = true\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"Verify that uv is installed correctly:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"uv --version\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create the environment and install dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Make sure you run this command in the project root directory\nuv sync\n# This command will create a `.venv` virtual environment\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-configure-llm",children:"3. Configure LLM"}),"\n",(0,i.jsxs)(n.p,{children:["We will use ",(0,i.jsx)(n.a,{href:"https://github.com/ollama/ollama",children:"Ollama"})," as an example for configuration. For other options, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/user-guide/backend/llm",children:"LLM Configuration Guide"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Other Options",type:"info",children:[(0,i.jsx)(n.p,{children:"If you do not want to use Ollama / encounter difficult issues with Ollama configuration, this project also supports:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"OpenAI Compatible API"}),"\n",(0,i.jsx)(n.li,{children:"OpenAI Official API"}),"\n",(0,i.jsx)(n.li,{children:"Claude"}),"\n",(0,i.jsx)(n.li,{children:"Gemini"}),"\n",(0,i.jsx)(n.li,{children:"Mistral"}),"\n",(0,i.jsx)(n.li,{children:"Zhipu"}),"\n",(0,i.jsx)(n.li,{children:"DeepSeek"}),"\n",(0,i.jsx)(n.li,{children:"LM Studio (similar to Ollama, easier to use)"}),"\n",(0,i.jsx)(n.li,{children:"vLLM (better performance, more complex configuration)"}),"\n",(0,i.jsx)(n.li,{children:"llama.cpp (directly runs .gguf format models)"}),"\n",(0,i.jsx)(n.li,{children:"And more (most LLM inference backends and APIs support OpenAI format and can be directly integrated into this project)"}),"\n"]}),(0,i.jsxs)(n.p,{children:["For more information, refer to the ",(0,i.jsx)(n.a,{href:"/docs/user-guide/backend/llm",children:"LLM Configuration Guide"}),"."]})]}),"\n",(0,i.jsx)(n.h4,{id:"install-ollama",children:"Install Ollama"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download and install from the ",(0,i.jsx)(n.a,{href:"https://ollama.com/",children:"Ollama Official Website"})]}),"\n",(0,i.jsx)(n.li,{children:"Verify installation:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ollama --version\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Download and run a model (using ",(0,i.jsx)(n.code,{children:"qwen2.5:latest"})," as an example):"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ollama run qwen2.5:latest\n# After successful execution, you can directly chat with qwen2.5:latest\n# You can exit the chat interface (Ctrl/Command + D), but do not close the command line\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"View installed models:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ollama list\n# NAME                ID              SIZE      MODIFIED\n# qwen2.5:latest      845dbda0ea48    4.7 GB    2 minutes ago\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["When looking for model names, use the ",(0,i.jsx)(n.code,{children:"ollama list"})," command to check the models downloaded in ollama, and directly copy and paste the model name into the ",(0,i.jsx)(n.code,{children:"model"})," option to avoid issues like incorrect model names, full-width colons, or spaces."]})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"When selecting a model, consider your GPU memory capacity and computing power. If the model file size exceeds the GPU memory capacity, the model will be forced to use CPU computation, which is very slow. Additionally, the smaller the model's parameter count, the lower the conversation latency. If you want to reduce conversation latency, choose a model with a lower parameter count."})}),"\n",(0,i.jsx)(n.h4,{id:"modify-configuration-file",children:"Modify Configuration File"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can overwrite the contents of ",(0,i.jsx)(n.code,{children:"conf.yaml"})," with the contents of ",(0,i.jsx)(n.code,{children:"conf.CN.yaml"})," to get preset configurations more suitable for Chinese use."]})}),"\n",(0,i.jsxs)(n.p,{children:["Edit ",(0,i.jsx)(n.code,{children:"conf.yaml"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"llm_provider"})," under ",(0,i.jsx)(n.code,{children:"basic_memory_agent"})," to ",(0,i.jsx)(n.code,{children:"ollama_llm"})]}),"\n",(0,i.jsxs)(n.li,{children:["Adjust the settings under ",(0,i.jsx)(n.code,{children:"ollama_llm"})," in the ",(0,i.jsx)(n.code,{children:"llm_configs"})," section:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"base_url"})," can remain default for local operation, no need to modify."]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"model"})," to the model you are using, such as ",(0,i.jsx)(n.code,{children:"qwen2.5:latest"})," used in this guide."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"ollama_llm:\n  base_url: http://localhost:11434  # Keep default for local operation\n  model: qwen2.5:latest            # Model name obtained from ollama list\n  temperature: 0.7                 # Controls response randomness, higher values are more random (0~1)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For detailed explanations of the configuration file, refer to ",(0,i.jsx)(n.a,{href:"/docs/user-guide/backend/config.md",children:"User Guide/Configuration File"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"4-configure-other-modules",children:"4. Configure Other Modules"}),"\n",(0,i.jsxs)(n.p,{children:["The default configuration in this project's ",(0,i.jsx)(n.code,{children:"conf.yaml"})," uses sherpa-onnx-asr (SenseVoiceSmall) and edgeTTS (requires a proxy), and translation is disabled by default, so you do not need to make modifications."]}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can refer to the ",(0,i.jsx)(n.a,{href:"/en/docs/user-guide/backend/asr",children:"ASR Configuration Guide"}),", ",(0,i.jsx)(n.a,{href:"/en/docs/user-guide/backend/tts",children:"TTS Configuration Guide"}),", and ",(0,i.jsx)(n.a,{href:"/en/docs/user-guide/backend/translate",children:"Translator Configuration Guide"})," for modifications."]}),"\n",(0,i.jsx)(n.h3,{id:"5-start-the-project",children:"5. Start the Project"}),"\n",(0,i.jsx)(n.p,{children:"Run the backend service:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"uv run run_server.py\n# The first run may take longer as some models are downloaded.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After successful execution, visit ",(0,i.jsx)(n.code,{children:"http://localhost:12393"})," to open the web interface."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Desktop Application",type:"tip",children:[(0,i.jsxs)(n.p,{children:["If you prefer an Electron application (window mode + desktop mode), you can download the corresponding platform Electron client from ",(0,i.jsx)(n.a,{href:"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases",children:"Open-LLM-VTuber-Web Releases"}),", which can be used directly while the backend service is running."]}),(0,i.jsxs)(n.p,{children:["For more information about the frontend, refer to the ",(0,i.jsx)(n.a,{href:"./user-guide/frontend/",children:"Frontend Guide"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"common-issue-troubleshooting",children:"Common Issue Troubleshooting"}),"\n",(0,i.jsxs)(n.p,{children:["If you encounter the ",(0,i.jsx)(n.code,{children:"Error calling the chat endpoint..."})," error, please check:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Whether ",(0,i.jsx)(n.a,{href:"http://localhost:11434/",children:"http://localhost:11434/"})," is accessible. If not, it may be because ",(0,i.jsx)(n.code,{children:"ollama run"})," did not run successfully, or the command line was closed after successful execution."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the error message indicates ",(0,i.jsx)(n.code,{children:"Model not found, try pulling it..."}),", use ",(0,i.jsx)(n.code,{children:"ollama list"})," to check the installed model names and ensure the model name in the configuration file matches the list exactly."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If your proxy software does not bypass local addresses, Ollama will not be able to connect. Try temporarily disabling the proxy or refer to the previous section to set up proxy bypass for local addresses."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var l=t(4164);const i={tabItem:"tabItem_Ymn6"};var s=t(4848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(i.tabItem,r),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>w});var l=t(6540),i=t(4164),s=t(5627),r=t(6347),o=t(372),a=t(604),c=t(1861),d=t(8749);function h(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:i}}=e;return{value:n,label:t,attributes:l,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=u(e),[r,a]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:s}))),[c,h]=m({queryString:t,groupId:i}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,l.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),j=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&a(j)}),[j]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function b(e){let{className:n,block:t,selectedValue:l,selectValue:r,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),i=o[t].value;i!==l&&(c(n),r(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>{a.push(e)},onKeyDown:h,onClick:d,...s,className:(0,i.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var l=t(6540);const i={},s=l.createContext(i);function r(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);