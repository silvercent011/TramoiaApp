(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projectspg"],{adf5:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{},[s("nav",{staticClass:"nav-extended blue"},[s("div",{staticClass:"nav-wrapper container"},[s("a",{staticClass:"brand-logo",attrs:{href:"#"}},[t._v(t._s(t.projectData.title))])]),s("div",{staticClass:"nav-content container"},[s("ul",{staticClass:"tabs tabs-transparent"},[s("li",{key:0,staticClass:"tab"},[s("a",{on:{click:function(a){t.activeTab=0}}},[t._v("Pessoas")])]),s("li",{key:1,staticClass:"tab"},[s("a",{on:{click:function(a){t.activeTab=1}}},[t._v("Lab")])]),t._l(t.projectData.missions,(function(a){return s("li",{key:a.id,staticClass:"tab"},[s("a",{on:{click:function(s){t.activeTab=a.id}}},[t._v(t._s(a.title))])])}))],2)])]),s("div",{staticClass:"container"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0==t.activeTab,expression:"activeTab == 0"}],staticClass:"card"},[s("div",{staticClass:"card-content"},[s("h4",[t._v("PESSOAS")]),s("ul",{staticClass:"collection"},t._l(t.projectData.users,(function(a){return s("li",{key:a.id,staticClass:"collection-item avatar"},[null!=a.avatar_url?s("img",{staticClass:"circle",attrs:{src:a.avatar_url,alt:""}}):s("i",{staticClass:"material-icons circle purple"},[t._v("people")]),s("span",{staticClass:"title"},[t._v(t._s(a.name))]),s("p",[t._v(" "+t._s(a.project_roles[0])),s("br"),t._v(" "+t._s(a.email)+" "),s("br"),t._v(" "+t._s(a.bio)+" ")]),t._m(0,!0)])})),0)])]),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.activeTab,expression:"activeTab == 1"}],staticClass:"card"},[s("div",{staticClass:"card-content"},[s("h1",[t._v("LAB")]),t._v(" "+t._s(t.projectData.engagement[0])+" ")])]),t._l(t.projectData.missions,(function(a){return s("div",{key:a.id,staticClass:"card"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTab==a.id,expression:"activeTab == mission.id"}],staticClass:"card"},[s("div",{staticClass:"card-content"},[s("h1",[t._v(t._s(a.title))]),s("h2",[s("span",{staticStyle:{color:"yellow","font-size":"50px"}},[t._v("ESTATÍSTICAS GERAIS: ")]),t._v(" "+t._s(a.statistics)+" ")]),t._l(a.points,(function(a){return s("div",{key:a.id,staticClass:"content-container"},[s("p",[t._v(t._s(a))]),s("div",{staticClass:"row"},[s("div",{staticClass:"col s12 m12"},[s("div",{staticClass:"card blue-grey darken-1"},[s("div",{staticClass:"card-content white-text"},[s("span",{staticClass:"card-title"},[t._v(t._s(a.title))]),s("p",[t._v(" "+t._s(a.description)+" ")]),s("p",[t._v(t._s(a.point_type))]),t._m(1,!0)])])])])])}))],2)])])}))],2)])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"secondary-content",attrs:{href:"#!"}},[s("i",{staticClass:"material-icons"},[t._v("more")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row container"},[s("div",{staticClass:"col"},[s("div",{staticClass:"row"},[s("h5",[s("i",{staticClass:"tiny material-icons"},[t._v("comment")]),t._v("1")])])]),s("div",{staticClass:"col"},[s("div",{staticClass:"row"},[s("h5",[s("i",{staticClass:"tiny material-icons"},[t._v("people")]),t._v("1")])])]),s("div",{staticClass:"col"},[s("div",{staticClass:"row"},[s("h5",[s("i",{staticClass:"tiny material-icons"},[t._v("chat_bubble_outline")]),t._v("1")])])])])}],c={name:"ProjectPage",data:function(){return{activeTab:0}},created:function(){var t=this.$store.state.user.access_token;this.$store.dispatch("getProject",{id:this.$route.params.id,access_token:t}),console.log(this.$store.state.actualProject)},computed:{projectData:function(){return this.$store.state.actualProject}}},n=c,l=s("2877"),r=Object(l["a"])(n,i,e,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=projectspg.b929464f.js.map