import{_ as e}from"./BasicForm.858ad571.js";import{a as i}from"./ScrollContainer.7f6d6fc9.js";import{d as t,bW as r,g as s,h as o,o as a,i as n,w as d,j as m}from"./index.3f7fdb45.js";import{M as p}from"./index.2efb0045.js";import{_ as l}from"./index.2532869c.js";import"./index.c52c2d04.js";import"./index.4f671a8f.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.1e71e2c3.js";import"./isEqual.94d7e3f1.js";import"./get.6c6b3b70.js";import"./_baseProperty.74f89655.js";import"./toInteger.21546c11.js";import"./index.cb20b585.js";import"./index.494e72e5.js";import"./SearchOutlined.a93e9aae.js";import"./EyeOutlined.130c8cb5.js";import"./index.90fc573b.js";import"./CheckOutlined.6bb30d20.js";import"./DownOutlined.a59d2fde.js";import"./index.aa9be573.js";import"./index.58977232.js";import"./UpOutlined.9735db66.js";import"./index.a57a6140.js";import"./RightOutlined.1faa1ecd.js";import"./RedoOutlined.2cd6e2eb.js";import"./index.f4c95b5e.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./Tree.02654ca3.js";import"./util.902f1384.js";/* empty css              */import"./uuid.45f6123b.js";import"./index.c4ffc6c4.js";import"./DeleteOutlined.dc4a535b.js";import"./index.9771aec7.js";import"./useModal.538b6089.js";import"./useTimeout.08ad4008.js";import"./useWindowSizeFn.7797aaeb.js";import"./FullscreenOutlined.daee38c6.js";import"./index.a27549be.js";import"./Dropdown.ab10fee4.js";import"./index.89f7f6ec.js";import"./LeftOutlined.47a393ed.js";import"./download.52a08c7b.js";import"./domUtils.48cba439.js";import"./_stringToArray.eb374306.js";import"./index.4f4de632.js";import"./useScrollTo.b85e0852.js";import"./index.6a411233.js";import"./index.805c9db8.js";import"./usePageContext.ebe5abbf.js";import"./transButton.2f25a83f.js";import"./ArrowLeftOutlined.85d62d21.js";const c=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:i})=>r(p,{value:e[i],onChange:t=>{e[i]=t}})}];var j=t({components:{BasicForm:e,CollapseContainer:i,PageWrapper:l},setup(){const{createMessage:e}=s();return{schemas:c,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});j.render=function(e,i,t,r,s,p){const l=o("BasicForm"),c=o("CollapseContainer"),j=o("PageWrapper");return a(),n(j,{title:"MarkDown组件嵌入Form示例"},{default:d((()=>[m(c,{title:"MarkDown表单"},{default:d((()=>[m(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default j;
