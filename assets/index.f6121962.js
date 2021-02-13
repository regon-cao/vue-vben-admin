import{d as e,h as r,o,i,w as t,j as s,m as a}from"./index.3f7fdb45.js";import{A as n}from"./index.9771aec7.js";import{u as p}from"./useDrawer.c35e112b.js";import m from"./Drawer1.2889a77c.js";import d from"./Drawer2.d777f300.js";import c from"./Drawer3.db2be14b.js";import j from"./Drawer4.857648d8.js";import l from"./Drawer5.403f7c98.js";import{_ as f}from"./index.2532869c.js";import"./vendor.3b1829c7.js";import"./index.733e7f05.js";import"./ScrollContainer.7f6d6fc9.js";import"./index.4f4de632.js";import"./domUtils.48cba439.js";import"./_stringToArray.eb374306.js";import"./RightOutlined.1faa1ecd.js";/* empty css              */import"./useTimeout.08ad4008.js";import"./useScrollTo.b85e0852.js";import"./ArrowLeftOutlined.85d62d21.js";import"./isEqual.94d7e3f1.js";import"./BasicForm.858ad571.js";import"./index.c52c2d04.js";import"./index.4f671a8f.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.1e71e2c3.js";import"./get.6c6b3b70.js";import"./_baseProperty.74f89655.js";import"./toInteger.21546c11.js";import"./index.cb20b585.js";import"./index.494e72e5.js";import"./SearchOutlined.a93e9aae.js";import"./EyeOutlined.130c8cb5.js";import"./index.90fc573b.js";import"./CheckOutlined.6bb30d20.js";import"./DownOutlined.a59d2fde.js";import"./index.aa9be573.js";import"./index.58977232.js";import"./UpOutlined.9735db66.js";import"./index.a57a6140.js";import"./RedoOutlined.2cd6e2eb.js";import"./index.f4c95b5e.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./Tree.02654ca3.js";import"./util.902f1384.js";import"./uuid.45f6123b.js";import"./index.c4ffc6c4.js";import"./DeleteOutlined.dc4a535b.js";import"./useModal.538b6089.js";import"./useWindowSizeFn.7797aaeb.js";import"./FullscreenOutlined.daee38c6.js";import"./index.a27549be.js";import"./Dropdown.ab10fee4.js";import"./index.89f7f6ec.js";import"./LeftOutlined.47a393ed.js";import"./download.52a08c7b.js";import"./useForm.c2067435.js";import"./index.6a411233.js";import"./index.805c9db8.js";import"./usePageContext.ebe5abbf.js";import"./transButton.2f25a83f.js";var w=e({components:{Alert:n,PageWrapper:f,Drawer1:m,Drawer2:d,Drawer3:c,Drawer4:j,Drawer5:l},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[i,{openDrawer:t}]=p(),[s,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:i,openDrawer2:t,register3:s,openDrawer3:a,register4:n,register5:d,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const u=a(" 打开Drawer "),D=a(" 打开Drawer "),b=a(" 打开Drawer "),g=a(" 打开Drawer并传递数据 "),x=a(" 打开详情Drawer ");w.render=function(e,a,n,p,m,d){const c=r("Alert"),j=r("a-button"),l=r("Drawer1"),f=r("Drawer2"),w=r("Drawer3"),y=r("Drawer4"),O=r("Drawer5"),R=r("PageWrapper");return o(),i(R,{title:"抽屉组件使用示例"},{default:t((()=>[s(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[u])),_:1},8,["onClick"]),s(c,{message:"内外同时控制显示隐藏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:t((()=>[D])),_:1}),s(c,{message:"自适应高度/显示footer","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:t((()=>[b])),_:1}),s(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[g])),_:1},8,["onClick"]),s(c,{message:"详情页模式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),s(l,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(w,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"]),s(O,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default w;
