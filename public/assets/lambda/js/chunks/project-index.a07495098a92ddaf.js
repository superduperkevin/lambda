"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7917],{33720:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});const o={name:"Settings",methods:{onReady(){this.$refs.form.editModel(this.$projectSettings.id)},copyToClipboard(e){var t=document.createElement("textarea"),a=document.getSelection();t.textContent=e,document.body.appendChild(t),a.removeAllRanges(),t.select(),document.execCommand("copy"),a.removeAllRanges(),document.body.removeChild(t)}},data:()=>({microservoce:window.init.project}),computed:{lang(){const e=["project_key","server_languege_framework","create_using","download_create_file","lambda_example_app","lambda_cli","lambda","l_key","create","lambda_settings","laravel_framework","go_framework","database","database_connect","_success","type","ready","lambda_platform","composer"];return e.reduce(((t,a,o)=>(t[a]=this.$t("project."+e[o]),t)),{})}}};const c=(0,a(51900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"project-page"},[a("h3",{staticClass:"project-title"},[a("img",{attrs:{src:"/assets/lambda/images/favicon.png",alt:""}}),e._v(e._s(e.$project.name))]),e._v(" "),a("div",{staticClass:"project-status"},[a("div",{staticClass:"lambda-config"},[a("h3",[e._v("Microservice түлхүүр")]),e._v(" "),a("code",[e._v("\n                "+e._s(e.$project.project_key)+"\n                "),a("button",{attrs:{type:"button"},on:{click:function(t){return e.copyToClipboard(""+e.$project.project_key)}}},[a("i",{staticClass:"ti-layers"})])]),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"select-platform"},[a("div",[a("h3",[a("a",{attrs:{href:"https://github.com/lambda-platform/cli",target:"_blank"}},[e._v("Lambda CLI")]),e._v(" "+e._s(e.lang.create_using)+" ")]),e._v(" "),"Client"===e.microservoce.project_type?a("code",[e._v("\n                        lambda-micro-client -key="+e._s(e.$project.project_key)+" create "+e._s(e.$project.name)+"\n                        "),a("button",{attrs:{type:"button"},on:{click:function(t){return e.copyToClipboard("lambda-micro-client -key="+e.$project.project_key+" create "+e.$project.name)}}},[a("i",{staticClass:"ti-layers"})])]):a("code",[e._v("\n                        lambda-micro -key="+e._s(e.$project.project_key)+" create "+e._s(e.$project.name)+"\n                        "),a("button",{attrs:{type:"button"},on:{click:function(t){return e.copyToClipboard("lambda-micro -key="+e.$project.project_key+" create "+e.$project.name)}}},[a("i",{staticClass:"ti-layers"})])]),e._v(" "),a("br"),e._v(" "),a("h3",[e._v(e._s(e.lang.download_create_file))]),e._v(" "),a("a",{attrs:{href:"https://lambda.cloud.mn/starter.zip",target:"_blank"}},[a("i",{staticClass:"ti-cloud-down"}),e._v(" "),a("span",[e._v(e._s(e.lang.lambda_example_app))])]),e._v(" "),a("a",{attrs:{href:"/console/config/"+e.$project.project_key,target:"_blank"}},[a("i",{staticClass:"ti-cloud-down"}),e._v(" "),a("span",[e._v(e._s(e.lang.lambda_settings))])])])])]),e._v(" "),a("Steps",{attrs:{current:e.$project.db_schema_path=="schemas/"+e.$project.project_key+".json"?3:1,status:e.$project.db_schema_path=="schemas/"+e.$project.project_key+".json"?"finish":"error"}},[a("Step",{attrs:{title:e.lang.create,content:"Cloud  "+e.lang.type+": "+e.$project.plan}}),e._v(" "),a("Step",{attrs:{title:e.lang.database,content:e.lang.database_connect}}),e._v(" "),a("Step",{attrs:{title:e.lang.ready,content:e.lang._success}})],1)],1),e._v(" "),a("dataform",{ref:"form",attrs:{schemaID:46,do_render:!0,editMode:!0,onReady:e.onReady}})],1)}),[],!1,null,"b328707e",null).exports}}]);
//# sourceMappingURL=project-index.a07495098a92ddaf.js.map