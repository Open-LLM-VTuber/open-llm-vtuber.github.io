"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1102],{3172:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"user-guide/backend/llm","title":"\u8bed\u8a00\u6a21\u578b (LLM)","description":"\u672c\u9879\u76ee\u652f\u6301\u591a\u79cd\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef\u4e0e\u6a21\u578b\u3002","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/user-guide/backend/llm.md","sourceDirName":"user-guide/backend","slug":"/user-guide/backend/llm","permalink":"/en/docs/user-guide/backend/llm","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/user-guide/backend/llm.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docSidebar","previous":{"title":"\u8bed\u97f3\u8bc6\u522b (ASR)","permalink":"/en/docs/user-guide/backend/asr"},"next":{"title":"\u667a\u80fd\u4f53 (Agent)","permalink":"/en/docs/user-guide/backend/agent"}}');var i=n(4848),r=n(8453),s=n(5537),c=n(9329);const t={sidebar_position:4},d="\u8bed\u8a00\u6a21\u578b (LLM)",o={},u=[{value:"\u5982\u4f55\u914d\u7f6e\u548c\u5207\u6362\u4e0d\u540c\u7684\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef",id:"\u5982\u4f55\u914d\u7f6e\u548c\u5207\u6362\u4e0d\u540c\u7684\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef",level:3},{value:"1. \u914d\u7f6e\u5927\u8bed\u8a00\u6a21\u578b\u8bbe\u7f6e",id:"1-\u914d\u7f6e\u5927\u8bed\u8a00\u6a21\u578b\u8bbe\u7f6e",level:4},{value:"2. \u5728\u5bf9\u5e94\u7684 \u667a\u80fd\u4f53(Agent) \u7684\u8bbe\u7f6e\uff0c\u5207\u6362\u5230\u5bf9\u5e94\u7684\u5927\u8bed\u8a00\u6a21\u578b(LLM)",id:"2-\u5728\u5bf9\u5e94\u7684-\u667a\u80fd\u4f53agent-\u7684\u8bbe\u7f6e\u5207\u6362\u5230\u5bf9\u5e94\u7684\u5927\u8bed\u8a00\u6a21\u578bllm",level:4},{value:"\u652f\u6301\u7684\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef",id:"\u652f\u6301\u7684\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef",level:2},{value:"OpenAI \u517c\u5bb9\u7684 API (<code>openai_compatible_llm</code>)",id:"openai-\u517c\u5bb9\u7684-api-openai_compatible_llm",level:3},{value:"\u8bbe\u7f6e\u8bf4\u660e",id:"\u8bbe\u7f6e\u8bf4\u660e",level:4},{value:"Ollama (<code>ollama_llm</code>)",id:"ollama-ollama_llm",level:3},{value:"Ollama \u5b89\u88c5\u6307\u5357",id:"ollama-\u5b89\u88c5\u6307\u5357",level:4},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:4},{value:"OpenAI \u5b98\u65b9 API (<code>openai_llm</code>)",id:"openai-\u5b98\u65b9-api-openai_llm",level:3},{value:"Gemini API (<code>gemini_llm</code>)",id:"gemini-api-gemini_llm",level:3},{value:"\u667a\u8c31 API (<code>zhipu_llm</code>)",id:"\u667a\u8c31-api-zhipu_llm",level:3},{value:"DeepSeek API (<code>deepseek</code>)",id:"deepseek-api-deepseek",level:3},{value:"Mistral API (<code>mistral_llm</code>)",id:"mistral-api-mistral_llm",level:3},{value:"Groq API (<code>groq_llm</code>)",id:"groq-api-groq_llm",level:3},{value:"Claude (<code>claude_llm</code>)",id:"claude-claude_llm",level:3},{value:"LLama CPP (<code>llama_cpp_llm</code>)",id:"llama-cpp-llama_cpp_llm",level:3},{value:"\u8bbe\u5907\u8981\u6c42",id:"\u8bbe\u5907\u8981\u6c42",level:4},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3}];function h(e){const l={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.header,{children:(0,i.jsx)(l.h1,{id:"\u8bed\u8a00\u6a21\u578b-llm",children:"\u8bed\u8a00\u6a21\u578b (LLM)"})}),"\n",(0,i.jsx)(l.p,{children:"\u672c\u9879\u76ee\u652f\u6301\u591a\u79cd\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef\u4e0e\u6a21\u578b\u3002"}),"\n",(0,i.jsx)(l.h3,{id:"\u5982\u4f55\u914d\u7f6e\u548c\u5207\u6362\u4e0d\u540c\u7684\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef",children:"\u5982\u4f55\u914d\u7f6e\u548c\u5207\u6362\u4e0d\u540c\u7684\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef"}),"\n",(0,i.jsxs)(l.blockquote,{children:["\n",(0,i.jsxs)(l.p,{children:["\u9879\u76ee\u9884\u8bbe\u7684\u667a\u80fd\u4f53 (Agent) \u662f ",(0,i.jsx)(l.code,{children:"basic_memory_agent"}),"\uff0c\u6240\u4ee5\u8981\u5207\u6362\u9884\u8bbe Agent \u7684\u8bed\u8a00\u6a21\u578b\uff0c\u5728 ",(0,i.jsx)(l.code,{children:"basic_memory_agent"})," \u7684 ",(0,i.jsx)(l.code,{children:"llm_provider"})," \u9009\u9879\u4e0b\u8fdb\u884c\u9009\u62e9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"1-\u914d\u7f6e\u5927\u8bed\u8a00\u6a21\u578b\u8bbe\u7f6e",children:"1. \u914d\u7f6e\u5927\u8bed\u8a00\u6a21\u578b\u8bbe\u7f6e"}),"\n",(0,i.jsxs)(l.p,{children:["\u53c2\u8003\u4e0b\u65b9 ",(0,i.jsx)(l.a,{href:"#%E6%94%AF%E6%8C%81%E7%9A%84%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E5%90%8E%E7%AB%AF",children:"\u652f\u6301\u7684\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef"})," \u914d\u7f6e\u5bf9\u5e94\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef\u7684\u914d\u7f6e\u3002"]}),"\n",(0,i.jsxs)(l.p,{children:["\u6bd4\u5982\uff0c\u5982\u679c\u4f60\u60f3\u4f7f\u7528 Ollama\uff0c\u8bf7\u6839\u636e ",(0,i.jsx)(l.a,{href:"#ollama-ollama_llm",children:"Ollama"})," \u90e8\u5206\u7684\u6307\u5357\u5b89\u88c5\u548c\u914d\u7f6e ollama \u76f8\u5173\u914d\u7f6e"]}),"\n",(0,i.jsxs)(l.p,{children:["\u5728 ",(0,i.jsx)(l.code,{children:"agent_config"})," \u4e0b\u7684 ",(0,i.jsx)(l.code,{children:"llm_config"}),"\uff0c\u53ef\u4ee5\u914d\u7f6e\u540e\u7aef\u4e0e\u5404\u4e2a LLM \u7684\u8fde\u63a5\u914d\u7f6e\u3002"]}),"\n",(0,i.jsx)(l.h4,{id:"2-\u5728\u5bf9\u5e94\u7684-\u667a\u80fd\u4f53agent-\u7684\u8bbe\u7f6e\u5207\u6362\u5230\u5bf9\u5e94\u7684\u5927\u8bed\u8a00\u6a21\u578bllm",children:"2. \u5728\u5bf9\u5e94\u7684 \u667a\u80fd\u4f53(Agent) \u7684\u8bbe\u7f6e\uff0c\u5207\u6362\u5230\u5bf9\u5e94\u7684\u5927\u8bed\u8a00\u6a21\u578b(LLM)"}),"\n",(0,i.jsxs)(l.blockquote,{children:["\n",(0,i.jsx)(l.p,{children:"\u6709\u4e9b Agent \u53ef\u80fd\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49 LLM"}),"\n"]}),"\n",(0,i.jsxs)(l.p,{children:["\u524d\u5f80 ",(0,i.jsx)(l.code,{children:"basic_memory_agent"})," \u8bbe\u7f6e\u4e0b"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-yaml",children:'basic_memory_agent:\n    # "openai_compatible_llm", "llama_cpp_llm", "claude_llm", "ollama_llm"\n    # "openai_llm", "gemini_llm", "zhipu_llm", "deepseek_llm", "groq_llm"\n    # "mistral_llm"\n    llm_provider: "openai_compatible_llm" # \u4f7f\u7528\u7684 LLM \u65b9\u6848\n    faster_first_response: True\n'})}),"\n",(0,i.jsxs)(l.p,{children:["\u628a ",(0,i.jsx)(l.code,{children:"basic_memory_agent"})," \u6362\u6210\u4f60\u60f3\u4f7f\u7528\u7684\u5927\u8bed\u8a00\u6a21\u578b(LLM)\u3002"]}),"\n",(0,i.jsxs)(l.p,{children:["\u6ce8\u610f\uff0c",(0,i.jsx)(l.code,{children:"llm_provider"}),"\u4e2d\u53ea\u80fd\u586b\u5199 ",(0,i.jsx)(l.code,{children:"llm_configs"})," \u4e0b\u9762\u5b58\u5728\u7684\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef\uff0c\u6bd4\u5982 ",(0,i.jsx)(l.code,{children:"openai_compatible_llm"}),", ",(0,i.jsx)(l.code,{children:"claude_llm"})," \u7b49\u7b49"]}),"\n",(0,i.jsx)(l.h2,{id:"\u652f\u6301\u7684\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef",children:"\u652f\u6301\u7684\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef"}),"\n",(0,i.jsxs)(l.h3,{id:"openai-\u517c\u5bb9\u7684-api-openai_compatible_llm",children:["OpenAI \u517c\u5bb9\u7684 API (",(0,i.jsx)(l.code,{children:"openai_compatible_llm"}),")"]}),"\n",(0,i.jsx)(l.p,{children:"\u4e0e\u6240\u6709\u652f\u6301 OpenAI Chat Completion \u683c\u5f0f\u7684 API \u7aef\u70b9\u517c\u5bb9\u3002\u8fd9\u5305\u62ec LM Studio, vLLM, \u4ee5\u53ca\u7edd\u5927\u90e8\u5206\u7684\u63a8\u7406\u5de5\u5177\u548c API \u63d0\u4f9b\u5546\u3002"}),"\n",(0,i.jsxs)(l.p,{children:["\u540e\u9762\u7684 OpenAI \u5b98\u65b9API\uff0cGemini\uff0c\u667a\u8c31\uff0cDeepSeek\uff0cMistral \u548c Groq \u90fd\u662f ",(0,i.jsx)(l.code,{children:"openai_compatible_llm"})," \u7684\u5957\u58f3 (Ollama\u4e5f\u662f\u5957\u58f3\uff0c\u4e0d\u8fc7\u52a0\u4e0a\u4e86\u7279\u6b8a\u7684\u5185\u5b58\u7ba1\u7406\u673a\u5236)\uff0c\u53ea\u662f\u6211\u5e2e\u4f60\u4eec\u628a\u6b63\u786e\u7684 ",(0,i.jsx)(l.code,{children:"base_url"})," \u548c\u76f8\u5173\u914d\u7f6e\u63d0\u524d\u586b\u597d\u4e86\u3002"]}),"\n",(0,i.jsx)(l.h4,{id:"\u8bbe\u7f6e\u8bf4\u660e",children:"\u8bbe\u7f6e\u8bf4\u660e"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-yaml",children:'# OpenAI \u517c\u5bb9\u63a8\u7406\u540e\u7aef\nopenai_compatible_llm:\n    base_url: "http://localhost:11434/v1" # \u57fa\u7840 URL\n    llm_api_key: "somethingelse" # API \u5bc6\u94a5\n    organization_id: "org_eternity" # \u7ec4\u7ec7 ID\n    project_id: "project_glass" # \u9879\u76ee ID\n    model: "qwen2.5:latest" # \u4f7f\u7528\u7684\u6a21\u578b\n    temperature: 1.0 # \u6e29\u5ea6\uff0c\u4ecb\u4e8e 0 \u5230 2 \u4e4b\u95f4\n'})}),"\n",(0,i.jsxs)(l.h3,{id:"ollama-ollama_llm",children:["Ollama (",(0,i.jsx)(l.code,{children:"ollama_llm"}),")"]}),"\n",(0,i.jsx)(l.p,{children:"Ollama \u662f\u4e00\u4e2a\u6d41\u884c\u7684 LLM \u63a8\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u4e0b\u8f7d\u548c\u8fd0\u884c\u5927\u8bed\u8a00\u6a21\u578b\u3002"}),"\n",(0,i.jsx)(l.h4,{id:"ollama-\u5b89\u88c5\u6307\u5357",children:"Ollama \u5b89\u88c5\u6307\u5357"}),"\n",(0,i.jsxs)(l.ol,{children:["\n",(0,i.jsxs)(l.li,{children:["\u4ece ",(0,i.jsx)(l.a,{href:"https://ollama.com/",children:"Ollama \u5b98\u7f51"})," \u4e0b\u8f7d\u5e76\u5b89\u88c5"]}),"\n",(0,i.jsx)(l.li,{children:"\u9a8c\u8bc1\u5b89\u88c5:"}),"\n"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-bash",children:"ollama --version\n"})}),"\n",(0,i.jsxs)(l.ol,{start:"3",children:["\n",(0,i.jsxs)(l.li,{children:["\u4e0b\u8f7d\u5e76\u8fd0\u884c\u6a21\u578b\uff08\u4ee5 ",(0,i.jsx)(l.code,{children:"qwen2.5:latest"})," \u4e3a\u4f8b\uff09\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-bash",children:"ollama run qwen2.5:latest\n# \u8fd0\u884c\u6210\u529f\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u76f4\u63a5\u8ddf qwen2.5:latest \u5bf9\u8bdd\u4e86\n# \u53ef\u4ee5\u5148\u9000\u51fa\u804a\u5929\u754c\u9762 (Ctrl/Command + D)\uff0c\u4f46\u4e00\u5b9a\u4e0d\u8981\u5173\u95ed\u547d\u4ee4\u884c\n"})}),"\n",(0,i.jsxs)(l.ol,{start:"4",children:["\n",(0,i.jsx)(l.li,{children:"\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6a21\u578b\uff1a"}),"\n"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-bash",children:"ollama list\n# NAME                ID              SIZE      MODIFIED\n# qwen2.5:latest      845dbda0ea48    4.7 GB    2 minutes ago\n"})}),"\n",(0,i.jsx)(l.admonition,{type:"tip",children:(0,i.jsxs)(l.p,{children:["\u5bfb\u627e\u6a21\u578b\u540d\u65f6\uff0c\u8bf7\u4f7f\u7528 ",(0,i.jsx)(l.code,{children:"ollama list"})," \u547d\u4ee4\uff0c\u67e5\u770b ollama \u4e2d\u5df2\u4e0b\u8f7d\u7684\u6a21\u578b\uff0c\u5e76\u5c06\u6a21\u578b\u540d\u79f0\u76f4\u63a5\u590d\u5236\u7c98\u8d34\u5230 ",(0,i.jsx)(l.code,{children:"model"})," \u9009\u9879\u4e0b\uff0c\u907f\u514d\u6a21\u578b\u540d\u6253\u9519\uff0c\u5168\u5f62\u5192\u53f7\uff0c\u7a7a\u683c\u4e4b\u7c7b\u7684\u95ee\u9898\u3002"]})}),"\n",(0,i.jsx)(l.admonition,{type:"caution",children:(0,i.jsx)(l.p,{children:"\u9009\u62e9\u6a21\u578b\u65f6\uff0c\u8bf7\u8003\u8651\u4f60\u7684\u663e\u5b58\u5bb9\u91cf\u4e0eGPU\u7b97\u529b\u3002\u5982\u679c\u6a21\u578b\u6587\u4ef6\u5927\u5c0f\u5927\u4e8e\u663e\u5b58\u5bb9\u91cf\uff0c\u6a21\u578b\u4f1a\u88ab\u8feb\u4f7f\u7528 CPU \u8fd0\u7b97\uff0c\u901f\u5ea6\u6781\u6162\u3002\u53e6\u5916\uff0c\u6a21\u578b\u53c2\u6570\u91cf\u8d8a\u5c0f\uff0c\u5bf9\u8bdd\u5ef6\u8fdf\u8d8a\u5c0f\u3002\u5982\u679c\u4f60\u5e0c\u671b\u964d\u4f4e\u5bf9\u8bdd\u5ef6\u8fdf\uff0c\u8bf7\u9009\u62e9\u4e00\u4e2a\u53c2\u6570\u91cf\u8f83\u4f4e\u7684\u6a21\u578b\u3002"})}),"\n",(0,i.jsx)(l.h4,{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsxs)(l.p,{children:["\u7f16\u8f91 ",(0,i.jsx)(l.code,{children:"conf.yaml"}),"\uff1a"]}),"\n",(0,i.jsxs)(l.ol,{children:["\n",(0,i.jsxs)(l.li,{children:["\u5c06 ",(0,i.jsx)(l.code,{children:"basic_memory_agent"})," \u4e0b\u7684 ",(0,i.jsx)(l.code,{children:"llm_provider"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(l.code,{children:"ollama_llm"})]}),"\n",(0,i.jsxs)(l.li,{children:["\u8c03\u6574 ",(0,i.jsx)(l.code,{children:"llm_configs"})," \u9009\u9879\u4e0b\u7684 ",(0,i.jsx)(l.code,{children:"ollama_llm"})," \u4e0b\u7684\u8bbe\u7f6e:","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"base_url"})," \u672c\u5730\u8fd0\u884c\u4fdd\u6301\u9ed8\u8ba4\u5373\u53ef\uff0c\u65e0\u9700\u4fee\u6539\u3002"]}),"\n",(0,i.jsxs)(l.li,{children:["\u8bbe\u7f6e ",(0,i.jsx)(l.code,{children:"model"})," \u4e3a\u4f60\u4f7f\u7528\u7684\u6a21\u578b\uff0c\u6bd4\u5982\u672c\u6307\u5357\u4f7f\u7528\u7684 ",(0,i.jsx)(l.code,{children:"qwen2.5:latest"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-yaml",children:"ollama_llm:\n  base_url: http://localhost:11434  # \u672c\u5730\u8fd0\u884c\u4fdd\u6301\u9ed8\u8ba4\n  model: qwen2.5:latest            # ollama list \u5f97\u5230\u7684\u6a21\u578b\u540d\u79f0\n  temperature: 0.7                 # \u63a7\u5236\u56de\u7b54\u968f\u673a\u6027\uff0c\u8d8a\u9ad8\u8d8a\u968f\u673a (0~1)\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.h3,{id:"openai-\u5b98\u65b9-api-openai_llm",children:["OpenAI \u5b98\u65b9 API (",(0,i.jsx)(l.code,{children:"openai_llm"}),")"]}),"\n",(0,i.jsx)(l.p,{children:"\u8bf7\u5148\u53bb OpenAI \u5b98\u7f51\u83b7\u53d6 API key"}),"\n",(0,i.jsx)(l.p,{children:"\u7136\u540e\u5230\u8fd9\u8fb9\u8c03\u6574\u8bbe\u7f6e"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-yaml",children:'openai_llm:\n    llm_api_key: "Your Open AI API key" # OpenAI API \u5bc6\u94a5\n    model: "gpt-4o" # \u4f7f\u7528\u7684\u6a21\u578b\n    temperature: 1.0 # \u6e29\u5ea6\uff0c\u4ecb\u4e8e 0 \u5230 2 \u4e4b\u95f4\n'})}),"\n",(0,i.jsxs)(l.h3,{id:"gemini-api-gemini_llm",children:["Gemini API (",(0,i.jsx)(l.code,{children:"gemini_llm"}),")"]}),"\n",(0,i.jsxs)(l.p,{children:["\u524d\u5f80 ",(0,i.jsx)(l.a,{href:"https://aistudio.google.com/",children:"Google AI Studio"})," \u751f\u6210\u4e00\u4e2a API key\u3002"]}),"\n",(0,i.jsx)(l.p,{children:"\u7136\u540e\u5728\u8fd9\u8fb9\u8c03\u6574\u8bbe\u7f6e"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-yaml",children:'gemini_llm:\n    llm_api_key: "Your Gemini API Key" # Gemini API \u5bc6\u94a5\n    model: "gemini-2.0-flash-exp" # \u4f7f\u7528\u7684\u6a21\u578b\n    temperature: 1.0 # \u6e29\u5ea6\uff0c\u4ecb\u4e8e 0 \u5230 2 \u4e4b\u95f4\n'})}),"\n",(0,i.jsxs)(l.h3,{id:"\u667a\u8c31-api-zhipu_llm",children:["\u667a\u8c31 API (",(0,i.jsx)(l.code,{children:"zhipu_llm"}),")"]}),"\n",(0,i.jsxs)(l.p,{children:["\u524d\u5f80",(0,i.jsx)(l.a,{href:"https://bigmodel.cn/",children:"\u667a\u8c31"})," \u83b7\u53d6 API key\u3002"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-yaml",children:'zhipu_llm:\n    llm_api_key: "Your ZhiPu AI API key" # \u667a\u8c31 AI API \u5bc6\u94a5\n    model: "glm-4-flash" # \u4f7f\u7528\u7684\u6a21\u578b\n    temperature: 1.0 # \u6e29\u5ea6\uff0c\u4ecb\u4e8e 0 \u5230 2 \u4e4b\u95f4\n'})}),"\n",(0,i.jsxs)(l.h3,{id:"deepseek-api-deepseek",children:["DeepSeek API (",(0,i.jsx)(l.code,{children:"deepseek"}),")"]}),"\n",(0,i.jsxs)(l.p,{children:["\u524d\u5f80 ",(0,i.jsx)(l.a,{href:"#deepseek-api-deepseek",children:"DeepSeek"})," \u83b7\u53d6 API key"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-yaml",children:'zhipu_llm:\n    llm_api_key: "Your ZhiPu AI API key" # \u667a\u8c31 AI API \u5bc6\u94a5\n    model: "glm-4-flash" # \u4f7f\u7528\u7684\u6a21\u578b\n    temperature: 1.0 # \u6e29\u5ea6\uff0c\u4ecb\u4e8e 0 \u5230 2 \u4e4b\u95f4\n'})}),"\n",(0,i.jsxs)(l.h3,{id:"mistral-api-mistral_llm",children:["Mistral API (",(0,i.jsx)(l.code,{children:"mistral_llm"}),")"]}),"\n",(0,i.jsxs)(l.p,{children:["\u524d\u5f80 ",(0,i.jsx)(l.a,{href:"https://example.com",children:"Mistral\u5b98\u7f51"})," \u83b7\u53d6 API key"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-yaml",children:'mistral_llm:\n    llm_api_key: "Your Mistral API key" # Mistral API \u5bc6\u94a5\n    model: "pixtral-large-latest" # \u4f7f\u7528\u7684\u6a21\u578b\n    temperature: 1.0 # \u6e29\u5ea6\uff0c\u4ecb\u4e8e 0 \u5230 2 \u4e4b\u95f4\n'})}),"\n",(0,i.jsxs)(l.h3,{id:"groq-api-groq_llm",children:["Groq API (",(0,i.jsx)(l.code,{children:"groq_llm"}),")"]}),"\n",(0,i.jsxs)(l.p,{children:["\u524d\u5f80 ",(0,i.jsx)(l.a,{href:"https://console.groq.com/keys",children:"Groq \u5b98\u7f51"})," \u83b7\u53d6 API key"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-yaml",children:'groq_llm:\n    llm_api_key: "your groq API key" # Groq API \u5bc6\u94a5\n    model: "llama-3.3-70b-versatile" # \u4f7f\u7528\u7684\u6a21\u578b\n    temperature: 1.0 # \u6e29\u5ea6\uff0c\u4ecb\u4e8e 0 \u5230 2 \u4e4b\u95f4\n'})}),"\n",(0,i.jsxs)(l.h3,{id:"claude-claude_llm",children:["Claude (",(0,i.jsx)(l.code,{children:"claude_llm"}),")"]}),"\n",(0,i.jsxs)(l.p,{children:["\u5728 ",(0,i.jsx)(l.a,{href:"https://github.com/t41372/Open-LLM-VTuber/pull/35",children:"https://github.com/t41372/Open-LLM-VTuber/pull/35"})," \u4e2d\uff0c",(0,i.jsx)(l.code,{children:"v0.3.1"})," \u7248\u672c\u6dfb\u52a0\u4e86\u5bf9 Claude \u7684\u652f\u6301\u3002"]}),"\n",(0,i.jsxs)(l.p,{children:["\u5c06 ",(0,i.jsx)(l.code,{children:"LLM_PROVIDER"})," \u66f4\u6539\u4e3a ",(0,i.jsx)(l.code,{children:"claude"})," \u5e76\u5728 ",(0,i.jsx)(l.code,{children:"claude"})," \u4e0b\u5b8c\u6210\u8bbe\u7f6e\u3002"]}),"\n",(0,i.jsxs)(l.h3,{id:"llama-cpp-llama_cpp_llm",children:["LLama CPP (",(0,i.jsx)(l.code,{children:"llama_cpp_llm"}),")"]}),"\n",(0,i.jsxs)(l.p,{children:["llama cpp \u63d0\u4f9b\u4e86\u4e00\u79cd",(0,i.jsx)(l.strong,{children:"\u5728\u672c\u9879\u76ee\u5185"}),"\u76f4\u63a5\u8fd0\u884c LLM (gguf \u6587\u4ef6) \u7684\u65b9\u6cd5\uff0c\u65e0\u9700\u4efb\u4f55\u5916\u90e8\u5de5\u5177\uff08\u5982 Ollama\uff09\uff0c\u4e0d\u7528\u989d\u5916\u542f\u52a8\u4efb\u4f55\u670d\u52a1\u5668\u3002\u60a8\u53ea\u9700\u8981\u4e00\u4e2a ",(0,i.jsx)(l.code,{children:".gguf"})," \u6a21\u578b\u6587\u4ef6\u3002"]}),"\n",(0,i.jsx)(l.h4,{id:"\u8bbe\u5907\u8981\u6c42",children:"\u8bbe\u5907\u8981\u6c42"}),"\n",(0,i.jsxs)(l.p,{children:["\u6839\u636e ",(0,i.jsx)(l.a,{href:"https://github.com/abetlen/llama-cpp-python",children:"\u9879\u76ee\u4ed3\u5e93"})]}),"\n",(0,i.jsx)(l.p,{children:"\u8981\u6c42\uff1a"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"Python 3.8+"}),"\n",(0,i.jsxs)(l.li,{children:["C \u7f16\u8bd1\u5668","\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"Linux\uff1agcc \u6216 clang"}),"\n",(0,i.jsx)(l.li,{children:"Windows\uff1aVisual Studio \u6216 MinGW"}),"\n",(0,i.jsx)(l.li,{children:"MacOS\uff1aXcode"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l.p,{children:["\u5b89\u88c5\u8fc7\u7a0b\u4e2d\uff0c\u5c06\u4f1a\u4ece\u6e90\u4ee3\u7801\u6784\u5efa ",(0,i.jsx)(l.code,{children:"llama.cpp"})," \u5e76\u5c06\u5176\u4e0e\u6b64 Python \u5305\u4e00\u8d77\u5b89\u88c5\u3002"]}),"\n",(0,i.jsxs)(l.p,{children:["\u5982\u679c\u540e\u9762\u5931\u8d25\uff0c\u8bf7\u5728 ",(0,i.jsx)(l.code,{children:"pip install"})," \u547d\u4ee4\u4e2d\u6dfb\u52a0 ",(0,i.jsx)(l.code,{children:"--verbose"})," \u4ee5\u67e5\u770b\u5b8c\u6574\u7684 cmake \u6784\u5efa\u65e5\u5fd7\u3002"]}),"\n",(0,i.jsx)(l.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(l.p,{children:"\u8bf7\u6839\u636e\u4f60\u7684\u8bbe\u5907\uff0c\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u8fd0\u884c\u547d\u4ee4\u3002"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(c.A,{value:"nvidia",label:"Nvidia GPU",children:(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-bash",children:'CMAKE_ARGS="-DGGML_CUDA=on" uv pip install llama-cpp-python\n'})})}),(0,i.jsx)(c.A,{value:"apple",label:"Apple Silicon Mac",children:(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-bash",children:'CMAKE_ARGS="-DGGML_METAL=on" uv pip install llama-cpp-python\n'})})}),(0,i.jsx)(c.A,{value:"amd",label:"AMD GPU (ROCm)",children:(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-bash",children:'CMAKE_ARGS="-DGGML_HIPBLAS=on" uv pip install llama-cpp-python\n'})})}),(0,i.jsx)(c.A,{value:"cpu",label:"CPU (OpenBlas)",children:(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-bash",children:'CMAKE_ARGS="-DGGML_BLAS=ON -DGGML_BLAS_VENDOR=OpenBLAS" uv pip install llama-cpp-python\n'})})})]}),"\n",(0,i.jsxs)(l.p,{children:["\u5982\u679c\u4e0a\u9762\u6ca1\u6709\u627e\u5230\u4f60\u7684\u8bbe\u5907\uff0c\u53ef\u4ee5\u5728",(0,i.jsx)(l.a,{href:"https://github.com/abetlen/llama-cpp-python?tab=readme-ov-file#supported-backends",children:"\u6b64\u5904"}),"\u67e5\u627e\u9002\u7528\u4e8e\u60a8\u5e73\u53f0\u7684 ",(0,i.jsx)(l.code,{children:"pip install llama-cpp-python"})," \u547d\u4ee4\u3002"]}),"\n",(0,i.jsx)(l.admonition,{type:"warning",children:(0,i.jsxs)(l.p,{children:["\u6240\u6709 ",(0,i.jsx)(l.code,{children:"pip"})," \u547d\u4ee4\u90fd\u8981\u6539\u6210 ",(0,i.jsx)(l.code,{children:"uv pip"}),"\uff0c\u8fd9\u6837\u624d\u4f1a\u5b89\u88c5\u5728\u9879\u76ee\u865a\u62df\u73af\u5883\u4e2d\u3002\u6bd4\u5982\uff0c\u5982\u679c\u9879\u76ee\u9875\u9762\u4e0a\u5199 ",(0,i.jsx)(l.code,{children:"pip install llama-cpp-python"}),"\uff0c\u4f60\u8981\u6539\u6210 ",(0,i.jsx)(l.code,{children:"uv pip install llama-cpp-python"})]})}),"\n",(0,i.jsxs)(l.p,{children:["\u5982\u679c\u4f60\u5728\u8fd9\u4e00\u6b65\u9047\u5230\u95ee\u9898\uff0c\u53ef\u4ee5\u770b\u770b ",(0,i.jsx)(l.a,{href:"https://github.com/abetlen/llama-cpp-python?tab=readme-ov-file#windows-notes",children:"Windows Note"})," \u548c ",(0,i.jsx)(l.a,{href:"https://github.com/abetlen/llama-cpp-python?tab=readme-ov-file#macos-notes",children:"macOS Note"})]})]})}function p(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9329:(e,l,n)=>{n.d(l,{A:()=>s});n(6540);var a=n(4164);const i={tabItem:"tabItem_Ymn6"};var r=n(4848);function s(e){let{children:l,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:n,children:l})}},5537:(e,l,n)=>{n.d(l,{A:()=>f});var a=n(6540),i=n(4164),r=n(5627),s=n(6347),c=n(372),t=n(604),d=n(1861),o=n(8749);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:l,children:n}=e;return(0,a.useMemo)((()=>{const e=l??function(e){return u(e).map((e=>{let{props:{value:l,label:n,attributes:a,default:i}}=e;return{value:l,label:n,attributes:a,default:i}}))}(n);return function(e){const l=(0,d.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,n])}function p(e){let{value:l,tabValues:n}=e;return n.some((e=>e.value===l))}function m(e){let{queryString:l=!1,groupId:n}=e;const i=(0,s.W6)(),r=function(e){let{queryString:l=!1,groupId:n}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:l,groupId:n});return[(0,t.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const l=new URLSearchParams(i.location.search);l.set(r,e),i.replace({...i.location,search:l.toString()})}),[r,i])]}function x(e){const{defaultValue:l,queryString:n=!1,groupId:i}=e,r=h(e),[s,t]=(0,a.useState)((()=>function(e){let{defaultValue:l,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!p({value:l,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:r}))),[d,u]=m({queryString:n,groupId:i}),[x,j]=function(e){let{groupId:l}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(l),[i,r]=(0,o.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),_=(()=>{const e=d??x;return p({value:e,tabValues:r})?e:null})();(0,c.A)((()=>{_&&t(_)}),[_]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);t(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=n(9136);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function b(e){let{className:l,block:n,selectedValue:a,selectValue:s,tabValues:c}=e;const t=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),o=e=>{const l=e.currentTarget,n=t.indexOf(l),i=c[n].value;i!==a&&(d(l),s(i))},u=e=>{let l=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=t.indexOf(e.currentTarget)+1;l=t[n]??t[0];break}case"ArrowLeft":{const n=t.indexOf(e.currentTarget)-1;l=t[n]??t[t.length-1];break}}l?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},l),children:c.map((e=>{let{value:l,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===l?0:-1,"aria-selected":a===l,ref:e=>{t.push(e)},onKeyDown:u,onClick:o,...r,className:(0,i.A)("tabs__item",_.tabItem,r?.className,{"tabs__item--active":a===l}),children:n??l},l)}))})}function v(e){let{lazy:l,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(l){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,l)=>(0,a.cloneElement)(e,{key:l,hidden:e.props.value!==r})))})}function A(e){const l=x(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",_.tabList),children:[(0,g.jsx)(b,{...l,...e}),(0,g.jsx)(v,{...l,...e})]})}function f(e){const l=(0,j.A)();return(0,g.jsx)(A,{...e,children:u(e.children)},String(l))}},8453:(e,l,n)=>{n.d(l,{R:()=>s,x:()=>c});var a=n(6540);const i={},r=a.createContext(i);function s(e){const l=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:l},e.children)}}}]);