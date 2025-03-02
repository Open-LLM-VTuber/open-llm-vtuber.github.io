"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[381],{3342:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"user-guide/frontend/electron","title":"Window & Desktop Pet Mode","description":"Window mode and desktop pet mode share the complete context, including:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/user-guide/frontend/electron.md","sourceDirName":"user-guide/frontend","slug":"/user-guide/frontend/electron","permalink":"/en/docs/user-guide/frontend/electron","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/user-guide/frontend/electron.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docSidebar","previous":{"title":"Web Mode","permalink":"/en/docs/user-guide/frontend/web"},"next":{"title":"Updating the Project","permalink":"/en/docs/user-guide/update"}}');var o=i(4848),s=i(8453);const d={sidebar_position:4},r="Window & Desktop Pet Mode",l={},c=[{value:"Window Mode",id:"window-mode",level:2},{value:"Desktop Pet Mode",id:"desktop-pet-mode",level:2},{value:"Features",id:"features",level:3},{value:"Right-click Menu",id:"right-click-menu",level:3},{value:"Input Box &amp; Subtitles",id:"input-box--subtitles",level:3}];function a(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"window--desktop-pet-mode",children:"Window & Desktop Pet Mode"})}),"\n",(0,o.jsxs)(n.admonition,{title:"Shared Context",type:"info",children:[(0,o.jsx)(n.p,{children:"Window mode and desktop pet mode share the complete context, including:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"All settings and configurations"}),"\n",(0,o.jsx)(n.li,{children:"Conversation history"}),"\n",(0,o.jsx)(n.li,{children:"WebSocket connection status"}),"\n",(0,o.jsx)(n.li,{children:"AI status and memory"}),"\n",(0,o.jsx)(n.li,{children:"Live2D model status"}),"\n"]}),(0,o.jsx)(n.p,{children:"This means that switching between the two modes will not lose any state or interrupt the current conversation."})]}),"\n",(0,o.jsx)(n.admonition,{title:"Mode Switching",type:"tip",children:(0,o.jsx)(n.p,{children:"Switch modes through the system tray or the right-click model menu in desktop pet mode"})}),"\n",(0,o.jsx)(n.h2,{id:"window-mode",children:"Window Mode"}),"\n",(0,o.jsxs)(n.p,{children:["Window mode is implemented based on Electron and shares the same interface layout and functionality as Web mode. Please refer to ",(0,o.jsx)(n.a,{href:"/en/docs/user-guide/frontend/web",children:"Web Mode"})," for details. In addition to the features of Web mode, window mode also provides the following basic application functions:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Support for window dragging, maximizing, and minimizing"}),"\n",(0,o.jsxs)(n.li,{children:["System tray support (also applicable to desktop pet mode)","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Right-click the tray icon to quickly switch modes"}),"\n",(0,o.jsx)(n.li,{children:"Support for showing/hiding the window"}),"\n",(0,o.jsx)(n.li,{children:"Quick exit of the application"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"desktop-pet-mode",children:"Desktop Pet Mode"}),"\n",(0,o.jsx)("img",{src:i(4109).A,style:{width:"70%"}}),"\n",(0,o.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(n.p,{children:["Based on all features in ",(0,o.jsx)(n.a,{href:"/en/docs/user-guide/frontend/web",children:"Web Mode"}),", it additionally supports:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Global top-level display"}),"\n",(0,o.jsx)(n.li,{children:"Transparent background"}),"\n",(0,o.jsx)(n.li,{children:"Mouse click-through for non-interactive areas"}),"\n",(0,o.jsx)(n.li,{children:"Support for dragging to move position"}),"\n",(0,o.jsx)(n.li,{children:"Support for mouse wheel/two-finger zoom to adjust size (can be enabled/disabled in settings)"}),"\n",(0,o.jsxs)(n.li,{children:["Support for mouse interaction","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Click to trigger actions (can be enabled/disabled in settings)"}),"\n",(0,o.jsx)(n.li,{children:"Gaze following (can be enabled/disabled in settings)"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Input box & subtitles can be independently dragged (can be hidden)"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"right-click-menu",children:"Right-click Menu"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Turn on/off microphone"}),"\n",(0,o.jsx)(n.li,{children:"Interrupt current conversation"}),"\n",(0,o.jsx)(n.li,{children:"Enable/disable zooming"}),"\n",(0,o.jsx)(n.li,{children:"Show/hide input box and subtitles"}),"\n",(0,o.jsx)(n.li,{children:"Switch modes"}),"\n",(0,o.jsx)(n.li,{children:"Switch characters"}),"\n",(0,o.jsx)(n.li,{children:"Hide/exit application"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"input-box--subtitles",children:"Input Box & Subtitles"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Can be shown/hidden via right-click menu or shortcut keys"}),"\n",(0,o.jsx)(n.li,{children:"Support for independent position dragging"}),"\n",(0,o.jsx)(n.li,{children:"Display current AI status and conversation content"}),"\n",(0,o.jsx)(n.li,{children:"Support for text input and voice input"}),"\n",(0,o.jsx)(n.li,{children:"Turn on/off microphone"}),"\n",(0,o.jsx)(n.li,{children:"Interrupt button"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},4109:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/overview-a58675c5d26d8e9e8a1a5c9801083eeb.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var t=i(6540);const o={},s=t.createContext(o);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);