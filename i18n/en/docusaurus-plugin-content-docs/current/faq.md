---
sidebar_position: 6
---

# FAQ

## Deployment Related

### How to choose a suitable LLM?
- If you want quick deployment without downloading models, OpenAI Compatible API or Groq API is recommended
- For local deployment, choose a model based on your available GPU memory
- For detailed information, please refer to [LLM Configuration Guide](./user-guide/backend/llm.md)

### What to do with proxy-related issues?
- If you're in mainland China, it's recommended to use a proxy for downloading resources
- If local services are inaccessible, you need to configure proxy settings to bypass local addresses
- For detailed information, please refer to [Quick Start](./quick-start.md)

### What to do when encountering "Error calling the chat endpoint..."?
Common causes and solutions:
- Check if the Ollama service is running properly
- Verify if the model name matches exactly with what's listed in `ollama list`
- For detailed information, please refer to [Quick Start](./quick-start.md)

### uv not found after installation
- If you installed uv using `winget` or `curl`, you need to restart your terminal or reload your shell configuration file for the environment variables to take effect.
- For detailed information, please refer to [Quick Start](./quick-start.md)

## Client Related

### What to do when Web shows `{"detail": "Not Found"}`?
- This might happen if you haven't run `git submodule update --init --recursive` or if the command failed previously.

### What to do when using remote LiveD model links and getting `Failed to load LiveD model: Error: Network error`?
- This usually occurs when the webpage using HTTP protocol cannot load HTTPS resources
- You can resolve this by allowing insecure content in your browser settings:
  - Chrome: Click the shield icon in the address bar -> Site Settings -> Insecure content -> Allow
  - Firefox: Click the lock icon in the address bar -> Turn off Enhanced Tracking Protection
  - Edge: Click the lock icon in the address bar -> Site permissions -> Insecure content -> Allow

### What to do when the microphone isn't working?
- Make sure you've granted microphone permissions to your browser or application
- Check if the microphone input volume is appropriate - too low or too short sounds might not trigger voice detection. You can adjust detection thresholds in settings, see [Web Mode](./user-guide/frontend/web.md) for details
- If you're using the Electron desktop app, try restarting the application
- If none of the above works, visit https://www.vad.ricky0123.com/ to test microphone functionality. If the site also can't use the microphone, it might be a system audio setting or hardware issue

### What to do when desktop client won't install (Windows protected your PC) or shows "damaged" message?
- Windows users can click "More info" and then "Run anyway"
- macOS users need to adjust system settings and execute specific commands
- For detailed solutions, please refer to [Mode Introduction](./user-guide/frontend/mode.md)

### What to do when microphone/camera/screen capture doesn't work with remote Web interface access?
- Electron app currently doesn't support screen capture (`Failed to start screen capture:
NotSupportedError: Not supported`)
- These features require a secure context (HTTPS or localhost)
- For remote access, you must configure HTTPS for the web server
- For detailed information, please refer to [Mode Introduction](./user-guide/frontend/mode.md)

### What to do about voice functionality issues on iOS devices?
- This is a known issue due to iOS security restrictions
- Continuous tapping is required for the speech function to work properly
- For detailed information, please refer to [Mode Introduction](./user-guide/frontend/mode.md)

### What to do when Electron app shows blank screen after switching modes?
- This is a rare bug that's difficult to fix, but it rarely occurs in practice
- Wait a few seconds or restart the application to resolve the issue

## Other Questions

### How to get the latest frontend version?
- Automatic updates are currently not supported
- You can follow the Github Release page for latest versions
- For detailed information, please refer to [Mode Introduction](./user-guide/frontend/mode.md)

### What usage modes does the project support?
- Web Mode: Access through browser
- Window Mode: Default mode for desktop client
- Desktop Pet Mode: Provides transparent background and global top-most desktop companion experience
- For detailed information, please refer to [Mode Introduction](./user-guide/frontend/mode.md)
