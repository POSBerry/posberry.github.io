(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Iab2:function(t,a,e){var c,o;void 0===(o="function"==typeof(c=function(){"use strict";function a(t,a,e){var c=new XMLHttpRequest;c.open("GET",t),c.responseType="blob",c.onload=function(){l(c.response,a,e)},c.onerror=function(){console.error("could not download file")},c.send()}function e(t){var a=new XMLHttpRequest;a.open("HEAD",t,!1);try{a.send()}catch(t){}return 200<=a.status&&299>=a.status}function c(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(a){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,n=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(t,n,l){var r=o.URL||o.webkitURL,s=document.createElement("a");s.download=n=n||t.name||"download",s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?c(s):e(s.href)?a(t,n,l):c(s,s.target="_blank")):(s.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(s.href)},4e4),setTimeout(function(){c(s)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,n){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,a){return void 0===a?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,n),o);else if(e(t))a(t,o,n);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){c(l)})}}:function(t,e,c,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof t)return a(t,e,c);var r="application/octet-stream"===t.type,s=/constructor/i.test(o.HTMLElement)||o.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||r&&s||n)&&"undefined"!=typeof FileReader){var b=new FileReader;b.onloadend=function(){var t=b.result;t=i?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=t:location=t,l=null},b.readAsDataURL(t)}else{var u=o.URL||o.webkitURL,d=u.createObjectURL(t);l?l.location=d:location.href=d,l=null,setTimeout(function(){u.revokeObjectURL(d)},4e4)}});o.saveAs=l.saveAs=l,t.exports=l})?c.apply(a,[]):c)||(t.exports=o)},bPAe:function(t,a,e){"use strict";e.d(a,"a",function(){return l});var c=e("Iab2"),o=e("EUZL"),n=e("8Y7J");let l=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,a,e){const c=o.utils.json_to_sheet(t),n=o.write({Sheets:{[e]:c},SheetNames:[e]},{bookType:"xlsx",type:"array"});this.saveExcelFile(n,a)}saveExcelFile(t,a){const e=new Blob([t],{type:this.fileType});c.saveAs(e,a+this.fileExtension)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=n.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},i59u:function(t,a,e){"use strict";e.d(a,"a",function(){return W});var c=e("iELJ"),o=e("GmJt"),n=e("wd/R"),l=e("8Y7J"),r=e("SVse"),s=e("PDjf"),i=e("M9ds"),b=e("w9WL"),u=e("VDRc"),d=e("Dxy4"),p=e("Tj54"),f=e("ZFy/"),m=e("TSSN");function g(t,a){if(1&t&&(l.Xb(0,"h1",14),l.Oc(1),l.Xb(2,"mat-icon",15),l.Oc(3,"person_pin"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(1),l.Rc("",t.data.payload.idTipoDoc,"-",t.data.payload.Comprobante," "),l.Eb(1),l.pc("matTooltip",t.tooltip)}}function E(t,a){if(1&t&&(l.Xb(0,"h1",14),l.Oc(1),l.Xb(2,"mat-icon",15),l.Oc(3,"person_pin"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(1),l.Sc("",t.data.payload.idtipodoc,"-",0!=t.data.payload.idpvcaea?t.data.payload.idpvcaea.toString().padStart(4,"0"):t.data.payload.idpv.toString().padStart(4,"0"),"-",t.data.payload.idnumdoc.toString().padStart(8,"0"),""),l.Eb(1),l.pc("matTooltip",t.tooltip)}}function h(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Qc("",l.lc(3,2,"SALESPOPUP.CLIENT"),":"),l.Eb(2),l.Qc(" ",t.data.payload.sRazonSocial,"")}}function O(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Qc("",l.lc(3,2,"SALESPOPUP.ADDRESS"),":"),l.Eb(2),l.Qc(" ",t.data.payload.sDomicilio,"")}}function P(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.kc(5,"date"),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Qc("",l.lc(3,2,"SALESPOPUP.UPLOADDATE"),":"),l.Eb(2),l.Qc(" ",l.mc(5,4,t.data.payload.fCarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function C(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.kc(5,"date"),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Qc("",l.lc(3,2,"SALESPOPUP.UPLOADDATE"),":"),l.Eb(2),l.Qc(" ",l.mc(5,4,t.data.payload.fcarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function S(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Qc("",l.lc(3,2,"SALESPOPUP.CAE"),":"),l.Eb(2),l.Qc(" ",t.data.payload.ImpresionCAE,"")}}function A(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.sProducto," ")}}function w(t,a){if(1&t&&(l.Oc(0),l.kc(1,"number")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rCantidad)," ")}}function x(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rPrecioU)," ")}}function y(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rDescuentos)," ")}}function T(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rTotal)," ")}}function v(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.scondpago," ")}}function D(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rimporte)," ")}}function R(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.srefpago," ")}}function M(t,a){if(1&t&&(l.Oc(0),l.kc(1,"number")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.icuotas)," ")}}function U(t,a){if(1&t&&(l.Xb(0,"div",16),l.Xb(1,"font",17),l.Oc(2),l.kc(3,"translate"),l.kc(4,"date"),l.kc(5,"translate"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Tc("",l.lc(3,4,"SALESPOPUP.CANCELEDON")," ",l.mc(4,6,t.data.payload.fAnulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",l.lc(5,9,"SALESPOPUP.BY")," ",t.data.payload.sOperadorAnulacion,"")}}function X(t,a){if(1&t&&(l.Xb(0,"div",16),l.Xb(1,"font",17),l.Oc(2),l.kc(3,"translate"),l.kc(4,"date"),l.kc(5,"translate"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Tc("",l.lc(3,4,"SALESPOPUP.CANCELEDON")," ",l.mc(4,6,t.data.payload.fanulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",l.lc(5,9,"SALESPOPUP.BY")," ",t.data.payload.soperadoranulacion,"")}}const k=function(){return{y:"50px",delay:"300ms"}},L=function(t){return{value:"*",params:t}};let W=(()=>{class t{constructor(t,a,e){this.data=t,this.dialogRef=a,this.cdRef=e,this.page={count:0,offset:0,limit:5};var c=[t.payload.sOperadorCreacion||t.payload.soperadorcreacion],o=[t.payload.sOperadorModificacion||t.payload.soperadormodificacion],l=[t.payload.sOperadorAnulacion||t.payload.soperadoranulacion],r=[t.payload.fModificacion||t.payload.fmodificacion],s=[t.payload.fAnulacion||t.payload.fanulacion],i="T"==t.payload.bAnulado||"T"==t.payload.banulado;this.tooltip="Creado: "+n([t.payload.fCreacion||t.payload.fcreacion]).format("DD/MM/YYYY HH:mm")+" por "+c+", Modificado: "+n(r).format("DD/MM/YYYY HH:mm")+" por "+o,i&&(this.tooltip+=", Anulado: "+n(s).format("DD/MM/YYYY HH:mm")+" por "+l)}ngOnInit(){}ngAfterViewChecked(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}}return t.\u0275fac=function(a){return new(a||t)(l.Rb(c.a),l.Rb(c.g),l.Rb(l.h))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-products-popup"]],decls:84,vars:106,consts:[["matDialogTitle","","align","right",4,"ngIf"],["class","m-0",4,"ngIf"],[1,"m-0"],[3,"label"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit"],[3,"name","flexGrow"],["ngx-datatable-cell-template",""],[2,"width","100%"],["align","right"],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"],["matDialogTitle","","align","right"],[3,"matTooltip"],["fxFlex","100",1,"mt-16"],["color","red"]],template:function(t,a){1&t&&(l.Mc(0,g,4,3,"h1",0),l.Mc(1,E,4,4,"h1",0),l.Xb(2,"mat-dialog-content"),l.Xb(3,"mat-card"),l.Xb(4,"mat-card-content"),l.Mc(5,h,5,4,"p",1),l.Mc(6,O,5,4,"p",1),l.Mc(7,P,6,7,"p",1),l.Mc(8,C,6,7,"p",1),l.Mc(9,S,5,4,"p",1),l.Xb(10,"p",2),l.Oc(11),l.Wb(),l.Wb(),l.Wb(),l.Xb(12,"mat-tab-group"),l.Xb(13,"mat-tab",3),l.kc(14,"translate"),l.Xb(15,"mat-card",4),l.Xb(16,"mat-card-content",4),l.Xb(17,"ngx-datatable",5),l.Xb(18,"ngx-datatable-column",6),l.kc(19,"translate"),l.Mc(20,A,1,1,"ng-template",7),l.Wb(),l.Xb(21,"ngx-datatable-column",6),l.kc(22,"translate"),l.Mc(23,w,2,3,"ng-template",7),l.Wb(),l.Xb(24,"ngx-datatable-column",6),l.kc(25,"translate"),l.Mc(26,x,2,3,"ng-template",7),l.Wb(),l.Xb(27,"ngx-datatable-column",6),l.kc(28,"translate"),l.Mc(29,y,2,3,"ng-template",7),l.Wb(),l.Xb(30,"ngx-datatable-column",6),l.kc(31,"translate"),l.Mc(32,T,2,3,"ng-template",7),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(33,"mat-tab",3),l.kc(34,"translate"),l.Xb(35,"mat-card",4),l.Xb(36,"mat-card-content",4),l.Xb(37,"ngx-datatable",5),l.Xb(38,"ngx-datatable-column",6),l.kc(39,"translate"),l.Mc(40,v,1,1,"ng-template",7),l.Wb(),l.Xb(41,"ngx-datatable-column",6),l.kc(42,"translate"),l.Mc(43,D,2,3,"ng-template",7),l.Wb(),l.Xb(44,"ngx-datatable-column",6),l.kc(45,"translate"),l.Mc(46,R,1,1,"ng-template",7),l.Wb(),l.Xb(47,"ngx-datatable-column",6),l.kc(48,"translate"),l.Mc(49,M,2,3,"ng-template",7),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(50,"div"),l.Xb(51,"table",8),l.Xb(52,"tr"),l.Xb(53,"th"),l.Oc(54),l.kc(55,"translate"),l.Wb(),l.Xb(56,"th"),l.Oc(57),l.kc(58,"translate"),l.Wb(),l.Xb(59,"th"),l.Oc(60),l.kc(61,"translate"),l.Wb(),l.Wb(),l.Xb(62,"tr"),l.Xb(63,"th"),l.Oc(64),l.kc(65,"currency"),l.Wb(),l.Xb(66,"th"),l.Oc(67),l.kc(68,"currency"),l.Wb(),l.Xb(69,"th"),l.Oc(70),l.kc(71,"currency"),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(72,"h2",9),l.Oc(73),l.kc(74,"currency"),l.Wb(),l.Xb(75,"mat-dialog-content",10),l.Mc(76,U,6,11,"div",11),l.Mc(77,X,6,11,"div",11),l.Xb(78,"div",12),l.Xb(79,"button",13),l.fc("click",function(){return a.dialogRef.close(!1)}),l.Xb(80,"mat-icon"),l.Oc(81,"cancel"),l.Wb(),l.Oc(82),l.kc(83,"translate"),l.Wb(),l.Wb(),l.Wb()),2&t&&(l.pc("ngIf",a.data.payload.idTipoDoc),l.Eb(1),l.pc("ngIf",a.data.payload.idtipodoc),l.Eb(2),l.pc("@animate",l.vc(98,L,l.uc(97,k))),l.Eb(2),l.pc("ngIf",a.data.payload.sRazonSocial),l.Eb(1),l.pc("ngIf",a.data.payload.sDomicilio),l.Eb(1),l.pc("ngIf",a.data.payload.fCarga),l.Eb(1),l.pc("ngIf",a.data.payload.fcarga),l.Eb(1),l.pc("ngIf",a.data.payload.ImpresionCAE),l.Eb(2),l.Pc(a.data.sleyendacaea),l.Eb(2),l.qc("label",l.lc(14,59,"SALESPOPUP.DETAILS")),l.Eb(2),l.pc("@animate",l.vc(101,L,l.uc(100,k))),l.Eb(2),l.pc("rows",a.data.ventaitems)("columnMode","flex")("headerHeight",50)("footerHeight",a.data.ventaitems.length>a.page.limit?50:0)("scrollbarH",!1)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit),l.Eb(1),l.qc("name",l.lc(19,61,"SALESPOPUP.DESCRIPTION")),l.pc("flexGrow",1),l.Eb(3),l.qc("name",l.lc(22,63,"SALESPOPUP.QUANTITY")),l.pc("flexGrow",1),l.Eb(3),l.qc("name",l.lc(25,65,"SALESPOPUP.PRICE")),l.pc("flexGrow",1),l.Eb(3),l.qc("name",l.lc(28,67,"SALESPOPUP.DISCOUNTS")),l.pc("flexGrow",1),l.Eb(3),l.qc("name",l.lc(31,69,"SALESPOPUP.TOTAL")),l.pc("flexGrow",1),l.Eb(3),l.qc("label",l.lc(34,71,"SALESPOPUP.PAYMENTMETHODS")),l.Eb(2),l.pc("@animate",l.vc(104,L,l.uc(103,k))),l.Eb(2),l.pc("rows",a.data.ventamovcaja)("columnMode","flex")("headerHeight",50)("footerHeight",a.data.ventamovcaja.length>a.page.limit?50:0)("scrollbarH",!1)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit),l.Eb(1),l.qc("name",l.lc(39,73,"SALESPOPUP.PAYMENTMETHOD")),l.pc("flexGrow",1),l.Eb(3),l.qc("name",l.lc(42,75,"SALESPOPUP.AMOUNT")),l.pc("flexGrow",1),l.Eb(3),l.qc("name",l.lc(45,77,"SALESPOPUP.REFERENCE")),l.pc("flexGrow",1),l.Eb(3),l.qc("name",l.lc(48,79,"SALESPOPUP.FEE")),l.pc("flexGrow",1),l.Eb(7),l.Pc(l.lc(55,81,"SALESPOPUP.NETTOTAL")),l.Eb(3),l.Pc(l.lc(58,83,"SALESPOPUP.TOTALDISCOUNTS")),l.Eb(3),l.Pc(l.lc(61,85,"SALESPOPUP.TOTALTAXES")),l.Eb(4),l.Pc(l.lc(65,87,a.data.payload.rTotNeto)),l.Eb(3),l.Pc(l.lc(68,89,a.data.payload.rTotDescuento)),l.Eb(3),l.Pc(l.lc(71,91,a.data.payload.rTotImpuestos)),l.Eb(3),l.Qc(" Total:",l.lc(74,93,a.data.payload.rTotBruto),"\n"),l.Eb(3),l.pc("ngIf","T"==a.data.payload.bAnulado),l.Eb(1),l.pc("ngIf","T"==a.data.payload.banulado),l.Eb(5),l.Qc("",l.lc(83,95,"SALESPOPUP.CANCEL")," "))},directives:[r.o,c.e,s.a,s.b,i.b,i.a,b.d,b.b,b.a,u.c,u.b,u.a,d.b,p.a,c.h,f.a],pipes:[m.c,r.d,r.f,r.g],styles:[""],data:{animation:[o.a]}}),t})()},"vpF/":function(t,a,e){"use strict";e.r(a),e.d(a,"PuchasesByProductModule",function(){return At});var c=e("SVse"),o=e("HeVh"),n=e("s7LF"),l=e("GmJt"),r=e("3sEA"),s=e("wd/R"),i=e("cp0P"),b=e("bPAe"),u=e("CHRX"),d=e("i59u"),p=e("UVsP"),f=e("Ap+n"),m=e("AytR"),g=e("8Y7J"),E=e("IheW");let h=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,a,e){let c=`${m.a.apiURL}Compras/DocumentosDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}`;return e&&(c=`${m.a.apiURL}Compras/DocumentosDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}&idsucursal=${e}`),this.http.get(encodeURI(c))}obtenerDatosTabla2(t,a,e){let c=`${m.a.apiURL}Compras/DetalleDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}`;return e&&(c=`${m.a.apiURL}Compras/DetalleDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}&idsucursal=${e}`),this.http.get(encodeURI(c))}obtenerDatosCompras(t){return Object(i.a)([this.http.get(encodeURI(`${m.a.apiURL}ComprasItems/DetalleDeComprasPorId?idCompras=${t}`)),this.http.get(encodeURI(`${m.a.apiURL}Compras/DetalleDeMovCajaCompras?idCompras=${t}`))])}}return t.\u0275fac=function(a){return new(a||t)(g.bc(E.c))},t.\u0275prov=g.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var O=e("iELJ"),P=e("zHaW"),C=e("PDjf"),S=e("VDRc"),A=e("Q2Ze"),w=e("e6WT"),x=e("n1FK"),y=e("TN/R"),T=e("ZTz/"),v=e("Dxy4"),D=e("Tj54"),R=e("w9WL"),M=e("UhP/"),U=e("TSSN");function X(t,a){if(1&t&&(g.Xb(0,"mat-option",16),g.Oc(1),g.Wb()),2&t){const t=a.$implicit;g.pc("value",t),g.Eb(1),g.Pc(null==t?null:t.nombre)}}function k(t,a){if(1&t&&g.Oc(0),2&t){const t=a.row;g.Qc(" ",null==t?null:t.Producto," ")}}function L(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,k,1,1,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.PRODUCT")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function W(t,a){if(1&t&&(g.Oc(0),g.kc(1,"date")),2&t){const t=a.row;g.Qc(" ",g.mc(1,1,null==t?null:t.fDocumento,"dd/MM/yyyy HH:mm:ss")," ")}}function I(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,W,2,4,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.DATE")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function H(t,a){if(1&t&&g.Oc(0),2&t){const t=a.row;g.Qc(" ",null==t?null:t.idPV," ")}}function Y(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,H,1,1,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.PV")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function j(t,a){if(1&t&&g.Oc(0),2&t){const t=a.row;g.Qc(" ",null==t?null:t.Comprobante," ")}}function N(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,j,1,1,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.RECEIPT")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function B(t,a){if(1&t&&g.Oc(0),2&t){const t=a.row;g.Qc(" ",null==t?null:t.Sucursal," ")}}function Q(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,B,1,1,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.BRANCH")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function F(t,a){if(1&t&&g.Oc(0),2&t){const t=a.row;g.Qc(" ",null==t?null:t.sEAN," ")}}function G(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,F,1,1,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.EAN")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function q(t,a){if(1&t&&g.Oc(0),2&t){const t=a.row;g.Qc(" ",null==t?null:t.sFamilia," ")}}function V(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,q,1,1,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.FAMILY")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function $(t,a){if(1&t&&g.Oc(0),2&t){const t=a.row;g.Qc(" ",null==t?null:t.sProveedor," ")}}function _(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,$,1,1,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.PROVIDER")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function J(t,a){1&t&&(g.Xb(0,"span"),g.Oc(1),g.kc(2,"translate"),g.Wb()),2&t&&(g.Eb(1),g.Pc(g.lc(2,1,"PURCHASESBYPRODUCT.YES")))}function z(t,a){1&t&&(g.Xb(0,"span"),g.Oc(1),g.kc(2,"translate"),g.Wb()),2&t&&(g.Eb(1),g.Pc(g.lc(2,1,"PURCHASESBYPRODUCT.NO")))}function K(t,a){if(1&t&&(g.Mc(0,J,3,3,"span",15),g.Mc(1,z,3,3,"span",15)),2&t){const t=a.row;g.pc("ngIf","T"==(null==t?null:t.bAnulado)),g.Eb(1),g.pc("ngIf","F"==(null==t?null:t.bAnulado))}}function Z(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,K,2,2,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.CANCELED")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function tt(t,a){if(1&t&&(g.Oc(0),g.kc(1,"number")),2&t){const t=a.row;g.Qc(" ",g.lc(1,1,null==t?null:t.rCantidad)," ")}}function at(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,tt,2,3,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.QUANTITY")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function et(t,a){if(1&t&&(g.Oc(0),g.kc(1,"currency")),2&t){const t=a.row;g.Qc(" ",g.lc(1,1,null==t?null:t.rPrecioU)," ")}}function ct(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,et,2,3,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.PRICE")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function ot(t,a){if(1&t&&(g.Oc(0),g.kc(1,"currency")),2&t){const t=a.row;g.Qc(" ",g.lc(1,1,null==t?null:t.rTotal)," ")}}function nt(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,ot,2,3,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.TOTAL")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function lt(t,a){if(1&t&&g.Oc(0),2&t){const t=a.row;g.Qc(" ",null==t?null:t.sOperadorCreacion," ")}}function rt(t,a){if(1&t&&(g.Xb(0,"ngx-datatable-column",17),g.kc(1,"translate"),g.Mc(2,lt,1,1,"ng-template",18),g.Wb()),2&t){const t=g.jc();g.qc("name",g.lc(1,3,"PURCHASESBYPRODUCT.OPERATOR")),g.pc("cellClass",t.getCellClass)("flexGrow",1)}}function st(t,a){if(1&t){const t=g.Yb();g.Xb(0,"button",11),g.fc("click",function(){return g.Dc(t),g.jc(3).export2Totales()}),g.Xb(1,"mat-icon"),g.Oc(2,"save_alt"),g.Wb(),g.Oc(3),g.kc(4,"translate"),g.Wb()}2&t&&(g.Eb(3),g.Qc("",g.lc(4,1,"PURCHASESBYPRODUCT.EXCELTOTALS")," "))}function it(t,a){if(1&t){const t=g.Yb();g.Xb(0,"button",11),g.fc("click",function(){return g.Dc(t),g.jc(3).export2Detalle()}),g.Xb(1,"mat-icon"),g.Oc(2,"save_alt"),g.Wb(),g.Oc(3),g.kc(4,"translate"),g.Wb()}2&t&&(g.Eb(3),g.Qc("",g.lc(4,1,"PURCHASESBYPRODUCT.EXCELDETAILS")," "))}function bt(t,a){if(1&t&&(g.Xb(0,"div",20),g.Xb(1,"div"),g.Xb(2,"strong"),g.Oc(3),g.kc(4,"translate"),g.Wb(),g.Wb(),g.Sb(5,"hr",21),g.Xb(6,"div"),g.Oc(7),g.kc(8,"translate"),g.kc(9,"number"),g.kc(10,"translate"),g.kc(11,"currency"),g.Wb(),g.Wb(),g.Xb(12,"div",22),g.Mc(13,st,5,3,"button",23),g.Mc(14,it,5,3,"button",23),g.Wb()),2&t){const t=g.jc(2);g.Eb(3),g.Pc(g.lc(4,8,"PURCHASESBYPRODUCT.FOOTERTOTALS")),g.Eb(4),g.Uc("",t.tabla2.footer.Producto," | ",g.lc(8,10,"PURCHASESBYPRODUCT.QUANTITY"),": ",g.lc(9,12,t.tabla2.footer.rCantidad)," | ",g.lc(10,14,"PURCHASESBYPRODUCT.AMOUNT"),": ",g.lc(11,16,t.tabla2.footer.rTotal)," "),g.Eb(6),g.pc("ngIf",t.tabla2.data.length>0),g.Eb(1),g.pc("ngIf",t.tabla2.data.length>0)}}function ut(t,a){1&t&&(g.Xb(0,"ngx-datatable-footer"),g.Mc(1,bt,15,18,"ng-template",19),g.Wb())}const dt=function(){return{y:"50px",delay:"300ms"}},pt=function(t){return{value:"*",params:t}},ft=[{path:"",component:(()=>{class t{constructor(t,a,e,c,o,l,r){this.dialog=t,this.servicioCompras=a,this.servicioExportarExcel=e,this.servicioSucursales=c,this.loader=o,this.snack=l,this.breakpointObserver=r,this.startDate=new n.e,this.endDate=new n.e}ngOnInit(){var t=new Date;t.setHours(0,0,0,0);var a=new Date;a.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(a),this.tabla1=new u.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new u.a,this.tabla2.groupField="Producto",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.breakpointObserver.observe([o.b.XSmall,o.b.Small,o.b.Medium,o.b.Large,o.b.XLarge]).subscribe(t=>{this.isXSmall=this.breakpointObserver.isMatched(o.b.XSmall),this.isSmall=this.breakpointObserver.isMatched(o.b.Small),this.isMedium=this.breakpointObserver.isMatched(o.b.Medium),this.isLarge=this.breakpointObserver.isMatched(o.b.Large),this.isXLarge=this.breakpointObserver.isMatched(o.b.XLarge)})}mostrarOcultar(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}export(){var t=this.tabla1.data.map(t=>({Fecha:s(t.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Cliente:t.sRazonSocial,Domicilio:t.sDomicilio,"Condici\xf3n IVA":t.sCondicionIVA,Anulado:"T"==t.bAnulado?"Si":"No","Condici\xf3n compra":t.sCondcompra,Total:t.rTotBruto,Operador:t.sOperadorCreacion,Vendedor:t.sVendedor}));this.servicioExportarExcel.exportExcel(t,"compras","compra")}export2Detalle(){var t=this.tabla2.data.map(t=>({Producto:t.Producto,Fecha:s(t.fDocumento).format("DD/MM/YYYY hh:mm:ss"),PV:t.idPV,Sucursal:t.Sucursal,EAN:t.sEAN,EAN2:t.sEAN2,Familia:t.sFamilia,Proveedor:t.sProveedor,Confirmado:"T"==t.bConfirmado?"Si":"No",Cantidad:t.rCantidad,PrecioU:t.rPrecioU,Importe:t.rTotal,OperadorCreaci\u00f3n:t.sOperadorCreacion}));this.servicioExportarExcel.exportExcel(t,"compras_detalle","compras_detalle")}export2Totales(){var t=this.tabla2.data.map(t=>({Producto:t.Producto,PV:t.idPV,EAN:t.sEAN,EAN2:t.sEAN2,Familia:t.sFamilia,Proveedor:t.sProveedor,Cantidad:t.rCantidad,PrecioU:t.rPrecioU,Total:t.rTotal}));this.servicioExportarExcel.exportExcel(t,"compras_detalle_totales","compras_detalle_totales")}refresh(){this.loader.open(),Object(i.a)([this.servicioCompras.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id),this.servicioCompras.obtenerDatosTabla2(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id)]).subscribe(t=>{console.log(t[1]),this.tabla1.setData(t[0].filter(()=>!0)),this.tabla2.setData(t[1].filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla1OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}openPopUp(t={}){this.loader.open(),this.servicioCompras.obtenerDatosCompras(t.id).subscribe(a=>{this.loader.close();var e="";0!=t.idPVCAEA&&(e="CAEA no informado.",t.fCAEAInformado&&(e="CAEA Informado el "+new Date(t.fCAEAInformado).toLocaleDateString())),this.dialog.open(d.a,{width:"720px",disableClose:!0,data:{title:"DETALLE DE COMPRA",payload:t,compraitems:a[0],compramovcaja:a[1],sleyendacaea:e}}).afterClosed().subscribe(t=>{})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}openUserInfoPopUp(t={}){this.dialog.open(f.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(a){return new(a||t)(g.Rb(O.b),g.Rb(h),g.Rb(b.a),g.Rb(p.a),g.Rb(r.a),g.Rb(P.a),g.Rb(o.a))},t.\u0275cmp=g.Lb({type:t,selectors:[["app-puchases-by-product"]],decls:43,vars:66,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","name","flexGrow",4,"ngIf"],[4,"ngIf"],[3,"value"],[3,"cellClass","name","flexGrow"],["ngx-datatable-cell-template",""],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(t,a){if(1&t&&(g.Xb(0,"mat-card",0),g.Xb(1,"div",1),g.Xb(2,"mat-form-field",2),g.Sb(3,"input",3),g.kc(4,"translate"),g.Sb(5,"mat-datepicker-toggle",4),g.Sb(6,"ngx-mat-datetime-picker",5,6),g.Wb(),g.Xb(8,"mat-form-field",2),g.Sb(9,"input",3),g.kc(10,"translate"),g.Sb(11,"mat-datepicker-toggle",4),g.Sb(12,"ngx-mat-datetime-picker",5,7),g.Wb(),g.Xb(14,"mat-form-field",8),g.Xb(15,"mat-label"),g.Oc(16),g.kc(17,"translate"),g.Wb(),g.Xb(18,"mat-select",9),g.fc("selectionChange",function(t){return a.seleccionarSucursal(t.value)})("valueChange",function(t){return a.sucursalActual=t}),g.Mc(19,X,2,2,"mat-option",10),g.Wb(),g.Wb(),g.Xb(20,"button",11),g.fc("click",function(){return a.refresh()}),g.Xb(21,"mat-icon"),g.Oc(22,"search"),g.Wb(),g.Oc(23),g.kc(24,"translate"),g.Wb(),g.Wb(),g.Wb(),g.Xb(25,"mat-card",0),g.Xb(26,"mat-card-content",0),g.Xb(27,"ngx-datatable",12,13),g.fc("activate",function(t){return a.tabla2OnActivate(t)}),g.Mc(29,L,3,5,"ngx-datatable-column",14),g.Mc(30,I,3,5,"ngx-datatable-column",14),g.Mc(31,Y,3,5,"ngx-datatable-column",14),g.Mc(32,N,3,5,"ngx-datatable-column",14),g.Mc(33,Q,3,5,"ngx-datatable-column",14),g.Mc(34,G,3,5,"ngx-datatable-column",14),g.Mc(35,V,3,5,"ngx-datatable-column",14),g.Mc(36,_,3,5,"ngx-datatable-column",14),g.Mc(37,Z,3,5,"ngx-datatable-column",14),g.Mc(38,at,3,5,"ngx-datatable-column",14),g.Mc(39,ct,3,5,"ngx-datatable-column",14),g.Mc(40,nt,3,5,"ngx-datatable-column",14),g.Mc(41,rt,3,5,"ngx-datatable-column",14),g.Mc(42,ut,2,0,"ngx-datatable-footer",15),g.Wb(),g.Wb(),g.Wb()),2&t){const t=g.Ac(7),e=g.Ac(13);g.Eb(3),g.qc("placeholder",g.lc(4,55,"PURCHASESBYPRODUCT.STARTDATE")),g.pc("ngxMatDatetimePicker",t)("formControl",a.startDate),g.Eb(2),g.pc("for",t),g.Eb(1),g.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),g.Eb(3),g.qc("placeholder",g.lc(10,57,"PURCHASESBYPRODUCT.ENDDATE")),g.pc("ngxMatDatetimePicker",e)("formControl",a.endDate),g.Eb(2),g.pc("for",e),g.Eb(1),g.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),g.Eb(4),g.Pc(g.lc(17,59,"PURCHASESBYPRODUCT.BRANCH")),g.Eb(2),g.pc("value",a.sucursalActual),g.Eb(1),g.pc("ngForOf",a.sucursales),g.Eb(4),g.Qc("",g.lc(24,61,"PURCHASESBYPRODUCT.SHOW")," "),g.Eb(2),g.pc("@animate",g.vc(64,pt,g.uc(63,dt))),g.Eb(2),g.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",a.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",a.tabla2.rows)("selectionType","single"),g.Eb(2),g.pc("ngIf",a.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",a.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",a.tabla2.data.length>0)}},directives:[C.a,S.c,S.b,A.c,w.b,x.a,n.c,n.o,n.f,y.h,A.h,x.b,S.a,A.f,T.a,c.n,v.b,D.a,C.b,R.d,c.o,M.n,R.b,R.a,R.e,R.c],pipes:[U.c,c.f,c.g,c.d],styles:[""],data:{animation:[l.a]}}),t})(),data:{title:"Por Producto"}}];var mt=e("u9T3"),gt=e("f44v"),Et=e("jMqV"),ht=e("M9ds"),Ot=e("ZFy/"),Pt=e("iInd"),Ct=e("PCNd"),St=e("BxcV");let At=(()=>{class t{}return t.\u0275mod=g.Pb({type:t}),t.\u0275inj=g.Ob({factory:function(a){return new(a||t)},imports:[[c.c,n.t,mt.a,R.f,w.c,w.c,C.c,w.c,v.c,gt.a,w.c,Ot.b,O.f,P.b,Et.b,ht.c,T.b,D.b,U.b,Ct.a,y.g,St.a,x.c,x.e,x.d,n.j,Pt.k.forChild(ft)]]}),t})()}}]);