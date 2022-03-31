"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4036],{76119:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var a=l(93015);const o={props:["model","rule","label","meta","disabled","relation_data","do_render","showInformationModal"],computed:{lang(){const e=["dataNotFound"];return e.reduce(((t,l,a)=>(t[l]=this.$t("dataForm."+e[a]),t)),{})},options(){return(0,a.JY)(this.meta)&&(0,a.JY)(this.meta.options)&&this.meta.options.length>=1?this.searchval?this.filterOption(this.meta.options).filter((e=>e.label.toLowerCase().includes(this.searchval.toLowerCase()))):this.filterOption(this.meta.options):this.searchval?this.filterOption(this.relation_data).filter((e=>e.label.toLowerCase().includes(this.searchval.toLowerCase()))):this.filterOption(this.relation_data)}},data:()=>({value:null,ignoreChange:!1,addAble:!1,clearAble:!1,modal_show:!1,searchval:null}),methods:{isValid:a.JY,filterOption(e){if(e){if(this.$props.meta.relation.parentFieldOfForm){if(this.$props.model.form[this.$props.meta.relation.parentFieldOfForm]){let t=e.filter((e=>e.parent_value==this.$props.model.form[this.$props.meta.relation.parentFieldOfForm]));return this.initialValue(t),t}return e||[]}return this.initialValue(e),e||[]}return[]},searchChange(e){this.searchval=e},initialValue(e){if(!this.ignoreChange)if(this.model.form[this.model.component])if(1==this.meta.relation.multiple){let t=this.model.form[this.model.component].toString().split(","),l=e.filter((e=>t.includes(e.value.toString())));l.length>=1&&(this.value=l)}else{let t=e.filter((e=>e.value==this.model.form[this.model.component]));this.value=t.length>=1?t[0]:null}else this.value=null},showAddModal(){this.modal_show=!0},clearState(){this.value=null,this.clearAble=!1,Vue.set(this.model.form,this.model.component,null)},closeModal(){this.modal_show=!1},onSuccess(e){let t=this.meta.relation.fields.map((t=>e[t]));t=t.join(", "),this.relation_data.push({value:e[this.meta.relation.key],label:t}),this.closeModal()},onError(e){},showInfoModal(){this.model.form[this.model.component]?window.showInformationModal(`${this.meta.info_url}${this.model.form[this.model.component]}`,this.meta.placeHolder):this.$Message.success(this.lang.dataNotFound)}},watch:{do_render(e){if(e){if(this.model.form[this.model.component]){let e=this.model.form[this.model.component];if(1==this.meta.relation.multiple){let t=e.toString().split(",");this.value=this.options.filter((e=>t.includes(e.value.toString())))}else{let t=this.options.filter((t=>t.value==e));this.value=t.length>=1?t[0]:null}this.clearAble=!0}}else this.value=null,this.clearAble=!1,this.ignoreChange=!1,Vue.set(this.model.form,this.model.component,this.meta.default?this.meta.default:void 0)},value(e){e&&(1==this.meta.relation.multiple?Vue.set(this.model.form,this.model.component,e.map((e=>e.value)).join(",")):Vue.set(this.model.form,this.model.component,e.value),this.clearAble=!0)}},created(){this.meta.relation.addAble&&this.meta.relation.addFrom&&(this.addAble=!0)}};const s=(0,l(51900).Z)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("FormItem",{attrs:{label:e.label,prop:e.rule}},[e.meta.relation.multiple?l("multiselect",{class:e.meta.info_url?"with-info-caller":"",attrs:{multiple:!0,disabled:e.meta.disabled,"track-by":"value",searchable:!0,placeholder:e.meta&&null!==e.meta.placeHolder?e.meta.placeHolder:e.label?e.label:"",label:"label",options:e.options},on:{"search-change":e.searchChange},scopedSlots:e._u([{key:"caret",fn:function(t){t.toggle;return[l("div",{staticClass:"caret-container"},[l("div",{class:e.addAble?"multiselect__select addable-caret":"multiselect__select"}),e._v(" "),e.addAble?l("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:e.showAddModal}}):e._e()],1)]}}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):l("multiselect",{class:e.meta.info_url?"with-info-caller":"",attrs:{disabled:e.meta.disabled,options:e.options,"track-by":"value",searchable:!0,"allow-empty":!0,placeholder:e.meta&&null!==e.meta.placeHolder?e.meta.placeHolder:e.label?e.label:"",label:"label"},on:{"search-change":e.searchChange},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var l=t.option;return[e._v("\n            "+e._s(l.label)+"\n        ")]}},{key:"caret",fn:function(t){t.toggle;return[l("div",{staticClass:"caret-container"},[l("div",{class:e.addAble?"multiselect__select addable-caret":"multiselect__select"}),e._v(" "),e.addAble?l("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:e.showAddModal}}):e._e()],1)]}},{key:"clear",fn:function(t){t.search;return[l("div",{staticClass:"clear-container"},[e.clearAble?l("Button",{attrs:{shape:"circle",size:"small",icon:"md-close"},on:{click:e.clearState}}):e._e()],1)]}}],null,!1,1374386606),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),e.meta.info_url?l("div",{staticClass:"info-caller"},[l("Button",{attrs:{shape:"circle",type:"primary",icon:"ios-help-circle",size:"small"},on:{click:e.showInfoModal}})],1):e._e(),e._v(" "),e.addAble?l("Modal",{attrs:{"min-width":200,"min-height":100,draggable:!0,"footer-hide":!0,title:e.label,width:"800",height:"70%"},model:{value:e.modal_show,callback:function(t){e.modal_show=t},expression:"modal_show"}},[l("section",{staticClass:"add-modal"},[l("div",{staticClass:"add-body"},[l("dataform",{ref:"form",attrs:{schemaID:e.meta.relation.addFrom,editMode:!1,onSuccess:e.onSuccess,do_render:e.modal_show,onError:e.onError}})],1)])]):e._e()],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-Select.4aa23a4abee75fef.js.map