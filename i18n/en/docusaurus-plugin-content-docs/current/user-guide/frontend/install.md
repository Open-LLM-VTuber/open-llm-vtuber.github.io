---
sidebar_position: 2
---

# Installation and Deployment

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Web mode, Window mode, and Pet mode share the same code repository and project structure. Developers/users only need to maintain/configure one set of code to support deployment and use of all modes.
:::

:::tip
For Electron applications, you can download the installation package for your platform from Github Release.
:::

If you want to build the application from source code, please follow these steps:

### Prerequisites

- Node.js 18.0 or higher (check version by running `node -v`). It's recommended to use nvm to manage multiple Node.js versions

### Clone the repository and install dependencies

```bash
git clone [placeholder]
cd [placeholder]
npm install
```

### Project Structure

```
open-llm-vtuber-web/
├── resources/              
├── src/
│   ├── main/               
│   │   ├── index.ts        
│   │   ├── menu-manager.ts 
│   │   └── window-manager.ts 
│   ├── preload/            
│   │   ├── index.d.ts      
│   │   └── index.ts        
│   └── renderer/           
│       ├── public/        
│       └── src/
│           ├── assets/     
│           ├── components/ 
│           │   ├── canvas/ 
│           │   ├── electron/ 
│           │   ├── footer/ 
│           │   └── sidebar/ 
│           │       └── setting/
│           ├── context/    
│           ├── hooks/      
│           │   ├── canvas/ 
│           │   ├── electron/ 
│           │   ├── footer/ 
│           │   └── sidebar/ 
│           │       └── setting/
│           ├── services/   
│           ├── types/     
│           ├── App.tsx    
│           └── main.tsx   
├── electron.vite.config.ts 
└── package.json           
```

### Development Mode (Optional, typically used for developer testing)

<Tabs>
  <TabItem value="electron" label="Electron" default>
    ```bash
    npm run dev
    ```
  </TabItem>
  <TabItem value="web" label="Web">
    ```bash
    npm run dev:web
    ```
  </TabItem>
</Tabs>

:::info 
`npm run dev` will start both Electron and Web modes (default on port 5137)
:::

### Choose the appropriate build command based on the target platform/mode

<Tabs>
  <TabItem value="windows" label="Windows" default>
    ```bash
    npm run build:win
    ```
  </TabItem>
  <TabItem value="macos" label="MacOS">
    ```bash
    npm run build:mac
    ```
  </TabItem>
  <TabItem value="linux" label="Linux">
    ```bash
    npm run build:linux
    ```
  </TabItem>
  <TabItem value="web" label="Web">
    ```bash
    npm run build:web
    ```
  </TabItem>
</Tabs>

:::info 
The output files for Electron builds will be located in the `dist` directory.

The output files for Web builds will be located in the `src/renderer/dist` directory.
:::




