(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{GmJt:function(t,a,e){"use strict";e.d(a,"a",function(){return n});var c=e("GS7A");const o=Object(c.g)([Object(c.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(c.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(c.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),n=[Object(c.n)("animate",[Object(c.m)("void => *",[Object(c.o)(o)])]),Object(c.n)("fadeInOut",[Object(c.k)("0",Object(c.l)({opacity:0,display:"none"})),Object(c.k)("1",Object(c.l)({opacity:1,display:"block"})),Object(c.m)("0 => 1",Object(c.e)("300ms")),Object(c.m)("1 => 0",Object(c.e)("300ms"))])]},Iab2:function(t,a,e){var c,o;void 0===(o="function"==typeof(c=function(){"use strict";function a(t,a,e){var c=new XMLHttpRequest;c.open("GET",t),c.responseType="blob",c.onload=function(){l(c.response,a,e)},c.onerror=function(){console.error("could not download file")},c.send()}function e(t){var a=new XMLHttpRequest;a.open("HEAD",t,!1);try{a.send()}catch(t){}return 200<=a.status&&299>=a.status}function c(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(a){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,n=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(t,n,l){var r=o.URL||o.webkitURL,i=document.createElement("a");i.download=n=n||t.name||"download",i.rel="noopener","string"==typeof t?(i.href=t,i.origin===location.origin?c(i):e(i.href)?a(t,n,l):c(i,i.target="_blank")):(i.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){c(i)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,n){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,a){return void 0===a?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,n),o);else if(e(t))a(t,o,n);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){c(l)})}}:function(t,e,c,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof t)return a(t,e,c);var r="application/octet-stream"===t.type,i=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&i||n)&&"undefined"!=typeof FileReader){var b=new FileReader;b.onloadend=function(){var t=b.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=t:location=t,l=null},b.readAsDataURL(t)}else{var u=o.URL||o.webkitURL,d=u.createObjectURL(t);l?l.location=d:location.href=d,l=null,setTimeout(function(){u.revokeObjectURL(d)},4e4)}});o.saveAs=l.saveAs=l,t.exports=l})?c.apply(a,[]):c)||(t.exports=o)},bPAe:function(t,a,e){"use strict";e.d(a,"a",function(){return l});var c=e("Iab2"),o=e("EUZL"),n=e("8Y7J");let l=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,a,e){const c=o.utils.json_to_sheet(t),n=o.write({Sheets:{[e]:c},SheetNames:[e]},{bookType:"xlsx",type:"array"});this.saveExcelFile(n,a)}saveExcelFile(t,a){const e=new Blob([t],{type:this.fileType});c.saveAs(e,a+this.fileExtension)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=n.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},i59u:function(t,a,e){"use strict";e.d(a,"a",function(){return H});var c=e("iELJ"),o=e("GmJt"),n=e("wd/R"),l=e("8Y7J"),r=e("SVse"),i=e("PDjf"),s=e("w9WL"),b=e("VDRc"),u=e("Dxy4"),d=e("Tj54"),p=e("ZFy/"),m=e("TSSN");function f(t,a){if(1&t&&(l.Xb(0,"h1",12),l.Oc(1),l.Xb(2,"mat-icon",13),l.Oc(3,"person_pin"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(1),l.Rc("",t.data.payload.idTipoDoc,"-",t.data.payload.Comprobante,""),l.Eb(1),l.pc("matTooltip",t.tooltip)}}function h(t,a){if(1&t&&(l.Xb(0,"h1",12),l.Oc(1),l.Xb(2,"mat-icon",13),l.Oc(3,"person_pin"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(1),l.Sc("",t.data.payload.idtipodoc,"-",0!=t.data.payload.idpvcaea?t.data.payload.idpvcaea.toString().padStart(4,"0"):t.data.payload.idpv.toString().padStart(4,"0"),"-",t.data.payload.idnumdoc.toString().padStart(8,"0"),""),l.Eb(1),l.pc("matTooltip",t.tooltip)}}function g(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Cliente:")),l.Eb(2),l.Qc(" ",t.data.payload.sRazonSocial,"")}}function E(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Domicilio:")),l.Eb(2),l.Qc(" ",t.data.payload.sDomicilio,"")}}function y(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.kc(5,"date"),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Fecha de Carga:")),l.Eb(2),l.Qc(" ",l.mc(5,4,t.data.payload.fCarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function O(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.kc(5,"date"),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Fecha de Carga:")),l.Eb(2),l.Qc(" ",l.mc(5,4,t.data.payload.fcarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function v(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2,"CAE:"),l.Wb(),l.Oc(3),l.Wb()),2&t){const t=l.jc();l.Eb(3),l.Qc(" ",t.data.payload.ImpresionCAE,"")}}function C(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.sCodProducto," ")}}function w(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.sProducto," ")}}function A(t,a){if(1&t&&(l.Oc(0),l.kc(1,"number")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rCantidad)," ")}}function W(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rPrecioU)," ")}}function x(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rDescuentos)," ")}}function X(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rTotal)," ")}}function k(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.scondpago," ")}}function S(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.rimporte)," ")}}function D(t,a){if(1&t&&l.Oc(0),2&t){const t=a.row;l.Qc(" ",null==t?null:t.srefpago," ")}}function M(t,a){if(1&t&&(l.Oc(0),l.kc(1,"number")),2&t){const t=a.row;l.Qc(" ",l.lc(1,1,null==t?null:t.icuotas)," ")}}function T(t,a){if(1&t&&(l.Xb(0,"div",14),l.Xb(1,"font",15),l.Oc(2),l.kc(3,"translate"),l.kc(4,"date"),l.kc(5,"translate"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Tc("",l.lc(3,4,"ANULADO el")," ",l.mc(4,6,t.data.payload.fAnulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",l.lc(5,9,"por")," ",t.data.payload.sOperadorAnulacion,"")}}function P(t,a){if(1&t&&(l.Xb(0,"div",14),l.Xb(1,"font",15),l.Oc(2),l.kc(3,"translate"),l.kc(4,"date"),l.kc(5,"translate"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Tc("",l.lc(3,4,"ANULADO el")," ",l.mc(4,6,t.data.payload.fanulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",l.lc(5,9,"por")," ",t.data.payload.soperadoranulacion,"")}}function R(t,a){if(1&t&&(l.Xb(0,"div",10),l.Xb(1,"h3"),l.Oc(2),l.kc(3,"currency"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Qc("Total: ",l.lc(3,1,t.data.payload.rTotBruto),"")}}function I(t,a){if(1&t&&(l.Xb(0,"div",10),l.Xb(1,"h3"),l.Oc(2),l.kc(3,"currency"),l.Wb(),l.Wb()),2&t){const t=l.jc();l.Eb(2),l.Qc("Total: ",l.lc(3,1,t.data.payload.rtotbruto),"")}}const L=function(){return{y:"50px",delay:"300ms"}},j=function(t){return{value:"*",params:t}};let H=(()=>{class t{constructor(t,a,e){this.data=t,this.dialogRef=a,this.cdRef=e,this.page={count:0,offset:0,limit:10};var c=[t.payload.sOperadorCreacion||t.payload.soperadorcreacion],o=[t.payload.sOperadorModificacion||t.payload.soperadormodificacion],l=[t.payload.sOperadorAnulacion||t.payload.soperadoranulacion],r=[t.payload.fModificacion||t.payload.fmodificacion],i=[t.payload.fAnulacion||t.payload.fanulacion],s="T"==t.payload.bAnulado||"T"==t.payload.banulado;this.tooltip="Creado: "+n([t.payload.fCreacion||t.payload.fcreacion]).format("DD/MM/YYYY HH:mm")+" por "+c+", Modificado: "+n(r).format("DD/MM/YYYY HH:mm")+" por "+o,s&&(this.tooltip+=", Anulado: "+n(i).format("DD/MM/YYYY HH:mm")+" por "+l)}ngOnInit(){}ngAfterViewChecked(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}}return t.\u0275fac=function(a){return new(a||t)(l.Rb(c.a),l.Rb(c.g),l.Rb(l.h))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-products-popup"]],decls:59,vars:87,consts:[["matDialogTitle","","align","right",4,"ngIf"],["class","m-0",4,"ngIf"],[1,"m-0"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","selectionType"],[3,"name","width"],["ngx-datatable-cell-template",""],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"],["matDialogTitle","","align","right"],[3,"matTooltip"],["fxFlex","100",1,"mt-16"],["color","red"]],template:function(t,a){1&t&&(l.Mc(0,f,4,3,"h1",0),l.Mc(1,h,4,4,"h1",0),l.Xb(2,"mat-dialog-content"),l.Xb(3,"mat-card"),l.Xb(4,"mat-card-content"),l.Mc(5,g,5,4,"p",1),l.Mc(6,E,5,4,"p",1),l.Mc(7,y,6,7,"p",1),l.Mc(8,O,6,7,"p",1),l.Mc(9,v,4,1,"p",1),l.Xb(10,"p",2),l.Oc(11),l.Wb(),l.Wb(),l.Wb(),l.Xb(12,"mat-card",3),l.Xb(13,"mat-card-content",3),l.Xb(14,"ngx-datatable",4),l.Xb(15,"ngx-datatable-column",5),l.kc(16,"translate"),l.Mc(17,C,1,1,"ng-template",6),l.Wb(),l.Xb(18,"ngx-datatable-column",5),l.kc(19,"translate"),l.Mc(20,w,1,1,"ng-template",6),l.Wb(),l.Xb(21,"ngx-datatable-column",5),l.kc(22,"translate"),l.Mc(23,A,2,3,"ng-template",6),l.Wb(),l.Xb(24,"ngx-datatable-column",5),l.kc(25,"translate"),l.Mc(26,W,2,3,"ng-template",6),l.Wb(),l.Xb(27,"ngx-datatable-column",5),l.kc(28,"translate"),l.Mc(29,x,2,3,"ng-template",6),l.Wb(),l.Xb(30,"ngx-datatable-column",5),l.kc(31,"translate"),l.Mc(32,X,2,3,"ng-template",6),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(33,"mat-card",3),l.Xb(34,"mat-card-content",3),l.Xb(35,"ngx-datatable",4),l.Xb(36,"ngx-datatable-column",5),l.kc(37,"translate"),l.Mc(38,k,1,1,"ng-template",6),l.Wb(),l.Xb(39,"ngx-datatable-column",5),l.kc(40,"translate"),l.Mc(41,S,2,3,"ng-template",6),l.Wb(),l.Xb(42,"ngx-datatable-column",5),l.kc(43,"translate"),l.Mc(44,D,1,1,"ng-template",6),l.Wb(),l.Xb(45,"ngx-datatable-column",5),l.kc(46,"translate"),l.Mc(47,M,2,3,"ng-template",6),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(48,"mat-dialog-content",7),l.Mc(49,T,6,11,"div",8),l.Mc(50,P,6,11,"div",8),l.Mc(51,R,4,3,"div",9),l.Mc(52,I,4,3,"div",9),l.Xb(53,"div",10),l.Xb(54,"button",11),l.fc("click",function(){return a.dialogRef.close(!1)}),l.Xb(55,"mat-icon"),l.Oc(56,"cancel"),l.Wb(),l.Oc(57),l.kc(58,"translate"),l.Wb(),l.Wb(),l.Wb()),2&t&&(l.pc("ngIf",a.data.payload.idTipoDoc),l.Eb(1),l.pc("ngIf",a.data.payload.idtipodoc),l.Eb(2),l.pc("@animate",l.vc(79,j,l.uc(78,L))),l.Eb(2),l.pc("ngIf",a.data.payload.sRazonSocial),l.Eb(1),l.pc("ngIf",a.data.payload.sDomicilio),l.Eb(1),l.pc("ngIf",a.data.payload.fCarga),l.Eb(1),l.pc("ngIf",a.data.payload.fcarga),l.Eb(1),l.pc("ngIf",a.data.payload.ImpresionCAE),l.Eb(2),l.Pc(a.data.sleyendacaea),l.Eb(1),l.pc("@animate",l.vc(82,j,l.uc(81,L))),l.Eb(2),l.pc("rows",a.data.ventaitems)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit)("selectionType","single"),l.Eb(1),l.qc("name",l.lc(16,56,"Codigo")),l.pc("width",200),l.Eb(3),l.qc("name",l.lc(19,58,"Descripci\xf3n")),l.pc("width",500),l.Eb(3),l.qc("name",l.lc(22,60,"Cantidad")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(25,62,"Precio")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(28,64,"Descuentos")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(31,66,"Total")),l.pc("width",150),l.Eb(3),l.pc("@animate",l.vc(85,j,l.uc(84,L))),l.Eb(2),l.pc("rows",a.data.ventamovcaja)("columnMode","standard")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit)("selectionType","single"),l.Eb(1),l.qc("name",l.lc(37,68,"Medio de Pago")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(40,70,"Importe")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(43,72,"Referencia")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(46,74,"Cuotas")),l.pc("width",150),l.Eb(4),l.pc("ngIf","T"==a.data.payload.bAnulado),l.Eb(1),l.pc("ngIf","T"==a.data.payload.banulado),l.Eb(1),l.pc("ngIf",a.data.payload.hasOwnProperty("rTotBruto")),l.Eb(1),l.pc("ngIf",a.data.payload.hasOwnProperty("rtotbruto")),l.Eb(5),l.Qc("",l.lc(58,76,"Cancelar")," "))},directives:[r.o,c.e,i.a,i.b,s.d,s.b,s.a,b.c,b.b,b.a,u.b,d.a,c.h,p.a],pipes:[m.c,r.f,r.g,r.d],styles:[""],data:{animation:[o.a]}}),t})()},"vpF/":function(t,a,e){"use strict";e.r(a),e.d(a,"PuchasesByProductModule",function(){return dt});var c=e("SVse"),o=e("GmJt"),n=e("3sEA"),l=e("wd/R"),r=e("cp0P"),i=e("bPAe"),s=e("CHRX"),b=e("i59u"),u=e("UVsP"),d=e("Ap+n"),p=e("AytR"),m=e("8Y7J"),f=e("IheW");let h=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,a,e){let c=`${p.a.apiURL}Compras/DocumentosDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}`;return e&&(c=`${p.a.apiURL}Compras/DocumentosDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}&idsucursal=${e}`),this.http.get(encodeURI(c))}obtenerDatosTabla2(t,a,e){let c=`${p.a.apiURL}Compras/DetalleDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}`;return e&&(c=`${p.a.apiURL}Compras/DetalleDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}&idsucursal=${e}`),this.http.get(encodeURI(c))}obtenerDatosCompras(t){return Object(r.a)([this.http.get(encodeURI(`${p.a.apiURL}ComprasItems/DetalleDeComprasPorId?idCompras=${t}`)),this.http.get(encodeURI(`${p.a.apiURL}Compras/DetalleDeMovCajaCompras?idCompras=${t}`))])}}return t.\u0275fac=function(a){return new(a||t)(m.bc(f.c))},t.\u0275prov=m.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=e("iELJ"),E=e("zHaW"),y=e("PDjf"),O=e("VDRc"),v=e("Q2Ze"),C=e("e6WT"),w=e("TN/R"),A=e("ZTz/"),W=e("Dxy4"),x=e("Tj54"),X=e("w9WL"),k=e("UhP/"),S=e("TSSN");function D(t,a){if(1&t&&(m.Xb(0,"mat-option",17),m.Oc(1),m.Wb()),2&t){const t=a.$implicit;m.pc("value",t),m.Eb(1),m.Pc(null==t?null:t.toString())}}function M(t,a){if(1&t&&(m.Xb(0,"mat-option",17),m.Oc(1),m.Wb()),2&t){const t=a.$implicit;m.pc("value",t),m.Eb(1),m.Pc(null==t?null:t.toString())}}function T(t,a){if(1&t&&(m.Xb(0,"mat-option",17),m.Oc(1),m.Wb()),2&t){const t=a.$implicit;m.pc("value",t),m.Eb(1),m.Pc(null==t?null:t.toString())}}function P(t,a){if(1&t&&(m.Xb(0,"mat-option",17),m.Oc(1),m.Wb()),2&t){const t=a.$implicit;m.pc("value",t),m.Eb(1),m.Pc(null==t?null:t.toString())}}function R(t,a){if(1&t&&(m.Xb(0,"mat-option",17),m.Oc(1),m.Wb()),2&t){const t=a.$implicit;m.pc("value",t),m.Eb(1),m.Pc(null==t?null:t.nombre)}}function I(t,a){if(1&t&&m.Oc(0),2&t){const t=a.row;m.Qc(" ",null==t?null:t.Producto," ")}}function L(t,a){if(1&t&&(m.Oc(0),m.kc(1,"date")),2&t){const t=a.row;m.Qc(" ",m.mc(1,1,null==t?null:t.fDocumento,"dd/MM/yyyy HH:mm:ss")," ")}}function j(t,a){if(1&t&&m.Oc(0),2&t){const t=a.row;m.Qc(" ",null==t?null:t.idPV," ")}}function H(t,a){if(1&t&&m.Oc(0),2&t){const t=a.row;m.Qc(" ",null==t?null:t.Comprobante," ")}}function F(t,a){if(1&t&&m.Oc(0),2&t){const t=a.row;m.Qc(" ",null==t?null:t.Sucursal," ")}}function U(t,a){if(1&t&&m.Oc(0),2&t){const t=a.row;m.Qc(" ",null==t?null:t.sEAN," ")}}function Q(t,a){if(1&t&&m.Oc(0),2&t){const t=a.row;m.Qc(" ",null==t?null:t.sFamilia," ")}}function N(t,a){if(1&t&&m.Oc(0),2&t){const t=a.row;m.Qc(" ",null==t?null:t.sProveedor," ")}}function Y(t,a){1&t&&(m.Xb(0,"span"),m.Oc(1,"Si"),m.Wb())}function q(t,a){1&t&&(m.Xb(0,"span"),m.Oc(1,"No"),m.Wb())}function V(t,a){if(1&t&&(m.Mc(0,Y,2,0,"span",16),m.Mc(1,q,2,0,"span",16)),2&t){const t=a.row;m.pc("ngIf","T"==(null==t?null:t.bAnulado)),m.Eb(1),m.pc("ngIf","F"==(null==t?null:t.bAnulado))}}function $(t,a){if(1&t&&(m.Oc(0),m.kc(1,"number")),2&t){const t=a.row;m.Qc(" ",m.lc(1,1,null==t?null:t.rCantidad)," ")}}function _(t,a){if(1&t&&(m.Oc(0),m.kc(1,"currency")),2&t){const t=a.row;m.Qc(" ",m.lc(1,1,null==t?null:t.rPrecioU)," ")}}function B(t,a){if(1&t&&(m.Oc(0),m.kc(1,"currency")),2&t){const t=a.row;m.Qc(" ",m.lc(1,1,null==t?null:t.rTotal)," ")}}function G(t,a){if(1&t&&m.Oc(0),2&t){const t=a.row;m.Qc(" ",null==t?null:t.sOperadorCreacion," ")}}function J(t,a){if(1&t){const t=m.Yb();m.Xb(0,"button",11),m.fc("click",function(){return m.Dc(t),m.jc(3).export2Totales()}),m.Xb(1,"mat-icon"),m.Oc(2,"save_alt"),m.Wb(),m.Oc(3),m.kc(4,"translate"),m.Wb()}2&t&&(m.Eb(3),m.Qc("",m.lc(4,1,"SALES.EXCELTOTALS")," "))}function z(t,a){if(1&t){const t=m.Yb();m.Xb(0,"button",11),m.fc("click",function(){return m.Dc(t),m.jc(3).export2Detalle()}),m.Xb(1,"mat-icon"),m.Oc(2,"save_alt"),m.Wb(),m.Oc(3),m.kc(4,"translate"),m.Wb()}2&t&&(m.Eb(3),m.Qc("",m.lc(4,1,"SALES.EXCELDETAILS")," "))}function Z(t,a){if(1&t&&(m.Xb(0,"div",19),m.Xb(1,"div"),m.Xb(2,"strong"),m.Oc(3),m.kc(4,"translate"),m.Wb(),m.Wb(),m.Sb(5,"hr",20),m.Xb(6,"div"),m.Oc(7),m.kc(8,"translate"),m.kc(9,"number"),m.kc(10,"translate"),m.kc(11,"currency"),m.Wb(),m.Wb(),m.Xb(12,"div",21),m.Mc(13,J,5,3,"button",22),m.Mc(14,z,5,3,"button",22),m.Wb()),2&t){const t=m.jc(2);m.Eb(3),m.Pc(m.lc(4,8,"SALES.FOOTERTOTALS")),m.Eb(4),m.Uc("",t.tabla2.footer.Producto," | ",m.lc(8,10,"SALES.QUANTITY"),": ",m.lc(9,12,t.tabla2.footer.rCantidad)," | ",m.lc(10,14,"SALES.AMOUNT"),": ",m.lc(11,16,t.tabla2.footer.rTotal)," "),m.Eb(6),m.pc("ngIf",t.tabla2.data.length>0),m.Eb(1),m.pc("ngIf",t.tabla2.data.length>0)}}function K(t,a){1&t&&(m.Xb(0,"ngx-datatable-footer"),m.Mc(1,Z,15,18,"ng-template",18),m.Wb())}const tt=function(){return{y:"50px",delay:"300ms"}},at=function(t){return{value:"*",params:t}},et=[{path:"",component:(()=>{class t{constructor(t,a,e,c,o,n){this.dialog=t,this.servicioCompras=a,this.servicioExportarExcel=e,this.servicioSucursales=c,this.loader=o,this.snack=n,this.hours=0,this.minutes=0,this.hours2=0,this.minutes2=0,this.hoursArr=[],this.minutesArr=[],this.startDate=new Date,this.endDate=new Date;for(var l=0;l<=23;l++)this.hoursArr.push(l);for(l=0;l<=59;l++)this.minutesArr.push(l);this.minutes=this.minutesArr[0],this.minutes2=this.minutesArr[this.minutesArr.length-1],this.hours=this.hoursArr[0],this.hours2=this.hoursArr[this.hoursArr.length-1]}ngOnInit(){this.tabla1=new s.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new s.a,this.tabla2.groupField="Producto",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}export(){var t=this.tabla1.data.map(t=>({Fecha:l(t.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Cliente:t.sRazonSocial,Domicilio:t.sDomicilio,"Condici\xf3n IVA":t.sCondicionIVA,Anulado:"T"==t.bAnulado?"Si":"No","Condici\xf3n compra":t.sCondcompra,Total:t.rTotBruto,Operador:t.sOperadorCreacion,Vendedor:t.sVendedor}));this.servicioExportarExcel.exportExcel(t,"compras","compra")}export2Detalle(){var t=this.tabla2.data.map(t=>({Producto:t.Producto,Fecha:l(t.fDocumento).format("DD/MM/YYYY hh:mm:ss"),PV:t.idPV,Sucursal:t.Sucursal,EAN:t.sEAN,EAN2:t.sEAN2,Familia:t.sFamilia,Proveedor:t.sProveedor,Confirmado:"T"==t.bConfirmado?"Si":"No",Cantidad:t.rCantidad,PrecioU:t.rPrecioU,Importe:t.rTotal,OperadorCreaci\u00f3n:t.sOperadorCreacion}));this.servicioExportarExcel.exportExcel(t,"compras_detalle","compras_detalle")}export2Totales(){var t=this.tabla2.data.map(t=>({Producto:t.Producto,PV:t.idPV,EAN:t.sEAN,EAN2:t.sEAN2,Familia:t.sFamilia,Proveedor:t.sProveedor,Cantidad:t.rCantidad,PrecioU:t.rPrecioU,Total:t.rTotal}));this.servicioExportarExcel.exportExcel(t,"compras_detalle_totales","compras_detalle_totales")}refresh(){this.startDate.setHours(this.hours,this.minutes,0,0),this.endDate.setHours(this.hours2,this.minutes2,59,999),this.loader.open(),Object(r.a)([this.servicioCompras.obtenerDatosTabla1(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.id),this.servicioCompras.obtenerDatosTabla2(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.id)]).subscribe(t=>{console.log(t[1]),this.tabla1.setData(t[0].filter(()=>!0)),this.tabla2.setData(t[1].filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla1OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}openPopUp(t={}){this.loader.open(),this.servicioCompras.obtenerDatosCompras(t.id).subscribe(a=>{this.loader.close();var e="";0!=t.idPVCAEA&&(e="CAEA no informado.",t.fCAEAInformado&&(e="CAEA Informado el "+new Date(t.fCAEAInformado).toLocaleDateString())),this.dialog.open(b.a,{width:"720px",disableClose:!0,data:{title:"DETALLE DE COMPRA",payload:t,compraitems:a[0],compramovcaja:a[1],sleyendacaea:e}}).afterClosed().subscribe(t=>{})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}openUserInfoPopUp(t={}){this.dialog.open(d.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(a){return new(a||t)(m.Rb(g.b),m.Rb(h),m.Rb(i.a),m.Rb(u.a),m.Rb(n.a),m.Rb(E.a))},t.\u0275cmp=m.Lb({type:t,selectors:[["app-puchases-by-product"]],decls:97,vars:118,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker1",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","8",1,"m-8"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["picker2",""],[3,"value","selectionChange","valueChange"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","name","width"],["ngx-datatable-cell-template",""],[4,"ngIf"],[3,"value"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(t,a){if(1&t&&(m.Xb(0,"mat-card",0),m.Xb(1,"div",1),m.Xb(2,"mat-form-field",2),m.Xb(3,"mat-label"),m.Oc(4),m.kc(5,"translate"),m.Wb(),m.Xb(6,"input",3),m.fc("dateChange",function(t){return a.updateDate1(t)}),m.Wb(),m.Sb(7,"mat-datepicker-toggle",4),m.Sb(8,"mat-datepicker",null,5),m.Wb(),m.Xb(10,"mat-form-field",6),m.Xb(11,"mat-label"),m.Oc(12),m.kc(13,"translate"),m.Wb(),m.Xb(14,"mat-select",7),m.fc("valueChange",function(t){return a.hours=t}),m.Mc(15,D,2,2,"mat-option",8),m.Wb(),m.Wb(),m.Xb(16,"mat-form-field",6),m.Xb(17,"mat-label"),m.Oc(18),m.kc(19,"translate"),m.Wb(),m.Xb(20,"mat-select",7),m.fc("valueChange",function(t){return a.minutes=t}),m.Mc(21,M,2,2,"mat-option",8),m.Wb(),m.Wb(),m.Xb(22,"mat-form-field",2),m.Xb(23,"mat-label"),m.Oc(24),m.kc(25,"translate"),m.Wb(),m.Xb(26,"input",3),m.fc("dateChange",function(t){return a.updateDate2(t)}),m.Wb(),m.Sb(27,"mat-datepicker-toggle",4),m.Sb(28,"mat-datepicker",null,9),m.Wb(),m.Xb(30,"mat-form-field",6),m.Xb(31,"mat-label"),m.Oc(32),m.kc(33,"translate"),m.Wb(),m.Xb(34,"mat-select",7),m.fc("valueChange",function(t){return a.hours2=t}),m.Mc(35,T,2,2,"mat-option",8),m.Wb(),m.Wb(),m.Xb(36,"mat-form-field",6),m.Xb(37,"mat-label"),m.Oc(38),m.kc(39,"translate"),m.Wb(),m.Xb(40,"mat-select",7),m.fc("valueChange",function(t){return a.minutes2=t}),m.Mc(41,P,2,2,"mat-option",8),m.Wb(),m.Wb(),m.Xb(42,"mat-form-field",2),m.Xb(43,"mat-label"),m.Oc(44),m.kc(45,"translate"),m.Wb(),m.Xb(46,"mat-select",10),m.fc("selectionChange",function(t){return a.seleccionarSucursal(t.value)})("valueChange",function(t){return a.sucursalActual=t}),m.Mc(47,R,2,2,"mat-option",8),m.Wb(),m.Wb(),m.Xb(48,"button",11),m.fc("click",function(){return a.refresh()}),m.Xb(49,"mat-icon"),m.Oc(50,"search"),m.Wb(),m.Oc(51),m.kc(52,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Xb(53,"mat-card",0),m.Xb(54,"mat-card-content",0),m.Xb(55,"ngx-datatable",12,13),m.fc("activate",function(t){return a.tabla2OnActivate(t)}),m.Xb(57,"ngx-datatable-column",14),m.kc(58,"translate"),m.Mc(59,I,1,1,"ng-template",15),m.Wb(),m.Xb(60,"ngx-datatable-column",14),m.kc(61,"translate"),m.Mc(62,L,2,4,"ng-template",15),m.Wb(),m.Xb(63,"ngx-datatable-column",14),m.kc(64,"translate"),m.Mc(65,j,1,1,"ng-template",15),m.Wb(),m.Xb(66,"ngx-datatable-column",14),m.kc(67,"translate"),m.Mc(68,H,1,1,"ng-template",15),m.Wb(),m.Xb(69,"ngx-datatable-column",14),m.kc(70,"translate"),m.Mc(71,F,1,1,"ng-template",15),m.Wb(),m.Xb(72,"ngx-datatable-column",14),m.kc(73,"translate"),m.Mc(74,U,1,1,"ng-template",15),m.Wb(),m.Xb(75,"ngx-datatable-column",14),m.kc(76,"translate"),m.Mc(77,Q,1,1,"ng-template",15),m.Wb(),m.Xb(78,"ngx-datatable-column",14),m.kc(79,"translate"),m.Mc(80,N,1,1,"ng-template",15),m.Wb(),m.Xb(81,"ngx-datatable-column",14),m.kc(82,"translate"),m.Mc(83,V,2,2,"ng-template",15),m.Wb(),m.Xb(84,"ngx-datatable-column",14),m.kc(85,"translate"),m.Mc(86,$,2,3,"ng-template",15),m.Wb(),m.Xb(87,"ngx-datatable-column",14),m.kc(88,"translate"),m.Mc(89,_,2,3,"ng-template",15),m.Wb(),m.Xb(90,"ngx-datatable-column",14),m.kc(91,"translate"),m.Mc(92,B,2,3,"ng-template",15),m.Wb(),m.Xb(93,"ngx-datatable-column",14),m.kc(94,"translate"),m.Mc(95,G,1,1,"ng-template",15),m.Wb(),m.Mc(96,K,2,0,"ngx-datatable-footer",16),m.Wb(),m.Wb(),m.Wb()),2&t){const t=m.Ac(9),e=m.Ac(29);m.Eb(4),m.Pc(m.lc(5,73,"SALES.STARTDATE")),m.Eb(2),m.pc("matDatepicker",t)("value",a.startDate),m.Eb(1),m.pc("for",t),m.Eb(5),m.Pc(m.lc(13,75,"SALES.HOUR")),m.Eb(2),m.pc("value",a.hours),m.Eb(1),m.pc("ngForOf",a.hoursArr),m.Eb(3),m.Pc(m.lc(19,77,"SALES.MINUTES")),m.Eb(2),m.pc("value",a.minutes),m.Eb(1),m.pc("ngForOf",a.minutesArr),m.Eb(3),m.Pc(m.lc(25,79,"SALES.ENDDATE")),m.Eb(2),m.pc("matDatepicker",e)("value",a.endDate),m.Eb(1),m.pc("for",e),m.Eb(5),m.Pc(m.lc(33,81,"SALES.HOUR")),m.Eb(2),m.pc("value",a.hours2),m.Eb(1),m.pc("ngForOf",a.hoursArr),m.Eb(3),m.Pc(m.lc(39,83,"SALES.MINUTES")),m.Eb(2),m.pc("value",a.minutes2),m.Eb(1),m.pc("ngForOf",a.minutesArr),m.Eb(3),m.Pc(m.lc(45,85,"SALES.BRANCH")),m.Eb(2),m.pc("value",a.sucursalActual),m.Eb(1),m.pc("ngForOf",a.sucursales),m.Eb(4),m.Qc("",m.lc(52,87,"SALES.SHOW")," "),m.Eb(2),m.pc("@animate",m.vc(116,at,m.uc(115,tt))),m.Eb(2),m.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",a.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",a.tabla2.rows)("selectionType","single"),m.Eb(2),m.qc("name",m.lc(58,89,"SALES.PRODUCT")),m.pc("cellClass",a.getCellClass)("width",500),m.Eb(3),m.qc("name",m.lc(61,91,"Fecha")),m.pc("cellClass",a.getCellClass)("width",150),m.Eb(3),m.qc("name",m.lc(64,93,"PV")),m.pc("cellClass",a.getCellClass)("width",150),m.Eb(3),m.qc("name",m.lc(67,95,"SALES.RECEIPT")),m.pc("cellClass",a.getCellClass)("width",150),m.Eb(3),m.qc("name",m.lc(70,97,"Sucursal")),m.pc("cellClass",a.getCellClass)("width",200),m.Eb(3),m.qc("name",m.lc(73,99,"SALES.EAN")),m.pc("cellClass",a.getCellClass)("width",150),m.Eb(3),m.qc("name",m.lc(76,101,"SALES.FAMILY")),m.pc("cellClass",a.getCellClass)("width",225),m.Eb(3),m.qc("name",m.lc(79,103,"SALES.PROVIDER")),m.pc("cellClass",a.getCellClass)("width",200),m.Eb(3),m.qc("name",m.lc(82,105,"Anulado")),m.pc("cellClass",a.getCellClass)("width",150),m.Eb(3),m.qc("name",m.lc(85,107,"Cantidad")),m.pc("cellClass",a.getCellClass)("width",150),m.Eb(3),m.qc("name",m.lc(88,109,"SALES.PRICE")),m.pc("cellClass",a.getCellClass)("width",150),m.Eb(3),m.qc("name",m.lc(91,111,"Total")),m.pc("cellClass",a.getCellClass)("width",150),m.Eb(3),m.qc("name",m.lc(94,113,"Operador")),m.pc("cellClass",a.getCellClass)("width",150),m.Eb(3),m.pc("ngIf",a.tabla2.data.length>0)}},directives:[y.a,O.c,O.b,v.c,O.a,v.f,C.b,w.b,w.d,v.h,w.a,A.a,c.n,W.b,x.a,y.b,X.d,X.b,X.a,c.o,k.n,X.e,X.c],pipes:[S.c,c.f,c.g,c.d],styles:[""],data:{animation:[o.a]}}),t})(),data:{title:"Por Producto"}}];var ct=e("u9T3"),ot=e("s7LF"),nt=e("f44v"),lt=e("jMqV"),rt=e("M9ds"),it=e("ZFy/"),st=e("iInd"),bt=e("PCNd"),ut=e("BxcV");let dt=(()=>{class t{}return t.\u0275mod=m.Pb({type:t}),t.\u0275inj=m.Ob({factory:function(a){return new(a||t)},imports:[[c.c,ot.s,ct.a,X.f,C.c,C.c,y.c,C.c,W.c,nt.a,C.c,it.b,g.f,E.b,lt.b,rt.c,A.b,x.b,S.b,bt.a,w.c,ut.a,st.k.forChild(et)]]}),t})()}}]);