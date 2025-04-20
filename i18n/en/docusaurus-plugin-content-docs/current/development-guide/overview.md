---
sidebar_position: 2
---
# Development Guide Overview

Guides that are done:

- [How to add new TTS support?](./backend/tts.mdx)
- How to modify documentation? Please refer to the [Documentation Site README](https://github.com/Open-LLM-VTuber/open-llm-vtuber.github.io)

## Project Architecture Overview

Our project exists as an organization on GitHub, primarily to organize related repositories. We are not currently a formal organizational entity, and we warmly welcome new contributors to join us.

### Core Repositories

| Repository | Description | Main Maintainers |
|------|------|------------|
| [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | Project backend, main repository | [t41372](https://github.com/t41372), [ylxmf2005](https://github.com/ylxmf2005) |
| [Open-LLM-VTuber-Web](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web) | Project frontend, including web interface and Electron application | [ylxmf2005](https://github.com/ylxmf2005) |
| [Open-LLM-VTuber-Unity](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Unity) | Unity frontend, in development | [AnyaCoder](https://github.com/AnyaCoder), [Harry-Yu-Shuhang](https://github.com/Harry-Yu-Shuhang) |
| [open-llm-vtuber.github.io](https://github.com/Open-LLM-VTuber/open-llm-vtuber.github.io) | Documentation site source code, based on docusaurus | - |

This project uses a frontend-backend separation architecture. The backend [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) provides API services, so as long as you adapt to the backend API (mainly `/client-ws`), you can also develop your own frontend application.

### Version Management and Development Plan

#### Version Numbering Convention
Project version numbers follow **Semantic Versioning**:
- Major version (e.g., v0.5.2 → v1.0.0): Significant changes that users cannot directly upgrade
- Minor version (e.g., v1.0.0 → v1.1.0): New feature releases
- Patch version (e.g., v1.0.0 → v1.0.1): Bug fixes

#### Branch Information
| Branch | Description | Target Audience |
|------|------|----------|
| `dev` | Latest development progress | Developers only (may be unstable) |
| `main` | Preview version | Early adopters |
| `v1-stable` | Stable version | All regular users |

- Version number must be updated when merging to the `main` branch
- The `v1-stable` branch is used for releases, and user update scripts will synchronize with the latest changes in this branch
- Other branches are mostly feature branches or historical legacy

#### Version Release Process
1. New features are developed in the `dev` branch
2. After features stabilize, they are merged into the `main` branch with an increased version number (e.g., `v1.0.0-alpha.1` → `v1.0.0-alpha.2`)
3. After accumulating enough features, stable versions are released to `v1-stable`, with release notes, and published.

Version numbers are recorded in `pyproject.toml` and displayed in the command line when starting the backend. Note that this is different from the `conf_version` in the configuration file, which is only used to record configuration file structure changes.

#### Development Planning
The project has a [Roadmap](https://github.com/orgs/Open-LLM-VTuber/projects/2), but after the `v1.0.0` update, we haven't strictly followed it. Currently, we mainly rely on GitHub Issues and the [Issue Tracker](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/issues/127) to track development tasks.

## How to Participate in Development

### Before You Start

Before implementing your ideas, we recommend:

1. Check if there is a related [Issue](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/issues)
2. If not, create a new issue to discuss your idea
3. Start action after receiving feedback

Of course, if you want to develop directly and submit a PR, I won't stop you... 👀

### Finding Tasks

If you want to participate but don't have specific ideas:

- Check the [Feature Requests & Bugs & Top issues Tracker](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber/issues/127)
- Look for tasks labeled with `good first issue` - these are easier and suitable for new contributors
- Look for tasks labeled with `help wanted` - these are areas where we especially need help

### Development Process

1. Fork the relevant repository
2. Switch to the `dev` branch for development (the project changes rapidly)
3. Implement features or fix issues
4. Submit a PR to the `dev` branch of the original repository

If you encounter problems, you can always:
- Ask questions in the relevant issue
- Submit a PR draft to seek help
- Discuss in GitHub discussions
- Contact us through the following ways:
  - QQ group, QQ channel, Discord group
  - Bilibili private messages or other methods

## Code Standards and Notes

### Code Style

- Backend uses `ruff` as the linter. Please run `uv run ruff format` to format your code before submission
- Error messages and comments **should be in English** (although our users are primarily Chinese speakers, we still have users and developers who speak other languages)

### Configuration Files

- Configuration file templates are located in the `config_templates` directory
  - `conf.default.yaml` (English)
  - `conf.ZH.default.yaml` (Chinese)
- When modifying the configuration structure, both template files must be updated simultaneously
- Configuration files are validated using Pydantic. Please add corresponding data classes in `src/open_llm_vtuber/config_manager`

### Frontend Development

- Frontend code is in a separate [Open-LLM-VTuber-Web](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web) repository
- After building via GitHub Action, it links to the frontend directory of the main repository as a Git Submodule

#### Frontend-Backend Collaborative Development
If you need to modify both frontend and backend code:

1. Please refer to [Frontend User Guide/Installation and Deployment](/docs/user-guide/frontend/install) to get the frontend source code
2. Before frontend changes are merged to the frontend `main` branch, the backend's `frontend` submodule will not update
3. The development process is:
   - Frontend changes are first merged to the frontend `dev` → `main` branch
   - Wait for the frontend GitHub Action build to complete (generating the `build` branch)
   - Update the backend's `frontend` submodule reference
   - Merge backend changes to the corresponding branch

### Documentation Updates

**Remember to update the relevant documentation after implementing features**. This is very important for new users and developers!

## Join the Community

If you're in our QQ group, you can get the `Contributor` title after making contributions. Remember to tell me your GitHub ID so I can recognize you~

In fact, most of our project's main contributors are in the QQ group. Welcome to join and communicate together!


