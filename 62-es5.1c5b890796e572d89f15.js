!function(){function a(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function t(a,t){for(var e=0;e<t.length;e++){var c=t[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}}function e(a,e,c){return e&&t(a.prototype,e),c&&t(a,c),a}(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"1RXB":function(t,c,n){"use strict";n.r(c),n.d(c,"VatSalesModule",function(){return mt});var l,r=n("SVse"),o=n("HeVh"),u=n("s7LF"),i=n("GmJt"),s=n("3sEA"),b=n("bPAe"),f=n("CHRX"),m=n("UVsP"),p=n("AytR"),d=n("cp0P"),g=n("8Y7J"),v=n("IheW"),C=((l=function(){function t(e){a(this,t),this.http=e}return e(t,[{key:"obtenerDatosTabla1",value:function(a,t,e){var c="".concat(p.a.apiURL,"Ventas/DocumentosDeVentasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t);return e&&(c="".concat(p.a.apiURL,"Ventas/DocumentosDeVentasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t,"&idsucursal=").concat(e)),this.http.get(encodeURI(c))}},{key:"obtenerDatosTabla2",value:function(a,t,e){var c="".concat(p.a.apiURL,"Ventas/DetalleDeVentasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t);return e&&(c="".concat(p.a.apiURL,"Ventas/DetalleDeVentasEnUnaFecha?fdesde=").concat(a,"&fhasta=").concat(t,"&idsucursal=").concat(e)),this.http.get(encodeURI(c))}},{key:"obtenerDatosVenta",value:function(a){return Object(d.a)([this.http.get(encodeURI("".concat(p.a.apiURL,"Ventasitems/DetalleDeVentaPorId?idVenta=").concat(a))),this.http.get(encodeURI("".concat(p.a.apiURL,"Ventas/DetalleDeMovCajaVenta?idVenta=").concat(a)))])}}]),t}()).\u0275fac=function(a){return new(a||l)(g.bc(v.c))},l.\u0275prov=g.Nb({token:l,factory:l.\u0275fac,providedIn:"root"}),l),x=n("iELJ"),I=n("zHaW"),T=n("PDjf"),X=n("VDRc"),A=n("Q2Ze"),h=n("e6WT"),D=n("+Wi0"),y=n("TN/R"),W=n("ZTz/"),k=n("Dxy4"),w=n("Tj54"),M=n("w9WL"),E=n("UhP/"),S=n("TSSN");function O(a,t){if(1&a&&(g.Xb(0,"mat-option",52),g.Oc(1),g.Wb()),2&a){var e=t.$implicit;g.pc("value",e),g.Eb(1),g.Pc(null==e?null:e.nombre)}}function j(a,t){}function V(a,t){if(1&a&&(g.Oc(0),g.kc(1,"date")),2&a){var e=t.row;g.Qc(" ",g.mc(1,1,null==e?null:e.fDocumento,"dd/MM/yyyy HH:mm:ss")," ")}}function G(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",53),g.kc(1,"translate"),g.Mc(2,V,2,4,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(50);g.qc("name",g.lc(1,4,"SALES.DATE")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function L(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.idTipoDoc," ")}}function N(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",54),g.kc(1,"translate"),g.Mc(2,L,1,1,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(52);g.qc("name",g.lc(1,4,"SALES.TYPE")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function F(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.idPV," ")}}function R(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",55),g.kc(1,"translate"),g.Mc(2,F,1,1,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(54);g.qc("name",g.lc(1,4,"SALES.PV")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function Y(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.idNumDoc," ")}}function P(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",56),g.kc(1,"translate"),g.Mc(2,Y,1,1,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(56);g.qc("name",g.lc(1,4,"SALES.NUMBER")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function U(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.sRazonSocial," ")}}function H(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",57),g.kc(1,"translate"),g.Mc(2,U,1,1,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(58);g.qc("name",g.lc(1,4,"SALES.CLIENT")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function q(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.sCUIT," ")}}function Q(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",58),g.kc(1,"translate"),g.Mc(2,q,1,1,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(60);g.qc("name",g.lc(1,4,"CUIT")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function B(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.sProvincia," ")}}function z(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",59),g.kc(1,"translate"),g.Mc(2,B,1,1,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(62);g.qc("name",g.lc(1,4,"Provincia")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function J(a,t){1&a&&(g.Xb(0,"span"),g.Oc(1,"Si"),g.Wb())}function Z(a,t){1&a&&(g.Xb(0,"span"),g.Oc(1,"No"),g.Wb())}function _(a,t){if(1&a&&(g.Mc(0,J,2,0,"span",33),g.Mc(1,Z,2,0,"span",33)),2&a){var e=t.row;g.pc("ngIf","T"==(null==e?null:e.bAnulado)),g.Eb(1),g.pc("ngIf","F"==(null==e?null:e.bAnulado))}}function K(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",60),g.kc(1,"translate"),g.Mc(2,_,2,2,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(66);g.qc("name",g.lc(1,4,"SALES.CANCELED")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function $(a,t){if(1&a&&g.Oc(0),2&a){var e=t.row;g.Qc(" ",null==e?null:e.sCondVenta," ")}}function aa(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",61),g.kc(1,"translate"),g.Mc(2,$,1,1,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(68);g.qc("name",g.lc(1,4,"SALES.SALESCONDITION")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function ta(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rTotNeto)," ")}}function ea(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",62),g.kc(1,"translate"),g.Mc(2,ta,2,3,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(70);g.qc("name",g.lc(1,4,"Total (Neto)")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function ca(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rTotDescuento)," ")}}function na(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",63),g.kc(1,"translate"),g.Mc(2,ca,2,3,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(72);g.qc("name",g.lc(1,4,"SALES.DISCOUNTS")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function la(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rIVA0)," ")}}function ra(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",64),g.kc(1,"translate"),g.Mc(2,la,2,3,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(74);g.qc("name",g.lc(1,4,"iva 0")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function oa(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rIVA105)," ")}}function ua(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",65),g.kc(1,"translate"),g.Mc(2,oa,2,3,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(76);g.qc("name",g.lc(1,4,"IVA 10.5")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function ia(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rIVA21)," ")}}function sa(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",66),g.kc(1,"translate"),g.Mc(2,ia,2,3,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(78);g.qc("name",g.lc(1,4,"IVA 21")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function ba(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rDGR)," ")}}function fa(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",67),g.kc(1,"translate"),g.Mc(2,ba,2,3,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(80);g.qc("name",g.lc(1,4,"IIBB")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function ma(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rInterno)," ")}}function pa(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",68),g.kc(1,"translate"),g.Mc(2,ma,2,3,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(82);g.qc("name",g.lc(1,4,"Impuesto Interno")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function da(a,t){if(1&a&&(g.Oc(0),g.kc(1,"currency")),2&a){var e=t.row;g.Qc(" ",g.lc(1,1,null==e?null:e.rTotBruto)," ")}}function ga(a,t){if(1&a&&(g.Xb(0,"ngx-datatable-column",69),g.kc(1,"translate"),g.Mc(2,da,2,3,"ng-template",15),g.Wb()),2&a){var e=g.jc(),c=g.Ac(84);g.qc("name",g.lc(1,4,"Total")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1)}}function va(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",11),g.fc("click",function(){return g.Dc(e),g.jc(3).export()}),g.Xb(1,"mat-icon"),g.Oc(2,"save_alt"),g.Wb(),g.Oc(3),g.kc(4,"translate"),g.Wb()}2&a&&(g.Eb(3),g.Qc("",g.lc(4,1,"SALES.EXCEL")," "))}function Ca(a,t){if(1&a&&(g.Xb(0,"div",71),g.Sb(1,"hr",72),g.Xb(2,"div"),g.Oc(3),g.kc(4,"translate"),g.Wb(),g.Wb(),g.Xb(5,"div",73),g.Mc(6,va,5,3,"button",74),g.Wb()),2&a){var e=g.jc(2);g.Eb(3),g.Rc("",g.lc(4,3,"Articulos Totales:"),"",e.tabla1.footer.count," "),g.Eb(3),g.pc("ngIf",e.tabla1.data.length>0)}}function xa(a,t){1&a&&(g.Xb(0,"ngx-datatable-footer"),g.Mc(1,Ca,7,5,"ng-template",70),g.Wb())}function Ia(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"fDocumento")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Ta(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",76,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"fDocumento")}),g.Wb(),g.Mc(3,Ia,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function Xa(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"idTipoDoc")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Aa(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",76,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"idTipoDoc")}),g.Wb(),g.Mc(3,Xa,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function ha(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"idPV")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Da(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",80,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"idPV")}),g.Wb(),g.Mc(3,ha,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function ya(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"idNumDoc")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Wa(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",76,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"idNumDoc")}),g.Wb(),g.Mc(3,ya,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function ka(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"sRazonSocial")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function wa(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",76,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"sRazonSocial")}),g.Wb(),g.Mc(3,ka,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function Ma(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"sCUIT")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Ea(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",76,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"sCUIT")}),g.Wb(),g.Mc(3,Ma,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function Sa(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"sProvincia")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Oa(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",76,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"sProvincia")}),g.Wb(),g.Mc(3,Sa,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function ja(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"sCondicionIVA")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Va(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",76,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"sCondicionIVA")}),g.Wb(),g.Mc(3,ja,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function Ga(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"mat-select",81),g.fc("selectionChange",function(a){return g.Dc(e),g.jc().tabla1.updateFilterBoolean(a.value,"bAnulado")}),g.Sb(2,"mat-option",82),g.Xb(3,"mat-option",83),g.Oc(4),g.kc(5,"translate"),g.Wb(),g.Xb(6,"mat-option",84),g.Oc(7),g.kc(8,"translate"),g.Wb(),g.Wb(),g.Wb()}2&a&&(g.Eb(4),g.Pc(g.lc(5,2,"YESNO.YES")),g.Eb(3),g.Pc(g.lc(8,4,"YESNO.NO")))}function La(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"sCondVenta")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Na(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",76,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"sCondVenta")}),g.Wb(),g.Mc(3,La,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function Fa(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"rTotNeto")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Ra(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",80,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"rTotNeto")}),g.Wb(),g.Mc(3,Fa,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function Ya(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"rTotDescuento")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Pa(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",80,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"rTotDescuento")}),g.Wb(),g.Mc(3,Ya,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function Ua(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"rIVA0")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Ha(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",80,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"rIVA0")}),g.Wb(),g.Mc(3,Ua,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function qa(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"rIVA105")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Qa(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",80,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"rIVA105")}),g.Wb(),g.Mc(3,qa,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function Ba(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"rIVA21")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function za(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",80,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"rIVA21")}),g.Wb(),g.Mc(3,Ba,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function Ja(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"rDGR")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Za(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",80,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"rDGR")}),g.Wb(),g.Mc(3,Ja,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function _a(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"rInterno")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function Ka(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",80,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"rInterno")}),g.Wb(),g.Mc(3,_a,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}function $a(a,t){if(1&a){var e=g.Yb();g.Xb(0,"button",79),g.fc("click",function(a){g.Dc(e),g.jc();var t=g.Ac(2);return g.jc().tabla1.updateFilter(a,"rTotBruto")&&(t.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function at(a,t){if(1&a){var e=g.Yb();g.Xb(0,"mat-form-field",75),g.Xb(1,"input",80,77),g.fc("keyup",function(a){return g.Dc(e),g.jc().tabla1.updateFilter(a,"rTotBruto")}),g.Wb(),g.Mc(3,$a,3,0,"button",78),g.Wb()}if(2&a){var c=g.Ac(2);g.Eb(3),g.pc("ngIf",c.value)}}var tt,et,ct=function(){return{y:"50px",delay:"300ms"}},nt=function(a){return{value:"*",params:a}},lt=[{path:"",component:(tt=function(){function t(e,c,n,l,r,o,i){a(this,t),this.dialog=e,this.servicioIvaVentas=c,this.servicioExportarExcel=n,this.servicioSucursales=l,this.loader=r,this.snack=o,this.breakpointObserver=i,this.startDate=new u.e,this.endDate=new u.e}return e(t,[{key:"ngOnInit",value:function(){var a=this;this.breakpointObserver.observe([o.b.XSmall,o.b.Small,o.b.Medium,o.b.Large,o.b.XLarge]).subscribe(function(t){a.isXSmall=a.breakpointObserver.isMatched(o.b.XSmall),a.isSmall=a.breakpointObserver.isMatched(o.b.Small),a.isMedium=a.breakpointObserver.isMatched(o.b.Medium),a.isLarge=a.breakpointObserver.isMatched(o.b.Large),a.isXLarge=a.breakpointObserver.isMatched(o.b.XLarge)});var t=new Date;t.setHours(0,0,0,0);var e=new Date;e.setHours(23,59,59,999),this.startDate.setValue(t),this.endDate.setValue(e),this.tabla1=new f.a,this.tabla1.groupField="",this.tabla1.secondarySort="fDocumento",this.tabla1.sum=["rTotBruto","rTotDescuento"],this.loader.open(),this.servicioSucursales.obtenerDatos().subscribe(function(t){a.sucursales=t,a.sucursalActual=a.sucursales[0],a.loader.close()},function(t){a.loader.close(),a.snack.open("ERROR","OK",{duration:4e3})})}},{key:"mostrarOcultar",value:function(a){switch(a){case"XS":return!0;case"S":return this.isSmall||this.isMedium||this.isLarge||this.isXLarge;case"M":return this.isMedium||this.isLarge||this.isXLarge;case"L":return this.isLarge||this.isXLarge;case"XL":return this.isXLarge}}},{key:"export",value:function(){var a=this.tabla1.data.map(function(a){return{Tipo:a.idTipoDoc,PV:a.idPV,Numero:a.idNumDoc,Cliente:a.sRazonSocial,CUIT:a.sCUIT,Anulado:"T"==a.bAnulado?"Si":"No",Confirmado:"T"==a.bConfirmado?"Si":"No","Condici\xf3n Venta":a.sCondVenta,Neto:a.rTotNeto,"IVA 0":a.rIVA0,"IVA 10,5":a.rIVA105,"IVA 21":a.rIVA21,DGR:a.rDGR,Interno:a.rInterno,Descuentos:a.rTotDescuento,"Total Impuestos":a.rTotImpuestos,Total:a.rTotBruto}});this.servicioExportarExcel.exportExcel(a,"IVA_ventas","IVA_venta")}},{key:"refresh",value:function(){var a=this;this.loader.open(),this.servicioIvaVentas.obtenerDatosTabla1(this.startDate.value.toISOString(),this.endDate.value.toISOString(),this.sucursalActual.id).subscribe(function(t){console.log(t),a.tabla1.setData(t.filter(function(){return!0})),a.loader.close()},function(t){a.loader.close(),a.snack.open("ERROR","OK",{duration:4e3})})}},{key:"onSort",value:function(a){var t=a.sorts[0];this.tabla1.secondarySort=t.prop,this.tabla1.sortDir=t.dir,this.tabla1.sortData()}},{key:"getRowHeight",value:function(a){return 50}},{key:"getCellClass",value:function(a){var t=a.row,e=a.column;return{ngxgroup:t.isGroup,"ngx-alert-success ngx-alert-padding":"status"==e.prop&&t.idTipoDoc&&("F"==t.idTipoDoc[0]||"P"==t.idTipoDoc[0])&&"F"==t.bAnulado,"ngx-alert-danger ngx-alert-padding":"status"==e.prop&&t.idTipoDoc&&"N"==t.idTipoDoc[0]&&"F"==t.bAnulado,"ngx-alert-warning ngx-alert-padding":"status"==e.prop&&t.bAnulado&&"T"==t.bAnulado}}},{key:"tabla1OnActivate",value:function(a){"click"==a.type&&a.row.isGroup&&this.tabla1.setGroup(a.row)}},{key:"updateDate1",value:function(a){this.startDate=a.value.toDate()}},{key:"updateDate2",value:function(a){this.endDate=a.value.toDate()}},{key:"seleccionarSucursal",value:function(a){this.sucursalActual=a}}]),t}(),tt.\u0275fac=function(a){return new(a||tt)(g.Rb(x.b),g.Rb(C),g.Rb(b.a),g.Rb(m.a),g.Rb(s.a),g.Rb(I.a),g.Rb(o.a))},tt.\u0275cmp=g.Lb({type:tt,selectors:[["app-vat-sales"]],decls:85,vars:75,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill",1,"m-8"],["matInput","",3,"ngxMatDatetimePicker","placeholder","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["summaryRow","true",1,"material","expandable","bg-white","ngx-status",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","externalSorting","selectionType","activate","sort"],["myTable",""],["prop","status","name","",3,"cellClass","sortable","flexGrow"],["ngx-datatable-cell-template",""],["prop","fDocumento",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","idTipoDoc",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","idPV",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","idNumDoc",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sRazonSocial",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sCUIT",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sProvincia",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","bAnulado",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sCondVenta",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rTotNeto",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rTotDescuento",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","sIVA0",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rIVA105",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rIVA21",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rDGR",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rInterno",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],["prop","rTotBruto",3,"cellClass","summaryTemplate","name","flexGrow",4,"ngIf"],[4,"ngIf"],["tabla1fDocumento",""],["tabla1idTipoDoc",""],["tabla1idPV",""],["tabla1idNumDoc",""],["tabla1sRazonSocial",""],["tabla1sCUIT",""],["tabla1sProvincia",""],["tabla1sCondicionIVA",""],["tabla1bAnulado",""],["tabla1sCondVenta",""],["tabla1rTotNeto",""],["tabla1rTotDescuento",""],["tabla1rIVA0",""],["tabla1rIVA105",""],["tabla1rIVA21",""],["tabla1rDGR",""],["tabla1rInterno",""],["tabla1rTotBruto",""],[3,"value"],["prop","fDocumento",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","idTipoDoc",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","idPV",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","idNumDoc",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","sRazonSocial",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","sCUIT",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","sProvincia",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","bAnulado",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","sCondVenta",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","rTotNeto",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","rTotDescuento",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","sIVA0",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","rIVA105",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","rIVA21",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","rDGR",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","rInterno",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","rTotBruto",3,"cellClass","summaryTemplate","name","flexGrow"],["ngx-datatable-footer-template",""],[2,"padding","5px 10px"],[2,"width","100%"],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["type","number","matInput","","placeholder","","value","",3,"keyup"],[3,"selectionChange"],["value",""],["value","T"],["value","F"]],template:function(a,t){if(1&a&&(g.Xb(0,"mat-card",0),g.Xb(1,"div",1),g.Xb(2,"mat-form-field",2),g.Sb(3,"input",3),g.kc(4,"translate"),g.Sb(5,"mat-datepicker-toggle",4),g.Sb(6,"ngx-mat-datetime-picker",5,6),g.Wb(),g.Xb(8,"mat-form-field",2),g.Sb(9,"input",3),g.kc(10,"translate"),g.Sb(11,"mat-datepicker-toggle",4),g.Sb(12,"ngx-mat-datetime-picker",5,7),g.Wb(),g.Xb(14,"mat-form-field",8),g.Xb(15,"mat-label"),g.Oc(16),g.kc(17,"translate"),g.Wb(),g.Xb(18,"mat-select",9),g.fc("selectionChange",function(a){return t.seleccionarSucursal(a.value)})("valueChange",function(a){return t.sucursalActual=a}),g.Mc(19,O,2,2,"mat-option",10),g.Wb(),g.Wb(),g.Xb(20,"button",11),g.fc("click",function(){return t.refresh()}),g.Xb(21,"mat-icon"),g.Oc(22,"search"),g.Wb(),g.Oc(23),g.kc(24,"translate"),g.Wb(),g.Wb(),g.Wb(),g.Xb(25,"mat-card",0),g.Xb(26,"mat-card-content",0),g.Xb(27,"ngx-datatable",12,13),g.fc("activate",function(a){return t.tabla1OnActivate(a)})("sort",function(a){return t.onSort(a)}),g.Xb(29,"ngx-datatable-column",14),g.Mc(30,j,0,0,"ng-template",15),g.Wb(),g.Mc(31,G,3,6,"ngx-datatable-column",16),g.Mc(32,N,3,6,"ngx-datatable-column",17),g.Mc(33,R,3,6,"ngx-datatable-column",18),g.Mc(34,P,3,6,"ngx-datatable-column",19),g.Mc(35,H,3,6,"ngx-datatable-column",20),g.Mc(36,Q,3,6,"ngx-datatable-column",21),g.Mc(37,z,3,6,"ngx-datatable-column",22),g.Mc(38,K,3,6,"ngx-datatable-column",23),g.Mc(39,aa,3,6,"ngx-datatable-column",24),g.Mc(40,ea,3,6,"ngx-datatable-column",25),g.Mc(41,na,3,6,"ngx-datatable-column",26),g.Mc(42,ra,3,6,"ngx-datatable-column",27),g.Mc(43,ua,3,6,"ngx-datatable-column",28),g.Mc(44,sa,3,6,"ngx-datatable-column",29),g.Mc(45,fa,3,6,"ngx-datatable-column",30),g.Mc(46,pa,3,6,"ngx-datatable-column",31),g.Mc(47,ga,3,6,"ngx-datatable-column",32),g.Mc(48,xa,2,0,"ngx-datatable-footer",33),g.Wb(),g.Wb(),g.Wb(),g.Mc(49,Ta,4,1,"ng-template",null,34,g.Nc),g.Mc(51,Aa,4,1,"ng-template",null,35,g.Nc),g.Mc(53,Da,4,1,"ng-template",null,36,g.Nc),g.Mc(55,Wa,4,1,"ng-template",null,37,g.Nc),g.Mc(57,wa,4,1,"ng-template",null,38,g.Nc),g.Mc(59,Ea,4,1,"ng-template",null,39,g.Nc),g.Mc(61,Oa,4,1,"ng-template",null,40,g.Nc),g.Mc(63,Va,4,1,"ng-template",null,41,g.Nc),g.Mc(65,Ga,9,6,"ng-template",null,42,g.Nc),g.Mc(67,Na,4,1,"ng-template",null,43,g.Nc),g.Mc(69,Ra,4,1,"ng-template",null,44,g.Nc),g.Mc(71,Pa,4,1,"ng-template",null,45,g.Nc),g.Mc(73,Ha,4,1,"ng-template",null,46,g.Nc),g.Mc(75,Qa,4,1,"ng-template",null,47,g.Nc),g.Mc(77,za,4,1,"ng-template",null,48,g.Nc),g.Mc(79,Za,4,1,"ng-template",null,49,g.Nc),g.Mc(81,Ka,4,1,"ng-template",null,50,g.Nc),g.Mc(83,at,4,1,"ng-template",null,51,g.Nc)),2&a){var e=g.Ac(7),c=g.Ac(13);g.Eb(3),g.qc("placeholder",g.lc(4,64,"SALES.STARTDATE")),g.pc("ngxMatDatetimePicker",e)("formControl",t.startDate),g.Eb(2),g.pc("for",e),g.Eb(1),g.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),g.Eb(3),g.qc("placeholder",g.lc(10,66,"SALES.ENDDATE")),g.pc("ngxMatDatetimePicker",c)("formControl",t.endDate),g.Eb(2),g.pc("for",c),g.Eb(1),g.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!1),g.Eb(4),g.Pc(g.lc(17,68,"SALES.BRANCH")),g.Eb(2),g.pc("value",t.sucursalActual),g.Eb(1),g.pc("ngForOf",t.sucursales),g.Eb(4),g.Qc("",g.lc(24,70,"SALES.SHOW")," "),g.Eb(2),g.pc("@animate",g.vc(73,nt,g.uc(72,ct))),g.Eb(2),g.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",t.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",t.tabla1.rows)("externalSorting",!0)("selectionType","single"),g.Eb(2),g.pc("cellClass",t.getCellClass)("sortable",!1)("flexGrow",10)("flexGrow",.1),g.Eb(2),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("L")),g.Eb(1),g.pc("ngIf",t.mostrarOcultar("XS")),g.Eb(1),g.pc("ngIf",t.tabla1.data.length>0)}},directives:[T.a,X.c,X.b,A.c,h.b,D.a,u.c,u.o,u.f,y.h,A.h,D.b,X.a,A.f,W.a,r.n,k.b,w.a,T.b,M.d,M.b,M.a,r.o,E.n,M.e,M.c],pipes:[S.c,r.f,r.d],styles:[""],data:{animation:[i.a]}}),tt),data:{title:"IVA VENTAS"}}],rt=n("iInd"),ot=n("u9T3"),ut=n("f44v"),it=n("jMqV"),st=n("M9ds"),bt=n("ZFy/"),ft=n("PCNd"),mt=((et=function t(){a(this,t)}).\u0275mod=g.Pb({type:et}),et.\u0275inj=g.Ob({factory:function(a){return new(a||et)},imports:[[r.c,u.t,ot.a,M.f,h.c,h.c,T.c,h.c,k.c,ut.a,h.c,bt.b,x.f,I.b,it.b,st.c,W.b,w.b,S.b,ft.a,y.g,D.c,D.e,D.d,u.j,rt.k.forChild(lt)]]}),et)}}])}();