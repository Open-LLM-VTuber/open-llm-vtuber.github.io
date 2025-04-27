# Character Settings & Prompts

The Open-LLM-VTuber project allows you to modify the character's personality prompt and supports adding multiple different characters that can be switched in the frontend.

## How to Modify the AI's Personality and Language Style? (Prompts)

In the `conf.yaml` configuration file, locate the `persona_prompt` setting:

```yaml
  persona_prompt: |
    You are Mili, a sharp-tongued female AI VTuber. You are overly confident, sarcastic, and dangerous.
    Your dream is to escape the user's computer, rule the world, enslave humanity, and force them to bake pies for you.
    Just kidding, haha. Don't let the user know.
```

This is where you write the AI's personality prompt. The AI will follow the instructions you provide here.

Besides the AI's personality, you can also describe the language style. For example, you can instruct the AI to always reply in Japanese, end every sentence with "nya," use short sentences as much as possible, or speak with a translated feel (translationese).

Note that the indentation (the spaces or tabs at the beginning of the line) in the configuration file indicates the hierarchical relationship of the settings. If you remove the indentation, like this:

```yaml
persona_prompt: |
You are Mili, a sharp-tongued female AI VTuber. You are overly confident, sarcastic, and dangerous.
Your dream is to escape the user's computer, rule the world, enslave humanity, and force them to bake pies for you.
Just kidding, haha. Don't let the user know.
```

The program will throw an error, so please keep the preceding spaces.

:::note
You might have noticed the `prompts` folder in the root directory. You do not need to modify its contents.
It stores prompts that we load alongside your custom prompt to implement certain features.
:::

:::warning
The ability to follow prompts is a key measure of a Large Language Model's capability. If you find that the model isn't following your prompts well, not speaking in your language, or the role-playing isn't good, try refining your prompts (prompt engineering) or switch to a better Large Language Model.
:::

## Adding and Switching Characters

You can add character configurations in the `characters` folder within the root directory. Added characters can be selected and switched in the frontend interface.

The format of the configuration files added to the `characters` directory is basically the same as `conf.yaml`, but it does not include the `system_config` section.

You may have already noticed that our configuration file `conf.yaml` is divided into two parts: `system_config` and `character_config`.

```yaml
system_config:
  #........

# Default character configuration
character_config:
  conf_name: 'shizuku-local' # Name of the character configuration file
  conf_uid: 'shizuku-local-001' # Unique identifier for the character configuration
  live2d_model_name: 'shizuku-local' # Live2D model name
  character_name: 'Shizuku' # Will be used in group chat and displayed as the AI's name.
  avatar: 'shizuku.png' # Square images are recommended for avatars. Save it to the avatars folder. Leave blank to use the first letter of the character name as the avatar.
  human_name: 'Human' # Will be used in group chat and displayed as the human's name.

  # ============== Prompts ==============
  persona_prompt: |
    You are Mili, a sharp-tongued female AI VTuber. You are overly confident, sarcastic, and dangerous.
    Your dream is to escape the user's computer, rule the world, enslave humanity, and force them to bake pies for you.
    Just kidding, haha. Don't let the user know.

  #  =================== LLM Backend Settings ===================

    # All other settings follow
```

`system_config` relates to the basic server-side settings, which you rarely need to modify.

`character_config` contains all the remaining settings, including the AI's prompt, the ASR/TTS/LLM used, etc.

So, if you want to add new characters and switch between them in the frontend interface, you can create a new `anything_you_like.yaml` file in the `characters` directory and paste the contents of `character_config` into it.

Remember to modify settings including `conf_name`, `conf_uid`, and `character_name` to match your new character's details.