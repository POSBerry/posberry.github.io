(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/m8Z":function(t,e,a){"use strict";a.r(e),a.d(e,"ValuedStockModule",function(){return Et});var o=a("SVse"),n=a("s7LF"),c=a("GmJt"),l=a("3sEA"),r=a("bPAe"),i=a("CHRX"),s=a("AytR"),u=a("8Y7J"),b=a("IheW");let f=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t){let e=s.a.apiURL+"Productos/GetStock";return t&&(e+="?fhasta="+t),this.http.get(encodeURI(e))}}return t.\u0275fac=function(e){return new(e||t)(u.bc(b.c))},t.\u0275prov=u.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=a("zHaW"),d=a("PDjf"),m=a("VDRc"),h=a("jMqV"),g=a("Dxy4"),E=a("Tj54"),C=a("w9WL"),w=a("Q2Ze"),v=a("e6WT"),k=a("TN/R"),y=a("ZTz/"),D=a("UhP/"),O=a("TSSN");function S(t,e){if(1&t&&(u.Xb(0,"mat-option",31),u.Oc(1),u.Wb()),2&t){const t=e.$implicit;u.pc("value",t),u.Eb(1),u.Pc(t.toString())}}function A(t,e){if(1&t&&(u.Xb(0,"mat-option",31),u.Oc(1),u.Wb()),2&t){const t=e.$implicit;u.pc("value",t),u.Eb(1),u.Pc(t.toString())}}function V(t,e){if(1&t){const t=u.Yb();u.Xb(0,"div",24),u.Xb(1,"mat-form-field",25),u.Xb(2,"mat-label"),u.Oc(3),u.kc(4,"translate"),u.Wb(),u.Xb(5,"input",26),u.fc("dateChange",function(e){return u.Dc(t),u.jc().updateDate(e)}),u.Wb(),u.Sb(6,"mat-datepicker-toggle",27),u.Sb(7,"mat-datepicker",null,28),u.Wb(),u.Xb(9,"mat-form-field",25),u.Xb(10,"mat-label"),u.Oc(11),u.kc(12,"translate"),u.Wb(),u.Xb(13,"mat-select",29),u.fc("valueChange",function(e){return u.Dc(t),u.jc().hours=e}),u.Mc(14,S,2,2,"mat-option",30),u.Wb(),u.Wb(),u.Xb(15,"mat-form-field",25),u.Xb(16,"mat-label"),u.Oc(17),u.kc(18,"translate"),u.Wb(),u.Xb(19,"mat-select",29),u.fc("valueChange",function(e){return u.Dc(t),u.jc().minutes=e}),u.Mc(20,A,2,2,"mat-option",30),u.Wb(),u.Wb(),u.Wb()}if(2&t){const t=u.Ac(8),e=u.jc();u.Eb(3),u.Pc(u.lc(4,10,"VALUEDSTOCK.DATE")),u.Eb(2),u.pc("matDatepicker",t)("value",e.startDate),u.Eb(1),u.pc("for",t),u.Eb(5),u.Pc(u.lc(12,12,"VALUEDSTOCK.HOUR")),u.Eb(2),u.pc("value",e.hours),u.Eb(1),u.pc("ngForOf",e.hoursArr),u.Eb(3),u.Pc(u.lc(18,14,"VALUEDSTOCK.MINUTES")),u.Eb(2),u.pc("value",e.minutes),u.Eb(1),u.pc("ngForOf",e.minutesArr)}}function T(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sDeposito," ")}}function W(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sProducto," ")}}function X(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sCodProducto," ")}}function L(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sFamilia," ")}}function x(t,e){if(1&t&&(u.Oc(0),u.kc(1,"number")),2&t){const t=e.row;u.Qc(" ",u.lc(1,1,null==t?null:t.rStock)," ")}}function F(t,e){if(1&t&&(u.Oc(0),u.kc(1,"currency")),2&t){const t=e.row;u.Qc(" ",u.lc(1,1,null==t?null:t.rCostoValorizado)," ")}}function M(t,e){if(1&t&&(u.Oc(0),u.kc(1,"currency")),2&t){const t=e.row;u.Qc(" ",u.lc(1,1,null==t?null:t.rVentaValorizada)," ")}}function U(t,e){if(1&t){const t=u.Yb();u.Xb(0,"button",4),u.fc("click",function(){return u.Dc(t),u.jc(3).export()}),u.Xb(1,"mat-icon"),u.Oc(2,"save_alt"),u.Wb(),u.Oc(3),u.kc(4,"translate"),u.Wb()}2&t&&(u.Eb(3),u.Pc(u.lc(4,1,"VALUEDSTOCK.EXCEL")))}function R(t,e){if(1&t&&(u.Xb(0,"div",33),u.Xb(1,"div"),u.Xb(2,"strong"),u.Oc(3),u.kc(4,"translate"),u.Wb(),u.Wb(),u.Sb(5,"hr",34),u.Xb(6,"div"),u.Oc(7),u.kc(8,"translate"),u.kc(9,"number"),u.kc(10,"translate"),u.kc(11,"currency"),u.kc(12,"translate"),u.kc(13,"currency"),u.Wb(),u.Wb(),u.Xb(14,"div",35),u.Mc(15,U,5,3,"button",36),u.Wb()),2&t){const t=u.jc(2);u.Eb(3),u.Pc(u.lc(4,9,"VALUEDSTOCK.TOTALS")),u.Eb(4),u.Vc("",t.tabla1.footer.sDeposito," | ",u.lc(8,11,"VALUEDSTOCK.STOCK"),": ",u.lc(9,13,t.tabla1.footer.rStock)," | ",u.lc(10,15,"VALUEDSTOCK.VALUEDCOST"),": ",u.lc(11,17,t.tabla1.footer.rCostoValorizado)," | ",u.lc(12,19,"VALUEDSTOCK.VALUEDSALE"),": ",u.lc(13,21,t.tabla1.footer.rVentaValorizada),""),u.Eb(8),u.pc("ngIf",t.tabla1.data.length>0)}}function j(t,e){1&t&&(u.Xb(0,"ngx-datatable-footer"),u.Mc(1,R,16,23,"ng-template",32),u.Wb())}function P(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",38),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla1.updateFilter(e,"sDeposito")}),u.Wb(),u.Wb()}}function K(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",38),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla1.updateFilter(e,"sProducto")}),u.Wb(),u.Wb()}}function z(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",38),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla1.updateFilter(e,"sCodProducto")}),u.Wb(),u.Wb()}}function H(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",38),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla1.updateFilter(e,"sFamilia")}),u.Wb(),u.Wb()}}function I(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",39),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla1.updateFilter(e,"rStock")}),u.Wb(),u.Wb()}}function N(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",39),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla1.updateFilter(e,"rCostoValorizado")}),u.Wb(),u.Wb()}}function Y(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",39),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla1.updateFilter(e,"rVentaValorizada")}),u.Wb(),u.Wb()}}function q(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sProducto," ")}}function Q(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sCodProducto," ")}}function G(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sDeposito," ")}}function B(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sFamilia," ")}}function _(t,e){if(1&t&&(u.Oc(0),u.kc(1,"number")),2&t){const t=e.row;u.Qc(" ",u.lc(1,1,null==t?null:t.rStock)," ")}}function J(t,e){if(1&t&&(u.Oc(0),u.kc(1,"currency")),2&t){const t=e.row;u.Qc(" ",u.lc(1,1,null==t?null:t.rCostoValorizado)," ")}}function Z(t,e){if(1&t&&(u.Oc(0),u.kc(1,"currency")),2&t){const t=e.row;u.Qc(" ",u.lc(1,1,null==t?null:t.rVentaValorizada)," ")}}function $(t,e){if(1&t&&(u.Xb(0,"div",33),u.Xb(1,"div"),u.Xb(2,"strong"),u.Oc(3),u.kc(4,"translate"),u.Wb(),u.Wb(),u.Sb(5,"hr",34),u.Xb(6,"div"),u.Oc(7),u.kc(8,"translate"),u.kc(9,"number"),u.kc(10,"translate"),u.kc(11,"currency"),u.kc(12,"translate"),u.kc(13,"currency"),u.Wb(),u.Wb()),2&t){const t=u.jc(2);u.Eb(3),u.Pc(u.lc(4,8,"VALUEDSTOCK.TOTALS")),u.Eb(4),u.Vc("",t.tabla2.footer.sProducto," | ",u.lc(8,10,"VALUEDSTOCK.STOCK"),": ",u.lc(9,12,t.tabla2.footer.rStock)," | ",u.lc(10,14,"VALUEDSTOCK.VALUEDCOST"),": ",u.lc(11,16,t.tabla2.footer.rCostoValorizado)," | ",u.lc(12,18,"VALUEDSTOCK.VALUEDSALE"),": ",u.lc(13,20,t.tabla2.footer.rVentaValorizada),"")}}function tt(t,e){1&t&&(u.Xb(0,"ngx-datatable-footer"),u.Mc(1,$,14,22,"ng-template",32),u.Wb())}function et(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",38),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"sDeposito")}),u.Wb(),u.Wb()}}function at(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",38),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"sProducto")}),u.Wb(),u.Wb()}}function ot(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",38),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"sCodProducto")}),u.Wb(),u.Wb()}}function nt(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",38),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"sFamilia")}),u.Wb(),u.Wb()}}function ct(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",39),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"rStock")}),u.Wb(),u.Wb()}}function lt(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",39),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"rCostoValorizado")}),u.Wb(),u.Wb()}}function rt(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",37),u.Xb(1,"input",39),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"rVentaValorizada")}),u.Wb(),u.Wb()}}const it=function(){return{y:"50px",delay:"300ms"}},st=function(t){return{value:"*",params:t}},ut=[{path:"",component:(()=>{class t{constructor(t,e,a,o){this.servicioStockValorizado=t,this.servicioExportarExcel=e,this.loader=a,this.snack=o,this.hours=0,this.minutes=0,this.hoursArr=[],this.minutesArr=[],this.toggle=new n.e("",[]),this.toggleValue=!1,this.startDate=new Date,this.toggle.valueChanges.subscribe(t=>{this.toggleValue=t});for(var c=0;c<=23;c++)this.hoursArr.push(c);for(c=0;c<=59;c++)this.minutesArr.push(c)}ngOnInit(){this.tabla1=new i.a,this.tabla1.groupField="sDeposito",this.tabla1.secondarySort="sProducto",this.tabla1.sum=["rStock","rCostoValorizado","rVentaValorizada"],this.tabla2=new i.a,this.tabla2.groupField="sProducto",this.tabla2.secondarySort="sDeposito",this.tabla2.sum=["rStock","rCostoValorizado","rVentaValorizada"]}export(){var t=this.tabla1.data.map(t=>({Dep\u00f3sito:t.sDeposito,Nombre:t.sProducto,C\u00f3digo:t.sCodProducto,Familia:t.sFamilia,Stock:t.rStock,"Costo Valorizado":t.rCostoValorizado,"Venta Valorizada":t.rVentaValorizada}));this.servicioExportarExcel.exportExcel(t,"stock_valorizado","stock")}refresh(){var t=null;this.toggleValue&&(this.startDate.setHours(this.hours,this.minutes,59,999),t=this.startDate.toISOString()),this.loader.open(),this.servicioStockValorizado.obtenerDatos(t).subscribe(t=>{this.tabla1.setData(t.filter(()=>!0)),this.tabla2.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla1OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate(t){this.startDate=t.value.toDate()}onChangeToggle(t){this.toggle=t.value}}return t.\u0275fac=function(e){return new(e||t)(u.Rb(f),u.Rb(r.a),u.Rb(l.a),u.Rb(p.a))},t.\u0275cmp=u.Lb({type:t,selectors:[["app-valued-stock"]],decls:92,vars:118,consts:[[1,"p-0"],["fxLayout","row","fxLayoutAlign","end center",1,"p-8"],[1,"m-8",3,"formControl"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","summaryTemplate","name","width"],["ngx-datatable-cell-template",""],[4,"ngIf"],["tabla1sDeposito",""],["tabla1sProducto",""],["tabla1sCodProducto",""],["tabla1sFamilia",""],["tabla1rStock",""],["tabla1rCostoValorizado",""],["tabla1rVentaValorizada",""],["tabla2sDeposito",""],["tabla2sProducto",""],["tabla2sCodProducto",""],["tabla2sFamilia",""],["tabla2rStock",""],["tabla2rCostoValorizado",""],["tabla2rVentaValorizada",""],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker",""],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(u.Xb(0,"mat-card",0),u.Xb(1,"div",1),u.Xb(2,"mat-slide-toggle",2),u.Oc(3),u.kc(4,"translate"),u.Wb(),u.Wb(),u.Mc(5,V,21,16,"div",3),u.Xb(6,"div",1),u.Xb(7,"button",4),u.fc("click",function(){return e.refresh()}),u.Xb(8,"mat-icon"),u.Oc(9,"search"),u.Wb(),u.Oc(10),u.kc(11,"translate"),u.Wb(),u.Wb(),u.Wb(),u.Xb(12,"mat-card",0),u.Xb(13,"mat-card-content",0),u.Xb(14,"ngx-datatable",5,6),u.fc("activate",function(t){return e.tabla1OnActivate(t)}),u.Xb(16,"ngx-datatable-column",7),u.kc(17,"translate"),u.Mc(18,T,1,1,"ng-template",8),u.Wb(),u.Xb(19,"ngx-datatable-column",7),u.kc(20,"translate"),u.Mc(21,W,1,1,"ng-template",8),u.Wb(),u.Xb(22,"ngx-datatable-column",7),u.kc(23,"translate"),u.Mc(24,X,1,1,"ng-template",8),u.Wb(),u.Xb(25,"ngx-datatable-column",7),u.kc(26,"translate"),u.Mc(27,L,1,1,"ng-template",8),u.Wb(),u.Xb(28,"ngx-datatable-column",7),u.kc(29,"translate"),u.Mc(30,x,2,3,"ng-template",8),u.Wb(),u.Xb(31,"ngx-datatable-column",7),u.kc(32,"translate"),u.Mc(33,F,2,3,"ng-template",8),u.Wb(),u.Xb(34,"ngx-datatable-column",7),u.kc(35,"translate"),u.Mc(36,M,2,3,"ng-template",8),u.Wb(),u.Mc(37,j,2,0,"ngx-datatable-footer",9),u.Wb(),u.Wb(),u.Wb(),u.Mc(38,P,2,0,"ng-template",null,10,u.Nc),u.Mc(40,K,2,0,"ng-template",null,11,u.Nc),u.Mc(42,z,2,0,"ng-template",null,12,u.Nc),u.Mc(44,H,2,0,"ng-template",null,13,u.Nc),u.Mc(46,I,2,0,"ng-template",null,14,u.Nc),u.Mc(48,N,2,0,"ng-template",null,15,u.Nc),u.Mc(50,Y,2,0,"ng-template",null,16,u.Nc),u.Xb(52,"mat-card",0),u.Xb(53,"mat-card-content",0),u.Xb(54,"ngx-datatable",5,6),u.fc("activate",function(t){return e.tabla2OnActivate(t)}),u.Xb(56,"ngx-datatable-column",7),u.kc(57,"translate"),u.Mc(58,q,1,1,"ng-template",8),u.Wb(),u.Xb(59,"ngx-datatable-column",7),u.kc(60,"translate"),u.Mc(61,Q,1,1,"ng-template",8),u.Wb(),u.Xb(62,"ngx-datatable-column",7),u.kc(63,"translate"),u.Mc(64,G,1,1,"ng-template",8),u.Wb(),u.Xb(65,"ngx-datatable-column",7),u.kc(66,"translate"),u.Mc(67,B,1,1,"ng-template",8),u.Wb(),u.Xb(68,"ngx-datatable-column",7),u.kc(69,"translate"),u.Mc(70,_,2,3,"ng-template",8),u.Wb(),u.Xb(71,"ngx-datatable-column",7),u.kc(72,"translate"),u.Mc(73,J,2,3,"ng-template",8),u.Wb(),u.Xb(74,"ngx-datatable-column",7),u.kc(75,"translate"),u.Mc(76,Z,2,3,"ng-template",8),u.Wb(),u.Mc(77,tt,2,0,"ngx-datatable-footer",9),u.Wb(),u.Wb(),u.Wb(),u.Mc(78,et,2,0,"ng-template",null,17,u.Nc),u.Mc(80,at,2,0,"ng-template",null,18,u.Nc),u.Mc(82,ot,2,0,"ng-template",null,19,u.Nc),u.Mc(84,nt,2,0,"ng-template",null,20,u.Nc),u.Mc(86,ct,2,0,"ng-template",null,21,u.Nc),u.Mc(88,lt,2,0,"ng-template",null,22,u.Nc),u.Mc(90,rt,2,0,"ng-template",null,23,u.Nc)),2&t){const t=u.Ac(39),a=u.Ac(41),o=u.Ac(43),n=u.Ac(45),c=u.Ac(47),l=u.Ac(49),r=u.Ac(51),i=u.Ac(79),s=u.Ac(81),b=u.Ac(83),f=u.Ac(85),p=u.Ac(87),d=u.Ac(89),m=u.Ac(91);u.Eb(2),u.pc("formControl",e.toggle),u.Eb(1),u.Pc(u.lc(4,80,"VALUEDSTOCK.DATE")),u.Eb(2),u.pc("ngIf",e.toggleValue),u.Eb(5),u.Pc(u.lc(11,82,"VALUEDSTOCK.SHOW")),u.Eb(2),u.pc("@animate",u.vc(113,st,u.uc(112,it))),u.Eb(2),u.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("selectionType","single"),u.Eb(2),u.qc("name",u.lc(17,84,"VALUEDSTOCK.DEPOSIT")),u.pc("cellClass",e.getCellClass)("summaryTemplate",t)("width",225),u.Eb(3),u.qc("name",u.lc(20,86,"VALUEDSTOCK.NAME")),u.pc("cellClass",e.getCellClass)("summaryTemplate",a)("width",500),u.Eb(3),u.qc("name",u.lc(23,88,"VALUEDSTOCK.CODE")),u.pc("cellClass",e.getCellClass)("summaryTemplate",o)("width",200),u.Eb(3),u.qc("name",u.lc(26,90,"VALUEDSTOCK.FAMILY")),u.pc("cellClass",e.getCellClass)("summaryTemplate",n)("width",225),u.Eb(3),u.qc("name",u.lc(29,92,"VALUEDSTOCK.STOCK")),u.pc("cellClass",e.getCellClass)("summaryTemplate",c)("width",150),u.Eb(3),u.qc("name",u.lc(32,94,"VALUEDSTOCK.VALUEDCOST")),u.pc("cellClass",e.getCellClass)("summaryTemplate",l)("width",150),u.Eb(3),u.qc("name",u.lc(35,96,"VALUEDSTOCK.VALUEDSALE")),u.pc("cellClass",e.getCellClass)("summaryTemplate",r)("width",150),u.Eb(3),u.pc("ngIf",e.tabla1.data.length>0),u.Eb(15),u.pc("@animate",u.vc(116,st,u.uc(115,it))),u.Eb(2),u.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla2.rows)("selectionType","single"),u.Eb(2),u.qc("name",u.lc(57,98,"VALUEDSTOCK.NAME")),u.pc("cellClass",e.getCellClass)("summaryTemplate",s)("width",500),u.Eb(3),u.qc("name",u.lc(60,100,"VALUEDSTOCK.CODE")),u.pc("cellClass",e.getCellClass)("summaryTemplate",b)("width",200),u.Eb(3),u.qc("name",u.lc(63,102,"VALUEDSTOCK.DEPOSIT")),u.pc("cellClass",e.getCellClass)("summaryTemplate",i)("width",225),u.Eb(3),u.qc("name",u.lc(66,104,"VALUEDSTOCK.FAMILY")),u.pc("cellClass",e.getCellClass)("summaryTemplate",f)("width",225),u.Eb(3),u.qc("name",u.lc(69,106,"VALUEDSTOCK.STOCK")),u.pc("cellClass",e.getCellClass)("summaryTemplate",p)("width",150),u.Eb(3),u.qc("name",u.lc(72,108,"VALUEDSTOCK.VALUEDCOST")),u.pc("cellClass",e.getCellClass)("summaryTemplate",d)("width",150),u.Eb(3),u.qc("name",u.lc(75,110,"VALUEDSTOCK.VALUEDSALE")),u.pc("cellClass",e.getCellClass)("summaryTemplate",m)("width",150),u.Eb(3),u.pc("ngIf",e.tabla2.data.length>0)}},directives:[d.a,m.c,m.b,h.a,n.n,n.f,o.o,g.b,E.a,d.b,C.d,C.b,C.a,w.c,m.a,w.f,v.b,k.b,k.d,w.h,k.a,y.a,o.n,D.n,C.e,C.c],pipes:[O.c,o.g,o.d],styles:[""],data:{animation:[c.a]}}),t})(),data:{title:"STOCK VALORIZADO"}}];var bt=a("iInd"),ft=a("u9T3"),pt=a("f44v"),dt=a("iELJ"),mt=a("M9ds"),ht=a("ZFy/"),gt=a("PCNd");let Et=(()=>{class t{}return t.\u0275mod=u.Pb({type:t}),t.\u0275inj=u.Ob({factory:function(e){return new(e||t)},imports:[[o.c,n.s,ft.a,C.f,v.c,v.c,d.c,v.c,g.c,pt.a,v.c,ht.b,dt.e,p.b,h.b,mt.c,y.b,E.b,O.b,gt.a,k.c,bt.k.forChild(ut)]]}),t})()},CHRX:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var o=a("wd/R");class n{constructor(){this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}setGroup(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}setData(t){this.data=t,this.sortData()}sortData(){this.data.sort((t,e)=>{if(t[this.groupField]==e[this.groupField]){if(this.secondarySort){if(t[this.secondarySort]>e[this.secondarySort])return 1*("desc"===this.sortDir?-1:1);if(t[this.secondarySort]<e[this.secondarySort])return-1*("desc"===this.sortDir?-1:1)}}else{if(t[this.groupField]>e[this.groupField])return 1;if(t[this.groupField]<e[this.groupField])return-1}return 0}),this.filterRows()}filterRows(){var t=[];t=this.data.filter(t=>{for(var e in this.filter)switch(typeof t[e]){case"number":if(this.filter[e]&&t[e].toString()!==this.filter[e].toString())return!1;break;case"string":if("f"==e.charAt(0).toLowerCase()&&o(t[e]).isValid){if(-1==o(t[e]).format("DD/MM/YYYY HH:mm:ss").indexOf(this.filter[e]))return!1;break}if(-1==t[e].toLowerCase().indexOf(this.filter[e].toLowerCase()))return!1}return!0}),t=this.customFilter(t);var e={};this.groupField?e[this.groupField]=t.length.toString():e.count=t.length.toString(),this.sum.forEach(t=>e[t]=0);for(var a=0;a<t.length;a++)this.sum.forEach(o=>e[o]+=t[a][o]);if(e.isGroup=!0,this.footer=e,this.groupField){var n=[];t.forEach(t=>{-1==n.indexOf(t[this.groupField])&&n.push(t[this.groupField])}),n=n.map(t=>({name:t,count:1}));var c=[],l=!0,r=0,i=null,s=()=>{i&&(i[this.groupField]+=" ("+n[r-1].count.toString()+")")};for(a=0;a<t.length;a++){if(l&&t[a][this.groupField]==n[r].name){s();var u="+";this.groups[n[r].name]&&(u="-"),i={[this.groupField]:u+" "+n[r].name,isGroup:!0,name:n[r].name},this.sum.forEach(t=>i[t]=0),c.push(i),l=++r<n.length}else n[r-1].count++;this.sum.forEach(e=>i[e]+=t[a][e]),c.push(t[a])}s(),t=null,c=c.filter(t=>!!t.isGroup||!!this.groups[t[this.groupField]]||void 0),this.rows=c}else this.rows=t;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}updateFilter(t,e){t&&e&&(this.filter[e]=t.target.value,this.filterRows())}updateFilterBoolean(t,e){this.filter[e]=t,this.filterRows()}}},Iab2:function(t,e,a){var o,n;void 0===(n="function"==typeof(o=function(){"use strict";function e(t,e,a){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){l(o.response,e,a)},o.onerror=function(){console.error("could not download file")},o.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function o(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(t,c,l){var r=n.URL||n.webkitURL,i=document.createElement("a");i.download=c=c||t.name||"download",i.rel="noopener","string"==typeof t?(i.href=t,i.origin===location.origin?o(i):a(i.href)?e(t,c,l):o(i,i.target="_blank")):(i.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){o(i)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,c){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,c),n);else if(a(t))e(t,n,c);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){o(l)})}}:function(t,a,o,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,o);var r="application/octet-stream"===t.type,i=/constructor/i.test(n.HTMLElement)||n.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&i||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=t:location=t,l=null},u.readAsDataURL(t)}else{var b=n.URL||n.webkitURL,f=b.createObjectURL(t);l?l.location=f:location.href=f,l=null,setTimeout(function(){b.revokeObjectURL(f)},4e4)}});n.saveAs=l.saveAs=l,t.exports=l})?o.apply(e,[]):o)||(t.exports=n)},bPAe:function(t,e,a){"use strict";a.d(e,"a",function(){return l});var o=a("Iab2"),n=a("EUZL"),c=a("8Y7J");let l=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,a){const o=n.utils.json_to_sheet(t),c=n.write({Sheets:{[a]:o},SheetNames:[a]},{bookType:"xlsx",type:"array"});this.saveExcelFile(c,e)}saveExcelFile(t,e){const a=new Blob([t],{type:this.fileType});o.saveAs(a,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);