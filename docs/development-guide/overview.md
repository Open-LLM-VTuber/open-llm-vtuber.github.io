---
sidebar_position: 1
---
# 开发指南概览

## 已有指南

- [如何添加新的 TTS 支持?](./backend/tts.mdx)
- 如何修改文档? 请参考[文档站 README](https://github.com/Open-LLM-VTuber/open-llm-vtuber.github.io)

## 项目架构概览

我们项目在 GitHub 上是个 organization，主要用来组织相关仓库。我们目前并不是一个组织实体，非常欢迎新的贡献者加入我们。

### 核心仓库

| 仓库 | 描述 | 主要维护者 |
|------|------|------------|
| [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | 项目后端，主仓库 | [t41372](https://github.com/t41372), [ylxmf2005](https://github.com/ylxmf2005) |
| [Open-LLM-VTuber-Web](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web) | 项目前端，包括网页界面和 Electron 应用 | [ylxmf2005](https://github.com/ylxmf2005) |
| [Open-LLM-VTuber-Unity](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Unity) | Unity 前端，开发中 | [AnyaCoder](https://github.com/AnyaCoder), [Harry-Yu-Shuhang](https://github.com/Harry-Yu-Shuhang) |
| [open-llm-vtuber.github.io](https://github.com/Open-LLM-VTuber/open-llm-vtuber.github.io) | 本文档网站源码，基于 docusaurus | - |

本项目采用前后端分离架构，后端 [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) 提供 API 服务，因此只要适配后端 API（主要是 `/client-ws`），你也可以开发自己的前端应用。

### 版本管理与开发计划

#### 版本号规范
项目版本号遵循**语义化版本号** (semantic versioning):
- 大版本号（如 v0.5.2 → v1.0.0）：用户不可直接升级的重大变更
- 中间版本号（如 v1.0.0 → v1.1.0）：新功能发布
- 小版本号（如 v1.0.0 → v1.0.1）：Bug 修复

#### 分支说明
| 分支 | 说明 | 适用人群 |
|------|------|----------|
| `dev` | 最新开发进度 | 仅开发者（可能不稳定） |
| `main` | 预览版本 | 少数尝鲜用户 |
| `v1-stable` | 稳定版本 | 所有普通用户 |

- 合并到 `main` 分支时必须更新版本号
- `v1-stable` 分支会用于发布，用户更新脚本会同步此分支的最新变化
- 其他分支多为功能分支或历史遗留

#### 版本发布流程
1. 新功能在 `dev` 分支开发
2. 功能稳定后合并到 `main` 分支并增加版本号（如 `v1.0.0-alpha.1` → `v1.0.0-alpha.2`）
3. 累积足够功能后发布稳定版本到 `v1-stable`，写更新日志，发布。

版本号记录在 `pyproject.toml` 中，启动后端时会显示在命令行。注意这与配置文件中的 `conf_version` 不同，后者仅用于记录配置文件结构变化。

#### 开发规划
项目有 [Roadmap](https://github.com/orgs/Open-LLM-VTuber/projects/2)，但 `v1.0.0` 更新后就没怎么跟着 Roadmap 走了。目前主要依靠 GitHub Issues 和 [Issue Tracker](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/issues/127) 跟踪开发任务。

## 如何参与开发

### 开始之前

在实现你的想法前，建议先：

1. 查看是否有相关的 [Issue](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/issues)
2. 如果没有，可以新建 issue 讨论你的想法
3. 获得反馈后再开始行动

当然，你要直接开发然后提交 PR，我也不拦你... 👀

### 寻找任务

如果你想参与但没有具体想法：

- 查看 [Feature Requests & Bugs & Top issues Tracker](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/issues/127)
- 关注带有 `good first issue` 标签的任务 - 这些较为容易，适合新贡献者
- 关注带有 `help wanted` 标签的任务 - 这些是我们特别需要帮助的

### 开发流程

1. Fork 相关仓库
2. 切换到 `dev` 分支进行开发（项目变化速度较快）
3. 实现功能或修复问题
4. 提交 PR 到原仓库的 `dev` 分支

如果遇到问题随时可以：
- 在相关 issue 中提问
- 提交 PR draft 寻求帮助
- 在 GitHub discussion 中讨论
- 通过以下方式联系我们：
  - QQ 群，QQ 频道，Discord 群交流
  - B站私信或是其他方式

## 代码规范与注意事项

### 代码风格

- 后端使用 `ruff` 作为 linter，提交前请运行 `uv run ruff format` 格式化代码
- 报错信息、注释等**请使用英文**（尽管我们用户以中文为主，但还是有其他语言的用户和开发者）

### 配置文件

- 配置文件模板位于 `config_templates` 目录
  - `conf.default.yaml`（英文）
  - `conf.ZH.default.yaml`（中文）
- 修改配置结构时，必须同时更新两个模板文件
- 配置文件使用 Pydantic 进行验证，请在 `src/open_llm_vtuber/config_manager` 中添加相应的数据类

### 前端开发

- 前端代码位于单独的 [Open-LLM-VTuber-Web](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web) 仓库
- 通过 GitHub Action 构建后，以 Git Submodule 形式链接到主仓库的 frontend 目录

#### 前后端协同开发
如需同时修改前后端代码：

1. 请参考[前端用户指南/安装部署](/docs/user-guide/frontend/install)获取前端源码
2. 前端修改合并到前端 `main` 分支前，后端的 `frontend` 子模块不会更新
3. 开发流程为：
   - 前端改动先合并到前端 `dev` → `main` 分支
   - 等待前端 GitHub Action 构建完成（生成 `build` 分支）
   - 更新后端 `frontend` 子模块的引用
   - 合并后端改动到对应分支

### 文档更新

**实现功能后请记得更新相关文档**。这对新用户和开发者非常重要！

## 加入社区

如果你在我们 QQ 群里，做出贡献后可以获得 `贡献者` 称号。记得告诉我你的 GitHub ID，这样我才能认出你来～

目前，我们项目的主要贡献者基本都在 QQ 群里面。欢迎加入，一起交流！
