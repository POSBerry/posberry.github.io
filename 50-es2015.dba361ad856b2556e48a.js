(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{m5ja:function(t,a,e){"use strict";e.r(a),e.d(a,"PuchasesByDocumentModule",function(){return It});var c=e("SVse"),o=e("u9T3"),n=e("s7LF"),l=e("Dxy4"),r=e("PDjf"),s=e("f44v"),i=e("iELJ"),u=e("Tj54"),b=e("e6WT"),p=e("ZTz/"),d=e("jMqV"),m=e("zHaW"),f=e("M9ds"),h=e("ZFy/"),g=e("TSSN"),C=e("w9WL"),S=e("PCNd"),E=e("HeVh"),x=e("GmJt"),D=e("3sEA"),O=e("wd/R"),A=e("cp0P"),M=e("bPAe"),w=e("CHRX"),v=e("i59u"),I=e("UVsP"),k=e("Ap+n"),T=e("AytR"),X=e("8Y7J"),L=e("IheW");let P=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,a,e){let c=`${T.a.apiURL}Compras/DocumentosDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}`;return e&&(c=`${T.a.apiURL}Compras/DocumentosDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}&idsucursal=${e}`),this.http.get(encodeURI(c))}obtenerDatosTabla2(t,a,e){let c=`${T.a.apiURL}Compras/DetalleDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}`;return e&&(c=`${T.a.apiURL}Compras/DetalleDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}&idsucursal=${e}`),this.http.get(encodeURI(c))}obtenerDatosCompras(t){return Object(A.a)([this.http.get(encodeURI(`${T.a.apiURL}ComprasItems/DetalleDeComprasPorId?idCompras=${t}`)),this.http.get(encodeURI(`${T.a.apiURL}Compras/DetalleDeMovCajaCompras?idCompras=${t}`))])}}return t.\u0275fac=function(a){return new(a||t)(X.bc(L.c))},t.\u0275prov=X.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var W=e("VDRc"),R=e("Q2Ze"),N=e("n1FK"),y=e("TN/R"),U=e("UhP/");function j(t,a){if(1&t&&(X.Xb(0,"mat-option",17),X.Oc(1),X.Wb()),2&t){const t=a.$implicit;X.pc("value",t),X.Eb(1),X.Pc(null==t?null:t.nombre)}}function F(t,a){if(1&t&&(X.Oc(0),X.kc(1,"date")),2&t){const t=a.row;X.Qc(" ",X.mc(1,1,null==t?null:t.fDocumento,"dd/MM/yyyy HH:mm:ss")," ")}}function G(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,F,2,4,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"SALES.DATE")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function V(t,a){if(1&t&&X.Oc(0),2&t){const t=a.row;X.Qc(" ",null==t?null:t.idTipoDoc," ")}}function H(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,V,1,1,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"SALES.TYPE")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function $(t,a){if(1&t&&X.Oc(0),2&t){const t=a.row;X.Qc(" ",null==t?null:t.idPV," ")}}function Y(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,$,1,1,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"SALES.PV")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function q(t,a){if(1&t&&X.Oc(0),2&t){const t=a.row;X.Qc(" ",null==t?null:t.idNumDoc," ")}}function B(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,q,1,1,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"SALES.NUMBER")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function Q(t,a){if(1&t&&X.Oc(0),2&t){const t=a.row;X.Qc(" ",null==t?null:t.sSucursal," ")}}function _(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,Q,1,1,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"Sucursal")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function z(t,a){if(1&t&&X.Oc(0),2&t){const t=a.row;X.Qc(" ",null==t?null:t.sRazonSocial," ")}}function J(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,z,1,1,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"Proveedor")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function K(t,a){1&t&&(X.Xb(0,"span"),X.Oc(1,"Si"),X.Wb())}function Z(t,a){1&t&&(X.Xb(0,"span"),X.Oc(1,"No"),X.Wb())}function tt(t,a){if(1&t&&(X.Mc(0,K,2,0,"span",16),X.Mc(1,Z,2,0,"span",16)),2&t){const t=a.row;X.pc("ngIf","T"==(null==t?null:t.bAnulado)),X.Eb(1),X.pc("ngIf","F"==(null==t?null:t.bAnulado))}}function at(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,tt,2,2,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"SALES.CANCELED")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function et(t,a){1&t&&(X.Xb(0,"span"),X.Oc(1,"Si"),X.Wb())}function ct(t,a){1&t&&(X.Xb(0,"span"),X.Oc(1,"No"),X.Wb())}function ot(t,a){if(1&t&&(X.Mc(0,et,2,0,"span",16),X.Mc(1,ct,2,0,"span",16)),2&t){const t=a.row;X.pc("ngIf","T"==(null==t?null:t.bConfirmado)),X.Eb(1),X.pc("ngIf","F"==(null==t?null:t.bConfirmado))}}function nt(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,ot,2,2,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"Confirmado")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function lt(t,a){if(1&t&&X.Oc(0),2&t){const t=a.row;X.Qc(" ",null==t?null:t.sCondVenta," ")}}function rt(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,lt,1,1,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"SALES.SALESCONDITION")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function st(t,a){if(1&t&&(X.Oc(0),X.kc(1,"currency")),2&t){const t=a.row;X.Qc(" ",X.lc(1,1,null==t?null:t.rTotDescuento)," ")}}function it(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,st,2,3,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"SALES.DISCOUNTS")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function ut(t,a){if(1&t&&(X.Oc(0),X.kc(1,"currency")),2&t){const t=a.row;X.Qc(" ",X.lc(1,1,null==t?null:t.rTotBruto)," ")}}function bt(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,ut,2,3,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"SALES.TOTAL")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function pt(t,a){1&t&&(X.Xb(0,"span"),X.Oc(1,"Si"),X.Wb())}function dt(t,a){1&t&&(X.Xb(0,"span"),X.Oc(1,"No"),X.Wb())}function mt(t,a){if(1&t&&(X.Mc(0,pt,2,0,"span",16),X.Mc(1,dt,2,0,"span",16)),2&t){const t=a.row;X.pc("ngIf","T"==(null==t?null:t.bAfectaStock)),X.Eb(1),X.pc("ngIf","F"==(null==t?null:t.bAfectaStock))}}function ft(t,a){if(1&t&&(X.Xb(0,"ngx-datatable-column",18),X.kc(1,"translate"),X.Mc(2,mt,2,2,"ng-template",19),X.Wb()),2&t){const t=X.jc();X.qc("name",X.lc(1,3,"Afecta Stock")),X.pc("cellClass",t.getCellClass)("flexGrow",1)}}function ht(t,a){if(1&t){const t=X.Yb();X.Xb(0,"button",22),X.fc("click",function(){X.Dc(t);const a=X.jc().row;return X.jc(2).openPopUp(a)}),X.Xb(1,"mat-icon"),X.Oc(2,"info"),X.Wb(),X.Wb()}}function gt(t,a){if(1&t){const t=X.Yb();X.Xb(0,"button",22),X.fc("click",function(){X.Dc(t);const a=X.jc().row;return X.jc(2).openUserInfoPopUp(a)}),X.Xb(1,"mat-icon"),X.Oc(2,"person_pin"),X.Wb(),X.Wb()}}function Ct(t,a){if(1&t&&(X.Mc(0,ht,3,0,"button",21),X.Mc(1,gt,3,0,"button",21)),2&t){const t=a.row;X.pc("ngIf",!t.isGroup),X.Eb(1),X.pc("ngIf",!t.isGroup)}}function St(t,a){1&t&&(X.Xb(0,"ngx-datatable-column",20),X.kc(1,"translate"),X.Mc(2,Ct,2,2,"ng-template",19),X.Wb()),2&t&&(X.qc("name",X.lc(1,3,"SALES.ACTIONS")),X.pc("flexGrow",1)("minWidth",50))}function Et(t,a){if(1&t){const t=X.Yb();X.Xb(0,"button",11),X.fc("click",function(){return X.Dc(t),X.jc(3).export()}),X.Xb(1,"mat-icon"),X.Oc(2,"save_alt"),X.Wb(),X.Oc(3),X.kc(4,"translate"),X.Wb()}2&t&&(X.Eb(3),X.Pc(X.lc(4,1,"SALES.EXCEL")))}function xt(t,a){if(1&t&&(X.Xb(0,"div",24),X.Xb(1,"div"),X.Xb(2,"strong"),X.Oc(3),X.kc(4,"translate"),X.Wb(),X.Wb(),X.Sb(5,"hr",25),X.Xb(6,"div"),X.Oc(7),X.kc(8,"translate"),X.kc(9,"currency"),X.kc(10,"translate"),X.kc(11,"currency"),X.Wb(),X.Wb(),X.Xb(12,"div",26),X.Mc(13,Et,5,3,"button",27),X.Wb()),2&t){const t=X.jc(2);X.Eb(3),X.Pc(X.lc(4,7,"SALES.FOOTERTOTALS")),X.Eb(4),X.Uc("",t.tabla1.footer.count," | ",X.lc(8,9,"SALES.TOTAL"),": ",X.lc(9,11,t.tabla1.footer.rTotBruto)," | ",X.lc(10,13,"SALES.DISCOUNTS"),": ",X.lc(11,15,t.tabla1.footer.rTotDescuento),""),X.Eb(6),X.pc("ngIf",t.tabla1.data.length>0)}}function Dt(t,a){1&t&&(X.Xb(0,"ngx-datatable-footer"),X.Mc(1,xt,14,17,"ng-template",23),X.Wb())}const Ot=function(){return{y:"50px",delay:"300ms"}},At=function(t){return{value:"*",params:t}},Mt=[{path:"",component:(()=>{class t{constructor(t,a,e,c,o,l,r){this.dialog=t,this.servicioCompras=a,this.servicioExportarExcel=e,this.servicioSucursales=c,this.loader=o,this.snack=l,this.breakpointObserver=r,this.startDate=new n.e,this.endDate=new n.e}ngOnInit(){var t=new Date;t.setHours(0,0,0,0);var a=new Date;a.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(a),this.tabla1=new w.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new w.a,this.tabla2.groupField="Producto",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.breakpointObserver.observe([E.b.XSmall,E.b.Small,E.b.Medium,E.b.Large,E.b.XLarge]).subscribe(t=>{this.isXSmall=this.breakpointObserver.isMatched(E.b.XSmall),this.isSmall=this.breakpointObserver.isMatched(E.b.Small),this.isMedium=this.breakpointObserver.isMatched(E.b.Medium),this.isLarge=this.breakpointObserver.isMatched(E.b.Large),this.isXLarge=this.breakpointObserver.isMatched(E.b.XLarge)})}mostrarOcultar(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}export(){var t=this.tabla1.data.map(t=>({Fecha:O(t.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Sucursal:t.sSucursal,Proveedor:t.sRazonSocial,Anulado:"T"==t.bAnulado?"Si":"No",Confirmado:"T"==t.bConfirmado?"Si":"No","Condici\xf3n Venta":t.sCondVenta,Total:t.rTotBruto}));this.servicioExportarExcel.exportExcel(t,"compras","compra")}export2Detalle(){var t=this.tabla2.data.map(t=>({idcompra:t.idcompra,Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Fecha:O(t.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Totalcompra:t.rTotBruto,"Cond.compra":t.sCondcompra,"Cond.Pago":t.sCondPago,Carga:O(t.fCarga).format("DD/MM/YYYY hh:mm:ss"),OperadorCreaci\u00f3n:t.sOperadorCreacion,Comprobante:t.Comprobante,Anulado:"T"==t.bAnulado?"Si":"No",Total:t.rTotBruto,Cliente:t.sRazonSocial,CUIT:t.sCIOT,idProducto:t.idProducto,sCodProducto:t.sCodProducto,Producto:t.Producto,Costo:t.rCostoU,PrecioU:t.rPrecioU,Cantidad:t.rCantidad,Neto:t.rNeto,Descuentos:t.rDescuentos,Impuestos:t.rImpuestos,Familia:t.sFamilia,Proveedor:t.sProveedor,EAN:t.sEAN,EAN2:t.sEAN2,AlicIVA:t.rPorcIVA,AlicDGR:t.rPorcDGR,Interno:t.rValorImpInterno}));this.servicioExportarExcel.exportExcel(t,"compras_detalle","compras_detalle")}export2Totales(){var t=this.tabla2.data.map(t=>({Producto:t.Producto,PV:t.idPV,EAN:t.sEAN,EAN2:t.sEAN2,Familia:t.sFamilia,Proveedor:t.sProveedor,Cantidad:t.rCantidad,PrecioU:t.rPrecioU,Total:t.rTotBruto}));this.servicioExportarExcel.exportExcel(t,"compras_detalle_totales","compras_detalle_totales")}refresh(){this.loader.open(),Object(A.a)([this.servicioCompras.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id),this.servicioCompras.obtenerDatosTabla2(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id)]).subscribe(t=>{console.log(t[0]),this.tabla1.setData(t[0].filter(()=>!0)),this.tabla2.setData(t[1].filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla1OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}openPopUp(t={}){this.loader.open(),this.servicioCompras.obtenerDatosCompras(t.id).subscribe(a=>{this.loader.close();var e="";0!=t.idPVCAEA&&(e="CAEA no informado.",t.fCAEAInformado&&(e="CAEA Informado el "+new Date(t.fCAEAInformado).toLocaleDateString())),this.dialog.open(v.a,{width:"720px",disableClose:!0,data:{title:"DETALLE DE COMPRA",payload:t,compraitems:a[0],compramovcaja:a[1],sleyendacaea:e}}).afterClosed().subscribe(t=>{})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}openUserInfoPopUp(t={}){this.dialog.open(k.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(a){return new(a||t)(X.Rb(i.b),X.Rb(P),X.Rb(M.a),X.Rb(I.a),X.Rb(D.a),X.Rb(m.a),X.Rb(E.a))},t.\u0275cmp=X.Lb({type:t,selectors:[["app-puchases-by-document"]],decls:43,vars:66,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","name","flexGrow",4,"ngIf"],[3,"name","flexGrow","minWidth",4,"ngIf"],[4,"ngIf"],[3,"value"],[3,"cellClass","name","flexGrow"],["ngx-datatable-cell-template",""],[3,"name","flexGrow","minWidth"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(t,a){if(1&t&&(X.Xb(0,"mat-card",0),X.Xb(1,"div",1),X.Xb(2,"mat-form-field",2),X.Sb(3,"input",3),X.kc(4,"translate"),X.Sb(5,"mat-datepicker-toggle",4),X.Sb(6,"ngx-mat-datetime-picker",5,6),X.Wb(),X.Xb(8,"mat-form-field",2),X.Sb(9,"input",3),X.kc(10,"translate"),X.Sb(11,"mat-datepicker-toggle",4),X.Sb(12,"ngx-mat-datetime-picker",5,7),X.Wb(),X.Xb(14,"mat-form-field",8),X.Xb(15,"mat-label"),X.Oc(16),X.kc(17,"translate"),X.Wb(),X.Xb(18,"mat-select",9),X.fc("selectionChange",function(t){return a.seleccionarSucursal(t.value)})("valueChange",function(t){return a.sucursalActual=t}),X.Mc(19,j,2,2,"mat-option",10),X.Wb(),X.Wb(),X.Xb(20,"button",11),X.fc("click",function(){return a.refresh()}),X.Xb(21,"mat-icon"),X.Oc(22,"search"),X.Wb(),X.Oc(23),X.kc(24,"translate"),X.Wb(),X.Wb(),X.Wb(),X.Xb(25,"mat-card",0),X.Xb(26,"mat-card-content",0),X.Xb(27,"ngx-datatable",12,13),X.fc("activate",function(t){return a.tabla1OnActivate(t)}),X.Mc(29,G,3,5,"ngx-datatable-column",14),X.Mc(30,H,3,5,"ngx-datatable-column",14),X.Mc(31,Y,3,5,"ngx-datatable-column",14),X.Mc(32,B,3,5,"ngx-datatable-column",14),X.Mc(33,_,3,5,"ngx-datatable-column",14),X.Mc(34,J,3,5,"ngx-datatable-column",14),X.Mc(35,at,3,5,"ngx-datatable-column",14),X.Mc(36,nt,3,5,"ngx-datatable-column",14),X.Mc(37,rt,3,5,"ngx-datatable-column",14),X.Mc(38,it,3,5,"ngx-datatable-column",14),X.Mc(39,bt,3,5,"ngx-datatable-column",14),X.Mc(40,ft,3,5,"ngx-datatable-column",14),X.Mc(41,St,3,5,"ngx-datatable-column",15),X.Mc(42,Dt,2,0,"ngx-datatable-footer",16),X.Wb(),X.Wb(),X.Wb()),2&t){const t=X.Ac(7),e=X.Ac(13);X.Eb(3),X.qc("placeholder",X.lc(4,55,"SALES.STARTDATE")),X.pc("ngxMatDatetimePicker",t)("formControl",a.startDate),X.Eb(2),X.pc("for",t),X.Eb(1),X.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),X.Eb(3),X.qc("placeholder",X.lc(10,57,"SALES.ENDDATE")),X.pc("ngxMatDatetimePicker",e)("formControl",a.endDate),X.Eb(2),X.pc("for",e),X.Eb(1),X.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),X.Eb(4),X.Pc(X.lc(17,59,"SALES.BRANCH")),X.Eb(2),X.pc("value",a.sucursalActual),X.Eb(1),X.pc("ngForOf",a.sucursales),X.Eb(4),X.Pc(X.lc(24,61,"SALES.SHOW")),X.Eb(2),X.pc("@animate",X.vc(64,At,X.uc(63,Ot))),X.Eb(2),X.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",a.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",a.tabla1.rows)("selectionType","single"),X.Eb(2),X.pc("ngIf",a.mostrarOcultar("XS")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("XS")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("L")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("L")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("XS")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("L")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("L")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("L")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("L")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("L")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("XS")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("L")),X.Eb(1),X.pc("ngIf",a.mostrarOcultar("XS")),X.Eb(1),X.pc("ngIf",a.tabla1.data.length>0)}},directives:[r.a,W.c,W.b,R.c,b.b,N.a,n.c,n.o,n.f,y.h,R.h,N.b,W.a,R.f,p.a,c.n,l.b,u.a,r.b,C.d,c.o,U.n,C.b,C.a,C.e,C.c],pipes:[g.c,c.f,c.d],styles:[""],data:{animation:[x.a]}}),t})(),data:{title:"Por Documento"}}];var wt=e("iInd"),vt=e("BxcV");let It=(()=>{class t{}return t.\u0275mod=X.Pb({type:t}),t.\u0275inj=X.Ob({factory:function(a){return new(a||t)},imports:[[c.c,n.t,o.a,C.f,b.c,b.c,r.c,b.c,l.c,s.a,b.c,h.b,i.f,m.b,d.b,f.c,p.b,u.b,g.b,S.a,y.g,vt.a,N.c,N.e,N.d,n.j,wt.k.forChild(Mt)]]}),t})()}}]);