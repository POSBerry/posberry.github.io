(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{KDqB:function(t,e,o){"use strict";o.r(e),o.d(e,"ClientsModule",function(){return kt});var i=o("SVse"),c=o("GmJt"),n=o("3kSh"),a=o("3sEA"),r=o("vpPe"),l=o("GyhO"),s=o("cp0P"),b=o("IAdc"),m=o("bPAe"),u=o("7M/S"),p=o("Ap+n"),d=o("s7LF"),f=o("iELJ"),h=o("8iJF"),C=o("8Y7J"),g=o("VDRc"),E=o("Q2Ze"),O=o("e6WT"),v=o("ZTz/"),I=o("jMqV"),T=o("Dxy4"),X=o("Tj54"),N=o("UhP/"),P=o("TSSN");function W(t,e){if(1&t&&(C.Xb(0,"mat-option",27),C.Oc(1),C.Wb()),2&t){const t=e.$implicit;C.pc("value",t),C.Eb(1),C.Qc(" ",t," ")}}function M(t,e){if(1&t){const t=C.Yb();C.Xb(0,"button",28),C.fc("click",function(){return C.Dc(t),C.jc().autocompletarPorCUIT()}),C.Xb(1,"mat-icon"),C.Oc(2,"exit_to_app"),C.Wb(),C.Wb()}}function x(t,e){if(1&t&&(C.Xb(0,"mat-option",27),C.Oc(1),C.Wb()),2&t){const t=e.$implicit;C.pc("value",t.id),C.Eb(1),C.Qc(" ",t.stipocliente," ")}}function S(t,e){if(1&t&&(C.Xb(0,"mat-option",27),C.Oc(1),C.Wb()),2&t){const t=e.$implicit;C.pc("value",t),C.Eb(1),C.Qc(" ",t," ")}}let k=(()=>{class t{constructor(t,e,o,i){this.data=t,this.dialogRef=e,this.fb=o,this.servicioClientes=i,this.condicionesDeIVA=["Responsable Inscripto","Consumidor Final","Eventual","Excento","Monotributista"],this.servicioClientes.obtenerTiposClientes().subscribe(t=>{this.tiposDeClientes=t}),this.listasDePrecios=[1,2,3,4,5,6,7]}mostrarAutocompletar(t){this.mostrarBoton=this.esCUITValida(t)}autocompletarPorCUIT(){console.log(this.itemForm);var t=this.itemForm.value.scuit;this.esCUITValida(t.replace(/-/g,""))?fetch("https://afip.tangofactura.com/Rest/GetContribuyenteFull?cuit="+t).then(t=>t.json()).then(t=>{t.errorGetData?alert("Error al traer los datos."):(this.itemForm.value.srazonsocial=t.Contribuyente.nombre,this.itemForm.value.sdomicilio=t.Contribuyente.domicilioFiscal.direccion,this.itemForm.value.slocalidad=t.Contribuyente.domicilioFiscal.localidad,t.Contribuyente.EsConsumidorFinal?this.itemForm.value.scondicioniva="Consumidor Final":t.Contribuyente.EsExento?this.itemForm.value.scondicioniva="Exento":t.Contribuyente.EsMonotributo?this.itemForm.value.scondicioniva="Monotributista":t.Contribuyente.EsRI&&(this.itemForm.value.scondicioniva="Responsable Inscripto"),this.itemForm.controls.srazonsocial.setValue(this.itemForm.value.srazonsocial),this.itemForm.controls.sdomicilio.setValue(this.itemForm.value.sdomicilio),this.itemForm.controls.slocalidad.setValue(this.itemForm.value.slocalidad),this.itemForm.controls.scondicioniva.setValue(this.itemForm.value.scondicioniva))}):alert("La CUIT ingresada no es v\xe1lida.")}esCUITValida(t){if(11==t.length){var e=t.charAt(0)+t.charAt(1);if("20"==e||"23"==e||"24"==e||"27"==e||"30"==e||"33"==e||"34"==e){var o=(5*t.charAt(0)+4*t.charAt(1)+3*t.charAt(2)+2*t.charAt(3)+7*t.charAt(4)+6*t.charAt(5)+5*t.charAt(6)+4*t.charAt(7)+3*t.charAt(8)+2*t.charAt(9)+1*t.charAt(10))/11;if(o==Math.floor(o))return!0}}return!1}ngOnInit(){this.buildItemForm(this.data.payload),this.mostrarBoton=this.esCUITValida(this.itemForm.value.scuit),this.servicioClientes.obtenerIdMasAlto().subscribe(t=>{this.idNuevo=this.incrementString(t[0].max),""==this.itemForm.controls.scodcliente.value&&this.itemForm.controls.scodcliente.setValue(this.idNuevo)})}incrementString(t){var e=/(\d)*$/.exec(t)[0],o=e.length,i=(parseInt(e)+1).toString().padStart(o,"0");return t.substring(0,t.length-o)+i}buildItemForm(t){var e=this.data.tipoCliente.find(t=>"GENERAL"==t.stipocliente);e||(e=this.data.tipoCliente[0]),this.listasDePrecios=this.listasDePrecios.slice(0),this.itemForm=this.fb.group({id:[t.id||""],scodcliente:[t.scodcliente||"",d.v.required],srazonsocial:[t.srazonsocial||"",d.v.required],sdomicilio:[t.sdomicilio||"Domicilio",d.v.required],slocalidad:[t.slocalidad||""],sprovincia:[t.sprovincia||""],scondicioniva:[t.scondicioniva||"Responsable Inscripto"],scuit:[t.scuit||""],sdocumento:[t.sdocumento||""],idtipocliente:[t.idtipocliente||e.id,d.v.required],bcredito:["T"==t.bcredito||!0],ilistadeprecios:[t.ilistadeprecios||1],rlimitecredito:[t.rlimitecredito||0],rtopedescuento:[t.rtopedescuento||0],bfavorito:["T"==t.bfavorito||!1],bactivo:[!t.hasOwnProperty("bactivo")||"T"==t.bactivo]})}submit(){this.dialogRef.close(this.itemForm.value)}}return t.\u0275fac=function(e){return new(e||t)(C.Rb(f.a),C.Rb(f.g),C.Rb(d.d),C.Rb(h.a))},t.\u0275cmp=C.Lb({type:t,selectors:[["app-clients-popup"]],decls:98,vars:73,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","scodcliente",3,"formControl"],["matInput","","name","srazonsocial",3,"formControl"],["matInput","","name","sdomicilio",3,"formControl"],["matInput","","name","slocalidad",3,"formControl","placeholder"],["matInput","","name","sprovincia",3,"formControl","placeholder"],["appearance","fill"],["name","scondicioniva",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","scuit",3,"formControl","placeholder","ngModelChange"],["matSuffix","","mat-button","","color","primary","type","button",3,"click",4,"ngIf"],["matInput","","name","sdocumento",3,"formControl","placeholder"],["name","idtipocliente",3,"formControl"],["name","ilistadeprecios",3,"formControl"],["matInput","","type","number","min","0","max","100","name","rtopedescuento",3,"formControl","placeholder"],["name","bcredito",3,"formControl"],["matInput","","type","number","name","rlimitecredito",3,"formControl","placeholder"],["name","bfavorito",3,"formControl"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"],["matSuffix","","mat-button","","color","primary","type","button",3,"click"]],template:function(t,e){1&t&&(C.Xb(0,"h1",0),C.Oc(1),C.Wb(),C.Xb(2,"form",1),C.fc("ngSubmit",function(){return e.submit()}),C.Xb(3,"mat-dialog-content",2),C.Xb(4,"div",3),C.Xb(5,"mat-form-field",4),C.Xb(6,"mat-label"),C.Xb(7,"strong"),C.Oc(8),C.kc(9,"translate"),C.Wb(),C.Wb(),C.Sb(10,"input",5),C.Wb(),C.Wb(),C.Xb(11,"div",3),C.Xb(12,"mat-form-field",4),C.Xb(13,"mat-label"),C.Xb(14,"strong"),C.Oc(15),C.kc(16,"translate"),C.Wb(),C.Wb(),C.Sb(17,"input",6),C.Wb(),C.Wb(),C.Xb(18,"div",3),C.Xb(19,"mat-form-field",4),C.Xb(20,"mat-label"),C.Xb(21,"strong"),C.Oc(22),C.kc(23,"translate"),C.Wb(),C.Wb(),C.Sb(24,"input",7),C.Wb(),C.Wb(),C.Xb(25,"div",3),C.Xb(26,"mat-form-field",4),C.Sb(27,"input",8),C.kc(28,"translate"),C.Wb(),C.Wb(),C.Xb(29,"div",3),C.Xb(30,"mat-form-field",4),C.Sb(31,"input",9),C.kc(32,"translate"),C.Wb(),C.Wb(),C.Xb(33,"div",3),C.Xb(34,"mat-form-field",10),C.Xb(35,"mat-label"),C.Xb(36,"strong"),C.Oc(37),C.kc(38,"translate"),C.Wb(),C.Wb(),C.Xb(39,"mat-select",11),C.Mc(40,W,2,2,"mat-option",12),C.Wb(),C.Wb(),C.Wb(),C.Xb(41,"div",3),C.Xb(42,"mat-form-field",4),C.Xb(43,"input",13),C.fc("ngModelChange",function(t){return e.mostrarAutocompletar(t)}),C.kc(44,"translate"),C.Wb(),C.Mc(45,M,3,0,"button",14),C.Wb(),C.Wb(),C.Xb(46,"div",3),C.Xb(47,"mat-form-field",4),C.Sb(48,"input",15),C.kc(49,"translate"),C.Wb(),C.Wb(),C.Xb(50,"div",3),C.Xb(51,"mat-form-field",10),C.Xb(52,"mat-label"),C.Xb(53,"strong"),C.Oc(54),C.kc(55,"translate"),C.Wb(),C.Wb(),C.Xb(56,"mat-select",16),C.Mc(57,x,2,2,"mat-option",12),C.Wb(),C.Wb(),C.Wb(),C.Xb(58,"div",3),C.Xb(59,"mat-form-field",10),C.Xb(60,"mat-label"),C.Oc(61),C.kc(62,"translate"),C.Wb(),C.Xb(63,"mat-select",17),C.Mc(64,S,2,2,"mat-option",12),C.Wb(),C.Wb(),C.Wb(),C.Xb(65,"div",3),C.Xb(66,"mat-form-field",4),C.Sb(67,"input",18),C.kc(68,"translate"),C.Wb(),C.Wb(),C.Xb(69,"div",3),C.Xb(70,"mat-slide-toggle",19),C.Oc(71),C.kc(72,"translate"),C.Wb(),C.Wb(),C.Xb(73,"div",3),C.Xb(74,"mat-form-field",4),C.Sb(75,"input",20),C.kc(76,"translate"),C.Wb(),C.Wb(),C.Xb(77,"div",3),C.Xb(78,"mat-slide-toggle",21),C.Oc(79),C.kc(80,"translate"),C.Wb(),C.Wb(),C.Xb(81,"div",3),C.Xb(82,"mat-slide-toggle",22),C.Oc(83),C.kc(84,"translate"),C.Wb(),C.Wb(),C.Wb(),C.Xb(85,"mat-dialog-content",2),C.Xb(86,"div",23),C.Xb(87,"button",24),C.Xb(88,"mat-icon"),C.Oc(89,"save"),C.Wb(),C.Oc(90),C.kc(91,"translate"),C.Wb(),C.Sb(92,"span",25),C.Xb(93,"button",26),C.fc("click",function(){return e.dialogRef.close(!1)}),C.Xb(94,"mat-icon"),C.Oc(95,"cancel"),C.Wb(),C.Oc(96),C.kc(97,"translate"),C.Wb(),C.Wb(),C.Wb(),C.Wb()),2&t&&(C.Eb(1),C.Pc(e.data.title),C.Eb(1),C.pc("formGroup",e.itemForm),C.Eb(6),C.Qc("*",C.lc(9,39,"CLIENTSPOPUPCOMPONENT.CODE"),""),C.Eb(2),C.pc("formControl",e.itemForm.controls.scodcliente),C.Eb(5),C.Qc("*",C.lc(16,41,"CLIENTSPOPUPCOMPONENT.BUSINESSNAME"),""),C.Eb(2),C.pc("formControl",e.itemForm.controls.srazonsocial),C.Eb(5),C.Qc("*",C.lc(23,43,"CLIENTSPOPUPCOMPONENT.ADDRESS"),""),C.Eb(2),C.pc("formControl",e.itemForm.controls.sdomicilio),C.Eb(3),C.qc("placeholder",C.lc(28,45,"CLIENTSPOPUPCOMPONENT.LOCATION")),C.pc("formControl",e.itemForm.controls.slocalidad),C.Eb(4),C.qc("placeholder",C.lc(32,47,"CLIENTSPOPUPCOMPONENT.PROVINCE")),C.pc("formControl",e.itemForm.controls.sprovincia),C.Eb(6),C.Qc("*",C.lc(38,49,"CLIENTSPOPUPCOMPONENT.VATCONDITION"),""),C.Eb(2),C.pc("formControl",e.itemForm.controls.scondicioniva),C.Eb(1),C.pc("ngForOf",e.condicionesDeIVA),C.Eb(3),C.qc("placeholder",C.lc(44,51,"CLIENTSPOPUPCOMPONENT.CUIT")),C.pc("formControl",e.itemForm.controls.scuit),C.Eb(2),C.pc("ngIf",e.mostrarBoton),C.Eb(3),C.qc("placeholder",C.lc(49,53,"CLIENTSPOPUPCOMPONENT.DOCUMENT")),C.pc("formControl",e.itemForm.controls.sdocumento),C.Eb(6),C.Qc("*",C.lc(55,55,"CLIENTSPOPUPCOMPONENT.CLIENTTYPE"),""),C.Eb(2),C.pc("formControl",e.itemForm.controls.idtipocliente),C.Eb(1),C.pc("ngForOf",e.data.tipoCliente),C.Eb(4),C.Pc(C.lc(62,57,"CLIENTSPOPUPCOMPONENT.PRICELIST")),C.Eb(2),C.pc("formControl",e.itemForm.controls.ilistadeprecios),C.Eb(1),C.pc("ngForOf",e.listasDePrecios),C.Eb(3),C.qc("placeholder",C.lc(68,59,"CLIENTSPOPUPCOMPONENT.DISCOUNTCAP")),C.pc("formControl",e.itemForm.controls.rtopedescuento),C.Eb(3),C.pc("formControl",e.itemForm.controls.bcredito),C.Eb(1),C.Qc(" ",C.lc(72,61,"CLIENTSPOPUPCOMPONENT.CREDIT"),""),C.Eb(4),C.qc("placeholder",C.lc(76,63,"CLIENTSPOPUPCOMPONENT.CREDITLIMIT")),C.pc("formControl",e.itemForm.controls.rlimitecredito),C.Eb(3),C.pc("formControl",e.itemForm.controls.bfavorito),C.Eb(1),C.Qc(" ",C.lc(80,65,"CLIENTSPOPUPCOMPONENT.FAVORITE"),""),C.Eb(3),C.pc("formControl",e.itemForm.controls.bactivo),C.Eb(1),C.Pc(C.lc(84,67,"CLIENTSPOPUPCOMPONENT.ACTIVE")),C.Eb(4),C.pc("disabled",e.itemForm.invalid),C.Eb(3),C.Pc(C.lc(91,69,"CLIENTSPOPUPCOMPONENT.SAVE")),C.Eb(6),C.Pc(C.lc(97,71,"CLIENTSPOPUPCOMPONENT.CANCEL")))},directives:[f.h,d.w,d.p,d.i,f.e,g.c,g.a,E.c,E.f,O.b,d.c,d.o,d.f,v.a,i.n,i.o,d.s,I.a,T.b,X.a,N.n,E.h],pipes:[P.c],styles:[""],data:{animation:[c.a]}}),t})();var F=o("CHRX"),w=o("HeVh"),L=o("zHaW"),A=o("PDjf"),y=o("w9WL"),D=o("iInd");function R(t,e){if(1&t){const t=C.Yb();C.Xb(0,"div",23),C.Xb(1,"button",24),C.fc("click",function(){return C.Dc(t),C.jc().openPopUp({},!0)}),C.Xb(2,"mat-icon"),C.Oc(3,"library_add"),C.Wb(),C.Oc(4),C.kc(5,"translate"),C.Wb(),C.Wb()}2&t&&(C.Eb(4),C.Pc(C.lc(5,1,"CLIENTSCOMPONENT.ADDCLIENT")))}function U(t,e){if(1&t){const t=C.Yb();C.Xb(0,"button",25),C.fc("click",function(e){C.Dc(t);const o=C.jc(),i=C.Ac(5);return o.updateFilter(e,null,null)&&(i.value="")}),C.Xb(1,"mat-icon"),C.Oc(2,"close"),C.Wb(),C.Wb()}}function G(t,e){if(1&t&&C.Oc(0),2&t){const t=e.row;C.Qc(" ",null==t?null:t.scodcliente," ")}}function j(t,e){if(1&t&&(C.Xb(0,"ngx-datatable-column",26),C.kc(1,"translate"),C.Mc(2,G,1,1,"ng-template",27),C.Wb()),2&t){C.jc();const t=C.Ac(23);C.qc("name",C.lc(1,3,"CLIENTSCOMPONENT.CODE")),C.pc("summaryTemplate",t)("flexGrow",.7)}}function V(t,e){if(1&t&&C.Oc(0),2&t){const t=e.row;C.Qc(" ",null==t?null:t.srazonsocial," ")}}function q(t,e){if(1&t&&(C.Xb(0,"ngx-datatable-column",28),C.kc(1,"translate"),C.Mc(2,V,1,1,"ng-template",27),C.Wb()),2&t){C.jc();const t=C.Ac(25);C.qc("name",C.lc(1,3,"CLIENTSCOMPONENT.BUSINESSNAME")),C.pc("summaryTemplate",t)("flexGrow",1)}}function z(t,e){if(1&t&&C.Oc(0),2&t){const t=e.row;C.Qc(" ",null==t?null:t.sdomicilio," ")}}function Q(t,e){if(1&t&&(C.Xb(0,"ngx-datatable-column",29),C.kc(1,"translate"),C.Mc(2,z,1,1,"ng-template",27),C.Wb()),2&t){C.jc();const t=C.Ac(27);C.qc("name",C.lc(1,3,"CLIENTSCOMPONENT.ADDRESS")),C.pc("summaryTemplate",t)("flexGrow",1)}}function Y(t,e){if(1&t&&C.Oc(0),2&t){const t=e.row;C.Qc(" ",null==t?null:t.scuit," ")}}function H(t,e){if(1&t&&(C.Xb(0,"ngx-datatable-column",30),C.kc(1,"translate"),C.Mc(2,Y,1,1,"ng-template",27),C.Wb()),2&t){C.jc();const t=C.Ac(29);C.qc("name",C.lc(1,3,"CLIENTSCOMPONENT.CUIT")),C.pc("summaryTemplate",t)("flexGrow",1)}}function K(t,e){if(1&t&&C.Oc(0),2&t){const t=e.row;C.Qc(" ",null==t?null:t.scondicioniva," ")}}function $(t,e){1&t&&(C.Xb(0,"ngx-datatable-column",31),C.kc(1,"translate"),C.Mc(2,K,1,1,"ng-template",27),C.Wb()),2&t&&(C.qc("name",C.lc(1,2,"CLIENTSCOMPONENT.FISCALCONDITION")),C.pc("flexGrow",1))}function B(t,e){if(1&t&&C.Oc(0),2&t){const t=e.row,o=C.jc(2);C.Qc(" ",o.getTipoCliente(null==t?null:t.idtipocliente)," ")}}function _(t,e){1&t&&(C.Xb(0,"ngx-datatable-column",32),C.kc(1,"translate"),C.Mc(2,B,1,1,"ng-template",27),C.Wb()),2&t&&(C.qc("name",C.lc(1,2,"CLIENTSCOMPONENT.CLIENTTYPE")),C.pc("flexGrow",1))}function J(t,e){1&t&&(C.Xb(0,"span"),C.Oc(1,"Si"),C.Wb())}function Z(t,e){1&t&&(C.Xb(0,"span"),C.Oc(1,"No"),C.Wb())}function tt(t,e){if(1&t&&(C.Mc(0,J,2,0,"span",34),C.Mc(1,Z,2,0,"span",34)),2&t){const t=e.row;C.pc("ngIf","T"==(null==t?null:t.bcredito)),C.Eb(1),C.pc("ngIf","F"==(null==t?null:t.bcredito))}}function et(t,e){1&t&&(C.Xb(0,"ngx-datatable-column",33),C.kc(1,"translate"),C.Mc(2,tt,2,2,"ng-template",27),C.Wb()),2&t&&(C.qc("name",C.lc(1,2,"CLIENTSCOMPONENT.CREDIT")),C.pc("flexGrow",1))}function ot(t,e){if(1&t&&C.Oc(0),2&t){const t=e.row;C.Qc(" ",null==t?null:t.rlimitecredito," ")}}function it(t,e){1&t&&(C.Xb(0,"ngx-datatable-column",35),C.kc(1,"translate"),C.Mc(2,ot,1,1,"ng-template",27),C.Wb()),2&t&&(C.qc("name",C.lc(1,3,"CLIENTSCOMPONENT.CREDITLIMIT")),C.pc("summaryFunc",null)("flexGrow",1))}function ct(t,e){1&t&&(C.Xb(0,"span"),C.Oc(1,"Si"),C.Wb())}function nt(t,e){1&t&&(C.Xb(0,"span"),C.Oc(1,"No"),C.Wb())}function at(t,e){if(1&t&&(C.Mc(0,ct,2,0,"span",34),C.Mc(1,nt,2,0,"span",34)),2&t){const t=e.row;C.pc("ngIf","T"==(null==t?null:t.bactivo)),C.Eb(1),C.pc("ngIf","F"==(null==t?null:t.bactivo))}}function rt(t,e){1&t&&(C.Xb(0,"ngx-datatable-column",36),C.kc(1,"translate"),C.Mc(2,at,2,2,"ng-template",27),C.Wb()),2&t&&(C.qc("name",C.lc(1,2,"CLIENTSCOMPONENT.ACTIVE")),C.pc("flexGrow",1))}function lt(t,e){if(1&t){const t=C.Yb();C.Xb(0,"button",41),C.fc("click",function(){C.Dc(t);const e=C.jc().row;return C.jc(2).deleteItem(e)}),C.Xb(1,"mat-icon"),C.Oc(2,"delete"),C.Wb(),C.Wb()}}const st=function(t){return[t]};function bt(t,e){if(1&t&&(C.Xb(0,"button",42),C.Xb(1,"mat-icon"),C.Oc(2,"account_balance_wallet"),C.Wb(),C.Wb()),2&t){const t=C.jc().row;C.pc("routerLink",C.vc(1,st,"/clients/checking-account-statement/"+t.id))}}function mt(t,e){if(1&t){const t=C.Yb();C.Xb(0,"button",38),C.fc("click",function(){C.Dc(t);const o=e.row;return C.jc(2).openPopUp(o)}),C.Xb(1,"mat-icon"),C.Oc(2,"edit"),C.Wb(),C.Wb(),C.Mc(3,lt,3,0,"button",39),C.Xb(4,"button",38),C.fc("click",function(){C.Dc(t);const o=e.row;return C.jc(2).openUserInfoPopUp(o)}),C.Xb(5,"mat-icon"),C.Oc(6,"person_pin"),C.Wb(),C.Wb(),C.Mc(7,bt,3,3,"button",40)}if(2&t){const t=e.row,o=C.jc(2);C.Eb(3),C.pc("ngIf",o.puedeEliminar),C.Eb(4),C.pc("ngIf","T"==(null==t?null:t.bcredito)&&o.puedeVerExtracto)}}function ut(t,e){1&t&&(C.Xb(0,"ngx-datatable-column",37),C.kc(1,"translate"),C.Mc(2,mt,8,2,"ng-template",27),C.Wb()),2&t&&(C.qc("name",C.lc(1,4,"CLIENTSCOMPONENT.ACTIONS")),C.pc("minWidth",200)("sortable",!1)("flexGrow",1))}function pt(t,e){if(1&t){const t=C.Yb();C.Xb(0,"div",43),C.Xb(1,"button",44),C.fc("click",function(){return C.Dc(t),C.jc().export()}),C.Xb(2,"mat-icon"),C.Oc(3,"save_alt"),C.Wb(),C.Oc(4),C.kc(5,"translate"),C.Wb(),C.Wb()}2&t&&(C.Eb(4),C.Pc(C.lc(5,1,"Excel")))}function dt(t,e){if(1&t){const t=C.Yb();C.Xb(0,"button",25),C.fc("click",function(e){C.Dc(t),C.jc();const o=C.Ac(2);return C.jc().updateFilter(e,"scodcliente",!0)&&(o.value="")}),C.Xb(1,"mat-icon"),C.Oc(2,"close"),C.Wb(),C.Wb()}}function ft(t,e){if(1&t){const t=C.Yb();C.Xb(0,"mat-form-field",1),C.Xb(1,"input",45,4),C.fc("keyup",function(e){return C.Dc(t),C.jc().updateFilter(e,"scodcliente",!0)}),C.Wb(),C.Mc(3,dt,3,0,"button",5),C.Wb()}if(2&t){const t=C.Ac(2);C.Eb(3),C.pc("ngIf",t.value)}}function ht(t,e){if(1&t){const t=C.Yb();C.Xb(0,"button",25),C.fc("click",function(e){C.Dc(t),C.jc();const o=C.Ac(2);return C.jc().updateFilter(e,"srazonsocial",!1)&&(o.value="")}),C.Xb(1,"mat-icon"),C.Oc(2,"close"),C.Wb(),C.Wb()}}function Ct(t,e){if(1&t){const t=C.Yb();C.Xb(0,"mat-form-field",1),C.Xb(1,"input",45,4),C.fc("keyup",function(e){return C.Dc(t),C.jc().updateFilter(e,"srazonsocial",!1)}),C.Wb(),C.Mc(3,ht,3,0,"button",5),C.Wb()}if(2&t){const t=C.Ac(2);C.Eb(3),C.pc("ngIf",t.value)}}function gt(t,e){if(1&t){const t=C.Yb();C.Xb(0,"button",25),C.fc("click",function(e){C.Dc(t),C.jc();const o=C.Ac(2);return C.jc().updateFilter(e,"sdomicilio",!1)&&(o.value="")}),C.Xb(1,"mat-icon"),C.Oc(2,"close"),C.Wb(),C.Wb()}}function Et(t,e){if(1&t){const t=C.Yb();C.Xb(0,"mat-form-field",1),C.Xb(1,"input",45,4),C.fc("keyup",function(e){return C.Dc(t),C.jc().updateFilter(e,"sdomicilio",!1)}),C.Wb(),C.Mc(3,gt,3,0,"button",5),C.Wb()}if(2&t){const t=C.Ac(2);C.Eb(3),C.pc("ngIf",t.value)}}function Ot(t,e){if(1&t){const t=C.Yb();C.Xb(0,"button",25),C.fc("click",function(e){C.Dc(t),C.jc();const o=C.Ac(2);return C.jc().updateFilter(e,"scuit",!0)&&(o.value="")}),C.Xb(1,"mat-icon"),C.Oc(2,"close"),C.Wb(),C.Wb()}}function vt(t,e){if(1&t){const t=C.Yb();C.Xb(0,"mat-form-field",1),C.Xb(1,"input",45,4),C.fc("keyup",function(e){return C.Dc(t),C.jc().updateFilter(e,"scuit",!0)}),C.Wb(),C.Mc(3,Ot,3,0,"button",5),C.Wb()}if(2&t){const t=C.Ac(2);C.Eb(3),C.pc("ngIf",t.value)}}const It=function(){return{y:"50px",delay:"300ms"}},Tt=function(t){return{value:"*",params:t}},Xt=[{path:"",component:(()=>{class t{constructor(t,e,o,i,c,n,a,r,l){this.servicioClientes=t,this.dialog=e,this.snack=o,this.confirmService=i,this.loader=c,this.servicioUUID=n,this.servicioExportarExcel=a,this.servicioPermisos=r,this.breakpointObserver=l,this.fields={},this.timeOutDuration=800,this.rows=[],this.puedeAgregar=!1,this.puedeEliminar=!1,this.puedeExportar=!1,this.puedeVerExtracto=!1,this.order="srazonsocial ASC",this.search="",this.page={count:0,offset:0,limit:10},this.tipoCliente=[]}ngOnInit(){this.breakpointObserver.observe([w.b.XSmall,w.b.Small,w.b.Medium,w.b.Large,w.b.XLarge]).subscribe(t=>{this.isXSmall=this.breakpointObserver.isMatched(w.b.XSmall),this.isSmall=this.breakpointObserver.isMatched(w.b.Small),this.isMedium=this.breakpointObserver.isMatched(w.b.Medium),this.isLarge=this.breakpointObserver.isMatched(w.b.Large),this.isXLarge=this.breakpointObserver.isMatched(w.b.XLarge)}),this.loader.open(),Object(l.a)(this.servicioPermisos.puedeAgregar("Clientes"),this.servicioPermisos.puedeEliminar("Clientes"),this.servicioPermisos.puedeVer("actExportarClientes"),this.servicioPermisos.puedeVer("actExtractoCliente")).pipe(Object(b.a)()).subscribe(t=>{this.puedeAgregar=t[0],this.puedeEliminar=t[1],this.puedeExportar=t[2],this.puedeVerExtracto=t[3]}),Object(s.a)([this.servicioClientes.obtenerTiposClientes(),this.servicioClientes.obtenerEmpresas()]).subscribe(t=>{this.tipoCliente=t[0],this.empresas=t[1][0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.prepararFiltro(),this.refresh()}mostrarOcultar(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}getTipoCliente(t){var e=this.tipoCliente.find(e=>e.id==t);return e?e.stipocliente:""}convertirComoSi(t){return"T"==t?"Si":"No"}prepararFiltro(){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&t.forEach((t,e)=>{t.length>1&&(this.filter+=`{"or":[{"srazonsocial":{"ilike":"%${t}%"}}]}`,e<this.search.length-1&&(this.filter+=","))}),this.filter+=F.a.prepararFiltroAPI(this.fields),this.filter+='{"deletedon":{"eq":null}}]}'}refresh(){this.prepararFiltro(),Object(s.a)([this.servicioClientes.obtenerCount(this.filter),this.servicioClientes.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(t=>{this.page.count=t[0].count,this.rows=t[1],0==this.rows.length&&this.rows.push({})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(t){this.page.offset=t.offset,this.refresh()}updateFilter(t,e,o){if(t&&e){var i=t.target.value;t instanceof MouseEvent&&(i=""),this.fields[e]={search:i,exact:o}}else t&&(this.search=t instanceof MouseEvent?"":t.target.value);return clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(t){const e=t.sorts[0];this.order=`${e.prop} ${e.dir.toUpperCase()}`,this.refresh()}openPopUp(t={},e){this.dialog.open(k,{width:"720px",disableClose:!0,data:{title:e?"AGREGAR CLIENTE":"ACTUALIZAR CLIENTE",payload:t,tipoCliente:this.tipoCliente,empresas:this.empresas}}).afterClosed().subscribe(t=>{if(t){this.loader.open();var o={};Object.assign(o,t),o.bactivo=t.bactivo?"T":"F",o.bfavorito=t.bfavorito?"T":"F",o.bcredito=t.bcredito?"T":"F",e?(o.id=this.servicioUUID.generateUUID(),this.servicioClientes.agregarCliente(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Cliente Agregado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioClientes.actualizarCliente(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Cliente Actualizado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(t){this.confirmService.confirm({message:`\xbfEliminar ${t.sfamilia}?`}).subscribe(e=>{if(e){this.loader.open();var o={};Object.assign(o,t),delete o.soperadorcreacion,delete o.fcreacion,delete o.soperadormodificacion,delete o.fmodificacion,delete o.insertedon,delete o.updatedon,o.deletedon=(new Date).toISOString(),this.servicioClientes.actualizarCliente(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Cliente Eliminado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}export(){this.loader.open(),this.servicioClientes.traerClientes().subscribe(t=>{this.loader.close();var e=t.map(t=>{var e={};return e["*Codigo"]=t.scodcliente,e["*Raz\xf3n Social"]=t.srazonsocial,e["*Domicilio"]=t.sdomicilio,e.Localidad=t.slocalidad,e["*Condicion IVA"]=t.scondicioniva,e.CUIT=t.scuit,e["*Documento"]=t.sdocumento,e["Venta a Credito"]="T"==t.bcredito?"S":"N",e["Limite de Credito"]=t.rlimitecredito,e["Tope de Descuento"]=t.rtopedescuento,e});this.servicioExportarExcel.exportExcel(e,"Clientes","Clientes")})}openUserInfoPopUp(t={}){this.dialog.open(p.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(C.Rb(h.a),C.Rb(f.b),C.Rb(L.a),C.Rb(n.a),C.Rb(a.a),C.Rb(r.a),C.Rb(m.a),C.Rb(u.a),C.Rb(w.a))},t.\u0275cmp=C.Lb({type:t,selectors:[["app-clients"]],decls:30,vars:31,consts:[["class","m-333",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],["summaryRow","true",1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","scodcliente",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","srazonsocial",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sdomicilio",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","scuit",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","scondicioniva",3,"name","flexGrow",4,"ngIf"],["prop","idtipocliente",3,"name","flexGrow",4,"ngIf"],["prop","bcredito",3,"name","flexGrow",4,"ngIf"],["prop","rlimitecredito",3,"summaryFunc","name","flexGrow",4,"ngIf"],["prop","bactivo",3,"name","flexGrow",4,"ngIf"],[3,"minWidth","sortable","name","flexGrow",4,"ngIf"],["class","p-8","align","right",4,"ngIf"],["tabla1scodcliente",""],["tabla1srazonsocial",""],["tabla1sdomicilio",""],["tabla1scuit",""],[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["prop","scodcliente",3,"summaryTemplate","name","flexGrow"],["ngx-datatable-cell-template",""],["prop","srazonsocial",3,"summaryTemplate","name","flexGrow"],["prop","sdomicilio",3,"summaryTemplate","name","flexGrow"],["prop","scuit",3,"summaryTemplate","name","flexGrow"],["prop","scondicioniva",3,"name","flexGrow"],["prop","idtipocliente",3,"name","flexGrow"],["prop","bcredito",3,"name","flexGrow"],[4,"ngIf"],["prop","rlimitecredito",3,"summaryFunc","name","flexGrow"],["prop","bactivo",3,"name","flexGrow"],[3,"minWidth","sortable","name","flexGrow"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"routerLink",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"routerLink"],["align","right",1,"p-8"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(C.Mc(0,R,6,3,"div",0),C.Xb(1,"mat-form-field",1),C.Xb(2,"mat-icon",2),C.Oc(3,"search"),C.Wb(),C.Xb(4,"input",3,4),C.fc("keyup",function(t){return e.updateFilter(t,null,null)}),C.kc(6,"translate"),C.Wb(),C.Mc(7,U,3,0,"button",5),C.Wb(),C.Xb(8,"mat-card",6),C.Xb(9,"mat-card-content",6),C.Xb(10,"ngx-datatable",7),C.fc("page",function(t){return e.pageCallback(t)})("sort",function(t){return e.onSort(t)}),C.Mc(11,j,3,5,"ngx-datatable-column",8),C.Mc(12,q,3,5,"ngx-datatable-column",9),C.Mc(13,Q,3,5,"ngx-datatable-column",10),C.Mc(14,H,3,5,"ngx-datatable-column",11),C.Mc(15,$,3,4,"ngx-datatable-column",12),C.Mc(16,_,3,4,"ngx-datatable-column",13),C.Mc(17,et,3,4,"ngx-datatable-column",14),C.Mc(18,it,3,5,"ngx-datatable-column",15),C.Mc(19,rt,3,4,"ngx-datatable-column",16),C.Mc(20,ut,3,6,"ngx-datatable-column",17),C.Wb(),C.Mc(21,pt,6,3,"div",18),C.Wb(),C.Wb(),C.Mc(22,ft,4,1,"ng-template",null,19,C.Nc),C.Mc(24,Ct,4,1,"ng-template",null,20,C.Nc),C.Mc(26,Et,4,1,"ng-template",null,21,C.Nc),C.Mc(28,vt,4,1,"ng-template",null,22,C.Nc)),2&t){const t=C.Ac(5);C.pc("ngIf",e.puedeAgregar),C.Eb(4),C.qc("placeholder",C.lc(6,26,"CLIENTSCOMPONENT.FILTER")),C.Eb(3),C.pc("ngIf",t.value),C.Eb(1),C.pc("@animate",C.vc(29,Tt,C.uc(28,It))),C.Eb(2),C.pc("rows",e.rows)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight","auto")("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),C.Eb(1),C.pc("ngIf",e.mostrarOcultar("S")),C.Eb(1),C.pc("ngIf",e.mostrarOcultar("XS")),C.Eb(1),C.pc("ngIf",e.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",e.mostrarOcultar("S")),C.Eb(1),C.pc("ngIf",e.mostrarOcultar("S")),C.Eb(1),C.pc("ngIf",e.mostrarOcultar("XL")),C.Eb(1),C.pc("ngIf",e.mostrarOcultar("XL")),C.Eb(1),C.pc("ngIf",e.mostrarOcultar("XL")),C.Eb(1),C.pc("ngIf",e.mostrarOcultar("L")),C.Eb(1),C.pc("ngIf",e.mostrarOcultar("XS")),C.Eb(1),C.pc("ngIf",e.puedeExportar)}},directives:[i.o,E.c,X.a,E.g,O.b,A.a,A.b,y.d,T.b,E.h,y.b,y.a,D.h],pipes:[P.c],styles:[""],data:{animation:[c.a]}}),t})(),data:{title:"CLIENTES"}}];var Nt=o("u9T3"),Pt=o("f44v"),Wt=o("ZFy/"),Mt=o("M9ds"),xt=o("PCNd"),St=o("BxcV");let kt=(()=>{class t{}return t.\u0275mod=C.Pb({type:t}),t.\u0275inj=C.Ob({factory:function(e){return new(e||t)},providers:[h.a],imports:[[i.c,d.t,Nt.a,y.f,O.c,O.c,A.c,O.c,T.c,Pt.a,O.c,Wt.b,f.f,L.b,I.b,Mt.c,v.b,X.b,P.b,xt.a,St.a,D.k.forChild(Xt)]]}),t})()}}]);