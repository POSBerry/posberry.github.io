!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{CHRX:function(n,o,r){"use strict";r.d(o,"a",function(){return c});var i=r("wd/R"),c=function(){function n(){e(this,n),this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}return a(n,[{key:"setGroup",value:function(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}},{key:"setData",value:function(t){this.data=t,this.sortData()}},{key:"sortData",value:function(){var t=this;this.data.sort(function(e,n){if(e[t.groupField]==n[t.groupField]){if(t.secondarySort){if(null==e[t.secondarySort])return 1;if(null==n[t.secondarySort])return-1;if(e[t.secondarySort]>n[t.secondarySort])return 1*("desc"===t.sortDir?-1:1);if(e[t.secondarySort]<n[t.secondarySort])return-1*("desc"===t.sortDir?-1:1)}}else{if(null==e[t.groupField])return 1;if(null==n[t.groupField])return-1;if(e[t.groupField]>n[t.groupField])return 1;if(e[t.groupField]<n[t.groupField])return-1}return 0}),this.filterRows()}},{key:"filterRows",value:function(){var e=this,n=[];n=this.data.filter(function(t){for(var n in e.filter){if(e.filter[n]&&null==t[n])return!1;switch(typeof t[n]){case"number":if(e.filter[n]&&t[n].toString()!==e.filter[n].toString())return!1;break;case"string":if("f"==n.charAt(0).toLowerCase()&&i(t[n]).isValid){if(-1==i(t[n]).format("DD/MM/YYYY HH:mm:ss").indexOf(e.filter[n]))return!1;break}if(-1==t[n].toLowerCase().indexOf(e.filter[n].toLowerCase()))return!1}}return!0}),n=this.customFilter(n);var a={};this.groupField?a[this.groupField]=n.length.toString():a.count=n.length.toString(),this.sum.forEach(function(t){return a[t]=0});for(var o=0;o<n.length;o++)this.sum.forEach(function(t){return a[t]+=n[o][t]});if(a.isGroup=!0,this.footer=a,this.groupField){var r=[];n.forEach(function(t){-1==r.indexOf(t[e.groupField])&&r.push(t[e.groupField])}),r=r.map(function(t){return{name:t,count:1}});var c=[],l=!0,s=0,u=null,f=function(){u&&(u[e.groupField]+=" ("+r[s-1].count.toString()+")")};for(o=0;o<n.length;o++){if(l&&n[o][this.groupField]==r[s].name){var b;f();var p="+";this.groups[r[s].name]&&(p="-"),t(b={},this.groupField,p+" "+r[s].name),t(b,"isGroup",!0),t(b,"name",r[s].name),u=b,this.sum.forEach(function(t){return u[t]=0}),c.push(u),l=++s<r.length}else r[s-1].count++;this.sum.forEach(function(t){return u[t]+=n[o][t]}),c.push(n[o])}f(),n=null,c=c.filter(function(t){return!!t.isGroup||!!e.groups[t[e.groupField]]||void 0}),this.rows=c}else this.rows=n;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}},{key:"updateFilter",value:function(t,e){t&&e&&(this.filter[e]=t.target.value,this.filterRows())}},{key:"updateFilterBoolean",value:function(t,e){this.filter[e]=t,this.filterRows()}}]),n}()},Iab2:function(t,e,n){var a,o;void 0===(o="function"==typeof(a=function(){"use strict";function e(t,e,n){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){i(a.response,e,n)},a.onerror=function(){console.error("could not download file")},a.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,r=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!r?function(t,r,i){var c=o.URL||o.webkitURL,l=document.createElement("a");l.download=r=r||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?a(l):n(l.href)?e(t,r,i):a(l,l.target="_blank")):(l.href=c.createObjectURL(t),setTimeout(function(){c.revokeObjectURL(l.href)},4e4),setTimeout(function(){a(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,r){if(o=o||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,r),o);else if(n(t))e(t,o,r);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){a(i)})}}:function(t,n,a,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,a);var c="application/octet-stream"===t.type,l=/constructor/i.test(o.HTMLElement)||o.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||c&&l||r)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},u.readAsDataURL(t)}else{var f=o.URL||o.webkitURL,b=f.createObjectURL(t);i?i.location=b:location.href=b,i=null,setTimeout(function(){f.revokeObjectURL(b)},4e4)}});o.saveAs=i.saveAs=i,t.exports=i})?a.apply(e,[]):a)||(t.exports=o)},VW9e:function(t,n,o){"use strict";o.r(n),o.d(n,"CashByMovementTypeModule",function(){return nt});var r=o("SVse"),i=o("3sEA"),c=o("5IEN"),l=o("bPAe"),s=o("CHRX"),u=o("UVsP"),f=o("Ap+n"),b=o("8Y7J"),p=o("iELJ"),h=o("zHaW"),d=o("PDjf"),m=o("VDRc"),g=o("Q2Ze"),v=o("e6WT"),w=o("TN/R"),E=o("ZTz/"),y=o("Dxy4"),k=o("Tj54"),S=o("w9WL"),A=o("UhP/"),O=o("TSSN");function x(t,e){if(1&t&&(b.Xb(0,"mat-option",18),b.Oc(1),b.Wb()),2&t){var n=e.$implicit;b.pc("value",n),b.Eb(1),b.Pc(n.toString())}}function W(t,e){if(1&t&&(b.Xb(0,"mat-option",18),b.Oc(1),b.Wb()),2&t){var n=e.$implicit;b.pc("value",n),b.Eb(1),b.Pc(n.toString())}}function C(t,e){if(1&t&&(b.Xb(0,"mat-option",18),b.Oc(1),b.Wb()),2&t){var n=e.$implicit;b.pc("value",n),b.Eb(1),b.Pc(n.toString())}}function X(t,e){if(1&t&&(b.Xb(0,"mat-option",18),b.Oc(1),b.Wb()),2&t){var n=e.$implicit;b.pc("value",n),b.Eb(1),b.Pc(n.toString())}}function D(t,e){if(1&t&&(b.Xb(0,"mat-option",18),b.Oc(1),b.Wb()),2&t){var n=e.$implicit;b.pc("value",n),b.Eb(1),b.Pc(null==n?null:n.nombre)}}function F(t,e){if(1&t&&b.Oc(0),2&t){var n=e.row;b.Qc(" ",null==n?null:n.stipomovcaja," ")}}function R(t,e){if(1&t&&(b.Oc(0),b.kc(1,"date")),2&t){var n=e.row;b.Qc(" ",b.mc(1,1,null==n?null:n.fcreacion,"dd/MM/yyyy HH:mm:ss")," ")}}function M(t,e){if(1&t&&b.Oc(0),2&t){var n=e.row;b.Qc(" ",null==n?null:n.idpv," ")}}function T(t,e){if(1&t&&b.Oc(0),2&t){var n=e.row;b.Qc(" ",null==n?null:n.sobservacion," ")}}function L(t,e){1&t&&(b.Xb(0,"span"),b.Oc(1,"Si"),b.Wb())}function H(t,e){1&t&&(b.Xb(0,"span"),b.Oc(1,"No"),b.Wb())}function I(t,e){if(1&t&&(b.Mc(0,L,2,0,"span",17),b.Mc(1,H,2,0,"span",17)),2&t){var n=e.row;b.pc("ngIf","T"==(null==n?null:n.banulado)),b.Eb(1),b.pc("ngIf","F"==(null==n?null:n.banulado))}}function j(t,e){if(1&t&&(b.Oc(0),b.kc(1,"currency")),2&t){var n=e.row;b.Qc(" ",b.lc(1,1,null==n?null:n.rimporte)," ")}}function P(t,e){if(1&t){var n=b.Yb();b.Xb(0,"button",20),b.fc("click",function(){b.Dc(n);var t=b.jc().row;return b.jc().openUserInfoPopUp(t)}),b.Xb(1,"mat-icon"),b.Oc(2,"person_pin"),b.Wb(),b.Wb()}}function U(t,e){1&t&&b.Mc(0,P,3,0,"button",19),2&t&&b.pc("ngIf",!e.row.isGroup)}function N(t,e){if(1&t&&(b.Xb(0,"div",22),b.Sb(1,"hr",23),b.Xb(2,"div"),b.Oc(3),b.kc(4,"translate"),b.Wb(),b.Wb()),2&t){var n=b.jc(2);b.Eb(3),b.Rc("",b.lc(4,2,"Articulos Totales"),":",n.tabla2.footer.count," ")}}function q(t,e){1&t&&(b.Xb(0,"ngx-datatable-footer"),b.Mc(1,N,5,4,"ng-template",21),b.Wb())}var B,G,V=function(){return{y:"50px",delay:"300ms"}},Y=function(t){return{value:"*",params:t}},J=[{path:"",component:(B=function(){function t(n,a,o,r,i,c){e(this,t),this.dialog=n,this.servicioCaja=a,this.servicioExportarExcel=o,this.servicioSucursales=r,this.loader=i,this.snack=c,this.hours=0,this.minutes=0,this.hours2=0,this.minutes2=0,this.hoursArr=[],this.minutesArr=[],this.startDate=new Date,this.endDate=new Date;for(var l=0;l<=23;l++)this.hoursArr.push(l);for(l=0;l<=59;l++)this.minutesArr.push(l);this.minutes=this.minutesArr[0],this.minutes2=this.minutesArr[this.minutesArr.length-1],this.hours=this.hoursArr[0],this.hours2=this.hoursArr[this.hoursArr.length-1]}return a(t,[{key:"ngOnInit",value:function(){var t=this;this.tabla2=new s.a,this.tabla2.groupField="stipomovcaja",this.tabla2.secondarySort="",this.tabla2.sum=["rimporte"],this.loader.open(),this.servicioSucursales.obtenerDatos(!0).subscribe(function(e){t.sucursales=e,t.sucursalActual=t.sucursales[0],t.loader.close()},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"refresh",value:function(){var t=this;this.startDate.setHours(this.hours,this.minutes,0,0),this.endDate.setHours(this.hours2,this.minutes2,59,999),console.log(this.startDate),console.log(this.endDate),this.loader.open(),this.servicioCaja.obtenerDatosTabla1(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.puntosventasstr).subscribe(function(e){t.tabla2.setData(e.filter(function(){return!0})),t.loader.close()},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"getRowHeight",value:function(t){return 50}},{key:"getCellClass",value:function(t){return{ngxgroup:t.row.isGroup}}},{key:"tabla2OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}},{key:"updateDate1",value:function(t){this.startDate=t.value.toDate()}},{key:"updateDate2",value:function(t){this.endDate=t.value.toDate()}},{key:"seleccionarSucursal",value:function(t){this.sucursalActual=t}},{key:"openUserInfoPopUp",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(f.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}]),t}(),B.\u0275fac=function(t){return new(t||B)(b.Rb(p.b),b.Rb(c.a),b.Rb(l.a),b.Rb(u.a),b.Rb(i.a),b.Rb(h.a))},B.\u0275cmp=b.Lb({type:B,selectors:[["app-cash-by-movement-type"]],decls:79,vars:87,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker1",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","8",1,"m-8"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["picker2",""],[3,"value","selectionChange","valueChange"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","name","width"],["ngx-datatable-cell-template",""],[3,"name","width"],[4,"ngIf"],[3,"value"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"]],template:function(t,e){if(1&t&&(b.Xb(0,"mat-card",0),b.Xb(1,"div",1),b.Xb(2,"mat-form-field",2),b.Xb(3,"mat-label"),b.Oc(4),b.kc(5,"translate"),b.Wb(),b.Xb(6,"input",3),b.fc("dateChange",function(t){return e.updateDate1(t)}),b.Wb(),b.Sb(7,"mat-datepicker-toggle",4),b.Sb(8,"mat-datepicker",null,5),b.Wb(),b.Xb(10,"mat-form-field",6),b.Xb(11,"mat-label"),b.Oc(12),b.kc(13,"translate"),b.Wb(),b.Xb(14,"mat-select",7),b.fc("valueChange",function(t){return e.hours=t}),b.Mc(15,x,2,2,"mat-option",8),b.Wb(),b.Wb(),b.Xb(16,"mat-form-field",6),b.Xb(17,"mat-label"),b.Oc(18),b.kc(19,"translate"),b.Wb(),b.Xb(20,"mat-select",7),b.fc("valueChange",function(t){return e.minutes=t}),b.Mc(21,W,2,2,"mat-option",8),b.Wb(),b.Wb(),b.Xb(22,"mat-form-field",2),b.Xb(23,"mat-label"),b.Oc(24),b.kc(25,"translate"),b.Wb(),b.Xb(26,"input",3),b.fc("dateChange",function(t){return e.updateDate2(t)}),b.Wb(),b.Sb(27,"mat-datepicker-toggle",4),b.Sb(28,"mat-datepicker",null,9),b.Wb(),b.Xb(30,"mat-form-field",6),b.Xb(31,"mat-label"),b.Oc(32),b.kc(33,"translate"),b.Wb(),b.Xb(34,"mat-select",7),b.fc("valueChange",function(t){return e.hours2=t}),b.Mc(35,C,2,2,"mat-option",8),b.Wb(),b.Wb(),b.Xb(36,"mat-form-field",6),b.Xb(37,"mat-label"),b.Oc(38),b.kc(39,"translate"),b.Wb(),b.Xb(40,"mat-select",7),b.fc("valueChange",function(t){return e.minutes2=t}),b.Mc(41,X,2,2,"mat-option",8),b.Wb(),b.Wb(),b.Xb(42,"mat-form-field",2),b.Xb(43,"mat-label"),b.Oc(44),b.kc(45,"translate"),b.Wb(),b.Xb(46,"mat-select",10),b.fc("selectionChange",function(t){return e.seleccionarSucursal(t.value)})("valueChange",function(t){return e.sucursalActual=t}),b.Mc(47,D,2,2,"mat-option",8),b.Wb(),b.Wb(),b.Xb(48,"button",11),b.fc("click",function(){return e.refresh()}),b.Xb(49,"mat-icon"),b.Oc(50,"search"),b.Wb(),b.Oc(51),b.kc(52,"translate"),b.Wb(),b.Wb(),b.Wb(),b.Xb(53,"mat-card",0),b.Xb(54,"mat-card-content",0),b.Xb(55,"ngx-datatable",12,13),b.fc("activate",function(t){return e.tabla2OnActivate(t)}),b.Xb(57,"ngx-datatable-column",14),b.kc(58,"translate"),b.Mc(59,F,1,1,"ng-template",15),b.Wb(),b.Xb(60,"ngx-datatable-column",14),b.kc(61,"translate"),b.Mc(62,R,2,4,"ng-template",15),b.Wb(),b.Xb(63,"ngx-datatable-column",14),b.kc(64,"translate"),b.Mc(65,M,1,1,"ng-template",15),b.Wb(),b.Xb(66,"ngx-datatable-column",14),b.kc(67,"translate"),b.Mc(68,T,1,1,"ng-template",15),b.Wb(),b.Xb(69,"ngx-datatable-column",14),b.kc(70,"translate"),b.Mc(71,I,2,2,"ng-template",15),b.Wb(),b.Xb(72,"ngx-datatable-column",14),b.kc(73,"translate"),b.Mc(74,j,2,3,"ng-template",15),b.Wb(),b.Xb(75,"ngx-datatable-column",16),b.kc(76,"translate"),b.Mc(77,U,1,1,"ng-template",15),b.Wb(),b.Mc(78,q,2,0,"ngx-datatable-footer",17),b.Wb(),b.Wb(),b.Wb()),2&t){var n=b.Ac(9),a=b.Ac(29);b.Eb(4),b.Pc(b.lc(5,54,"SALES.STARTDATE")),b.Eb(2),b.pc("matDatepicker",n)("value",e.startDate),b.Eb(1),b.pc("for",n),b.Eb(5),b.Pc(b.lc(13,56,"SALES.HOUR")),b.Eb(2),b.pc("value",e.hours),b.Eb(1),b.pc("ngForOf",e.hoursArr),b.Eb(3),b.Pc(b.lc(19,58,"SALES.MINUTES")),b.Eb(2),b.pc("value",e.minutes),b.Eb(1),b.pc("ngForOf",e.minutesArr),b.Eb(3),b.Pc(b.lc(25,60,"SALES.ENDDATE")),b.Eb(2),b.pc("matDatepicker",a)("value",e.endDate),b.Eb(1),b.pc("for",a),b.Eb(5),b.Pc(b.lc(33,62,"SALES.HOUR")),b.Eb(2),b.pc("value",e.hours2),b.Eb(1),b.pc("ngForOf",e.hoursArr),b.Eb(3),b.Pc(b.lc(39,64,"SALES.MINUTES")),b.Eb(2),b.pc("value",e.minutes2),b.Eb(1),b.pc("ngForOf",e.minutesArr),b.Eb(3),b.Pc(b.lc(45,66,"SALES.BRANCH")),b.Eb(2),b.pc("value",e.sucursalActual),b.Eb(1),b.pc("ngForOf",e.sucursales),b.Eb(4),b.Pc(b.lc(52,68,"SALES.SHOW")),b.Eb(2),b.pc("@animate",b.vc(85,Y,b.uc(84,V))),b.Eb(2),b.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla2.rows)("selectionType","single"),b.Eb(2),b.qc("name",b.lc(58,70,"tipo")),b.pc("cellClass",e.getCellClass)("width",500),b.Eb(3),b.qc("name",b.lc(61,72,"fecha")),b.pc("cellClass",e.getCellClass)("width",200),b.Eb(3),b.qc("name",b.lc(64,74,"pv")),b.pc("cellClass",e.getCellClass)("width",150),b.Eb(3),b.qc("name",b.lc(67,76,"observacion")),b.pc("cellClass",e.getCellClass)("width",150),b.Eb(3),b.qc("name",b.lc(70,78,"Anulado")),b.pc("cellClass",e.getCellClass)("width",150),b.Eb(3),b.qc("name",b.lc(73,80,"total")),b.pc("cellClass",e.getCellClass)("width",150),b.Eb(3),b.qc("name",b.lc(76,82,"SALES.ACTIONS")),b.pc("width",150),b.Eb(3),b.pc("ngIf",e.tabla2.data.length>0)}},directives:[d.a,m.c,m.b,g.c,m.a,g.f,v.b,w.b,w.d,g.h,w.a,E.a,r.n,y.b,k.a,d.b,S.d,S.b,S.a,r.o,A.n,S.e,S.c],pipes:[O.c,r.f,r.d],styles:[""]}),B),data:{title:"CAJA"}}],Q=o("u9T3"),_=o("s7LF"),$=o("f44v"),Z=o("jMqV"),K=o("M9ds"),z=o("ZFy/"),tt=o("iInd"),et=o("PCNd"),nt=((G=function t(){e(this,t)}).\u0275mod=b.Pb({type:G}),G.\u0275inj=b.Ob({factory:function(t){return new(t||G)},imports:[[r.c,_.s,Q.a,S.f,v.c,v.c,d.c,v.c,y.c,$.a,v.c,z.b,p.e,h.b,Z.b,K.c,E.b,k.b,O.b,et.a,w.c,tt.k.forChild(J)]]}),G)},bPAe:function(n,o,r){"use strict";r.d(o,"a",function(){return s});var i=r("Iab2"),c=r("EUZL"),l=r("8Y7J"),s=function(){var n=function(){function n(){e(this,n),this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}return a(n,[{key:"exportExcel",value:function(e,n,a){var o=c.utils.json_to_sheet(e),r=c.write({Sheets:t({},a,o),SheetNames:[a]},{bookType:"xlsx",type:"array"});this.saveExcelFile(r,n)}},{key:"saveExcelFile",value:function(t,e){var n=new Blob([t],{type:this.fileType});i.saveAs(n,e+this.fileExtension)}}]),n}();return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=l.Nb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()}}])}();