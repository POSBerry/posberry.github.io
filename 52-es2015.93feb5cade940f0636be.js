(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"o1+5":function(t,e,a){"use strict";a.r(e),a.d(e,"StockMovementsModule",function(){return Rt});var c=a("SVse"),n=a("s7LF"),o=a("GmJt"),l=a("3sEA"),i=a("wd/R"),s=a("bPAe"),r=a("CHRX"),b=a("UVsP"),u=a("AytR"),p=a("cp0P"),m=a("8Y7J"),d=a("IheW");let f=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,e,a){let c=`${u.a.apiURL}MovStock/DetalleDeMovStockEnUnaFecha?fdesde=${t}&fhasta=${e}`;return a&&(c=`${u.a.apiURL}MovStock/DetalleDeMovStockEnUnaFecha?fdesde=${t}&fhasta=${e}&idsucursal=${a}`),this.http.get(encodeURI(c))}obtenerDepositos(){return this.http.get(encodeURI(u.a.apiURL+'Depositos?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerMovStockItems(t){return this.http.get(encodeURI(`${u.a.apiURL}MovStockItems/DetalleDeMovStockPorId?idmovstock=${t}`))}obtenerDatosTabla2(t,e,a){let c=`${u.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}`;return a&&(c=`${u.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}&idsucursal=${a}`),this.http.get(encodeURI(c))}obtenerDatosVenta(t){return Object(p.a)([this.http.get(encodeURI(`${u.a.apiURL}Ventasitems/DetalleDeVentaPorId?idVenta=${t}`)),this.http.get(encodeURI(`${u.a.apiURL}Ventas/DetalleDeMovCajaVenta?idVenta=${t}`))])}}return t.\u0275fac=function(e){return new(e||t)(m.bc(d.c))},t.\u0275prov=m.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=a("iELJ"),g=a("zHaW"),D=a("PDjf"),v=a("VDRc"),O=a("Q2Ze"),k=a("e6WT"),M=a("n1FK"),W=a("TN/R"),E=a("ZTz/"),X=a("Dxy4"),C=a("Tj54"),w=a("w9WL"),S=a("UhP/"),T=a("TSSN");function A(t,e){if(1&t&&(m.Xb(0,"mat-option",43),m.Oc(1),m.Wb()),2&t){const t=e.$implicit;m.pc("value",t),m.Eb(1),m.Pc(null==t?null:t.nombre)}}function y(t,e){if(1&t&&(m.Oc(0),m.kc(1,"date")),2&t){const t=e.row;m.Qc(" ",m.mc(1,1,null==t?null:t.fMovimiento,"dd/MM/yyyy HH:mm:ss")," ")}}function x(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.idPV," ")}}function I(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.idNumDoc," ")}}function R(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sTipoMovStock," ")}}function N(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sObservacion," ")}}function P(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sDepOrigen," ")}}function j(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sDepDestino," ")}}function F(t,e){1&t&&(m.Xb(0,"span"),m.Oc(1,"Si"),m.Wb())}function V(t,e){1&t&&(m.Xb(0,"span"),m.Oc(1,"No"),m.Wb())}function Y(t,e){if(1&t&&(m.Mc(0,F,2,0,"span",25),m.Mc(1,V,2,0,"span",25)),2&t){const t=e.row;m.pc("ngIf","T"==(null==t?null:t.bAnulado)),m.Eb(1),m.pc("ngIf","F"==(null==t?null:t.bAnulado))}}function H(t,e){1&t&&(m.Xb(0,"span"),m.Oc(1,"Si"),m.Wb())}function U(t,e){1&t&&(m.Xb(0,"span"),m.Oc(1,"No"),m.Wb())}function L(t,e){if(1&t&&(m.Mc(0,H,2,0,"span",25),m.Mc(1,U,2,0,"span",25)),2&t){const t=e.row;m.pc("ngIf","T"==(null==t?null:t.bAplicado)),m.Eb(1),m.pc("ngIf","F"==(null==t?null:t.bAplicado))}}function $(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",45),m.fc("click",function(){m.Dc(t);const e=m.jc().row;return m.jc().openPopUp(e)}),m.Xb(1,"mat-icon"),m.Oc(2,"info"),m.Wb(),m.Wb()}}function q(t,e){1&t&&m.Mc(0,$,3,0,"button",44),2&t&&m.pc("ngIf",!e.row.isGroup)}function Q(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",11),m.fc("click",function(){return m.Dc(t),m.jc(3).export()}),m.Xb(1,"mat-icon"),m.Oc(2,"save_alt"),m.Wb(),m.Oc(3),m.kc(4,"translate"),m.Wb()}2&t&&(m.Eb(3),m.Qc("",m.lc(4,1,"VALUEDSTOCK.EXCEL")," "))}function _(t,e){if(1&t&&(m.Xb(0,"div",47),m.Sb(1,"hr",48),m.Xb(2,"div"),m.Oc(3),m.kc(4,"translate"),m.Wb(),m.Wb(),m.Xb(5,"div",49),m.Mc(6,Q,5,3,"button",50),m.Wb()),2&t){const t=m.jc(2);m.Eb(3),m.Rc("",m.lc(4,3,"Articulos Totales:"),"",t.tabla1.footer.count,""),m.Eb(3),m.pc("ngIf",t.tabla1.data.length>0)}}function G(t,e){1&t&&(m.Xb(0,"ngx-datatable-footer"),m.Mc(1,_,7,5,"ng-template",46),m.Wb())}function K(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",55),m.fc("click",function(e){m.Dc(t),m.jc();const a=m.Ac(2);return m.jc().tabla1.updateFilter(e,"fMovimiento")&&(a.value="")}),m.Xb(1,"mat-icon"),m.Oc(2,"close"),m.Wb(),m.Wb()}}function B(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52,53),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"fMovimiento")}),m.Wb(),m.Mc(3,K,3,0,"button",54),m.Wb()}if(2&t){const t=m.Ac(2);m.Eb(3),m.pc("ngIf",t.value)}}function J(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",55),m.fc("click",function(e){m.Dc(t),m.jc();const a=m.Ac(2);return m.jc().tabla1.updateFilter(e,"idPV")&&(a.value="")}),m.Xb(1,"mat-icon"),m.Oc(2,"close"),m.Wb(),m.Wb()}}function Z(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52,53),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"idPV")}),m.Wb(),m.Mc(3,J,3,0,"button",54),m.Wb()}if(2&t){const t=m.Ac(2);m.Eb(3),m.pc("ngIf",t.value)}}function z(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",55),m.fc("click",function(e){m.Dc(t),m.jc();const a=m.Ac(2);return m.jc().tabla1.updateFilter(e,"idNumDoc")&&(a.value="")}),m.Xb(1,"mat-icon"),m.Oc(2,"close"),m.Wb(),m.Wb()}}function tt(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52,53),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"idNumDoc")}),m.Wb(),m.Mc(3,z,3,0,"button",54),m.Wb()}if(2&t){const t=m.Ac(2);m.Eb(3),m.pc("ngIf",t.value)}}function et(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",55),m.fc("click",function(e){m.Dc(t),m.jc();const a=m.Ac(2);return m.jc().tabla1.updateFilter(e,"sTipoMovStock")&&(a.value="")}),m.Xb(1,"mat-icon"),m.Oc(2,"close"),m.Wb(),m.Wb()}}function at(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52,53),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"sTipoMovStock")}),m.Wb(),m.Mc(3,et,3,0,"button",54),m.Wb()}if(2&t){const t=m.Ac(2);m.Eb(3),m.pc("ngIf",t.value)}}function ct(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",55),m.fc("click",function(e){m.Dc(t),m.jc();const a=m.Ac(2);return m.jc().tabla1.updateFilter(e,"sObservacion")&&(a.value="")}),m.Xb(1,"mat-icon"),m.Oc(2,"close"),m.Wb(),m.Wb()}}function nt(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52,53),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"sObservacion")}),m.Wb(),m.Mc(3,ct,3,0,"button",54),m.Wb()}if(2&t){const t=m.Ac(2);m.Eb(3),m.pc("ngIf",t.value)}}function ot(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"mat-select",56),m.fc("selectionChange",function(e){return m.Dc(t),m.jc().tabla1.updateFilterBoolean(e.value,"bAnulado")}),m.Sb(2,"mat-option",57),m.Xb(3,"mat-option",58),m.Oc(4),m.kc(5,"translate"),m.Wb(),m.Xb(6,"mat-option",59),m.Oc(7),m.kc(8,"translate"),m.Wb(),m.Wb(),m.Wb()}2&t&&(m.Eb(4),m.Pc(m.lc(5,2,"YESNO.YES")),m.Eb(3),m.Pc(m.lc(8,4,"YESNO.NO")))}function lt(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"mat-select",56),m.fc("selectionChange",function(e){return m.Dc(t),m.jc().tabla1.updateFilterBoolean(e.value,"bAplicado")}),m.Sb(2,"mat-option",57),m.Xb(3,"mat-option",58),m.Oc(4),m.kc(5,"translate"),m.Wb(),m.Xb(6,"mat-option",59),m.Oc(7),m.kc(8,"translate"),m.Wb(),m.Wb(),m.Wb()}2&t&&(m.Eb(4),m.Pc(m.lc(5,2,"YESNO.YES")),m.Eb(3),m.Pc(m.lc(8,4,"YESNO.NO")))}function it(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",55),m.fc("click",function(e){m.Dc(t),m.jc();const a=m.Ac(2);return m.jc().tabla1.updateFilter(e,"sDepOrigen")&&(a.value="")}),m.Xb(1,"mat-icon"),m.Oc(2,"close"),m.Wb(),m.Wb()}}function st(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52,53),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"sDepOrigen")}),m.Wb(),m.Mc(3,it,3,0,"button",54),m.Wb()}if(2&t){const t=m.Ac(2);m.Eb(3),m.pc("ngIf",t.value)}}function rt(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",55),m.fc("click",function(e){m.Dc(t),m.jc();const a=m.Ac(2);return m.jc().tabla1.updateFilter(e,"sDepDestino")&&(a.value="")}),m.Xb(1,"mat-icon"),m.Oc(2,"close"),m.Wb(),m.Wb()}}function bt(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52,53),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"sDepDestino")}),m.Wb(),m.Mc(3,rt,3,0,"button",54),m.Wb()}if(2&t){const t=m.Ac(2);m.Eb(3),m.pc("ngIf",t.value)}}function ut(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sCodProducto," ")}}function pt(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sProducto," ")}}function mt(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.rCantidad," ")}}function dt(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sDeposito," ")}}function ft(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sOperador," ")}}function ht(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",11),m.fc("click",function(){return m.Dc(t),m.jc(3).export2Detalle()}),m.Xb(1,"mat-icon"),m.Oc(2,"save_alt"),m.Wb(),m.Oc(3),m.kc(4,"translate"),m.Wb()}2&t&&(m.Eb(3),m.Qc("",m.lc(4,1,"VALUEDSTOCK.EXCEL")," "))}function gt(t,e){if(1&t&&(m.Xb(0,"div",47),m.Sb(1,"hr",48),m.Xb(2,"div"),m.Xb(3,"div"),m.Oc(4),m.kc(5,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Xb(6,"div",49),m.Mc(7,ht,5,3,"button",50),m.Wb()),2&t){const t=m.jc(2);m.Eb(4),m.Rc("",m.lc(5,3,"Articulos Totales:"),"",t.tabla2.footer.count,""),m.Eb(3),m.pc("ngIf",t.tabla2.data.length>0)}}function Dt(t,e){1&t&&(m.Xb(0,"ngx-datatable-footer"),m.Mc(1,gt,8,5,"ng-template",46),m.Wb())}function vt(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla2.updateFilter(e,"sCodProducto")}),m.Wb(),m.Wb()}}function Ot(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla2.updateFilter(e,"sProducto ")}),m.Wb(),m.Wb()}}function kt(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla2.updateFilter(e,"rCantidad")}),m.Wb(),m.Wb()}}function Mt(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla2.updateFilter(e,"sOperador")}),m.Wb(),m.Wb()}}function Wt(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",51),m.Xb(1,"input",52),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla2.updateFilter(e,"sDeposito")}),m.Wb(),m.Wb()}}const Et=function(){return{y:"50px",delay:"300ms"}},Xt=function(t){return{value:"*",params:t}},Ct=[{path:"",component:(()=>{class t{constructor(t,e,a,c,o,l){this.dialog=t,this.servicioMovimientoDeStock=e,this.servicioExportarExcel=a,this.servicioSucursales=c,this.loader=o,this.snack=l,this.startDate=new n.e,this.endDate=new n.e}ngOnInit(){var t=new Date;t.setHours(0,0,0,0);var e=new Date;e.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(e),this.tabla1=new r.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new r.a,this.tabla2.groupField="",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.servicioMovimientoDeStock.obtenerDepositos().subscribe(t=>{this.depositos=t})}mostrarDeposito(t){var e=this.depositos.find(e=>e.iddeposito==t);return e?e.sdescripcion:t}export(){var t=this.tabla1.data.map(t=>({Movimiento:i(t.fMovimiento).format("DD/MM/YYYY HH:mm:ss"),PV:t.idPV,Numero:t.idNumDoc,Tipo:t.sTipoMovStock,Observacion:t.sObservacion,Origen:this.mostrarDeposito(t.idDepOrigen),Destino:this.mostrarDeposito(t.idDepDestino),Anulado:"T"==t.bAnulado?"Si":"No",Aplicado:"T"==t.bAplicado?"Si":"No"}));this.servicioExportarExcel.exportExcel(t,"movimientos_de_stock","movimientos_de_stock")}export2Detalle(){var t=this.tabla2.data.map(t=>({"Cod.Producto":t.sCodProducto,Producto:t.sProducto,Cantidad:t.rCantidad,Dep\u00f3sito:this.mostrarDeposito(t.idDeposito),Operador:t.sOperador}));this.servicioExportarExcel.exportExcel(t,"movimiento_de_stock_detalle","movimiento_de_stock_detalle")}refresh(){this.loader.open(),this.servicioMovimientoDeStock.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id).subscribe(t=>{t.forEach(t=>{t.sDepOrigen=this.mostrarDeposito(t.idDepOrigen),t.sDepDestino=this.mostrarDeposito(t.idDepDestino)}),this.tabla1.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla1OnActivate(t){"click"==t.type&&(t.row.isGroup?this.tabla1.setGroup(t.row):(this.tabla1.data.forEach(t=>t.isSelected=!1),t.row.isSelected=!0))}onSort(t){const e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}mostrarTabla2(t){this.loader.open(),this.servicioMovimientoDeStock.obtenerMovStockItems(t.id).subscribe(t=>{t.forEach(t=>{t.sDeposito=this.mostrarDeposito(t.idDeposito)}),this.tabla2.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}openPopUp(t){}}return t.\u0275fac=function(e){return new(e||t)(m.Rb(h.b),m.Rb(f),m.Rb(s.a),m.Rb(b.a),m.Rb(l.a),m.Rb(g.a))},t.\u0275cmp=m.Lb({type:t,selectors:[["app-stock-movements"]],decls:108,vars:155,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate","sort"],["myTable",""],["prop","fMovimiento",3,"cellClass","name","width","summaryTemplate"],["ngx-datatable-cell-template",""],["prop","idPV",3,"cellClass","name","summaryTemplate","width"],["prop","idNumDoc",3,"cellClass","summaryTemplate","name","width"],["prop","sTipoMovStock",3,"cellClass","summaryTemplate","name","width"],["prop","sObservacion",3,"cellClass","summaryTemplate","name","width"],["prop","sDepOrigen",3,"cellClass","summaryTemplate","name","width"],["prop","sDepDestino",3,"cellClass","summaryTemplate","name","width"],["prop","bAnulado",3,"cellClass","summaryTemplate","name","width"],["prop","bAplicado",3,"cellClass","summaryTemplate","name","width"],[3,"name","flexGrow","sortable"],[4,"ngIf"],["tabla1fMovimiento",""],["tabla1idPV",""],["tabla1idNumDoc",""],["tabla1sTipoMovStock",""],["tabla1sObservacion",""],["tabla1bAnulado",""],["tabla1bAplicado",""],["tabla1sDepOrigen",""],["tabla1sDepDestino",""],["summaryRow","true",1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],[3,"cellClass","summaryTemplate","name","width"],[3,"cellClass","name","summaryTemplate","width"],["tabla2sCodProducto",""],["tabla2sProducto",""],["tabla2rCantidad",""],["tabla2sOperador",""],["tabla2sDeposito",""],[3,"value"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[3,"selectionChange"],["value",""],["value","T"],["value","F"]],template:function(t,e){if(1&t&&(m.Xb(0,"mat-card",0),m.Xb(1,"div",1),m.Xb(2,"mat-form-field",2),m.Sb(3,"input",3),m.kc(4,"translate"),m.Sb(5,"mat-datepicker-toggle",4),m.Sb(6,"ngx-mat-datetime-picker",5,6),m.Wb(),m.Xb(8,"mat-form-field",2),m.Sb(9,"input",3),m.kc(10,"translate"),m.Sb(11,"mat-datepicker-toggle",4),m.Sb(12,"ngx-mat-datetime-picker",5,7),m.Wb(),m.Xb(14,"mat-form-field",8),m.Xb(15,"mat-label"),m.Oc(16),m.kc(17,"translate"),m.Wb(),m.Xb(18,"mat-select",9),m.fc("selectionChange",function(t){return e.seleccionarSucursal(t.value)})("valueChange",function(t){return e.sucursalActual=t}),m.Mc(19,A,2,2,"mat-option",10),m.Wb(),m.Wb(),m.Xb(20,"button",11),m.fc("click",function(){return e.refresh()}),m.Xb(21,"mat-icon"),m.Oc(22,"search"),m.Wb(),m.Oc(23),m.kc(24,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Xb(25,"mat-card",0),m.Xb(26,"mat-card-content",0),m.Xb(27,"ngx-datatable",12,13),m.fc("activate",function(t){return e.tabla1OnActivate(t)})("sort",function(t){return e.onSort(t)}),m.Xb(29,"ngx-datatable-column",14),m.kc(30,"translate"),m.Mc(31,y,2,4,"ng-template",15),m.Wb(),m.Xb(32,"ngx-datatable-column",16),m.kc(33,"translate"),m.Mc(34,x,1,1,"ng-template",15),m.Wb(),m.Xb(35,"ngx-datatable-column",17),m.kc(36,"translate"),m.Mc(37,I,1,1,"ng-template",15),m.Wb(),m.Xb(38,"ngx-datatable-column",18),m.kc(39,"translate"),m.Mc(40,R,1,1,"ng-template",15),m.Wb(),m.Xb(41,"ngx-datatable-column",19),m.kc(42,"translate"),m.Mc(43,N,1,1,"ng-template",15),m.Wb(),m.Xb(44,"ngx-datatable-column",20),m.kc(45,"translate"),m.Mc(46,P,1,1,"ng-template",15),m.Wb(),m.Xb(47,"ngx-datatable-column",21),m.kc(48,"translate"),m.Mc(49,j,1,1,"ng-template",15),m.Wb(),m.Xb(50,"ngx-datatable-column",22),m.kc(51,"translate"),m.Mc(52,Y,2,2,"ng-template",15),m.Wb(),m.Xb(53,"ngx-datatable-column",23),m.kc(54,"translate"),m.Mc(55,L,2,2,"ng-template",15),m.Wb(),m.Xb(56,"ngx-datatable-column",24),m.kc(57,"translate"),m.Mc(58,q,1,1,"ng-template",15),m.Wb(),m.Mc(59,G,2,0,"ngx-datatable-footer",25),m.Wb(),m.Wb(),m.Wb(),m.Mc(60,B,4,1,"ng-template",null,26,m.Nc),m.Mc(62,Z,4,1,"ng-template",null,27,m.Nc),m.Mc(64,tt,4,1,"ng-template",null,28,m.Nc),m.Mc(66,at,4,1,"ng-template",null,29,m.Nc),m.Mc(68,nt,4,1,"ng-template",null,30,m.Nc),m.Mc(70,ot,9,6,"ng-template",null,31,m.Nc),m.Mc(72,lt,9,6,"ng-template",null,32,m.Nc),m.Mc(74,st,4,1,"ng-template",null,33,m.Nc),m.Mc(76,bt,4,1,"ng-template",null,34,m.Nc),m.Xb(78,"mat-card",0),m.Xb(79,"mat-card-content",0),m.Xb(80,"ngx-datatable",35,13),m.fc("activate",function(t){return e.tabla2OnActivate(t)}),m.Xb(82,"ngx-datatable-column",36),m.kc(83,"translate"),m.Mc(84,ut,1,1,"ng-template",15),m.Wb(),m.Xb(85,"ngx-datatable-column",37),m.kc(86,"translate"),m.Mc(87,pt,1,1,"ng-template",15),m.Wb(),m.Xb(88,"ngx-datatable-column",36),m.kc(89,"translate"),m.Mc(90,mt,1,1,"ng-template",15),m.Wb(),m.Xb(91,"ngx-datatable-column",36),m.kc(92,"translate"),m.Mc(93,dt,1,1,"ng-template",15),m.Wb(),m.Xb(94,"ngx-datatable-column",36),m.kc(95,"translate"),m.Mc(96,ft,1,1,"ng-template",15),m.Wb(),m.Mc(97,Dt,2,0,"ngx-datatable-footer",25),m.Wb(),m.Wb(),m.Wb(),m.Mc(98,vt,2,0,"ng-template",null,38,m.Nc),m.Mc(100,Ot,2,0,"ng-template",null,39,m.Nc),m.Mc(102,kt,2,0,"ng-template",null,40,m.Nc),m.Mc(104,Mt,2,0,"ng-template",null,41,m.Nc),m.Mc(106,Wt,2,0,"ng-template",null,42,m.Nc)),2&t){const t=m.Ac(7),a=m.Ac(13),c=m.Ac(61),n=m.Ac(63),o=m.Ac(65),l=m.Ac(67),i=m.Ac(69),s=m.Ac(71),r=m.Ac(73),b=m.Ac(75),u=m.Ac(77),p=m.Ac(99),d=m.Ac(101),f=m.Ac(103),h=m.Ac(105),g=m.Ac(107);m.Eb(3),m.qc("placeholder",m.lc(4,111,"SALES.STARTDATE")),m.pc("ngxMatDatetimePicker",t)("formControl",e.startDate),m.Eb(2),m.pc("for",t),m.Eb(1),m.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),m.Eb(3),m.qc("placeholder",m.lc(10,113,"SALES.ENDDATE")),m.pc("ngxMatDatetimePicker",a)("formControl",e.endDate),m.Eb(2),m.pc("for",a),m.Eb(1),m.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),m.Eb(4),m.Pc(m.lc(17,115,"STATISTICSCOMPONENT.BRANCH")),m.Eb(2),m.pc("value",e.sucursalActual),m.Eb(1),m.pc("ngForOf",e.sucursales),m.Eb(4),m.Qc("",m.lc(24,117,"VALUEDSTOCK.SHOW")," "),m.Eb(2),m.pc("@animate",m.vc(150,Xt,m.uc(149,Et))),m.Eb(2),m.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("selectionType","single"),m.Eb(2),m.qc("name",m.lc(30,119,"MOVIMIENTO")),m.pc("cellClass",e.getCellClass)("width",150)("summaryTemplate",c),m.Eb(3),m.qc("name",m.lc(33,121,"PV")),m.pc("cellClass",e.getCellClass)("summaryTemplate",n)("width",100),m.Eb(3),m.qc("name",m.lc(36,123,"N\xfamero")),m.pc("cellClass",e.getCellClass)("summaryTemplate",o)("width",100),m.Eb(3),m.qc("name",m.lc(39,125,"TIPO")),m.pc("cellClass",e.getCellClass)("summaryTemplate",l)("width",200),m.Eb(3),m.qc("name",m.lc(42,127,"OBSERVACION")),m.pc("cellClass",e.getCellClass)("summaryTemplate",i)("width",325),m.Eb(3),m.qc("name",m.lc(45,129,"ORIGEN")),m.pc("cellClass",e.getCellClass)("summaryTemplate",b)("width",150),m.Eb(3),m.qc("name",m.lc(48,131,"Destino")),m.pc("cellClass",e.getCellClass)("summaryTemplate",u)("width",150),m.Eb(3),m.qc("name",m.lc(51,133,"Anulado")),m.pc("cellClass",e.getCellClass)("summaryTemplate",s)("width",100),m.Eb(3),m.qc("name",m.lc(54,135,"Aplicado")),m.pc("cellClass",e.getCellClass)("summaryTemplate",r)("width",100),m.Eb(3),m.qc("name",m.lc(57,137,"SALES.ACTIONS")),m.pc("flexGrow",1)("sortable",!1),m.Eb(3),m.pc("ngIf",e.tabla1.data.length>0),m.Eb(19),m.pc("@animate",m.vc(153,Xt,m.uc(152,Et))),m.Eb(2),m.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla2.rows)("selectionType","single"),m.Eb(2),m.qc("name",m.lc(83,139,"CODIGO DE PRODUCTO")),m.pc("cellClass",e.getCellClass)("summaryTemplate",p)("width",200),m.Eb(3),m.qc("name",m.lc(86,141,"PRODUCTO")),m.pc("cellClass",e.getCellClass)("summaryTemplate",d)("width",500),m.Eb(3),m.qc("name",m.lc(89,143,"CANTIDAD")),m.pc("cellClass",e.getCellClass)("summaryTemplate",f)("width",150),m.Eb(3),m.qc("name",m.lc(92,145,"DEPOSITO")),m.pc("cellClass",e.getCellClass)("summaryTemplate",g)("width",150),m.Eb(3),m.qc("name",m.lc(95,147,"OPERADOR")),m.pc("cellClass",e.getCellClass)("summaryTemplate",h)("width",200),m.Eb(3),m.pc("ngIf",e.tabla2.data.length>0)}},directives:[D.a,v.c,v.b,O.c,k.b,M.a,n.c,n.o,n.f,W.h,O.h,M.b,v.a,O.f,E.a,c.n,X.b,C.a,D.b,w.d,w.b,w.a,c.o,S.n,w.e,w.c],pipes:[T.c,c.f],styles:[".ngxselected{background-color:#f2883d;border-top:1px solid #eb6608;border-bottom:1px solid #eb6608}"],data:{animation:[o.a]}}),t})(),data:{title:"MOVIMIENTOS DE STOCK"}}];var wt=a("iInd"),St=a("u9T3"),Tt=a("f44v"),At=a("jMqV"),yt=a("M9ds"),xt=a("ZFy/"),It=a("PCNd");let Rt=(()=>{class t{}return t.\u0275mod=m.Pb({type:t}),t.\u0275inj=m.Ob({factory:function(e){return new(e||t)},imports:[[c.c,n.t,St.a,w.f,k.c,k.c,D.c,k.c,X.c,Tt.a,k.c,xt.b,h.f,g.b,At.b,yt.c,E.b,C.b,T.b,It.a,W.g,M.c,M.e,M.d,n.j,wt.k.forChild(Ct)]]}),t})()}}]);