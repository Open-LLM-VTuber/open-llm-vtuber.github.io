---
sidebar_position: 6
---

# 常见问题

## 部署相关

### uv 安装后无法找到
- 如果你是用 `winget` 或者 `curl` 安装的 uv，需要重启命令行或者重新加载 shell 配置文件才能使环境变量生效。
- 详细说明请参考[快速开始](./quick-start.md)

### 如何选择合适的 LLM?
- 如果你希望快速部署且不想下载模型,建议使用 OpenAI Compatible API 或 Groq API
- 如果你想使用本地部署,建议根据显存大小选择合适的模型
- 详细说明请参考[LLM 配置指南](./user-guide/backend/llm.md)

### 遇到代理相关问题怎么办?
- 如果你在中国大陆,建议开启代理下载资源
- 如果本地服务无法访问,需要设置代理绕过本地地址
- 详细说明请参考[快速开始](./quick-start.md)

### 遇到 "Error calling the chat endpoint..." 错误怎么办?
常见原因和解决方案:
- 检查 Ollama 服务是否正常运行
- 确认模型名称是否与 `ollama list` 列出的完全一致
- 详细说明请参考[快速开始](./quick-start.md)

### 遇到 `AttributeError: 'NoneType' object has no attribute 'emo_str'` 错误怎么办
- `model_dict.json` 中的模型名与 `conf.yaml` 中的不对应
- `model_dict.json` 格式错误 (`Error decoding JSON from model dictionary file at model_dict.json`)

## 客户端相关

### Web 显示 `{"detail": "Not Found"}` 怎么办
- 可能是因为没有 `git submodule update --init --recursive` 或者这个命令之前的运行失败了。

### 使用远程的 Live2D 模型链接，报错 `Failed to load LiveD model: Error: Network error` 怎么办
- 这通常是因为 Web 使用 HTTP 协议无法加载 HTTPS 资源导致的
- 可以在浏览器设置中允许网站加载不安全内容(Insecure content)来解决:
  - Chrome: 点击地址栏右侧的盾牌图标 -> 网站设置 -> 不安全内容 -> 允许
  - Firefox: 点击地址栏左侧的锁图标 -> 关闭连接保护
  - Edge: 点击地址栏右侧的锁图标 -> 网站权限 -> 不安全内容 -> 允许

### 麦克风无法使用怎么办
- 请确保已授予浏览器或应用程序麦克风使用权限
- 检查麦克风输入音量是否合适 - 声音过小或过短可能无法触发语音检测。你可以在设置中调整检测阈值，详细设置请参考 [Web 模式](./user-guide/frontend/web.md)
- 如果你使用的是 Electron 桌面应用，尝试重启应用。
- 如果以上方法都无效，可以访问 https://www.vad.ricky0123.com/ 测试麦克风功能。如果该网站也无法正常使用麦克风，可能是系统音频设置或硬件问题

### 桌面客户端无法安装(Windows 已保护你的电脑)或者提示"已损坏"怎么办
- Windows 用户可以点击"更多信息"然后选择"仍要运行"
- macOS 用户需要调整系统设置并执行特定命令
- 详细解决方案请参考[模式介绍](./user-guide/frontend/mode.md)

### 远程访问 Web 界面时麦克风/摄像头/录屏无法使用怎么办 (`Failed to start screen capture:
NotSupportedError: Not supported`)
- 这是因为这些功能需要安全上下文(HTTPS 或 localhost)
- 如需远程使用,必须为 Web 服务器配置 HTTPS
- 详细说明请参考[模式介绍](./user-guide/frontend/mode.md)

### iOS 设备上语音功能异常怎么办?
- 这是由于 iOS 的安全限制导致的已知问题
- 需要不断点击才能使说话功能正常运行
- 详细说明请参考[模式介绍](./user-guide/frontend/mode.md)

### Electron 应用切换模式导致屏幕一片空白怎么办
- 属于小概率难以修复的 bug，实测几乎不会触发。
- 等待几秒，或者重启应用即可解决。

### 模型表情无法显示怎么办

## 其他问题

### 如何获取前端最新版本?
- 目前不支持自动更新
- 可以关注 Github Release 页面获取最新版本
- 详细说明请参考[模式介绍](./user-guide/frontend/mode.md)

### 项目支持哪些使用模式?
- Web 模式:通过浏览器访问
- 窗口模式:桌面客户端的默认模式
- 桌宠模式:提供背景透明、全局置顶的桌面伴侣体验
- 详细说明请参考[模式介绍](./user-guide/frontend/mode.md)