(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"34kA":function(t,a,e){"use strict";e.r(a),e.d(a,"ByProductModule",function(){return gt});var c=e("SVse"),n=e("GmJt"),o=e("3sEA"),l=e("wd/R"),i=e("cp0P"),r=e("bPAe"),s=e("CHRX"),u=e("i59u"),b=e("UVsP"),d=e("AytR"),p=e("8Y7J"),f=e("IheW");let m=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,a,e){let c=`${d.a.apiURL}Ventas/DocumentosDeVentasEnUnaFecha?fdesde=${t}&fhasta=${a}`;return e&&(c=`${d.a.apiURL}Ventas/DocumentosDeVentasEnUnaFecha?fdesde=${t}&fhasta=${a}&idsucursal=${e}`),this.http.get(encodeURI(c))}obtenerDatosTabla2(t,a,e){let c=`${d.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${a}`;return e&&(c=`${d.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${a}&idsucursal=${e}`),this.http.get(encodeURI(c))}obtenerDatosVenta(t){return Object(i.a)([this.http.get(encodeURI(`${d.a.apiURL}Ventasitems/DetalleDeVentaPorId?idVenta=${t}`)),this.http.get(encodeURI(`${d.a.apiURL}Ventas/DetalleDeMovCajaVenta?idVenta=${t}`))])}}return t.\u0275fac=function(a){return new(a||t)(p.bc(f.c))},t.\u0275prov=p.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=e("iELJ"),g=e("zHaW"),E=e("PDjf"),y=e("VDRc"),v=e("Q2Ze"),A=e("e6WT"),O=e("TN/R"),w=e("ZTz/"),C=e("Dxy4"),W=e("Tj54"),X=e("w9WL"),D=e("UhP/"),k=e("TSSN");function S(t,a){if(1&t&&(p.Xb(0,"mat-option",28),p.Oc(1),p.Wb()),2&t){const t=a.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function T(t,a){if(1&t&&(p.Xb(0,"mat-option",28),p.Oc(1),p.Wb()),2&t){const t=a.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function x(t,a){if(1&t&&(p.Xb(0,"mat-option",28),p.Oc(1),p.Wb()),2&t){const t=a.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function M(t,a){if(1&t&&(p.Xb(0,"mat-option",28),p.Oc(1),p.Wb()),2&t){const t=a.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function P(t,a){if(1&t&&(p.Xb(0,"mat-option",28),p.Oc(1),p.Wb()),2&t){const t=a.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.nombre)}}function R(t,a){if(1&t&&p.Oc(0),2&t){const t=a.row;p.Qc(" ",null==t?null:t.Producto," ")}}function I(t,a){if(1&t&&p.Oc(0),2&t){const t=a.row;p.Qc(" ",null==t?null:t.Comprobante," ")}}function L(t,a){if(1&t&&(p.Oc(0),p.kc(1,"number")),2&t){const t=a.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rCantidad)," ")}}function j(t,a){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){const t=a.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rTotal)," ")}}function F(t,a){if(1&t&&p.Oc(0),2&t){const t=a.row;p.Qc(" ",null==t?null:t.sCodProducto," ")}}function H(t,a){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){const t=a.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rCostoU)," ")}}function U(t,a){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){const t=a.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rPrecioU)," ")}}function V(t,a){if(1&t&&p.Oc(0),2&t){const t=a.row;p.Qc(" ",null==t?null:t.sRazonSocial," ")}}function N(t,a){if(1&t&&p.Oc(0),2&t){const t=a.row;p.Qc(" ",null==t?null:t.sFamilia," ")}}function Y(t,a){if(1&t&&p.Oc(0),2&t){const t=a.row;p.Qc(" ",null==t?null:t.sProveedor," ")}}function Q(t,a){if(1&t&&p.Oc(0),2&t){const t=a.row;p.Qc(" ",null==t?null:t.sEAN," ")}}function q(t,a){if(1&t){const t=p.Yb();p.Xb(0,"button",11),p.fc("click",function(){return p.Dc(t),p.jc(3).export2Totales()}),p.Xb(1,"mat-icon"),p.Oc(2,"save_alt"),p.Wb(),p.Oc(3),p.kc(4,"translate"),p.Wb()}2&t&&(p.Eb(3),p.Pc(p.lc(4,1,"SALES.EXCELTOTALS")))}function $(t,a){if(1&t){const t=p.Yb();p.Xb(0,"button",11),p.fc("click",function(){return p.Dc(t),p.jc(3).export2Detalle()}),p.Xb(1,"mat-icon"),p.Oc(2,"save_alt"),p.Wb(),p.Oc(3),p.kc(4,"translate"),p.Wb()}2&t&&(p.Eb(3),p.Pc(p.lc(4,1,"SALES.EXCELDETAILS")))}function B(t,a){if(1&t&&(p.Xb(0,"div",30),p.Xb(1,"div"),p.Xb(2,"strong"),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Wb(),p.Sb(5,"hr",31),p.Xb(6,"div"),p.Oc(7),p.kc(8,"translate"),p.kc(9,"number"),p.kc(10,"translate"),p.kc(11,"currency"),p.Wb(),p.Wb(),p.Xb(12,"div",32),p.Mc(13,q,5,3,"button",33),p.Mc(14,$,5,3,"button",33),p.Wb()),2&t){const t=p.jc(2);p.Eb(3),p.Pc(p.lc(4,8,"SALES.FOOTERTOTALS")),p.Eb(4),p.Uc("",t.tabla2.footer.Producto," | ",p.lc(8,10,"SALES.QUANTITY"),": ",p.lc(9,12,t.tabla2.footer.rCantidad)," | ",p.lc(10,14,"SALES.AMOUNT"),": ",p.lc(11,16,t.tabla2.footer.rTotal)," "),p.Eb(6),p.pc("ngIf",t.tabla2.data.length>0),p.Eb(1),p.pc("ngIf",t.tabla2.data.length>0)}}function _(t,a){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,B,15,18,"ng-template",29),p.Wb())}function z(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",35),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"Producto")}),p.Wb(),p.Wb()}}function G(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",35),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"Comprobante")}),p.Wb(),p.Wb()}}function J(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",36),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"rCantidad")}),p.Wb(),p.Wb()}}function Z(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",36),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"rTotal")}),p.Wb(),p.Wb()}}function K(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",35),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"sCodProducto")}),p.Wb(),p.Wb()}}function tt(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",36),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"rCostoU")}),p.Wb(),p.Wb()}}function at(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",36),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"rPrecioU")}),p.Wb(),p.Wb()}}function et(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",35),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"sRazonSocial")}),p.Wb(),p.Wb()}}function ct(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",35),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"sFamilia")}),p.Wb(),p.Wb()}}function nt(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",35),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"sProveedor")}),p.Wb(),p.Wb()}}function ot(t,a){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",34),p.Xb(1,"input",35),p.fc("keyup",function(a){return p.Dc(t),p.jc().tabla2.updateFilter(a,"sEAN")}),p.Wb(),p.Wb()}}const lt=function(){return{y:"50px",delay:"300ms"}},it=function(t){return{value:"*",params:t}},rt=[{path:"",component:(()=>{class t{constructor(t,a,e,c,n,o){this.dialog=t,this.servicioVentas=a,this.servicioExportarExcel=e,this.servicioSucursales=c,this.loader=n,this.snack=o,this.hours=0,this.minutes=0,this.hours2=0,this.minutes2=0,this.hoursArr=[],this.minutesArr=[],this.startDate=new Date,this.endDate=new Date;for(var l=0;l<=23;l++)this.hoursArr.push(l);for(l=0;l<=59;l++)this.minutesArr.push(l);this.minutes=this.minutesArr[0],this.minutes2=this.minutesArr[this.minutesArr.length-1],this.hours=this.hoursArr[0],this.hours2=this.hoursArr[this.hoursArr.length-1]}ngOnInit(){this.tabla1=new s.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new s.a,this.tabla2.groupField="Producto",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}export(){var t=this.tabla1.data.map(t=>({Fecha:l(t.fDocumento).format("DD/MM/YYYY HH:mm:ss"),Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Cliente:t.sRazonSocial,Domicilio:t.sDomicilio,"Condici\xf3n IVA":t.sCondicionIVA,Anulado:"T"==t.bAnulado?"Si":"No","Condici\xf3n Venta":t.sCondVenta,Total:t.rTotBruto,Operador:t.sOperadorCreacion,Vendedor:t.sVendedor}));this.servicioExportarExcel.exportExcel(t,"ventas","venta")}export2Detalle(){var t=this.tabla2.data.map(t=>({idVenta:t.idVenta,Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Fecha:l(t.fDocumento).format("DD/MM/YYYY HH:mm:ss"),TotalVenta:t.rTotBruto,"Cond.Venta":t.sCondVenta,"Cond.Pago":t.sCondPago,Carga:l(t.fCarga).format("DD/MM/YYYY HH:mm:ss"),OperadorCreaci\u00f3n:t.sOperadorCreacion,Comprobante:t.Comprobante,Anulado:"T"==t.bAnulado?"Si":"No",Total:t.rTotBruto,Cliente:t.sRazonSocial,CUIT:t.sCIOT,idProducto:t.idProducto,sCodProducto:t.sCodProducto,Producto:t.Producto,Costo:t.rCostoU,PrecioU:t.rPrecioU,Cantidad:t.rCantidad,Neto:t.rNeto,Descuentos:t.rDescuentos,Impuestos:t.rImpuestos,Familia:t.sFamilia,Proveedor:t.sProveedor,EAN:t.sEAN,EAN2:t.sEAN2,AlicIVA:t.rPorcIVA,AlicDGR:t.rPorcDGR,Interno:t.rValorImpInterno}));this.servicioExportarExcel.exportExcel(t,"ventas_detalle","ventas_detalle")}export2Totales(){var t=this.tabla2.data.map(t=>({Producto:t.Producto,PV:t.idPV,EAN:t.sEAN,EAN2:t.sEAN2,Familia:t.sFamilia,Proveedor:t.sProveedor,Cantidad:t.rCantidad,PrecioU:t.rPrecioU,Total:t.rTotBruto}));this.servicioExportarExcel.exportExcel(t,"ventas_detalle_totales","ventas_detalle_totales")}refresh(){this.startDate.setHours(this.hours,this.minutes,0,0),this.endDate.setHours(this.hours2,this.minutes2,59,999),this.loader.open(),Object(i.a)([this.servicioVentas.obtenerDatosTabla1(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.id),this.servicioVentas.obtenerDatosTabla2(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.id)]).subscribe(t=>{this.tabla1.setData(t[0].filter(()=>!0)),this.tabla2.setData(t[1].filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla1OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}openPopUp(t={}){this.loader.open(),this.servicioVentas.obtenerDatosVenta(t.id).subscribe(a=>{this.loader.close();var e="";0!=t.idPVCAEA&&(e="CAEA no informado.",t.fCAEAInformado&&(e="CAEA Informado el "+new Date(t.fCAEAInformado).toLocaleDateString())),this.dialog.open(u.a,{width:"720px",disableClose:!0,data:{title:"DETALLE DE VENTA",payload:t,ventaitems:a[0],ventamovcaja:a[1],sleyendacaea:e}}).afterClosed().subscribe(t=>{})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}}return t.\u0275fac=function(a){return new(a||t)(p.Rb(h.b),p.Rb(m),p.Rb(r.a),p.Rb(b.a),p.Rb(o.a),p.Rb(g.a))},t.\u0275cmp=p.Lb({type:t,selectors:[["app-by-product"]],decls:113,vars:119,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker1",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","8",1,"m-8"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["picker2",""],[3,"value","selectionChange","valueChange"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","summaryTemplate","name","width"],["ngx-datatable-cell-template",""],[4,"ngIf"],["tabla2Producto",""],["tabla2Comprobante",""],["tabla2rCantidad",""],["tabla2rTotal",""],["tabla2sCodProducto",""],["tabla2rCostoU",""],["tabla2rPrecioU",""],["tabla2sRazonSocial",""],["tabla2sFamilia",""],["tabla2sProveedor",""],["tabla2sEAN",""],[3,"value"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,a){if(1&t&&(p.Xb(0,"mat-card",0),p.Xb(1,"div",1),p.Xb(2,"mat-form-field",2),p.Xb(3,"mat-label"),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Xb(6,"input",3),p.fc("dateChange",function(t){return a.updateDate1(t)}),p.Wb(),p.Sb(7,"mat-datepicker-toggle",4),p.Sb(8,"mat-datepicker",null,5),p.Wb(),p.Xb(10,"mat-form-field",6),p.Xb(11,"mat-label"),p.Oc(12),p.kc(13,"translate"),p.Wb(),p.Xb(14,"mat-select",7),p.fc("valueChange",function(t){return a.hours=t}),p.Mc(15,S,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(16,"mat-form-field",6),p.Xb(17,"mat-label"),p.Oc(18),p.kc(19,"translate"),p.Wb(),p.Xb(20,"mat-select",7),p.fc("valueChange",function(t){return a.minutes=t}),p.Mc(21,T,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(22,"mat-form-field",2),p.Xb(23,"mat-label"),p.Oc(24),p.kc(25,"translate"),p.Wb(),p.Xb(26,"input",3),p.fc("dateChange",function(t){return a.updateDate2(t)}),p.Wb(),p.Sb(27,"mat-datepicker-toggle",4),p.Sb(28,"mat-datepicker",null,9),p.Wb(),p.Xb(30,"mat-form-field",6),p.Xb(31,"mat-label"),p.Oc(32),p.kc(33,"translate"),p.Wb(),p.Xb(34,"mat-select",7),p.fc("valueChange",function(t){return a.hours2=t}),p.Mc(35,x,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(36,"mat-form-field",6),p.Xb(37,"mat-label"),p.Oc(38),p.kc(39,"translate"),p.Wb(),p.Xb(40,"mat-select",7),p.fc("valueChange",function(t){return a.minutes2=t}),p.Mc(41,M,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(42,"mat-form-field",2),p.Xb(43,"mat-label"),p.Oc(44),p.kc(45,"translate"),p.Wb(),p.Xb(46,"mat-select",10),p.fc("selectionChange",function(t){return a.seleccionarSucursal(t.value)})("valueChange",function(t){return a.sucursalActual=t}),p.Mc(47,P,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(48,"button",11),p.fc("click",function(){return a.refresh()}),p.Xb(49,"mat-icon"),p.Oc(50,"search"),p.Wb(),p.Oc(51),p.kc(52,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Xb(53,"mat-card",0),p.Xb(54,"mat-card-content",0),p.Xb(55,"ngx-datatable",12,13),p.fc("activate",function(t){return a.tabla2OnActivate(t)}),p.Xb(57,"ngx-datatable-column",14),p.kc(58,"translate"),p.Mc(59,R,1,1,"ng-template",15),p.Wb(),p.Xb(60,"ngx-datatable-column",14),p.kc(61,"translate"),p.Mc(62,I,1,1,"ng-template",15),p.Wb(),p.Xb(63,"ngx-datatable-column",14),p.kc(64,"translate"),p.Mc(65,L,2,3,"ng-template",15),p.Wb(),p.Xb(66,"ngx-datatable-column",14),p.kc(67,"translate"),p.Mc(68,j,2,3,"ng-template",15),p.Wb(),p.Xb(69,"ngx-datatable-column",14),p.kc(70,"translate"),p.Mc(71,F,1,1,"ng-template",15),p.Wb(),p.Xb(72,"ngx-datatable-column",14),p.kc(73,"translate"),p.Mc(74,H,2,3,"ng-template",15),p.Wb(),p.Xb(75,"ngx-datatable-column",14),p.kc(76,"translate"),p.Mc(77,U,2,3,"ng-template",15),p.Wb(),p.Xb(78,"ngx-datatable-column",14),p.kc(79,"translate"),p.Mc(80,V,1,1,"ng-template",15),p.Wb(),p.Xb(81,"ngx-datatable-column",14),p.kc(82,"translate"),p.Mc(83,N,1,1,"ng-template",15),p.Wb(),p.Xb(84,"ngx-datatable-column",14),p.kc(85,"translate"),p.Mc(86,Y,1,1,"ng-template",15),p.Wb(),p.Xb(87,"ngx-datatable-column",14),p.kc(88,"translate"),p.Mc(89,Q,1,1,"ng-template",15),p.Wb(),p.Mc(90,_,2,0,"ngx-datatable-footer",16),p.Wb(),p.Wb(),p.Wb(),p.Mc(91,z,2,0,"ng-template",null,17,p.Nc),p.Mc(93,G,2,0,"ng-template",null,18,p.Nc),p.Mc(95,J,2,0,"ng-template",null,19,p.Nc),p.Mc(97,Z,2,0,"ng-template",null,20,p.Nc),p.Mc(99,K,2,0,"ng-template",null,21,p.Nc),p.Mc(101,tt,2,0,"ng-template",null,22,p.Nc),p.Mc(103,at,2,0,"ng-template",null,23,p.Nc),p.Mc(105,et,2,0,"ng-template",null,24,p.Nc),p.Mc(107,ct,2,0,"ng-template",null,25,p.Nc),p.Mc(109,nt,2,0,"ng-template",null,26,p.Nc),p.Mc(111,ot,2,0,"ng-template",null,27,p.Nc)),2&t){const t=p.Ac(9),e=p.Ac(29),c=p.Ac(92),n=p.Ac(94),o=p.Ac(96),l=p.Ac(98),i=p.Ac(100),r=p.Ac(102),s=p.Ac(104),u=p.Ac(106),b=p.Ac(108),d=p.Ac(110),f=p.Ac(112);p.Eb(4),p.Pc(p.lc(5,78,"SALES.STARTDATE")),p.Eb(2),p.pc("matDatepicker",t)("value",a.startDate),p.Eb(1),p.pc("for",t),p.Eb(5),p.Pc(p.lc(13,80,"SALES.HOUR")),p.Eb(2),p.pc("value",a.hours),p.Eb(1),p.pc("ngForOf",a.hoursArr),p.Eb(3),p.Pc(p.lc(19,82,"SALES.MINUTES")),p.Eb(2),p.pc("value",a.minutes),p.Eb(1),p.pc("ngForOf",a.minutesArr),p.Eb(3),p.Pc(p.lc(25,84,"SALES.ENDDATE")),p.Eb(2),p.pc("matDatepicker",e)("value",a.endDate),p.Eb(1),p.pc("for",e),p.Eb(5),p.Pc(p.lc(33,86,"SALES.HOUR")),p.Eb(2),p.pc("value",a.hours2),p.Eb(1),p.pc("ngForOf",a.hoursArr),p.Eb(3),p.Pc(p.lc(39,88,"SALES.MINUTES")),p.Eb(2),p.pc("value",a.minutes2),p.Eb(1),p.pc("ngForOf",a.minutesArr),p.Eb(3),p.Pc(p.lc(45,90,"SALES.BRANCH")),p.Eb(2),p.pc("value",a.sucursalActual),p.Eb(1),p.pc("ngForOf",a.sucursales),p.Eb(4),p.Pc(p.lc(52,92,"SALES.SHOW")),p.Eb(2),p.pc("@animate",p.vc(117,it,p.uc(116,lt))),p.Eb(2),p.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",a.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",a.tabla2.rows)("selectionType","single"),p.Eb(2),p.qc("name",p.lc(58,94,"SALES.PRODUCT")),p.pc("cellClass",a.getCellClass)("summaryTemplate",c)("width",500),p.Eb(3),p.qc("name",p.lc(61,96,"SALES.RECEIPT")),p.pc("cellClass",a.getCellClass)("summaryTemplate",n)("width",150),p.Eb(3),p.qc("name",p.lc(64,98,"SALES.QUANTITY")),p.pc("cellClass",a.getCellClass)("summaryTemplate",o)("width",150),p.Eb(3),p.qc("name",p.lc(67,100,"SALES.AMOUNT")),p.pc("cellClass",a.getCellClass)("summaryTemplate",l)("width",150),p.Eb(3),p.qc("name",p.lc(70,102,"SALES.CODE")),p.pc("cellClass",a.getCellClass)("summaryTemplate",i)("width",200),p.Eb(3),p.qc("name",p.lc(73,104,"SALES.COST")),p.pc("cellClass",a.getCellClass)("summaryTemplate",r)("width",150),p.Eb(3),p.qc("name",p.lc(76,106,"SALES.PRICE")),p.pc("cellClass",a.getCellClass)("summaryTemplate",s)("width",150),p.Eb(3),p.qc("name",p.lc(79,108,"SALES.BUSINESSNAME")),p.pc("cellClass",a.getCellClass)("summaryTemplate",u)("width",200),p.Eb(3),p.qc("name",p.lc(82,110,"SALES.FAMILY")),p.pc("cellClass",a.getCellClass)("summaryTemplate",b)("width",225),p.Eb(3),p.qc("name",p.lc(85,112,"SALES.PROVIDER")),p.pc("cellClass",a.getCellClass)("summaryTemplate",d)("width",200),p.Eb(3),p.qc("name",p.lc(88,114,"SALES.EAN")),p.pc("cellClass",a.getCellClass)("summaryTemplate",f)("width",150),p.Eb(3),p.pc("ngIf",a.tabla2.data.length>0)}},directives:[E.a,y.c,y.b,v.c,y.a,v.f,A.b,O.b,O.d,v.h,O.a,w.a,c.n,C.b,W.a,E.b,X.d,X.b,X.a,c.o,D.n,X.e,X.c],pipes:[k.c,c.g,c.d],styles:[""],data:{animation:[n.a]}}),t})(),data:{title:"Por Producto"}}];var st=e("u9T3"),ut=e("s7LF"),bt=e("f44v"),dt=e("jMqV"),pt=e("M9ds"),ft=e("ZFy/"),mt=e("iInd"),ht=e("PCNd");let gt=(()=>{class t{}return t.\u0275mod=p.Pb({type:t}),t.\u0275inj=p.Ob({factory:function(a){return new(a||t)},imports:[[c.c,ut.s,st.a,X.f,A.c,A.c,E.c,A.c,C.c,bt.a,A.c,ft.b,h.f,g.b,dt.b,pt.c,w.b,W.b,k.b,ht.a,O.c,mt.k.forChild(rt)]]}),t})()},GmJt:function(t,a,e){"use strict";e.d(a,"a",function(){return o});var c=e("GS7A");const n=Object(c.g)([Object(c.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(c.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(c.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),o=[Object(c.n)("animate",[Object(c.m)("void => *",[Object(c.o)(n)])]),Object(c.n)("fadeInOut",[Object(c.k)("0",Object(c.l)({opacity:0,display:"none"})),Object(c.k)("1",Object(c.l)({opacity:1,display:"block"})),Object(c.m)("0 => 1",Object(c.e)("300ms")),Object(c.m)("1 => 0",Object(c.e)("300ms"))])]},Iab2:function(t,a,e){var c,n;void 0===(n="function"==typeof(c=function(){"use strict";function a(t,a,e){var c=new XMLHttpRequest;c.open("GET",t),c.responseType="blob",c.onload=function(){l(c.response,a,e)},c.onerror=function(){console.error("could not download file")},c.send()}function e(t){var a=new XMLHttpRequest;a.open("HEAD",t,!1);try{a.send()}catch(t){}return 200<=a.status&&299>=a.status}function c(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(a){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(t,o,l){var i=n.URL||n.webkitURL,r=document.createElement("a");r.download=o=o||t.name||"download",r.rel="noopener","string"==typeof t?(r.href=t,r.origin===location.origin?c(r):e(r.href)?a(t,o,l):c(r,r.target="_blank")):(r.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(r.href)},4e4),setTimeout(function(){c(r)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,o){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,a){return void 0===a?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,o),n);else if(e(t))a(t,n,o);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){c(l)})}}:function(t,e,c,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof t)return a(t,e,c);var i="application/octet-stream"===t.type,r=/constructor/i.test(n.HTMLElement)||n.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&r||o)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=t:location=t,l=null},u.readAsDataURL(t)}else{var b=n.URL||n.webkitURL,d=b.createObjectURL(t);l?l.location=d:location.href=d,l=null,setTimeout(function(){b.revokeObjectURL(d)},4e4)}});n.saveAs=l.saveAs=l,t.exports=l})?c.apply(a,[]):c)||(t.exports=n)},bPAe:function(t,a,e){"use strict";e.d(a,"a",function(){return l});var c=e("Iab2"),n=e("EUZL"),o=e("8Y7J");let l=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,a,e){const c=n.utils.json_to_sheet(t),o=n.write({Sheets:{[e]:c},SheetNames:[e]},{bookType:"xlsx",type:"array"});this.saveExcelFile(o,a)}saveExcelFile(t,a){const e=new Blob([t],{type:this.fileType});c.saveAs(e,a+this.fileExtension)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},i59u:function(t,a,e){"use strict";e.d(a,"a",function(){return F});var c=e("iELJ"),n=e("GmJt"),o=e("wd/R"),l=e("8Y7J"),i=e("SVse"),r=e("PDjf"),s=e("w9WL"),u=e("VDRc"),b=e("Dxy4"),d=e("Tj54"),p=e("ZFy/"),f=e("TSSN");function m(t,a){if(1&t&&(l.Xb(0,"h1",12),l.Oc(1),l.Xb(2,"mat-icon",13),l.Oc(3,"person_pin"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(1),l.Rc("",t.data.payload.idTipoDoc,"-",t.data.payload.Comprobante,""),l.Eb(1),l.pc("matTooltip",t.tooltip)}}function h(t,a){if(1&t&&(l.Xb(0,"h1",12),l.Oc(1),l.Xb(2,"mat-icon",13),l.Oc(3,"person_pin"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(1),l.Sc("",t.data.payload.idtipodoc,"-",0!=t.data.payload.idpvcaea?t.data.payload.idpvcaea.toString().padStart(4,"0"):t.data.payload.idpv.toString().padStart(4,"0"),"-",t.data.payload.idnumdoc.toString().padStart(8,"0"),""),l.Eb(1),l.pc("matTooltip",t.tooltip)}}function g(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Cliente:")),l.Eb(2),l.Qc(" ",t.data.payload.sRazonSocial,"")}}function E(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Domicilio:")),l.Eb(2),l.Qc(" ",t.data.payload.sDomicilio,"")}}function y(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.kc(5,"date"),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Fecha de Carga:")),l.Eb(2),l.Qc(" ",l.mc(5,4,t.data.payload.fCarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function v(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.kc(5,"date"),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Fecha de Carga:")),l.Eb(2),l.Qc(" ",l.mc(5,4,t.data.payload.fcarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function A(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2,"CAE:"),l.Wb(),l.Oc(3),l.Wb()),2&t){const t=l.jc();l.Eb(3),l.Qc(" ",t.data.payload.ImpresionCAE,"")}}function O(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.sCodProducto," ")}}function w(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.sProducto," ")}}function C(t,a){if(1&t&&(l.Oc(0),l.kc(1,"number")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rCantidad)," ")}}function W(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rPrecioU)," ")}}function X(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rDescuentos)," ")}}function D(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rTotal)," ")}}function k(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.scondpago," ")}}function S(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rimporte)," ")}}function T(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.srefpago," ")}}function x(t,a){if(1&t&&(l.Oc(0),l.kc(1,"number")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.icuotas)," ")}}function M(t,a){if(1&t&&(l.Xb(0,"div",14),l.Xb(1,"font",15),l.Oc(2),l.kc(3,"translate"),l.kc(4,"date"),l.kc(5,"translate"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Tc("",l.lc(3,4,"ANULADO el")," ",l.mc(4,6,t.data.payload.fAnulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",l.lc(5,9,"por")," ",t.data.payload.sOperadorAnulacion,"")}}function P(t,a){if(1&t&&(l.Xb(0,"div",14),l.Xb(1,"font",15),l.Oc(2),l.kc(3,"translate"),l.kc(4,"date"),l.kc(5,"translate"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Tc("",l.lc(3,4,"ANULADO el")," ",l.mc(4,6,t.data.payload.fanulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",l.lc(5,9,"por")," ",t.data.payload.soperadoranulacion,"")}}function R(t,a){if(1&t&&(l.Xb(0,"div",10),l.Xb(1,"h3"),l.Oc(2),l.kc(3,"currency"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Qc("Total: ",l.lc(3,1,t.data.payload.rTotBruto),"")}}function I(t,a){if(1&t&&(l.Xb(0,"div",10),l.Xb(1,"h3"),l.Oc(2),l.kc(3,"currency"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Qc("Total: ",l.lc(3,1,t.data.payload.rtotbruto),"")}}const L=function(){return{y:"50px",delay:"300ms"}},j=function(t){return{value:"*",params:t}};let F=(()=>{class t{constructor(t,a,e){this.data=t,this.dialogRef=a,this.cdRef=e,this.page={count:0,offset:0,limit:10};var c=[t.payload.sOperadorCreacion||t.payload.soperadorcreacion],n=[t.payload.sOperadorModificacion||t.payload.soperadormodificacion],l=[t.payload.sOperadorAnulacion||t.payload.soperadoranulacion],i=[t.payload.fModificacion||t.payload.fmodificacion],r=[t.payload.fAnulacion||t.payload.fanulacion],s="T"==t.payload.bAnulado||"T"==t.payload.banulado;this.tooltip="Creado: "+o([t.payload.fCreacion||t.payload.fcreacion]).format("DD/MM/YYYY HH:mm")+" por "+c+", Modificado: "+o(i).format("DD/MM/YYYY HH:mm")+" por "+n,s&&(this.tooltip+=", Anulado: "+o(r).format("DD/MM/YYYY HH:mm")+" por "+l)}ngOnInit(){}ngAfterViewChecked(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}}return t.\u0275fac=function(a){return new(a||t)(l.Rb(c.a),l.Rb(c.g),l.Rb(l.h))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-products-popup"]],decls:59,vars:87,consts:[["matDialogTitle","","align","right",4,"ngIf"],["class","m-0",4,"ngIf"],[1,"m-0"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","selectionType"],[3,"name","width"],["ngx-datatable-cell-template",""],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"],["matDialogTitle","","align","right"],[3,"matTooltip"],["fxFlex","100",1,"mt-16"],["color","red"]],template:function(t,a){1&t&&(l.Mc(0,m,4,3,"h1",0),l.Mc(1,h,4,4,"h1",0),l.Xb(2,"mat-dialog-content"),l.Xb(3,"mat-card"),l.Xb(4,"mat-card-content"),l.Mc(5,g,5,4,"p",1),l.Mc(6,E,5,4,"p",1),l.Mc(7,y,6,7,"p",1),l.Mc(8,v,6,7,"p",1),l.Mc(9,A,4,1,"p",1),l.Xb(10,"p",2),l.Oc(11),l.Wb(),l.Wb(),l.Wb(),l.Xb(12,"mat-card",3),l.Xb(13,"mat-card-content",3),l.Xb(14,"ngx-datatable",4),l.Xb(15,"ngx-datatable-column",5),l.kc(16,"translate"),l.Mc(17,O,1,1,"ng-template",6),l.Wb(),l.Xb(18,"ngx-datatable-column",5),l.kc(19,"translate"),l.Mc(20,w,1,1,"ng-template",6),l.Wb(),l.Xb(21,"ngx-datatable-column",5),l.kc(22,"translate"),l.Mc(23,C,2,3,"ng-template",6),l.Wb(),l.Xb(24,"ngx-datatable-column",5),l.kc(25,"translate"),l.Mc(26,W,2,3,"ng-template",6),l.Wb(),l.Xb(27,"ngx-datatable-column",5),l.kc(28,"translate"),l.Mc(29,X,2,3,"ng-template",6),l.Wb(),l.Xb(30,"ngx-datatable-column",5),l.kc(31,"translate"),l.Mc(32,D,2,3,"ng-template",6),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(33,"mat-card",3),l.Xb(34,"mat-card-content",3),l.Xb(35,"ngx-datatable",4),l.Xb(36,"ngx-datatable-column",5),l.kc(37,"translate"),l.Mc(38,k,1,1,"ng-template",6),l.Wb(),l.Xb(39,"ngx-datatable-column",5),l.kc(40,"translate"),l.Mc(41,S,2,3,"ng-template",6),l.Wb(),l.Xb(42,"ngx-datatable-column",5),l.kc(43,"translate"),l.Mc(44,T,1,1,"ng-template",6),l.Wb(),l.Xb(45,"ngx-datatable-column",5),l.kc(46,"translate"),l.Mc(47,x,2,3,"ng-template",6),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(48,"mat-dialog-content",7),l.Mc(49,M,6,11,"div",8),l.Mc(50,P,6,11,"div",8),l.Mc(51,R,4,3,"div",9),l.Mc(52,I,4,3,"div",9),l.Xb(53,"div",10),l.Xb(54,"button",11),l.fc("click",function(){return a.dialogRef.close(!1)}),l.Xb(55,"mat-icon"),l.Oc(56,"cancel"),l.Wb(),l.Oc(57),l.kc(58,"translate"),l.Wb(),l.Wb(),l.Wb()),2&t&&(l.pc("ngIf",a.data.payload.idTipoDoc),l.Eb(1),l.pc("ngIf",a.data.payload.idtipodoc),l.Eb(2),l.pc("@animate",l.vc(79,j,l.uc(78,L))),l.Eb(2),l.pc("ngIf",a.data.payload.sRazonSocial),l.Eb(1),l.pc("ngIf",a.data.payload.sDomicilio),l.Eb(1),l.pc("ngIf",a.data.payload.fCarga),l.Eb(1),l.pc("ngIf",a.data.payload.fcarga),l.Eb(1),l.pc("ngIf",a.data.payload.ImpresionCAE),l.Eb(2),l.Pc(a.data.sleyendacaea),l.Eb(1),l.pc("@animate",l.vc(82,j,l.uc(81,L))),l.Eb(2),l.pc("rows",a.data.ventaitems)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit)("selectionType","single"),l.Eb(1),l.qc("name",l.lc(16,56,"Codigo")),l.pc("width",200),l.Eb(3),l.qc("name",l.lc(19,58,"Descripci\xf3n")),l.pc("width",500),l.Eb(3),l.qc("name",l.lc(22,60,"Cantidad")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(25,62,"Precio")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(28,64,"Descuentos")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(31,66,"Total")),l.pc("width",150),l.Eb(3),l.pc("@animate",l.vc(85,j,l.uc(84,L))),l.Eb(2),l.pc("rows",a.data.ventamovcaja)("columnMode","standard")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit)("selectionType","single"),l.Eb(1),l.qc("name",l.lc(37,68,"Medio de Pago")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(40,70,"Importe")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(43,72,"Referencia")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(46,74,"Cuotas")),l.pc("width",150),l.Eb(4),l.pc("ngIf","T"==a.data.payload.bAnulado),l.Eb(1),l.pc("ngIf","T"==a.data.payload.banulado),l.Eb(1),l.pc("ngIf",a.data.payload.hasOwnProperty("rTotBruto")),l.Eb(1),l.pc("ngIf",a.data.payload.hasOwnProperty("rtotbruto")),l.Eb(5),l.Qc("",l.lc(58,76,"Cancelar")," "))},directives:[i.o,c.e,r.a,r.b,s.d,s.b,s.a,u.c,u.b,u.a,b.b,d.a,c.h,p.a],pipes:[f.c,i.f,i.g,i.d],styles:[""],data:{animation:[n.a]}}),t})()}}]);