(function(t){function e(e){for(var n,s,l=e[0],c=e[1],u=e[2],_=0,f=[];_<l.length;_++)s=l[_],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);o&&o(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var o=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1818:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("div",{staticClass:"null"}),a("PublicFooter")],1)},i=[],s=a("2877"),l={},c=Object(s["a"])(l,r,i,!1,null,null,null),u=c.exports,o=a("8c4f"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("PublicHeader",{attrs:{title:"首页"}}),a("banner"),a("navs"),a("hotVideo")],1)},f=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner"},[a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.imgs,function(t,e){return a("div",{key:t.id,staticClass:"swiper-slide"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:t.url,alt:""}})])])}),0),a("div",{staticClass:"swiper-pagination"})])])},p=[],m=a("41d6"),v=(a("1818"),{name:"banner",data:function(){return{}},mounted:function(){new m["a"](".swiper-container",{pagination:{el:".swiper-pagination"}})},computed:{imgs:function(){return this.$store.state.banners}}}),h=v,g=Object(s["a"])(h,d,p,!1,null,null,null),b=g.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navs"},[a("ul",t._l(t.navList,function(e,n){return a("li",{key:t.navList.id},[a("a",{attrs:{href:"#"}},[a("div",{staticClass:"pic"},[a("img",{attrs:{src:e.url,alt:""}})]),a("span",[t._v(t._s(e.text))])])])}),0)])},C=[],j={name:"navs",data:function(){return{navList:[{id:1,text:"劲歌",url:"img/201de_2_70_70.png"},{id:2,text:"热舞",url:"img/e2e90_3_50_64.png"},{id:3,text:"相声",url:"img/acf2e_4_54_70.png"},{id:4,text:"育婴",url:"img/3c69a_0_66_68.png"},{id:5,text:"美食",url:"img/2747c_1_72_48.png"},{id:6,text:"汽车",url:"img/ce418_2_72_58.png"},{id:7,text:"动漫",url:"img/d4e1b_3_68_60.png"},{id:8,text:"更多",url:"img/ac8a4_4_70_70.png"}]}}},y=j,w=Object(s["a"])(y,x,C,!1,null,null,null),$=w.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hotVideo"},[t.show?t._e():a("div",{staticClass:"public-title"},[t._m(0)]),a("div",{staticClass:"video-list"},[a("ul",t._l(t.hotVideos,function(e,n){return a("li",{key:t.hotVideos.id},[a("div",{staticClass:"pic"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:e.url,alt:""}})])]),a("p",[t._v(t._s(e.text))])])}),0)])])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[t._v("最热视频 "),a("a",{attrs:{href:"index3.html"}},[t._v("更多 >")])])}],P={name:"hotVideo",props:["show"],data:function(){return{hotVideos:[{id:1,text:"舞动天下",url:"img/488fb_0_328_193.jpg"},{id:2,text:"舞动天下",url:"img/488fb_0_328_193.jpg"},{id:3,text:"舞动天下",url:"img/488fb_0_328_193.jpg"},{id:4,text:"舞动天下",url:"img/0c20e_0_328_193.jpg"}]}}},k=P,V=Object(s["a"])(k,E,O,!1,null,null,null),S=V.exports,H={name:"home",data:function(){return{}},components:{banner:b,navs:$,hotVideo:S}},F=H,M=Object(s["a"])(F,_,f,!1,null,null,null),L=M.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"channel"},[a("PublicHeader",{staticClass:"h3",attrs:{sch:"flase",title:"频道"}}),t._m(0),a("banner"),t._m(1),a("navs")],1)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sech"},[a("form",{attrs:{action:""}},[a("input",{attrs:{type:"text",placeholder:"请在输入超查找"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mav"},[a("ul",[a("li",{staticClass:"li1"},[a("a",{attrs:{href:"#"}},[a("b",[t._v("劲歌")]),a("p",[t._v("全球最火歌曲")])])]),a("li",{staticClass:"li2"},[a("a",{attrs:{href:"#"}},[a("b",[t._v("热舞")]),a("p",[t._v("美少女热舞")])])]),a("li",{staticClass:"li3"},[a("a",{attrs:{href:"#"}},[a("b",[t._v("相声")]),a("p",[t._v("同步相声大赛")])])]),a("li",{staticClass:"li4"},[a("a",{attrs:{href:"#"}},[a("b",[t._v("育婴")]),a("p",[t._v("教你如何带宝宝")])])])])])}],J={name:"channel",data:function(){return{}},components:{banner:b,navs:$}},D=J,I=Object(s["a"])(D,T,z,!1,null,null,null),W=I.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collect"},[a("PublicHeader",{staticClass:"h3",attrs:{title:"我的收藏"}}),a("div",{staticClass:"collects"},[a("ul",t._l(t.list,function(e,n){return a("li",{key:e.id},[a("div",{staticClass:"pic"},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:e.url,alt:""}})])]),a("p",[t._v(t._s(e.text))]),a("span",[t._v(t._s(e.date))])])}),0)])],1)},A=[],B={name:"collect",data:function(){return{}},components:{hotVideo:S},computed:{list:function(){return this.$store.state.collects}}},G=B,K=Object(s["a"])(G,q,A,!1,null,null,null),N=K.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my"},[t._m(0),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"history-list"},[a("ul",t._l(t.hs,function(e,n){return a("li",{key:e.id},[a("a",{attrs:{href:"#"}},[a("img",{attrs:{src:e.url,alt:""}})]),a("p",[t._v(t._s(e.text))])])}),0)]),t._m(4),t._m(5)])},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modify"},[a("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-box"},[a("div",{staticClass:"left"},[a("div",{staticClass:"pic"},[a("img",{attrs:{src:"img/01e88_7_131_131.jpg",alt:""}})]),a("div",{staticClass:"text"},[a("strong",[t._v("潘神的迷宫")]),a("p",[t._v("ID:40889532")])])]),a("a",{staticClass:"hy",attrs:{href:"#"}},[t._v("开通会员")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"watch-box"},[t._v("今日剩余观看："),a("strong",[t._v("6")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"public-title"},[a("h2",[t._v("观看历史 "),a("a",{attrs:{href:"#"}},[t._v("更多 >")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"public-title"},[a("h2",[t._v("我的下载 "),a("a",{attrs:{href:"#"}},[t._v("更多 >")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"features-box"},[a("ul",[a("li",[a("a",{attrs:{href:"#"}},[a("i",[a("img",{attrs:{src:"img/c0a85_10_47_54.png",alt:""}})]),a("p",[t._v("我要分享")])])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",[a("img",{attrs:{src:"img/66ce1_11_45_50.png",alt:""}})]),a("p",[t._v("意见反馈")])])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",[a("img",{attrs:{src:"img/1a43f_12_57_43.png",alt:""}})]),a("p",[t._v("收到通知")])])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",[a("img",{attrs:{src:"img/12ebb_13_61_47.png",alt:""}})]),a("p",[t._v("加入社区")])])])])])}],U={name:"my",data:function(){return{}},computed:{hs:function(){return this.$store.state.historys}}},X=U,Y=Object(s["a"])(X,Q,R,!1,null,null,null),Z=Y.exports;n["a"].use(o["a"]);var tt=new o["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:L},{path:"/channel",name:"channel",component:W},{path:"/collect",name:"collect",component:N},{path:"/my",name:"my",component:Z}]}),et=a("2f62");n["a"].use(et["a"]);var at=new et["a"].Store({state:{banners:[{id:1,url:"img/7f1f6_0_686_384.jpg"},{id:2,url:"img/7f1f6_0_686_384.jpg"},{id:3,url:"img/7f1f6_0_686_384.jpg"},{id:4,url:"img/7f1f6_0_686_384.jpg"}],collects:[{id:1,text:"舞动天下",date:"2018-11-20",url:"img/1c0c6_0_328_193.jpg"},{id:2,text:"舞动天下",date:"2018-11-20",url:"img/2e334_1_328_192.jpg"},{id:3,text:"舞动天下",date:"2018-11-20",url:"img/488fb_0_328_193.jpg"},{id:4,text:"舞动天下",date:"2018-11-20",url:"img/58791_2_328_192.jpg"}],historys:[{id:1,text:"海神的发怒",url:"img/a6c59_8_246_144.jpg"},{id:2,text:"一百种死法",url:"img/93b26_9_246_145.jpg"},{id:3,text:"海神的发怒",url:"img/a6c59_8_246_144.jpg"},{id:4,text:"一百种死法",url:"img/93b26_9_246_145.jpg"}]},mutations:{},actions:{}}),nt=a("bc3a"),rt=a.n(nt),it=a("a7fe"),st=a.n(it),lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"PublicHeader"},[a("h1",[t._v(t._s(t.title))]),t.sch?t._e():a("a",{staticClass:"sch",attrs:{href:"#"}})])},ct=[],ut={name:"PublicHeader",props:["sch","title"],data:function(){return{}}},ot=ut,_t=Object(s["a"])(ot,lt,ct,!1,null,null,null),ft=_t.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"publicFooter publicCenter"},[a("ul",[a("li",[a("router-link",{staticClass:"a1",attrs:{to:"/",exact:""}},[t._v("首页")])],1),a("li",[a("router-link",{staticClass:"a2",attrs:{to:"channel"}},[t._v("频道")])],1),a("li",[a("router-link",{staticClass:"a3",attrs:{to:"collect"}},[t._v("收藏")])],1),a("li",[a("router-link",{staticClass:"a4",attrs:{to:"my"}},[t._v("我的")])],1)])])},pt=[],mt={name:"publicFooter",data:function(){return{footers:[{id:1,text:"首页",class:"a1"},{id:2,text:"频道",class:"a2"},{id:3,text:"收藏",class:"a3"},{id:4,text:"我的",class:"a4"}]}}},vt=mt,ht=Object(s["a"])(vt,dt,pt,!1,null,null,null),gt=ht.exports;a("a07f"),a("fd38"),a("8d8b");n["a"].use(st.a,rt.a),n["a"].component("PublicHeader",ft),n["a"].component("PublicFooter",gt),n["a"].config.productionTip=!1,new n["a"]({router:tt,store:at,render:function(t){return t(u)}}).$mount("#app")},"8d8b":function(t,e,a){},a07f:function(t,e){function a(){var t=750,e=document.documentElement.clientWidth;e>=t&&(e=t),document.documentElement.style.fontSize=e/(t/100)+"px",console.log(e)}a(),window.onresize=function(){a()}},fd38:function(t,e,a){}});
//# sourceMappingURL=app.e4445c03.js.map