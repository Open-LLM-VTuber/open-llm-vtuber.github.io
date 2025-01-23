---
sidebar_position: 3
---

# Web Mode

![](img/web/overview.jpg)

## Layout Overview
- Sidebar (collapsible)
  - Settings button
    - Settings drawer
      - General
      - Live2D
      - ASR
      - TTS
      - Agent
      - About
  - Conversation history
    - Chat history drawer
  - New conversation button
  - Chat record area
  - Camera area
- Main interface
  - Live2D model (movable/resizable)
  - Background image / Camera background (configurable)
  - WebSocket connection status display / Reconnect button
  - Subtitles (can be hidden)
- Bottom control bar (collapsible)
  - AI status display
  - Microphone switch
  - Interrupt button
  - Input box

## Settings Overview

:::tip Setting Address
It is recommended to set the WebSocket connection address in Setting - General first. The default value is the local address. If the server is listening on 127.0.0.1, no modification is needed.
:::

:::info Features
All settings support preview before saving (TODO).

Personalized settings are stored locally using localStorage.
:::

<img src={require('./img/web/setting.jpg').default} style={{width: '70%'}} />

### General
- Language settings (TODO)
  - English
  - Chinese
- Background settings
  - Preset background images
  - Custom background image URL
  - Enable camera background
- Character preset selection
- WebSocket connection address settings
- Base URL settings
- Subtitle display switch
- Restore default settings (TODO)

### Live2D
- Mouse interaction switch
  - When enabled, supports triggering actions by mouse clicks (TODO)
  - When enabled, supports eye-tracking following the mouse
- Zoom switch
  - When enabled, allows adjusting model size via mouse wheel/two-finger zoom

### ASR (Automatic Speech Recognition)
- Automatic microphone control
  - Automatically turn off the microphone when AI starts speaking
  - Automatically turn on the microphone after AI is interrupted
- Voice detection threshold settings
  - Speech Probability Threshold
    - Range: `1-100`
    - Probability threshold for determining if speech is detected
    - Higher values require clearer speech to be considered as speaking
  - Negative Speech Threshold
    - Range: `0-100`
    - Probability threshold for determining if speech has ended
    - Lower values make it easier to determine speech has ended
  - Redemption Frames
    - Range: `1-100`
    - Number of frames to wait after detecting speech end before actually ending speech recognition
    - Higher values increase the delay in ending speech recognition but can prevent misjudgments

### TTS (Text-to-Speech)
- No settings available

### Agent (AI Agent)
- AI proactive speech settings
  - Allow AI to speak proactively
  - Number of seconds of idleness before allowing AI to speak proactively
  - Allow using the raise hand button (interrupt button) to trigger AI proactive speech when not in thinking-speaking state

## Feature Introduction

### WebSocket Connection

- Displays a green icon when connected successfully.
- Displays a red icon and automatically becomes a reconnect button when disconnected.
- Connection address settings
  - Default connection address is `ws://127.0.0.1:12393/client-ws`.
  - Can be modified in Setting - General.

### AI Status
- `idle`
- `thinking-speaking`
- `interrupted`
- `loading`
- `listening` (user speech detected)
- `waiting` (user text input detected)

### Conversation Interaction
Provides multiple ways to interact with the character
- Voice dialogue
  - Automatic microphone control and voice detection thresholds can be set in Setting - ASR.
  - Ensure microphone permission is granted.
- Text input
- AI proactive speech (can be enabled in Setting - Agent)
  - Triggered when AI is in `idle` state, proactive speech is enabled, and the set idle time threshold is reached.
  - Use the raise hand button (interrupt button) to trigger AI proactive speech when not in thinking-speaking state (can be enabled in Setting - Agent).

### Interrupt Function
Used to interrupt AI's current speech. When the interrupt button is clicked, AI will immediately stop speaking, and the chat history and AI's memory will only retain content before the interruption. The following actions trigger interruption:
- Clicking the interrupt button
  - In Setting - ASR, you can set whether to automatically open the microphone after clicking the interrupt button.
- Speaking while AI is in `thinking-speaking` state (microphone must be on).
  - In Setting - ASR, you can set whether to automatically close the microphone when AI switches to `thinking-speaking` state.
- Sending a message while AI is in `thinking-speaking` state.

### Message History
<img src={require('./img/web/history.jpg').default} style={{width: '70%'}} />

- Scrollable message history
- Supports streaming responses, displaying AI replies in real-time
- Supports viewing historical message records, can load/delete individual historical records (stored on the backend)

### Live2D
- Supports dragging to move model position
- Supports mouse wheel/two-finger zoom to adjust model size (can be enabled in Setting - General)
- Supports model eye-tracking following the mouse (can be enabled in Settings - Live2D)
- Supports triggering actions by mouse clicks (TODO: can be enabled in Setting - Live2D)
  - Requires prior configuration in the backend's `model_dict.json`, for example:
    ```json
    {
      "name": "shizuku-local",
      "tapMotions": {
        "body": {
          "tap_body": 30,  // Trigger tap_body action when clicking body area, weight 30
          "shake": 30      // Trigger shake action when clicking body area, weight 30
        },
        "head": {
          "flick_head": 40 // Trigger flick_head action when clicking head area, weight 40
        }
      }
    }
    ```
    - Action names need to correspond with the action group names in the model configuration file (`.model.json` or `.model3.json`). For example, `shizuku.model.json` defines action groups like `tap_body`, `shake`, `flick_head`, so the same names should be used in `model_dict.json`.
    - For example, action group definitions in `shizuku.model.json`:
      ```json
      {
        "motions": {
          "tap_body": [
            {"file": "motions/tapBody_00.mtn"},
            {"file": "motions/tapBody_01.mtn"},
            {"file": "motions/tapBody_02.mtn"}
          ],
          "shake": [
            {"file": "motions/shake_00.mtn"},
            {"file": "motions/shake_01.mtn"},
            {"file": "motions/shake_02.mtn"}
          ],
          "flick_head": [
            {"file": "motions/flickHead_00.mtn"},
            {"file": "motions/flickHead_01.mtn"},
            {"file": "motions/flickHead_02.mtn"}
          ]
        }
      }
      ```
    - When clicking the model, it first detects the clicked area (hitTest), then randomly triggers an action based on the configured actions and weights for that area. If no hit area is detected, it merges actions from all areas and triggers randomly. Actions with higher weights have a higher probability of being triggered (currently controlled entirely by the frontend).
- Supports automatically applying expressions/actions based on emotions/backend instructions while speaking
  - Requires prior configuration in the backend

### Background
- Preset background images can be selected in Setting - General
- Custom image URL can be input as background in Setting - General
- Real-time camera feed
  - Can be enabled as background in Setting - General
  - Requires camera permission

### UI Folding and Hiding
- Sidebar can be collapsed/expanded by clicking the center button on the right
- Bottom control bar can be collapsed/expanded by clicking the center button at the bottom
- Subtitle display can be turned on/off in Setting - General
- WebSocket connection status display can be turned on/off in Setting - General (TODO)