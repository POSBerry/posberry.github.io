!function(){function t(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function a(t,a){for(var e=0;e<a.length;e++){var c=a[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function e(t,e,c){return e&&a(t.prototype,e),c&&a(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{m5ja:function(a,c,n){"use strict";n.r(c),n.d(c,"PuchasesByDocumentModule",function(){return At});var o,r=n("SVse"),l=n("u9T3"),i=n("s7LF"),s=n("Dxy4"),u=n("PDjf"),b=n("f44v"),p=n("iELJ"),m=n("Tj54"),f=n("e6WT"),d=n("ZTz/"),h=n("jMqV"),g=n("zHaW"),C=n("M9ds"),v=n("ZFy/"),E=n("TSSN"),S=n("w9WL"),A=n("PCNd"),D=n("GmJt"),O=n("3sEA"),k=n("wd/R"),W=n("cp0P"),w=n("bPAe"),X=n("CHRX"),P=n("i59u"),T=n("UVsP"),x=n("Ap+n"),y=n("AytR"),I=n("8Y7J"),M=n("IheW"),R=((o=function(){function a(e){t(this,a),this.http=e}return e(a,[{key:"obtenerDatosTabla1",value:function(t,a,e){var c="".concat(y.a.apiURL,"Compras/DocumentosDeComprasEnUnaFecha?fdesde=").concat(t,"&fhasta=").concat(a);return e&&(c="".concat(y.a.apiURL,"Compras/DocumentosDeComprasEnUnaFecha?fdesde=").concat(t,"&fhasta=").concat(a,"&idsucursal=").concat(e)),this.http.get(encodeURI(c))}},{key:"obtenerDatosTabla2",value:function(t,a,e){var c="".concat(y.a.apiURL,"Compras/DetalleDeComprasEnUnaFecha?fdesde=").concat(t,"&fhasta=").concat(a);return e&&(c="".concat(y.a.apiURL,"Compras/DetalleDeComprasEnUnaFecha?fdesde=").concat(t,"&fhasta=").concat(a,"&idsucursal=").concat(e)),this.http.get(encodeURI(c))}},{key:"obtenerDatosCompras",value:function(t){return Object(W.a)([this.http.get(encodeURI("".concat(y.a.apiURL,"ComprasItems/DetalleDeComprasPorId?idCompras=").concat(t))),this.http.get(encodeURI("".concat(y.a.apiURL,"Compras/DetalleDeMovCajaCompras?idCompras=").concat(t)))])}}]),a}()).\u0275fac=function(t){return new(t||o)(I.bc(M.c))},o.\u0275prov=I.Nb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),L=n("VDRc"),N=n("Q2Ze"),U=n("TN/R"),F=n("UhP/");function V(t,a){if(1&t&&(I.Xb(0,"mat-option",18),I.Oc(1),I.Wb()),2&t){var e=a.$implicit;I.pc("value",e),I.Eb(1),I.Pc(e.toString())}}function H(t,a){if(1&t&&(I.Xb(0,"mat-option",18),I.Oc(1),I.Wb()),2&t){var e=a.$implicit;I.pc("value",e),I.Eb(1),I.Pc(e.toString())}}function Y(t,a){if(1&t&&(I.Xb(0,"mat-option",18),I.Oc(1),I.Wb()),2&t){var e=a.$implicit;I.pc("value",e),I.Eb(1),I.Pc(e.toString())}}function j(t,a){if(1&t&&(I.Xb(0,"mat-option",18),I.Oc(1),I.Wb()),2&t){var e=a.$implicit;I.pc("value",e),I.Eb(1),I.Pc(e.toString())}}function q(t,a){if(1&t&&(I.Xb(0,"mat-option",18),I.Oc(1),I.Wb()),2&t){var e=a.$implicit;I.pc("value",e),I.Eb(1),I.Pc(null==e?null:e.nombre)}}function B(t,a){if(1&t&&(I.Oc(0),I.kc(1,"date")),2&t){var e=a.row;I.Qc(" ",I.mc(1,1,null==e?null:e.fDocumento,"dd/MM/yyyy HH:mm:ss")," ")}}function G(t,a){if(1&t&&I.Oc(0),2&t){var e=a.row;I.Qc(" ",null==e?null:e.idTipoDoc," ")}}function Q(t,a){if(1&t&&I.Oc(0),2&t){var e=a.row;I.Qc(" ",null==e?null:e.idPV," ")}}function _(t,a){if(1&t&&I.Oc(0),2&t){var e=a.row;I.Qc(" ",null==e?null:e.idNumDoc," ")}}function z(t,a){if(1&t&&I.Oc(0),2&t){var e=a.row;I.Qc(" ",null==e?null:e.sSucursal," ")}}function J(t,a){if(1&t&&I.Oc(0),2&t){var e=a.row;I.Qc(" ",null==e?null:e.sRazonSocial," ")}}function $(t,a){1&t&&(I.Xb(0,"span"),I.Oc(1,"Si"),I.Wb())}function K(t,a){1&t&&(I.Xb(0,"span"),I.Oc(1,"No"),I.Wb())}function Z(t,a){if(1&t&&(I.Mc(0,$,2,0,"span",17),I.Mc(1,K,2,0,"span",17)),2&t){var e=a.row;I.pc("ngIf","T"==(null==e?null:e.bAnulado)),I.Eb(1),I.pc("ngIf","F"==(null==e?null:e.bAnulado))}}function tt(t,a){1&t&&(I.Xb(0,"span"),I.Oc(1,"Si"),I.Wb())}function at(t,a){1&t&&(I.Xb(0,"span"),I.Oc(1,"No"),I.Wb())}function et(t,a){if(1&t&&(I.Mc(0,tt,2,0,"span",17),I.Mc(1,at,2,0,"span",17)),2&t){var e=a.row;I.pc("ngIf","T"==(null==e?null:e.bConfirmado)),I.Eb(1),I.pc("ngIf","F"==(null==e?null:e.bConfirmado))}}function ct(t,a){if(1&t&&I.Oc(0),2&t){var e=a.row;I.Qc(" ",null==e?null:e.sCondVenta," ")}}function nt(t,a){if(1&t&&(I.Oc(0),I.kc(1,"currency")),2&t){var e=a.row;I.Qc(" ",I.lc(1,1,null==e?null:e.rTotDescuento)," ")}}function ot(t,a){if(1&t&&(I.Oc(0),I.kc(1,"currency")),2&t){var e=a.row;I.Qc(" ",I.lc(1,1,null==e?null:e.rTotBruto)," ")}}function rt(t,a){1&t&&(I.Xb(0,"span"),I.Oc(1,"Si"),I.Wb())}function lt(t,a){1&t&&(I.Xb(0,"span"),I.Oc(1,"No"),I.Wb())}function it(t,a){if(1&t&&(I.Mc(0,rt,2,0,"span",17),I.Mc(1,lt,2,0,"span",17)),2&t){var e=a.row;I.pc("ngIf","T"==(null==e?null:e.bAfectaStock)),I.Eb(1),I.pc("ngIf","F"==(null==e?null:e.bAfectaStock))}}function st(t,a){if(1&t){var e=I.Yb();I.Xb(0,"button",20),I.fc("click",function(){I.Dc(e);var t=I.jc().row;return I.jc().openPopUp(t)}),I.Xb(1,"mat-icon"),I.Oc(2,"info"),I.Wb(),I.Wb()}}function ut(t,a){if(1&t){var e=I.Yb();I.Xb(0,"button",20),I.fc("click",function(){I.Dc(e);var t=I.jc().row;return I.jc().openUserInfoPopUp(t)}),I.Xb(1,"mat-icon"),I.Oc(2,"person_pin"),I.Wb(),I.Wb()}}function bt(t,a){if(1&t&&(I.Mc(0,st,3,0,"button",19),I.Mc(1,ut,3,0,"button",19)),2&t){var e=a.row;I.pc("ngIf",!e.isGroup),I.Eb(1),I.pc("ngIf",!e.isGroup)}}function pt(t,a){if(1&t){var e=I.Yb();I.Xb(0,"button",11),I.fc("click",function(){return I.Dc(e),I.jc(3).export()}),I.Xb(1,"mat-icon"),I.Oc(2,"save_alt"),I.Wb(),I.Oc(3),I.kc(4,"translate"),I.Wb()}2&t&&(I.Eb(3),I.Pc(I.lc(4,1,"SALES.EXCEL")))}function mt(t,a){if(1&t&&(I.Xb(0,"div",22),I.Xb(1,"div"),I.Xb(2,"strong"),I.Oc(3),I.kc(4,"translate"),I.Wb(),I.Wb(),I.Sb(5,"hr",23),I.Xb(6,"div"),I.Oc(7),I.kc(8,"translate"),I.kc(9,"currency"),I.kc(10,"translate"),I.kc(11,"currency"),I.Wb(),I.Wb(),I.Xb(12,"div",24),I.Mc(13,pt,5,3,"button",25),I.Wb()),2&t){var e=I.jc(2);I.Eb(3),I.Pc(I.lc(4,7,"SALES.FOOTERTOTALS")),I.Eb(4),I.Uc("",e.tabla1.footer.count," | ",I.lc(8,9,"SALES.TOTAL"),": ",I.lc(9,11,e.tabla1.footer.rTotBruto)," | ",I.lc(10,13,"SALES.DISCOUNTS"),": ",I.lc(11,15,e.tabla1.footer.rTotDescuento),""),I.Eb(6),I.pc("ngIf",e.tabla1.data.length>0)}}function ft(t,a){1&t&&(I.Xb(0,"ngx-datatable-footer"),I.Mc(1,mt,14,17,"ng-template",21),I.Wb())}var dt,ht,gt=function(){return{y:"50px",delay:"300ms"}},Ct=function(t){return{value:"*",params:t}},vt=[{path:"",component:(dt=function(){function a(e,c,n,o,r,l){t(this,a),this.dialog=e,this.servicioCompras=c,this.servicioExportarExcel=n,this.servicioSucursales=o,this.loader=r,this.snack=l,this.hours=0,this.minutes=0,this.hours2=0,this.minutes2=0,this.hoursArr=[],this.minutesArr=[],this.startDate=new Date,this.endDate=new Date;for(var i=0;i<=23;i++)this.hoursArr.push(i);for(i=0;i<=59;i++)this.minutesArr.push(i);this.minutes=this.minutesArr[0],this.minutes2=this.minutesArr[this.minutesArr.length-1],this.hours=this.hoursArr[0],this.hours2=this.hoursArr[this.hoursArr.length-1]}return e(a,[{key:"ngOnInit",value:function(){var t=this;this.tabla1=new X.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new X.a,this.tabla2.groupField="Producto",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(function(a){t.sucursales=a,t.sucursalActual=t.sucursales[0],t.loader.close()},function(a){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"export",value:function(){var t=this.tabla1.data.map(function(t){return{Fecha:k(t.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Sucursal:t.sSucursal,Proveedor:t.sRazonSocial,Anulado:"T"==t.bAnulado?"Si":"No",Confirmado:"T"==t.bConfirmado?"Si":"No","Condici\xf3n Venta":t.sCondVenta,Total:t.rTotBruto}});this.servicioExportarExcel.exportExcel(t,"compras","compra")}},{key:"export2Detalle",value:function(){var t=this.tabla2.data.map(function(t){return{idcompra:t.idcompra,Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Fecha:k(t.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Totalcompra:t.rTotBruto,"Cond.compra":t.sCondcompra,"Cond.Pago":t.sCondPago,Carga:k(t.fCarga).format("DD/MM/YYYY hh:mm:ss"),"OperadorCreaci\xf3n":t.sOperadorCreacion,Comprobante:t.Comprobante,Anulado:"T"==t.bAnulado?"Si":"No",Total:t.rTotBruto,Cliente:t.sRazonSocial,CUIT:t.sCIOT,idProducto:t.idProducto,sCodProducto:t.sCodProducto,Producto:t.Producto,Costo:t.rCostoU,PrecioU:t.rPrecioU,Cantidad:t.rCantidad,Neto:t.rNeto,Descuentos:t.rDescuentos,Impuestos:t.rImpuestos,Familia:t.sFamilia,Proveedor:t.sProveedor,EAN:t.sEAN,EAN2:t.sEAN2,AlicIVA:t.rPorcIVA,AlicDGR:t.rPorcDGR,Interno:t.rValorImpInterno}});this.servicioExportarExcel.exportExcel(t,"compras_detalle","compras_detalle")}},{key:"export2Totales",value:function(){var t=this.tabla2.data.map(function(t){return{Producto:t.Producto,PV:t.idPV,EAN:t.sEAN,EAN2:t.sEAN2,Familia:t.sFamilia,Proveedor:t.sProveedor,Cantidad:t.rCantidad,PrecioU:t.rPrecioU,Total:t.rTotBruto}});this.servicioExportarExcel.exportExcel(t,"compras_detalle_totales","compras_detalle_totales")}},{key:"refresh",value:function(){var t=this;this.startDate.setHours(this.hours,this.minutes,0,0),this.endDate.setHours(this.hours2,this.minutes2,59,999),this.loader.open(),Object(W.a)([this.servicioCompras.obtenerDatosTabla1(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.id),this.servicioCompras.obtenerDatosTabla2(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.id)]).subscribe(function(a){console.log(a[0]),t.tabla1.setData(a[0].filter(function(){return!0})),t.tabla2.setData(a[1].filter(function(){return!0})),t.loader.close()},function(a){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"getRowHeight",value:function(t){return 50}},{key:"getCellClass",value:function(t){return{ngxgroup:t.row.isGroup}}},{key:"tabla1OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}},{key:"tabla2OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}},{key:"updateDate1",value:function(t){this.startDate=t.value.toDate()}},{key:"updateDate2",value:function(t){this.endDate=t.value.toDate()}},{key:"seleccionarSucursal",value:function(t){this.sucursalActual=t}},{key:"openPopUp",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loader.open(),this.servicioCompras.obtenerDatosCompras(a.id).subscribe(function(e){t.loader.close();var c="";0!=a.idPVCAEA&&(c="CAEA no informado.",a.fCAEAInformado&&(c="CAEA Informado el "+new Date(a.fCAEAInformado).toLocaleDateString())),t.dialog.open(P.a,{width:"720px",disableClose:!0,data:{title:"DETALLE DE COMPRA",payload:a,compraitems:e[0],compramovcaja:e[1],sleyendacaea:c}}).afterClosed().subscribe(function(t){})},function(a){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"openUserInfoPopUp",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(x.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}]),a}(),dt.\u0275fac=function(t){return new(t||dt)(I.Rb(p.b),I.Rb(R),I.Rb(w.a),I.Rb(T.a),I.Rb(O.a),I.Rb(g.a))},dt.\u0275cmp=I.Lb({type:dt,selectors:[["app-puchases-by-document"]],decls:97,vars:117,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker1",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","8",1,"m-8"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["picker2",""],[3,"value","selectionChange","valueChange"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","name","width"],["ngx-datatable-cell-template",""],[3,"name","width"],[4,"ngIf"],[3,"value"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(t,a){if(1&t&&(I.Xb(0,"mat-card",0),I.Xb(1,"div",1),I.Xb(2,"mat-form-field",2),I.Xb(3,"mat-label"),I.Oc(4),I.kc(5,"translate"),I.Wb(),I.Xb(6,"input",3),I.fc("dateChange",function(t){return a.updateDate1(t)}),I.Wb(),I.Sb(7,"mat-datepicker-toggle",4),I.Sb(8,"mat-datepicker",null,5),I.Wb(),I.Xb(10,"mat-form-field",6),I.Xb(11,"mat-label"),I.Oc(12),I.kc(13,"translate"),I.Wb(),I.Xb(14,"mat-select",7),I.fc("valueChange",function(t){return a.hours=t}),I.Mc(15,V,2,2,"mat-option",8),I.Wb(),I.Wb(),I.Xb(16,"mat-form-field",6),I.Xb(17,"mat-label"),I.Oc(18),I.kc(19,"translate"),I.Wb(),I.Xb(20,"mat-select",7),I.fc("valueChange",function(t){return a.minutes=t}),I.Mc(21,H,2,2,"mat-option",8),I.Wb(),I.Wb(),I.Xb(22,"mat-form-field",2),I.Xb(23,"mat-label"),I.Oc(24),I.kc(25,"translate"),I.Wb(),I.Xb(26,"input",3),I.fc("dateChange",function(t){return a.updateDate2(t)}),I.Wb(),I.Sb(27,"mat-datepicker-toggle",4),I.Sb(28,"mat-datepicker",null,9),I.Wb(),I.Xb(30,"mat-form-field",6),I.Xb(31,"mat-label"),I.Oc(32),I.kc(33,"translate"),I.Wb(),I.Xb(34,"mat-select",7),I.fc("valueChange",function(t){return a.hours2=t}),I.Mc(35,Y,2,2,"mat-option",8),I.Wb(),I.Wb(),I.Xb(36,"mat-form-field",6),I.Xb(37,"mat-label"),I.Oc(38),I.kc(39,"translate"),I.Wb(),I.Xb(40,"mat-select",7),I.fc("valueChange",function(t){return a.minutes2=t}),I.Mc(41,j,2,2,"mat-option",8),I.Wb(),I.Wb(),I.Xb(42,"mat-form-field",2),I.Xb(43,"mat-label"),I.Oc(44),I.kc(45,"translate"),I.Wb(),I.Xb(46,"mat-select",10),I.fc("selectionChange",function(t){return a.seleccionarSucursal(t.value)})("valueChange",function(t){return a.sucursalActual=t}),I.Mc(47,q,2,2,"mat-option",8),I.Wb(),I.Wb(),I.Xb(48,"button",11),I.fc("click",function(){return a.refresh()}),I.Xb(49,"mat-icon"),I.Oc(50,"search"),I.Wb(),I.Oc(51),I.kc(52,"translate"),I.Wb(),I.Wb(),I.Wb(),I.Xb(53,"mat-card",0),I.Xb(54,"mat-card-content",0),I.Xb(55,"ngx-datatable",12,13),I.fc("activate",function(t){return a.tabla1OnActivate(t)}),I.Xb(57,"ngx-datatable-column",14),I.kc(58,"translate"),I.Mc(59,B,2,4,"ng-template",15),I.Wb(),I.Xb(60,"ngx-datatable-column",14),I.kc(61,"translate"),I.Mc(62,G,1,1,"ng-template",15),I.Wb(),I.Xb(63,"ngx-datatable-column",14),I.kc(64,"translate"),I.Mc(65,Q,1,1,"ng-template",15),I.Wb(),I.Xb(66,"ngx-datatable-column",14),I.kc(67,"translate"),I.Mc(68,_,1,1,"ng-template",15),I.Wb(),I.Xb(69,"ngx-datatable-column",14),I.kc(70,"translate"),I.Mc(71,z,1,1,"ng-template",15),I.Wb(),I.Xb(72,"ngx-datatable-column",14),I.kc(73,"translate"),I.Mc(74,J,1,1,"ng-template",15),I.Wb(),I.Xb(75,"ngx-datatable-column",14),I.kc(76,"translate"),I.Mc(77,Z,2,2,"ng-template",15),I.Wb(),I.Xb(78,"ngx-datatable-column",14),I.kc(79,"translate"),I.Mc(80,et,2,2,"ng-template",15),I.Wb(),I.Xb(81,"ngx-datatable-column",14),I.kc(82,"translate"),I.Mc(83,ct,1,1,"ng-template",15),I.Wb(),I.Xb(84,"ngx-datatable-column",14),I.kc(85,"translate"),I.Mc(86,nt,2,3,"ng-template",15),I.Wb(),I.Xb(87,"ngx-datatable-column",14),I.kc(88,"translate"),I.Mc(89,ot,2,3,"ng-template",15),I.Wb(),I.Xb(90,"ngx-datatable-column",14),I.kc(91,"translate"),I.Mc(92,it,2,2,"ng-template",15),I.Wb(),I.Xb(93,"ngx-datatable-column",16),I.kc(94,"translate"),I.Mc(95,bt,2,2,"ng-template",15),I.Wb(),I.Mc(96,ft,2,0,"ngx-datatable-footer",17),I.Wb(),I.Wb(),I.Wb()),2&t){var e=I.Ac(9),c=I.Ac(29);I.Eb(4),I.Pc(I.lc(5,72,"SALES.STARTDATE")),I.Eb(2),I.pc("matDatepicker",e)("value",a.startDate),I.Eb(1),I.pc("for",e),I.Eb(5),I.Pc(I.lc(13,74,"SALES.HOUR")),I.Eb(2),I.pc("value",a.hours),I.Eb(1),I.pc("ngForOf",a.hoursArr),I.Eb(3),I.Pc(I.lc(19,76,"SALES.MINUTES")),I.Eb(2),I.pc("value",a.minutes),I.Eb(1),I.pc("ngForOf",a.minutesArr),I.Eb(3),I.Pc(I.lc(25,78,"SALES.ENDDATE")),I.Eb(2),I.pc("matDatepicker",c)("value",a.endDate),I.Eb(1),I.pc("for",c),I.Eb(5),I.Pc(I.lc(33,80,"SALES.HOUR")),I.Eb(2),I.pc("value",a.hours2),I.Eb(1),I.pc("ngForOf",a.hoursArr),I.Eb(3),I.Pc(I.lc(39,82,"SALES.MINUTES")),I.Eb(2),I.pc("value",a.minutes2),I.Eb(1),I.pc("ngForOf",a.minutesArr),I.Eb(3),I.Pc(I.lc(45,84,"SALES.BRANCH")),I.Eb(2),I.pc("value",a.sucursalActual),I.Eb(1),I.pc("ngForOf",a.sucursales),I.Eb(4),I.Pc(I.lc(52,86,"SALES.SHOW")),I.Eb(2),I.pc("@animate",I.vc(115,Ct,I.uc(114,gt))),I.Eb(2),I.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",a.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",a.tabla1.rows)("selectionType","single"),I.Eb(2),I.qc("name",I.lc(58,88,"SALES.DATE")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(61,90,"SALES.TYPE")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(64,92,"SALES.PV")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(67,94,"SALES.NUMBER")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(70,96,"Sucursal")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(73,98,"Proveedor")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(76,100,"SALES.CANCELED")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(79,102,"Confirmado")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(82,104,"SALES.SALESCONDITION")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(85,106,"SALES.DISCOUNTS")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(88,108,"SALES.TOTAL")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(91,110,"Afecta Stock")),I.pc("cellClass",a.getCellClass)("width",150),I.Eb(3),I.qc("name",I.lc(94,112,"SALES.ACTIONS")),I.pc("width",150),I.Eb(3),I.pc("ngIf",a.tabla1.data.length>0)}},directives:[u.a,L.c,L.b,N.c,L.a,N.f,f.b,U.b,U.d,N.h,U.a,d.a,r.n,s.b,m.a,u.b,S.d,S.b,S.a,r.o,F.n,S.e,S.c],pipes:[E.c,r.f,r.d],styles:[""],data:{animation:[D.a]}}),dt),data:{title:"Por Documento"}}],Et=n("iInd"),St=n("BxcV"),At=((ht=function a(){t(this,a)}).\u0275mod=I.Pb({type:ht}),ht.\u0275inj=I.Ob({factory:function(t){return new(t||ht)},imports:[[r.c,i.s,l.a,S.f,f.c,f.c,u.c,f.c,s.c,b.a,f.c,v.b,p.e,g.b,h.b,C.c,d.b,m.b,E.b,A.a,U.c,St.a,Et.k.forChild(vt)]]}),ht)}}])}();