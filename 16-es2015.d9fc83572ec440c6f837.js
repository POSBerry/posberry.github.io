(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{CHRX:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("wd/R");class o{constructor(){this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}setGroup(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}setData(t){this.data=t,this.sortData()}sortData(){this.data.sort((t,e)=>{if(t[this.groupField]==e[this.groupField]){if(this.secondarySort){if(null==t[this.secondarySort])return 1;if(null==e[this.secondarySort])return-1;if(t[this.secondarySort]>e[this.secondarySort])return 1*("desc"===this.sortDir?-1:1);if(t[this.secondarySort]<e[this.secondarySort])return-1*("desc"===this.sortDir?-1:1)}}else{if(null==t[this.groupField])return 1;if(null==e[this.groupField])return-1;if(t[this.groupField]>e[this.groupField])return 1;if(t[this.groupField]<e[this.groupField])return-1}return 0}),this.filterRows()}filterRows(){var t=[];t=this.data.filter(t=>{for(var e in this.filter){if(this.filter[e]&&null==t[e])return!1;switch(typeof t[e]){case"number":if(this.filter[e]&&t[e].toString()!==this.filter[e].toString())return!1;break;case"string":if("f"==e.charAt(0).toLowerCase()&&n(t[e]).isValid){if(-1==n(t[e]).format("DD/MM/YYYY HH:mm:ss").indexOf(this.filter[e]))return!1;break}if(-1==t[e].toLowerCase().indexOf(this.filter[e].toLowerCase()))return!1}}return!0}),t=this.customFilter(t);var e={};this.groupField?e[this.groupField]=t.length.toString():e.count=t.length.toString(),this.sum.forEach(t=>e[t]=0);for(var a=0;a<t.length;a++)this.sum.forEach(n=>e[n]+=t[a][n]);if(e.isGroup=!0,this.footer=e,this.groupField){var o=[];t.forEach(t=>{-1==o.indexOf(t[this.groupField])&&o.push(t[this.groupField])}),o=o.map(t=>({name:t,count:1}));var c=[],l=!0,i=0,s=null,r=()=>{s&&(s[this.groupField]+=" ("+o[i-1].count.toString()+")")};for(a=0;a<t.length;a++){if(l&&t[a][this.groupField]==o[i].name){r();var u="+";this.groups[o[i].name]&&(u="-"),s={[this.groupField]:u+" "+o[i].name,isGroup:!0,name:o[i].name},this.sum.forEach(t=>s[t]=0),c.push(s),l=++i<o.length}else o[i-1].count++;this.sum.forEach(e=>s[e]+=t[a][e]),c.push(t[a])}r(),t=null,c=c.filter(t=>!!t.isGroup||!!this.groups[t[this.groupField]]||void 0),this.rows=c}else this.rows=t;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}updateFilter(t,e){t&&e&&(this.filter[e]=t.target.value,this.filterRows())}updateFilterBoolean(t,e){this.filter[e]=t,this.filterRows()}}},Iab2:function(t,e,a){var n,o;void 0===(o="function"==typeof(n=function(){"use strict";function e(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(t,c,l){var i=o.URL||o.webkitURL,s=document.createElement("a");s.download=c=c||t.name||"download",s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?n(s):a(s.href)?e(t,c,l):n(s,s.target="_blank")):(s.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(s.href)},4e4),setTimeout(function(){n(s)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,c){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,c),o);else if(a(t))e(t,o,c);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){n(l)})}}:function(t,a,n,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,n);var i="application/octet-stream"===t.type,s=/constructor/i.test(o.HTMLElement)||o.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||i&&s||c)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=r?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=t:location=t,l=null},u.readAsDataURL(t)}else{var b=o.URL||o.webkitURL,p=b.createObjectURL(t);l?l.location=p:location.href=p,l=null,setTimeout(function(){b.revokeObjectURL(p)},4e4)}});o.saveAs=l.saveAs=l,t.exports=l})?n.apply(e,[]):n)||(t.exports=o)},bPAe:function(t,e,a){"use strict";a.d(e,"a",function(){return l});var n=a("Iab2"),o=a("EUZL"),c=a("8Y7J");let l=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,a){const n=o.utils.json_to_sheet(t),c=o.write({Sheets:{[a]:n},SheetNames:[a]},{bookType:"xlsx",type:"array"});this.saveExcelFile(c,e)}saveExcelFile(t,e){const a=new Blob([t],{type:this.fileType});n.saveAs(a,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"o1+5":function(t,e,a){"use strict";a.r(e),a.d(e,"StockMovementsModule",function(){return yt});var n=a("SVse"),o=a("GmJt"),c=a("3sEA"),l=a("wd/R"),i=a("bPAe"),s=a("CHRX"),r=a("UVsP"),u=a("AytR"),b=a("cp0P"),p=a("8Y7J"),f=a("IheW");let d=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,e,a){let n=`${u.a.apiURL}MovStock/DetalleDeMovStockEnUnaFecha?fdesde=${t}&fhasta=${e}`;return a&&(n=`${u.a.apiURL}MovStock/DetalleDeMovStockEnUnaFecha?fdesde=${t}&fhasta=${e}&idsucursal=${a}`),this.http.get(encodeURI(n))}obtenerDepositos(){return this.http.get(encodeURI(u.a.apiURL+'Depositos?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerMovStockItems(t){return this.http.get(encodeURI(`${u.a.apiURL}MovStockItems/DetalleDeMovStockPorId?idmovstock=${t}`))}obtenerDatosTabla2(t,e,a){let n=`${u.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}`;return a&&(n=`${u.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}&idsucursal=${a}`),this.http.get(encodeURI(n))}obtenerDatosVenta(t){return Object(b.a)([this.http.get(encodeURI(`${u.a.apiURL}Ventasitems/DetalleDeVentaPorId?idVenta=${t}`)),this.http.get(encodeURI(`${u.a.apiURL}Ventas/DetalleDeMovCajaVenta?idVenta=${t}`))])}}return t.\u0275fac=function(e){return new(e||t)(p.bc(f.c))},t.\u0275prov=p.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=a("iELJ"),h=a("zHaW"),g=a("PDjf"),v=a("VDRc"),D=a("Q2Ze"),E=a("e6WT"),O=a("TN/R"),w=a("ZTz/"),k=a("Dxy4"),W=a("Tj54"),X=a("w9WL"),C=a("UhP/"),S=a("TSSN");function y(t,e){if(1&t&&(p.Xb(0,"mat-option",33),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function M(t,e){if(1&t&&(p.Xb(0,"mat-option",33),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function A(t,e){if(1&t&&(p.Xb(0,"mat-option",33),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function T(t,e){if(1&t&&(p.Xb(0,"mat-option",33),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function x(t,e){if(1&t&&(p.Xb(0,"mat-option",33),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.nombre)}}function R(t,e){if(1&t&&(p.Oc(0),p.kc(1,"date")),2&t){const t=e.row;p.Qc(" ",p.mc(1,1,null==t?null:t.fMovimiento,"dd/MM/yyyy HH:mm:ss")," ")}}function F(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.idPV," ")}}function P(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.idNumDoc," ")}}function I(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sTipoMovStock," ")}}function N(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sObservacion," ")}}function U(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sDepOrigen," ")}}function L(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sDepDestino," ")}}function V(t,e){1&t&&(p.Xb(0,"span"),p.Oc(1,"Si"),p.Wb())}function j(t,e){1&t&&(p.Xb(0,"span"),p.Oc(1,"No"),p.Wb())}function H(t,e){if(1&t&&(p.Mc(0,V,2,0,"span",18),p.Mc(1,j,2,0,"span",18)),2&t){const t=e.row;p.pc("ngIf","T"==(null==t?null:t.bAnulado)),p.Eb(1),p.pc("ngIf","F"==(null==t?null:t.bAnulado))}}function Y(t,e){1&t&&(p.Xb(0,"span"),p.Oc(1,"Si"),p.Wb())}function $(t,e){1&t&&(p.Xb(0,"span"),p.Oc(1,"No"),p.Wb())}function q(t,e){if(1&t&&(p.Mc(0,Y,2,0,"span",18),p.Mc(1,$,2,0,"span",18)),2&t){const t=e.row;p.pc("ngIf","T"==(null==t?null:t.bAplicado)),p.Eb(1),p.pc("ngIf","F"==(null==t?null:t.bAplicado))}}function _(t,e){if(1&t){const t=p.Yb();p.Xb(0,"button",11),p.fc("click",function(){return p.Dc(t),p.jc(3).export()}),p.Xb(1,"mat-icon"),p.Oc(2,"save_alt"),p.Wb(),p.Oc(3),p.kc(4,"translate"),p.Wb()}2&t&&(p.Eb(3),p.Pc(p.lc(4,1,"VALUEDSTOCK.EXCEL")))}function K(t,e){if(1&t&&(p.Xb(0,"div",35),p.Sb(1,"hr",36),p.Xb(2,"div"),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Wb(),p.Xb(5,"div",37),p.Mc(6,_,5,3,"button",38),p.Wb()),2&t){const t=p.jc(2);p.Eb(3),p.Rc("",p.lc(4,3,"Articulos Totales:"),"",t.tabla1.footer.count,""),p.Eb(3),p.pc("ngIf",t.tabla1.data.length>0)}}function B(t,e){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,K,7,5,"ng-template",34),p.Wb())}function G(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"fMovimiento")}),p.Wb(),p.Wb()}}function Q(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"idPV")}),p.Wb(),p.Wb()}}function J(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"idNumDoc")}),p.Wb(),p.Wb()}}function Z(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sTipoMovStock")}),p.Wb(),p.Wb()}}function z(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sObservacion")}),p.Wb(),p.Wb()}}function tt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"mat-select",41),p.fc("selectionChange",function(e){return p.Dc(t),p.jc().tabla1.updateFilterBoolean(e.value,"bAnulado")}),p.Sb(2,"mat-option",42),p.Xb(3,"mat-option",43),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Xb(6,"mat-option",44),p.Oc(7),p.kc(8,"translate"),p.Wb(),p.Wb(),p.Wb()}2&t&&(p.Eb(4),p.Pc(p.lc(5,2,"YESNO.YES")),p.Eb(3),p.Pc(p.lc(8,4,"YESNO.NO")))}function et(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"mat-select",41),p.fc("selectionChange",function(e){return p.Dc(t),p.jc().tabla1.updateFilterBoolean(e.value,"bAplicado")}),p.Sb(2,"mat-option",42),p.Xb(3,"mat-option",43),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Xb(6,"mat-option",44),p.Oc(7),p.kc(8,"translate"),p.Wb(),p.Wb(),p.Wb()}2&t&&(p.Eb(4),p.Pc(p.lc(5,2,"YESNO.YES")),p.Eb(3),p.Pc(p.lc(8,4,"YESNO.NO")))}function at(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sDepOrigen")}),p.Wb(),p.Wb()}}function nt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sDepDestino")}),p.Wb(),p.Wb()}}function ot(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sCodProducto," ")}}function ct(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sProducto," ")}}function lt(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.rCantidad," ")}}function it(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sDeposito," ")}}function st(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sOperador," ")}}function rt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"button",11),p.fc("click",function(){return p.Dc(t),p.jc(3).export2Detalle()}),p.Xb(1,"mat-icon"),p.Oc(2,"save_alt"),p.Wb(),p.Oc(3),p.kc(4,"translate"),p.Wb()}2&t&&(p.Eb(3),p.Pc(p.lc(4,1,"VALUEDSTOCK.EXCEL")))}function ut(t,e){if(1&t&&(p.Xb(0,"div",35),p.Sb(1,"hr",36),p.Xb(2,"div"),p.Xb(3,"div"),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Xb(6,"div",37),p.Mc(7,rt,5,3,"button",38),p.Wb()),2&t){const t=p.jc(2);p.Eb(4),p.Rc("",p.lc(5,3,"Articulos Totales:"),"",t.tabla2.footer.count,""),p.Eb(3),p.pc("ngIf",t.tabla2.data.length>0)}}function bt(t,e){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,ut,8,5,"ng-template",34),p.Wb())}function pt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla2.updateFilter(e,"sCodProducto")}),p.Wb(),p.Wb()}}function ft(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla2.updateFilter(e,"sProducto ")}),p.Wb(),p.Wb()}}function dt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla2.updateFilter(e,"rCantidad")}),p.Wb(),p.Wb()}}function mt(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla2.updateFilter(e,"sOperador")}),p.Wb(),p.Wb()}}function ht(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",39),p.Xb(1,"input",40),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla2.updateFilter(e,"sDeposito")}),p.Wb(),p.Wb()}}const gt=function(){return{y:"50px",delay:"300ms"}},vt=function(t){return{value:"*",params:t}},Dt=[{path:"",component:(()=>{class t{constructor(t,e,a,n,o,c){this.dialog=t,this.servicioMovimientoDeStock=e,this.servicioExportarExcel=a,this.servicioSucursales=n,this.loader=o,this.snack=c,this.hours=0,this.minutes=0,this.hours2=0,this.minutes2=0,this.hoursArr=[],this.minutesArr=[],this.startDate=new Date,this.endDate=new Date;for(var l=0;l<=23;l++)this.hoursArr.push(l);for(l=0;l<=59;l++)this.minutesArr.push(l);this.minutes=this.minutesArr[0],this.minutes2=this.minutesArr[this.minutesArr.length-1],this.hours=this.hoursArr[0],this.hours2=this.hoursArr[this.hoursArr.length-1]}ngOnInit(){this.tabla1=new s.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new s.a,this.tabla2.groupField="",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.servicioMovimientoDeStock.obtenerDepositos().subscribe(t=>{this.depositos=t})}mostrarDeposito(t){var e=this.depositos.find(e=>e.iddeposito==t);return e?e.sdescripcion:t}export(){var t=this.tabla1.data.map(t=>({Movimiento:l(t.fMovimiento).format("DD/MM/YYYY HH:mm:ss"),PV:t.idPV,Numero:t.idNumDoc,Tipo:t.sTipoMovStock,Observacion:t.sObservacion,Origen:this.mostrarDeposito(t.idDepOrigen),Destino:this.mostrarDeposito(t.idDepDestino),Anulado:"T"==t.bAnulado?"Si":"No",Aplicado:"T"==t.bAplicado?"Si":"No"}));this.servicioExportarExcel.exportExcel(t,"movimientos_de_stock","movimientos_de_stock")}export2Detalle(){var t=this.tabla2.data.map(t=>({"Cod.Producto":t.sCodProducto,Producto:t.sProducto,Cantidad:t.rCantidad,Dep\u00f3sito:this.mostrarDeposito(t.idDeposito),Operador:t.sOperador}));this.servicioExportarExcel.exportExcel(t,"movimiento_de_stock_detalle","movimiento_de_stock_detalle")}refresh(){this.startDate.setHours(this.hours,this.minutes,0,0),this.endDate.setHours(this.hours2,this.minutes2,59,999),this.loader.open(),this.servicioMovimientoDeStock.obtenerDatosTabla1(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.id).subscribe(t=>{t.forEach(t=>{t.sDepOrigen=this.mostrarDeposito(t.idDepOrigen),t.sDepDestino=this.mostrarDeposito(t.idDepDestino)}),this.tabla1.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla1OnActivate(t){"click"==t.type&&(t.row.isGroup?this.tabla1.setGroup(t.row):(this.tabla1.data.forEach(t=>t.isSelected=!1),t.row.isSelected=!0,this.mostrarTabla2(t.row)))}mostrarTabla2(t){this.loader.open(),this.servicioMovimientoDeStock.obtenerMovStockItems(t.id).subscribe(t=>{t.forEach(t=>{t.sDeposito=this.mostrarDeposito(t.idDeposito)}),this.tabla2.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}}return t.\u0275fac=function(e){return new(e||t)(p.Rb(m.b),p.Rb(d),p.Rb(i.a),p.Rb(r.a),p.Rb(c.a),p.Rb(h.a))},t.\u0275cmp=p.Lb({type:t,selectors:[["app-stock-movements"]],decls:133,vars:150,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker1",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","8",1,"m-8"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["picker2",""],[3,"value","selectionChange","valueChange"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","name","width","summaryTemplate"],["ngx-datatable-cell-template",""],[3,"cellClass","name","summaryTemplate","width"],[3,"cellClass","summaryTemplate","name","width"],[4,"ngIf"],["tabla1fMovimiento",""],["tabla1idPV",""],["tabla1idNumDoc",""],["tabla1sTipoMovStock",""],["tabla1sObservacion",""],["tabla1bAnulado",""],["tabla1bAplicado",""],["tabla1sDepOrigen",""],["tabla1sDepDestino",""],["tabla2sCodProducto",""],["tabla2sProducto",""],["tabla2rCantidad",""],["tabla2sOperador",""],["tabla2sDeposito",""],[3,"value"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],[3,"selectionChange"],["value",""],["value","T"],["value","F"]],template:function(t,e){if(1&t&&(p.Xb(0,"mat-card",0),p.Xb(1,"div",1),p.Xb(2,"mat-form-field",2),p.Xb(3,"mat-label"),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Xb(6,"input",3),p.fc("dateChange",function(t){return e.updateDate1(t)}),p.Wb(),p.Sb(7,"mat-datepicker-toggle",4),p.Sb(8,"mat-datepicker",null,5),p.Wb(),p.Xb(10,"mat-form-field",6),p.Xb(11,"mat-label"),p.Oc(12),p.kc(13,"translate"),p.Wb(),p.Xb(14,"mat-select",7),p.fc("valueChange",function(t){return e.hours=t}),p.Mc(15,y,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(16,"mat-form-field",6),p.Xb(17,"mat-label"),p.Oc(18),p.kc(19,"translate"),p.Wb(),p.Xb(20,"mat-select",7),p.fc("valueChange",function(t){return e.minutes=t}),p.Mc(21,M,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(22,"mat-form-field",2),p.Xb(23,"mat-label"),p.Oc(24),p.kc(25,"translate"),p.Wb(),p.Xb(26,"input",3),p.fc("dateChange",function(t){return e.updateDate2(t)}),p.Wb(),p.Sb(27,"mat-datepicker-toggle",4),p.Sb(28,"mat-datepicker",null,9),p.Wb(),p.Xb(30,"mat-form-field",6),p.Xb(31,"mat-label"),p.Oc(32),p.kc(33,"translate"),p.Wb(),p.Xb(34,"mat-select",7),p.fc("valueChange",function(t){return e.hours2=t}),p.Mc(35,A,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(36,"mat-form-field",6),p.Xb(37,"mat-label"),p.Oc(38),p.kc(39,"translate"),p.Wb(),p.Xb(40,"mat-select",7),p.fc("valueChange",function(t){return e.minutes2=t}),p.Mc(41,T,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(42,"mat-form-field",2),p.Xb(43,"mat-label"),p.Oc(44),p.kc(45,"translate"),p.Wb(),p.Xb(46,"mat-select",10),p.fc("selectionChange",function(t){return e.seleccionarSucursal(t.value)})("valueChange",function(t){return e.sucursalActual=t}),p.Mc(47,x,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(48,"button",11),p.fc("click",function(){return e.refresh()}),p.Xb(49,"mat-icon"),p.Oc(50,"search"),p.Wb(),p.Oc(51),p.kc(52,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Xb(53,"mat-card",0),p.Xb(54,"mat-card-content",0),p.Xb(55,"ngx-datatable",12,13),p.fc("activate",function(t){return e.tabla1OnActivate(t)}),p.Xb(57,"ngx-datatable-column",14),p.kc(58,"translate"),p.Mc(59,R,2,4,"ng-template",15),p.Wb(),p.Xb(60,"ngx-datatable-column",16),p.kc(61,"translate"),p.Mc(62,F,1,1,"ng-template",15),p.Wb(),p.Xb(63,"ngx-datatable-column",17),p.kc(64,"translate"),p.Mc(65,P,1,1,"ng-template",15),p.Wb(),p.Xb(66,"ngx-datatable-column",17),p.kc(67,"translate"),p.Mc(68,I,1,1,"ng-template",15),p.Wb(),p.Xb(69,"ngx-datatable-column",17),p.kc(70,"translate"),p.Mc(71,N,1,1,"ng-template",15),p.Wb(),p.Xb(72,"ngx-datatable-column",17),p.kc(73,"translate"),p.Mc(74,U,1,1,"ng-template",15),p.Wb(),p.Xb(75,"ngx-datatable-column",17),p.kc(76,"translate"),p.Mc(77,L,1,1,"ng-template",15),p.Wb(),p.Xb(78,"ngx-datatable-column",17),p.kc(79,"translate"),p.Mc(80,H,2,2,"ng-template",15),p.Wb(),p.Xb(81,"ngx-datatable-column",17),p.kc(82,"translate"),p.Mc(83,q,2,2,"ng-template",15),p.Wb(),p.Mc(84,B,2,0,"ngx-datatable-footer",18),p.Wb(),p.Wb(),p.Wb(),p.Mc(85,G,2,0,"ng-template",null,19,p.Nc),p.Mc(87,Q,2,0,"ng-template",null,20,p.Nc),p.Mc(89,J,2,0,"ng-template",null,21,p.Nc),p.Mc(91,Z,2,0,"ng-template",null,22,p.Nc),p.Mc(93,z,2,0,"ng-template",null,23,p.Nc),p.Mc(95,tt,9,6,"ng-template",null,24,p.Nc),p.Mc(97,et,9,6,"ng-template",null,25,p.Nc),p.Mc(99,at,2,0,"ng-template",null,26,p.Nc),p.Mc(101,nt,2,0,"ng-template",null,27,p.Nc),p.Xb(103,"mat-card",0),p.Xb(104,"mat-card-content",0),p.Xb(105,"ngx-datatable",12,13),p.fc("activate",function(t){return e.tabla2OnActivate(t)}),p.Xb(107,"ngx-datatable-column",17),p.kc(108,"translate"),p.Mc(109,ot,1,1,"ng-template",15),p.Wb(),p.Xb(110,"ngx-datatable-column",16),p.kc(111,"translate"),p.Mc(112,ct,1,1,"ng-template",15),p.Wb(),p.Xb(113,"ngx-datatable-column",17),p.kc(114,"translate"),p.Mc(115,lt,1,1,"ng-template",15),p.Wb(),p.Xb(116,"ngx-datatable-column",17),p.kc(117,"translate"),p.Mc(118,it,1,1,"ng-template",15),p.Wb(),p.Xb(119,"ngx-datatable-column",17),p.kc(120,"translate"),p.Mc(121,st,1,1,"ng-template",15),p.Wb(),p.Mc(122,bt,2,0,"ngx-datatable-footer",18),p.Wb(),p.Wb(),p.Wb(),p.Mc(123,pt,2,0,"ng-template",null,28,p.Nc),p.Mc(125,ft,2,0,"ng-template",null,29,p.Nc),p.Mc(127,dt,2,0,"ng-template",null,30,p.Nc),p.Mc(129,mt,2,0,"ng-template",null,31,p.Nc),p.Mc(131,ht,2,0,"ng-template",null,32,p.Nc)),2&t){const t=p.Ac(9),a=p.Ac(29),n=p.Ac(86),o=p.Ac(88),c=p.Ac(90),l=p.Ac(92),i=p.Ac(94),s=p.Ac(96),r=p.Ac(98),u=p.Ac(100),b=p.Ac(102),f=p.Ac(124),d=p.Ac(126),m=p.Ac(128),h=p.Ac(130),g=p.Ac(132);p.Eb(4),p.Pc(p.lc(5,100,"VALUEDSTOCK.DATE")),p.Eb(2),p.pc("matDatepicker",t)("value",e.startDate),p.Eb(1),p.pc("for",t),p.Eb(5),p.Pc(p.lc(13,102,"VALUEDSTOCK.HOUR")),p.Eb(2),p.pc("value",e.hours),p.Eb(1),p.pc("ngForOf",e.hoursArr),p.Eb(3),p.Pc(p.lc(19,104,"VALUEDSTOCK.MINUTES")),p.Eb(2),p.pc("value",e.minutes),p.Eb(1),p.pc("ngForOf",e.minutesArr),p.Eb(3),p.Pc(p.lc(25,106,"VALUEDSTOCK.DATE")),p.Eb(2),p.pc("matDatepicker",a)("value",e.endDate),p.Eb(1),p.pc("for",a),p.Eb(5),p.Pc(p.lc(33,108,"VALUEDSTOCK.HOUR")),p.Eb(2),p.pc("value",e.hours2),p.Eb(1),p.pc("ngForOf",e.hoursArr),p.Eb(3),p.Pc(p.lc(39,110,"VALUEDSTOCK.MINUTES")),p.Eb(2),p.pc("value",e.minutes2),p.Eb(1),p.pc("ngForOf",e.minutesArr),p.Eb(3),p.Pc(p.lc(45,112,"STATISTICSCOMPONENT.BRANCH")),p.Eb(2),p.pc("value",e.sucursalActual),p.Eb(1),p.pc("ngForOf",e.sucursales),p.Eb(4),p.Pc(p.lc(52,114,"VALUEDSTOCK.SHOW")),p.Eb(2),p.pc("@animate",p.vc(145,vt,p.uc(144,gt))),p.Eb(2),p.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("selectionType","single"),p.Eb(2),p.qc("name",p.lc(58,116,"MOVIMIENTO")),p.pc("cellClass",e.getCellClass)("width",150)("summaryTemplate",n),p.Eb(3),p.qc("name",p.lc(61,118,"PV")),p.pc("cellClass",e.getCellClass)("summaryTemplate",o)("width",100),p.Eb(3),p.qc("name",p.lc(64,120,"N\xfamero")),p.pc("cellClass",e.getCellClass)("summaryTemplate",c)("width",100),p.Eb(3),p.qc("name",p.lc(67,122,"TIPO")),p.pc("cellClass",e.getCellClass)("summaryTemplate",l)("width",200),p.Eb(3),p.qc("name",p.lc(70,124,"OBSERVACION")),p.pc("cellClass",e.getCellClass)("summaryTemplate",i)("width",325),p.Eb(3),p.qc("name",p.lc(73,126,"ORIGEN")),p.pc("cellClass",e.getCellClass)("summaryTemplate",u)("width",150),p.Eb(3),p.qc("name",p.lc(76,128,"Destino")),p.pc("cellClass",e.getCellClass)("summaryTemplate",b)("width",150),p.Eb(3),p.qc("name",p.lc(79,130,"Anulado")),p.pc("cellClass",e.getCellClass)("summaryTemplate",s)("width",100),p.Eb(3),p.qc("name",p.lc(82,132,"Aplicado")),p.pc("cellClass",e.getCellClass)("summaryTemplate",r)("width",100),p.Eb(3),p.pc("ngIf",e.tabla1.data.length>0),p.Eb(19),p.pc("@animate",p.vc(148,vt,p.uc(147,gt))),p.Eb(2),p.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla2.rows)("selectionType","single"),p.Eb(2),p.qc("name",p.lc(108,134,"CODIGO DE PRODUCTO")),p.pc("cellClass",e.getCellClass)("summaryTemplate",f)("width",200),p.Eb(3),p.qc("name",p.lc(111,136,"PRODUCTO")),p.pc("cellClass",e.getCellClass)("summaryTemplate",d)("width",500),p.Eb(3),p.qc("name",p.lc(114,138,"CANTIDAD")),p.pc("cellClass",e.getCellClass)("summaryTemplate",m)("width",150),p.Eb(3),p.qc("name",p.lc(117,140,"DEPOSITO")),p.pc("cellClass",e.getCellClass)("summaryTemplate",g)("width",150),p.Eb(3),p.qc("name",p.lc(120,142,"OPERADOR")),p.pc("cellClass",e.getCellClass)("summaryTemplate",h)("width",200),p.Eb(3),p.pc("ngIf",e.tabla2.data.length>0)}},directives:[g.a,v.c,v.b,D.c,v.a,D.f,E.b,O.b,O.d,D.h,O.a,w.a,n.n,k.b,W.a,g.b,X.d,X.b,X.a,n.o,C.n,X.e,X.c],pipes:[S.c,n.f],styles:[".ngxselected{background-color:#f2883d;border-top:1px solid #eb6608;border-bottom:1px solid #eb6608}"],data:{animation:[o.a]}}),t})(),data:{title:"MOVIMIENTOS DE STOCK"}}];var Et=a("iInd"),Ot=a("u9T3"),wt=a("s7LF"),kt=a("f44v"),Wt=a("jMqV"),Xt=a("M9ds"),Ct=a("ZFy/"),St=a("PCNd");let yt=(()=>{class t{}return t.\u0275mod=p.Pb({type:t}),t.\u0275inj=p.Ob({factory:function(e){return new(e||t)},imports:[[n.c,wt.s,Ot.a,X.f,E.c,E.c,g.c,E.c,k.c,kt.a,E.c,Ct.b,m.f,h.b,Wt.b,Xt.c,w.b,W.b,S.b,St.a,O.c,Et.k.forChild(Dt)]]}),t})()}}]);