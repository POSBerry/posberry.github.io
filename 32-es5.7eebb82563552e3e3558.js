!function(){function t(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{CHRX:function(a,o,r){"use strict";r.d(o,"a",function(){return i});var c=r("wd/R"),i=function(){function a(){e(this,a),this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}return n(a,[{key:"setGroup",value:function(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}},{key:"setData",value:function(t){this.data=t,this.sortData()}},{key:"sortData",value:function(){var t=this;this.data.sort(function(e,a){if(e[t.groupField]==a[t.groupField]){if(t.secondarySort){if(e[t.secondarySort]>a[t.secondarySort])return 1*("desc"===t.sortDir?-1:1);if(e[t.secondarySort]<a[t.secondarySort])return-1*("desc"===t.sortDir?-1:1)}}else{if(e[t.groupField]>a[t.groupField])return 1;if(e[t.groupField]<a[t.groupField])return-1}return 0}),this.filterRows()}},{key:"filterRows",value:function(){var e=this,a=[];a=this.data.filter(function(t){for(var a in e.filter)switch(typeof t[a]){case"number":if(e.filter[a]&&t[a].toString()!==e.filter[a].toString())return!1;break;case"string":if("f"==a.charAt(0).toLowerCase()&&c(t[a]).isValid){if(-1==c(t[a]).format("DD/MM/YYYY HH:mm:ss").indexOf(e.filter[a]))return!1;break}if(-1==t[a].toLowerCase().indexOf(e.filter[a].toLowerCase()))return!1}return!0}),a=this.customFilter(a);var n={};this.groupField?n[this.groupField]=a.length.toString():n.count=a.length.toString(),this.sum.forEach(function(t){return n[t]=0});for(var o=0;o<a.length;o++)this.sum.forEach(function(t){return n[t]+=a[o][t]});if(n.isGroup=!0,this.footer=n,this.groupField){var r=[];a.forEach(function(t){-1==r.indexOf(t[e.groupField])&&r.push(t[e.groupField])}),r=r.map(function(t){return{name:t,count:1}});var i=[],l=!0,u=0,m=null,p=function(){m&&(m[e.groupField]+=" ("+r[u-1].count.toString()+")")};for(o=0;o<a.length;o++){if(l&&a[o][this.groupField]==r[u].name){var b;p();var s="+";this.groups[r[u].name]&&(s="-"),t(b={},this.groupField,s+" "+r[u].name),t(b,"isGroup",!0),t(b,"name",r[u].name),m=b,this.sum.forEach(function(t){return m[t]=0}),i.push(m),l=++u<r.length}else r[u-1].count++;this.sum.forEach(function(t){return m[t]+=a[o][t]}),i.push(a[o])}p(),a=null,i=i.filter(function(t){return!!t.isGroup||!!e.groups[t[e.groupField]]||void 0}),this.rows=i}else this.rows=a;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}},{key:"updateFilter",value:function(t,e){t&&e&&(this.filter[e]=t.target.value,this.filterRows())}},{key:"updateFilterBoolean",value:function(t,e){this.filter[e]=t,this.filterRows()}}]),a}()},MCQy:function(t,a,o){"use strict";o.r(a),o.d(a,"CitiVentasModule",function(){return Vt});var r,c=o("SVse"),i=o("GmJt"),l=o("3sEA"),u=o("wd/R"),m=o("cp0P"),p=o("bPAe"),b=o("CHRX"),s=o("AytR"),d=o("8Y7J"),f=o("IheW"),g=((r=function(){function t(a){e(this,t),this.http=a}return n(t,[{key:"obtenerDatos",value:function(t,e,a){return this.http.get(encodeURI("".concat(s.a.apiURL,"Ventas/RegistrosCitiVentas?fdesde=").concat(t,"-").concat(e,"-01T00:00:00&fhasta=").concat(t,"-").concat(e,"-").concat(a,"T23:59:59")))}},{key:"obtenerAlicuotas",value:function(t,e,a){return this.http.get(encodeURI("".concat(s.a.apiURL,"Ventas/RegistrosCitiVentasAlicuotas?fdesde=").concat(t,"-").concat(e,"-01T00:00:00&fhasta=").concat(t,"-").concat(e,"-").concat(a,"T23:59:59")))}}]),t}()).\u0275fac=function(t){return new(t||r)(d.bc(f.c))},r.\u0275prov=d.Nb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),h=o("zHaW"),v=o("PDjf"),y=o("VDRc"),C=o("Q2Ze"),w=o("ZTz/"),k=o("e6WT"),W=o("Dxy4"),X=o("Tj54"),T=o("w9WL"),I=o("UhP/"),M=o("TSSN");function x(t,e){if(1&t&&(d.Xb(0,"mat-option",53),d.Oc(1),d.Wb()),2&t){var a=e.$implicit;d.pc("value",a),d.Eb(1),d.Pc(null==a?null:a.value)}}function O(t,e){if(1&t&&d.Oc(0),2&t){var a=e.row;d.Qc(" ",null==a?null:a.PuntoVenta," ")}}function N(t,e){if(1&t&&(d.Oc(0),d.kc(1,"date")),2&t){var a=e.row;d.Qc(" ",d.mc(1,1,null==a?null:a.FechaComprobante,"dd/MM/yyyy")," ")}}function F(t,e){if(1&t&&d.Oc(0),2&t){var a=e.row;d.Qc(" ",null==a?null:a.TipoComprobante," ")}}function A(t,e){if(1&t&&(d.Oc(0),d.kc(1,"number")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.NumeroComprobante)," ")}}function E(t,e){if(1&t&&(d.Oc(0),d.kc(1,"currency")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.ImporteTotal)," ")}}function P(t,e){if(1&t&&d.Oc(0),2&t){var a=e.row;d.Qc(" ",null==a?null:a.ApellidoyNombreComprador," ")}}function D(t,e){if(1&t&&(d.Oc(0),d.kc(1,"number")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.CantidadAlicuotasIVA)," ")}}function Y(t,e){if(1&t&&(d.Oc(0),d.kc(1,"number")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.CodigoComprador)," ")}}function V(t,e){if(1&t&&d.Oc(0),2&t){var a=e.row;d.Qc(" ",null==a?null:a.CodigoMoneda," ")}}function j(t,e){if(1&t&&d.Oc(0),2&t){var a=e.row;d.Qc(" ",null==a?null:a.CodigoOperacion," ")}}function S(t,e){if(1&t&&d.Oc(0),2&t){var a=e.row;d.Qc(" ",null==a?null:a.IdentificacionComprador," ")}}function R(t,e){if(1&t&&(d.Oc(0),d.kc(1,"currency")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.ImpuestoInterno)," ")}}function Q(t,e){if(1&t&&(d.Oc(0),d.kc(1,"currency")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.ImpuestosMunicipales)," ")}}function q(t,e){if(1&t&&(d.Oc(0),d.kc(1,"currency")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.NoIntegranPrecioNetoGravado)," ")}}function H(t,e){if(1&t&&(d.Oc(0),d.kc(1,"currency")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.OperacionesExentas)," ")}}function L(t,e){if(1&t&&(d.Oc(0),d.kc(1,"currency")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.OtrosTributos)," ")}}function _(t,e){if(1&t&&(d.Oc(0),d.kc(1,"currency")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.PercepOPagosCuentaImpNac)," ")}}function B(t,e){if(1&t&&(d.Oc(0),d.kc(1,"currency")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.PercepcionIngBruto)," ")}}function G(t,e){if(1&t&&(d.Oc(0),d.kc(1,"currency")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.PercepcionNoCategorizado)," ")}}function z(t,e){if(1&t&&(d.Oc(0),d.kc(1,"currency")),2&t){var a=e.row;d.Qc(" ",d.lc(1,1,null==a?null:a.TipoCambio)," ")}}function J(t,e){if(1&t){var a=d.Yb();d.Xb(0,"button",6),d.fc("click",function(){return d.Dc(a),d.jc(3).descargarExcel()}),d.Xb(1,"mat-icon"),d.Oc(2,"save_alt"),d.Wb(),d.Oc(3,"Excel "),d.Wb()}}function U(t,e){if(1&t){var a=d.Yb();d.Xb(0,"button",6),d.fc("click",function(){return d.Dc(a),d.jc(3).descargarCitiVentas()}),d.Xb(1,"mat-icon"),d.Oc(2,"save_alt"),d.Wb(),d.Oc(3,"CITI Ventas Comprobantes "),d.Wb()}}function Z(t,e){if(1&t){var a=d.Yb();d.Xb(0,"button",6),d.fc("click",function(){return d.Dc(a),d.jc(3).descargarAlicuotasCitiVentas()}),d.Xb(1,"mat-icon"),d.Oc(2,"save_alt"),d.Wb(),d.Oc(3,"CITI Ventas Alicuotas "),d.Wb()}}function K(t,e){if(1&t&&(d.Xb(0,"div",55),d.Mc(1,J,4,0,"button",56),d.Mc(2,U,4,0,"button",56),d.Mc(3,Z,4,0,"button",56),d.Wb()),2&t){var a=d.jc(2);d.Eb(1),d.pc("ngIf",a.tabla1.data.length>0),d.Eb(1),d.pc("ngIf",a.tabla1.data.length>0),d.Eb(1),d.pc("ngIf",a.tabla1.data.length>0)}}function $(t,e){1&t&&(d.Xb(0,"ngx-datatable-footer"),d.Mc(1,K,4,3,"ng-template",54),d.Wb())}function tt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",58),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"ApellidoyNombreComprador")}),d.Wb(),d.Wb()}}function et(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"CantidadAlicuotasIVA")}),d.Wb(),d.Wb()}}function at(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"CodigoComprador")}),d.Wb(),d.Wb()}}function nt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",58),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"CodigoMoneda")}),d.Wb(),d.Wb()}}function ot(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",58),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"CodigoOperacion")}),d.Wb(),d.Wb()}}function rt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",58),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"FechaComprobante")}),d.Wb(),d.Wb()}}function ct(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",58),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"FechaVencPago")}),d.Wb(),d.Wb()}}function it(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",58),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"IdentificacionComprador")}),d.Wb(),d.Wb()}}function lt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"ImporteTotal")}),d.Wb(),d.Wb()}}function ut(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"ImpuestoInterno")}),d.Wb(),d.Wb()}}function mt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"ImpuestosMunicipales")}),d.Wb(),d.Wb()}}function pt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"NoIntegranPrecioNetoGravado")}),d.Wb(),d.Wb()}}function bt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"NumeroComprobante")}),d.Wb(),d.Wb()}}function st(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"NumeroComprobanteHasta")}),d.Wb(),d.Wb()}}function dt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"OperacionesExentas")}),d.Wb(),d.Wb()}}function ft(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"OtrosTributos")}),d.Wb(),d.Wb()}}function gt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"PercepOPagosCuentaImpNac")}),d.Wb(),d.Wb()}}function ht(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"PercepcionIngBruto")}),d.Wb(),d.Wb()}}function vt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"PercepcionNoCategorizado")}),d.Wb(),d.Wb()}}function yt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"PuntoVenta")}),d.Wb(),d.Wb()}}function Ct(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",59),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"TipoCambio")}),d.Wb(),d.Wb()}}function wt(t,e){if(1&t){var a=d.Yb();d.Xb(0,"mat-form-field",57),d.Xb(1,"input",58),d.fc("keyup",function(t){return d.Dc(a),d.jc().tabla1.updateFilter(t,"TipoComprobante")}),d.Wb(),d.Wb()}}var kt,Wt,Xt=function(){return{y:"50px",delay:"300ms"}},Tt=function(t){return{value:"*",params:t}},It=[{path:"",component:(kt=function(){function t(a,n,o,r){e(this,t),this.servicioCitiVentas=a,this.loader=n,this.snack=o,this.servicioExportarExcel=r,this.meses=[{value:"Enero",index:0},{value:"Febrero",index:1},{value:"Marzo",index:2},{value:"Abril",index:3},{value:"Mayo",index:4},{value:"Junio",index:5},{value:"Julio",index:6},{value:"Agosto",index:7},{value:"Septiembre",index:8},{value:"Octubre",index:9},{value:"Noviembre",index:10},{value:"Diciembre",index:11}],this.anio=u().year()}return n(t,[{key:"ngOnInit",value:function(){this.mesActual=this.meses[0],this.tabla1=new b.a,this.tabla1.groupField="PuntoVenta",this.tabla1.secondarySort="NumeroComprobante",this.tabla1.sum=["ImporteTotal"]}},{key:"seleccionarMes",value:function(t){this.mesActual=t}},{key:"mostrar",value:function(){var t=this;if(this.anio){this.loader.open();var e=(this.mesActual.index+1).toString().padStart(2,"0"),a=u("".concat(this.anio,"-").concat(e),"YYYY-MM").daysInMonth();Object(m.a)([this.servicioCitiVentas.obtenerDatos(this.anio,e,a),this.servicioCitiVentas.obtenerAlicuotas(this.anio,e,a)]).subscribe(function(e){t.citiventas=e[0],t.citiventasalicuotas=e[1],t.leerComprobante(),t.loader.close()},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}else alert("Ingrese el a\xf1o")}},{key:"descargarCitiVentas",value:function(){var t="citi_ventas_comprobantes_"+this.mesActual.value.toLowerCase()+"_"+this.anio.toString()+".txt";this.save(t,this.citiventas.join("\r\n"))}},{key:"descargarAlicuotasCitiVentas",value:function(){var t="citi_ventas_alicuotas_"+this.mesActual.value.toLowerCase()+"_"+this.anio.toString()+".txt";this.save(t,this.citiventasalicuotas.join("\r\n"))}},{key:"save",value:function(t,e){var a=new Blob([e],{type:"text/plain"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(a,t);else{var n=window.document.createElement("a");n.href=window.URL.createObjectURL(a),n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},{key:"onChange",value:function(t){this.anio=t.target.value&&null!=t.target.value?parseInt(t.target.value):null}},{key:"onSort",value:function(t){var e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}},{key:"getRowHeight",value:function(t){return 50}},{key:"tabla1OnActivate",value:function(t){"click"==t.type&&t.row.isGroup&&this.tabla1.setGroup(t.row)}},{key:"tipoComprobante",value:function(t){switch(t){case 1:return"FCA";case 6:return"FCB";case 11:return"FCC";case 3:return"NCA";case 8:return"NCB";case 13:return"NCC"}}},{key:"leer",value:function(t,e){for(var a=t,n=[],o=0;o<a.length;o++)if(null!=a[o]){for(var r=0,c={},i=0;i<e.length;i++){var l=a[o].slice(r,r+e[i].cantidad);if("number"==e[i].tipo){var m=parseFloat(l.slice(0,l.length-e[i].decimales)+"."+l.slice(l.length-e[i].decimales,l.length));c[e[i].nombre]=m}else"integer"==e[i].tipo?(c[e[i].nombre]=parseInt(l),"TipoComprobante"==e[i].nombre&&(c[e[i].nombre]=this.tipoComprobante(parseInt(l)))):(c[e[i].nombre]=l.trim(),"FechaComprobante"==e[i].nombre&&(c[e[i].nombre]=u(l,"YYYYMMDD").toISOString()));r+=e[i].cantidad}n.push(c)}return console.log(n),console.log(n.length),n}},{key:"leerComprobante",value:function(){this.tabla1.setData(this.leer(this.citiventas,[{nombre:"FechaComprobante",cantidad:8,tipo:"string"},{nombre:"TipoComprobante",cantidad:3,tipo:"integer"},{nombre:"PuntoVenta",cantidad:5,tipo:"integer"},{nombre:"NumeroComprobante",cantidad:20,tipo:"integer"},{nombre:"NumeroComprobanteHasta",cantidad:20,tipo:"integer"},{nombre:"CodigoComprador",cantidad:2,tipo:"integer"},{nombre:"IdentificacionComprador",cantidad:20,tipo:"integer"},{nombre:"ApellidoyNombreComprador",cantidad:30,tipo:"string"},{nombre:"ImporteTotal",cantidad:15,tipo:"number",decimales:2},{nombre:"NoIntegranPrecioNetoGravado",cantidad:15,tipo:"number",decimales:2},{nombre:"PercepcionNoCategorizado",cantidad:15,tipo:"number",decimales:2},{nombre:"OperacionesExentas",cantidad:15,tipo:"number",decimales:2},{nombre:"PercepOPagosCuentaImpNac",cantidad:15,tipo:"number",decimales:2},{nombre:"PercepcionIngBruto",cantidad:15,tipo:"number",decimales:2},{nombre:"ImpuestosMunicipales",cantidad:15,tipo:"integer",decimales:2},{nombre:"ImpuestoInterno",cantidad:15,tipo:"number",decimales:2},{nombre:"CodigoMoneda",cantidad:3,tipo:"string"},{nombre:"TipoCambio",cantidad:10,tipo:"number",decimales:6},{nombre:"CantidadAlicuotasIVA",cantidad:1,tipo:"integer"},{nombre:"CodigoOperacion",cantidad:1,tipo:"string"},{nombre:"OtrosTributos",cantidad:15,tipo:"integer",decimales:2},{nombre:"FechaVencPago",cantidad:8,tipo:"string"}]))}},{key:"descargarExcel",value:function(){var t="citi_ventas_comprobantes_"+this.mesActual.value.toLowerCase()+"_"+this.anio.toString();this.servicioExportarExcel.exportExcel(this.tabla1.data,t,"citi")}}]),t}(),kt.\u0275fac=function(t){return new(t||kt)(d.Rb(g),d.Rb(l.a),d.Rb(h.a),d.Rb(p.a))},kt.\u0275cmp=d.Lb({type:kt,selectors:[["app-citi-ventas"]],decls:125,vars:127,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","number","name","scodproducto",3,"value","placeholder","input"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],[1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort","activate"],["myTable",""],["prop","PuntoVenta",3,"summaryTemplate","name","width"],["ngx-datatable-cell-template",""],["prop","FechaComprobante",3,"summaryTemplate","name","width"],["prop","TipoComprobante",3,"summaryTemplate","name","width"],["prop","NumeroComprobante",3,"summaryTemplate","name","width"],["prop","ImporteTotal",3,"summaryTemplate","name","width"],["prop","ApellidoyNombreComprador",3,"summaryTemplate","name","width"],["prop","CantidadAlicuotasIVA",3,"summaryTemplate","name","width"],["prop","CodigoComprador",3,"summaryTemplate","name","width"],["prop","CodigoMoneda",3,"summaryTemplate","name","width"],["prop","CodigoOperacion",3,"summaryTemplate","name","width"],["prop","IdentificacionComprador",3,"summaryTemplate","name","width"],["prop","ImpuestoInterno",3,"summaryTemplate","name","width"],["prop","ImpuestosMunicipales",3,"summaryTemplate","name","width"],["prop","NoIntegranPrecioNetoGravado",3,"summaryTemplate","name","width"],["prop","OperacionesExentas",3,"summaryTemplate","name","width"],["prop","OtrosTributos",3,"summaryTemplate","name","width"],["prop","PercepOPagosCuentaImpNac",3,"summaryTemplate","name","width"],["prop","PercepcionIngBruto",3,"summaryTemplate","name","width"],["prop","PercepcionNoCategorizado",3,"summaryTemplate","name","width"],["prop","TipoCambio",3,"summaryTemplate","name","width"],[4,"ngIf"],["tabla1ApellidoyNombreComprador",""],["tabla1CantidadAlicuotasIVA",""],["tabla1CodigoComprador",""],["tabla1CodigoMoneda",""],["tabla1CodigoOperacion",""],["tabla1FechaComprobante",""],["tabla1FechaVencPago",""],["tabla1IdentificacionComprador",""],["tabla1ImporteTotal",""],["tabla1ImpuestoInterno",""],["tabla1ImpuestosMunicipales",""],["tabla1NoIntegranPrecioNetoGravado",""],["tabla1NumeroComprobante",""],["tabla1NumeroComprobanteHasta",""],["tabla1OperacionesExentas",""],["tabla1OtrosTributos",""],["tabla1PercepOPagosCuentaImpNac",""],["tabla1PercepcionIngBruto",""],["tabla1PercepcionNoCategorizado",""],["tabla1PuntoVenta",""],["tabla1TipoCambio",""],["tabla1TipoComprobante",""],[3,"value"],["ngx-datatable-footer-template",""],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(d.Xb(0,"mat-card",0),d.Xb(1,"div",1),d.Xb(2,"mat-form-field",2),d.Xb(3,"mat-label"),d.Oc(4),d.kc(5,"translate"),d.Wb(),d.Xb(6,"mat-select",3),d.fc("selectionChange",function(t){return e.seleccionarMes(t.value)})("valueChange",function(t){return e.mesActual=t}),d.Mc(7,x,2,2,"mat-option",4),d.Wb(),d.Wb(),d.Xb(8,"mat-form-field",1),d.Xb(9,"input",5),d.fc("input",function(t){return e.onChange(t)}),d.kc(10,"translate"),d.Wb(),d.Wb(),d.Xb(11,"button",6),d.fc("click",function(){return e.mostrar()}),d.Xb(12,"mat-icon"),d.Oc(13,"search"),d.Wb(),d.Oc(14),d.kc(15,"translate"),d.Wb(),d.Wb(),d.Wb(),d.Xb(16,"mat-card",0),d.Xb(17,"mat-card-content",0),d.Xb(18,"ngx-datatable",7,8),d.fc("sort",function(t){return e.onSort(t)})("activate",function(t){return e.tabla1OnActivate(t)}),d.Xb(20,"ngx-datatable-column",9),d.kc(21,"translate"),d.Mc(22,O,1,1,"ng-template",10),d.Wb(),d.Xb(23,"ngx-datatable-column",11),d.kc(24,"translate"),d.Mc(25,N,2,4,"ng-template",10),d.Wb(),d.Xb(26,"ngx-datatable-column",12),d.kc(27,"translate"),d.Mc(28,F,1,1,"ng-template",10),d.Wb(),d.Xb(29,"ngx-datatable-column",13),d.kc(30,"translate"),d.Mc(31,A,2,3,"ng-template",10),d.Wb(),d.Xb(32,"ngx-datatable-column",14),d.kc(33,"translate"),d.Mc(34,E,2,3,"ng-template",10),d.Wb(),d.Xb(35,"ngx-datatable-column",15),d.kc(36,"translate"),d.Mc(37,P,1,1,"ng-template",10),d.Wb(),d.Xb(38,"ngx-datatable-column",16),d.kc(39,"translate"),d.Mc(40,D,2,3,"ng-template",10),d.Wb(),d.Xb(41,"ngx-datatable-column",17),d.kc(42,"translate"),d.Mc(43,Y,2,3,"ng-template",10),d.Wb(),d.Xb(44,"ngx-datatable-column",18),d.kc(45,"translate"),d.Mc(46,V,1,1,"ng-template",10),d.Wb(),d.Xb(47,"ngx-datatable-column",19),d.kc(48,"translate"),d.Mc(49,j,1,1,"ng-template",10),d.Wb(),d.Xb(50,"ngx-datatable-column",20),d.kc(51,"translate"),d.Mc(52,S,1,1,"ng-template",10),d.Wb(),d.Xb(53,"ngx-datatable-column",21),d.kc(54,"translate"),d.Mc(55,R,2,3,"ng-template",10),d.Wb(),d.Xb(56,"ngx-datatable-column",22),d.kc(57,"translate"),d.Mc(58,Q,2,3,"ng-template",10),d.Wb(),d.Xb(59,"ngx-datatable-column",23),d.kc(60,"translate"),d.Mc(61,q,2,3,"ng-template",10),d.Wb(),d.Xb(62,"ngx-datatable-column",24),d.kc(63,"translate"),d.Mc(64,H,2,3,"ng-template",10),d.Wb(),d.Xb(65,"ngx-datatable-column",25),d.kc(66,"translate"),d.Mc(67,L,2,3,"ng-template",10),d.Wb(),d.Xb(68,"ngx-datatable-column",26),d.kc(69,"translate"),d.Mc(70,_,2,3,"ng-template",10),d.Wb(),d.Xb(71,"ngx-datatable-column",27),d.kc(72,"translate"),d.Mc(73,B,2,3,"ng-template",10),d.Wb(),d.Xb(74,"ngx-datatable-column",28),d.kc(75,"translate"),d.Mc(76,G,2,3,"ng-template",10),d.Wb(),d.Xb(77,"ngx-datatable-column",29),d.kc(78,"translate"),d.Mc(79,z,2,3,"ng-template",10),d.Wb(),d.Mc(80,$,2,0,"ngx-datatable-footer",30),d.Wb(),d.Wb(),d.Wb(),d.Mc(81,tt,2,0,"ng-template",null,31,d.Nc),d.Mc(83,et,2,0,"ng-template",null,32,d.Nc),d.Mc(85,at,2,0,"ng-template",null,33,d.Nc),d.Mc(87,nt,2,0,"ng-template",null,34,d.Nc),d.Mc(89,ot,2,0,"ng-template",null,35,d.Nc),d.Mc(91,rt,2,0,"ng-template",null,36,d.Nc),d.Mc(93,ct,2,0,"ng-template",null,37,d.Nc),d.Mc(95,it,2,0,"ng-template",null,38,d.Nc),d.Mc(97,lt,2,0,"ng-template",null,39,d.Nc),d.Mc(99,ut,2,0,"ng-template",null,40,d.Nc),d.Mc(101,mt,2,0,"ng-template",null,41,d.Nc),d.Mc(103,pt,2,0,"ng-template",null,42,d.Nc),d.Mc(105,bt,2,0,"ng-template",null,43,d.Nc),d.Mc(107,st,2,0,"ng-template",null,44,d.Nc),d.Mc(109,dt,2,0,"ng-template",null,45,d.Nc),d.Mc(111,ft,2,0,"ng-template",null,46,d.Nc),d.Mc(113,gt,2,0,"ng-template",null,47,d.Nc),d.Mc(115,ht,2,0,"ng-template",null,48,d.Nc),d.Mc(117,vt,2,0,"ng-template",null,49,d.Nc),d.Mc(119,yt,2,0,"ng-template",null,50,d.Nc),d.Mc(121,Ct,2,0,"ng-template",null,51,d.Nc),d.Mc(123,wt,2,0,"ng-template",null,52,d.Nc)),2&t){var a=d.Ac(82),n=d.Ac(84),o=d.Ac(86),r=d.Ac(88),c=d.Ac(90),i=d.Ac(92),l=d.Ac(96),u=d.Ac(98),m=d.Ac(100),p=d.Ac(102),b=d.Ac(104),s=d.Ac(106),f=d.Ac(110),g=d.Ac(112),h=d.Ac(114),v=d.Ac(116),y=d.Ac(118),C=d.Ac(120),w=d.Ac(122),k=d.Ac(124);d.Eb(4),d.Pc(d.lc(5,78,"Seleccionar Mes")),d.Eb(2),d.pc("value",e.mesActual),d.Eb(1),d.pc("ngForOf",e.meses),d.Eb(2),d.qc("placeholder",d.lc(10,80,"A\xd1O")),d.pc("value",e.anio),d.Eb(5),d.Qc("",d.lc(15,82,"Mostrar")," "),d.Eb(2),d.pc("@animate",d.vc(125,Tt,d.uc(124,Xt))),d.Eb(2),d.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("summaryRow",!0)("externalSorting",!0)("selectionType","single"),d.Eb(2),d.qc("name",d.lc(21,84,"PV")),d.pc("summaryTemplate",C)("width",150),d.Eb(3),d.qc("name",d.lc(24,86,"Fecha Comprobante")),d.pc("summaryTemplate",i)("width",150),d.Eb(3),d.qc("name",d.lc(27,88,"Tipo Comprobante")),d.pc("summaryTemplate",k)("width",150),d.Eb(3),d.qc("name",d.lc(30,90,"N\xfamero Comprobante")),d.pc("summaryTemplate",s)("width",150),d.Eb(3),d.qc("name",d.lc(33,92,"Importe Total")),d.pc("summaryTemplate",u)("width",150),d.Eb(3),d.qc("name",d.lc(36,94,"Comprador")),d.pc("summaryTemplate",a)("width",150),d.Eb(3),d.qc("name",d.lc(39,96,"Cant. Alic. IVA")),d.pc("summaryTemplate",n)("width",150),d.Eb(3),d.qc("name",d.lc(42,98,"C\xf3digo Comprador")),d.pc("summaryTemplate",o)("width",150),d.Eb(3),d.qc("name",d.lc(45,100,"C\xf3digo Moneda")),d.pc("summaryTemplate",r)("width",150),d.Eb(3),d.qc("name",d.lc(48,102,"C\xf3digo Operaci\xf3n")),d.pc("summaryTemplate",c)("width",150),d.Eb(3),d.qc("name",d.lc(51,104,"Identificaci\xf3n Comprador")),d.pc("summaryTemplate",l)("width",150),d.Eb(3),d.qc("name",d.lc(54,106,"Imp. Interno")),d.pc("summaryTemplate",m)("width",150),d.Eb(3),d.qc("name",d.lc(57,108,"Imp. Municipales")),d.pc("summaryTemplate",p)("width",150),d.Eb(3),d.qc("name",d.lc(60,110,"No integra Neto Grav.")),d.pc("summaryTemplate",b)("width",150),d.Eb(3),d.qc("name",d.lc(63,112,"Op. Exentas")),d.pc("summaryTemplate",f)("width",150),d.Eb(3),d.qc("name",d.lc(66,114,"Otros Tributos")),d.pc("summaryTemplate",g)("width",150),d.Eb(3),d.qc("name",d.lc(69,116,"Perc./Pagos Cuenta Imp. Nac.")),d.pc("summaryTemplate",h)("width",150),d.Eb(3),d.qc("name",d.lc(72,118,"Perc. IIBB")),d.pc("summaryTemplate",v)("width",150),d.Eb(3),d.qc("name",d.lc(75,120,"Perc. No Categ.")),d.pc("summaryTemplate",y)("width",150),d.Eb(3),d.qc("name",d.lc(78,122,"Tipo de Cambio")),d.pc("summaryTemplate",w)("width",150),d.Eb(3),d.pc("ngIf",e.tabla1.data.length>0)}},directives:[v.a,y.c,y.b,C.c,y.a,C.f,w.a,c.n,k.b,W.b,X.a,v.b,T.d,T.b,T.a,c.o,I.n,T.e,T.c],pipes:[M.c,c.f,c.g,c.d],styles:[""],data:{animation:[i.a]}}),kt),data:{title:"CITI VENTAS"}}],Mt=o("iInd"),xt=o("u9T3"),Ot=o("s7LF"),Nt=o("f44v"),Ft=o("TN/R"),At=o("iELJ"),Et=o("jMqV"),Pt=o("M9ds"),Dt=o("ZFy/"),Yt=o("PCNd"),Vt=((Wt=function t(){e(this,t)}).\u0275mod=d.Pb({type:Wt}),Wt.\u0275inj=d.Ob({factory:function(t){return new(t||Wt)},imports:[[c.c,Ot.s,xt.a,T.f,k.c,k.c,v.c,k.c,W.c,Nt.a,k.c,Dt.b,At.e,h.b,Et.b,Pt.c,w.b,X.b,M.b,Yt.a,Ft.c,Mt.k.forChild(It)]]}),Wt)}}])}();