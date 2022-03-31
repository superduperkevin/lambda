"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50],{99932:(t,e,a)=>{a.d(e,{Z:()=>c});var l=a(50121);const i={props:["title","type","src","preview","prefix"],data:()=>({duplicateModal:!1,loading:!0,listData:[],filteredList:[],duplicateData:{schema:{},name:null,id:null},tableList:window.init.dbSchema.tableList,viewList:window.init.dbSchema.viewList,reportList:window.init.dbSchema.reportList}),created(){this.getData()},computed:{lang(){const t=["add","delete_data"];return t.reduce(((e,a,l)=>(e[a]=this.$t("puzzle."+t[l]),e)),{})},lang1(){const t=["pleaseEnterSearchValue","yes","no","copy","name","selectTable","table","basicTable","table_list"];return t.reduce(((e,a,l)=>(e[a]=this.$t("components."+t[l]),e)),{})}},methods:{beforeMount(){"mn"!=this.selectedLang&&(0,l.loadLanguageAsync)(this.selectedLang)},switchLanguage(t){this.selectedLang=t,(0,l.loadLanguageAsync)(t)},getData(){axios.get(this.$props.src).then((({data:t})=>{this.loading=!1,this.filteredList=this.listData=t.data}))},doDuplicate(){let t="/lambda/puzzle/schema/form";"grid"==this.type&&(t="/lambda/puzzle/schema/grid",this.duplicateData.schema.schema.forEach((t=>{t.table=this.duplicateData.schema.model}))),this.$project&&(t=`/lambda/puzzle/project/${this.$project.id}/form`,"grid"==this.type&&(t=`/lambda/puzzle/project/${this.$project.id}/grid`,this.duplicateData.schema.schema.forEach((t=>{t.table=this.duplicateData.schema.model}))));let e={name:this.duplicateData.name,schema:JSON.stringify(this.duplicateData.schema)};axios.post(t,e).then((({data:t})=>{t.status?(this.$Notice.success({title:"Амжилттай хадгалагдлаа",desc:`"${this.formName}" формын мэдээлэл амжилттай хадгалагдлаа.`}),this.duplicateModal=!1,this.duplicateData={schema:{},name:null,id:null},this.getData()):this.$Notice.error({title:"Хадгалах үед алдаа гарлаа!"})}))},duplicate(t,e){let a=`/lambda/puzzle/schema/form/${t}/builder`;"grid"==this.type&&(a=`/lambda/puzzle/schema/grid/${t}`),this.$project&&(a=`/lambda/puzzle/project/${this.$project.id}/form/${t}/builder`,"grid"==this.type&&(a=`/lambda/puzzle/project/${this.$project.id}/grid/${t}`)),axios.get(a).then((({data:e})=>{this.duplicateData.name=e.data.hasOwnProperty("name")?e.data.name:e.data.model,this.duplicateData.schema=JSON.parse(e.data.schema),this.duplicateData.id=t,this.duplicateModal=!0})).catch((t=>{console.log(t)}))},deleteListItem(t){axios.delete(this.$project?`/lambda/puzzle/delete/project/vb_schemas/${this.$project.id}/${this.type}/${t}`:`/lambda/puzzle/delete/vb_schemas/${this.type}/${t}`).then((e=>{this.filteredList=this.filteredList.filter((e=>e.id!==t)),this.listData=this.listData.filter((e=>e.id!==t)),this.$Message.success("444 Амжилттай устгалаа!")}))},cancel(){},filterList(t){let e=this,a=t.target.value;e.filteredList=""!=a?e.listData.filter((t=>t.name.toString().toLowerCase().indexOf(a.toLowerCase())>=0)):e.listData}}},s=i;const c=(0,a(51900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page page-list"},[a("div",{staticClass:"page-list-header"},[a("h3",[t._v(t._s(t.title)+" ("+t._s(t.listData.length)+")")]),t._v(" "),a("div",{staticClass:"page-list-header-search"},[a("Input",{staticStyle:{width:"200px"},attrs:{icon:"ios-search",placeholder:t.lang1.pleaseEnterSearchValue},on:{"on-keyup":t.filterList}})],1),t._v(" "),a("div",{staticClass:"page-list-header-control"},[a("router-link",{staticClass:"btn-del",attrs:{to:(t.prefix?t.prefix:"")+"/"+t.type+"/builder"}},[a("Button",{attrs:{type:"success"}},[a("Icon",{attrs:{type:"md-add"}}),t._v("\n            "+t._s(t.lang.add)+"\n        ")],1)],1)],1)]),t._v(" "),t.loading?a("div",{staticClass:"loader"},[a("div",{staticClass:"loader-wrapper"},[t._m(0),t._v(" "),a("h3",[t._v(t._s(t.lang.please_wait))])])]):a("Row",{directives:[{name:"slimscroll",rawName:"v-slimscroll",value:{height:"100%-30",size:7,alwaysVisible:!0,wheelStep:7,color:"#2C3A47"},expression:"{height:'100%-30',size:7,alwaysVisible: true,wheelStep:7,color:'#2C3A47'}"}],staticClass:"pz-list",attrs:{gutter:16}},t._l(t.filteredList,(function(e){return a("Col",{key:e.index,attrs:{xs:24,sm:12,md:8,lg:6}},[a("div",{staticClass:"pz-list-item"},[a("div",{staticClass:"pz-list-item-body"},[a("h3",[t._v(t._s(e.name))]),t._v(" "),a("small",[t._v(t._s(e.created_at))])]),t._v(" "),a("div",{staticClass:"pz-list-item-control"},["hidden"!=t.preview?a("router-link",{staticClass:"btn-preview",attrs:{to:(t.prefix?t.prefix:"")+"/"+t.type+"/preview/"+e.id}},[a("Icon",{attrs:{type:"ios-eye"}})],1):t._e(),t._v(" \n          "),"form"==t.type||"grid"==t.type?a("a",{staticClass:"btn-preview",attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.duplicate(e.id,t.type)}}},[a("Icon",{attrs:{type:"md-copy"}})],1):t._e(),t._v(" "),a("span",[a("router-link",{staticClass:"btn-edit",attrs:{to:(t.prefix?t.prefix:"")+"/"+t.type+"/builder/"+e.id}},[a("Icon",{attrs:{type:"md-create"}})],1),t._v(" "),a("Poptip",{attrs:{confirm:"",title:t.lang.delete_data,confirm:"",width:"180","ok-text":t.lang1.yes,"cancel-text":t.lang1.no},on:{"on-ok":function(a){return t.deleteListItem(e.id)},"on-cancel":t.cancel}},[a("a",{staticClass:"btn-del",attrs:{href:"javascript:void(0)"}},[a("Icon",{attrs:{type:"ios-trash"}})],1)])],1)],1)])])})),1),t._v(" "),a("Modal",{attrs:{title:t.lang1.copy,"ok-text":t.lang1.copy},on:{"on-ok":t.doDuplicate},model:{value:t.duplicateModal,callback:function(e){t.duplicateModal=e},expression:"duplicateModal"}},[a("label",[t._v(t._s(t.lang1.name))]),t._v(" "),a("Input",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.name},model:{value:t.duplicateData.name,callback:function(e){t.$set(t.duplicateData,"name",e)},expression:"duplicateData.name"}}),t._v(" "),a("label",[t._v(t._s(t.lang1.table)+" (DB table)")]),t._v(" "),"form"==t.type?a("Select",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.selectTable,clearable:"",filterable:""},model:{value:t.duplicateData.schema.model,callback:function(e){t.$set(t.duplicateData.schema,"model",e)},expression:"duplicateData.schema.model"}},t._l(t.tableList,(function(e){return a("Option",{key:e.index,attrs:{value:e}},[t._v(t._s(e))])})),1):t._e(),t._v(" "),"grid"==t.type?a("Select",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.selectTable,clearable:"",filterable:""},model:{value:t.duplicateData.schema.model,callback:function(e){t.$set(t.duplicateData.schema,"model",e)},expression:"duplicateData.schema.model"}},[a("OptionGroup",{attrs:{label:t.lang.table_list}},t._l(t.tableList,(function(e){return a("Option",{key:e.index,attrs:{value:e}},[t._v(t._s(e))])})),1),t._v(" "),a("OptionGroup",{attrs:{label:t.lang.table_list}},t._l(t.viewList,(function(e){return a("Option",{key:e.index,attrs:{value:e}},[t._v(t._s(e))])})),1)],1):t._e(),t._v(" "),"grid"==t.type?a("label",[t._v(t._s(t.lang1.basicTable)+" (DB table)")]):t._e(),t._v(" "),"grid"==t.type?a("Select",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang1.selectTable,clearable:"",filterable:""},model:{value:t.duplicateData.schema.mainTable,callback:function(e){t.$set(t.duplicateData.schema,"mainTable",e)},expression:"duplicateData.schema.mainTable"}},t._l(t.tableList,(function(e){return a("Option",{key:e.index,attrs:{value:e}},[t._v(t._s(e))])})),1):t._e()],1)],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lds-roller"},[a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div"),t._v(" "),a("div")])}],!1,null,null,null).exports},5711:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});const l={components:{"list-view":a(99932).Z},data:()=>({}),computed:{lang(){const t=["data_settings"];return t.reduce(((e,a,l)=>(e[a]=this.$t("puzzle."+t[l]),e)),{})}}};const i=(0,a(51900).Z)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$project?a("list-view",{attrs:{src:"/lambda/puzzle/project/"+t.$project.id+"/datasource",title:t.lang.data_settings,type:"datasource",data:t.listData,preview:"hidden"}}):a("list-view",{attrs:{src:"/lambda/puzzle/schema/datasource",title:t.lang.data_settings,type:"datasource",data:t.listData,preview:"hidden"}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=datasource-list.3d469a37bcd787c7.js.map