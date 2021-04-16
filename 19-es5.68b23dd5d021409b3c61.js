!function(){function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{CHRX:function(a,r,c){"use strict";c.d(r,"a",function(){return i});var o=c("wd/R"),i=function(){function a(){e(this,a),this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.summaryRow=!0,this.emptyRow=!0,this.customFilter=function(t){return t}}return n(a,[{key:"setGroup",value:function(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}},{key:"setData",value:function(t){this.data=t,this.sortData()}},{key:"sortData",value:function(){var t=this;this.data.sort(function(e,a){if(e[t.groupField]==a[t.groupField]){if(t.secondarySort){if(null==e[t.secondarySort])return 1;if(null==a[t.secondarySort])return-1;if(e[t.secondarySort]>a[t.secondarySort])return 1*("desc"===t.sortDir?-1:1);if(e[t.secondarySort]<a[t.secondarySort])return-1*("desc"===t.sortDir?-1:1)}}else{if(null==e[t.groupField])return 1;if(null==a[t.groupField])return-1;if(e[t.groupField]>a[t.groupField])return 1;if(e[t.groupField]<a[t.groupField])return-1}return 0}),this.filterRows()}},{key:"filterRows",value:function(){var e=this,a=[];a=this.data.filter(function(t){for(var a in e.filter){if(e.filter[a]&&null==t[a])return!1;switch(typeof t[a]){case"number":if(e.filter[a]&&Math.trunc(t[a]).toString()!==Math.trunc(e.filter[a]).toString())return!1;break;case"string":if("f"==a.charAt(0).toLowerCase()&&o(t[a]).isValid){if(-1==o(t[a]).format("DD/MM/YYYY HH:mm:ss").indexOf(e.filter[a]))return!1;break}if(-1==t[a].toLowerCase().indexOf(e.filter[a].toLowerCase()))return!1}}return!0}),a=this.customFilter(a);var n={};this.groupField?n[this.groupField]=a.length.toString():n.count=a.length.toString(),this.sum.forEach(function(t){return n[t]=0});for(var r=0;r<a.length;r++)this.sum.forEach(function(t){return n[t]+=a[r][t]});if(n.isGroup=!0,this.footer=n,this.groupField){var c=[];a.forEach(function(t){-1==c.indexOf(t[e.groupField])&&c.push(t[e.groupField])}),c=c.map(function(t){return{name:t,count:1}});var i=[],l=!0,u=0,s=null,b=function(){s&&(s[e.groupField]+=" ("+c[u-1].count.toString()+")")};for(r=0;r<a.length;r++){if(l&&a[r][this.groupField]==c[u].name){var f;b();var p="+";this.groups[c[u].name]&&(p="-"),t(f={},this.groupField,p+" "+c[u].name),t(f,"isGroup",!0),t(f,"name",c[u].name),s=f,this.sum.forEach(function(t){return s[t]=0}),i.push(s),l=++u<c.length}else c[u-1].count++;this.sum.forEach(function(t){return s[t]+=a[r][t]}),i.push(a[r])}b(),a=null,i=i.filter(function(t){return!!t.isGroup||!!e.groups[t[e.groupField]]||void 0}),this.rows=i}else this.rows=a;this.summaryRow&&this.rows.push(this.footer),0==this.rows.length&&this.emptyRow&&this.rows.push({})}},{key:"updateFilter",value:function(t,e){if(t&&e){var a=t.target.value;t instanceof MouseEvent&&(a=""),this.filter[e]=a,this.filterRows()}return!0}},{key:"updateFilterBoolean",value:function(t,e){return this.filter[e]=t,this.filterRows(),!0}}],[{key:"prepararFiltroAPI",value:function(t){var e="";for(var a in t)t[a].search&&(e+="number"==typeof t[a].search?'{"'.concat(a,'":').concat(t[a].search,"},"):t[a].exact?'{"'.concat(a,'":"').concat(t[a].search,'"},'):'{"'.concat(a,'":{"ilike":"%').concat(t[a].search,'%"}},'));return e}}]),a}()},GmJt:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a("GS7A"),r=Object(n.g)([Object(n.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(n.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(n.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),c=[Object(n.n)("animate",[Object(n.m)("void => *",[Object(n.o)(r)])]),Object(n.n)("fadeInOut",[Object(n.k)("0",Object(n.l)({opacity:0,display:"none"})),Object(n.k)("1",Object(n.l)({opacity:1,display:"block"})),Object(n.m)("0 => 1",Object(n.e)("300ms")),Object(n.m)("1 => 0",Object(n.e)("300ms"))])]},vkD5:function(t,a,r){"use strict";r.r(a),r.d(a,"RegistryModule",function(){return Xt});var c=r("GmJt"),o=r("3kSh"),i=r("3sEA"),l=r("iELJ"),u=r("8Y7J"),s=r("PDjf"),b=r("SVse"),f=r("VDRc"),p=r("Dxy4"),m=r("Tj54"),d=r("TSSN");function h(t,e){if(1&t&&(u.Xb(0,"div"),u.Oc(1),u.kc(2,"translate"),u.kc(3,"number"),u.Wb()),2&t){var a=u.jc(2);u.Eb(1),u.Rc("",u.lc(2,2,"REGISTRYPOPUP.ACTUALTEMPERATURE"),": ",u.lc(3,4,a.data.payload.rtemperaturaactual),"\xb0c ")}}function g(t,e){if(1&t&&(u.Xb(0,"div"),u.Oc(1),u.kc(2,"translate"),u.kc(3,"number"),u.Wb()),2&t){var a=u.jc(2);u.Eb(1),u.Rc("",u.lc(2,2,"REGISTRYPOPUP.AVERAGETEMPERATURE"),": ",u.lc(3,4,a.data.payload.rtemperaturapromedio),"\xb0c")}}function v(t,e){if(1&t&&(u.Xb(0,"div"),u.Xb(1,"h5"),u.Xb(2,"b"),u.Oc(3),u.kc(4,"translate"),u.Wb(),u.Wb(),u.Mc(5,h,4,6,"div",2),u.Mc(6,g,4,6,"div",2),u.Sb(7,"br"),u.Wb()),2&t){var a=u.jc();u.Eb(3),u.Qc("",u.lc(4,3,"REGISTRYPOPUP.TEMPERATURE"),":"),u.Eb(2),u.pc("ngIf",a.data.payload.rtemperaturaactual),u.Eb(1),u.pc("ngIf",a.data.payload.rtemperaturapromedio)}}var O,E,y=function(){return{y:"50px",delay:"300ms"}},R=function(t){return{value:"*",params:t}},k=((O=function(){function t(a,n){e(this,t),this.data=a,this.dialogRef=n}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||O)(u.Rb(l.a),u.Rb(l.g))},O.\u0275cmp=u.Lb({type:O,selectors:[["app-registry-popup"]],decls:78,vars:89,consts:[["matDialogTitle","",1,"popup-title"],[2,"font-size","small"],[4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"]],template:function(t,e){1&t&&(u.Xb(0,"h1",0),u.Xb(1,"span"),u.Oc(2),u.Wb(),u.Xb(3,"span",1),u.Oc(4),u.kc(5,"date"),u.Wb(),u.Wb(),u.Xb(6,"mat-dialog-content"),u.Xb(7,"mat-card"),u.Xb(8,"mat-card-content"),u.Xb(9,"div"),u.Xb(10,"h5"),u.Xb(11,"b"),u.Oc(12),u.kc(13,"translate"),u.Wb(),u.Oc(14),u.Wb(),u.Xb(15,"div"),u.Oc(16),u.kc(17,"translate"),u.kc(18,"date"),u.Wb(),u.Xb(19,"div"),u.Oc(20),u.kc(21,"translate"),u.kc(22,"date"),u.Wb(),u.Sb(23,"br"),u.Wb(),u.Mc(24,v,8,5,"div",2),u.Xb(25,"div"),u.Xb(26,"h5"),u.Xb(27,"b"),u.Oc(28),u.kc(29,"translate"),u.Wb(),u.Wb(),u.Xb(30,"div"),u.Oc(31),u.kc(32,"translate"),u.kc(33,"number"),u.kc(34,"number"),u.Wb(),u.Xb(35,"div"),u.Oc(36),u.kc(37,"translate"),u.kc(38,"number"),u.kc(39,"number"),u.Wb(),u.Sb(40,"br"),u.Wb(),u.Xb(41,"div"),u.Xb(42,"h5"),u.Xb(43,"b"),u.Oc(44),u.kc(45,"translate"),u.Wb(),u.Wb(),u.Xb(46,"div"),u.Oc(47),u.kc(48,"translate"),u.kc(49,"number"),u.Wb(),u.Xb(50,"div"),u.Oc(51),u.kc(52,"translate"),u.kc(53,"number"),u.Wb(),u.Sb(54,"br"),u.Wb(),u.Xb(55,"div"),u.Xb(56,"h5"),u.Xb(57,"b"),u.Oc(58),u.kc(59,"translate"),u.Wb(),u.Wb(),u.Xb(60,"div"),u.Oc(61),u.kc(62,"translate"),u.kc(63,"number"),u.kc(64,"number"),u.Wb(),u.Xb(65,"div"),u.Oc(66),u.kc(67,"translate"),u.kc(68,"number"),u.kc(69,"number"),u.Wb(),u.Sb(70,"br"),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Xb(71,"mat-dialog-content",3),u.Xb(72,"div",4),u.Xb(73,"button",5),u.fc("click",function(){return e.dialogRef.close(!1)}),u.Xb(74,"mat-icon"),u.Oc(75,"cancel"),u.Wb(),u.Oc(76),u.kc(77,"translate"),u.Wb(),u.Wb(),u.Wb()),2&t&&(u.Eb(2),u.Rc("",e.data.puntoDeVenta," (",e.data.payload.shostname,")"),u.Eb(2),u.Pc(u.mc(5,31,e.data.payload.fcreacion,"dd/MM/yyyy HH:mm:ss")),u.Eb(3),u.pc("@animate",u.vc(87,R,u.uc(86,y))),u.Eb(5),u.Qc("",u.lc(13,34,"REGISTRYPOPUP.OPERATINGSYSTEM"),":"),u.Eb(2),u.Qc(" ",e.data.payload.ssistemaoperativo,""),u.Eb(2),u.Rc("",u.lc(17,36,"REGISTRYPOPUP.SYSTEMSTARTUP"),": ",u.mc(18,38,e.data.payload.finicioos,"dd/MM/yyyy HH:mm:ss"),""),u.Eb(4),u.Rc("",u.lc(21,41,"REGISTRYPOPUP.POSBERRYSTART"),": ",u.mc(22,43,e.data.payload.finicioapp,"dd/MM/yyyy HH:mm:ss"),""),u.Eb(4),u.pc("ngIf",e.data.payload.rtemperaturaactual||e.data.payload.rtemperaturapromedio),u.Eb(4),u.Qc("",u.lc(29,46,"REGISTRYPOPUP.MEMORY"),":"),u.Eb(3),u.Sc("",u.lc(32,48,"REGISTRYPOPUP.FREEMEMORY"),": ",u.lc(33,50,e.data.payload.imemorialibre/1e6)," GB (",u.lc(34,52,e.data.payload.imemorialibre)," KB)"),u.Eb(5),u.Sc("",u.lc(37,54,"REGISTRYPOPUP.TOTALMEMORY"),": ",u.lc(38,56,e.data.payload.imemoriatotal/1e6)," GB (",u.lc(39,58,e.data.payload.imemoriatotal)," KB)"),u.Eb(8),u.Qc("",u.lc(45,60,"REGISTRYPOPUP.PROCESSOR"),":"),u.Eb(3),u.Rc("",u.lc(48,62,"REGISTRYPOPUP.CURRENTLOAD"),": ",u.lc(49,64,e.data.payload.rcpuloadactual),"%"),u.Eb(4),u.Rc("",u.lc(52,66,"REGISTRYPOPUP.AVERAGELOAD"),": ",u.lc(53,68,e.data.payload.rcpuloadpromedio),"%"),u.Eb(7),u.Qc("",u.lc(59,70,"REGISTRYPOPUP.STORAGE"),":"),u.Eb(3),u.Sc("",u.lc(62,72,"REGISTRYPOPUP.FREESTORAGE"),": ",u.lc(63,74,e.data.payload.ialmacenamientolibre/1e6)," GB (",u.lc(64,76,e.data.payload.ialmacenamientolibre)," KB)"),u.Eb(5),u.Sc("",u.lc(67,78,"REGISTRYPOPUP.AVERAGELOAD"),": ",u.lc(68,80,e.data.payload.ialmacenamientototal/1e6)," GB (",u.lc(69,82,e.data.payload.ialmacenamientototal)," KB)"),u.Eb(10),u.Qc("",u.lc(77,84,"REGISTRYPOPUP.CANCEL")," "))},directives:[l.h,l.e,s.a,s.b,b.o,f.c,f.b,f.a,p.b,m.a],pipes:[b.f,d.c,b.g],styles:[".popup-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),O),w=r("AytR"),M=r("IheW"),S=((E=function(){function t(a){e(this,t),this.http=a}return n(t,[{key:"obtenerDatos",value:function(t,e,a,n){return this.http.get(encodeURI("".concat(w.a.apiURL,'Registro?filter={"where":').concat(t,',"limit":').concat(e,',"skip":').concat(a,',"order":"').concat(n,'"}')))}},{key:"obtenerCount",value:function(t){return this.http.get(encodeURI("".concat(w.a.apiURL,"Registro/count?where=").concat(t)))}},{key:"obtenerPV",value:function(){return this.http.get(w.a.apiURL+"PuntosVenta")}}]),t}()).\u0275fac=function(t){return new(t||E)(u.bc(M.c))},E.\u0275prov=u.Nb({token:E,factory:E.\u0275fac,providedIn:"root"}),E),P=r("CHRX"),X=r("cp0P"),T=r("HeVh"),G=r("zHaW"),x=r("Q2Ze"),I=r("e6WT"),W=r("w9WL");function A(t,e){if(1&t){var a=u.Yb();u.Xb(0,"button",25),u.fc("click",function(t){u.Dc(a);var e=u.jc(),n=u.Ac(4);return e.updateFilter(t,null,null)&&(n.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function F(t,e){if(1&t&&u.Oc(0),2&t){var a=e.row;u.Qc(" ",null==a?null:a.sinstancia," ")}}function Y(t,e){if(1&t&&(u.Xb(0,"ngx-datatable-column",26),u.kc(1,"translate"),u.Mc(2,F,1,1,"ng-template",20),u.Wb()),2&t){u.jc();var a=u.Ac(32);u.qc("name",u.lc(1,3,"REGISTRYCOMPONENT.INSTANCE")),u.pc("summaryTemplate",a)("flexGrow",1)}}function j(t,e){if(1&t&&(u.Oc(0),u.kc(1,"date")),2&t){var a=e.row;u.Qc(" ",u.mc(1,1,null==a?null:a.fcreacion,"dd/MM/yyyy HH:mm:ss")," ")}}function C(t,e){1&t&&(u.Xb(0,"ngx-datatable-column",27),u.kc(1,"translate"),u.Mc(2,j,2,4,"ng-template",20),u.Wb()),2&t&&(u.qc("name",u.lc(1,2,"REGISTRYCOMPONENT.DATE")),u.pc("flexGrow",1))}function L(t,e){if(1&t&&u.Oc(0),2&t){var a=e.row;u.Qc(" ",null==a?null:a.message," ")}}function N(t,e){if(1&t&&(u.Xb(0,"ngx-datatable-column",28),u.kc(1,"translate"),u.Mc(2,L,1,1,"ng-template",20),u.Wb()),2&t){u.jc();var a=u.Ac(28);u.qc("name",u.lc(1,3,"REGISTRYCOMPONENT.MESSAGE")),u.pc("summaryTemplate",a)("flexGrow",2)}}function D(t,e){if(1&t&&u.Oc(0),2&t){var a=e.row;u.Qc(" ",null==a?null:a.soperadorcreacion," ")}}function U(t,e){1&t&&(u.Xb(0,"ngx-datatable-column",29),u.kc(1,"translate"),u.Mc(2,D,1,1,"ng-template",20),u.Wb()),2&t&&(u.qc("name",u.lc(1,2,"REGISTRYCOMPONENT.OPERATOR")),u.pc("flexGrow",1.5))}function H(t,e){if(1&t&&u.Oc(0),2&t){var a=e.row;u.Qc(" ",null==a?null:a.shostname," ")}}function Q(t,e){if(1&t&&(u.Xb(0,"ngx-datatable-column",30),u.kc(1,"translate"),u.Mc(2,H,1,1,"ng-template",20),u.Wb()),2&t){u.jc();var a=u.Ac(30);u.qc("name",u.lc(1,3,"REGISTRYCOMPONENT.PCNAME")),u.pc("summaryTemplate",a)("flexGrow",1)}}function V(t,e){if(1&t&&u.Oc(0),2&t){var a=e.row;u.Qc(" ",null==a?null:a.sversion," ")}}function q(t,e){1&t&&(u.Xb(0,"ngx-datatable-column",31),u.kc(1,"translate"),u.Mc(2,V,1,1,"ng-template",20),u.Wb()),2&t&&(u.qc("name",u.lc(1,2,"REGISTRYCOMPONENT.VERSION")),u.pc("flexGrow",.7))}function B(t,e){if(1&t&&u.Oc(0),2&t){var a=e.row;u.Qc(" ",null==a?null:a.idpv," ")}}function J(t,e){if(1&t&&(u.Xb(0,"ngx-datatable-column",32),u.kc(1,"translate"),u.Mc(2,B,1,1,"ng-template",20),u.Wb()),2&t){u.jc();var a=u.Ac(26);u.qc("name",u.lc(1,3,"REGISTRYCOMPONENT.POS")),u.pc("summaryTemplate",a)("flexGrow",1)}}function z(t,e){if(1&t&&u.Oc(0),2&t){var a=e.row;u.Qc(" ",null==a?null:a.ssistemaoperativo," ")}}function K(t,e){1&t&&(u.Xb(0,"ngx-datatable-column",33),u.kc(1,"translate"),u.Mc(2,z,1,1,"ng-template",20),u.Wb()),2&t&&(u.qc("name",u.lc(1,2,"REGISTRYCOMPONENT.OS")),u.pc("flexGrow",1.5))}function Z(t,e){if(1&t&&(u.Oc(0),u.kc(1,"date")),2&t){var a=e.row;u.Qc(" ",u.mc(1,1,null==a?null:a.finicioapp,"dd/MM/yyyy HH:mm:ss")," ")}}function _(t,e){1&t&&(u.Xb(0,"ngx-datatable-column",34),u.kc(1,"translate"),u.Mc(2,Z,2,4,"ng-template",20),u.Wb()),2&t&&(u.qc("name",u.lc(1,2,"REGISTRYCOMPONENT.APPSTART")),u.pc("flexGrow",1))}function $(t,e){if(1&t&&(u.Oc(0),u.kc(1,"number")),2&t){var a=e.row;u.Qc(" ",u.mc(1,1,null==a?null:a.rtemperaturaactual,"1.00-0")," ")}}function tt(t,e){1&t&&(u.Xb(0,"ngx-datatable-column",35),u.kc(1,"translate"),u.Mc(2,$,2,4,"ng-template",20),u.Wb()),2&t&&(u.qc("name",u.lc(1,3,"REGISTRYCOMPONENT.CPUTEMP")),u.pc("summaryFunc",null)("flexGrow",.7))}function et(t,e){if(1&t&&(u.Oc(0),u.kc(1,"number")),2&t){var a=e.row;u.Qc(" ",u.mc(1,1,null==a?null:a.rtemperaturapromedio,"1.00-0")," ")}}function at(t,e){1&t&&(u.Xb(0,"ngx-datatable-column",36),u.kc(1,"translate"),u.Mc(2,et,2,4,"ng-template",20),u.Wb()),2&t&&(u.qc("name",u.lc(1,3,"REGISTRYCOMPONENT.CPUAVERAGETEMP")),u.pc("summaryFunc",null)("flexGrow",.7))}function nt(t,e){if(1&t&&(u.Oc(0),u.kc(1,"number")),2&t){var a=e.row;u.Qc(" ",u.mc(1,1,null==a?null:a.rcpuloadpromedio,"1.00-0")," ")}}function rt(t,e){1&t&&(u.Xb(0,"ngx-datatable-column",37),u.kc(1,"translate"),u.Mc(2,nt,2,4,"ng-template",20),u.Wb()),2&t&&(u.qc("name",u.lc(1,3,"REGISTRYCOMPONENT.CPUAVERAGELOAD")),u.pc("summaryFunc",null)("flexGrow",.7))}function ct(t,e){if(1&t){var a=u.Yb();u.Xb(0,"button",38),u.fc("click",function(){u.Dc(a);var t=e.row;return u.jc().openPopUp(t)}),u.Xb(1,"mat-icon"),u.Oc(2,"info"),u.Wb(),u.Wb()}}function ot(t,e){if(1&t){var a=u.Yb();u.Xb(0,"button",25),u.fc("click",function(t){u.Dc(a),u.jc();var e=u.Ac(2);return u.jc().updateFilter(t,"idpv",!0)&&(e.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function it(t,e){if(1&t){var a=u.Yb();u.Xb(0,"mat-form-field",0),u.Xb(1,"input",39,3),u.fc("keyup",function(t){return u.Dc(a),u.jc().updateFilter(t,"idpv",!0)}),u.Wb(),u.Mc(3,ot,3,0,"button",4),u.Wb()}if(2&t){var n=u.Ac(2);u.Eb(3),u.pc("ngIf",n.value)}}function lt(t,e){if(1&t){var a=u.Yb();u.Xb(0,"button",25),u.fc("click",function(t){u.Dc(a),u.jc();var e=u.Ac(2);return u.jc().updateFilter(t,"message",!1)&&(e.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function ut(t,e){if(1&t){var a=u.Yb();u.Xb(0,"mat-form-field",0),u.Xb(1,"input",39,3),u.fc("keyup",function(t){return u.Dc(a),u.jc().updateFilter(t,"message",!1)}),u.Wb(),u.Mc(3,lt,3,0,"button",4),u.Wb()}if(2&t){var n=u.Ac(2);u.Eb(3),u.pc("ngIf",n.value)}}function st(t,e){if(1&t){var a=u.Yb();u.Xb(0,"button",25),u.fc("click",function(t){u.Dc(a),u.jc();var e=u.Ac(2);return u.jc().updateFilter(t,"shostname",!1)&&(e.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function bt(t,e){if(1&t){var a=u.Yb();u.Xb(0,"mat-form-field",0),u.Xb(1,"input",39,3),u.fc("keyup",function(t){return u.Dc(a),u.jc().updateFilter(t,"shostname",!1)}),u.Wb(),u.Mc(3,st,3,0,"button",4),u.Wb()}if(2&t){var n=u.Ac(2);u.Eb(3),u.pc("ngIf",n.value)}}function ft(t,e){if(1&t){var a=u.Yb();u.Xb(0,"button",25),u.fc("click",function(t){u.Dc(a),u.jc();var e=u.Ac(2);return u.jc().updateFilter(t,"sinstancia",!1)&&(e.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function pt(t,e){if(1&t){var a=u.Yb();u.Xb(0,"mat-form-field",0),u.Xb(1,"input",39,3),u.fc("keyup",function(t){return u.Dc(a),u.jc().updateFilter(t,"sinstancia",!1)}),u.Wb(),u.Mc(3,ft,3,0,"button",4),u.Wb()}if(2&t){var n=u.Ac(2);u.Eb(3),u.pc("ngIf",n.value)}}var mt,dt,ht=function(){return{y:"50px",delay:"300ms"}},gt=function(t){return{value:"*",params:t}},vt=[{path:"",component:(mt=function(){function t(a,n,r,c,o,i){e(this,t),this.servicioRegistro=a,this.snack=n,this.loader=r,this.dialog=c,this.confirmService=o,this.breakpointObserver=i,this.fields={},this.timeOutDuration=800,this.rows=[],this.order="fcreacion DESC",this.search="",this.page={count:0,offset:0,limit:10}}return n(t,[{key:"ngOnInit",value:function(){var t=this;this.refresh(),this.servicioRegistro.obtenerPV().subscribe(function(e){t.puntosDeVenta=e,console.log(e)}),this.breakpointObserver.observe([T.b.XSmall,T.b.Small,T.b.Medium,T.b.Large,T.b.XLarge]).subscribe(function(e){t.isXSmall=t.breakpointObserver.isMatched(T.b.XSmall),t.isSmall=t.breakpointObserver.isMatched(T.b.Small),t.isMedium=t.breakpointObserver.isMatched(T.b.Medium),t.isLarge=t.breakpointObserver.isMatched(T.b.Large),t.isXLarge=t.breakpointObserver.isMatched(T.b.XLarge)})}},{key:"mostrarOcultar",value:function(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}},{key:"prepararFiltro",value:function(){var t=this;this.filter='{"and":[';var e=this.search.split(" ");e.length>0&&e.forEach(function(e,a){e.length>1&&(t.filter+='{"or":[{"sinstancia":{"ilike":"%'.concat(e,'%"}},{"message":{"ilike":"%').concat(e,'%"}},{"shostname":{"ilike":"%').concat(e,'%"}}]}'),a<t.search.length-1&&(t.filter+=","))}),this.filter+=P.a.prepararFiltroAPI(this.fields),this.filter+='{"deletedon":{"eq":null}}]}'}},{key:"refresh",value:function(){var t=this;this.prepararFiltro(),Object(X.a)([this.servicioRegistro.obtenerCount(this.filter),this.servicioRegistro.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(function(e){t.page.count=e[0].count,t.rows=e[1],0==t.rows.length&&t.rows.push({})},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"pageCallback",value:function(t){this.page.offset=t.offset,this.refresh()}},{key:"updateFilter",value:function(t,e,a){var n=this;if(t&&e){var r=t.target.value;t instanceof MouseEvent&&(r=""),this.fields[e]={search:r,exact:a}}else t&&(this.search=t instanceof MouseEvent?"":t.target.value);return clearTimeout(this.timeOut),this.timeOut=setTimeout(function(){n.refresh()},this.timeOutDuration),!0}},{key:"onSort",value:function(t){var e=t.sorts[0];this.order="".concat(e.prop," ").concat(e.dir.toUpperCase()),this.refresh()}},{key:"openPopUp",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(k,{width:"720px",disableClose:!0,data:{title:"INFORMACION",payload:t,puntoDeVenta:this.puntosDeVenta.find(function(e){return e.idpv=t.idpv}).sdescripcion}}).afterClosed()}}]),t}(),mt.\u0275fac=function(t){return new(t||mt)(u.Rb(S),u.Rb(G.a),u.Rb(i.a),u.Rb(l.b),u.Rb(o.a),u.Rb(T.a))},mt.\u0275cmp=u.Lb({type:mt,selectors:[["app-registry"]],decls:33,vars:36,consts:[[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],["summaryRow","true",1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","sinstancia",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","fcreacion",3,"name","flexGrow",4,"ngIf"],["prop","message",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","soperadorcreacion",3,"name","flexGrow",4,"ngIf"],["prop","hostname",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sversion",3,"name","flexGrow",4,"ngIf"],["prop","idpv",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","ssistemaoperativo",3,"name","flexGrow",4,"ngIf"],["prop","finicioapp",3,"name","flexGrow",4,"ngIf"],["prop","rtemperaturaactual",3,"summaryFunc","name","flexGrow",4,"ngIf"],["prop","rtemperaturapromedio",3,"summaryFunc","name","flexGrow",4,"ngIf"],["prop","rcpuloadpromedio",3,"summaryFunc","name","flexGrow",4,"ngIf"],[3,"name","flexGrow","sortable"],["ngx-datatable-cell-template",""],["tabla1idpv",""],["tabla1message",""],["tabla1shostname",""],["tabla1sinstancia",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["prop","sinstancia",3,"summaryTemplate","name","flexGrow"],["prop","fcreacion",3,"name","flexGrow"],["prop","message",3,"summaryTemplate","name","flexGrow"],["prop","soperadorcreacion",3,"name","flexGrow"],["prop","hostname",3,"summaryTemplate","name","flexGrow"],["prop","sversion",3,"name","flexGrow"],["prop","idpv",3,"summaryTemplate","name","flexGrow"],["prop","ssistemaoperativo",3,"name","flexGrow"],["prop","finicioapp",3,"name","flexGrow"],["prop","rtemperaturaactual",3,"summaryFunc","name","flexGrow"],["prop","rtemperaturapromedio",3,"summaryFunc","name","flexGrow"],["prop","rcpuloadpromedio",3,"summaryFunc","name","flexGrow"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(u.Xb(0,"mat-form-field",0),u.Xb(1,"mat-icon",1),u.Oc(2,"search"),u.Wb(),u.Xb(3,"input",2,3),u.fc("keyup",function(t){return e.updateFilter(t,null,null)}),u.kc(5,"translate"),u.Wb(),u.Mc(6,A,3,0,"button",4),u.Wb(),u.Xb(7,"mat-card",5),u.Xb(8,"mat-card-content",5),u.Xb(9,"ngx-datatable",6),u.fc("page",function(t){return e.pageCallback(t)})("sort",function(t){return e.onSort(t)}),u.Mc(10,Y,3,5,"ngx-datatable-column",7),u.Mc(11,C,3,4,"ngx-datatable-column",8),u.Mc(12,N,3,5,"ngx-datatable-column",9),u.Mc(13,U,3,4,"ngx-datatable-column",10),u.Mc(14,Q,3,5,"ngx-datatable-column",11),u.Mc(15,q,3,4,"ngx-datatable-column",12),u.Mc(16,J,3,5,"ngx-datatable-column",13),u.Mc(17,K,3,4,"ngx-datatable-column",14),u.Mc(18,_,3,4,"ngx-datatable-column",15),u.Mc(19,tt,3,5,"ngx-datatable-column",16),u.Mc(20,at,3,5,"ngx-datatable-column",17),u.Mc(21,rt,3,5,"ngx-datatable-column",18),u.Xb(22,"ngx-datatable-column",19),u.kc(23,"translate"),u.Mc(24,ct,3,0,"ng-template",20),u.Wb(),u.Wb(),u.Wb(),u.Wb(),u.Mc(25,it,4,1,"ng-template",null,21,u.Nc),u.Mc(27,ut,4,1,"ng-template",null,22,u.Nc),u.Mc(29,bt,4,1,"ng-template",null,23,u.Nc),u.Mc(31,pt,4,1,"ng-template",null,24,u.Nc)),2&t){var a=u.Ac(4);u.Eb(3),u.qc("placeholder",u.lc(5,29,"REGISTRYCOMPONENT.FILTER")),u.Eb(3),u.pc("ngIf",a.value),u.Eb(1),u.pc("@animate",u.vc(34,gt,u.uc(33,ht))),u.Eb(2),u.pc("rows",e.rows)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight","auto")("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("S")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("XS")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("XS")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("L")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("L")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("L")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("XS")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("L")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("L")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("XL")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("XL")),u.Eb(1),u.pc("ngIf",e.mostrarOcultar("XL")),u.Eb(1),u.qc("name",u.lc(23,31,"SALES.ACTIONS")),u.pc("flexGrow",1)("sortable",!1)}},directives:[x.c,m.a,x.g,I.b,b.o,s.a,s.b,W.d,W.b,W.a,p.b,x.h],pipes:[d.c,b.f,b.g],styles:[""],data:{animation:[c.a]}}),mt),data:{title:"REGISTRO"}}],Ot=r("iInd"),Et=r("s7LF"),yt=r("f44v"),Rt=r("SqCe"),kt=r("rJgo"),wt=r("jMqV"),Mt=r("ZFy/"),St=r("u9T3"),Pt=r("PCNd"),Xt=((dt=function t(){e(this,t)}).\u0275mod=u.Pb({type:dt}),dt.\u0275inj=u.Ob({factory:function(t){return new(t||dt)},providers:[S],imports:[[b.c,Et.t,St.a,W.f,I.c,m.b,s.c,kt.c,p.c,yt.a,Rt.b,Mt.b,l.f,G.b,wt.b,d.b,Pt.a,Ot.k.forChild(vt)]]}),dt)}}])}();