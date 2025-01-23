"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5932],{7534:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"user-guide/live2d","title":"Live2D \u6307\u5357","description":"\u8981\u5f80\u9879\u76ee\u4e2d\u6dfb\u52a0\u65b0\u7684 Live2D \u6a21\u578b\uff0c\u9700\u8981\u5b8c\u6210\u4ee5\u4e0b\u4e09\u5230\u4e94\u4e2a\u6b65\u9aa4:","source":"@site/docs/user-guide/live2d.md","sourceDirName":"user-guide","slug":"/user-guide/live2d","permalink":"/docs/user-guide/live2d","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/user-guide/live2d.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"\u7a97\u53e3 & \u684c\u5ba0\u6a21\u5f0f","permalink":"/docs/user-guide/frontend/electron"},"next":{"title":"API \u53c2\u8003","permalink":"/docs/api-reference"}}');var d=i(4848),l=i(8453);const c={},r="Live2D \u6307\u5357",h={},o=[{value:"1. \u83b7\u53d6 Live2D \u6a21\u578b",id:"1-\u83b7\u53d6-live2d-\u6a21\u578b",level:2},{value:"2. \u914d\u7f6e Live2D \u6a21\u578b",id:"2-\u914d\u7f6e-live2d-\u6a21\u578b",level:2},{value:"3. \u653e\u7f6e\u6a21\u578b\u6587\u4ef6",id:"3-\u653e\u7f6e\u6a21\u578b\u6587\u4ef6",level:2},{value:"4. \u6dfb\u52a0\u6a21\u578b\u914d\u7f6e",id:"4-\u6dfb\u52a0\u6a21\u578b\u914d\u7f6e",level:2},{value:"4.1 \u57fa\u7840\u914d\u7f6e",id:"41-\u57fa\u7840\u914d\u7f6e",level:3},{value:"4.2 \u663e\u793a\u914d\u7f6e",id:"42-\u663e\u793a\u914d\u7f6e",level:3},{value:"4.3 \u5f85\u673a\u52a8\u4f5c\u914d\u7f6e",id:"43-\u5f85\u673a\u52a8\u4f5c\u914d\u7f6e",level:3},{value:"4.4 \u8868\u60c5\u914d\u7f6e",id:"44-\u8868\u60c5\u914d\u7f6e",level:3},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:4},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:4},{value:"4.5 \u4ea4\u4e92\u52a8\u4f5c\u914d\u7f6e",id:"45-\u4ea4\u4e92\u52a8\u4f5c\u914d\u7f6e",level:3},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b-1",level:4},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e-1",level:4},{value:"\u89e6\u53d1\u903b\u8f91",id:"\u89e6\u53d1\u903b\u8f91",level:4},{value:"5. \u4fee\u6539\u89d2\u8272\u914d\u7f6e",id:"5-\u4fee\u6539\u89d2\u8272\u914d\u7f6e",level:2}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"live2d-\u6307\u5357",children:"Live2D \u6307\u5357"})}),"\n",(0,d.jsxs)(n.admonition,{title:"\u6982\u89c8",type:"info",children:[(0,d.jsx)(n.p,{children:"\u8981\u5f80\u9879\u76ee\u4e2d\u6dfb\u52a0\u65b0\u7684 Live2D \u6a21\u578b\uff0c\u9700\u8981\u5b8c\u6210\u4ee5\u4e0b\u4e09\u5230\u4e94\u4e2a\u6b65\u9aa4:"}),(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u83b7\u53d6 Live2D \u6a21\u578b (\u53ef\u8df3\u8fc7)"}),"\n",(0,d.jsx)(n.li,{children:"\u7ed9\u4f60\u7684 Live2D \u6a21\u578b\u914d\u7f6e\u9884\u8bbe\u7684\u8868\u60c5\u548c\u52a8\u4f5c (\u53ef\u8df3\u8fc7)"}),"\n",(0,d.jsxs)(n.li,{children:["\u5c06 Live2D \u6a21\u578b\u6587\u4ef6\u653e\u7f6e\u5230 ",(0,d.jsx)(n.code,{children:"live2d-models"})," \u6587\u4ef6\u5939\u4e2d"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"model_dict.json"})," \u6587\u4ef6\u4e2d\u914d\u7f6e\u6a21\u578b\u4fe1\u606f"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5728\u89d2\u8272\u914d\u7f6e\u6587\u4ef6 (",(0,d.jsx)(n.code,{children:"conf.yaml"})," \u6216\u8005 ",(0,d.jsx)(n.code,{children:"characters"})," \u76ee\u5f55\u4e0b\u7684\u89d2\u8272\u8bbe\u5b9a\u6587\u4ef6) \u4e2d\u6307\u5b9a\u4f7f\u7528\u7684 Live2D \u6a21\u578b"]}),"\n"]})]}),"\n",(0,d.jsx)(n.h2,{id:"1-\u83b7\u53d6-live2d-\u6a21\u578b",children:"1. \u83b7\u53d6 Live2D \u6a21\u578b"}),"\n",(0,d.jsx)(n.admonition,{title:"\u5173\u4e8e\u6a21\u578b\u7248\u672c",type:"warning",children:(0,d.jsx)(n.p,{children:"\u76ee\u524d\u9879\u76ee\u4f7f\u7528\u7684 pixi-live2d-display-lipsyncpatch \u4ec5\u652f\u6301 Cubism2/3/4 \u7248\u672c\u7684\u6a21\u578b\uff0c\u6682\u4e0d\u652f\u6301\u6700\u65b0\u7684 Cubism5\u3002\u5982"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u4f60\u5df2\u7ecf\u62e5\u6709\u4e86\u5408\u9002\u7684 Live2D \u6a21\u578b\uff0c\u53ef\u4ee5\u76f4\u63a5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u3002\n\u4ee5\u4e0b\u662f\u4e00\u4e9b\u83b7\u53d6 Live2D \u6a21\u578b\u7684\u5e38\u89c1\u6e20\u9053\uff08\u6b22\u8fce\u8865\u5145\u66f4\u591a\u6765\u6e90\uff09:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://booth.pm/",children:"Booth"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://www.bilibili.com/",children:"Bilibili"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://github.com/Eikanya/Live2d-model",children:"Eikanya/Live2d-model"})}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"2-\u914d\u7f6e-live2d-\u6a21\u578b",children:"2. \u914d\u7f6e Live2D \u6a21\u578b"}),"\n",(0,d.jsxs)(n.admonition,{type:"info",children:[(0,d.jsx)(n.p,{children:"Live2D \u6a21\u578b\u7684\u914d\u7f6e\u6587\u4ef6\u662f\u4e00\u4e2a\u5305\u542b\u8868\u60c5\u3001\u52a8\u4f5c\u7b49\u591a\u4e2a\u8bbe\u7f6e\u9879\u7684\u91cd\u8981\u6587\u4ef6\u3002\u7531\u4e8e\u914d\u7f6e\u65b9\u6cd5\u591a\u6837\u4e14\u8f83\u4e3a\u590d\u6742\uff0c\u76ee\u524d\u8fd9\u90e8\u5206\u7684\u6559\u7a0b\u8fd8\u6ca1\u6709\u6b63\u5f0f\u5f00\u5de5\u3002\u4f60\u53ef\u4ee5\u9009\u62e9:"}),(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u901a\u8fc7\u67e5\u627e\u7f51\u7edc\u8d44\u6599\u6765\u5b66\u4e60\u914d\u7f6e\u65b9\u6cd5"}),"\n",(0,d.jsx)(n.li,{children:"\u5148\u8df3\u8fc7\u8fd9\u90e8\u5206\uff0c\u7b49\u5bf9 Live2D \u6a21\u578b\u914d\u7f6e\u6709\u66f4\u6df1\u5165\u4e86\u89e3\u540e\u518d\u56de\u6765\u8bbe\u7f6e"}),"\n",(0,d.jsx)(n.li,{children:"\u5982\u679c\u4f60\u6709\u76f8\u5173\u7ecf\u9a8c\uff0c\u975e\u5e38\u6b22\u8fce\u901a\u8fc7 PR \u6216 Issue \u6765\u5e2e\u52a9\u6211\u4eec\u5b8c\u5584\u8fd9\u90e8\u5206\u5185\u5bb9"}),"\n"]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u7531\u4e8e\u5927\u591a\u6570 Live2D \u6a21\u578b\u662f\u4ece\u6e38\u620f\u4e2d\u63d0\u53d6\u6216\u4e3b\u8981\u7528\u4e8e\u76f4\u64ad\uff0c\u5b83\u4eec\u7684\u8868\u60c5\u548c\u52a8\u4f5c\u53ef\u80fd\u5e76\u4e0d\u5b8c\u5168\u9002\u5408\u672c\u9879\u76ee\u7684\u4f7f\u7528\u573a\u666f\u3002\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u5efa\u8bae\u4f60\u5148\u67e5\u770b\u6a21\u578b\u7684\u914d\u7f6e\u6587\u4ef6\uff08",(0,d.jsx)(n.code,{children:"model.json"})," \u6216 ",(0,d.jsx)(n.code,{children:"model3.json"}),"\uff09\uff0c\u5e76\u6839\u636e\u9700\u8981\u8fdb\u884c\u9002\u5f53\u7684\u8c03\u6574\uff0c\u83b7\u5f97\u66f4\u597d\u7684\u4ea4\u4e92\u4f53\u9a8c\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5de5\u5177\u6765\u67e5\u770b\u548c\u8c03\u6574\u6a21\u578b\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Vtuber Studio"}),"\n",(0,d.jsx)(n.li,{children:"Live2DViewerEx Studio"}),"\n",(0,d.jsx)(n.li,{children:"Live2D Cubism Viewer"}),"\n"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u67e5\u770b\u548c\u6d4b\u8bd5\u6a21\u578b\u7684\u8868\u60c5\u5217\u8868"}),"\n",(0,d.jsx)(n.li,{children:"\u9884\u89c8\u6240\u6709\u53ef\u7528\u7684\u52a8\u4f5c\u6548\u679c"}),"\n",(0,d.jsx)(n.li,{children:"\u6dfb\u52a0 Idle\uff08\u7a7a\u95f2\uff09\u52a8\u4f5c\u7ec4"}),"\n",(0,d.jsx)(n.li,{children:"\u521b\u5efa\u81ea\u5b9a\u4e49\u52a8\u4f5c\u7ec4"}),"\n",(0,d.jsx)(n.li,{children:"\u6dfb\u52a0\u65b0\u7684\u8868\u60c5"}),"\n",(0,d.jsx)(n.li,{children:"\u5236\u4f5c\u65b0\u7684\u52a8\u4f5c"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"3-\u653e\u7f6e\u6a21\u578b\u6587\u4ef6",children:"3. \u653e\u7f6e\u6a21\u578b\u6587\u4ef6"}),"\n",(0,d.jsxs)(n.p,{children:["\u5c06\u4f60\u7684 Live2D \u6a21\u578b\u6587\u4ef6\u653e\u5728 ",(0,d.jsx)(n.code,{children:"live2d-models"})," \u6587\u4ef6\u5939\u4e2d\uff0c\u5982\u56fe\u4e2d\u7684 ",(0,d.jsx)(n.code,{children:"xiao"}),"\u3002"]}),"\n",(0,d.jsx)("img",{src:i(7196).A,style:{width:"70%"}}),"\n",(0,d.jsx)(n.h2,{id:"4-\u6dfb\u52a0\u6a21\u578b\u914d\u7f6e",children:"4. \u6dfb\u52a0\u6a21\u578b\u914d\u7f6e"}),"\n",(0,d.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,d.jsxs)(n.p,{children:["\u5728\u6a21\u578b\u914d\u7f6e\u4e2d\uff0c\u53ea\u6709 ",(0,d.jsx)(n.code,{children:"name"}),"\uff08\u6a21\u578b\u6807\u8bc6\uff09\u3001",(0,d.jsx)(n.code,{children:"url"}),"\uff08\u6a21\u578b\u8def\u5f84\uff09\u548c ",(0,d.jsx)(n.code,{children:"kScale"}),"\uff08\u7f29\u653e\u6bd4\u4f8b\uff09\u662f\u5fc5\u586b\u9879\u3002\u5176\u4ed6\u914d\u7f6e\u9879\u5982 ",(0,d.jsx)(n.code,{children:"emotionMap"}),"\uff08\u8868\u60c5\u6620\u5c04\uff09\u548c ",(0,d.jsx)(n.code,{children:"tapMotions"}),"\uff08\u89e6\u6478\u52a8\u4f5c\uff09\u662f\u53ef\u9009\u7684\uff0c\u4e0d\u586b\u5199\u8fd9\u4e9b\u914d\u7f6e\u9879\u4f1a\u5bfc\u81f4\u6a21\u578b\u5931\u53bb\u8868\u60c5\u53d8\u5316\u548c\u52a8\u4f5c\u4ea4\u4e92\u7684\u529f\u80fd\u3002"]})}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,d.jsx)(n.code,{children:"model_dict.json"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u6a21\u578b\u914d\u7f6e\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u914d\u7f6e\u793a\u4f8b\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "name": "shizuku-local",\n    "description": "Orange-Haired Girl, locally available. no internet required.",\n    "url": "/live2d-models/shizuku/shizuku.model.json",\n    "kScale": 0.5,\n    "initialXshift": 0,\n    "initialYshift": 0,\n    "idleMotionGroupName": "idle",\n    "emotionMap": {\n        "neutral": 0,\n        "anger": 2,\n        "disgust": 2,\n        "fear": 1,\n        "joy": 3,\n        "smirk": 3,\n        "sadness": 1,\n        "surprise": 3\n    },\n    "tapMotions": {\n        "body": {\n            "tap_body": 30,\n            "shake": 30,\n            "pinch_in": 20,\n            "pinch_out": 20\n        },\n        "head": {\n            "flick_head": 40,\n            "shake": 20,\n            "pinch_in": 20,\n            "pinch_out": 20\n        }\n    }\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"41-\u57fa\u7840\u914d\u7f6e",children:"4.1 \u57fa\u7840\u914d\u7f6e"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u914d\u7f6e\u9879"}),(0,d.jsx)(n.th,{children:"\u8bf4\u660e"}),(0,d.jsx)(n.th,{children:"\u793a\u4f8b\u503c"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsx)(n.td,{children:"\u6a21\u578b\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u5efa\u8bae\u4f7f\u7528\u82f1\u6587"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:'"shizuku-local"'})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"description"})}),(0,d.jsx)(n.td,{children:"\u6a21\u578b\u63cf\u8ff0\uff08\u53ef\u9009\uff09"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:'"Orange-Haired Girl"'})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"url"})}),(0,d.jsx)(n.td,{children:"\u6a21\u578b\u6587\u4ef6\u8def\u5f84"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:'"/live2d-models/shizuku/shizuku.model.json"'})})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u652f\u6301\u672c\u5730\u8def\u5f84\u548c\u8fdc\u7a0b URL"}),"\n",(0,d.jsxs)(n.li,{children:["\u672c\u5730\u8def\u5f84\u4ee5 ",(0,d.jsx)(n.code,{children:"/live2d-models/"})," \u5f00\u5934\uff0c\u800c\u975e ",(0,d.jsx)(n.code,{children:"./live2d-models/"})," \u5f00\u5934\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u8fdc\u7a0b URL \u9700\u8981\u6307\u5411\u6709\u6548\u7684 ",(0,d.jsx)(n.code,{children:".model.json"})," \u6216 ",(0,d.jsx)(n.code,{children:".model3.json"})," \u6587\u4ef6\uff0c\u6bd4\u5982 ",(0,d.jsx)(n.code,{children:"https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json"})]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"42-\u663e\u793a\u914d\u7f6e",children:"4.2 \u663e\u793a\u914d\u7f6e"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u914d\u7f6e\u9879"}),(0,d.jsx)(n.th,{children:"\u8bf4\u660e"}),(0,d.jsx)(n.th,{children:"\u63a8\u8350\u503c"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"kScale"})}),(0,d.jsx)(n.td,{children:"\u6a21\u578b\u521d\u59cb\u7f29\u653e\u6bd4\u4f8b"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"0.3 ~ 0.5"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"initialXshift"})}),(0,d.jsx)(n.td,{children:"\u6a21\u578b\u6c34\u5e73\u4f4d\u7f6e\u521d\u59cb\u504f\u79fb\u91cf"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"0"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"initialYshift"})}),(0,d.jsx)(n.td,{children:"\u6a21\u578b\u5782\u76f4\u4f4d\u7f6e\u521d\u59cb\u504f\u79fb\u91cf"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"0"})})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5f53 ",(0,d.jsx)(n.code,{children:"initialXshift"})," \u548c ",(0,d.jsx)(n.code,{children:"initialYshift"})," \u90fd\u8bbe\u7f6e\u4e3a ",(0,d.jsx)(n.code,{children:"0"})," \u65f6\uff0cLive2D \u6a21\u578b\u901a\u5e38\u4f1a\u5728\u753b\u5e03\u4e2d\u5c45\u4e2d\u663e\u793a\u3002\u5bf9\u4e8e\u67d0\u4e9b\u7279\u6b8a\u6a21\u578b\uff0c\u53ef\u80fd\u9700\u8981\u624b\u52a8\u8c03\u6574\u8fd9\u4e24\u4e2a\u53c2\u6570\u6765\u5b9e\u73b0\u7406\u60f3\u7684\u663e\u793a\u4f4d\u7f6e\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5173\u4e8e\u6a21\u578b\u5927\u5c0f\uff1a","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"kScale"})," \u53c2\u6570\u53ea\u51b3\u5b9a\u5728\u6d4f\u89c8\u5668/\u8bbe\u5907\u4e0a\uff0c\u521d\u6b21\u52a0\u8f7d\u67d0\u4e2a\u6a21\u578b\u7684\u5927\u5c0f\u3002\u5e76\u4e0d\u4f1a\u51b3\u5b9a\u4e4b\u540e\u4f7f\u7528\u6539\u6a21\u578b\u65f6\u7684\u5927\u5c0f\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5728\u524d\u7aef\u754c\u9762\uff0c",(0,d.jsx)(n.strong,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u9f20\u6807\u6eda\u8f6e\u6216\u8005\u89e6\u6478\u5c4f\u53cc\u6307\u7f29\u653e\u6765\u8c03\u8282\u6a21\u578b\u5927\u5c0f"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5f53\u4f60\u624b\u52a8\u8c03\u6574\u6a21\u578b\u5927\u5c0f\u540e\uff0c\u7cfb\u7edf\u4f1a\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"localStorage"})," \u8bb0\u4f4f\u8be5\u6a21\u578b\u5728\u5f53\u524d\u6d4f\u89c8\u5668/\u8bbe\u5907\u3001\u5f53\u524d\u6a21\u5f0f\u4e0b\u7684\u5927\u5c0f"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4e0b\u6b21\u5728\u540c\u4e00\u6d4f\u89c8\u5668/\u8bbe\u5907\u4e0a\u4f7f\u7528\u65f6(\u672a\u6e05\u7a7a localStorage)\uff0c",(0,d.jsx)(n.strong,{children:"\u5c06\u81ea\u52a8\u5e94\u7528\u4e0a\u6b21\u7684\u5927\u5c0f"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u5bb9\u5668\u5927\u5c0f\u53d1\u751f\u53d8\u5316\u65f6(\u5982\u8c03\u6574\u7a97\u53e3\u5927\u5c0f\u3001\u6298\u53e0/\u5c55\u5f00\u4fa7\u8fb9\u680f\u6216\u5e95\u8fb9\u680f\u3001\u5207\u6362\u663e\u793a\u6a21\u5f0f\u7b49)\uff0cLive2D \u6a21\u578b\u4f1a\u91cd\u7f6e\u5230\u521d\u59cb\u4f4d\u7f6e\uff0c\u4f46\u4f1a\u4fdd\u6301\u5f53\u524d\u7684\u7f29\u653e\u5927\u5c0f\u4e0d\u53d8\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"43-\u5f85\u673a\u52a8\u4f5c\u914d\u7f6e",children:"4.3 \u5f85\u673a\u52a8\u4f5c\u914d\u7f6e"}),"\n",(0,d.jsxs)(n.p,{children:["Live2D \u6a21\u578b\u7684\u52a8\u4f5c\u52a8\u753b\u4e00\u822c\u4f1a\u88ab\u5206\u6210\u591a\u4e2a\u52a8\u4f5c\u7ec4 (Motion Groups)\u3002\u6bcf\u4e2a\u52a8\u4f5c\u7ec4\u5305\u542b\u4e00\u7cfb\u5217\u76f8\u5173\u7684\u52a8\u4f5c\u52a8\u753b\u3002\u5728 model.json \u6587\u4ef6\u4e2d\uff0c\u8fd9\u4e9b\u52a8\u4f5c\u7ec4\u901a\u5e38\u5b9a\u4e49\u5728 ",(0,d.jsx)(n.code,{children:"motions"})," \u6216 ",(0,d.jsx)(n.code,{children:"Motions"})," \u5b57\u6bb5\u4e0b\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5f85\u673a\u52a8\u4f5c(Idle Motion)\u662f\u6a21\u578b\u5728\u65e0\u4ea4\u4e92\u65f6\u968f\u673a\u64ad\u653e\u7684\u57fa\u7840\u52a8\u753b\u3002\u5b83\u4eec\u901a\u5e38\u88ab\u653e\u5728\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"idle"})," \u6216 ",(0,d.jsx)(n.code,{children:"Idle"})," \u7684\u52a8\u4f5c\u7ec4\u4e2d\uff0c\u7cfb\u7edf\u4f1a\u4ece\u8be5\u7ec4\u4e2d\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u52a8\u4f5c\u8fdb\u884c\u64ad\u653e\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5177\u4f53\u52a8\u4f5c\u7ec4\u540d\u79f0\u9700\u8981\u6839\u636e\u6a21\u578b\u914d\u7f6e\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"model.json"})," \u6216 ",(0,d.jsx)(n.code,{children:"model3.json"})," \u4e2d\u7684\u540d\u79f0\uff0c\u5982\u56fe\u6240\u793a\u3002"]}),"\n",(0,d.jsx)("img",{src:i(8862).A,style:{width:"100%"}}),"\n",(0,d.jsxs)(n.admonition,{type:"tip",children:[(0,d.jsx)(n.mdxAdmonitionTitle,{}),(0,d.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7406\u89e3\u6a21\u578b\u7684\u52a8\u4f5c\u7ed3\u6784\uff0c\u4e5f\u53ef\u4ee5\u914d\u7f6e\u81ea\u5df1\u5f85\u673a\u7684\u52a8\u4f5c\u7ec4\u3002\u4f46\u9664\u975e\u4f60\u77e5\u9053\u81ea\u5df1\u5728\u505a\u4ec0\u4e48\uff0c\u5426\u5219\u5efa\u8bae\u4fdd\u6301 ",(0,d.jsx)(n.code,{children:"idleMotionGroupName"})," \u7684\u9ed8\u8ba4\u503c(",(0,d.jsx)(n.code,{children:"idle"})," \u6216 ",(0,d.jsx)(n.code,{children:"Idle"}),")\u3002"]})]}),"\n",(0,d.jsx)(n.h3,{id:"44-\u8868\u60c5\u914d\u7f6e",children:"4.4 \u8868\u60c5\u914d\u7f6e"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"emotionMap"})," \u5b9a\u4e49\u4e86 AI \u53ef\u7528\u7684\u8868\u60c5\u6620\u5c04\u3002\u652f\u6301\u4e24\u79cd\u6620\u5c04\u65b9\u5f0f:"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u4f7f\u7528\u8868\u60c5\u7d22\u5f15 (\u6570\u5b57)"}),"\n",(0,d.jsx)(n.li,{children:"\u4f7f\u7528\u8868\u60c5\u540d\u79f0 (\u5b57\u7b26\u4e32)"}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u914d\u7f6e\u793a\u4f8b",children:"\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u9996\u5148\u67e5\u770b\u6a21\u578b\u6587\u4ef6\u4e2d\u7684\u8868\u60c5\u5b9a\u4e49:"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'// model.json\n"expressions": [\n    {"name": "f01", "file": "expressions/f01.exp.json"}, // \u7d22\u5f15 0\n    {"name": "f02", "file": "expressions/f02.exp.json"}, // \u7d22\u5f15 1\n    {"name": "f03", "file": "expressions/f03.exp.json"}, // \u7d22\u5f15 2\n    {"name": "f04", "file": "expressions/f04.exp.json"}  // \u7d22\u5f15 3\n]\n\n// \u6216\u8005\u4f60\u4f1a\u5728 model3.json \u6587\u4ef6\u4e2d\u9047\u5230\n"Expressions" : [\n    {"Name": "f01", "File": "f01.exp3.json"}, // \u7d22\u5f15 0\n    {"Name": "f02", "File": "f02.exp3.json"}, // \u7d22\u5f15 1\n    {"Name": "f03", "File": "f03.exp3.json"}, // \u7d22\u5f15 2\n    {"Name": "f04", "File": "f04.exp3.json"} // \u7d22\u5f15 3\n]\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsxs)(n.li,{children:["\u7136\u540e\u5728 ",(0,d.jsx)(n.code,{children:"model_dict.json"})," \u4e2d\u914d\u7f6e\u8868\u60c5\u6620\u5c04\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u4e4b\u4e00:"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u65b9\u5f0f\u4e00: \u4f7f\u7528\u8868\u60c5\u7d22\u5f15\uff08\u6ce8\u610f\u4f7f\u7528\u6570\u5b57\u800c\u975e\u5b57\u7b26\u4e32\u4f5c\u4e3a\u7d22\u5f15\uff09"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'"emotionMap": {\n    "neutral": 0,  // \u5bf9\u5e94 f01 \u8868\u60c5\n    "anger": 2,    // \u5bf9\u5e94 f03 \u8868\u60c5\n    "disgust": 2,  // \u540c\u6837\u4f7f\u7528 f03 \u8868\u60c5\n    "fear": 1,     // \u5bf9\u5e94 f02 \u8868\u60c5\n    "joy": 3,      // \u5bf9\u5e94 f04 \u8868\u60c5\n    "smirk": 3,    // \u540c\u6837\u4f7f\u7528 f04 \u8868\u60c5\n    "sadness": 1,  // \u540c\u6837\u4f7f\u7528 f02 \u8868\u60c5\n    "surprise": 3  // \u540c\u6837\u4f7f\u7528 f04 \u8868\u60c5\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u65b9\u5f0f\u4e8c: \u4f7f\u7528\u8868\u60c5\u540d\u79f0"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'"emotionMap": {\n    "neutral": "f01",\n    "anger": "f03",\n    "disgust": "f03",\n    "fear": "f02",\n    "joy": "f04",\n    "smirk": "f04", \n    "sadness": "f02",\n    "surprise": "f04"\n}\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u914d\u7f6e\u8bf4\u660e",children:"\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,d.jsx)(n.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution",children:(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5982\u679c\u4f7f\u7528\u7d22\u5f15\u6620\u5c04\uff0c\u7d22\u5f15\u503c\u662f\u6309\u7167\u6a21\u578b\u6587\u4ef6\u4e2d ",(0,d.jsx)(n.code,{children:"expressions"})," \u6570\u7ec4\u7684\u987a\u5e8f\uff0c\u4ece 0 \u5f00\u59cb\u8ba1\u6570"]}),"\n",(0,d.jsx)(n.li,{children:"\u5982\u679c\u4f7f\u7528\u8868\u60c5\u540d\u79f0\u6620\u5c04\uff0c\u9700\u8981\u786e\u4fdd\u540d\u79f0\u4e0e\u6a21\u578b\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u8868\u60c5\u540d\u79f0\u5b8c\u5168\u4e00\u81f4"}),"\n",(0,d.jsx)(n.li,{children:"\u591a\u4e2a\u60c5\u7eea\u53ef\u4ee5\u6620\u5c04\u5230\u540c\u4e00\u4e2a\u8868\u60c5\u7d22\u5f15\u6216\u540d\u79f0"}),"\n"]})}),"\n",(0,d.jsxs)(n.p,{children:["AI \u4f1a\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"[emotion]"})," \u683c\u5f0f\u5728\u5bf9\u8bdd\u4e2d\u89e6\u53d1\u8868\u60c5\u53d8\u5316\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"\u5662\uff0c\u8be5\u6b7b\u7684\uff01[anger] \u4f60\u8bf4\u7684\u8fd9\u756a\u8bdd\u7b80\u76f4\u6bd4\u7ea6\u7ff0\u68ee\u53d4\u53d4\u5bb6\u7684\u9e21\u86cb\u8c46\u8150\u9762\u8fd8\u8981\u96be\u4ee5\u4e0b\u54bd\u3002\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5f53\u7cfb\u7edf\u8bc6\u522b\u5230 [anger] \u65f6\uff0c\u5c31\u4f1a\u8ba9\u524d\u7aef\u7684 Live2D \u6a21\u578b\u505a\u51fa ",(0,d.jsx)(n.code,{children:"anger"})," \u8fd9\u4e00\u5173\u952e\u8bcd\u5bf9\u5e94\u7684\u7d22\u5f15\uff08\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u662f ",(0,d.jsx)(n.code,{children:"2"}),"\uff09"]}),"\n",(0,d.jsxs)(n.admonition,{type:"info",children:[(0,d.jsx)(n.p,{children:"\u8868\u60c5\u4f1a\u4fdd\u6301\u76f4\u5230:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u9047\u5230\u4e0b\u4e00\u4e2a\u8868\u60c5\u5173\u952e\u8bcd"}),"\n",(0,d.jsx)(n.li,{children:"\u6216\u5bf9\u8bdd\u7ed3\u675f\u540e\u81ea\u52a8\u6062\u590d\u9ed8\u8ba4\u8868\u60c5"}),"\n"]})]}),"\n",(0,d.jsx)(n.admonition,{title:"\u914d\u7f6e\u5efa\u8bae",type:"tip",children:(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u4f7f\u7528\u7b80\u5355\u3001\u660e\u786e\u7684\u82f1\u6587\u5355\u8bcd\u4f5c\u4e3a\u5173\u952e\u5b57"}),"\n",(0,d.jsx)(n.li,{children:"\u786e\u4fdd\u5173\u952e\u5b57\u5bb9\u6613\u88ab AI \u7406\u89e3\u548c\u51c6\u786e\u4f7f\u7528"}),"\n",(0,d.jsx)(n.li,{children:"\u907f\u514d\u4f7f\u7528\u8fc7\u957f\u6216\u590d\u6742\u7684\u540d\u79f0"}),"\n",(0,d.jsx)(n.li,{children:"\u6839\u636e\u6a21\u578b\u7684\u8868\u60c5\u7279\u70b9\uff0c\u9009\u62e9\u5408\u9002\u7684\u60c5\u7eea\u6620\u5c04"}),"\n"]})}),"\n",(0,d.jsx)(n.h3,{id:"45-\u4ea4\u4e92\u52a8\u4f5c\u914d\u7f6e",children:"4.5 \u4ea4\u4e92\u52a8\u4f5c\u914d\u7f6e"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"tapMotions"})," \u5b9a\u4e49\u4e86\u6a21\u578b\u4e0e\u9f20\u6807\u4ea4\u4e92\u65f6\u7684\u52a8\u4f5c\u6620\u5c04\u3002\u5f53\u7528\u6237\u70b9\u51fb\u6a21\u578b\u65f6\uff0c\u7cfb\u7edf\u4f1a\u6839\u636e\u70b9\u51fb\u533a\u57df\u548c\u914d\u7f6e\u7684\u6743\u91cd\u968f\u673a\u89e6\u53d1\u5bf9\u5e94\u7684\u52a8\u4f5c\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"\u914d\u7f6e\u793a\u4f8b-1",children:"\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'"tapMotions": {\n    "body": {  // \u8eab\u4f53\u533a\u57df\n        "tap_body": 30,   // \u52a8\u4f5c\u540d: \u6743\u91cd\n        "shake": 30,\n        "pinch_in": 20,\n        "pinch_out": 20\n    },\n    "head": {  // \u5934\u90e8\u533a\u57df\n        "flick_head": 40,\n        "shake": 20,\n        "pinch_in": 20,\n        "pinch_out": 20\n    }\n}\n'})}),"\n",(0,d.jsx)(n.h4,{id:"\u914d\u7f6e\u8bf4\u660e-1",children:"\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u70b9\u51fb\u533a\u57df\u540d\u79f0","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Live2D 2.0 \u6a21\u578b\uff1a\u901a\u5e38\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"body"}),"\u3001",(0,d.jsx)(n.code,{children:"head"})," \u7b49\u533a\u57df\u540d\u79f0"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'"hit_areas": [\n    {"name": "head", "id": "D_REF.HEAD"},\n    {"name": "body", "id": "D_REF.BODY"}\n]\n'})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Live2D 3.0/4.0 \u6a21\u578b\uff1a\u901a\u5e38\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"HitAreaBody"}),"\u3001",(0,d.jsx)(n.code,{children:"HitAreaHead"})," \u7b49\u533a\u57df\u540d\u79f0"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'"HitAreas": [\n    {"Id": "HitAreaHead", "Name": ""},\n    {"Id": "HitAreaBody", "Name": ""}\n]\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\u52a8\u4f5c\u540d\u79f0","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5fc5\u987b\u4e0e\u6a21\u578b\u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u52a8\u4f5c\u7ec4\u540d\u79f0\u5b8c\u5168\u4e00\u81f4"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6743\u91cd\u8bbe\u7f6e","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u8303\u56f4\uff1a\u5efa\u8bae\u4f7f\u7528 0-100 \u7684\u6574\u6570"}),"\n",(0,d.jsx)(n.li,{children:"\u6743\u91cd\u8d8a\u5927\uff0c\u8be5\u52a8\u4f5c\u88ab\u89e6\u53d1\u7684\u6982\u7387\u8d8a\u9ad8"}),"\n",(0,d.jsx)(n.li,{children:"\u540c\u4e00\u533a\u57df\u5185\u7684\u6240\u6709\u52a8\u4f5c\u6743\u91cd\u603b\u548c\u4e0d\u9700\u8981\u7b49\u4e8e 100"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u89e6\u53d1\u903b\u8f91",children:"\u89e6\u53d1\u903b\u8f91"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5f53\u7528\u6237\u5728\u524d\u7aef\u70b9\u51fb\u6a21\u578b\u65f6\uff08\u53ef\u8bbe\u7f6e\u662f\u5426\u5f00\u542f\uff09\uff0c\u7cfb\u7edf\u4f1a\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u9996\u5148\u68c0\u6d4b\u70b9\u51fb\u7684\u533a\u57df(hitTest)"}),"\n",(0,d.jsx)(n.li,{children:"\u6839\u636e\u8be5\u533a\u57df\u914d\u7f6e\u7684\u52a8\u4f5c\u548c\u6743\u91cd\u968f\u673a\u89e6\u53d1\u4e00\u4e2a\u52a8\u4f5c"}),"\n",(0,d.jsx)(n.li,{children:"\u5982\u679c\u672a\u68c0\u6d4b\u5230\u547d\u4e2d\u533a\u57df\uff0c\u5219\u4f1a\u5c06\u6240\u6709\u533a\u57df\u7684\u52a8\u4f5c\u5408\u5e76\u540e\uff0c\u6309\u6743\u91cd\u968f\u673a\u89e6\u53d1"}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6743\u91cd\u8ba1\u7b97\u793a\u4f8b\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'"head": {\n    "flick_head": 40,  // 40% \u6982\u7387\n    "shake": 20,       // 20% \u6982\u7387\n    "pinch_in": 20,    // 20% \u6982\u7387\n    "pinch_out": 20    // 20% \u6982\u7387\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"5-\u4fee\u6539\u89d2\u8272\u914d\u7f6e",children:"5. \u4fee\u6539\u89d2\u8272\u914d\u7f6e"}),"\n",(0,d.jsx)(n.p,{children:"\u5728\u89d2\u8272\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\u4f7f\u7528\u7684 Live2D \u6a21\u578b\u3002\u4f60\u53ef\u4ee5:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5728\u4e3b\u914d\u7f6e\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"conf.yaml"})," \u4e2d\u914d\u7f6e\uff08\u524d\u7aef\u9ed8\u8ba4\u914d\u7f6e\uff09"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5728 ",(0,d.jsx)(n.code,{children:"characters"})," \u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa\u4f60\u60f3\u8981\u7684\u89d2\u8272\u8bbe\u5b9a\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\uff08\u53ef\u4ee5\u5728\u524d\u7aef\u5207\u6362\uff09"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u914d\u7f6e\u65b9\u6cd5\u975e\u5e38\u7b80\u5355\u3002\u4ee5 ",(0,d.jsx)(n.code,{children:"conf.yaml"})," \u4e3a\u4f8b\uff0c\u4f60\u53ea\u9700\u8981\u5728 ",(0,d.jsx)(n.code,{children:"character-config"})," \u914d\u7f6e\u9879\u4e0b\u627e\u5230 ",(0,d.jsx)(n.code,{children:"live2d_model_name"})," \u5b57\u6bb5\uff0c\u5c06\u5176\u503c\u8bbe\u7f6e\u4e3a\u4f60\u60f3\u4f7f\u7528\u7684 Live2D \u6a21\u578b\u540d\u79f0\u5373\u53ef\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e2a\u540d\u79f0\u9700\u8981\u4e0e ",(0,d.jsx)(n.code,{children:"model_dict.json"})," \u6587\u4ef6\u4e2d\u5bf9\u5e94\u6a21\u578b\u7684 ",(0,d.jsx)(n.code,{children:"name"})," \u5b57\u6bb5\u4fdd\u6301\u4e00\u81f4\u3002"]}),"\n",(0,d.jsx)("img",{src:i(3643).A,style:{width:"70%"}}),"\n",(0,d.jsxs)(n.admonition,{type:"info",children:[(0,d.jsx)(n.p,{children:"\u56fe\u4e2d\u7684\u5176\u4ed6\u914d\u7f6e\u5b57\u6bb5\u8bf4\u660e:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"conf_name"}),": \u8fd9\u4e2a\u540d\u79f0\u4f1a\u663e\u793a\u5728\u524d\u7aef\u754c\u9762\u7684\u89d2\u8272\u9009\u62e9\u4e2d\uff0c\u4f60\u53ef\u4ee5\u7406\u89e3\u4e3a\u914d\u7f6e\u540d\u79f0 / \u89d2\u8272\u540d\u79f0\uff0c\u53ef\u4ee5\u968f\u4fbf\u547d\u540d\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"conf_uid"}),": \u8fd9\u662f\u89d2\u8272\u914d\u7f6e\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u8bf7\u786e\u4fdd\u5b83\u7684\u503c\u662f\u552f\u4e00\u7684"]}),"\n"]})]})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}},7196:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/live2d_p1-5f5850df724bd734e3462ffb9c297490.jpg"},3643:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/live2d_p2-d367e3057037e77c5eeb3b70599a2f55.jpg"},8862:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/live2d_p3-d865cc2072fcc214941430671894ff36.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var s=i(6540);const d={},l=s.createContext(d);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);