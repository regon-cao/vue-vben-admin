var e=Object.assign;import{aF as t,d as n,r as s,K as l,a0 as o,x as i,bW as a,e as c,j as r,aL as d,F as u,aJ as m,dr as p,ds as f,a$ as y}from"./index.e46d734f.js";import{M as h}from"./index.098da0dd.js";/* empty css              */import{D as v}from"./index.af51f3e7.js";const b={width:t.number.def(156),customEvent:{type:Object,default:null},styles:t.style,showIcon:t.bool.def(!0),axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}};function x(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!u(e)}const j=e=>{const{item:t}=e;return r("span",{style:"display: inline-block; width: 100%;",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&r(m,{class:"mr-2",icon:t.icon},null),r("span",null,[t.label])])};var w=n({name:"ContextMenu",props:b,setup(t){const n=s(null),u=s(!1),m=l((()=>{const{axis:n,items:s,styles:l,width:o}=t,{x:i,y:a}=n||{x:0,y:0},c=40*(s||[]).length,r=o,d=document.body,u=d.clientWidth<i+r?i-r:i,m=d.clientHeight<a+c?a-c:a;return e(e({},l),{width:`${o}px`,left:`${u+1}px`,top:`${m+1}px`})}));function p(e,t){const{handler:n,disabled:s}=e;s||(u.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function f(e){return e.map((e=>{const{disabled:n,label:s,children:l,divider:o=!1}=e,i=o?r(v,{key:`d-${s}`},null):null;if(!l||0===l.length){let l;return r(d,null,[r(h.Item,{disabled:n,class:"context-menu__item",key:s},x(l=r(j,{showIcon:t.showIcon,item:e,handler:p},null))?l:{default:()=>[l]}),i])}return c(u)?r(h.SubMenu,{key:s,disabled:n,popupClassName:"context-menu__popup"},{title:()=>r(j,{showIcon:t.showIcon,item:e,handler:p},null),default:()=>f(l)}):null}))}return o((()=>{i((()=>u.value=!0))})),a((()=>{const e=c(n);e&&document.body.removeChild(e)})),()=>{let e;const{items:s}=t;return c(u)?r(h,{inlineIndent:12,mode:"vertical",class:"context-menu",ref:n,style:c(m)},x(e=f(s))?e:{default:()=>[e]}):null}}});const L={domList:[],resolve:()=>{}},E=function(e){const{event:t}=e||{};if(t&&(null==t||t.preventDefault()),p)return new Promise((n=>{const s=document.body,l=document.createElement("div"),o={};e.styles&&(o.styles=e.styles),e.items&&(o.items=e.items),e.event&&(o.customEvent=t,o.axis={x:t.clientX,y:t.clientY});const i=r(w,o);f(i,l);const a=function(){L.resolve("")};L.domList.push(l);const c=function(){L.domList.forEach((e=>{try{e&&s.removeChild(e)}catch(t){}})),s.removeEventListener("click",a),s.removeEventListener("scroll",a)};L.resolve=function(...e){c(),n(e[0])},c(),s.appendChild(l),s.addEventListener("click",a),s.addEventListener("scroll",a)}))},I=function(){L&&(L.resolve(""),L.domList=[])};function k(e=!0){return y()&&e&&a((()=>{I()})),[E,I]}export{k as u};
