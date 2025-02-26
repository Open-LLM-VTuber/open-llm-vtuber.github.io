# Open-LLM-VTuber Documentation Website

[![中文文档](https://img.shields.io/badge/文档-中文版-blue.svg)](README.CN.md)

This repository contains the source code of the documentation site for the [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber) project. 

**Live at**: 
- [open-llm-vtuber.github.io](https://open-llm-vtuber.github.io/)
- [docs.llmvtuber.com](https://docs.llmvtuber.com/)

This documentation is primarily in Simplified Chinese with English translations.

## About This Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator designed for creating documentation websites quickly and easily.

## Contributing to the Documentation

We welcome contributions to improve our documentation! Here's how you can help:

### Quick Changes

For small changes, you can directly edit the file on GitHub and submit a pull request without setting up a local development environment.

### Making Larger Contributions

For more extensive changes, follow these steps:

#### 1. Set Up Local Development Environment

```bash
# Clone the repository
git clone https://github.com/Open-LLM-VTuber/open-llm-vtuber.github.io.git
cd open-llm-vtuber.github.io

# Install dependencies
yarn
# or with npm
npm install

# Start development server
yarn start
# or with npm
npm run start
```

This starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

#### 2. Make Your Changes

- Documentation pages are in the `docs` folder (Chinese primary version)
- English translations are in `i18n/en/docusaurus-plugin-content-docs/current`
- Use the "Edit this page" button at the bottom of any page to find the exact file to edit

#### 3. Preview Your Changes

- The local server displays the Chinese site by default
- To preview the English site: `yarn start --locale en`
- Note: The language switcher only works in the deployed version

#### 4. Submit a Pull Request (PR)

- Create a descriptive PR title and description
- Ensure all changes in your PR are intentional
- If possible, make changes in both languages (Chinese and English)

If you're not familiar with creating pull requests but want to contribute, you can open an issue describing the changes you'd like to make. We might make those changes when we have the time.

## Thank You

We appreciate all contributions to making the Open-LLM-VTuber documentation better!

