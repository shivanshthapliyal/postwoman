(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(t,e,o){var content=o(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("77d6318b",content,!0,{sourceMap:!1})},192:function(t,e,o){"use strict";var l={computed:{noFrameColors:function(){return this.$store.state.postwoman.settings.DISABLE_FRAME_COLORS||!1}},props:{label:{type:String,default:"Section"},collapsed:{type:Boolean}},methods:{collapse:function(t){t.target.parentNode.querySelector(".collapsible").classList.toggle("hidden")}}},n=(o(193),o(13)),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("fieldset",{class:{"no-colored-frames":t.noFrameColors},attrs:{id:t.label.toLowerCase()}},[o("legend",{on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[t._v(t._s(t.label)+" ↕")]),t._v(" "),o("div",{staticClass:"collapsible",class:{hidden:t.collapsed}},[t._t("default")],2)])},[],!1,null,null,null);e.a=component.exports},193:function(t,e,o){"use strict";var l=o(191);o.n(l).a},194:function(t,e,o){(t.exports=o(17)(!1)).push([t.i,"fieldset.no-colored-frames{border-color:#afafaf!important}fieldset.no-colored-frames legend{color:var(--ac-color)}",""])},195:function(t,e,o){var content=o(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("7d7fde3e",content,!0,{sourceMap:!1})},196:function(t,e,o){var content=o(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("106f1e8e",content,!0,{sourceMap:!1})},199:function(t,e,o){"use strict";var l=o(195);o.n(l).a},200:function(t,e,o){(t.exports=o(17)(!1)).push([t.i,".color{display:inline-block;vertical-align:middle;padding:8px 16px;margin:4px;background-color:rgba(93,93,93,.2);border-radius:4px;cursor:pointer}.color.active{background-color:rgba(93,93,93,.3)}.color .preview{vertical-align:middle;display:inline-block;width:32px;height:32px;border-radius:100%;margin-right:8px;position:relative}.color .preview .activeTick{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff}.color.vibrant .preview .activeTick{fill:#000}",""])},201:function(t,e,o){"use strict";var l=o(196);o.n(l).a},202:function(t,e,o){(t.exports=o(17)(!1)).push([t.i,"div[data-v-02e4fb42]{display:inline-block}label.caption[data-v-02e4fb42]{margin-left:4px;vertical-align:middle}label.toggle[data-v-02e4fb42]{position:relative;width:50px;height:20px;border:2px solid var(--fg-color);background-color:transparent;vertical-align:middle;border-radius:100px;box-sizing:content-box;box-sizing:initial;padding:0;margin:10px 5px}label.toggle[data-v-02e4fb42],label.toggle .handle[data-v-02e4fb42]{display:inline-block;transition:all .2s ease-in-out}label.toggle .handle[data-v-02e4fb42]{position:absolute;top:0;bottom:0;left:0;margin:4px;background-color:var(--fg-color);width:12px;height:12px;border-radius:100px;pointer-events:none;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}label.toggle.on[data-v-02e4fb42]{background-color:var(--ac-color);border-color:var(--ac-color)}label.toggle.on .handle[data-v-02e4fb42]{background-color:var(--act-color);left:30px}",""])},213:function(t,e,o){"use strict";o.r(e);o(60),o(31),o(58);var section=o(192),l={props:{color:{type:String,required:!0},name:{type:String},active:{type:Boolean,default:!1}}},n=(o(199),o(13)),r=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"color",attrs:{"data-color":t.color}},[o("span",{staticClass:"preview",style:{backgroundColor:t.color}},[t.active?o("svg",{staticClass:"activeTick",attrs:{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"}},[o("path",{attrs:{d:"M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"}})]):t._e()]),t._v("\n    "+t._s(t.name||t.color)+"\n")])},[],!1,null,null,null).exports,c={props:{on:{type:Boolean,default:!1}},methods:{toggle:function(){this.$refs.toggle.classList.toggle("on"),this.$emit("change",this.$refs.toggle.classList.contains("on"))}}},d=(o(201),Object(n.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{on:{click:function(e){return t.toggle()}}},[o("label",{ref:"toggle",staticClass:"toggle",class:{on:t.on}},[o("span",{staticClass:"handle"})]),t._v(" "),o("label",{staticClass:"caption"},[t._t("default")],2)])},[],!1,null,"02e4fb42",null).exports),f={components:{"pw-section":section.a,"pw-toggle":d,swatch:r},data:function(){return{themes:[{color:"#121212",name:"Dark (Default)",class:""},{color:"#DFDFDF",name:"Light",vibrant:!0,class:"light"}],colors:[{color:"#51ff0d",name:"Lime (Default)",vibrant:!0},{color:"#FFC107",name:"Yellow",vibrant:!0},{color:"#E91E63",name:"Pink",vibrant:!1},{color:"#e74c3c",name:"Red",vibrant:!1},{color:"#9b59b6",name:"Purple",vibrant:!1},{color:"#2980b9",name:"Blue",vibrant:!1}],settings:{THEME_CLASS:this.$store.state.postwoman.settings.THEME_CLASS||"",THEME_COLOR:"",THEME_COLOR_VIBRANT:!0,DISABLE_FRAME_COLORS:this.$store.state.postwoman.settings.DISABLE_FRAME_COLORS||!1,PROXY_ENABLED:this.$store.state.postwoman.settings.PROXY_ENABLED||!1,PROXY_URL:this.$store.state.postwoman.settings.PROXY_URL||"",PROXY_KEY:this.$store.state.postwoman.settings.PROXY_KEY||""}}},watch:{proxySettings:{deep:!0,handler:function(t){this.applySetting("PROXY_URL",t.url),this.applySetting("PROXY_KEY",t.key)}}},methods:{applyTheme:function(t){this.applySetting("THEME_CLASS",t),document.documentElement.className=t;var e=document.getElementById("imgGitHub");e.style.filter="",e.style["webkit-filter"]="invert(100%)",t.includes("light")&&(e.style.filter="invert(100%)",e.style["webkit-filter"]="invert(100%)")},setActiveColor:function(t,e){null==e&&(e=!0),document.documentElement.style.setProperty("--ac-color",t),document.documentElement.style.setProperty("--act-color",e?"#121212":"#fff"),this.applySetting("THEME_COLOR",t.toUpperCase()),this.applySetting("THEME_COLOR_VIBRANT",e)},getActiveColor:function(){var t;return"#".concat((t=window.getComputedStyle(document.documentElement).getPropertyValue("--ac-color"),t.replace(/#/g,"").replace(/ /g,"")).toUpperCase())},applySetting:function(t,e){this.settings[t]=e,this.$store.commit("postwoman/applySetting",[t,e])},toggleSetting:function(t){this.settings[t]=!this.settings[t],this.$store.commit("postwoman/applySetting",[t,this.settings[t]])}},beforeMount:function(){this.settings.THEME_COLOR=this.getActiveColor()},computed:{proxySettings:function(){return{url:this.settings.PROXY_URL,key:this.settings.PROXY_KEY}}}},v=Object(n.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("pw-section",{staticClass:"blue",attrs:{label:"Theme"}},[o("ul",[o("li",[o("h3",{staticClass:"title"},[t._v("Background")]),t._v(" "),o("div",{staticClass:"backgrounds"},t._l(t.themes,function(e){return o("span",{key:e.class,on:{click:function(o){return t.applyTheme(e.class)}}},[o("swatch",{class:{vibrant:e.vibrant},attrs:{active:t.settings.THEME_CLASS===e.class,color:e.color,name:e.name}})],1)}),0)])]),t._v(" "),o("ul",[o("li",[o("h3",{staticClass:"title"},[t._v("Color")]),t._v(" "),o("div",{staticClass:"colors"},t._l(t.colors,function(e){return o("span",{key:e.color,on:{click:function(o){return o.preventDefault(),t.setActiveColor(e.color,e.vibrant)}}},[o("swatch",{class:{vibrant:e.vibrant},attrs:{active:t.settings.THEME_COLOR===e.color.toUpperCase(),color:e.color,name:e.name}})],1)}),0)])]),t._v(" "),o("ul",[o("li",[o("h3",{staticClass:"title"},[t._v("Frames")]),t._v(" "),o("pw-toggle",{attrs:{on:!t.settings.DISABLE_FRAME_COLORS},on:{change:function(e){return t.toggleSetting("DISABLE_FRAME_COLORS")}}},[t._v("\n            Multi-color "+t._s(t.settings.DISABLE_FRAME_COLORS?"disabled":"enabled")+"\n        ")])],1)])])],1)},[],!1,null,null,null);e.default=v.exports}}]);