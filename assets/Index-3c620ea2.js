import{_ as y,r as v,o as n,c as i,a as s,b as u,w as d,v as w,F as k,d as h,i as p,t as r,f as x,n as C,j as V}from"./index-51d0db6e.js";const U={class:"settings-container glass"},L={class:"settings-content"},N={class:"settings-section"},I={class:"settings-form"},S={class:"form-item"},T={class:"input-wrapper glass"},B={class:"form-item"},D={class:"upload-wrapper glass"},F={key:0,class:"preview"},M=["src"],z={key:1,class:"upload-btn"},R={class:"settings-section"},j={class:"theme-settings"},A=["onClick"],E={class:"theme-name"},P={class:"settings-section"},$={class:"settings-form"},q={class:"form-item"},G={class:"switch-wrapper"},H={class:"switch"},J={class:"switch-label"},K={class:"form-item"},O={class:"switch-wrapper"},Q={class:"switch"},W={class:"switch-label"},X={class:"form-item"},Y={class:"select-wrapper glass"},Z={class:"settings-footer"},ss=["disabled"],es={__name:"Index",setup(ts){const o=v(!1),t=v({systemName:"后台管理系统",logo:"",theme:"default",notifications:!0,loginVerification:!0,backupCycle:"weekly"}),f=[{name:"default",label:"默认主题",gradient:"linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)"},{name:"dark",label:"暗色主题",gradient:"linear-gradient(135deg, #434343 0%, #000000 100%)"},{name:"purple",label:"紫色主题",gradient:"linear-gradient(135deg, #9795f0 0%, #fbc8d4 100%)"},{name:"green",label:"绿色主题",gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"}],g=a=>{t.value.theme=a},m=a=>{const e=a.target.files[0];if(e){const l=new FileReader;l.onload=c=>{t.value.logo=c.target.result},l.readAsDataURL(e)}},_=()=>{t.value.logo=""},b=async()=>{o.value=!0;try{await new Promise(a=>setTimeout(a,1500))}catch(a){console.error("保存失败:",a)}finally{o.value=!1}};return(a,e)=>(n(),i("div",U,[e[20]||(e[20]=s("h2",{class:"gradient-text"},"系统设置",-1)),s("div",L,[s("div",N,[e[9]||(e[9]=s("h3",{class:"section-title"},[s("i",{class:"fas fa-cog"}),u(" 基本设置 ")],-1)),s("div",I,[s("div",S,[e[4]||(e[4]=s("label",null,"系统名称",-1)),s("div",T,[d(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>t.value.systemName=l),placeholder:"请输入系统名称"},null,512),[[w,t.value.systemName]])])]),s("div",B,[e[8]||(e[8]=s("label",null,"系统Logo",-1)),s("div",D,[t.value.logo?(n(),i("div",F,[s("img",{src:t.value.logo,alt:"logo"},null,8,M),s("button",{class:"remove-btn",onClick:_},e[5]||(e[5]=[s("i",{class:"fas fa-times"},null,-1)]))])):(n(),i("div",z,[e[6]||(e[6]=s("i",{class:"fas fa-cloud-upload-alt"},null,-1)),e[7]||(e[7]=s("span",null,"点击上传",-1)),s("input",{type:"file",accept:"image/*",onChange:m},null,32)]))])])])]),s("div",R,[e[10]||(e[10]=s("h3",{class:"section-title"},[s("i",{class:"fas fa-palette"}),u(" 主题设置 ")],-1)),s("div",j,[(n(),i(k,null,h(f,l=>s("div",{class:C(["theme-item",{active:t.value.theme===l.name}]),key:l.name,onClick:c=>g(l.name)},[s("div",{class:"theme-preview",style:V({background:l.gradient})},null,4),s("span",E,r(l.label),1)],10,A)),64))])]),s("div",P,[e[18]||(e[18]=s("h3",{class:"section-title"},[s("i",{class:"fas fa-sliders-h"}),u(" 系统配置 ")],-1)),s("div",$,[s("div",q,[e[12]||(e[12]=s("label",null,"系统通知",-1)),s("div",G,[s("label",H,[d(s("input",{type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=l=>t.value.notifications=l)},null,512),[[p,t.value.notifications]]),e[11]||(e[11]=s("span",{class:"slider"},null,-1))]),s("span",J,r(t.value.notifications?"开启":"关闭"),1)])]),s("div",K,[e[14]||(e[14]=s("label",null,"登录验证",-1)),s("div",O,[s("label",Q,[d(s("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=l=>t.value.loginVerification=l)},null,512),[[p,t.value.loginVerification]]),e[13]||(e[13]=s("span",{class:"slider"},null,-1))]),s("span",W,r(t.value.loginVerification?"开启":"关闭"),1)])]),s("div",X,[e[17]||(e[17]=s("label",null,"数据备份周期",-1)),s("div",Y,[d(s("select",{"onUpdate:modelValue":e[3]||(e[3]=l=>t.value.backupCycle=l)},e[15]||(e[15]=[s("option",{value:"daily"},"每天",-1),s("option",{value:"weekly"},"每周",-1),s("option",{value:"monthly"},"每月",-1)]),512),[[x,t.value.backupCycle]]),e[16]||(e[16]=s("i",{class:"fas fa-chevron-down"},null,-1))])])])])]),s("div",Z,[s("button",{class:"save-btn",onClick:b,disabled:o.value},[e[19]||(e[19]=s("i",{class:"fas fa-save"},null,-1)),s("span",null,r(o.value?"保存中...":"保存设置"),1)],8,ss)])]))}},as=y(es,[["__scopeId","data-v-7243bf39"]]);export{as as default};