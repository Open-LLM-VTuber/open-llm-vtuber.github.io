"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8045],{3286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"user-guide/backend/config","title":"\u914d\u7f6e\u6587\u4ef6","description":"\u4e0b\u56fe\u662f v1.0.0 \u7248\u672c \u914d\u7f6e\u6587\u4ef6\u7684\u57fa\u672c\u7ed3\u6784\u3002","source":"@site/docs/user-guide/backend/config.md","sourceDirName":"user-guide/backend","slug":"/user-guide/backend/config","permalink":"/docs/user-guide/backend/config","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/user-guide/backend/config.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docSidebar","previous":{"title":"\u9879\u76ee\u7ed3\u6784","permalink":"/docs/user-guide/backend/structure"},"next":{"title":"\u8bed\u97f3\u8bc6\u522b (ASR)","permalink":"/docs/user-guide/backend/asr"}}');var r=t(4848),i=t(8453);const o={sidebar_position:2},s="\u914d\u7f6e\u6587\u4ef6",a={},d=[{value:"\u65b0\u5efa\u5e76\u5207\u6362\u89d2\u8272",id:"\u65b0\u5efa\u5e76\u5207\u6362\u89d2\u8272",level:2}];function g(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u56fe\u662f ",(0,r.jsx)(n.code,{children:"v1.0.0"})," \u7248\u672c \u914d\u7f6e\u6587\u4ef6\u7684\u57fa\u672c\u7ed3\u6784\u3002"]}),"\n",(0,r.jsx)(n.mermaid,{value:"graph TD\n  Configuration_File --\x3e system_config\n  Configuration_File --\x3e character_config\n  \n  system_config --\x3e ...\n\n  character_config --\x3e conf_name\n  character_config --\x3e conf_uid\n  character_config --\x3e live2d_model_name\n  character_config --\x3e persona_prompt\n  character_config --\x3e agent_config\n  character_config --\x3e asr_config\n  character_config --\x3e tts_config\n  character_config --\x3e tts_preprocessor_config\n\n  agent_config --\x3e conversation_agent_choice\n  agent_config --\x3e agent_settings\n  agent_config --\x3e llm_configs\n  \n  llm_configs --\x3e .....\n\n  agent_settings --\x3e basic_memory_agent\n  agent_settings --\x3e hume_ai_agent\n\n  asr_config --\x3e ..\n  tts_config --\x3e ....\n\n  tts_preprocessor_config --\x3e translator_config\n"}),"\n",(0,r.jsx)(n.h2,{id:"\u65b0\u5efa\u5e76\u5207\u6362\u89d2\u8272",children:"\u65b0\u5efa\u5e76\u5207\u6362\u89d2\u8272"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var c=t(6540);const r={},i=c.createContext(r);function o(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);