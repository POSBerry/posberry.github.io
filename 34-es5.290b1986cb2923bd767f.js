!function(){function t(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function a(t,a){for(var e=0;e<a.length;e++){var c=a[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function e(t,e,c){return e&&a(t.prototype,e),c&&a(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"34kA":function(a,c,n){"use strict";n.r(c),n.d(c,"ByProductModule",function(){return Mt});var l,o=n("SVse"),r=n("GmJt"),i=n("3sEA"),u=n("wd/R"),b=n("cp0P"),s=n("bPAe"),f=n("CHRX"),m=n("i59u"),d=n("UVsP"),p=n("AytR"),v=n("8Y7J"),h=n("IheW"),g=((l=function(){function a(e){t(this,a),this.http=e}return e(a,[{key:"obtenerDatosTabla1",value:function(t,a,e){var c="".concat(p.a.apiURL,"Ventas/DocumentosDeVentasEnUnaFecha?fdesde=").concat(t,"&fhasta=").concat(a);return e&&(c="".concat(p.a.apiURL,"Ventas/DocumentosDeVentasEnUnaFecha?fdesde=").concat(t,"&fhasta=").concat(a,"&idsucursal=").concat(e)),this.http.get(encodeURI(c))}},{key:"obtenerDatosTabla2",value:function(t,a,e){var c="".concat(p.a.apiURL,"Ventas/DetalleDeVentasEnUnaFecha?fdesde=").concat(t,"&fhasta=").concat(a);return e&&(c="".concat(p.a.apiURL,"Ventas/DetalleDeVentasEnUnaFecha?fdesde=").concat(t,"&fhasta=").concat(a,"&idsucursal=").concat(e)),this.http.get(encodeURI(c))}},{key:"obtenerDatosVenta",value:function(t){return Object(b.a)([this.http.get(encodeURI("".concat(p.a.apiURL,"Ventasitems/DetalleDeVentaPorId?idVenta=").concat(t))),this.http.get(encodeURI("".concat(p.a.apiURL,"Ventas/DetalleDeMovCajaVenta?idVenta=").concat(t)))])}}]),a}()).\u0275fac=function(t){return new(t||l)(v.bc(h.c))},l.\u0275prov=v.Nb({token:l,factory:l.\u0275fac,providedIn:"root"}),l),E=n("iELJ"),A=n("zHaW"),C=n("PDjf"),D=n("VDRc"),W=n("Q2Ze"),X=n("e6WT"),k=n("TN/R"),S=n("ZTz/"),O=n("Dxy4"),P=n("Tj54"),y=n("w9WL"),T=n("UhP/"),w=n("TSSN");function x(t,a){if(1&t&&(v.Xb(0,"mat-option",28),v.Oc(1),v.Wb()),2&t){var e=a.$implicit;v.pc("value",e),v.Eb(1),v.Pc(null==e?null:e.toString())}}function M(t,a){if(1&t&&(v.Xb(0,"mat-option",28),v.Oc(1),v.Wb()),2&t){var e=a.$implicit;v.pc("value",e),v.Eb(1),v.Pc(null==e?null:e.toString())}}function I(t,a){if(1&t&&(v.Xb(0,"mat-option",28),v.Oc(1),v.Wb()),2&t){var e=a.$implicit;v.pc("value",e),v.Eb(1),v.Pc(null==e?null:e.toString())}}function F(t,a){if(1&t&&(v.Xb(0,"mat-option",28),v.Oc(1),v.Wb()),2&t){var e=a.$implicit;v.pc("value",e),v.Eb(1),v.Pc(null==e?null:e.toString())}}function R(t,a){if(1&t&&(v.Xb(0,"mat-option",28),v.Oc(1),v.Wb()),2&t){var e=a.$implicit;v.pc("value",e),v.Eb(1),v.Pc(null==e?null:e.nombre)}}function V(t,a){if(1&t&&v.Oc(0),2&t){var e=a.row;v.Qc(" ",null==e?null:e.Producto," ")}}function N(t,a){if(1&t&&v.Oc(0),2&t){var e=a.row;v.Qc(" ",null==e?null:e.Comprobante," ")}}function j(t,a){if(1&t&&(v.Oc(0),v.kc(1,"number")),2&t){var e=a.row;v.Qc(" ",v.lc(1,1,null==e?null:e.rCantidad)," ")}}function L(t,a){if(1&t&&(v.Oc(0),v.kc(1,"currency")),2&t){var e=a.row;v.Qc(" ",v.lc(1,1,null==e?null:e.rTotal)," ")}}function U(t,a){if(1&t&&v.Oc(0),2&t){var e=a.row;v.Qc(" ",null==e?null:e.sCodProducto," ")}}function Y(t,a){if(1&t&&(v.Oc(0),v.kc(1,"currency")),2&t){var e=a.row;v.Qc(" ",v.lc(1,1,null==e?null:e.rCostoU)," ")}}function H(t,a){if(1&t&&(v.Oc(0),v.kc(1,"currency")),2&t){var e=a.row;v.Qc(" ",v.lc(1,1,null==e?null:e.rPrecioU)," ")}}function Q(t,a){if(1&t&&v.Oc(0),2&t){var e=a.row;v.Qc(" ",null==e?null:e.sRazonSocial," ")}}function q(t,a){if(1&t&&v.Oc(0),2&t){var e=a.row;v.Qc(" ",null==e?null:e.sFamilia," ")}}function z(t,a){if(1&t&&v.Oc(0),2&t){var e=a.row;v.Qc(" ",null==e?null:e.sProveedor," ")}}function B(t,a){if(1&t&&v.Oc(0),2&t){var e=a.row;v.Qc(" ",null==e?null:e.sEAN," ")}}function G(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",11),v.fc("click",function(){return v.Dc(e),v.jc(3).export2Totales()}),v.Xb(1,"mat-icon"),v.Oc(2,"save_alt"),v.Wb(),v.Oc(3),v.kc(4,"translate"),v.Wb()}2&t&&(v.Eb(3),v.Pc(v.lc(4,1,"SALES.EXCELTOTALS")))}function _(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",11),v.fc("click",function(){return v.Dc(e),v.jc(3).export2Detalle()}),v.Xb(1,"mat-icon"),v.Oc(2,"save_alt"),v.Wb(),v.Oc(3),v.kc(4,"translate"),v.Wb()}2&t&&(v.Eb(3),v.Pc(v.lc(4,1,"SALES.EXCELDETAILS")))}function J(t,a){if(1&t&&(v.Xb(0,"div",30),v.Xb(1,"div"),v.Xb(2,"strong"),v.Oc(3),v.kc(4,"translate"),v.Wb(),v.Wb(),v.Sb(5,"hr",31),v.Xb(6,"div"),v.Oc(7),v.kc(8,"translate"),v.kc(9,"number"),v.kc(10,"translate"),v.kc(11,"currency"),v.Wb(),v.Wb(),v.Xb(12,"div",32),v.Mc(13,G,5,3,"button",33),v.Mc(14,_,5,3,"button",33),v.Wb()),2&t){var e=v.jc(2);v.Eb(3),v.Pc(v.lc(4,8,"SALES.FOOTERTOTALS")),v.Eb(4),v.Uc("",e.tabla2.footer.Producto," | ",v.lc(8,10,"SALES.QUANTITY"),": ",v.lc(9,12,e.tabla2.footer.rCantidad)," | ",v.lc(10,14,"SALES.AMOUNT"),": ",v.lc(11,16,e.tabla2.footer.rTotal)," "),v.Eb(6),v.pc("ngIf",e.tabla2.data.length>0),v.Eb(1),v.pc("ngIf",e.tabla2.data.length>0)}}function $(t,a){1&t&&(v.Xb(0,"ngx-datatable-footer"),v.Mc(1,J,15,18,"ng-template",29),v.Wb())}function K(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"Producto")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function Z(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",35,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"Producto")}),v.Wb(),v.Mc(3,K,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}function tt(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"Comprobante")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function at(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",35,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"Comprobante")}),v.Wb(),v.Mc(3,tt,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}function et(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"rCantidad")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function ct(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",39,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"rCantidad")}),v.Wb(),v.Mc(3,et,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}function nt(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"rTotal")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function lt(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",39,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"rTotal")}),v.Wb(),v.Mc(3,nt,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}function ot(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"sCodProducto")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function rt(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",35,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"sCodProducto")}),v.Wb(),v.Mc(3,ot,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}function it(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"rCostoU")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function ut(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",39,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"rCostoU")}),v.Wb(),v.Mc(3,it,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}function bt(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"rPrecioU")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function st(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",39,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"rPrecioU")}),v.Wb(),v.Mc(3,bt,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}function ft(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"sRazonSocial")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function mt(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",35,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"sRazonSocial")}),v.Wb(),v.Mc(3,ft,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}function dt(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"sFamilia")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function pt(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",35,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"sFamilia")}),v.Wb(),v.Mc(3,dt,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}function vt(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"sProveedor")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function ht(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",35,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"sProveedor")}),v.Wb(),v.Mc(3,vt,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}function gt(t,a){if(1&t){var e=v.Yb();v.Xb(0,"button",38),v.fc("click",function(t){v.Dc(e),v.jc();var a=v.Ac(2);return v.jc().tabla2.updateFilter(t,"sEAN")&&(a.value="")}),v.Xb(1,"mat-icon"),v.Oc(2,"close"),v.Wb(),v.Wb()}}function Et(t,a){if(1&t){var e=v.Yb();v.Xb(0,"mat-form-field",34),v.Xb(1,"input",35,36),v.fc("keyup",function(t){return v.Dc(e),v.jc().tabla2.updateFilter(t,"sEAN")}),v.Wb(),v.Mc(3,gt,3,0,"button",37),v.Wb()}if(2&t){var c=v.Ac(2);v.Eb(3),v.pc("ngIf",c.value)}}var At,Ct,Dt=function(){return{y:"50px",delay:"300ms"}},Wt=function(t){return{value:"*",params:t}},Xt=[{path:"",component:(At=function(){function a(e,c,n,l,o,r){t(this,a),this.dialog=e,this.servicioVentas=c,this.servicioExportarExcel=n,this.servicioSucursales=l,this.loader=o,this.snack=r,this.hours=0,this.minutes=0,this.hours2=0,this.minutes2=0,this.hoursArr=[],this.minutesArr=[],this.startDate=new Date,this.endDate=new Date;for(var i=0;i<=23;i++)this.hoursArr.push(i);for(i=0;i<=59;i++)this.minutesArr.push(i);this.minutes=this.minutesArr[0],this.minutes2=this.minutesArr[this.minutesArr.length-1],this.hours=this.hoursArr[0],this.hours2=this.hoursArr[this.hoursArr.length-1]}return e(a,[{key:"ngOnInit",value:function(){var t=this;this.tabla1=new f.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new f.a,this.tabla2.groupField="Producto",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(function(a){t.sucursales=a,t.sucursalActual=t.sucursales[0],t.loader.close()},function(a){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"export",value:function(){var t=this.tabla1.data.map(function(t){return{Fecha:u(t.fDocumento).format("DD/MM/YYYY HH:mm:ss"),Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Cliente:t.sRazonSocial,Domicilio:t.sDomicilio,"Condici\xf3n IVA":t.sCondicionIVA,Anulado:"T"==t.bAnulado?"Si":"No","Condici\xf3n Venta":t.sCondVenta,Total:t.rTotBruto,Operador:t.sOperadorCreacion,Vendedor:t.sVendedor}});this.servicioExportarExcel.exportExcel(t,"ventas","venta")}},{key:"export2Detalle",value:function(){var t=this.tabla2.data.map(function(t){return{idVenta:t.idVenta,Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Fecha:u(t.fDocumento).format("DD/MM/YYYY HH:mm:ss"),TotalVenta:t.rTotBruto,"Cond.Venta":t.sCondVenta,"Cond.Pago":t.sCondPago,Carga:u(t.fCarga).format("DD/MM/YYYY HH:mm:ss"),"OperadorCreaci\xf3n":t.sOperadorCreacion,Comprobante:t.Comprobante,Anulado:"T"==t.bAnulado?"Si":"No",Total:t.rTotBruto,Cliente:t.sRazonSocial,CUIT:t.sCIOT,idProducto:t.idProducto,sCodProducto:t.sCodProducto,Producto:t.Producto,Costo:t.rCostoU,PrecioU:t.rPrecioU,Cantidad:t.rCantidad,Neto:t.rNeto,Descuentos:t.rDescuentos,Impuestos:t.rImpuestos,Familia:t.sFamilia,Proveedor:t.sProveedor,EAN:t.sEAN,EAN2:t.sEAN2,AlicIVA:t.rPorcIVA,AlicDGR:t.rPorcDGR,Interno:t.rValorImpInterno}});this.servicioExportarExcel.exportExcel(t,"ventas_detalle","ventas_detalle")}},{key:"export2Totales",value:function(){var t=this.tabla2.data.map(function(t){return{Producto:t.Producto,PV:t.idPV,EAN:t.sEAN,EAN2:t.sEAN2,Familia:t.sFamilia,Proveedor:t.sProveedor,Cantidad:t.rCantidad,PrecioU:t.rPrecioU,Total:t.rTotBruto}});this.servicioExportarExcel.exportExcel(t,"ventas_detalle_totales","ventas_detalle_totales")}},{key:"refresh",value:function(){var t=this;this.startDate.setHours(this.hours,this.minutes,0,0),this.endDate.setHours(this.hours2,this.minutes2,59,999),this.loader.open(),Object(b.a)([this.servicioVentas.obtenerDatosTabla1(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.id),this.servicioVentas.obtenerDatosTabla2(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.id)]).subscribe(function(a){t.tabla1.setData(a[0].filter(function(){return!0})),t.tabla2.setData(a[1].filter(function(){return!0})),t.loader.close()},function(a){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"getRowHeight",value:function(t){return 50}},{key:"getCellClass",value:function(t){return{ngxgroup:t.row.isGroup}}},{key:"tabla1OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}},{key:"tabla2OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}},{key:"updateDate1",value:function(t){this.startDate=t.value.toDate()}},{key:"updateDate2",value:function(t){this.endDate=t.value.toDate()}},{key:"seleccionarSucursal",value:function(t){this.sucursalActual=t}},{key:"openPopUp",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loader.open(),this.servicioVentas.obtenerDatosVenta(a.id).subscribe(function(e){t.loader.close();var c="";0!=a.idPVCAEA&&(c="CAEA no informado.",a.fCAEAInformado&&(c="CAEA Informado el "+new Date(a.fCAEAInformado).toLocaleDateString())),t.dialog.open(m.a,{width:"720px",disableClose:!0,data:{title:"DETALLE DE VENTA",payload:a,ventaitems:e[0],ventamovcaja:e[1],sleyendacaea:c}}).afterClosed().subscribe(function(t){})},function(a){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}}]),a}(),At.\u0275fac=function(t){return new(t||At)(v.Rb(E.b),v.Rb(g),v.Rb(s.a),v.Rb(d.a),v.Rb(i.a),v.Rb(A.a))},At.\u0275cmp=v.Lb({type:At,selectors:[["app-by-product"]],decls:113,vars:119,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker1",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","8",1,"m-8"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["picker2",""],[3,"value","selectionChange","valueChange"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","summaryTemplate","name","width"],["ngx-datatable-cell-template",""],[4,"ngIf"],["tabla2Producto",""],["tabla2Comprobante",""],["tabla2rCantidad",""],["tabla2rTotal",""],["tabla2sCodProducto",""],["tabla2rCostoU",""],["tabla2rPrecioU",""],["tabla2sRazonSocial",""],["tabla2sFamilia",""],["tabla2sProveedor",""],["tabla2sEAN",""],[3,"value"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,a){if(1&t&&(v.Xb(0,"mat-card",0),v.Xb(1,"div",1),v.Xb(2,"mat-form-field",2),v.Xb(3,"mat-label"),v.Oc(4),v.kc(5,"translate"),v.Wb(),v.Xb(6,"input",3),v.fc("dateChange",function(t){return a.updateDate1(t)}),v.Wb(),v.Sb(7,"mat-datepicker-toggle",4),v.Sb(8,"mat-datepicker",null,5),v.Wb(),v.Xb(10,"mat-form-field",6),v.Xb(11,"mat-label"),v.Oc(12),v.kc(13,"translate"),v.Wb(),v.Xb(14,"mat-select",7),v.fc("valueChange",function(t){return a.hours=t}),v.Mc(15,x,2,2,"mat-option",8),v.Wb(),v.Wb(),v.Xb(16,"mat-form-field",6),v.Xb(17,"mat-label"),v.Oc(18),v.kc(19,"translate"),v.Wb(),v.Xb(20,"mat-select",7),v.fc("valueChange",function(t){return a.minutes=t}),v.Mc(21,M,2,2,"mat-option",8),v.Wb(),v.Wb(),v.Xb(22,"mat-form-field",2),v.Xb(23,"mat-label"),v.Oc(24),v.kc(25,"translate"),v.Wb(),v.Xb(26,"input",3),v.fc("dateChange",function(t){return a.updateDate2(t)}),v.Wb(),v.Sb(27,"mat-datepicker-toggle",4),v.Sb(28,"mat-datepicker",null,9),v.Wb(),v.Xb(30,"mat-form-field",6),v.Xb(31,"mat-label"),v.Oc(32),v.kc(33,"translate"),v.Wb(),v.Xb(34,"mat-select",7),v.fc("valueChange",function(t){return a.hours2=t}),v.Mc(35,I,2,2,"mat-option",8),v.Wb(),v.Wb(),v.Xb(36,"mat-form-field",6),v.Xb(37,"mat-label"),v.Oc(38),v.kc(39,"translate"),v.Wb(),v.Xb(40,"mat-select",7),v.fc("valueChange",function(t){return a.minutes2=t}),v.Mc(41,F,2,2,"mat-option",8),v.Wb(),v.Wb(),v.Xb(42,"mat-form-field",2),v.Xb(43,"mat-label"),v.Oc(44),v.kc(45,"translate"),v.Wb(),v.Xb(46,"mat-select",10),v.fc("selectionChange",function(t){return a.seleccionarSucursal(t.value)})("valueChange",function(t){return a.sucursalActual=t}),v.Mc(47,R,2,2,"mat-option",8),v.Wb(),v.Wb(),v.Xb(48,"button",11),v.fc("click",function(){return a.refresh()}),v.Xb(49,"mat-icon"),v.Oc(50,"search"),v.Wb(),v.Oc(51),v.kc(52,"translate"),v.Wb(),v.Wb(),v.Wb(),v.Xb(53,"mat-card",0),v.Xb(54,"mat-card-content",0),v.Xb(55,"ngx-datatable",12,13),v.fc("activate",function(t){return a.tabla2OnActivate(t)}),v.Xb(57,"ngx-datatable-column",14),v.kc(58,"translate"),v.Mc(59,V,1,1,"ng-template",15),v.Wb(),v.Xb(60,"ngx-datatable-column",14),v.kc(61,"translate"),v.Mc(62,N,1,1,"ng-template",15),v.Wb(),v.Xb(63,"ngx-datatable-column",14),v.kc(64,"translate"),v.Mc(65,j,2,3,"ng-template",15),v.Wb(),v.Xb(66,"ngx-datatable-column",14),v.kc(67,"translate"),v.Mc(68,L,2,3,"ng-template",15),v.Wb(),v.Xb(69,"ngx-datatable-column",14),v.kc(70,"translate"),v.Mc(71,U,1,1,"ng-template",15),v.Wb(),v.Xb(72,"ngx-datatable-column",14),v.kc(73,"translate"),v.Mc(74,Y,2,3,"ng-template",15),v.Wb(),v.Xb(75,"ngx-datatable-column",14),v.kc(76,"translate"),v.Mc(77,H,2,3,"ng-template",15),v.Wb(),v.Xb(78,"ngx-datatable-column",14),v.kc(79,"translate"),v.Mc(80,Q,1,1,"ng-template",15),v.Wb(),v.Xb(81,"ngx-datatable-column",14),v.kc(82,"translate"),v.Mc(83,q,1,1,"ng-template",15),v.Wb(),v.Xb(84,"ngx-datatable-column",14),v.kc(85,"translate"),v.Mc(86,z,1,1,"ng-template",15),v.Wb(),v.Xb(87,"ngx-datatable-column",14),v.kc(88,"translate"),v.Mc(89,B,1,1,"ng-template",15),v.Wb(),v.Mc(90,$,2,0,"ngx-datatable-footer",16),v.Wb(),v.Wb(),v.Wb(),v.Mc(91,Z,4,1,"ng-template",null,17,v.Nc),v.Mc(93,at,4,1,"ng-template",null,18,v.Nc),v.Mc(95,ct,4,1,"ng-template",null,19,v.Nc),v.Mc(97,lt,4,1,"ng-template",null,20,v.Nc),v.Mc(99,rt,4,1,"ng-template",null,21,v.Nc),v.Mc(101,ut,4,1,"ng-template",null,22,v.Nc),v.Mc(103,st,4,1,"ng-template",null,23,v.Nc),v.Mc(105,mt,4,1,"ng-template",null,24,v.Nc),v.Mc(107,pt,4,1,"ng-template",null,25,v.Nc),v.Mc(109,ht,4,1,"ng-template",null,26,v.Nc),v.Mc(111,Et,4,1,"ng-template",null,27,v.Nc)),2&t){var e=v.Ac(9),c=v.Ac(29),n=v.Ac(92),l=v.Ac(94),o=v.Ac(96),r=v.Ac(98),i=v.Ac(100),u=v.Ac(102),b=v.Ac(104),s=v.Ac(106),f=v.Ac(108),m=v.Ac(110),d=v.Ac(112);v.Eb(4),v.Pc(v.lc(5,78,"SALES.STARTDATE")),v.Eb(2),v.pc("matDatepicker",e)("value",a.startDate),v.Eb(1),v.pc("for",e),v.Eb(5),v.Pc(v.lc(13,80,"SALES.HOUR")),v.Eb(2),v.pc("value",a.hours),v.Eb(1),v.pc("ngForOf",a.hoursArr),v.Eb(3),v.Pc(v.lc(19,82,"SALES.MINUTES")),v.Eb(2),v.pc("value",a.minutes),v.Eb(1),v.pc("ngForOf",a.minutesArr),v.Eb(3),v.Pc(v.lc(25,84,"SALES.ENDDATE")),v.Eb(2),v.pc("matDatepicker",c)("value",a.endDate),v.Eb(1),v.pc("for",c),v.Eb(5),v.Pc(v.lc(33,86,"SALES.HOUR")),v.Eb(2),v.pc("value",a.hours2),v.Eb(1),v.pc("ngForOf",a.hoursArr),v.Eb(3),v.Pc(v.lc(39,88,"SALES.MINUTES")),v.Eb(2),v.pc("value",a.minutes2),v.Eb(1),v.pc("ngForOf",a.minutesArr),v.Eb(3),v.Pc(v.lc(45,90,"SALES.BRANCH")),v.Eb(2),v.pc("value",a.sucursalActual),v.Eb(1),v.pc("ngForOf",a.sucursales),v.Eb(4),v.Pc(v.lc(52,92,"SALES.SHOW")),v.Eb(2),v.pc("@animate",v.vc(117,Wt,v.uc(116,Dt))),v.Eb(2),v.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",a.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",a.tabla2.rows)("selectionType","single"),v.Eb(2),v.qc("name",v.lc(58,94,"SALES.PRODUCT")),v.pc("cellClass",a.getCellClass)("summaryTemplate",n)("width",500),v.Eb(3),v.qc("name",v.lc(61,96,"SALES.RECEIPT")),v.pc("cellClass",a.getCellClass)("summaryTemplate",l)("width",150),v.Eb(3),v.qc("name",v.lc(64,98,"SALES.QUANTITY")),v.pc("cellClass",a.getCellClass)("summaryTemplate",o)("width",150),v.Eb(3),v.qc("name",v.lc(67,100,"SALES.AMOUNT")),v.pc("cellClass",a.getCellClass)("summaryTemplate",r)("width",150),v.Eb(3),v.qc("name",v.lc(70,102,"SALES.CODE")),v.pc("cellClass",a.getCellClass)("summaryTemplate",i)("width",200),v.Eb(3),v.qc("name",v.lc(73,104,"SALES.COST")),v.pc("cellClass",a.getCellClass)("summaryTemplate",u)("width",150),v.Eb(3),v.qc("name",v.lc(76,106,"SALES.PRICE")),v.pc("cellClass",a.getCellClass)("summaryTemplate",b)("width",150),v.Eb(3),v.qc("name",v.lc(79,108,"SALES.BUSINESSNAME")),v.pc("cellClass",a.getCellClass)("summaryTemplate",s)("width",200),v.Eb(3),v.qc("name",v.lc(82,110,"SALES.FAMILY")),v.pc("cellClass",a.getCellClass)("summaryTemplate",f)("width",225),v.Eb(3),v.qc("name",v.lc(85,112,"SALES.PROVIDER")),v.pc("cellClass",a.getCellClass)("summaryTemplate",m)("width",200),v.Eb(3),v.qc("name",v.lc(88,114,"SALES.EAN")),v.pc("cellClass",a.getCellClass)("summaryTemplate",d)("width",150),v.Eb(3),v.pc("ngIf",a.tabla2.data.length>0)}},directives:[C.a,D.c,D.b,W.c,D.a,W.f,X.b,k.b,k.d,W.h,k.a,S.a,o.n,O.b,P.a,C.b,y.d,y.b,y.a,o.o,T.n,y.e,y.c],pipes:[w.c,o.g,o.d],styles:[""],data:{animation:[r.a]}}),At),data:{title:"Por Producto"}}],kt=n("u9T3"),St=n("s7LF"),Ot=n("f44v"),Pt=n("jMqV"),yt=n("M9ds"),Tt=n("ZFy/"),wt=n("iInd"),xt=n("PCNd"),Mt=((Ct=function a(){t(this,a)}).\u0275mod=v.Pb({type:Ct}),Ct.\u0275inj=v.Ob({factory:function(t){return new(t||Ct)},imports:[[o.c,St.s,kt.a,y.f,X.c,X.c,C.c,X.c,O.c,Ot.a,X.c,Tt.b,E.f,A.b,Pt.b,yt.c,S.b,P.b,w.b,xt.a,k.c,wt.k.forChild(Xt)]]}),Ct)}}])}();