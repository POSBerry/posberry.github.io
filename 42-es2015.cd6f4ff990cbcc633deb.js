(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{KDqB:function(t,e,o){"use strict";o.r(e),o.d(e,"ClientsModule",function(){return St});var i=o("SVse"),c=o("GmJt"),n=o("3kSh"),a=o("3sEA"),r=o("vpPe"),l=o("GyhO"),s=o("cp0P"),b=o("IAdc"),m=o("bPAe"),u=o("7M/S"),p=o("Ap+n"),f=o("s7LF"),d=o("iELJ"),h=o("8iJF"),E=o("8Y7J"),O=o("VDRc"),C=o("Q2Ze"),g=o("e6WT"),I=o("ZTz/"),v=o("jMqV"),T=o("Dxy4"),N=o("Tj54"),P=o("UhP/"),X=o("TSSN");function W(t,e){if(1&t&&(E.Xb(0,"mat-option",26),E.Oc(1),E.Wb()),2&t){const t=e.$implicit;E.pc("value",t),E.Eb(1),E.Qc(" ",t," ")}}function M(t,e){if(1&t&&(E.Xb(0,"mat-option",26),E.Oc(1),E.Wb()),2&t){const t=e.$implicit;E.pc("value",t.id),E.Eb(1),E.Qc(" ",t.stipocliente," ")}}function x(t,e){if(1&t&&(E.Xb(0,"mat-option",26),E.Oc(1),E.Wb()),2&t){const t=e.$implicit;E.pc("value",t),E.Eb(1),E.Qc(" ",t," ")}}let S=(()=>{class t{constructor(t,e,o,i){this.data=t,this.dialogRef=e,this.fb=o,this.servicioClientes=i,this.condicionesDeIVA=["Responsable Inscripto","Consumidor Final","Eventual","Excento","Monotributista"],this.servicioClientes.obtenerTiposClientes().subscribe(t=>{this.tiposDeClientes=t}),this.listasDePrecios=[1,2,3,4,5,6,7]}ngOnInit(){this.buildItemForm(this.data.payload)}buildItemForm(t){var e=this.data.tipoCliente.find(t=>"GENERAL"==t.stipocliente);e||(e=this.data.tipoCliente[0]),this.listasDePrecios=this.listasDePrecios.slice(0),this.itemForm=this.fb.group({id:[t.id||""],scodcliente:[t.scodcliente||"",f.v.required],srazonsocial:[t.srazonsocial||"",f.v.required],sdomicilio:[t.sdomicilio||"",f.v.required],slocalidad:[t.slocalidad||""],sprovincia:[t.sprovincia||""],scondicioniva:[t.scondicioniva||"Consumidor Final"],scuit:[t.scuit||""],sdocumento:[t.sdocumento||""],idtipocliente:[t.idtipocliente||e.id,f.v.required],bcredito:["T"==t.bcredito||!1],ilistadeprecios:[t.ilistadeprecios||1],rlimitecredito:[t.rlimitecredito||0],rtopedescuento:[t.rtopedescuento||0],bfavorito:["T"==t.bfavorito||!1],bactivo:[!t.hasOwnProperty("bactivo")||"T"==t.bactivo]})}submit(){this.dialogRef.close(this.itemForm.value)}}return t.\u0275fac=function(e){return new(e||t)(E.Rb(d.a),E.Rb(d.g),E.Rb(f.d),E.Rb(h.a))},t.\u0275cmp=E.Lb({type:t,selectors:[["app-clients-popup"]],decls:86,vars:72,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","scodcliente",3,"formControl","placeholder"],["matInput","","name","srazonsocial",3,"formControl","placeholder"],["matInput","","name","sdomicilio",3,"formControl","placeholder"],["matInput","","name","slocalidad",3,"formControl","placeholder"],["matInput","","name","sprovincia",3,"formControl","placeholder"],["appearance","fill"],["name","scondicioniva",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","scuit",3,"formControl","placeholder"],["matInput","","name","sdocumento",3,"formControl","placeholder"],["name","idtipocliente",3,"formControl"],["name","ilistadeprecios",3,"formControl"],["matInput","","type","number","min","0","max","100","name","rtopedescuento",3,"formControl","placeholder"],["name","bcredito",3,"formControl"],["matInput","","type","number","name","rlimitecredito",3,"formControl","placeholder"],["name","bfavorito",3,"formControl"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(t,e){1&t&&(E.Xb(0,"h1",0),E.Oc(1),E.Wb(),E.Xb(2,"form",1),E.fc("ngSubmit",function(){return e.submit()}),E.Xb(3,"mat-dialog-content",2),E.Xb(4,"div",3),E.Xb(5,"mat-form-field",4),E.Sb(6,"input",5),E.kc(7,"translate"),E.Wb(),E.Wb(),E.Xb(8,"div",3),E.Xb(9,"mat-form-field",4),E.Sb(10,"input",6),E.kc(11,"translate"),E.Wb(),E.Wb(),E.Xb(12,"div",3),E.Xb(13,"mat-form-field",4),E.Sb(14,"input",7),E.kc(15,"translate"),E.Wb(),E.Wb(),E.Xb(16,"div",3),E.Xb(17,"mat-form-field",4),E.Sb(18,"input",8),E.kc(19,"translate"),E.Wb(),E.Wb(),E.Xb(20,"div",3),E.Xb(21,"mat-form-field",4),E.Sb(22,"input",9),E.kc(23,"translate"),E.Wb(),E.Wb(),E.Xb(24,"div",3),E.Xb(25,"mat-form-field",10),E.Xb(26,"mat-label"),E.Oc(27),E.kc(28,"translate"),E.Wb(),E.Xb(29,"mat-select",11),E.Mc(30,W,2,2,"mat-option",12),E.Wb(),E.Wb(),E.Wb(),E.Xb(31,"div",3),E.Xb(32,"mat-form-field",4),E.Sb(33,"input",13),E.kc(34,"translate"),E.Wb(),E.Wb(),E.Xb(35,"div",3),E.Xb(36,"mat-form-field",4),E.Sb(37,"input",14),E.kc(38,"translate"),E.Wb(),E.Wb(),E.Xb(39,"div",3),E.Xb(40,"mat-form-field",10),E.Xb(41,"mat-label"),E.Oc(42),E.kc(43,"translate"),E.Wb(),E.Xb(44,"mat-select",15),E.Mc(45,M,2,2,"mat-option",12),E.Wb(),E.Wb(),E.Wb(),E.Xb(46,"div",3),E.Xb(47,"mat-form-field",10),E.Xb(48,"mat-label"),E.Oc(49),E.kc(50,"translate"),E.Wb(),E.Xb(51,"mat-select",16),E.Mc(52,x,2,2,"mat-option",12),E.Wb(),E.Wb(),E.Wb(),E.Xb(53,"div",3),E.Xb(54,"mat-form-field",4),E.Sb(55,"input",17),E.kc(56,"translate"),E.Wb(),E.Wb(),E.Xb(57,"div",3),E.Xb(58,"mat-slide-toggle",18),E.Oc(59),E.kc(60,"translate"),E.Wb(),E.Wb(),E.Xb(61,"div",3),E.Xb(62,"mat-form-field",4),E.Sb(63,"input",19),E.kc(64,"translate"),E.Wb(),E.Wb(),E.Xb(65,"div",3),E.Xb(66,"mat-slide-toggle",20),E.Oc(67),E.kc(68,"translate"),E.Wb(),E.Wb(),E.Xb(69,"div",3),E.Xb(70,"mat-slide-toggle",21),E.Oc(71),E.kc(72,"translate"),E.Wb(),E.Wb(),E.Wb(),E.Xb(73,"mat-dialog-content",2),E.Xb(74,"div",22),E.Xb(75,"button",23),E.Xb(76,"mat-icon"),E.Oc(77,"save"),E.Wb(),E.Oc(78),E.kc(79,"translate"),E.Wb(),E.Sb(80,"span",24),E.Xb(81,"button",25),E.fc("click",function(){return e.dialogRef.close(!1)}),E.Xb(82,"mat-icon"),E.Oc(83,"cancel"),E.Wb(),E.Oc(84),E.kc(85,"translate"),E.Wb(),E.Wb(),E.Wb(),E.Wb()),2&t&&(E.Eb(1),E.Pc(e.data.title),E.Eb(1),E.pc("formGroup",e.itemForm),E.Eb(4),E.qc("placeholder",E.lc(7,38,"CLIENTSPOPUPCOMPONENT.CODE")),E.pc("formControl",e.itemForm.controls.scodcliente),E.Eb(4),E.qc("placeholder",E.lc(11,40,"CLIENTSPOPUPCOMPONENT.BUSINESSNAME")),E.pc("formControl",e.itemForm.controls.srazonsocial),E.Eb(4),E.qc("placeholder",E.lc(15,42,"CLIENTSPOPUPCOMPONENT.ADDRESS")),E.pc("formControl",e.itemForm.controls.sdomicilio),E.Eb(4),E.qc("placeholder",E.lc(19,44,"CLIENTSPOPUPCOMPONENT.LOCATION")),E.pc("formControl",e.itemForm.controls.slocalidad),E.Eb(4),E.qc("placeholder",E.lc(23,46,"CLIENTSPOPUPCOMPONENT.PROVINCE")),E.pc("formControl",e.itemForm.controls.sprovincia),E.Eb(5),E.Pc(E.lc(28,48,"CLIENTSPOPUPCOMPONENT.VATCONDITION")),E.Eb(2),E.pc("formControl",e.itemForm.controls.scondicioniva),E.Eb(1),E.pc("ngForOf",e.condicionesDeIVA),E.Eb(3),E.qc("placeholder",E.lc(34,50,"CLIENTSPOPUPCOMPONENT.CUIT")),E.pc("formControl",e.itemForm.controls.scuit),E.Eb(4),E.qc("placeholder",E.lc(38,52,"CLIENTSPOPUPCOMPONENT.DOCUMENT")),E.pc("formControl",e.itemForm.controls.sdocumento),E.Eb(5),E.Pc(E.lc(43,54,"CLIENTSPOPUPCOMPONENT.CLIENTTYPE")),E.Eb(2),E.pc("formControl",e.itemForm.controls.idtipocliente),E.Eb(1),E.pc("ngForOf",e.data.tipoCliente),E.Eb(4),E.Pc(E.lc(50,56,"CLIENTSPOPUPCOMPONENT.PRICELIST")),E.Eb(2),E.pc("formControl",e.itemForm.controls.ilistadeprecios),E.Eb(1),E.pc("ngForOf",e.listasDePrecios),E.Eb(3),E.qc("placeholder",E.lc(56,58,"CLIENTSPOPUPCOMPONENT.DISCOUNTCAP")),E.pc("formControl",e.itemForm.controls.rtopedescuento),E.Eb(3),E.pc("formControl",e.itemForm.controls.bcredito),E.Eb(1),E.Qc(" ",E.lc(60,60,"CLIENTSPOPUPCOMPONENT.CREDIT"),""),E.Eb(4),E.qc("placeholder",E.lc(64,62,"CLIENTSPOPUPCOMPONENT.CREDITLIMIT")),E.pc("formControl",e.itemForm.controls.rlimitecredito),E.Eb(3),E.pc("formControl",e.itemForm.controls.bfavorito),E.Eb(1),E.Qc(" ",E.lc(68,64,"CLIENTSPOPUPCOMPONENT.FAVORITE"),""),E.Eb(3),E.pc("formControl",e.itemForm.controls.bactivo),E.Eb(1),E.Pc(E.lc(72,66,"CLIENTSPOPUPCOMPONENT.ACTIVE")),E.Eb(4),E.pc("disabled",e.itemForm.invalid),E.Eb(3),E.Pc(E.lc(79,68,"CLIENTSPOPUPCOMPONENT.SAVE")),E.Eb(6),E.Pc(E.lc(85,70,"CLIENTSPOPUPCOMPONENT.CANCEL")))},directives:[d.h,f.w,f.p,f.i,d.e,O.c,O.a,C.c,g.b,f.c,f.o,f.f,C.f,I.a,i.n,f.s,v.a,T.b,N.a,P.n],pipes:[X.c],styles:[""],data:{animation:[c.a]}}),t})();var k=o("CHRX"),w=o("HeVh"),L=o("zHaW"),F=o("PDjf"),D=o("w9WL"),A=o("iInd");function R(t,e){if(1&t){const t=E.Yb();E.Xb(0,"div",23),E.Xb(1,"button",24),E.fc("click",function(){return E.Dc(t),E.jc().openPopUp({},!0)}),E.Xb(2,"mat-icon"),E.Oc(3,"library_add"),E.Wb(),E.Oc(4),E.kc(5,"translate"),E.Wb(),E.Wb()}2&t&&(E.Eb(4),E.Pc(E.lc(5,1,"CLIENTSCOMPONENT.ADDCLIENT")))}function y(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",25),E.fc("click",function(e){E.Dc(t);const o=E.jc(),i=E.Ac(5);return o.updateFilter(e,null,null)&&(i.value="")}),E.Xb(1,"mat-icon"),E.Oc(2,"close"),E.Wb(),E.Wb()}}function U(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.scodcliente," ")}}function G(t,e){if(1&t&&(E.Xb(0,"ngx-datatable-column",26),E.kc(1,"translate"),E.Mc(2,U,1,1,"ng-template",27),E.Wb()),2&t){E.jc();const t=E.Ac(23);E.qc("name",E.lc(1,3,"CLIENTSCOMPONENT.CODE")),E.pc("summaryTemplate",t)("flexGrow",.7)}}function j(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.srazonsocial," ")}}function q(t,e){if(1&t&&(E.Xb(0,"ngx-datatable-column",28),E.kc(1,"translate"),E.Mc(2,j,1,1,"ng-template",27),E.Wb()),2&t){E.jc();const t=E.Ac(25);E.qc("name",E.lc(1,3,"CLIENTSCOMPONENT.BUSINESSNAME")),E.pc("summaryTemplate",t)("flexGrow",1)}}function V(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.sdomicilio," ")}}function z(t,e){if(1&t&&(E.Xb(0,"ngx-datatable-column",29),E.kc(1,"translate"),E.Mc(2,V,1,1,"ng-template",27),E.Wb()),2&t){E.jc();const t=E.Ac(27);E.qc("name",E.lc(1,3,"CLIENTSCOMPONENT.ADDRESS")),E.pc("summaryTemplate",t)("flexGrow",1)}}function Y(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.scuit," ")}}function Q(t,e){if(1&t&&(E.Xb(0,"ngx-datatable-column",30),E.kc(1,"translate"),E.Mc(2,Y,1,1,"ng-template",27),E.Wb()),2&t){E.jc();const t=E.Ac(29);E.qc("name",E.lc(1,3,"CLIENTSCOMPONENT.CUIT")),E.pc("summaryTemplate",t)("flexGrow",1)}}function H(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.scondicioniva," ")}}function K(t,e){1&t&&(E.Xb(0,"ngx-datatable-column",31),E.kc(1,"translate"),E.Mc(2,H,1,1,"ng-template",27),E.Wb()),2&t&&(E.qc("name",E.lc(1,2,"CLIENTSCOMPONENT.FISCALCONDITION")),E.pc("flexGrow",1))}function $(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row,o=E.jc(2);E.Qc(" ",o.getTipoCliente(null==t?null:t.idtipocliente)," ")}}function J(t,e){1&t&&(E.Xb(0,"ngx-datatable-column",32),E.kc(1,"translate"),E.Mc(2,$,1,1,"ng-template",27),E.Wb()),2&t&&(E.qc("name",E.lc(1,2,"CLIENTSCOMPONENT.CLIENTTYPE")),E.pc("flexGrow",1))}function _(t,e){1&t&&(E.Xb(0,"span"),E.Oc(1,"Si"),E.Wb())}function B(t,e){1&t&&(E.Xb(0,"span"),E.Oc(1,"No"),E.Wb())}function Z(t,e){if(1&t&&(E.Mc(0,_,2,0,"span",34),E.Mc(1,B,2,0,"span",34)),2&t){const t=e.row;E.pc("ngIf","T"==(null==t?null:t.bcredito)),E.Eb(1),E.pc("ngIf","F"==(null==t?null:t.bcredito))}}function tt(t,e){1&t&&(E.Xb(0,"ngx-datatable-column",33),E.kc(1,"translate"),E.Mc(2,Z,2,2,"ng-template",27),E.Wb()),2&t&&(E.qc("name",E.lc(1,2,"CLIENTSCOMPONENT.CREDIT")),E.pc("flexGrow",1))}function et(t,e){if(1&t&&E.Oc(0),2&t){const t=e.row;E.Qc(" ",null==t?null:t.rlimitecredito," ")}}function ot(t,e){1&t&&(E.Xb(0,"ngx-datatable-column",35),E.kc(1,"translate"),E.Mc(2,et,1,1,"ng-template",27),E.Wb()),2&t&&(E.qc("name",E.lc(1,3,"CLIENTSCOMPONENT.CREDITLIMIT")),E.pc("summaryFunc",null)("flexGrow",1))}function it(t,e){1&t&&(E.Xb(0,"span"),E.Oc(1,"Si"),E.Wb())}function ct(t,e){1&t&&(E.Xb(0,"span"),E.Oc(1,"No"),E.Wb())}function nt(t,e){if(1&t&&(E.Mc(0,it,2,0,"span",34),E.Mc(1,ct,2,0,"span",34)),2&t){const t=e.row;E.pc("ngIf","T"==(null==t?null:t.bactivo)),E.Eb(1),E.pc("ngIf","F"==(null==t?null:t.bactivo))}}function at(t,e){1&t&&(E.Xb(0,"ngx-datatable-column",36),E.kc(1,"translate"),E.Mc(2,nt,2,2,"ng-template",27),E.Wb()),2&t&&(E.qc("name",E.lc(1,2,"CLIENTSCOMPONENT.ACTIVE")),E.pc("flexGrow",1))}function rt(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",41),E.fc("click",function(){E.Dc(t);const e=E.jc().row;return E.jc(2).deleteItem(e)}),E.Xb(1,"mat-icon"),E.Oc(2,"delete"),E.Wb(),E.Wb()}}const lt=function(t){return[t]};function st(t,e){if(1&t&&(E.Xb(0,"button",42),E.Xb(1,"mat-icon"),E.Oc(2,"account_balance_wallet"),E.Wb(),E.Wb()),2&t){const t=E.jc().row;E.pc("routerLink",E.vc(1,lt,"/clients/checking-account-statement/"+t.id))}}function bt(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",38),E.fc("click",function(){E.Dc(t);const o=e.row;return E.jc(2).openPopUp(o)}),E.Xb(1,"mat-icon"),E.Oc(2,"edit"),E.Wb(),E.Wb(),E.Mc(3,rt,3,0,"button",39),E.Xb(4,"button",38),E.fc("click",function(){E.Dc(t);const o=e.row;return E.jc(2).openUserInfoPopUp(o)}),E.Xb(5,"mat-icon"),E.Oc(6,"person_pin"),E.Wb(),E.Wb(),E.Mc(7,st,3,3,"button",40)}if(2&t){const t=e.row,o=E.jc(2);E.Eb(3),E.pc("ngIf",o.puedeEliminar),E.Eb(4),E.pc("ngIf","T"==(null==t?null:t.bcredito)&&o.puedeVerExtracto)}}function mt(t,e){1&t&&(E.Xb(0,"ngx-datatable-column",37),E.kc(1,"translate"),E.Mc(2,bt,8,2,"ng-template",27),E.Wb()),2&t&&(E.qc("name",E.lc(1,4,"CLIENTSCOMPONENT.ACTIONS")),E.pc("minWidth",200)("sortable",!1)("flexGrow",1))}function ut(t,e){if(1&t){const t=E.Yb();E.Xb(0,"div",43),E.Xb(1,"button",44),E.fc("click",function(){return E.Dc(t),E.jc().export()}),E.Xb(2,"mat-icon"),E.Oc(3,"save_alt"),E.Wb(),E.Oc(4),E.kc(5,"translate"),E.Wb(),E.Wb()}2&t&&(E.Eb(4),E.Pc(E.lc(5,1,"Excel")))}function pt(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",25),E.fc("click",function(e){E.Dc(t),E.jc();const o=E.Ac(2);return E.jc().updateFilter(e,"scodcliente",!0)&&(o.value="")}),E.Xb(1,"mat-icon"),E.Oc(2,"close"),E.Wb(),E.Wb()}}function ft(t,e){if(1&t){const t=E.Yb();E.Xb(0,"mat-form-field",1),E.Xb(1,"input",45,4),E.fc("keyup",function(e){return E.Dc(t),E.jc().updateFilter(e,"scodcliente",!0)}),E.Wb(),E.Mc(3,pt,3,0,"button",5),E.Wb()}if(2&t){const t=E.Ac(2);E.Eb(3),E.pc("ngIf",t.value)}}function dt(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",25),E.fc("click",function(e){E.Dc(t),E.jc();const o=E.Ac(2);return E.jc().updateFilter(e,"srazonsocial",!1)&&(o.value="")}),E.Xb(1,"mat-icon"),E.Oc(2,"close"),E.Wb(),E.Wb()}}function ht(t,e){if(1&t){const t=E.Yb();E.Xb(0,"mat-form-field",1),E.Xb(1,"input",45,4),E.fc("keyup",function(e){return E.Dc(t),E.jc().updateFilter(e,"srazonsocial",!1)}),E.Wb(),E.Mc(3,dt,3,0,"button",5),E.Wb()}if(2&t){const t=E.Ac(2);E.Eb(3),E.pc("ngIf",t.value)}}function Et(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",25),E.fc("click",function(e){E.Dc(t),E.jc();const o=E.Ac(2);return E.jc().updateFilter(e,"sdomicilio",!1)&&(o.value="")}),E.Xb(1,"mat-icon"),E.Oc(2,"close"),E.Wb(),E.Wb()}}function Ot(t,e){if(1&t){const t=E.Yb();E.Xb(0,"mat-form-field",1),E.Xb(1,"input",45,4),E.fc("keyup",function(e){return E.Dc(t),E.jc().updateFilter(e,"sdomicilio",!1)}),E.Wb(),E.Mc(3,Et,3,0,"button",5),E.Wb()}if(2&t){const t=E.Ac(2);E.Eb(3),E.pc("ngIf",t.value)}}function Ct(t,e){if(1&t){const t=E.Yb();E.Xb(0,"button",25),E.fc("click",function(e){E.Dc(t),E.jc();const o=E.Ac(2);return E.jc().updateFilter(e,"scuit",!0)&&(o.value="")}),E.Xb(1,"mat-icon"),E.Oc(2,"close"),E.Wb(),E.Wb()}}function gt(t,e){if(1&t){const t=E.Yb();E.Xb(0,"mat-form-field",1),E.Xb(1,"input",45,4),E.fc("keyup",function(e){return E.Dc(t),E.jc().updateFilter(e,"scuit",!0)}),E.Wb(),E.Mc(3,Ct,3,0,"button",5),E.Wb()}if(2&t){const t=E.Ac(2);E.Eb(3),E.pc("ngIf",t.value)}}const It=function(){return{y:"50px",delay:"300ms"}},vt=function(t){return{value:"*",params:t}},Tt=[{path:"",component:(()=>{class t{constructor(t,e,o,i,c,n,a,r,l){this.servicioClientes=t,this.dialog=e,this.snack=o,this.confirmService=i,this.loader=c,this.servicioUUID=n,this.servicioExportarExcel=a,this.servicioPermisos=r,this.breakpointObserver=l,this.fields={},this.timeOutDuration=800,this.rows=[],this.puedeAgregar=!1,this.puedeEliminar=!1,this.puedeExportar=!1,this.puedeVerExtracto=!1,this.order="srazonsocial ASC",this.search="",this.page={count:0,offset:0,limit:10},this.tipoCliente=[]}ngOnInit(){this.breakpointObserver.observe([w.b.XSmall,w.b.Small,w.b.Medium,w.b.Large,w.b.XLarge]).subscribe(t=>{this.isXSmall=this.breakpointObserver.isMatched(w.b.XSmall),this.isSmall=this.breakpointObserver.isMatched(w.b.Small),this.isMedium=this.breakpointObserver.isMatched(w.b.Medium),this.isLarge=this.breakpointObserver.isMatched(w.b.Large),this.isXLarge=this.breakpointObserver.isMatched(w.b.XLarge)}),this.loader.open(),Object(l.a)(this.servicioPermisos.puedeAgregar("Clientes"),this.servicioPermisos.puedeEliminar("Clientes"),this.servicioPermisos.puedeVer("actExportarClientes"),this.servicioPermisos.puedeVer("actExtractoCliente")).pipe(Object(b.a)()).subscribe(t=>{this.puedeAgregar=t[0],this.puedeEliminar=t[1],this.puedeExportar=t[2],this.puedeVerExtracto=t[3]}),Object(s.a)([this.servicioClientes.obtenerTiposClientes(),this.servicioClientes.obtenerEmpresas()]).subscribe(t=>{this.tipoCliente=t[0],this.empresas=t[1][0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.prepararFiltro(),this.refresh()}mostrarOcultar(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}getTipoCliente(t){var e=this.tipoCliente.find(e=>e.id==t);return e?e.stipocliente:""}convertirComoSi(t){return"T"==t?"Si":"No"}prepararFiltro(){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&t.forEach((t,e)=>{t.length>1&&(this.filter+=`{"or":[{"srazonsocial":{"ilike":"%${t}%"}}]}`,e<this.search.length-1&&(this.filter+=","))}),this.filter+=k.a.prepararFiltroAPI(this.fields),this.filter+='{"deletedon":{"eq":null}}]}'}refresh(){this.prepararFiltro(),Object(s.a)([this.servicioClientes.obtenerCount(this.filter),this.servicioClientes.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(t=>{this.page.count=t[0].count,this.rows=t[1],0==this.rows.length&&this.rows.push({})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(t){this.page.offset=t.offset,this.refresh()}updateFilter(t,e,o){if(t&&e){var i=t.target.value;t instanceof MouseEvent&&(i=""),this.fields[e]={search:i,exact:o}}else t&&(this.search=t instanceof MouseEvent?"":t.target.value);return clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(t){const e=t.sorts[0];this.order=`${e.prop} ${e.dir.toUpperCase()}`,this.refresh()}openPopUp(t={},e){this.dialog.open(S,{width:"720px",disableClose:!0,data:{title:e?"AGREGAR CLIENTE":"ACTUALIZAR CLIENTE",payload:t,tipoCliente:this.tipoCliente,empresas:this.empresas}}).afterClosed().subscribe(t=>{if(t){this.loader.open();var o={};Object.assign(o,t),o.bactivo=t.bactivo?"T":"F",o.bfavorito=t.bfavorito?"T":"F",o.bcredito=t.bcredito?"T":"F",e?(o.id=this.servicioUUID.generateUUID(),this.servicioClientes.agregarCliente(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Cliente Agregado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioClientes.actualizarCliente(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Cliente Actualizado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(t){this.confirmService.confirm({message:`\xbfEliminar ${t.sfamilia}?`}).subscribe(e=>{if(e){this.loader.open();var o={};Object.assign(o,t),delete o.soperadorcreacion,delete o.fcreacion,delete o.soperadormodificacion,delete o.fmodificacion,delete o.insertedon,delete o.updatedon,o.deletedon=(new Date).toISOString(),this.servicioClientes.actualizarCliente(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Cliente Eliminado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}export(){this.loader.open(),this.servicioClientes.traerClientes().subscribe(t=>{this.loader.close();var e=t.map(t=>{var e={};return e["*Codigo"]=t.scodcliente,e["*Raz\xf3n Social"]=t.srazonsocial,e["*Domicilio"]=t.sdomicilio,e.Localidad=t.slocalidad,e["*Condicion IVA"]=t.scondicioniva,e.CUIT=t.scuit,e["*Documento"]=t.sdocumento,e["Venta a Credito"]="T"==t.bcredito?"S":"N",e["Limite de Credito"]=t.rlimitecredito,e["Tope de Descuento"]=t.rtopedescuento,e});this.servicioExportarExcel.exportExcel(e,"Clientes","Clientes")})}openUserInfoPopUp(t={}){this.dialog.open(p.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(E.Rb(h.a),E.Rb(d.b),E.Rb(L.a),E.Rb(n.a),E.Rb(a.a),E.Rb(r.a),E.Rb(m.a),E.Rb(u.a),E.Rb(w.a))},t.\u0275cmp=E.Lb({type:t,selectors:[["app-clients"]],decls:30,vars:31,consts:[["class","m-333",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],["summaryRow","true",1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","scodcliente",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","srazonsocial",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sdomicilio",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","scuit",3,"summaryTemplate","name","flexGrow",4,"ngIf"],["prop","scondicioniva",3,"name","flexGrow",4,"ngIf"],["prop","idtipocliente",3,"name","flexGrow",4,"ngIf"],["prop","bcredito",3,"name","flexGrow",4,"ngIf"],["prop","rlimitecredito",3,"summaryFunc","name","flexGrow",4,"ngIf"],["prop","bactivo",3,"name","flexGrow",4,"ngIf"],[3,"minWidth","sortable","name","flexGrow",4,"ngIf"],["class","p-8","align","right",4,"ngIf"],["tabla1scodcliente",""],["tabla1srazonsocial",""],["tabla1sdomicilio",""],["tabla1scuit",""],[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["prop","scodcliente",3,"summaryTemplate","name","flexGrow"],["ngx-datatable-cell-template",""],["prop","srazonsocial",3,"summaryTemplate","name","flexGrow"],["prop","sdomicilio",3,"summaryTemplate","name","flexGrow"],["prop","scuit",3,"summaryTemplate","name","flexGrow"],["prop","scondicioniva",3,"name","flexGrow"],["prop","idtipocliente",3,"name","flexGrow"],["prop","bcredito",3,"name","flexGrow"],[4,"ngIf"],["prop","rlimitecredito",3,"summaryFunc","name","flexGrow"],["prop","bactivo",3,"name","flexGrow"],[3,"minWidth","sortable","name","flexGrow"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"routerLink",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"routerLink"],["align","right",1,"p-8"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(E.Mc(0,R,6,3,"div",0),E.Xb(1,"mat-form-field",1),E.Xb(2,"mat-icon",2),E.Oc(3,"search"),E.Wb(),E.Xb(4,"input",3,4),E.fc("keyup",function(t){return e.updateFilter(t,null,null)}),E.kc(6,"translate"),E.Wb(),E.Mc(7,y,3,0,"button",5),E.Wb(),E.Xb(8,"mat-card",6),E.Xb(9,"mat-card-content",6),E.Xb(10,"ngx-datatable",7),E.fc("page",function(t){return e.pageCallback(t)})("sort",function(t){return e.onSort(t)}),E.Mc(11,G,3,5,"ngx-datatable-column",8),E.Mc(12,q,3,5,"ngx-datatable-column",9),E.Mc(13,z,3,5,"ngx-datatable-column",10),E.Mc(14,Q,3,5,"ngx-datatable-column",11),E.Mc(15,K,3,4,"ngx-datatable-column",12),E.Mc(16,J,3,4,"ngx-datatable-column",13),E.Mc(17,tt,3,4,"ngx-datatable-column",14),E.Mc(18,ot,3,5,"ngx-datatable-column",15),E.Mc(19,at,3,4,"ngx-datatable-column",16),E.Mc(20,mt,3,6,"ngx-datatable-column",17),E.Wb(),E.Mc(21,ut,6,3,"div",18),E.Wb(),E.Wb(),E.Mc(22,ft,4,1,"ng-template",null,19,E.Nc),E.Mc(24,ht,4,1,"ng-template",null,20,E.Nc),E.Mc(26,Ot,4,1,"ng-template",null,21,E.Nc),E.Mc(28,gt,4,1,"ng-template",null,22,E.Nc)),2&t){const t=E.Ac(5);E.pc("ngIf",e.puedeAgregar),E.Eb(4),E.qc("placeholder",E.lc(6,26,"CLIENTSCOMPONENT.FILTER")),E.Eb(3),E.pc("ngIf",t.value),E.Eb(1),E.pc("@animate",E.vc(29,vt,E.uc(28,It))),E.Eb(2),E.pc("rows",e.rows)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight","auto")("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),E.Eb(1),E.pc("ngIf",e.mostrarOcultar("S")),E.Eb(1),E.pc("ngIf",e.mostrarOcultar("XS")),E.Eb(1),E.pc("ngIf",e.mostrarOcultar("L")),E.Eb(1),E.pc("ngIf",e.mostrarOcultar("S")),E.Eb(1),E.pc("ngIf",e.mostrarOcultar("S")),E.Eb(1),E.pc("ngIf",e.mostrarOcultar("XL")),E.Eb(1),E.pc("ngIf",e.mostrarOcultar("XL")),E.Eb(1),E.pc("ngIf",e.mostrarOcultar("XL")),E.Eb(1),E.pc("ngIf",e.mostrarOcultar("L")),E.Eb(1),E.pc("ngIf",e.mostrarOcultar("XS")),E.Eb(1),E.pc("ngIf",e.puedeExportar)}},directives:[i.o,C.c,N.a,C.g,g.b,F.a,F.b,D.d,T.b,C.h,D.b,D.a,A.h],pipes:[X.c],styles:[""],data:{animation:[c.a]}}),t})(),data:{title:"CLIENTES"}}];var Nt=o("u9T3"),Pt=o("f44v"),Xt=o("ZFy/"),Wt=o("M9ds"),Mt=o("PCNd"),xt=o("BxcV");let St=(()=>{class t{}return t.\u0275mod=E.Pb({type:t}),t.\u0275inj=E.Ob({factory:function(e){return new(e||t)},providers:[h.a],imports:[[i.c,f.t,Nt.a,D.f,g.c,g.c,F.c,g.c,T.c,Pt.a,g.c,Xt.b,d.f,L.b,v.b,Wt.c,I.b,N.b,X.b,Mt.a,xt.a,A.k.forChild(Tt)]]}),t})()}}]);