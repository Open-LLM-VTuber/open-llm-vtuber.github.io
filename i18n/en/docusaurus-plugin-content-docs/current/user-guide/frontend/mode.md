---
sidebar_position: 1
---

# Mode Introduction

Open LLM VTuber offers three modes of use to meet the needs of different users: [Web Mode](web-window-mode), [Window Mode](web-window-mode), and [Desktop Pet Mode](pet-mode).

All three modes use localStorage to store user personalization settings.

Web Mode requires deployment or access to a deployed web link for use.

Window Mode and Desktop Pet Mode are two modes based on the Electron application, supporting Windows and Mac systems, but not currently supporting mobile devices. You can directly download the installation package for your platform from Github Release (recommended), or download the source code for testing or packaging.

Window Mode and Pet Mode share context, which means you can switch between the two modes at will while maintaining current settings, status, and connections.

:::note Detailed Instructions

For specific usage methods and features of each mode, please refer to
- [Web Mode User Guide](./web.md)
- [Window & Desktop Pet Mode User Guide](./electron.md)
:::

## Web Mode

Web Mode is a standalone web version that can be used online in any modern browser on any platform after deployment, without the need for installation.

:::tip Browser Choice
For the best experience, it is recommended to use Google Chrome browser for access
:::

:::warning About iOS
iOS prohibits browsers from playing audio, requiring constant clicking for the speaking function to work normally.
:::

:::warning Remote Access Considerations
When you remotely access the deployed Web application (i.e., the deployment server and the access device are not on the same machine, even if they are on the same local network, it is considered remote access), please note that microphone and camera can only be used in a secure context (HTTPS or localhost). For detailed explanation, please refer to [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts). Therefore, to use these features normally on a remote device, you must configure HTTPS protocol for the Web server.
:::

![](img/mode/web.jpg)

## Window Mode

Window Mode is the default display mode for the desktop client, with an interface and functionality essentially consistent with Web Mode.

## Desktop Pet Mode

Desktop Pet Mode transforms the character into a desktop companion with a transparent background, global top-most display, and free dragging, providing a more immersive experience.

![](img/mode/pet.jpg)