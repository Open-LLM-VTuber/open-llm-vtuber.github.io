---
sidebar_position: 4
---

# Window & Desktop Pet Mode

:::info Shared Context
Window mode and desktop pet mode share the complete context, including:
- All settings and configurations
- Conversation history
- WebSocket connection status
- AI status and memory
- Live2D model status

This means that switching between the two modes will not lose any state or interrupt the current conversation.
:::

:::tip Mode Switching
Switch modes through the system tray or the right-click model menu in desktop pet mode
:::

## Window Mode
Window mode is implemented based on Electron and shares the same interface layout and functionality as Web mode. Please refer to [Web Mode](web.md) for details. In addition to the features of Web mode, window mode also provides the following basic application functions:

- Support for window dragging, maximizing, and minimizing
- System tray support (also applicable to desktop pet mode)
  - Right-click the tray icon to quickly switch modes
  - Support for showing/hiding the window
  - Quick exit of the application

## Desktop Pet Mode

<img src={require('./img/electron/overview.jpg').default} style={{width: '70%'}} />

### Features
The following features are identical to [Web Mode](web.md):
- WebSocket connection and status management
- AI conversation functionality and status control
- Live2D model loading and action management
- All configuration options in the settings panel
- Storage and management of conversation history

Features unique to desktop pet mode:
- Global top-level display
- Transparent background
- Mouse click-through for non-interactive areas
- Support for dragging to move position
- Support for mouse wheel/two-finger zoom to adjust size (can be enabled/disabled in settings)
- Support for mouse interaction
  - Click to trigger actions (can be enabled/disabled in settings)
  - Gaze following (can be enabled/disabled in settings)
- Input box & subtitles can be independently dragged (can be hidden)

### Right-click Menu
- Turn on/off microphone
- Interrupt current conversation
- Enable/disable zooming
- Show/hide input box and subtitles
- Switch modes
- Switch characters
- Hide/exit application

### Input Box & Subtitles
- Can be shown/hidden via right-click menu or shortcut keys
- Support for independent position dragging
- Display current AI status and conversation content
- Support for text input and voice input
- Turn on/off microphone
- Interrupt button