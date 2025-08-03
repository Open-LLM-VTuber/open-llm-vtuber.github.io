# Open-LLM-VTuber 文档网站

[![English Documentation](https://img.shields.io/badge/Documentation-English-blue.svg)](README.md)

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Open-LLM-VTuber/open-llm-vtuber.github.io)

本仓库包含 [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber) 项目的文档网站源代码。

**网站地址**：
- [open-llm-vtuber.github.io](https://open-llm-vtuber.github.io/)
- [docs.llmvtuber.com](https://docs.llmvtuber.com/)

本文档主要使用简体中文编写，并提供英文翻译。

## 关于本网站

本网站使用 [Docusaurus](https://docusaurus.io/) 构建，这是一个现代化的静态网站生成器，专为快速简便地创建文档网站而设计。

## 参与文档贡献

我们欢迎您对文档进行改进！以下是贡献方法：

### 快速更改

对于小更改，您可以直接在 GitHub 上编辑文件并提交拉取请求，无需设置本地开发环境。

### 进行大型贡献

对于更广泛的更改，请按照以下步骤操作：

#### 1. 设置本地开发环境

```bash
# 克隆仓库
git clone https://github.com/Open-LLM-VTuber/open-llm-vtuber.github.io.git
cd open-llm-vtuber.github.io

# 安装依赖
yarn
# 或使用 npm
npm install

# 启动开发服务器
yarn start
# 或使用 npm
npm run start
```

这将启动本地开发服务器并打开浏览器窗口。大多数更改无需重启服务器即可实时反映。

#### 2. 进行更改

- 文档页面位于 `docs` 文件夹（中文主要版本）
- 英文翻译位于 `i18n/en/docusaurus-plugin-content-docs/current`
- 使用任何页面底部的"编辑此页面"按钮找到要编辑的确切文件

#### 3. 预览您的更改

- 本地服务器默认显示中文站点
- 要预览英文站点：`yarn start --locale en`
- 注意：语言切换器仅在部署版本中工作

#### 4. 提交拉取请求 (Pull Request, PR)

- 创建描述性的 PR 标题和说明
- 确保 PR 中的所有更改都是有意为之的
- 如果可能，请在两种语言（中文和英文）中进行更改

如果您不熟悉创建 PR 但想要做出贡献，可以开一个 issue 附上您想要进行的更改。我们有些许可能会帮你实现那些修改。

## 感谢

我们感谢所有对改进 Open-LLM-VTuber 文档的贡献！
