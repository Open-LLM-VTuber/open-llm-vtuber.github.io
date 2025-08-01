---
sidebar_position: 5
---


# Live2D 指南

:::info 概览
要往项目中添加新的 Live2D 模型，需要完成以下三到五个步骤:

1. 获取 Live2D 模型 (可跳过)
2. 给你的 Live2D 模型配置预设的表情和动作 (可跳过)
3. 将 Live2D 模型文件放置到 `live2d-models` 文件夹中
4. 在 `model_dict.json` 文件中配置模型信息
5. 在角色配置文件 (`conf.yaml` 或者 `characters` 目录下的角色设定文件) 中指定使用的 Live2D 模型
:::

## 1. 获取 Live2D 模型

:::warning 关于模型版本
目前项目使用的 pixi-live2d-display-lipsyncpatch 仅支持 Cubism 3 到 Cubism 5 版本的模型，不支持 Cubism 2 版本。
:::

如果你已经拥有了合适的 Live2D 模型，可以直接跳过这一步。
以下是一些获取 Live2D 模型的常见渠道（欢迎补充更多来源）:

- [Booth](https://booth.pm/)
- [Bilibili](https://www.bilibili.com/)
- [Eikanya/Live2d-model](https://github.com/Eikanya/Live2d-model)
- [模之屋](https://www.aplaybox.com/model/model)

## 2. 配置 Live2D 模型

:::info
Live2D 模型的配置文件是一个包含表情、动作等多个设置项的重要文件。由于配置方法多样且较为复杂，目前这部分的教程还没有正式开工。你可以选择:

1. 通过查找网络资料来学习配置方法
2. 先跳过这部分，等对 Live2D 模型配置有更深入了解后再回来设置
3. 如果你有相关经验，非常欢迎通过 PR 或 Issue 来帮助我们完善这部分内容
:::

由于大多数 Live2D 模型是从游戏中提取或主要用于直播，它们的表情和动作可能并不完全适合本项目的使用场景。为了获得最佳的使用体验，建议你先查看模型的配置文件（`model3.json`），并根据需要进行适当的调整，获得更好的交互体验。

你可以使用以下工具来查看和调整模型：
- Vtuber Studio
- Live2DViewerEx Studio 
- Live2D Cubism Viewer


1. 查看和测试模型的表情列表
2. 预览所有可用的动作效果
3. 添加 Idle（空闲）动作组
4. 创建自定义动作组
5. 添加新的表情
6. 制作新的动作

## 3. 放置模型文件

将你的 Live2D 模型文件放在 `live2d-models` 文件夹中，如图中的 `xiao`。

<img src={require('./img/live2d_p1.jpg').default} style={{width: '70%'}} />


## 4. 添加模型配置

:::caution 注意
在模型配置中，只有 `name`（模型标识）、`url`（模型路径）和 `kScale`（缩放比例）是必填项。其他配置项如 `emotionMap`（表情映射）和 `tapMotions`（触摸动作）是可选的，不填写这些配置项会导致模型失去表情变化和动作交互的功能。
:::

在项目根目录下的 `model_dict.json` 文件中添加模型配置。以下是一个完整的配置示例：

```json
{
    "name": "shizuku-local",
    "description": "Orange-Haired Girl, locally available. no internet required.",
    "url": "/live2d-models/shizuku/shizuku.model3.json",
    "kScale": 0.5,
    "initialXshift": 0,
    "initialYshift": 0,
    "idleMotionGroupName": "idle",
    "defaultEmotion" : 0,
    "emotionMap": {
        "neutral": 0,
        "anger": 2,
        "disgust": 2,
        "fear": 1,
        "joy": 3,
        "smirk": 3,
        "sadness": 1,
        "surprise": 3
    },
    "tapMotions": {
        "body": {
            "tap_body": 30,
            "shake": 30,
            "pinch_in": 20,
            "pinch_out": 20
        },
        "head": {
            "flick_head": 40,
            "shake": 20,
            "pinch_in": 20,
            "pinch_out": 20
        }
    }
}
```

### 4.1 基础配置

| 配置项        | 说明                           | 示例值                                        |
| ------------- | ------------------------------ | --------------------------------------------- |
| `name`        | 模型的唯一标识符，建议使用英文 | `"shizuku-local"`                             |
| `description` | 模型描述（可选）               | `"Orange-Haired Girl"`                        |
| `url`         | 模型文件路径                   | `"/live2d-models/shizuku/shizuku.model3.json"` |

- 支持本地路径和远程 URL
- 本地路径以 `/live2d-models/` 开头，而非 `./live2d-models/` 开头。
- 远程 URL 需要指向有效的 `.model3.json` 文件，比如 `https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model3.json` (注意：请替换为实际有效的 model3.json 链接)
- 如果使用 HTTP 协议访问 Web，加载 HTTPS 资源时可能会报错 `Failed to load LiveD model: Error: Network error`。此时需要在浏览器设置中允许网站加载不安全内容:
  - Chrome: 点击地址栏右侧的盾牌图标 -> 网站设置 -> 不安全内容 -> 允许
  - Firefox: 点击地址栏左侧的锁图标 -> 关闭连接保护
  - Edge: 点击地址栏右侧的锁图标 -> 网站权限 -> 不安全内容 -> 允许

### 4.2 显示配置

| 配置项          | 说明             | 推荐值 |
| --------------- | ---------------- | ------ |
| `kScale`        | 模型初始缩放比例 | `0.3 ~ 0.5`  |
| `initialXshift` | 模型水平位置初始偏移量   | `0`    |
| `initialYshift` | 模型垂直位置初始偏移量   | `0`    |

- 当 `initialXshift` 和 `initialYshift` 都设置为 `0` 时，Live2D 模型通常会在画布中居中显示。对于某些特殊模型，可能需要手动调整这两个参数来实现理想的显示位置。
- 关于模型大小：
  - `kScale` 参数只决定在浏览器/设备上，初次加载某个模型的大小。并不会决定之后使用改模型时的大小。
  - 在前端界面，**你可以通过鼠标滚轮或者触摸屏双指缩放来调节模型大小**。
  - 当你手动调整模型大小后，系统会通过 `localStorage` 记住该模型在当前浏览器/设备、当前模式下的大小
  - 下次在同一浏览器/设备上使用时(未清空 localStorage)，**将自动应用上次的大小**。

需要注意的是，当容器大小发生变化时(如调整窗口大小、折叠/展开侧边栏或底边栏、切换显示模式等)，Live2D 模型会重置到初始位置，但会保持当前的缩放大小不变。

### 4.3 待机动作配置

Live2D 模型的动作动画一般会被分成多个动作组 (Motion Groups)。每个动作组包含一系列相关的动作动画。在 model3.json 文件中，这些动作组通常定义在 `motions` 或 `Motions` 字段下。

待机动作(Idle Motion)是模型在无交互时随机播放的基础动画。它们通常被放在名为 `idle` 或 `Idle` 的动作组中，系统会从该组中随机选择一个动作进行播放。 

具体动作组名称需要根据模型配置文件 `model3.json` 中的名称，如图所示。

<img src={require('./img/live2d_p3.jpg').default} style={{width: '100%'}} />

:::tip 
如果你理解模型的动作结构，也可以配置自己待机的动作组。但除非你知道自己在做什么，否则建议保持 `idleMotionGroupName` 的默认值(`idle` 或 `Idle`)。
:::

### 4.4 表情配置

`emotionMap` 定义了 AI 可用的表情映射，而 `defaultEmotion` 则用于设置模型的默认表情。

#### 默认表情配置

`defaultEmotion` 是一个可选配置项，用于指定模型加载后或对话结束时显示的表情。它的值可以是表情索引（数字）或表情名称（字符串），需要与 `emotionMap` 使用相同的映射方式。

某些模型可能会带有水印，这时可以通过创建一个去掉水印的表情，并通过设置这个表情为默认表情来去掉水印。

#### 表情映射配置

`emotionMap` 支持两种映射方式:
1. 使用表情索引 (数字)
2. 使用表情名称 (字符串)

#### 配置示例

1. 首先查看模型文件中的表情定义:
```json
// model3.json
"Expressions" : [
    {"Name": "f01", "File": "f01.exp3.json"}, // 索引 0
    {"Name": "f02", "File": "f02.exp3.json"}, // 索引 1
    {"Name": "f03", "File": "f03.exp3.json"}, // 索引 2
    {"Name": "f04", "File": "f04.exp3.json"} // 索引 3
]
```

2. 然后在 `model_dict.json` 中配置表情映射。你可以选择以下两种方式之一:

方式一: 使用表情索引（注意使用数字而非字符串作为索引）
```json
"emotionMap": {
    "neutral": 0,  // 对应 f01 表情
    "anger": 2,    // 对应 f03 表情
    "disgust": 2,  // 同样使用 f03 表情
    "fear": 1,     // 对应 f02 表情
    "joy": 3,      // 对应 f04 表情
    "smirk": 3,    // 同样使用 f04 表情
    "sadness": 1,  // 同样使用 f02 表情
    "surprise": 3  // 同样使用 f04 表情
}
```

方式二: 使用表情名称
```json
"emotionMap": {
    "neutral": "f01",
    "anger": "f03",
    "disgust": "f03",
    "fear": "f02",
    "joy": "f04",
    "smirk": "f04", 
    "sadness": "f02",
    "surprise": "f04"
}
```

#### 配置说明

:::caution 注意事项
1. 如果使用索引映射，索引值是按照模型文件中 `Expressions` 数组的顺序，从 0 开始计数
2. 如果使用表情名称映射，需要确保名称与模型文件中定义的表情名称完全一致
3. 多个情绪可以映射到同一个表情索引或名称
:::

AI 会使用 `[emotion]` 格式在对话中触发表情变化，例如：

```
噢，该死的！[anger] 你说的这番话简直比约翰森叔叔家的鸡蛋豆腐面还要难以下咽。
```

当系统识别到 [anger] 时，就会让前端的 Live2D 模型做出 `anger` 这一关键词对应的索引（在上面的例子中是 `2`）

:::info
表情会保持直到:
   - 遇到下一个表情关键词
   - 或对话结束后自动恢复默认表情
:::

:::tip 配置建议
1. 使用简单、明确的英文单词作为关键字
2. 确保关键字容易被 AI 理解和准确使用
3. 避免使用过长或复杂的名称
4. 根据模型的表情特点，选择合适的情绪映射
:::

### 4.5 交互动作配置

`tapMotions` 定义了模型与鼠标交互时的动作映射。当用户点击模型时，系统会根据点击区域和配置的权重随机触发对应的动作。

#### 配置示例

```json
"tapMotions": {
    "body": {  // 身体区域
        "tap_body": 30,   // 动作名: 权重
        "shake": 30,
        "pinch_in": 20,
        "pinch_out": 20
    },
    "head": {  // 头部区域
        "flick_head": 40,
        "shake": 20,
        "pinch_in": 20,
        "pinch_out": 20
    }
}
```

#### 配置说明

1. 点击区域名称
   - Live2D 3.0 / 4.0 / 5.0 模型：通常使用 `HitAreaBody`、`HitAreaHead` 等区域名称
   ```json
   "HitAreas": [
       {"Id": "HitAreaHead", "Name": ""},
       {"Id": "HitAreaBody", "Name": ""}
   ]
   ```
2. 动作名称
   - 必须与模型配置文件中定义的动作组名称完全一致
3. 权重设置
   - 范围：建议使用 0-100 的整数
   - 权重越大，该动作被触发的概率越高
   - 同一区域内的所有动作权重总和不需要等于 100

#### 触发逻辑

1. 当用户在前端点击模型时（可设置是否开启），系统会：
   - 首先检测点击的区域(hitTest)
   - 根据该区域配置的动作和权重随机触发一个动作
   - 如果未检测到命中区域，则会将所有区域的动作合并后，按权重随机触发

2. 权重计算示例：
   ```json
   "head": {
       "flick_head": 40,  // 40% 概率
       "shake": 20,       // 20% 概率
       "pinch_in": 20,    // 20% 概率
       "pinch_out": 20    // 20% 概率
   }
   ```

## 5. 修改角色配置

在角色配置文件中指定使用的 Live2D 模型。你可以:

1. 在主配置文件 `conf.yaml` 中配置（前端默认配置）
2. 在 `characters` 目录下，新建你想要的角色设定文件进行配置（可以在前端切换）

配置方法非常简单。以 `conf.yaml` 为例，你只需要在 `character-config` 配置项下找到 `live2d_model_name` 字段，将其值设置为你想使用的 Live2D 模型名称即可。请注意，这个名称需要与 `model_dict.json` 文件中对应模型的 `name` 字段保持一致。

<img src={require('./img/live2d_p2.jpg').default} style={{width: '70%'}} />

:::info
图中的其他配置字段说明:
- `conf_name`: 这个名称会显示在前端界面的角色选择中，你可以理解为配置名称 / 角色名称，可以随便命名。
- `conf_uid`: 这是角色配置的唯一标识符，请确保它的值是唯一的
:::