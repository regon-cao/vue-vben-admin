import{d as e,cp as t,cq as i,h as s,o as a,i as o,j as r,bw as d,m as n}from"./index.e46d734f.js";import{a as p}from"./index.b6deae0b.js";import{I as m}from"./index.8a33ab07.js";import{D as l}from"./index.af51f3e7.js";import{_ as c}from"./index.820adc29.js";import{step1Schemas as u}from"./data.2505cb7f.js";import{u as j}from"./useForm.5e7347e8.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.977496ca.js";import"./CheckOutlined.7d2dcaa1.js";import"./DownOutlined.cbcefe26.js";import"./EyeOutlined.00181602.js";import"./index.95c19ac3.js";import"./index.733bd6af.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.eeb99042.js";import"./isEqual.0eac6397.js";import"./get.6b734fef.js";import"./_baseProperty.74f89655.js";import"./toInteger.18755102.js";import"./index.3de65897.js";import"./index.07efe163.js";import"./colors.03e387d4.js";import"./index.bd3f3a9c.js";import"./UpOutlined.b3e8e183.js";import"./index.5e1a80e1.js";import"./RightOutlined.099e922a.js";import"./RedoOutlined.c0821a6f.js";import"./index.098da0dd.js";import"./EllipsisOutlined.8e1dac28.js";import"./types.05c3c500.js";import"./Tree.f4c30aa1.js";import"./util.3ed12536.js";import"./useAttrs.627f9fc4.js";/* empty css              */import"./uuid.5853f08e.js";import"./index.310f61f9.js";import"./DeleteOutlined.efbd4d58.js";import"./index.676328c7.js";import"./index.0bdd825c.js";import"./useTimeout.d5fb9408.js";import"./useWindowSizeFn.569b13cc.js";import"./index.b36e0ab3.js";import"./index.4265baa2.js";import"./domUtils.921b9181.js";import"./_stringToArray.a38654a8.js";import"./useScrollTo.274a582f.js";import"./animation.bb63f45a.js";import"./FullscreenOutlined.2b73dea1.js";import"./index.a8d15d07.js";import"./index.41a68892.js";import"./LeftOutlined.a86a228d.js";import"./download.20ed0539.js";var f=e({components:{BasicForm:c,[p.name]:p,ASelectOption:p.Option,[m.name]:m,[m.Group.name]:m.Group,[l.name]:l},emits:["next"],setup(e,{emit:t}){const[i,{validate:s}]=j({labelWidth:100,schemas:u,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:i}}});const b=d("data-v-c22ef27a");t("data-v-c22ef27a");const x={class:"step1"},v={class:"step1-form"},O=n(" 支付宝 "),h=n(" 银联 "),y=r("h3",null,"说明",-1),_=r("h4",null,"转账到支付宝账户",-1),g=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),w=r("h4",null,"转账到银行卡",-1),F=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);i();const U=b(((e,t,i,d,n,p)=>{const m=s("a-select-option"),l=s("a-select"),c=s("a-input"),u=s("a-input-group"),j=s("BasicForm"),f=s("a-divider");return a(),o("div",x,[r("div",v,[r(j,{onRegister:e.register},{fac:b((({model:e,field:t})=>[r(u,{compact:""},{default:b((()=>[r(l,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:b((()=>[r(m,{value:"zfb"},{default:b((()=>[O])),_:1}),r(m,{value:"yl"},{default:b((()=>[h])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(c,{class:"pay-input",value:e[t],"onUpdate:value":i=>e[t]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(f),y,_,g,w,F])}));f.render=U,f.__scopeId="data-v-c22ef27a";export default f;
