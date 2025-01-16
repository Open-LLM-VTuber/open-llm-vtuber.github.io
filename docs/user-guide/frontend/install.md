---
sidebar_position: 2
---

# 安装部署

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info
Web 模式、Window 模式和 Pet 模式共享同一个代码仓库和项目结构，开发者/用户只需要维护/配置一套代码即可支持所有模式的部署与使用。
:::

:::tip
对于 Electron 应用，你可以从 Github Release 下载对应平台的安装包。
:::

如果你想从源码构建应用，请按照以下步骤操作：

### 前置要求

- Node.js 18.0 或更高版本 (可通过运行 `node -v` 检查版本)。建议使用 nvm 管理多个 Node.js 版本

### 克隆仓库并安装依赖

```bash
git clone [placeholder]
cd [placeholder]
npm install
```

### 项目结构

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

### 开发模式 (可选，通常用于开发者测试)

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
`npm run dev` 会同时启动 Electron 和 Web 模式 (默认在 5137 端口上)
:::

### 根据目标平台/模式选择相应的构建命令

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
Electron 构建输出的文件将位于 `dist` 目录下。

Web 构建输出的文件将位于 `src/renderer/dist` 目录下。
:::




