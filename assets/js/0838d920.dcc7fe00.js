"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8045],{3286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"user-guide/backend/config","title":"config","description":"\u914d\u7f6e\u6587\u4ef6","source":"@site/docs/user-guide/backend/config.md","sourceDirName":"user-guide/backend","slug":"/user-guide/backend/config","permalink":"/docs/user-guide/backend/config","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/user-guide/backend/config.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"\u540e\u7aef\u67b6\u6784\u6982\u89c8","permalink":"/docs/user-guide/backend/structure"},"next":{"title":"\u8bed\u97f3\u8bc6\u522b (ASR)","permalink":"/docs/user-guide/backend/asr"}}');var o=t(4848),i=t(8453);const r={sidebar_position:2},s=void 0,a={},d=[{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2}];function g(e){const n={code:"code",h2:"h2",mermaid:"mermaid",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e0b\u56fe\u662f ",(0,o.jsx)(n.code,{children:"v1.0.0"})," \u7248\u672c \u914d\u7f6e\u6587\u4ef6\u7684\u57fa\u672c\u7ed3\u6784\u3002"]}),"\n",(0,o.jsx)(n.mermaid,{value:"graph TD\n  Configuration_File --\x3e system_config\n  Configuration_File --\x3e character_config\n  \n  system_config --\x3e ...\n\n  character_config --\x3e conf_name\n  character_config --\x3e conf_uid\n  character_config --\x3e live2d_model_name\n  character_config --\x3e persona_prompt\n  character_config --\x3e agent_config\n  character_config --\x3e asr_config\n  character_config --\x3e tts_config\n  character_config --\x3e tts_preprocessor_config\n\n  agent_config --\x3e conversation_agent_choice\n  agent_config --\x3e agent_settings\n  agent_config --\x3e llm_configs\n  \n  llm_configs --\x3e .....\n\n  agent_settings --\x3e basic_memory_agent\n  agent_settings --\x3e hume_ai_agent\n\n  asr_config --\x3e ..\n  tts_config --\x3e ....\n\n  tts_preprocessor_config --\x3e translator_config\n"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var c=t(6540);const o={},i=c.createContext(o);function r(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);