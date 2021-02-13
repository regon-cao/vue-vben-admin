import{_ as e}from"./BasicForm.858ad571.js";import{u as s}from"./useForm.c2067435.js";import{a as o}from"./ScrollContainer.7f6d6fc9.js";import{d as t,g as i,h as l,o as r,i as a,w as n,j as p,m as c}from"./index.3f7fdb45.js";import{_ as d}from"./index.2532869c.js";import"./index.c52c2d04.js";import"./index.4f671a8f.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.1e71e2c3.js";import"./isEqual.94d7e3f1.js";import"./get.6c6b3b70.js";import"./_baseProperty.74f89655.js";import"./toInteger.21546c11.js";import"./index.cb20b585.js";import"./index.494e72e5.js";import"./SearchOutlined.a93e9aae.js";import"./EyeOutlined.130c8cb5.js";import"./index.90fc573b.js";import"./CheckOutlined.6bb30d20.js";import"./DownOutlined.a59d2fde.js";import"./index.aa9be573.js";import"./index.58977232.js";import"./UpOutlined.9735db66.js";import"./index.a57a6140.js";import"./RightOutlined.1faa1ecd.js";import"./RedoOutlined.2cd6e2eb.js";import"./index.f4c95b5e.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./Tree.02654ca3.js";import"./util.902f1384.js";/* empty css              */import"./uuid.45f6123b.js";import"./index.c4ffc6c4.js";import"./DeleteOutlined.dc4a535b.js";import"./index.9771aec7.js";import"./useModal.538b6089.js";import"./useTimeout.08ad4008.js";import"./useWindowSizeFn.7797aaeb.js";import"./FullscreenOutlined.daee38c6.js";import"./index.a27549be.js";import"./Dropdown.ab10fee4.js";import"./index.89f7f6ec.js";import"./LeftOutlined.47a393ed.js";import"./download.52a08c7b.js";import"./domUtils.48cba439.js";import"./_stringToArray.eb374306.js";import"./index.4f4de632.js";import"./useScrollTo.b85e0852.js";import"./index.6a411233.js";import"./index.805c9db8.js";import"./usePageContext.ebe5abbf.js";import"./transButton.2f25a83f.js";import"./ArrowLeftOutlined.85d62d21.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=t({components:{BasicForm:e,CollapseContainer:o,PageWrapper:d},setup(){const{createMessage:e}=i(),[o,{setProps:t}]=s({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:t}}});const f={class:"mb-4"},b=c(" 更改labelWidth "),j=c(" 还原labelWidth "),P=c(" 更改Size "),C=c(" 还原Size "),h=c(" 禁用表单 "),x=c(" 解除禁用 "),k=c(" 紧凑表单 "),_=c(" 还原正常间距 "),O=c(" 操作按钮位置 "),g={class:"mb-4"},S=c(" 隐藏操作按钮 "),v=c(" 显示操作按钮 "),w=c(" 隐藏重置按钮 "),B=c(" 显示重置按钮 "),F=c(" 隐藏查询按钮 "),W=c(" 显示查询按钮 "),y=c(" 修改重置按钮 "),R=c(" 修改查询按钮 ");u.render=function(e,s,o,t,i,c){const d=l("a-button"),m=l("BasicForm"),u=l("CollapseContainer"),z=l("PageWrapper");return r(),a(z,{title:"UseForm操作示例"},{default:n((()=>[p("div",f,[p(d,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:n((()=>[b])),_:1}),p(d,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:n((()=>[j])),_:1}),p(d,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:n((()=>[P])),_:1}),p(d,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:n((()=>[C])),_:1}),p(d,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:n((()=>[h])),_:1}),p(d,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:n((()=>[x])),_:1}),p(d,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:n((()=>[k])),_:1}),p(d,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:n((()=>[_])),_:1}),p(d,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:n((()=>[O])),_:1})]),p("div",g,[p(d,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:n((()=>[S])),_:1}),p(d,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:n((()=>[v])),_:1}),p(d,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:n((()=>[w])),_:1}),p(d,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:n((()=>[B])),_:1}),p(d,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:n((()=>[F])),_:1}),p(d,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:n((()=>[W])),_:1}),p(d,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:n((()=>[y])),_:1}),p(d,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:n((()=>[R])),_:1})]),p(u,{title:"useForm示例"},{default:n((()=>[p(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;
