!function(){function a(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function t(a,t){for(var e=0;e<t.length;e++){var c=t[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}}function e(a,e,c){return e&&t(a.prototype,e),c&&t(a,c),a}(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"vpF/":function(t,c,n){"use strict";n.r(c),n.d(c,"PuchasesByProductModule",function(){return Aa});var o,l=n("SVse"),r=n("HeVh"),i=n("s7LF"),s=n("GmJt"),u=n("3sEA"),b=n("wd/R"),d=n("cp0P"),f=n("bPAe"),p=n("CHRX"),m=n("i59u"),g=n("UVsP"),h=n("Ap+n"),v=n("AytR"),C=n("8Y7J"),E=n("IheW"),x=((o=function(){function t(e){a(this,t),this.http=e}return e(t,[{key:"obtenerDatosTabla1",value:function(a,t,e){var c="".concat(v.a.apiURL,"Compras/DocumentosDeComprasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t);return e&&(c="".concat(v.a.apiURL,"Compras/DocumentosDeComprasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t,"&idsucursal=").concat(e)),this.http.get(encodeURI(c))}},{key:"obtenerDatosTabla2",value:function(a,t,e){var c="".concat(v.a.apiURL,"Compras/DetalleDeComprasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t);return e&&(c="".concat(v.a.apiURL,"Compras/DetalleDeComprasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t,"&idsucursal=").concat(e)),this.http.get(encodeURI(c))}},{key:"obtenerDatosCompras",value:function(a){return Object(d.a)([this.http.get(encodeURI("".concat(v.a.apiURL,"ComprasItems/DetalleDeComprasPorId?idCompras=").concat(a))),this.http.get(encodeURI("".concat(v.a.apiURL,"Compras/DetalleDeMovCajaCompras?idCompras=").concat(a)))])}}]),t}()).\u0275fac=function(a){return new(a||o)(C.bc(E.c))},o.\u0275prov=C.Nb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),S=n("iELJ"),O=n("zHaW"),k=n("PDjf"),w=n("VDRc"),D=n("Q2Ze"),M=n("e6WT"),A=n("+Wi0"),L=n("TN/R"),y=n("ZTz/"),X=n("Dxy4"),I=n("Tj54"),P=n("w9WL"),T=n("UhP/"),R=n("TSSN");function W(a,t){if(1&a&&(C.Xb(0,"mat-option",16),C.Oc(1),C.Wb()),2&a){var e=t.$implicit;C.pc("value",e),C.Eb(1),C.Pc(null==e?null:e.nombre)}}function U(a,t){if(1&a&&C.Oc(0),2&a){var e=t.row;C.Qc(" ",null==e?null:e.Producto," ")}}function F(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,U,1,1,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"SALES.PRODUCT")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function j(a,t){if(1&a&&(C.Oc(0),C.kc(1,"date")),2&a){var e=t.row;C.Qc(" ",C.mc(1,1,null==e?null:e.fDocumento,"dd/MM/yyyy HH:mm:ss")," ")}}function N(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,j,2,4,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"Fecha")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function V(a,t){if(1&a&&C.Oc(0),2&a){var e=t.row;C.Qc(" ",null==e?null:e.idPV," ")}}function H(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,V,1,1,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"PV")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function G(a,t){if(1&a&&C.Oc(0),2&a){var e=t.row;C.Qc(" ",null==e?null:e.Comprobante," ")}}function Q(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,G,1,1,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"SALES.RECEIPT")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function q(a,t){if(1&a&&C.Oc(0),2&a){var e=t.row;C.Qc(" ",null==e?null:e.Sucursal," ")}}function Y(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,q,1,1,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"Sucursal")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function _(a,t){if(1&a&&C.Oc(0),2&a){var e=t.row;C.Qc(" ",null==e?null:e.sEAN," ")}}function B(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,_,1,1,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"SALES.EAN")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function J(a,t){if(1&a&&C.Oc(0),2&a){var e=t.row;C.Qc(" ",null==e?null:e.sFamilia," ")}}function z(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,J,1,1,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"SALES.FAMILY")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function K(a,t){if(1&a&&C.Oc(0),2&a){var e=t.row;C.Qc(" ",null==e?null:e.sProveedor," ")}}function Z(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,K,1,1,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"SALES.PROVIDER")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function $(a,t){1&a&&(C.Xb(0,"span"),C.Oc(1,"Si"),C.Wb())}function aa(a,t){1&a&&(C.Xb(0,"span"),C.Oc(1,"No"),C.Wb())}function ta(a,t){if(1&a&&(C.Mc(0,$,2,0,"span",15),C.Mc(1,aa,2,0,"span",15)),2&a){var e=t.row;C.pc("ngIf","T"==(null==e?null:e.bAnulado)),C.Eb(1),C.pc("ngIf","F"==(null==e?null:e.bAnulado))}}function ea(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,ta,2,2,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"Anulado")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ca(a,t){if(1&a&&(C.Oc(0),C.kc(1,"number")),2&a){var e=t.row;C.Qc(" ",C.lc(1,1,null==e?null:e.rCantidad)," ")}}function na(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,ca,2,3,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"Cantidad")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function oa(a,t){if(1&a&&(C.Oc(0),C.kc(1,"currency")),2&a){var e=t.row;C.Qc(" ",C.lc(1,1,null==e?null:e.rPrecioU)," ")}}function la(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,oa,2,3,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"SALES.PRICE")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ra(a,t){if(1&a&&(C.Oc(0),C.kc(1,"currency")),2&a){var e=t.row;C.Qc(" ",C.lc(1,1,null==e?null:e.rTotal)," ")}}function ia(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,ra,2,3,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"Total")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function sa(a,t){if(1&a&&C.Oc(0),2&a){var e=t.row;C.Qc(" ",null==e?null:e.sOperadorCreacion," ")}}function ua(a,t){if(1&a&&(C.Xb(0,"ngx-datatable-column",17),C.kc(1,"translate"),C.Mc(2,sa,1,1,"ng-template",18),C.Wb()),2&a){var e=C.jc();C.qc("name",C.lc(1,3,"Operador")),C.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ba(a,t){if(1&a){var e=C.Yb();C.Xb(0,"button",11),C.fc("click",function(){return C.Dc(e),C.jc(3).export2Totales()}),C.Xb(1,"mat-icon"),C.Oc(2,"save_alt"),C.Wb(),C.Oc(3),C.kc(4,"translate"),C.Wb()}2&a&&(C.Eb(3),C.Qc("",C.lc(4,1,"SALES.EXCELTOTALS")," "))}function da(a,t){if(1&a){var e=C.Yb();C.Xb(0,"button",11),C.fc("click",function(){return C.Dc(e),C.jc(3).export2Detalle()}),C.Xb(1,"mat-icon"),C.Oc(2,"save_alt"),C.Wb(),C.Oc(3),C.kc(4,"translate"),C.Wb()}2&a&&(C.Eb(3),C.Qc("",C.lc(4,1,"SALES.EXCELDETAILS")," "))}function fa(a,t){if(1&a&&(C.Xb(0,"div",20),C.Xb(1,"div"),C.Xb(2,"strong"),C.Oc(3),C.kc(4,"translate"),C.Wb(),C.Wb(),C.Sb(5,"hr",21),C.Xb(6,"div"),C.Oc(7),C.kc(8,"translate"),C.kc(9,"number"),C.kc(10,"translate"),C.kc(11,"currency"),C.Wb(),C.Wb(),C.Xb(12,"div",22),C.Mc(13,ba,5,3,"button",23),C.Mc(14,da,5,3,"button",23),C.Wb()),2&a){var e=C.jc(2);C.Eb(3),C.Pc(C.lc(4,8,"SALES.FOOTERTOTALS")),C.Eb(4),C.Uc("",e.tabla2.footer.Producto," | ",C.lc(8,10,"SALES.QUANTITY"),": ",C.lc(9,12,e.tabla2.footer.rCantidad)," | ",C.lc(10,14,"SALES.AMOUNT"),": ",C.lc(11,16,e.tabla2.footer.rTotal)," "),C.Eb(6),C.pc("ngIf",e.tabla2.data.length>0),C.Eb(1),C.pc("ngIf",e.tabla2.data.length>0)}}function pa(a,t){1&a&&(C.Xb(0,"ngx-datatable-footer"),C.Mc(1,fa,15,18,"ng-template",19),C.Wb())}var ma,ga,ha=function(){return{y:"50px",delay:"300ms"}},va=function(a){return{value:"*",params:a}},Ca=[{path:"",component:(ma=function(){function t(e,c,n,o,l,r,s){a(this,t),this.dialog=e,this.servicioCompras=c,this.servicioExportarExcel=n,this.servicioSucursales=o,this.loader=l,this.snack=r,this.breakpointObserver=s,this.startDate=new i.e,this.endDate=new i.e}return e(t,[{key:"ngOnInit",value:function(){var a=this,t=new Date;t.setHours(0,0,0,0);var e=new Date;e.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(e),this.tabla1=new p.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new p.a,this.tabla2.groupField="Producto",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(function(t){a.sucursales=t,a.sucursalActual=a.sucursales[0],a.loader.close()},function(t){a.loader.close(),a.snack.open("ERROR","OK",{duration:4e3})}),this.breakpointObserver.observe([r.b.XSmall,r.b.Small,r.b.Medium,r.b.Large,r.b.XLarge]).subscribe(function(t){a.isXSmall=a.breakpointObserver.isMatched(r.b.XSmall),a.isSmall=a.breakpointObserver.isMatched(r.b.Small),a.isMedium=a.breakpointObserver.isMatched(r.b.Medium),a.isLarge=a.breakpointObserver.isMatched(r.b.Large),a.isXLarge=a.breakpointObserver.isMatched(r.b.XLarge)})}},{key:"mostrarOcultar",value:function(a){switch(a){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}},{key:"export",value:function(){var a=this.tabla1.data.map(function(a){return{Fecha:b(a.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Tipo:a.idTipoDoc,PV:a.idPV,Numero:a.idNumDoc,Cliente:a.sRazonSocial,Domicilio:a.sDomicilio,"Condici\xf3n IVA":a.sCondicionIVA,Anulado:"T"==a.bAnulado?"Si":"No","Condici\xf3n compra":a.sCondcompra,Total:a.rTotBruto,Operador:a.sOperadorCreacion,Vendedor:a.sVendedor}});this.servicioExportarExcel.exportExcel(a,"compras","compra")}},{key:"export2Detalle",value:function(){var a=this.tabla2.data.map(function(a){return{Producto:a.Producto,Fecha:b(a.fDocumento).format("DD/MM/YYYY hh:mm:ss"),PV:a.idPV,Sucursal:a.Sucursal,EAN:a.sEAN,EAN2:a.sEAN2,Familia:a.sFamilia,Proveedor:a.sProveedor,Confirmado:"T"==a.bConfirmado?"Si":"No",Cantidad:a.rCantidad,PrecioU:a.rPrecioU,Importe:a.rTotal,"OperadorCreaci\xf3n":a.sOperadorCreacion}});this.servicioExportarExcel.exportExcel(a,"compras_detalle","compras_detalle")}},{key:"export2Totales",value:function(){var a=this.tabla2.data.map(function(a){return{Producto:a.Producto,PV:a.idPV,EAN:a.sEAN,EAN2:a.sEAN2,Familia:a.sFamilia,Proveedor:a.sProveedor,Cantidad:a.rCantidad,PrecioU:a.rPrecioU,Total:a.rTotal}});this.servicioExportarExcel.exportExcel(a,"compras_detalle_totales","compras_detalle_totales")}},{key:"refresh",value:function(){var a=this;this.loader.open(),Object(d.a)([this.servicioCompras.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id),this.servicioCompras.obtenerDatosTabla2(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id)]).subscribe(function(t){console.log(t[1]),a.tabla1.setData(t[0].filter(function(){return!0})),a.tabla2.setData(t[1].filter(function(){return!0})),a.loader.close()},function(t){a.loader.close(),a.snack.open("ERROR","OK",{duration:4e3})})}},{key:"getRowHeight",value:function(a){return 50}},{key:"getCellClass",value:function(a){return{ngxgroup:a.row.isGroup}}},{key:"tabla1OnActivate",value:function(a){"click"==a.type&&a.row.isGroup&&this.tabla1.setGroup(a.row)}},{key:"tabla2OnActivate",value:function(a){"click"==a.type&&a.row.isGroup&&this.tabla2.setGroup(a.row)}},{key:"updateDate1",value:function(a){this.startDate=a.value.toDate()}},{key:"updateDate2",value:function(a){this.endDate=a.value.toDate()}},{key:"seleccionarSucursal",value:function(a){this.sucursalActual=a}},{key:"openPopUp",value:function(){var a=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loader.open(),this.servicioCompras.obtenerDatosCompras(t.id).subscribe(function(e){a.loader.close();var c="";0!=t.idPVCAEA&&(c="CAEA no informado.",t.fCAEAInformado&&(c="CAEA Informado el "+new Date(t.fCAEAInformado).toLocaleDateString())),a.dialog.open(m.a,{width:"720px",disableClose:!0,data:{title:"DETALLE DE COMPRA",payload:t,compraitems:e[0],compramovcaja:e[1],sleyendacaea:c}}).afterClosed().subscribe(function(a){})},function(t){a.loader.close(),a.snack.open("ERROR","OK",{duration:4e3})})}},{key:"openUserInfoPopUp",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(h.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:a}})}}]),t}(),ma.\u0275fac=function(a){return new(a||ma)(C.Rb(S.b),C.Rb(x),C.Rb(f.a),C.Rb(g.a),C.Rb(u.a),C.Rb(O.a),C.Rb(r.a))},ma.\u0275cmp=C.Lb({type:ma,selectors:[["app-puchases-by-product"]],decls:43,vars:66,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","name","flexGrow",4,"ngIf"],[4,"ngIf"],[3,"value"],[3,"cellClass","name","flexGrow"],["ngx-datatable-cell-template",""],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(a,t){if(1&a&&(C.Xb(0,"mat-card",0),C.Xb(1,"div",1),C.Xb(2,"mat-form-field",2),C.Sb(3,"input",3),C.kc(4,"translate"),C.Sb(5,"mat-datepicker-toggle",4),C.Sb(6,"ngx-mat-datetime-picker",5,6),C.Wb(),C.Xb(8,"mat-form-field",2),C.Sb(9,"input",3),C.kc(10,"translate"),C.Sb(11,"mat-datepicker-toggle",4),C.Sb(12,"ngx-mat-datetime-picker",5,7),C.Wb(),C.Xb(14,"mat-form-field",8),C.Xb(15,"mat-label"),C.Oc(16),C.kc(17,"translate"),C.Wb(),C.Xb(18,"mat-select",9),C.fc("selectionChange",function(a){return t.seleccionarSucursal(a.value)})("valueChange",function(a){return t.sucursalActual=a}),C.Mc(19,W,2,2,"mat-option",10),C.Wb(),C.Wb(),C.Xb(20,"button",11),C.fc("click",function(){return t.refresh()}),C.Xb(21,"mat-icon"),C.Oc(22,"search"),C.Wb(),C.Oc(23),C.kc(24,"translate"),C.Wb(),C.Wb(),C.Wb(),C.Xb(25,"mat-card",0),C.Xb(26,"mat-card-content",0),C.Xb(27,"ngx-datatable",12,13),C.fc("activate",function(a){return t.tabla2OnActivate(a)}),C.Mc(29,F,3,5,"ngx-datatable-column",14),C.Mc(30,N,3,5,"ngx-datatable-column",14),C.Mc(31,H,3,5,"ngx-datatable-column",14),C.Mc(32,Q,3,5,"ngx-datatable-column",14),C.Mc(33,Y,3,5,"ngx-datatable-column",14),C.Mc(34,B,3,5,"ngx-datatable-column",14),C.Mc(35,z,3,5,"ngx-datatable-column",14),C.Mc(36,Z,3,5,"ngx-datatable-column",14),C.Mc(37,ea,3,5,"ngx-datatable-column",14),C.Mc(38,na,3,5,"ngx-datatable-column",14),C.Mc(39,la,3,5,"ngx-datatable-column",14),C.Mc(40,ia,3,5,"ngx-datatable-column",14),C.Mc(41,ua,3,5,"ngx-datatable-column",14),C.Mc(42,pa,2,0,"ngx-datatable-footer",15),C.Wb(),C.Wb(),C.Wb()),2&a){var e=C.Ac(7),c=C.Ac(13);C.Eb(3),C.qc("placeholder",C.lc(4,55,"SALES.STARTDATE")),C.pc("ngxMatDatetimePicker",e)("formControl",t.startDate),C.Eb(2),C.pc("for",e),C.Eb(1),C.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),C.Eb(3),C.qc("placeholder",C.lc(10,57,"SALES.ENDDATE")),C.pc("ngxMatDatetimePicker",c)("formControl",t.endDate),C.Eb(2),C.pc("for",c),C.Eb(1),C.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),C.Eb(4),C.Pc(C.lc(17,59,"SALES.BRANCH")),C.Eb(2),C.pc("value",t.sucursalActual),C.Eb(1),C.pc("ngForOf",t.sucursales),C.Eb(4),C.Qc("",C.lc(24,61,"SALES.SHOW")," "),C.Eb(2),C.pc("@animate",C.vc(64,va,C.uc(63,ha))),C.Eb(2),C.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",t.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",t.tabla2.rows)("selectionType","single"),C.Eb(2),C.pc("ngIf",t.mostrarOcultar("XS")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("XS")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("XS")),C.Eb(1),C.pc("ngIf",t.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",t.tabla2.data.length>0)}},directives:[k.a,w.c,w.b,D.c,M.b,A.a,i.c,i.o,i.f,L.h,D.h,A.b,w.a,D.f,y.a,l.n,X.b,I.a,k.b,P.d,l.o,T.n,P.b,P.a,P.e,P.c],pipes:[R.c,l.f,l.g,l.d],styles:[""],data:{animation:[s.a]}}),ma),data:{title:"Por Producto"}}],Ea=n("u9T3"),xa=n("f44v"),Sa=n("jMqV"),Oa=n("M9ds"),ka=n("ZFy/"),wa=n("iInd"),Da=n("PCNd"),Ma=n("BxcV"),Aa=((ga=function t(){a(this,t)}).\u0275mod=C.Pb({type:ga}),ga.\u0275inj=C.Ob({factory:function(a){return new(a||ga)},imports:[[l.c,i.t,Ea.a,P.f,M.c,M.c,k.c,M.c,X.c,xa.a,M.c,ka.b,S.f,O.b,Sa.b,Oa.c,y.b,I.b,R.b,Da.a,L.g,Ma.a,A.c,A.e,A.d,i.j,wa.k.forChild(Ca)]]}),ga)}}])}();