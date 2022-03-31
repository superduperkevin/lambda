/*! For license information please see chart-countbox.29ac46e403d425e2.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[6967],{68965:(e,t,r)=>{"use strict";r.d(t,{Dx:()=>o});var n=r(92077),i=r.n(n);function o(e){return i()(e).format("0,0")}},92077:function(e,t,r){var n,i;n=function(){var e,t,r,n,i,o="2.0.6",a={},l={},u={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},s={currentLocale:u.currentLocale,zeroFormat:u.zeroFormat,nullFormat:u.nullFormat,defaultFormat:u.defaultFormat,scalePercentBy100:u.scalePercentBy100};function c(e,t){this._input=e,this._value=t}return(e=function(r){var n,i,o,l;if(e.isNumeral(r))n=r.value();else if(0===r||void 0===r)n=0;else if(null===r||t.isNaN(r))n=null;else if("string"==typeof r)if(s.zeroFormat&&r===s.zeroFormat)n=0;else if(s.nullFormat&&r===s.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(i in a)if((l="function"==typeof a[i].regexps.unformat?a[i].regexps.unformat():a[i].regexps.unformat)&&r.match(l)){o=a[i].unformat;break}n=(o=o||e._.stringToNumber)(r)}else n=Number(r)||null;return new c(r,n)}).version=o,e.isNumeral=function(e){return e instanceof c},e._=t={numberToFormat:function(t,r,n){var i,o,a,u,s,c,f,m=l[e.options.currentLocale],h=!1,d=!1,p=0,b="",g=1e12,v=1e9,_=1e6,y=1e3,F="",w=!1;if(t=t||0,o=Math.abs(t),e._.includes(r,"(")?(h=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(s=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(i=!!(i=r.match(/a(k|m|b|t)?/))&&i[1],e._.includes(r," a")&&(b=" "),r=r.replace(new RegExp(b+"a[kmbt]?"),""),o>=g&&!i||"t"===i?(b+=m.abbreviations.trillion,t/=g):o<g&&o>=v&&!i||"b"===i?(b+=m.abbreviations.billion,t/=v):o<v&&o>=_&&!i||"m"===i?(b+=m.abbreviations.million,t/=_):(o<_&&o>=y&&!i||"k"===i)&&(b+=m.abbreviations.thousand,t/=y)),e._.includes(r,"[.]")&&(d=!0,r=r.replace("[.]",".")),a=t.toString().split(".")[0],u=r.split(".")[1],c=r.indexOf(","),p=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),F=e._.toFixed(t,u[0].length+u[1].length,n,u[1].length)):F=e._.toFixed(t,u.length,n),a=F.split(".")[0],F=e._.includes(F,".")?m.delimiters.decimal+F.split(".")[1]:"",d&&0===Number(F.slice(1))&&(F="")):a=e._.toFixed(t,0,n),b&&!i&&Number(a)>=1e3&&b!==m.abbreviations.trillion)switch(a=String(Number(a)/1e3),b){case m.abbreviations.thousand:b=m.abbreviations.million;break;case m.abbreviations.million:b=m.abbreviations.billion;break;case m.abbreviations.billion:b=m.abbreviations.trillion}if(e._.includes(a,"-")&&(a=a.slice(1),w=!0),a.length<p)for(var x=p-a.length;x>0;x--)a="0"+a;return c>-1&&(a=a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===r.indexOf(".")&&(a=""),f=a+F+(b||""),h?f=(h&&w?"(":"")+f+(h&&w?")":""):s>=0?f=0===s?(w?"-":"+")+f:f+(w?"-":"+"):w&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,i=l[s.currentLocale],o=e,a={thousand:3,million:6,billion:9,trillion:12};if(s.zeroFormat&&e===s.zeroFormat)r=0;else if(s.nullFormat&&e===s.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,".")),a)if(n=new RegExp("[^a-zA-Z]"+i.abbreviations[t]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),o.match(n)){r*=Math.pow(10,a[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),i=n.length>>>0,o=0;if(3===arguments.length)r=arguments[2];else{for(;o<i&&!(o in n);)o++;if(o>=i)throw new TypeError("Reduce of empty array with no initial value");r=n[o++]}for(;o<i;o++)o in n&&(r=t(r,n[o],o,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var i,o,a,l,u=e.toString().split("."),s=t-(n||0);return i=2===u.length?Math.min(Math.max(u[1].length,s),t):s,a=Math.pow(10,i),l=(r(e+"e+"+i)/a).toFixed(i),n>t-i&&(o=new RegExp("\\.?0{1,"+(n-(t-i))+"}$"),l=l.replace(o,"")),l}},e.options=s,e.formats=a,e.locales=l,e.locale=function(e){return e&&(s.currentLocale=e.toLowerCase()),s.currentLocale},e.localeData=function(e){if(!e)return l[s.currentLocale];if(e=e.toLowerCase(),!l[e])throw new Error("Unknown locale : "+e);return l[e]},e.reset=function(){for(var e in u)s[e]=u[e]},e.zeroFormat=function(e){s.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){s.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){s.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,i,o,a,l,u,s,c;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{s=e.localeData(r)}catch(t){s=e.localeData(e.locale())}return o=s.currency.symbol,l=s.abbreviations,n=s.delimiters.decimal,i="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,!(null!==(c=t.match(/^[^\d]+/))&&(t=t.substr(1),c[0]!==o)||null!==(c=t.match(/[^\d]+$/))&&(t=t.slice(0,-1),c[0]!==l.thousand&&c[0]!==l.million&&c[0]!==l.billion&&c[0]!==l.trillion)||(u=new RegExp(i+"{2}"),t.match(/[^\d.,]/g)||(a=t.split(n)).length>2||(a.length<2?!a[0].match(/^\d+.*\d$/)||a[0].match(u):1===a[0].length?!a[0].match(/^\d+$/)||a[0].match(u)||!a[1].match(/^\d+$/):!a[0].match(/^\d+.*\d$/)||a[0].match(u)||!a[1].match(/^\d+$/))))},e.fn=c.prototype={clone:function(){return e(this)},format:function(t,r){var n,i,o,l=this._value,u=t||s.defaultFormat;if(r=r||Math.round,0===l&&null!==s.zeroFormat)i=s.zeroFormat;else if(null===l&&null!==s.nullFormat)i=s.nullFormat;else{for(n in a)if(u.match(a[n].regexps.format)){o=a[n].format;break}i=(o=o||e._.numberToFormat)(l,u,r)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,i){return e+Math.round(r*t)}return this._value=t.reduce([this._value,e],n,0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,i){return e-Math.round(r*t)}return this._value=t.reduce([e],n,Math.round(this._value*r))/r,this},multiply:function(e){function r(e,r,n,i){var o=t.correctionFactor(e,r);return Math.round(e*o)*Math.round(r*o)/Math.round(o*o)}return this._value=t.reduce([this._value,e],r,1),this},divide:function(e){function r(e,r,n,i){var o=t.correctionFactor(e,r);return Math.round(e*o)/Math.round(r*o)}return this._value=t.reduce([this._value,e],r),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var i,o=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),i=e._.numberToFormat(t,r,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"BPS"),i=i.join("")):i=i+o+"BPS",i},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},i="("+(i=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(n.suffixes.filter((function(e){return r.suffixes.indexOf(e)<0}))).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(i)},format:function(t,i,o){var a,l,u,s=e._.includes(i,"ib")?n:r,c=e._.includes(i," b")||e._.includes(i," ib")?" ":"";for(i=i.replace(/\s?i?b/,""),a=0;a<=s.suffixes.length;a++)if(l=Math.pow(s.base,a),u=Math.pow(s.base,a+1),null===t||0===t||t>=l&&t<u){c+=s.suffixes[a],l>0&&(t/=l);break}return e._.numberToFormat(t,i,o)+c},unformat:function(t){var i,o,a=e._.stringToNumber(t);if(a){for(i=r.suffixes.length-1;i>=0;i--){if(e._.includes(t,r.suffixes[i])){o=Math.pow(r.base,i);break}if(e._.includes(t,n.suffixes[i])){o=Math.pow(n.base,i);break}}a*=o||1}return a}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var i,o,a=e.locales[e.options.currentLocale],l={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),i=e._.numberToFormat(t,r,n),t>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),o=0;o<l.before.length;o++)switch(l.before[o]){case"$":i=e._.insert(i,a.currency.symbol,o);break;case" ":i=e._.insert(i," ",o+a.currency.symbol.length-1)}for(o=l.after.length-1;o>=0;o--)switch(l.after[o]){case"$":i=o===l.after.length-1?i+a.currency.symbol:e._.insert(i,a.currency.symbol,-(l.after.length-(1+o)));break;case" ":i=o===l.after.length-1?i+" ":e._.insert(i," ",-(l.after.length-(1+o)+a.currency.symbol.length-1))}return i}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var i=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(i[0]),r,n)+"e"+i[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),i=Number(r[1]);function o(t,r,n,i){var o=e._.correctionFactor(t,r);return t*o*(r*o)/(o*o)}return i=e._.includes(t,"e-")?i*=-1:i,e._.reduce([n,Math.pow(10,i)],o,1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var i=e.locales[e.options.currentLocale],o=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),o+=i.ordinal(t),e._.numberToFormat(t,r,n)+o}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var i,o=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),i=e._.numberToFormat(t,r,n),e._.includes(i,")")?((i=i.split("")).splice(-1,0,o+"%"),i=i.join("")):i=i+o+"%",i},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),i=Math.floor((e-60*n*60)/60),o=Math.round(e-60*n*60-60*i);return n+":"+(i<10?"0"+i:i)+":"+(o<10?"0"+o:o)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e},void 0===(i="function"==typeof n?n.call(t,r,t,e):n)||(e.exports=i)},34155:e=>{var t,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,u=[],s=!1,c=-1;function f(){s&&l&&(s=!1,l.length?u=l.concat(u):c=-1,u.length&&m())}function m(){if(!s){var e=a(f);s=!0;for(var t=u.length;t;){for(l=u,u=[];++c<t;)l&&l[c].run();c=-1,t=u.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||s||a(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},70909:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(9669),i=r.n(n),o=r(68965);const a={props:["countFields","type","chart_title","id","chart_filter","filters","bgColor","icon","link","linkTitle","textColor","projectDomain"],methods:{showNumber:e=>(0,o.Dx)(e),getSeries(){},callData(){this.countFields.length>=1&&this.countTitle},dataCaller(e){let t="/ve/get-data-count";this.projectDomain&&(t=this.projectDomain+t),i().post(t,{countFields:this.countFields}).then((e=>{this.count=e.data})).catch((e=>{console.log(e)}))}},mounted(){this.dataCaller()},data:()=>({count:null,instance:null,timeout:null,lastFilter:[]}),watch:{type:function(e){this.initChart()},countFields:{handler:function(e,t){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0},chart_filter:{handler:function(e,t){this.timeout&&clearTimeout(this.timeout),this.callData()},deep:!0},title:{handler:function(e,t){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.callData()}),1200)},deep:!0}}};const l=(0,r(51900).Z)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"el-count-box",style:{backgroundColor:e.bgColor}},[r("div",{staticClass:"icon"},[r("span",[r("i",{class:e.icon,style:{color:e.bgColor}})])]),e._v(" "),r("div",{staticClass:"text"},[r("h3",{style:{color:e.textColor}},[e._v(e._s(e.showNumber(e.count)))]),e._v(" "),r("p",{style:{color:e.textColor}},[e._v(e._s(e.chart_title))])])])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=chart-countbox.29ac46e403d425e2.js.map