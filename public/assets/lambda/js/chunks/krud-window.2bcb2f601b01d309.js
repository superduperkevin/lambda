(self.webpackChunk=self.webpackChunk||[]).push([[4656],{52542:(t,e,s)=>{"use strict";s.d(e,{H:()=>r});var i=s(40962),n=s.n(i);const r=(t,e)=>{let s=n().apply(t,e);return Array.isArray(s)?!(s.length>=1)||!s[0]:!s}},39017:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});const i={props:["refresh","exportExcel","print","search","save","options","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isPrint","isRefresh","isSave","isSearch","exportLoading"],data:()=>({searchModel:null}),computed:{lang(){const t=["_save","re_call","_print","download_file","excelUpload"];return t.reduce(((e,s,i)=>(e[s]=this.$t("crud."+t[i]),e)),{})}},methods:{searchGrid(t){t.preventDefault(),this.$props.search(this.searchModel)}}};const n=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"crud-page-header-right-inside"},[s("Tooltip",{attrs:{content:t.lang._save}},[t.isSave?s("a",{staticClass:"btnLine",on:{click:t.$props.save}},[s("i",{staticClass:"ti-save"})]):t._e()]),t._v(" "),s("Tooltip",{attrs:{content:t.lang.re_call}},[t.isRefresh?s("a",{staticClass:"btnLine",on:{click:t.$props.refresh}},[s("i",{staticClass:"ti-reload"})]):t._e()]),t._v(" "),t.isPrint?s("Tooltip",{attrs:{content:t.lang._print}},[s("a",{staticClass:"btnLine",on:{click:t.$props.print}},[s("i",{staticClass:"ti-printer"})])]):t._e(),t._v(" "),t.isExcelUpload?s("Tooltip",{attrs:{content:t.lang.excelUpload}},[t.$props.excelUploadCustomUrl?s("a",{staticClass:"btnLine",attrs:{href:t.$props.excelUploadCustomUrl}},[s("i",{staticClass:"ti-layers"})]):s("a",{staticClass:"btnLine",on:{click:t.$props.excelUploadMethod}},[s("i",{staticClass:"ti-layers"})])]):t._e(),t._v(" "),t.isExcel?s("Tooltip",{attrs:{content:t.lang.download_file}},[t.$props.exportLoading?s("a",{staticClass:"btnLine",attrs:{href:"javascript:void(0)"}},[s("Spin",[s("Icon",{staticClass:"spin-icon-load",attrs:{type:"ios-loading",size:"18"}})],1)],1):s("a",{staticClass:"btnLine",on:{click:t.$props.exportExcel}},[s("i",{staticClass:"ti-download"})])]):t._e(),t._v(" "),t.isSearch?s("form",{on:{submit:t.searchGrid}},[s("div",{staticClass:"right-search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchModel,expression:"searchModel"}],staticClass:"right-search-input",attrs:{placeholder:t.$static_words?t.$static_words.search:"Хайх..."},domProps:{value:t.searchModel},on:{input:function(e){e.target.composing||(t.searchModel=e.target.value)}}}),t._v(" "),s("i",{staticClass:"ti-search"})])]):t._e()],1)}),[],!1,null,null,null).exports;var r=s(52542);const o={props:["title","icon","grid","form","hideHeader","hasSelection","actions","dbClickAction","onRowSelect","rowCurrentChange","permissions","user_condition","custom_condition","view_url","mode","onPropertySuccess","onPropertyError","page_id","withoutHeader","withCrudLog","projects_id"],components:{krudtools:n},data:()=>({closeByBtn:window.init.closeByBtn,gridSrc:"",formSrc:"",editMode:!1,searchModel:"",form_width:600,exportLoading:!1,isPrint:!1,isExcel:!1,isExcelUpload:!1,excelUploadCustomUrl:null,isRefresh:!1,isSave:!1,rowId:null}),computed:{hasVNavSlot(){return!!this.$slots["v-nav"]},hasNavSlot(){return!!this.$slots.nav},hasLeftSlot(){return!!this.$slots.left},url(){if(null!==this.projects_id&&""!=this.projects_id&&null!=this.projects_id&&window.init.microserviceSettings&&window.init.microserviceSettings.length>=1){let t=window.init.microserviceSettings.findIndex((t=>t.project_id==this.projects_id));if(t>=0)return window.lambda.microservice_dev?window.init.microserviceSettings[t].dev_url:window.init.microserviceSettings[t].production_url}return""}},methods:{view(t){this.rowId=t,this.editMode=!0,this.$refs.form.viewMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},edit(t,e){if(this.rowId=t,this.permissions&&""!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS&&null!=this.permissions.gridEditConditionJS){if(!(0,r.H)(this.permissions.gridEditConditionJS,e))return}this.editMode=!0,this.$refs.form.editModel(t),this.templateEdit&&this.templateEdit()},clone(t){this.$refs.form.cloneModel(t),this.templateEdit&&this.templateEdit()},quickEdit(t){console.log(t)},refresh(){this.searchModel=null,this.$refs.grid.refresh()},search(t){this.$refs.grid.searchData(t,1)},stopLoading(t){this.exportLoading=!1,t||this.$Message.error("Татах үед алдаа гарлаа!")},exportExcel(){this.exportLoading=!0,this.$refs.grid.exportExcel(this.stopLoading)},print(){this.$refs.grid.print()},excelUploadMethod(){this.$refs.grid.importExcel()},save(){this.$refs.grid.saveGridData()},onSuccess(t){void 0!==this.mode&&this.mode&&"refresh"==this.mode?this.$refs.grid.refresh():this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t),this.editMode=!1,this.templateOnSuccess&&this.templateOnSuccess(t),this.onPropertySuccess&&this.onPropertySuccess()},onError(){this.templateOnError&&this.templateOnError(),this.onPropertyError&&this.onPropertyError()}}}},85127:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});var i=s(94015),n=s.n(i),r=s(23645),o=s.n(r)()(n());o.push([t.id,".blackout[data-v-8a0c47cc]{background-color:rgba(0,0,0,.3);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:10}.dock[data-v-8a0c47cc]{box-shadow:-2px 3px 3px rgba(0,0,0,.2);position:absolute;right:0;top:0;z-index:3000}.dock[data-v-8a0c47cc],section[data-v-8a0c47cc]{height:100%;overflow:hidden}section[data-v-8a0c47cc]{box-sizing:border-box;display:inline-block;position:relative}.panel>div[data-v-8a0c47cc]{height:100%;overflow:auto}.panel.default[data-v-8a0c47cc]{background-color:#fff}.action-close[data-v-8a0c47cc]{cursor:pointer;font-size:24px;position:absolute;right:12px;top:6px}.action-extra.default[data-v-8a0c47cc]{bottom:1rem;cursor:pointer;position:absolute;right:1rem}.vsp-br[data-v-8a0c47cc]{border-right:2px solid rgba(0,0,0,.2)}.vsp-bl[data-v-8a0c47cc]{border-left:2px solid rgba(0,0,0,.1)}.slide-out-enter-active[data-v-8a0c47cc],.slide-out-leave-active[data-v-8a0c47cc]{transition:transform .4s cubic-bezier(.215,.61,.355,1)}.slide-out-enter[data-v-8a0c47cc],.slide-out-leave-to[data-v-8a0c47cc]{transform:translateX(100%)}.fade-enter-active[data-v-8a0c47cc],.fade-leave-active[data-v-8a0c47cc]{transition:opacity .4s ease-in}.fade-enter[data-v-8a0c47cc],.fade-leave-to[data-v-8a0c47cc]{opacity:0}.bg-transparent[data-v-8a0c47cc]{background-color:transparent!important}","",{version:3,sources:["webpack://./node_modules/@lambda-platform/lambda-builder/src/modules/krud/components/slidePanel.vue"],names:[],mappings:"AA2QA,2BAOA,+BAAA,CAFA,YAAA,CAFA,MAAA,CAFA,cAAA,CACA,KAAA,CAEA,WAAA,CAEA,UAEA,CAEA,uBAMA,sCAAA,CALA,iBAAA,CAEA,OAAA,CADA,KAAA,CAGA,YAGA,CAEA,gDANA,WAAA,CAGA,eASA,CANA,yBAIA,qBAAA,CAFA,oBAAA,CADA,iBAKA,CAEA,4BACA,WAAA,CACA,aACA,CAEA,gCACA,qBACA,CAEA,+BAIA,cAAA,CACA,cAAA,CAJA,iBAAA,CAEA,UAAA,CADA,OAIA,CAEA,uCAEA,WAAA,CAEA,cAAA,CAHA,iBAAA,CAEA,UAEA,CAEA,yBACA,qCACA,CAEA,yBACA,oCACA,CAEA,kFAEA,sDACA,CAEA,uEAEA,0BACA,CAEA,wEAEA,8BACA,CAEA,6DAEA,SACA,CAEA,iCACA,sCACA",sourcesContent:['<template>\n    <div>\n        <transition name="fade">\n            <div v-if="isVisibleDock" class="blackout" @click="closeAll"></div>\n        </transition>\n        <transition name="slide-out" v-on:enter="d_enter">\n            <div v-show="isVisibleDock" ref="dock" class="dock" :style="_style(0)" :class="_class(0)">\n                <transition-group name="slide-out" v-on:before-leave="s_beforeLeave" v-on:afterLeave="s_afterLeave">\n                    <section v-for="(isVisible, i) in isVisibleSections" v-if="isVisible" ref="section" class="panel"\n                             :key="\'k\'+i" :style="_style(i+1)" :class="_class(i+1)">\n                        <a href="#" class="action-close" @click.prevent="close(i)">\n                            <Icon type="ios-close-circle-outline" />\n                        </a>\n                        <slot></slot>\n                    </section>\n                </transition-group>\n            </div>\n        </transition>\n    </div>\n</template>\n\n<script>\nlet easeOutCubic = "cubic-bezier(0.215, 0.61, 0.355, 1)";\nlet easeOutSine = "cubic-bezier(0.39, 0.575, 0.565, 1)";\nlet bz_func = easeOutCubic;\n\nexport default {\n    name: "VueSideoutPanel",\n\n    props: {\n        closeByBtn: {\n            default: false,\n            required: false\n        },\n        value: {\n//            type: Boolean,\n            default: false,\n            required: true\n        },\n        count: {\n//            type: Number,\n            default: 1,\n            validator(v) {\n                return v > 0 && v <= 2;\n            }\n        },\n        closeHtml: {\n//            type: String,\n            default: "Close"\n        },\n        closeAllHtml: {\n            type: String,\n            default: "Close all"\n        },\n        widths: {\n            type: Array,\n            default() {\n                if (this.count == 1) return ["100%"];\n                else return ["100%", "50%"];\n            },\n            validator(v) {\n                return v.reduce(\n                    (a, b) => a && /col-(\\w+-)?\\d+|\\d+px|\\d+%/.test(b),\n                    true\n                );\n            }\n        },\n        classes: {\n            type: Array,\n            default() {\n                return new Array(5).fill("default");\n            },\n            validator(v) {\n                return v.reduce(\n                    (a, b) => a && (!b || typeof b == "string"),\n                    true\n                );\n            }\n        },\n        styles: {\n            type: Array,\n            default() {\n                return [{}, {}, {}, {}, {}];\n            },\n            validator(v) {\n                return v.reduce(\n                    (a, b) => a && (!b || typeof b == "object"),\n                    true\n                );\n            }\n        }\n    },\n\n    data() {\n        return {\n            isVisibleDock: this.value,\n            isVisibleSections: [],\n            isShifted: false,\n            d_styles: [],\n            d_classes: []\n        };\n    },\n\n    created() {\n        this.init();\n    },\n\n    watch: {\n        value() {\n            this.isVisibleDock = this.value;\n        },\n        widths() {\n            this.init();\n        }\n    },\n\n    computed: {\n        isVisibleCloseAll() {\n            return this.count == 2 && !this.isShifted;\n        }\n    },\n\n    methods: {\n        init() {\n            this.isShifted = false;\n\n            this.d_styles = [];\n            this.d_classes = [];\n\n            for (let i = 0; i < 5; i++) {\n                if (this.classes[i] && this.classes[i].length >= 0) {\n                    i == 2 && this.classes[i] == "same"\n                        ? this.d_classes.push(this.classes[i - 1])\n                        : this.d_classes.push(this.classes[i]);\n                } else {\n                    this.d_classes.push("default");\n                }\n            }\n            if (this.count == 2) {\n                this.d_classes[1] += " vsp-br";\n                this.d_classes[2] += " vsp-bl";\n            }\n            for (let i = 0; i < 5; i++) {\n                i == 2 && this.styles[i] && this.styles[i].same\n                    ? this.d_styles.push(\n                    Object.assign({}, this.styles[i - 1] || {})\n                    )\n                    : this.d_styles.push(this.styles[i] || {});\n            }\n\n            let isSecondSet = false;\n            if (this.count == 1) {\n                this.widths[0] = this.widths[0] || this.widths[1];\n                this.widths[1] = "100%";\n            } else if (/\\d+%/.test(this.widths[1])) {\n                this.d_styles[2].width = `${100 -\n                this.widths[1].slice(0, -1)}%`;\n                isSecondSet = true;\n            }\n            this.widths.forEach((_w, i) => {\n                if (/col-(\\w+-)?\\d+/.test(_w)) {\n                    this.d_classes[i] += " " + _w;\n                } else {\n                    if (i == 2 && isSecondSet) return;\n                    this.d_styles[i].width = _w;\n                }\n            });\n\n            this.isVisibleSections = new Array(this.count).fill(1);\n        },\n\n        _style(index) {\n            return this.d_styles[index];\n        },\n\n        _class(index) {\n            return this.d_classes[index];\n        },\n\n        setTransform(el, v) {\n            [\n                "webkitTransform",\n                "MozTransform",\n                "msTransform",\n                "OTransform",\n                "transform"\n            ].forEach(t => {\n                el.style[t] = v[0];\n            });\n            el.style.transitionTimingFunction = v[1];\n            el.style.transitionDuration = v[2];\n        },\n\n        d_shift() {\n            let cx = -this.$refs.section[1].offsetWidth;\n            this.setTransform(this.$refs.dock, ["right", bz_func, ".8s"]);\n            this.$refs.dock.style.right = `${cx}px`;\n            this.isShifted = true;\n        },\n\n        s_beforeLeave() {\n            if (this.isVisibleSections[1]) {\n                this.$refs.dock.style.boxShadow = "none";\n                this.$refs.section[1].style.boxShadow =\n                    "-3px 3px 9px rgba(0, 0, 0, 0.3)";\n            } else {\n                this.d_shift();\n            }\n        },\n\n        s_afterLeave() {\n            if (this.isVisibleSections[1]) {\n                this.$refs.dock.style.boxShadow =\n                    "-3px 3px 9px rgba(0, 0, 0, 0.3)";\n                this.$refs.dock.style.width =\n                    this.$refs.section[0].offsetWidth + "px";\n                this.$refs.section[0].style.width = "100%";\n            }\n        },\n\n        d_enter() {\n            this.count == 2 && !this.showExtra && this.d_shift();\n        },\n\n        closeDock() {\n            this.isVisibleDock = false;\n            this.init();\n            this.$emit("close");\n        },\n\n        close(index) {\n            if (this.count == 1) {\n                this.closeDock();\n            } else if (this.isShifted) {\n                this.setTransform(this.$refs.dock, [\n                    "right",\n                    easeOutSine,\n                    "1.2s"\n                ]);\n                this.closeDock();\n            } else if (index == 0) {\n                this.$set(this.isVisibleSections, 0, 0);\n            } else if (index == 1 && this.isVisibleSections[0]) {\n                this.d_shift();\n            } else {\n                this.closeDock();\n            }\n        },\n\n        closeAll() {\n            if(!this.closeByBtn) {\n                if (this.isShifted) {\n                    this.setTransform(this.$refs.dock, [\n                        "right",\n                        easeOutSine,\n                        "1.2ss"\n                    ]);\n                }\n                this.closeDock();\n            }\n        }\n    }\n};\n<\/script>\n\n\n<style scoped>\n.blackout {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 10;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.dock {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    z-index: 3000;\n    box-shadow: -2px 3px 3px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n}\n\nsection {\n    position: relative;\n    display: inline-block;\n    height: 100%;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n.panel > div {\n    height: 100%;\n    overflow: auto;\n}\n\n.panel.default {\n    background-color: #fff;\n}\n\n.action-close {\n    position: absolute;\n    top: 6px;\n    right: 12px;\n    cursor: pointer;\n    font-size: 24px;\n}\n\n.action-extra.default {\n    position: absolute;\n    bottom: 1rem;\n    right: 1rem;\n    cursor: pointer;\n}\n\n.vsp-br {\n    border-right: 2px solid rgba(0, 0, 0, 0.2);\n}\n\n.vsp-bl {\n    border-left: 2px solid rgba(0, 0, 0, 0.1);\n}\n\n.slide-out-enter-active,\n.slide-out-leave-active {\n    transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n\n.slide-out-enter,\n.slide-out-leave-to {\n    transform: translateX(100%);\n}\n\n.fade-enter-active,\n.fade-leave-active {\n    transition: opacity 0.4s ease-in;\n}\n\n.fade-enter,\n.fade-leave-to {\n    opacity: 0;\n}\n\n.bg-transparent {\n    background-color: transparent !important;\n}\n</style>\n'],sourceRoot:""}]);const a=o},23645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s=t(e);return e[2]?"@media ".concat(e[2]," {").concat(s,"}"):s})).join("")},e.i=function(t,s,i){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);i&&n[l[0]]||(s&&(l[2]?l[2]="".concat(s," and ").concat(l[2]):l[2]=s),e.push(l))}},e}},94015:t=>{"use strict";function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var s=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==s)return;var i,n,r=[],o=!0,a=!1;try{for(s=s.call(t);!(o=(i=s.next()).done)&&(r.push(i.value),!e||r.length!==e);o=!0);}catch(t){a=!0,n=t}finally{try{o||null==s.return||s.return()}finally{if(a)throw n}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}t.exports=function(t){var s=e(t,4),i=s[1],n=s[3];if(!n)return i;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),l=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[i].concat(l).concat([a]).join("\n")}return[i].join("\n")}},40962:function(t,e,s){var i,n;i=function(){"use strict";function t(t){for(var e=[],s=0,i=t.length;s<i;s++)-1===e.indexOf(t[s])&&e.push(t[s]);return e}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var e={},s={"==":function(t,e){return t==e},"===":function(t,e){return t===e},"!=":function(t,e){return t!=e},"!==":function(t,e){return t!==e},">":function(t,e){return t>e},">=":function(t,e){return t>=e},"<":function(t,e,s){return void 0===s?t<e:t<e&&e<s},"<=":function(t,e,s){return void 0===s?t<=e:t<=e&&e<=s},"!!":function(t){return e.truthy(t)},"!":function(t){return!e.truthy(t)},"%":function(t,e){return t%e},log:function(t){return console.log(t),t},in:function(t,e){return!(!e||void 0===e.indexOf)&&-1!==e.indexOf(t)},cat:function(){return Array.prototype.join.call(arguments,"")},substr:function(t,e,s){if(s<0){var i=String(t).substr(e);return i.substr(0,i.length+s)}return String(t).substr(e,s)},"+":function(){return Array.prototype.reduce.call(arguments,(function(t,e){return parseFloat(t,10)+parseFloat(e,10)}),0)},"*":function(){return Array.prototype.reduce.call(arguments,(function(t,e){return parseFloat(t,10)*parseFloat(e,10)}))},"-":function(t,e){return void 0===e?-t:t-e},"/":function(t,e){return t/e},min:function(){return Math.min.apply(this,arguments)},max:function(){return Math.max.apply(this,arguments)},merge:function(){return Array.prototype.reduce.call(arguments,(function(t,e){return t.concat(e)}),[])},var:function(t,e){var s=void 0===e?null:e,i=this;if(void 0===t||""===t||null===t)return i;for(var n=String(t).split("."),r=0;r<n.length;r++){if(null==i)return s;if(void 0===(i=i[n[r]]))return s}return i},missing:function(){for(var t=[],s=Array.isArray(arguments[0])?arguments[0]:arguments,i=0;i<s.length;i++){var n=s[i],r=e.apply({var:n},this);null!==r&&""!==r||t.push(n)}return t},missing_some:function(t,s){var i=e.apply({missing:s},this);return s.length-i.length>=t?[]:i}};return e.is_logic=function(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)&&1===Object.keys(t).length},e.truthy=function(t){return!(Array.isArray(t)&&0===t.length||!t)},e.get_operator=function(t){return Object.keys(t)[0]},e.get_values=function(t){return t[e.get_operator(t)]},e.apply=function(t,i){if(Array.isArray(t))return t.map((function(t){return e.apply(t,i)}));if(!e.is_logic(t))return t;var n,r,o,a,l,c=e.get_operator(t),d=t[c];if(Array.isArray(d)||(d=[d]),"if"===c||"?:"==c){for(n=0;n<d.length-1;n+=2)if(e.truthy(e.apply(d[n],i)))return e.apply(d[n+1],i);return d.length===n+1?e.apply(d[n],i):null}if("and"===c){for(n=0;n<d.length;n+=1)if(r=e.apply(d[n],i),!e.truthy(r))return r;return r}if("or"===c){for(n=0;n<d.length;n+=1)if(r=e.apply(d[n],i),e.truthy(r))return r;return r}if("filter"===c)return a=e.apply(d[0],i),o=d[1],Array.isArray(a)?a.filter((function(t){return e.truthy(e.apply(o,t))})):[];if("map"===c)return a=e.apply(d[0],i),o=d[1],Array.isArray(a)?a.map((function(t){return e.apply(o,t)})):[];if("reduce"===c)return a=e.apply(d[0],i),o=d[1],l=void 0!==d[2]?d[2]:null,Array.isArray(a)?a.reduce((function(t,s){return e.apply(o,{current:s,accumulator:t})}),l):l;if("all"===c){if(a=e.apply(d[0],i),o=d[1],!Array.isArray(a)||!a.length)return!1;for(n=0;n<a.length;n+=1)if(!e.truthy(e.apply(o,a[n])))return!1;return!0}if("none"===c){if(a=e.apply(d[0],i),o=d[1],!Array.isArray(a)||!a.length)return!0;for(n=0;n<a.length;n+=1)if(e.truthy(e.apply(o,a[n])))return!1;return!0}if("some"===c){if(a=e.apply(d[0],i),o=d[1],!Array.isArray(a)||!a.length)return!1;for(n=0;n<a.length;n+=1)if(e.truthy(e.apply(o,a[n])))return!0;return!1}if(d=d.map((function(t){return e.apply(t,i)})),s.hasOwnProperty(c)&&"function"==typeof s[c])return s[c].apply(i,d);if(c.indexOf(".")>0){var u=String(c).split("."),h=s;for(n=0;n<u.length;n++){if(!h.hasOwnProperty(u[n]))throw new Error("Unrecognized operation "+c+" (failed at "+u.slice(0,n+1).join(".")+")");h=h[u[n]]}return h.apply(i,d)}throw new Error("Unrecognized operation "+c)},e.uses_data=function(s){var i=[];if(e.is_logic(s)){var n=e.get_operator(s),r=s[n];Array.isArray(r)||(r=[r]),"var"===n?i.push(r[0]):r.forEach((function(t){i.push.apply(i,e.uses_data(t))}))}return t(i)},e.add_operation=function(t,e){s[t]=e},e.rm_operation=function(t){delete s[t]},e.rule_like=function(t,s){if(s===t)return!0;if("@"===s)return!0;if("number"===s)return"number"==typeof t;if("string"===s)return"string"==typeof t;if("array"===s)return Array.isArray(t)&&!e.is_logic(t);if(e.is_logic(s)){if(e.is_logic(t)){var i=e.get_operator(s),n=e.get_operator(t);if("@"===i||i===n)return e.rule_like(e.get_values(t,!1),e.get_values(s,!1))}return!1}if(Array.isArray(s)){if(Array.isArray(t)){if(s.length!==t.length)return!1;for(var r=0;r<s.length;r+=1)if(!e.rule_like(t[r],s[r]))return!1;return!0}return!1}return!1},e},void 0===(n="function"==typeof i?i.call(e,s,e,t):i)||(t.exports=n)},93379:(t,e,s)=>{"use strict";var i,n=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}t[e]=s}return t[e]}}(),o=[];function a(t){for(var e=-1,s=0;s<o.length;s++)if(o[s].identifier===t){e=s;break}return e}function l(t,e){for(var s={},i=[],n=0;n<t.length;n++){var r=t[n],l=e.base?r[0]+e.base:r[0],c=s[l]||0,d="".concat(l," ").concat(c);s[l]=c+1;var u=a(d),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(o[u].references++,o[u].updater(h)):o.push({identifier:d,updater:A(h,e),references:1}),i.push(d)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var n=s.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function h(t,e,s,i){var n=s?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,n);else{var r=document.createTextNode(n),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function p(t,e,s){var i=s.css,n=s.media,r=s.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var f=null,v=0;function A(t,e){var s,i,n;if(e.singleton){var r=v++;s=f||(f=c(e)),i=h.bind(null,s,r,!1),n=h.bind(null,s,r,!0)}else s=c(e),i=p.bind(null,s,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(s)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var s=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<s.length;i++){var n=a(s[i]);o[n].references--}for(var r=l(t,e),c=0;c<s.length;c++){var d=a(s[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}s=r}}}},55988:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const i={name:"crudLog",props:["form","grid","rowId"],data:()=>({logs:[],reads:[],logColumns:[{title:"Бүртгэлийн төрөл",key:"action"},{title:"Хэрэглэгч",key:"user"},{title:"Огноо",key:"created_at"}],readColumns:[{title:"Хэрэглэгч",key:"user"},{title:"Огноо",key:"created_at"}]}),computed:{lang(){const t=["registration_history","Information_viewing_history"];return t.reduce(((e,s,i)=>(e[s]=this.$t("crud."+t[i]),e)),{})}},methods:{getLog(){this.logs=[],this.reads=[],axios.post("/lambda/puzzle/grid/data/crud_log?&paginate=5000&page=1&sort=id&order=desc",{schemaId:this.form,row_id:this.rowId}).then((t=>{t.data.data.forEach((t=>{"edit"!=t.action&&this.logs.push({action:"store"==t.action?"Бүртгэсэн":"Зассан",user:t.last_name.charAt(0)+"."+t.first_name,created_at:moment(t.created_at).format("YYYY-MM-DD HH:mm:ss")}),"edit"==t.action&&this.reads.push({user:t.last_name.charAt(0)+"."+t.first_name,created_at:moment(t.created_at).format("YYYY-MM-DD HH:mm:ss")})}))}))}},watch:{rowId(){this.getLog()}},mounted(){this.getLog()}};const n=(0,s(51900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"crud-log"},[s("div",{staticClass:"fieldset"},[s("legend",[t._v(t._s(t.lang.lang))]),t._v(" "),s("Table",{attrs:{columns:t.logColumns,data:t.logs,size:"small",height:t.logs.length>=3?200:100}})],1),t._v(" "),s("div",{staticClass:"fieldset"},[s("legend",[t._v(t._s(t.lang.Information_viewing_history))]),t._v(" "),s("Table",{attrs:{columns:t.readColumns,data:t.reads,size:"small",height:t.reads.length>=3?200:80}})],1)])}),[],!1,null,null,null).exports},88110:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});let i="cubic-bezier(0.39, 0.575, 0.565, 1)";const n={name:"VueSideoutPanel",props:{closeByBtn:{default:!1,required:!1},value:{default:!1,required:!0},count:{default:1,validator:t=>t>0&&t<=2},closeHtml:{default:"Close"},closeAllHtml:{type:String,default:"Close all"},widths:{type:Array,default(){return 1==this.count?["100%"]:["100%","50%"]},validator:t=>t.reduce(((t,e)=>t&&/col-(\w+-)?\d+|\d+px|\d+%/.test(e)),!0)},classes:{type:Array,default:()=>new Array(5).fill("default"),validator:t=>t.reduce(((t,e)=>t&&(!e||"string"==typeof e)),!0)},styles:{type:Array,default:()=>[{},{},{},{},{}],validator:t=>t.reduce(((t,e)=>t&&(!e||"object"==typeof e)),!0)}},data(){return{isVisibleDock:this.value,isVisibleSections:[],isShifted:!1,d_styles:[],d_classes:[]}},created(){this.init()},watch:{value(){this.isVisibleDock=this.value},widths(){this.init()}},computed:{isVisibleCloseAll(){return 2==this.count&&!this.isShifted}},methods:{init(){this.isShifted=!1,this.d_styles=[],this.d_classes=[];for(let t=0;t<5;t++)this.classes[t]&&this.classes[t].length>=0?2==t&&"same"==this.classes[t]?this.d_classes.push(this.classes[t-1]):this.d_classes.push(this.classes[t]):this.d_classes.push("default");2==this.count&&(this.d_classes[1]+=" vsp-br",this.d_classes[2]+=" vsp-bl");for(let t=0;t<5;t++)2==t&&this.styles[t]&&this.styles[t].same?this.d_styles.push(Object.assign({},this.styles[t-1]||{})):this.d_styles.push(this.styles[t]||{});let t=!1;1==this.count?(this.widths[0]=this.widths[0]||this.widths[1],this.widths[1]="100%"):/\d+%/.test(this.widths[1])&&(this.d_styles[2].width=100-this.widths[1].slice(0,-1)+"%",t=!0),this.widths.forEach(((e,s)=>{if(/col-(\w+-)?\d+/.test(e))this.d_classes[s]+=" "+e;else{if(2==s&&t)return;this.d_styles[s].width=e}})),this.isVisibleSections=new Array(this.count).fill(1)},_style(t){return this.d_styles[t]},_class(t){return this.d_classes[t]},setTransform(t,e){["webkitTransform","MozTransform","msTransform","OTransform","transform"].forEach((s=>{t.style[s]=e[0]})),t.style.transitionTimingFunction=e[1],t.style.transitionDuration=e[2]},d_shift(){let t=-this.$refs.section[1].offsetWidth;this.setTransform(this.$refs.dock,["right","cubic-bezier(0.215, 0.61, 0.355, 1)",".8s"]),this.$refs.dock.style.right=`${t}px`,this.isShifted=!0},s_beforeLeave(){this.isVisibleSections[1]?(this.$refs.dock.style.boxShadow="none",this.$refs.section[1].style.boxShadow="-3px 3px 9px rgba(0, 0, 0, 0.3)"):this.d_shift()},s_afterLeave(){this.isVisibleSections[1]&&(this.$refs.dock.style.boxShadow="-3px 3px 9px rgba(0, 0, 0, 0.3)",this.$refs.dock.style.width=this.$refs.section[0].offsetWidth+"px",this.$refs.section[0].style.width="100%")},d_enter(){2==this.count&&!this.showExtra&&this.d_shift()},closeDock(){this.isVisibleDock=!1,this.init(),this.$emit("close")},close(t){1==this.count?this.closeDock():this.isShifted?(this.setTransform(this.$refs.dock,["right",i,"1.2s"]),this.closeDock()):0==t?this.$set(this.isVisibleSections,0,0):1==t&&this.isVisibleSections[0]?this.d_shift():this.closeDock()},closeAll(){this.closeByBtn||(this.isShifted&&this.setTransform(this.$refs.dock,["right",i,"1.2ss"]),this.closeDock())}}};var r=s(93379),o=s.n(r),a=s(85127),l={insert:"head",singleton:!1};o()(a.Z,l);a.Z.locals;const c=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{name:"fade"}},[t.isVisibleDock?s("div",{staticClass:"blackout",on:{click:t.closeAll}}):t._e()]),t._v(" "),s("transition",{attrs:{name:"slide-out"},on:{enter:t.d_enter}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisibleDock,expression:"isVisibleDock"}],ref:"dock",staticClass:"dock",class:t._class(0),style:t._style(0)},[s("transition-group",{attrs:{name:"slide-out"},on:{"before-leave":t.s_beforeLeave,afterLeave:t.s_afterLeave}},t._l(t.isVisibleSections,(function(e,i){return e?s("section",{key:"k"+i,ref:"section",refInFor:!0,staticClass:"panel",class:t._class(i+1),style:t._style(i+1)},[s("a",{staticClass:"action-close",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(i)}}},[s("Icon",{attrs:{type:"ios-close-circle-outline"}})],1),t._v(" "),t._t("default")],2):t._e()})),0)],1)])],1)}),[],!1,null,"8a0c47cc",null).exports},99802:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});var i=s(88110),n=s(55988);const r={mixins:[s(39017).Z],data:()=>({form_width:800,openSlidePanel:!1,exportLoading:!1}),components:{"slide-panel":i.Z,"crud-log":n.Z},computed:{lang(){const t=["_add","Information_viewing_history"];return t.reduce(((e,s,i)=>(e[s]=this.$t("crud."+t[i]),e)),{})}},methods:{templateEdit(){this.openSlidePanel=!0},templateOnSuccess(){this.openSlidePanel=!1},templateOnError(){},onReady(t){this.form_width=t.width}}};const o=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"offcanvas-template"},[s("div",{staticClass:"crud-page"},[t.withoutHeader?s("portal",{attrs:{to:"header-left"}},[s("h3",[t._v(t._s(t.title))]),t._v(" "),!t.permissions||t.permissions.c?s("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?s("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                "+t._s(t.lang._add)+"\n            ")]):t._e()],1):t._e(),t._v(" "),t.withoutHeader?s("portal",{attrs:{to:"header-right"}},[s("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel,importExcel:t.importExcel,exportLoading:t.exportLoading,print:t.print,save:t.save,isPrint:t.isPrint,isExcel:t.isExcel,isExcelUpload:t.isExcelUpload,isRefresh:t.isRefresh,isSave:t.isSave}})],1):t._e(),t._v(" "),t.withoutHeader?t._e():s("div",{staticClass:"crud-page-header"},[t.hasNavSlot?s("div",{staticClass:"crud-page-header-left"},[t._t("nav"),t._v(" "),!t.permissions||t.permissions.c?s("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?s("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                    "+t._s(t.lang._add)+"}\n                ")]):t._e()],2):s("div",{class:"crud-page-header-left "+(t.hasNavSlot?"":"no-nav")},[null!=t.$props.title?s("h3",[t._v(t._s(t.$props.title.replace("-"," ")))]):t._e(),t._v(" "),!t.permissions||t.permissions.c?s("span",{staticClass:"divider"}):t._e(),t._v(" "),!t.permissions||t.permissions.c?s("Button",{attrs:{type:"success",shape:"circle",size:"small",icon:"md-add"},on:{click:function(e){t.openSlidePanel=!0,t.editMode=!1}}},[t._v("\n                    "+t._s(t.lang._add)+"\n                ")]):t._e()],1),t._v(" "),s("div",{staticClass:"crud-page-header-right"},[s("div",{staticClass:"tooloptions"},[t._t("tooloptions")],2),t._v(" "),s("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel,exportLoading:t.exportLoading,print:t.print,save:t.save,isPrint:t.isPrint,isExcel:t.isExcel,isRefresh:t.isRefresh,isSave:t.isSave}}),t._v(" "),t._t("right")],2)]),t._v(" "),s("div",{staticClass:"crud-page-body"},[t.hasVNavSlot?s("div",{staticClass:"v-nav"},[t._t("v-nav")],2):t._e(),t._v(" "),s("div",{staticClass:"dg-flex"},[!t.permissions||t.permissions.r?s("datagrid",{ref:"grid",attrs:{schemaID:t.grid,paginate:50,fnClone:t.clone,fnEdit:t.edit,fnQuickEdit:t.quickEdit,fnView:t.view,actions:t.$props.actions,dblClick:t.$props.dbClickAction,onRowSelect:t.$props.onRowSelect,permissions:t.permissions,page_id:t.page_id,custom_condition:t.$props.custom_condition?t.$props.custom_condition:null,user_condition:t.user_condition?t.user_condition.gridCondition:null}}):t._e()],1)]),t._v(" "),s("slide-panel",{attrs:{widths:[t.form_width?t.form_width:"600px"],closeByBtn:!0,withCrudLog:t.withCrudLog},on:{close:function(e){t.openSlidePanel=!1}},model:{value:t.openSlidePanel,callback:function(e){t.openSlidePanel=e},expression:"openSlidePanel"}},[s("div",{class:t.withCrudLog&&t.editMode?"with-crud-log":""},[s("dataform",{ref:"form",attrs:{schemaID:t.form,editMode:t.editMode,onSuccess:t.onSuccess,onReady:t.onReady,do_render:t.openSlidePanel,permissions:t.permissions,page_id:t.page_id,user_condition:t.user_condition?t.user_condition.formCondition:null,onError:t.onError}})],1)])],1)])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=krud-window.2bcb2f601b01d309.js.map