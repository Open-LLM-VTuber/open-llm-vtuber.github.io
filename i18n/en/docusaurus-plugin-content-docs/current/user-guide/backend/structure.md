---
sidebar_position: 1
---

# 后端架构概览

## 核心组件交互流程

```mermaid
sequenceDiagram
    participant User
    participant Live2D
    participant Frontend
    participant WebSocket
    participant Backend
    participant ASR
    participant Agent
    participant Translator
    participant TTS

    User->>Frontend: 说话/输入文字
    
    alt 语音输入
        Frontend->>WebSocket: 发送音频数据
        WebSocket->>Backend: 转发音频数据
        Backend->>ASR: 语音识别
        ASR-->>Backend: 返回文本
    else 文字输入
        Frontend->>WebSocket: 发送文本数据
    end

    Backend->>Agent: 处理用户输入
    Note over Agent: 1. 兼容多种不同类型的 Agent<br>2. 保存对话历史
    
    loop 每个句子
        Agent-->>Backend: 生成回复文本
        opt 需要翻译
            Backend->>Translator: 翻译回复文本
            Translator-->>Backend: 返回翻译文本
        end
        Backend->>TTS: 文本转语音
        TTS-->>Backend: 返回音频
        Backend->>WebSocket: 发送音频和表情数据
        WebSocket->>Frontend: 转发数据
        Frontend->>User: 播放语音
        Frontend->>Live2D: 控制模型表情
        Live2D-->>User: 展示动画效果
    end

    Note over Frontend,Backend: 整个过程支持:<br>1. 中断对话<br>2. 切换角色配置<br>3. 历史记录管理
```

## 代码结构

```
├── background/                # 背景图片资源目录
├── characters/               # 角色配置文件目录
├── frontend/                # 前端页面文件目录
├── live2d-models/           # Live2D 模型资源目录
├── logs/                    # 日志文件目录
├── models/                  # AI 模型文件目录
├── prompts/                 # 提示词模板目录
│   ├── presona/            # 角色人设提示词
│   ├── utils/              # 工具类提示词
│   └── prompt_loader.py    # 提示词加载器
├── src/                     # 源代码目录
│   └── open_llm_vtuber/    # 主要代码包
│       ├── agent/          # AI 对话代理模块
│       │   ├── agents/     # 不同类型的对话代理实现
│       │   └── stateless_llm/  # 无状态 LLM 接口实现
│       ├── asr/            # 语音识别模块
│       ├── tts/            # 语音合成模块
│       ├── chat_history_manager.py  # 聊天历史管理器
│       ├── conversation.py          # 对话管理
│       ├── live2d_model.py          # Live2D 模型管理器
│       ├── routes.py                # FastAPI 路由定义
│       ├── server.py                # WebSocket 服务器
│       └── service_context.py       # 服务上下文管理器
├── conf.yaml                # 默认配置文件
└── run_server.py           # 启动脚本
```

