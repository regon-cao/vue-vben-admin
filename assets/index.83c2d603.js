import{D as e}from"./index.1e8a963b.js";import{u as t}from"./useDescription.c6d410ed.js";import{_ as s}from"./index.2532869c.js";import{d as a,h as i,o as r,i as o,w as n,j as m}from"./index.3f7fdb45.js";import"./index.746ba003.js";import"./responsiveObserve.c545f1cc.js";import"./ScrollContainer.7f6d6fc9.js";import"./index.4f4de632.js";import"./domUtils.48cba439.js";import"./_stringToArray.eb374306.js";import"./RightOutlined.1faa1ecd.js";/* empty css              */import"./useTimeout.08ad4008.js";import"./useScrollTo.b85e0852.js";import"./get.6c6b3b70.js";import"./index.6a411233.js";import"./index.f4c95b5e.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./isEqual.94d7e3f1.js";import"./toInteger.21546c11.js";import"./DownOutlined.a59d2fde.js";import"./index.805c9db8.js";import"./usePageContext.ebe5abbf.js";import"./transButton.2f25a83f.js";import"./ArrowLeftOutlined.85d62d21.js";import"./vendor.3b1829c7.js";const l={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},d=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var p=a({components:{Description:e,PageWrapper:s},setup(){const[e]=t({title:"useDescription",data:l,schema:d}),[s]=t({title:"无边框",bordered:!1,data:l,schema:d});return{mockData:l,schema:d,register:e,register1:s}}});p.render=function(e,t,s,a,l,d){const p=i("Description"),c=i("PageWrapper");return r(),o(c,{title:"详情组件示例"},{default:n((()=>[m(p,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),m(p,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),m(p,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),m(p,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default p;
