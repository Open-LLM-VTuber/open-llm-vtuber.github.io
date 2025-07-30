# Remote Deployment & Cross-Device Access Guide

This guide applies to the following scenarios:
- Deploying Open-LLM-VTuber on a remote server and accessing it from a local device.
- Deploying Open-LLM-VTuber within a local area network (LAN) and allowing access from other devices (e.g., mobile phones).
- Exposing the Open-LLM-VTuber service to the public internet (**Strongly discouraged**, see security warning below).

When performing remote deployment or enabling cross-device access, please note the following configuration points:

### Change Backend `host` Setting to `0.0.0.0`
By default, the backend service binds to `localhost`, allowing access only from the local machine. To permit access from other devices via IP address, you must change the `host` parameter to `0.0.0.0`.

### Enforce HTTPS and WSS Protocols
Open-LLM-VTuber's frontend is a web application. Due to [browser security policies](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), microphone access is restricted in insecure environments (HTTP). This will cause a "VAD error" in the frontend, preventing the speech recognition functionality from working correctly.

![VAD error caused by restricted microphone access in an insecure environment](img/vad_error.jpg)

To ensure proper functionality, you must configure an HTTPS certificate for your service and access the frontend and WebSocket service using `https://` and `wss://` protocols, respectively.

### Configure Frontend Connection Parameters
When accessing the frontend page, click the settings button in the top-left corner and ensure the `WebSocket URL` and `Base URL` parameters are correctly configured:
- Change the protocol (the beginning of the URL) to `https://` and `wss://`.
- Change the IP address to the actual IP address or domain name of the backend service.
After correct configuration, the page background should load properly, and the connection status indicator should turn green.

![](./img/url_settings.jpg)

### Regarding Mobile Access
For accessing from mobile devices, we recommend using the [Open-LLM-VTuber-Unity](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Unity) project, which is specifically designed for mobile phones.
- Please note: This project currently does not support iOS because an Apple Developer account is required for application signing.

Reasons why direct access via mobile browser is not recommended:
- **iOS Limitation**: iOS requires explicit user interaction for each audio playback instance. This means the user must tap the screen every time the AI generates speech for it to play.
- **Android Compatibility**: The diversity of browser engines on Android may lead to compatibility issues. Using the latest version of Google Chrome mobile is recommended for the best experience.

### Security Warning: Do Not Expose Open-LLM-VTuber Service Directly to the Public Internet
This project is not designed for public deployment and has potential security risks. It is strongly advised **not** to expose the service directly to the public internet.

Opening service ports (including ports for dependencies like Ollama) can lead to unauthorized access and resource abuse. Public lists exist that collect information about servers with open Ollama ports, allowing others to freeload off these resources. The security measures in this project are limited; please take this risk seriously.

For scenarios requiring remote access, consider using tools like Cloudflare Tunnel or Tailscale to establish secure access channels instead of directly opening ports.

If you are unfamiliar with network security configurations, there's no need to panic. As long as you run the service on your local computer and access it solely via `localhost`, you are generally safe from external attacks. The above warning primarily applies to users deploying on servers, NAS devices, or similar setups.

## Is an HTTPS Certificate Required for LAN Deployment?
Yes, even for deployment within a private LAN, browser security restrictions typically require an HTTPS certificate for microphone access to function correctly. Methods for obtaining a certificate include:
1.  **Self-Signed Certificate**: Create and use a certificate signed by yourself. Browsers will likely show security warnings.
2.  **Domain-Based Certificate (DNS-01 Challenge)**: If you own a domain name, you can use the DNS validation method to obtain a trusted SSL certificate. This process does not require a public IP address or open ports.

Configuring these methods can be complex and is beyond the scope of this guide.

## Methods to Bypass HTTPS Restrictions (Untested)

The following methods might bypass browser HTTPS restrictions but have not been thoroughly tested. Use them with caution:

### SSH Local Port Forwarding
If you can connect to the device deploying Open-LLM-VTuber via SSH, you can use the local port forwarding feature. This maps the remote server's port to a local port on your machine, making the browser perceive the service as running locally, potentially relaxing security restrictions.

Execute the following command (replace `username` and `remote_server_address` with actual values):
```sh
ssh -L 12393:localhost:12393 username@remote_server_address
```
This command forwards the remote server's port `12393` (Open-LLM-VTuber's default port) to port `12393` on your local machine.

Once forwarding is established, you can access the service via `http://localhost:12393` without needing HTTPS.

### Add Server IP Address to Browser Trust List (Details Needed)
Some users have reported that adding the server's IP address and port to the browser's trusted sites list or relaxing security restrictions for specific origins might allow microphone access over HTTP. The exact steps vary depending on the browser. Community contributions to document this process are welcome.