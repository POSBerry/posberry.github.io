!function(){function a(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function t(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function e(a,e,n){return e&&t(a.prototype,e),n&&t(a,n),a}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Iab2:function(a,t,e){var n,c;void 0===(c="function"==typeof(n=function(){"use strict";function t(a,t,e){var n=new XMLHttpRequest;n.open("GET",a),n.responseType="blob",n.onload=function(){l(n.response,t,e)},n.onerror=function(){console.error("could not download file")},n.send()}function e(a){var t=new XMLHttpRequest;t.open("HEAD",a,!1);try{t.send()}catch(a){}return 200<=t.status&&299>=t.status}function n(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(t){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(e)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(a,o,l){var r=c.URL||c.webkitURL,i=document.createElement("a");i.download=o=o||a.name||"download",i.rel="noopener","string"==typeof a?(i.href=a,i.origin===location.origin?n(i):e(i.href)?t(a,o,l):n(i,i.target="_blank")):(i.href=r.createObjectURL(a),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){n(i)},0))}:"msSaveOrOpenBlob"in navigator?function(a,c,o){if(c=c||a.name||"download","string"!=typeof a)navigator.msSaveOrOpenBlob(function(a,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}(a,o),c);else if(e(a))t(a,c,o);else{var l=document.createElement("a");l.href=a,l.target="_blank",setTimeout(function(){n(l)})}}:function(a,e,n,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof a)return t(a,e,n);var r="application/octet-stream"===a.type,i=/constructor/i.test(c.HTMLElement)||c.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||r&&i||o)&&"undefined"!=typeof FileReader){var b=new FileReader;b.onloadend=function(){var a=b.result;a=d?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=a:location=a,l=null},b.readAsDataURL(a)}else{var s=c.URL||c.webkitURL,p=s.createObjectURL(a);l?l.location=p:location.href=p,l=null,setTimeout(function(){s.revokeObjectURL(p)},4e4)}});c.saveAs=l.saveAs=l,a.exports=l})?n.apply(t,[]):n)||(a.exports=c)},bPAe:function(t,n,c){"use strict";c.d(n,"a",function(){return i});var o=c("Iab2"),l=c("EUZL"),r=c("8Y7J"),i=function(){var t=function(){function t(){a(this,t),this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}return e(t,[{key:"exportExcel",value:function(a,t,e){var n,c,o,r=l.utils.json_to_sheet(a),i=l.write({Sheets:(n={},c=e,o=r,c in n?Object.defineProperty(n,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[c]=o,n),SheetNames:[e]},{bookType:"xlsx",type:"array"});this.saveExcelFile(i,t)}},{key:"saveExcelFile",value:function(a,t){var e=new Blob([a],{type:this.fileType});o.saveAs(e,t+this.fileExtension)}}]),t}();return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},i59u:function(t,n,c){"use strict";c.d(n,"a",function(){return j});var o=c("iELJ"),l=c("GmJt"),r=c("wd/R"),i=c("8Y7J"),d=c("SVse"),b=c("PDjf"),s=c("M9ds"),p=c("w9WL"),u=c("VDRc"),f=c("Dxy4"),m=c("Tj54"),E=c("ZFy/"),y=c("TSSN");function g(a,t){if(1&a&&(i.Xb(0,"h1",14),i.Oc(1),i.Xb(2,"mat-icon",15),i.Oc(3,"person_pin"),i.Wb(),i.Wb()),2&a){var e=i.jc();i.Eb(1),i.Rc("",e.data.payload.idTipoDoc,"-",e.data.payload.Comprobante," "),i.Eb(1),i.pc("matTooltip",e.tooltip)}}function v(a,t){if(1&a&&(i.Xb(0,"h1",14),i.Oc(1),i.Xb(2,"mat-icon",15),i.Oc(3,"person_pin"),i.Wb(),i.Wb()),2&a){var e=i.jc();i.Eb(1),i.Sc("",e.data.payload.idtipodoc,"-",0!=e.data.payload.idpvcaea?e.data.payload.idpvcaea.toString().padStart(4,"0"):e.data.payload.idpv.toString().padStart(4,"0"),"-",e.data.payload.idnumdoc.toString().padStart(8,"0"),""),i.Eb(1),i.pc("matTooltip",e.tooltip)}}function h(a,t){if(1&a&&(i.Xb(0,"p",2),i.Xb(1,"strong"),i.Oc(2),i.kc(3,"translate"),i.Wb(),i.Oc(4),i.Wb()),2&a){var e=i.jc();i.Eb(2),i.Qc("",i.lc(3,2,"SALESPOPUP.CLIENT"),":"),i.Eb(2),i.Qc(" ",e.data.payload.sRazonSocial,"")}}function P(a,t){if(1&a&&(i.Xb(0,"p",2),i.Xb(1,"strong"),i.Oc(2),i.kc(3,"translate"),i.Wb(),i.Oc(4),i.Wb()),2&a){var e=i.jc();i.Eb(2),i.Qc("",i.lc(3,2,"SALESPOPUP.ADDRESS"),":"),i.Eb(2),i.Qc(" ",e.data.payload.sDomicilio,"")}}function O(a,t){if(1&a&&(i.Xb(0,"p",2),i.Xb(1,"strong"),i.Oc(2),i.kc(3,"translate"),i.Wb(),i.Oc(4),i.kc(5,"date"),i.Wb()),2&a){var e=i.jc();i.Eb(2),i.Qc("",i.lc(3,2,"SALESPOPUP.UPLOADDATE"),":"),i.Eb(2),i.Qc(" ",i.mc(5,4,e.data.payload.fCarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function w(a,t){if(1&a&&(i.Xb(0,"p",2),i.Xb(1,"strong"),i.Oc(2),i.kc(3,"translate"),i.Wb(),i.Oc(4),i.kc(5,"date"),i.Wb()),2&a){var e=i.jc();i.Eb(2),i.Qc("",i.lc(3,2,"SALESPOPUP.UPLOADDATE"),":"),i.Eb(2),i.Qc(" ",i.mc(5,4,e.data.payload.fcarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function S(a,t){if(1&a&&(i.Xb(0,"p",2),i.Xb(1,"strong"),i.Oc(2),i.kc(3,"translate"),i.Wb(),i.Oc(4),i.Wb()),2&a){var e=i.jc();i.Eb(2),i.Qc("",i.lc(3,2,"SALESPOPUP.CAE"),":"),i.Eb(2),i.Qc(" ",e.data.payload.ImpresionCAE,"")}}function A(a,t){if(1&a&&i.Oc(0),2&a){var e=t.row;i.Qc(" ",null==e?null:e.sProducto," ")}}function k(a,t){if(1&a&&(i.Oc(0),i.kc(1,"number")),2&a){var e=t.row;i.Qc(" ",i.lc(1,1,null==e?null:e.rCantidad)," ")}}function L(a,t){if(1&a&&(i.Oc(0),i.kc(1,"currency")),2&a){var e=t.row;i.Qc(" ",i.lc(1,1,null==e?null:e.rPrecioU)," ")}}function T(a,t){if(1&a&&(i.Oc(0),i.kc(1,"currency")),2&a){var e=t.row;i.Qc(" ",i.lc(1,1,null==e?null:e.rDescuentos)," ")}}function W(a,t){if(1&a&&(i.Oc(0),i.kc(1,"currency")),2&a){var e=t.row;i.Qc(" ",i.lc(1,1,null==e?null:e.rTotal)," ")}}function X(a,t){if(1&a&&i.Oc(0),2&a){var e=t.row;i.Qc(" ",null==e?null:e.scondpago," ")}}function U(a,t){if(1&a&&(i.Oc(0),i.kc(1,"currency")),2&a){var e=t.row;i.Qc(" ",i.lc(1,1,null==e?null:e.rimporte)," ")}}function x(a,t){if(1&a&&i.Oc(0),2&a){var e=t.row;i.Qc(" ",null==e?null:e.srefpago," ")}}function M(a,t){if(1&a&&(i.Oc(0),i.kc(1,"number")),2&a){var e=t.row;i.Qc(" ",i.lc(1,1,null==e?null:e.icuotas)," ")}}function D(a,t){if(1&a&&(i.Xb(0,"div",16),i.Xb(1,"font",17),i.Oc(2),i.kc(3,"translate"),i.kc(4,"date"),i.kc(5,"translate"),i.Wb(),i.Wb()),2&a){var e=i.jc();i.Eb(2),i.Tc("",i.lc(3,4,"SALESPOPUP.CANCELEDON")," ",i.mc(4,6,e.data.payload.fAnulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",i.lc(5,9,"SALESPOPUP.BY")," ",e.data.payload.sOperadorAnulacion,"")}}function R(a,t){if(1&a&&(i.Xb(0,"div",16),i.Xb(1,"font",17),i.Oc(2),i.kc(3,"translate"),i.kc(4,"date"),i.kc(5,"translate"),i.Wb(),i.Wb()),2&a){var e=i.jc();i.Eb(2),i.Tc("",i.lc(3,4,"SALESPOPUP.CANCELEDON")," ",i.mc(4,6,e.data.payload.fanulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",i.lc(5,9,"SALESPOPUP.BY")," ",e.data.payload.soperadoranulacion,"")}}var H=function(){return{y:"50px",delay:"300ms"}},I=function(a){return{value:"*",params:a}},j=function(){var t=function(){function t(e,n,c){a(this,t),this.data=e,this.dialogRef=n,this.cdRef=c,this.page={count:0,offset:0,limit:5};var o=[e.payload.sOperadorCreacion||e.payload.soperadorcreacion],l=[e.payload.sOperadorModificacion||e.payload.soperadormodificacion],i=[e.payload.sOperadorAnulacion||e.payload.soperadoranulacion],d=[e.payload.fModificacion||e.payload.fmodificacion],b=[e.payload.fAnulacion||e.payload.fanulacion],s="T"==e.payload.bAnulado||"T"==e.payload.banulado;this.tooltip="Creado: "+r([e.payload.fCreacion||e.payload.fcreacion]).format("DD/MM/YYYY HH:mm")+" por "+o+", Modificado: "+r(d).format("DD/MM/YYYY HH:mm")+" por "+l,s&&(this.tooltip+=", Anulado: "+r(b).format("DD/MM/YYYY HH:mm")+" por "+i)}return e(t,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewChecked",value:function(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}}]),t}();return t.\u0275fac=function(a){return new(a||t)(i.Rb(o.a),i.Rb(o.g),i.Rb(i.h))},t.\u0275cmp=i.Lb({type:t,selectors:[["app-products-popup"]],decls:84,vars:106,consts:[["matDialogTitle","","align","right",4,"ngIf"],["class","m-0",4,"ngIf"],[1,"m-0"],[3,"label"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit"],[3,"name","flexGrow"],["ngx-datatable-cell-template",""],[2,"width","100%"],["align","right"],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"],["matDialogTitle","","align","right"],[3,"matTooltip"],["fxFlex","100",1,"mt-16"],["color","red"]],template:function(a,t){1&a&&(i.Mc(0,g,4,3,"h1",0),i.Mc(1,v,4,4,"h1",0),i.Xb(2,"mat-dialog-content"),i.Xb(3,"mat-card"),i.Xb(4,"mat-card-content"),i.Mc(5,h,5,4,"p",1),i.Mc(6,P,5,4,"p",1),i.Mc(7,O,6,7,"p",1),i.Mc(8,w,6,7,"p",1),i.Mc(9,S,5,4,"p",1),i.Xb(10,"p",2),i.Oc(11),i.Wb(),i.Wb(),i.Wb(),i.Xb(12,"mat-tab-group"),i.Xb(13,"mat-tab",3),i.kc(14,"translate"),i.Xb(15,"mat-card",4),i.Xb(16,"mat-card-content",4),i.Xb(17,"ngx-datatable",5),i.Xb(18,"ngx-datatable-column",6),i.kc(19,"translate"),i.Mc(20,A,1,1,"ng-template",7),i.Wb(),i.Xb(21,"ngx-datatable-column",6),i.kc(22,"translate"),i.Mc(23,k,2,3,"ng-template",7),i.Wb(),i.Xb(24,"ngx-datatable-column",6),i.kc(25,"translate"),i.Mc(26,L,2,3,"ng-template",7),i.Wb(),i.Xb(27,"ngx-datatable-column",6),i.kc(28,"translate"),i.Mc(29,T,2,3,"ng-template",7),i.Wb(),i.Xb(30,"ngx-datatable-column",6),i.kc(31,"translate"),i.Mc(32,W,2,3,"ng-template",7),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Xb(33,"mat-tab",3),i.kc(34,"translate"),i.Xb(35,"mat-card",4),i.Xb(36,"mat-card-content",4),i.Xb(37,"ngx-datatable",5),i.Xb(38,"ngx-datatable-column",6),i.kc(39,"translate"),i.Mc(40,X,1,1,"ng-template",7),i.Wb(),i.Xb(41,"ngx-datatable-column",6),i.kc(42,"translate"),i.Mc(43,U,2,3,"ng-template",7),i.Wb(),i.Xb(44,"ngx-datatable-column",6),i.kc(45,"translate"),i.Mc(46,x,1,1,"ng-template",7),i.Wb(),i.Xb(47,"ngx-datatable-column",6),i.kc(48,"translate"),i.Mc(49,M,2,3,"ng-template",7),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Xb(50,"div"),i.Xb(51,"table",8),i.Xb(52,"tr"),i.Xb(53,"th"),i.Oc(54),i.kc(55,"translate"),i.Wb(),i.Xb(56,"th"),i.Oc(57),i.kc(58,"translate"),i.Wb(),i.Xb(59,"th"),i.Oc(60),i.kc(61,"translate"),i.Wb(),i.Wb(),i.Xb(62,"tr"),i.Xb(63,"th"),i.Oc(64),i.kc(65,"currency"),i.Wb(),i.Xb(66,"th"),i.Oc(67),i.kc(68,"currency"),i.Wb(),i.Xb(69,"th"),i.Oc(70),i.kc(71,"currency"),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Xb(72,"h2",9),i.Oc(73),i.kc(74,"currency"),i.Wb(),i.Xb(75,"mat-dialog-content",10),i.Mc(76,D,6,11,"div",11),i.Mc(77,R,6,11,"div",11),i.Xb(78,"div",12),i.Xb(79,"button",13),i.fc("click",function(){return t.dialogRef.close(!1)}),i.Xb(80,"mat-icon"),i.Oc(81,"cancel"),i.Wb(),i.Oc(82),i.kc(83,"translate"),i.Wb(),i.Wb(),i.Wb()),2&a&&(i.pc("ngIf",t.data.payload.idTipoDoc),i.Eb(1),i.pc("ngIf",t.data.payload.idtipodoc),i.Eb(2),i.pc("@animate",i.vc(98,I,i.uc(97,H))),i.Eb(2),i.pc("ngIf",t.data.payload.sRazonSocial),i.Eb(1),i.pc("ngIf",t.data.payload.sDomicilio),i.Eb(1),i.pc("ngIf",t.data.payload.fCarga),i.Eb(1),i.pc("ngIf",t.data.payload.fcarga),i.Eb(1),i.pc("ngIf",t.data.payload.ImpresionCAE),i.Eb(2),i.Pc(t.data.sleyendacaea),i.Eb(2),i.qc("label",i.lc(14,59,"SALESPOPUP.DETAILS")),i.Eb(2),i.pc("@animate",i.vc(101,I,i.uc(100,H))),i.Eb(2),i.pc("rows",t.data.ventaitems)("columnMode","flex")("headerHeight",50)("footerHeight",t.data.ventaitems.length>t.page.limit?50:0)("scrollbarH",!1)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit),i.Eb(1),i.qc("name",i.lc(19,61,"SALESPOPUP.DESCRIPTION")),i.pc("flexGrow",1),i.Eb(3),i.qc("name",i.lc(22,63,"SALESPOPUP.QUANTITY")),i.pc("flexGrow",1),i.Eb(3),i.qc("name",i.lc(25,65,"SALESPOPUP.PRICE")),i.pc("flexGrow",1),i.Eb(3),i.qc("name",i.lc(28,67,"SALESPOPUP.DISCOUNTS")),i.pc("flexGrow",1),i.Eb(3),i.qc("name",i.lc(31,69,"SALESPOPUP.TOTAL")),i.pc("flexGrow",1),i.Eb(3),i.qc("label",i.lc(34,71,"SALESPOPUP.PAYMENTMETHODS")),i.Eb(2),i.pc("@animate",i.vc(104,I,i.uc(103,H))),i.Eb(2),i.pc("rows",t.data.ventamovcaja)("columnMode","flex")("headerHeight",50)("footerHeight",t.data.ventamovcaja.length>t.page.limit?50:0)("scrollbarH",!1)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit),i.Eb(1),i.qc("name",i.lc(39,73,"SALESPOPUP.PAYMENTMETHOD")),i.pc("flexGrow",1),i.Eb(3),i.qc("name",i.lc(42,75,"SALESPOPUP.AMOUNT")),i.pc("flexGrow",1),i.Eb(3),i.qc("name",i.lc(45,77,"SALESPOPUP.REFERENCE")),i.pc("flexGrow",1),i.Eb(3),i.qc("name",i.lc(48,79,"SALESPOPUP.FEE")),i.pc("flexGrow",1),i.Eb(7),i.Pc(i.lc(55,81,"SALESPOPUP.NETTOTAL")),i.Eb(3),i.Pc(i.lc(58,83,"SALESPOPUP.TOTALDISCOUNTS")),i.Eb(3),i.Pc(i.lc(61,85,"SALESPOPUP.TOTALTAXES")),i.Eb(4),i.Pc(i.lc(65,87,t.data.payload.rTotNeto)),i.Eb(3),i.Pc(i.lc(68,89,t.data.payload.rTotDescuento)),i.Eb(3),i.Pc(i.lc(71,91,t.data.payload.rTotImpuestos)),i.Eb(3),i.Qc(" Total:",i.lc(74,93,t.data.payload.rTotBruto),"\n"),i.Eb(3),i.pc("ngIf","T"==t.data.payload.bAnulado),i.Eb(1),i.pc("ngIf","T"==t.data.payload.banulado),i.Eb(5),i.Qc("",i.lc(83,95,"SALESPOPUP.CANCEL")," "))},directives:[d.o,o.e,b.a,b.b,s.b,s.a,p.d,p.b,p.a,u.c,u.b,u.a,f.b,m.a,o.h,E.a],pipes:[y.c,d.d,d.f,d.g],styles:[""],data:{animation:[l.a]}}),t}()},rbHy:function(t,n,c){"use strict";c.d(n,"a",function(){return d});var o=c("AytR"),l=c("cp0P"),r=c("8Y7J"),i=c("IheW"),d=function(){var t=function(){function t(e){a(this,t),this.http=e}return e(t,[{key:"obtenerDatosTabla1",value:function(a,t,e){var n="".concat(o.a.apiURL,"Ventas/DocumentosDeVentasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t);return e&&(n="".concat(o.a.apiURL,"Ventas/DocumentosDeVentasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t,"&idsucursal=").concat(e)),this.http.get(encodeURI(n))}},{key:"obtenerDatosTabla2",value:function(a,t,e){var n="".concat(o.a.apiURL,"Ventas/DetalleDeVentasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t);return e&&(n="".concat(o.a.apiURL,"Ventas/DetalleDeVentasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t,"&idsucursal=").concat(e)),this.http.get(encodeURI(n))}},{key:"obtenerDatosVenta",value:function(a){return Object(l.a)([this.http.get(encodeURI("".concat(o.a.apiURL,"Ventasitems/DetalleDeVentaPorId?idVenta=").concat(a))),this.http.get(encodeURI("".concat(o.a.apiURL,"Ventas/DetalleDeMovCajaVenta?idVenta=").concat(a)))])}}]),t}();return t.\u0275fac=function(a){return new(a||t)(r.bc(i.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();