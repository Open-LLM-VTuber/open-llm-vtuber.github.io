---
sidebar_position: 5
---

# Updating the Project

:::warning
If your project version is below `v1.0.0`, you must redeploy the project following the [Quick Start Documentation](../quick-start.md). The deployment method in `v1.0.0` has undergone significant changes, making direct updates difficult.
:::

## Update Script

This project comes with an update script called `upgrade.py` in the project directory. Running `uv run upgrade.py` will update the project.

Currently, the update script only supports updating the backend and Web version. If you're using the Electron version of the desktop pet, after using the update script, please visit the [Open-LLM-VTuber-Web Repository's Release Page](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Web/releases) to download the latest version of the desktop client.

### Git

The update script uses Git to pull updates. Before running the update script, please ensure Git is installed on your computer.

Run this command in the terminal to check if Git is installed on your computer.

```bash
git -v
```

If the command shows text similar to the following, it means Git is installed on your computer and you can run the update script.

```text
git version 2.48.1
```

## Common Issues

### Network Issues

Users in mainland China may encounter GitHub-related network issues when running the update script. If you encounter error messages containing keywords like `HTTP`, `SSL`, `443`, please enable a proxy before running the update script.

### Update Failure
Users with versions prior to `v1.1.0` may experience update failures due to stash merge issues. This problem has been fixed in version `v1.1.0`.

If you encounter this issue, here's a solution:

1. Remove the `conf.yaml` file from the project (move it outside the project directory)
2. Run the update script `uv run upgrade.py` to upgrade to version `v1.1.0` or above
3. Move the `conf.yaml` file back to the project directory
4. Run the update script `uv run upgrade.py` again to update the `conf.yaml` file with the new update script
5. Complete