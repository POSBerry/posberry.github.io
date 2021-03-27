!function(){function a(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function t(a,t){for(var e=0;e<t.length;e++){var c=t[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}}function e(a,e,c){return e&&t(a.prototype,e),c&&t(a,c),a}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{qc6t:function(t,c,n){"use strict";n.r(c),n.d(c,"CashReportMovementModule",function(){return Ja});var l,r=n("SVse"),o=n("HeVh"),i=n("s7LF"),s=n("GmJt"),b=n("3sEA"),u=n("bPAe"),f=n("CHRX"),d=n("UVsP"),p=n("Ap+n"),m=n("AytR"),g=n("8Y7J"),h=n("IheW"),v=((l=function(){function t(e){a(this,t),this.http=e}return e(t,[{key:"obtenerDatosTabla1",value:function(a,t,e){return this.http.get("".concat(m.a.apiURL,'Cajas?filter={"where":{"and":%20[{"and":%20[{"fcierre":%20{"gt":"').concat(a,'"}},%20{"fcierre":%20{"lt":"').concat(t,'"}}]},{"idpv":{"inq":%20[').concat(e,']}},{"deletedon":{"eq":null}}]}}'))}},{key:"obtenerDatosPopup",value:function(a){return this.http.get("".concat(m.a.apiURL,'MovCaja/?filter={"where":{"idcaja":"').concat(a,'"}}'))}}]),t}()).\u0275fac=function(a){return new(a||l)(g.bc(h.c))},l.\u0275prov=g.Nb({token:l,factory:l.\u0275fac,providedIn:"root"}),l),x=n("iELJ"),O=n("PDjf"),w=n("M9ds"),X=n("w9WL"),W=n("VDRc"),M=n("Dxy4"),k=n("Tj54"),C=n("TSSN");function E(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.scondpago," ")}}function y(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.idpv," ")}}function S(a,t){if(1&a&&(g.Oc(0),g.kc(1,"date")),2&a){var e=t.row;g.Qc(" ",g.mc(1,1,null==e?null:e.fmovimiento,"dd/MM/yyyy HH:mm:ss")," ")}}function j(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rimporte)," ")}}function I(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.stipomovcaja," ")}}function L(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.sobservacion," ")}}function D(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.soperadorcreacion," ")}}function T(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.soperadormodificacion," ")}}var A,G=function(){return{y:"50px",delay:"300ms"}},R=function(a){return{value:"*",params:a}},H=((A=function(){function t(e,c,n,l){a(this,t),this.data=e,this.dialogRef=c,this.cdRef=n,this.servicioCaja=l,this.page={count:0,offset:0,limit:10},this.detalle=[]}return e(t,[{key:"ngOnInit",value:function(){var a=this;this.servicioCaja.obtenerDatosPopup(this.data.payload.id).subscribe(function(t){a.detalle=t}),this.auditoria=this.data.auditoria,console.log(this.auditoria)}},{key:"ngAfterViewChecked",value:function(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}}]),t}()).\u0275fac=function(a){return new(a||A)(g.Rb(x.a),g.Rb(x.g),g.Rb(g.h),g.Rb(v))},A.\u0275cmp=g.Lb({type:A,selectors:[["app-cash-report-popup"]],decls:110,vars:72,consts:[[2,"width","100%"],[1,"p-0"],["label","Detalles"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit"],[3,"name","flexGrow"],["ngx-datatable-cell-template",""],["label","Auditoria"],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100","fxLayoutAlign","end",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"]],template:function(a,t){1&a&&(g.Xb(0,"mat-dialog-content"),g.Xb(1,"div"),g.Xb(2,"table",0),g.Xb(3,"tr"),g.Xb(4,"th"),g.Oc(5),g.Wb(),g.Xb(6,"th"),g.Oc(7),g.Wb(),g.Wb(),g.Xb(8,"tr"),g.Xb(9,"th"),g.Oc(10),g.kc(11,"date"),g.Wb(),g.Xb(12,"th"),g.Oc(13),g.kc(14,"date"),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Xb(15,"div"),g.Xb(16,"table",0),g.Xb(17,"tr"),g.Xb(18,"th"),g.Oc(19,"Saldos:"),g.Wb(),g.Xb(20,"th"),g.Oc(21,"Inicial"),g.Wb(),g.Xb(22,"th"),g.Oc(23,"Efectivo"),g.Wb(),g.Xb(24,"th"),g.Oc(25,"Tarjetas"),g.Wb(),g.Xb(26,"th"),g.Oc(27,"Cta. Cte"),g.Wb(),g.Xb(28,"th"),g.Oc(29,"Mov Caja"),g.Wb(),g.Xb(30,"th"),g.Oc(31,"MP"),g.Wb(),g.Xb(32,"th"),g.Oc(33,"Cheques"),g.Wb(),g.Xb(34,"th"),g.Oc(35,"Transferencias"),g.Wb(),g.Wb(),g.Xb(36,"tr"),g.Sb(37,"th"),g.Xb(38,"th"),g.Oc(39),g.Wb(),g.Xb(40,"th"),g.Oc(41),g.Wb(),g.Xb(42,"th"),g.Oc(43),g.Wb(),g.Xb(44,"th"),g.Oc(45),g.Wb(),g.Xb(46,"th"),g.Oc(47),g.Wb(),g.Xb(48,"th"),g.Oc(49),g.Wb(),g.Xb(50,"th"),g.Oc(51),g.Wb(),g.Xb(52,"th"),g.Oc(53),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Xb(54,"mat-card",1),g.Xb(55,"mat-card-content",1),g.Xb(56,"mat-tab-group"),g.Xb(57,"mat-tab",2),g.Xb(58,"ngx-datatable",3),g.Xb(59,"ngx-datatable-column",4),g.kc(60,"translate"),g.Mc(61,E,1,1,"ng-template",5),g.Wb(),g.Xb(62,"ngx-datatable-column",4),g.kc(63,"translate"),g.Mc(64,y,1,1,"ng-template",5),g.Wb(),g.Xb(65,"ngx-datatable-column",4),g.kc(66,"translate"),g.Mc(67,S,2,4,"ng-template",5),g.Wb(),g.Xb(68,"ngx-datatable-column",4),g.kc(69,"translate"),g.Mc(70,j,2,3,"ng-template",5),g.Wb(),g.Xb(71,"ngx-datatable-column",4),g.kc(72,"translate"),g.Mc(73,I,1,1,"ng-template",5),g.Wb(),g.Xb(74,"ngx-datatable-column",4),g.kc(75,"translate"),g.Mc(76,L,1,1,"ng-template",5),g.Wb(),g.Xb(77,"ngx-datatable-column",4),g.kc(78,"translate"),g.Mc(79,D,1,1,"ng-template",5),g.Wb(),g.Xb(80,"ngx-datatable-column",4),g.kc(81,"translate"),g.Mc(82,T,1,1,"ng-template",5),g.Wb(),g.Wb(),g.Wb(),g.Xb(83,"mat-tab",6),g.Xb(84,"div"),g.Xb(85,"h3"),g.Oc(86,"Renglones Eliminados:"),g.Wb(),g.Xb(87,"p"),g.Oc(88),g.Wb(),g.Xb(89,"p"),g.Oc(90),g.Wb(),g.Wb(),g.Xb(91,"div"),g.Xb(92,"h3"),g.Oc(93),g.Wb(),g.Wb(),g.Xb(94,"div"),g.Xb(95,"h3"),g.Oc(96),g.Wb(),g.Wb(),g.Xb(97,"div"),g.Xb(98,"h3"),g.Oc(99),g.Wb(),g.Wb(),g.Xb(100,"div"),g.Xb(101,"h3"),g.Oc(102),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Wb(),g.Xb(103,"mat-dialog-content",7),g.Xb(104,"div",8),g.Xb(105,"button",9),g.fc("click",function(){return t.dialogRef.close(!1)}),g.Xb(106,"mat-icon"),g.Oc(107,"cancel"),g.Wb(),g.Oc(108),g.kc(109,"translate"),g.Wb(),g.Wb(),g.Wb()),2&a&&(g.Eb(5),g.Qc("Punto de venta:",t.data.auditoria.idpv,""),g.Eb(2),g.Qc("Saldo Final:",t.data.auditoria.rsaldofinal,""),g.Eb(3),g.Qc("Fecha inicio:",g.mc(11,45,t.data.auditoria.finicio,"dd/MM/yyyy HH:mm:ss"),""),g.Eb(3),g.Qc("Fecha cierre:",g.mc(14,48,t.data.auditoria.fcierre,"dd/MM/yyyy HH:mm:ss"),""),g.Eb(26),g.Pc(t.data.auditoria.rsaldoinicial),g.Eb(2),g.Pc(t.data.auditoria.rtotefectivo),g.Eb(2),g.Pc(t.data.auditoria.rtottarjetas),g.Eb(2),g.Pc(t.data.auditoria.rtotacredito),g.Eb(2),g.Pc(t.data.auditoria.rtotmovcaja),g.Eb(2),g.Pc(t.data.auditoria.rtotmercadopago),g.Eb(2),g.Pc(t.data.auditoria.rtotcheques),g.Eb(2),g.Pc(t.data.auditoria.rtottransferencias),g.Eb(1),g.pc("@animate",g.vc(70,R,g.uc(69,G))),g.Eb(4),g.pc("rows",t.detalle)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit),g.Eb(1),g.qc("name",g.lc(60,51,"Medio de Pago")),g.pc("flexGrow",1),g.Eb(3),g.qc("name",g.lc(63,53,"PV")),g.pc("flexGrow",.5),g.Eb(3),g.qc("name",g.lc(66,55,"Fecha")),g.pc("flexGrow",1),g.Eb(3),g.qc("name",g.lc(69,57,"Importe")),g.pc("flexGrow",1),g.Eb(3),g.qc("name",g.lc(72,59,"Tipo de Movimiento")),g.pc("flexGrow",1),g.Eb(3),g.qc("name",g.lc(75,61,"Observaci\xf3n")),g.pc("flexGrow",1),g.Eb(3),g.qc("name",g.lc(78,63,"Op. Creacion")),g.pc("flexGrow",1),g.Eb(3),g.qc("name",g.lc(81,65,"Op. Modificacion")),g.pc("flexGrow",1),g.Eb(8),g.Qc("Monto:",t.data.auditoria.rtotventaseliminadas,""),g.Eb(2),g.Qc("Registros:",t.data.auditoria.rcanventaseliminadas,""),g.Eb(3),g.Qc("Anulaciones:",t.data.auditoria.rsalidas,""),g.Eb(3),g.Qc("Ajustes de Stock:",t.data.auditoria.sobsajustecaja,""),g.Eb(3),g.Qc("Operador de Apertura:",t.data.auditoria.soperadorapertura,""),g.Eb(3),g.Qc("Operador de Cierre:",t.data.auditoria.soperadorcierre,""),g.Eb(6),g.Qc("",g.lc(109,67,"Cancelar")," "))},directives:[x.e,O.a,O.b,w.b,w.a,X.d,X.b,X.a,W.c,W.b,W.a,M.b,k.a],pipes:[r.f,C.c,r.d],styles:[""],data:{animation:[s.a]}}),A),P=n("zHaW"),Q=n("Q2Ze"),q=n("e6WT"),F=n("n1FK"),V=n("TN/R"),U=n("ZTz/"),N=n("UhP/");function J(a,t){if(1&a&&(g.Xb(0,"mat-option",19),g.Oc(1),g.Wb()),2&a){var e=t.$implicit;g.pc("value",e),g.Eb(1),g.Pc(null==e?null:e.nombre)}}function _(a,t){}function Y(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",20),g.Mc(1,_,0,0,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.pc("cellClass",e.getCellClass)("sortable",!1)("flexGrow",.1)}}function z(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.idpv," ")}}function B(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,z,1,1,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"SALES.PV")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function K(a,t){if(1&a&&(g.Oc(0),g.kc(1,"date")),2&a){var e=t.row;g.Qc(" ",g.mc(1,1,null==e?null:e.finicio,"dd/MM/yyyy HH:mm:ss")," ")}}function Z(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,K,2,4,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Fecha de inicio")),g.pc("cellClass",e.getCellClass)("flexGrow",1.5)}}function $(a,t){if(1&a&&(g.Oc(0),g.kc(1,"date")),2&a){var e=t.row;g.Qc(" ",g.mc(1,1,null==e?null:e.fcierre,"dd/MM/yyyy HH:mm:ss")," ")}}function aa(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,$,2,4,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Fecha de Cierre")),g.pc("cellClass",e.getCellClass)("flexGrow",1.5)}}function ta(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rsaldoinicial)," ")}}function ea(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,ta,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Saldo inicial")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ca(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rtotefectivo)," ")}}function na(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,ca,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Total Efectivo")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function la(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rtottarjetas)," ")}}function ra(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,la,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Total Tarjetas")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function oa(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rtotacredito)," ")}}function ia(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,oa,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Total Credito")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function sa(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rtotmovcaja)," ")}}function ba(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,sa,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Total MovCaja")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ua(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rtotmercadopago)," ")}}function fa(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,ua,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Total MercadoPago")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function da(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rtotcheques)," ")}}function pa(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,da,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Total Cheques")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ma(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rtottransferencias)," ")}}function ga(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,ma,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Total Transferencias")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ha(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rajustecaja)," ")}}function va(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,ha,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Ajuste")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function xa(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rdiferencia),"\n")}}function Oa(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,xa,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Diferencia")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function wa(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rsaldofinal),"\n")}}function Xa(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",23),g.kc(1,"translate"),g.Mc(2,wa,2,3,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,4,"Saldo Final")),g.pc("minWidth",80)("cellClass",e.getCellClass)("flexGrow",1.5)}}function Wa(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.soperadorapertura,"\n")}}function Ma(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,Wa,1,1,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Op.Apertura")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ka(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.soperadorcierre,"\n")}}function Ca(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",22),g.kc(1,"translate"),g.Mc(2,ka,1,1,"ng-template",21),g.Wb()),2&a){var e=g.jc();g.qc("name",g.lc(1,3,"Op.Cierre")),g.pc("cellClass",e.getCellClass)("flexGrow",1)}}function Ea(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",26),g.fc("click",function(){g.Dc(e);var a=g.jc().row;return g.jc(2).openPopUp(a)}),g.Xb(1,"mat-icon"),g.Oc(2,"info"),g.Wb(),g.Wb()}}function ya(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",26),g.fc("click",function(){g.Dc(e);var a=g.jc().row;return g.jc(2).openUserInfoPopUp(a)}),g.Xb(1,"mat-icon"),g.Oc(2,"person_pin"),g.Wb(),g.Wb()}}function Sa(a,t){if(1&a&&(g.Mc(0,Ea,3,0,"button",25),g.Mc(1,ya,3,0,"button",25)),2&a){var e=t.row;g.pc("ngIf",!e.isGroup),g.Eb(1),g.pc("ngIf",!e.isGroup)}}function ja(a,t){1&a&&(g.Xb(0,"ngx-datatable-column",24),g.kc(1,"translate"),g.Mc(2,Sa,2,2,"ng-template",21),g.Wb()),2&a&&(g.qc("name",g.lc(1,3,"SALES.ACTIONS")),g.pc("minWidth",90)("flexGrow",1))}function Ia(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",11),g.fc("click",function(){return g.Dc(e),g.jc(3).export()}),g.Xb(1,"mat-icon"),g.Oc(2,"save_alt"),g.Wb(),g.Oc(3),g.kc(4,"translate"),g.Wb()}2&a&&(g.Eb(3),g.Pc(g.lc(4,1,"SALES.EXCEL")))}function La(a,t){if(1&a&&(g.Xb(0,"div",28),g.Sb(1,"hr",29),g.Xb(2,"div"),g.Oc(3),g.kc(4,"translate"),g.Wb(),g.Wb(),g.Xb(5,"div",30),g.Mc(6,Ia,5,3,"button",31),g.Wb()),2&a){var e=g.jc(2);g.Eb(3),g.Rc("",g.lc(4,3,"Articulos Totales"),":",e.tabla1.footer.count," "),g.Eb(3),g.pc("ngIf",e.tabla1.data.length>0)}}function Da(a,t){1&a&&(g.Xb(0,"ngx-datatable-footer"),g.Mc(1,La,7,5,"ng-template",27),g.Wb())}var Ta,Aa,Ga=function(){return{y:"50px",delay:"300ms"}},Ra=function(a){return{value:"*",params:a}},Ha=[{path:"",component:(Ta=function(){function t(e,c,n,l,r,o,s){a(this,t),this.dialog=e,this.servicioCaja=c,this.servicioExportarExcel=n,this.servicioSucursales=l,this.loader=r,this.snack=o,this.breakpointObserver=s,this.startDate=new i.f,this.endDate=new i.f}return e(t,[{key:"ngOnInit",value:function(){var a=this,t=new Date;t.setHours(0,0,0,0);var e=new Date;e.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(e),this.tabla1=new f.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.loader.open(),this.servicioSucursales.obtenerDatos(!0).subscribe(function(t){a.sucursales=t,a.sucursalActual=a.sucursales[0],a.loader.close()},function(t){a.loader.close(),a.snack.open("ERROR","OK",{duration:4e3})}),this.breakpointObserver.observe([o.b.XSmall,o.b.Small,o.b.Medium,o.b.Large,o.b.XLarge]).subscribe(function(t){a.isXSmall=a.breakpointObserver.isMatched(o.b.XSmall),a.isSmall=a.breakpointObserver.isMatched(o.b.Small),a.isMedium=a.breakpointObserver.isMatched(o.b.Medium),a.isLarge=a.breakpointObserver.isMatched(o.b.Large),a.isXLarge=a.breakpointObserver.isMatched(o.b.XLarge)})}},{key:"mostrarOcultar",value:function(a){switch(a){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}},{key:"export",value:function(){var a=this.tabla1.data.map(function(a){return{PV:a.idpv,"Saldo Inicial":a.rsaldoinicial,"Total Efectivo":a.rtotefectivo,"Total Tarjetas":a.rtottarjetas,"Total Credito":a.rtotacredito,"Total Mov Caja":a.rtotmovcaja,"Total Mercado Pago":a.rtotmercadopago,Ajuste:a.rajustecaja,Diferencia:a.rdiferencia,"Saldo Final":a.rsaldofinal,"Op.Apertura":a.soperadorapertura,"Op.Cierre":a.soperadorcierre}});this.servicioExportarExcel.exportExcel(a,"caja_reporte_movimineto","caja_reporte_movimineto")}},{key:"refresh",value:function(){var a=this;this.loader.open(),this.servicioCaja.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.puntosventasstr).subscribe(function(t){a.tabla1.setData(t.filter(function(){return!0})),a.loader.close()},function(t){a.loader.close(),a.snack.open("ERROR","OK",{duration:4e3})})}},{key:"getRowHeight",value:function(a){return 50}},{key:"getCellClass",value:function(a){var t=a.row,e=a.column;return{ngxgroup:t.isGroup,"ngx-alert-success ngx-alert-padding":"status"==e.prop&&t.rsaldofinal>0,"ngx-alert-danger ngx-alert-padding":"status"==e.prop&&t.rsaldofinal<0,"ngx-alert-warning ngx-alert-padding":"status"==e.prop&&0==t.rsaldofinal}}},{key:"tabla1OnActivate",value:function(a){"click"==a.type&&a.row.isGroup&&this.tabla1.setGroup(a.row)}},{key:"updateDate1",value:function(a){this.startDate=a.value.toDate()}},{key:"updateDate2",value:function(a){this.endDate=a.value.toDate()}},{key:"seleccionarSucursal",value:function(a){this.sucursalActual=a}},{key:"openUserInfoPopUp",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(p.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:a}})}},{key:"openPopUp",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(H,{width:"720px",disableClose:!0,data:{title:"DETALLE DE MOVIMIENTO",payload:a,auditoria:a}})}}]),t}(),Ta.\u0275fac=function(a){return new(a||Ta)(g.Rb(x.b),g.Rb(v),g.Rb(u.a),g.Rb(d.a),g.Rb(b.a),g.Rb(P.a),g.Rb(o.a))},Ta.\u0275cmp=g.Lb({type:Ta,selectors:[["app-cash-report-movement"]],decls:48,vars:71,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white","ngx-status",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],["prop","status","name","",3,"cellClass","sortable","flexGrow",4,"ngIf"],[3,"cellClass","name","flexGrow",4,"ngIf"],[3,"minWidth","cellClass","name","flexGrow",4,"ngIf"],[3,"minWidth","name","flexGrow",4,"ngIf"],[4,"ngIf"],[3,"value"],["prop","status","name","",3,"cellClass","sortable","flexGrow"],["ngx-datatable-cell-template",""],[3,"cellClass","name","flexGrow"],[3,"minWidth","cellClass","name","flexGrow"],[3,"minWidth","name","flexGrow"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(a,t){if(1&a&&(g.Xb(0,"mat-card",0),g.Xb(1,"div",1),g.Xb(2,"mat-form-field",2),g.Sb(3,"input",3),g.kc(4,"translate"),g.Sb(5,"mat-datepicker-toggle",4),g.Sb(6,"ngx-mat-datetime-picker",5,6),g.Wb(),g.Xb(8,"mat-form-field",2),g.Sb(9,"input",3),g.kc(10,"translate"),g.Sb(11,"mat-datepicker-toggle",4),g.Sb(12,"ngx-mat-datetime-picker",5,7),g.Wb(),g.Xb(14,"mat-form-field",8),g.Xb(15,"mat-label"),g.Oc(16),g.kc(17,"translate"),g.Wb(),g.Xb(18,"mat-select",9),g.fc("selectionChange",function(a){return t.seleccionarSucursal(a.value)})("valueChange",function(a){return t.sucursalActual=a}),g.Mc(19,J,2,2,"mat-option",10),g.Wb(),g.Wb(),g.Xb(20,"button",11),g.fc("click",function(){return t.refresh()}),g.Xb(21,"mat-icon"),g.Oc(22,"search"),g.Wb(),g.Oc(23),g.kc(24,"translate"),g.Wb(),g.Wb(),g.Wb(),g.Xb(25,"mat-card",0),g.Xb(26,"mat-card-content",0),g.Xb(27,"ngx-datatable",12,13),g.fc("activate",function(a){return t.tabla1OnActivate(a)}),g.Mc(29,Y,2,3,"ngx-datatable-column",14),g.Mc(30,B,3,5,"ngx-datatable-column",15),g.Mc(31,Z,3,5,"ngx-datatable-column",15),g.Mc(32,aa,3,5,"ngx-datatable-column",15),g.Mc(33,ea,3,5,"ngx-datatable-column",15),g.Mc(34,na,3,5,"ngx-datatable-column",15),g.Mc(35,ra,3,5,"ngx-datatable-column",15),g.Mc(36,ia,3,5,"ngx-datatable-column",15),g.Mc(37,ba,3,5,"ngx-datatable-column",15),g.Mc(38,fa,3,5,"ngx-datatable-column",15),g.Mc(39,pa,3,5,"ngx-datatable-column",15),g.Mc(40,ga,3,5,"ngx-datatable-column",15),g.Mc(41,va,3,5,"ngx-datatable-column",15),g.Mc(42,Oa,3,5,"ngx-datatable-column",15),g.Mc(43,Xa,3,6,"ngx-datatable-column",16),g.Mc(44,Ma,3,5,"ngx-datatable-column",15),g.Mc(45,Ca,3,5,"ngx-datatable-column",15),g.Mc(46,ja,3,5,"ngx-datatable-column",17),g.Mc(47,Da,2,0,"ngx-datatable-footer",18),g.Wb(),g.Wb(),g.Wb()),2&a){var e=g.Ac(7),c=g.Ac(13);g.Eb(3),g.qc("placeholder",g.lc(4,60,"SALES.STARTDATE")),g.pc("ngxMatDatetimePicker",e)("formControl",t.startDate),g.Eb(2),g.pc("for",e),g.Eb(1),g.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),g.Eb(3),g.qc("placeholder",g.lc(10,62,"SALES.ENDDATE")),g.pc("ngxMatDatetimePicker",c)("formControl",t.endDate),g.Eb(2),g.pc("for",c),g.Eb(1),g.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),g.Eb(4),g.Pc(g.lc(17,64,"SALES.BRANCH")),g.Eb(2),g.pc("value",t.sucursalActual),g.Eb(1),g.pc("ngForOf",t.sucursales),g.Eb(4),g.Pc(g.lc(24,66,"SALES.SHOW")),g.Eb(2),g.pc("@animate",g.vc(69,Ra,g.uc(68,Ga))),g.Eb(2),g.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",t.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",t.tabla1.rows)("selectionType","single"),g.Eb(2),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.tabla1.data.length>0)}},directives:[O.a,W.c,W.b,Q.c,q.b,F.a,i.d,i.p,i.g,V.h,Q.h,F.b,W.a,Q.f,U.a,r.n,M.b,k.a,O.b,X.d,r.o,N.n,X.b,X.a,X.e,X.c],pipes:[C.c,r.f,r.d],styles:[""],data:{animation:[s.a]}}),Ta),data:{title:"REPORTE DE MOVIMIENTO DE CAJA"}}],Pa=n("iInd"),Qa=n("u9T3"),qa=n("f44v"),Fa=n("jMqV"),Va=n("ZFy/"),Ua=n("PCNd"),Na=n("BxcV"),Ja=((Aa=function t(){a(this,t)}).\u0275mod=g.Pb({type:Aa}),Aa.\u0275inj=g.Ob({factory:function(a){return new(a||Aa)},imports:[[r.c,i.u,Qa.a,X.f,q.c,q.c,O.c,q.c,M.c,qa.a,q.c,Va.b,x.f,P.b,Fa.b,w.c,U.b,k.b,C.b,Ua.a,V.g,Na.a,F.c,F.e,F.d,i.k,Pa.k.forChild(Ha)]]}),Aa)}}])}();