import os
import requests


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
        project_structure = """
        .
├── LICENSE
├── LICENSE-Live2D.md
├── README.CN.md
├── README.md
├── assets
│   ├── banner.cn.jpg
│   ├── banner.jpg
│   ├── i1.jpg
│   ├── i1_app_mode.jpg
│   ├── i2.jpg
│   ├── i2_pet_vscode.jpg
│   ├── i3.jpg
│   ├── i3_browser_world_fun.jpg
│   ├── i4.jpg
│   └── i4_pet_desktop.jpg
├── avatars
│   ├── mao.png
│   └── shizuku.png
├── backgrounds
│   ├── cartoon-night-landscape-moon.jpeg
│   ├── ceiling-window-room-night.jpeg
│   ├── cityscape.jpeg
│   ├── computer-room-illustration.jpeg
│   ├── congress.jpg
│   ├── field-night-painting-moon.jpeg
│   ├── lernado-diff-classroom-center.jpeg
│   ├── moon-over-mountain.jpeg
│   ├── mountain-range-illustration.jpeg
│   ├── night-landscape-grass-moon.jpeg
│   ├── night-scene-cartoon-moon.jpeg
│   ├── painting-valley-night-sky. 2.jpeg
│   ├── room-interior-illustration.jpeg
│   └── sdxl-classroom-door-view.jpeg
├── cache
├── characters
│   ├── en_mashiro.yaml
│   ├── en_nuke_debate.yaml
│   ├── en_unhelpful_ai.yaml
│   ├── zh_米粒.yaml
│   └── zh_翻译腔.yaml
├── chat_history
├── conf.yaml
├── config_templates
│   ├── README.md
│   ├── conf.ZH.default.yaml
│   └── conf.default.yaml
├── doc
│   └── sample_conf
│       ├── sherpaASRTTS_sense_voice_melo.yaml
│       ├── sherpaASRTTS_sense_voice_piper_en.yaml
│       ├── sherpaASRTTS_sense_voice_vits_zh.yaml
│       ├── sherpaASR_paraformer.yaml
│       └── sherpaASR_sense_voice.yaml
├── dockerfile
├── frontend
│   ├── assets
│   │   ├── main-6gNOTEMZ.css
│   │   └── main-DsLaT6SU.js
│   ├── favicon.ico
│   ├── index.html
│   └── libs
│       ├── live2d.min.js
│       └── live2dcubismcore.min.js
├── live2d-models
│   ├── mao_pro
│   │   ├── expressions
│   │   │   ├── exp_01.exp3.json
│   │   │   ├── exp_02.exp3.json
│   │   │   ├── exp_03.exp3.json
│   │   │   ├── exp_04.exp3.json
│   │   │   ├── exp_05.exp3.json
│   │   │   ├── exp_06.exp3.json
│   │   │   ├── exp_07.exp3.json
│   │   │   └── exp_08.exp3.json
│   │   ├── mao_pro.4096
│   │   │   └── texture_00.png
│   │   ├── mao_pro.cdi3.json
│   │   ├── mao_pro.moc3
│   │   ├── mao_pro.model3.json
│   │   ├── mao_pro.physics3.json
│   │   ├── mao_pro.pose3.json
│   │   └── motions
│   │       ├── mtn_01.motion3.json
│   │       ├── mtn_02.motion3.json
│   │       ├── mtn_03.motion3.json
│   │       ├── mtn_04.motion3.json
│   │       ├── special_01.motion3.json
│   │       ├── special_02.motion3.json
│   │       └── special_03.motion3.json
│   └── shizuku
│       ├── expressions
│       │   ├── f01.exp.json
│       │   ├── f02.exp.json
│       │   ├── f03.exp.json
│       │   └── f04.exp.json
│       ├── motions
│       │   ├── flickHead_00.mtn
│       │   ├── flickHead_01.mtn
│       │   ├── flickHead_02.mtn
│       │   ├── idle_00.mtn
│       │   ├── idle_01.mtn
│       │   ├── idle_02.mtn
│       │   ├── pinchIn_00.mtn
│       │   ├── pinchIn_01.mtn
│       │   ├── pinchIn_02.mtn
│       │   ├── pinchOut_00.mtn
│       │   ├── pinchOut_01.mtn
│       │   ├── pinchOut_02.mtn
│       │   ├── shake_00.mtn
│       │   ├── shake_01.mtn
│       │   ├── shake_02.mtn
│       │   ├── tapBody_00.mtn
│       │   ├── tapBody_01.mtn
│       │   └── tapBody_02.mtn
│       ├── shizuku.1024
│       │   ├── texture_00.png
│       │   ├── texture_01.png
│       │   ├── texture_02.png
│       │   ├── texture_03.png
│       │   ├── texture_04.png
│       │   └── texture_05.png
│       ├── shizuku.moc
│       ├── shizuku.model.json
│       ├── shizuku.physics.json
│       ├── shizuku.pose.json
│       └── sounds
│           ├── flickHead_00.mp3
│           ├── flickHead_01.mp3
│           ├── flickHead_02.mp3
│           ├── pinchIn_00.mp3
│           ├── pinchIn_01.mp3
│           ├── pinchIn_02.mp3
│           ├── pinchOut_00.mp3
│           ├── pinchOut_01.mp3
│           ├── pinchOut_02.mp3
│           ├── shake_00.mp3
│           ├── shake_01.mp3
│           ├── shake_02.mp3
│           ├── tapBody_00.mp3
│           ├── tapBody_01.mp3
│           └── tapBody_02.mp3
├── logs
│   └── debug_2025-02-19.log
├── merge_configs.py
├── model_dict.json
├── models
│   └── sherpa-onnx-sense-voice-zh-en-ja-ko-yue-2024-07-17
│       ├── LICENSE
│       ├── README.md
│       ├── export-onnx.py
│       ├── model.int8.onnx
│       └── tokens.txt
├── pixi.lock
├── prompts
│   ├── __init__.py
│   ├── prompt_loader.py
│   └── utils
│       ├── group_conversation_prompt.txt
│       ├── live2d_expression_prompt.txt
│       └── think_tag_prompt.txt
├── pyproject.toml
├── run_server.py
├── src
│   └── open_llm_vtuber
│       ├── __init__.py
│       ├── agent
│       │   ├── __init__.py
│       │   ├── agent_factory.py
│       │   ├── agents
│       │   │   ├── __init__.py
│       │   │   ├── agent_interface.py
│       │   │   ├── basic_memory_agent.py
│       │   │   ├── hume_ai.py
│       │   │   └── mem0_llm.py
│       │   ├── input_types.py
│       │   ├── output_types.py
│       │   ├── stateless_llm
│       │   │   ├── __init__.py
│       │   │   ├── claude_llm.py
│       │   │   ├── llama_cpp_llm.py
│       │   │   ├── ollama_llm.py
│       │   │   ├── openai_compatible_llm.py
│       │   │   └── stateless_llm_interface.py
│       │   ├── stateless_llm_factory.py
│       │   └── transformers.py
│       ├── asr
│       │   ├── __init__.py
│       │   ├── asr_factory.py
│       │   ├── asr_interface.py
│       │   ├── azure_asr.py
│       │   ├── faster_whisper_asr.py
│       │   ├── fun_asr.py
│       │   ├── groq_whisper_asr.py
│       │   ├── openai_whisper_asr.py
│       │   ├── sherpa_onnx_asr.py
│       │   ├── utils.py
│       │   └── whisper_cpp_asr.py
│       ├── chat_group.py
│       ├── chat_history_manager.py
│       ├── config_manager
│       │   ├── __init__.py
│       │   ├── agent.py
│       │   ├── asr.py
│       │   ├── character.py
│       │   ├── i18n.py
│       │   ├── main.py
│       │   ├── stateless_llm.py
│       │   ├── system.py
│       │   ├── tts.py
│       │   ├── tts_preprocessor.py
│       │   ├── utils.py
│       │   └── vad.py
│       ├── conversations
│       │   ├── __init__.py
│       │   ├── conversation_handler.py
│       │   ├── conversation_utils.py
│       │   ├── group_conversation.py
│       │   ├── single_conversation.py
│       │   ├── tts_manager.py
│       │   └── types.py
│       ├── live2d_model.py
│       ├── message_handler.py
│       ├── routes.py
│       ├── server.py
│       ├── service_context.py
│       ├── translate
│       │   ├── __init__.py
│       │   ├── deeplx.py
│       │   ├── tencent.py
│       │   ├── translate_factory.py
│       │   └── translate_interface.py
│       ├── tts
│       │   ├── __init__.py
│       │   ├── azure_tts.py
│       │   ├── bark_tts.py
│       │   ├── coqui_tts.py
│       │   ├── cosyvoice2_tts.py
│       │   ├── cosyvoice_tts.py
│       │   ├── edge_tts.py
│       │   ├── fish_api_tts.py
│       │   ├── gpt_sovits_tts.py
│       │   ├── melo_tts.py
│       │   ├── pyttsx3_tts.py
│       │   ├── sherpa_onnx_tts.py
│       │   ├── tts_factory.py
│       │   ├── tts_interface.py
│       │   └── x_tts.py
│       ├── utils
│       │   ├── __init__.py
│       │   ├── install_utils.py
│       │   ├── sentence_divider.py
│       │   ├── stream_audio.py
│       │   └── tts_preprocessor.py
│       ├── vad
│       │   ├── __init__.py
│       │   ├── silero.py
│       │   ├── vad_factory.py
│       │   └── vad_interface.py
│       └── websocket_handler.py
├── tree.txt
├── upgrade.py
├── uv.lock
└── web_tool
    ├── README.md
    ├── index.html
    ├── main.js
    └── recorder.js

53 directories, 294 files

        """
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
