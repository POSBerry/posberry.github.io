(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1RXB":function(t,e,a){"use strict";a.r(e),a.d(e,"VatSalesModule",function(){return Wt});var n=a("SVse"),l=a("GmJt"),c=a("3sEA"),o=a("wd/R"),r=a("bPAe"),s=a("CHRX"),i=a("UVsP"),u=a("AytR"),b=a("cp0P"),p=a("8Y7J"),m=a("IheW");let f=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,e,a){let n=`${u.a.apiURL}Ventas/DocumentosDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}`;return a&&(n=`${u.a.apiURL}Ventas/DocumentosDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}&idsucursal=${a}`),this.http.get(encodeURI(n))}obtenerDatosTabla2(t,e,a){let n=`${u.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}`;return a&&(n=`${u.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}&idsucursal=${a}`),this.http.get(encodeURI(n))}obtenerDatosVenta(t){return Object(b.a)([this.http.get(encodeURI(`${u.a.apiURL}Ventasitems/DetalleDeVentaPorId?idVenta=${t}`)),this.http.get(encodeURI(`${u.a.apiURL}Ventas/DetalleDeMovCajaVenta?idVenta=${t}`))])}}return t.\u0275fac=function(e){return new(e||t)(p.bc(m.c))},t.\u0275prov=p.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=a("iELJ"),h=a("zHaW"),g=a("PDjf"),v=a("VDRc"),w=a("Q2Ze"),E=a("e6WT"),A=a("TN/R"),y=a("ZTz/"),C=a("Dxy4"),D=a("Tj54"),S=a("w9WL"),T=a("UhP/"),W=a("TSSN");function X(t,e){if(1&t&&(p.Xb(0,"mat-option",48),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(t.toString())}}function k(t,e){if(1&t&&(p.Xb(0,"mat-option",48),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(t.toString())}}function O(t,e){if(1&t&&(p.Xb(0,"mat-option",48),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(t.toString())}}function I(t,e){if(1&t&&(p.Xb(0,"mat-option",48),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(t.toString())}}function x(t,e){if(1&t&&(p.Xb(0,"mat-option",48),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.nombre)}}function R(t,e){if(1&t&&(p.Oc(0),p.kc(1,"date")),2&t){const t=e.row;p.Qc(" ",p.mc(1,1,null==t?null:t.fDocumento,"dd/MM/yyyy HH:mm:ss")," ")}}function V(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.idTipoDoc," ")}}function M(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.idPV," ")}}function F(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.idNumDoc," ")}}function L(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sRazonSocial," ")}}function N(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sCUIT," ")}}function U(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sProvincia," ")}}function P(t,e){1&t&&(p.Xb(0,"span"),p.Oc(1,"Si"),p.Wb())}function j(t,e){1&t&&(p.Xb(0,"span"),p.Oc(1,"No"),p.Wb())}function Y(t,e){if(1&t&&(p.Mc(0,P,2,0,"span",31),p.Mc(1,j,2,0,"span",31)),2&t){const t=e.row;p.pc("ngIf","T"==(null==t?null:t.bAnulado)),p.Eb(1),p.pc("ngIf","F"==(null==t?null:t.bAnulado))}}function H(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sCondVenta," ")}}function $(t,e){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){const t=e.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rTotNeto)," ")}}function q(t,e){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){const t=e.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rTotDescuento)," ")}}function B(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.rIVA0," ")}}function Q(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.rIVA105," ")}}function G(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.rIVA21," ")}}function _(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.rDGR," ")}}function z(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.rInterno," ")}}function J(t,e){if(1&t){const t=p.Yb();p.Xb(0,"button",11),p.fc("click",function(){return p.Dc(t),p.jc(3).export()}),p.Xb(1,"mat-icon"),p.Oc(2,"save_alt"),p.Wb(),p.Oc(3),p.kc(4,"translate"),p.Wb()}2&t&&(p.Eb(3),p.Pc(p.lc(4,1,"SALES.EXCEL")))}function Z(t,e){if(1&t&&(p.Xb(0,"div",50),p.Sb(1,"hr",51),p.Xb(2,"div"),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Wb(),p.Xb(5,"div",52),p.Mc(6,J,5,3,"button",53),p.Wb()),2&t){const t=p.jc(2);p.Eb(3),p.Rc("",p.lc(4,3,"Articulos Totales:"),"",t.tabla1.footer.count," "),p.Eb(3),p.pc("ngIf",t.tabla1.data.length>0)}}function K(t,e){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,Z,7,5,"ng-template",49),p.Wb())}function tt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"fDocumento")}),p.Wb(),p.Wb()}}function et(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"idTipoDoc")}),p.Wb(),p.Wb()}}function at(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"idPV")}),p.Wb(),p.Wb()}}function nt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"idNumDoc")}),p.Wb(),p.Wb()}}function lt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sRazonSocial")}),p.Wb(),p.Wb()}}function ct(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sCUIT")}),p.Wb(),p.Wb()}}function ot(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sCondicionIVA")}),p.Wb(),p.Wb()}}function rt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"mat-select",56),p.fc("selectionChange",function(e){return p.Dc(t),p.jc().tabla1.updateFilterBoolean(e.value,"bAnulado")}),p.Sb(2,"mat-option",57),p.Xb(3,"mat-option",58),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Xb(6,"mat-option",59),p.Oc(7),p.kc(8,"translate"),p.Wb(),p.Wb(),p.Wb()}2&t&&(p.Eb(4),p.Pc(p.lc(5,2,"YESNO.YES")),p.Eb(3),p.Pc(p.lc(8,4,"YESNO.NO")))}function st(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sCondVenta")}),p.Wb(),p.Wb()}}function it(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",60),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"rTotNeto")}),p.Wb(),p.Wb()}}function ut(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",60),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"rTotDescuento")}),p.Wb(),p.Wb()}}function bt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"rIVA0")}),p.Wb(),p.Wb()}}function pt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"rIVA105")}),p.Wb(),p.Wb()}}function mt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"rIVA21")}),p.Wb(),p.Wb()}}function ft(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"rDGR")}),p.Wb(),p.Wb()}}function dt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",54),p.Xb(1,"input",55),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"rInterno")}),p.Wb(),p.Wb()}}const ht=function(){return{y:"50px",delay:"300ms"}},gt=function(t){return{value:"*",params:t}},vt=[{path:"",component:(()=>{class t{constructor(t,e,a,n,l,c){this.dialog=t,this.servicioIvaVentas=e,this.servicioExportarExcel=a,this.servicioSucursales=n,this.loader=l,this.snack=c,this.hours=0,this.minutes=0,this.hours2=0,this.minutes2=0,this.hoursArr=[],this.minutesArr=[],this.startDate=new Date,this.endDate=new Date;for(var o=0;o<=23;o++)this.hoursArr.push(o);for(o=0;o<=59;o++)this.minutesArr.push(o);this.minutes=this.minutesArr[0],this.minutes2=this.minutesArr[this.minutesArr.length-1],this.hours=this.hoursArr[0],this.hours2=this.hoursArr[this.hoursArr.length-1]}ngOnInit(){this.tabla1=new s.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}export(){var t=this.tabla1.data.map(t=>({Fecha:o(t.fDocumento).format("DD/MM/YYYY HH:mm:ss"),Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Cliente:t.sRazonSocial,CUIT:t.sCUIT,Anulado:"T"==t.bAnulado?"Si":"No",Confirmado:"T"==t.bConfirmado?"Si":"No","Condici\xf3n Venta":t.sCondVenta,Neto:t.rTotNeto,"IVA 0":t.rIVA0,"IVA 10,5":t.rIVA105,"IVA 21":t.rIVA21,DGR:t.rDGR,Interno:t.rInterno,"Total Impuestos":t.rTotImpuestos,Total:t.rTotBruto}));this.servicioExportarExcel.exportExcel(t,"IVA_ventas","IVA_venta")}refresh(){this.startDate.setHours(this.hours,this.minutes,0,0),this.endDate.setHours(this.hours2,this.minutes2,59,999),this.loader.open(),this.servicioIvaVentas.obtenerDatosTabla1(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.id).subscribe(t=>{this.tabla1.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}onSort(t){const e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla1OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}}return t.\u0275fac=function(e){return new(e||t)(p.Rb(d.b),p.Rb(f),p.Rb(r.a),p.Rb(i.a),p.Rb(c.a),p.Rb(h.a))},t.\u0275cmp=p.Lb({type:t,selectors:[["app-vat-sales"]],decls:138,vars:150,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker1",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","8",1,"m-8"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["picker2",""],[3,"value","selectionChange","valueChange"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","externalSorting","selectionType","activate","sort"],["myTable",""],["prop","fDocumento",3,"cellClass","summaryTemplate","name","width"],["ngx-datatable-cell-template",""],["prop","idTipoDoc",3,"cellClass","summaryTemplate","name","width"],["prop","idPV",3,"cellClass","summaryTemplate","name","width"],["prop","idNumDoc",3,"cellClass","summaryTemplate","name","width"],["prop","sRazonSocial",3,"cellClass","summaryTemplate","name","width"],["prop","sCUIT",3,"cellClass","summaryTemplate","name","width"],["prop","sProvincia",3,"cellClass","summaryTemplate","name","width"],["prop","bAnulado",3,"cellClass","summaryTemplate","name","width"],["prop","sCondVenta",3,"cellClass","summaryTemplate","name","width"],["prop","rTotNeto",3,"cellClass","summaryTemplate","name","width"],["prop","rTotDescuento",3,"cellClass","summaryTemplate","name","width"],["prop","sIVA0",3,"cellClass","summaryTemplate","name","width"],["prop","rIVA105",3,"cellClass","summaryTemplate","name","width"],["prop","rIVA21",3,"cellClass","summaryTemplate","name","width"],["prop","rDGR",3,"cellClass","summaryTemplate","name","width"],["prop","rInterno",3,"cellClass","summaryTemplate","name","width"],[4,"ngIf"],["tabla1fDocumento",""],["tabla1idTipoDoc",""],["tabla1idPV",""],["tabla1idNumDoc",""],["tabla1sRazonSocial",""],["tabla1sCUIT",""],["tabla1sCondicionIVA",""],["tabla1bAnulado",""],["tabla1sCondVenta",""],["tabla1rTotNeto",""],["tabla1rTotDescuento",""],["tabla1rIVA0",""],["tabla1rIVA105",""],["tabla1rIVA21",""],["tabla1rDGR",""],["tabla1rInterno",""],[3,"value"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],[3,"selectionChange"],["value",""],["value","T"],["value","F"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(p.Xb(0,"mat-card",0),p.Xb(1,"div",1),p.Xb(2,"mat-form-field",2),p.Xb(3,"mat-label"),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Xb(6,"input",3),p.fc("dateChange",function(t){return e.updateDate1(t)}),p.Wb(),p.Sb(7,"mat-datepicker-toggle",4),p.Sb(8,"mat-datepicker",null,5),p.Wb(),p.Xb(10,"mat-form-field",6),p.Xb(11,"mat-label"),p.Oc(12),p.kc(13,"translate"),p.Wb(),p.Xb(14,"mat-select",7),p.fc("valueChange",function(t){return e.hours=t}),p.Mc(15,X,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(16,"mat-form-field",6),p.Xb(17,"mat-label"),p.Oc(18),p.kc(19,"translate"),p.Wb(),p.Xb(20,"mat-select",7),p.fc("valueChange",function(t){return e.minutes=t}),p.Mc(21,k,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(22,"mat-form-field",2),p.Xb(23,"mat-label"),p.Oc(24),p.kc(25,"translate"),p.Wb(),p.Xb(26,"input",3),p.fc("dateChange",function(t){return e.updateDate2(t)}),p.Wb(),p.Sb(27,"mat-datepicker-toggle",4),p.Sb(28,"mat-datepicker",null,9),p.Wb(),p.Xb(30,"mat-form-field",6),p.Xb(31,"mat-label"),p.Oc(32),p.kc(33,"translate"),p.Wb(),p.Xb(34,"mat-select",7),p.fc("valueChange",function(t){return e.hours2=t}),p.Mc(35,O,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(36,"mat-form-field",6),p.Xb(37,"mat-label"),p.Oc(38),p.kc(39,"translate"),p.Wb(),p.Xb(40,"mat-select",7),p.fc("valueChange",function(t){return e.minutes2=t}),p.Mc(41,I,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(42,"mat-form-field",2),p.Xb(43,"mat-label"),p.Oc(44),p.kc(45,"translate"),p.Wb(),p.Xb(46,"mat-select",10),p.fc("selectionChange",function(t){return e.seleccionarSucursal(t.value)})("valueChange",function(t){return e.sucursalActual=t}),p.Mc(47,x,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(48,"button",11),p.fc("click",function(){return e.refresh()}),p.Xb(49,"mat-icon"),p.Oc(50,"search"),p.Wb(),p.Oc(51),p.kc(52,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Xb(53,"mat-card",0),p.Xb(54,"mat-card-content",0),p.Xb(55,"ngx-datatable",12,13),p.fc("activate",function(t){return e.tabla1OnActivate(t)})("sort",function(t){return e.onSort(t)}),p.Xb(57,"ngx-datatable-column",14),p.kc(58,"translate"),p.Mc(59,R,2,4,"ng-template",15),p.Wb(),p.Xb(60,"ngx-datatable-column",16),p.kc(61,"translate"),p.Mc(62,V,1,1,"ng-template",15),p.Wb(),p.Xb(63,"ngx-datatable-column",17),p.kc(64,"translate"),p.Mc(65,M,1,1,"ng-template",15),p.Wb(),p.Xb(66,"ngx-datatable-column",18),p.kc(67,"translate"),p.Mc(68,F,1,1,"ng-template",15),p.Wb(),p.Xb(69,"ngx-datatable-column",19),p.kc(70,"translate"),p.Mc(71,L,1,1,"ng-template",15),p.Wb(),p.Xb(72,"ngx-datatable-column",20),p.kc(73,"translate"),p.Mc(74,N,1,1,"ng-template",15),p.Wb(),p.Xb(75,"ngx-datatable-column",21),p.kc(76,"translate"),p.Mc(77,U,1,1,"ng-template",15),p.Wb(),p.Xb(78,"ngx-datatable-column",22),p.kc(79,"translate"),p.Mc(80,Y,2,2,"ng-template",15),p.Wb(),p.Xb(81,"ngx-datatable-column",23),p.kc(82,"translate"),p.Mc(83,H,1,1,"ng-template",15),p.Wb(),p.Xb(84,"ngx-datatable-column",24),p.kc(85,"translate"),p.Mc(86,$,2,3,"ng-template",15),p.Wb(),p.Xb(87,"ngx-datatable-column",25),p.kc(88,"translate"),p.Mc(89,q,2,3,"ng-template",15),p.Wb(),p.Xb(90,"ngx-datatable-column",26),p.kc(91,"translate"),p.Mc(92,B,1,1,"ng-template",15),p.Wb(),p.Xb(93,"ngx-datatable-column",27),p.kc(94,"translate"),p.Mc(95,Q,1,1,"ng-template",15),p.Wb(),p.Xb(96,"ngx-datatable-column",28),p.kc(97,"translate"),p.Mc(98,G,1,1,"ng-template",15),p.Wb(),p.Xb(99,"ngx-datatable-column",29),p.kc(100,"translate"),p.Mc(101,_,1,1,"ng-template",15),p.Wb(),p.Xb(102,"ngx-datatable-column",30),p.kc(103,"translate"),p.Mc(104,z,1,1,"ng-template",15),p.Wb(),p.Mc(105,K,2,0,"ngx-datatable-footer",31),p.Wb(),p.Wb(),p.Wb(),p.Mc(106,tt,2,0,"ng-template",null,32,p.Nc),p.Mc(108,et,2,0,"ng-template",null,33,p.Nc),p.Mc(110,at,2,0,"ng-template",null,34,p.Nc),p.Mc(112,nt,2,0,"ng-template",null,35,p.Nc),p.Mc(114,lt,2,0,"ng-template",null,36,p.Nc),p.Mc(116,ct,2,0,"ng-template",null,37,p.Nc),p.Mc(118,ot,2,0,"ng-template",null,38,p.Nc),p.Mc(120,rt,9,6,"ng-template",null,39,p.Nc),p.Mc(122,st,2,0,"ng-template",null,40,p.Nc),p.Mc(124,it,2,0,"ng-template",null,41,p.Nc),p.Mc(126,ut,2,0,"ng-template",null,42,p.Nc),p.Mc(128,bt,2,0,"ng-template",null,43,p.Nc),p.Mc(130,pt,2,0,"ng-template",null,44,p.Nc),p.Mc(132,mt,2,0,"ng-template",null,45,p.Nc),p.Mc(134,ft,2,0,"ng-template",null,46,p.Nc),p.Mc(136,dt,2,0,"ng-template",null,47,p.Nc)),2&t){const t=p.Ac(9),a=p.Ac(29),n=p.Ac(107),l=p.Ac(109),c=p.Ac(111),o=p.Ac(113),r=p.Ac(115),s=p.Ac(117),i=p.Ac(119),u=p.Ac(121),b=p.Ac(123),m=p.Ac(125),f=p.Ac(127),d=p.Ac(129),h=p.Ac(131),g=p.Ac(133),v=p.Ac(135),w=p.Ac(137);p.Eb(4),p.Pc(p.lc(5,99,"SALES.STARTDATE")),p.Eb(2),p.pc("matDatepicker",t)("value",e.startDate),p.Eb(1),p.pc("for",t),p.Eb(5),p.Pc(p.lc(13,101,"SALES.HOUR")),p.Eb(2),p.pc("value",e.hours),p.Eb(1),p.pc("ngForOf",e.hoursArr),p.Eb(3),p.Pc(p.lc(19,103,"SALES.MINUTES")),p.Eb(2),p.pc("value",e.minutes),p.Eb(1),p.pc("ngForOf",e.minutesArr),p.Eb(3),p.Pc(p.lc(25,105,"SALES.ENDDATE")),p.Eb(2),p.pc("matDatepicker",a)("value",e.endDate),p.Eb(1),p.pc("for",a),p.Eb(5),p.Pc(p.lc(33,107,"SALES.HOUR")),p.Eb(2),p.pc("value",e.hours2),p.Eb(1),p.pc("ngForOf",e.hoursArr),p.Eb(3),p.Pc(p.lc(39,109,"SALES.MINUTES")),p.Eb(2),p.pc("value",e.minutes2),p.Eb(1),p.pc("ngForOf",e.minutesArr),p.Eb(3),p.Pc(p.lc(45,111,"SALES.BRANCH")),p.Eb(2),p.pc("value",e.sucursalActual),p.Eb(1),p.pc("ngForOf",e.sucursales),p.Eb(4),p.Pc(p.lc(52,113,"SALES.SHOW")),p.Eb(2),p.pc("@animate",p.vc(148,gt,p.uc(147,ht))),p.Eb(2),p.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("externalSorting",!0)("selectionType","single"),p.Eb(2),p.qc("name",p.lc(58,115,"SALES.DATE")),p.pc("cellClass",e.getCellClass)("summaryTemplate",n)("width",150),p.Eb(3),p.qc("name",p.lc(61,117,"SALES.TYPE")),p.pc("cellClass",e.getCellClass)("summaryTemplate",l)("width",150),p.Eb(3),p.qc("name",p.lc(64,119,"SALES.PV")),p.pc("cellClass",e.getCellClass)("summaryTemplate",c)("width",150),p.Eb(3),p.qc("name",p.lc(67,121,"SALES.NUMBER")),p.pc("cellClass",e.getCellClass)("summaryTemplate",o)("width",150),p.Eb(3),p.qc("name",p.lc(70,123,"SALES.CLIENT")),p.pc("cellClass",e.getCellClass)("summaryTemplate",r)("width",150),p.Eb(3),p.qc("name",p.lc(73,125,"CUIT")),p.pc("cellClass",e.getCellClass)("summaryTemplate",s)("width",150),p.Eb(3),p.qc("name",p.lc(76,127,"Provincia")),p.pc("cellClass",e.getCellClass)("summaryTemplate",i)("width",150),p.Eb(3),p.qc("name",p.lc(79,129,"SALES.CANCELED")),p.pc("cellClass",e.getCellClass)("summaryTemplate",u)("width",150),p.Eb(3),p.qc("name",p.lc(82,131,"SALES.SALESCONDITION")),p.pc("cellClass",e.getCellClass)("summaryTemplate",b)("width",150),p.Eb(3),p.qc("name",p.lc(85,133,"SALES.TOTAL")),p.pc("cellClass",e.getCellClass)("summaryTemplate",m)("width",150),p.Eb(3),p.qc("name",p.lc(88,135,"SALES.DISCOUNTS")),p.pc("cellClass",e.getCellClass)("summaryTemplate",f)("width",150),p.Eb(3),p.qc("name",p.lc(91,137,"iva 0")),p.pc("cellClass",e.getCellClass)("summaryTemplate",d)("width",150),p.Eb(3),p.qc("name",p.lc(94,139,"IVA 10.5")),p.pc("cellClass",e.getCellClass)("summaryTemplate",h)("width",150),p.Eb(3),p.qc("name",p.lc(97,141,"IVA 21")),p.pc("cellClass",e.getCellClass)("summaryTemplate",g)("width",150),p.Eb(3),p.qc("name",p.lc(100,143,"IIBB")),p.pc("cellClass",e.getCellClass)("summaryTemplate",v)("width",150),p.Eb(3),p.qc("name",p.lc(103,145,"Impuesto Interno")),p.pc("cellClass",e.getCellClass)("summaryTemplate",w)("width",150),p.Eb(3),p.pc("ngIf",e.tabla1.data.length>0)}},directives:[g.a,v.c,v.b,w.c,v.a,w.f,E.b,A.b,A.d,w.h,A.a,y.a,n.n,C.b,D.a,g.b,S.d,S.b,S.a,n.o,T.n,S.e,S.c],pipes:[W.c,n.f,n.d],styles:[""],data:{animation:[l.a]}}),t})(),data:{title:"IVA VENTAS"}}];var wt=a("iInd"),Et=a("u9T3"),At=a("s7LF"),yt=a("f44v"),Ct=a("jMqV"),Dt=a("M9ds"),St=a("ZFy/"),Tt=a("PCNd");let Wt=(()=>{class t{}return t.\u0275mod=p.Pb({type:t}),t.\u0275inj=p.Ob({factory:function(e){return new(e||t)},imports:[[n.c,At.s,Et.a,S.f,E.c,E.c,g.c,E.c,C.c,yt.a,E.c,St.b,d.e,h.b,Ct.b,Dt.c,y.b,D.b,W.b,Tt.a,A.c,wt.k.forChild(vt)]]}),t})()},CHRX:function(t,e,a){"use strict";a.d(e,"a",function(){return l});var n=a("wd/R");class l{constructor(){this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}setGroup(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}setData(t){this.data=t,this.sortData()}sortData(){this.data.sort((t,e)=>{if(t[this.groupField]==e[this.groupField]){if(this.secondarySort){if(t[this.secondarySort]>e[this.secondarySort])return 1*("desc"===this.sortDir?-1:1);if(t[this.secondarySort]<e[this.secondarySort])return-1*("desc"===this.sortDir?-1:1)}}else{if(t[this.groupField]>e[this.groupField])return 1;if(t[this.groupField]<e[this.groupField])return-1}return 0}),this.filterRows()}filterRows(){var t=[];t=this.data.filter(t=>{for(var e in this.filter)switch(typeof t[e]){case"number":if(this.filter[e]&&t[e].toString()!==this.filter[e].toString())return!1;break;case"string":if("f"==e.charAt(0).toLowerCase()&&n(t[e]).isValid){if(-1==n(t[e]).format("DD/MM/YYYY HH:mm:ss").indexOf(this.filter[e]))return!1;break}if(-1==t[e].toLowerCase().indexOf(this.filter[e].toLowerCase()))return!1}return!0}),t=this.customFilter(t);var e={};this.groupField?e[this.groupField]=t.length.toString():e.count=t.length.toString(),this.sum.forEach(t=>e[t]=0);for(var a=0;a<t.length;a++)this.sum.forEach(n=>e[n]+=t[a][n]);if(e.isGroup=!0,this.footer=e,this.groupField){var l=[];t.forEach(t=>{-1==l.indexOf(t[this.groupField])&&l.push(t[this.groupField])}),l=l.map(t=>({name:t,count:1}));var c=[],o=!0,r=0,s=null,i=()=>{s&&(s[this.groupField]+=" ("+l[r-1].count.toString()+")")};for(a=0;a<t.length;a++){if(o&&t[a][this.groupField]==l[r].name){i();var u="+";this.groups[l[r].name]&&(u="-"),s={[this.groupField]:u+" "+l[r].name,isGroup:!0,name:l[r].name},this.sum.forEach(t=>s[t]=0),c.push(s),o=++r<l.length}else l[r-1].count++;this.sum.forEach(e=>s[e]+=t[a][e]),c.push(t[a])}i(),t=null,c=c.filter(t=>!!t.isGroup||!!this.groups[t[this.groupField]]||void 0),this.rows=c}else this.rows=t;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}updateFilter(t,e){t&&e&&(this.filter[e]=t.target.value,this.filterRows())}updateFilterBoolean(t,e){this.filter[e]=t,this.filterRows()}}},Iab2:function(t,e,a){var n,l;void 0===(l="function"==typeof(n=function(){"use strict";function e(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){o(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(t,c,o){var r=l.URL||l.webkitURL,s=document.createElement("a");s.download=c=c||t.name||"download",s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?n(s):a(s.href)?e(t,c,o):n(s,s.target="_blank")):(s.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(s.href)},4e4),setTimeout(function(){n(s)},0))}:"msSaveOrOpenBlob"in navigator?function(t,l,c){if(l=l||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,c),l);else if(a(t))e(t,l,c);else{var o=document.createElement("a");o.href=t,o.target="_blank",setTimeout(function(){n(o)})}}:function(t,a,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,n);var r="application/octet-stream"===t.type,s=/constructor/i.test(l.HTMLElement)||l.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||r&&s||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=i?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},u.readAsDataURL(t)}else{var b=l.URL||l.webkitURL,p=b.createObjectURL(t);o?o.location=p:location.href=p,o=null,setTimeout(function(){b.revokeObjectURL(p)},4e4)}});l.saveAs=o.saveAs=o,t.exports=o})?n.apply(e,[]):n)||(t.exports=l)},UVsP:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var n=a("AytR"),l=a("HDdC"),c=a("cp0P"),o=a("8Y7J"),r=a("IheW");let s=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t=!1,e=!1,a=!1){return new l.a(l=>{let o=n.a.apiURL+"Sucursales/SucursalesPorOperador";a&&(o=n.a.apiURL+'Sucursales/?filter={"where":{"deletedon":{"eq":null}}}');var r=[this.http.get(encodeURI(o))];t&&r.push(this.http.get(encodeURI(n.a.apiURL+'PuntosVenta/?filter={"where":{"deletedon":{"eq":null}}}'))),Object(c.a)(r).subscribe(n=>{var c=n[0];if(c=c.map((t,e,a)=>({bactivo:"T"==t.bactivo,nombre:t.sdescripcion,id:t.idsucursal,idsucursal:t.idsucursal,puntosventas:new Array})),e&&(c=c.filter(t=>t.bactivo)),c.sort((t,e)=>t.nombre>e.nombre?1:t.nombre<e.nombre?-1:0),c.splice(0,0,{nombre:"TODAS",id:"",puntosventas:new Array}),t){var o=n[1];e&&(o=o.filter(t=>"T"==t.bactivo));for(var r=0;r<o.length;r++){1!=c.length&&-1==c[0].puntosventas.indexOf(o[r])&&c[0].puntosventas.push(o[r].idpv);for(var s=1;s<c.length;s++)o[r].idsucursal==c[s].idsucursal&&-1==c[s].puntosventas.indexOf(o[r].idpv)&&c[s].puntosventas.push(o[r].idpv)}for(r=0;r<c.length;r++)c[r].puntosventasstr=c[r].puntosventas.join()}a||2!=c.length||c.shift(),l.next(c),l.complete()},t=>l.error(t))})}}return t.\u0275fac=function(e){return new(e||t)(o.bc(r.c))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},bPAe:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("Iab2"),l=a("EUZL"),c=a("8Y7J");let o=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,a){const n=l.utils.json_to_sheet(t),c=l.write({Sheets:{[a]:n},SheetNames:[a]},{bookType:"xlsx",type:"array"});this.saveExcelFile(c,e)}saveExcelFile(t,e){const a=new Blob([t],{type:this.fileType});n.saveAs(a,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);