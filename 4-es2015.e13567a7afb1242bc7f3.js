(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{CHRX:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var a=o("wd/R");class n{constructor(){this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}setGroup(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}setData(t){this.data=t,this.sortData()}sortData(){this.data.sort((t,e)=>{if(t[this.groupField]==e[this.groupField]){if(this.secondarySort){if(t[this.secondarySort]>e[this.secondarySort])return 1*("desc"===this.sortDir?-1:1);if(t[this.secondarySort]<e[this.secondarySort])return-1*("desc"===this.sortDir?-1:1)}}else{if(t[this.groupField]>e[this.groupField])return 1;if(t[this.groupField]<e[this.groupField])return-1}return 0}),this.filterRows()}filterRows(){var t=[];t=this.data.filter(t=>{for(var e in this.filter)switch(typeof t[e]){case"number":if(this.filter[e]&&t[e].toString()!==this.filter[e].toString())return!1;break;case"string":if("f"==e.charAt(0).toLowerCase()&&a(t[e]).isValid){if(-1==a(t[e]).format("DD/MM/YYYY HH:mm:ss").indexOf(this.filter[e]))return!1;break}if(-1==t[e].toLowerCase().indexOf(this.filter[e].toLowerCase()))return!1}return!0}),t=this.customFilter(t);var e={};this.groupField?e[this.groupField]=t.length.toString():e.count=t.length.toString(),this.sum.forEach(t=>e[t]=0);for(var o=0;o<t.length;o++)this.sum.forEach(a=>e[a]+=t[o][a]);if(e.isGroup=!0,this.footer=e,this.groupField){var n=[];t.forEach(t=>{-1==n.indexOf(t[this.groupField])&&n.push(t[this.groupField])}),n=n.map(t=>({name:t,count:1}));var r=[],i=!0,c=0,s=null,l=()=>{s&&(s[this.groupField]+=" ("+n[c-1].count.toString()+")")};for(o=0;o<t.length;o++){if(i&&t[o][this.groupField]==n[c].name){l();var u="+";this.groups[n[c].name]&&(u="-"),s={[this.groupField]:u+" "+n[c].name,isGroup:!0,name:n[c].name},this.sum.forEach(t=>s[t]=0),r.push(s),i=++c<n.length}else n[c-1].count++;this.sum.forEach(e=>s[e]+=t[o][e]),r.push(t[o])}l(),t=null,r=r.filter(t=>!!t.isGroup||!!this.groups[t[this.groupField]]||void 0),this.rows=r}else this.rows=t;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}updateFilter(t,e){t&&e&&(this.filter[e]=t.target.value,this.filterRows())}updateFilterBoolean(t,e){this.filter[e]=t,this.filterRows()}}},Iab2:function(t,e,o){var a,n;void 0===(n="function"==typeof(a=function(){"use strict";function e(t,e,o){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){i(a.response,e,o)},a.onerror=function(){console.error("could not download file")},a.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,r=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,r,i){var c=n.URL||n.webkitURL,s=document.createElement("a");s.download=r=r||t.name||"download",s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?a(s):o(s.href)?e(t,r,i):a(s,s.target="_blank")):(s.href=c.createObjectURL(t),setTimeout(function(){c.revokeObjectURL(s.href)},4e4),setTimeout(function(){a(s)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,r){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,r),n);else if(o(t))e(t,n,r);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){a(i)})}}:function(t,o,a,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,a);var c="application/octet-stream"===t.type,s=/constructor/i.test(n.HTMLElement)||n.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||c&&s||r)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},u.readAsDataURL(t)}else{var d=n.URL||n.webkitURL,p=d.createObjectURL(t);i?i.location=p:location.href=p,i=null,setTimeout(function(){d.revokeObjectURL(p)},4e4)}});n.saveAs=i.saveAs=i,t.exports=i})?a.apply(e,[]):a)||(t.exports=n)},UVsP:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var a=o("AytR"),n=o("HDdC"),r=o("cp0P"),i=o("8Y7J"),c=o("IheW");let s=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t=!1,e=!1,o=!1){return new n.a(n=>{let i=a.a.apiURL+"Sucursales/SucursalesPorOperador";o&&(i=a.a.apiURL+'Sucursales/?filter={"where":{"deletedon":{"eq":null}}}');var c=[this.http.get(encodeURI(i))];t&&c.push(this.http.get(encodeURI(a.a.apiURL+'PuntosVenta/?filter={"where":{"deletedon":{"eq":null}}}'))),Object(r.a)(c).subscribe(a=>{var r=a[0];if(r=r.map((t,e,o)=>({bactivo:"T"==t.bactivo,nombre:t.sdescripcion,id:t.idsucursal,idsucursal:t.idsucursal,puntosventas:new Array})),e&&(r=r.filter(t=>t.bactivo)),r.sort((t,e)=>t.nombre>e.nombre?1:t.nombre<e.nombre?-1:0),r.splice(0,0,{nombre:"TODAS",id:"",puntosventas:new Array}),t){var i=a[1];e&&(i=i.filter(t=>"T"==t.bactivo));for(var c=0;c<i.length;c++){1!=r.length&&-1==r[0].puntosventas.indexOf(i[c])&&r[0].puntosventas.push(i[c].idpv);for(var s=1;s<r.length;s++)i[c].idsucursal==r[s].idsucursal&&-1==r[s].puntosventas.indexOf(i[c].idpv)&&r[s].puntosventas.push(i[c].idpv)}for(c=0;c<r.length;c++)r[c].puntosventasstr=r[c].puntosventas.join()}o||2!=r.length||r.shift(),n.next(r),n.complete()},t=>n.error(t))})}}return t.\u0275fac=function(e){return new(e||t)(i.bc(c.c))},t.\u0275prov=i.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},bPAe:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var a=o("Iab2"),n=o("EUZL"),r=o("8Y7J");let i=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,o){const a=n.utils.json_to_sheet(t),r=n.write({Sheets:{[o]:a},SheetNames:[o]},{bookType:"xlsx",type:"array"});this.saveExcelFile(r,e)}saveExcelFile(t,e){const o=new Blob([t],{type:this.fileType});a.saveAs(o,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},i59u:function(t,e,o){"use strict";o.d(e,"a",function(){return R});var a=o("iELJ"),n=o("GmJt"),r=o("wd/R"),i=o("8Y7J"),c=o("Tj54"),s=o("ZFy/"),l=o("PDjf"),u=o("w9WL"),d=o("VDRc"),p=o("SVse"),f=o("Dxy4"),b=o("TSSN");function h(t,e){if(1&t&&i.Oc(0),2&t){const t=e.row;i.Qc(" ",null==t?null:t.sCodProducto," ")}}function m(t,e){if(1&t&&i.Oc(0),2&t){const t=e.row;i.Qc(" ",null==t?null:t.sProducto," ")}}function g(t,e){if(1&t&&(i.Oc(0),i.kc(1,"number")),2&t){const t=e.row;i.Qc(" ",i.lc(1,1,null==t?null:t.rCantidad)," ")}}function w(t,e){if(1&t&&(i.Oc(0),i.kc(1,"currency")),2&t){const t=e.row;i.Qc(" ",i.lc(1,1,null==t?null:t.rPrecioU)," ")}}function v(t,e){if(1&t&&(i.Oc(0),i.kc(1,"currency")),2&t){const t=e.row;i.Qc(" ",i.lc(1,1,null==t?null:t.rDescuentos)," ")}}function y(t,e){if(1&t&&(i.Oc(0),i.kc(1,"currency")),2&t){const t=e.row;i.Qc(" ",i.lc(1,1,null==t?null:t.rTotal)," ")}}function E(t,e){if(1&t&&i.Oc(0),2&t){const t=e.row;i.Qc(" ",null==t?null:t.scondpago," ")}}function x(t,e){if(1&t&&(i.Oc(0),i.kc(1,"currency")),2&t){const t=e.row;i.Qc(" ",i.lc(1,1,null==t?null:t.rimporte)," ")}}function O(t,e){if(1&t&&i.Oc(0),2&t){const t=e.row;i.Qc(" ",null==t?null:t.srefpago," ")}}function k(t,e){if(1&t&&(i.Oc(0),i.kc(1,"number")),2&t){const t=e.row;i.Qc(" ",i.lc(1,1,null==t?null:t.icuotas)," ")}}function W(t,e){if(1&t&&(i.Xb(0,"div",12),i.Xb(1,"font",13),i.Oc(2),i.kc(3,"translate"),i.kc(4,"date"),i.kc(5,"translate"),i.Wb(),i.Wb()),2&t){const t=i.jc();i.Eb(2),i.Sc("",i.lc(3,4,"ANULADO el")," ",i.mc(4,6,t.data.payload.fAnulacion,"dd/MM/yyyy ' a las ' HH:mm")," ",i.lc(5,9,"por")," ",t.data.payload.sOperadorAnulacion,"")}}const X=function(){return{y:"50px",delay:"300ms"}},M=function(t){return{value:"*",params:t}};let R=(()=>{class t{constructor(t,e){this.data=t,this.dialogRef=e,this.page={count:0,offset:0,limit:10},this.tooltip="Creado: "+r(t.payload.fCreacion).format("DD/MM/YYYY HH:mm")+" por "+t.payload.sOperadorCreacion+", Modificado: "+r(t.payload.fModificacion).format("DD/MM/YYYY HH:mm")+" por "+t.payload.sOperadorModificacion,"T"==t.payload.bAnulado&&(this.tooltip+=", Anulado: "+r(t.payload.fAnulacion).format("DD/MM/YYYY HH:mm")+" por "+t.payload.sOperadorAnulacion)}ngOnInit(){}ngAfterViewChecked(){window.dispatchEvent(new Event("resize"))}}return t.\u0275fac=function(e){return new(e||t)(i.Rb(a.a),i.Rb(a.f))},t.\u0275cmp=i.Lb({type:t,selectors:[["app-products-popup"]],decls:77,vars:99,consts:[["matDialogTitle","","align","right"],[3,"matTooltip"],[1,"m-0"],["ng-if","data.payload.ImpresionCAE",1,"m-0"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","selectionType"],[3,"name","width"],["ngx-datatable-cell-template",""],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100","class","mt-16",4,"ngIf"],["fxFlex","100","fxLayoutAlign","end",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"],["fxFlex","100",1,"mt-16"],["color","red"]],template:function(t,e){1&t&&(i.Xb(0,"h1",0),i.Oc(1),i.Xb(2,"mat-icon",1),i.Oc(3,"person_pin"),i.Wb(),i.Wb(),i.Xb(4,"mat-dialog-content"),i.Xb(5,"mat-card"),i.Xb(6,"mat-card-content"),i.Xb(7,"p",2),i.Xb(8,"strong"),i.Oc(9),i.kc(10,"translate"),i.Wb(),i.Oc(11),i.Wb(),i.Xb(12,"p",2),i.Xb(13,"strong"),i.Oc(14),i.kc(15,"translate"),i.Wb(),i.Oc(16),i.Wb(),i.Xb(17,"p",2),i.Xb(18,"strong"),i.Oc(19),i.kc(20,"translate"),i.Wb(),i.Oc(21),i.kc(22,"date"),i.Wb(),i.Xb(23,"p",3),i.Xb(24,"strong"),i.Oc(25,"CAE:"),i.Wb(),i.Oc(26),i.Wb(),i.Xb(27,"p",2),i.Oc(28),i.Wb(),i.Wb(),i.Wb(),i.Xb(29,"mat-card",4),i.Xb(30,"mat-card-content",4),i.Xb(31,"ngx-datatable",5),i.Xb(32,"ngx-datatable-column",6),i.kc(33,"translate"),i.Mc(34,h,1,1,"ng-template",7),i.Wb(),i.Xb(35,"ngx-datatable-column",6),i.kc(36,"translate"),i.Mc(37,m,1,1,"ng-template",7),i.Wb(),i.Xb(38,"ngx-datatable-column",6),i.kc(39,"translate"),i.Mc(40,g,2,3,"ng-template",7),i.Wb(),i.Xb(41,"ngx-datatable-column",6),i.kc(42,"translate"),i.Mc(43,w,2,3,"ng-template",7),i.Wb(),i.Xb(44,"ngx-datatable-column",6),i.kc(45,"translate"),i.Mc(46,v,2,3,"ng-template",7),i.Wb(),i.Xb(47,"ngx-datatable-column",6),i.kc(48,"translate"),i.Mc(49,y,2,3,"ng-template",7),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Xb(50,"mat-card",4),i.Xb(51,"mat-card-content",4),i.Xb(52,"ngx-datatable",5),i.Xb(53,"ngx-datatable-column",6),i.kc(54,"translate"),i.Mc(55,E,1,1,"ng-template",7),i.Wb(),i.Xb(56,"ngx-datatable-column",6),i.kc(57,"translate"),i.Mc(58,x,2,3,"ng-template",7),i.Wb(),i.Xb(59,"ngx-datatable-column",6),i.kc(60,"translate"),i.Mc(61,O,1,1,"ng-template",7),i.Wb(),i.Xb(62,"ngx-datatable-column",6),i.kc(63,"translate"),i.Mc(64,k,2,3,"ng-template",7),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Xb(65,"mat-dialog-content",8),i.Mc(66,W,6,11,"div",9),i.Xb(67,"div",10),i.Xb(68,"h3"),i.Oc(69),i.kc(70,"currency"),i.Wb(),i.Wb(),i.Xb(71,"div",10),i.Xb(72,"button",11),i.fc("click",function(){return e.dialogRef.close(!1)}),i.Xb(73,"mat-icon"),i.Oc(74,"cancel"),i.Wb(),i.Oc(75),i.kc(76,"translate"),i.Wb(),i.Wb(),i.Wb()),2&t&&(i.Eb(1),i.Rc("",e.data.payload.idTipoDoc,"-",e.data.payload.Comprobante,""),i.Eb(1),i.pc("matTooltip",e.tooltip),i.Eb(3),i.pc("@animate",i.vc(91,M,i.uc(90,X))),i.Eb(4),i.Pc(i.lc(10,57,"Cliente:")),i.Eb(2),i.Qc(" ",e.data.payload.sRazonSocial,""),i.Eb(3),i.Pc(i.lc(15,59,"Domicilio:")),i.Eb(2),i.Qc(" ",e.data.payload.sDomicilio,""),i.Eb(3),i.Pc(i.lc(20,61,"Fecha de Carga:")),i.Eb(2),i.Qc(" ",i.mc(22,63,e.data.payload.fCarga,"dd/MM/yyyy ' a las ' HH:mm"),""),i.Eb(5),i.Qc(" ",e.data.payload.ImpresionCAE,""),i.Eb(2),i.Pc(e.data.sleyendacaea),i.Eb(1),i.pc("@animate",i.vc(94,M,i.uc(93,X))),i.Eb(2),i.pc("rows",e.data.ventaitems)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("selectionType","single"),i.Eb(1),i.qc("name",i.lc(33,66,"Codigo")),i.pc("width",200),i.Eb(3),i.qc("name",i.lc(36,68,"Descripci\xf3n")),i.pc("width",500),i.Eb(3),i.qc("name",i.lc(39,70,"Cantidad")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(42,72,"Precio")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(45,74,"Descuentos")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(48,76,"Total")),i.pc("width",150),i.Eb(3),i.pc("@animate",i.vc(97,M,i.uc(96,X))),i.Eb(2),i.pc("rows",e.data.ventamovcaja)("columnMode","standard")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("selectionType","single"),i.Eb(1),i.qc("name",i.lc(54,78,"Medio de Pago")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(57,80,"Importe")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(60,82,"Referencia")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(63,84,"Cuotas")),i.pc("width",150),i.Eb(4),i.pc("ngIf","T"==e.data.payload.bAnulado),i.Eb(3),i.Qc("Total: ",i.lc(70,86,e.data.payload.rTotBruto),""),i.Eb(6),i.Qc("",i.lc(76,88,"Cancelar")," "))},directives:[a.g,c.a,s.a,a.d,l.a,l.b,u.d,u.b,u.a,d.c,d.b,p.o,d.a,f.b],pipes:[b.c,p.f,p.d,p.g],styles:[""],data:{animation:[n.a]}}),t})()}}]);