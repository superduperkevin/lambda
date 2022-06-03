"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2405],{23759:(t,e,o)=>{o.d(e,{Z:()=>r});const r={data:function(){return{preSource:[],modal_grid_show:!1,user_condition:null}},mounted:function(){void 0!==this.form.sourceGridUserCondition&&null!==this.form.sourceGridUserCondition&&""!=this.form.sourceGridUserCondition&&(this.user_condition=JSON.parse(this.form.sourceGridUserCondition))},methods:{showAddSourceModal:function(){this.modal_grid_show=!0,this.$modal.show("grid-modal-".concat(this.form.sourceGridID))},closeSourceModal:function(){this.modal_grid_show=!1,this.$modal.hide("grid-modal-".concat(this.form.sourceGridID))},addFromPreSource:function(){var t=this;this.preSource&&this.form.sourceGridTargetColumns&&this.preSource.forEach((function(e){t.createDataFromSource(e)})),this.closeSourceModal()},createDataFromSource:function(t){var e=this,o=_.cloneDeep(this.form),r={};o.schema.forEach((function(t){o.identity!=t.model&&null!=t.formType&&(!o.timestamp||"created_at"!=t.model&&t.model)})),this.form.sourceGridTargetColumns.forEach((function(e){Vue.set(r,e.selfColumn,t[e.sourceColumn])}));var i={form:o,model:r};if(null==this.model.form[this.model.component]&&(this.model.form[this.model.component]=[]),""!==this.form.sourceUniqueField&&void 0!==this.form.sourceUniqueField&&null!==this.form.sourceUniqueField){var a=this.model.form[this.model.component].findIndex((function(t){return t[e.form.sourceUniqueField]===r[e.form.sourceUniqueField]}));if(-1!==a)return}this.model.form[this.model.component].push(r),this.listData.push(i),this.rowLength=this.model.form[this.model.component].length},onRowSelect:function(t){this.preSource=t},sourceGridUrl:function(){var t=this;if(window.init.microserviceSettings){var e=window.init.microserviceSettings.findIndex((function(e){return e.project_id==t.form.sourceMicroserviceID}));return e>=0?window.init.microserviceSettings[e].production_url:""}return""}}}},30656:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});var r=o(67130),i=o(15869);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}const n={props:["form","model","editMode","relations","formula"],mixins:[o(23759).Z],components:{"grid-form":i.Z},mounted:function(){this.equationRenderer()},computed:{lang:function(){var t=this,e=["pleaseCompleteFirstLine"];return e.reduce((function(o,r,i){return o[r]=t.$t("dataForm."+e[i]),o}),{})},subStyle:function(){return this.form.min_height?{minHeight:this.form.min_height+"px",background:"#f3f4f5"}:void 0},Lang:function(){var t=this,e=["add"];return e.reduce((function(o,r,i){return o[r]=t.$t("dataForm."+e[i]),o}),{})}},watch:{listData:{handler:function(t,e){this.hasEq&&this.equationData.map((function(e){if(e.hasEquation){e.data=-1;var o=0;switch(e.equation){case"SUM":e.data=0,t.map((function(t){e.data+=Number(isNaN(parseInt(t.model[e.model],10))?0:t.model[e.model])}));break;case"COUNT":e.data=0,t.map((function(t){e.data+=Number(1)}));break;case"MIN":t.map((function(t){-1==e.data?e.data=t.model[e.model]:e.data=Math.min(e.data,t.model[e.model])}));break;case"MAX":e.data=0,t.map((function(t){e.data=Math.max(e.data,t.model[e.model])}));break;case"AVG":e.data=0,t.map((function(t){o++,e.data+=Number(t.model[e.model])})),e.data=Number(e.data/o)}}}))},deep:!0}},data:function(){return{listData:[],equationData:[],currentSortDir:"asc",hasEq:!1,rowLength:0}},methods:{element:r.b,checkAddable:function(){var t=this;return new Promise((function(e,o){var r=t.listData[t.listData.length-1];if(r){var i=!1,n=r.model;for(var s in n)null!=a(n[s])&&null!=n[s]&&""!=n[s]&&0!=n[s]&&(i=!0);i?e(!0):(alert(t.lang.pleaseCompleteFirstLine),o(!1))}else e(!0)}))},addSubForm:function(){var t=_.cloneDeep(this.form),e={};t.schema.forEach((function(o){t.identity!=o.model&&null!=o.formType&&(!t.timestamp||"created_at"!=o.model&&"updated_at"!=o.model)&&Vue.set(e,o.model,o.default)}));var o={form:t,model:e};null==this.model.form[this.model.component]&&(this.model.form[this.model.component]=[]),this.model.form[this.model.component].push(e),this.listData.push(o),this.rowLength=this.model.form[this.model.component].length},add:function(){var t=this;this.form.addFromGrid&&this.form.sourceGridID?this.showAddSourceModal():this.checkAddable().then((function(e){setTimeout((function(){t.addSubForm()}),200)})).catch((function(t){console.log(t)}))},fillData:function(){var t=this;this.listData=[],setTimeout((function(){t.listData=[],t.model.form[t.model.component].forEach((function(e){var o={form:_.cloneDeep(t.form),model:e};t.listData.push(o)}))}),100)},equationRenderer:function(){var t=this;this.equationData=[],this.form.schema.map((function(e){""==e.label||e.hidden||(e.hasEquation&&(t.hasEq=!0),t.equationData.push({hasEquation:e.hasEquation,equation:e.equations,prefix:e.prefix,model:e.model,preStaticWord:e.preStaticWord,data:0}))}))},remove:function(t){this.model.form[this.form.model].splice(t,1),this.listData.splice(t,1),this.rowLength=this.model.form[this.model.component].length},reset:function(){this.model.form[this.form.model]=[],this.listData=[]},sort:function(t){var e=this,o=1;this.currentSortDir="asc"===this.currentSortDir?"desc":"asc",this.currentSort="desc"===this.currentSortDir?-1:1,this.currentSort=t.model,this.listData.sort((function(t,r){return"desc"===e.currentSortDir&&(o=-1),t.model[e.currentSort]<r.model[e.currentSort]?-1*o:t.model[e.currentSort]>r.model[e.currentSort]?1*o:0}))}}};const s=(0,o(51900).Z)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"subform-grid",style:t.subStyle},[o("h3",{staticStyle:{display:"none"}},[t._v(t._s(t.rowLength))]),t._v(" "),t.form.min_height||t.form.disableCreate?t._e():o("div",{staticClass:"subform-header"},[t._v("\n        "+t._s(t.form.name)+"\n        "),o("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"success",size:"small",icon:"md-add"},on:{click:t.add}})],1),t._v(" "),o("table",{attrs:{border:"1"}},[o("thead",[o("tr",[t.form.showRowNumber?o("th",{staticClass:"row-number"},[t._v("ДД")]):t._e(),t._v(" "),t._l(t.form.schema,(function(e){return""==e.label||e.hidden?t._e():o("th",{key:e.index,on:{click:function(o){return t.sort(e)}}},[t._v("\n                "+t._s(e.label)+" "),o("i",{staticClass:"ti-exchange-vertical"})])})),t._v(" "),t.form.disableDelete?t._e():o("th",{staticClass:"action"},[t._v("...")])],2)]),t._v(" "),o("tbody",t._l(t.listData,(function(e,r){return o("grid-form",{key:r,attrs:{f:e.form,model:e.model,editMode:t.editMode,relations:t.relations,schema:t.form.schema,formula:t.formula}},[t.form.disableDelete?t._e():o("template",{slot:"action"},[o("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.remove(r)}}},[o("Icon",{attrs:{type:"ios-trash"}})],1)]),t._v(" "),t.form.showRowNumber?o("template",{slot:"rowNumber"},[o("span",[t._v(t._s(r+1))])]):t._e()],2)})),1),t._v(" "),t.hasEq?o("tfoot",[o("tr",[t._l(t.equationData,(function(e,r){return o("td",{key:r},[null!=e.preStaticWord&&""!=e.preStaticWord?o("span",[t._v(" "+t._s(e.preStaticWord)+" ")]):t._e(),t._v(" "),e.hasEquation?o("span",[t._v(t._s(e.data.toLocaleString()))]):t._e(),t._v(" "),null!=e.prefix&&""!=e.prefix?o("span",[t._v(" "+t._s(e.prefix))]):t._e()])})),t._v(" "),o("td")],2)]):t._e()]),t._v(" "),t.form.min_height&&!t.form.disableCreate?o("a",{staticClass:"sub-grid-add",attrs:{href:"javascript:void(0)"},on:{click:t.add}},[o("Icon",{attrs:{type:"plus"}}),t._v("\n        "+t._s(t.lang.add)+"\n    ")],1):t._e(),t._v(" "),o("paper-modal",{staticClass:"form-modal",attrs:{name:"grid-modal-"+t.form.sourceGridID,"min-width":200,"min-height":100,"pivot-y":.5,adaptive:!0,reset:!0,draggable:!0,resizable:!0,draggable:".form-tool",width:"800",height:"70%"}},[o("section",{staticClass:"form-modal source-grid"},[o("div",{staticClass:"form-tool "},[o("h4",[t._v(t._s(t.form.sourceGridModalTitle))]),t._v(" "),o("div",{staticClass:"form-tool-actions"},[o("a",{attrs:{href:"javascript:void(0)"},on:{click:t.closeSourceModal}},[o("i",{staticClass:"ti-close"})])])]),t._v(" "),t.modal_grid_show?o("div",{staticClass:"form-body"},[t.form.sourceGridTitle&&t.form.sourceGridDescription?o("div",{staticClass:"source-grid-description"},[o("h3",[t._v("\n                        "+t._s(t.form.sourceGridTitle)+"\n                    ")]),t._v(" "),o("p",{domProps:{innerHTML:t._s(t.form.sourceGridDescription)}})]):t._e(),t._v(" "),o("datagrid",{attrs:{schemaID:t.form.sourceGridID,url:t.sourceGridUrl(),onRowSelect:t.onRowSelect,paginate:50,hasSelection:!0,user_condition:t.user_condition,permissions:{c:!1,r:!0,u:!1,d:!1}}}),t._v(" "),o("div",{staticClass:"add-from-pre-source"},[o("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"success",size:"small",disabled:0==t.preSource.length,icon:"md-add"},on:{click:t.addFromPreSource}},[t._v("Сонгох")])],1)],1):t._e()])])],1)}),[],!1,null,null,null).exports},15869:(t,e,o)=>{o.d(e,{Z:()=>s});var r=o(67130),i=(o(65821),o(10233)),a=o(15779);const n={props:["f","model","editMode","relations","formula","schema"],created:function(){var t=this;this.f.data={},this.f.schema.forEach((function(e){t.f.identity!=e.model&&null!=e.formType&&(!t.f.timestamp||"created_at"!=e.model&&"updated_at"!=e.model)&&(t.editMode?t.setModel(e.model,t.model[e.model],e.formType):t.setModel(e.model,e.default,e.formType),t.$watch("model."+e.model,{handler:function(o,r){t.afterChange(e.model,o,r)},deep:!0}))}))},methods:{isShowAble:function(t){if(this.schema){var e=this.schema.findIndex((function(e){return e.model==t}));return e>=0&&!this.schema[e].hidden}return!0},element:r.b,setModel:function(t,e,o){switch(o){case"Switch":"true"!=e&&1!=e||!0,this.model[t]=r,this.f.data[t]=r;break;case"Checkbox":var r=0;"true"!=e&&1!=e||(r=1),this.model[t]=r,this.f.data[t]=r;break;default:this.f.data[t]=e}},setMeta:function(t){return delete t.table,delete t.rules,delete t.label,delete t.span,delete t.default,t},getSchemaIndex:function(t){return this.f.schema.findIndex((function(e){return e.model==t}))},afterChange:function(t,e,o){(0,i.BS)(t,e,this.model,this.f.schema,this.$refs,this.$Notice),(0,i.x4)(this.formula,t,this.model,this.f.schema,this.f.rule,this.f.model)},getSchemaRelationByModel:function(t){var e=this.f.schema.findIndex((function(e){return e.model==t}));return e>=0?(0,a.gN)(this.f.schema[e],this.relations):null},getRelation:function(t){return(0,a.gN)(t,this.relations)}}};const s=(0,o(51900).Z)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[t.f.showRowNumber?o("td",{staticClass:"row-number"},[t._t("rowNumber")],2):t._e(),t._v(" "),t._l(t.f.schema,(function(e){return void 0!==e.formType&&null!==e.formType&&e.model&&t.isShowAble(e.model)&&e.model!=t.f.identity&&e.model!=t.f.parent&&"updated_at"!=e.model&&"created_at"!=e.model?o("td",{key:e.index},[t.model?o(t.element(e.formType),{tag:"component",attrs:{model:{form:t.model,component:e.model},size:"small",label:e.label?e.label:"["+e.model+"]",meta:t.setMeta(e),getSchemaRelationByModel:t.getSchemaRelationByModel,relation_data:t.getRelation(e)}}):t._e()],1):t._e()})),t._v(" "),o("td",{staticClass:"action"},[t._t("action")],2)],2)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-sub-form-grid.7f8abba4a7974b5a.js.map