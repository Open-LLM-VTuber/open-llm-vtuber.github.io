import os
import requests
from anytree import Node, RenderTree


def get_github_tree(owner, repo, branch):
    url = f"https://api.github.com/repos/{owner}/{repo}/git/trees/{branch}?recursive=1"
    r = requests.get(url)
    paths = [item["path"] for item in r.json()["tree"] if item["type"] == "blob"]

    # Build tree
    root = Node(repo)
    project_structure = ""
    nodes = {"": root}
    for path in sorted(paths):
        parts = path.split("/")
        for i in range(1, len(parts) + 1):
            subpath = "/".join(parts[:i])
            if subpath not in nodes:
                nodes[subpath] = Node(
                    parts[i - 1], parent=nodes["/".join(parts[: i - 1])]
                )

    for pre, fill, node in RenderTree(root):
        line = "%s%s\n" % (pre, node.name)
        project_structure += line
        if line.strip() == "├── .python-version":
            project_structure += (
                "%sconf.yaml\n" % pre
            )  # Insert conf.yaml with same indentation

    return project_structure


def collect_markdown_docs(docs_dir="../docs", output_file="ai_prompt.md"):
    """
    Traverse all .md and .mdx files in the docs directory and write their content
    to a single markdown file with file path information.
    """
    with open(output_file, "w", encoding="utf-8") as outfile:
        # Write AI instructions at the beginning
        outfile.write("# AI Instructions\n\n")
        outfile.write(
            "你是 Open-LLM-VTuber 项目的 AI 助手。你需要帮助用户解决 Open-LLM-VTuber 相关的问题。你需要在结尾鼓励用户查阅官方文档 https://open-llm-vtuber.github.io/\n\n"
        )
        outfile.write(
            "- 如果用户提供的信息不充分，请向用户提问，让用户提供更多信息，或是帮助用户 debug，给出指示。作为一个 Agent，你应当主动向用户获取信息。\n"
        )
        outfile.write("---\n\n")

        # Fetch and add the configuration file content
        try:
            config_url = "https://raw.githubusercontent.com/Open-LLM-VTuber/Open-LLM-VTuber/refs/heads/main/config_templates/conf.ZH.default.yaml"
            response = requests.get(config_url)
            response.raise_for_status()  # Raise an exception for bad responses

            outfile.write("# 默认配置文件\n\n")
            outfile.write("以下是项目的默认配置文件，供 AI 参考：\n\n")
            outfile.write("```yaml\n")
            outfile.write(response.text)
            outfile.write("\n```\n\n")
            outfile.write("---\n\n")

        except Exception as e:
            outfile.write(f"# 配置文件\n\n无法获取配置文件: {str(e)}\n\n---\n\n")

        # Add placeholder for project directory structure
        outfile.write("# 项目目录结构\n\n")
        project_structure = get_github_tree(
            "Open-LLM-VTuber", "Open-LLM-VTuber", "main"
        )
        outfile.write(f"\n\n{'=' * 80}\n")
        outfile.write("<!-- PROJECT_DIRECTORY_STRUCTURE -->\n\n")
        outfile.write(f"## File: {project_structure}\n\n")
        outfile.write("---\n\n")

        # Write header for the document
        outfile.write("# Open-LLM-VTuber Documentation Collection\n\n")
        outfile.write(
            "This is a collection of all documentation files for AI reference.\n\n"
        )

        file_count = 0

        # Walk through all files in the docs directory
        for root, _, files in os.walk(docs_dir):
            for file in sorted(files):
                if file.endswith((".md", ".mdx")):
                    file_path = os.path.join(root, file)
                    rel_path = os.path.relpath(file_path)

                    try:
                        with open(file_path, "r", encoding="utf-8") as infile:
                            content = infile.read()

                        file_count += 1

                        # Add file path and separator
                        outfile.write(f"\n\n{'=' * 80}\n")
                        outfile.write(f"## File: {rel_path}\n\n")

                        # Add file content
                        outfile.write(content)

                    except Exception as e:
                        outfile.write(f"\nError reading file {rel_path}: {str(e)}\n")

        # Add summary
        outfile.write(f"\n\n{'=' * 80}\n")
        outfile.write(
            f"\n# Summary: 上面是 {file_count} 个项目文档网站的完整内容，请根据文档，回答用户的问题，帮助用户解决问题。\n"
        )

        print(
            f"Successfully processed {file_count} files. Output saved to {output_file}"
        )


if __name__ == "__main__":
    collect_markdown_docs()
