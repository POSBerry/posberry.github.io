(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{GmJt:function(t,e,o){"use strict";o.d(e,"a",function(){return c});var i=o("GS7A");const n=Object(i.g)([Object(i.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(i.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(i.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),c=[Object(i.n)("animate",[Object(i.m)("void => *",[Object(i.o)(n)])]),Object(i.n)("fadeInOut",[Object(i.k)("0",Object(i.l)({opacity:0,display:"none"})),Object(i.k)("1",Object(i.l)({opacity:1,display:"block"})),Object(i.m)("0 => 1",Object(i.e)("300ms")),Object(i.m)("1 => 0",Object(i.e)("300ms"))])]},Iab2:function(t,e,o){var i,n;void 0===(n="function"==typeof(i=function(){"use strict";function e(t,e,o){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){a(i.response,e,o)},i.onerror=function(){console.error("could not download file")},i.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(t,c,a){var r=n.URL||n.webkitURL,l=document.createElement("a");l.download=c=c||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?i(l):o(l.href)?e(t,c,a):i(l,l.target="_blank")):(l.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(l.href)},4e4),setTimeout(function(){i(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,c){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,c),n);else if(o(t))e(t,n,c);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout(function(){i(a)})}}:function(t,o,i,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,i);var r="application/octet-stream"===t.type,l=/constructor/i.test(n.HTMLElement)||n.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&l||c)&&"undefined"!=typeof FileReader){var b=new FileReader;b.onloadend=function(){var t=b.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},b.readAsDataURL(t)}else{var u=n.URL||n.webkitURL,p=u.createObjectURL(t);a?a.location=p:location.href=p,a=null,setTimeout(function(){u.revokeObjectURL(p)},4e4)}});n.saveAs=a.saveAs=a,t.exports=a})?i.apply(e,[]):i)||(t.exports=n)},KDqB:function(t,e,o){"use strict";o.r(e),o.d(e,"ClientsModule",function(){return gt});var i=o("SVse"),n=o("GmJt"),c=o("3kSh"),a=o("3sEA"),r=o("vpPe"),l=o("GyhO"),s=o("cp0P"),b=o("IAdc"),u=o("bPAe"),p=o("7M/S"),m=o("Ap+n"),d=o("s7LF"),f=o("iELJ"),h=o("AytR"),E=o("8Y7J"),C=o("IheW");let O=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t,e,o,i){return this.http.get(encodeURI(`${h.a.apiURL}Clientes?filter={"where":${t},"limit":${e},"skip":${o},"order":"${i}"}`))}obtenerCount(t){return this.http.get(encodeURI(`${h.a.apiURL}Clientes/count?where=${t}`))}traerClientes(){return this.http.get(encodeURI(h.a.apiURL+"Clientes?"))}actualizarCliente(t){return this.http.put(`${h.a.apiURL}Clientes/${t.id}`,t)}obtenerTiposClientes(){return this.http.get(encodeURI(h.a.apiURL+'Tiposcliente?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerEmpresas(){return this.http.get(h.a.apiURL+"Empresas")}agregarCliente(t){return this.http.post(h.a.apiURL+"Clientes",t)}}return t.\u0275fac=function(e){return new(e||t)(E.bc(C.c))},t.\u0275prov=E.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=o("VDRc"),g=o("Q2Ze"),T=o("e6WT"),I=o("ZTz/"),N=o("jMqV"),P=o("Dxy4"),w=o("Tj54"),W=o("UhP/"),X=o("TSSN");function x(t,e){if(1&t&&(E.Xb(0,"mat-option",26),E.Oc(1),E.Wb()),2&t){const t=e.$implicit;E.pc("value",t),E.Eb(1),E.Qc(" ",t," ")}}function k(t,e){if(1&t&&(E.Xb(0,"mat-option",26),E.Oc(1),E.Wb()),2&t){const t=e.$implicit;E.pc("value",t.id),E.Eb(1),E.Qc(" ",t.stipocliente," ")}}function S(t,e){if(1&t&&(E.Xb(0,"mat-option",26),E.Oc(1),E.Wb()),2&t){const t=e.$implicit;E.pc("value",t),E.Eb(1),E.Qc(" ",t," ")}}let y=(()=>{class t{constructor(t,e,o,i){this.data=t,this.dialogRef=e,this.fb=o,this.servicioClientes=i,this.condicionesDeIVA=["Responsable Inscripto","Consumidor Final","Eventual","Excento","Monotributista"],this.servicioClientes.obtenerTiposClientes().subscribe(t=>{this.tiposDeClientes=t}),this.listasDePrecios=[1,2,3,4,5,6,7]}ngOnInit(){this.buildItemForm(this.data.payload)}buildItemForm(t){var e=this.data.tipoCliente.find(t=>"GENERAL"==t.stipocliente);e||(e=this.data.tipoCliente[0]),this.listasDePrecios=this.listasDePrecios.slice(0),this.itemForm=this.fb.group({id:[t.id||""],scodcliente:[t.scodcliente||"",d.u.required],srazonsocial:[t.srazonsocial||"",d.u.required],sdomicilio:[t.sdomicilio||"",d.u.required],slocalidad:[t.slocalidad||""],sprovincia:[t.sprovincia||""],scondicioniva:[t.scondicioniva||"Consumidor Final"],scuit:[t.scuit||""],sdocumento:[t.sdocumento||""],idtipocliente:[t.idtipocliente||e.id,d.u.required],bcredito:["T"==t.bcredito||!1],ilistadeprecios:[t.ilistadeprecios||1],rlimitecredito:[t.rlimitecredito||0],rtopedescuento:[t.rtopedescuento||0],bfavorito:["T"==t.bfavorito||!1],bactivo:[!t.hasOwnProperty("bactivo")||"T"==t.bactivo]})}submit(){this.dialogRef.close(this.itemForm.value)}}return t.\u0275fac=function(e){return new(e||t)(E.Rb(f.a),E.Rb(f.g),E.Rb(d.d),E.Rb(O))},t.\u0275cmp=E.Lb({type:t,selectors:[["app-clients-popup"]],decls:86,vars:72,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","scodcliente",3,"formControl","placeholder"],["matInput","","name","srazonsocial",3,"formControl","placeholder"],["matInput","","name","sdomicilio",3,"formControl","placeholder"],["matInput","","name","slocalidad",3,"formControl","placeholder"],["matInput","","name","sprovincia",3,"formControl","placeholder"],["appearance","fill"],["name","scondicioniva",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","scuit",3,"formControl","placeholder"],["matInput","","name","sdocumento",3,"formControl","placeholder"],["name","idtipocliente",3,"formControl"],["name","ilistadeprecios",3,"formControl"],["matInput","","type","number","min","0","max","100","name","rtopedescuento",3,"formControl","placeholder"],["name","bcredito",3,"formControl"],["matInput","","type","number","name","rlimitecredito",3,"formControl","placeholder"],["name","bfavorito",3,"formControl"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(t,e){1&t&&(E.Xb(0,"h1",0),E.Oc(1),E.Wb(),E.Xb(2,"form",1),E.fc("ngSubmit",function(){return e.submit()}),E.Xb(3,"mat-dialog-content",2),E.Xb(4,"div",3),E.Xb(5,"mat-form-field",4),E.Sb(6,"input",5),E.kc(7,"translate"),E.Wb(),E.Wb(),E.Xb(8,"div",3),E.Xb(9,"mat-form-field",4),E.Sb(10,"input",6),E.kc(11,"translate"),E.Wb(),E.Wb(),E.Xb(12,"div",3),E.Xb(13,"mat-form-field",4),E.Sb(14,"input",7),E.kc(15,"translate"),E.Wb(),E.Wb(),E.Xb(16,"div",3),E.Xb(17,"mat-form-field",4),E.Sb(18,"input",8),E.kc(19,"translate"),E.Wb(),E.Wb(),E.Xb(20,"div",3),E.Xb(21,"mat-form-field",4),E.Sb(22,"input",9),E.kc(23,"translate"),E.Wb(),E.Wb(),E.Xb(24,"div",3),E.Xb(25,"mat-form-field",10),E.Xb(26,"mat-label"),E.Oc(27),E.kc(28,"translate"),E.Wb(),E.Xb(29,"mat-select",11),E.Mc(30,x,2,2,"mat-option",12),E.Wb(),E.Wb(),E.Wb(),E.Xb(31,"div",3),E.Xb(32,"mat-form-field",4),E.Sb(33,"input",13),E.kc(34,"translate"),E.Wb(),E.Wb(),E.Xb(35,"div",3),E.Xb(36,"mat-form-field",4),E.Sb(37,"input",14),E.kc(38,"translate"),E.Wb(),E.Wb(),E.Xb(39,"div",3),E.Xb(40,"mat-form-field",10),E.Xb(41,"mat-label"),E.Oc(42),E.kc(43,"translate"),E.Wb(),E.Xb(44,"mat-select",15),E.Mc(45,k,2,2,"mat-option",12),E.Wb(),E.Wb(),E.Wb(),E.Xb(46,"div",3),E.Xb(47,"mat-form-field",10),E.Xb(48,"mat-label"),E.Oc(49),E.kc(50,"translate"),E.Wb(),E.Xb(51,"mat-select",16),E.Mc(52,S,2,2,"mat-option",12),E.Wb(),E.Wb(),E.Wb(),E.Xb(53,"div",3),E.Xb(54,"mat-form-field",4),E.Sb(55,"input",17),E.kc(56,"translate"),E.Wb(),E.Wb(),E.Xb(57,"div",3),E.Xb(58,"mat-slide-toggle",18),E.Oc(59),E.kc(60,"translate"),E.Wb(),E.Wb(),E.Xb(61,"div",3),E.Xb(62,"mat-form-field",4),E.Sb(63,"input",19),E.kc(64,"translate"),E.Wb(),E.Wb(),E.Xb(65,"div",3),E.Xb(66,"mat-slide-toggle",20),E.Oc(67),E.kc(68,"translate"),E.Wb(),E.Wb(),E.Xb(69,"div",3),E.Xb(70,"mat-slide-toggle",21),E.Oc(71),E.kc(72,"translate"),E.Wb(),E.Wb(),E.Wb(),E.Xb(73,"mat-dialog-content",2),E.Xb(74,"div",22),E.Xb(75,"button",23),E.Xb(76,"mat-icon"),E.Oc(77,"save"),E.Wb(),E.Oc(78),E.kc(79,"translate"),E.Wb(),E.Sb(80,"span",24),E.Xb(81,"button",25),E.fc("click",function(){return e.dialogRef.close(!1)}),E.Xb(82,"mat-icon"),E.Oc(83,"cancel"),E.Wb(),E.Oc(84),E.kc(85,"translate"),E.Wb(),E.Wb(),E.Wb(),E.Wb()),2&t&&(E.Eb(1),E.Pc(e.data.title),E.Eb(1),E.pc("formGroup",e.itemForm),E.Eb(4),E.qc("placeholder",E.lc(7,38,"CLIENTSPOPUPCOMPONENT.CODE")),E.pc("formControl",e.itemForm.controls.scodcliente),E.Eb(4),E.qc("placeholder",E.lc(11,40,"CLIENTSPOPUPCOMPONENT.BUSINESSNAME")),E.pc("formControl",e.itemForm.controls.srazonsocial),E.Eb(4),E.qc("placeholder",E.lc(15,42,"CLIENTSPOPUPCOMPONENT.ADDRESS")),E.pc("formControl",e.itemForm.controls.sdomicilio),E.Eb(4),E.qc("placeholder",E.lc(19,44,"CLIENTSPOPUPCOMPONENT.LOCATION")),E.pc("formControl",e.itemForm.controls.slocalidad),E.Eb(4),E.qc("placeholder",E.lc(23,46,"CLIENTSPOPUPCOMPONENT.PROVINCE")),E.pc("formControl",e.itemForm.controls.sprovincia),E.Eb(5),E.Pc(E.lc(28,48,"CLIENTSPOPUPCOMPONENT.VATCONDITION")),E.Eb(2),E.pc("formControl",e.itemForm.controls.scondicioniva),E.Eb(1),E.pc("ngForOf",e.condicionesDeIVA),E.Eb(3),E.qc("placeholder",E.lc(34,50,"CLIENTSPOPUPCOMPONENT.CUIT")),E.pc("formControl",e.itemForm.controls.scuit),E.Eb(4),E.qc("placeholder",E.lc(38,52,"CLIENTSPOPUPCOMPONENT.DOCUMENT")),E.pc("formControl",e.itemForm.controls.sdocumento),E.Eb(5),E.Pc(E.lc(43,54,"CLIENTSPOPUPCOMPONENT.CLIENTTYPE")),E.Eb(2),E.pc("formControl",e.itemForm.controls.idtipocliente),E.Eb(1),E.pc("ngForOf",e.data.tipoCliente),E.Eb(4),E.Pc(E.lc(50,56,"CLIENTSPOPUPCOMPONENT.PRICELIST")),E.Eb(2),E.pc("formControl",e.itemForm.controls.ilistadeprecios),E.Eb(1),E.pc("ngForOf",e.listasDePrecios),E.Eb(3),E.qc("placeholder",E.lc(56,58,"CLIENTSPOPUPCOMPONENT.DISCOUNTCAP")),E.pc("formControl",e.itemForm.controls.rtopedescuento),E.Eb(3),E.pc("formControl",e.itemForm.controls.bcredito),E.Eb(1),E.Qc(" ",E.lc(60,60,"CLIENTSPOPUPCOMPONENT.CREDIT"),""),E.Eb(4),E.qc("placeholder",E.lc(64,62,"CLIENTSPOPUPCOMPONENT.CREDITLIMIT")),E.pc("formControl",e.itemForm.controls.rlimitecredito),E.Eb(3),E.pc("formControl",e.itemForm.controls.bfavorito),E.Eb(1),E.Qc(" ",E.lc(68,64,"CLIENTSPOPUPCOMPONENT.FAVORITE"),""),E.Eb(3),E.pc("formControl",e.itemForm.controls.bactivo),E.Eb(1),E.Pc(E.lc(72,66,"CLIENTSPOPUPCOMPONENT.ACTIVE")),E.Eb(4),E.pc("disabled",e.itemForm.invalid),E.Eb(3),E.Pc(E.lc(79,68,"CLIENTSPOPUPCOMPONENT.SAVE")),E.Eb(6),E.Pc(E.lc(85,70,"CLIENTSPOPUPCOMPONENT.CANCEL")))},directives:[f.h,d.v,d.o,d.i,f.e,v.c,v.a,g.c,T.b,d.c,d.n,d.f,g.f,I.a,i.n,d.r,N.a,P.b,w.a,W.n],pipes:[X.c],styles:[""],data:{animation:[n.a]}}),t})();var M=o("CHRX"),L=o("zHaW"),R=o("PDjf"),A=o("w9WL"),F=o("iInd");function U(t,e){if(1&t){const t=E.Yb();E.Xb(0,"div",24),E.Xb(1,"button",25),E.fc("click",function(){return E.Dc(t),E.jc().openPopUp({},!0)}),E.Xb(2,"mat-icon"),E.Oc(3,"library_add"),E.Wb(),E.Oc(4),E.kc(5,"translate"),E.Wb(),E.Wb()}2&t&&(E.Eb(4),E.Pc(E.lc(5,1,"CLIENTSCOMPONENT.ADDCLIENT")))}function D(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",26),E.fc("click",function(e){E.Dc(t);const o=E.jc(),i=E.Ac(5);return o.updateFilter(e,null,null)&&(i.value="")}),E.Xb(1,"mat-icon"),E.Oc(2,"close"),E.Wb(),E.Wb()}}function j(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.scodcliente," ")}}function q(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.srazonsocial," ")}}function z(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.sdomicilio," ")}}function V(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.scuit," ")}}function Y(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.scondicioniva," ")}}function $(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row,o=E.jc();E.Qc(" ",o.getTipoCliente(null==t?null:t.idtipocliente)," ")}}function H(t,e){1&t&&(E.Xb(0,"span"),E.Oc(1,"Si"),E.Wb())}function Q(t,e){1&t&&(E.Xb(0,"span"),E.Oc(1,"No"),E.Wb())}function B(t,e){if(1&t&&(E.Mc(0,H,2,0,"span",27),E.Mc(1,Q,2,0,"span",27)),2&t){const t=e.row;E.pc("ngIf","T"==(null==t?null:t.bcredito)),E.Eb(1),E.pc("ngIf","F"==(null==t?null:t.bcredito))}}function G(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.rlimitecredito," ")}}function K(t,e){1&t&&(E.Xb(0,"span"),E.Oc(1,"Si"),E.Wb())}function _(t,e){1&t&&(E.Xb(0,"span"),E.Oc(1,"No"),E.Wb())}function J(t,e){if(1&t&&(E.Mc(0,K,2,0,"span",27),E.Mc(1,_,2,0,"span",27)),2&t){const t=e.row;E.pc("ngIf","T"==(null==t?null:t.bactivo)),E.Eb(1),E.pc("ngIf","F"==(null==t?null:t.bactivo))}}function Z(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",31),E.fc("click",function(){E.Dc(t);const e=E.jc().row;return E.jc().deleteItem(e)}),E.Xb(1,"mat-icon"),E.Oc(2,"delete"),E.Wb(),E.Wb()}}const tt=function(t){return[t]};function et(t,e){if(1&t&&(E.Xb(0,"button",32),E.Xb(1,"mat-icon"),E.Oc(2,"account_balance_wallet"),E.Wb(),E.Wb()),2&t){const t=E.jc().row;E.pc("routerLink",E.vc(1,tt,"/clients/checking-account-statement/"+t.id))}}function ot(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",28),E.fc("click",function(){E.Dc(t);const o=e.row;return E.jc().openPopUp(o)}),E.Xb(1,"mat-icon"),E.Oc(2,"edit"),E.Wb(),E.Wb(),E.Mc(3,Z,3,0,"button",29),E.Xb(4,"button",28),E.fc("click",function(){E.Dc(t);const o=e.row;return E.jc().openUserInfoPopUp(o)}),E.Xb(5,"mat-icon"),E.Oc(6,"person_pin"),E.Wb(),E.Wb(),E.Mc(7,et,3,3,"button",30)}if(2&t){const t=e.row,o=E.jc();E.Eb(3),E.pc("ngIf",o.puedeEliminar),E.Eb(4),E.pc("ngIf","T"==(null==t?null:t.bcredito)&&o.puedeVerExtracto)}}function it(t,e){if(1&t){const t=E.Yb();E.Xb(0,"div",33),E.Xb(1,"button",34),E.fc("click",function(){return E.Dc(t),E.jc().export()}),E.Xb(2,"mat-icon"),E.Oc(3,"save_alt"),E.Wb(),E.Oc(4),E.kc(5,"translate"),E.Wb(),E.Wb()}2&t&&(E.Eb(4),E.Pc(E.lc(5,1,"Excel")))}function nt(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",26),E.fc("click",function(e){E.Dc(t),E.jc();const o=E.Ac(2);return E.jc().updateFilter(e,"scodcliente",!0)&&(o.value="")}),E.Xb(1,"mat-icon"),E.Oc(2,"close"),E.Wb(),E.Wb()}}function ct(t,e){if(1&t){const t=E.Yb();E.Xb(0,"mat-form-field",1),E.Xb(1,"input",35,4),E.fc("keyup",function(e){return E.Dc(t),E.jc().updateFilter(e,"scodcliente",!0)}),E.Wb(),E.Mc(3,nt,3,0,"button",5),E.Wb()}if(2&t){const t=E.Ac(2);E.Eb(3),E.pc("ngIf",t.value)}}function at(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",26),E.fc("click",function(e){E.Dc(t),E.jc();const o=E.Ac(2);return E.jc().updateFilter(e,"srazonsocial",!1)&&(o.value="")}),E.Xb(1,"mat-icon"),E.Oc(2,"close"),E.Wb(),E.Wb()}}function rt(t,e){if(1&t){const t=E.Yb();E.Xb(0,"mat-form-field",1),E.Xb(1,"input",35,4),E.fc("keyup",function(e){return E.Dc(t),E.jc().updateFilter(e,"srazonsocial",!1)}),E.Wb(),E.Mc(3,at,3,0,"button",5),E.Wb()}if(2&t){const t=E.Ac(2);E.Eb(3),E.pc("ngIf",t.value)}}function lt(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",26),E.fc("click",function(e){E.Dc(t),E.jc();const o=E.Ac(2);return E.jc().updateFilter(e,"sdomicilio",!1)&&(o.value="")}),E.Xb(1,"mat-icon"),E.Oc(2,"close"),E.Wb(),E.Wb()}}function st(t,e){if(1&t){const t=E.Yb();E.Xb(0,"mat-form-field",1),E.Xb(1,"input",35,4),E.fc("keyup",function(e){return E.Dc(t),E.jc().updateFilter(e,"sdomicilio",!1)}),E.Wb(),E.Mc(3,lt,3,0,"button",5),E.Wb()}if(2&t){const t=E.Ac(2);E.Eb(3),E.pc("ngIf",t.value)}}function bt(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",26),E.fc("click",function(e){E.Dc(t),E.jc();const o=E.Ac(2);return E.jc().updateFilter(e,"scuit",!0)&&(o.value="")}),E.Xb(1,"mat-icon"),E.Oc(2,"close"),E.Wb(),E.Wb()}}function ut(t,e){if(1&t){const t=E.Yb();E.Xb(0,"mat-form-field",1),E.Xb(1,"input",35,4),E.fc("keyup",function(e){return E.Dc(t),E.jc().updateFilter(e,"scuit",!0)}),E.Wb(),E.Mc(3,bt,3,0,"button",5),E.Wb()}if(2&t){const t=E.Ac(2);E.Eb(3),E.pc("ngIf",t.value)}}const pt=function(){return{y:"50px",delay:"300ms"}},mt=function(t){return{value:"*",params:t}},dt=[{path:"",component:(()=>{class t{constructor(t,e,o,i,n,c,a,r){this.servicioClientes=t,this.dialog=e,this.snack=o,this.confirmService=i,this.loader=n,this.servicioUUID=c,this.servicioExportarExcel=a,this.servicioPermisos=r,this.fields={},this.timeOutDuration=800,this.rows=[],this.puedeAgregar=!1,this.puedeEliminar=!1,this.puedeExportar=!1,this.puedeVerExtracto=!1,this.order="srazonsocial ASC",this.search="",this.page={count:0,offset:0,limit:10},this.tipoCliente=[]}ngOnInit(){this.loader.open(),Object(l.a)(this.servicioPermisos.puedeAgregar("Clientes"),this.servicioPermisos.puedeEliminar("Clientes"),this.servicioPermisos.puedeVer("actExportarClientes"),this.servicioPermisos.puedeVer("actExtractoCliente")).pipe(Object(b.a)()).subscribe(t=>{this.puedeAgregar=t[0],this.puedeEliminar=t[1],this.puedeExportar=t[2],this.puedeVerExtracto=t[3]}),Object(s.a)([this.servicioClientes.obtenerTiposClientes(),this.servicioClientes.obtenerEmpresas()]).subscribe(t=>{this.tipoCliente=t[0],this.empresas=t[1][0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.prepararFiltro(),this.refresh()}getTipoCliente(t){var e=this.tipoCliente.find(e=>e.id==t);return e?e.stipocliente:""}convertirComoSi(t){return"T"==t?"Si":"No"}prepararFiltro(){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&t.forEach((t,e)=>{t.length>1&&(this.filter+=`{"or":[{"srazonsocial":{"ilike":"%${t}%"}}]}`,e<this.search.length-1&&(this.filter+=","))}),this.filter+=M.a.prepararFiltroAPI(this.fields),this.filter+='{"deletedon":{"eq":null}}]}'}refresh(){this.prepararFiltro(),Object(s.a)([this.servicioClientes.obtenerCount(this.filter),this.servicioClientes.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(t=>{this.page.count=t[0].count,this.rows=t[1],0==this.rows.length&&this.rows.push({})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(t){this.page.offset=t.offset,this.refresh()}updateFilter(t,e,o){if(t&&e){var i=t.target.value;t instanceof MouseEvent&&(i=""),this.fields[e]={search:i,exact:o}}else t&&(this.search=t instanceof MouseEvent?"":t.target.value);return clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(t){const e=t.sorts[0];this.order=`${e.prop} ${e.dir.toUpperCase()}`,this.refresh()}openPopUp(t={},e){this.dialog.open(y,{width:"720px",disableClose:!0,data:{title:e?"AGREGAR CLIENTE":"ACTUALIZAR CLIENTE",payload:t,tipoCliente:this.tipoCliente,empresas:this.empresas}}).afterClosed().subscribe(t=>{if(t){this.loader.open();var o={};Object.assign(o,t),o.bactivo=t.bactivo?"T":"F",o.bfavorito=t.bfavorito?"T":"F",o.bcredito=t.bcredito?"T":"F",e?(o.id=this.servicioUUID.generateUUID(),this.servicioClientes.agregarCliente(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Cliente Agregado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioClientes.actualizarCliente(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Cliente Actualizado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(t){this.confirmService.confirm({message:`\xbfEliminar ${t.sfamilia}?`}).subscribe(e=>{if(e){this.loader.open();var o={};Object.assign(o,t),delete o.soperadorcreacion,delete o.fcreacion,delete o.soperadormodificacion,delete o.fmodificacion,delete o.insertedon,delete o.updatedon,o.deletedon=(new Date).toISOString(),this.servicioClientes.actualizarCliente(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Cliente Eliminado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}export(){this.loader.open(),this.servicioClientes.traerClientes().subscribe(t=>{this.loader.close();var e=t.map(t=>{var e={};return e["*Codigo"]=t.scodcliente,e["*Raz\xf3n Social"]=t.srazonsocial,e["*Domicilio"]=t.sdomicilio,e.Localidad=t.slocalidad,e["*Condicion IVA"]=t.scondicioniva,e.CUIT=t.scuit,e["*Documento"]=t.sdocumento,e["Venta a Credito"]="T"==t.bcredito?"S":"N",e["Limite de Credito"]=t.rlimitecredito,e["Tope de Descuento"]=t.rtopedescuento,e});this.servicioExportarExcel.exportExcel(e,"Clientes","Clientes")})}openUserInfoPopUp(t={}){this.dialog.open(m.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(E.Rb(O),E.Rb(f.b),E.Rb(L.a),E.Rb(c.a),E.Rb(a.a),E.Rb(r.a),E.Rb(u.a),E.Rb(p.a))},t.\u0275cmp=E.Lb({type:t,selectors:[["app-clients"]],decls:50,vars:67,consts:[["class","m-333",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],["summaryRow","true",1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","scodcliente",3,"summaryTemplate","name","width"],["ngx-datatable-cell-template",""],["prop","srazonsocial",3,"summaryTemplate","name","width"],["prop","sdomicilio",3,"summaryTemplate","name","width"],["prop","scuit",3,"summaryTemplate","name","width"],["prop","scondicioniva",3,"name","width"],["prop","idtipocliente",3,"name","width"],["prop","bcredito",3,"name","width"],["prop","rlimitecredito",3,"summaryFunc","name","width"],["prop","bactivo",3,"name","width"],[3,"sortable","name","width"],["class","p-8","align","right",4,"ngIf"],["tabla1scodcliente",""],["tabla1srazonsocial",""],["tabla1sdomicilio",""],["tabla1scuit",""],[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"routerLink",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"routerLink"],["align","right",1,"p-8"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(E.Mc(0,U,6,3,"div",0),E.Xb(1,"mat-form-field",1),E.Xb(2,"mat-icon",2),E.Oc(3,"search"),E.Wb(),E.Xb(4,"input",3,4),E.fc("keyup",function(t){return e.updateFilter(t,null,null)}),E.kc(6,"translate"),E.Wb(),E.Mc(7,D,3,0,"button",5),E.Wb(),E.Xb(8,"mat-card",6),E.Xb(9,"mat-card-content",6),E.Xb(10,"ngx-datatable",7),E.fc("page",function(t){return e.pageCallback(t)})("sort",function(t){return e.onSort(t)}),E.Xb(11,"ngx-datatable-column",8),E.kc(12,"translate"),E.Mc(13,j,1,1,"ng-template",9),E.Wb(),E.Xb(14,"ngx-datatable-column",10),E.kc(15,"translate"),E.Mc(16,q,1,1,"ng-template",9),E.Wb(),E.Xb(17,"ngx-datatable-column",11),E.kc(18,"translate"),E.Mc(19,z,1,1,"ng-template",9),E.Wb(),E.Xb(20,"ngx-datatable-column",12),E.kc(21,"translate"),E.Mc(22,V,1,1,"ng-template",9),E.Wb(),E.Xb(23,"ngx-datatable-column",13),E.kc(24,"translate"),E.Mc(25,Y,1,1,"ng-template",9),E.Wb(),E.Xb(26,"ngx-datatable-column",14),E.kc(27,"translate"),E.Mc(28,$,1,1,"ng-template",9),E.Wb(),E.Xb(29,"ngx-datatable-column",15),E.kc(30,"translate"),E.Mc(31,B,2,2,"ng-template",9),E.Wb(),E.Xb(32,"ngx-datatable-column",16),E.kc(33,"translate"),E.Mc(34,G,1,1,"ng-template",9),E.Wb(),E.Xb(35,"ngx-datatable-column",17),E.kc(36,"translate"),E.Mc(37,J,2,2,"ng-template",9),E.Wb(),E.Xb(38,"ngx-datatable-column",18),E.kc(39,"translate"),E.Mc(40,ot,8,2,"ng-template",9),E.Wb(),E.Wb(),E.Mc(41,it,6,3,"div",19),E.Wb(),E.Wb(),E.Mc(42,ct,4,1,"ng-template",null,20,E.Nc),E.Mc(44,rt,4,1,"ng-template",null,21,E.Nc),E.Mc(46,st,4,1,"ng-template",null,22,E.Nc),E.Mc(48,ut,4,1,"ng-template",null,23,E.Nc)),2&t){const t=E.Ac(5),o=E.Ac(43),i=E.Ac(45),n=E.Ac(47),c=E.Ac(49);E.pc("ngIf",e.puedeAgregar),E.Eb(4),E.qc("placeholder",E.lc(6,42,"CLIENTSCOMPONENT.FILTER")),E.Eb(3),E.pc("ngIf",t.value),E.Eb(1),E.pc("@animate",E.vc(65,mt,E.uc(64,pt))),E.Eb(2),E.pc("rows",e.rows)("columnMode","standard")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),E.Eb(1),E.qc("name",E.lc(12,44,"CLIENTSCOMPONENT.CODE")),E.pc("summaryTemplate",o)("width",150),E.Eb(3),E.qc("name",E.lc(15,46,"CLIENTSCOMPONENT.BUSINESSNAME")),E.pc("summaryTemplate",i)("width",325),E.Eb(3),E.qc("name",E.lc(18,48,"CLIENTSCOMPONENT.ADDRESS")),E.pc("summaryTemplate",n)("width",325),E.Eb(3),E.qc("name",E.lc(21,50,"CLIENTSCOMPONENT.CUIT")),E.pc("summaryTemplate",c)("width",150),E.Eb(3),E.qc("name",E.lc(24,52,"CLIENTSCOMPONENT.FISCALCONDITION")),E.pc("width",200),E.Eb(3),E.qc("name",E.lc(27,54,"CLIENTSCOMPONENT.CLIENTTYPE")),E.pc("width",150),E.Eb(3),E.qc("name",E.lc(30,56,"CLIENTSCOMPONENT.CREDIT")),E.pc("width",150),E.Eb(3),E.qc("name",E.lc(33,58,"CLIENTSCOMPONENT.CREDITLIMIT")),E.pc("summaryFunc",null)("width",150),E.Eb(3),E.qc("name",E.lc(36,60,"CLIENTSCOMPONENT.ACTIVE")),E.pc("width",150),E.Eb(3),E.qc("name",E.lc(39,62,"CLIENTSCOMPONENT.ACTIONS")),E.pc("sortable",!1)("width",200),E.Eb(3),E.pc("ngIf",e.puedeExportar)}},directives:[i.o,g.c,w.a,g.g,T.b,R.a,R.b,A.d,A.b,A.a,P.b,g.h,F.h],pipes:[X.c],styles:[""],data:{animation:[n.a]}}),t})(),data:{title:"CLIENTES"}}];var ft=o("u9T3"),ht=o("f44v"),Et=o("ZFy/"),Ct=o("M9ds"),Ot=o("PCNd"),vt=o("BxcV");let gt=(()=>{class t{}return t.\u0275mod=E.Pb({type:t}),t.\u0275inj=E.Ob({factory:function(e){return new(e||t)},providers:[O],imports:[[i.c,d.s,ft.a,A.f,T.c,T.c,R.c,T.c,P.c,ht.a,T.c,Et.b,f.f,L.b,N.b,Ct.c,I.b,w.b,X.b,Ot.a,vt.a,F.k.forChild(dt)]]}),t})()},bPAe:function(t,e,o){"use strict";o.d(e,"a",function(){return a});var i=o("Iab2"),n=o("EUZL"),c=o("8Y7J");let a=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,o){const i=n.utils.json_to_sheet(t),c=n.write({Sheets:{[o]:i},SheetNames:[o]},{bookType:"xlsx",type:"array"});this.saveExcelFile(c,e)}saveExcelFile(t,e){const o=new Blob([t],{type:this.fileType});i.saveAs(o,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},vpPe:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var i=o("8Y7J");let n=(()=>{class t{constructor(){}generateUUID(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var o=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?o:3&o|8).toString(16)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);