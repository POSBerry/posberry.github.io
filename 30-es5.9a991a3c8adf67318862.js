!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{I2yB:function(e,o,n){"use strict";n.r(o),n.d(o,"StockOnDateModule",function(){return Xt});var c,r=n("SVse"),i=n("HeVh"),l=n("s7LF"),u=n("GmJt"),s=n("3sEA"),b=n("wd/R"),f=n("GyhO"),p=n("IAdc"),m=n("bPAe"),d=n("CHRX"),g=n("7M/S"),v=n("rGvg"),h=n("AytR"),k=n("8Y7J"),y=n("IheW"),w=((c=function(){function e(a){t(this,e),this.http=a}return a(e,[{key:"obtenerDepositos",value:function(){return this.http.get(encodeURI(h.a.apiURL+'Depositos?filter={"where":{"deletedon":{"eq":null}}}'))}},{key:"obtenerStock",value:function(t){return this.http.get(encodeURI("".concat(h.a.apiURL,"Productos/GetStockEnFecha?idDeposito=").concat(t)))}},{key:"obtenerHistorialProducto",value:function(t,e){return this.http.get(encodeURI("".concat(h.a.apiURL,"Productos/GetHistorialStock?idProducto=").concat(e,"&idDeposito=").concat(t)))}}]),e}()).\u0275fac=function(t){return new(t||c)(k.bc(y.c))},c.\u0275prov=k.Nb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),O=n("iELJ"),S=n("zHaW"),E=n("PDjf"),x=n("VDRc"),T=n("Q2Ze"),M=n("ZTz/"),A=n("Dxy4"),X=n("Tj54"),W=n("w9WL"),D=n("UhP/"),I=n("jMqV"),j=n("e6WT"),C=n("TSSN");function L(t,e){if(1&t&&(k.Xb(0,"mat-option",25),k.Oc(1),k.Wb()),2&t){var a=e.$implicit;k.pc("value",a),k.Eb(1),k.Pc(null==a?null:a.sdescripcion)}}function F(t,e){if(1&t&&(k.Xb(0,"div",1),k.Xb(1,"mat-slide-toggle",26),k.Oc(2),k.kc(3,"translate"),k.Wb(),k.Xb(4,"mat-slide-toggle",26),k.Oc(5),k.kc(6,"translate"),k.Wb(),k.Wb()),2&t){var a=k.jc();k.Eb(1),k.pc("formControl",a.toggle),k.Eb(1),k.Pc(k.lc(3,4,"STOCKONDATE.ONLYACTIVES")),k.Eb(2),k.pc("formControl",a.toggleStock),k.Eb(1),k.Pc(k.lc(6,6,"STOCKONDATE.STOCKONLYBELOWMINIMUM"))}}function N(t,e){if(1&t&&k.Oc(0),2&t){var a=e.row;k.Qc(" ",null==a?null:a.sCodProducto," ")}}function R(t,e){if(1&t&&(k.Xb(0,"ngx-datatable-column",27),k.kc(1,"translate"),k.Mc(2,N,1,1,"ng-template",28),k.Wb()),2&t){k.jc();var a=k.Ac(28);k.qc("name",k.lc(1,3,"STOCKONDATE.CODE")),k.pc("summaryTemplate",a)("flexGrow",1)}}function P(t,e){if(1&t&&k.Oc(0),2&t){var a=e.row;k.Qc(" ",null==a?null:a.sProducto," ")}}function G(t,e){if(1&t&&(k.Xb(0,"ngx-datatable-column",29),k.kc(1,"translate"),k.Mc(2,P,1,1,"ng-template",28),k.Wb()),2&t){k.jc();var a=k.Ac(30);k.qc("name",k.lc(1,3,"STOCKONDATE.NAME")),k.pc("summaryTemplate",a)("flexGrow",2)}}function H(t,e){if(1&t&&k.Oc(0),2&t){var a=e.row;k.Qc(" ",(null==a?null:a.sEAN)||(null==a?null:a.sEAN2)," ")}}function Y(t,e){if(1&t&&(k.Xb(0,"ngx-datatable-column",30),k.kc(1,"translate"),k.Mc(2,H,1,1,"ng-template",28),k.Wb()),2&t){k.jc();var a=k.Ac(32);k.qc("name",k.lc(1,3,"STOCKONDATE.BARCODE")),k.pc("summaryTemplate",a)("flexGrow",1)}}function U(t,e){if(1&t&&k.Oc(0),2&t){var a=e.row;k.Qc(" ",null==a?null:a.sFamilia," ")}}function K(t,e){if(1&t&&(k.Xb(0,"ngx-datatable-column",31),k.kc(1,"translate"),k.Mc(2,U,1,1,"ng-template",28),k.Wb()),2&t){k.jc();var a=k.Ac(34);k.qc("name",k.lc(1,3,"STOCKONDATE.FAMILY")),k.pc("summaryTemplate",a)("flexGrow",1)}}function V(t,e){if(1&t&&(k.Oc(0),k.kc(1,"number")),2&t){var a=e.row;k.Qc(" ",k.lc(1,1,null==a?null:a.rStock)," ")}}function q(t,e){if(1&t&&(k.Xb(0,"ngx-datatable-column",32),k.kc(1,"translate"),k.Mc(2,V,2,3,"ng-template",28),k.Wb()),2&t){k.jc();var a=k.Ac(36);k.qc("name",k.lc(1,3,"STOCKONDATE.STOCKONDATE")),k.pc("summaryTemplate",a)("flexGrow",1)}}function B(t,e){if(1&t&&(k.Oc(0),k.kc(1,"number")),2&t){var a=e.row;k.Qc(" ",k.lc(1,1,null==a?null:a.rStockMinimo)," ")}}function Q(t,e){if(1&t&&(k.Xb(0,"ngx-datatable-column",33),k.kc(1,"translate"),k.Mc(2,B,2,3,"ng-template",28),k.Wb()),2&t){k.jc();var a=k.Ac(38);k.qc("name",k.lc(1,3,"STOCKONDATE.MINIMUMSTOCK")),k.pc("summaryTemplate",a)("flexGrow",1)}}function J(t,e){if(1&t&&(k.Oc(0),k.kc(1,"date")),2&t){var a=e.row;k.Qc(" ",k.mc(1,1,null==a?null:a.fStock,"dd/MM/yyyy")," ")}}function _(t,e){if(1&t&&(k.Xb(0,"ngx-datatable-column",34),k.kc(1,"translate"),k.Mc(2,J,2,4,"ng-template",28),k.Wb()),2&t){k.jc();var a=k.Ac(40);k.qc("name",k.lc(1,3,"STOCKONDATE.DATE")),k.pc("summaryTemplate",a)("flexGrow",1)}}function Z(t,e){if(1&t){var a=k.Yb();k.Xb(0,"button",37),k.fc("click",function(){k.Dc(a);var t=k.jc().row;return k.jc(2).openPopUp(t)}),k.Xb(1,"mat-icon"),k.Oc(2,"info"),k.Wb(),k.Wb()}}function z(t,e){if(1&t&&k.Mc(0,Z,3,0,"button",36),2&t){var a=e.row,o=k.jc(2);k.pc("ngIf",!a.isGroup&&o.puedeVerHistorial)}}function $(t,e){1&t&&(k.Xb(0,"ngx-datatable-column",35),k.kc(1,"translate"),k.Mc(2,z,1,1,"ng-template",28),k.Wb()),2&t&&(k.qc("name",k.lc(1,3,"STOCKONDATE.ACTIONS")),k.pc("flexGrow",1)("sortable",!1))}function tt(t,e){if(1&t){var a=k.Yb();k.Xb(0,"button",5),k.fc("click",function(){return k.Dc(a),k.jc(3).export()}),k.Xb(1,"mat-icon"),k.Oc(2,"save_alt"),k.Wb(),k.Oc(3),k.kc(4,"translate"),k.Wb()}2&t&&(k.Eb(3),k.Pc(k.lc(4,1,"STOCKONDATE.EXCEL")))}function et(t,e){if(1&t&&(k.Xb(0,"div",39),k.Mc(1,tt,5,3,"button",40),k.Wb()),2&t){var a=k.jc(2);k.Eb(1),k.pc("ngIf",a.tabla1.data.length>0)}}function at(t,e){1&t&&(k.Xb(0,"ngx-datatable-footer"),k.Mc(1,et,2,1,"ng-template",38),k.Wb())}function ot(t,e){if(1&t){var a=k.Yb();k.Xb(0,"button",45),k.fc("click",function(t){k.Dc(a),k.jc();var e=k.Ac(2);return k.jc().tabla1.updateFilter(t,"sCodProducto")&&(e.value="")}),k.Xb(1,"mat-icon"),k.Oc(2,"close"),k.Wb(),k.Wb()}}function nt(t,e){if(1&t){var a=k.Yb();k.Xb(0,"mat-form-field",41),k.Xb(1,"input",42,43),k.fc("keyup",function(t){return k.Dc(a),k.jc().tabla1.updateFilter(t,"sCodProducto")}),k.Wb(),k.Mc(3,ot,3,0,"button",44),k.Wb()}if(2&t){var o=k.Ac(2);k.Eb(3),k.pc("ngIf",o.value)}}function ct(t,e){if(1&t){var a=k.Yb();k.Xb(0,"button",45),k.fc("click",function(t){k.Dc(a),k.jc();var e=k.Ac(2);return k.jc().tabla1.updateFilter(t,"sProducto")&&(e.value="")}),k.Xb(1,"mat-icon"),k.Oc(2,"close"),k.Wb(),k.Wb()}}function rt(t,e){if(1&t){var a=k.Yb();k.Xb(0,"mat-form-field",41),k.Xb(1,"input",42,43),k.fc("keyup",function(t){return k.Dc(a),k.jc().tabla1.updateFilter(t,"sProducto")}),k.Wb(),k.Mc(3,ct,3,0,"button",44),k.Wb()}if(2&t){var o=k.Ac(2);k.Eb(3),k.pc("ngIf",o.value)}}function it(t,e){if(1&t){var a=k.Yb();k.Xb(0,"button",45),k.fc("click",function(t){k.Dc(a),k.jc();var e=k.Ac(2);return k.jc().tabla1.updateFilter(t,"sEAN")&&(e.value="")}),k.Xb(1,"mat-icon"),k.Oc(2,"close"),k.Wb(),k.Wb()}}function lt(t,e){if(1&t){var a=k.Yb();k.Xb(0,"mat-form-field",41),k.Xb(1,"input",42,43),k.fc("keyup",function(t){return k.Dc(a),k.jc().tabla1.updateFilter(t,"sEAN")}),k.Wb(),k.Mc(3,it,3,0,"button",44),k.Wb()}if(2&t){var o=k.Ac(2);k.Eb(3),k.pc("ngIf",o.value)}}function ut(t,e){if(1&t){var a=k.Yb();k.Xb(0,"button",45),k.fc("click",function(t){k.Dc(a),k.jc();var e=k.Ac(2);return k.jc().tabla1.updateFilter(t,"sFamilia")&&(e.value="")}),k.Xb(1,"mat-icon"),k.Oc(2,"close"),k.Wb(),k.Wb()}}function st(t,e){if(1&t){var a=k.Yb();k.Xb(0,"mat-form-field",41),k.Xb(1,"input",42,43),k.fc("keyup",function(t){return k.Dc(a),k.jc().tabla1.updateFilter(t,"sFamilia")}),k.Wb(),k.Mc(3,ut,3,0,"button",44),k.Wb()}if(2&t){var o=k.Ac(2);k.Eb(3),k.pc("ngIf",o.value)}}function bt(t,e){if(1&t){var a=k.Yb();k.Xb(0,"button",45),k.fc("click",function(t){k.Dc(a),k.jc();var e=k.Ac(2);return k.jc().tabla1.updateFilter(t,"rStock")&&(e.value="")}),k.Xb(1,"mat-icon"),k.Oc(2,"close"),k.Wb(),k.Wb()}}function ft(t,e){if(1&t){var a=k.Yb();k.Xb(0,"mat-form-field",41),k.Xb(1,"input",46,43),k.fc("keyup",function(t){return k.Dc(a),k.jc().tabla1.updateFilter(t,"rStock")}),k.Wb(),k.Mc(3,bt,3,0,"button",44),k.Wb()}if(2&t){var o=k.Ac(2);k.Eb(3),k.pc("ngIf",o.value)}}function pt(t,e){if(1&t){var a=k.Yb();k.Xb(0,"button",45),k.fc("click",function(t){k.Dc(a),k.jc();var e=k.Ac(2);return k.jc().tabla1.updateFilter(t,"rStockMinimo")&&(e.value="")}),k.Xb(1,"mat-icon"),k.Oc(2,"close"),k.Wb(),k.Wb()}}function mt(t,e){if(1&t){var a=k.Yb();k.Xb(0,"mat-form-field",41),k.Xb(1,"input",46,43),k.fc("keyup",function(t){return k.Dc(a),k.jc().tabla1.updateFilter(t,"rStockMinimo")}),k.Wb(),k.Mc(3,pt,3,0,"button",44),k.Wb()}if(2&t){var o=k.Ac(2);k.Eb(3),k.pc("ngIf",o.value)}}function dt(t,e){if(1&t){var a=k.Yb();k.Xb(0,"button",45),k.fc("click",function(t){k.Dc(a),k.jc();var e=k.Ac(2);return k.jc().tabla1.updateFilter(t,"fStock")&&(e.value="")}),k.Xb(1,"mat-icon"),k.Oc(2,"close"),k.Wb(),k.Wb()}}function gt(t,e){if(1&t){var a=k.Yb();k.Xb(0,"mat-form-field",41),k.Xb(1,"input",42,43),k.fc("keyup",function(t){return k.Dc(a),k.jc().tabla1.updateFilter(t,"fStock")}),k.Wb(),k.Mc(3,dt,3,0,"button",44),k.Wb()}if(2&t){var o=k.Ac(2);k.Eb(3),k.pc("ngIf",o.value)}}var vt,ht,kt=function(){return{y:"50px",delay:"300ms"}},yt=function(t){return{value:"*",params:t}},wt=[{path:"",component:(vt=function(){function e(a,o,n,c,r,i,u){var s=this;t(this,e),this.dialog=a,this.servicioStock=o,this.servicioExportarExcel=n,this.loader=c,this.snack=r,this.servicioPermisos=i,this.breakpointObserver=u,this.toggle=new l.e(!0,[]),this.toggleValue=!0,this.toggleStock=new l.e(!1,[]),this.toggleStockValue=!1,this.puedeVerHistorial=!1,this.toggle.valueChanges.subscribe(function(t){s.toggleValue=t,s.tabla1.updateFilterBoolean(s.toggleValue?"T":"","bActivo")}),this.toggleStock.valueChanges.subscribe(function(t){s.toggleStockValue=t,s.tabla1.filterRows()})}return a(e,[{key:"ngOnInit",value:function(){var t=this;this.breakpointObserver.observe([i.b.XSmall,i.b.Small,i.b.Medium,i.b.Large,i.b.XLarge]).subscribe(function(e){t.isXSmall=t.breakpointObserver.isMatched(i.b.XSmall),t.isSmall=t.breakpointObserver.isMatched(i.b.Small),t.isMedium=t.breakpointObserver.isMatched(i.b.Medium),t.isLarge=t.breakpointObserver.isMatched(i.b.Large),t.isXLarge=t.breakpointObserver.isMatched(i.b.XLarge)}),this.tabla1=new d.a,this.tabla1.groupField="",this.tabla1.secondarySort="sProducto",this.tabla1.sum=[],this.tabla1.updateFilterBoolean("T","bActivo"),this.tabla1.customFilter=function(e){return t.toggleStockValue?e.filter(function(t){return t.rStock<t.rStockMinimo}):e},this.loader.open(),Object(f.a)(this.servicioPermisos.puedeVer("actHistorialProducto")).pipe(Object(p.a)()).subscribe(function(e){t.puedeVerHistorial=e[0]}),this.servicioStock.obtenerDepositos().subscribe(function(e){t.depositos=e,console.log(e),t.depositos.sort(function(t,e){return t.sdescripcion>e.sdescripcion?1:t.sdescripcion<e.sdescripcion?-1:0}),t.depositoActual=t.depositos[0],t.loader.close()},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"mostrarOcultar",value:function(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}},{key:"refresh",value:function(){var t=this;this.loader.open(),this.servicioStock.obtenerStock(this.depositoActual.iddeposito).subscribe(function(e){console.log(e),e.forEach(function(t){t.sEAN||(t.sEAN=""),t.sEAN2||(t.sEAN2=""),t.rStock=parseFloat(t.rStock),t.rStockMinimo=parseFloat(t.rStockMinimo)}),t.tabla1.setData(e.filter(function(){return!0})),t.loader.close()},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"seleccionarDeposito",value:function(t){this.depositoActual=t}},{key:"getRowHeight",value:function(t){return 50}},{key:"export",value:function(){var t=this.tabla1.data.map(function(t){return{"Dep\xf3sito":t.sDeposito,"C\xf3digo":t.sCodProducto,Nombre:t.sProducto,Familia:t.sFamilia,"Stock en Fecha":t.rStock,Fecha:b(t.fStock).format("DD/MM/YYYY")}});this.servicioExportarExcel.exportExcel(t,"stock","stock")}},{key:"onSort",value:function(t){var e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}},{key:"openPopUp",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loader.open(),this.servicioStock.obtenerHistorialProducto(this.depositoActual.id,e.idProducto).subscribe(function(a){t.loader.close(),console.log(e),t.dialog.open(v.a,{width:"720px",disableClose:!0,data:{title:"HISTORIAL DE STOCK",payload:e,historialstock:a}}).afterClosed().subscribe(function(t){})})}}]),e}(),vt.\u0275fac=function(t){return new(t||vt)(k.Rb(O.b),k.Rb(w),k.Rb(m.a),k.Rb(s.a),k.Rb(S.a),k.Rb(g.a),k.Rb(i.a))},vt.\u0275cmp=k.Lb({type:vt,selectors:[["app-stock-on-date"]],decls:41,vars:32,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],[1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort"],["myTable",""],["prop","sCodProducto",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sProducto",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sEAN",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sFamilia",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rStock",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rStockMinimo",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","fStock",3,"summaryTemplate","name","flexGrow",4,"ngIf"],[3,"name","flexGrow","sortable",4,"ngIf"],[4,"ngIf"],["tabla1sCodProducto",""],["tabla1sProducto",""],["tabla1sEAN",""],["tabla1sFamilia",""],["tabla1rStock",""],["tabla1rStockMinimo",""],["tabla1fStock",""],[3,"value"],[1,"m-8",3,"formControl"],["prop","sCodProducto",3,"summaryTemplate","name","flexGrow"],["ngx-datatable-cell-template",""],["prop","sProducto",3,"summaryTemplate","name","flexGrow"],["prop","sEAN",3,"summaryTemplate","name","flexGrow"],["prop","sFamilia",3,"summaryTemplate","name","flexGrow"],["prop","rStock",3,"summaryTemplate","name","flexGrow"],["prop","rStockMinimo",3,"summaryTemplate","name","flexGrow"],["prop","fStock",3,"summaryTemplate","name","flexGrow"],[3,"name","flexGrow","sortable"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){1&t&&(k.Xb(0,"mat-card",0),k.Xb(1,"div",1),k.Xb(2,"mat-form-field",2),k.Xb(3,"mat-label"),k.Oc(4),k.kc(5,"translate"),k.Wb(),k.Xb(6,"mat-select",3),k.fc("selectionChange",function(t){return e.seleccionarDeposito(t.value)})("valueChange",function(t){return e.depositoActual=t}),k.Mc(7,L,2,2,"mat-option",4),k.Wb(),k.Wb(),k.Xb(8,"button",5),k.fc("click",function(){return e.refresh()}),k.Xb(9,"mat-icon"),k.Oc(10,"search"),k.Wb(),k.Oc(11),k.kc(12,"translate"),k.Wb(),k.Wb(),k.Mc(13,F,7,8,"div",6),k.Wb(),k.Xb(14,"mat-card",0),k.Xb(15,"mat-card-content",0),k.Xb(16,"ngx-datatable",7,8),k.fc("sort",function(t){return e.onSort(t)}),k.Mc(18,R,3,5,"ngx-datatable-column",9),k.Mc(19,G,3,5,"ngx-datatable-column",10),k.Mc(20,Y,3,5,"ngx-datatable-column",11),k.Mc(21,K,3,5,"ngx-datatable-column",12),k.Mc(22,q,3,5,"ngx-datatable-column",13),k.Mc(23,Q,3,5,"ngx-datatable-column",14),k.Mc(24,_,3,5,"ngx-datatable-column",15),k.Mc(25,$,3,5,"ngx-datatable-column",16),k.Mc(26,at,2,0,"ngx-datatable-footer",17),k.Wb(),k.Wb(),k.Wb(),k.Mc(27,nt,4,1,"ng-template",null,18,k.Nc),k.Mc(29,rt,4,1,"ng-template",null,19,k.Nc),k.Mc(31,lt,4,1,"ng-template",null,20,k.Nc),k.Mc(33,st,4,1,"ng-template",null,21,k.Nc),k.Mc(35,ft,4,1,"ng-template",null,22,k.Nc),k.Mc(37,mt,4,1,"ng-template",null,23,k.Nc),k.Mc(39,gt,4,1,"ng-template",null,24,k.Nc)),2&t&&(k.Eb(4),k.Pc(k.lc(5,25,"STOCKONDATE.DEPOSITS")),k.Eb(2),k.pc("value",e.depositoActual),k.Eb(1),k.pc("ngForOf",e.depositos),k.Eb(4),k.Pc(k.lc(12,27,"STOCKONDATE.SHOW")),k.Eb(2),k.pc("ngIf",e.tabla1.data.length>0),k.Eb(1),k.pc("@animate",k.vc(30,yt,k.uc(29,kt))),k.Eb(2),k.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",e.tabla1.rows)("summaryRow",!0)("externalSorting",!0)("selectionType","single"),k.Eb(2),k.pc("ngIf",e.mostrarOcultar("L")),k.Eb(1),k.pc("ngIf",e.mostrarOcultar("XS")),k.Eb(1),k.pc("ngIf",e.mostrarOcultar("L")),k.Eb(1),k.pc("ngIf",e.mostrarOcultar("L")),k.Eb(1),k.pc("ngIf",e.mostrarOcultar("XS")),k.Eb(1),k.pc("ngIf",e.mostrarOcultar("XS")),k.Eb(1),k.pc("ngIf",e.mostrarOcultar("XS")),k.Eb(1),k.pc("ngIf",e.mostrarOcultar("XS")),k.Eb(1),k.pc("ngIf",e.tabla1.data.length>0))},directives:[E.a,x.c,x.b,T.c,x.a,T.f,M.a,r.n,A.b,X.a,r.o,E.b,W.d,D.n,I.a,l.o,l.f,W.b,W.a,W.e,W.c,j.b,T.h],pipes:[C.c,r.g,r.f],styles:[""],data:{animation:[u.a]}}),vt),data:{title:"STOCK EN FECHA"}}],Ot=n("iInd"),St=n("u9T3"),Et=n("f44v"),xt=n("TN/R"),Tt=n("M9ds"),Mt=n("ZFy/"),At=n("PCNd"),Xt=((ht=function e(){t(this,e)}).\u0275mod=k.Pb({type:ht}),ht.\u0275inj=k.Ob({factory:function(t){return new(t||ht)},imports:[[r.c,l.t,St.a,W.f,j.c,j.c,E.c,j.c,A.c,Et.a,j.c,Mt.b,O.f,S.b,I.b,Tt.c,M.b,X.b,C.b,At.a,xt.g,Ot.k.forChild(wt)]]}),ht)},Iab2:function(t,e,a){var o,n;void 0===(n="function"==typeof(o=function(){"use strict";function e(t,e,a){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){r(o.response,e,a)},o.onerror=function(){console.error("could not download file")},o.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function o(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(t,c,r){var i=n.URL||n.webkitURL,l=document.createElement("a");l.download=c=c||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?o(l):a(l.href)?e(t,c,r):o(l,l.target="_blank")):(l.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(l.href)},4e4),setTimeout(function(){o(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,c){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,c),n);else if(a(t))e(t,n,c);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){o(r)})}}:function(t,a,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,o);var i="application/octet-stream"===t.type,l=/constructor/i.test(n.HTMLElement)||n.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||i&&l||c)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},s.readAsDataURL(t)}else{var b=n.URL||n.webkitURL,f=b.createObjectURL(t);r?r.location=f:location.href=f,r=null,setTimeout(function(){b.revokeObjectURL(f)},4e4)}});n.saveAs=r.saveAs=r,t.exports=r})?o.apply(e,[]):o)||(t.exports=n)},bPAe:function(e,o,n){"use strict";n.d(o,"a",function(){return l});var c=n("Iab2"),r=n("EUZL"),i=n("8Y7J"),l=function(){var e=function(){function e(){t(this,e),this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}return a(e,[{key:"exportExcel",value:function(t,e,a){var o,n,c,i=r.utils.json_to_sheet(t),l=r.write({Sheets:(o={},n=a,c=i,n in o?Object.defineProperty(o,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[n]=c,o),SheetNames:[a]},{bookType:"xlsx",type:"array"});this.saveExcelFile(l,e)}},{key:"saveExcelFile",value:function(t,e){var a=new Blob([t],{type:this.fileType});c.saveAs(a,e+this.fileExtension)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();