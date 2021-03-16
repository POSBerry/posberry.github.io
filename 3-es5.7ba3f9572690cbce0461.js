!function(){function t(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function a(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function e(t,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{CHRX:function(e,o,c){"use strict";c.d(o,"a",function(){return i});var r=c("wd/R"),i=function(){function e(){a(this,e),this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}return n(e,[{key:"setGroup",value:function(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}},{key:"setData",value:function(t){this.data=t,this.sortData()}},{key:"sortData",value:function(){var t=this;this.data.sort(function(a,e){if(a[t.groupField]==e[t.groupField]){if(t.secondarySort){if(null==a[t.secondarySort])return 1;if(null==e[t.secondarySort])return-1;if(a[t.secondarySort]>e[t.secondarySort])return 1*("desc"===t.sortDir?-1:1);if(a[t.secondarySort]<e[t.secondarySort])return-1*("desc"===t.sortDir?-1:1)}}else{if(null==a[t.groupField])return 1;if(null==e[t.groupField])return-1;if(a[t.groupField]>e[t.groupField])return 1;if(a[t.groupField]<e[t.groupField])return-1}return 0}),this.filterRows()}},{key:"filterRows",value:function(){var a=this,e=[];e=this.data.filter(function(t){for(var e in a.filter){if(a.filter[e]&&null==t[e])return!1;switch(typeof t[e]){case"number":if(a.filter[e]&&t[e].toString()!==a.filter[e].toString())return!1;break;case"string":if("f"==e.charAt(0).toLowerCase()&&r(t[e]).isValid){if(-1==r(t[e]).format("DD/MM/YYYY HH:mm:ss").indexOf(a.filter[e]))return!1;break}if(-1==t[e].toLowerCase().indexOf(a.filter[e].toLowerCase()))return!1}}return!0}),e=this.customFilter(e);var n={};this.groupField?n[this.groupField]=e.length.toString():n.count=e.length.toString(),this.sum.forEach(function(t){return n[t]=0});for(var o=0;o<e.length;o++)this.sum.forEach(function(t){return n[t]+=e[o][t]});if(n.isGroup=!0,this.footer=n,this.groupField){var c=[];e.forEach(function(t){-1==c.indexOf(t[a.groupField])&&c.push(t[a.groupField])}),c=c.map(function(t){return{name:t,count:1}});var i=[],l=!0,u=0,s=null,d=function(){s&&(s[a.groupField]+=" ("+c[u-1].count.toString()+")")};for(o=0;o<e.length;o++){if(l&&e[o][this.groupField]==c[u].name){var f;d();var p="+";this.groups[c[u].name]&&(p="-"),t(f={},this.groupField,p+" "+c[u].name),t(f,"isGroup",!0),t(f,"name",c[u].name),s=f,this.sum.forEach(function(t){return s[t]=0}),i.push(s),l=++u<c.length}else c[u-1].count++;this.sum.forEach(function(t){return s[t]+=e[o][t]}),i.push(e[o])}d(),e=null,i=i.filter(function(t){return!!t.isGroup||!!a.groups[t[a.groupField]]||void 0}),this.rows=i}else this.rows=e;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}},{key:"updateFilter",value:function(t,a){t&&a&&(this.filter[a]=t.target.value,this.filterRows())}},{key:"updateFilterBoolean",value:function(t,a){this.filter[a]=t,this.filterRows()}}]),e}()},Iab2:function(t,a,e){var n,o;void 0===(o="function"==typeof(n=function(){"use strict";function a(t,a,e){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){r(n.response,a,e)},n.onerror=function(){console.error("could not download file")},n.send()}function e(t){var a=new XMLHttpRequest;a.open("HEAD",t,!1);try{a.send()}catch(t){}return 200<=a.status&&299>=a.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(a){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(t,c,r){var i=o.URL||o.webkitURL,l=document.createElement("a");l.download=c=c||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?n(l):e(l.href)?a(t,c,r):n(l,l.target="_blank")):(l.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(l.href)},4e4),setTimeout(function(){n(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,c){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,a){return void 0===a?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,c),o);else if(e(t))a(t,o,c);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){n(r)})}}:function(t,e,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return a(t,e,n);var i="application/octet-stream"===t.type,l=/constructor/i.test(o.HTMLElement)||o.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||i&&l||c)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var t=s.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},s.readAsDataURL(t)}else{var d=o.URL||o.webkitURL,f=d.createObjectURL(t);r?r.location=f:location.href=f,r=null,setTimeout(function(){d.revokeObjectURL(f)},4e4)}});o.saveAs=r.saveAs=r,t.exports=r})?n.apply(a,[]):n)||(t.exports=o)},bPAe:function(e,o,c){"use strict";c.d(o,"a",function(){return u});var r=c("Iab2"),i=c("EUZL"),l=c("8Y7J"),u=function(){var e=function(){function e(){a(this,e),this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}return n(e,[{key:"exportExcel",value:function(a,e,n){var o=i.utils.json_to_sheet(a),c=i.write({Sheets:t({},n,o),SheetNames:[n]},{bookType:"xlsx",type:"array"});this.saveExcelFile(c,e)}},{key:"saveExcelFile",value:function(t,a){var e=new Blob([t],{type:this.fileType});r.saveAs(e,a+this.fileExtension)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=l.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},i59u:function(t,e,o){"use strict";o.d(e,"a",function(){return Y});var c=o("iELJ"),r=o("GmJt"),i=o("wd/R"),l=o("8Y7J"),u=o("SVse"),s=o("PDjf"),d=o("w9WL"),f=o("VDRc"),p=o("Dxy4"),b=o("Tj54"),m=o("ZFy/"),g=o("TSSN");function h(t,a){if(1&t&&(l.Xb(0,"h1",12),l.Oc(1),l.Xb(2,"mat-icon",13),l.Oc(3,"person_pin"),l.Wb(),l.Wb()),2&t){var e=l.jc();l.Eb(1),l.Rc("",e.data.payload.idTipoDoc,"-",e.data.payload.Comprobante,""),l.Eb(1),l.pc("matTooltip",e.tooltip)}}function y(t,a){if(1&t&&(l.Xb(0,"h1",12),l.Oc(1),l.Xb(2,"mat-icon",13),l.Oc(3,"person_pin"),l.Wb(),l.Wb()),2&t){var e=l.jc();l.Eb(1),l.Sc("",e.data.payload.idtipodoc,"-",0!=e.data.payload.idpvcaea?e.data.payload.idpvcaea.toString().padStart(4,"0"):e.data.payload.idpv.toString().padStart(4,"0"),"-",e.data.payload.idnumdoc.toString().padStart(8,"0"),""),l.Eb(1),l.pc("matTooltip",e.tooltip)}}function v(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.Wb()),2&t){var e=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Cliente:")),l.Eb(2),l.Qc(" ",e.data.payload.sRazonSocial,"")}}function w(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.Wb()),2&t){var e=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Domicilio:")),l.Eb(2),l.Qc(" ",e.data.payload.sDomicilio,"")}}function E(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.kc(5,"date"),l.Wb()),2&t){var e=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Fecha de Carga:")),l.Eb(2),l.Qc(" ",l.mc(5,4,e.data.payload.fCarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function k(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2),l.kc(3,"translate"),l.Wb(),l.Oc(4),l.kc(5,"date"),l.Wb()),2&t){var e=l.jc();l.Eb(2),l.Pc(l.lc(3,2,"Fecha de Carga:")),l.Eb(2),l.Qc(" ",l.mc(5,4,e.data.payload.fcarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function O(t,a){if(1&t&&(l.Xb(0,"p",2),l.Xb(1,"strong"),l.Oc(2,"CAE:"),l.Wb(),l.Oc(3),l.Wb()),2&t){var e=l.jc();l.Eb(3),l.Qc(" ",e.data.payload.ImpresionCAE,"")}}function M(t,a){if(1&t&&l.Oc(0),2&t){var e=a.row;l.Qc(" ",null==e?null:e.sCodProducto," ")}}function X(t,a){if(1&t&&l.Oc(0),2&t){var e=a.row;l.Qc(" ",null==e?null:e.sProducto," ")}}function x(t,a){if(1&t&&(l.Oc(0),l.kc(1,"number")),2&t){var e=a.row;l.Qc(" ",l.lc(1,1,null==e?null:e.rCantidad)," ")}}function W(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){var e=a.row;l.Qc(" ",l.lc(1,1,null==e?null:e.rPrecioU)," ")}}function T(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){var e=a.row;l.Qc(" ",l.lc(1,1,null==e?null:e.rDescuentos)," ")}}function F(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){var e=a.row;l.Qc(" ",l.lc(1,1,null==e?null:e.rTotal)," ")}}function H(t,a){if(1&t&&l.Oc(0),2&t){var e=a.row;l.Qc(" ",null==e?null:e.scondpago," ")}}function S(t,a){if(1&t&&(l.Oc(0),l.kc(1,"currency")),2&t){var e=a.row;l.Qc(" ",l.lc(1,1,null==e?null:e.rimporte)," ")}}function R(t,a){if(1&t&&l.Oc(0),2&t){var e=a.row;l.Qc(" ",null==e?null:e.srefpago," ")}}function A(t,a){if(1&t&&(l.Oc(0),l.kc(1,"number")),2&t){var e=a.row;l.Qc(" ",l.lc(1,1,null==e?null:e.icuotas)," ")}}function D(t,a){if(1&t&&(l.Xb(0,"div",14),l.Xb(1,"font",15),l.Oc(2),l.kc(3,"translate"),l.kc(4,"date"),l.kc(5,"translate"),l.Wb(),l.Wb()),2&t){var e=l.jc();l.Eb(2),l.Tc("",l.lc(3,4,"ANULADO el")," ",l.mc(4,6,e.data.payload.fAnulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",l.lc(5,9,"por")," ",e.data.payload.sOperadorAnulacion,"")}}function j(t,a){if(1&t&&(l.Xb(0,"div",14),l.Xb(1,"font",15),l.Oc(2),l.kc(3,"translate"),l.kc(4,"date"),l.kc(5,"translate"),l.Wb(),l.Wb()),2&t){var e=l.jc();l.Eb(2),l.Tc("",l.lc(3,4,"ANULADO el")," ",l.mc(4,6,e.data.payload.fanulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",l.lc(5,9,"por")," ",e.data.payload.soperadoranulacion,"")}}function C(t,a){if(1&t&&(l.Xb(0,"div",10),l.Xb(1,"h3"),l.Oc(2),l.kc(3,"currency"),l.Wb(),l.Wb()),2&t){var e=l.jc();l.Eb(2),l.Qc("Total: ",l.lc(3,1,e.data.payload.rTotBruto),"")}}function L(t,a){if(1&t&&(l.Xb(0,"div",10),l.Xb(1,"h3"),l.Oc(2),l.kc(3,"currency"),l.Wb(),l.Wb()),2&t){var e=l.jc();l.Eb(2),l.Qc("Total: ",l.lc(3,1,e.data.payload.rtotbruto),"")}}var I=function(){return{y:"50px",delay:"300ms"}},Q=function(t){return{value:"*",params:t}},Y=function(){var t=function(){function t(e,n,o){a(this,t),this.data=e,this.dialogRef=n,this.cdRef=o,this.page={count:0,offset:0,limit:10};var c=[e.payload.sOperadorCreacion||e.payload.soperadorcreacion],r=[e.payload.sOperadorModificacion||e.payload.soperadormodificacion],l=[e.payload.sOperadorAnulacion||e.payload.soperadoranulacion],u=[e.payload.fModificacion||e.payload.fmodificacion],s=[e.payload.fAnulacion||e.payload.fanulacion],d="T"==e.payload.bAnulado||"T"==e.payload.banulado;this.tooltip="Creado: "+i([e.payload.fCreacion||e.payload.fcreacion]).format("DD/MM/YYYY HH:mm")+" por "+c+", Modificado: "+i(u).format("DD/MM/YYYY HH:mm")+" por "+r,d&&(this.tooltip+=", Anulado: "+i(s).format("DD/MM/YYYY HH:mm")+" por "+l)}return n(t,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewChecked",value:function(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}}]),t}();return t.\u0275fac=function(a){return new(a||t)(l.Rb(c.a),l.Rb(c.f),l.Rb(l.h))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-products-popup"]],decls:59,vars:87,consts:[["matDialogTitle","","align","right",4,"ngIf"],["class","m-0",4,"ngIf"],[1,"m-0"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","selectionType"],[3,"name","width"],["ngx-datatable-cell-template",""],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"],["matDialogTitle","","align","right"],[3,"matTooltip"],["fxFlex","100",1,"mt-16"],["color","red"]],template:function(t,a){1&t&&(l.Mc(0,h,4,3,"h1",0),l.Mc(1,y,4,4,"h1",0),l.Xb(2,"mat-dialog-content"),l.Xb(3,"mat-card"),l.Xb(4,"mat-card-content"),l.Mc(5,v,5,4,"p",1),l.Mc(6,w,5,4,"p",1),l.Mc(7,E,6,7,"p",1),l.Mc(8,k,6,7,"p",1),l.Mc(9,O,4,1,"p",1),l.Xb(10,"p",2),l.Oc(11),l.Wb(),l.Wb(),l.Wb(),l.Xb(12,"mat-card",3),l.Xb(13,"mat-card-content",3),l.Xb(14,"ngx-datatable",4),l.Xb(15,"ngx-datatable-column",5),l.kc(16,"translate"),l.Mc(17,M,1,1,"ng-template",6),l.Wb(),l.Xb(18,"ngx-datatable-column",5),l.kc(19,"translate"),l.Mc(20,X,1,1,"ng-template",6),l.Wb(),l.Xb(21,"ngx-datatable-column",5),l.kc(22,"translate"),l.Mc(23,x,2,3,"ng-template",6),l.Wb(),l.Xb(24,"ngx-datatable-column",5),l.kc(25,"translate"),l.Mc(26,W,2,3,"ng-template",6),l.Wb(),l.Xb(27,"ngx-datatable-column",5),l.kc(28,"translate"),l.Mc(29,T,2,3,"ng-template",6),l.Wb(),l.Xb(30,"ngx-datatable-column",5),l.kc(31,"translate"),l.Mc(32,F,2,3,"ng-template",6),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(33,"mat-card",3),l.Xb(34,"mat-card-content",3),l.Xb(35,"ngx-datatable",4),l.Xb(36,"ngx-datatable-column",5),l.kc(37,"translate"),l.Mc(38,H,1,1,"ng-template",6),l.Wb(),l.Xb(39,"ngx-datatable-column",5),l.kc(40,"translate"),l.Mc(41,S,2,3,"ng-template",6),l.Wb(),l.Xb(42,"ngx-datatable-column",5),l.kc(43,"translate"),l.Mc(44,R,1,1,"ng-template",6),l.Wb(),l.Xb(45,"ngx-datatable-column",5),l.kc(46,"translate"),l.Mc(47,A,2,3,"ng-template",6),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(48,"mat-dialog-content",7),l.Mc(49,D,6,11,"div",8),l.Mc(50,j,6,11,"div",8),l.Mc(51,C,4,3,"div",9),l.Mc(52,L,4,3,"div",9),l.Xb(53,"div",10),l.Xb(54,"button",11),l.fc("click",function(){return a.dialogRef.close(!1)}),l.Xb(55,"mat-icon"),l.Oc(56,"cancel"),l.Wb(),l.Oc(57),l.kc(58,"translate"),l.Wb(),l.Wb(),l.Wb()),2&t&&(l.pc("ngIf",a.data.payload.idTipoDoc),l.Eb(1),l.pc("ngIf",a.data.payload.idtipodoc),l.Eb(2),l.pc("@animate",l.vc(79,Q,l.uc(78,I))),l.Eb(2),l.pc("ngIf",a.data.payload.sRazonSocial),l.Eb(1),l.pc("ngIf",a.data.payload.sDomicilio),l.Eb(1),l.pc("ngIf",a.data.payload.fCarga),l.Eb(1),l.pc("ngIf",a.data.payload.fcarga),l.Eb(1),l.pc("ngIf",a.data.payload.ImpresionCAE),l.Eb(2),l.Pc(a.data.sleyendacaea),l.Eb(1),l.pc("@animate",l.vc(82,Q,l.uc(81,I))),l.Eb(2),l.pc("rows",a.data.ventaitems)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit)("selectionType","single"),l.Eb(1),l.qc("name",l.lc(16,56,"Codigo")),l.pc("width",200),l.Eb(3),l.qc("name",l.lc(19,58,"Descripci\xf3n")),l.pc("width",500),l.Eb(3),l.qc("name",l.lc(22,60,"Cantidad")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(25,62,"Precio")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(28,64,"Descuentos")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(31,66,"Total")),l.pc("width",150),l.Eb(3),l.pc("@animate",l.vc(85,Q,l.uc(84,I))),l.Eb(2),l.pc("rows",a.data.ventamovcaja)("columnMode","standard")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit)("selectionType","single"),l.Eb(1),l.qc("name",l.lc(37,68,"Medio de Pago")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(40,70,"Importe")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(43,72,"Referencia")),l.pc("width",150),l.Eb(3),l.qc("name",l.lc(46,74,"Cuotas")),l.pc("width",150),l.Eb(4),l.pc("ngIf","T"==a.data.payload.bAnulado),l.Eb(1),l.pc("ngIf","T"==a.data.payload.banulado),l.Eb(1),l.pc("ngIf",a.data.payload.hasOwnProperty("rTotBruto")),l.Eb(1),l.pc("ngIf",a.data.payload.hasOwnProperty("rtotbruto")),l.Eb(5),l.Qc("",l.lc(58,76,"Cancelar")," "))},directives:[u.o,c.d,s.a,s.b,d.d,d.b,d.a,f.c,f.b,f.a,p.b,b.a,c.g,m.a],pipes:[g.c,u.f,u.g,u.d],styles:[""],data:{animation:[r.a]}}),t}()}}])}();