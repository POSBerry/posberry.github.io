!function(){function t(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function a(t,a){for(var e=0;e<a.length;e++){var c=a[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{ZiuX:function(e,c,n){"use strict";n.r(c),n.d(c,"SalesModule",function(){return ta});var l=n("SVse"),o=n("iInd"),r=n("u9T3"),i=n("s7LF"),u=n("Dxy4"),b=n("PDjf"),s=n("f44v"),f=n("iELJ"),m=n("Tj54"),p=n("e6WT"),d=n("ZTz/"),v=n("jMqV"),g=n("zHaW"),A=n("M9ds"),h=n("ZFy/"),E=n("TSSN"),C=n("w9WL"),D=n("PCNd"),S=n("TN/R"),X=n("3sEA"),O=n("wd/R"),k=n("bPAe"),x=n("CHRX"),M=n("rbHy"),W=n("cp0P"),T=n("UVsP"),w=n("i59u"),y=n("GmJt"),I=n("Ap+n"),j=n("HeVh"),L=n("8Y7J"),P=n("VDRc"),N=n("Q2Ze"),V=n("n1FK"),F=n("UhP/");function Y(t,a){if(1&t&&(L.Xb(0,"mat-option",32),L.Oc(1),L.Wb()),2&t){var e=a.$implicit;L.pc("value",e),L.Eb(1),L.Pc(null==e?null:e.nombre)}}function R(t,a){}function H(t,a){if(1&t&&(L.Oc(0),L.kc(1,"date")),2&t){var e=a.row;L.Qc(" ",L.mc(1,1,null==e?null:e.fDocumento,"dd/MM/yyyy HH:mm:ss")," ")}}function G(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,H,2,4,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(47);L.qc("name",L.lc(1,4,"SALES.DATE")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function U(t,a){if(1&t&&L.Oc(0),2&t){var e=a.row;L.Qc(" ",null==e?null:e.idTipoDoc," ")}}function q(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,U,1,1,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(49);L.qc("name",L.lc(1,4,"SALES.TYPE")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function B(t,a){if(1&t&&L.Oc(0),2&t){var e=a.row;L.Qc(" ",null==e?null:e.idPV," ")}}function Q(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,B,1,1,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(51);L.qc("name",L.lc(1,4,"SALES.PV")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function z(t,a){if(1&t&&L.Oc(0),2&t){var e=a.row;L.Qc(" ",null==e?null:e.idNumDoc," ")}}function _(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,z,1,1,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(53);L.qc("name",L.lc(1,4,"SALES.NUMBER")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function J(t,a){if(1&t&&L.Oc(0),2&t){var e=a.row;L.Qc(" ",null==e?null:e.sRazonSocial," ")}}function K(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,J,1,1,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(55);L.qc("name",L.lc(1,4,"SALES.CLIENT")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function Z(t,a){if(1&t&&L.Oc(0),2&t){var e=a.row;L.Qc(" ",null==e?null:e.sDomicilio," ")}}function $(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,Z,1,1,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(57);L.qc("name",L.lc(1,4,"SALES.ADDRESS")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function tt(t,a){if(1&t&&L.Oc(0),2&t){var e=a.row;L.Qc(" ",null==e?null:e.sCondicionIVA," ")}}function at(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,tt,1,1,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(59);L.qc("name",L.lc(1,4,"SALES.VATCONDITION")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function et(t,a){1&t&&(L.Xb(0,"span"),L.Oc(1,"Si"),L.Wb())}function ct(t,a){1&t&&(L.Xb(0,"span"),L.Oc(1,"No"),L.Wb())}function nt(t,a){if(1&t&&(L.Mc(0,et,2,0,"span",18),L.Mc(1,ct,2,0,"span",18)),2&t){var e=a.row;L.pc("ngIf","T"==(null==e?null:e.bAnulado)),L.Eb(1),L.pc("ngIf","F"==(null==e?null:e.bAnulado))}}function lt(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,nt,2,2,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(61);L.qc("name",L.lc(1,4,"SALES.CANCELED")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function ot(t,a){if(1&t&&L.Oc(0),2&t){var e=a.row;L.Qc(" ",null==e?null:e.sCondVenta," ")}}function rt(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,ot,1,1,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(63);L.qc("name",L.lc(1,4,"SALES.SALESCONDITION")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function it(t,a){if(1&t&&(L.Oc(0),L.kc(1,"currency")),2&t){var e=a.row;L.Qc(" ",L.lc(1,1,null==e?null:e.rTotBruto)," ")}}function ut(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,it,2,3,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(65);L.qc("name",L.lc(1,4,"SALES.TOTAL")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function bt(t,a){if(1&t&&(L.Oc(0),L.kc(1,"currency")),2&t){var e=a.row;L.Qc(" ",L.lc(1,1,null==e?null:e.rTotDescuento)," ")}}function st(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,bt,2,3,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(67);L.qc("name",L.lc(1,4,"SALES.DISCOUNTS")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function ft(t,a){if(1&t&&L.Oc(0),2&t){var e=a.row;L.Qc(" ",null==e?null:e.sOperadorCreacion," ")}}function mt(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,ft,1,1,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(69);L.qc("name",L.lc(1,4,"SALES.OPERATOR")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function pt(t,a){if(1&t&&L.Oc(0),2&t){var e=a.row;L.Qc(" ",null==e?null:e.sVendedor," ")}}function dt(t,a){if(1&t&&(L.Xb(0,"ngx-datatable-column",33),L.kc(1,"translate"),L.Mc(2,pt,1,1,"ng-template",15),L.Wb()),2&t){var e=L.jc(),c=L.Ac(71);L.qc("name",L.lc(1,4,"SALES.SALESMAN")),L.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function vt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",36),L.fc("click",function(){L.Dc(e);var t=L.jc().row;return L.jc(2).openPopUp(t)}),L.Xb(1,"mat-icon"),L.Oc(2,"info"),L.Wb(),L.Wb()}}function gt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",36),L.fc("click",function(){L.Dc(e);var t=L.jc().row;return L.jc(2).openUserInfoPopUp(t)}),L.Xb(1,"mat-icon"),L.Oc(2,"person_pin"),L.Wb(),L.Wb()}}function At(t,a){if(1&t&&(L.Mc(0,vt,3,0,"button",35),L.Mc(1,gt,3,0,"button",35)),2&t){var e=a.row;L.pc("ngIf",!e.isGroup),L.Eb(1),L.pc("ngIf",!e.isGroup)}}function ht(t,a){1&t&&(L.Xb(0,"ngx-datatable-column",34),L.kc(1,"translate"),L.Mc(2,At,2,2,"ng-template",15),L.Wb()),2&t&&(L.qc("name",L.lc(1,3,"SALES.ACTIONS")),L.pc("flexGrow",1)("minWidth",200))}function Et(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",11),L.fc("click",function(){return L.Dc(e),L.jc(3).export()}),L.Xb(1,"mat-icon"),L.Oc(2,"save_alt"),L.Wb(),L.Oc(3),L.kc(4,"translate"),L.Wb()}2&t&&(L.Eb(3),L.Pc(L.lc(4,1,"SALES.EXCEL")))}function Ct(t,a){if(1&t&&(L.Xb(0,"div",38),L.Xb(1,"div"),L.Xb(2,"strong"),L.Oc(3),L.kc(4,"translate"),L.Wb(),L.Wb(),L.Sb(5,"hr",39),L.Xb(6,"div"),L.Oc(7),L.kc(8,"translate"),L.kc(9,"currency"),L.kc(10,"translate"),L.kc(11,"currency"),L.Wb(),L.Wb(),L.Xb(12,"div",40),L.Mc(13,Et,5,3,"button",41),L.Wb()),2&t){var e=L.jc(2);L.Eb(3),L.Pc(L.lc(4,7,"SALES.FOOTERTOTALS")),L.Eb(4),L.Uc("",e.tabla1.footer.count," | ",L.lc(8,9,"SALES.TOTAL"),": ",L.lc(9,11,e.tabla1.footer.rTotBruto)," | ",L.lc(10,13,"SALES.DISCOUNTS"),": ",L.lc(11,15,e.tabla1.footer.rTotDescuento),""),L.Eb(6),L.pc("ngIf",e.tabla1.data.length>0)}}function Dt(t,a){1&t&&(L.Xb(0,"ngx-datatable-footer"),L.Mc(1,Ct,14,17,"ng-template",37),L.Wb())}function St(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"fDocumento")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function Xt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",43,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"fDocumento")}),L.Wb(),L.Mc(3,St,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function Ot(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"idTipoDoc")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function kt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",43,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"idTipoDoc")}),L.Wb(),L.Mc(3,Ot,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function xt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"idPV")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function Mt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",43,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"idPV")}),L.Wb(),L.Mc(3,xt,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function Wt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"idNumDoc")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function Tt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",43,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"idNumDoc")}),L.Wb(),L.Mc(3,Wt,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function wt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"sRazonSocial")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function yt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",43,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"sRazonSocial")}),L.Wb(),L.Mc(3,wt,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function It(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"sDomicilio")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function jt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",43,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"sDomicilio")}),L.Wb(),L.Mc(3,It,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function Lt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"sCondicionIVA")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function Pt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",43,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"sCondicionIVA")}),L.Wb(),L.Mc(3,Lt,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function Nt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"mat-select",47),L.fc("selectionChange",function(t){return L.Dc(e),L.jc().tabla1.updateFilterBoolean(t.value,"bAnulado")}),L.Sb(2,"mat-option",48),L.Xb(3,"mat-option",49),L.Oc(4),L.kc(5,"translate"),L.Wb(),L.Xb(6,"mat-option",50),L.Oc(7),L.kc(8,"translate"),L.Wb(),L.Wb(),L.Wb()}2&t&&(L.Eb(4),L.Pc(L.lc(5,2,"YESNO.YES")),L.Eb(3),L.Pc(L.lc(8,4,"YESNO.NO")))}function Vt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"sCondVenta")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function Ft(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",43,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"sCondVenta")}),L.Wb(),L.Mc(3,Vt,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function Yt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"rTotBruto")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function Rt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",51,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"rTotBruto")}),L.Wb(),L.Mc(3,Yt,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function Ht(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"rTotDescuento")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function Gt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",51,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"rTotDescuento")}),L.Wb(),L.Mc(3,Ht,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function Ut(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"sOperadorCreacion")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function qt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",43,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"sOperadorCreacion")}),L.Wb(),L.Mc(3,Ut,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}function Bt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"button",46),L.fc("click",function(t){L.Dc(e),L.jc();var a=L.Ac(2);return L.jc().tabla1.updateFilter(t,"sVendedor")&&(a.value="")}),L.Xb(1,"mat-icon"),L.Oc(2,"close"),L.Wb(),L.Wb()}}function Qt(t,a){if(1&t){var e=L.Yb();L.Xb(0,"mat-form-field",42),L.Xb(1,"input",43,44),L.fc("keyup",function(t){return L.Dc(e),L.jc().tabla1.updateFilter(t,"sVendedor")}),L.Wb(),L.Mc(3,Bt,3,0,"button",45),L.Wb()}if(2&t){var c=L.Ac(2);L.Eb(3),L.pc("ngIf",c.value)}}var zt,_t,Jt=function(){return{y:"50px",delay:"300ms"}},Kt=function(t){return{value:"*",params:t}},Zt=[{path:"",component:(zt=function(){function e(a,c,n,l,o,r,u){t(this,e),this.dialog=a,this.servicioVentas=c,this.servicioExportarExcel=n,this.servicioSucursales=l,this.loader=o,this.snack=r,this.breakpointObserver=u,this.startDate=new i.e,this.endDate=new i.e}var c,n,l;return c=e,(n=[{key:"ngOnInit",value:function(){var t=this,a=new Date;a.setHours(0,0,0,0);var e=new Date;e.setHours(23,59,59,999),this.startDate.setValue(a),this.endDate.setValue(e),this.breakpointObserver.observe([j.b.XSmall,j.b.Small,j.b.Medium,j.b.Large,j.b.XLarge]).subscribe(function(a){t.isXSmall=t.breakpointObserver.isMatched(j.b.XSmall),t.isSmall=t.breakpointObserver.isMatched(j.b.Small),t.isMedium=t.breakpointObserver.isMatched(j.b.Medium),t.isLarge=t.breakpointObserver.isMatched(j.b.Large),t.isXLarge=t.breakpointObserver.isMatched(j.b.XLarge)}),this.tabla1=new x.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.tabla2=new x.a,this.tabla2.groupField="Producto",this.tabla2.secondarySort="",this.tabla2.sum=["rCantidad","rTotal"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(function(a){t.sucursales=a,t.sucursalActual=t.sucursales[0],t.loader.close()},function(a){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"mostrarOcultar",value:function(t){switch(t){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}},{key:"export",value:function(){var t=this.tabla1.data.map(function(t){return{Fecha:O(t.fDocumento).format("DD/MM/YYYY HH:mm:ss"),Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Cliente:t.sRazonSocial,Domicilio:t.sDomicilio,"Condici\xf3n IVA":t.sCondicionIVA,Anulado:"T"==t.bAnulado?"Si":"No","Condici\xf3n Venta":t.sCondVenta,Total:t.rTotBruto,Operador:t.sOperadorCreacion,Vendedor:t.sVendedor}});this.servicioExportarExcel.exportExcel(t,"ventas","venta")}},{key:"export2Detalle",value:function(){var t=this.tabla2.data.map(function(t){return{idVenta:t.idVenta,Tipo:t.idTipoDoc,PV:t.idPV,Numero:t.idNumDoc,Fecha:O(t.fDocumento).format("DD/MM/YYYY HH:mm:ss"),TotalVenta:t.rTotBruto,"Cond.Venta":t.sCondVenta,"Cond.Pago":t.sCondPago,Carga:O(t.fCarga).format("DD/MM/YYYY HH:mm:ss"),"OperadorCreaci\xf3n":t.sOperadorCreacion,Comprobante:t.Comprobante,Anulado:"T"==t.bAnulado?"Si":"No",Total:t.rTotBruto,Cliente:t.sRazonSocial,CUIT:t.sCIOT,idProducto:t.idProducto,sCodProducto:t.sCodProducto,Producto:t.Producto,Costo:t.rCostoU,PrecioU:t.rPrecioU,Cantidad:t.rCantidad,Neto:t.rNeto,Descuentos:t.rDescuentos,Impuestos:t.rImpuestos,Familia:t.sFamilia,Proveedor:t.sProveedor,EAN:t.sEAN,EAN2:t.sEAN2,AlicIVA:t.rPorcIVA,AlicDGR:t.rPorcDGR,Interno:t.rValorImpInterno}});this.servicioExportarExcel.exportExcel(t,"ventas_detalle","ventas_detalle")}},{key:"export2Totales",value:function(){var t=this.tabla2.data.map(function(t){return{Producto:t.Producto,PV:t.idPV,EAN:t.sEAN,EAN2:t.sEAN2,Familia:t.sFamilia,Proveedor:t.sProveedor,Cantidad:t.rCantidad,PrecioU:t.rPrecioU,Total:t.rTotBruto}});this.servicioExportarExcel.exportExcel(t,"ventas_detalle_totales","ventas_detalle_totales")}},{key:"refresh",value:function(){var t=this;this.loader.open(),Object(W.a)([this.servicioVentas.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id),this.servicioVentas.obtenerDatosTabla2(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id)]).subscribe(function(a){t.tabla1.setData(a[0].filter(function(){return!0})),t.tabla2.setData(a[1].filter(function(){return!0})),t.loader.close()},function(a){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"getRowHeight",value:function(t){return 50}},{key:"getCellClass",value:function(t){var a=t.row,e=t.column;return{ngxgroup:a.isGroup,"ngx-alert-success ngx-alert-padding":"status"==e.prop&&a.idTipoDoc&&("F"==a.idTipoDoc[0]||"P"==a.idTipoDoc[0])&&"F"==a.bAnulado,"ngx-alert-danger ngx-alert-padding":"status"==e.prop&&a.idTipoDoc&&"N"==a.idTipoDoc[0]&&"F"==a.bAnulado,"ngx-alert-warning ngx-alert-padding":"status"==e.prop&&a.bAnulado&&"T"==a.bAnulado}}},{key:"tabla1OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}},{key:"tabla2OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla2.setGroup(t.row)}},{key:"updateDate1",value:function(t){this.startDate=t.value.toDate()}},{key:"updateDate2",value:function(t){this.endDate=t.value.toDate()}},{key:"seleccionarSucursal",value:function(t){this.sucursalActual=t}},{key:"openPopUp",value:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loader.open(),this.servicioVentas.obtenerDatosVenta(a.id).subscribe(function(e){t.loader.close();var c="";0!=a.idPVCAEA&&(c="CAEA no informado.",a.fCAEAInformado&&(c="CAEA Informado el "+new Date(a.fCAEAInformado).toLocaleDateString())),t.dialog.open(w.a,{width:"720px",disableClose:!0,data:{title:"DETALLE DE VENTA",payload:a,ventaitems:e[0],ventamovcaja:e[1],sleyendacaea:c}}).afterClosed().subscribe(function(t){})},function(a){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"openUserInfoPopUp",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(I.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}])&&a(c.prototype,n),l&&a(c,l),e}(),zt.\u0275fac=function(t){return new(t||zt)(L.Rb(f.b),L.Rb(M.a),L.Rb(k.a),L.Rb(T.a),L.Rb(X.a),L.Rb(g.a),L.Rb(j.a))},zt.\u0275cmp=L.Lb({type:zt,selectors:[["app-sales"]],decls:72,vars:69,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white","ngx-status",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","selectionType","activate"],["myTable",""],["prop","status","name","",3,"cellClass","sortable"],["ngx-datatable-cell-template",""],[3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],[3,"name","flexGrow","minWidth",4,"ngIf"],[4,"ngIf"],["tabla1fDocumento",""],["tabla1idTipoDoc",""],["tabla1idPV",""],["tabla1idNumDoc",""],["tabla1sRazonSocial",""],["tabla1sDomicilio",""],["tabla1sCondicionIVA",""],["tabla1bAnulado",""],["tabla1sCondVenta",""],["tabla1rTotBruto",""],["tabla1rTotDescuento",""],["tabla1sOperadorCreacion",""],["tabla1sVendedor",""],[3,"value"],[3,"cellClass","summaryTemplate","name","flexGrow"],[3,"name","flexGrow","minWidth"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[3,"selectionChange"],["value",""],["value","T"],["value","F"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,a){if(1&t&&(L.Xb(0,"mat-card",0),L.Xb(1,"div",1),L.Xb(2,"mat-form-field",2),L.Sb(3,"input",3),L.kc(4,"translate"),L.Sb(5,"mat-datepicker-toggle",4),L.Sb(6,"ngx-mat-datetime-picker",5,6),L.Wb(),L.Xb(8,"mat-form-field",2),L.Sb(9,"input",3),L.kc(10,"translate"),L.Sb(11,"mat-datepicker-toggle",4),L.Sb(12,"ngx-mat-datetime-picker",5,7),L.Wb(),L.Xb(14,"mat-form-field",8),L.Xb(15,"mat-label"),L.Oc(16),L.kc(17,"translate"),L.Wb(),L.Xb(18,"mat-select",9),L.fc("selectionChange",function(t){return a.seleccionarSucursal(t.value)})("valueChange",function(t){return a.sucursalActual=t}),L.Mc(19,Y,2,2,"mat-option",10),L.Wb(),L.Wb(),L.Xb(20,"button",11),L.fc("click",function(){return a.refresh()}),L.Xb(21,"mat-icon"),L.Oc(22,"search"),L.Wb(),L.Oc(23),L.kc(24,"translate"),L.Wb(),L.Wb(),L.Wb(),L.Xb(25,"mat-card",0),L.Xb(26,"mat-card-content",0),L.Xb(27,"ngx-datatable",12,13),L.fc("activate",function(t){return a.tabla1OnActivate(t)}),L.Xb(29,"ngx-datatable-column",14),L.Mc(30,R,0,0,"ng-template",15),L.Wb(),L.Mc(31,G,3,6,"ngx-datatable-column",16),L.Mc(32,q,3,6,"ngx-datatable-column",16),L.Mc(33,Q,3,6,"ngx-datatable-column",16),L.Mc(34,_,3,6,"ngx-datatable-column",16),L.Mc(35,K,3,6,"ngx-datatable-column",16),L.Mc(36,$,3,6,"ngx-datatable-column",16),L.Mc(37,at,3,6,"ngx-datatable-column",16),L.Mc(38,lt,3,6,"ngx-datatable-column",16),L.Mc(39,rt,3,6,"ngx-datatable-column",16),L.Mc(40,ut,3,6,"ngx-datatable-column",16),L.Mc(41,st,3,6,"ngx-datatable-column",16),L.Mc(42,mt,3,6,"ngx-datatable-column",16),L.Mc(43,dt,3,6,"ngx-datatable-column",16),L.Mc(44,ht,3,5,"ngx-datatable-column",17),L.Mc(45,Dt,2,0,"ngx-datatable-footer",18),L.Wb(),L.Wb(),L.Wb(),L.Mc(46,Xt,4,1,"ng-template",null,19,L.Nc),L.Mc(48,kt,4,1,"ng-template",null,20,L.Nc),L.Mc(50,Mt,4,1,"ng-template",null,21,L.Nc),L.Mc(52,Tt,4,1,"ng-template",null,22,L.Nc),L.Mc(54,yt,4,1,"ng-template",null,23,L.Nc),L.Mc(56,jt,4,1,"ng-template",null,24,L.Nc),L.Mc(58,Pt,4,1,"ng-template",null,25,L.Nc),L.Mc(60,Nt,9,6,"ng-template",null,26,L.Nc),L.Mc(62,Ft,4,1,"ng-template",null,27,L.Nc),L.Mc(64,Rt,4,1,"ng-template",null,28,L.Nc),L.Mc(66,Gt,4,1,"ng-template",null,29,L.Nc),L.Mc(68,qt,4,1,"ng-template",null,30,L.Nc),L.Mc(70,Qt,4,1,"ng-template",null,31,L.Nc)),2&t){var e=L.Ac(7),c=L.Ac(13);L.Eb(3),L.qc("placeholder",L.lc(4,58,"SALES.STARTDATE")),L.pc("ngxMatDatetimePicker",e)("formControl",a.startDate),L.Eb(2),L.pc("for",e),L.Eb(1),L.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),L.Eb(3),L.qc("placeholder",L.lc(10,60,"SALES.ENDDATE")),L.pc("ngxMatDatetimePicker",c)("formControl",a.endDate),L.Eb(2),L.pc("for",c),L.Eb(1),L.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),L.Eb(4),L.Pc(L.lc(17,62,"SALES.BRANCH")),L.Eb(2),L.pc("value",a.sucursalActual),L.Eb(1),L.pc("ngForOf",a.sucursales),L.Eb(4),L.Pc(L.lc(24,64,"SALES.SHOW")),L.Eb(2),L.pc("@animate",L.vc(67,Kt,L.uc(66,Jt))),L.Eb(2),L.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",a.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",a.tabla1.rows)("selectionType","single"),L.Eb(2),L.pc("cellClass",a.getCellClass)("sortable",!1),L.Eb(2),L.pc("ngIf",a.mostrarOcultar("XS")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("XS")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("XS")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("L")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("L")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("L")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("L")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("L")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("L")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("XS")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("L")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("L")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("L")),L.Eb(1),L.pc("ngIf",a.mostrarOcultar("XS")),L.Eb(1),L.pc("ngIf",a.tabla1.data.length>0)}},directives:[b.a,P.c,P.b,N.c,p.b,V.a,i.c,i.o,i.f,S.h,N.h,V.b,P.a,N.f,d.a,l.n,u.b,m.a,b.b,C.d,C.b,C.a,l.o,F.n,C.e,C.c],pipes:[E.c,l.f,l.d],styles:[""],data:{animation:[y.a]}}),zt),data:{title:"Por Documento"}}],$t=n("BxcV"),ta=((_t=function a(){t(this,a)}).\u0275mod=L.Pb({type:_t}),_t.\u0275inj=L.Ob({factory:function(t){return new(t||_t)},imports:[[l.c,i.t,r.a,C.f,p.c,p.c,b.c,p.c,u.c,s.a,p.c,h.b,f.f,g.b,v.b,A.c,d.b,m.b,E.b,D.a,S.g,$t.a,V.c,V.e,V.d,i.j,o.k.forChild(Zt)]]}),_t)}}])}();