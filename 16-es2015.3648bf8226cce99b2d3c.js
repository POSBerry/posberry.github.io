(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{CHRX:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var a=o("wd/R");class i{constructor(){this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}setGroup(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}setData(t){this.data=t,this.sortData()}sortData(){this.data.sort((t,e)=>{if(t[this.groupField]==e[this.groupField]){if(this.secondarySort){if(null==t[this.secondarySort])return 1;if(null==e[this.secondarySort])return-1;if(t[this.secondarySort]>e[this.secondarySort])return 1*("desc"===this.sortDir?-1:1);if(t[this.secondarySort]<e[this.secondarySort])return-1*("desc"===this.sortDir?-1:1)}}else{if(null==t[this.groupField])return 1;if(null==e[this.groupField])return-1;if(t[this.groupField]>e[this.groupField])return 1;if(t[this.groupField]<e[this.groupField])return-1}return 0}),this.filterRows()}filterRows(){var t=[];t=this.data.filter(t=>{for(var e in this.filter){if(this.filter[e]&&null==t[e])return!1;switch(typeof t[e]){case"number":if(this.filter[e]&&t[e].toString()!==this.filter[e].toString())return!1;break;case"string":if("f"==e.charAt(0).toLowerCase()&&a(t[e]).isValid){if(-1==a(t[e]).format("DD/MM/YYYY HH:mm:ss").indexOf(this.filter[e]))return!1;break}if(-1==t[e].toLowerCase().indexOf(this.filter[e].toLowerCase()))return!1}}return!0}),t=this.customFilter(t);var e={};this.groupField?e[this.groupField]=t.length.toString():e.count=t.length.toString(),this.sum.forEach(t=>e[t]=0);for(var o=0;o<t.length;o++)this.sum.forEach(a=>e[a]+=t[o][a]);if(e.isGroup=!0,this.footer=e,this.groupField){var i=[];t.forEach(t=>{-1==i.indexOf(t[this.groupField])&&i.push(t[this.groupField])}),i=i.map(t=>({name:t,count:1}));var n=[],r=!0,c=0,s=null,l=()=>{s&&(s[this.groupField]+=" ("+i[c-1].count.toString()+")")};for(o=0;o<t.length;o++){if(r&&t[o][this.groupField]==i[c].name){l();var u="+";this.groups[i[c].name]&&(u="-"),s={[this.groupField]:u+" "+i[c].name,isGroup:!0,name:i[c].name},this.sum.forEach(t=>s[t]=0),n.push(s),r=++c<i.length}else i[c-1].count++;this.sum.forEach(e=>s[e]+=t[o][e]),n.push(t[o])}l(),t=null,n=n.filter(t=>!!t.isGroup||!!this.groups[t[this.groupField]]||void 0),this.rows=n}else this.rows=t;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}updateFilter(t,e){t&&e&&(this.filter[e]=t.target.value,this.filterRows())}updateFilterBoolean(t,e){this.filter[e]=t,this.filterRows()}}},I2yB:function(t,e,o){"use strict";o.r(e),o.d(e,"StockOnDateModule",function(){return st});var a=o("SVse"),i=o("s7LF"),n=o("GmJt"),r=o("3sEA"),c=o("wd/R"),s=o("GyhO"),l=o("IAdc"),u=o("bPAe"),p=o("CHRX"),b=o("7M/S"),d=o("rGvg"),f=o("AytR"),m=o("8Y7J"),h=o("IheW");let g=(()=>{class t{constructor(t){this.http=t}obtenerDepositos(){return this.http.get(encodeURI(f.a.apiURL+'Depositos?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerStock(t){return this.http.get(encodeURI(`${f.a.apiURL}Productos/GetStockEnFecha?idDeposito=${t}`))}obtenerHistorialProducto(t,e){return this.http.get(encodeURI(`${f.a.apiURL}Productos/GetHistorialStock?idProducto=${e}&idDeposito=${t}`))}}return t.\u0275fac=function(e){return new(e||t)(m.bc(h.c))},t.\u0275prov=m.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var w=o("iELJ"),k=o("zHaW"),v=o("PDjf"),y=o("VDRc"),S=o("Q2Ze"),E=o("ZTz/"),x=o("Dxy4"),F=o("Tj54"),A=o("w9WL"),M=o("UhP/"),R=o("jMqV"),W=o("e6WT"),X=o("TSSN");function O(t,e){if(1&t&&(m.Xb(0,"mat-option",26),m.Oc(1),m.Wb()),2&t){const t=e.$implicit;m.pc("value",t),m.Eb(1),m.Pc(null==t?null:t.sdescripcion)}}function T(t,e){if(1&t&&(m.Xb(0,"div",1),m.Xb(1,"mat-slide-toggle",27),m.Oc(2),m.kc(3,"translate"),m.Wb(),m.Xb(4,"mat-slide-toggle",27),m.Oc(5),m.kc(6,"translate"),m.Wb(),m.Wb()),2&t){const t=m.jc();m.Eb(1),m.pc("formControl",t.toggle),m.Eb(1),m.Pc(m.lc(3,4,"Solo Activos")),m.Eb(2),m.pc("formControl",t.toggleStock),m.Eb(1),m.Pc(m.lc(6,6,"Solo Stock debajo del m\xednimo"))}}function D(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sCodProducto," ")}}function P(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sProducto," ")}}function L(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",(null==t?null:t.sEAN)||(null==t?null:t.sEAN2)," ")}}function C(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sFamilia," ")}}function j(t,e){if(1&t&&(m.Oc(0),m.kc(1,"number")),2&t){const t=e.row;m.Qc(" ",m.lc(1,1,null==t?null:t.rStock)," ")}}function H(t,e){if(1&t&&(m.Oc(0),m.kc(1,"number")),2&t){const t=e.row;m.Qc(" ",m.lc(1,1,null==t?null:t.rStockMinimo)," ")}}function N(t,e){if(1&t&&(m.Oc(0),m.kc(1,"date")),2&t){const t=e.row;m.Qc(" ",m.mc(1,1,null==t?null:t.fStock,"dd/MM/yyyy")," ")}}function I(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",29),m.fc("click",function(){m.Dc(t);const e=m.jc().row;return m.jc().openPopUp(e)}),m.Xb(1,"mat-icon"),m.Oc(2,"info"),m.Wb(),m.Wb()}}function U(t,e){if(1&t&&m.Mc(0,I,3,0,"button",28),2&t){const t=e.row,o=m.jc();m.pc("ngIf",!t.isGroup&&o.puedeVerHistorial)}}function Y(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",5),m.fc("click",function(){return m.Dc(t),m.jc(3).export()}),m.Xb(1,"mat-icon"),m.Oc(2,"save_alt"),m.Wb(),m.Oc(3),m.kc(4,"translate"),m.Wb()}2&t&&(m.Eb(3),m.Pc(m.lc(4,1,"SALES.EXCEL")))}function V(t,e){if(1&t&&(m.Xb(0,"div",31),m.Mc(1,Y,5,3,"button",32),m.Wb()),2&t){const t=m.jc(2);m.Eb(1),m.pc("ngIf",t.tabla1.data.length>0)}}function G(t,e){1&t&&(m.Xb(0,"ngx-datatable-footer"),m.Mc(1,V,2,1,"ng-template",30),m.Wb())}function q(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",33),m.Xb(1,"input",34),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"sCodProducto")}),m.Wb(),m.Wb()}}function B(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",33),m.Xb(1,"input",34),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"sProducto")}),m.Wb(),m.Wb()}}function Q(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",33),m.Xb(1,"input",34),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"sEAN")}),m.Wb(),m.Wb()}}function J(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",33),m.Xb(1,"input",34),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"sFamilia")}),m.Wb(),m.Wb()}}function $(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",33),m.Xb(1,"input",35),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"rStock")}),m.Wb(),m.Wb()}}function _(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",33),m.Xb(1,"input",35),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"rStockMinimo")}),m.Wb(),m.Wb()}}function K(t,e){if(1&t){const t=m.Yb();m.Xb(0,"mat-form-field",33),m.Xb(1,"input",34),m.fc("keyup",function(e){return m.Dc(t),m.jc().tabla1.updateFilter(e,"fStock")}),m.Wb(),m.Wb()}}const Z=function(){return{y:"50px",delay:"300ms"}},z=function(t){return{value:"*",params:t}},tt=[{path:"",component:(()=>{class t{constructor(t,e,o,a,n,r){this.dialog=t,this.servicioStock=e,this.servicioExportarExcel=o,this.loader=a,this.snack=n,this.servicioPermisos=r,this.toggle=new i.e(!0,[]),this.toggleValue=!0,this.toggleStock=new i.e(!1,[]),this.toggleStockValue=!1,this.puedeVerHistorial=!1,this.toggle.valueChanges.subscribe(t=>{this.toggleValue=t,this.tabla1.updateFilterBoolean(this.toggleValue?"T":"","bActivo")}),this.toggleStock.valueChanges.subscribe(t=>{this.toggleStockValue=t,this.tabla1.filterRows()})}ngOnInit(){this.tabla1=new p.a,this.tabla1.groupField="",this.tabla1.secondarySort="sProducto",this.tabla1.sum=[],this.tabla1.updateFilterBoolean("T","bActivo"),this.tabla1.customFilter=t=>this.toggleStockValue?t.filter(t=>t.rStock<t.rStockMinimo):t,this.loader.open(),Object(s.a)(this.servicioPermisos.puedeVer("actHistorialProducto")).pipe(Object(l.a)()).subscribe(t=>{this.puedeVerHistorial=t[0]}),this.servicioStock.obtenerDepositos().subscribe(t=>{this.depositos=t,console.log(t),this.depositos.sort((t,e)=>t.sdescripcion>e.sdescripcion?1:t.sdescripcion<e.sdescripcion?-1:0),this.depositoActual=this.depositos[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}refresh(){this.loader.open(),this.servicioStock.obtenerStock(this.depositoActual.iddeposito).subscribe(t=>{console.log(t),t.forEach(t=>{t.sEAN||(t.sEAN=""),t.sEAN2||(t.sEAN2=""),t.rStock=parseFloat(t.rStock),t.rStockMinimo=parseFloat(t.rStockMinimo)}),this.tabla1.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}seleccionarDeposito(t){this.depositoActual=t}getRowHeight(t){return 50}export(){var t=this.tabla1.data.map(t=>({Dep\u00f3sito:t.sDeposito,C\u00f3digo:t.sCodProducto,Nombre:t.sProducto,Familia:t.sFamilia,"Stock en Fecha":t.rStock,Fecha:c(t.fStock).format("DD/MM/YYYY")}));this.servicioExportarExcel.exportExcel(t,"stock","stock")}onSort(t){const e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}openPopUp(t={}){this.loader.open(),this.servicioStock.obtenerHistorialProducto(this.depositoActual.id,t.idProducto).subscribe(e=>{this.loader.close(),console.log(t),this.dialog.open(d.a,{width:"720px",disableClose:!0,data:{title:"HISTORIAL DE STOCK",payload:t,historialstock:e}}).afterClosed().subscribe(t=>{})})}}return t.\u0275fac=function(e){return new(e||t)(m.Rb(w.b),m.Rb(g),m.Rb(u.a),m.Rb(r.a),m.Rb(k.a),m.Rb(b.a))},t.\u0275cmp=m.Lb({type:t,selectors:[["app-stock-on-date"]],decls:57,vars:64,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],[1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort"],["myTable",""],["prop","sCodProducto",3,"summaryTemplate","name","width"],["ngx-datatable-cell-template",""],["prop","sProducto",3,"summaryTemplate","name","width"],["prop","sEAN",3,"summaryTemplate","name","width"],["prop","sFamilia",3,"summaryTemplate","name","width"],["prop","rStock",3,"summaryTemplate","name","width"],["prop","rStockMinimo",3,"summaryTemplate","name","width"],["prop","fStock",3,"summaryTemplate","name","width"],[3,"name","flexGrow","sortable"],[4,"ngIf"],["tabla1sCodProducto",""],["tabla1sProducto",""],["tabla1sEAN",""],["tabla1sFamilia",""],["tabla1rStock",""],["tabla1rStockMinimo",""],["tabla1fStock",""],[3,"value"],[1,"m-8",3,"formControl"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(m.Xb(0,"mat-card",0),m.Xb(1,"div",1),m.Xb(2,"mat-form-field",2),m.Xb(3,"mat-label"),m.Oc(4),m.kc(5,"translate"),m.Wb(),m.Xb(6,"mat-select",3),m.fc("selectionChange",function(t){return e.seleccionarDeposito(t.value)})("valueChange",function(t){return e.depositoActual=t}),m.Mc(7,O,2,2,"mat-option",4),m.Wb(),m.Wb(),m.Xb(8,"button",5),m.fc("click",function(){return e.refresh()}),m.Xb(9,"mat-icon"),m.Oc(10,"search"),m.Wb(),m.Oc(11),m.kc(12,"translate"),m.Wb(),m.Wb(),m.Mc(13,T,7,8,"div",6),m.Wb(),m.Xb(14,"mat-card",0),m.Xb(15,"mat-card-content",0),m.Xb(16,"ngx-datatable",7,8),m.fc("sort",function(t){return e.onSort(t)}),m.Xb(18,"ngx-datatable-column",9),m.kc(19,"translate"),m.Mc(20,D,1,1,"ng-template",10),m.Wb(),m.Xb(21,"ngx-datatable-column",11),m.kc(22,"translate"),m.Mc(23,P,1,1,"ng-template",10),m.Wb(),m.Xb(24,"ngx-datatable-column",12),m.kc(25,"translate"),m.Mc(26,L,1,1,"ng-template",10),m.Wb(),m.Xb(27,"ngx-datatable-column",13),m.kc(28,"translate"),m.Mc(29,C,1,1,"ng-template",10),m.Wb(),m.Xb(30,"ngx-datatable-column",14),m.kc(31,"translate"),m.Mc(32,j,2,3,"ng-template",10),m.Wb(),m.Xb(33,"ngx-datatable-column",15),m.kc(34,"translate"),m.Mc(35,H,2,3,"ng-template",10),m.Wb(),m.Xb(36,"ngx-datatable-column",16),m.kc(37,"translate"),m.Mc(38,N,2,4,"ng-template",10),m.Wb(),m.Xb(39,"ngx-datatable-column",17),m.kc(40,"translate"),m.Mc(41,U,1,1,"ng-template",10),m.Wb(),m.Mc(42,G,2,0,"ngx-datatable-footer",18),m.Wb(),m.Wb(),m.Wb(),m.Mc(43,q,2,0,"ng-template",null,19,m.Nc),m.Mc(45,B,2,0,"ng-template",null,20,m.Nc),m.Mc(47,Q,2,0,"ng-template",null,21,m.Nc),m.Mc(49,J,2,0,"ng-template",null,22,m.Nc),m.Mc(51,$,2,0,"ng-template",null,23,m.Nc),m.Mc(53,_,2,0,"ng-template",null,24,m.Nc),m.Mc(55,K,2,0,"ng-template",null,25,m.Nc)),2&t){const t=m.Ac(44),o=m.Ac(46),a=m.Ac(48),i=m.Ac(50),n=m.Ac(52),r=m.Ac(54),c=m.Ac(56);m.Eb(4),m.Pc(m.lc(5,41,"Dep\xf3sitos")),m.Eb(2),m.pc("value",e.depositoActual),m.Eb(1),m.pc("ngForOf",e.depositos),m.Eb(4),m.Pc(m.lc(12,43,"SALES.SHOW")),m.Eb(2),m.pc("ngIf",e.tabla1.data.length>0),m.Eb(1),m.pc("@animate",m.vc(62,z,m.uc(61,Z))),m.Eb(2),m.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("summaryRow",!0)("externalSorting",!0)("selectionType","single"),m.Eb(2),m.qc("name",m.lc(19,45,"C\xf3digo")),m.pc("summaryTemplate",t)("width",200),m.Eb(3),m.qc("name",m.lc(22,47,"Nombre")),m.pc("summaryTemplate",o)("width",500),m.Eb(3),m.qc("name",m.lc(25,49,"C\xf3digo de Barras")),m.pc("summaryTemplate",a)("width",150),m.Eb(3),m.qc("name",m.lc(28,51,"Familia")),m.pc("summaryTemplate",i)("width",225),m.Eb(3),m.qc("name",m.lc(31,53,"Stock en Fecha")),m.pc("summaryTemplate",n)("width",150),m.Eb(3),m.qc("name",m.lc(34,55,"Stock M\xednimo")),m.pc("summaryTemplate",r)("width",150),m.Eb(3),m.qc("name",m.lc(37,57,"Fecha")),m.pc("summaryTemplate",c)("width",150),m.Eb(3),m.qc("name",m.lc(40,59,"SALES.ACTIONS")),m.pc("flexGrow",1)("sortable",!1),m.Eb(3),m.pc("ngIf",e.tabla1.data.length>0)}},directives:[v.a,y.c,y.b,S.c,y.a,S.f,E.a,a.n,x.b,F.a,a.o,v.b,A.d,A.b,A.a,M.n,R.a,i.n,i.f,A.e,A.c,W.b],pipes:[X.c,a.g,a.f],styles:[""],data:{animation:[n.a]}}),t})(),data:{title:"STOCK EN FECHA"}}];var et=o("iInd"),ot=o("u9T3"),at=o("f44v"),it=o("TN/R"),nt=o("M9ds"),rt=o("ZFy/"),ct=o("PCNd");let st=(()=>{class t{}return t.\u0275mod=m.Pb({type:t}),t.\u0275inj=m.Ob({factory:function(e){return new(e||t)},imports:[[a.c,i.s,ot.a,A.f,W.c,W.c,v.c,W.c,x.c,at.a,W.c,rt.b,w.e,k.b,R.b,nt.c,E.b,F.b,X.b,ct.a,it.c,et.k.forChild(tt)]]}),t})()},Iab2:function(t,e,o){var a,i;void 0===(i="function"==typeof(a=function(){"use strict";function e(t,e,o){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){r(a.response,e,o)},a.onerror=function(){console.error("could not download file")},a.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,n=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(t,n,r){var c=i.URL||i.webkitURL,s=document.createElement("a");s.download=n=n||t.name||"download",s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?a(s):o(s.href)?e(t,n,r):a(s,s.target="_blank")):(s.href=c.createObjectURL(t),setTimeout(function(){c.revokeObjectURL(s.href)},4e4),setTimeout(function(){a(s)},0))}:"msSaveOrOpenBlob"in navigator?function(t,i,n){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,n),i);else if(o(t))e(t,i,n);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){a(r)})}}:function(t,o,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,a);var c="application/octet-stream"===t.type,s=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||c&&s||n)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},u.readAsDataURL(t)}else{var p=i.URL||i.webkitURL,b=p.createObjectURL(t);r?r.location=b:location.href=b,r=null,setTimeout(function(){p.revokeObjectURL(b)},4e4)}});i.saveAs=r.saveAs=r,t.exports=r})?a.apply(e,[]):a)||(t.exports=i)},bPAe:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var a=o("Iab2"),i=o("EUZL"),n=o("8Y7J");let r=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,o){const a=i.utils.json_to_sheet(t),n=i.write({Sheets:{[o]:a},SheetNames:[o]},{bookType:"xlsx",type:"array"});this.saveExcelFile(n,e)}saveExcelFile(t,e){const o=new Blob([t],{type:this.fileType});a.saveAs(o,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);