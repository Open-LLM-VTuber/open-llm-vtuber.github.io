"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7010],{9585:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"user-guide/live2d","title":"Live2D Guide","description":"To add a new Live2D model to your project, you need to complete three to five steps:","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/user-guide/live2d.md","sourceDirName":"user-guide","slug":"/user-guide/live2d","permalink":"/en/docs/user-guide/live2d","draft":false,"unlisted":false,"editUrl":"https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/docs/user-guide/live2d.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Window & Desktop Pet Mode","permalink":"/en/docs/user-guide/frontend/electron"},"next":{"title":"\u793e\u533a\u4e0e\u8d21\u732e","permalink":"/en/docs/community"}}');var s=i(4848),t=i(8453);const l={},r="Live2D Guide",d={},a=[{value:"1. Get a Live2D Model",id:"1-get-a-live2d-model",level:2},{value:"2. Configure Live2D Model",id:"2-configure-live2d-model",level:2},{value:"3. Place Model Files",id:"3-place-model-files",level:2},{value:"4. Add Model Configuration",id:"4-add-model-configuration",level:2},{value:"4.1 Basic Configuration",id:"41-basic-configuration",level:3},{value:"4.2 Display Configuration",id:"42-display-configuration",level:3},{value:"4.3 Idle Motion Configuration",id:"43-idle-motion-configuration",level:3},{value:"4.4 Expression Configuration",id:"44-expression-configuration",level:3},{value:"Default Expression Configuration",id:"default-expression-configuration",level:4},{value:"Expression Mapping Configuration",id:"expression-mapping-configuration",level:4},{value:"Configuration Example",id:"configuration-example",level:4},{value:"Configuration Notes",id:"configuration-notes",level:4},{value:"4.5 Interaction Motion Configuration",id:"45-interaction-motion-configuration",level:3},{value:"Configuration Example",id:"configuration-example-1",level:4},{value:"Configuration Notes",id:"configuration-notes-1",level:4},{value:"Trigger Logic",id:"trigger-logic",level:4},{value:"5. Modify Character Configuration",id:"5-modify-character-configuration",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"live2d-guide",children:"Live2D Guide"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Overview",type:"info",children:[(0,s.jsx)(n.p,{children:"To add a new Live2D model to your project, you need to complete three to five steps:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Get a Live2D model (optional)"}),"\n",(0,s.jsx)(n.li,{children:"Configure expressions and motions for your Live2D model (optional)"}),"\n",(0,s.jsxs)(n.li,{children:["Place the Live2D model files in the ",(0,s.jsx)(n.code,{children:"live2d-models"})," folder"]}),"\n",(0,s.jsxs)(n.li,{children:["Configure model information in the ",(0,s.jsx)(n.code,{children:"model_dict.json"})," file"]}),"\n",(0,s.jsxs)(n.li,{children:["Specify the Live2D model to use in the character configuration file (",(0,s.jsx)(n.code,{children:"conf.yaml"})," or character setting files in the ",(0,s.jsx)(n.code,{children:"characters"})," directory)"]}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"1-get-a-live2d-model",children:"1. Get a Live2D Model"}),"\n",(0,s.jsx)(n.admonition,{title:"About Model Version",type:"warning",children:(0,s.jsx)(n.p,{children:"Currently, the project uses pixi-live2d-display-lipsyncpatch which only supports Cubism2/3/4 models and does not support the latest Cubism5."})}),"\n",(0,s.jsx)(n.p,{children:"If you already have a suitable Live2D model, you can skip this step.\nHere are some common sources for obtaining Live2D models (feel free to add more sources):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://booth.pm/",children:"Booth"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.bilibili.com/",children:"Bilibili"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/Eikanya/Live2d-model",children:"Eikanya/Live2d-model"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-configure-live2d-model",children:"2. Configure Live2D Model"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"The Live2D model configuration file is an important file containing multiple settings such as expressions and motions. Since the configuration methods are diverse and complex, this part of the tutorial is not yet formally started. You can choose to:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Learn configuration methods by searching online resources"}),"\n",(0,s.jsx)(n.li,{children:"Skip this part for now and come back when you have a deeper understanding of Live2D model configuration"}),"\n",(0,s.jsx)(n.li,{children:"If you have relevant experience, you're very welcome to help us improve this content through PR or Issue"}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Since most Live2D models are extracted from games or primarily used for streaming, their expressions and motions may not be entirely suitable for this project's use case. For the best user experience, it's recommended to first check the model's configuration file (",(0,s.jsx)(n.code,{children:"model.json"})," or ",(0,s.jsx)(n.code,{children:"model3.json"}),") and make appropriate adjustments as needed to achieve better interaction."]}),"\n",(0,s.jsx)(n.p,{children:"You can use the following tools to view and adjust models:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Vtuber Studio"}),"\n",(0,s.jsx)(n.li,{children:"Live2DViewerEx Studio"}),"\n",(0,s.jsx)(n.li,{children:"Live2D Cubism Viewer"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"View and test the model's expression list"}),"\n",(0,s.jsx)(n.li,{children:"Preview all available motion effects"}),"\n",(0,s.jsx)(n.li,{children:"Add Idle motion groups"}),"\n",(0,s.jsx)(n.li,{children:"Create custom motion groups"}),"\n",(0,s.jsx)(n.li,{children:"Add new expressions"}),"\n",(0,s.jsx)(n.li,{children:"Create new motions"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3-place-model-files",children:"3. Place Model Files"}),"\n",(0,s.jsxs)(n.p,{children:["Put your Live2D model files in the ",(0,s.jsx)(n.code,{children:"live2d-models"})," folder, as shown in the image with the ",(0,s.jsx)(n.code,{children:"xiao"})," folder."]}),"\n",(0,s.jsx)("img",{src:i(8376).A,style:{width:"70%"}}),"\n",(0,s.jsx)(n.h2,{id:"4-add-model-configuration",children:"4. Add Model Configuration"}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"caution",children:(0,s.jsxs)(n.p,{children:["In the model configuration, only ",(0,s.jsx)(n.code,{children:"name"})," (model identifier), ",(0,s.jsx)(n.code,{children:"url"})," (model path), and ",(0,s.jsx)(n.code,{children:"kScale"})," (scaling ratio) are required fields. Other configuration items such as ",(0,s.jsx)(n.code,{children:"emotionMap"})," (expression mapping) and ",(0,s.jsx)(n.code,{children:"tapMotions"})," (touch actions) are optional - not filling in these configuration items will cause the model to lose expression changes and motion interaction functionality."]})}),"\n",(0,s.jsxs)(n.p,{children:["Add the model configuration in the ",(0,s.jsx)(n.code,{children:"model_dict.json"})," file in the project root directory. Here's a complete configuration example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name": "shizuku-local",\n    "description": "Orange-Haired Girl, locally available. no internet required.",\n    "url": "/live2d-models/shizuku/shizuku.model.json",\n    "kScale": 0.5,\n    "initialXshift": 0,\n    "initialYshift": 0,\n    "idleMotionGroupName": "idle",\n    "emotionMap": {\n        "neutral": 0,\n        "anger": 2,\n        "disgust": 2,\n        "fear": 1,\n        "joy": 3,\n        "smirk": 3,\n        "sadness": 1,\n        "surprise": 3\n    },\n    "tapMotions": {\n        "body": {\n            "tap_body": 30,\n            "shake": 30,\n            "pinch_in": 20,\n            "pinch_out": 20\n        },\n        "head": {\n            "flick_head": 40,\n            "shake": 20,\n            "pinch_in": 20,\n            "pinch_out": 20\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"41-basic-configuration",children:"4.1 Basic Configuration"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Config Item"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Example Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"name"})}),(0,s.jsx)(n.td,{children:"Unique identifier for the model, preferably in English"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"shizuku-local"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"description"})}),(0,s.jsx)(n.td,{children:"Model description (optional)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"Orange-Haired Girl"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"url"})}),(0,s.jsx)(n.td,{children:"Model file path"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"/live2d-models/shizuku/shizuku.model.json"'})})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Supports both local paths and remote URLs"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Local paths should start with ",(0,s.jsx)(n.code,{children:"/live2d-models/"}),", not ",(0,s.jsx)(n.code,{children:"./live2d-models/"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Remote URLs should point to valid ",(0,s.jsx)(n.code,{children:".model.json"})," or ",(0,s.jsx)(n.code,{children:".model3.json"})," files, e.g., ",(0,s.jsx)(n.code,{children:"https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When loading HTTPS resources while accessing the Web via HTTP protocol, you may encounter the error ",(0,s.jsx)(n.code,{children:"Failed to load LiveD model: Error: Network error"}),". In this case, you need to allow the website to load insecure content in your browser settings:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Chrome: Click the shield icon on the right side of the address bar -> Site Settings -> Insecure content -> Allow"}),"\n",(0,s.jsx)(n.li,{children:"Firefox: Click the lock icon on the left side of the address bar -> Turn off Enhanced Tracking Protection"}),"\n",(0,s.jsx)(n.li,{children:"Edge: Click the lock icon on the right side of the address bar -> Site permissions -> Insecure content -> Allow"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"42-display-configuration",children:"4.2 Display Configuration"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Config Item"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Recommended Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"kScale"})}),(0,s.jsx)(n.td,{children:"Initial model scale"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0.3 ~ 0.5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"initialXshift"})}),(0,s.jsx)(n.td,{children:"Initial horizontal position offset"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"initialYshift"})}),(0,s.jsx)(n.td,{children:"Initial vertical position offset"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0"})})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When both ",(0,s.jsx)(n.code,{children:"initialXshift"})," and ",(0,s.jsx)(n.code,{children:"initialYshift"})," are set to ",(0,s.jsx)(n.code,{children:"0"}),", the Live2D model is usually centered in the canvas. For some special models, you may need to manually adjust these two parameters to achieve the desired display position."]}),"\n",(0,s.jsxs)(n.li,{children:["About model size:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"kScale"})," parameter only determines the initial size of a model when it's first loaded in the browser/device. It doesn't determine the size for subsequent uses of the model."]}),"\n",(0,s.jsxs)(n.li,{children:["In the frontend interface, ",(0,s.jsx)(n.strong,{children:"you can adjust the model size using the mouse wheel or pinch-to-zoom on touchscreens"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["After manually adjusting the model size, the system will remember the size for that model in the current browser/device and current mode using ",(0,s.jsx)(n.code,{children:"localStorage"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The next time you use it on the same browser/device (without clearing localStorage), ",(0,s.jsx)(n.strong,{children:"the previously set size will be automatically applied"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note that when the container size changes (e.g., resizing the window, collapsing/expanding sidebars or bottom bars, switching display modes, etc.), the Live2D model will reset to its initial position but maintain its current scale."}),"\n",(0,s.jsx)(n.h3,{id:"43-idle-motion-configuration",children:"4.3 Idle Motion Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Live2D model motion animations are generally divided into multiple motion groups. Each motion group contains a series of related motion animations. In the model.json file, these motion groups are usually defined under the ",(0,s.jsx)(n.code,{children:"motions"})," or ",(0,s.jsx)(n.code,{children:"Motions"})," field."]}),"\n",(0,s.jsxs)(n.p,{children:["Idle motions are the basic animations that the model plays randomly when there's no interaction. They are usually placed in a motion group named ",(0,s.jsx)(n.code,{children:"idle"})," or ",(0,s.jsx)(n.code,{children:"Idle"}),", and the system will randomly select a motion from this group to play."]}),"\n",(0,s.jsxs)(n.p,{children:["The specific motion group name needs to be based on the name in the model configuration file ",(0,s.jsx)(n.code,{children:"model.json"})," or ",(0,s.jsx)(n.code,{children:"model3.json"}),", as shown in the image."]}),"\n",(0,s.jsx)("img",{src:i(8138).A,style:{width:"100%"}}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["If you understand the model's motion structure, you can also configure your own idle motion group. However, unless you know what you're doing, it's recommended to keep the default value of ",(0,s.jsx)(n.code,{children:"idleMotionGroupName"})," (",(0,s.jsx)(n.code,{children:"idle"})," or ",(0,s.jsx)(n.code,{children:"Idle"}),")."]})]}),"\n",(0,s.jsx)(n.h3,{id:"44-expression-configuration",children:"4.4 Expression Configuration"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"emotionMap"})," defines the expression mapping available to the AI, while ",(0,s.jsx)(n.code,{children:"defaultEmotion"})," sets the model's default expression."]}),"\n",(0,s.jsx)(n.h4,{id:"default-expression-configuration",children:"Default Expression Configuration"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"defaultEmotion"})," is an optional configuration item that specifies which expression the model should display after loading or when a dialogue ends. Its value can be either an expression index (number) or expression name (string), and needs to use the same mapping method as ",(0,s.jsx)(n.code,{children:"emotionMap"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Some models may come with watermarks. In this case, you can create an expression without the watermark and set it as the default expression to remove the watermark."}),"\n",(0,s.jsx)(n.h4,{id:"expression-mapping-configuration",children:"Expression Mapping Configuration"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"emotionMap"})," supports two mapping methods:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Using expression indices (numbers)"}),"\n",(0,s.jsx)(n.li,{children:"Using expression names (strings)"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"configuration-example",children:"Configuration Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"First, check the expression definitions in the model file:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// model.json\n"expressions": [\n    {"name": "f01", "file": "expressions/f01.exp.json"}, // index 0\n    {"name": "f02", "file": "expressions/f02.exp.json"}, // index 1\n    {"name": "f03", "file": "expressions/f03.exp.json"}, // index 2\n    {"name": "f04", "file": "expressions/f04.exp.json"}  // index 3\n]\n\n// Or you might encounter in model3.json file\n"Expressions" : [\n    {"Name": "f01", "File": "f01.exp3.json"}, // index 0\n    {"Name": "f02", "File": "f02.exp3.json"}, // index 1\n    {"Name": "f03", "File": "f03.exp3.json"}, // index 2\n    {"Name": "f04", "File": "f04.exp3.json"} // index 3\n]\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Then configure the expression mapping in ",(0,s.jsx)(n.code,{children:"model_dict.json"}),". You can choose one of the following two methods:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Method 1: Using expression indices (note to use numbers instead of strings as indices)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"emotionMap": {\n    "neutral": 0,  // corresponds to f01 expression\n    "anger": 2,    // corresponds to f03 expression\n    "disgust": 2,  // also uses f03 expression\n    "fear": 1,     // corresponds to f02 expression\n    "joy": 3,      // corresponds to f04 expression\n    "smirk": 3,    // also uses f04 expression\n    "sadness": 1,  // also uses f02 expression\n    "surprise": 3  // also uses f04 expression\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Method 2: Using expression names"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"emotionMap": {\n    "neutral": "f01",\n    "anger": "f03",\n    "disgust": "f03",\n    "fear": "f02",\n    "joy": "f04",\n    "smirk": "f04", \n    "sadness": "f02",\n    "surprise": "f04"\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"configuration-notes",children:"Configuration Notes"}),"\n",(0,s.jsx)(n.admonition,{title:"Important Notes",type:"caution",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["If using index mapping, index values start from 0 and follow the order of the ",(0,s.jsx)(n.code,{children:"expressions"})," array in the model file"]}),"\n",(0,s.jsx)(n.li,{children:"If using expression name mapping, ensure the names match exactly with those defined in the model file"}),"\n",(0,s.jsx)(n.li,{children:"Multiple emotions can be mapped to the same expression index or name"}),"\n"]})}),"\n",(0,s.jsxs)(n.p,{children:["The AI will use the ",(0,s.jsx)(n.code,{children:"[emotion]"})," format in dialogues to trigger expression changes, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Oh, damn it! [anger] What you just said is even harder to swallow than Uncle Johnson's egg and tofu noodles.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When the system recognizes [anger], it will make the Live2D model in the frontend display the expression corresponding to the ",(0,s.jsx)(n.code,{children:"anger"})," keyword (index 2 in the above example)."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"The expression will persist until:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The next expression keyword is encountered"}),"\n",(0,s.jsx)(n.li,{children:"Or automatically reverts to the default expression after the dialogue ends"}),"\n"]})]}),"\n",(0,s.jsx)(n.admonition,{title:"Configuration Suggestions",type:"tip",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Use simple, clear English words as keywords"}),"\n",(0,s.jsx)(n.li,{children:"Ensure the keywords are easy for the AI to understand and use accurately"}),"\n",(0,s.jsx)(n.li,{children:"Avoid using overly long or complex names"}),"\n",(0,s.jsx)(n.li,{children:"Choose appropriate emotion mappings based on the model's expression characteristics"}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"45-interaction-motion-configuration",children:"4.5 Interaction Motion Configuration"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tapMotions"})," defines the motion mapping for model interactions with the mouse. When a user clicks on the model, the system will randomly trigger a corresponding motion based on the clicked area and the configured weights."]}),"\n",(0,s.jsx)(n.h4,{id:"configuration-example-1",children:"Configuration Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"tapMotions": {\n    "body": {  // Body area\n        "tap_body": 30,   // Motion name: weight\n        "shake": 30,\n        "pinch_in": 20,\n        "pinch_out": 20\n    },\n    "head": {  // Head area\n        "flick_head": 40,\n        "shake": 20,\n        "pinch_in": 20,\n        "pinch_out": 20\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"configuration-notes-1",children:"Configuration Notes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click area names","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Live2D 2.0 models: Usually use area names like ",(0,s.jsx)(n.code,{children:"body"}),", ",(0,s.jsx)(n.code,{children:"head"}),", etc."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"hit_areas": [\n    {"name": "head", "id": "D_REF.HEAD"},\n    {"name": "body", "id": "D_REF.BODY"}\n]\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Live2D 3.0/4.0 models: Usually use area names like ",(0,s.jsx)(n.code,{children:"HitAreaBody"}),", ",(0,s.jsx)(n.code,{children:"HitAreaHead"}),", etc."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"HitAreas": [\n    {"Id": "HitAreaHead", "Name": ""},\n    {"Id": "HitAreaBody", "Name": ""}\n]\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Motion names","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Must exactly match the motion group names defined in the model configuration file"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Weight settings","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Range: Recommended to use integers from 0-100"}),"\n",(0,s.jsx)(n.li,{children:"Higher weight means higher probability of the motion being triggered"}),"\n",(0,s.jsx)(n.li,{children:"The sum of all motion weights within the same area doesn't need to equal 100"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"trigger-logic",children:"Trigger Logic"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When a user clicks on the model in the frontend (can be set to enable or disable), the system will:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"First detect the clicked area (hitTest)"}),"\n",(0,s.jsx)(n.li,{children:"Randomly trigger a motion based on the configured motions and weights for that area"}),"\n",(0,s.jsx)(n.li,{children:"If no hit area is detected, it will merge all area motions and randomly trigger one based on weights"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Weight calculation example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"head": {\n    "flick_head": 40,  // 40% probability\n    "shake": 20,       // 20% probability\n    "pinch_in": 20,    // 20% probability\n    "pinch_out": 20    // 20% probability\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"5-modify-character-configuration",children:"5. Modify Character Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Specify the Live2D model to use in the character configuration file. You can:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Configure in the main configuration file ",(0,s.jsx)(n.code,{children:"conf.yaml"})," (frontend default configuration)"]}),"\n",(0,s.jsxs)(n.li,{children:["Create a new character setting file in the ",(0,s.jsx)(n.code,{children:"characters"})," directory for the character you want to configure (can be switched in the frontend)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The configuration method is very simple. Taking ",(0,s.jsx)(n.code,{children:"conf.yaml"})," as an example, you only need to find the ",(0,s.jsx)(n.code,{children:"live2d_model_name"})," field under the ",(0,s.jsx)(n.code,{children:"character-config"})," configuration item and set its value to the name of the Live2D model you want to use. Please note that this name needs to be consistent with the ",(0,s.jsx)(n.code,{children:"name"})," field of the corresponding model in the ",(0,s.jsx)(n.code,{children:"model_dict.json"})," file."]}),"\n",(0,s.jsx)("img",{src:i(8951).A,style:{width:"70%"}}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Explanation of other configuration fields in the image:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"conf_name"}),": This name will be displayed in the character selection in the frontend interface. You can think of it as the configuration name / character name, and you can name it as you like."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"conf_uid"}),": This is the unique identifier for the character configuration. Please ensure its value is unique."]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8376:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/live2d_p1-5f5850df724bd734e3462ffb9c297490.jpg"},8951:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/live2d_p2-d367e3057037e77c5eeb3b70599a2f55.jpg"},8138:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/live2d_p3-d865cc2072fcc214941430671894ff36.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var o=i(6540);const s={},t=o.createContext(s);function l(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);