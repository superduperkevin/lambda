"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6593],{95138:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});const n=()=>Promise.all([i.e(8204),i.e(5470)]).then(i.bind(i,45512)),r=()=>Promise.all([i.e(8204),i.e(4869)]).then(i.bind(i,26960)),o=()=>Promise.all([i.e(8204),i.e(2203)]).then(i.bind(i,42879)),a=()=>Promise.all([i.e(8204),i.e(7679)]).then(i.bind(i,88003)),s=()=>Promise.all([i.e(8204),i.e(6967)]).then(i.bind(i,6739)),l={props:["src","id","chart_filter","hideTitle","filters","hideZoom","minH","limit"],data:()=>({currentProperties:null,type:"",loading:!0}),methods:{element:e=>{if(null!=e){if("AreaChart"==e||"LineChart"==e||"ColumnChart"==e)return n;if("PieChart"==e||"TreeMapChart"==e||"FunnelChart"==e)return r;if("DataTable"==e)return o;if("Radar"==e)return a;if("countBox"==e)return s}},init(){this.loading=!0,axios.get(this.$props.src).then((e=>{this.currentProperties=JSON.parse(e.data.data.schema),this.type=this.currentProperties.type,this.loading=!1})).catch((e=>{console.log(e)}))},changeFilter(e){this.$emit("changeFilter",e)},unFilter(){this.$emit("unFilter")}},mounted(){this.init()},computed:{}};const h=(0,i(51900).Z)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:"AreaChart"==e.type||"LineChart"==e.type||"ColumnChart"==e.type?"chart-element-wide":"countBox"==e.type?"count-box":"chart-element",style:e.minH?"min-height: "+e.minH:""},[e.loading?i("Spin",{attrs:{size:"large",fix:""}}):i(e.element(e.type),e._b({tag:"component",attrs:{hideTitle:e.hideTitle,filters:e.filters,hideZoom:e.hideZoom,chart_filter:e.chart_filter,limit:e.limit,id:e.id},on:{changeFilter:e.changeFilter,unFilter:e.unFilter}},"component",e.currentProperties,!1))],1)}),[],!1,null,null,null).exports},51900:(e,t,i)=>{function n(e,t,i,n,r,o,a,s){var l,h="function"==typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=i,h._compiled=!0),n&&(h.functional=!0),o&&(h._scopeId="data-v-"+o),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},h._ssrRegister=l):r&&(l=s?function(){r.call(this,(h.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(h.functional){h._injectStyles=l;var c=h.render;h.render=function(e,t){return l.call(t),c(e,t)}}else{var d=h.beforeCreate;h.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:h}}i.d(t,{Z:()=>n})}}]);