---
sidebar_position: 3
---


# Bilibili 直播指南

:::info 功能说明
我们提供了实验性的直播平台对接功能，可以将直播间的弹幕实时发送给 Agent 进行互动。目前仅支持 Bilibili 直播，实现了基础的弹幕读取和转发功能。AI 会依次阅读并回复收到的弹幕（目前，没有被回复的弹幕会被添加到队列中，当消息速度过快时，AI 会因为队列拥塞而产生较大的回复延迟）。

如果你想要支持更多的直播平台（如YouTube、Twitch等），欢迎参考[开发指南](../../development-guide/backend/live-dev)进行开发并提交贡献。另外，默认支持的 Bilibili 直播功能暂未实现礼物答谢、多条弹幕一起阅读等功能，开发者可以参考[开发指南](../../development-guide/backend/live-dev)来实现更多功能并提交贡献。
:::

## 0. 模块准备

要使用直播功能，你首先需要确保你在**项目根目录**下 clone 了 blivedm 模块：
```bash
git clone https://github.com/xfgryujk/blivedm/
```

考虑到很多人并不需要 bilibili 的子模块功能，所以这个模块没有被加到一开始 `git clone --recursive` 使用的 `.gitmodules` 文件中，需要你手动 clone。

## 1. 修改前端设置

直播功能的工作原理是通过 WebSocket 代理（proxy）服务来连接不同的组件：
- Bilibili 直播客户端（输入端）：接收直播间弹幕
- Open-LLM-VTuber 主程序（处理端）：分析弹幕内容，生成回应
- 前端界面（输出端）：展示 Live2D 模型和回应

要使前端正确地接收来自直播间的弹幕并显示响应，需要修改前端的 WebSocket URL 设置：

1. 打开 Web 界面的设置面板（点击左上角的设置图标）
2. 在 General 标签页中，找到 "WebSocket URL" 设置项
3. **将 WebSocket URL 修改为：** `ws://127.0.0.1:12393/proxy-ws`
   - 默认值通常是 `ws://127.0.0.1:12393/client-ws`
   - 将 `/client-ws` 改为 `/proxy-ws` 来连接到代理服务

<!-- ![](./img/web/setting.jpg) -->

:::note
修改 WebSocket URL 后，前端将直接连接到代理服务，而不是直接连接到 Open-LLM-VTuber 主程序。这意味着所有交互都将通过代理转发，包括从 Bilibili 直播间接收的弹幕。
:::

## 2. 配置 `conf.yaml`

要让 Open-LLM-VTuber 连接到你的 Bilibili 直播间并启用代理服务，你需要修改项目根目录下的 `conf.yaml` 文件。

### 2.1 启用 WebSocket 代理和直播 Prompt

在 `conf.yaml` 文件中找到并修改以下配置项：

```yaml
system_config:
  enable_proxy: true  # 必须设置为 true 才能启用直播功能的代理服务

tool_prompts:
  live_prompt: "live_prompt"  # 取消这行的注释，启用直播模式的特殊提示词
```

这些设置非常重要：
- `enable_proxy: true` - 启用 WebSocket 代理服务，这是直播功能工作的必要条件
- `live_prompt: "live_prompt"` - 指定直播模式下使用的特殊提示词文件，让 AI 更好地适应直播场景

### 2.2 配置 Bilibili 直播连接

在 `conf.yaml` 中找到 `live_config` 部分：

```yaml
# Live Streaming Integration
live_config:
  bilibili_live:
    # List of BiliBili live room IDs to monitor
    room_ids: [9447542]  # <---- 修改这里为你自己的直播间 ID
    # SESSDATA cookie value (optional, for authenticated requests)
    sessdata: ""          # <---- (可选) 填入你的 SESSDATA
```

### 2.3 配置 `room_ids`

- **获取房间号:** 进入你的 Bilibili 直播间网页，地址栏 URL `live.bilibili.com/` 后面的数字就是你的真实房间号。
- **填写配置:** 将获取到的房间号填入 `room_ids` 列表中。你可以添加多个房间号，程序会随机选择一个进行连接。
  - 示例: `room_ids: [1234567, 9876543]`

### 2.4 (可选) 配置 `sessdata`

- **作用:** `SESSDATA` 是 Bilibili 用于用户身份验证的 Cookie 值。如果不填此项，仍然可以连接直播间，但是收到的弹幕中用户名会被打码，UID 会变成 0。
- **获取方法:**
    1. 在浏览器中登录你的 Bilibili 账号。
    2. 打开 Bilibili 任意页面 (例如主页)。
    3. 按 `F12` 打开浏览器开发者工具。
    4. 切换到 "应用" (Application) 或 "存储" (Storage) 标签页。
    5. 在左侧找到 "Cookie" 项，并选择 `https://www.bilibili.com`。
    6. 在右侧列表中找到名为 `SESSDATA` 的条目，复制它的值。
- **填写配置:** 将复制的值粘贴到 `sessdata: ""` 的引号内。

:::danger 安全警告
`SESSDATA` 包含你的登录信息，泄露可能导致账号被盗。**请勿在任何公共场合分享你的 `SESSDATA`**，并确保 `conf.yaml` 文件不会被不信任的人访问。
:::

## 3. AI 直播行为调整 (Prompt)

AI 在直播环境中的说话风格和行为可以通过修改 `prompts/utils/live_prompt.txt` 文件来调整。该文件的内容会附加到主 Persona Prompt 之后，引导 AI 扮演好直播助手的角色。

你可以根据需要修改这个 Prompt，让 AI 的直播表现更符合你的预期。

## 4. 启动 Bilibili 直播客户端

配置完成后，你需要单独运行 Bilibili 直播客户端来连接直播间并将弹幕转发给主程序。

1.  **启动 Open-LLM-VTuber 主程序:**
    运行 `uv run run_server.py` 启动主程序。

2.  **启动 Bilibili 直播客户端:**
    打开一个新的终端或命令行窗口，进入项目根目录，然后运行以下命令：

    ```bash
    uv run python scripts/run_bilibili_live.py
    ```

## 5. 开始直播互动

现在，当你的 Bilibili 直播间收到弹幕时，该弹幕会被 `run_bilibili_live.py` 脚本捕获，并通过本地 WebSocket 代理发送给 Open-LLM-VTuber 主程序。AI 会像处理普通文本输入一样处理这些弹幕。

整个流程如下：
1. 观众在 Bilibili 直播间发送弹幕
2. `run_bilibili_live.py` 脚本接收到弹幕
3. 弹幕通过 WebSocket 代理(`/proxy-ws`)发送给主程序
4. 主程序使用 AI 处理弹幕内容
5. AI 的回应通过代理发送到前端
6. 前端展示 Live2D 模型的回应

## 6. 停止直播

- 要停止直播互动，只需在运行 `run_bilibili_live.py` 的终端中按下 `Ctrl + C` 即可。
- 关闭 Open-LLM-VTuber 主程序也会断开连接。