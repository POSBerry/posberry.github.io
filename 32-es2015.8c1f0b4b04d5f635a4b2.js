(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"3nei":function(t,e,a){"use strict";a.r(e),a.d(e,"ValuedStockByProductModule",function(){return it});var c=a("SVse"),n=a("s7LF"),o=a("GmJt"),l=a("3sEA"),r=a("bPAe"),i=a("CHRX"),s=a("AytR"),u=a("8Y7J"),b=a("IheW");let f=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t){let e=s.a.apiURL+"Productos/GetStock";return t&&(e+="?fhasta="+t),this.http.get(encodeURI(e))}}return t.\u0275fac=function(e){return new(e||t)(u.bc(b.c))},t.\u0275prov=u.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=a("zHaW"),d=a("PDjf"),m=a("VDRc"),g=a("jMqV"),h=a("Dxy4"),v=a("Tj54"),E=a("w9WL"),w=a("Q2Ze"),A=a("e6WT"),k=a("TN/R"),y=a("ZTz/"),O=a("UhP/"),C=a("TSSN");function D(t,e){if(1&t&&(u.Xb(0,"mat-option",24),u.Oc(1),u.Wb()),2&t){const t=e.$implicit;u.pc("value",t),u.Eb(1),u.Pc(null==t?null:t.toString())}}function W(t,e){if(1&t&&(u.Xb(0,"mat-option",24),u.Oc(1),u.Wb()),2&t){const t=e.$implicit;u.pc("value",t),u.Eb(1),u.Pc(null==t?null:t.toString())}}function X(t,e){if(1&t){const t=u.Yb();u.Xb(0,"div",17),u.Xb(1,"mat-form-field",18),u.Xb(2,"mat-label"),u.Oc(3),u.kc(4,"translate"),u.Wb(),u.Xb(5,"input",19),u.fc("dateChange",function(e){return u.Dc(t),u.jc().updateDate(e)}),u.Wb(),u.Sb(6,"mat-datepicker-toggle",20),u.Sb(7,"mat-datepicker",null,21),u.Wb(),u.Xb(9,"mat-form-field",18),u.Xb(10,"mat-label"),u.Oc(11),u.kc(12,"translate"),u.Wb(),u.Xb(13,"mat-select",22),u.fc("valueChange",function(e){return u.Dc(t),u.jc().hours=e}),u.Mc(14,D,2,2,"mat-option",23),u.Wb(),u.Wb(),u.Xb(15,"mat-form-field",18),u.Xb(16,"mat-label"),u.Oc(17),u.kc(18,"translate"),u.Wb(),u.Xb(19,"mat-select",22),u.fc("valueChange",function(e){return u.Dc(t),u.jc().minutes=e}),u.Mc(20,W,2,2,"mat-option",23),u.Wb(),u.Wb(),u.Wb()}if(2&t){const t=u.Ac(8),e=u.jc();u.Eb(3),u.Pc(u.lc(4,10,"VALUEDSTOCK.DATE")),u.Eb(2),u.pc("matDatepicker",t)("value",e.startDate),u.Eb(1),u.pc("for",t),u.Eb(5),u.Pc(u.lc(12,12,"VALUEDSTOCK.HOUR")),u.Eb(2),u.pc("value",e.hours),u.Eb(1),u.pc("ngForOf",e.hoursArr),u.Eb(3),u.Pc(u.lc(18,14,"VALUEDSTOCK.MINUTES")),u.Eb(2),u.pc("value",e.minutes),u.Eb(1),u.pc("ngForOf",e.minutesArr)}}function x(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sProducto," ")}}function S(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sCodProducto," ")}}function T(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sDeposito," ")}}function V(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.sFamilia," ")}}function L(t,e){if(1&t&&(u.Oc(0),u.kc(1,"number")),2&t){const t=e.row;u.Qc(" ",u.lc(1,1,null==t?null:t.rStock)," ")}}function M(t,e){if(1&t&&(u.Oc(0),u.kc(1,"currency")),2&t){const t=e.row;u.Qc(" ",u.lc(1,1,null==t?null:t.rCostoValorizado)," ")}}function j(t,e){if(1&t&&(u.Oc(0),u.kc(1,"currency")),2&t){const t=e.row;u.Qc(" ",u.lc(1,1,null==t?null:t.rVentaValorizada)," ")}}function U(t,e){if(1&t&&(u.Xb(0,"div",26),u.Xb(1,"div"),u.Xb(2,"strong"),u.Oc(3),u.kc(4,"translate"),u.Wb(),u.Wb(),u.Sb(5,"hr",27),u.Xb(6,"div"),u.Oc(7),u.kc(8,"translate"),u.kc(9,"number"),u.kc(10,"translate"),u.kc(11,"currency"),u.kc(12,"translate"),u.kc(13,"currency"),u.Wb(),u.Wb()),2&t){const t=u.jc(2);u.Eb(3),u.Pc(u.lc(4,8,"VALUEDSTOCK.TOTALS")),u.Eb(4),u.Wc("",t.tabla2.footer.sProducto," | ",u.lc(8,10,"VALUEDSTOCK.STOCK"),": ",u.lc(9,12,t.tabla2.footer.rStock)," | ",u.lc(10,14,"VALUEDSTOCK.VALUEDCOST"),": ",u.lc(11,16,t.tabla2.footer.rCostoValorizado)," | ",u.lc(12,18,"VALUEDSTOCK.VALUEDSALE"),": ",u.lc(13,20,t.tabla2.footer.rVentaValorizada),"")}}function F(t,e){1&t&&(u.Xb(0,"ngx-datatable-footer"),u.Mc(1,U,14,22,"ng-template",25),u.Wb())}function R(t,e){if(1&t){const t=u.Yb();u.Xb(0,"button",32),u.fc("click",function(e){u.Dc(t),u.jc();const a=u.Ac(2);return u.jc().tabla2.updateFilter(e,"sDeposito")&&(a.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function P(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",28),u.Xb(1,"input",29,30),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"sDeposito")}),u.Wb(),u.Mc(3,R,3,0,"button",31),u.Wb()}if(2&t){const t=u.Ac(2);u.Eb(3),u.pc("ngIf",t.value)}}function I(t,e){if(1&t){const t=u.Yb();u.Xb(0,"button",32),u.fc("click",function(e){u.Dc(t),u.jc();const a=u.Ac(2);return u.jc().tabla2.updateFilter(e,"sProducto")&&(a.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function K(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",28),u.Xb(1,"input",29,30),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"sProducto")}),u.Wb(),u.Mc(3,I,3,0,"button",31),u.Wb()}if(2&t){const t=u.Ac(2);u.Eb(3),u.pc("ngIf",t.value)}}function H(t,e){if(1&t){const t=u.Yb();u.Xb(0,"button",32),u.fc("click",function(e){u.Dc(t),u.jc();const a=u.Ac(2);return u.jc().tabla2.updateFilter(e,"sCodProducto")&&(a.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function Y(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",28),u.Xb(1,"input",29,30),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"sCodProducto")}),u.Wb(),u.Mc(3,H,3,0,"button",31),u.Wb()}if(2&t){const t=u.Ac(2);u.Eb(3),u.pc("ngIf",t.value)}}function z(t,e){if(1&t){const t=u.Yb();u.Xb(0,"button",32),u.fc("click",function(e){u.Dc(t),u.jc();const a=u.Ac(2);return u.jc().tabla2.updateFilter(e,"sFamilia")&&(a.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function N(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",28),u.Xb(1,"input",29,30),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"sFamilia")}),u.Wb(),u.Mc(3,z,3,0,"button",31),u.Wb()}if(2&t){const t=u.Ac(2);u.Eb(3),u.pc("ngIf",t.value)}}function G(t,e){if(1&t){const t=u.Yb();u.Xb(0,"button",32),u.fc("click",function(e){u.Dc(t),u.jc();const a=u.Ac(2);return u.jc().tabla2.updateFilter(e,"rStock")&&(a.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function q(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",28),u.Xb(1,"input",33,30),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"rStock")}),u.Wb(),u.Mc(3,G,3,0,"button",31),u.Wb()}if(2&t){const t=u.Ac(2);u.Eb(3),u.pc("ngIf",t.value)}}function B(t,e){if(1&t){const t=u.Yb();u.Xb(0,"button",32),u.fc("click",function(e){u.Dc(t),u.jc();const a=u.Ac(2);return u.jc().tabla2.updateFilter(e,"rCostoValorizado")&&(a.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function Q(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",28),u.Xb(1,"input",33,30),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"rCostoValorizado")}),u.Wb(),u.Mc(3,B,3,0,"button",31),u.Wb()}if(2&t){const t=u.Ac(2);u.Eb(3),u.pc("ngIf",t.value)}}function J(t,e){if(1&t){const t=u.Yb();u.Xb(0,"button",32),u.fc("click",function(e){u.Dc(t),u.jc();const a=u.Ac(2);return u.jc().tabla2.updateFilter(e,"rVentaValorizada")&&(a.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function Z(t,e){if(1&t){const t=u.Yb();u.Xb(0,"mat-form-field",28),u.Xb(1,"input",33,30),u.fc("keyup",function(e){return u.Dc(t),u.jc().tabla2.updateFilter(e,"rVentaValorizada")}),u.Wb(),u.Mc(3,J,3,0,"button",31),u.Wb()}if(2&t){const t=u.Ac(2);u.Eb(3),u.pc("ngIf",t.value)}}const _=function(){return{y:"50px",delay:"300ms"}},$=function(t){return{value:"*",params:t}},tt=[{path:"",component:(()=>{class t{constructor(t,e,a,c){this.servicioStockValorizado=t,this.servicioExportarExcel=e,this.loader=a,this.snack=c,this.hours=0,this.minutes=0,this.hoursArr=[],this.minutesArr=[],this.toggle=new n.e("",[]),this.toggleValue=!1,this.startDate=new Date,this.toggle.valueChanges.subscribe(t=>{this.toggleValue=t});for(var o=0;o<=23;o++)this.hoursArr.push(o);for(o=0;o<=59;o++)this.minutesArr.push(o)}ngOnInit(){this.tabla2=new i.a,this.tabla2.groupField="sProducto",this.tabla2.secondarySort="sDeposito",this.tabla2.sum=["rStock","rCostoValorizado","rVentaValorizada"]}refresh(){var t=null;this.toggleValue&&(this.startDate.setHours(this.hours,this.minutes,59,999),t=this.startDate.toISOString()),this.loader.open(),this.servicioStockValorizado.obtenerDatos(t).subscribe(t=>{this.tabla2.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate(t){this.startDate=t.value.toDate()}onChangeToggle(t){this.toggle=t.value}}return t.\u0275fac=function(e){return new(e||t)(u.Rb(f),u.Rb(r.a),u.Rb(l.a),u.Rb(p.a))},t.\u0275cmp=u.Lb({type:t,selectors:[["app-valued-stock-by-product"]],decls:52,vars:63,consts:[[1,"p-0"],["fxLayout","row","fxLayoutAlign","end center",1,"p-8"],[1,"m-8",3,"formControl"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","summaryTemplate","name","flexGrow"],["ngx-datatable-cell-template",""],[4,"ngIf"],["tabla2sDeposito",""],["tabla2sProducto",""],["tabla2sCodProducto",""],["tabla2sFamilia",""],["tabla2rStock",""],["tabla2rCostoValorizado",""],["tabla2rVentaValorizada",""],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker",""],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(u.Xb(0,"mat-card",0),u.Xb(1,"div",1),u.Xb(2,"mat-slide-toggle",2),u.Oc(3),u.kc(4,"translate"),u.Wb(),u.Wb(),u.Mc(5,X,21,16,"div",3),u.Xb(6,"div",1),u.Xb(7,"button",4),u.fc("click",function(){return e.refresh()}),u.Xb(8,"mat-icon"),u.Oc(9,"search"),u.Wb(),u.Oc(10),u.kc(11,"translate"),u.Wb(),u.Wb(),u.Wb(),u.Xb(12,"mat-card",0),u.Xb(13,"mat-card-content",0),u.Xb(14,"ngx-datatable",5,6),u.fc("activate",function(t){return e.tabla2OnActivate(t)}),u.Xb(16,"ngx-datatable-column",7),u.kc(17,"translate"),u.Mc(18,x,1,1,"ng-template",8),u.Wb(),u.Xb(19,"ngx-datatable-column",7),u.kc(20,"translate"),u.Mc(21,S,1,1,"ng-template",8),u.Wb(),u.Xb(22,"ngx-datatable-column",7),u.kc(23,"translate"),u.Mc(24,T,1,1,"ng-template",8),u.Wb(),u.Xb(25,"ngx-datatable-column",7),u.kc(26,"translate"),u.Mc(27,V,1,1,"ng-template",8),u.Wb(),u.Xb(28,"ngx-datatable-column",7),u.kc(29,"translate"),u.Mc(30,L,2,3,"ng-template",8),u.Wb(),u.Xb(31,"ngx-datatable-column",7),u.kc(32,"translate"),u.Mc(33,M,2,3,"ng-template",8),u.Wb(),u.Xb(34,"ngx-datatable-column",7),u.kc(35,"translate"),u.Mc(36,j,2,3,"ng-template",8),u.Wb(),u.Mc(37,F,2,0,"ngx-datatable-footer",9),u.Wb(),u.Wb(),u.Wb(),u.Mc(38,P,4,1,"ng-template",null,10,u.Nc),u.Mc(40,K,4,1,"ng-template",null,11,u.Nc),u.Mc(42,Y,4,1,"ng-template",null,12,u.Nc),u.Mc(44,N,4,1,"ng-template",null,13,u.Nc),u.Mc(46,q,4,1,"ng-template",null,14,u.Nc),u.Mc(48,Q,4,1,"ng-template",null,15,u.Nc),u.Mc(50,Z,4,1,"ng-template",null,16,u.Nc)),2&t){const t=u.Ac(39),a=u.Ac(41),c=u.Ac(43),n=u.Ac(45),o=u.Ac(47),l=u.Ac(49),r=u.Ac(51);u.Eb(2),u.pc("formControl",e.toggle),u.Eb(1),u.Pc(u.lc(4,42,"VALUEDSTOCK.DATE")),u.Eb(2),u.pc("ngIf",e.toggleValue),u.Eb(5),u.Pc(u.lc(11,44,"VALUEDSTOCK.SHOW")),u.Eb(2),u.pc("@animate",u.vc(61,$,u.uc(60,_))),u.Eb(2),u.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",e.tabla2.rows)("selectionType","single"),u.Eb(2),u.qc("name",u.lc(17,46,"VALUEDSTOCK.NAME")),u.pc("cellClass",e.getCellClass)("summaryTemplate",a)("flexGrow",1),u.Eb(3),u.qc("name",u.lc(20,48,"VALUEDSTOCK.CODE")),u.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1),u.Eb(3),u.qc("name",u.lc(23,50,"VALUEDSTOCK.DEPOSIT")),u.pc("cellClass",e.getCellClass)("summaryTemplate",t)("flexGrow",1),u.Eb(3),u.qc("name",u.lc(26,52,"VALUEDSTOCK.FAMILY")),u.pc("cellClass",e.getCellClass)("summaryTemplate",n)("flexGrow",1),u.Eb(3),u.qc("name",u.lc(29,54,"VALUEDSTOCK.STOCK")),u.pc("cellClass",e.getCellClass)("summaryTemplate",o)("flexGrow",1),u.Eb(3),u.qc("name",u.lc(32,56,"VALUEDSTOCK.VALUEDCOST")),u.pc("cellClass",e.getCellClass)("summaryTemplate",l)("flexGrow",1),u.Eb(3),u.qc("name",u.lc(35,58,"VALUEDSTOCK.VALUEDSALE")),u.pc("cellClass",e.getCellClass)("summaryTemplate",r)("flexGrow",1),u.Eb(3),u.pc("ngIf",e.tabla2.data.length>0)}},directives:[d.a,m.c,m.b,g.a,n.o,n.f,c.o,h.b,v.a,d.b,E.d,E.b,E.a,w.c,m.a,w.f,A.b,k.e,k.h,w.h,k.d,y.a,c.n,O.n,E.e,E.c],pipes:[C.c,c.g,c.d],styles:[""],data:{animation:[o.a]}}),t})(),data:{title:"STOCK VALORIZADO POR PRODUCTO"}}];var et=a("u9T3"),at=a("f44v"),ct=a("iELJ"),nt=a("M9ds"),ot=a("ZFy/"),lt=a("iInd"),rt=a("PCNd");let it=(()=>{class t{}return t.\u0275mod=u.Pb({type:t}),t.\u0275inj=u.Ob({factory:function(e){return new(e||t)},imports:[[c.c,n.t,et.a,E.f,A.c,A.c,d.c,A.c,h.c,at.a,A.c,ot.b,ct.f,p.b,g.b,nt.c,y.b,v.b,C.b,rt.a,k.g,lt.k.forChild(tt)]]}),t})()},Iab2:function(t,e,a){var c,n;void 0===(n="function"==typeof(c=function(){"use strict";function e(t,e,a){var c=new XMLHttpRequest;c.open("GET",t),c.responseType="blob",c.onload=function(){l(c.response,e,a)},c.onerror=function(){console.error("could not download file")},c.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function c(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(t,o,l){var r=n.URL||n.webkitURL,i=document.createElement("a");i.download=o=o||t.name||"download",i.rel="noopener","string"==typeof t?(i.href=t,i.origin===location.origin?c(i):a(i.href)?e(t,o,l):c(i,i.target="_blank")):(i.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(i.href)},4e4),setTimeout(function(){c(i)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,o){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,o),n);else if(a(t))e(t,n,o);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){c(l)})}}:function(t,a,c,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,c);var r="application/octet-stream"===t.type,i=/constructor/i.test(n.HTMLElement)||n.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&i||o)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=t:location=t,l=null},u.readAsDataURL(t)}else{var b=n.URL||n.webkitURL,f=b.createObjectURL(t);l?l.location=f:location.href=f,l=null,setTimeout(function(){b.revokeObjectURL(f)},4e4)}});n.saveAs=l.saveAs=l,t.exports=l})?c.apply(e,[]):c)||(t.exports=n)},bPAe:function(t,e,a){"use strict";a.d(e,"a",function(){return l});var c=a("Iab2"),n=a("EUZL"),o=a("8Y7J");let l=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,a){const c=n.utils.json_to_sheet(t),o=n.write({Sheets:{[a]:c},SheetNames:[a]},{bookType:"xlsx",type:"array"});this.saveExcelFile(o,e)}saveExcelFile(t,e){const a=new Blob([t],{type:this.fileType});c.saveAs(a,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);