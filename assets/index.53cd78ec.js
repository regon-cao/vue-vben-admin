import{bZ as e,r as t,cF as i,e as n,d as s,a0 as r,o as a,i as o,b0 as c,h as d,j as l,l as u,bw as p}from"./index.3f7fdb45.js";import{_ as f}from"./index.2532869c.js";import"./vendor.3b1829c7.js";import"./index.6a411233.js";import"./index.f4c95b5e.js";import"./RightOutlined.1faa1ecd.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./isEqual.94d7e3f1.js";import"./toInteger.21546c11.js";import"./DownOutlined.a59d2fde.js";/* empty css              */import"./index.805c9db8.js";import"./usePageContext.ebe5abbf.js";import"./transButton.2f25a83f.js";import"./ArrowLeftOutlined.85d62d21.js";var m=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(s,{emit:a}){const o=t(null);return function(s,r,a="click"){if(e)return;const o=t(!1);function c(e){if("touchend"===e.type&&(o.value=!0),"click"===e.type&&n(o))return;const t=s.value;t&&e.target&&!t.contains(e.target)&&r(e)}i({el:document,name:"touchend",listener:c,options:!0}),i({el:document,name:a,listener:c,options:!0})}(o,(()=>{a("clickOutside")})),r((()=>{a("mounted")})),{wrap:o}}});const j={ref:"wrap"};m.render=function(e,t,i,n,s,r){return a(),o("div",j,[c(e.$slots,"default")],512)};var k=s({components:{ClickOutSide:m,PageWrapper:f},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const C=p("data-v-7a637453"),b=C(((e,t,i,n,s,r)=>{const c=d("ClickOutSide"),p=d("PageWrapper");return a(),o(p,{title:"点内外部触发事件"},{default:C((()=>[l(c,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:C((()=>[l("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},u(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));k.render=b,k.__scopeId="data-v-7a637453";export default k;
