(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{l1WU:function(t,e,a){"use strict";a.r(e),a.d(e,"CashModule",function(){return ot});var c=a("SVse"),n=a("HeVh"),l=a("s7LF"),s=a("GmJt"),o=a("3sEA"),r=a("bPAe"),i=a("CHRX"),b=a("UVsP"),u=a("Ap+n"),p=a("5IEN"),m=a("8Y7J"),f=a("iELJ"),d=a("zHaW"),g=a("PDjf"),h=a("VDRc"),x=a("Q2Ze"),S=a("e6WT"),w=a("+Wi0"),v=a("TN/R"),M=a("ZTz/"),E=a("Dxy4"),O=a("Tj54"),X=a("w9WL"),C=a("UhP/"),k=a("TSSN");function D(t,e){if(1&t&&(m.Xb(0,"mat-option",18),m.Oc(1),m.Wb()),2&t){const t=e.$implicit;m.pc("value",t),m.Eb(1),m.Pc(null==t?null:t.nombre)}}function A(t,e){}function W(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",19),m.Mc(1,A,0,0,"ng-template",20),m.Wb()),2&t){const t=m.jc();m.pc("cellClass",t.getCellClass)("sortable",!1)("flexGrow",.1)}}function L(t,e){if(1&t&&(m.Oc(0),m.kc(1,"date")),2&t){const t=e.row;m.Qc(" ",m.mc(1,1,null==t?null:t.fcreacion,"dd/MM/yyyy HH:mm:ss")," ")}}function I(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",21),m.kc(1,"translate"),m.Mc(2,L,2,4,"ng-template",20),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"SALES.DATE")),m.pc("cellClass",t.getCellClass)("flexGrow",1)}}function T(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.idpv," ")}}function y(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",21),m.kc(1,"translate"),m.Mc(2,T,1,1,"ng-template",20),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"SALES.PV")),m.pc("cellClass",t.getCellClass)("flexGrow",1)}}function R(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.stipomovcaja," ")}}function j(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",21),m.kc(1,"translate"),m.Mc(2,R,1,1,"ng-template",20),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"Tipo De Movimiento")),m.pc("cellClass",t.getCellClass)("flexGrow",1)}}function H(t,e){if(1&t&&m.Oc(0),2&t){const t=e.row;m.Qc(" ",null==t?null:t.sobservacion," ")}}function G(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",21),m.kc(1,"translate"),m.Mc(2,H,1,1,"ng-template",20),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"Observacion")),m.pc("cellClass",t.getCellClass)("flexGrow",1)}}function P(t,e){1&t&&(m.Xb(0,"span"),m.Oc(1,"Si"),m.Wb())}function F(t,e){1&t&&(m.Xb(0,"span"),m.Oc(1,"No"),m.Wb())}function N(t,e){if(1&t&&(m.Mc(0,P,2,0,"span",17),m.Mc(1,F,2,0,"span",17)),2&t){const t=e.row;m.pc("ngIf","T"==(null==t?null:t.banulado)),m.Eb(1),m.pc("ngIf","F"==(null==t?null:t.banulado))}}function V(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",21),m.kc(1,"translate"),m.Mc(2,N,2,2,"ng-template",20),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"Anulado")),m.pc("cellClass",t.getCellClass)("flexGrow",1)}}function q(t,e){if(1&t&&(m.Oc(0),m.kc(1,"currency")),2&t){const t=e.row;m.Qc(" ",m.lc(1,1,null==t?null:t.rimporte)," ")}}function U(t,e){if(1&t&&(m.Xb(0,"ngx-datatable-column",21),m.kc(1,"translate"),m.Mc(2,q,2,3,"ng-template",20),m.Wb()),2&t){const t=m.jc();m.qc("name",m.lc(1,3,"SALES.TOTAL")),m.pc("cellClass",t.getCellClass)("flexGrow",1)}}function J(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",24),m.fc("click",function(){m.Dc(t);const e=m.jc().row;return m.jc(2).openUserInfoPopUp(e)}),m.Xb(1,"mat-icon"),m.Oc(2,"person_pin"),m.Wb(),m.Wb()}}function Q(t,e){1&t&&m.Mc(0,J,3,0,"button",23),2&t&&m.pc("ngIf",!e.row.isGroup)}function Y(t,e){1&t&&(m.Xb(0,"ngx-datatable-column",22),m.kc(1,"translate"),m.Mc(2,Q,1,1,"ng-template",20),m.Wb()),2&t&&(m.qc("name",m.lc(1,2,"SALES.ACTIONS")),m.pc("flexGrow",1))}function Z(t,e){if(1&t){const t=m.Yb();m.Xb(0,"button",11),m.fc("click",function(){return m.Dc(t),m.jc(3).export()}),m.Xb(1,"mat-icon"),m.Oc(2,"save_alt"),m.Wb(),m.Oc(3),m.kc(4,"translate"),m.Wb()}2&t&&(m.Eb(3),m.Pc(m.lc(4,1,"SALES.EXCEL")))}function z(t,e){if(1&t&&(m.Xb(0,"div",26),m.Sb(1,"hr",27),m.Xb(2,"div"),m.Oc(3),m.kc(4,"translate"),m.Wb(),m.Wb(),m.Xb(5,"div",28),m.Mc(6,Z,5,3,"button",29),m.Wb()),2&t){const t=m.jc(2);m.Eb(3),m.Rc("",m.lc(4,3,"Articulos Totales"),":",t.tabla1.footer.count," "),m.Eb(3),m.pc("ngIf",t.tabla1.data.length>0)}}function B(t,e){1&t&&(m.Xb(0,"ngx-datatable-footer"),m.Mc(1,z,7,5,"ng-template",25),m.Wb())}const K=function(){return{y:"50px",delay:"300ms"}},_=function(t){return{value:"*",params:t}},$=[{path:"",component:(()=>{class t{constructor(t,e,a,c,n,s,o){this.dialog=t,this.servicioCaja=e,this.servicioExportarExcel=a,this.servicioSucursales=c,this.loader=n,this.snack=s,this.breakpointObserver=o,this.startDate=new l.e,this.endDate=new l.e}ngOnInit(){var t=new Date;t.setHours(0,0,0,0);var e=new Date;e.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(e),this.tabla1=new i.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.loader.open(),this.servicioSucursales.obtenerDatos(!0).subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.breakpointObserver.observe([n.b.XSmall,n.b.Small,n.b.Medium,n.b.Large,n.b.XLarge]).subscribe(t=>{this.isXSmall=this.breakpointObserver.isMatched(n.b.XSmall),this.isSmall=this.breakpointObserver.isMatched(n.b.Small),this.isMedium=this.breakpointObserver.isMatched(n.b.Medium),this.isLarge=this.breakpointObserver.isMatched(n.b.Large),this.isXLarge=this.breakpointObserver.isMatched(n.b.XLarge)})}mostrarOcultar(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}export(){var t=this.tabla1.data.map(t=>({PV:t.idpv,"Tipo de Movimiento":t.stipomovcaja,Observacion:t.sobservacion,Anulado:"T"==t.banulado?"Si":"No",Total:t.rimporte}));this.servicioExportarExcel.exportExcel(t,"caja","caja")}refresh(){console.log(this.startDate),console.log(this.endDate),this.loader.open(),console.log(this.sucursalActual),this.servicioCaja.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.puntosventasstr).subscribe(t=>{this.tabla1.setData(t.filter(()=>!0)),this.loader.close(),console.log(this.tabla1)},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t,column:e}){return{ngxgroup:t.isGroup,"ngx-alert-success ngx-alert-padding":"status"==e.prop&&t.rimporte>0,"ngx-alert-danger ngx-alert-padding":"status"==e.prop&&t.rimporte<0,"ngx-alert-warning ngx-alert-padding":"status"==e.prop&&0==t.rimporte}}tabla1OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}openUserInfoPopUp(t={}){this.dialog.open(u.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(m.Rb(f.b),m.Rb(p.a),m.Rb(r.a),m.Rb(b.a),m.Rb(o.a),m.Rb(d.a),m.Rb(n.a))},t.\u0275cmp=m.Lb({type:t,selectors:[["app-cash"]],decls:38,vars:61,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white","ngx-status",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],["prop","status","name","",3,"cellClass","sortable","flexGrow",4,"ngIf"],[3,"cellClass","name","flexGrow",4,"ngIf"],[3,"name","flexGrow",4,"ngIf"],[4,"ngIf"],[3,"value"],["prop","status","name","",3,"cellClass","sortable","flexGrow"],["ngx-datatable-cell-template",""],[3,"cellClass","name","flexGrow"],[3,"name","flexGrow"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(t,e){if(1&t&&(m.Xb(0,"mat-card",0),m.Xb(1,"div",1),m.Xb(2,"mat-form-field",2),m.Sb(3,"input",3),m.kc(4,"translate"),m.Sb(5,"mat-datepicker-toggle",4),m.Sb(6,"ngx-mat-datetime-picker",5,6),m.Wb(),m.Xb(8,"mat-form-field",2),m.Sb(9,"input",3),m.kc(10,"translate"),m.Sb(11,"mat-datepicker-toggle",4),m.Sb(12,"ngx-mat-datetime-picker",5,7),m.Wb(),m.Xb(14,"mat-form-field",8),m.Xb(15,"mat-label"),m.Oc(16),m.kc(17,"translate"),m.Wb(),m.Xb(18,"mat-select",9),m.fc("selectionChange",function(t){return e.seleccionarSucursal(t.value)})("valueChange",function(t){return e.sucursalActual=t}),m.Mc(19,D,2,2,"mat-option",10),m.Wb(),m.Wb(),m.Xb(20,"button",11),m.fc("click",function(){return e.refresh()}),m.Xb(21,"mat-icon"),m.Oc(22,"search"),m.Wb(),m.Oc(23),m.kc(24,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Xb(25,"mat-card",0),m.Xb(26,"mat-card-content",0),m.Xb(27,"ngx-datatable",12,13),m.fc("activate",function(t){return e.tabla1OnActivate(t)}),m.Mc(29,W,2,3,"ngx-datatable-column",14),m.Mc(30,I,3,5,"ngx-datatable-column",15),m.Mc(31,y,3,5,"ngx-datatable-column",15),m.Mc(32,j,3,5,"ngx-datatable-column",15),m.Mc(33,G,3,5,"ngx-datatable-column",15),m.Mc(34,V,3,5,"ngx-datatable-column",15),m.Mc(35,U,3,5,"ngx-datatable-column",15),m.Mc(36,Y,3,4,"ngx-datatable-column",16),m.Mc(37,B,2,0,"ngx-datatable-footer",17),m.Wb(),m.Wb(),m.Wb()),2&t){const t=m.Ac(7),a=m.Ac(13);m.Eb(3),m.qc("placeholder",m.lc(4,50,"SALES.STARTDATE")),m.pc("ngxMatDatetimePicker",t)("formControl",e.startDate),m.Eb(2),m.pc("for",t),m.Eb(1),m.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),m.Eb(3),m.qc("placeholder",m.lc(10,52,"SALES.ENDDATE")),m.pc("ngxMatDatetimePicker",a)("formControl",e.endDate),m.Eb(2),m.pc("for",a),m.Eb(1),m.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),m.Eb(4),m.Pc(m.lc(17,54,"SALES.BRANCH")),m.Eb(2),m.pc("value",e.sucursalActual),m.Eb(1),m.pc("ngForOf",e.sucursales),m.Eb(4),m.Pc(m.lc(24,56,"SALES.SHOW")),m.Eb(2),m.pc("@animate",m.vc(59,_,m.uc(58,K))),m.Eb(2),m.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",e.tabla1.rows)("selectionType","single"),m.Eb(2),m.pc("ngIf",e.mostrarOcultar("XS")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("XS")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("L")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("XS")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("L")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("L")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("XS")),m.Eb(1),m.pc("ngIf",e.mostrarOcultar("XS")),m.Eb(1),m.pc("ngIf",e.tabla1.data.length>0)}},directives:[g.a,h.c,h.b,x.c,S.b,w.a,l.c,l.o,l.f,v.h,x.h,w.b,h.a,x.f,M.a,c.n,E.b,O.a,g.b,X.d,c.o,C.n,X.b,X.a,X.e,X.c],pipes:[k.c,c.f,c.d],styles:[""],data:{animation:[s.a]}}),t})(),data:{title:"CAJA"}}];var tt=a("iInd"),et=a("u9T3"),at=a("f44v"),ct=a("jMqV"),nt=a("M9ds"),lt=a("ZFy/"),st=a("PCNd");let ot=(()=>{class t{}return t.\u0275mod=m.Pb({type:t}),t.\u0275inj=m.Ob({factory:function(e){return new(e||t)},imports:[[c.c,l.t,et.a,X.f,S.c,S.c,g.c,S.c,E.c,at.a,S.c,lt.b,f.f,d.b,ct.b,nt.c,M.b,O.b,k.b,st.a,v.g,w.c,w.e,w.d,l.j,tt.k.forChild($)]]}),t})()}}]);