"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7455],{38352:(t,l,s)=>{s.r(l),s.d(l,{default:()=>e});const a={props:["model","label","rule","meta","do_render"],computed:{lang(){const t=["download"];return t.reduce(((l,s,a)=>(l[s]=this.$t("dataForm."+t[a]),l)),{})}},data:()=>({uploadList:[]}),watch:{"model.form"(t){this.uploadList=JSON.parse(this.model.form[this.model.component])}}};const e=(0,s(51900).Z)(a,(function(){var t=this,l=t.$createElement,s=t._self._c||l;return s("FormItem",[s("div",{staticClass:"multi-upload"},[s("label",[t._v(t._s(t.label))]),t._v(" "),s("div",{staticClass:"multi-upload-list"},t._l(t.uploadList,(function(l){return s("div",{key:l.index,staticClass:"upload-list"},[[l?s("img",{attrs:{src:l}}):t._e(),t._v(" "),s("a",{staticClass:"upload-control",attrs:{href:l,download:""}},[t._v(t._s(t.lang.download))])]],2)})),0)])])}),[],!1,null,null,null).exports}}]);