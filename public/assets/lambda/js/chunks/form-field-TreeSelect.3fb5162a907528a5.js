"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84],{76999:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});const a=(e,t,l)=>e.filter((e=>e.parent_value==t)).map((t=>(t.children=a(e,t.value,l),t.children.length>=1&&(t.expand=!0),`${t.value}`==`${l}`?t.selected=!0:t.selected=!1,t.title=t.label,t))),s={props:["model","rule","label","meta","disabled","relation_data"],data:()=>({treeData:[],loading:!1}),computed:{treeValue(){return this.model.form[this.model.component]}},watch:{relation_data(){this.options()},treeValue(){this.loading=!0,this.options()}},methods:{options(){if(this.relation_data)if(this.relation_data.length>=1){let e=this.relation_data.filter((e=>void 0===e.parent_value));e.map((e=>(e.children=a(this.relation_data,e.value,this.model.form[this.model.component]),e.children.length>=1&&(e.expand=!0),e.value==this.model.form[this.model.component]?e.selected=!0:e.selected=!1,e.title=e.label,e))),Vue.set(this.$data,"treeData",e),setTimeout((()=>{this.loading=!1}),10)}else this.treeData=[];else this.treeData=[]},selected(e){e.length>=1&&Vue.set(this.model.form,this.model.component,e[0].value)}}};const i=(0,l(51900).Z)(s,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("FormItem",{attrs:{label:e.label,prop:e.rule}},[l("div",{staticClass:"tree-select"},[e.loading?e._e():l("tree",{attrs:{data:e.treeData},on:{"on-select-change":e.selected}})],1)])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=form-field-TreeSelect.3fb5162a907528a5.js.map