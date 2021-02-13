import{_ as e}from"./BasicForm.858ad571.js";import{u as o}from"./useForm.c2067435.js";import{a as i}from"./ScrollContainer.7f6d6fc9.js";import{_ as l}from"./index.2532869c.js";import{d as t,h as s,o as a,i as n,w as r,j as p,m as d}from"./index.3f7fdb45.js";import"./index.c52c2d04.js";import"./index.4f671a8f.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.1e71e2c3.js";import"./isEqual.94d7e3f1.js";import"./get.6c6b3b70.js";import"./_baseProperty.74f89655.js";import"./toInteger.21546c11.js";import"./index.cb20b585.js";import"./index.494e72e5.js";import"./SearchOutlined.a93e9aae.js";import"./EyeOutlined.130c8cb5.js";import"./index.90fc573b.js";import"./CheckOutlined.6bb30d20.js";import"./DownOutlined.a59d2fde.js";import"./index.aa9be573.js";import"./index.58977232.js";import"./UpOutlined.9735db66.js";import"./index.a57a6140.js";import"./RightOutlined.1faa1ecd.js";import"./RedoOutlined.2cd6e2eb.js";import"./index.f4c95b5e.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./Tree.02654ca3.js";import"./util.902f1384.js";/* empty css              */import"./uuid.45f6123b.js";import"./index.c4ffc6c4.js";import"./DeleteOutlined.dc4a535b.js";import"./index.9771aec7.js";import"./useModal.538b6089.js";import"./useTimeout.08ad4008.js";import"./useWindowSizeFn.7797aaeb.js";import"./FullscreenOutlined.daee38c6.js";import"./index.a27549be.js";import"./Dropdown.ab10fee4.js";import"./index.89f7f6ec.js";import"./LeftOutlined.47a393ed.js";import"./download.52a08c7b.js";import"./domUtils.48cba439.js";import"./_stringToArray.eb374306.js";import"./index.4f4de632.js";import"./useScrollTo.b85e0852.js";import"./index.6a411233.js";import"./index.805c9db8.js";import"./usePageContext.ebe5abbf.js";import"./transButton.2f25a83f.js";import"./ArrowLeftOutlined.85d62d21.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],m=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:o=>{e.f2=o.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:o}=e;await o()}})}];var f=t({components:{BasicForm:e,CollapseContainer:i,PageWrapper:l},setup(){const[e,{setProps:i,updateSchema:l,appendSchemaByField:t,removeSchemaByFiled:s}]=o({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[a]=o({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:e,register1:a,schemas:c,setProps:i,changeLabel3:function(){l({field:"field3",label:"字段3 New"})},changeLabel34:function(){l([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){t({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){s("field11")}}}});const b={class:"mb-4"},u=d(" 更改字段3label "),j=d(" 同时更改字段3,4label "),h=d(" 往字段3后面插入字段10 "),P=d(" 删除字段11 ");f.render=function(e,o,i,l,t,d){const c=s("a-button"),m=s("BasicForm"),f=s("CollapseContainer"),g=s("PageWrapper");return a(),n(g,{title:"动态表单示例"},{default:r((()=>[p("div",b,[p(c,{onClick:e.changeLabel3,class:"mr-2"},{default:r((()=>[u])),_:1},8,["onClick"]),p(c,{onClick:e.changeLabel34,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),p(c,{onClick:e.appendField,class:"mr-2"},{default:r((()=>[h])),_:1},8,["onClick"]),p(c,{onClick:e.deleteField,class:"mr-2"},{default:r((()=>[P])),_:1},8,["onClick"])]),p(f,{title:"动态表单示例,动态根据表单内其他值改变"},{default:r((()=>[p(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(f,{class:"mt-5",title:"componentProps动态改变"},{default:r((()=>[p(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default f;
