import{M as e}from"./index.2efb0045.js";import{_ as t}from"./index.2532869c.js";import{d as n,r as o,e as a,h as r,o as i,i as s,w as d,j as m,m as f}from"./index.3f7fdb45.js";import"./index.6a411233.js";import"./index.f4c95b5e.js";import"./RightOutlined.1faa1ecd.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./isEqual.94d7e3f1.js";import"./toInteger.21546c11.js";import"./DownOutlined.a59d2fde.js";/* empty css              */import"./index.805c9db8.js";import"./usePageContext.ebe5abbf.js";import"./transButton.2f25a83f.js";import"./ArrowLeftOutlined.85d62d21.js";import"./vendor.3b1829c7.js";var l=n({components:{MarkDown:e,PageWrapper:t},setup(){const e=o(null),t=o("\n# title\n\n# content\n");return{value:t,toggleTheme:function(){const t=a(e);if(!t)return;t.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){t.value=e}}}});const p=f(" 黑暗主题 ");l.render=function(e,t,n,o,a,f){const l=r("a-button"),u=r("MarkDown"),c=r("PageWrapper");return i(),s(c,{title:"MarkDown组件示例"},{default:d((()=>[m(l,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[p])),_:1},8,["onClick"]),m(u,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default l;
