webpackJsonp([1],{"+skl":function(t,e){},IRg4:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("BTaQ"),s=n.n(a),u=n("/ocq"),c=n("Xxa5"),i=n.n(c),o=n("exGp"),l=n.n(o),f=n("JnRc"),d=n.n(f);d.a.init({appId:"lbNec6PJyWzpWXWhFwK0L3yq-gzGzoHsz",appKey:"cklqnzo93uOmckz6JFELszwP"});var m=d.a;function p(t){var e=new m.Query("_User"),n=new RegExp("-"+t+"$","i");return e.matches("username",n).find().then(function(t){return t.map(function(t){return function(t){return{id:t.id,name:t.get("username").replace(/-.+$/,""),self:v(t.get("self")),dad:v(t.get("dad")),mom:v(t.get("mom"))}}(t)})})}function h(){return new m.Query("_User").exists("subject").find().then(function(t){return t.map(function(t){return function(t){return{id:t.id,name:t.get("username"),subject:t.get("subject"),result:v(t.get("self"))}}(t)})})}function v(t){if(t.length<1)return"还没测";var e=[0,0,0,0,0,0,0,0,0];t.forEach(function(t){t>=1&&t<=9&&(e[t-1]+=1)});var n=Math.max.apply(Math,e);if(console.log(n),n<=0)return"还没测";var r=[];return e.forEach(function(t,e){t>=n&&r.push(e+1)}),r.join("+")}var _={data:function(){return{columns:[{title:"姓名",key:"name"},{title:"本人",key:"self"},{title:"父亲",key:"dad"},{title:"母亲",key:"mom"}],students:[]}},created:function(){this.get_students()},watch:{$route:"get_students"},methods:{get_students:function(){var t=this;return l()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.grade,e.next=3,p(n);case 3:t.students=e.sent;case 4:case"end":return e.stop()}},e,t)}))()}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.$route.params.grade))]),n("Table",{ref:"sts",staticClass:"table",attrs:{columns:t.columns,data:t.students,stripe:"stripe"}}),n("div",{staticClass:"right"},[t.students.length>0?n("Button",{attrs:{type:"primary"},on:{click:function(e){t.$refs.sts.exportCsv({filename:t.$route.params.grade})}}},[t._v("导出CSV")]):t._e()],1)],1)},staticRenderFns:[]};var y=n("VU/8")(_,g,!1,function(t){n("vbc/")},"data-v-00d355c7",null).exports,k={data:function(){return{columns:[{title:"姓名",key:"name"},{title:"科目",key:"subject"},{title:"类型",key:"result"}],teachers:[]}},created:function(){this.get_teachers()},watch:{$route:"get_teachers"},methods:{get_teachers:function(){var t=this;return l()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t.teachers=e.sent;case 3:case"end":return e.stop()}},e,t)}))()}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("教师列表")]),n("Table",{ref:"teachers",staticClass:"table",attrs:{columns:t.columns,data:t.teachers,stripe:"stripe"}}),n("div",{staticClass:"right"},[t.teachers.length>0?n("Button",{attrs:{type:"primary"},on:{click:function(e){t.$refs.teachers.exportCsv({filename:"教师列表"})}}},[t._v("导出CSV")]):t._e()],1)],1)},staticRenderFns:[]};var w=n("VU/8")(k,b,!1,function(t){n("IRg4")},"data-v-59ba5352",null).exports;r.default.use(u.a);var x=new u.a({routes:[{path:"/",redirect:"/students/联考1班"},{path:"/students/:grade",component:y},{path:"/teachers",component:w}]}),$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("Sider",{staticClass:"sider"},[n("Menu",{attrs:{theme:"dark","open-names":["联考","校考"]},on:{"on-select":function(e){t.$router.push(e)}}},[n("MenuItem",{attrs:{name:"/teachers"}},[t._v("老师列表")]),n("Submenu",{attrs:{name:"联考"}},[n("template",{slot:"title"},[t._v("联考班级")]),t._l(5,function(e){return n("MenuItem",{key:e,attrs:{name:"/students/联考"+e+"班"}},[t._v(t._s(e)+" 班")])})],2),n("Submenu",{attrs:{name:"校考"}},[n("template",{slot:"title"},[t._v("校考班级")]),t._l(30,function(e){return n("MenuItem",{key:e,attrs:{name:"/students/校考"+e+"班"}},[t._v(t._s(e)+" 班")])})],2)],1)],1),n("Content",{staticClass:"content"},[n("router-view")],1)],1)},staticRenderFns:[]};var C=n("VU/8")(null,$,!1,function(t){n("ei7+"),n("ahqg")},"data-v-1f35862f",null).exports;n("+skl");r.default.config.productionTip=!1,r.default.use(s.a),new r.default({el:"#root",router:x,components:{App:C},template:"<App/>"})},ahqg:function(t,e){},"ei7+":function(t,e){},"vbc/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f55f129228f5add84202.js.map