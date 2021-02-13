import{d as e,h as t,o as i,i as r,bw as o,j as s}from"./index.3f7fdb45.js";import{D as a}from"./index.a27549be.js";import{D as d}from"./index.1e8a963b.js";import{_ as m}from"./index.322ab99c.js";import{_ as n}from"./index.2532869c.js";import{refundSchema as p,refundData as c,personSchema as j,personData as l,refundTableData as u,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.10dfbaeb.js";import{u as g}from"./useTable.47ff9243.js";import"./vendor.3b1829c7.js";import"./index.746ba003.js";import"./responsiveObserve.c545f1cc.js";import"./ScrollContainer.7f6d6fc9.js";import"./index.4f4de632.js";import"./domUtils.48cba439.js";import"./_stringToArray.eb374306.js";import"./RightOutlined.1faa1ecd.js";/* empty css              */import"./useTimeout.08ad4008.js";import"./useScrollTo.b85e0852.js";import"./get.6c6b3b70.js";import"./index.90fc573b.js";import"./SearchOutlined.a93e9aae.js";import"./CheckOutlined.6bb30d20.js";import"./DownOutlined.a59d2fde.js";import"./BasicForm.858ad571.js";import"./index.c52c2d04.js";import"./index.4f671a8f.js";import"./findIndex.1e71e2c3.js";import"./isEqual.94d7e3f1.js";import"./_baseProperty.74f89655.js";import"./toInteger.21546c11.js";import"./index.cb20b585.js";import"./index.494e72e5.js";import"./EyeOutlined.130c8cb5.js";import"./index.aa9be573.js";import"./index.58977232.js";import"./UpOutlined.9735db66.js";import"./index.a57a6140.js";import"./RedoOutlined.2cd6e2eb.js";import"./index.f4c95b5e.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./Tree.02654ca3.js";import"./util.902f1384.js";import"./uuid.45f6123b.js";import"./index.c4ffc6c4.js";import"./DeleteOutlined.dc4a535b.js";import"./index.9771aec7.js";import"./useModal.538b6089.js";import"./useWindowSizeFn.7797aaeb.js";import"./FullscreenOutlined.daee38c6.js";import"./Dropdown.ab10fee4.js";import"./index.89f7f6ec.js";import"./LeftOutlined.47a393ed.js";import"./download.52a08c7b.js";import"./index.6224d174.js";import"./DoubleLeftOutlined.02cf38cc.js";import"./DoubleRightOutlined.f3bf4c5d.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.2f25a83f.js";import"./CaretDownFilled.254ff830.js";import"./useForm.c2067435.js";import"./clickOutside.21b00bac.js";import"./useSortable.36dda93f.js";import"./SettingOutlined.5e491ce6.js";import"./useExpose.a9ad1169.js";import"./index.6a411233.js";import"./index.805c9db8.js";import"./usePageContext.ebe5abbf.js";import"./ArrowLeftOutlined.85d62d21.js";import"./index.bcb240dc.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:d,BasicTable:m,PageWrapper:n,[a.name]:a},setup(){const[e]=g({title:"退货商品",dataSource:u,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:p,refundData:c,personSchema:j,personData:l}}});const O=o("data-v-ada482fc"),D=O(((e,o,a,d,m,n)=>{const p=t("Description"),c=t("a-divider"),j=t("BasicTable"),l=t("PageWrapper");return i(),r(l,{title:"基础详情页",contentBackground:""},{default:O((()=>[s(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),s(c),s(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),s(c),s(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),s(c),s(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=D,h.__scopeId="data-v-ada482fc";export default h;
