var e=Object.assign;import{d as t,r as i,a as o,aE as r,co as s,cp as n,h as p,o as a,i as d,bw as m,j as c,a3 as j,b8 as l,k as f}from"./index.3f7fdb45.js";import{S as u}from"./index.9aa83a7a.js";import b from"./Step1.84ab6802.js";import x from"./Step2.34e27531.js";import S from"./Step3.dc2dd1ce.js";import{_ as v}from"./index.2532869c.js";import"./vendor.3b1829c7.js";import"./CheckOutlined.6bb30d20.js";import"./index.90fc573b.js";import"./SearchOutlined.a93e9aae.js";import"./DownOutlined.a59d2fde.js";import"./index.494e72e5.js";import"./EyeOutlined.130c8cb5.js";import"./index.a27549be.js";import"./BasicForm.858ad571.js";import"./index.c52c2d04.js";import"./index.4f671a8f.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.1e71e2c3.js";import"./isEqual.94d7e3f1.js";import"./get.6c6b3b70.js";import"./_baseProperty.74f89655.js";import"./toInteger.21546c11.js";import"./index.cb20b585.js";import"./index.aa9be573.js";import"./index.58977232.js";import"./UpOutlined.9735db66.js";import"./index.a57a6140.js";import"./RightOutlined.1faa1ecd.js";import"./RedoOutlined.2cd6e2eb.js";import"./index.f4c95b5e.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./Tree.02654ca3.js";import"./util.902f1384.js";/* empty css              */import"./uuid.45f6123b.js";import"./index.c4ffc6c4.js";import"./DeleteOutlined.dc4a535b.js";import"./index.9771aec7.js";import"./useModal.538b6089.js";import"./useTimeout.08ad4008.js";import"./useWindowSizeFn.7797aaeb.js";import"./ScrollContainer.7f6d6fc9.js";import"./index.4f4de632.js";import"./domUtils.48cba439.js";import"./_stringToArray.eb374306.js";import"./useScrollTo.b85e0852.js";import"./FullscreenOutlined.daee38c6.js";import"./Dropdown.ab10fee4.js";import"./index.89f7f6ec.js";import"./LeftOutlined.47a393ed.js";import"./download.52a08c7b.js";import"./useForm.c2067435.js";import"./data.2505cb7f.js";import"./index.746ba003.js";import"./index.96a635ee.js";import"./index.6a411233.js";import"./index.805c9db8.js";import"./usePageContext.ebe5abbf.js";import"./transButton.2f25a83f.js";import"./ArrowLeftOutlined.85d62d21.js";var O=t({components:{Step1:b,Step2:x,Step3:S,PageWrapper:v,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=i(0),s=o({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},r(s))}});const h=m("data-v-53523f72");s("data-v-53523f72");const g={class:"step-form-form"},N={class:"mt-5"};n();const P=h(((e,t,i,o,r,s)=>{const n=p("a-step"),m=p("a-steps"),u=p("Step1"),b=p("Step2"),x=p("Step3"),S=p("PageWrapper");return a(),d(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:h((()=>[c("div",g,[c(m,{current:e.current},{default:h((()=>[c(n,{title:"填写转账信息"}),c(n,{title:"确认转账信息"}),c(n,{title:"完成"})])),_:1},8,["current"])]),c("div",N,[j(c(u,{onNext:e.handleStep1Next},null,8,["onNext"]),[[l,0===e.current]]),e.initSetp2?j((a(),d(b,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[l,1===e.current]]):f("",!0),e.initSetp3?j((a(),d(x,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[l,2===e.current]]):f("",!0)])])),_:1})}));O.render=P,O.__scopeId="data-v-53523f72";export default O;
