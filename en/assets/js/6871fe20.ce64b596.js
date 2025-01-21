"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4800],{7145:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-guide/frontend/mode","title":"\u6a21\u5f0f\u4ecb\u7ecd","description":"Open LLM VTuber \u63d0\u4f9b\u4e86\u4e09\u79cd\u4f7f\u7528\u6a21\u5f0f\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7528\u6237\u7684\u9700\u6c42\uff1aWeb \u6a21\u5f0f\u3001\u7a97\u53e3\u6a21\u5f0f\u548c\u684c\u5ba0\u6a21\u5f0f\u3002","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/user-guide/frontend/mode.md","sourceDirName":"user-guide/frontend","slug":"/user-guide/frontend/mode","permalink":"/en/docs/user-guide/frontend/mode","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/user-guide/frontend/mode.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docSidebar","previous":{"title":"\u524d\u7aef\u6307\u5357","permalink":"/en/docs/category/\u524d\u7aef\u6307\u5357"},"next":{"title":"\u5b89\u88c5\u90e8\u7f72","permalink":"/en/docs/user-guide/frontend/install"}}');var r=i(4848),s=i(8453);const d={sidebar_position:1},o="\u6a21\u5f0f\u4ecb\u7ecd",c={},l=[{value:"Web \u6a21\u5f0f",id:"web-\u6a21\u5f0f",level:2},{value:"\u7a97\u53e3\u6a21\u5f0f",id:"\u7a97\u53e3\u6a21\u5f0f",level:2},{value:"\u684c\u5ba0\u6a21\u5f0f",id:"\u684c\u5ba0\u6a21\u5f0f",level:2}];function a(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u6a21\u5f0f\u4ecb\u7ecd",children:"\u6a21\u5f0f\u4ecb\u7ecd"})}),"\n",(0,r.jsxs)(n.p,{children:["Open LLM VTuber \u63d0\u4f9b\u4e86\u4e09\u79cd\u4f7f\u7528\u6a21\u5f0f\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7528\u6237\u7684\u9700\u6c42\uff1a",(0,r.jsx)(n.a,{href:"web-window-mode",children:"Web \u6a21\u5f0f"}),"\u3001",(0,r.jsx)(n.a,{href:"web-window-mode",children:"\u7a97\u53e3\u6a21\u5f0f"}),"\u548c",(0,r.jsx)(n.a,{href:"pet-mode",children:"\u684c\u5ba0\u6a21\u5f0f"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e09\u79cd\u6a21\u5f0f\u90fd\u4f7f\u7528 localStorage \u6765\u5b58\u50a8\u7528\u6237\u7684\u4e2a\u6027\u5316\u8bbe\u7f6e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Web \u6a21\u5f0f\u9700\u8981\u901a\u8fc7\u90e8\u7f72\u6216\u8bbf\u95ee\u4ed6\u4eba\u90e8\u7f72\u7684\u7f51\u9875\u94fe\u63a5\u6765\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7a97\u53e3\u6a21\u5f0f\u548c\u684c\u5ba0\u6a21\u5f0f\u662f\u57fa\u4e8e Electron \u5e94\u7528\u7684\u4e24\u4e2a\u6a21\u5f0f\uff0c\u652f\u6301 Windows \u548c Mac \u7cfb\u7edf\uff0c\u4f46\u6682\u65f6\u4e0d\u652f\u6301\u79fb\u52a8\u8bbe\u5907\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u4ece Github Release \u4e0b\u8f7d\u5bf9\u5e94\u5e73\u53f0\u7684\u5b89\u88c5\u5305\uff08\u63a8\u8350\uff09\uff0c\u6216\u8005\u4e0b\u8f7d\u6e90\u7801\u8fdb\u884c\u6d4b\u8bd5\u6216\u6253\u5305\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Window \u6a21\u5f0f\u548c Pet \u6a21\u5f0f\u5171\u4eab\u4e0a\u4e0b\u6587\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5728\u4e24\u79cd\u6a21\u5f0f\u4e4b\u95f4\u4efb\u610f\u5207\u6362\u7684\u540c\u65f6\uff0c\u4fdd\u6301\u5f53\u524d\u7684\u8bbe\u7f6e\u3001\u72b6\u6001\u3001\u548c\u8fde\u63a5\u4e0d\u53d8\u3002"}),"\n",(0,r.jsxs)(n.admonition,{title:"\u8be6\u7ec6\u8bf4\u660e",type:"note",children:[(0,r.jsx)(n.p,{children:"\u5173\u4e8e\u6bcf\u79cd\u6a21\u5f0f\u7684\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u548c\u529f\u80fd\u7279\u6027\uff0c\u8bf7\u53c2\u8003"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/docs/user-guide/frontend/web",children:"Web \u6a21\u5f0f \u4f7f\u7528\u6307\u5357"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/en/docs/user-guide/frontend/electron",children:"\u7a97\u53e3&\u684c\u5ba0\u6a21\u5f0f \u4f7f\u7528\u6307\u5357"})}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"web-\u6a21\u5f0f",children:"Web \u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"Web \u6a21\u5f0f\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u7f51\u9875\u7248\u672c\uff0c\u901a\u8fc7\u90e8\u7f72\u540e\uff0c\u65e0\u9700\u5b89\u88c5\u5373\u53ef\u5728\u4efb\u4f55\u5e73\u53f0\u7684\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e2d\u5728\u7ebf\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.admonition,{title:"\u6d4f\u89c8\u5668\u9009\u62e9",type:"tip",children:(0,r.jsx)(n.p,{children:"\u4e3a\u786e\u4fdd\u6700\u4f73\u4f53\u9a8c\uff0c\u5efa\u8bae\u4f7f\u7528 Google Chrome \u6d4f\u89c8\u5668\u8bbf\u95ee"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u5173\u4e8e iOS",type:"warning",children:(0,r.jsx)(n.p,{children:"iOS \u7981\u6b62\u6d4f\u89c8\u5668\u64ad\u653e\u97f3\u9891\uff0c\u9700\u8981\u4e0d\u65ad\u70b9\u51fb\u624d\u80fd\u4f7f\u8bf4\u8bdd\u529f\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u8fdc\u7a0b\u8bbf\u95ee\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,r.jsxs)(n.p,{children:["\u5f53\u4f60\u5728\u8fdc\u7a0b\u8bbf\u95ee\u90e8\u7f72\u7684 Web \u5e94\u7528\u65f6\uff08\u5373\u90e8\u7f72\u670d\u52a1\u5668\u4e0e\u8bbf\u95ee\u8bbe\u5907\u4e0d\u5728\u540c\u4e00\u53f0\u673a\u5668\u4e0a\uff0c\u5373\u4f7f\u5904\u4e8e\u76f8\u540c\u5c40\u57df\u7f51\u4e5f\u89c6\u4e3a\u8fdc\u7a0b\u8bbf\u95ee\uff09\uff0c\u8bf7\u6ce8\u610f\u9ea6\u514b\u98ce\u548c\u6444\u50cf\u5934\u4ec5\u80fd\u5728\u5b89\u5168\u4e0a\u4e0b\u6587\uff08HTTPS \u6216 localhost\uff09\u4e2d\u4f7f\u7528\u3002\u8be6\u7ec6\u8bf4\u660e\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Secure_Contexts",children:"MDN Web \u6587\u6863"}),"\u3002\u56e0\u6b64\uff0c\u5982\u9700\u5728\u8fdc\u7a0b\u8bbe\u5907\u4e0a\u6b63\u5e38\u4f7f\u7528\u8fd9\u4e9b\u529f\u80fd\uff0c\u4f60\u5fc5\u987b\u4e3a Web \u670d\u52a1\u5668\u914d\u7f6e HTTPS \u534f\u8bae\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(9294).A+"",width:"2992",height:"1624"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7a97\u53e3\u6a21\u5f0f",children:"\u7a97\u53e3\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u7a97\u53e3\u6a21\u5f0f\u662f\u684c\u9762\u5ba2\u6237\u7aef\u7684\u9ed8\u8ba4\u663e\u793a\u6a21\u5f0f\uff0c\u754c\u9762\u548c\u529f\u80fd\u4e0e Web \u6a21\u5f0f\u57fa\u672c\u4e00\u81f4\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u684c\u5ba0\u6a21\u5f0f",children:"\u684c\u5ba0\u6a21\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u684c\u5ba0\u6a21\u5f0f\u5c06\u89d2\u8272\u8f6c\u53d8\u4e3a\u80cc\u666f\u900f\u660e\u3001\u5168\u5c40\u7f6e\u9876\u3001\u81ea\u7531\u62d6\u62fd\u7684\u684c\u9762\u4f34\u4fa3\uff0c\u63d0\u4f9b\u66f4\u52a0\u6c89\u6d78\u7684\u4f53\u9a8c\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(8195).A+"",width:"1358",height:"748"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8195:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/pet-c04e08647b1b49f977aac0c85d71f9c2.jpg"},9294:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/web-436ff61813c689e2ad4a10d4bd3408b3.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);