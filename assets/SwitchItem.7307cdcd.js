import{d as e,aK as t,u as i,K as a,h as s,o as n,i as d,j as o,l as r,a7 as l,bw as p}from"./index.e46d734f.js";import{S as m}from"./index.5e1a80e1.js";import{b as f}from"./index.9a5c8af8.js";import"./vendor.3b1829c7.js";import"./index.af51f3e7.js";import"./index.a9719a1a.js";import"./index.f2d9a85b.js";import"./index.b36e0ab3.js";import"./index.4265baa2.js";import"./domUtils.921b9181.js";import"./_stringToArray.a38654a8.js";import"./RightOutlined.099e922a.js";/* empty css              */import"./useTimeout.d5fb9408.js";import"./useScrollTo.274a582f.js";import"./animation.bb63f45a.js";import"./ArrowLeftOutlined.31edc909.js";import"./useAttrs.627f9fc4.js";import"./isEqual.0eac6397.js";import"./useHeaderSetting.d2f1dd6d.js";import"./SettingOutlined.23a28140.js";var c=e({name:"SwitchItem",components:{Switch:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:s}=t("setting-switch-item"),{t:n}=i();return{prefixCls:s,t:n,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:a((()=>e.def?{checked:e.def}:{}))}}});const u=p("data-v-3a858942")(((e,t,i,a,p,m)=>{const f=s("Switch");return n(),d("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(f,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));c.render=u,c.__scopeId="data-v-3a858942";export default c;
