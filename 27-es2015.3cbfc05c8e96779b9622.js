(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{CHRX:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var r=o("wd/R");class n{constructor(){this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.summaryRow=!0,this.emptyRow=!0,this.customFilter=function(t){return t}}static prepararFiltroAPI(t){var e="";for(var o in t)t[o].search&&(e+="number"==typeof t[o].search?`{"${o}":${t[o].search}},`:t[o].exact?`{"${o}":"${t[o].search}"},`:`{"${o}":{"ilike":"%${t[o].search}%"}},`);return e}setGroup(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}setData(t){this.data=t,this.sortData()}sortData(){this.data.sort((t,e)=>{if(t[this.groupField]==e[this.groupField]){if(this.secondarySort){if(null==t[this.secondarySort])return 1;if(null==e[this.secondarySort])return-1;if(t[this.secondarySort]>e[this.secondarySort])return 1*("desc"===this.sortDir?-1:1);if(t[this.secondarySort]<e[this.secondarySort])return-1*("desc"===this.sortDir?-1:1)}}else{if(null==t[this.groupField])return 1;if(null==e[this.groupField])return-1;if(t[this.groupField]>e[this.groupField])return 1;if(t[this.groupField]<e[this.groupField])return-1}return 0}),this.filterRows()}filterRows(){var t=[];t=this.data.filter(t=>{for(var e in this.filter){if(this.filter[e]&&null==t[e])return!1;switch(typeof t[e]){case"number":if(this.filter[e]&&Math.trunc(t[e]).toString()!==Math.trunc(this.filter[e]).toString())return!1;break;case"string":if("f"==e.charAt(0).toLowerCase()&&r(t[e]).isValid){if(-1==r(t[e]).format("DD/MM/YYYY HH:mm:ss").indexOf(this.filter[e]))return!1;break}if(-1==t[e].toLowerCase().indexOf(this.filter[e].toLowerCase()))return!1}}return!0}),t=this.customFilter(t);var e={};this.groupField?e[this.groupField]=t.length.toString():e.count=t.length.toString(),this.sum.forEach(t=>e[t]=0);for(var o=0;o<t.length;o++)this.sum.forEach(r=>e[r]+=t[o][r]);if(e.isGroup=!0,this.footer=e,this.groupField){var n=[];t.forEach(t=>{-1==n.indexOf(t[this.groupField])&&n.push(t[this.groupField])}),n=n.map(t=>({name:t,count:1}));var i=[],a=!0,s=0,c=null,l=()=>{c&&(c[this.groupField]+=" ("+n[s-1].count.toString()+")")};for(o=0;o<t.length;o++){if(a&&t[o][this.groupField]==n[s].name){l();var u="+";this.groups[n[s].name]&&(u="-"),c={[this.groupField]:u+" "+n[s].name,isGroup:!0,name:n[s].name},this.sum.forEach(t=>c[t]=0),i.push(c),a=++s<n.length}else n[s-1].count++;this.sum.forEach(e=>c[e]+=t[o][e]),i.push(t[o])}l(),t=null,i=i.filter(t=>!!t.isGroup||!!this.groups[t[this.groupField]]||void 0),this.rows=i}else this.rows=t;this.summaryRow&&this.rows.push(this.footer),0==this.rows.length&&this.emptyRow&&this.rows.push({})}updateFilter(t,e){if(t&&e){var o=t.target.value;t instanceof MouseEvent&&(o=""),this.filter[e]=o,this.filterRows()}return!0}updateFilterBoolean(t,e){return this.filter[e]=t,this.filterRows(),!0}}},CgJX:function(t,e,o){"use strict";o.r(e),o.d(e,"PurchasesPlanModule",function(){return Y});var r=o("SVse"),n=o("s7LF"),i=o("GmJt"),a=o("3sEA"),s=o("bPAe"),c=o("CHRX"),l=o("7M/S"),u=o("AytR"),p=o("8Y7J"),f=o("IheW");let h=(()=>{class t{constructor(t){this.http=t}obtenerDepositos(){return this.http.get(encodeURI(u.a.apiURL+'Depositos?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerStock(t){return this.http.get(encodeURI(`${u.a.apiURL}Compras/PlanDeCompras?iddeposito=${t}`))}obtenerHistorialProducto(t,e){return this.http.get(encodeURI(`${u.a.apiURL}Productos/GetHistorialStock?idProducto=${e}&idDeposito=${t}`))}}return t.\u0275fac=function(e){return new(e||t)(p.bc(f.c))},t.\u0275prov=p.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=o("iELJ"),b=o("zHaW"),g=o("PDjf"),m=o("VDRc"),w=o("Q2Ze"),v=o("ZTz/"),S=o("Dxy4"),E=o("Tj54"),x=o("w9WL"),y=o("UhP/"),R=o("jMqV"),k=o("TSSN");function P(t,e){if(1&t&&(p.Xb(0,"mat-option",17),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.sdescripcion)}}function A(t,e){if(1&t&&(p.Xb(0,"div",1),p.Xb(1,"mat-slide-toggle",18),p.Oc(2),p.kc(3,"translate"),p.Wb(),p.Xb(4,"mat-slide-toggle",18),p.Oc(5),p.kc(6,"translate"),p.Wb(),p.Wb()),2&t){const t=p.jc();p.Eb(1),p.pc("formControl",t.toggle),p.Eb(1),p.Pc(p.lc(3,4,"PURCHASESPLAN.ONLYACTIVES")),p.Eb(2),p.pc("formControl",t.toggleStock),p.Eb(1),p.Qc("",p.lc(6,6,"PURCHASESPLAN.STOCKONLYBELOWMINIMUM")," ")}}function L(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sCodProducto," ")}}function O(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sProducto," ")}}function F(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sFamilia," ")}}function C(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.Proveedores," ")}}function M(t,e){if(1&t&&(p.Oc(0),p.kc(1,"number")),2&t){const t=e.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rStock)," ")}}function H(t,e){if(1&t&&(p.Oc(0),p.kc(1,"number")),2&t){const t=e.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rStockMinimo)," ")}}function U(t,e){if(1&t){const t=p.Yb();p.Xb(0,"button",5),p.fc("click",function(){return p.Dc(t),p.jc(3).export()}),p.Xb(1,"mat-icon"),p.Oc(2,"save_alt"),p.Wb(),p.Oc(3),p.kc(4,"translate"),p.Wb()}2&t&&(p.Eb(3),p.Qc("",p.lc(4,1,"PURCHASESPLAN.EXCEL")," "))}function W(t,e){if(1&t&&(p.Xb(0,"div",20),p.Mc(1,U,5,3,"button",21),p.Wb()),2&t){const t=p.jc(2);p.Eb(1),p.pc("ngIf",t.tabla1.data.length>0)}}function D(t,e){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,W,2,1,"ng-template",19),p.Wb())}const X=function(){return{y:"50px",delay:"300ms"}},T=function(t){return{value:"*",params:t}},I=[{path:"",component:(()=>{class t{constructor(t,e,o,r,i,a){this.dialog=t,this.servicioStock=e,this.servicioExportarExcel=o,this.loader=r,this.snack=i,this.servicioPermisos=a,this.toggle=new n.e(!0,[]),this.toggleValue=!0,this.toggleStock=new n.e(!1,[]),this.toggleStockValue=!1,this.toggle.valueChanges.subscribe(t=>{this.toggleValue=t,this.tabla1.updateFilterBoolean(this.toggleValue?"T":"","bActivo")}),this.toggleStock.valueChanges.subscribe(t=>{this.toggleStockValue=t,this.tabla1.filterRows()})}ngOnInit(){this.tabla1=new c.a,this.tabla1.groupField="",this.tabla1.secondarySort="sProducto",this.tabla1.sum=[],this.loader.open(),this.servicioStock.obtenerDepositos().subscribe(t=>{this.depositos=t,this.depositos.sort((t,e)=>t.sdescripcion>e.sdescripcion?1:t.sdescripcion<e.sdescripcion?-1:0),this.depositoActual=this.depositos[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}refresh(){this.loader.open(),this.servicioStock.obtenerStock(this.depositoActual.id).subscribe(t=>{this.tabla1.setData(t.filter(()=>!0)),console.log(this.tabla1),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}seleccionarDeposito(t){this.depositoActual=t}getRowHeight(t){return 50}export(){var t=this.tabla1.data.map(t=>({Dep\u00f3sito:t.sDeposito,C\u00f3digo:t.sCodProducto,Nombre:t.sProducto,Familia:t.sFamilia,Stock:t.rStock}));this.servicioExportarExcel.exportExcel(t,"stock","stock")}onSort(t){const e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}openPopUp(t={}){}}return t.\u0275fac=function(e){return new(e||t)(p.Rb(d.b),p.Rb(h),p.Rb(s.a),p.Rb(a.a),p.Rb(b.a),p.Rb(l.a))},t.\u0275cmp=p.Lb({type:t,selectors:[["app-purchases-plan"]],decls:37,vars:48,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],[1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort"],["myTable",""],["prop","sCodProducto",3,"name","flexGrow"],["ngx-datatable-cell-template",""],["prop","sProducto",3,"name","flexGrow"],["prop","sFamilia",3,"name","flexGrow"],["prop","Proveedores",3,"name","flexGrow"],["prop","rStock",3,"name","flexGrow"],["prop","rStockMinimo",3,"name","flexGrow"],[4,"ngIf"],[3,"value"],[1,"m-8",3,"formControl"],["ngx-datatable-footer-template",""],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(t,e){1&t&&(p.Xb(0,"mat-card",0),p.Xb(1,"div",1),p.Xb(2,"mat-form-field",2),p.Xb(3,"mat-label"),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Xb(6,"mat-select",3),p.fc("selectionChange",function(t){return e.seleccionarDeposito(t.value)})("valueChange",function(t){return e.depositoActual=t}),p.Mc(7,P,2,2,"mat-option",4),p.Wb(),p.Wb(),p.Xb(8,"button",5),p.fc("click",function(){return e.refresh()}),p.Xb(9,"mat-icon"),p.Oc(10,"search"),p.Wb(),p.Oc(11),p.kc(12,"translate"),p.Wb(),p.Wb(),p.Mc(13,A,7,8,"div",6),p.Wb(),p.Xb(14,"mat-card",0),p.Xb(15,"mat-card-content",0),p.Xb(16,"ngx-datatable",7,8),p.fc("sort",function(t){return e.onSort(t)}),p.Xb(18,"ngx-datatable-column",9),p.kc(19,"translate"),p.Mc(20,L,1,1,"ng-template",10),p.Wb(),p.Xb(21,"ngx-datatable-column",11),p.kc(22,"translate"),p.Mc(23,O,1,1,"ng-template",10),p.Wb(),p.Xb(24,"ngx-datatable-column",12),p.kc(25,"translate"),p.Mc(26,F,1,1,"ng-template",10),p.Wb(),p.Xb(27,"ngx-datatable-column",13),p.kc(28,"translate"),p.Mc(29,C,1,1,"ng-template",10),p.Wb(),p.Xb(30,"ngx-datatable-column",14),p.kc(31,"translate"),p.Mc(32,M,2,3,"ng-template",10),p.Wb(),p.Xb(33,"ngx-datatable-column",15),p.kc(34,"translate"),p.Mc(35,H,2,3,"ng-template",10),p.Wb(),p.Mc(36,D,2,0,"ngx-datatable-footer",16),p.Wb(),p.Wb(),p.Wb()),2&t&&(p.Eb(4),p.Pc(p.lc(5,29,"PURCHASESPLAN.DEPOSITS")),p.Eb(2),p.pc("value",e.depositoActual),p.Eb(1),p.pc("ngForOf",e.depositos),p.Eb(4),p.Qc("",p.lc(12,31,"PURCHASESPLAN.SHOW")," "),p.Eb(2),p.pc("ngIf",e.tabla1.data.length>0),p.Eb(1),p.pc("@animate",p.vc(46,T,p.uc(45,X))),p.Eb(2),p.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("summaryRow",!0)("externalSorting",!0)("selectionType","single"),p.Eb(2),p.qc("name",p.lc(19,33,"PURCHASESPLAN.CODE")),p.pc("flexGrow",1),p.Eb(3),p.qc("name",p.lc(22,35,"PURCHASESPLAN.NAME")),p.pc("flexGrow",2),p.Eb(3),p.qc("name",p.lc(25,37,"PURCHASESPLAN.FAMILY")),p.pc("flexGrow",1),p.Eb(3),p.qc("name",p.lc(28,39,"PURCHASESPLAN.SUPPLIER")),p.pc("flexGrow",1),p.Eb(3),p.qc("name",p.lc(31,41,"PURCHASESPLAN.STOCK")),p.pc("flexGrow",1),p.Eb(3),p.qc("name",p.lc(34,43,"PURCHASESPLAN.MINIMUMSTOCK")),p.pc("flexGrow",1),p.Eb(3),p.pc("ngIf",e.tabla1.data.length>0))},directives:[g.a,m.c,m.b,w.c,m.a,w.f,v.a,r.n,S.b,E.a,r.o,g.b,x.d,x.b,x.a,y.n,R.a,n.o,n.f,x.e,x.c],pipes:[k.c,r.g],styles:[""],data:{animation:[i.a]}}),t})(),data:{title:"PLAN DE COMPRAS"}}];var N=o("iInd"),G=o("u9T3"),j=o("f44v"),V=o("TN/R"),$=o("e6WT"),q=o("M9ds"),B=o("ZFy/"),Q=o("PCNd");let Y=(()=>{class t{}return t.\u0275mod=p.Pb({type:t}),t.\u0275inj=p.Ob({factory:function(e){return new(e||t)},imports:[[r.c,n.t,G.a,x.f,$.c,$.c,g.c,$.c,S.c,j.a,$.c,B.b,d.f,b.b,R.b,q.c,v.b,E.b,k.b,Q.a,V.g,N.k.forChild(I)]]}),t})()},Iab2:function(t,e,o){var r,n;void 0===(n="function"==typeof(r=function(){"use strict";function e(t,e,o){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){a(r.response,e,o)},r.onerror=function(){console.error("could not download file")},r.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,i,a){var s=n.URL||n.webkitURL,c=document.createElement("a");c.download=i=i||t.name||"download",c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?r(c):o(c.href)?e(t,i,a):r(c,c.target="_blank")):(c.href=s.createObjectURL(t),setTimeout(function(){s.revokeObjectURL(c.href)},4e4),setTimeout(function(){r(c)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,i){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),n);else if(o(t))e(t,n,i);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout(function(){r(a)})}}:function(t,o,r,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,r);var s="application/octet-stream"===t.type,c=/constructor/i.test(n.HTMLElement)||n.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||s&&c||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},u.readAsDataURL(t)}else{var p=n.URL||n.webkitURL,f=p.createObjectURL(t);a?a.location=f:location.href=f,a=null,setTimeout(function(){p.revokeObjectURL(f)},4e4)}});n.saveAs=a.saveAs=a,t.exports=a})?r.apply(e,[]):r)||(t.exports=n)},bPAe:function(t,e,o){"use strict";o.d(e,"a",function(){return a});var r=o("Iab2"),n=o("EUZL"),i=o("8Y7J");let a=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,o){const r=n.utils.json_to_sheet(t),i=n.write({Sheets:{[o]:r},SheetNames:[o]},{bookType:"xlsx",type:"array"});this.saveExcelFile(i,e)}saveExcelFile(t,e){const o=new Blob([t],{type:this.fileType});r.saveAs(o,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);