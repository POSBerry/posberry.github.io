!function(){function t(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function a(t,a){for(var e=0;e<a.length;e++){var c=a[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function e(t,e,c){return e&&a(t.prototype,e),c&&a(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"/m8Z":function(a,c,l){"use strict";l.r(c),l.d(c,"ValuedStockModule",function(){return mt});var n,o=l("SVse"),r=l("s7LF"),i=l("GmJt"),u=l("3sEA"),b=l("bPAe"),s=l("CHRX"),f=l("AytR"),p=l("8Y7J"),m=l("IheW"),d=((n=function(){function a(e){t(this,a),this.http=e}return e(a,[{key:"obtenerDatos",value:function(t){var a=f.a.apiURL+"Productos/GetStock";return t&&(a+="?fhasta="+t),this.http.get(encodeURI(a))}}]),a}()).\u0275fac=function(t){return new(t||n)(p.bc(m.c))},n.\u0275prov=p.Nb({token:n,factory:n.\u0275fac,providedIn:"root"}),n),v=l("zHaW"),g=l("PDjf"),h=l("VDRc"),C=l("jMqV"),k=l("Dxy4"),E=l("Tj54"),D=l("w9WL"),W=l("Q2Ze"),y=l("e6WT"),A=l("TN/R"),O=l("ZTz/"),X=l("UhP/"),V=l("TSSN");function S(t,a){if(1&t&&(p.Xb(0,"mat-option",30),p.Oc(1),p.Wb()),2&t){var e=a.$implicit;p.pc("value",e),p.Eb(1),p.Pc(null==e?null:e.toString())}}function w(t,a){if(1&t&&(p.Xb(0,"mat-option",30),p.Oc(1),p.Wb()),2&t){var e=a.$implicit;p.pc("value",e),p.Eb(1),p.Pc(null==e?null:e.toString())}}function T(t,a){if(1&t){var e=p.Yb();p.Xb(0,"div",23),p.Xb(1,"mat-form-field",24),p.Xb(2,"mat-label"),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Xb(5,"input",25),p.fc("dateChange",function(t){return p.Dc(e),p.jc().updateDate(t)}),p.Wb(),p.Sb(6,"mat-datepicker-toggle",26),p.Sb(7,"mat-datepicker",null,27),p.Wb(),p.Xb(9,"mat-form-field",24),p.Xb(10,"mat-label"),p.Oc(11),p.kc(12,"translate"),p.Wb(),p.Xb(13,"mat-select",28),p.fc("valueChange",function(t){return p.Dc(e),p.jc().hours=t}),p.Mc(14,S,2,2,"mat-option",29),p.Wb(),p.Wb(),p.Xb(15,"mat-form-field",24),p.Xb(16,"mat-label"),p.Oc(17),p.kc(18,"translate"),p.Wb(),p.Xb(19,"mat-select",28),p.fc("valueChange",function(t){return p.Dc(e),p.jc().minutes=t}),p.Mc(20,w,2,2,"mat-option",29),p.Wb(),p.Wb(),p.Wb()}if(2&t){var c=p.Ac(8),l=p.jc();p.Eb(3),p.Pc(p.lc(4,10,"VALUEDSTOCK.DATE")),p.Eb(2),p.pc("matDatepicker",c)("value",l.startDate),p.Eb(1),p.pc("for",c),p.Eb(5),p.Pc(p.lc(12,12,"VALUEDSTOCK.HOUR")),p.Eb(2),p.pc("value",l.hours),p.Eb(1),p.pc("ngForOf",l.hoursArr),p.Eb(3),p.Pc(p.lc(18,14,"VALUEDSTOCK.MINUTES")),p.Eb(2),p.pc("value",l.minutes),p.Eb(1),p.pc("ngForOf",l.minutesArr)}}function x(t,a){if(1&t&&p.Oc(0),2&t){var e=a.row;p.Qc(" ",null==e?null:e.sDeposito," ")}}function L(t,a){if(1&t&&p.Oc(0),2&t){var e=a.row;p.Qc(" ",null==e?null:e.sProducto," ")}}function M(t,a){if(1&t&&p.Oc(0),2&t){var e=a.row;p.Qc(" ",null==e?null:e.sCodProducto," ")}}function j(t,a){if(1&t&&p.Oc(0),2&t){var e=a.row;p.Qc(" ",null==e?null:e.sFamilia," ")}}function F(t,a){if(1&t&&(p.Oc(0),p.kc(1,"number")),2&t){var e=a.row;p.Qc(" ",p.lc(1,1,null==e?null:e.rStock)," ")}}function P(t,a){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){var e=a.row;p.Qc(" ",p.lc(1,1,null==e?null:e.rCostoValorizado)," ")}}function I(t,a){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){var e=a.row;p.Qc(" ",p.lc(1,1,null==e?null:e.rVentaValorizada)," ")}}function U(t,a){if(1&t){var e=p.Yb();p.Xb(0,"button",4),p.fc("click",function(){return p.Dc(e),p.jc(3).export()}),p.Xb(1,"mat-icon"),p.Oc(2,"save_alt"),p.Wb(),p.Oc(3),p.kc(4,"translate"),p.Wb()}2&t&&(p.Eb(3),p.Pc(p.lc(4,1,"VALUEDSTOCK.EXCEL")))}function z(t,a){if(1&t&&(p.Xb(0,"div",32),p.Xb(1,"div"),p.Xb(2,"strong"),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Wb(),p.Sb(5,"hr",33),p.Xb(6,"div"),p.Oc(7),p.kc(8,"translate"),p.kc(9,"number"),p.kc(10,"translate"),p.kc(11,"currency"),p.kc(12,"translate"),p.kc(13,"currency"),p.Wb(),p.Wb(),p.Xb(14,"div",34),p.Mc(15,U,5,3,"button",35),p.Wb()),2&t){var e=p.jc(2);p.Eb(3),p.Pc(p.lc(4,9,"VALUEDSTOCK.TOTALS")),p.Eb(4),p.Wc("",e.tabla1.footer.sDeposito," | ",p.lc(8,11,"VALUEDSTOCK.STOCK"),": ",p.lc(9,13,e.tabla1.footer.rStock)," | ",p.lc(10,15,"VALUEDSTOCK.VALUEDCOST"),": ",p.lc(11,17,e.tabla1.footer.rCostoValorizado)," | ",p.lc(12,19,"VALUEDSTOCK.VALUEDSALE"),": ",p.lc(13,21,e.tabla1.footer.rVentaValorizada),""),p.Eb(8),p.pc("ngIf",e.tabla1.data.length>0)}}function K(t,a){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,z,16,23,"ng-template",31),p.Wb())}function R(t,a){if(1&t){var e=p.Yb();p.Xb(0,"button",40),p.fc("click",function(t){p.Dc(e),p.jc();var a=p.Ac(2);return p.jc().tabla1.updateFilter(t,"sDeposito")&&(a.value="")}),p.Xb(1,"mat-icon"),p.Oc(2,"close"),p.Wb(),p.Wb()}}function Y(t,a){if(1&t){var e=p.Yb();p.Xb(0,"mat-form-field",36),p.Xb(1,"input",37,38),p.fc("keyup",function(t){return p.Dc(e),p.jc().tabla1.updateFilter(t,"sDeposito")}),p.Wb(),p.Mc(3,R,3,0,"button",39),p.Wb()}if(2&t){var c=p.Ac(2);p.Eb(3),p.pc("ngIf",c.value)}}function H(t,a){if(1&t){var e=p.Yb();p.Xb(0,"button",40),p.fc("click",function(t){p.Dc(e),p.jc();var a=p.Ac(2);return p.jc().tabla1.updateFilter(t,"sProducto")&&(a.value="")}),p.Xb(1,"mat-icon"),p.Oc(2,"close"),p.Wb(),p.Wb()}}function N(t,a){if(1&t){var e=p.Yb();p.Xb(0,"mat-form-field",36),p.Xb(1,"input",37,38),p.fc("keyup",function(t){return p.Dc(e),p.jc().tabla1.updateFilter(t,"sProducto")}),p.Wb(),p.Mc(3,H,3,0,"button",39),p.Wb()}if(2&t){var c=p.Ac(2);p.Eb(3),p.pc("ngIf",c.value)}}function q(t,a){if(1&t){var e=p.Yb();p.Xb(0,"button",40),p.fc("click",function(t){p.Dc(e),p.jc();var a=p.Ac(2);return p.jc().tabla1.updateFilter(t,"sCodProducto")&&(a.value="")}),p.Xb(1,"mat-icon"),p.Oc(2,"close"),p.Wb(),p.Wb()}}function Q(t,a){if(1&t){var e=p.Yb();p.Xb(0,"mat-form-field",36),p.Xb(1,"input",37,38),p.fc("keyup",function(t){return p.Dc(e),p.jc().tabla1.updateFilter(t,"sCodProducto")}),p.Wb(),p.Mc(3,q,3,0,"button",39),p.Wb()}if(2&t){var c=p.Ac(2);p.Eb(3),p.pc("ngIf",c.value)}}function G(t,a){if(1&t){var e=p.Yb();p.Xb(0,"button",40),p.fc("click",function(t){p.Dc(e),p.jc();var a=p.Ac(2);return p.jc().tabla1.updateFilter(t,"sFamilia")&&(a.value="")}),p.Xb(1,"mat-icon"),p.Oc(2,"close"),p.Wb(),p.Wb()}}function J(t,a){if(1&t){var e=p.Yb();p.Xb(0,"mat-form-field",36),p.Xb(1,"input",37,38),p.fc("keyup",function(t){return p.Dc(e),p.jc().tabla1.updateFilter(t,"sFamilia")}),p.Wb(),p.Mc(3,G,3,0,"button",39),p.Wb()}if(2&t){var c=p.Ac(2);p.Eb(3),p.pc("ngIf",c.value)}}function Z(t,a){if(1&t){var e=p.Yb();p.Xb(0,"button",40),p.fc("click",function(t){p.Dc(e),p.jc();var a=p.Ac(2);return p.jc().tabla1.updateFilter(t,"rStock")&&(a.value="")}),p.Xb(1,"mat-icon"),p.Oc(2,"close"),p.Wb(),p.Wb()}}function $(t,a){if(1&t){var e=p.Yb();p.Xb(0,"mat-form-field",36),p.Xb(1,"input",41,38),p.fc("keyup",function(t){return p.Dc(e),p.jc().tabla1.updateFilter(t,"rStock")}),p.Wb(),p.Mc(3,Z,3,0,"button",39),p.Wb()}if(2&t){var c=p.Ac(2);p.Eb(3),p.pc("ngIf",c.value)}}function _(t,a){if(1&t){var e=p.Yb();p.Xb(0,"button",40),p.fc("click",function(t){p.Dc(e),p.jc();var a=p.Ac(2);return p.jc().tabla1.updateFilter(t,"rCostoValorizado")&&(a.value="")}),p.Xb(1,"mat-icon"),p.Oc(2,"close"),p.Wb(),p.Wb()}}function B(t,a){if(1&t){var e=p.Yb();p.Xb(0,"mat-form-field",36),p.Xb(1,"input",41,38),p.fc("keyup",function(t){return p.Dc(e),p.jc().tabla1.updateFilter(t,"rCostoValorizado")}),p.Wb(),p.Mc(3,_,3,0,"button",39),p.Wb()}if(2&t){var c=p.Ac(2);p.Eb(3),p.pc("ngIf",c.value)}}function tt(t,a){if(1&t){var e=p.Yb();p.Xb(0,"button",40),p.fc("click",function(t){p.Dc(e),p.jc();var a=p.Ac(2);return p.jc().tabla1.updateFilter(t,"rVentaValorizada")&&(a.value="")}),p.Xb(1,"mat-icon"),p.Oc(2,"close"),p.Wb(),p.Wb()}}function at(t,a){if(1&t){var e=p.Yb();p.Xb(0,"mat-form-field",36),p.Xb(1,"input",41,38),p.fc("keyup",function(t){return p.Dc(e),p.jc().tabla1.updateFilter(t,"rVentaValorizada")}),p.Wb(),p.Mc(3,tt,3,0,"button",39),p.Wb()}if(2&t){var c=p.Ac(2);p.Eb(3),p.pc("ngIf",c.value)}}var et,ct,lt=function(){return{y:"50px",delay:"300ms"}},nt=function(t){return{value:"*",params:t}},ot=[{path:"",component:(et=function(){function a(e,c,l,n){var o=this;t(this,a),this.servicioStockValorizado=e,this.servicioExportarExcel=c,this.loader=l,this.snack=n,this.hours=0,this.minutes=0,this.hoursArr=[],this.minutesArr=[],this.toggle=new r.e("",[]),this.toggleValue=!1,this.startDate=new Date,this.toggle.valueChanges.subscribe(function(t){o.toggleValue=t});for(var i=0;i<=23;i++)this.hoursArr.push(i);for(i=0;i<=59;i++)this.minutesArr.push(i)}return e(a,[{key:"ngOnInit",value:function(){this.tabla1=new s.a,this.tabla1.groupField="sDeposito",this.tabla1.secondarySort="sProducto",this.tabla1.sum=["rStock","rCostoValorizado","rVentaValorizada"]}},{key:"onSort",value:function(t){var a=t.sorts[0];this.tabla1.secondarySort=a.prop,this.tabla1.sortDir=a.dir,this.tabla1.sortData()}},{key:"export",value:function(){var t=this.tabla1.data.map(function(t){return{"Dep\xf3sito":t.sDeposito,Nombre:t.sProducto,"C\xf3digo":t.sCodProducto,Familia:t.sFamilia,Stock:t.rStock,"Costo Valorizado":t.rCostoValorizado,"Venta Valorizada":t.rVentaValorizada}});this.servicioExportarExcel.exportExcel(t,"stock_valorizado","stock")}},{key:"refresh",value:function(){var t=this,a=null;this.toggleValue&&(this.startDate.setHours(this.hours,this.minutes,59,999),a=this.startDate.toISOString()),this.loader.open(),this.servicioStockValorizado.obtenerDatos(a).subscribe(function(a){t.tabla1.setData(a.filter(function(){return!0})),t.loader.close()},function(a){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"getRowHeight",value:function(t){return 50}},{key:"getCellClass",value:function(t){return{ngxgroup:t.row.isGroup}}},{key:"tabla1OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}},{key:"updateDate",value:function(t){this.startDate=t.value.toDate()}},{key:"onChangeToggle",value:function(t){this.toggle=t.value}}]),a}(),et.\u0275fac=function(t){return new(t||et)(p.Rb(d),p.Rb(b.a),p.Rb(u.a),p.Rb(v.a))},et.\u0275cmp=p.Lb({type:et,selectors:[["app-valued-stock"]],decls:52,vars:63,consts:[[1,"p-0"],["fxLayout","row","fxLayoutAlign","end center",1,"p-8"],[1,"m-8",3,"formControl"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],["prop","sDeposito",3,"cellClass","summaryTemplate","name","width"],["ngx-datatable-cell-template",""],["prop","sProducto",3,"cellClass","summaryTemplate","name","width"],["prop","sCodProducto",3,"cellClass","summaryTemplate","name","width"],["prop","sFamilia",3,"cellClass","summaryTemplate","name","width"],["prop","rStock",3,"cellClass","summaryTemplate","name","width"],["prop","rCostoValorizado",3,"cellClass","summaryTemplate","name","width"],["prop","rVentaValorizada",3,"cellClass","summaryTemplate","name","width"],[4,"ngIf"],["tabla1sDeposito",""],["tabla1sProducto",""],["tabla1sCodProducto",""],["tabla1sFamilia",""],["tabla1rStock",""],["tabla1rCostoValorizado",""],["tabla1rVentaValorizada",""],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker",""],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,a){if(1&t&&(p.Xb(0,"mat-card",0),p.Xb(1,"div",1),p.Xb(2,"mat-slide-toggle",2),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Wb(),p.Mc(5,T,21,16,"div",3),p.Xb(6,"div",1),p.Xb(7,"button",4),p.fc("click",function(){return a.refresh()}),p.Xb(8,"mat-icon"),p.Oc(9,"search"),p.Wb(),p.Oc(10),p.kc(11,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Xb(12,"mat-card",0),p.Xb(13,"mat-card-content",0),p.Xb(14,"ngx-datatable",5,6),p.fc("activate",function(t){return a.tabla1OnActivate(t)}),p.Xb(16,"ngx-datatable-column",7),p.kc(17,"translate"),p.Mc(18,x,1,1,"ng-template",8),p.Wb(),p.Xb(19,"ngx-datatable-column",9),p.kc(20,"translate"),p.Mc(21,L,1,1,"ng-template",8),p.Wb(),p.Xb(22,"ngx-datatable-column",10),p.kc(23,"translate"),p.Mc(24,M,1,1,"ng-template",8),p.Wb(),p.Xb(25,"ngx-datatable-column",11),p.kc(26,"translate"),p.Mc(27,j,1,1,"ng-template",8),p.Wb(),p.Xb(28,"ngx-datatable-column",12),p.kc(29,"translate"),p.Mc(30,F,2,3,"ng-template",8),p.Wb(),p.Xb(31,"ngx-datatable-column",13),p.kc(32,"translate"),p.Mc(33,P,2,3,"ng-template",8),p.Wb(),p.Xb(34,"ngx-datatable-column",14),p.kc(35,"translate"),p.Mc(36,I,2,3,"ng-template",8),p.Wb(),p.Mc(37,K,2,0,"ngx-datatable-footer",15),p.Wb(),p.Wb(),p.Wb(),p.Mc(38,Y,4,1,"ng-template",null,16,p.Nc),p.Mc(40,N,4,1,"ng-template",null,17,p.Nc),p.Mc(42,Q,4,1,"ng-template",null,18,p.Nc),p.Mc(44,J,4,1,"ng-template",null,19,p.Nc),p.Mc(46,$,4,1,"ng-template",null,20,p.Nc),p.Mc(48,B,4,1,"ng-template",null,21,p.Nc),p.Mc(50,at,4,1,"ng-template",null,22,p.Nc)),2&t){var e=p.Ac(39),c=p.Ac(41),l=p.Ac(43),n=p.Ac(45),o=p.Ac(47),r=p.Ac(49),i=p.Ac(51);p.Eb(2),p.pc("formControl",a.toggle),p.Eb(1),p.Pc(p.lc(4,42,"VALUEDSTOCK.DATE")),p.Eb(2),p.pc("ngIf",a.toggleValue),p.Eb(5),p.Pc(p.lc(11,44,"VALUEDSTOCK.SHOW")),p.Eb(2),p.pc("@animate",p.vc(61,nt,p.uc(60,lt))),p.Eb(2),p.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",a.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",a.tabla1.rows)("selectionType","single"),p.Eb(2),p.qc("name",p.lc(17,46,"VALUEDSTOCK.DEPOSIT")),p.pc("cellClass",a.getCellClass)("summaryTemplate",e)("width",225),p.Eb(3),p.qc("name",p.lc(20,48,"VALUEDSTOCK.NAME")),p.pc("cellClass",a.getCellClass)("summaryTemplate",c)("width",500),p.Eb(3),p.qc("name",p.lc(23,50,"VALUEDSTOCK.CODE")),p.pc("cellClass",a.getCellClass)("summaryTemplate",l)("width",200),p.Eb(3),p.qc("name",p.lc(26,52,"VALUEDSTOCK.FAMILY")),p.pc("cellClass",a.getCellClass)("summaryTemplate",n)("width",225),p.Eb(3),p.qc("name",p.lc(29,54,"VALUEDSTOCK.STOCK")),p.pc("cellClass",a.getCellClass)("summaryTemplate",o)("width",150),p.Eb(3),p.qc("name",p.lc(32,56,"VALUEDSTOCK.VALUEDCOST")),p.pc("cellClass",a.getCellClass)("summaryTemplate",r)("width",150),p.Eb(3),p.qc("name",p.lc(35,58,"VALUEDSTOCK.VALUEDSALE")),p.pc("cellClass",a.getCellClass)("summaryTemplate",i)("width",150),p.Eb(3),p.pc("ngIf",a.tabla1.data.length>0)}},directives:[g.a,h.c,h.b,C.a,r.n,r.f,o.o,k.b,E.a,g.b,D.d,D.b,D.a,W.c,h.a,W.f,y.b,A.b,A.d,W.h,A.a,O.a,o.n,X.n,D.e,D.c],pipes:[V.c,o.g,o.d],styles:[""],data:{animation:[i.a]}}),et),data:{title:"STOCK VALORIZADO"}}],rt=l("iInd"),it=l("u9T3"),ut=l("f44v"),bt=l("iELJ"),st=l("M9ds"),ft=l("ZFy/"),pt=l("PCNd"),mt=((ct=function a(){t(this,a)}).\u0275mod=p.Pb({type:ct}),ct.\u0275inj=p.Ob({factory:function(t){return new(t||ct)},imports:[[o.c,r.s,it.a,D.f,y.c,y.c,g.c,y.c,k.c,ut.a,y.c,ft.b,bt.f,v.b,C.b,st.c,O.b,E.b,V.b,pt.a,A.c,rt.k.forChild(ot)]]}),ct)}}])}();