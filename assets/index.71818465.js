var o=Object.assign;import{dr as e,e as t,d as a,bt as n,r as i,a as s,aE as l,h as p,bA as r,a3 as d,o as m,i as u,w as c,j as g,m as f}from"./index.3f7fdb45.js";import{A as b}from"./index.9771aec7.js";import{_ as j}from"./index.2532869c.js";import"./vendor.3b1829c7.js";import"./index.6a411233.js";import"./index.f4c95b5e.js";import"./RightOutlined.1faa1ecd.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./isEqual.94d7e3f1.js";import"./toInteger.21546c11.js";import"./DownOutlined.a59d2fde.js";/* empty css              */import"./index.805c9db8.js";import"./usePageContext.ebe5abbf.js";import"./transButton.2f25a83f.js";import"./ArrowLeftOutlined.85d62d21.js";function y(o){let a,n=document.body;if(Reflect.has(o,"target")||Reflect.has(o,"props")){const e=o;a=e.props||{},n=e.target||document.body}else a=o;const i=e(a);return[()=>{const o=t(n);o&&i.open(o)},()=>{i.close()}]}var L=a({components:{Loading:n,PageWrapper:j,[b.name]:b},setup(){const e=i(null),t=i(!1),a=s({absolute:!1,loading:!1,tip:"加载中..."}),[n,p]=y({tip:"加载中..."}),[r,d]=y({target:e,props:{tip:"加载中...",absolute:!0}});function m(o){a.absolute=o,a.loading=!0,setTimeout((()=>{a.loading=!1}),2e3)}return o({openCompFullLoading:function(){m(!1)},openFnFullLoading:function(){n(),setTimeout((()=>{p()}),2e3)},openFnWrapLoading:function(){r(),setTimeout((()=>{d()}),2e3)},openCompAbsolute:function(){m(!0)},wrapEl:e,loadingRef:t,openDirectiveLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1}),2e3)}},l(a))}});const C=f(" 全屏 Loading "),k=f(" 容器内 Loading "),x=f(" 全屏 Loading "),F=f(" 容器内 Loading "),v=f(" 打开指令Loading ");L.render=function(o,e,t,a,n,i){const s=p("a-alert"),l=p("a-button"),f=p("Loading"),b=p("PageWrapper"),j=r("loading");return d((m(),u(b,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:c((()=>[g(s,{message:"组件方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openCompFullLoading},{default:c((()=>[C])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:o.openCompAbsolute},{default:c((()=>[k])),_:1},8,["onClick"]),g(f,{loading:o.loading,absolute:o.absolute,tip:o.tip},null,8,["loading","absolute","tip"]),g(s,{message:"函数方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openFnFullLoading},{default:c((()=>[x])),_:1},8,["onClick"]),g(l,{class:"my-4",type:"primary",onClick:o.openFnWrapLoading},{default:c((()=>[F])),_:1},8,["onClick"]),g(s,{message:"指令方式"}),g(l,{class:"my-4 mr-4",type:"primary",onClick:o.openDirectiveLoading},{default:c((()=>[v])),_:1},8,["onClick"])])),_:1},512)),[[j,o.loadingRef]])};export default L;
