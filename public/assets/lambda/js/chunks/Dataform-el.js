(self.webpackChunk=self.webpackChunk||[]).push([[826],{8883:(e,t,s)=>{var i={"./example.vue":17137};function o(e){var t=a(e);return s(t)}function a(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=a,e.exports=o,o.id=8883},81293:(e,t,s)=>{"use strict";s.d(t,{Q:()=>i,b:()=>a});const i=[{element:"Text",component:()=>s.e(705).then(s.bind(s,64001))},{element:"Select",component:()=>s.e(4036).then(s.bind(s,57319))},{element:"TreeSelect",component:()=>s.e(84).then(s.bind(s,13021))},{element:"Number",component:()=>s.e(8254).then(s.bind(s,44593))},{element:"Textarea",component:()=>s.e(9343).then(s.bind(s,25537))},{element:"Date",component:()=>s.e(4218).then(s.bind(s,25195))},{element:"DateTime",component:()=>s.e(126).then(s.bind(s,15536))},{element:"Divider",component:()=>s.e(4136).then(s.bind(s,15535))},{element:"Image",component:()=>s.e(6987).then(s.bind(s,21688))},{element:"HTML",component:()=>s.e(80).then(s.bind(s,2157))},{element:"ImageSubform",component:()=>s.e(8876).then(s.bind(s,16884))},{element:"ImageDrag",component:()=>s.e(6386).then(s.bind(s,41925))},{element:"Checkbox",component:()=>s.e(1797).then(s.bind(s,99706))},{element:"CK",component:()=>s.e(6024).then(s.bind(s,25820))},{element:"ColorPicker",component:()=>s.e(6133).then(s.bind(s,1396))},{element:"Email",component:()=>s.e(2997).then(s.bind(s,58599))},{element:"File",component:()=>s.e(7997).then(s.bind(s,99912))},{element:"Download",component:()=>s.e(7455).then(s.bind(s,38352))},{element:"Geographic",component:()=>Promise.all([s.e(8204),s.e(6244)]).then(s.bind(s,55220))},{element:"Hidden",component:()=>s.e(9035).then(s.bind(s,28906))},{element:"Map",component:()=>s.e(9737).then(s.bind(s,62732))},{element:"Money",component:()=>s.e(2387).then(s.bind(s,27017))},{element:"NumberGenerate",component:()=>s.e(4370).then(s.bind(s,20363))},{element:"Password",component:()=>s.e(1933).then(s.bind(s,96960))},{element:"PasswordGenerate",component:()=>s.e(6566).then(s.bind(s,35582))},{element:"Radio",component:()=>s.e(7911).then(s.bind(s,48670))},{element:"RadioWithTextInput",component:()=>s.e(3146).then(s.bind(s,84823))},{element:"Register",component:()=>s.e(4234).then(s.bind(s,75691))},{element:"ISelect",component:()=>Promise.all([s.e(8204),s.e(3120)]).then(s.bind(s,36583))},{element:"Search",component:()=>s.e(5182).then(s.bind(s,49341))},{element:"Switch",component:()=>s.e(3617).then(s.bind(s,63474))},{element:"Time",component:()=>s.e(973).then(s.bind(s,69740))},{element:"AdminMenu",component:()=>s.e(3666).then(s.bind(s,58193))},{element:"subform/Grid",component:()=>s.e(2405).then(s.bind(s,9339))},{element:"subform/Form",component:()=>s.e(931).then(s.bind(s,19015))}],o=()=>s.e(931).then(s.bind(s,30111)),a=e=>{if(null!=e){const t=i.findIndex((t=>t.element==e));if(t>=0)return i[t].component}return(e=>{if(window.init.data_form_custom_elements)return window.init.data_form_custom_elements.find((t=>t.element==e))?s(8883)(`./${e}.vue`).default:o;return o})(e)}},35341:(e,t,s)=>{"use strict";s.d(t,{j1:()=>n,i:()=>r,jQ:()=>l,pg:()=>u});let i=null,o=null,a=null;const n=e=>{i=e},r=(e,t)=>{a=t,o=e},l=[{type:"required",msg:"Талбарыг бөглөнө үү!"},{type:"email",msg:"Имэйл хаягаа зөв оруулна уу!"},{type:"number",msg:"Тоон утга оруулна уу!"},{type:"englishAlphabet",msg:"Зөвхөн латин үсэг оруулна уу!"},{type:"unique",msg:"Давхацсан утга оруулсан байна!"},{type:"lambda-account",msg:"Давхацсан утга оруулсан байна!"}],d=(e,t,s)=>{axios.post("/lambda/krud/unique",{table:i,identityColumn:o,identity:a,field:e.field,val:t}).then((e=>{e.data.status?s():s(new Error(e.data.msg))}))},m=(e,t,s)=>{axios.post("/lambda/check",{value:t}).then((e=>{e.data.status?s():s(new Error(`'${t} Давхацсан утга оруулсан байна!'`))}))},h=(e,t,s)=>{t.match(/^[0-9a-zA-Z-]+$/)?s():s(new Error("Зөвхөн латин үсэг оруулна уу!"))},c=(e,t,s)=>{axios.post("/lambda/krud/check_current_password",{password:t}).then((e=>{e.data.status?s():s(new Error(e.data.msg))}))},u=e=>{switch(e.type){case"required":return{required:!0,message:e.msg};case"min":case"max":return{type:"string",min:parseInt(e.val,10),message:e.msg};case"email":return{type:"email",message:e.msg};case"number":return{type:"number",message:e.msg};case"unique":return{validator:d,trigger:"blur"};case"lambda-account":return{validator:m,trigger:"blur"};case"englishAlphabet":return{validator:h,trigger:"blur"};case"check_current_password":return{validator:c,trigger:"blur"};default:return null}}},54066:(e,t,s)=>{"use strict";s.d(t,{x4:()=>a,BS:()=>r});var i=/\{ *([\w_-]+) *\}/g,o=null;function a(e,t,s,i,o,a){if(e.length>=1){let r=e.findIndex((e=>e.model==t));r<=-1?e.map((e=>{e.template.includes(t)&&n(e,t,s,i,o,a)})):n(e[r],t,s,i,o,a)}}function n(e,t,s,o,a,n){let r=!1;if(e.form?("main"==e.form||n&&e.form==n)&&(r=!0):r=!0,r){let t=(l=e.template,m=s,l.replace(i,(function(e,t){let s=m[t];return void 0===s?"":("function"==typeof s&&(s=s(m)),s)})));if(t){let i=new Function("return "+t)();e.targets.map((e=>{let t=d(o,e.field);t>=0&&("value"==e.prop?s[e.field]=i:("hidden"==e.prop&&a&&a[e.field]&&a[e.field].length>0&&a[e.field][0].hasOwnProperty("required")&&(a[e.field][0].required=!i),o[t][e.prop]=i))}))}}var l,m}function r(e,t,s,i,a,n,r){if(t){let t=d(i,e);t>=0&&i[t].trigger&&(o&&clearTimeout(o),o=setTimeout((()=>{!function(e,t,s,i,o,a){axios.post(e,{model:{...t},editMode:a}).then((({data:e})=>{e.schema&&e.schema.forEach((e=>{l(e,t,s,i)})),e.schema_sub&&e.schema_sub.forEach((e=>{e.schema.forEach((o=>{l(o,t,s,i,e.model)}))})),e.message&&("success"==e.message.type?o.success({duration:3,desc:e.message.message}):o.error({duration:3,desc:e.message.message})),e.info&&e.info.forEach((e=>{document.getElementById(e.target).innerHTML=e.html}))}))}(i[t].trigger,s,i,a,n,r)}),null!=i[t].triggerTimeout&&null!==i[t].triggerTimeout&&""!=i[t].triggerTimeout?i[t].triggerTimeout:0))}}function l(e,t,s,i,o){if(o){let t=d(s,o);if(t>=0){let i=d(s[t].schema,e.field);i>=0&&Object.keys(e.props).forEach((o=>{s[t].schema[i][o]=e.props[o]}))}}else{let o=d(s,e.field);if(o>=0){if("value"in e){t[e.field]=e.value,"SubForm"==s[o].formType&&i[`sf${e.field}`][0].fillData()}e.props&&Object.keys(e.props).forEach((t=>{s[o][t]=e.props[t]}))}}}function d(e,t){return e.findIndex((e=>e.model==t))}},93015:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ul:()=>idGenerator,GY:()=>evalstr,JY:()=>isValid});const idGenerator=e=>`${e}-${Math.random().toString(36).substr(3,9)}`,evalstr=str=>void 0===str||null==str||""==str||eval(str.toString()),isValid=e=>void 0!==e&&null!=e&&""!=e},17137:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});const i={name:"example"};const o=(0,s(51900).Z)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"41f3b5cc",null).exports},22153:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var i=s(81293),o=s(35341),a=s(54066),n=s(93015);const r={name:"dataform",props:["projectID","schemaID","editMode","onReady","onSuccess","onError","permissions","user_condition","do_render","isSubForm","url","page_id","public"],data:()=>({loadConfig:!0,viewMode:!1,asyncMode:!1,save_btn_text:"",title:"",meta:{model:"",option:{}},model:{},schema:[],ui:{},formula:[],rule:{},identity:null,dataID:null,relations:{},showInfo:!1,infoUrl:"",infoTitle:"",showID:window.init.showID}),computed:{submitUrl(){return this.editMode?this.page_id?`/lambda/krud/${this.$props.schemaID}/update/${this.dataID}?page_id=${this.page_id}`:`/lambda/krud/${this.$props.schemaID}/update/${this.dataID}`:this.page_id?`/lambda/krud/${this.$props.schemaID}/store?page_id=${this.page_id}`:`/lambda/krud${this.Url}/${this.$props.schemaID}/store`},Url(){return!0===this.public?"-public":""},lang(){const e=["save","pleaseWait","fillInTheNewOne","close","pleaseEnterPasswordYouUCurrentlyUsing","pleaseReEnterYourPassword","passwordConfirmError","informationIsIncomplete","trRMandatoryFieldsFillInformationLookFormAFillRequiredFieldsWithRedBorder","successfullySaved","errorSaving"];return e.reduce(((t,s,i)=>(t[s]=this.$t("dataForm."+e[i]),t)),{})}},created(){window.showInformationModal=this.showInformationModal,this.schemaID&&this.initForm()},watch:{src(e,t){this.initForm()},editMode(e){e||this.handleReset(this.meta.model+"-"+this.schemaID)},do_render(e){e||(this.viewMode=!1,this.handleReset(this.meta.model+"-"+this.schemaID))},schemaID(e){e&&this.initForm()},ui(e){e&&this.dataID&&this.editModel(this.dataID)}},methods:{isVisibleSection:e=>"section"==e.type&&(!e.visibleUserRoles||(!Array.isArray(e.visibleUserRoles)||(!(e.visibleUserRoles.length>=1&&window.init.user)||e.visibleUserRoles.findIndex((e=>e==window.init.user.role))>=0))),element:i.b,evalstr:n.GY,isValid:n.JY,getRelationData(e){return""==e.relation.filter||void 0===e.relation.filter?this.relations[e.relation.table]?this.relations[e.relation.table].data:[]:this.relations[e.model]?this.relations[e.model].data:[]},isShow(e){let t=this.schema.findIndex((t=>t.model==e));return!(t>=0)||!this.schema[t].hidden},afterChange(e,t,s){(0,a.BS)(e,t,this.model,this.schema,this.$refs,this.$Notice,this.editMode),this.do_render&&t!=s&&(0,a.x4)(this.formula,e,this.model,this.schema,this.rule,!1)},clearConfig(){this.model={},this.schema=[],this.ui={},this.formula=[],this.rule={},this.dataID=null},initForm(){let e=[];this.user_condition&&(e=JSON.stringify(this.user_condition));let t=this.$props.url?this.$props.url:"",s=t+`/lambda/puzzle/schema${this.Url}/form/${this.$props.schemaID}`;this.projectID&&(s=t+`/lambda/puzzle/project/${this.projectID}/form/${this.$props.schemaID}`),s+=0==e.length?"":`/${e}`,axios.get(s).then((({data:e})=>{let t=JSON.parse(e.data.schema);this.identity=t.identity,this.schema=t.schema,this.ui=t.ui,this.save_btn_text=t.save_btn_text,t.formula&&(this.formula=t.formula),this.title=e.data.name,this.meta={model:t.model,option:{labelPosition:t.labelPosition,labelWidth:t.labelWidth}},this.getOptionsData(t.schema),this.setUiSchemaFormItem(t.ui.schema),this.setHiddenItemModel(t.schema),this.$props.onReady&&this.$props.onReady(t,this.schema),(0,o.j1)(t.model),this.loadConfig=!1}))},setHiddenItemModel(e){e.forEach((e=>{if((e.hidden||e.disabled)&&(this.isValid(e.default)&&this.setModel(e.model,e.default,e.formType),e.hasUserId&&this.setModel(e.model,1*window.init.user.id,e.formType),this.isValid(e.param)&&e.param in this.$route.params)){let t=this.$route.params[e.param];"null"!=t&&Vue.set(this.$data.model,e.model,t)}e.source_hidden=e.hidden,e.source_disabled=e.disabled}))},validatePassCheck(e,t,s,i){let o=s||"",a=this.model[e]?this.model[e]:"";""!==s||this.editMode?o!==a?i(new Error(this.lang.passwordConfirmError)):i():i(new Error(this.lang.pleaseReEnterYourPassword))},setUiSchemaFormItem(e){e.forEach((e=>{if("form"==e.type){if(this.setModel(e.model,e.default,e.formType),this.$watch("model."+e.model,{handler:(t,s)=>{this.afterChange(e.model,t,s)},deep:!0}),e.rules&&this.setRule(e.model,e.rules),"Password"==e.formType&&e.passwordOption&&(e.passwordOption.confirm&&(this.setModel("password_confirm","","password"),this.$data.rule.password_confirm=[{validator:(t,s,i)=>this.validatePassCheck(e.model,t,s,i),trigger:"blur"}]),e.passwordOption.edit_with_old_password)){this.setModel("current_password","","password");let e=[];[{type:"required",msg:this.lang.pleaseEnterPasswordYouUCurrentlyUsing},{type:"check_current_password",msg:null}].forEach((t=>{let s=(0,o.pg)(t);e.push(s)})),this.$data.rule.current_password=e}}else _.isArray(e.children)&&this.setUiSchemaFormItem(e.children)}))},setModel(e,t,s){switch(s){case"Switch":let s=!1;"true"!=t&&1!=t||(s=!0),Vue.set(this.$data.model,e,s);break;case"Checkbox":let i=0;"true"!=t&&1!=t||(i=1),Vue.set(this.$data.model,e,i);break;case"CK":let o="";""!=t&&null!==t&&(o=t),Vue.set(this.$data.model,e,o);break;case"SubForm":Vue.set(this.$data.model,e,[]);break;case"Select":Vue.set(this.$data.model,e,t);break;case"Number":Vue.set(this.$data.model,e,1*t);break;case"ISelect":Vue.set(this.$data.model,e,t);case"TreeSelect":Vue.set(this.$data.model,e,t);break;default:Vue.set(this.$data.model,e,t)}},setRule(e,t){this.$data.rule[e]=[],t.forEach((t=>{let s=(0,o.pg)(t);this.$data.rule[e].push(s)}))},setMeta(e,t){let s=this.schema.findIndex((t=>t.model==e.model)),i=s>=0?this.schema[s]:e;return t||(delete i.table,delete i.extra,i.schemaID=this.$props.schemaID),i},getSchemaByModel(e){let t=this.schema.findIndex((t=>t.model==e));return t>=0?this.schema[t]:null},setSchemaByModel(e,t,s){if("value"==t)Vue.set(this.$data.model,e,s);else if("sub-value"==t)Vue.set(this.$data.model,e,s),this.subFormFillData(e);else{let i=this.schema.findIndex((t=>t.model==e));i>=0&&Vue.set(this.schema[i],t,s)}},getSubFormData(e){let t=[];this.model[e].forEach((e=>{t.push(e.data)}))},handleSubmit(e){this.setIdentityManual(),_.isEmpty(this.$data.rule)?this.postData():this.$refs[e].validate((e=>{e?this.postData():(this.$Notice.error({title:this.lang.informationIsIncomplete,desc:this.lang.trRMandatoryFieldsFillInformationLookFormAFillRequiredFieldsWithRedBorder,duration:0}),console.log(this.$data.model),console.log("not passed validation"))}))},postData(){this.isSubForm?this.$props.onSuccess(this.$data.model):(this.asyncMode=!0,axios.post(this.submitUrl,this.$data.model).then((({data:e})=>{e.status?(this.$Notice.success({title:this.lang.successfullySaved}),this.editMode?this.$props.onSuccess&&this.$props.onSuccess(e.data):(this.$data.model[this.identity]=e[this.identity],this.$props.onSuccess&&this.$props.onSuccess(e.data),this.handleReset(this.meta.model+"-"+this.schemaID))):(this.$Notice.error({title:this.lang.errorSaving}),this.$props.onError&&this.$props.onError()),this.asyncMode=!1})).catch((e=>{let t="";e.response.data.hasOwnProperty("error")&&("string"==typeof e.response.data.error||e.response.data.error instanceof String?t=e.response.data.error:e.response.data.error instanceof Object&&Object.keys(e.response.data.error).forEach((s=>{let i=s+": "+e.response.data.error[s].map((e=>e+" "));t=""!=t?t+"<br/>"+i:i}))),this.$Notice.error({title:this.lang.errorSaving,duration:3,desc:t}),this.asyncMode=!1,this.$props.onError&&this.$props.onError()})))},handleReset(e){this.model={},this.$refs[e].resetFields(),(0,o.i)(this.identity,null),this.schema.forEach((e=>{"SubForm"==e.formType&&void 0!==this.$refs[`sf${e.model}`]&&this.$refs[`sf${e.model}`][0].reset(),this.setModel(e.model,e.default,e.formType),e.hidden=e.source_hidden,e.disabled=e.source_disabled})),this.setHiddenItemModel(this.schema)},setIdentityManual(){(0,o.i)(this.identity,this.model[this.identity])},setUserConditionValues(){this.user_condition&&this.user_condition.forEach((e=>{let t=this.getSchemaByModel(e.form_field);""!=t.default&&null!==t.default&&0!=t.default&&(""!=this.model[t.model]&&null!==this.model[t.model]&&0!=this.model[t.model]||(this.model[t.model]=t.default))}))},editModel(e,t){t?(this.model={...this.model,...t},this.ui&&this.ui.hasOwnProperty("schema")&&(this.setEditModel(this.ui.schema),this.setUserConditionValues())):(this.dataID=e,(0,o.i)(this.identity,e),axios.post(this.page_id?`/lambda/krud/${this.$props.schemaID}/edit/${e}?page_id=${this.page_id}`:`/lambda/krud/${this.$props.schemaID}/edit/${e}`).then((({data:e})=>{e.status&&(this.model={...this.model,...e.data},this.ui&&this.ui.hasOwnProperty("schema")&&this.setEditModel(this.ui.schema),this.setUserConditionValues())})))},setHiddenValues(e){e.map((e=>{this.model[e.key]=e.val}))},subFormFillData(e){this.$refs[`sf${e}`]?this.$refs[`sf${e}`][0].fillData():setTimeout((()=>{this.subFormFillData(e)}),100)},setEditModel(e){e.forEach((e=>{if("form"==e.type||"Form"==e.type||"SubForm"==e.formType)switch(e.formType){case"SubForm":this.subFormFillData(e.model);break;case"Switch":1==this.model[e.model]||"true"==this.model[e.model]?this.model[e.model]=!0:this.model[e.model]=!1;break;case"Password":case"PasswordGenerate":this.model[e.model]="",delete this.$data.rule[e.model]}else _.isArray(e.children)&&this.setEditModel(e.children)}))},cloneModel(e){axios.post(`/lambda/krud/${this.$props.schemaID}/edit/${e}`).then((({data:e})=>{e.status&&(this.model={...this.model,...e.data},delete this.model[this.identity],console.log(this.identity),console.log(this.model[this.identity]),this.setEditModel(this.ui.schema),this.setUserConditionValues())}))},getOptionsData(e){this.relations=this.getSelects(e),Object.keys(this.relations).length>=1&&axios.post(`/lambda/puzzle/get_options${this.Url}`,{relations:this.relations}).then((({data:e})=>{Object.keys(e).map((t=>{let s={...this.relations[t],data:e[t]};Vue.set(this.$data.relations,t,s)}))}))},getSelects(e){let t={};return e.map((e=>{if("Select"!=e.formType&&"ISelect"!=e.formType&&"TreeSelect"!=e.formType||e.relation.table&&void 0===t[e.relation.table]&&(""==e.relation.filter||void 0===e.relation.filter?t[e.relation.table]=e.relation:t[e.model]=e.relation),"AdminMenu"==e.formType&&e.relation.table&&(t[e.relation.table]=e.relation),"SubForm"==e.formType&&e.schema){let s=this.getSelects(e.schema);s&&(t={...t,...s})}})),t},showInformationModal(e,t){this.infoTitle=t,this.infoUrl=e,this.showInfo=!0}}};const l=(0,s(51900).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.viewMode?"dataform view-mode":"dataform"},[s("Form",{ref:e.meta.model+"-"+e.schemaID,attrs:{model:e.model,rules:e.rule,"label-position":e.meta.option.labelPosition,"label-width":e.meta.option.labelWidth}},[s("div",{staticClass:"dataform-header"},[s("h3",[e._v(e._s(e.title)),e.showID?s("b",[e.model[e.identity]?s("span",[e._v(": "+e._s(e.model[e.identity]))]):e._e()]):e._e()])]),e._v(" "),s("div",{staticClass:"dataform-body"},[e.loadConfig?s("Spin",{attrs:{fix:""}}):e._l(e.ui.schema,(function(t){return s("Row",{key:t.index},[e._l(t.children,(function(t){return e.isVisibleSection(t)?s("Col",{key:t.index,attrs:{xs:t.span.xs,sm:t.span.sm,md:t.span.md,lg:t.span.lg}},[s("div",{class:""!=t.name?"fieldset":""},[""!=t.name?s("legend",[e._v(e._s(t.name))]):e._e(),e._v(" "),e._l(t.children,(function(t){return s("Row",{key:t.index},e._l(t.children,(function(t){return s("Col",{key:t.index,attrs:{id:t.id,xs:24,sm:24,md:t.span.md,lg:t.span.lg}},[t.name?s("Divider",{staticClass:"form-divider",attrs:{orientation:"left"}},[e._v(e._s(t.name)+"\n                                ")]):e._e(),e._v(" "),e._l(t.children,(function(t){return s("span",{key:t.index},[e.isShow(t.model)&&"SubForm"==t.formType&&t.subtype?s(e.element("subform/"+t.subtype),{ref:"sf"+t.model,refInFor:!0,tag:"component",attrs:{model:{form:e.model,component:t.model},form:e.setMeta(t,!0),formula:e.formula,relations:e.relations,editMode:e.editMode}}):e._e(),e._v(" "),e.isShow(t.model)&&"SubForm"!=t.formType?s(e.element(t.formType),{tag:"component",attrs:{do_render:e.do_render,editMode:e.editMode,model:{form:e.model,component:t.model},disabled:!!t.disabled&&t.disabled,label:t.label?t.label:"["+t.model+"]",rule:t.model,meta:e.setMeta(t),identity:e.identity,getSchemaByModel:e.getSchemaByModel,setSchemaByModel:e.setSchemaByModel,relation_data:e.getRelationData(t)}}):e._e()],1)}))],2)})),1)}))],2)]):e._e()})),e._v(" "),e._l(t.children,(function(t){return"col"==t.type?s("Col",{key:t.index,attrs:{xs:t.span.xs,sm:t.span.sm,md:t.span.md,lg:t.span.lg}},[t.name?s("Divider",{staticClass:"form-divider",attrs:{orientation:"left"}},[e._v(e._s(t.name))]):e._e(),e._v(" "),e._l(t.children,(function(t){return s("span",{key:t.index},["SubForm"==t.formType&&t.subtype?s(e.element("subform/"+t.subtype),{ref:"sf"+t.model,refInFor:!0,tag:"component",attrs:{label:t.label?t.label:"["+t.model+"]",model:{form:e.model,component:t.model},form:e.setMeta(t,!0),relations:e.relations,formula:e.formula,schemaID:e.schemaID,editMode:e.editMode}}):e._e(),e._v(" "),e.isShow(t.model)&&"SubForm"!=t.formType?s(e.element(t.formType),{tag:"component",attrs:{do_render:e.do_render,editMode:e.editMode,disabled:!!t.disabled&&t.disabled,model:{form:e.model,component:t.model},label:t.label?t.label:"["+t.model+"]",rule:t.model,meta:e.setMeta(t),identity:e.identity,getSchemaByModel:e.getSchemaByModel,setSchemaByModel:e.setSchemaByModel,relation_data:e.getRelationData(t)}}):e._e()],1)}))],2):e._e()}))],2)}))],2),e._v(" "),e.viewMode?e._e():s("div",{staticClass:"dataform-footer"},[s("Button",{attrs:{type:"info",loading:e.asyncMode},on:{click:function(t){return e.handleSubmit(e.meta.model+"-"+e.schemaID)}}},[e.asyncMode?s("span",[e._v("\n                    "+e._s(e.lang.pleaseWait)+"\n                ")]):s("span",[e._v("\n                    "+e._s(e.lang.save)+"\n                ")])]),e._v(" "),e.editMode?e._e():s("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleReset(e.meta.model+"-"+e.schemaID)}}},[e._v("\n                "+e._s(e.lang.fillInTheNewOne)+"\n            ")])],1)]),e._v(" "),s("Drawer",{staticClass:"info-modal",attrs:{title:e.infoTitle,width:"860px"},model:{value:e.showInfo,callback:function(t){e.showInfo=t},expression:"showInfo"}},[s("iframe",{attrs:{src:e.infoUrl,frameborder:"0"}}),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{type:"primary",size:"large"},on:{click:function(t){e.showInfo=!1}}},[e._v("\n                "+e._s(e.lang.close)+"\n            ")])],1)])],1)}),[],!1,null,null,null).exports},51900:(e,t,s)=>{"use strict";function i(e,t,s,i,o,a,n,r){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=s,d._compiled=!0),i&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),n?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},d._ssrRegister=l):o&&(l=r?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(d.functional){d._injectStyles=l;var m=d.render;d.render=function(e,t){return l.call(t),m(e,t)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,l):[l]}return{exports:e,options:d}}s.d(t,{Z:()=>i})}}]);