(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{I2yB:function(t,e,o){"use strict";o.r(e),o.d(e,"StockOnDateModule",function(){return Et});var c=o("SVse"),a=o("HeVh"),n=o("s7LF"),i=o("GmJt"),r=o("3sEA"),l=o("wd/R"),s=o("GyhO"),u=o("IAdc"),b=o("bPAe"),f=o("CHRX"),p=o("7M/S"),m=o("rGvg"),d=o("AytR"),g=o("8Y7J"),h=o("IheW");let k=(()=>{class t{constructor(t){this.http=t}obtenerDepositos(){return this.http.get(encodeURI(d.a.apiURL+'Depositos?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerStock(t){return this.http.get(encodeURI(`${d.a.apiURL}Productos/GetStockEnFecha?idDeposito=${t}`))}obtenerHistorialProducto(t,e){return this.http.get(encodeURI(`${d.a.apiURL}Productos/GetHistorialStock?idProducto=${e}&idDeposito=${t}`))}}return t.\u0275fac=function(e){return new(e||t)(g.bc(h.c))},t.\u0275prov=g.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=o("iELJ"),w=o("zHaW"),S=o("PDjf"),x=o("VDRc"),y=o("Q2Ze"),E=o("ZTz/"),X=o("Dxy4"),M=o("Tj54"),A=o("w9WL"),O=o("UhP/"),W=o("jMqV"),j=o("e6WT"),I=o("TSSN");function T(t,e){if(1&t&&(g.Xb(0,"mat-option",25),g.Oc(1),g.Wb()),2&t){const t=e.$implicit;g.pc("value",t),g.Eb(1),g.Pc(null==t?null:t.sdescripcion)}}function F(t,e){if(1&t&&(g.Xb(0,"div",1),g.Xb(1,"mat-slide-toggle",26),g.Oc(2),g.kc(3,"translate"),g.Wb(),g.Xb(4,"mat-slide-toggle",26),g.Oc(5),g.kc(6,"translate"),g.Wb(),g.Wb()),2&t){const t=g.jc();g.Eb(1),g.pc("formControl",t.toggle),g.Eb(1),g.Pc(g.lc(3,4,"Solo Activos")),g.Eb(2),g.pc("formControl",t.toggleStock),g.Eb(1),g.Pc(g.lc(6,6,"Solo Stock debajo del m\xednimo"))}}function L(t,e){if(1&t&&g.Oc(0),2&t){const t=e.row;g.Qc(" ",null==t?null:t.sCodProducto," ")}}function R(t,e){if(1&t&&(g.Xb(0,"ngx-datatable-column",27),g.kc(1,"translate"),g.Mc(2,L,1,1,"ng-template",28),g.Wb()),2&t){g.jc();const t=g.Ac(28);g.qc("name",g.lc(1,3,"C\xf3digo")),g.pc("summaryTemplate",t)("flexGrow",1)}}function D(t,e){if(1&t&&g.Oc(0),2&t){const t=e.row;g.Qc(" ",null==t?null:t.sProducto," ")}}function P(t,e){if(1&t&&(g.Xb(0,"ngx-datatable-column",29),g.kc(1,"translate"),g.Mc(2,D,1,1,"ng-template",28),g.Wb()),2&t){g.jc();const t=g.Ac(30);g.qc("name",g.lc(1,3,"Nombre")),g.pc("summaryTemplate",t)("flexGrow",2)}}function C(t,e){if(1&t&&g.Oc(0),2&t){const t=e.row;g.Qc(" ",(null==t?null:t.sEAN)||(null==t?null:t.sEAN2)," ")}}function G(t,e){if(1&t&&(g.Xb(0,"ngx-datatable-column",30),g.kc(1,"translate"),g.Mc(2,C,1,1,"ng-template",28),g.Wb()),2&t){g.jc();const t=g.Ac(32);g.qc("name",g.lc(1,3,"C\xf3digo de Barras")),g.pc("summaryTemplate",t)("flexGrow",1)}}function H(t,e){if(1&t&&g.Oc(0),2&t){const t=e.row;g.Qc(" ",null==t?null:t.sFamilia," ")}}function N(t,e){if(1&t&&(g.Xb(0,"ngx-datatable-column",31),g.kc(1,"translate"),g.Mc(2,H,1,1,"ng-template",28),g.Wb()),2&t){g.jc();const t=g.Ac(34);g.qc("name",g.lc(1,3,"Familia")),g.pc("summaryTemplate",t)("flexGrow",1)}}function Y(t,e){if(1&t&&(g.Oc(0),g.kc(1,"number")),2&t){const t=e.row;g.Qc(" ",g.lc(1,1,null==t?null:t.rStock)," ")}}function U(t,e){if(1&t&&(g.Xb(0,"ngx-datatable-column",32),g.kc(1,"translate"),g.Mc(2,Y,2,3,"ng-template",28),g.Wb()),2&t){g.jc();const t=g.Ac(36);g.qc("name",g.lc(1,3,"Stock en Fecha")),g.pc("summaryTemplate",t)("flexGrow",1)}}function V(t,e){if(1&t&&(g.Oc(0),g.kc(1,"number")),2&t){const t=e.row;g.Qc(" ",g.lc(1,1,null==t?null:t.rStockMinimo)," ")}}function q(t,e){if(1&t&&(g.Xb(0,"ngx-datatable-column",33),g.kc(1,"translate"),g.Mc(2,V,2,3,"ng-template",28),g.Wb()),2&t){g.jc();const t=g.Ac(38);g.qc("name",g.lc(1,3,"Stock M\xednimo")),g.pc("summaryTemplate",t)("flexGrow",1)}}function B(t,e){if(1&t&&(g.Oc(0),g.kc(1,"date")),2&t){const t=e.row;g.Qc(" ",g.mc(1,1,null==t?null:t.fStock,"dd/MM/yyyy")," ")}}function Q(t,e){if(1&t&&(g.Xb(0,"ngx-datatable-column",34),g.kc(1,"translate"),g.Mc(2,B,2,4,"ng-template",28),g.Wb()),2&t){g.jc();const t=g.Ac(40);g.qc("name",g.lc(1,3,"Fecha")),g.pc("summaryTemplate",t)("flexGrow",1)}}function J(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",37),g.fc("click",function(){g.Dc(t);const e=g.jc().row;return g.jc(2).openPopUp(e)}),g.Xb(1,"mat-icon"),g.Oc(2,"info"),g.Wb(),g.Wb()}}function $(t,e){if(1&t&&g.Mc(0,J,3,0,"button",36),2&t){const t=e.row,o=g.jc(2);g.pc("ngIf",!t.isGroup&&o.puedeVerHistorial)}}function _(t,e){1&t&&(g.Xb(0,"ngx-datatable-column",35),g.kc(1,"translate"),g.Mc(2,$,1,1,"ng-template",28),g.Wb()),2&t&&(g.qc("name",g.lc(1,3,"SALES.ACTIONS")),g.pc("flexGrow",1)("sortable",!1))}function K(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",5),g.fc("click",function(){return g.Dc(t),g.jc(3).export()}),g.Xb(1,"mat-icon"),g.Oc(2,"save_alt"),g.Wb(),g.Oc(3),g.kc(4,"translate"),g.Wb()}2&t&&(g.Eb(3),g.Pc(g.lc(4,1,"SALES.EXCEL")))}function Z(t,e){if(1&t&&(g.Xb(0,"div",39),g.Mc(1,K,5,3,"button",40),g.Wb()),2&t){const t=g.jc(2);g.Eb(1),g.pc("ngIf",t.tabla1.data.length>0)}}function z(t,e){1&t&&(g.Xb(0,"ngx-datatable-footer"),g.Mc(1,Z,2,1,"ng-template",38),g.Wb())}function tt(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",45),g.fc("click",function(e){g.Dc(t),g.jc();const o=g.Ac(2);return g.jc().tabla1.updateFilter(e,"sCodProducto")&&(o.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function et(t,e){if(1&t){const t=g.Yb();g.Xb(0,"mat-form-field",41),g.Xb(1,"input",42,43),g.fc("keyup",function(e){return g.Dc(t),g.jc().tabla1.updateFilter(e,"sCodProducto")}),g.Wb(),g.Mc(3,tt,3,0,"button",44),g.Wb()}if(2&t){const t=g.Ac(2);g.Eb(3),g.pc("ngIf",t.value)}}function ot(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",45),g.fc("click",function(e){g.Dc(t),g.jc();const o=g.Ac(2);return g.jc().tabla1.updateFilter(e,"sProducto")&&(o.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function ct(t,e){if(1&t){const t=g.Yb();g.Xb(0,"mat-form-field",41),g.Xb(1,"input",42,43),g.fc("keyup",function(e){return g.Dc(t),g.jc().tabla1.updateFilter(e,"sProducto")}),g.Wb(),g.Mc(3,ot,3,0,"button",44),g.Wb()}if(2&t){const t=g.Ac(2);g.Eb(3),g.pc("ngIf",t.value)}}function at(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",45),g.fc("click",function(e){g.Dc(t),g.jc();const o=g.Ac(2);return g.jc().tabla1.updateFilter(e,"sEAN")&&(o.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function nt(t,e){if(1&t){const t=g.Yb();g.Xb(0,"mat-form-field",41),g.Xb(1,"input",42,43),g.fc("keyup",function(e){return g.Dc(t),g.jc().tabla1.updateFilter(e,"sEAN")}),g.Wb(),g.Mc(3,at,3,0,"button",44),g.Wb()}if(2&t){const t=g.Ac(2);g.Eb(3),g.pc("ngIf",t.value)}}function it(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",45),g.fc("click",function(e){g.Dc(t),g.jc();const o=g.Ac(2);return g.jc().tabla1.updateFilter(e,"sFamilia")&&(o.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function rt(t,e){if(1&t){const t=g.Yb();g.Xb(0,"mat-form-field",41),g.Xb(1,"input",42,43),g.fc("keyup",function(e){return g.Dc(t),g.jc().tabla1.updateFilter(e,"sFamilia")}),g.Wb(),g.Mc(3,it,3,0,"button",44),g.Wb()}if(2&t){const t=g.Ac(2);g.Eb(3),g.pc("ngIf",t.value)}}function lt(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",45),g.fc("click",function(e){g.Dc(t),g.jc();const o=g.Ac(2);return g.jc().tabla1.updateFilter(e,"rStock")&&(o.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function st(t,e){if(1&t){const t=g.Yb();g.Xb(0,"mat-form-field",41),g.Xb(1,"input",46,43),g.fc("keyup",function(e){return g.Dc(t),g.jc().tabla1.updateFilter(e,"rStock")}),g.Wb(),g.Mc(3,lt,3,0,"button",44),g.Wb()}if(2&t){const t=g.Ac(2);g.Eb(3),g.pc("ngIf",t.value)}}function ut(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",45),g.fc("click",function(e){g.Dc(t),g.jc();const o=g.Ac(2);return g.jc().tabla1.updateFilter(e,"rStockMinimo")&&(o.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function bt(t,e){if(1&t){const t=g.Yb();g.Xb(0,"mat-form-field",41),g.Xb(1,"input",46,43),g.fc("keyup",function(e){return g.Dc(t),g.jc().tabla1.updateFilter(e,"rStockMinimo")}),g.Wb(),g.Mc(3,ut,3,0,"button",44),g.Wb()}if(2&t){const t=g.Ac(2);g.Eb(3),g.pc("ngIf",t.value)}}function ft(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",45),g.fc("click",function(e){g.Dc(t),g.jc();const o=g.Ac(2);return g.jc().tabla1.updateFilter(e,"fStock")&&(o.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function pt(t,e){if(1&t){const t=g.Yb();g.Xb(0,"mat-form-field",41),g.Xb(1,"input",42,43),g.fc("keyup",function(e){return g.Dc(t),g.jc().tabla1.updateFilter(e,"fStock")}),g.Wb(),g.Mc(3,ft,3,0,"button",44),g.Wb()}if(2&t){const t=g.Ac(2);g.Eb(3),g.pc("ngIf",t.value)}}const mt=function(){return{y:"50px",delay:"300ms"}},dt=function(t){return{value:"*",params:t}},gt=[{path:"",component:(()=>{class t{constructor(t,e,o,c,a,i,r){this.dialog=t,this.servicioStock=e,this.servicioExportarExcel=o,this.loader=c,this.snack=a,this.servicioPermisos=i,this.breakpointObserver=r,this.toggle=new n.e(!0,[]),this.toggleValue=!0,this.toggleStock=new n.e(!1,[]),this.toggleStockValue=!1,this.puedeVerHistorial=!1,this.toggle.valueChanges.subscribe(t=>{this.toggleValue=t,this.tabla1.updateFilterBoolean(this.toggleValue?"T":"","bActivo")}),this.toggleStock.valueChanges.subscribe(t=>{this.toggleStockValue=t,this.tabla1.filterRows()})}ngOnInit(){this.breakpointObserver.observe([a.b.XSmall,a.b.Small,a.b.Medium,a.b.Large,a.b.XLarge]).subscribe(t=>{this.isXSmall=this.breakpointObserver.isMatched(a.b.XSmall),this.isSmall=this.breakpointObserver.isMatched(a.b.Small),this.isMedium=this.breakpointObserver.isMatched(a.b.Medium),this.isLarge=this.breakpointObserver.isMatched(a.b.Large),this.isXLarge=this.breakpointObserver.isMatched(a.b.XLarge)}),this.tabla1=new f.a,this.tabla1.groupField="",this.tabla1.secondarySort="sProducto",this.tabla1.sum=[],this.tabla1.updateFilterBoolean("T","bActivo"),this.tabla1.customFilter=t=>this.toggleStockValue?t.filter(t=>t.rStock<t.rStockMinimo):t,this.loader.open(),Object(s.a)(this.servicioPermisos.puedeVer("actHistorialProducto")).pipe(Object(u.a)()).subscribe(t=>{this.puedeVerHistorial=t[0]}),this.servicioStock.obtenerDepositos().subscribe(t=>{this.depositos=t,console.log(t),this.depositos.sort((t,e)=>t.sdescripcion>e.sdescripcion?1:t.sdescripcion<e.sdescripcion?-1:0),this.depositoActual=this.depositos[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}mostrarOcultar(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}refresh(){this.loader.open(),this.servicioStock.obtenerStock(this.depositoActual.iddeposito).subscribe(t=>{console.log(t),t.forEach(t=>{t.sEAN||(t.sEAN=""),t.sEAN2||(t.sEAN2=""),t.rStock=parseFloat(t.rStock),t.rStockMinimo=parseFloat(t.rStockMinimo)}),this.tabla1.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}seleccionarDeposito(t){this.depositoActual=t}getRowHeight(t){return 50}export(){var t=this.tabla1.data.map(t=>({Dep\u00f3sito:t.sDeposito,C\u00f3digo:t.sCodProducto,Nombre:t.sProducto,Familia:t.sFamilia,"Stock en Fecha":t.rStock,Fecha:l(t.fStock).format("DD/MM/YYYY")}));this.servicioExportarExcel.exportExcel(t,"stock","stock")}onSort(t){const e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}openPopUp(t={}){this.loader.open(),this.servicioStock.obtenerHistorialProducto(this.depositoActual.id,t.idProducto).subscribe(e=>{this.loader.close(),console.log(t),this.dialog.open(m.a,{width:"720px",disableClose:!0,data:{title:"HISTORIAL DE STOCK",payload:t,historialstock:e}}).afterClosed().subscribe(t=>{})})}}return t.\u0275fac=function(e){return new(e||t)(g.Rb(v.b),g.Rb(k),g.Rb(b.a),g.Rb(r.a),g.Rb(w.a),g.Rb(p.a),g.Rb(a.a))},t.\u0275cmp=g.Lb({type:t,selectors:[["app-stock-on-date"]],decls:41,vars:32,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],[1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort"],["myTable",""],["prop","sCodProducto",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sProducto",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sEAN",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sFamilia",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rStock",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rStockMinimo",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","fStock",3,"summaryTemplate","name","flexGrow",4,"ngIf"],[3,"name","flexGrow","sortable",4,"ngIf"],[4,"ngIf"],["tabla1sCodProducto",""],["tabla1sProducto",""],["tabla1sEAN",""],["tabla1sFamilia",""],["tabla1rStock",""],["tabla1rStockMinimo",""],["tabla1fStock",""],[3,"value"],[1,"m-8",3,"formControl"],["prop","sCodProducto",3,"summaryTemplate","name","flexGrow"],["ngx-datatable-cell-template",""],["prop","sProducto",3,"summaryTemplate","name","flexGrow"],["prop","sEAN",3,"summaryTemplate","name","flexGrow"],["prop","sFamilia",3,"summaryTemplate","name","flexGrow"],["prop","rStock",3,"summaryTemplate","name","flexGrow"],["prop","rStockMinimo",3,"summaryTemplate","name","flexGrow"],["prop","fStock",3,"summaryTemplate","name","flexGrow"],[3,"name","flexGrow","sortable"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){1&t&&(g.Xb(0,"mat-card",0),g.Xb(1,"div",1),g.Xb(2,"mat-form-field",2),g.Xb(3,"mat-label"),g.Oc(4),g.kc(5,"translate"),g.Wb(),g.Xb(6,"mat-select",3),g.fc("selectionChange",function(t){return e.seleccionarDeposito(t.value)})("valueChange",function(t){return e.depositoActual=t}),g.Mc(7,T,2,2,"mat-option",4),g.Wb(),g.Wb(),g.Xb(8,"button",5),g.fc("click",function(){return e.refresh()}),g.Xb(9,"mat-icon"),g.Oc(10,"search"),g.Wb(),g.Oc(11),g.kc(12,"translate"),g.Wb(),g.Wb(),g.Mc(13,F,7,8,"div",6),g.Wb(),g.Xb(14,"mat-card",0),g.Xb(15,"mat-card-content",0),g.Xb(16,"ngx-datatable",7,8),g.fc("sort",function(t){return e.onSort(t)}),g.Mc(18,R,3,5,"ngx-datatable-column",9),g.Mc(19,P,3,5,"ngx-datatable-column",10),g.Mc(20,G,3,5,"ngx-datatable-column",11),g.Mc(21,N,3,5,"ngx-datatable-column",12),g.Mc(22,U,3,5,"ngx-datatable-column",13),g.Mc(23,q,3,5,"ngx-datatable-column",14),g.Mc(24,Q,3,5,"ngx-datatable-column",15),g.Mc(25,_,3,5,"ngx-datatable-column",16),g.Mc(26,z,2,0,"ngx-datatable-footer",17),g.Wb(),g.Wb(),g.Wb(),g.Mc(27,et,4,1,"ng-template",null,18,g.Nc),g.Mc(29,ct,4,1,"ng-template",null,19,g.Nc),g.Mc(31,nt,4,1,"ng-template",null,20,g.Nc),g.Mc(33,rt,4,1,"ng-template",null,21,g.Nc),g.Mc(35,st,4,1,"ng-template",null,22,g.Nc),g.Mc(37,bt,4,1,"ng-template",null,23,g.Nc),g.Mc(39,pt,4,1,"ng-template",null,24,g.Nc)),2&t&&(g.Eb(4),g.Pc(g.lc(5,25,"Dep\xf3sitos")),g.Eb(2),g.pc("value",e.depositoActual),g.Eb(1),g.pc("ngForOf",e.depositos),g.Eb(4),g.Pc(g.lc(12,27,"SALES.SHOW")),g.Eb(2),g.pc("ngIf",e.tabla1.data.length>0),g.Eb(1),g.pc("@animate",g.vc(30,dt,g.uc(29,mt))),g.Eb(2),g.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",e.tabla1.rows)("summaryRow",!0)("externalSorting",!0)("selectionType","single"),g.Eb(2),g.pc("ngIf",e.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",e.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",e.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",e.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",e.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",e.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",e.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",e.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",e.tabla1.data.length>0))},directives:[S.a,x.c,x.b,y.c,x.a,y.f,E.a,c.n,X.b,M.a,c.o,S.b,A.d,O.n,W.a,n.o,n.f,A.b,A.a,A.e,A.c,j.b,y.h],pipes:[I.c,c.g,c.f],styles:[""],data:{animation:[i.a]}}),t})(),data:{title:"STOCK EN FECHA"}}];var ht=o("iInd"),kt=o("u9T3"),vt=o("f44v"),wt=o("TN/R"),St=o("M9ds"),xt=o("ZFy/"),yt=o("PCNd");let Et=(()=>{class t{}return t.\u0275mod=g.Pb({type:t}),t.\u0275inj=g.Ob({factory:function(e){return new(e||t)},imports:[[c.c,n.t,kt.a,A.f,j.c,j.c,S.c,j.c,X.c,vt.a,j.c,xt.b,v.f,w.b,W.b,St.c,E.b,M.b,I.b,yt.a,wt.g,ht.k.forChild(gt)]]}),t})()},Iab2:function(t,e,o){var c,a;void 0===(a="function"==typeof(c=function(){"use strict";function e(t,e,o){var c=new XMLHttpRequest;c.open("GET",t),c.responseType="blob",c.onload=function(){i(c.response,e,o)},c.onerror=function(){console.error("could not download file")},c.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function c(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,n=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(t,n,i){var r=a.URL||a.webkitURL,l=document.createElement("a");l.download=n=n||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?c(l):o(l.href)?e(t,n,i):c(l,l.target="_blank")):(l.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(l.href)},4e4),setTimeout(function(){c(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,a,n){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,n),a);else if(o(t))e(t,a,n);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){c(i)})}}:function(t,o,c,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,c);var r="application/octet-stream"===t.type,l=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&l||n)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},u.readAsDataURL(t)}else{var b=a.URL||a.webkitURL,f=b.createObjectURL(t);i?i.location=f:location.href=f,i=null,setTimeout(function(){b.revokeObjectURL(f)},4e4)}});a.saveAs=i.saveAs=i,t.exports=i})?c.apply(e,[]):c)||(t.exports=a)},bPAe:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var c=o("Iab2"),a=o("EUZL"),n=o("8Y7J");let i=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,o){const c=a.utils.json_to_sheet(t),n=a.write({Sheets:{[o]:c},SheetNames:[o]},{bookType:"xlsx",type:"array"});this.saveExcelFile(n,e)}saveExcelFile(t,e){const o=new Blob([t],{type:this.fileType});c.saveAs(o,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);