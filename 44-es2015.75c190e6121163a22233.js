(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{VW9e:function(t,e,a){"use strict";a.r(e),a.d(e,"CashByMovementTypeModule",function(){return Y});var n=a("SVse"),c=a("s7LF"),l=a("GmJt"),o=a("3sEA"),s=a("5IEN"),r=a("bPAe"),i=a("CHRX"),b=a("UVsP"),u=a("Ap+n"),p=a("8Y7J"),d=a("iELJ"),m=a("zHaW"),h=a("PDjf"),f=a("VDRc"),g=a("Q2Ze"),w=a("e6WT"),x=a("n1FK"),C=a("TN/R"),v=a("ZTz/"),S=a("Dxy4"),E=a("Tj54"),M=a("w9WL"),k=a("UhP/"),D=a("TSSN");function W(t,e){if(1&t&&(p.Xb(0,"mat-option",19),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.nombre)}}function O(t,e){}function A(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.stipomovcaja," ")}}function X(t,e){if(1&t&&(p.Oc(0),p.kc(1,"date")),2&t){const t=e.row;p.Qc(" ",p.mc(1,1,null==t?null:t.fcreacion,"dd/MM/yyyy HH:mm:ss")," ")}}function y(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.idpv," ")}}function R(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sobservacion," ")}}function H(t,e){1&t&&(p.Xb(0,"span"),p.Oc(1,"Si"),p.Wb())}function T(t,e){1&t&&(p.Xb(0,"span"),p.Oc(1,"No"),p.Wb())}function I(t,e){if(1&t&&(p.Mc(0,H,2,0,"span",18),p.Mc(1,T,2,0,"span",18)),2&t){const t=e.row;p.pc("ngIf","T"==(null==t?null:t.banulado)),p.Eb(1),p.pc("ngIf","F"==(null==t?null:t.banulado))}}function P(t,e){if(1&t&&(p.Oc(0),p.kc(1,"currency")),2&t){const t=e.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rimporte)," ")}}function F(t,e){if(1&t){const t=p.Yb();p.Xb(0,"button",21),p.fc("click",function(){p.Dc(t);const e=p.jc().row;return p.jc().openUserInfoPopUp(e)}),p.Xb(1,"mat-icon"),p.Oc(2,"person_pin"),p.Wb(),p.Wb()}}function j(t,e){1&t&&p.Mc(0,F,3,0,"button",20),2&t&&p.pc("ngIf",!e.row.isGroup)}function L(t,e){if(1&t&&(p.Xb(0,"div",23),p.Sb(1,"hr",24),p.Xb(2,"div"),p.Oc(3),p.kc(4,"translate"),p.Wb(),p.Wb()),2&t){const t=p.jc(2);p.Eb(3),p.Rc("",p.lc(4,2,"Articulos Totales"),":",t.tabla2.footer.count," ")}}function N(t,e){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,L,5,4,"ng-template",22),p.Wb())}const q=function(){return{y:"50px",delay:"300ms"}},U=function(t){return{value:"*",params:t}},V=[{path:"",component:(()=>{class t{constructor(t,e,a,n,l,o){this.dialog=t,this.servicioCaja=e,this.servicioExportarExcel=a,this.servicioSucursales=n,this.loader=l,this.snack=o,this.startDate=new c.e,this.endDate=new c.e}ngOnInit(){var t=new Date;t.setHours(0,0,0,0);var e=new Date;e.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(e),this.tabla2=new i.a,this.tabla2.groupField="stipomovcaja",this.tabla2.secondarySort="",this.tabla2.sum=["rimporte"],this.loader.open(),this.servicioSucursales.obtenerDatos(!0).subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}refresh(){console.log(this.startDate),console.log(this.endDate),this.loader.open(),this.servicioCaja.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.puntosventasstr).subscribe(t=>{this.tabla2.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t,column:e}){return{ngxgroup:t.isGroup,"ngx-alert-success ngx-alert-padding":"status"==e.prop&&t.rimporte>0,"ngx-alert-danger ngx-alert-padding":"status"==e.prop&&t.rimporte<0,"ngx-alert-warning ngx-alert-padding":"status"==e.prop&&0==t.rimporte}}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}openUserInfoPopUp(t={}){this.dialog.open(u.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(p.Rb(d.b),p.Rb(s.a),p.Rb(r.a),p.Rb(b.a),p.Rb(o.a),p.Rb(m.a))},t.\u0275cmp=p.Lb({type:t,selectors:[["app-cash-by-movement-type"]],decls:53,vars:91,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white","ngx-status",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],["prop","status","name","",3,"cellClass","sortable","width","flexGrow"],["ngx-datatable-cell-template",""],[3,"cellClass","name","width"],[3,"name","width"],[4,"ngIf"],[3,"value"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"]],template:function(t,e){if(1&t&&(p.Xb(0,"mat-card",0),p.Xb(1,"div",1),p.Xb(2,"mat-form-field",2),p.Sb(3,"input",3),p.kc(4,"translate"),p.Sb(5,"mat-datepicker-toggle",4),p.Sb(6,"ngx-mat-datetime-picker",5,6),p.Wb(),p.Xb(8,"mat-form-field",2),p.Sb(9,"input",3),p.kc(10,"translate"),p.Sb(11,"mat-datepicker-toggle",4),p.Sb(12,"ngx-mat-datetime-picker",5,7),p.Wb(),p.Xb(14,"mat-form-field",8),p.Xb(15,"mat-label"),p.Oc(16),p.kc(17,"translate"),p.Wb(),p.Xb(18,"mat-select",9),p.fc("selectionChange",function(t){return e.seleccionarSucursal(t.value)})("valueChange",function(t){return e.sucursalActual=t}),p.Mc(19,W,2,2,"mat-option",10),p.Wb(),p.Wb(),p.Xb(20,"button",11),p.fc("click",function(){return e.refresh()}),p.Xb(21,"mat-icon"),p.Oc(22,"search"),p.Wb(),p.Oc(23),p.kc(24,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Xb(25,"mat-card",0),p.Xb(26,"mat-card-content",0),p.Xb(27,"ngx-datatable",12,13),p.fc("activate",function(t){return e.tabla2OnActivate(t)}),p.Xb(29,"ngx-datatable-column",14),p.Mc(30,O,0,0,"ng-template",15),p.Wb(),p.Xb(31,"ngx-datatable-column",16),p.kc(32,"translate"),p.Mc(33,A,1,1,"ng-template",15),p.Wb(),p.Xb(34,"ngx-datatable-column",16),p.kc(35,"translate"),p.Mc(36,X,2,4,"ng-template",15),p.Wb(),p.Xb(37,"ngx-datatable-column",16),p.kc(38,"translate"),p.Mc(39,y,1,1,"ng-template",15),p.Wb(),p.Xb(40,"ngx-datatable-column",16),p.kc(41,"translate"),p.Mc(42,R,1,1,"ng-template",15),p.Wb(),p.Xb(43,"ngx-datatable-column",16),p.kc(44,"translate"),p.Mc(45,I,2,2,"ng-template",15),p.Wb(),p.Xb(46,"ngx-datatable-column",16),p.kc(47,"translate"),p.Mc(48,P,2,3,"ng-template",15),p.Wb(),p.Xb(49,"ngx-datatable-column",17),p.kc(50,"translate"),p.Mc(51,j,1,1,"ng-template",15),p.Wb(),p.Mc(52,N,2,0,"ngx-datatable-footer",18),p.Wb(),p.Wb(),p.Wb()),2&t){const t=p.Ac(7),a=p.Ac(13);p.Eb(3),p.qc("placeholder",p.lc(4,66,"SALES.STARTDATE")),p.pc("ngxMatDatetimePicker",t)("formControl",e.startDate),p.Eb(2),p.pc("for",t),p.Eb(1),p.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),p.Eb(3),p.qc("placeholder",p.lc(10,68,"SALES.ENDDATE")),p.pc("ngxMatDatetimePicker",a)("formControl",e.endDate),p.Eb(2),p.pc("for",a),p.Eb(1),p.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),p.Eb(4),p.Pc(p.lc(17,70,"SALES.BRANCH")),p.Eb(2),p.pc("value",e.sucursalActual),p.Eb(1),p.pc("ngForOf",e.sucursales),p.Eb(4),p.Pc(p.lc(24,72,"SALES.SHOW")),p.Eb(2),p.pc("@animate",p.vc(89,U,p.uc(88,q))),p.Eb(2),p.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla2.rows)("selectionType","single"),p.Eb(2),p.pc("cellClass",e.getCellClass)("sortable",!1)("width",-100)("flexGrow",.1),p.Eb(2),p.qc("name",p.lc(32,74,"tipo")),p.pc("cellClass",e.getCellClass)("width",500),p.Eb(3),p.qc("name",p.lc(35,76,"fecha")),p.pc("cellClass",e.getCellClass)("width",200),p.Eb(3),p.qc("name",p.lc(38,78,"pv")),p.pc("cellClass",e.getCellClass)("width",150),p.Eb(3),p.qc("name",p.lc(41,80,"observacion")),p.pc("cellClass",e.getCellClass)("width",150),p.Eb(3),p.qc("name",p.lc(44,82,"Anulado")),p.pc("cellClass",e.getCellClass)("width",150),p.Eb(3),p.qc("name",p.lc(47,84,"total")),p.pc("cellClass",e.getCellClass)("width",150),p.Eb(3),p.qc("name",p.lc(50,86,"SALES.ACTIONS")),p.pc("width",150),p.Eb(3),p.pc("ngIf",e.tabla2.data.length>0)}},directives:[h.a,f.c,f.b,g.c,w.b,x.a,c.c,c.o,c.f,C.h,g.h,x.b,f.a,g.f,v.a,n.n,S.b,E.a,h.b,M.d,M.b,M.a,n.o,k.n,M.e,M.c],pipes:[D.c,n.f,n.d],styles:[""],data:{animation:[l.a]}}),t})(),data:{title:"CAJA"}}];var G=a("u9T3"),J=a("f44v"),Q=a("jMqV"),K=a("M9ds"),Z=a("ZFy/"),z=a("iInd"),B=a("PCNd");let Y=(()=>{class t{}return t.\u0275mod=p.Pb({type:t}),t.\u0275inj=p.Ob({factory:function(e){return new(e||t)},imports:[[n.c,c.t,G.a,M.f,w.c,w.c,h.c,w.c,S.c,J.a,w.c,Z.b,d.f,m.b,Q.b,K.c,v.b,E.b,D.b,B.a,C.g,x.c,x.e,x.d,c.j,z.k.forChild(V)]]}),t})()}}]);