(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{f39c:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("SchemaReport",t._b({},"SchemaReport",t.bind,!1))},o=[],a=e("345c"),r=e("fc74"),c=e.n(r),s=e("59a1"),l=e.n(s),d=e("6430"),u=e.n(d),p=e("ffe3"),h=e.n(p),f=e("37d9"),m=e.n(f),O=e("c47a"),v=e.n(O),b=(e("a481"),e("2b8e")),F=e.n(b),I=e("bcb5"),k=e("b589"),y=e("7594"),R=e("d1cc"),S=e("8032"),g=e("6635"),w=e("5e83"),P=e("de35"),_=function(t){function i(){var t,e;c()(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=u()(this,(t=h()(i)).call.apply(t,[this].concat(o))),v()(F()(e),"service",!0),e}return m()(i,t),l()(i,[{key:"defaults",value:function(){var t=this;this.addHook("created:default",(function(){this.initialize&&"function"===typeof this.initialize&&this.initialize(),this.configure(),t.beforeCreateHook.call(this),t.createdHook.call(this,t)})),this.addAction("submit").actionLabel("Visualizar").actionColor("primary").actionIcon("search").actionScopes(["report"]).actionFloatRight().actionPositions([P["a"].POSITION_FORM_FOOTER]).actionOn("click",(function(t){this.reportSubmit(t)})),this.addAction("printing").actionLabel("Imprimir").actionColor("white").actionIcon("print").actionScopes(["report"]).actionFloatRight().actionPositions([P["a"].POSITION_FORM_FOOTER]).actionOn("click",(function(t){this.reportSubmit(t,!0)})),this.addAction("return").actionLabel("Voltar").actionColor("white").actionIcon("undo").actionScopes(["report"]).actionPositions([P["a"].POSITION_FORM_FOOTER]).actionOn("click",(function(t){var i=t.$event;i.stopPropagation(),i.preventDefault(),this.reportBack()})),this.addAction("printer").actionLabel("Imprimir").actionColor("white").actionIcon("print").actionScopes(["report"]).actionPositions([P["a"].POSITION_FORM_FOOTER]).actionOn("click",(function(t){var i=t.$event;i.stopPropagation(),i.preventDefault(),this.reportPrint()}))}},{key:"initScopes",value:function(){return["report"]}},{key:"provide",value:function(){var t=this;return{report:String(this.constructor.domain).replace("report.",""),path:this.constructor.path,domain:this.constructor.domain,settings:{},primaryKey:this.primaryKey,displayKey:this.displayKey,hooks:function(){return t.getHooks()},actions:function(){return t.getActions()},fields:function(){return t.getFields()},watches:function(){return t.getWatches()}}}}]),i}(I["a"]);v()(_,"mixins",[k["a"],y["a"],R["a"],S["a"],g["a"],w["a"]]);var T=e("86e9"),x=e("f335"),A=function(t){function i(){return c()(this,i),u()(this,h()(i).apply(this,arguments))}return m()(i,t),l()(i,[{key:"construct",value:function(){this.addField("user").fieldIsSelectRemote(T["a"].build().provideRemote()).fieldFormWidth(60).validationRequired(),this.addField("notes").fieldIsText().fieldFormWidth(40).fieldFormHeight(2),this.addField("profile").fieldIsSelectRemote(x["a"].build().provideRemote()).fieldFormWidth(60),this.addField("restrict").fieldIsCheckbox().fieldFormDefaultValue(!0)}}]),i}(_);v()(A,"domain","report.example");var C={extends:a["a"],name:"Transaction",schema:A},E=C,H=e("2877"),z=Object(H["a"])(E,n,o,!1,null,"87155e3c",null);i["default"]=z.exports}}]);