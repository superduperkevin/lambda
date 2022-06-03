"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3183],{30964:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});const i={props:["model","rule","label","meta"],data:function(){return{preSource:[],modal_grid_show:!1,user_condition:null,selectedRow:{}}},computed:{value:function(){return this.model.form[this.model.component]}},watch:{value:function(t,e){null!==this.value&&0!==this.value&&""!==this.value||(this.selectedRow={}),t&&!e&&0==Object.keys(this.selectedRow).length&&this.callRowData()}},mounted:function(){void 0!==this.meta.GSOption.sourceGridUserCondition&&null!==this.meta.GSOption.sourceGridUserCondition&&""!=this.meta.GSOption.sourceGridUserCondition&&(this.user_condition=JSON.parse(this.meta.GSOption.sourceGridUserCondition))},methods:{callRowData:function(){var t=this,e={};e[this.meta.GSOption.sourceGridValueField]=this.value,axios.post("".concat(this.sourceGridUrl(),"/lambda/puzzle/grid/data/").concat(this.meta.GSOption.sourceGridID,"?&paginate=1&page=1&sort=id&order=desc"),e).then((function(e){var o=e.data;o.data.length>=1&&(t.selectedRow=o.data[0])}))},onRowSelect:function(t){this.preSource=t},sourceGridUrl:function(){var t=this;if(window.init.microserviceSettings){var e=window.init.microserviceSettings.findIndex((function(e){return e.project_id==t.meta.GSOption.sourceMicroserviceID}));return e>=0?window.init.microserviceSettings[e].production_url:""}return""},showAddSourceModal:function(){this.modal_grid_show=!0,this.$modal.show("grid-modal-".concat(this.meta.GSOption.sourceGridID))},closeSourceModal:function(){this.modal_grid_show=!1,this.$modal.hide("grid-modal-".concat(this.meta.GSOption.sourceGridID))},addFromPreSource:function(){this.selectedRow={},this.preSource&&this.meta.GSOption.sourceGridTargetColumns&&this.preSource.length>=1&&(this.selectedRow=this.preSource[0],this.model.form[this.model.component]=this.selectedRow[this.meta.GSOption.sourceGridValueField]),this.closeSourceModal()}}};const s=(0,o(51900).Z)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"subform-grid"},[o("FormItem",{attrs:{label:t.label,prop:t.rule}},[o("div",{staticClass:"subform-header"},[t._v("\n            "+t._s(t.meta.GSOption.sourceGridModalTitle)+"\n\n        ")]),t._v(" "),o("table",{attrs:{border:"1"}},[o("thead",[o("tr",[t._l(t.meta.GSOption.sourceGridTargetColumns,(function(e){return o("th",{key:e.index},[t._v("\n                    "+t._s(e.label)+"\n                ")])})),t._v(" "),o("th",{staticClass:"action"},[t._v("...")])],2)]),t._v(" "),o("tbody",[o("tr",[t._l(t.meta.GSOption.sourceGridTargetColumns,(function(e){return o("td",{key:e.index},[t._v("\n                    "+t._s(t.selectedRow[e.model])+"\n                ")])})),t._v(" "),o("td",{staticClass:"action"},[t.meta.disabled?t._e():o("a",{attrs:{href:"javascript:void(0);"},on:{click:t.showAddSourceModal}},[o("Icon",{attrs:{type:"md-search"}})],1)])],2)])])]),t._v(" "),o("paper-modal",{staticClass:"form-modal",attrs:{name:"grid-modal-"+t.meta.GSOption.sourceGridID,"min-width":200,"min-height":100,"pivot-y":.5,adaptive:!0,reset:!0,draggable:!0,resizable:!0,draggable:".form-tool",width:"800",height:"70%"}},[o("section",{staticClass:"form-modal source-grid"},[o("div",{staticClass:"form-tool "},[o("h4",[t._v(t._s(t.meta.GSOption.sourceGridModalTitle))]),t._v(" "),o("div",{staticClass:"form-tool-actions"},[o("a",{attrs:{href:"javascript:void(0)"},on:{click:t.closeSourceModal}},[o("i",{staticClass:"ti-close"})])])]),t._v(" "),t.modal_grid_show?o("div",{staticClass:"form-body"},[t.meta.GSOption.sourceGridTitle&&t.meta.GSOption.sourceGridDescription?o("div",{staticClass:"source-grid-description"},[o("h3",[t._v("\n                        "+t._s(t.meta.GSOption.sourceGridTitle)+"\n                    ")]),t._v(" "),o("p",{domProps:{innerHTML:t._s(t.meta.GSOption.sourceGridDescription)}})]):t._e(),t._v(" "),o("datagrid",{attrs:{schemaID:t.meta.GSOption.sourceGridID,url:t.sourceGridUrl(),onRowSelect:t.onRowSelect,paginate:50,hasSelection:!0,gridSelector:!0,user_condition:t.user_condition,permissions:{c:!1,r:!0,u:!1,d:!1}}}),t._v(" "),o("div",{staticClass:"add-from-pre-source"},[o("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"success",size:"small",disabled:0==t.preSource.length,icon:"md-add"},on:{click:t.addFromPreSource}},[t._v("Сонгох")])],1)],1):t._e()])])],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-GridSelector.9d7cb101522d1314.js.map