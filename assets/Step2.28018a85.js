import{d as e,cp as t,cq as i,h as s,o,i as a,j as r,bw as d,m as n}from"./index.e46d734f.js";import{A as m}from"./index.676328c7.js";import{D as p}from"./index.af51f3e7.js";import{D as c}from"./index.de2533f2.js";import{_ as j}from"./index.820adc29.js";import{step2Schemas as l}from"./data.2505cb7f.js";import{u}from"./useForm.5e7347e8.js";import"./vendor.3b1829c7.js";import"./responsiveObserve.c545f1cc.js";import"./index.95c19ac3.js";import"./index.733bd6af.js";import"./findIndex.eeb99042.js";import"./isEqual.0eac6397.js";import"./get.6b734fef.js";import"./_baseProperty.74f89655.js";import"./toInteger.18755102.js";import"./index.3de65897.js";import"./index.8a33ab07.js";import"./SearchOutlined.977496ca.js";import"./EyeOutlined.00181602.js";import"./index.b6deae0b.js";import"./CheckOutlined.7d2dcaa1.js";import"./DownOutlined.cbcefe26.js";import"./index.07efe163.js";import"./colors.03e387d4.js";import"./index.bd3f3a9c.js";import"./UpOutlined.b3e8e183.js";import"./index.5e1a80e1.js";import"./RightOutlined.099e922a.js";import"./RedoOutlined.c0821a6f.js";import"./index.098da0dd.js";import"./EllipsisOutlined.8e1dac28.js";import"./types.05c3c500.js";import"./Tree.f4c30aa1.js";import"./util.3ed12536.js";import"./useAttrs.627f9fc4.js";/* empty css              */import"./uuid.5853f08e.js";import"./index.310f61f9.js";import"./DeleteOutlined.efbd4d58.js";import"./index.0bdd825c.js";import"./useTimeout.d5fb9408.js";import"./useWindowSizeFn.569b13cc.js";import"./index.b36e0ab3.js";import"./index.4265baa2.js";import"./domUtils.921b9181.js";import"./_stringToArray.a38654a8.js";import"./useScrollTo.274a582f.js";import"./animation.bb63f45a.js";import"./FullscreenOutlined.2b73dea1.js";import"./index.a8d15d07.js";import"./index.41a68892.js";import"./LeftOutlined.a86a228d.js";import"./download.20ed0539.js";var f=e({components:{BasicForm:j,[m.name]:m,[p.name]:p,[c.name]:c,[c.Item.name]:c.Item},emits:["next","prev"],setup(e,{emit:t}){const[i,{validate:s,setProps:o}]=u({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){t("prev")},submitFunc:async function(){try{const e=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),t("next",e)}),1500)}catch(e){}}});return{register:i}}});const b=d("data-v-01481d2f");t("data-v-01481d2f");const x={class:"step2"},O=n(" ant-design@alipay.com "),g=n(" test@example.com "),v=n(" Vben "),_=n(" 500元 ");i();const h=b(((e,t,i,d,n,m)=>{const p=s("a-alert"),c=s("a-descriptions-item"),j=s("a-descriptions"),l=s("a-divider"),u=s("BasicForm");return o(),a("div",x,[r(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),r(j,{column:1,class:"mt-5"},{default:b((()=>[r(c,{label:"付款账户"},{default:b((()=>[O])),_:1}),r(c,{label:"收款账户"},{default:b((()=>[g])),_:1}),r(c,{label:"收款人姓名"},{default:b((()=>[v])),_:1}),r(c,{label:"转账金额"},{default:b((()=>[_])),_:1})])),_:1}),r(l),r(u,{onRegister:e.register},null,8,["onRegister"])])}));f.render=h,f.__scopeId="data-v-01481d2f";export default f;
