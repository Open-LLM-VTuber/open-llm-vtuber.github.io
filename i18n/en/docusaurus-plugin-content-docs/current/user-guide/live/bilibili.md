---
sidebar_position: 3
---


# Bilibili Live Streaming Guide

:::info Feature Description
We provide an experimental live platform integration that can send comments from live rooms to the Agent in real-time for interaction. Currently, only Bilibili live streaming is supported, with basic comment reading and forwarding functionality. The AI reads and responds to received comments one by one (currently, unresponded comments are added to a queue, and when messages come too quickly, the AI may experience significant response delays due to queue congestion).

If you want to support more live platforms (such as YouTube, Twitch, etc.), please refer to the [Development Guide](../../development-guide/backend/live-dev) to develop and contribute. Additionally, the default supported Bilibili live functionality does not yet implement features like gift acknowledgment or reading multiple comments together. Developers can refer to the [Development Guide](../../development-guide/backend/live-dev) to implement more features and contribute.
:::

## 0. Module Preparation

To use the live streaming functionality, you first need to clone the blivedm module in your **project root directory**:
```bash
git clone https://github.com/xfgryujk/blivedm/
```

Considering that many people don't need the Bilibili submodule functionality, this module hasn't been added to the `.gitmodules` file used with `git clone --recursive` initially, so you need to clone it manually.

## 1. Modify Frontend Settings

The live feature works by using a WebSocket proxy service to connect different components:
- Bilibili live client (input): receives comments from the live room
- Open-LLM-VTuber main program (processing): analyzes comment content, generates responses
- Frontend interface (output): displays Live2D model and responses

To enable the frontend to correctly receive comments from the live room and display responses, you need to modify the WebSocket URL setting in the frontend:

1. Open the web interface settings panel (click the settings icon in the upper left corner)
2. In the General tab, find the "WebSocket URL" setting
3. **Change the WebSocket URL to:** `ws://127.0.0.1:12393/proxy-ws`
   - The default value is typically `ws://127.0.0.1:12393/client-ws`
   - Change `/client-ws` to `/proxy-ws` to connect to the proxy service

<!-- ![](./img/web/setting.jpg) -->

:::note
After modifying the WebSocket URL, the frontend will connect directly to the proxy service instead of connecting directly to the Open-LLM-VTuber main program. This means all interactions will be forwarded through the proxy, including comments received from the Bilibili live room.
:::

## 2. Configure `conf.yaml`

To connect Open-LLM-VTuber to your Bilibili live room and enable the proxy service, you need to modify the `conf.yaml` file in the project root directory.

### 2.1 Enable WebSocket Proxy and Live Prompt

Find and modify the following configuration items in the `conf.yaml` file:

```yaml
system_config:
  enable_proxy: true  # Must be set to true to enable the proxy service for live functionality

tool_prompts:
  live_prompt: "live_prompt"  # Uncomment this line to enable special prompts for live mode
```

These settings are very important:
- `enable_proxy: true` - Enables the WebSocket proxy service, which is essential for live functionality
- `live_prompt: "live_prompt"` - Specifies the special prompt file to use in live mode, helping the AI better adapt to the live environment

### 2.2 Configure Bilibili Live Connection

Find the `live_config` section in `conf.yaml`:

```yaml
# Live Streaming Integration
live_config:
  bilibili_live:
    # List of BiliBili live room IDs to monitor
    room_ids: [9447542]  # <---- Change this to your own live room ID
    # SESSDATA cookie value (optional, for authenticated requests)
    sessdata: ""          # <---- (Optional) Fill in your SESSDATA
```

### 2.3 Configure `room_ids`

- **Get Room ID:** Enter your Bilibili live room webpage, the number after `live.bilibili.com/` in the URL is your real room ID.
- **Fill in Config:** Enter the room ID in the `room_ids` list. You can add multiple room IDs, and the program will randomly select one to connect to.
  - Example: `room_ids: [1234567, 9876543]`

### 2.4 (Optional) Configure `sessdata`

- **Purpose:** `SESSDATA` is a cookie value used by Bilibili for user authentication. If you don't fill this in, you can still connect to the live room, but usernames in received comments will be masked, and UIDs will become 0.
- **How to Get:**
    1. Log in to your Bilibili account in a browser.
    2. Open any Bilibili page (such as the homepage).
    3. Press `F12` to open the browser developer tools.
    4. Switch to the "Application" or "Storage" tab.
    5. Find "Cookies" on the left and select `https://www.bilibili.com`.
    6. Find the entry named `SESSDATA` in the list on the right and copy its value.
- **Fill in Config:** Paste the copied value inside the quotes of `sessdata: ""`.

:::danger Security Warning
`SESSDATA` contains your login information, and leaking it could lead to account theft. **Do not share your `SESSDATA` in any public places** and make sure your `conf.yaml` file is not accessible to untrusted people.
:::

## 3. Adjust AI Live Behavior (Prompt)

The AI's speaking style and behavior in the live environment can be adjusted by modifying the `prompts/utils/live_prompt.txt` file. The content of this file is appended to the main Persona Prompt, guiding the AI to better play the role of a live assistant.

You can modify this Prompt as needed to make the AI's live performance better match your expectations.

## 4. Start the Bilibili Live Client

After configuration, you need to run the Bilibili live client separately to connect to the live room and forward comments to the main program.

1.  **Start the Open-LLM-VTuber Main Program:**
    Run `uv run run_server.py` to start the main program.

2.  **Start the Bilibili Live Client:**
    Open a new terminal or command prompt window, navigate to the project root directory, and run the following command:

    ```bash
    uv run python scripts/run_bilibili_live.py
    ```

## 5. Begin Live Interaction

Now, when your Bilibili live room receives comments, they will be captured by the `run_bilibili_live.py` script and forwarded to the Open-LLM-VTuber main program through the local WebSocket proxy. The AI will process these comments just like processing normal text input.

The entire workflow is as follows:
1. A viewer sends a comment in the Bilibili live room
2. The `run_bilibili_live.py` script receives the comment
3. The comment is sent to the main program via the WebSocket proxy (`/proxy-ws`)
4. The main program uses AI to process the comment content
5. The AI's response is sent back to the frontend through the proxy
6. The frontend displays the Live2D model's response

## 6. Stop Live Streaming

- To stop live interaction, simply press `Ctrl + C` in the terminal running `run_bilibili_live.py`.
- Closing the Open-LLM-VTuber main program will also disconnect the connection. 