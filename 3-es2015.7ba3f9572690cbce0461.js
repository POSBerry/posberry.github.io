(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{CHRX:function(t,a,o){"use strict";o.d(a,"a",function(){return n});var e=o("wd/R");class n{constructor(){this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}setGroup(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}setData(t){this.data=t,this.sortData()}sortData(){this.data.sort((t,a)=>{if(t[this.groupField]==a[this.groupField]){if(this.secondarySort){if(null==t[this.secondarySort])return 1;if(null==a[this.secondarySort])return-1;if(t[this.secondarySort]>a[this.secondarySort])return 1*("desc"===this.sortDir?-1:1);if(t[this.secondarySort]<a[this.secondarySort])return-1*("desc"===this.sortDir?-1:1)}}else{if(null==t[this.groupField])return 1;if(null==a[this.groupField])return-1;if(t[this.groupField]>a[this.groupField])return 1;if(t[this.groupField]<a[this.groupField])return-1}return 0}),this.filterRows()}filterRows(){var t=[];t=this.data.filter(t=>{for(var a in this.filter){if(this.filter[a]&&null==t[a])return!1;switch(typeof t[a]){case"number":if(this.filter[a]&&t[a].toString()!==this.filter[a].toString())return!1;break;case"string":if("f"==a.charAt(0).toLowerCase()&&e(t[a]).isValid){if(-1==e(t[a]).format("DD/MM/YYYY HH:mm:ss").indexOf(this.filter[a]))return!1;break}if(-1==t[a].toLowerCase().indexOf(this.filter[a].toLowerCase()))return!1}}return!0}),t=this.customFilter(t);var a={};this.groupField?a[this.groupField]=t.length.toString():a.count=t.length.toString(),this.sum.forEach(t=>a[t]=0);for(var o=0;o<t.length;o++)this.sum.forEach(e=>a[e]+=t[o][e]);if(a.isGroup=!0,this.footer=a,this.groupField){var n=[];t.forEach(t=>{-1==n.indexOf(t[this.groupField])&&n.push(t[this.groupField])}),n=n.map(t=>({name:t,count:1}));var c=[],i=!0,r=0,l=null,s=()=>{l&&(l[this.groupField]+=" ("+n[r-1].count.toString()+")")};for(o=0;o<t.length;o++){if(i&&t[o][this.groupField]==n[r].name){s();var d="+";this.groups[n[r].name]&&(d="-"),l={[this.groupField]:d+" "+n[r].name,isGroup:!0,name:n[r].name},this.sum.forEach(t=>l[t]=0),c.push(l),i=++r<n.length}else n[r-1].count++;this.sum.forEach(a=>l[a]+=t[o][a]),c.push(t[o])}s(),t=null,c=c.filter(t=>!!t.isGroup||!!this.groups[t[this.groupField]]||void 0),this.rows=c}else this.rows=t;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}updateFilter(t,a){t&&a&&(this.filter[a]=t.target.value,this.filterRows())}updateFilterBoolean(t,a){this.filter[a]=t,this.filterRows()}}},Iab2:function(t,a,o){var e,n;void 0===(n="function"==typeof(e=function(){"use strict";function a(t,a,o){var e=new XMLHttpRequest;e.open("GET",t),e.responseType="blob",e.onload=function(){i(e.response,a,o)},e.onerror=function(){console.error("could not download file")},e.send()}function o(t){var a=new XMLHttpRequest;a.open("HEAD",t,!1);try{a.send()}catch(t){}return 200<=a.status&&299>=a.status}function e(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(a){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(t,c,i){var r=n.URL||n.webkitURL,l=document.createElement("a");l.download=c=c||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?e(l):o(l.href)?a(t,c,i):e(l,l.target="_blank")):(l.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(l.href)},4e4),setTimeout(function(){e(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,c){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,a){return void 0===a?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,c),n);else if(o(t))a(t,n,c);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){e(i)})}}:function(t,o,e,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return a(t,o,e);var r="application/octet-stream"===t.type,l=/constructor/i.test(n.HTMLElement)||n.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&l||c)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},d.readAsDataURL(t)}else{var u=n.URL||n.webkitURL,p=u.createObjectURL(t);i?i.location=p:location.href=p,i=null,setTimeout(function(){u.revokeObjectURL(p)},4e4)}});n.saveAs=i.saveAs=i,t.exports=i})?e.apply(a,[]):e)||(t.exports=n)},bPAe:function(t,a,o){"use strict";o.d(a,"a",function(){return i});var e=o("Iab2"),n=o("EUZL"),c=o("8Y7J");let i=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,a,o){const e=n.utils.json_to_sheet(t),c=n.write({Sheets:{[o]:e},SheetNames:[o]},{bookType:"xlsx",type:"array"});this.saveExcelFile(c,a)}saveExcelFile(t,a){const o=new Blob([t],{type:this.fileType});e.saveAs(o,a+this.fileExtension)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=c.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},i59u:function(t,a,o){"use strict";o.d(a,"a",function(){return I});var e=o("iELJ"),n=o("GmJt"),c=o("wd/R"),i=o("8Y7J"),r=o("SVse"),l=o("PDjf"),s=o("w9WL"),d=o("VDRc"),u=o("Dxy4"),p=o("Tj54"),f=o("ZFy/"),b=o("TSSN");function m(t,a){if(1&t&&(i.Xb(0,"h1",12),i.Oc(1),i.Xb(2,"mat-icon",13),i.Oc(3,"person_pin"),i.Wb(),i.Wb()),2&t){const t=i.jc();i.Eb(1),i.Rc("",t.data.payload.idTipoDoc,"-",t.data.payload.Comprobante,""),i.Eb(1),i.pc("matTooltip",t.tooltip)}}function h(t,a){if(1&t&&(i.Xb(0,"h1",12),i.Oc(1),i.Xb(2,"mat-icon",13),i.Oc(3,"person_pin"),i.Wb(),i.Wb()),2&t){const t=i.jc();i.Eb(1),i.Sc("",t.data.payload.idtipodoc,"-",0!=t.data.payload.idpvcaea?t.data.payload.idpvcaea.toString().padStart(4,"0"):t.data.payload.idpv.toString().padStart(4,"0"),"-",t.data.payload.idnumdoc.toString().padStart(8,"0"),""),i.Eb(1),i.pc("matTooltip",t.tooltip)}}function g(t,a){if(1&t&&(i.Xb(0,"p",2),i.Xb(1,"strong"),i.Oc(2),i.kc(3,"translate"),i.Wb(),i.Oc(4),i.Wb()),2&t){const t=i.jc();i.Eb(2),i.Pc(i.lc(3,2,"Cliente:")),i.Eb(2),i.Qc(" ",t.data.payload.sRazonSocial,"")}}function y(t,a){if(1&t&&(i.Xb(0,"p",2),i.Xb(1,"strong"),i.Oc(2),i.kc(3,"translate"),i.Wb(),i.Oc(4),i.Wb()),2&t){const t=i.jc();i.Eb(2),i.Pc(i.lc(3,2,"Domicilio:")),i.Eb(2),i.Qc(" ",t.data.payload.sDomicilio,"")}}function w(t,a){if(1&t&&(i.Xb(0,"p",2),i.Xb(1,"strong"),i.Oc(2),i.kc(3,"translate"),i.Wb(),i.Oc(4),i.kc(5,"date"),i.Wb()),2&t){const t=i.jc();i.Eb(2),i.Pc(i.lc(3,2,"Fecha de Carga:")),i.Eb(2),i.Qc(" ",i.mc(5,4,t.data.payload.fCarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function v(t,a){if(1&t&&(i.Xb(0,"p",2),i.Xb(1,"strong"),i.Oc(2),i.kc(3,"translate"),i.Wb(),i.Oc(4),i.kc(5,"date"),i.Wb()),2&t){const t=i.jc();i.Eb(2),i.Pc(i.lc(3,2,"Fecha de Carga:")),i.Eb(2),i.Qc(" ",i.mc(5,4,t.data.payload.fcarga,"dd/MM/yyyy ' a las ' HH:mm"),"")}}function E(t,a){if(1&t&&(i.Xb(0,"p",2),i.Xb(1,"strong"),i.Oc(2,"CAE:"),i.Wb(),i.Oc(3),i.Wb()),2&t){const t=i.jc();i.Eb(3),i.Qc(" ",t.data.payload.ImpresionCAE,"")}}function M(t,a){if(1&t&&i.Oc(0),2&t){const t=a.row;i.Qc(" ",null==t?null:t.sCodProducto," ")}}function O(t,a){if(1&t&&i.Oc(0),2&t){const t=a.row;i.Qc(" ",null==t?null:t.sProducto," ")}}function k(t,a){if(1&t&&(i.Oc(0),i.kc(1,"number")),2&t){const t=a.row;i.Qc(" ",i.lc(1,1,null==t?null:t.rCantidad)," ")}}function X(t,a){if(1&t&&(i.Oc(0),i.kc(1,"currency")),2&t){const t=a.row;i.Qc(" ",i.lc(1,1,null==t?null:t.rPrecioU)," ")}}function x(t,a){if(1&t&&(i.Oc(0),i.kc(1,"currency")),2&t){const t=a.row;i.Qc(" ",i.lc(1,1,null==t?null:t.rDescuentos)," ")}}function W(t,a){if(1&t&&(i.Oc(0),i.kc(1,"currency")),2&t){const t=a.row;i.Qc(" ",i.lc(1,1,null==t?null:t.rTotal)," ")}}function T(t,a){if(1&t&&i.Oc(0),2&t){const t=a.row;i.Qc(" ",null==t?null:t.scondpago," ")}}function F(t,a){if(1&t&&(i.Oc(0),i.kc(1,"currency")),2&t){const t=a.row;i.Qc(" ",i.lc(1,1,null==t?null:t.rimporte)," ")}}function H(t,a){if(1&t&&i.Oc(0),2&t){const t=a.row;i.Qc(" ",null==t?null:t.srefpago," ")}}function S(t,a){if(1&t&&(i.Oc(0),i.kc(1,"number")),2&t){const t=a.row;i.Qc(" ",i.lc(1,1,null==t?null:t.icuotas)," ")}}function R(t,a){if(1&t&&(i.Xb(0,"div",14),i.Xb(1,"font",15),i.Oc(2),i.kc(3,"translate"),i.kc(4,"date"),i.kc(5,"translate"),i.Wb(),i.Wb()),2&t){const t=i.jc();i.Eb(2),i.Tc("",i.lc(3,4,"ANULADO el")," ",i.mc(4,6,t.data.payload.fAnulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",i.lc(5,9,"por")," ",t.data.payload.sOperadorAnulacion,"")}}function A(t,a){if(1&t&&(i.Xb(0,"div",14),i.Xb(1,"font",15),i.Oc(2),i.kc(3,"translate"),i.kc(4,"date"),i.kc(5,"translate"),i.Wb(),i.Wb()),2&t){const t=i.jc();i.Eb(2),i.Tc("",i.lc(3,4,"ANULADO el")," ",i.mc(4,6,t.data.payload.fanulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",i.lc(5,9,"por")," ",t.data.payload.soperadoranulacion,"")}}function D(t,a){if(1&t&&(i.Xb(0,"div",10),i.Xb(1,"h3"),i.Oc(2),i.kc(3,"currency"),i.Wb(),i.Wb()),2&t){const t=i.jc();i.Eb(2),i.Qc("Total: ",i.lc(3,1,t.data.payload.rTotBruto),"")}}function L(t,a){if(1&t&&(i.Xb(0,"div",10),i.Xb(1,"h3"),i.Oc(2),i.kc(3,"currency"),i.Wb(),i.Wb()),2&t){const t=i.jc();i.Eb(2),i.Qc("Total: ",i.lc(3,1,t.data.payload.rtotbruto),"")}}const j=function(){return{y:"50px",delay:"300ms"}},C=function(t){return{value:"*",params:t}};let I=(()=>{class t{constructor(t,a,o){this.data=t,this.dialogRef=a,this.cdRef=o,this.page={count:0,offset:0,limit:10};var e=[t.payload.sOperadorCreacion||t.payload.soperadorcreacion],n=[t.payload.sOperadorModificacion||t.payload.soperadormodificacion],i=[t.payload.sOperadorAnulacion||t.payload.soperadoranulacion],r=[t.payload.fModificacion||t.payload.fmodificacion],l=[t.payload.fAnulacion||t.payload.fanulacion],s="T"==t.payload.bAnulado||"T"==t.payload.banulado;this.tooltip="Creado: "+c([t.payload.fCreacion||t.payload.fcreacion]).format("DD/MM/YYYY HH:mm")+" por "+e+", Modificado: "+c(r).format("DD/MM/YYYY HH:mm")+" por "+n,s&&(this.tooltip+=", Anulado: "+c(l).format("DD/MM/YYYY HH:mm")+" por "+i)}ngOnInit(){}ngAfterViewChecked(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}}return t.\u0275fac=function(a){return new(a||t)(i.Rb(e.a),i.Rb(e.f),i.Rb(i.h))},t.\u0275cmp=i.Lb({type:t,selectors:[["app-products-popup"]],decls:59,vars:87,consts:[["matDialogTitle","","align","right",4,"ngIf"],["class","m-0",4,"ngIf"],[1,"m-0"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","selectionType"],[3,"name","width"],["ngx-datatable-cell-template",""],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"],["matDialogTitle","","align","right"],[3,"matTooltip"],["fxFlex","100",1,"mt-16"],["color","red"]],template:function(t,a){1&t&&(i.Mc(0,m,4,3,"h1",0),i.Mc(1,h,4,4,"h1",0),i.Xb(2,"mat-dialog-content"),i.Xb(3,"mat-card"),i.Xb(4,"mat-card-content"),i.Mc(5,g,5,4,"p",1),i.Mc(6,y,5,4,"p",1),i.Mc(7,w,6,7,"p",1),i.Mc(8,v,6,7,"p",1),i.Mc(9,E,4,1,"p",1),i.Xb(10,"p",2),i.Oc(11),i.Wb(),i.Wb(),i.Wb(),i.Xb(12,"mat-card",3),i.Xb(13,"mat-card-content",3),i.Xb(14,"ngx-datatable",4),i.Xb(15,"ngx-datatable-column",5),i.kc(16,"translate"),i.Mc(17,M,1,1,"ng-template",6),i.Wb(),i.Xb(18,"ngx-datatable-column",5),i.kc(19,"translate"),i.Mc(20,O,1,1,"ng-template",6),i.Wb(),i.Xb(21,"ngx-datatable-column",5),i.kc(22,"translate"),i.Mc(23,k,2,3,"ng-template",6),i.Wb(),i.Xb(24,"ngx-datatable-column",5),i.kc(25,"translate"),i.Mc(26,X,2,3,"ng-template",6),i.Wb(),i.Xb(27,"ngx-datatable-column",5),i.kc(28,"translate"),i.Mc(29,x,2,3,"ng-template",6),i.Wb(),i.Xb(30,"ngx-datatable-column",5),i.kc(31,"translate"),i.Mc(32,W,2,3,"ng-template",6),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Xb(33,"mat-card",3),i.Xb(34,"mat-card-content",3),i.Xb(35,"ngx-datatable",4),i.Xb(36,"ngx-datatable-column",5),i.kc(37,"translate"),i.Mc(38,T,1,1,"ng-template",6),i.Wb(),i.Xb(39,"ngx-datatable-column",5),i.kc(40,"translate"),i.Mc(41,F,2,3,"ng-template",6),i.Wb(),i.Xb(42,"ngx-datatable-column",5),i.kc(43,"translate"),i.Mc(44,H,1,1,"ng-template",6),i.Wb(),i.Xb(45,"ngx-datatable-column",5),i.kc(46,"translate"),i.Mc(47,S,2,3,"ng-template",6),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Xb(48,"mat-dialog-content",7),i.Mc(49,R,6,11,"div",8),i.Mc(50,A,6,11,"div",8),i.Mc(51,D,4,3,"div",9),i.Mc(52,L,4,3,"div",9),i.Xb(53,"div",10),i.Xb(54,"button",11),i.fc("click",function(){return a.dialogRef.close(!1)}),i.Xb(55,"mat-icon"),i.Oc(56,"cancel"),i.Wb(),i.Oc(57),i.kc(58,"translate"),i.Wb(),i.Wb(),i.Wb()),2&t&&(i.pc("ngIf",a.data.payload.idTipoDoc),i.Eb(1),i.pc("ngIf",a.data.payload.idtipodoc),i.Eb(2),i.pc("@animate",i.vc(79,C,i.uc(78,j))),i.Eb(2),i.pc("ngIf",a.data.payload.sRazonSocial),i.Eb(1),i.pc("ngIf",a.data.payload.sDomicilio),i.Eb(1),i.pc("ngIf",a.data.payload.fCarga),i.Eb(1),i.pc("ngIf",a.data.payload.fcarga),i.Eb(1),i.pc("ngIf",a.data.payload.ImpresionCAE),i.Eb(2),i.Pc(a.data.sleyendacaea),i.Eb(1),i.pc("@animate",i.vc(82,C,i.uc(81,j))),i.Eb(2),i.pc("rows",a.data.ventaitems)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit)("selectionType","single"),i.Eb(1),i.qc("name",i.lc(16,56,"Codigo")),i.pc("width",200),i.Eb(3),i.qc("name",i.lc(19,58,"Descripci\xf3n")),i.pc("width",500),i.Eb(3),i.qc("name",i.lc(22,60,"Cantidad")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(25,62,"Precio")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(28,64,"Descuentos")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(31,66,"Total")),i.pc("width",150),i.Eb(3),i.pc("@animate",i.vc(85,C,i.uc(84,j))),i.Eb(2),i.pc("rows",a.data.ventamovcaja)("columnMode","standard")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit)("selectionType","single"),i.Eb(1),i.qc("name",i.lc(37,68,"Medio de Pago")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(40,70,"Importe")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(43,72,"Referencia")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(46,74,"Cuotas")),i.pc("width",150),i.Eb(4),i.pc("ngIf","T"==a.data.payload.bAnulado),i.Eb(1),i.pc("ngIf","T"==a.data.payload.banulado),i.Eb(1),i.pc("ngIf",a.data.payload.hasOwnProperty("rTotBruto")),i.Eb(1),i.pc("ngIf",a.data.payload.hasOwnProperty("rtotbruto")),i.Eb(5),i.Qc("",i.lc(58,76,"Cancelar")," "))},directives:[r.o,e.d,l.a,l.b,s.d,s.b,s.a,d.c,d.b,d.a,u.b,p.a,e.g,f.a],pipes:[b.c,r.f,r.g,r.d],styles:[""],data:{animation:[n.a]}}),t})()}}]);