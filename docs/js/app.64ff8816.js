(function(t){function e(e){for(var n,o,u=e[0],c=e[1],a=e[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,a||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,u=1;u<s.length;u++){var c=s[u];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var h=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},2451:function(t,e,s){"use strict";s("869c")},"39d2":function(t,e,s){"use strict";s("4cff")},"4cff":function(t,e,s){},"55b0":function(t,e,s){"use strict";s("b65d")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("7a23"),i={id:"nav"},r=Object(n["f"])("主页"),o=Object(n["f"])(" | "),u=Object(n["f"])("快速求和"),c=Object(n["f"])(" | "),a=Object(n["f"])("快速乘法"),h=Object(n["f"])(" | "),l=Object(n["f"])("特征分数");function d(t,e){var s=Object(n["w"])("router-link"),d=Object(n["w"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",i,[Object(n["g"])(s,{to:"/"},{default:Object(n["B"])((function(){return[r]})),_:1}),o,Object(n["g"])(s,{to:"/add"},{default:Object(n["B"])((function(){return[u]})),_:1}),c,Object(n["g"])(s,{to:"/mul"},{default:Object(n["B"])((function(){return[a]})),_:1}),h,Object(n["g"])(s,{to:"/frac"},{default:Object(n["B"])((function(){return[l]})),_:1})]),Object(n["g"])(d)],64)}s("39d2");var b=s("6b0d"),f=s.n(b);const O={},w=f()(O,[["render",d]]);var j=w,m=s("6c02"),p={class:"home"},g=Object(n["e"])("h1",null,"快速计算训练",-1),v=[g];function R(t,e){return Object(n["q"])(),Object(n["d"])("div",p,v)}const y={},T=f()(y,[["render",R]]);var x=T,C=(s("b680"),function(t){return Object(n["t"])("data-v-673df9e2"),t=t(),Object(n["r"])(),t}),A={id:"summary"},q={class:"summaryTable"},k=Object(n["f"])(" 正确率： "),I={class:".ani"},W=Object(n["f"])("% "),Q={class:"summaryTable"},N={id:"question"},$={class:"qes"},M=C((function(){return Object(n["e"])("br",null,null,-1)})),_={id:"options"},F=["disabled"],S=C((function(){return Object(n["e"])("br",null,null,-1)})),E=["disabled"],P=C((function(){return Object(n["e"])("br",null,null,-1)})),U=["disabled"],B=C((function(){return Object(n["e"])("br",null,null,-1)})),D=["disabled"];function J(t,e,s,i,r,o){return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["e"])("div",A,[Object(n["e"])("table",q,[Object(n["e"])("tr",null,[Object(n["e"])("td",null,"第 "+Object(n["y"])(r.nowCount)+" 题",1),Object(n["e"])("td",null,"答对 "+Object(n["y"])(o.statInfo.right)+" 次",1),Object(n["e"])("td",null,"答错 "+Object(n["y"])(o.statInfo.wrong)+" 次",1),Object(n["e"])("td",null,[k,Object(n["e"])("span",I,Object(n["y"])(r.percentshow.toFixed(0)),1),W])])]),Object(n["e"])("table",Q,[Object(n["e"])("tr",null,[Object(n["e"])("td",null,"平均用时： "+Object(n["y"])(r.averageTime.toFixed(2))+" 秒",1),Object(n["e"])("td",null,"用时： "+Object(n["y"])(r.time.toFixed(2))+" 秒",1)])])]),Object(n["e"])("div",N,[Object(n["e"])("p",$,Object(n["y"])(r.questionText),1)]),M,Object(n["e"])("div",_,[Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass1),onClick:e[0]||(e[0]=function(t){return o.checkAnswer(0)})},Object(n["y"])(r.optionsText[0]),11,F),S,Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass2),onClick:e[1]||(e[1]=function(t){return o.checkAnswer(1)})},Object(n["y"])(r.optionsText[1]),11,E),P,Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass3),onClick:e[2]||(e[2]=function(t){return o.checkAnswer(2)})},Object(n["y"])(r.optionsText[2]),11,U),B,Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass4),onClick:e[3]||(e[3]=function(t){return o.checkAnswer(3)})},Object(n["y"])(r.optionsText[3]),11,D)])])}var H=s("cffa"),z=s("d069"),G=z.AddQuestion,K={name:"Question",data:function(){return{questionText:"",optionsText:[],qu:G,showResult:!1,isRight:[!1,!1,!1,!1],isWrong:[!1,!1,!1,!1],percentshow:0,nowCount:0,time:0,averageTime:0}},computed:{resultClass1:function(){return{right:this.showResult&&this.isRight[0],wrong:this.showResult&&this.isWrong[0]}},resultClass2:function(){return{right:this.showResult&&this.isRight[1],wrong:this.showResult&&this.isWrong[1]}},resultClass3:function(){return{right:this.showResult&&this.isRight[2],wrong:this.showResult&&this.isWrong[2]}},resultClass4:function(){return{right:this.showResult&&this.isRight[3],wrong:this.showResult&&this.isWrong[3]}},statInfo:function(){return this.$store.state.add}},methods:{creatQuestion:function(){var t=this;this.showResult=!1,this.qu=new G,this.questionText=this.qu.question,this.optionsText=this.qu.answerText,this.isRight=[!1,!1,!1,!1],this.isWrong=[!1,!1,!1,!1],this.isRight[this.qu.correctAnswerIndex]=!0,this.nowCount=this.$store.state.add.total+1,this.time=0,this.timer=setInterval((function(){t.time+=.01}),10)},checkAnswer:function(t){var e=this;clearInterval(this.timer),t===this.qu.correctAnswerIndex?this.$store.commit("addCount",{type:"add",isRight:!0,time:this.time}):(this.$store.commit("addCount",{type:"add",isRight:!1,time:this.time}),this.isWrong[t]=!0),this.showResult=!0,H["a"].to(this,{duration:.5,percentshow:this.$store.state.add.percent||0}),H["a"].to(this,{duration:.5,averageTime:this.$store.state.add.averageTime||0}),setTimeout((function(){e.creatQuestion()}),3e3)}},created:function(){this.creatQuestion()}};s("55b0");const L=f()(K,[["render",J],["__scopeId","data-v-673df9e2"]]);var V=L,X=function(t){return Object(n["t"])("data-v-e6b5fc7c"),t=t(),Object(n["r"])(),t},Y={id:"summary"},Z={class:"summaryTable"},tt=Object(n["f"])(" 正确率： "),et={class:".ani"},st=Object(n["f"])("% "),nt={class:"summaryTable"},it={id:"question"},rt={class:"qes"},ot=X((function(){return Object(n["e"])("br",null,null,-1)})),ut={id:"options"},ct=["disabled"],at=X((function(){return Object(n["e"])("br",null,null,-1)})),ht=["disabled"],lt=X((function(){return Object(n["e"])("br",null,null,-1)})),dt=["disabled"],bt=X((function(){return Object(n["e"])("br",null,null,-1)})),ft=["disabled"];function Ot(t,e,s,i,r,o){return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["e"])("div",Y,[Object(n["e"])("table",Z,[Object(n["e"])("tr",null,[Object(n["e"])("td",null,"第 "+Object(n["y"])(r.nowCount)+" 题",1),Object(n["e"])("td",null,"答对 "+Object(n["y"])(o.statInfo.right)+" 次",1),Object(n["e"])("td",null,"答错 "+Object(n["y"])(o.statInfo.wrong)+" 次",1),Object(n["e"])("td",null,[tt,Object(n["e"])("span",et,Object(n["y"])(r.percentshow.toFixed(0)),1),st])])]),Object(n["e"])("table",nt,[Object(n["e"])("tr",null,[Object(n["e"])("td",null,"平均用时： "+Object(n["y"])(r.averageTime.toFixed(2))+" 秒",1),Object(n["e"])("td",null,"用时： "+Object(n["y"])(r.time.toFixed(2))+" 秒",1)])])]),Object(n["e"])("div",it,[Object(n["e"])("p",rt,Object(n["y"])(r.questionText),1)]),ot,Object(n["e"])("div",ut,[Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass1),onClick:e[0]||(e[0]=function(t){return o.checkAnswer(0)})},Object(n["y"])(r.optionsText[0]),11,ct),at,Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass2),onClick:e[1]||(e[1]=function(t){return o.checkAnswer(1)})},Object(n["y"])(r.optionsText[1]),11,ht),lt,Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass3),onClick:e[2]||(e[2]=function(t){return o.checkAnswer(2)})},Object(n["y"])(r.optionsText[2]),11,dt),bt,Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass4),onClick:e[3]||(e[3]=function(t){return o.checkAnswer(3)})},Object(n["y"])(r.optionsText[3]),11,ft)])])}var wt=s("d069"),jt=wt.MulQuestion,mt={name:"Question",data:function(){return{questionText:"",optionsText:[],qu:jt,showResult:!1,isRight:[!1,!1,!1,!1],isWrong:[!1,!1,!1,!1],percentshow:0,nowCount:0,time:0,averageTime:0}},computed:{resultClass1:function(){return{right:this.showResult&&this.isRight[0],wrong:this.showResult&&this.isWrong[0]}},resultClass2:function(){return{right:this.showResult&&this.isRight[1],wrong:this.showResult&&this.isWrong[1]}},resultClass3:function(){return{right:this.showResult&&this.isRight[2],wrong:this.showResult&&this.isWrong[2]}},resultClass4:function(){return{right:this.showResult&&this.isRight[3],wrong:this.showResult&&this.isWrong[3]}},statInfo:function(){return this.$store.state.mul}},methods:{creatQuestion:function(){var t=this;this.showResult=!1,this.qu=new jt,this.questionText=this.qu.question,this.optionsText=this.qu.answerText,this.isRight=[!1,!1,!1,!1],this.isWrong=[!1,!1,!1,!1],this.isRight[this.qu.correctAnswerIndex]=!0,this.nowCount=this.$store.state.mul.total+1,this.time=0,this.timer=setInterval((function(){t.time+=.01}),10)},checkAnswer:function(t){var e=this;clearInterval(this.timer),t===this.qu.correctAnswerIndex?this.$store.commit("addCount",{type:"mul",isRight:!0,time:this.time}):(this.$store.commit("addCount",{type:"mul",isRight:!1,time:this.time}),this.isWrong[t]=!0),this.showResult=!0,H["a"].to(this,{duration:.5,percentshow:this.$store.state.mul.percent||0}),H["a"].to(this,{duration:.5,averageTime:this.$store.state.mul.averageTime||0}),setTimeout((function(){e.creatQuestion()}),3e3)}},created:function(){this.creatQuestion()}};s("2451");const pt=f()(mt,[["render",Ot],["__scopeId","data-v-e6b5fc7c"]]);var gt=pt,vt=function(t){return Object(n["t"])("data-v-6182d814"),t=t(),Object(n["r"])(),t},Rt={id:"summary"},yt={class:"summaryTable"},Tt=Object(n["f"])(" 正确率： "),xt={class:".ani"},Ct=Object(n["f"])("% "),At={class:"summaryTable"},qt={id:"question"},kt={class:"qes"},It=vt((function(){return Object(n["e"])("br",null,null,-1)})),Wt={id:"options"},Qt=["disabled"],Nt=vt((function(){return Object(n["e"])("br",null,null,-1)})),$t=["disabled"],Mt=vt((function(){return Object(n["e"])("br",null,null,-1)})),_t=["disabled"],Ft=vt((function(){return Object(n["e"])("br",null,null,-1)})),St=["disabled"];function Et(t,e,s,i,r,o){return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["e"])("div",Rt,[Object(n["e"])("table",yt,[Object(n["e"])("tr",null,[Object(n["e"])("td",null,"第 "+Object(n["y"])(r.nowCount)+" 题",1),Object(n["e"])("td",null,"答对 "+Object(n["y"])(o.statInfo.right)+" 次",1),Object(n["e"])("td",null,"答错 "+Object(n["y"])(o.statInfo.wrong)+" 次",1),Object(n["e"])("td",null,[Tt,Object(n["e"])("span",xt,Object(n["y"])(r.percentshow.toFixed(0)),1),Ct])])]),Object(n["e"])("table",At,[Object(n["e"])("tr",null,[Object(n["e"])("td",null,"平均用时： "+Object(n["y"])(r.averageTime.toFixed(2))+" 秒",1),Object(n["e"])("td",null,"用时： "+Object(n["y"])(r.time.toFixed(2))+" 秒",1)])])]),Object(n["e"])("div",qt,[Object(n["e"])("p",kt,Object(n["y"])(r.questionText),1)]),It,Object(n["e"])("div",Wt,[Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass1),onClick:e[0]||(e[0]=function(t){return o.checkAnswer(0)})},Object(n["y"])(r.optionsText[0]),11,Qt),Nt,Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass2),onClick:e[1]||(e[1]=function(t){return o.checkAnswer(1)})},Object(n["y"])(r.optionsText[1]),11,$t),Mt,Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass3),onClick:e[2]||(e[2]=function(t){return o.checkAnswer(2)})},Object(n["y"])(r.optionsText[2]),11,_t),Ft,Object(n["e"])("button",{disabled:r.showResult,class:Object(n["m"])(o.resultClass4),onClick:e[3]||(e[3]=function(t){return o.checkAnswer(3)})},Object(n["y"])(r.optionsText[3]),11,St)])])}s("d81d");var Pt=s("d069"),Ut=Pt.Deci2frac,Bt={name:"Question",data:function(){return{questionText:"",optionsText:[],qu:Ut,showResult:!1,isRight:[!1,!1,!1,!1],isWrong:[!1,!1,!1,!1],percentshow:0,nowCount:0,time:0,averageTime:0}},computed:{resultClass1:function(){return{right:this.showResult&&this.isRight[0],wrong:this.showResult&&this.isWrong[0]}},resultClass2:function(){return{right:this.showResult&&this.isRight[1],wrong:this.showResult&&this.isWrong[1]}},resultClass3:function(){return{right:this.showResult&&this.isRight[2],wrong:this.showResult&&this.isWrong[2]}},resultClass4:function(){return{right:this.showResult&&this.isRight[3],wrong:this.showResult&&this.isWrong[3]}},statInfo:function(){return this.$store.state.frac}},methods:{creatQuestion:function(){var t=this;this.showResult=!1,this.qu=new Ut,this.questionText=this.qu.question,this.optionsText=this.qu.answerText,this.optionsTip=this.qu.pickQuestions,this.isRight=[!1,!1,!1,!1],this.isWrong=[!1,!1,!1,!1],this.isRight[this.qu.correctAnswerIndex]=!0,this.nowCount=this.$store.state.frac.total+1,this.time=0,this.timer=setInterval((function(){t.time+=.01}),10)},checkAnswer:function(t){var e=this;clearInterval(this.timer),t===this.qu.correctAnswerIndex?this.$store.commit("addCount",{type:"frac",isRight:!0,time:this.time}):(this.$store.commit("addCount",{type:"frac",isRight:!1,time:this.time}),this.isWrong[t]=!0),this.optionsText=this.optionsText.map((function(t,s){return t+" = "+e.optionsTip[s]})),this.showResult=!0,H["a"].to(this,{duration:.5,percentshow:this.$store.state.frac.percent||0}),H["a"].to(this,{duration:.5,averageTime:this.$store.state.frac.averageTime||0}),setTimeout((function(){e.creatQuestion()}),3e3)}},created:function(){this.creatQuestion()}};s("ec78");const Dt=f()(Bt,[["render",Et],["__scopeId","data-v-6182d814"]]);var Jt=Dt,Ht=[{path:"/",name:"Home",component:x},{path:"/add",name:"Add",component:V},{path:"/mul",name:"Mul",component:gt},{path:"/frac",name:"Frac",component:Jt}],zt=Object(m["a"])({history:Object(m["b"])(),routes:Ht}),Gt=zt,Kt=s("5502"),Lt=Object(Kt["a"])({state:function(){return{add:{right:0,wrong:0,total:0,percent:0,averageTime:0},mul:{right:0,wrong:0,total:0,percent:0,averageTime:0},frac:{right:0,wrong:0,total:0,percent:0,averageTime:0}}},mutations:{addCount:function(t,e){var s=e.type,n=e.isRight,i=e.time;n?t[s].right++:t[s].wrong++,t[s].total=t[s].right+t[s].wrong,t[s].percent=parseInt(100*t[s].right/t[s].total),t[s].averageTime=(t[s].averageTime*(t[s].total-1)+i)/t[s].total}},actions:{},modules:{}});Object(n["c"])(j).use(Lt).use(Gt).mount("#app")},"869c":function(t,e,s){},b52f:function(t,e,s){},b65d:function(t,e,s){},d069:function(t,e,s){var n=s("448a").default,i=s("970b").default,r=s("5bc3").default;s("4c53"),s("a15b"),s("d81d"),s("b680"),s("b64b"),s("a434");var o=s("4128"),u={add:function(t,e){return new o(t).add(new o(e)).toNumber()},sub:function(t,e){return new o(t).sub(new o(e)).toNumber()},mul:function(t,e){return new o(t).mul(new o(e)).toNumber()},div:function(t,e){return new o(t).div(new o(e)).toNumber()},pow:function(t,e){return new o(t).pow(new o(e)).toNumber()}},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return parseInt(Math.random()*(t-e+1)+e)},a=function(){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;i(this,t),this.ANSWERCOUNT=e,this.nums=[],this.correctAnswer=0,this.correctAnswerIndex=0,this.answers=[],this.answerText=[],this.question="",this.gen()}return r(t,[{key:"gen",value:function(){var t=c(8,5),e=c(t,0),s=Math.pow(10,e),n=c(8,3),i=u.div(c(100,1)*Math.pow(10,t-4)*n,s);this.correctAnswer=0;for(var r=0;r<n;r++){var o=c(Math.pow(10,t),Math.pow(10,t-2));o=u.div(o,s),this.nums.push(o),this.correctAnswer=u.add(this.correctAnswer,o)}this.answers=this.getOptions(this.correctAnswer,i,this.ANSWERCOUNT),this.question=this.nums.join(" + "),this.answerText=this.answers.map((function(t,s){return String.fromCharCode(65+s)+". "+t.toFixed(e)}))}},{key:"getOptions",value:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,n=c(s-1,0),i=[];this.correctAnswerIndex=s-n-1,i.push(t);for(var r=0;r<n;r++){var o=u.add(t,u.mul(e,r+1));i.push(o)}for(var a=0;a<s-n-1;a++){var h=u.sub(t,u.mul(e,a+1));i.unshift(h)}return i}}]),t}(),h=function(){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;i(this,t),this.ANSWERCOUNT=e,this.m1=0,this.m2=0,this.correctAnswer=0,this.correctAnswerIndex=0,this.answers=[],this.answerText=[],this.question="",this.gen()}return r(t,[{key:"gen",value:function(){var t=c(8,5),e=c(5,3),s=c(3,0),n=c(3,2),i=Math.pow(10,s),r=Math.pow(10,n);this.correctAnswer=0;var o=c(Math.pow(10,t),Math.pow(10,t-3));this.m1=u.div(o,i);var a=c(Math.pow(10,e),100);this.m2=u.div(a,r),this.m2=u.div(this.m2,100),this.m2<.01&&(this.m2=u.mul(this.m2,10)),this.m2>2&&(this.m2=u.div(this.m2,10)),this.correctAnswer=u.mul(this.m1,this.m2);var h=u.add(u.div(c(300,100),1e4),1);this.answers=this.getOptions(this.correctAnswer,h,this.ANSWERCOUNT),this.question=this.m1+" x "+u.mul(this.m2,100).toFixed(n)+"%",this.answerText=this.answers.map((function(t,e){return String.fromCharCode(65+e)+". "+t.toFixed(s)}))}},{key:"getOptions",value:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,n=c(s-1,0),i=[];this.correctAnswerIndex=s-n-1,i.push(t);for(var r=0;r<n;r++){var o=u.mul(t,u.pow(e,r+1));i.push(o)}for(var a=0;a<s-n-1;a++){var h=u.div(t,u.pow(e,a+1));i.unshift(h)}return i}}]),t}(),l=function(){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;i(this,t),this.ANSWERCOUNT=e,this.dict={"11.1%":"1/9","12.5%":"1/8","14.3%":"1/7","16.7%":"1/6","20.0%":"1/5","22.2%":"2/9","25.0%":"1/4","28.6%":"2/7","33.3%":"1/3","37.5%":"3/8","40.0%":"2/5","42.9%":"3/7","44.4%":"4/9","50.0%":"1/2","55.6%":"5/9","57.1%":"4/7","60.0%":"3/5","62.5%":"5/8","66.7%":"2/3","71.4%":"5/7","75.0%":"3/4","77.8%":"7/9","80.0%":"4/5","83.3%":"5/6","85.7%":"6/7","87.5%":"7/8","88.9%":"8/9"},this.correctAnswer="",this.correctAnswerIndex=0,this.pickQuestions=[],this.answers=[],this.answerText=[],this.question="",this.gen()}return r(t,[{key:"gen",value:function(){var t=this,e=[],s=[];Object.keys(this.dict).map((function(n){e.push(n),s.push(t.dict[n])}));for(var i=0;i<this.ANSWERCOUNT;i++){var r,o,a=c(e.length-1,0);(r=this.pickQuestions).push.apply(r,n(e.splice(a,1))),(o=this.answers).push.apply(o,n(s.splice(a,1)))}this.correctAnswerIndex=c(this.ANSWERCOUNT-1,0);var h=parseFloat(this.pickQuestions[this.correctAnswerIndex]),l=c(200,-200);h=u.add(h,u.div(l,1e3)),this.question="与 "+h.toFixed(2)+"% 最相近的是",this.correctAnswer=this.answers[this.correctAnswerIndex],this.answerText=this.answers}}]),t}();t.exports={AddQuestion:a,MulQuestion:h,Deci2frac:l}},ec78:function(t,e,s){"use strict";s("b52f")}});
//# sourceMappingURL=app.64ff8816.js.map