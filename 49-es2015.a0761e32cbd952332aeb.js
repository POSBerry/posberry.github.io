(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{m5ja:function(t,a,e){"use strict";e.r(a),e.d(a,"PuchasesByDocumentModule",function(){return Gt});var c=e("SVse"),o=e("u9T3"),n=e("s7LF"),l=e("Dxy4"),r=e("PDjf"),s=e("f44v"),i=e("iELJ"),b=e("Tj54"),u=e("e6WT"),d=e("ZTz/"),p=e("jMqV"),m=e("zHaW"),f=e("M9ds"),g=e("ZFy/"),h=e("TSSN"),C=e("w9WL"),E=e("PCNd"),O=e("HeVh"),x=e("GmJt"),S=e("3sEA"),w=e("wd/R"),X=e("cp0P"),D=e("bPAe"),M=e("CHRX"),W=e("UVsP"),k=e("Ap+n"),y=e("AytR"),T=e("8Y7J"),v=e("IheW");let A=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,a,e){let c=`${y.a.apiURL}Compras/DocumentosDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}`;return e&&(c=`${y.a.apiURL}Compras/DocumentosDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}&idsucursal=${e}`),this.http.get(encodeURI(c))}obtenerDatosTabla2(t,a,e){let c=`${y.a.apiURL}Compras/DetalleDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}`;return e&&(c=`${y.a.apiURL}Compras/DetalleDeComprasEnUnaFecha?fdesde=${t}&fhasta=${a}&idsucursal=${e}`),this.http.get(encodeURI(c))}obtenerDatosCompras(t){return this.http.get(encodeURI(`${y.a.apiURL}ComprasItems/DetalleDeCompraPorId?idCompra=${t}`))}}return t.\u0275fac=function(a){return new(a||t)(T.bc(v.c))},t.\u0275prov=T.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var I=e("VDRc");function P(t,a){if(1&t&&T.Oc(0),2&t){const t=a.row;T.Qc(" ",null==t?null:t.sCodProducto," ")}}function L(t,a){if(1&t&&T.Oc(0),2&t){const t=a.row;T.Qc(" ",null==t?null:t.sProducto," ")}}function R(t,a){if(1&t&&T.Oc(0),2&t){const t=a.row;T.Qc(" ",null==t?null:t.sDeposito," ")}}function N(t,a){if(1&t&&T.Oc(0),2&t){const t=a.row;T.Qc(" ",null==t?null:t.rCantidad," ")}}function G(t,a){if(1&t&&(T.Oc(0),T.kc(1,"currency")),2&t){const t=a.row;T.Qc(" ",T.lc(1,1,null==t?null:t.rPrecioU)," ")}}function H(t,a){if(1&t&&(T.Oc(0),T.kc(1,"currency")),2&t){const t=a.row;T.Qc(" ",T.lc(1,1,null==t?null:t.rDescuentos)," ")}}function U(t,a){if(1&t&&(T.Oc(0),T.kc(1,"currency")),2&t){const t=a.row;T.Qc(" ",T.lc(1,1,null==t?null:t.rImpuestos)," ")}}function F(t,a){if(1&t&&(T.Oc(0),T.kc(1,"currency")),2&t){const t=a.row;T.Qc(" ",T.lc(1,1,null==t?null:t.rTotal)," ")}}const j=function(){return{y:"50px",delay:"300ms"}},V=function(t){return{value:"*",params:t}};let q=(()=>{class t{constructor(t,a,e,c){this.data=t,this.dialogRef=a,this.servicioCompras=e,this.cdRef=c,this.page={count:0,offset:0,limit:10},this.detalle=[]}ngOnInit(){this.servicioCompras.obtenerDatosCompras(this.data.payload.id).subscribe(t=>{this.detalle=t,console.log(this.data)})}ngAfterViewChecked(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}}return t.\u0275fac=function(a){return new(a||t)(T.Rb(i.a),T.Rb(i.g),T.Rb(A),T.Rb(T.h))},t.\u0275cmp=T.Lb({type:t,selectors:[["app-puchases-by-document-popup"]],decls:99,vars:83,consts:[["matDialogTitle","",1,"popup-title"],[1,"p-0"],["label","Detalles"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit"],[3,"name","flexGrow"],["ngx-datatable-cell-template",""],[2,"width","100%"],["align","right"],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100","fxLayoutAlign","end",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"]],template:function(t,a){1&t&&(T.Xb(0,"h1",0),T.Xb(1,"span"),T.Oc(2),T.Wb(),T.Wb(),T.Xb(3,"mat-dialog-content"),T.Xb(4,"div"),T.Xb(5,"p"),T.Xb(6,"b"),T.Oc(7,"N\xfamero:"),T.Wb(),T.Oc(8),T.Sb(9,"br"),T.Xb(10,"b"),T.Oc(11,"Cliente:"),T.Wb(),T.Oc(12),T.Sb(13,"br"),T.Xb(14,"b"),T.Oc(15,"Domicilio:"),T.Wb(),T.Oc(16),T.Sb(17,"br"),T.Xb(18,"b"),T.Oc(19,"Fecha de Carga:"),T.Wb(),T.Oc(20),T.kc(21,"date"),T.Sb(22,"br"),T.Xb(23,"b"),T.Oc(24,"Creado:"),T.Wb(),T.Oc(25),T.kc(26,"date"),T.Sb(27,"br"),T.Xb(28,"b"),T.Oc(29,"Modificado:"),T.Wb(),T.Oc(30),T.kc(31,"date"),T.Sb(32,"br"),T.Xb(33,"b"),T.Oc(34,"Confirmado:"),T.Wb(),T.Oc(35),T.Wb(),T.Wb(),T.Xb(36,"mat-card",1),T.Xb(37,"mat-card-content",1),T.Xb(38,"mat-tab-group"),T.Xb(39,"mat-tab",2),T.Xb(40,"ngx-datatable",3),T.Xb(41,"ngx-datatable-column",4),T.kc(42,"translate"),T.Mc(43,P,1,1,"ng-template",5),T.Wb(),T.Xb(44,"ngx-datatable-column",4),T.kc(45,"translate"),T.Mc(46,L,1,1,"ng-template",5),T.Wb(),T.Xb(47,"ngx-datatable-column",4),T.kc(48,"translate"),T.Mc(49,R,1,1,"ng-template",5),T.Wb(),T.Xb(50,"ngx-datatable-column",4),T.kc(51,"translate"),T.Mc(52,N,1,1,"ng-template",5),T.Wb(),T.Xb(53,"ngx-datatable-column",4),T.kc(54,"translate"),T.Mc(55,G,2,3,"ng-template",5),T.Wb(),T.Xb(56,"ngx-datatable-column",4),T.kc(57,"translate"),T.Mc(58,H,2,3,"ng-template",5),T.Wb(),T.Xb(59,"ngx-datatable-column",4),T.kc(60,"translate"),T.Mc(61,U,2,3,"ng-template",5),T.Wb(),T.Xb(62,"ngx-datatable-column",4),T.kc(63,"translate"),T.Mc(64,F,2,3,"ng-template",5),T.Wb(),T.Wb(),T.Wb(),T.Wb(),T.Wb(),T.Wb(),T.Xb(65,"div"),T.Xb(66,"table",6),T.Xb(67,"tr"),T.Xb(68,"th"),T.Oc(69,"Total neto"),T.Wb(),T.Xb(70,"th"),T.Oc(71,"Total Descuentos"),T.Wb(),T.Xb(72,"th"),T.Oc(73,"Total Impuestos"),T.Wb(),T.Xb(74,"th"),T.Oc(75,"Total Bruto"),T.Wb(),T.Wb(),T.Xb(76,"tr"),T.Xb(77,"th"),T.Oc(78),T.kc(79,"currency"),T.Wb(),T.Xb(80,"th"),T.Oc(81),T.kc(82,"currency"),T.Wb(),T.Xb(83,"th"),T.Oc(84),T.kc(85,"currency"),T.Wb(),T.Xb(86,"th"),T.Oc(87),T.kc(88,"currency"),T.Wb(),T.Wb(),T.Wb(),T.Wb(),T.Xb(89,"h2",7),T.Oc(90),T.kc(91,"currency"),T.Wb(),T.Wb(),T.Xb(92,"mat-dialog-content",8),T.Xb(93,"div",9),T.Xb(94,"button",10),T.fc("click",function(){return a.dialogRef.close(!1)}),T.Xb(95,"mat-icon"),T.Oc(96,"cancel"),T.Wb(),T.Oc(97),T.kc(98,"translate"),T.Wb(),T.Wb(),T.Wb()),2&t&&(T.Eb(2),T.Rc("",a.data.payload.idTipoDoc,"-",a.data.payload.Comprobante," "),T.Eb(6),T.Pc(a.data.payload.idNumDoc),T.Eb(4),T.Pc(a.data.payload.sRazonSocial),T.Eb(4),T.Pc(a.data.payload.sDomicilio),T.Eb(4),T.Pc(T.mc(21,43,a.data.payload.fCarga,"dd/MM/yyyy ' a las ' HH:mm")),T.Eb(5),T.Rc("",T.mc(26,46,a.data.payload.fCreacion,"dd/MM/yyyy ' a las ' HH:mm")," por ",a.data.payload.sOperadorCreacion,""),T.Eb(5),T.Rc("",T.mc(31,49,a.data.payload.fCreacion,"dd/MM/yyyy ' a las ' HH:mm")," por ",a.data.payload.sOperadorModificacion,""),T.Eb(5),T.Qc("","T"==a.data.payload.bConfirmado?"Si":"No"," "),T.Eb(1),T.pc("@animate",T.vc(81,V,T.uc(80,j))),T.Eb(4),T.pc("rows",a.detalle)("columnMode","flex")("headerHeight",50)("footerHeight",a.detalle.length>10?50:0)("scrollbarH",!0)("rowHeight",50)("count",a.page.count)("offset",a.page.offset)("limit",a.page.limit),T.Eb(1),T.qc("name",T.lc(42,52,"Codigo de Producto")),T.pc("flexGrow",.5),T.Eb(3),T.qc("name",T.lc(45,54,"Descripci\xf3n")),T.pc("flexGrow",2),T.Eb(3),T.qc("name",T.lc(48,56,"Dep\xf3sito")),T.pc("flexGrow",1),T.Eb(3),T.qc("name",T.lc(51,58,"Cantidad")),T.pc("flexGrow",1),T.Eb(3),T.qc("name",T.lc(54,60,"Precio")),T.pc("flexGrow",1),T.Eb(3),T.qc("name",T.lc(57,62,"Descuentos")),T.pc("flexGrow",1),T.Eb(3),T.qc("name",T.lc(60,64,"Impuestos")),T.pc("flexGrow",1),T.Eb(3),T.qc("name",T.lc(63,66,"Total")),T.pc("flexGrow",1),T.Eb(16),T.Pc(T.lc(79,68,a.data.payload.rTotNeto)),T.Eb(3),T.Pc(T.lc(82,70,a.data.payload.rTotDescuento)),T.Eb(3),T.Pc(T.lc(85,72,a.data.payload.rTotImpuestos)),T.Eb(3),T.Pc(T.lc(88,74,a.data.payload.rTotBruto)),T.Eb(3),T.Qc(" Total:",T.lc(91,76,a.data.payload.rTotBruto)," "),T.Eb(7),T.Qc("",T.lc(98,78,"Cancelar")," "))},directives:[i.h,i.e,r.a,r.b,f.b,f.a,C.d,C.b,C.a,I.c,I.b,I.a,l.b,b.a],pipes:[c.f,h.c,c.d],styles:[""],data:{animation:[x.a]}}),t})();var Q=e("Q2Ze"),Y=e("n1FK"),$=e("TN/R"),B=e("UhP/");function _(t,a){if(1&t&&(T.Xb(0,"mat-option",17),T.Oc(1),T.Wb()),2&t){const t=a.$implicit;T.pc("value",t),T.Eb(1),T.Pc(null==t?null:t.nombre)}}function z(t,a){if(1&t&&(T.Oc(0),T.kc(1,"date")),2&t){const t=a.row;T.Qc(" ",T.mc(1,1,null==t?null:t.fDocumento,"dd/MM/yyyy HH:mm:ss")," ")}}function J(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,z,2,4,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"SALES.DATE")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function K(t,a){if(1&t&&T.Oc(0),2&t){const t=a.row;T.Qc(" ",null==t?null:t.idTipoDoc," ")}}function Z(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,K,1,1,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"SALES.TYPE")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function tt(t,a){if(1&t&&T.Oc(0),2&t){const t=a.row;T.Qc(" ",null==t?null:t.idPV," ")}}function at(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,tt,1,1,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"SALES.PV")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function et(t,a){if(1&t&&T.Oc(0),2&t){const t=a.row;T.Qc(" ",null==t?null:t.idNumDoc," ")}}function ct(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,et,1,1,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"SALES.NUMBER")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function ot(t,a){if(1&t&&T.Oc(0),2&t){const t=a.row;T.Qc(" ",null==t?null:t.sSucursal," ")}}function nt(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,ot,1,1,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"Sucursal")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function lt(t,a){if(1&t&&T.Oc(0),2&t){const t=a.row;T.Qc(" ",null==t?null:t.sRazonSocial," ")}}function rt(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,lt,1,1,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"Proveedor")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function st(t,a){1&t&&(T.Xb(0,"span"),T.Oc(1,"Si"),T.Wb())}function it(t,a){1&t&&(T.Xb(0,"span"),T.Oc(1,"No"),T.Wb())}function bt(t,a){if(1&t&&(T.Mc(0,st,2,0,"span",16),T.Mc(1,it,2,0,"span",16)),2&t){const t=a.row;T.pc("ngIf","T"==(null==t?null:t.bAnulado)),T.Eb(1),T.pc("ngIf","F"==(null==t?null:t.bAnulado))}}function ut(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,bt,2,2,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"SALES.CANCELED")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function dt(t,a){1&t&&(T.Xb(0,"span"),T.Oc(1,"Si"),T.Wb())}function pt(t,a){1&t&&(T.Xb(0,"span"),T.Oc(1,"No"),T.Wb())}function mt(t,a){if(1&t&&(T.Mc(0,dt,2,0,"span",16),T.Mc(1,pt,2,0,"span",16)),2&t){const t=a.row;T.pc("ngIf","T"==(null==t?null:t.bConfirmado)),T.Eb(1),T.pc("ngIf","F"==(null==t?null:t.bConfirmado))}}function ft(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,mt,2,2,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"Confirmado")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function gt(t,a){if(1&t&&T.Oc(0),2&t){const t=a.row;T.Qc(" ",null==t?null:t.sCondVenta," ")}}function ht(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,gt,1,1,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"SALES.SALESCONDITION")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function Ct(t,a){if(1&t&&(T.Oc(0),T.kc(1,"currency")),2&t){const t=a.row;T.Qc(" ",T.lc(1,1,null==t?null:t.rTotDescuento)," ")}}function Et(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,Ct,2,3,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"SALES.DISCOUNTS")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function Ot(t,a){if(1&t&&(T.Oc(0),T.kc(1,"currency")),2&t){const t=a.row;T.Qc(" ",T.lc(1,1,null==t?null:t.rTotBruto)," ")}}function xt(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,Ot,2,3,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"SALES.TOTAL")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function St(t,a){1&t&&(T.Xb(0,"span"),T.Oc(1,"Si"),T.Wb())}function wt(t,a){1&t&&(T.Xb(0,"span"),T.Oc(1,"No"),T.Wb())}function Xt(t,a){if(1&t&&(T.Mc(0,St,2,0,"span",16),T.Mc(1,wt,2,0,"span",16)),2&t){const t=a.row;T.pc("ngIf","T"==(null==t?null:t.bAfectaStock)),T.Eb(1),T.pc("ngIf","F"==(null==t?null:t.bAfectaStock))}}function Dt(t,a){if(1&t&&(T.Xb(0,"ngx-datatable-column",18),T.kc(1,"translate"),T.Mc(2,Xt,2,2,"ng-template",19),T.Wb()),2&t){const t=T.jc();T.qc("name",T.lc(1,3,"Afecta Stock")),T.pc("cellClass",t.getCellClass)("flexGrow",1)}}function Mt(t,a){if(1&t){const t=T.Yb();T.Xb(0,"button",22),T.fc("click",function(){T.Dc(t);const a=T.jc().row;return T.jc(2).openPopUp(a)}),T.Xb(1,"mat-icon"),T.Oc(2,"info"),T.Wb(),T.Wb()}}function Wt(t,a){if(1&t){const t=T.Yb();T.Xb(0,"button",22),T.fc("click",function(){T.Dc(t);const a=T.jc().row;return T.jc(2).openUserInfoPopUp(a)}),T.Xb(1,"mat-icon"),T.Oc(2,"person_pin"),T.Wb(),T.Wb()}}function kt(t,a){if(1&t&&(T.Mc(0,Mt,3,0,"button",21),T.Mc(1,Wt,3,0,"button",21)),2&t){const t=a.row;T.pc("ngIf",!t.isGroup),T.Eb(1),T.pc("ngIf",!t.isGroup)}}function yt(t,a){1&t&&(T.Xb(0,"ngx-datatable-column",20),T.kc(1,"translate"),T.Mc(2,kt,2,2,"ng-template",19),T.Wb()),2&t&&(T.qc("name",T.lc(1,3,"SALES.ACTIONS")),T.pc("flexGrow",1)("minWidth",50))}function Tt(t,a){if(1&t){const t=T.Yb();T.Xb(0,"button",11),T.fc("click",function(){return T.Dc(t),T.jc(3).export()}),T.Xb(1,"mat-icon"),T.Oc(2,"save_alt"),T.Wb(),T.Oc(3),T.kc(4,"translate"),T.Wb()}2&t&&(T.Eb(3),T.Pc(T.lc(4,1,"SALES.EXCEL")))}function vt(t,a){if(1&t&&(T.Xb(0,"div",24),T.Xb(1,"div"),T.Xb(2,"strong"),T.Oc(3),T.kc(4,"translate"),T.Wb(),T.Wb(),T.Sb(5,"hr",25),T.Xb(6,"div"),T.Oc(7),T.kc(8,"translate"),T.kc(9,"currency"),T.kc(10,"translate"),T.kc(11,"currency"),T.Wb(),T.Wb(),T.Xb(12,"div",26),T.Mc(13,Tt,5,3,"button",27),T.Wb()),2&t){const t=T.jc(2);T.Eb(3),T.Pc(T.lc(4,7,"SALES.FOOTERTOTALS")),T.Eb(4),T.Uc("",t.tabla1.footer.count," | ",T.lc(8,9,"SALES.TOTAL"),": ",T.lc(9,11,t.tabla1.footer.rTotBruto)," | ",T.lc(10,13,"SALES.DISCOUNTS"),": ",T.lc(11,15,t.tabla1.footer.rTotDescuento),""),T.Eb(6),T.pc("ngIf",t.tabla1.data.length>0)}}function At(t,a){1&t&&(T.Xb(0,"ngx-datatable-footer"),T.Mc(1,vt,14,17,"ng-template",23),T.Wb())}const It=function(){return{y:"50px",delay:"300ms"}},Pt=function(t){return{value:"*",params:t}},Lt=[{path:"",component:(()=>{class t{constructor(t,a,e,c,o,l,r){this.dialog=t,this.servicioCompras=a,this.servicioExportarExcel=e,this.servicioSucursales=c,this.loader=o,this.snack=l,this.breakpointObserver=r,this.startDate=new n.e,this.endDate=new n.e}ngOnInit(){var t=new Date;t.setHours(0,0,0,0);var a=new Date;a.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(a),this.tabla1=new M.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new M.a,this.tabla2.groupField="Producto",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(t=>{this.sucursales=t,this.sucursalActual=this.sucursales[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.breakpointObserver.observe([O.b.XSmall,O.b.Small,O.b.Medium,O.b.Large,O.b.XLarge]).subscribe(t=>{this.isXSmall=this.breakpointObserver.isMatched(O.b.XSmall),this.isSmall=this.breakpointObserver.isMatched(O.b.Small),this.isMedium=this.breakpointObserver.isMatched(O.b.Medium),this.isLarge=this.breakpointObserver.isMatched(O.b.Large),this.isXLarge=this.breakpointObserver.isMatched(O.b.XLarge)})}mostrarOcultar(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}export(){var t=this.tabla1.data.map(t=>({Fecha:w(t.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Sucursal:t.sSucursal,Proveedor:t.sRazonSocial,Anulado:"T"==t.bAnulado?"Si":"No",Confirmado:"T"==t.bConfirmado?"Si":"No","Condici\xf3n Venta":t.sCondVenta,Total:t.rTotBruto}));this.servicioExportarExcel.exportExcel(t,"compras","compra")}export2Detalle(){var t=this.tabla2.data.map(t=>({idcompra:t.idcompra,Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Fecha:w(t.fDocumento).format("DD/MM/YYYY hh:mm:ss"),Totalcompra:t.rTotBruto,"Cond.compra":t.sCondcompra,"Cond.Pago":t.sCondPago,Carga:w(t.fCarga).format("DD/MM/YYYY hh:mm:ss"),OperadorCreaci\u00f3n:t.sOperadorCreacion,Comprobante:t.Comprobante,Anulado:"T"==t.bAnulado?"Si":"No",Total:t.rTotBruto,Cliente:t.sRazonSocial,CUIT:t.sCIOT,idProducto:t.idProducto,sCodProducto:t.sCodProducto,Producto:t.Producto,Costo:t.rCostoU,PrecioU:t.rPrecioU,Cantidad:t.rCantidad,Neto:t.rNeto,Descuentos:t.rDescuentos,Impuestos:t.rImpuestos,Familia:t.sFamilia,Proveedor:t.sProveedor,EAN:t.sEAN,EAN2:t.sEAN2,AlicIVA:t.rPorcIVA,AlicDGR:t.rPorcDGR,Interno:t.rValorImpInterno}));this.servicioExportarExcel.exportExcel(t,"compras_detalle","compras_detalle")}export2Totales(){var t=this.tabla2.data.map(t=>({Producto:t.Producto,PV:t.idPV,EAN:t.sEAN,EAN2:t.sEAN2,Familia:t.sFamilia,Proveedor:t.sProveedor,Cantidad:t.rCantidad,PrecioU:t.rPrecioU,Total:t.rTotBruto}));this.servicioExportarExcel.exportExcel(t,"compras_detalle_totales","compras_detalle_totales")}refresh(){this.loader.open(),Object(X.a)([this.servicioCompras.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id),this.servicioCompras.obtenerDatosTabla2(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id)]).subscribe(t=>{console.log(t[0]),this.tabla1.setData(t[0].filter(()=>!0)),this.tabla2.setData(t[1].filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getRowHeight(t){return 50}getCellClass({row:t}){return{ngxgroup:t.isGroup}}tabla1OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}tabla2OnActivate(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}updateDate1(t){this.startDate=t.value.toDate()}updateDate2(t){this.endDate=t.value.toDate()}seleccionarSucursal(t){this.sucursalActual=t}openPopUp(t={}){this.loader.open(),this.loader.close(),this.dialog.open(q,{width:"720px",disableClose:!0,data:{title:"DETALLE DE COMPRA",payload:t}}).afterClosed().subscribe(t=>{})}openUserInfoPopUp(t={}){this.dialog.open(k.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(a){return new(a||t)(T.Rb(i.b),T.Rb(A),T.Rb(D.a),T.Rb(W.a),T.Rb(S.a),T.Rb(m.a),T.Rb(O.a))},t.\u0275cmp=T.Lb({type:t,selectors:[["app-puchases-by-document"]],decls:43,vars:66,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],[3,"cellClass","name","flexGrow",4,"ngIf"],[3,"name","flexGrow","minWidth",4,"ngIf"],[4,"ngIf"],[3,"value"],[3,"cellClass","name","flexGrow"],["ngx-datatable-cell-template",""],[3,"name","flexGrow","minWidth"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"]],template:function(t,a){if(1&t&&(T.Xb(0,"mat-card",0),T.Xb(1,"div",1),T.Xb(2,"mat-form-field",2),T.Sb(3,"input",3),T.kc(4,"translate"),T.Sb(5,"mat-datepicker-toggle",4),T.Sb(6,"ngx-mat-datetime-picker",5,6),T.Wb(),T.Xb(8,"mat-form-field",2),T.Sb(9,"input",3),T.kc(10,"translate"),T.Sb(11,"mat-datepicker-toggle",4),T.Sb(12,"ngx-mat-datetime-picker",5,7),T.Wb(),T.Xb(14,"mat-form-field",8),T.Xb(15,"mat-label"),T.Oc(16),T.kc(17,"translate"),T.Wb(),T.Xb(18,"mat-select",9),T.fc("selectionChange",function(t){return a.seleccionarSucursal(t.value)})("valueChange",function(t){return a.sucursalActual=t}),T.Mc(19,_,2,2,"mat-option",10),T.Wb(),T.Wb(),T.Xb(20,"button",11),T.fc("click",function(){return a.refresh()}),T.Xb(21,"mat-icon"),T.Oc(22,"search"),T.Wb(),T.Oc(23),T.kc(24,"translate"),T.Wb(),T.Wb(),T.Wb(),T.Xb(25,"mat-card",0),T.Xb(26,"mat-card-content",0),T.Xb(27,"ngx-datatable",12,13),T.fc("activate",function(t){return a.tabla1OnActivate(t)}),T.Mc(29,J,3,5,"ngx-datatable-column",14),T.Mc(30,Z,3,5,"ngx-datatable-column",14),T.Mc(31,at,3,5,"ngx-datatable-column",14),T.Mc(32,ct,3,5,"ngx-datatable-column",14),T.Mc(33,nt,3,5,"ngx-datatable-column",14),T.Mc(34,rt,3,5,"ngx-datatable-column",14),T.Mc(35,ut,3,5,"ngx-datatable-column",14),T.Mc(36,ft,3,5,"ngx-datatable-column",14),T.Mc(37,ht,3,5,"ngx-datatable-column",14),T.Mc(38,Et,3,5,"ngx-datatable-column",14),T.Mc(39,xt,3,5,"ngx-datatable-column",14),T.Mc(40,Dt,3,5,"ngx-datatable-column",14),T.Mc(41,yt,3,5,"ngx-datatable-column",15),T.Mc(42,At,2,0,"ngx-datatable-footer",16),T.Wb(),T.Wb(),T.Wb()),2&t){const t=T.Ac(7),e=T.Ac(13);T.Eb(3),T.qc("placeholder",T.lc(4,55,"SALES.STARTDATE")),T.pc("ngxMatDatetimePicker",t)("formControl",a.startDate),T.Eb(2),T.pc("for",t),T.Eb(1),T.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),T.Eb(3),T.qc("placeholder",T.lc(10,57,"SALES.ENDDATE")),T.pc("ngxMatDatetimePicker",e)("formControl",a.endDate),T.Eb(2),T.pc("for",e),T.Eb(1),T.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),T.Eb(4),T.Pc(T.lc(17,59,"SALES.BRANCH")),T.Eb(2),T.pc("value",a.sucursalActual),T.Eb(1),T.pc("ngForOf",a.sucursales),T.Eb(4),T.Pc(T.lc(24,61,"SALES.SHOW")),T.Eb(2),T.pc("@animate",T.vc(64,Pt,T.uc(63,It))),T.Eb(2),T.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",a.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",a.tabla1.rows)("selectionType","single"),T.Eb(2),T.pc("ngIf",a.mostrarOcultar("XS")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("XS")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("L")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("L")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("XS")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("L")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("L")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("L")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("L")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("L")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("XS")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("L")),T.Eb(1),T.pc("ngIf",a.mostrarOcultar("XS")),T.Eb(1),T.pc("ngIf",a.tabla1.data.length>0)}},directives:[r.a,I.c,I.b,Q.c,u.b,Y.a,n.c,n.o,n.f,$.h,Q.h,Y.b,I.a,Q.f,d.a,c.n,l.b,b.a,r.b,C.d,c.o,B.n,C.b,C.a,C.e,C.c],pipes:[h.c,c.f,c.d],styles:[""],data:{animation:[x.a]}}),t})(),data:{title:"Por Documento"}}];var Rt=e("iInd"),Nt=e("BxcV");let Gt=(()=>{class t{}return t.\u0275mod=T.Pb({type:t}),t.\u0275inj=T.Ob({factory:function(a){return new(a||t)},imports:[[c.c,n.t,o.a,C.f,u.c,u.c,r.c,u.c,l.c,s.a,u.c,g.b,i.f,m.b,p.b,f.c,d.b,b.b,h.b,E.a,$.g,Nt.a,Y.c,Y.e,Y.d,n.j,Rt.k.forChild(Lt)]]}),t})()}}]);