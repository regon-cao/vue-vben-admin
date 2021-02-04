import{_ as e}from"./index.4457a399.js";import{o as t}from"./select.65ac85bb.js";import{d as i}from"./table.d36a8955.js";import{d,h as o,o as n,i as s,j as a}from"./index.e46d734f.js";import{u as r}from"./useTable.b81c9f35.js";import"./index.b6deae0b.js";import"./SearchOutlined.977496ca.js";import"./CheckOutlined.7d2dcaa1.js";import"./DownOutlined.cbcefe26.js";import"./index.820adc29.js";import"./index.95c19ac3.js";import"./index.733bd6af.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.eeb99042.js";import"./isEqual.0eac6397.js";import"./get.6b734fef.js";import"./_baseProperty.74f89655.js";import"./toInteger.18755102.js";import"./index.3de65897.js";import"./index.8a33ab07.js";import"./EyeOutlined.00181602.js";import"./index.07efe163.js";import"./colors.03e387d4.js";import"./index.bd3f3a9c.js";import"./UpOutlined.b3e8e183.js";import"./index.5e1a80e1.js";import"./RightOutlined.099e922a.js";import"./RedoOutlined.c0821a6f.js";import"./index.098da0dd.js";import"./EllipsisOutlined.8e1dac28.js";import"./types.05c3c500.js";import"./Tree.f4c30aa1.js";import"./util.3ed12536.js";import"./useAttrs.627f9fc4.js";/* empty css              */import"./uuid.5853f08e.js";import"./index.310f61f9.js";import"./DeleteOutlined.efbd4d58.js";import"./index.676328c7.js";import"./index.0bdd825c.js";import"./useTimeout.d5fb9408.js";import"./useWindowSizeFn.569b13cc.js";import"./index.b36e0ab3.js";import"./index.4265baa2.js";import"./domUtils.921b9181.js";import"./_stringToArray.a38654a8.js";import"./useScrollTo.274a582f.js";import"./animation.bb63f45a.js";import"./FullscreenOutlined.2b73dea1.js";import"./index.af51f3e7.js";import"./index.a8d15d07.js";import"./index.41a68892.js";import"./LeftOutlined.a86a228d.js";import"./download.20ed0539.js";import"./index.3a5e538f.js";import"./DoubleLeftOutlined.721ab0d8.js";import"./DoubleRightOutlined.c8fbc205.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.4718a77e.js";import"./CaretDownFilled.44955125.js";import"./clickOutside.9e792788.js";import"./useSortable.c1258733.js";import"./SettingOutlined.23a28140.js";import"./useExpose.2edf81e4.js";import"./useForm.5e7347e8.js";const p=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:t},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var m=d({components:{BasicTable:e},setup(){const[e]=r({title:"可编辑单元格示例",api:i,columns:p,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const l={class:"p-4"};m.render=function(e,t,i,d,r,p){const m=o("BasicTable");return n(),s("div",l,[a(m,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default m;
