!function(){function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/m8Z":function(t,a,o){"use strict";o.r(a),o.d(a,"ValuedStockModule",function(){return wt});var r,l=o("SVse"),c=o("s7LF"),i=o("GmJt"),u=o("3sEA"),s=o("bPAe"),b=o("CHRX"),f=o("AytR"),p=o("8Y7J"),d=o("IheW"),m=((r=function(){function t(a){e(this,t),this.http=a}return n(t,[{key:"obtenerDatos",value:function(t){var e=f.a.apiURL+"Productos/GetStock";return t&&(e+="?fhasta="+t),this.http.get(encodeURI(e))}}]),t}()).\u0275fac=function(t){return new(t||r)(p.bc(d.c))},r.\u0275prov=p.Nb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),g=o("zHaW"),h=o("PDjf"),v=o("VDRc"),y=o("jMqV"),E=o("Dxy4"),k=o("Tj54"),C=o("w9WL"),w=o("Q2Ze"),D=o("e6WT"),O=o("TN/R"),S=o("ZTz/"),A=o("UhP/"),V=o("TSSN");function W(t,e){if(1&t&&(p.Xb(0,"mat-option",31),p.Oc(1),p.Wb()),2&t){var a=e.$implicit;p.pc("value",a),p.Eb(1),p.Pc(null==a?null:a.toString())}}function T(t,e){if(1&t&&(p.Xb(0,"mat-option",31),p.Oc(1),p.Wb()),2&t){var a=e.$implicit;p.pc("value",a),p.Eb(1),p.Pc(null==a?null:a.toString())}}function X(t,e){if(1&t){var a=p.Yb();p.Xb(0,"div",24),p.Xb(1,"mat-form-field",25),p.Xb(2,"mat-label"),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Xb(5,"input",26),p.fc("dateChange",function(t){return p.Dc(a),p.jc().updateDate(t)}),p.Wb(),p.Sb(6,"mat-datepicker-toggle",27),p.Sb(7,"mat-datepicker",null,28),p.Wb(),p.Xb(9,"mat-form-field",25),p.Xb(10,"mat-label"),p.Oc(11),p.kc(12,"translate"),p.Wb(),p.Xb(13,"mat-select",29),p.fc("valueChange",function(t){return p.Dc(a),p.jc().hours=t}),p.Mc(14,W,2,2,"mat-option",30),p.Wb(),p.Wb(),p.Xb(15,"mat-form-field",25),p.Xb(16,"mat-label"),p.Oc(17),p.kc(18,"translate"),p.Wb(),p.Xb(19,"mat-select",29),p.fc("valueChange",function(t){return p.Dc(a),p.jc().minutes=t}),p.Mc(20,T,2,2,"mat-option",30),p.Wb(),p.Wb(),p.Wb()}if(2&t){var n=p.Ac(8),o=p.jc();p.Eb(3),p.Pc(p.lc(4,10,"VALUEDSTOCK.DATE")),p.Eb(2),p.pc("matDatepicker",n)("value",o.startDate),p.Eb(1),p.pc("for",n),p.Eb(5),p.Pc(p.lc(12,12,"VALUEDSTOCK.HOUR")),p.Eb(2),p.pc("value",o.hours),p.Eb(1),p.pc("ngForOf",o.hoursArr),p.Eb(3),p.Pc(p.lc(18,14,"VALUEDSTOCK.MINUTES")),p.Eb(2),p.pc("value",o.minutes),p.Eb(1),p.pc("ngForOf",o.minutesArr)}}function L(t,e){if(1&t&&p.Oc(0),2&t){var a=e.row;p.Qc(" ",null==a?null:a.sDeposito," ")}}function x(t,e){if(1&t&&p.Oc(0),2&t){var a=e.row;p.Qc(" ",null==a?null:a.sProducto," ")}}function F(t,e){if(1&t&&p.Oc(0),2&t){var a=e.row;p.Qc(" ",null==a?null:a.sCodProducto," ")}}function M(t,e){if(1&t&&p.Oc(0),2&t){var a=e.row;p.Qc(" ",null==a?null:a.sFamilia," ")}}function U(t,e){if(1&t&&(p.Oc(0),p.kc(1,"number")),2&t){var a=e.row;p.Qc(" ",p.lc(1,1,null==a?null:a.rStock)," ")}}function R(t,e){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){var a=e.row;p.Qc(" ",p.lc(1,1,null==a?null:a.rCostoValorizado)," ")}}function j(t,e){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){var a=e.row;p.Qc(" ",p.lc(1,1,null==a?null:a.rVentaValorizada)," ")}}function P(t,e){if(1&t){var a=p.Yb();p.Xb(0,"button",4),p.fc("click",function(){return p.Dc(a),p.jc(3).export()}),p.Xb(1,"mat-icon"),p.Oc(2,"save_alt"),p.Wb(),p.Oc(3),p.kc(4,"translate"),p.Wb()}2&t&&(p.Eb(3),p.Pc(p.lc(4,1,"VALUEDSTOCK.EXCEL")))}function K(t,e){if(1&t&&(p.Xb(0,"div",33),p.Xb(1,"div"),p.Xb(2,"strong"),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Wb(),p.Sb(5,"hr",34),p.Xb(6,"div"),p.Oc(7),p.kc(8,"translate"),p.kc(9,"number"),p.kc(10,"translate"),p.kc(11,"currency"),p.kc(12,"translate"),p.kc(13,"currency"),p.Wb(),p.Wb(),p.Xb(14,"div",35),p.Mc(15,P,5,3,"button",36),p.Wb()),2&t){var a=p.jc(2);p.Eb(3),p.Pc(p.lc(4,9,"VALUEDSTOCK.TOTALS")),p.Eb(4),p.Wc("",a.tabla1.footer.sDeposito," | ",p.lc(8,11,"VALUEDSTOCK.STOCK"),": ",p.lc(9,13,a.tabla1.footer.rStock)," | ",p.lc(10,15,"VALUEDSTOCK.VALUEDCOST"),": ",p.lc(11,17,a.tabla1.footer.rCostoValorizado)," | ",p.lc(12,19,"VALUEDSTOCK.VALUEDSALE"),": ",p.lc(13,21,a.tabla1.footer.rVentaValorizada),""),p.Eb(8),p.pc("ngIf",a.tabla1.data.length>0)}}function z(t,e){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,K,16,23,"ng-template",32),p.Wb())}function H(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",38),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla1.updateFilter(t,"sDeposito")}),p.Wb(),p.Wb()}}function I(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",38),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla1.updateFilter(t,"sProducto")}),p.Wb(),p.Wb()}}function N(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",38),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla1.updateFilter(t,"sCodProducto")}),p.Wb(),p.Wb()}}function Y(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",38),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla1.updateFilter(t,"sFamilia")}),p.Wb(),p.Wb()}}function q(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",39),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla1.updateFilter(t,"rStock")}),p.Wb(),p.Wb()}}function Q(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",39),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla1.updateFilter(t,"rCostoValorizado")}),p.Wb(),p.Wb()}}function G(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",39),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla1.updateFilter(t,"rVentaValorizada")}),p.Wb(),p.Wb()}}function B(t,e){if(1&t&&p.Oc(0),2&t){var a=e.row;p.Qc(" ",null==a?null:a.sProducto," ")}}function _(t,e){if(1&t&&p.Oc(0),2&t){var a=e.row;p.Qc(" ",null==a?null:a.sCodProducto," ")}}function J(t,e){if(1&t&&p.Oc(0),2&t){var a=e.row;p.Qc(" ",null==a?null:a.sDeposito," ")}}function Z(t,e){if(1&t&&p.Oc(0),2&t){var a=e.row;p.Qc(" ",null==a?null:a.sFamilia," ")}}function $(t,e){if(1&t&&(p.Oc(0),p.kc(1,"number")),2&t){var a=e.row;p.Qc(" ",p.lc(1,1,null==a?null:a.rStock)," ")}}function tt(t,e){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){var a=e.row;p.Qc(" ",p.lc(1,1,null==a?null:a.rCostoValorizado)," ")}}function et(t,e){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){var a=e.row;p.Qc(" ",p.lc(1,1,null==a?null:a.rVentaValorizada)," ")}}function at(t,e){if(1&t&&(p.Xb(0,"div",33),p.Xb(1,"div"),p.Xb(2,"strong"),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Wb(),p.Sb(5,"hr",34),p.Xb(6,"div"),p.Oc(7),p.kc(8,"translate"),p.kc(9,"number"),p.kc(10,"translate"),p.kc(11,"currency"),p.kc(12,"translate"),p.kc(13,"currency"),p.Wb(),p.Wb()),2&t){var a=p.jc(2);p.Eb(3),p.Pc(p.lc(4,8,"VALUEDSTOCK.TOTALS")),p.Eb(4),p.Wc("",a.tabla2.footer.sProducto," | ",p.lc(8,10,"VALUEDSTOCK.STOCK"),": ",p.lc(9,12,a.tabla2.footer.rStock)," | ",p.lc(10,14,"VALUEDSTOCK.VALUEDCOST"),": ",p.lc(11,16,a.tabla2.footer.rCostoValorizado)," | ",p.lc(12,18,"VALUEDSTOCK.VALUEDSALE"),": ",p.lc(13,20,a.tabla2.footer.rVentaValorizada),"")}}function nt(t,e){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,at,14,22,"ng-template",32),p.Wb())}function ot(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",38),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla2.updateFilter(t,"sDeposito")}),p.Wb(),p.Wb()}}function rt(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",38),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla2.updateFilter(t,"sProducto")}),p.Wb(),p.Wb()}}function lt(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",38),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla2.updateFilter(t,"sCodProducto")}),p.Wb(),p.Wb()}}function ct(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",38),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla2.updateFilter(t,"sFamilia")}),p.Wb(),p.Wb()}}function it(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",39),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla2.updateFilter(t,"rStock")}),p.Wb(),p.Wb()}}function ut(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",39),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla2.updateFilter(t,"rCostoValorizado")}),p.Wb(),p.Wb()}}function st(t,e){if(1&t){var a=p.Yb();p.Xb(0,"mat-form-field",37),p.Xb(1,"input",39),p.fc("keyup",function(t){return p.Dc(a),p.jc().tabla2.updateFilter(t,"rVentaValorizada")}),p.Wb(),p.Wb()}}var bt,ft,pt=function(){return{y:"50px",delay:"300ms"}},dt=function(t){return{value:"*",params:t}},mt=[{path:"",component:(bt=function(){function t(a,n,o,r){var l=this;e(this,t),this.servicioStockValorizado=a,this.servicioExportarExcel=n,this.loader=o,this.snack=r,this.hours=0,this.minutes=0,this.hoursArr=[],this.minutesArr=[],this.toggle=new c.e("",[]),this.toggleValue=!1,this.startDate=new Date,this.toggle.valueChanges.subscribe(function(t){l.toggleValue=t});for(var i=0;i<=23;i++)this.hoursArr.push(i);for(i=0;i<=59;i++)this.minutesArr.push(i)}return n(t,[{key:"ngOnInit",value:function(){this.tabla1=new b.a,this.tabla1.groupField="sDeposito",this.tabla1.secondarySort="sProducto",this.tabla1.sum=["rStock","rCostoValorizado","rVentaValorizada"],this.tabla2=new b.a,this.tabla2.groupField="sProducto",this.tabla2.secondarySort="sDeposito",this.tabla2.sum=["rStock","rCostoValorizado","rVentaValorizada"]}},{key:"export",value:function(){var t=this.tabla1.data.map(function(t){return{"Dep\xf3sito":t.sDeposito,Nombre:t.sProducto,"C\xf3digo":t.sCodProducto,Familia:t.sFamilia,Stock:t.rStock,"Costo Valorizado":t.rCostoValorizado,"Venta Valorizada":t.rVentaValorizada}});this.servicioExportarExcel.exportExcel(t,"stock_valorizado","stock")}},{key:"refresh",value:function(){var t=this,e=null;this.toggleValue&&(this.startDate.setHours(this.hours,this.minutes,59,999),e=this.startDate.toISOString()),this.loader.open(),this.servicioStockValorizado.obtenerDatos(e).subscribe(function(e){t.tabla1.setData(e.filter(function(){return!0})),t.tabla2.setData(e.filter(function(){return!0})),t.loader.close()},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"getRowHeight",value:function(t){return 50}},{key:"getCellClass",value:function(t){return{ngxgroup:t.row.isGroup}}},{key:"tabla1OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}},{key:"tabla2OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}},{key:"updateDate",value:function(t){this.startDate=t.value.toDate()}},{key:"onChangeToggle",value:function(t){this.toggle=t.value}}]),t}(),bt.\u0275fac=function(t){return new(t||bt)(p.Rb(m),p.Rb(s.a),p.Rb(u.a),p.Rb(g.a))},bt.\u0275cmp=p.Lb({type:bt,selectors:[["app-valued-stock"]],decls:92,vars:118,consts:[[1,"p-0"],["fxLayout","row","fxLayoutAlign","end center",1,"p-8"],[1,"m-8",3,"formControl"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","summaryTemplate","name","width"],["ngx-datatable-cell-template",""],[4,"ngIf"],["tabla1sDeposito",""],["tabla1sProducto",""],["tabla1sCodProducto",""],["tabla1sFamilia",""],["tabla1rStock",""],["tabla1rCostoValorizado",""],["tabla1rVentaValorizada",""],["tabla2sDeposito",""],["tabla2sProducto",""],["tabla2sCodProducto",""],["tabla2sFamilia",""],["tabla2rStock",""],["tabla2rCostoValorizado",""],["tabla2rVentaValorizada",""],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker",""],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(p.Xb(0,"mat-card",0),p.Xb(1,"div",1),p.Xb(2,"mat-slide-toggle",2),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Wb(),p.Mc(5,X,21,16,"div",3),p.Xb(6,"div",1),p.Xb(7,"button",4),p.fc("click",function(){return e.refresh()}),p.Xb(8,"mat-icon"),p.Oc(9,"search"),p.Wb(),p.Oc(10),p.kc(11,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Xb(12,"mat-card",0),p.Xb(13,"mat-card-content",0),p.Xb(14,"ngx-datatable",5,6),p.fc("activate",function(t){return e.tabla1OnActivate(t)}),p.Xb(16,"ngx-datatable-column",7),p.kc(17,"translate"),p.Mc(18,L,1,1,"ng-template",8),p.Wb(),p.Xb(19,"ngx-datatable-column",7),p.kc(20,"translate"),p.Mc(21,x,1,1,"ng-template",8),p.Wb(),p.Xb(22,"ngx-datatable-column",7),p.kc(23,"translate"),p.Mc(24,F,1,1,"ng-template",8),p.Wb(),p.Xb(25,"ngx-datatable-column",7),p.kc(26,"translate"),p.Mc(27,M,1,1,"ng-template",8),p.Wb(),p.Xb(28,"ngx-datatable-column",7),p.kc(29,"translate"),p.Mc(30,U,2,3,"ng-template",8),p.Wb(),p.Xb(31,"ngx-datatable-column",7),p.kc(32,"translate"),p.Mc(33,R,2,3,"ng-template",8),p.Wb(),p.Xb(34,"ngx-datatable-column",7),p.kc(35,"translate"),p.Mc(36,j,2,3,"ng-template",8),p.Wb(),p.Mc(37,z,2,0,"ngx-datatable-footer",9),p.Wb(),p.Wb(),p.Wb(),p.Mc(38,H,2,0,"ng-template",null,10,p.Nc),p.Mc(40,I,2,0,"ng-template",null,11,p.Nc),p.Mc(42,N,2,0,"ng-template",null,12,p.Nc),p.Mc(44,Y,2,0,"ng-template",null,13,p.Nc),p.Mc(46,q,2,0,"ng-template",null,14,p.Nc),p.Mc(48,Q,2,0,"ng-template",null,15,p.Nc),p.Mc(50,G,2,0,"ng-template",null,16,p.Nc),p.Xb(52,"mat-card",0),p.Xb(53,"mat-card-content",0),p.Xb(54,"ngx-datatable",5,6),p.fc("activate",function(t){return e.tabla2OnActivate(t)}),p.Xb(56,"ngx-datatable-column",7),p.kc(57,"translate"),p.Mc(58,B,1,1,"ng-template",8),p.Wb(),p.Xb(59,"ngx-datatable-column",7),p.kc(60,"translate"),p.Mc(61,_,1,1,"ng-template",8),p.Wb(),p.Xb(62,"ngx-datatable-column",7),p.kc(63,"translate"),p.Mc(64,J,1,1,"ng-template",8),p.Wb(),p.Xb(65,"ngx-datatable-column",7),p.kc(66,"translate"),p.Mc(67,Z,1,1,"ng-template",8),p.Wb(),p.Xb(68,"ngx-datatable-column",7),p.kc(69,"translate"),p.Mc(70,$,2,3,"ng-template",8),p.Wb(),p.Xb(71,"ngx-datatable-column",7),p.kc(72,"translate"),p.Mc(73,tt,2,3,"ng-template",8),p.Wb(),p.Xb(74,"ngx-datatable-column",7),p.kc(75,"translate"),p.Mc(76,et,2,3,"ng-template",8),p.Wb(),p.Mc(77,nt,2,0,"ngx-datatable-footer",9),p.Wb(),p.Wb(),p.Wb(),p.Mc(78,ot,2,0,"ng-template",null,17,p.Nc),p.Mc(80,rt,2,0,"ng-template",null,18,p.Nc),p.Mc(82,lt,2,0,"ng-template",null,19,p.Nc),p.Mc(84,ct,2,0,"ng-template",null,20,p.Nc),p.Mc(86,it,2,0,"ng-template",null,21,p.Nc),p.Mc(88,ut,2,0,"ng-template",null,22,p.Nc),p.Mc(90,st,2,0,"ng-template",null,23,p.Nc)),2&t){var a=p.Ac(39),n=p.Ac(41),o=p.Ac(43),r=p.Ac(45),l=p.Ac(47),c=p.Ac(49),i=p.Ac(51),u=p.Ac(79),s=p.Ac(81),b=p.Ac(83),f=p.Ac(85),d=p.Ac(87),m=p.Ac(89),g=p.Ac(91);p.Eb(2),p.pc("formControl",e.toggle),p.Eb(1),p.Pc(p.lc(4,80,"VALUEDSTOCK.DATE")),p.Eb(2),p.pc("ngIf",e.toggleValue),p.Eb(5),p.Pc(p.lc(11,82,"VALUEDSTOCK.SHOW")),p.Eb(2),p.pc("@animate",p.vc(113,dt,p.uc(112,pt))),p.Eb(2),p.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("selectionType","single"),p.Eb(2),p.qc("name",p.lc(17,84,"VALUEDSTOCK.DEPOSIT")),p.pc("cellClass",e.getCellClass)("summaryTemplate",a)("width",225),p.Eb(3),p.qc("name",p.lc(20,86,"VALUEDSTOCK.NAME")),p.pc("cellClass",e.getCellClass)("summaryTemplate",n)("width",500),p.Eb(3),p.qc("name",p.lc(23,88,"VALUEDSTOCK.CODE")),p.pc("cellClass",e.getCellClass)("summaryTemplate",o)("width",200),p.Eb(3),p.qc("name",p.lc(26,90,"VALUEDSTOCK.FAMILY")),p.pc("cellClass",e.getCellClass)("summaryTemplate",r)("width",225),p.Eb(3),p.qc("name",p.lc(29,92,"VALUEDSTOCK.STOCK")),p.pc("cellClass",e.getCellClass)("summaryTemplate",l)("width",150),p.Eb(3),p.qc("name",p.lc(32,94,"VALUEDSTOCK.VALUEDCOST")),p.pc("cellClass",e.getCellClass)("summaryTemplate",c)("width",150),p.Eb(3),p.qc("name",p.lc(35,96,"VALUEDSTOCK.VALUEDSALE")),p.pc("cellClass",e.getCellClass)("summaryTemplate",i)("width",150),p.Eb(3),p.pc("ngIf",e.tabla1.data.length>0),p.Eb(15),p.pc("@animate",p.vc(116,dt,p.uc(115,pt))),p.Eb(2),p.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla2.rows)("selectionType","single"),p.Eb(2),p.qc("name",p.lc(57,98,"VALUEDSTOCK.NAME")),p.pc("cellClass",e.getCellClass)("summaryTemplate",s)("width",500),p.Eb(3),p.qc("name",p.lc(60,100,"VALUEDSTOCK.CODE")),p.pc("cellClass",e.getCellClass)("summaryTemplate",b)("width",200),p.Eb(3),p.qc("name",p.lc(63,102,"VALUEDSTOCK.DEPOSIT")),p.pc("cellClass",e.getCellClass)("summaryTemplate",u)("width",225),p.Eb(3),p.qc("name",p.lc(66,104,"VALUEDSTOCK.FAMILY")),p.pc("cellClass",e.getCellClass)("summaryTemplate",f)("width",225),p.Eb(3),p.qc("name",p.lc(69,106,"VALUEDSTOCK.STOCK")),p.pc("cellClass",e.getCellClass)("summaryTemplate",d)("width",150),p.Eb(3),p.qc("name",p.lc(72,108,"VALUEDSTOCK.VALUEDCOST")),p.pc("cellClass",e.getCellClass)("summaryTemplate",m)("width",150),p.Eb(3),p.qc("name",p.lc(75,110,"VALUEDSTOCK.VALUEDSALE")),p.pc("cellClass",e.getCellClass)("summaryTemplate",g)("width",150),p.Eb(3),p.pc("ngIf",e.tabla2.data.length>0)}},directives:[h.a,v.c,v.b,y.a,c.n,c.f,l.o,E.b,k.a,h.b,C.d,C.b,C.a,w.c,v.a,w.f,D.b,O.b,O.d,w.h,O.a,S.a,l.n,A.n,C.e,C.c],pipes:[V.c,l.g,l.d],styles:[""],data:{animation:[i.a]}}),bt),data:{title:"STOCK VALORIZADO"}}],gt=o("iInd"),ht=o("u9T3"),vt=o("f44v"),yt=o("iELJ"),Et=o("M9ds"),kt=o("ZFy/"),Ct=o("PCNd"),wt=((ft=function t(){e(this,t)}).\u0275mod=p.Pb({type:ft}),ft.\u0275inj=p.Ob({factory:function(t){return new(t||ft)},imports:[[l.c,c.s,ht.a,C.f,D.c,D.c,h.c,D.c,E.c,vt.a,D.c,kt.b,yt.f,g.b,y.b,Et.c,S.b,k.b,V.b,Ct.a,O.c,gt.k.forChild(mt)]]}),ft)},CHRX:function(a,o,r){"use strict";r.d(o,"a",function(){return c});var l=r("wd/R"),c=function(){function a(){e(this,a),this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}return n(a,[{key:"setGroup",value:function(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}},{key:"setData",value:function(t){this.data=t,this.sortData()}},{key:"sortData",value:function(){var t=this;this.data.sort(function(e,a){if(e[t.groupField]==a[t.groupField]){if(t.secondarySort){if(null==e[t.secondarySort])return 1;if(null==a[t.secondarySort])return-1;if(e[t.secondarySort]>a[t.secondarySort])return 1*("desc"===t.sortDir?-1:1);if(e[t.secondarySort]<a[t.secondarySort])return-1*("desc"===t.sortDir?-1:1)}}else{if(null==e[t.groupField])return 1;if(null==a[t.groupField])return-1;if(e[t.groupField]>a[t.groupField])return 1;if(e[t.groupField]<a[t.groupField])return-1}return 0}),this.filterRows()}},{key:"filterRows",value:function(){var e=this,a=[];a=this.data.filter(function(t){for(var a in e.filter){if(e.filter[a]&&null==t[a])return!1;switch(typeof t[a]){case"number":if(e.filter[a]&&t[a].toString()!==e.filter[a].toString())return!1;break;case"string":if("f"==a.charAt(0).toLowerCase()&&l(t[a]).isValid){if(-1==l(t[a]).format("DD/MM/YYYY HH:mm:ss").indexOf(e.filter[a]))return!1;break}if(-1==t[a].toLowerCase().indexOf(e.filter[a].toLowerCase()))return!1}}return!0}),a=this.customFilter(a);var n={};this.groupField?n[this.groupField]=a.length.toString():n.count=a.length.toString(),this.sum.forEach(function(t){return n[t]=0});for(var o=0;o<a.length;o++)this.sum.forEach(function(t){return n[t]+=a[o][t]});if(n.isGroup=!0,this.footer=n,this.groupField){var r=[];a.forEach(function(t){-1==r.indexOf(t[e.groupField])&&r.push(t[e.groupField])}),r=r.map(function(t){return{name:t,count:1}});var c=[],i=!0,u=0,s=null,b=function(){s&&(s[e.groupField]+=" ("+r[u-1].count.toString()+")")};for(o=0;o<a.length;o++){if(i&&a[o][this.groupField]==r[u].name){var f;b();var p="+";this.groups[r[u].name]&&(p="-"),t(f={},this.groupField,p+" "+r[u].name),t(f,"isGroup",!0),t(f,"name",r[u].name),s=f,this.sum.forEach(function(t){return s[t]=0}),c.push(s),i=++u<r.length}else r[u-1].count++;this.sum.forEach(function(t){return s[t]+=a[o][t]}),c.push(a[o])}b(),a=null,c=c.filter(function(t){return!!t.isGroup||!!e.groups[t[e.groupField]]||void 0}),this.rows=c}else this.rows=a;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}},{key:"updateFilter",value:function(t,e){t&&e&&(this.filter[e]=t.target.value,this.filterRows())}},{key:"updateFilterBoolean",value:function(t,e){this.filter[e]=t,this.filterRows()}}]),a}()},Iab2:function(t,e,a){var n,o;void 0===(o="function"==typeof(n=function(){"use strict";function e(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,r=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,r,l){var c=o.URL||o.webkitURL,i=document.createElement("a");i.download=r=r||t.name||"download",i.rel="noopener","string"==typeof t?(i.href=t,i.origin===location.origin?n(i):a(i.href)?e(t,r,l):n(i,i.target="_blank")):(i.href=c.createObjectURL(t),setTimeout(function(){c.revokeObjectURL(i.href)},4e4),setTimeout(function(){n(i)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,r){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,r),o);else if(a(t))e(t,o,r);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){n(l)})}}:function(t,a,n,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,n);var c="application/octet-stream"===t.type,i=/constructor/i.test(o.HTMLElement)||o.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||c&&i||r)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=t:location=t,l=null},s.readAsDataURL(t)}else{var b=o.URL||o.webkitURL,f=b.createObjectURL(t);l?l.location=f:location.href=f,l=null,setTimeout(function(){b.revokeObjectURL(f)},4e4)}});o.saveAs=l.saveAs=l,t.exports=l})?n.apply(e,[]):n)||(t.exports=o)},bPAe:function(a,o,r){"use strict";r.d(o,"a",function(){return u});var l=r("Iab2"),c=r("EUZL"),i=r("8Y7J"),u=function(){var a=function(){function a(){e(this,a),this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}return n(a,[{key:"exportExcel",value:function(e,a,n){var o=c.utils.json_to_sheet(e),r=c.write({Sheets:t({},n,o),SheetNames:[n]},{bookType:"xlsx",type:"array"});this.saveExcelFile(r,a)}},{key:"saveExcelFile",value:function(t,e){var a=new Blob([t],{type:this.fileType});l.saveAs(a,e+this.fileExtension)}}]),a}();return a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=i.Nb({token:a,factory:a.\u0275fac,providedIn:"root"}),a}()}}])}();