import{_ as e}from"./index.322ab99c.js";import{o as t}from"./select.c008853d.js";import{d as i}from"./table.333f4c60.js";import{d as o,r as n,h as d,o as a,i as s,j as r,w as l}from"./index.3f7fdb45.js";import{g as m}from"./BasicForm.858ad571.js";import{u as p}from"./useTable.47ff9243.js";import"./index.90fc573b.js";import"./SearchOutlined.a93e9aae.js";import"./CheckOutlined.6bb30d20.js";import"./DownOutlined.a59d2fde.js";import"./index.c52c2d04.js";import"./index.4f671a8f.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.1e71e2c3.js";import"./isEqual.94d7e3f1.js";import"./get.6c6b3b70.js";import"./_baseProperty.74f89655.js";import"./toInteger.21546c11.js";import"./index.f4c95b5e.js";import"./RightOutlined.1faa1ecd.js";import"./EllipsisOutlined.ab00f628.js";import"./types.ff0c74be.js";import"./index.6224d174.js";import"./LeftOutlined.47a393ed.js";import"./DoubleLeftOutlined.02cf38cc.js";import"./DoubleRightOutlined.f3bf4c5d.js";import"./zh_CN.8094f4d6.js";import"./uuid.45f6123b.js";import"./index.c4ffc6c4.js";import"./util.902f1384.js";import"./DeleteOutlined.dc4a535b.js";import"./EyeOutlined.130c8cb5.js";import"./Dropdown.ab10fee4.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.2f25a83f.js";import"./CaretDownFilled.254ff830.js";import"./useForm.c2067435.js";import"./clickOutside.21b00bac.js";import"./domUtils.48cba439.js";import"./_stringToArray.eb374306.js";import"./index.494e72e5.js";import"./index.58977232.js";import"./UpOutlined.9735db66.js";import"./index.a57a6140.js";import"./useSortable.36dda93f.js";import"./useTimeout.08ad4008.js";import"./useWindowSizeFn.7797aaeb.js";import"./useModal.538b6089.js";import"./ScrollContainer.7f6d6fc9.js";import"./index.4f4de632.js";import"./useScrollTo.b85e0852.js";import"./FullscreenOutlined.daee38c6.js";import"./index.a27549be.js";import"./SettingOutlined.5e491ce6.js";import"./useExpose.a9ad1169.js";import"./index.cb20b585.js";import"./index.aa9be573.js";import"./RedoOutlined.2cd6e2eb.js";import"./Tree.02654ca3.js";import"./index.9771aec7.js";import"./index.89f7f6ec.js";import"./download.52a08c7b.js";const c=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:t},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var u=o({components:{BasicTable:e,TableAction:m},setup(){const e=n(""),[t]=p({title:"可编辑行示例",api:i,columns:c,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(t){var i;e.value=t.key,null==(i=t.onEdit)||i.call(t,!0)}function d(t){var i;e.value="",null==(i=t.onEdit)||i.call(t,!1,!1)}async function a(t){var i;await(null==(i=t.onEdit)?void 0:i.call(t,!1,!0))&&(e.value="")}return{registerTable:t,handleEdit:o,createActions:function(t,i){return t.editable?[{label:"保存",onClick:a.bind(null,t,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:d.bind(null,t,i)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==t.key,onClick:o.bind(null,t)}]}}}});const j={class:"p-4"};u.render=function(e,t,i,o,n,m){const p=d("TableAction"),c=d("BasicTable");return a(),s("div",j,[r(c,{onRegister:e.registerTable},{action:l((({record:t,column:i})=>[r(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default u;
