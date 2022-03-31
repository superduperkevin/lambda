"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2313],{80198:(s,e,t)=>{t.r(e),t.d(e,{default:()=>a});const i={props:["selectedLang"],name:"aside-password-reset",data:()=>({loading:!1,isSuccess:!1,isError:!1,errorMsg:"",successMsg:"",credentials:{code:null,email:null,password:null,password_confirm:null}}),computed:{lang(){const s=["passwordReset","passwordResetCode","email","password","passwordConfirm"];return s.reduce(((e,t,i)=>(e[t]=this.$t("user."+s[i]),e)),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,axios.post("/auth/password-reset",{...this.credentials,lang:this.selectedLang}).then((({data:s})=>{setTimeout((()=>{this.loading=!1,s.status?(this.isSuccess=!0,this.successMsg=s.msg,setTimeout((()=>{this.$router.push("login")}),2e3)):(this.isError=!0,this.errorMsg=this.lang.emailSendError)}),1e3)})).catch((s=>{this.errorMsg=s.response.data.error,setTimeout((()=>{this.loading=!1,this.isError=!0}),1e3)})))}}};const a=(0,t(51900).Z)(i,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"form-wrap"},[t("div",{staticClass:"form-content"},[t("h2",[s._v(s._s(s.lang.passwordReset))]),s._v(" "),t("form",{staticClass:"login-form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),s.onSubmit.apply(null,arguments)}}},[t("div",{staticClass:"form-element input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.code,expression:"credentials.code"}],attrs:{type:"text",id:"code",name:"code",autocomplete:"off",placeholder:s.lang.passwordResetCode},domProps:{value:s.credentials.code},on:{input:function(e){e.target.composing||s.$set(s.credentials,"code",e.target.value)}}}),s._v(" "),t("span",{staticClass:"icon pass"})]),s._v(" "),t("div",{staticClass:"form-element input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.email,expression:"credentials.email"}],attrs:{type:"text",id:"email",name:"email",autocomplete:"off",placeholder:s.lang.email},domProps:{value:s.credentials.email},on:{input:function(e){e.target.composing||s.$set(s.credentials,"email",e.target.value)}}}),s._v(" "),t("span",{staticClass:"icon user"})]),s._v(" "),t("div",{staticClass:"form-element input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.password,expression:"credentials.password"}],attrs:{type:"password",disabled:s.loading,placeholder:s.lang.password},domProps:{value:s.credentials.password},on:{input:function(e){e.target.composing||s.$set(s.credentials,"password",e.target.value)}}}),s._v(" "),t("span",{staticClass:"icon pass"})]),s._v(" "),t("div",{staticClass:"form-element input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.credentials.password_confirm,expression:"credentials.password_confirm"}],attrs:{type:"password",disabled:s.loading,placeholder:s.lang.passwordConfirm},domProps:{value:s.credentials.password_confirm},on:{input:function(e){e.target.composing||s.$set(s.credentials,"password_confirm",e.target.value)}}}),s._v(" "),t("span",{staticClass:"icon pass"})]),s._v(" "),t("div",{staticClass:"form-element "},[t("button",{staticClass:"button",staticStyle:{width:"100%"},attrs:{id:"submit",disabled:s.loading}},[t("span",{attrs:{id:"submitTxt"}},[s._v(s._s(s.lang.passwordReset))]),s._v(" "),t("span",{staticClass:"loader"},[s.loading?t("div",{staticClass:"sk-fading-circle"},[t("div",{staticClass:"sk-circle1 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle2 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle3 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle4 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle5 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle6 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle7 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle8 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle9 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle10 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle11 sk-circle"}),s._v(" "),t("div",{staticClass:"sk-circle12 sk-circle"})]):s._e()])])])]),s._v(" "),t("div",{attrs:{id:"msg"}},[s.isSuccess?t("span",{staticClass:"success"},[s._v(s._s(s.successMsg))]):s._e(),s._v(" "),s.isError?t("span",{staticClass:"error"},[s._v(s._s(s.errorMsg))]):s._e()])])])}),[],!1,null,null,null).exports},51900:(s,e,t)=>{function i(s,e,t,i,a,r,o,c){var n,l="function"==typeof s?s.options:s;if(e&&(l.render=e,l.staticRenderFns=t,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),o?(n=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),a&&a.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(o)},l._ssrRegister=n):a&&(n=c?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),n)if(l.functional){l._injectStyles=n;var d=l.render;l.render=function(s,e){return n.call(e),d(s,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,n):[n]}return{exports:s,options:l}}t.d(e,{Z:()=>i})}}]);
//# sourceMappingURL=auth-register-auth-password-password_reset.abd4c0375c3bc785.js.map