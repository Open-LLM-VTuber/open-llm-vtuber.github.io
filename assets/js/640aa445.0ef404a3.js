"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7426],{5815:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"user-guide/backend/agent","title":"\u667a\u80fd\u4f53 (Agent)","description":"\u667a\u80fd\u4f53 (Agent) \u662f\u5305\u542b\u8bb0\u5fc6\uff0c\u5de5\u5177\uff0c\u4eba\u683c\u7684 AI\u3002\u5f53\u524d\u7248\u672c\u7684\u9884\u8bbe\u9009\u9879\u662f basicmemoryagent\u3002","source":"@site/docs/user-guide/backend/agent.md","sourceDirName":"user-guide/backend","slug":"/user-guide/backend/agent","permalink":"/docs/user-guide/backend/agent","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/user-guide/backend/agent.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docSidebar","previous":{"title":"\u8bed\u8a00\u6a21\u578b","permalink":"/docs/user-guide/backend/llm"},"next":{"title":"\u8bed\u97f3\u5408\u6210","permalink":"/docs/user-guide/backend/tts"}}');var c=i(4848),t=i(8453);const r={sidebar_position:5},l="\u667a\u80fd\u4f53 (Agent)",d={},a=[{value:"Basic Memory Agent",id:"basic-memory-agent",level:2},{value:"HumeAI Agent (EVI)",id:"humeai-agent-evi",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:3},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u667a\u80fd\u4f53-agent",children:"\u667a\u80fd\u4f53 (Agent)"})}),"\n",(0,c.jsxs)(n.p,{children:["\u667a\u80fd\u4f53 (Agent) \u662f\u5305\u542b\u8bb0\u5fc6\uff0c\u5de5\u5177\uff0c\u4eba\u683c\u7684 AI\u3002\u5f53\u524d\u7248\u672c\u7684\u9884\u8bbe\u9009\u9879\u662f ",(0,c.jsx)(n.code,{children:"basic_memory_agent"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u667a\u80fd\u4f53 (Agent) \u76f8\u5173\u7684\u8bbe\u7f6e\u5728 ",(0,c.jsx)(n.code,{children:"conf.yaml"})," \u914d\u7f6e\u6587\u4ef6\u7684 ",(0,c.jsx)(n.code,{children:"agent_config"})," \u4e0b\u9762\uff0c\u4f60\u53ef\u4ee5\u900f\u8fc7\u4fee\u6539 ",(0,c.jsx)(n.code,{children:"conversation_agent_choice"})," \u6765\u4fee\u6539\u4e0e\u4f60\u5bf9\u8bdd\u7684\u667a\u80fd\u4f53\u5b9e\u73b0\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u76ee\u524d\uff0c\u8fd9\u4e2a\u9879\u76ee\u4e2d\u6709\u4ee5\u4e0b\u7684\u667a\u80fd\u4f53\u5b9e\u73b0:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Basic Memory Agent \u57fa\u7840\u8bb0\u5fc6\u667a\u80fd\u4f53"}),"\n",(0,c.jsx)(n.li,{children:"HumeAI Agent (EVI)"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"basic-memory-agent",children:"Basic Memory Agent"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e2a\u9879\u76ee\u9884\u8bbe\uff0c\u4e5f\u662f\u6700\u4e3b\u8981\u7684\u667a\u80fd\u4f53\u3002\u5177\u6709\u77ed\u671f\u8bb0\u5fc6\uff0c\u5bf9\u8bdd\u8bb0\u5f55\u50a8\u5b58/\u5207\u6362/\u52a0\u8f7d\u7b49\u80fd\u529b\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:'basic_memory_agent:\n  # \u57fa\u7840 AI \u4ee3\u7406\uff0c\u6ca1\u4ec0\u4e48\u7279\u522b\u7684\u3002\n  # \u4ece llm_config \u4e2d\u9009\u62e9\u4e00\u4e2a llm \u63d0\u4f9b\u5546\n  # \u5e76\u5728\u76f8\u5e94\u7684\u5b57\u6bb5\u4e2d\u8bbe\u7f6e\u6240\u9700\u7684\u53c2\u6570\n  # \u4f8b\u5982\uff1a\n  # "openai_compatible_llm", "llama_cpp_llm", "claude_llm", "ollama_llm"\n  # "openai_llm", "gemini_llm", "zhipu_llm", "deepseek_llm", "groq_llm"\n  llm_provider: "openai_compatible_llm" # \u4f7f\u7528\u7684 LLM \u65b9\u6848\n  # \u662f\u5426\u5728\u7b2c\u4e00\u53e5\u56de\u5e94\u65f6\u9047\u4e0a\u9017\u53f7\u5c31\u76f4\u63a5\u751f\u6210\u97f3\u9891\u4ee5\u51cf\u5c11\u9996\u53e5\u5ef6\u8fdf\uff08\u9ed8\u8ba4\uff1aTrue\uff09\n  faster_first_response: True\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728 ",(0,c.jsx)(n.code,{children:"llm_provider"})," \u5207\u6362\u5927\u8bed\u8a00\u6a21\u578b\u540e\u7aef\u3002\u5927\u8bed\u8a00\u6a21\u578b\u7684\u7ec6\u8282\u914d\u7f6e\uff0c\u5305\u62ec\u6a21\u578b\uff0cAPI Key \u7b49\u914d\u7f6e\uff0c\u5728 ",(0,c.jsx)(n.code,{children:"llm_configs"})," \u4e0b\u9762\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5173\u4e8e\u5404\u4e2a\u5927\u8bed\u8a00\u6a21\u578b (llm) \u7684\u5177\u4f53\u914d\u7f6e\uff0c\u53c2\u8003 ",(0,c.jsx)(n.a,{href:"/docs/user-guide/backend/llm",children:"\u5927\u8bed\u8a00\u6a21\u578b\u914d\u7f6e"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"humeai-agent-evi",children:"HumeAI Agent (EVI)"}),"\n",(0,c.jsx)(n.h3,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,c.jsx)(n.p,{children:"Hume AI \u7684 EVI (Empathic Voice Interface) \u662f\u4e16\u754c\u4e0a\u7b2c\u4e00\u4e2a\u5177\u6709\u60c5\u611f\u667a\u80fd\u7684\u8bed\u97f3 AI \u63a5\u53e3\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u5b83\u80fd\u591f\u6d4b\u91cf\u8bed\u97f3\u4e2d\u7684\u7ec6\u5fae\u53d8\u5316\u5e76\u901a\u8fc7\u5171\u60c5\u5927\u8bed\u8a00\u6a21\u578b(eLLM)\u505a\u51fa\u54cd\u5e94\uff0c\u8be5\u6a21\u578b\u53ef\u4ee5\u6307\u5bfc\u8bed\u8a00\u548c\u8bed\u97f3\u751f\u6210\u3002\u5b83\u5728\u6570\u767e\u4e07\u4eba\u7c7b\u4e92\u52a8\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u8bad\u7ec3\uff0c\u5c06\u8bed\u8a00\u5efa\u6a21\u548c\u6587\u672c\u8f6c\u8bed\u97f3\u4e0e\u66f4\u597d\u7684\u60c5\u5546(EQ)\u3001\u97f5\u5f8b\u3001\u8f6e\u6b21\u7ed3\u675f\u68c0\u6d4b\u3001\u53ef\u4e2d\u65ad\u6027\u548c\u5bf9\u9f50\u7ed3\u5408\u5728\u4e00\u8d77\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u65b0\u7528\u6237\u6709 20 \u7f8e\u5143\u7684\u65e0\u9700\u7ed1\u5361\u7684\u514d\u8d39\u989d\u5ea6\uff0c\u6ce8\u518c\u4e0e\u83b7\u53d6 API ",(0,c.jsx)(n.strong,{children:"\u5728\u5927\u9646\u5185\u5730\u9700\u8981\u4ee3\u7406"}),"\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://www.hume.ai/",children:"Hume AI \u5b98\u7f51"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://dev.hume.ai/intro",children:"Hume AI \u5f00\u53d1\u8005\u6587\u6863"})}),"\n"]}),"\n",(0,c.jsxs)(n.admonition,{type:"tip",children:[(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u786e\u4fdd\u7cfb\u7edf\u67b6\u6784\u7684\u4e00\u81f4\u6027\u548c\u517c\u5bb9\u6027\uff0c\u5728\u4f7f\u7528 EVI \u65f6\u4ecd\u9700\u914d\u7f6e ASR \u5c06\u8bed\u97f3\u8f6c\u5f55\u4e3a\u6587\u672c\u540e\u518d\u8fdb\u884c\u5904\u7406\u3002\u8fd9\u4e2a\u9009\u62e9\u8ba9 EVI \u80fd\u591f\u65e0\u7f1d\u96c6\u6210\u5230\u73b0\u6709\u7684 ",(0,c.jsx)(n.code,{children:"conversation_chain"})," \u6d41\u7a0b\u4e2d\uff0c\u4f46\u540c\u65f6\u4e5f\u610f\u5473\u7740\u65e0\u6cd5\u5145\u5206\u4f7f\u7528 EVI \u72ec\u7279\u7684\u97f3\u9891\u60c5\u7eea\u5206\u6790\u529f\u80fd\u3002"]}),(0,c.jsx)(n.p,{children:"\u6211\u4eec\u8ba1\u5212\u5728\u672a\u6765\u5b9e\u73b0\u4e00\u4e2a\u65b0\u7684\u67b6\u6784\uff0c\u4ee5\u5b8c\u6574\u652f\u6301\u50cf EVI \u8fd9\u6837\u5177\u5907\u6253\u65ad\u68c0\u6d4b\u3001ASR\u3001TTS\u3001\u6444\u50cf\u5934\u7b49\u5b9e\u65f6\u4ea4\u4e92\u529f\u80fd\u7684 API\u3002\u6b22\u8fce\u5404\u4f4d\u5f00\u53d1\u8005\u53c2\u4e0e\u8d21\u732e\u3002"})]}),"\n",(0,c.jsx)(n.admonition,{title:"EVI \u8bb0\u5fc6\u7ba1\u7406",type:"info",children:(0,c.jsx)(n.p,{children:"EVI \u7684\u5bf9\u8bdd\u8bb0\u5fc6\u5b58\u50a8\u5728\u5176\u670d\u52a1\u5668\u7aef\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u65e0\u6cd5\u8bbf\u95ee\u5176\u4ed6 Agent \u7684\u804a\u5929\u5386\u53f2\u8bb0\u5f55\uff0c\u53ea\u80fd\u7ba1\u7406\u548c\u5207\u6362\u5176\u81ea\u8eab\u7684\u5bf9\u8bdd\u5386\u53f2\u3002"})}),"\n",(0,c.jsx)(n.h3,{id:"\u914d\u7f6e\u8bf4\u660e",children:"\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728 ",(0,c.jsx)(n.code,{children:"conf.yaml"})," \u4e2d\u914d\u7f6e HumeAI Agent:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:'agent_config:\n  conversation_agent_choice: "hume_ai_agent"\n  \n  agent_settings:\n    hume_ai_agent:\n      api_key: "your_api_key"        # Hume AI API \u5bc6\u94a5\uff0c\n      config_id: "your_config_id"    # \u53ef\u9009\uff0c\u7528\u4e8e\u6307\u5b9a\u7279\u5b9a\u7684 Hume AI \u914d\u7f6e\u3002\n      host: "api.hume.ai"            # HumeAI \u63d0\u4f9b\u7684 API \u5730\u5740\uff0c\u65e0\u9700\u4fee\u6539\u3002\n      idle_timeout: 15               # \u5904\u4e8e\u7a7a\u95f2\u72b6\u6001\u591a\u5c11\u79d2\uff0c\u81ea\u52a8\u65ad\u5f00\u4e0e HumeAI \u7684\u94fe\u63a5\u3002\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728 ",(0,c.jsx)(n.a,{href:"https://platform.hume.ai/settings/keys",children:"API keys page"})," \u83b7\u53d6 ",(0,c.jsx)(n.code,{children:"api_key"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5173\u4e8e ",(0,c.jsx)(n.code,{children:"config_id"})," \u548c\u5176\u4ed6\u914d\u7f6e\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003 ",(0,c.jsx)(n.a,{href:"https://dev.hume.ai/docs/empathic-voice-interface-evi/configuration",children:"Configuring EVI"}),"\u3002"]}),"\n",(0,c.jsx)(n.admonition,{type:"warning",children:(0,c.jsxs)(n.p,{children:["\u7531\u4e8e EVI \u5728 WebSocket \u7a7a\u95f2\u72b6\u6001\u4e0b\u4ecd\u4f1a\u6301\u7eed\u8ba1\u8d39\uff0c\u5efa\u8bae\u4e0d\u8981\u5c06 ",(0,c.jsx)(n.code,{children:"idle_timeout"})," \u8bbe\u7f6e\u8fc7\u5927\u3002\u4f46\u540c\u65f6\u4e5f\u8981\u6ce8\u610f\uff0c\u5982\u679c ",(0,c.jsx)(n.code,{children:"idle_timeout"})," \u8bbe\u7f6e\u8fc7\u5c0f\uff0c\u4f1a\u5bfc\u81f4\u9891\u7e41\u65ad\u5f00\u91cd\u8fde\uff0c\u4ece\u800c\u589e\u52a0\u54cd\u5e94\u5ef6\u8fdf\u3002\u56e0\u6b64\u9700\u8981\u6839\u636e\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\uff0c\u5408\u7406\u8bbe\u7f6e\u8fd9\u4e2a\u53c2\u6570\u3002"]})}),"\n",(0,c.jsx)(n.h3,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://dev.hume.ai/docs/empathic-voice-interface-evi/faq",children:"Empathic Voice Interface FAQ"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const c={},t=s.createContext(c);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);