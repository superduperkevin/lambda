"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2405],{3295:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var o=a(81293);const s={props:["form","model","editMode","relations","formula"],components:{"grid-form":a(50003).Z},mounted(){this.equationRenderer()},computed:{subStyle(){return this.form.min_height?{minHeight:this.form.min_height+"px",background:"#f3f4f5"}:void 0}},watch:{listData:{handler:function(t,e){this.hasEq&&this.equationData.map((e=>{if(e.hasEquation){e.data=-1;let a=0;switch(e.equation){case"SUM":e.data=0,t.map((t=>{e.data+=Number(isNaN(parseInt(t.model[e.model],10))?0:t.model[e.model])}));break;case"COUNT":e.data=0,t.map((t=>{e.data+=Number(1)}));break;case"MIN":t.map((t=>{-1==e.data?e.data=t.model[e.model]:e.data=Math.min(e.data,t.model[e.model])}));break;case"MAX":e.data=0,t.map((t=>{e.data=Math.max(e.data,t.model[e.model])}));break;case"AVG":e.data=0,t.map((t=>{a++,e.data+=Number(t.model[e.model])})),e.data=Number(e.data/a)}}}))},deep:!0}},data:()=>({listData:[],equationData:[],currentSortDir:"asc",hasEq:!1,rowLength:0}),methods:{element:o.b,checkAddable(){return new Promise(((t,e)=>{let a=this.listData[this.listData.length-1];if(a){let o=!1,s=a.model;for(let t in s)null!=typeof s[t]&&null!=s[t]&&""!=s[t]&&0!=s[t]&&(o=!0);o?t(!0):(alert("Эхний мөрийг гүйцэд бөглөнө үү"),e(!1))}else t(!0)}))},addSubForm(){let t=_.cloneDeep(this.form),e={};t.schema.forEach((a=>{t.identity!=a.model&&null!=a.formType&&(!t.timestamp||"created_at"!=a.model&&"updated_at"!=a.model)&&Vue.set(e,a.model,a.default)}));let a={form:t,model:e};null==this.model.form[this.model.component]&&(this.model.form[this.model.component]=[]),this.model.form[this.model.component].push(e),this.listData.push(a),this.rowLength=this.model.form[this.model.component].length},add(){this.checkAddable().then((t=>{setTimeout((()=>{this.addSubForm()}),200)})).catch((t=>{console.log(t)}))},fillData(){this.listData=[],setTimeout((()=>{this.listData=[],this.model.form[this.model.component].forEach((t=>{let e={form:_.cloneDeep(this.form),model:t};this.listData.push(e)}))}),100)},equationRenderer(){this.equationData=[],this.form.schema.map((t=>{""==t.label||t.hidden||(t.hasEquation&&(this.hasEq=!0),this.equationData.push({hasEquation:t.hasEquation,equation:t.equations,prefix:t.prefix,model:t.model,preStaticWord:t.preStaticWord,data:0}))}))},remove(t){this.model.form[this.form.model].splice(t,1),this.listData.splice(t,1),this.rowLength=this.model.form[this.model.component].length},reset(){this.model.form[this.form.model]=[],this.listData=[]},sort(t){let e=1;this.currentSortDir="asc"===this.currentSortDir?"desc":"asc",this.currentSort="desc"===this.currentSortDir?-1:1,this.currentSort=t.model,this.listData.sort(((t,a)=>("desc"===this.currentSortDir&&(e=-1),t.model[this.currentSort]<a.model[this.currentSort]?-1*e:t.model[this.currentSort]>a.model[this.currentSort]?1*e:0)))}}};const l=(0,a(51900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subform-grid",style:t.subStyle},[a("h3",{staticStyle:{display:"none"}},[t._v(t._s(t.rowLength))]),t._v(" "),t.form.min_height||t.form.disableCreate?t._e():a("div",{staticClass:"subform-header"},[t._v("\n        "+t._s(t.form.name)+"\n        "),a("Button",{staticClass:"sub-form-add-btn",attrs:{shape:"circle",type:"success",size:"small",icon:"md-add"},on:{click:t.add}})],1),t._v(" "),a("table",{attrs:{border:"1"}},[a("thead",[a("tr",[t.form.showRowNumber?a("th",{staticClass:"row-number"},[t._v("ДД")]):t._e(),t._v(" "),t._l(t.form.schema,(function(e){return""==e.label||e.hidden?t._e():a("th",{key:e.index,on:{click:function(a){return t.sort(e)}}},[t._v("\n                "+t._s(e.label)+" "),a("i",{staticClass:"ti-exchange-vertical"})])})),t._v(" "),t.form.disableDelete?t._e():a("th",{staticClass:"action"},[t._v("...")])],2)]),t._v(" "),a("tbody",t._l(t.listData,(function(e,o){return a("grid-form",{key:o,attrs:{f:e.form,model:e.model,editMode:t.editMode,relations:t.relations,formula:t.formula}},[t.form.disableDelete?t._e():a("template",{slot:"action"},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.remove(o)}}},[a("Icon",{attrs:{type:"ios-trash"}})],1)]),t._v(" "),t.form.showRowNumber?a("template",{slot:"rowNumber"},[a("span",[t._v(t._s(o+1))])]):t._e()],2)})),1),t._v(" "),t.hasEq?a("tfoot",[a("tr",[t._l(t.equationData,(function(e,o){return a("td",{key:o},[null!=e.preStaticWord&&""!=e.preStaticWord?a("span",[t._v(" "+t._s(e.preStaticWord)+" ")]):t._e(),t._v(" "),e.hasEquation?a("span",[t._v(t._s(e.data.toLocaleString()))]):t._e(),t._v(" "),null!=e.prefix&&""!=e.prefix?a("span",[t._v(" "+t._s(e.prefix))]):t._e()])})),t._v(" "),a("td")],2)]):t._e()]),t._v(" "),t.form.min_height&&!t.form.disableCreate?a("a",{staticClass:"sub-grid-add",attrs:{href:"javascript:void(0)"},on:{click:t.add}},[a("Icon",{attrs:{type:"plus"}}),t._v("\n        "+t._s(""+(t.$static_words?t.$static_words.add:"Нэмэх"))+"\n    ")],1):t._e()])}),[],!1,null,null,null).exports},50003:(t,e,a)=>{a.d(e,{Z:()=>r});var o=a(81293),s=(a(35341),a(54066));const l={props:["f","model","editMode","relations","formula"],created(){this.f.data={},this.f.schema.forEach((t=>{this.f.identity!=t.model&&null!=t.formType&&(!this.f.timestamp||"created_at"!=t.model&&"updated_at"!=t.model)&&(this.editMode?this.setModel(t.model,this.model[t.model],t.formType):this.setModel(t.model,t.default,t.formType),this.$watch("model."+t.model,{handler:(e,a)=>{this.afterChange(t.model,e,a)},deep:!0}))}))},methods:{element:o.b,setModel(t,e,a){switch(a){case"Switch":let a=!1;"true"!=e&&1!=e||(a=!0),this.model[t]=o,this.f.data[t]=o;break;case"Checkbox":let o=0;"true"!=e&&1!=e||(o=1),this.model[t]=o,this.f.data[t]=o;break;default:this.f.data[t]=e}},setMeta:t=>(delete t.table,delete t.rules,delete t.label,delete t.span,delete t.default,t),getSchemaIndex(t){return this.f.schema.findIndex((e=>e.model==t))},afterChange(t,e,a){(0,s.BS)(t,e,this.model,this.f.schema,this.$refs,this.$Notice),(0,s.x4)(this.formula,t,this.model,this.f.schema,this.f.rule,this.f.model)}}};const r=(0,a(51900).Z)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[t.f.showRowNumber?a("td",{staticClass:"row-number"},[t._t("rowNumber")],2):t._e(),t._v(" "),t._l(t.f.schema,(function(e){return void 0!==e.formType&&null!==e.formType&&e.model&&!e.hidden&&e.model!=t.f.identity&&e.model!=t.f.parent&&"updated_at"!=e.model&&"created_at"!=e.model?a("td",{key:e.index},[t.model?a(t.element(e.formType),{tag:"component",attrs:{model:{form:t.model,component:e.model},size:"small",label:e.label?e.label:"["+e.model+"]",meta:t.setMeta(e),relation_data:""==e.relation.filter||void 0===e.relation.filter?t.relations[e.relation.table]?t.relations[e.relation.table].data:[]:t.relations[e.model]?t.relations[e.model].data:[]}}):t._e()],1):t._e()})),t._v(" "),a("td",{staticClass:"action"},[t._t("action")],2)],2)}),[],!1,null,null,null).exports}}]);