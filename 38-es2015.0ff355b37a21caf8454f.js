(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{VW9e:function(t,e,a){"use strict";a.r(e),a.d(e,"CashByMovementTypeModule",function(){return lt});var n=a("SVse"),c=a("HeVh"),l=a("s7LF"),s=a("GmJt"),o=a("3sEA"),r=a("5IEN"),i=a("bPAe"),b=a("CHRX"),u=a("UVsP"),p=a("Ap+n"),m=a("8Y7J"),d=a("iELJ"),f=a("zHaW"),g=a("PDjf"),h=a("VDRc"),x=a("Q2Ze"),w=a("e6WT"),S=a("+Wi0"),M=a("TN/R"),v=a("ZTz/"),C=a("Dxy4"),O=a("Tj54"),X=a("w9WL"),k=a("UhP/"),E=a("TSSN");function W(t,e){if(1&t&&(m.Xb(0,"mat-option",19),m.Oc(1),m.Wb()),2&t){const t=e.$implicit;m.pc("value",t),m.Eb(1),m.Pc(null==t?null:t.nombre)}}function D(t,e){}function A(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.stipomovcaja," ")}}function I(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",20),m.kc(1,"translate"),m.Mc(2,A,1,1,"ng-template",15),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"tipo")),m.pc("cellClass",t.getCellClass)("flexGrow",2)}}function L(t,e){if(1&t&&(m.Oc(0),m.kc(1,"date")),2&t){const t=e.row;m.Qc(" ",m.mc(1,1,null==t?null:t.fcreacion,"dd/MM/yyyy HH:mm:ss")," ")}}function y(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",20),m.kc(1,"translate"),m.Mc(2,L,2,4,"ng-template",15),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"fecha")),m.pc("cellClass",t.getCellClass)("flexGrow",1)}}function R(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.idpv," ")}}function H(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",20),m.kc(1,"translate"),m.Mc(2,R,1,1,"ng-template",15),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"pv")),m.pc("cellClass",t.getCellClass)("flexGrow",.5)}}function T(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sobservacion," ")}}function G(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",20),m.kc(1,"translate"),m.Mc(2,T,1,1,"ng-template",15),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"observacion")),m.pc("cellClass",t.getCellClass)("flexGrow",2)}}function j(t,e){1&t&&(m.Xb(0,"span"),m.Oc(1,"Si"),m.Wb())}function P(t,e){1&t&&(m.Xb(0,"span"),m.Oc(1,"No"),m.Wb())}function F(t,e){if(1&t&&(m.Mc(0,j,2,0,"span",18),m.Mc(1,P,2,0,"span",18)),2&t){const t=e.row;m.pc("ngIf","T"==(null==t?null:t.banulado)),m.Eb(1),m.pc("ngIf","F"==(null==t?null:t.banulado))}}function N(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",20),m.kc(1,"translate"),m.Mc(2,F,2,2,"ng-template",15),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"Anulado")),m.pc("cellClass",t.getCellClass)("flexGrow",.5)}}function q(t,e){if(1&t&&(m.Oc(0),m.kc(1,"currency")),2&t){const t=e.row;m.Qc(" ",m.lc(1,1,null==t?null:t.rimporte)," ")}}function V(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",20),m.kc(1,"translate"),m.Mc(2,q,2,3,"ng-template",15),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"total")),m.pc("cellClass",t.getCellClass)("flexGrow",1)}}function U(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",23),m.fc("click",function(){m.Dc(t);const e=m.jc().row;return m.jc(2).openUserInfoPopUp(e)}),m.Xb(1,"mat-icon"),m.Oc(2,"person_pin"),m.Wb(),m.Wb()}}function J(t,e){1&t&&m.Mc(0,U,3,0,"button",22),2&t&&m.pc("ngIf",!e.row.isGroup)}function Q(t,e){1&t&&(m.Xb(0,"ngx-datatable-column",21),m.kc(1,"translate"),m.Mc(2,J,1,1,"ng-template",15),m.Wb()),2&t&&(m.qc("name",m.lc(1,3,"SALES.ACTIONS")),m.pc("minWidth",150)("flexGrow",1))}function Z(t,e){if(1&t&&(m.Xb(0,"div",25),m.Sb(1,"hr",26),m.Xb(2,"div"),m.Oc(3),m.kc(4,"translate"),m.Wb(),m.Wb()),2&t){const t=m.jc(2);m.Eb(3),m.Rc("",m.lc(4,2,"Articulos Totales"),":",t.tabla2.footer.count," ")}}function z(t,e){1&t&&(m.Xb(0,"ngx-datatable-footer"),m.Mc(1,Z,5,4,"ng-template",24),m.Wb())}const B=function(){return{y:"50px",delay:"300ms"}},K=function(t){return{value:"*",params:t}},Y=[{path:"",component:(()=>{class t{constructor(t,e,a,n,c,s,o){this.dialog=t,this.servicioCaja=e,this.servicioExportarExcel=a,this.servicioSucursales=n,this.loader=c,this.snack=s,this.breakpointObserver=o,this.startDate=new l.e,this.endDate=new l.e}ngOnInit(){var t=new Date;t.setHours(0,0,0,0);var e=new Date;e.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(e),this.tabla2=new b.a,this.tabla2.groupField="stipomovcaja",this.tabla2.secondarySort="",this.tabla2.sum=["rimporte"],this.loader.open(),this.servicioSucursales.obtenerDatos(!0).subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.breakpointObserver.observe([c.b.XSmall,c.b.Small,c.b.Medium,c.b.Large,c.b.XLarge]).subscribe(t=>{this.isXSmall=this.breakpointObserver.isMatched(c.b.XSmall),this.isSmall=this.breakpointObserver.isMatched(c.b.Small),this.isMedium=this.breakpointObserver.isMatched(c.b.Medium),this.isLarge=this.breakpointObserver.isMatched(c.b.Large),this.isXLarge=this.breakpointObserver.isMatched(c.b.XLarge)})}mostrarOcultar(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}refresh(){console.log(this.startDate),console.log(this.endDate),this.loader.open(),this.servicioCaja.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.puntosventasstr).subscribe(t=>{this.tabla2.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t,column:e}){return{ngxgroup:t.isGroup,"ngx-alert-success ngx-alert-padding":"status"==e.prop&&t.rimporte>0,"ngx-alert-danger ngx-alert-padding":"status"==e.prop&&t.rimporte<0,"ngx-alert-warning ngx-alert-padding":"status"==e.prop&&0==t.rimporte}}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}openUserInfoPopUp(t={}){this.dialog.open(p.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(m.Rb(d.b),m.Rb(r.a),m.Rb(i.a),m.Rb(u.a),m.Rb(o.a),m.Rb(f.a),m.Rb(c.a))},t.\u0275cmp=m.Lb({type:t,selectors:[["app-cash-by-movement-type"]],decls:39,vars:64,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white","ngx-status",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],["prop","status","name","",3,"cellClass","sortable","flexGrow"],["ngx-datatable-cell-template",""],[3,"cellClass","name","flexGrow",4,"ngIf"],[3,"name","minWidth","flexGrow",4,"ngIf"],[4,"ngIf"],[3,"value"],[3,"cellClass","name","flexGrow"],[3,"name","minWidth","flexGrow"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"]],template:function(t,e){if(1&t&&(m.Xb(0,"mat-card",0),m.Xb(1,"div",1),m.Xb(2,"mat-form-field",2),m.Sb(3,"input",3),m.kc(4,"translate"),m.Sb(5,"mat-datepicker-toggle",4),m.Sb(6,"ngx-mat-datetime-picker",5,6),m.Wb(),m.Xb(8,"mat-form-field",2),m.Sb(9,"input",3),m.kc(10,"translate"),m.Sb(11,"mat-datepicker-toggle",4),m.Sb(12,"ngx-mat-datetime-picker",5,7),m.Wb(),m.Xb(14,"mat-form-field",8),m.Xb(15,"mat-label"),m.Oc(16),m.kc(17,"translate"),m.Wb(),m.Xb(18,"mat-select",9),m.fc("selectionChange",function(t){return e.seleccionarSucursal(t.value)})("valueChange",function(t){return e.sucursalActual=t}),m.Mc(19,W,2,2,"mat-option",10),m.Wb(),m.Wb(),m.Xb(20,"button",11),m.fc("click",function(){return e.refresh()}),m.Xb(21,"mat-icon"),m.Oc(22,"search"),m.Wb(),m.Oc(23),m.kc(24,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Xb(25,"mat-card",0),m.Xb(26,"mat-card-content",0),m.Xb(27,"ngx-datatable",12,13),m.fc("activate",function(t){return e.tabla2OnActivate(t)}),m.Xb(29,"ngx-datatable-column",14),m.Mc(30,D,0,0,"ng-template",15),m.Wb(),m.Mc(31,I,3,5,"ngx-datatable-column",16),m.Mc(32,y,3,5,"ngx-datatable-column",16),m.Mc(33,H,3,5,"ngx-datatable-column",16),m.Mc(34,G,3,5,"ngx-datatable-column",16),m.Mc(35,N,3,5,"ngx-datatable-column",16),m.Mc(36,V,3,5,"ngx-datatable-column",16),m.Mc(37,Q,3,5,"ngx-datatable-column",17),m.Mc(38,z,2,0,"ngx-datatable-footer",18),m.Wb(),m.Wb(),m.Wb()),2&t){const t=m.Ac(7),a=m.Ac(13);m.Eb(3),m.qc("placeholder",m.lc(4,53,"SALES.STARTDATE")),m.pc("ngxMatDatetimePicker",t)("formControl",e.startDate),m.Eb(2),m.pc("for",t),m.Eb(1),m.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),m.Eb(3),m.qc("placeholder",m.lc(10,55,"SALES.ENDDATE")),m.pc("ngxMatDatetimePicker",a)("formControl",e.endDate),m.Eb(2),m.pc("for",a),m.Eb(1),m.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),m.Eb(4),m.Pc(m.lc(17,57,"SALES.BRANCH")),m.Eb(2),m.pc("value",e.sucursalActual),m.Eb(1),m.pc("ngForOf",e.sucursales),m.Eb(4),m.Pc(m.lc(24,59,"SALES.SHOW")),m.Eb(2),m.pc("@animate",m.vc(62,K,m.uc(61,B))),m.Eb(2),m.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",e.tabla2.rows)("selectionType","single"),m.Eb(2),m.pc("cellClass",e.getCellClass)("sortable",!1)("flexGrow",-100)("flexGrow",.1),m.Eb(2),m.pc("ngIf",e.mostrarOcultar("XS")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("XS")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("XS")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("L")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("L")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("XS")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("XS")),m.Eb(1),m.pc("ngIf",e.tabla2.data.length>0)}},directives:[g.a,h.c,h.b,x.c,w.b,S.a,l.c,l.o,l.f,M.h,x.h,S.b,h.a,x.f,v.a,n.n,C.b,O.a,g.b,X.d,X.b,X.a,n.o,k.n,X.e,X.c],pipes:[E.c,n.f,n.d],styles:[""],data:{animation:[s.a]}}),t})(),data:{title:"CAJA"}}];var $=a("u9T3"),_=a("f44v"),tt=a("jMqV"),et=a("M9ds"),at=a("ZFy/"),nt=a("iInd"),ct=a("PCNd");let lt=(()=>{class t{}return t.\u0275mod=m.Pb({type:t}),t.\u0275inj=m.Ob({factory:function(e){return new(e||t)},imports:[[n.c,l.t,$.a,X.f,w.c,w.c,g.c,w.c,C.c,_.a,w.c,at.b,d.f,f.b,tt.b,et.c,v.b,O.b,E.b,ct.a,M.g,S.c,S.e,S.d,l.j,nt.k.forChild(Y)]]}),t})()}}]);