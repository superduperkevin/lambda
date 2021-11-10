"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8313],{3712:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});const n={computed:{menuMode:function(){var e=localStorage.getItem("menuMode");return e||void 0}},data:function(){return{options:{height:"1000px"},pageType:"",property:{withCrudLog:window.init.withCrudLog,withoutHeader:!0===window.init.withoutHeader,page_id:null,template:"canvas",mode:window.init.crud_mode?window.init.crud_mode:void 0,title:"",grid:null,form:null,form_width:800,view_url:null,actions:[],user_condition:null,permissions:{c:!1,r:!1,u:!1,d:!1}},iframeUrl:"",iframeTitle:"",submenu:[],showSub:!1,menu:window.init.menu,cruds:window.init.cruds,permissions:window.init.permissions.permissions,pageTitle:"",subMenuId:"0",showNestedMenu:!1}},methods:{checkSub:function(){var e=this,t=this.menu.findIndex((function(t){return t.id==e.$route.params.menu_id}));if(t>=0)if(this.menu[t].children.length>=1)if(this.menu[t].children.forEach((function(t,i){t.children.length>=1&&(e.showNestedMenu=!0,e.$route.params.sub_menu_id==t.id&&(e.subMenuId=t.id))})),this.pageTitle=this.getTitle(this.menu[t]),this.pageTitle=this.getTitle(this.menu[t]),this.$route.matched.length<=1){var i=this.getShowAbleChild(this.menu[t].children);i&&this.$router.push("/p/".concat(this.$route.params.menu_id,"/").concat(i.id))}else this.subMenu=this.menu[t].children,this.showSub=!0;else this.showSub=!1,this.getPage()},getShowAbleChild:function(e){var t=this,i=e.findIndex((function(e){return t.can(e)}));return i>=0?e[i]:null},can:function(e){return!!this.permissions[e.id]&&!!this.permissions[e.id].show},getTitle:function(e){if("crud"==e.link_to){var t=this.cruds.findIndex((function(t){return t.id==e.url}));return t>=0?this.cruds[t].title:""}return e.title},getPage:function(){var e=this,t=this.menu.findIndex((function(t){return t.id==e.$route.params.menu_id}));if(t>=0){var i=this.menu[t];switch(this.pageType=i.link_to,this.pageType){case"crud":var n=this.cruds.findIndex((function(e){return e.id==i.url}));if(n>=0){this.property.page_id=i.id,this.property.title=this.cruds[n].title,this.property.grid=this.cruds[n].grid,this.property.form=this.cruds[n].form,this.property.form_width=this.cruds[n].form_width?this.cruds[n].form_width:null,this.property.view_url=this.cruds[n].view_url,this.property.permissions.c=this.permissions[i.id].c,this.property.permissions.r=this.permissions[i.id].r,this.property.permissions.u=this.permissions[i.id].u,this.property.permissions.d=this.permissions[i.id].d;var s={};this.permissions[i.id].formCondition&&(s.formCondition=this.permissions[i.id].formCondition),this.permissions[i.id].gridCondition&&(s.gridCondition=this.permissions[i.id].gridCondition),s&&(this.property.user_condition=s)}break;case"link":window.location=this.menu[t].url;break;case"router-link":console.log(this.menu[t].url),this.$router.push(this.menu[t].url);break;case"iframe":this.iframeUrl=i.url,this.iframeTitle=i.title}}}},mounted:function(){this.checkSub()}};const s=(0,i(51900).Z)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"page"},[e.showSub?i("router-view",{key:e.$route.path},[i("nav",{directives:[{name:"show",rawName:"v-show",value:e.showSub&&"nested"!=e.menuMode,expression:"showSub && menuMode != 'nested'"}],attrs:{slot:"v-nav"},slot:"v-nav"},[i("div",{staticClass:"card sub-nav-list"},[i("h3",{staticClass:"card-header"},[e._v(e._s(e.pageTitle))]),e._v(" "),e.showNestedMenu?i("Collapse",{attrs:{simple:""},model:{value:e.subMenuId,callback:function(t){e.subMenuId=t},expression:"subMenuId"}},e._l(e.subMenu,(function(t,n){return e.can(t)&&t.children.length>=1?i("Panel",{key:n,attrs:{name:t.id}},[i("span",{domProps:{innerHTML:e._s(e.getTitle(t))}}),e._v(" "),i("ul",{staticClass:"card-body",attrs:{slot:"content"},slot:"content"},e._l(t.children,(function(n,s){return e.can(n)?i("li",{key:s},["link"!=n.link_to&&"router-link"!=n.link_to?i("router-link",{attrs:{to:"/p/"+e.$route.params.menu_id+"/"+t.id+"/"+n.id}},[n.icon?i("i",{class:n.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(n))}})]):e._e(),e._v(" "),"router-link"==n.link_to?i("router-link",{attrs:{to:n.url}},[n.icon?i("i",{class:n.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(n))}})]):e._e(),e._v(" "),"link"==n.link_to?i("a",{attrs:{href:n.url,target:t.target}},[n.icon?i("i",{class:n.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(n))}})]):e._e()],1):e._e()})),0)]):e._e()})),1):e._e(),e._v(" "),i("ul",{staticClass:"card-body"},e._l(e.subMenu,(function(t,n){return e.can(t)&&t.children.length<=0?i("li",{key:n},["link"!=t.link_to&&"router-link"!=t.link_to?i("router-link",{attrs:{to:"/p/"+e.$route.params.menu_id+"/"+t.id}},[t.icon?i("i",{class:t.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(t))}})]):"router-link"==t.link_to?i("router-link",{attrs:{to:t.url}},[t.icon?i("i",{class:t.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(t))}})]):"link"==t.link_to?i("a",{attrs:{href:t.url,target:t.target}},[t.icon?i("i",{class:t.icon}):e._e(),e._v(" "),i("span",{domProps:{innerHTML:e._s(e.getTitle(t))}})]):e._e()],1):e._e()})),0)],1)])]):e._e(),e._v(" "),e.showSub?e._e():i("div",{class:"iframe"==e.pageType?"iframe-page":"sub-page"},["crud"==e.pageType?i("krud",{staticClass:"material",attrs:{template:e.property.template,property:e.property}},[i("user-control",{attrs:{slot:"right"},slot:"right"})],1):e._e(),e._v(" "),"iframe"==e.pageType?i("iframe",{attrs:{src:e.iframeUrl}}):e._e(),e._v(" "),"iframe"==e.pageType&&e.property.withoutHeader?i("portal",{attrs:{to:"header-left"}},[i("h3",[e._v(e._s(e.iframeTitle))])]):e._e()],1)],1)}),[],!1,null,null,null).exports},51900:(e,t,i)=>{function n(e,t,i,n,s,r,o,u){var a,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=i,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),o?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=a):s&&(a=u?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),a)if(l.functional){l._injectStyles=a;var d=l.render;l.render=function(e,t){return a.call(t),d(e,t)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,a):[a]}return{exports:e,options:l}}i.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=page-index.3a49477cf7901b0b.js.map