(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{GmJt:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("GS7A");const c=Object(n.g)([Object(n.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(n.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(n.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),o=[Object(n.n)("animate",[Object(n.m)("void => *",[Object(n.o)(c)])]),Object(n.n)("fadeInOut",[Object(n.k)("0",Object(n.l)({opacity:0,display:"none"})),Object(n.k)("1",Object(n.l)({opacity:1,display:"block"})),Object(n.m)("0 => 1",Object(n.e)("300ms")),Object(n.m)("1 => 0",Object(n.e)("300ms"))])]},Iab2:function(t,e,a){var n,c;void 0===(c="function"==typeof(n=function(){"use strict";function e(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){l(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var c="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=c.saveAs||("object"!=typeof window||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(t,o,l){var s=c.URL||c.webkitURL,i=document.createElement("a");i.download=o=o||t.name||"download",i.rel="noopener","string"==typeof t?(i.href=t,i.origin===location.origin?n(i):a(i.href)?e(t,o,l):n(i,i.target="_blank")):(i.href=s.createObjectURL(t),setTimeout(function(){s.revokeObjectURL(i.href)},4e4),setTimeout(function(){n(i)},0))}:"msSaveOrOpenBlob"in navigator?function(t,c,o){if(c=c||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,o),c);else if(a(t))e(t,c,o);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){n(l)})}}:function(t,a,n,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,n);var s="application/octet-stream"===t.type,i=/constructor/i.test(c.HTMLElement)||c.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||s&&i||o)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=r?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=t:location=t,l=null},u.readAsDataURL(t)}else{var b=c.URL||c.webkitURL,p=b.createObjectURL(t);l?l.location=p:location.href=p,l=null,setTimeout(function(){b.revokeObjectURL(p)},4e4)}});c.saveAs=l.saveAs=l,t.exports=l})?n.apply(e,[]):n)||(t.exports=c)},bPAe:function(t,e,a){"use strict";a.d(e,"a",function(){return l});var n=a("Iab2"),c=a("EUZL"),o=a("8Y7J");let l=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,a){const n=c.utils.json_to_sheet(t),o=c.write({Sheets:{[a]:n},SheetNames:[a]},{bookType:"xlsx",type:"array"});this.saveExcelFile(o,e)}saveExcelFile(t,e){const a=new Blob([t],{type:this.fileType});n.saveAs(a,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},l1WU:function(t,e,a){"use strict";a.r(e),a.d(e,"CashModule",function(){return et});var n=a("SVse"),c=a("GmJt"),o=a("3sEA"),l=a("wd/R"),s=a("bPAe"),i=a("CHRX"),r=a("UVsP"),u=a("Ap+n"),b=a("5IEN"),p=a("8Y7J"),f=a("iELJ"),m=a("zHaW"),d=a("PDjf"),h=a("VDRc"),g=a("Q2Ze"),v=a("e6WT"),E=a("TN/R"),w=a("ZTz/"),O=a("Dxy4"),A=a("Tj54"),S=a("w9WL"),x=a("UhP/"),y=a("TSSN");function k(t,e){if(1&t&&(p.Xb(0,"mat-option",18),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function W(t,e){if(1&t&&(p.Xb(0,"mat-option",18),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function X(t,e){if(1&t&&(p.Xb(0,"mat-option",18),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function C(t,e){if(1&t&&(p.Xb(0,"mat-option",18),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.toString())}}function D(t,e){if(1&t&&(p.Xb(0,"mat-option",18),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.nombre)}}function j(t,e){if(1&t&&(p.Oc(0),p.kc(1,"date")),2&t){const t=e.row;p.Qc(" ",p.mc(1,1,null==t?null:t.fcreacion,"dd/MM/yyyy HH:mm:ss")," ")}}function M(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.idpv," ")}}function T(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.stipomovcaja," ")}}function R(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sobservacion," ")}}function L(t,e){1&t&&(p.Xb(0,"span"),p.Oc(1,"Si"),p.Wb())}function I(t,e){1&t&&(p.Xb(0,"span"),p.Oc(1,"No"),p.Wb())}function F(t,e){if(1&t&&(p.Mc(0,L,2,0,"span",17),p.Mc(1,I,2,0,"span",17)),2&t){const t=e.row;p.pc("ngIf","T"==(null==t?null:t.banulado)),p.Eb(1),p.pc("ngIf","F"==(null==t?null:t.banulado))}}function H(t,e){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){const t=e.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rimporte)," ")}}function P(t,e){if(1&t){const t=p.Yb();p.Xb(0,"button",20),p.fc("click",function(){p.Dc(t);const e=p.jc().row;return p.jc().openUserInfoPopUp(e)}),p.Xb(1,"mat-icon"),p.Oc(2,"person_pin"),p.Wb(),p.Wb()}}function U(t,e){1&t&&p.Mc(0,P,3,0,"button",19),2&t&&p.pc("ngIf",!e.row.isGroup)}function N(t,e){if(1&t){const t=p.Yb();p.Xb(0,"button",11),p.fc("click",function(){return p.Dc(t),p.jc(3).export()}),p.Xb(1,"mat-icon"),p.Oc(2,"save_alt"),p.Wb(),p.Oc(3),p.kc(4,"translate"),p.Wb()}2&t&&(p.Eb(3),p.Pc(p.lc(4,1,"SALES.EXCEL")))}function q(t,e){if(1&t&&(p.Xb(0,"div",22),p.Sb(1,"hr",23),p.Xb(2,"div"),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Wb(),p.Xb(5,"div",24),p.Mc(6,N,5,3,"button",25),p.Wb()),2&t){const t=p.jc(2);p.Eb(3),p.Rc("",p.lc(4,3,"Articulos Totales"),":",t.tabla1.footer.count," "),p.Eb(3),p.pc("ngIf",t.tabla1.data.length>0)}}function B(t,e){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,q,7,5,"ng-template",21),p.Wb())}const G=function(){return{y:"50px",delay:"300ms"}},J=function(t){return{value:"*",params:t}},V=[{path:"",component:(()=>{class t{constructor(t,e,a,n,c,o){this.dialog=t,this.servicioCaja=e,this.servicioExportarExcel=a,this.servicioSucursales=n,this.loader=c,this.snack=o,this.hours=0,this.minutes=0,this.hours2=0,this.minutes2=0,this.hoursArr=[],this.minutesArr=[],this.startDate=new Date,this.endDate=new Date;for(var l=0;l<=23;l++)this.hoursArr.push(l);for(l=0;l<=59;l++)this.minutesArr.push(l);this.minutes=this.minutesArr[0],this.minutes2=this.minutesArr[this.minutesArr.length-1],this.hours=this.hoursArr[0],this.hours2=this.hoursArr[this.hoursArr.length-1]}ngOnInit(){this.tabla1=new i.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.loader.open(),this.servicioSucursales.obtenerDatos(!0).subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}export(){var t=this.tabla1.data.map(t=>({Fecha:l(t.fdocumento).format("DD/MM/YYYY hh:mm:ss"),PV:t.idpv,"Tipo de Movimiento":t.stipomovcaja,Observacion:t.sobservacion,Anulado:"T"==t.banulado?"Si":"No",Total:t.rimporte}));this.servicioExportarExcel.exportExcel(t,"caja","caja")}refresh(){this.startDate.setHours(this.hours,this.minutes,0,0),this.endDate.setHours(this.hours2,this.minutes2,59,999),console.log(this.startDate),console.log(this.endDate),this.loader.open(),console.log(this.sucursalActual),this.servicioCaja.obtenerDatosTabla1(this.startDate.toISOString(),this.endDate.toISOString(),this.sucursalActual.puntosventasstr).subscribe(t=>{this.tabla1.setData(t.filter(()=>!0)),this.loader.close(),console.log(this.tabla1)},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla1OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}openUserInfoPopUp(t={}){this.dialog.open(u.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(p.Rb(f.b),p.Rb(b.a),p.Rb(s.a),p.Rb(r.a),p.Rb(o.a),p.Rb(m.a))},t.\u0275cmp=p.Lb({type:t,selectors:[["app-cash"]],decls:79,vars:87,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],["matInput","",3,"matDatepicker","value","dateChange"],["matSuffix","",3,"for"],["picker1",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","8",1,"m-8"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["picker2",""],[3,"value","selectionChange","valueChange"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","name","width"],["ngx-datatable-cell-template",""],[3,"name","width"],[4,"ngIf"],[3,"value"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(t,e){if(1&t&&(p.Xb(0,"mat-card",0),p.Xb(1,"div",1),p.Xb(2,"mat-form-field",2),p.Xb(3,"mat-label"),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Xb(6,"input",3),p.fc("dateChange",function(t){return e.updateDate1(t)}),p.Wb(),p.Sb(7,"mat-datepicker-toggle",4),p.Sb(8,"mat-datepicker",null,5),p.Wb(),p.Xb(10,"mat-form-field",6),p.Xb(11,"mat-label"),p.Oc(12),p.kc(13,"translate"),p.Wb(),p.Xb(14,"mat-select",7),p.fc("valueChange",function(t){return e.hours=t}),p.Mc(15,k,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(16,"mat-form-field",6),p.Xb(17,"mat-label"),p.Oc(18),p.kc(19,"translate"),p.Wb(),p.Xb(20,"mat-select",7),p.fc("valueChange",function(t){return e.minutes=t}),p.Mc(21,W,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(22,"mat-form-field",2),p.Xb(23,"mat-label"),p.Oc(24),p.kc(25,"translate"),p.Wb(),p.Xb(26,"input",3),p.fc("dateChange",function(t){return e.updateDate2(t)}),p.Wb(),p.Sb(27,"mat-datepicker-toggle",4),p.Sb(28,"mat-datepicker",null,9),p.Wb(),p.Xb(30,"mat-form-field",6),p.Xb(31,"mat-label"),p.Oc(32),p.kc(33,"translate"),p.Wb(),p.Xb(34,"mat-select",7),p.fc("valueChange",function(t){return e.hours2=t}),p.Mc(35,X,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(36,"mat-form-field",6),p.Xb(37,"mat-label"),p.Oc(38),p.kc(39,"translate"),p.Wb(),p.Xb(40,"mat-select",7),p.fc("valueChange",function(t){return e.minutes2=t}),p.Mc(41,C,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(42,"mat-form-field",2),p.Xb(43,"mat-label"),p.Oc(44),p.kc(45,"translate"),p.Wb(),p.Xb(46,"mat-select",10),p.fc("selectionChange",function(t){return e.seleccionarSucursal(t.value)})("valueChange",function(t){return e.sucursalActual=t}),p.Mc(47,D,2,2,"mat-option",8),p.Wb(),p.Wb(),p.Xb(48,"button",11),p.fc("click",function(){return e.refresh()}),p.Xb(49,"mat-icon"),p.Oc(50,"search"),p.Wb(),p.Oc(51),p.kc(52,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Xb(53,"mat-card",0),p.Xb(54,"mat-card-content",0),p.Xb(55,"ngx-datatable",12,13),p.fc("activate",function(t){return e.tabla1OnActivate(t)}),p.Xb(57,"ngx-datatable-column",14),p.kc(58,"translate"),p.Mc(59,j,2,4,"ng-template",15),p.Wb(),p.Xb(60,"ngx-datatable-column",14),p.kc(61,"translate"),p.Mc(62,M,1,1,"ng-template",15),p.Wb(),p.Xb(63,"ngx-datatable-column",14),p.kc(64,"translate"),p.Mc(65,T,1,1,"ng-template",15),p.Wb(),p.Xb(66,"ngx-datatable-column",14),p.kc(67,"translate"),p.Mc(68,R,1,1,"ng-template",15),p.Wb(),p.Xb(69,"ngx-datatable-column",14),p.kc(70,"translate"),p.Mc(71,F,2,2,"ng-template",15),p.Wb(),p.Xb(72,"ngx-datatable-column",14),p.kc(73,"translate"),p.Mc(74,H,2,3,"ng-template",15),p.Wb(),p.Xb(75,"ngx-datatable-column",16),p.kc(76,"translate"),p.Mc(77,U,1,1,"ng-template",15),p.Wb(),p.Mc(78,B,2,0,"ngx-datatable-footer",17),p.Wb(),p.Wb(),p.Wb()),2&t){const t=p.Ac(9),a=p.Ac(29);p.Eb(4),p.Pc(p.lc(5,54,"SALES.STARTDATE")),p.Eb(2),p.pc("matDatepicker",t)("value",e.startDate),p.Eb(1),p.pc("for",t),p.Eb(5),p.Pc(p.lc(13,56,"SALES.HOUR")),p.Eb(2),p.pc("value",e.hours),p.Eb(1),p.pc("ngForOf",e.hoursArr),p.Eb(3),p.Pc(p.lc(19,58,"SALES.MINUTES")),p.Eb(2),p.pc("value",e.minutes),p.Eb(1),p.pc("ngForOf",e.minutesArr),p.Eb(3),p.Pc(p.lc(25,60,"SALES.ENDDATE")),p.Eb(2),p.pc("matDatepicker",a)("value",e.endDate),p.Eb(1),p.pc("for",a),p.Eb(5),p.Pc(p.lc(33,62,"SALES.HOUR")),p.Eb(2),p.pc("value",e.hours2),p.Eb(1),p.pc("ngForOf",e.hoursArr),p.Eb(3),p.Pc(p.lc(39,64,"SALES.MINUTES")),p.Eb(2),p.pc("value",e.minutes2),p.Eb(1),p.pc("ngForOf",e.minutesArr),p.Eb(3),p.Pc(p.lc(45,66,"SALES.BRANCH")),p.Eb(2),p.pc("value",e.sucursalActual),p.Eb(1),p.pc("ngForOf",e.sucursales),p.Eb(4),p.Pc(p.lc(52,68,"SALES.SHOW")),p.Eb(2),p.pc("@animate",p.vc(85,J,p.uc(84,G))),p.Eb(2),p.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("selectionType","single"),p.Eb(2),p.qc("name",p.lc(58,70,"SALES.DATE")),p.pc("cellClass",e.getCellClass)("width",150),p.Eb(3),p.qc("name",p.lc(61,72,"SALES.PV")),p.pc("cellClass",e.getCellClass)("width",150),p.Eb(3),p.qc("name",p.lc(64,74,"Tipo De Movimiento")),p.pc("cellClass",e.getCellClass)("width",150),p.Eb(3),p.qc("name",p.lc(67,76,"Observacion")),p.pc("cellClass",e.getCellClass)("width",150),p.Eb(3),p.qc("name",p.lc(70,78,"Anulado")),p.pc("cellClass",e.getCellClass)("width",150),p.Eb(3),p.qc("name",p.lc(73,80,"SALES.TOTAL")),p.pc("cellClass",e.getCellClass)("width",150),p.Eb(3),p.qc("name",p.lc(76,82,"SALES.ACTIONS")),p.pc("width",150),p.Eb(3),p.pc("ngIf",e.tabla1.data.length>0)}},directives:[d.a,h.c,h.b,g.c,h.a,g.f,v.b,E.b,E.d,g.h,E.a,w.a,n.n,O.b,A.a,d.b,S.d,S.b,S.a,n.o,x.n,S.e,S.c],pipes:[y.c,n.f,n.d],styles:[""],data:{animation:[c.a]}}),t})(),data:{title:"CAJA"}}];var Y=a("iInd"),_=a("s7LF"),Q=a("u9T3"),z=a("f44v"),$=a("jMqV"),Z=a("M9ds"),K=a("ZFy/"),tt=a("PCNd");let et=(()=>{class t{}return t.\u0275mod=p.Pb({type:t}),t.\u0275inj=p.Ob({factory:function(e){return new(e||t)},imports:[[n.c,_.s,Q.a,S.f,v.c,v.c,d.c,v.c,O.c,z.a,v.c,K.b,f.f,m.b,$.b,Z.c,w.b,A.b,y.b,tt.a,E.c,Y.k.forChild(V)]]}),t})()}}]);