import{_ as e,a as i}from"./index.a9719a1a.js";import{_ as t}from"./index.820adc29.js";import{d as s,h as r,o,i as d,w as a,j as n,a7 as p}from"./index.e46d734f.js";import{u as m}from"./useForm.5e7347e8.js";import"./index.f2d9a85b.js";import"./index.b36e0ab3.js";import"./index.4265baa2.js";import"./domUtils.921b9181.js";import"./_stringToArray.a38654a8.js";import"./RightOutlined.099e922a.js";/* empty css              */import"./useTimeout.d5fb9408.js";import"./useScrollTo.274a582f.js";import"./animation.bb63f45a.js";import"./ArrowLeftOutlined.31edc909.js";import"./useAttrs.627f9fc4.js";import"./isEqual.0eac6397.js";import"./index.95c19ac3.js";import"./index.733bd6af.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.eeb99042.js";import"./get.6b734fef.js";import"./_baseProperty.74f89655.js";import"./toInteger.18755102.js";import"./index.3de65897.js";import"./index.8a33ab07.js";import"./SearchOutlined.977496ca.js";import"./EyeOutlined.00181602.js";import"./index.b6deae0b.js";import"./CheckOutlined.7d2dcaa1.js";import"./DownOutlined.cbcefe26.js";import"./index.07efe163.js";import"./colors.03e387d4.js";import"./index.bd3f3a9c.js";import"./UpOutlined.b3e8e183.js";import"./index.5e1a80e1.js";import"./RedoOutlined.c0821a6f.js";import"./index.098da0dd.js";import"./EllipsisOutlined.8e1dac28.js";import"./types.05c3c500.js";import"./Tree.f4c30aa1.js";import"./util.3ed12536.js";import"./uuid.5853f08e.js";import"./index.310f61f9.js";import"./DeleteOutlined.efbd4d58.js";import"./index.676328c7.js";import"./index.0bdd825c.js";import"./useWindowSizeFn.569b13cc.js";import"./FullscreenOutlined.2b73dea1.js";import"./index.af51f3e7.js";import"./index.a8d15d07.js";import"./index.41a68892.js";import"./LeftOutlined.a86a228d.js";import"./download.20ed0539.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=s({components:{BasicDrawer:e,BasicForm:t},setup(){const[e,{setFieldsValue:t}]=m({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=i((e=>{t({field2:e.data,field1:e.info})}));return{register:s,schemas:j,registerForm:e}}});l.render=function(e,i,t,s,m,j){const l=r("BasicForm"),c=r("BasicDrawer");return o(),d(c,p(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:a((()=>[n("div",null,[n(l,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default l;
