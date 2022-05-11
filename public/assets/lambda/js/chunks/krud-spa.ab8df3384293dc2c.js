(self.webpackChunk=self.webpackChunk||[]).push([[1923],{93940:(t,r,i)=>{"use strict";i.d(r,{H:()=>s});var e=i(74402),n=i.n(e),s=function(t,r){var i=n().apply(t,r);return Array.isArray(i)?!(i.length>=1)||!i[0]:!i}},28354:(t,r,i)=>{"use strict";i.d(r,{Z:()=>o});const e={props:["refresh","exportExcel","print","search","save","options","isExcel","isPrint","isRefresh","isSave","isSearch","exportLoading"],data:function(){return{searchModel:null}},computed:{lang:function(){var t=this,r=["_save","re_call","_print","download_file"];return r.reduce((function(i,e,n){return i[e]=t.$t("crud."+r[n]),i}),{})}},methods:{searchGrid:function(t){t.preventDefault(),this.$props.search(this.searchModel)}}};const n=(0,i(51900).Z)(e,(function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"crud-page-header-right-inside"},[i("Tooltip",{attrs:{content:t.lang._save}},[t.isSave?i("a",{staticClass:"btnLine",on:{click:t.$props.save}},[i("i",{staticClass:"ti-save"})]):t._e()]),t._v(" "),i("Tooltip",{attrs:{content:t.lang.re_call}},[t.isRefresh?i("a",{staticClass:"btnLine",on:{click:t.$props.refresh}},[i("i",{staticClass:"ti-reload"})]):t._e()]),t._v(" "),t.isPrint?i("Tooltip",{attrs:{content:t.lang._print}},[i("a",{staticClass:"btnLine",on:{click:t.$props.print}},[i("i",{staticClass:"ti-printer"})])]):t._e(),t._v(" "),t.isExcel?i("Tooltip",{attrs:{content:t.lang.download_file}},[t.$props.exportLoading?i("a",{staticClass:"btnLine",attrs:{href:"javascript:void(0)"}},[i("Spin",[i("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18"}})],1)],1):i("a",{staticClass:"btnLine",on:{click:t.$props.exportExcel}},[i("i",{staticClass:"ti-download"})])]):t._e(),t._v(" "),t.isSearch?i("form",{on:{submit:t.searchGrid}},[i("div",{staticClass:"right-search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchModel,expression:"searchModel"}],staticClass:"right-search-input",attrs:{placeholder:t.$static_words?t.$static_words.search:"Хайх..."},domProps:{value:t.searchModel},on:{input:function(r){r.target.composing||(t.searchModel=r.target.value)}}}),t._v(" "),i("i",{staticClass:"ti-search"})])]):t._e()],1)}),[],!1,null,null,null).exports;var s=i(93940);const o={props:["title","icon","main_tab_title","grid","form","projects_id","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog"],components:{krudtools:n},data:function(){return{closeByBtn:window.init.closeByBtn,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isRefresh:!1,isSave:!1,rowId:null}},computed:{hasVNavSlot:function(){return!!this.$slots["v-nav"]},hasNavSlot:function(){return!!this.$slots.nav},hasLeftSlot:function(){return!!this.$slots.left},url:function(){var t=this;if(null!==this.projects_id&&""!=this.projects_id&&null!=this.projects_id&&window.init.microserviceSettings&&window.init.microserviceSettings.length>=1){var r=window.init.microserviceSettings.findIndex((function(r){return r.project_id==t.projects_id}));if(r>=0)return window.lambda.microservice_dev?window.init.microserviceSettings[r].dev_url:window.init.microserviceSettings[r].production_url}return""}},methods:{view:function(t){this.rowId=t,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},edit:function(t,r){if((this.rowId=t,""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS)&&!(0,s.H)(this.permissions.gridEditConditionJS,r))return;this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},clone:function(t){this.$refs.form.cloneModel(t),this.templateEdit&&this.templateEdit()},quickEdit:function(t){console.log(t)},refresh:function(){this.searchModel=null,this.$refs.grid.refresh()},search:function(t){this.$refs.grid.searchData(t,1)},stopLoading:function(t){this.exportLoading=!1,t||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel:function(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print:function(){this.$refs.grid.print()},save:function(){this.$refs.grid.saveGridData()},onSuccess:function(t){void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()},onError:function(t){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()}}}},39621:(t,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>n});const e={mixins:[i(28354).Z]};const n=(0,i(51900).Z)(e,(function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("section",{staticClass:"spa"},[i("div",{staticClass:"crud-page"},[i("div",{staticClass:"crud-page-header"},[i("div",{staticClass:"crud-page-header-left"},[t.$props.icon?i("i",{class:t.icon}):t._e(),t._v(" "),t.$props.title?i("h3",[t._v(t._s(t.$props.title.replace("-"," ")))]):t._e(),t._v(" "),t._t("nav")],2),t._v(" "),i("div",{staticClass:"crud-page-header-right"},[i("div",{staticClass:"tool-options"},[t._t("tooloptions")],2),t._v(" "),i("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel,print:t.print,save:t.save,isPrint:t.isPrint,isExcel:t.isExcel,isRefresh:t.isRefresh,isSave:t.isSave}}),t._v(" "),t._t("right")],2)]),t._v(" "),i("div",{staticClass:"crud-page-body"},[t.hasVNavSlot?i("div",{staticClass:"v-nav"},[t._t("v-nav")],2):t._e(),t._v(" "),i("div",{staticClass:"dg-flex"},[i("div",{staticClass:"data-grid"},[i("datagrid",{ref:"grid",attrs:{schemaID:t.grid,hasSelection:void 0!==typeof t.$props.hasSelection&&t.$props.hasSelection,paginate:50,fnEdit:t.edit,fnQuickEdit:t.quickEdit,fnView:t.view,actions:t.$props.actions,dblClick:t.$props.dbClickAction,onRowSelect:t.$props.onRowSelect}})],1),t._v(" "),i("div",{staticClass:"data-form",style:"width: "+(t.form_width?t.form_width:600)},[i("dataform",{ref:"form",style:"width: "+(t.form_width?t.form_width:600),attrs:{schemaID:t.form,editMode:t.editMode,onSuccess:t.onSuccess,onError:t.onError}})],1)])])])])}),[],!1,null,null,null).exports},74402:function(t,r,i){var e,n;e=function(){"use strict";function t(t){for(var r=[],i=0,e=t.length;i<e;i++)-1===r.indexOf(t[i])&&r.push(t[i]);return r}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var r={},i={"==":function(t,r){return t==r},"===":function(t,r){return t===r},"!=":function(t,r){return t!=r},"!==":function(t,r){return t!==r},">":function(t,r){return t>r},">=":function(t,r){return t>=r},"<":function(t,r,i){return void 0===i?t<r:t<r&&r<i},"<=":function(t,r,i){return void 0===i?t<=r:t<=r&&r<=i},"!!":function(t){return r.truthy(t)},"!":function(t){return!r.truthy(t)},"%":function(t,r){return t%r},log:function(t){return console.log(t),t},in:function(t,r){return!(!r||void 0===r.indexOf)&&-1!==r.indexOf(t)},cat:function(){return Array.prototype.join.call(arguments,"")},substr:function(t,r,i){if(i<0){var e=String(t).substr(r);return e.substr(0,e.length+i)}return String(t).substr(r,i)},"+":function(){return Array.prototype.reduce.call(arguments,(function(t,r){return parseFloat(t,10)+parseFloat(r,10)}),0)},"*":function(){return Array.prototype.reduce.call(arguments,(function(t,r){return parseFloat(t,10)*parseFloat(r,10)}))},"-":function(t,r){return void 0===r?-t:t-r},"/":function(t,r){return t/r},min:function(){return Math.min.apply(this,arguments)},max:function(){return Math.max.apply(this,arguments)},merge:function(){return Array.prototype.reduce.call(arguments,(function(t,r){return t.concat(r)}),[])},var:function(t,r){var i=void 0===r?null:r,e=this;if(void 0===t||""===t||null===t)return e;for(var n=String(t).split("."),s=0;s<n.length;s++){if(null==e)return i;if(void 0===(e=e[n[s]]))return i}return e},missing:function(){for(var t=[],i=Array.isArray(arguments[0])?arguments[0]:arguments,e=0;e<i.length;e++){var n=i[e],s=r.apply({var:n},this);null!==s&&""!==s||t.push(n)}return t},missing_some:function(t,i){var e=r.apply({missing:i},this);return i.length-e.length>=t?[]:e}};return r.is_logic=function(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)&&1===Object.keys(t).length},r.truthy=function(t){return!(Array.isArray(t)&&0===t.length||!t)},r.get_operator=function(t){return Object.keys(t)[0]},r.get_values=function(t){return t[r.get_operator(t)]},r.apply=function(t,e){if(Array.isArray(t))return t.map((function(t){return r.apply(t,e)}));if(!r.is_logic(t))return t;var n,s,o,a,c,l=r.get_operator(t),u=t[l];if(Array.isArray(u)||(u=[u]),"if"===l||"?:"==l){for(n=0;n<u.length-1;n+=2)if(r.truthy(r.apply(u[n],e)))return r.apply(u[n+1],e);return u.length===n+1?r.apply(u[n],e):null}if("and"===l){for(n=0;n<u.length;n+=1)if(s=r.apply(u[n],e),!r.truthy(s))return s;return s}if("or"===l){for(n=0;n<u.length;n+=1)if(s=r.apply(u[n],e),r.truthy(s))return s;return s}if("filter"===l)return a=r.apply(u[0],e),o=u[1],Array.isArray(a)?a.filter((function(t){return r.truthy(r.apply(o,t))})):[];if("map"===l)return a=r.apply(u[0],e),o=u[1],Array.isArray(a)?a.map((function(t){return r.apply(o,t)})):[];if("reduce"===l)return a=r.apply(u[0],e),o=u[1],c=void 0!==u[2]?u[2]:null,Array.isArray(a)?a.reduce((function(t,i){return r.apply(o,{current:i,accumulator:t})}),c):c;if("all"===l){if(a=r.apply(u[0],e),o=u[1],!Array.isArray(a)||!a.length)return!1;for(n=0;n<a.length;n+=1)if(!r.truthy(r.apply(o,a[n])))return!1;return!0}if("none"===l){if(a=r.apply(u[0],e),o=u[1],!Array.isArray(a)||!a.length)return!0;for(n=0;n<a.length;n+=1)if(r.truthy(r.apply(o,a[n])))return!1;return!0}if("some"===l){if(a=r.apply(u[0],e),o=u[1],!Array.isArray(a)||!a.length)return!1;for(n=0;n<a.length;n+=1)if(r.truthy(r.apply(o,a[n])))return!0;return!1}if(u=u.map((function(t){return r.apply(t,e)})),i.hasOwnProperty(l)&&"function"==typeof i[l])return i[l].apply(e,u);if(l.indexOf(".")>0){var p=String(l).split("."),d=i;for(n=0;n<p.length;n++){if(!d.hasOwnProperty(p[n]))throw new Error("Unrecognized operation "+l+" (failed at "+p.slice(0,n+1).join(".")+")");d=d[p[n]]}return d.apply(e,u)}throw new Error("Unrecognized operation "+l)},r.uses_data=function(i){var e=[];if(r.is_logic(i)){var n=r.get_operator(i),s=i[n];Array.isArray(s)||(s=[s]),"var"===n?e.push(s[0]):s.forEach((function(t){e.push.apply(e,r.uses_data(t))}))}return t(e)},r.add_operation=function(t,r){i[t]=r},r.rm_operation=function(t){delete i[t]},r.rule_like=function(t,i){if(i===t)return!0;if("@"===i)return!0;if("number"===i)return"number"==typeof t;if("string"===i)return"string"==typeof t;if("array"===i)return Array.isArray(t)&&!r.is_logic(t);if(r.is_logic(i)){if(r.is_logic(t)){var e=r.get_operator(i),n=r.get_operator(t);if("@"===e||e===n)return r.rule_like(r.get_values(t,!1),r.get_values(i,!1))}return!1}if(Array.isArray(i)){if(Array.isArray(t)){if(i.length!==t.length)return!1;for(var s=0;s<i.length;s+=1)if(!r.rule_like(t[s],i[s]))return!1;return!0}return!1}return!1},r},void 0===(n="function"==typeof e?e.call(r,i,r,t):e)||(t.exports=n)}}]);
//# sourceMappingURL=krud-spa.ab8df3384293dc2c.js.map