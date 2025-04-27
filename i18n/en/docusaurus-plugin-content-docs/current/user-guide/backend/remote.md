# Remote Deployment, Non-Local Deployment, Mobile

If you are:

  - Trying to run Open-LLM-VTuber on a remote server and access it on your device.
  - Trying to run Open-LLM-VTuber within a local area network (LAN) to allow access from other devices (like your phone).
  - Trying to make your Open-LLM-VTuber publicly available to the world.

Here are some important points to consider:

### Please change the `host` in the backend settings to `0.0.0.0`

The default binding `localhost` restricts your Open-LLM-VTuber to be accessible only from the machine it's running on. To allow access from other devices, you must change it to `0.0.0.0`. This allows other devices to access it using the IP address of the machine hosting the application.

### Please use https and wss

The Open-LLM-VTuber frontend is a web application. Due to [browser security restrictions](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), the microphone cannot be accessed over insecure connections (`http` and `ws`), which will cause the frontend to display a `vad error`.

### When accessing the frontend, please set the correct `WebSocket URL` and `Base URL` in the frontend settings

After opening the frontend page, there is a settings button in the top left corner. Please correctly configure the `WebSocket URL` and `Base URL` parameters. Change the protocol (the part at the beginning) to `https` and `wss`, then change the IP address to the backend's IP address. After this, you should see the background load correctly, and the connection status indicator on the page should turn green.

### Accessing via mobile phone?

For mobile devices, we recommend using the [Open-LLM-VTuber-Unity](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Unity) project. It's specifically designed for mobile use, so check it out.

  - Currently, iOS is not supported because we don't have an Apple Developer account and cannot sign the application.

Why don't we recommend accessing directly via a mobile browser?

  - Due to iOS system limitations, every time the AI speaks, explicit user interaction is required. This means you have to tap the screen every single time the AI says something, otherwise, it won't be able to speak.
  - Android browsers have a wide variety of underlying engines, which might lead to compatibility issues with some browsers. We recommend using the mobile version of Google Chrome for access.

### Please do not make your Open-LLM-VTuber page publicly accessible

Our project is not designed for public deployment and has significant security vulnerabilities. Please do not expose it to the public internet.

If possible, please do not open the ports. Remember the lesson learned from exposing Ollama ports publicly. If you're unaware, numerous websites scan for servers with open Ollama ports, providing lists that allow others to freeload off your Ollama service, even letting them choose by region. You wouldn't want to end up on such a list, would you?

Our project's development resources are far less than Ollama's, meaning security is virtually non-existent. Please do not expose your Open-LLM-VTuber port. There are many tools available that allow you to happily access your server without exposing the service to the entire world, such as Cloudflare Tunnel, Tailscale, etc.

If you're completely new to networking and the above sounds alarming, don't worry. This primarily concerns those who use NAS, self-host services, or manage servers. If you're just running Open-LLM-VTuber on your own computer accessed via `localhost`, nobody can reach it.

## So, running on a LAN also requires a certificate? Can a private LAN have a certificate?

There are at least two ways, possibly more, but these are the ones I'm familiar with:

1.  **Self-signed certificates:** You can generate your own certificate.
2.  **DNS-01 Challenge:** If you own a domain name, you can request a certificate using the DNS-01 challenge method. This doesn't require a public IP address or opening any ports.

Both methods are relatively complex and won't be detailed here.

## Some ways to bypass https (untested):

### SSH Local Port Forwarding

If you can SSH into the device where Open-LLM-VTuber is deployed, you can use SSH local port forwarding. This maps a port on the server to a local port on your machine, making the browser think Open-LLM-VTuber is running locally, thereby bypassing the security restrictions.

```sh
ssh -L 12393:localhost:12393 username@remote_server_address
```

This command means: forward port 12393 on the remote server (the default port for Open-LLM-VTuber) to port 12393 on your local machine.

After setting up the forwarding, you can access the Open-LLM-VTuber service directly using `http://localhost:12393`, eliminating the need for https.

### Add the server IP address to the browser's allowlist (Details needed)

I've heard that it might be possible to add the IP address and port to a browser's allowlist (whitelist), causing the browser to relax the restriction against opening the microphone in an insecure environment specifically for the Open-LLM-VTuber service. However, I don't know the specific details. Documentation contributions on this are welcome.