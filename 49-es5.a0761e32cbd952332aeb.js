!function(){function a(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function t(a,t){for(var e=0;e<t.length;e++){var c=t[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}}function e(a,e,c){return e&&t(a.prototype,e),c&&t(a,c),a}(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{m5ja:function(t,c,n){"use strict";n.r(c),n.d(c,"PuchasesByDocumentModule",function(){return qa});var o,l=n("SVse"),r=n("u9T3"),i=n("s7LF"),s=n("Dxy4"),u=n("PDjf"),b=n("f44v"),d=n("iELJ"),p=n("Tj54"),f=n("e6WT"),m=n("ZTz/"),g=n("jMqV"),h=n("zHaW"),v=n("M9ds"),C=n("ZFy/"),E=n("TSSN"),O=n("w9WL"),x=n("PCNd"),S=n("HeVh"),w=n("GmJt"),k=n("3sEA"),y=n("wd/R"),X=n("cp0P"),D=n("bPAe"),M=n("CHRX"),W=n("UVsP"),T=n("Ap+n"),A=n("AytR"),P=n("8Y7J"),I=n("IheW"),L=((o=function(){function t(e){a(this,t),this.http=e}return e(t,[{key:"obtenerDatosTabla1",value:function(a,t,e){var c="".concat(A.a.apiURL,"Compras/DocumentosDeComprasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t);return e&&(c="".concat(A.a.apiURL,"Compras/DocumentosDeComprasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t,"&idsucursal=").concat(e)),this.http.get(encodeURI(c))}},{key:"obtenerDatosTabla2",value:function(a,t,e){var c="".concat(A.a.apiURL,"Compras/DetalleDeComprasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t);return e&&(c="".concat(A.a.apiURL,"Compras/DetalleDeComprasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t,"&idsucursal=").concat(e)),this.http.get(encodeURI(c))}},{key:"obtenerDatosCompras",value:function(a){return this.http.get(encodeURI("".concat(A.a.apiURL,"ComprasItems/DetalleDeCompraPorId?idCompra=").concat(a)))}}]),t}()).\u0275fac=function(a){return new(a||o)(P.bc(I.c))},o.\u0275prov=P.Nb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),R=n("VDRc");function N(a,t){if(1&a&&P.Oc(0),2&a){var e=t.row;P.Qc(" ",null==e?null:e.sCodProducto," ")}}function G(a,t){if(1&a&&P.Oc(0),2&a){var e=t.row;P.Qc(" ",null==e?null:e.sProducto," ")}}function H(a,t){if(1&a&&P.Oc(0),2&a){var e=t.row;P.Qc(" ",null==e?null:e.sDeposito," ")}}function U(a,t){if(1&a&&P.Oc(0),2&a){var e=t.row;P.Qc(" ",null==e?null:e.rCantidad," ")}}function F(a,t){if(1&a&&(P.Oc(0),P.kc(1,"currency")),2&a){var e=t.row;P.Qc(" ",P.lc(1,1,null==e?null:e.rPrecioU)," ")}}function j(a,t){if(1&a&&(P.Oc(0),P.kc(1,"currency")),2&a){var e=t.row;P.Qc(" ",P.lc(1,1,null==e?null:e.rDescuentos)," ")}}function V(a,t){if(1&a&&(P.Oc(0),P.kc(1,"currency")),2&a){var e=t.row;P.Qc(" ",P.lc(1,1,null==e?null:e.rImpuestos)," ")}}function q(a,t){if(1&a&&(P.Oc(0),P.kc(1,"currency")),2&a){var e=t.row;P.Qc(" ",P.lc(1,1,null==e?null:e.rTotal)," ")}}var Q,Y=function(){return{y:"50px",delay:"300ms"}},B=function(a){return{value:"*",params:a}},_=((Q=function(){function t(e,c,n,o){a(this,t),this.data=e,this.dialogRef=c,this.servicioCompras=n,this.cdRef=o,this.page={count:0,offset:0,limit:10},this.detalle=[]}return e(t,[{key:"ngOnInit",value:function(){var a=this;this.servicioCompras.obtenerDatosCompras(this.data.payload.id).subscribe(function(t){a.detalle=t,console.log(a.data)})}},{key:"ngAfterViewChecked",value:function(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}}]),t}()).\u0275fac=function(a){return new(a||Q)(P.Rb(d.a),P.Rb(d.g),P.Rb(L),P.Rb(P.h))},Q.\u0275cmp=P.Lb({type:Q,selectors:[["app-puchases-by-document-popup"]],decls:99,vars:83,consts:[["matDialogTitle","",1,"popup-title"],[1,"p-0"],["label","Detalles"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit"],[3,"name","flexGrow"],["ngx-datatable-cell-template",""],[2,"width","100%"],["align","right"],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100","fxLayoutAlign","end",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"]],template:function(a,t){1&a&&(P.Xb(0,"h1",0),P.Xb(1,"span"),P.Oc(2),P.Wb(),P.Wb(),P.Xb(3,"mat-dialog-content"),P.Xb(4,"div"),P.Xb(5,"p"),P.Xb(6,"b"),P.Oc(7,"N\xfamero:"),P.Wb(),P.Oc(8),P.Sb(9,"br"),P.Xb(10,"b"),P.Oc(11,"Cliente:"),P.Wb(),P.Oc(12),P.Sb(13,"br"),P.Xb(14,"b"),P.Oc(15,"Domicilio:"),P.Wb(),P.Oc(16),P.Sb(17,"br"),P.Xb(18,"b"),P.Oc(19,"Fecha de Carga:"),P.Wb(),P.Oc(20),P.kc(21,"date"),P.Sb(22,"br"),P.Xb(23,"b"),P.Oc(24,"Creado:"),P.Wb(),P.Oc(25),P.kc(26,"date"),P.Sb(27,"br"),P.Xb(28,"b"),P.Oc(29,"Modificado:"),P.Wb(),P.Oc(30),P.kc(31,"date"),P.Sb(32,"br"),P.Xb(33,"b"),P.Oc(34,"Confirmado:"),P.Wb(),P.Oc(35),P.Wb(),P.Wb(),P.Xb(36,"mat-card",1),P.Xb(37,"mat-card-content",1),P.Xb(38,"mat-tab-group"),P.Xb(39,"mat-tab",2),P.Xb(40,"ngx-datatable",3),P.Xb(41,"ngx-datatable-column",4),P.kc(42,"translate"),P.Mc(43,N,1,1,"ng-template",5),P.Wb(),P.Xb(44,"ngx-datatable-column",4),P.kc(45,"translate"),P.Mc(46,G,1,1,"ng-template",5),P.Wb(),P.Xb(47,"ngx-datatable-column",4),P.kc(48,"translate"),P.Mc(49,H,1,1,"ng-template",5),P.Wb(),P.Xb(50,"ngx-datatable-column",4),P.kc(51,"translate"),P.Mc(52,U,1,1,"ng-template",5),P.Wb(),P.Xb(53,"ngx-datatable-column",4),P.kc(54,"translate"),P.Mc(55,F,2,3,"ng-template",5),P.Wb(),P.Xb(56,"ngx-datatable-column",4),P.kc(57,"translate"),P.Mc(58,j,2,3,"ng-template",5),P.Wb(),P.Xb(59,"ngx-datatable-column",4),P.kc(60,"translate"),P.Mc(61,V,2,3,"ng-template",5),P.Wb(),P.Xb(62,"ngx-datatable-column",4),P.kc(63,"translate"),P.Mc(64,q,2,3,"ng-template",5),P.Wb(),P.Wb(),P.Wb(),P.Wb(),P.Wb(),P.Wb(),P.Xb(65,"div"),P.Xb(66,"table",6),P.Xb(67,"tr"),P.Xb(68,"th"),P.Oc(69,"Total neto"),P.Wb(),P.Xb(70,"th"),P.Oc(71,"Total Descuentos"),P.Wb(),P.Xb(72,"th"),P.Oc(73,"Total Impuestos"),P.Wb(),P.Xb(74,"th"),P.Oc(75,"Total Bruto"),P.Wb(),P.Wb(),P.Xb(76,"tr"),P.Xb(77,"th"),P.Oc(78),P.kc(79,"currency"),P.Wb(),P.Xb(80,"th"),P.Oc(81),P.kc(82,"currency"),P.Wb(),P.Xb(83,"th"),P.Oc(84),P.kc(85,"currency"),P.Wb(),P.Xb(86,"th"),P.Oc(87),P.kc(88,"currency"),P.Wb(),P.Wb(),P.Wb(),P.Wb(),P.Xb(89,"h2",7),P.Oc(90),P.kc(91,"currency"),P.Wb(),P.Wb(),P.Xb(92,"mat-dialog-content",8),P.Xb(93,"div",9),P.Xb(94,"button",10),P.fc("click",function(){return t.dialogRef.close(!1)}),P.Xb(95,"mat-icon"),P.Oc(96,"cancel"),P.Wb(),P.Oc(97),P.kc(98,"translate"),P.Wb(),P.Wb(),P.Wb()),2&a&&(P.Eb(2),P.Rc("",t.data.payload.idTipoDoc,"-",t.data.payload.Comprobante," "),P.Eb(6),P.Pc(t.data.payload.idNumDoc),P.Eb(4),P.Pc(t.data.payload.sRazonSocial),P.Eb(4),P.Pc(t.data.payload.sDomicilio),P.Eb(4),P.Pc(P.mc(21,43,t.data.payload.fCarga,"dd/MM/yyyy ' a las ' HH:mm")),P.Eb(5),P.Rc("",P.mc(26,46,t.data.payload.fCreacion,"dd/MM/yyyy ' a las ' HH:mm")," por ",t.data.payload.sOperadorCreacion,""),P.Eb(5),P.Rc("",P.mc(31,49,t.data.payload.fCreacion,"dd/MM/yyyy ' a las ' HH:mm")," por ",t.data.payload.sOperadorModificacion,""),P.Eb(5),P.Qc("","T"==t.data.payload.bConfirmado?"Si":"No"," "),P.Eb(1),P.pc("@animate",P.vc(81,B,P.uc(80,Y))),P.Eb(4),P.pc("rows",t.detalle)("columnMode","flex")("headerHeight",50)("footerHeight",t.detalle.length>10?50:0)("scrollbarH",!0)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit),P.Eb(1),P.qc("name",P.lc(42,52,"Codigo de Producto")),P.pc("flexGrow",.5),P.Eb(3),P.qc("name",P.lc(45,54,"Descripci\xf3n")),P.pc("flexGrow",2),P.Eb(3),P.qc("name",P.lc(48,56,"Dep\xf3sito")),P.pc("flexGrow",1),P.Eb(3),P.qc("name",P.lc(51,58,"Cantidad")),P.pc("flexGrow",1),P.Eb(3),P.qc("name",P.lc(54,60,"Precio")),P.pc("flexGrow",1),P.Eb(3),P.qc("name",P.lc(57,62,"Descuentos")),P.pc("flexGrow",1),P.Eb(3),P.qc("name",P.lc(60,64,"Impuestos")),P.pc("flexGrow",1),P.Eb(3),P.qc("name",P.lc(63,66,"Total")),P.pc("flexGrow",1),P.Eb(16),P.Pc(P.lc(79,68,t.data.payload.rTotNeto)),P.Eb(3),P.Pc(P.lc(82,70,t.data.payload.rTotDescuento)),P.Eb(3),P.Pc(P.lc(85,72,t.data.payload.rTotImpuestos)),P.Eb(3),P.Pc(P.lc(88,74,t.data.payload.rTotBruto)),P.Eb(3),P.Qc(" Total:",P.lc(91,76,t.data.payload.rTotBruto)," "),P.Eb(7),P.Qc("",P.lc(98,78,"Cancelar")," "))},directives:[d.h,d.e,u.a,u.b,v.b,v.a,O.d,O.b,O.a,R.c,R.b,R.a,s.b,p.a],pipes:[l.f,E.c,l.d],styles:[""],data:{animation:[w.a]}}),Q),z=n("Q2Ze"),J=n("n1FK"),K=n("TN/R"),Z=n("UhP/");function $(a,t){if(1&a&&(P.Xb(0,"mat-option",17),P.Oc(1),P.Wb()),2&a){var e=t.$implicit;P.pc("value",e),P.Eb(1),P.Pc(null==e?null:e.nombre)}}function aa(a,t){if(1&a&&(P.Oc(0),P.kc(1,"date")),2&a){var e=t.row;P.Qc(" ",P.mc(1,1,null==e?null:e.fDocumento,"dd/MM/yyyy HH:mm:ss")," ")}}function ta(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,aa,2,4,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"SALES.DATE")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ea(a,t){if(1&a&&P.Oc(0),2&a){var e=t.row;P.Qc(" ",null==e?null:e.idTipoDoc," ")}}function ca(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,ea,1,1,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"SALES.TYPE")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function na(a,t){if(1&a&&P.Oc(0),2&a){var e=t.row;P.Qc(" ",null==e?null:e.idPV," ")}}function oa(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,na,1,1,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"SALES.PV")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function la(a,t){if(1&a&&P.Oc(0),2&a){var e=t.row;P.Qc(" ",null==e?null:e.idNumDoc," ")}}function ra(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,la,1,1,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"SALES.NUMBER")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ia(a,t){if(1&a&&P.Oc(0),2&a){var e=t.row;P.Qc(" ",null==e?null:e.sSucursal," ")}}function sa(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,ia,1,1,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"Sucursal")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ua(a,t){if(1&a&&P.Oc(0),2&a){var e=t.row;P.Qc(" ",null==e?null:e.sRazonSocial," ")}}function ba(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,ua,1,1,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"Proveedor")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function da(a,t){1&a&&(P.Xb(0,"span"),P.Oc(1,"Si"),P.Wb())}function pa(a,t){1&a&&(P.Xb(0,"span"),P.Oc(1,"No"),P.Wb())}function fa(a,t){if(1&a&&(P.Mc(0,da,2,0,"span",16),P.Mc(1,pa,2,0,"span",16)),2&a){var e=t.row;P.pc("ngIf","T"==(null==e?null:e.bAnulado)),P.Eb(1),P.pc("ngIf","F"==(null==e?null:e.bAnulado))}}function ma(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,fa,2,2,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"SALES.CANCELED")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ga(a,t){1&a&&(P.Xb(0,"span"),P.Oc(1,"Si"),P.Wb())}function ha(a,t){1&a&&(P.Xb(0,"span"),P.Oc(1,"No"),P.Wb())}function va(a,t){if(1&a&&(P.Mc(0,ga,2,0,"span",16),P.Mc(1,ha,2,0,"span",16)),2&a){var e=t.row;P.pc("ngIf","T"==(null==e?null:e.bConfirmado)),P.Eb(1),P.pc("ngIf","F"==(null==e?null:e.bConfirmado))}}function Ca(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,va,2,2,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"Confirmado")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function Ea(a,t){if(1&a&&P.Oc(0),2&a){var e=t.row;P.Qc(" ",null==e?null:e.sCondVenta," ")}}function Oa(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,Ea,1,1,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"SALES.SALESCONDITION")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function xa(a,t){if(1&a&&(P.Oc(0),P.kc(1,"currency")),2&a){var e=t.row;P.Qc(" ",P.lc(1,1,null==e?null:e.rTotDescuento)," ")}}function Sa(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,xa,2,3,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"SALES.DISCOUNTS")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function wa(a,t){if(1&a&&(P.Oc(0),P.kc(1,"currency")),2&a){var e=t.row;P.Qc(" ",P.lc(1,1,null==e?null:e.rTotBruto)," ")}}function ka(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,wa,2,3,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"SALES.TOTAL")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function ya(a,t){1&a&&(P.Xb(0,"span"),P.Oc(1,"Si"),P.Wb())}function Xa(a,t){1&a&&(P.Xb(0,"span"),P.Oc(1,"No"),P.Wb())}function Da(a,t){if(1&a&&(P.Mc(0,ya,2,0,"span",16),P.Mc(1,Xa,2,0,"span",16)),2&a){var e=t.row;P.pc("ngIf","T"==(null==e?null:e.bAfectaStock)),P.Eb(1),P.pc("ngIf","F"==(null==e?null:e.bAfectaStock))}}function Ma(a,t){if(1&a&&(P.Xb(0,"ngx-datatable-column",18),P.kc(1,"translate"),P.Mc(2,Da,2,2,"ng-template",19),P.Wb()),2&a){var e=P.jc();P.qc("name",P.lc(1,3,"Afecta Stock")),P.pc("cellClass",e.getCellClass)("flexGrow",1)}}function Wa(a,t){if(1&a){var e=P.Yb();P.Xb(0,"button",22),P.fc("click",function(){P.Dc(e);var a=P.jc().row;return P.jc(2).openPopUp(a)}),P.Xb(1,"mat-icon"),P.Oc(2,"info"),P.Wb(),P.Wb()}}function Ta(a,t){if(1&a){var e=P.Yb();P.Xb(0,"button",22),P.fc("click",function(){P.Dc(e);var a=P.jc().row;return P.jc(2).openUserInfoPopUp(a)}),P.Xb(1,"mat-icon"),P.Oc(2,"person_pin"),P.Wb(),P.Wb()}}function Aa(a,t){if(1&a&&(P.Mc(0,Wa,3,0,"button",21),P.Mc(1,Ta,3,0,"button",21)),2&a){var e=t.row;P.pc("ngIf",!e.isGroup),P.Eb(1),P.pc("ngIf",!e.isGroup)}}function Pa(a,t){1&a&&(P.Xb(0,"ngx-datatable-column",20),P.kc(1,"translate"),P.Mc(2,Aa,2,2,"ng-template",19),P.Wb()),2&a&&(P.qc("name",P.lc(1,3,"SALES.ACTIONS")),P.pc("flexGrow",1)("minWidth",50))}function Ia(a,t){if(1&a){var e=P.Yb();P.Xb(0,"button",11),P.fc("click",function(){return P.Dc(e),P.jc(3).export()}),P.Xb(1,"mat-icon"),P.Oc(2,"save_alt"),P.Wb(),P.Oc(3),P.kc(4,"translate"),P.Wb()}2&a&&(P.Eb(3),P.Pc(P.lc(4,1,"SALES.EXCEL")))}function La(a,t){if(1&a&&(P.Xb(0,"div",24),P.Xb(1,"div"),P.Xb(2,"strong"),P.Oc(3),P.kc(4,"translate"),P.Wb(),P.Wb(),P.Sb(5,"hr",25),P.Xb(6,"div"),P.Oc(7),P.kc(8,"translate"),P.kc(9,"currency"),P.kc(10,"translate"),P.kc(11,"currency"),P.Wb(),P.Wb(),P.Xb(12,"div",26),P.Mc(13,Ia,5,3,"button",27),P.Wb()),2&a){var e=P.jc(2);P.Eb(3),P.Pc(P.lc(4,7,"SALES.FOOTERTOTALS")),P.Eb(4),P.Uc("",e.tabla1.footer.count," | ",P.lc(8,9,"SALES.TOTAL"),": ",P.lc(9,11,e.tabla1.footer.rTotBruto)," | ",P.lc(10,13,"SALES.DISCOUNTS"),": ",P.lc(11,15,e.tabla1.footer.rTotDescuento),""),P.Eb(6),P.pc("ngIf",e.tabla1.data.length>0)}}function Ra(a,t){1&a&&(P.Xb(0,"ngx-datatable-footer"),P.Mc(1,La,14,17,"ng-template",23),P.Wb())}var Na,Ga,Ha=function(){return{y:"50px",delay:"300ms"}},Ua=function(a){return{value:"*",params:a}},Fa=[{path:"",component:(Na=function(){function t(e,c,n,o,l,r,s){a(this,t),this.dialog=e,this.servicioCompras=c,this.servicioExportarExcel=n,this.servicioSucursales=o,this.loader=l,this.snack=r,this.breakpointObserver=s,this.startDate=new i.e,this.endDate=new i.e}return e(t,[{key:"ngOnInit",value:function(){var a=this,t=new Date;t.setHours(0,0,0,0);var e=new Date;e.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(e),this.tabla1=new M.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new M.a,this.tabla2.groupField="Producto",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(function(t){a.sucursales=t,a.sucursalActual=a.sucursales[0],a.loader.close()},function(t){a.loader.close(),a.snack.open("ERROR","OK",{duration:4e3})}),this.breakpointObserver.observe([S.b.XSmall,S.b.Small,S.b.Medium,S.b.Large,S.b.XLarge]).subscribe(function(t){a.isXSmall=a.breakpointObserver.isMatched(S.b.XSmall),a.isSmall=a.breakpointObserver.isMatched(S.b.Small),a.isMedium=a.breakpointObserver.isMatched(S.b.Medium),a.isLarge=a.breakpointObserver.isMatched(S.b.Large),a.isXLarge=a.breakpointObserver.isMatched(S.b.XLarge)})}},{key:"mostrarOcultar",value:function(a){switch(a){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}},{key:"export",value:function(){var a=this.tabla1.data.map(function(a){return{Fecha:y(a.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Tipo:a.idTipoDoc,PV:a.idPV,Numero:a.idNumDoc,Sucursal:a.sSucursal,Proveedor:a.sRazonSocial,Anulado:"T"==a.bAnulado?"Si":"No",Confirmado:"T"==a.bConfirmado?"Si":"No","Condici\xf3n Venta":a.sCondVenta,Total:a.rTotBruto}});this.servicioExportarExcel.exportExcel(a,"compras","compra")}},{key:"export2Detalle",value:function(){var a=this.tabla2.data.map(function(a){return{idcompra:a.idcompra,Tipo:a.idTipoDoc,PV:a.idPV,Numero:a.idNumDoc,Fecha:y(a.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Totalcompra:a.rTotBruto,"Cond.compra":a.sCondcompra,"Cond.Pago":a.sCondPago,Carga:y(a.fCarga).format("DD/MM/YYYY hh:mm:ss"),"OperadorCreaci\xf3n":a.sOperadorCreacion,Comprobante:a.Comprobante,Anulado:"T"==a.bAnulado?"Si":"No",Total:a.rTotBruto,Cliente:a.sRazonSocial,CUIT:a.sCIOT,idProducto:a.idProducto,sCodProducto:a.sCodProducto,Producto:a.Producto,Costo:a.rCostoU,PrecioU:a.rPrecioU,Cantidad:a.rCantidad,Neto:a.rNeto,Descuentos:a.rDescuentos,Impuestos:a.rImpuestos,Familia:a.sFamilia,Proveedor:a.sProveedor,EAN:a.sEAN,EAN2:a.sEAN2,AlicIVA:a.rPorcIVA,AlicDGR:a.rPorcDGR,Interno:a.rValorImpInterno}});this.servicioExportarExcel.exportExcel(a,"compras_detalle","compras_detalle")}},{key:"export2Totales",value:function(){var a=this.tabla2.data.map(function(a){return{Producto:a.Producto,PV:a.idPV,EAN:a.sEAN,EAN2:a.sEAN2,Familia:a.sFamilia,Proveedor:a.sProveedor,Cantidad:a.rCantidad,PrecioU:a.rPrecioU,Total:a.rTotBruto}});this.servicioExportarExcel.exportExcel(a,"compras_detalle_totales","compras_detalle_totales")}},{key:"refresh",value:function(){var a=this;this.loader.open(),Object(X.a)([this.servicioCompras.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id),this.servicioCompras.obtenerDatosTabla2(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id)]).subscribe(function(t){console.log(t[0]),a.tabla1.setData(t[0].filter(function(){return!0})),a.tabla2.setData(t[1].filter(function(){return!0})),a.loader.close()},function(t){a.loader.close(),a.snack.open("ERROR","OK",{duration:4e3})})}},{key:"getRowHeight",value:function(a){return 50}},{key:"getCellClass",value:function(a){return{ngxgroup:a.row.isGroup}}},{key:"tabla1OnActivate",value:function(a){"click"==a.type&&a.row.isGroup&&this.tabla1.setGroup(a.row)}},{key:"tabla2OnActivate",value:function(a){"click"==a.type&&a.row.isGroup&&this.tabla2.setGroup(a.row)}},{key:"updateDate1",value:function(a){this.startDate=a.value.toDate()}},{key:"updateDate2",value:function(a){this.endDate=a.value.toDate()}},{key:"seleccionarSucursal",value:function(a){this.sucursalActual=a}},{key:"openPopUp",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loader.open(),this.loader.close(),this.dialog.open(_,{width:"720px",disableClose:!0,data:{title:"DETALLE DE COMPRA",payload:a}}).afterClosed().subscribe(function(a){})}},{key:"openUserInfoPopUp",value:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(T.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:a}})}}]),t}(),Na.\u0275fac=function(a){return new(a||Na)(P.Rb(d.b),P.Rb(L),P.Rb(D.a),P.Rb(W.a),P.Rb(k.a),P.Rb(h.a),P.Rb(S.a))},Na.\u0275cmp=P.Lb({type:Na,selectors:[["app-puchases-by-document"]],decls:43,vars:66,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","name","flexGrow",4,"ngIf"],[3,"name","flexGrow","minWidth",4,"ngIf"],[4,"ngIf"],[3,"value"],[3,"cellClass","name","flexGrow"],["ngx-datatable-cell-template",""],[3,"name","flexGrow","minWidth"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(a,t){if(1&a&&(P.Xb(0,"mat-card",0),P.Xb(1,"div",1),P.Xb(2,"mat-form-field",2),P.Sb(3,"input",3),P.kc(4,"translate"),P.Sb(5,"mat-datepicker-toggle",4),P.Sb(6,"ngx-mat-datetime-picker",5,6),P.Wb(),P.Xb(8,"mat-form-field",2),P.Sb(9,"input",3),P.kc(10,"translate"),P.Sb(11,"mat-datepicker-toggle",4),P.Sb(12,"ngx-mat-datetime-picker",5,7),P.Wb(),P.Xb(14,"mat-form-field",8),P.Xb(15,"mat-label"),P.Oc(16),P.kc(17,"translate"),P.Wb(),P.Xb(18,"mat-select",9),P.fc("selectionChange",function(a){return t.seleccionarSucursal(a.value)})("valueChange",function(a){return t.sucursalActual=a}),P.Mc(19,$,2,2,"mat-option",10),P.Wb(),P.Wb(),P.Xb(20,"button",11),P.fc("click",function(){return t.refresh()}),P.Xb(21,"mat-icon"),P.Oc(22,"search"),P.Wb(),P.Oc(23),P.kc(24,"translate"),P.Wb(),P.Wb(),P.Wb(),P.Xb(25,"mat-card",0),P.Xb(26,"mat-card-content",0),P.Xb(27,"ngx-datatable",12,13),P.fc("activate",function(a){return t.tabla1OnActivate(a)}),P.Mc(29,ta,3,5,"ngx-datatable-column",14),P.Mc(30,ca,3,5,"ngx-datatable-column",14),P.Mc(31,oa,3,5,"ngx-datatable-column",14),P.Mc(32,ra,3,5,"ngx-datatable-column",14),P.Mc(33,sa,3,5,"ngx-datatable-column",14),P.Mc(34,ba,3,5,"ngx-datatable-column",14),P.Mc(35,ma,3,5,"ngx-datatable-column",14),P.Mc(36,Ca,3,5,"ngx-datatable-column",14),P.Mc(37,Oa,3,5,"ngx-datatable-column",14),P.Mc(38,Sa,3,5,"ngx-datatable-column",14),P.Mc(39,ka,3,5,"ngx-datatable-column",14),P.Mc(40,Ma,3,5,"ngx-datatable-column",14),P.Mc(41,Pa,3,5,"ngx-datatable-column",15),P.Mc(42,Ra,2,0,"ngx-datatable-footer",16),P.Wb(),P.Wb(),P.Wb()),2&a){var e=P.Ac(7),c=P.Ac(13);P.Eb(3),P.qc("placeholder",P.lc(4,55,"SALES.STARTDATE")),P.pc("ngxMatDatetimePicker",e)("formControl",t.startDate),P.Eb(2),P.pc("for",e),P.Eb(1),P.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),P.Eb(3),P.qc("placeholder",P.lc(10,57,"SALES.ENDDATE")),P.pc("ngxMatDatetimePicker",c)("formControl",t.endDate),P.Eb(2),P.pc("for",c),P.Eb(1),P.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),P.Eb(4),P.Pc(P.lc(17,59,"SALES.BRANCH")),P.Eb(2),P.pc("value",t.sucursalActual),P.Eb(1),P.pc("ngForOf",t.sucursales),P.Eb(4),P.Pc(P.lc(24,61,"SALES.SHOW")),P.Eb(2),P.pc("@animate",P.vc(64,Ua,P.uc(63,Ha))),P.Eb(2),P.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",t.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",t.tabla1.rows)("selectionType","single"),P.Eb(2),P.pc("ngIf",t.mostrarOcultar("XS")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("XS")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("L")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("L")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("XS")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("L")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("L")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("L")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("L")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("L")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("XS")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("L")),P.Eb(1),P.pc("ngIf",t.mostrarOcultar("XS")),P.Eb(1),P.pc("ngIf",t.tabla1.data.length>0)}},directives:[u.a,R.c,R.b,z.c,f.b,J.a,i.c,i.o,i.f,K.h,z.h,J.b,R.a,z.f,m.a,l.n,s.b,p.a,u.b,O.d,l.o,Z.n,O.b,O.a,O.e,O.c],pipes:[E.c,l.f,l.d],styles:[""],data:{animation:[w.a]}}),Na),data:{title:"Por Documento"}}],ja=n("iInd"),Va=n("BxcV"),qa=((Ga=function t(){a(this,t)}).\u0275mod=P.Pb({type:Ga}),Ga.\u0275inj=P.Ob({factory:function(a){return new(a||Ga)},imports:[[l.c,i.t,r.a,O.f,f.c,f.c,u.c,f.c,s.c,b.a,f.c,C.b,d.f,h.b,g.b,v.c,m.b,p.b,E.b,x.a,K.g,Va.a,J.c,J.e,J.d,i.j,ja.k.forChild(Fa)]]}),Ga)}}])}();