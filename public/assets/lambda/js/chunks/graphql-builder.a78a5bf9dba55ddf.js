(self.webpackChunk=self.webpackChunk||[]).push([[8712],{87757:(t,e,n)=>{t.exports=n(35666)},15779:(t,e,n)=>{"use strict";function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{ZD:()=>o,Sh:()=>i,gN:()=>l});var o=function(t,e){var n=e.removedIndex,a=e.addedIndex,o=e.payload;if(null===n&&null===a)return t;var i=r(t),l=o;return null!==n&&(l=i.splice(n,1)[0]),null!==a&&i.splice(a,0,l),i},i=function(t){return t&&window.init.dbSchema.tableMeta[t]?window.init.dbSchema.tableMeta[t]:[]},l=function(t,e){return""==t.relation.filter||void 0===t.relation.filter?e[t.relation.table]?e[t.relation.table].data:t.relation.filterWithUser&&e[t.model]?e[t.model].data:[]:e[t.model]?e[t.model].data:[]}},35666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),i=new $(r||[]);return o._invoke=function(t,e,n){var r=h;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw o;return I()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=k(i,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?f:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var h="suspendedStart",d="suspendedYield",p="executing",f="completed",v={};function g(){}function m(){}function b(){}var _={};s(_,o,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(F([])));w&&w!==n&&r.call(w,o)&&(_=w);var S=b.prototype=g.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function n(a,o,i,l){var s=u(t[a],t,o);if("throw"!==s.type){var c=s.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,l)}),(function(t){n("throw",t,i,l)})):e.resolve(h).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,l)}))}l(s.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function F(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=b,s(S,"constructor",b),s(b,"constructor",m),m.displayName=s(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},x(q.prototype),s(q.prototype,i,(function(){return this})),t.AsyncIterator=q,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new q(c(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(S),s(S,l,"Generator"),s(S,o,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=F,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return l.type="throw",l.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},94715:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d});var r=n(87757),a=n.n(r),o=n(15779),i=function(t){var e="table"===t?window.init.dbSchema.tableList:window.init.dbSchema.viewList;if(window.init.project&&window.init.microservices&&window.init.microservices.length>=1){var n=window.init.microservices.findIndex((function(t){return t.microservice_id===window.init.project.id}));if(n>=0)return"table"===t?window.init.microservices[n].tableList:window.init.microservices[n].viewList}return e};function l(t,e,n,r,a,o,i){try{var l=t[o](i),s=l.value}catch(t){return void n(t)}l.done?e(s):Promise.resolve(s).then(r,a)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){l(o,r,a,i,s,"next",t)}function s(t){l(o,r,a,i,s,"throw",t)}i(void 0)}))}}const c={props:["onCreate","onUpdate","src","editMode","projectID"],created:function(){this.init()},methods:{cancel:function(){this.showSubForm=!1},deleteSub:function(t){this.graphql.subs.splice(t,1)},addSub:function(){this.graphql.subs.push(JSON.parse(JSON.stringify(this.newSubData))),this.newSub={graphqlID:"",parent_identity:""},this.showSubForm=!1},showSub:function(){this.showSubForm=!0},selectTable:function(t){var e=this;return s(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.name=t,n.next=3,(0,o.Sh)(t);case 3:e.relSchema=n.sent;case 4:case"end":return n.stop()}}),n)})))()},selectSubTable:function(t){var e=this;if(t){var n="/lambda/puzzle/schema/graphql/"+t;this.$project&&(n="/lambda/puzzle/project/".concat(this.projectID,"/graphql/").concat(t)),axios.get(n).then((function(t){var n=JSON.parse(t.data.data.schema);e.newSubData.table=n.table,e.newSubData.parent_identity=e.graphql.identity,e.subFields=(0,o.Sh)(n.table)}))}},callOtherForms:function(){var t=this;return s(a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.otherForms){e.next=4;break}t.otherForms=window.otherForms,e.next=10;break;case 4:return n="/lambda/puzzle/schema/graphql",t.projectID&&(n="/lambda/puzzle/project/".concat(t.projectID,"/graphql")),e.next=8,axios.get(n);case 8:r=e.sent,t.otherGraphql=r.data.data;case 10:case"end":return e.stop()}}),e)})))()},init:function(){var t=this;1==this.$props.editMode?axios.get(this.$props.src).then((function(e){t.name=e.data.data.name,t.graphql=JSON.parse(e.data.data.schema),t.selectTable(t.graphql.table),t.callOtherForms()})).catch((function(t){console.log(t)})):this.callOtherForms()},saveSchema:function(){var t=this,e={name:this.name,schema:JSON.stringify(this.graphql)},n="/lambda/puzzle/schema/graphql";this.projectID&&(n="/lambda/puzzle/project/".concat(this.projectID,"/graphql"));var r=this.$props.editMode?this.$props.src:n;axios.post(r,e).then((function(e){e.data.status?(t.$Message.success("".concat(t._form.savedSuccessfull)),t.$props.onCreate(),t.graphql={table:"",identity:"",hidden_columns:[],checkAuth:{isLoggedIn:!1,roles:[]},subs:[],actions:{create:!1,update:!1,delete:!1}}):t.$Message.info("".concat(t._form.errorSaving))}))}},data:function(){return{tableMeta:window.init.dbSchema.tableMeta,user_roles:window.init.user_roles,relSchema:[],subFields:[],otherGraphql:[],showSubForm:!1,newSub:{graphqlID:"",parent_identity:""},newSubData:{table:"",parent_identity:"",connection_field:""},name:"",graphql:{table:"",identity:"",hidden_columns:[],checkAuth:{isLoggedIn:!1,roles:[]},subs:[],actions:{create:!1,update:!1,delete:!1},subscription:!1}}},mounted:function(){},components:{},computed:{tableList:function(){return i("table")},viewList:function(){return i("view")},lang:function(){var t=this,e=["graphqlManagement","table","selectTable","name","idField","hideFields","permissionActions","add","edit","delete","accessAndAccessRights","nevtersenHundHaruulah","accessRights","allUsersCanSee","subTables","save","subTable","connectionField","real_time","cancel","tableParentId","action"];return e.reduce((function(n,r,a){return n[r]=t.$t("graphql."+e[a]),n}),{})},_form:function(){var t=this,e=["savedSuccessfull","errorSaving","formIformationSavedSuccessfull","successDeleted"];return e.reduce((function(n,r,a){return n[r]=t.$t("dataForm."+e[a]),n}),{})},subColumns:function(){var t=this;return[{title:this.lang.table,key:"table"},{title:this.lang.tableParentId,key:"parent_identity"},{title:this.lang.connectionField,key:"connection_field"},{title:this.lang.action,key:"action",width:150,align:"center",render:function(e,n){return e("div",[e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.deleteSub(n.index)}}},t.lang.delete)])}}]}},watch:{}};var u=n(51900);const h={components:{graphql:(0,u.Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"data-source"},[n("div",{staticClass:"data-source-sidebar",staticStyle:{width:"600px"}},[n("div",{staticClass:"data-source-header"},[n("h3",[t._v("\n                "+t._s(t.lang.graphqlManagement)+"\n            ")])]),t._v(" "),n("div",{staticClass:"data-source-sidebar-wrapper"},[n("h5",[t._v(t._s(t.lang.table))]),t._v(" "),n("Select",{attrs:{placeholder:t.lang.selectTable,clearable:"",filterable:""},on:{"on-change":t.selectTable},model:{value:t.graphql.table,callback:function(e){t.$set(t.graphql,"table",e)},expression:"graphql.table"}},[n("OptionGroup",{attrs:{label:"Table list"}},t._l(t.tableList,(function(e){return n("Option",{key:e.index,attrs:{value:e}},[t._v(t._s(e)+"\n                    ")])})),1),t._v(" "),n("OptionGroup",{attrs:{label:"View list"}},t._l(t.viewList,(function(e){return n("Option",{key:e.index,attrs:{value:e}},[t._v(t._s(e)+"\n                    ")])})),1)],1),t._v(" "),n("h5",[t._v(t._s(t.lang.name))]),t._v(" "),n("Input",{staticStyle:{width:"100%"},attrs:{placeholder:t.lang.name},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("h5",[t._v("\n                "+t._s(t.lang.idField)+"\n            ")]),t._v(" "),n("Select",{attrs:{filterable:"",placeholder:t.lang.idField},model:{value:t.graphql.identity,callback:function(e){t.$set(t.graphql,"identity",e)},expression:"graphql.identity"}},t._l(t.relSchema,(function(e){return n("Option",{key:e.model,attrs:{value:e.model}},[t._v(t._s(e.model))])})),1),t._v(" "),n("h5",[t._v("\n                "+t._s(t.lang.hideFields)+"\n            ")]),t._v(" "),n("Select",{attrs:{filterable:"",multiple:"",placeholder:t.lang.hideFields},model:{value:t.graphql.hidden_columns,callback:function(e){t.$set(t.graphql,"hidden_columns",e)},expression:"graphql.hidden_columns"}},t._l(t.relSchema,(function(e){return n("Option",{key:e.model,attrs:{value:e.model}},[t._v(t._s(e.model))])})),1),t._v(" "),n("h5",[t._v(t._s(t.lang.permissionActions))]),t._v(" "),n("Checkbox",{model:{value:t.graphql.actions.create,callback:function(e){t.$set(t.graphql.actions,"create",e)},expression:"graphql.actions.create"}},[t._v(t._s(t.lang.add))]),t._v(" "),n("Checkbox",{model:{value:t.graphql.actions.update,callback:function(e){t.$set(t.graphql.actions,"update",e)},expression:"graphql.actions.update"}},[t._v(t._s(t.lang.edit))]),t._v(" "),n("Checkbox",{model:{value:t.graphql.actions.delete,callback:function(e){t.$set(t.graphql.actions,"delete",e)},expression:"graphql.actions.delete"}},[t._v(t._s(t.lang.delete))]),t._v(" "),n("h5",[t._v(t._s(t.lang.real_time))]),t._v(" "),n("Checkbox",{model:{value:t.graphql.subscription,callback:function(e){t.$set(t.graphql,"subscription",e)},expression:"graphql.subscription"}},[t._v(t._s(t.lang.real_time))]),t._v(" "),n("h5",[t._v(t._s(t.lang.accessAndAccessRights))]),t._v(" "),n("Checkbox",{model:{value:t.graphql.checkAuth.isLoggedIn,callback:function(e){t.$set(t.graphql.checkAuth,"isLoggedIn",e)},expression:"graphql.checkAuth.isLoggedIn"}},[t._v(t._s(t.lang.nevtersenHundHaruulah))]),t._v(" "),t.graphql.checkAuth.isLoggedIn?n("h5",[t._v(t._s(t.lang.accessRights))]):t._e(),t._v(" "),t.graphql.checkAuth.isLoggedIn?n("h6",[t._v("( "+t._s(t.lang.allUsersCanSee)+" )")]):t._e(),t._v(" "),n("Select",{attrs:{"graphql.checkAuth.isLoggedIn":"",filterable:"",multiple:"",placeholder:t.lang.accessRights},model:{value:t.graphql.checkAuth.roles,callback:function(e){t.$set(t.graphql.checkAuth,"roles",e)},expression:"graphql.checkAuth.roles"}},t._l(t.user_roles,(function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.display_name))])})),1),t._v(" "),n("h5",[t._v(t._s(t.lang.subTables)),n("Button",{attrs:{type:"primary",shape:"circle",icon:"md-add"},on:{click:t.showSub}})],1),t._v(" "),n("Table",{attrs:{border:"",columns:t.subColumns,data:t.graphql.subs}})],1)]),t._v(" "),n("div",{staticClass:"data-source-workspace"},[n("div",{staticClass:"data-source-header"},[n("div",{staticClass:"data-source-header-buttons"},[n("Button",{attrs:{type:"success"},on:{click:t.saveSchema}},[t._v(t._s(t.lang.save))])],1)]),t._v(" "),n("div",{staticClass:"graphql-builder"})]),t._v(" "),n("Modal",{attrs:{title:t.lang.subTables},on:{"on-ok":t.addSub,"on-cancel":t.cancel},model:{value:t.showSubForm,callback:function(e){t.showSubForm=e},expression:"showSubForm"}},[n("div",[n("h5",[t._v(t._s(t.lang.subTable))]),t._v(" "),n("Select",{attrs:{filterable:"",placeholder:t.lang.subTable},on:{"on-change":t.selectSubTable},model:{value:t.newSub.graphqlID,callback:function(e){t.$set(t.newSub,"graphqlID",e)},expression:"newSub.graphqlID"}},t._l(t.otherGraphql,(function(e){return n("Option",{key:e.name,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1),t._v(" "),n("h5",[t._v("\n                "+t._s(t.lang.connectionField)+"\n            ")]),t._v(" "),n("Select",{attrs:{filterable:"",placeholder:t.lang.connectionField},model:{value:t.newSubData.connection_field,callback:function(e){t.$set(t.newSubData,"connection_field",e)},expression:"newSubData.connection_field"}},t._l(t.subFields,(function(e){return n("Option",{key:e.model,attrs:{value:e.model}},[t._v(t._s(e.model))])})),1)],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("div",{staticStyle:{"text-align":"right"}},[n("button",{staticClass:"ivu-btn ivu-btn-info",attrs:{type:"button"},on:{click:t.addSub}},[t._v(t._s(t.lang.add))]),t._v(" "),n("button",{staticClass:"ivu-btn ivu-btn-default",staticStyle:{"margin-left":"8px"},on:{click:t.cancel}},[t._v(t._s(t.lang.cancel))])])])])],1)}),[],!1,null,null,null).exports},data:function(){return{editMode:!1,src:""}},created:function(){var t=this.$route.params.id;this.$project?void 0!==t&&""!==t&&null!==t?(this.editMode=!0,this.src="/lambda/puzzle/project/".concat(this.$project.id,"/graphql/").concat(this.$route.params.id)):this.src="/lambda/puzzle/project/".concat(this.$project.id,"/graphql"):void 0!==t&&""!==t&&null!==t&&(this.editMode=!0,this.src="/lambda/puzzle/schema/graphql/".concat(this.$route.params.id))},methods:{onCreate:function(){this.$router.push("/graphql")},onUpdate:function(){this.$router.push("/graphql")}}};const d=(0,u.Z)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page "},[t.$project?n("graphql",{attrs:{editMode:t.editMode,projectID:t.$project.id,src:t.src,onCreate:t.onCreate,onUpdate:t.onUpdate}}):n("graphql",{attrs:{editMode:t.editMode,src:t.src,onCreate:t.onCreate,onUpdate:t.onUpdate}})],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=graphql-builder.a78a5bf9dba55ddf.js.map