!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,o){if(!t)return;if("string"==typeof t)return e(t,o);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,o)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"2Doj":function(e,i,a){"use strict";a.r(i),a.d(i,"NewPurchaseModule",function(){return ct});var s,c=a("SVse"),n=a("s7LF"),u=a("3sEA"),m=a("vpPe"),l=a("wd/R"),p=a("cp0P"),d=a("JX91"),f=a("lJxs"),h=a("Sp5M"),b=a("qA6C"),v=a("UVsP"),_=a("AytR"),C=a("8Y7J"),g=a("IheW"),F=((s=function(){function t(e){o(this,t),this.http=e}return r(t,[{key:"obtenerImpuestos",value:function(){return this.http.get(_.a.apiURL+'Impuestos?filter={"where":{"deletedon":{"eq":null}}}')}},{key:"obtenerSucursales",value:function(){return this.http.get(_.a.apiURL+'Sucursales?filter={"where":{"deletedon":{"eq":null}},"order":"sdescripcion ASC"}')}}]),t}()).\u0275fac=function(t){return new(t||s)(C.bc(g.c))},s.\u0275prov=C.Nb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),y=a("zHaW"),D=a("VDRc"),k=a("Q2Ze"),P=a("e6WT"),S=a("vrAh"),w=a("ZTz/"),E=a("pMoy"),O=a("n1FK"),x=a("TN/R"),W=a("Dxy4"),M=a("Tj54"),I=a("UhP/"),A=a("TSSN");function X(t,e){if(1&t&&(C.Xb(0,"mat-option",36),C.Oc(1),C.Wb()),2&t){var o=e.$implicit;C.pc("value",o),C.Eb(1),C.Qc(" ",null==o?null:o.srazonsocial," ")}}function N(t,e){if(1&t&&(C.Xb(0,"mat-option",36),C.Oc(1),C.Wb()),2&t){var o=e.$implicit;C.pc("value",o),C.Eb(1),C.Qc(" ",o," ")}}function V(t,e){if(1&t&&(C.Xb(0,"mat-option",36),C.Oc(1),C.Wb()),2&t){var o=e.$implicit;C.pc("value",o),C.Eb(1),C.Qc(" ",o," ")}}function R(t,e){if(1&t&&(C.Xb(0,"mat-option",36),C.Oc(1),C.Wb()),2&t){var o=e.$implicit;C.pc("value",o),C.Eb(1),C.Qc(" ",o.sdescripcion," ")}}function U(t,e){if(1&t){var o=C.Yb();C.Xb(0,"mat-form-field",23),C.Xb(1,"mat-label"),C.Oc(2),C.kc(3,"translate"),C.Wb(),C.Xb(4,"mat-select",8),C.fc("ngModelChange",function(t){return C.Dc(o),C.jc().form_sucursal=t}),C.Mc(5,R,2,2,"mat-option",5),C.Wb(),C.Wb()}if(2&t){var i=C.jc();C.Eb(2),C.Pc(C.lc(3,3,"Dep\xf3sito de la Sucursal")),C.Eb(2),C.pc("ngModel",i.form_sucursal),C.Eb(1),C.pc("ngForOf",i.sucursales_data)}}function j(t,e){if(1&t&&(C.Xb(0,"mat-option",36),C.Oc(1),C.Wb()),2&t){var o=e.$implicit;C.pc("value",o),C.Eb(1),C.Rc(" ",null==o?null:o.scodproducto," - ",null==o?null:o.snombre," ")}}function T(t,e){if(1&t){var o=C.Yb();C.Xb(0,"mat-form-field",37),C.Xb(1,"mat-label"),C.Oc(2),C.kc(3,"translate"),C.Wb(),C.Sb(4,"input",38),C.Xb(5,"mat-autocomplete",3,39),C.fc("optionSelected",function(t){return C.Dc(o),C.jc().cambiarProducto(t.option.value)}),C.Mc(7,j,2,3,"mat-option",5),C.kc(8,"async"),C.Wb(),C.Wb()}if(2&t){var i=C.Ac(6),r=C.jc();C.Eb(2),C.Pc(C.lc(3,5,"Producto")),C.Eb(2),C.pc("formControl",r.editorProducto)("matAutocomplete",i),C.Eb(1),C.pc("displayWith",r.displayFnProductos),C.Eb(2),C.pc("ngForOf",C.lc(8,7,r.filteredProductos))}}function L(t,e){if(1&t&&(C.Xb(0,"mat-form-field",40),C.Xb(1,"mat-label"),C.Oc(2,"Detalle"),C.Wb(),C.Sb(3,"input",41),C.Wb()),2&t){var o=C.jc();C.Eb(3),C.pc("formControl",o.form_servicio)}}function B(t,e){1&t&&(C.Xb(0,"mat-label"),C.Oc(1,"Precio Neto"),C.Wb())}function q(t,e){1&t&&(C.Xb(0,"mat-label"),C.Oc(1,"Precio Unitario"),C.Wb())}function H(t,e){if(1&t&&(C.Xb(0,"mat-form-field",14),C.Xb(1,"mat-label"),C.Oc(2,"Precio Final"),C.Wb(),C.Sb(3,"input",42),C.Wb()),2&t){var o=C.jc();C.Eb(3),C.pc("formControl",o.form_precio_final)}}function z(t,e){1&t&&(C.Xb(0,"div",43),C.Xb(1,"b"),C.Oc(2,"Atenci\xf3n"),C.Wb(),C.Oc(3,": esta configurado para que esta compra NO afecte el stock.\n"),C.Wb())}var J,Q,$=[{path:"",component:(J=function(){function e(t,i,r,a,s,c,u){o(this,e),this.servicioUUID=t,this.loader=i,this.snack=r,this.servicioNuevaCompra=a,this.servicioProductos=s,this.servicioEmpresas=c,this.servicioSucursales=u,this.editorProveedor=new n.e(""),this.editorProducto=new n.e(""),this.sucursal="",this.startDate=new n.e,this.endDate=new n.e,this.tiposFactura=["PRODUCTOS","SERVICIOS"],this.items=[],this.form_precio=new n.e(""),this.form_cantidad=new n.e(""),this.form_servicio=new n.e(""),this.form_tipoFactura="",this.form_tipoDocumento="",this.form_precio_final=new n.e(""),this.fecha=new n.e,this.fechacontable=new n.e,this.fechacaicae=new n.e,this.form_numero=new n.e(""),this.form_caicae=new n.e(""),this.form_afectarStock=new n.e(""),this.form_numero_sucursal=new n.e(""),this.form_acredito=new n.e(""),this.error_iva=!1,this.tipoFacturaBloqueado=!1,this.sucursal="",this.tiposDocumento=[],this.detalle=[],this.detalleimpuestos=[],this.fechaFiltroInicio=new Date,this.fechaFiltroFin=l().add(1,"days").toDate()}return r(e,[{key:"_filterProveedores",value:function(t){if("string"==typeof t){var e=t.toLowerCase();return this.proveedores.filter(function(t){return t.srazonsocial.toLowerCase().includes(e)})}return[]}},{key:"displayFnProveedores",value:function(t){return t&&t.srazonsocial?t.srazonsocial:""}},{key:"_filterProductos",value:function(t){if("string"==typeof t){var e=t.toLowerCase();return this.productos.filter(function(t){return t.snombre.toLowerCase().includes(e)})}return[]}},{key:"displayFnProductos",value:function(t){return t&&t.snombre?t.snombre:""}},{key:"ngOnInit",value:function(){var t=this,e=new Date;e.setHours(0,0,0,0);var o=new Date;o.setHours(23,59,59,999),this.startDate.setValue(e),this.endDate.setValue(o),this.loader.open(),this.servicioProductos.traerProductos("snombre ASC",function(){t.productos=t.servicioProductos.listaProductos,Object(p.a)([t.servicioEmpresas.obtenerEmpresas(),t.servicioProductos.obtenerProveedores(),t.servicioNuevaCompra.obtenerImpuestos(),t.servicioNuevaCompra.obtenerSucursales()]).subscribe(function(e){t.empresas=e[0],t.cantidaddecimales=e[0].cantidaddecimales,t.proveedores=e[1],t.impuestos=e[2],t.sucursales_data=e[3],t.filteredProveedores=t.editorProveedor.valueChanges.pipe(Object(d.a)(""),Object(f.a)(function(e){return t._filterProveedores(e)})),t.filteredProductos=t.editorProducto.valueChanges.pipe(Object(d.a)(""),Object(f.a)(function(e){return t._filterProductos(e)})),t.nuevaCompra(),t.loader.close()},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"renameKeys",value:function(e,o){var i=Object.keys(e).map(function(t){return function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}({},o[t]||t,e[t])});return Object.assign.apply(Object,[{}].concat(t(i)))}},{key:"obtenerNombreProveedor",value:function(t){if(this.proveedores)for(var e=0;e<this.proveedores.length;e++)if(this.proveedores[e].id==t)return this.proveedores[e].srazonsocial;return""}},{key:"obtenerNombreProducto",value:function(t,e){for(var o=0;o<this.productos.length;o++)if(this.productos[o].id==t)return this.productos[o].snombre;return e}},{key:"obtenerCodigoProducto",value:function(t){for(var e=0;e<this.productos.length;e++)if(this.productos[e].id==t)return this.productos[e].scodproducto;return""}},{key:"cambiarTiposFactura",value:function(){this.form_producto="",this.form_servicio.setValue("")}},{key:"cambiarProducto",value:function(t){this.form_producto=t}},{key:"cambiarProveedor",value:function(t){var e="T"==t.bdeproductos,o="T"==t.bdeservicios;this.tipoFacturaBloqueado=!1,this.form_tipoFactura=this.tiposFactura[0],e&&!o&&(this.tipoFacturaBloqueado=!0,this.form_tipoFactura=this.tiposFactura[0]),o&&!e&&(this.tipoFacturaBloqueado=!0,this.form_tipoFactura=this.tiposFactura[1]),this.cargarTiposDocumento(t.scondicioniva,e)}},{key:"cargarTiposDocumento",value:function(t,e){this.tiposDocumento=["Presupuesto de Compra","Nota de Cr\xe9dito Presupuesto de Compra"],this.form_tipoDocumento="Presupuesto de Compra",e&&this.tiposDocumento.push("Remito de Compra"),"Monotributista"==this.empresas[0].scondicioniva&&("Responsable Inscripto"==t&&(this.tiposDocumento.push("Factura de Compra B"),this.tiposDocumento.push("Nota de Cr\xe9dito B"),this.form_tipoDocumento="Factura de Compra B"),"Monotributista"==t&&(this.tiposDocumento.push("Factura de Compra C"),this.tiposDocumento.push("Nota de Cr\xe9dito C"),this.form_tipoDocumento="Factura de Compra C")),"Responsable Inscripto"==this.empresas[0].scondicioniva&&("Responsable Inscripto"==t&&(this.tiposDocumento.push("Factura de Compra A"),this.tiposDocumento.push("Nota de Cr\xe9dito A"),this.form_tipoDocumento="Factura de Compra A"),"Monotributista"==t&&(this.tiposDocumento.push("Factura de Compra C"),this.tiposDocumento.push("Nota de Cr\xe9dito C"),this.form_tipoDocumento="Factura de Compra C")),"Consumidor Final"==this.empresas[0].scondicioniva&&("Responsable Inscripto"==t&&(this.tiposDocumento.push("Factura de Compra B"),this.tiposDocumento.push("Nota de Cr\xe9dito B"),this.form_tipoDocumento="Factura de Compra B"),"Monotributista"==t&&(this.tiposDocumento.push("Factura de Compra C"),this.tiposDocumento.push("Nota de Cr\xe9dito C"),this.form_tipoDocumento="Factura de Compra C"))}},{key:"buscarProducto",value:function(t){for(var e=0;e<this.productos.length;e++)if(this.productos[e].id==t)return this.productos[e];return{}}},{key:"editarItem",value:function(t){this.temp_item=t,this.form_tipoFactura==this.tiposFactura[0]?(this.form_precio.setValue(t.rpreciou),this.form_cantidad.setValue(t.rcantidad),this.form_producto=this.buscarProducto(t.idproducto)):(this.form_precio.setValue(t.rpreciou),this.form_cantidad.setValue(t.rcantidad),this.form_servicio.setValue(t.sconcepto))}},{key:"eliminarItem",value:function(t){var e=this.items.indexOf(t);this.items.splice(e,1),this.calcular_total(!0)}},{key:"guardarItem",value:function(){this.form_cantidad.setValue(this.form_cantidad.value?this.form_cantidad.value:1);var t=this.items.indexOf(this.temp_item),e=this.form_precio.value,o=this.form_precio_final.value;"Factura de Compra A"!=this.form_tipoDocumento&&"Nota de Cr\xe9dito A"!=this.form_tipoDocumento&&(e=parseFloat((o.formatMoneySinMiles(2)/1.21).toFixed(this.cantidaddecimales))),-1!=t?(this.form_tipoFactura==this.tiposFactura[0]?(this.items[t].idproducto=this.form_producto.id,this.items[t].rcantidad=this.form_cantidad.value,this.items[t].rpreciou=o,this.items[t].rprecioneto=e,this.items[t].rporciva=this.form_producto.rporciva,this.items[t].rtotal=o*this.form_cantidad.value,this.items[t].rtotalneto=e*this.form_cantidad.value,this.items[t].rimpuestos=Math.abs(o-e),this.items[t].sconcepto=this.form_producto.snombre):(this.items[t].idproducto=null,this.items[t].rcantidad=this.form_cantidad.value,this.items[t].rpreciou=o,this.items[t].rprecioneto=e,this.items[t].rporciva=21,this.items[t].rtotal=o*this.form_cantidad.value,this.items[t].rtotalneto=e*this.form_cantidad.value,this.items[t].rimpuestos=Math.abs(o-e),this.items[t].sconcepto=this.form_servicio.value),this.items[t].impuesto_iva=this.items[t].rporciva/100*this.items[t].rtotalneto,this.items[t].impuesto_dgr=this.items[t].rporcdgr/100*this.items[t].rtotalneto,this.items[t].impuesto_interno=this.items[t].rvalorimpinterno*this.items[t].rcantidad):(this.items.push(this.form_tipoFactura==this.tiposFactura[0]?{id:this.servicioUUID.generateUUID(),idproducto:this.form_producto.id,rcantidad:this.form_cantidad.value,rpreciou:o,rprecioneto:e,rporciva:this.form_producto.rporciva,rtotal:this.form_cantidad.value*o,rtotalneto:e*this.form_cantidad.value,rimpuestos:Math.abs(o-e),sconcepto:this.form_producto.snombre}:{id:this.servicioUUID.generateUUID(),idproducto:null,rcantidad:this.form_cantidad.value,rpreciou:o,rprecioneto:e,rporciva:21,rtotal:this.form_cantidad.value*o,rtotalneto:e*this.form_cantidad.value,rimpuestos:Math.abs(o-e),sconcepto:this.form_servicio.value}),this.items[this.items.length-1].impuesto_iva=this.items[this.items.length-1].rporciva/100*this.items[this.items.length-1].rtotalneto,this.items[this.items.length-1].impuesto_dgr=this.items[this.items.length-1].rporcdgr/100*this.items[this.items.length-1].rtotalneto,this.items[this.items.length-1].impuesto_interno=this.items[this.items.length-1].rvalorimpinterno*this.items[this.items.length-1].rcantidad),this.form_precio.setValue(0),this.form_precio_final.setValue(0),this.form_cantidad.setValue(1),this.form_producto="",this.form_servicio.setValue(""),this.temp_item=null,this.calcular_total(!0)}},{key:"tipoComprobanteDeCompra",value:function(t){return"Presupuesto de Compra"==t?"PDC":"Remito de Compra"==t?"RMC":"Factura de Compra A"==t?"CCA":"Factura de Compra B"==t?"CCB":"Factura de Compra C"==t?"CCC":"Nota de Cr\xe9dito A"==t?"CNA":"Nota de Cr\xe9dito B"==t?"CNB":"Nota de Cr\xe9dito C"==t?"CNC":"Nota de Cr\xe9dito Presupuesto de Compra"==t?"PSC":void 0}},{key:"querySearch",value:function(t){if(""==t)return this.proveedores;var e=[];t=(t=t.toLowerCase()).split(" ");for(var o=0;o<this.proveedores.length;o++){for(var i=this.proveedores[o].srazonsocial.toLowerCase(),r=!0,a=0;a<t.length;a++)if(-1==i.indexOf(t[a])){r=!1;break}r&&e.push(this.proveedores[o])}return e}},{key:"querySearchProducto",value:function(t){if(""==t)return this.productos;var e=[];t=(t=t.toLowerCase()).split(" ");for(var o=0;o<this.productos.length;o++)for(var i=this.productos[o],r=0;r<t.length;r++){var a=t[r];if(-1==i.snombre.toLowerCase().indexOf(a)&&i.scodproducto.toLowerCase()!=a&&i.sean!=a&&i.sean2!=a)break;e.push(this.productos[o])}return e}},{key:"selectedItemChangeProducto",value:function(t){t&&null!=t.rcostou&&this.form_precio.setValue(t.rcostou),this.calcular_precio_neto(),this.calcular_precio_final()}},{key:"calcular_precio_neto",value:function(){var t=this.form_producto;"Factura de Compra A"!=this.form_tipoDocumento&&"Nota de Cr\xe9dito A"!=this.form_tipoDocumento||(this.form_precio.setValue(parseFloat(((t.rcostou-t.rvalorimpinterno)/(t.rporciva/100+t.rporcdgr/100+1)).toFixed(this.cantidaddecimales))),this.form_precio.setValue(t&&t.rcostou&&t.rporciva&&t.rporcdgr&&null!=t.rvalorimpinterno?parseFloat(((t.rcostou-t.rvalorimpinterno)/(t.rporciva/100+t.rporcdgr/100+1)).toFixed(this.cantidaddecimales)):0))}},{key:"calcular_precio_final",value:function(){var t=this.form_producto;this.form_precio_final.setValue("Factura de Compra A"==this.form_tipoDocumento||"Nota de Cr\xe9dito A"==this.form_tipoDocumento?parseFloat((this.form_precio.value*(t.rporciva/100+t.rporcdgr/100+1)+t.rvalorimpinterno).toFixed(this.cantidaddecimales).formatMoneySinMiles(2)):this.form_precio)}},{key:"nuevaCompra",value:function(){var t=new Date;t.setHours(0,0,0,0),this.fecha.setValue(t);var e=new Date;e.setHours(0,0,0,0),this.fechacontable.setValue(e);var o=new Date;o.setHours(0,0,0,0),this.fechacaicae.setValue(l(o).add(10,"days").toDate()),this.items=[],this.form_precio.setValue(0),this.form_cantidad.setValue(1),this.form_producto="",this.form_servicio.setValue(""),this.form_tipoFactura=this.tiposFactura[0],this.form_tipoDocumento=this.tiposDocumento[0],this.form_numero.setValue(""),this.form_caicae.setValue(""),this.form_afectarStock.setValue(!1),this.form_descuento=0,this.form_sucursal=this.sucursales_data[0],this.editorProveedor.setValue(this.proveedores[0]),this.cambiarProveedor(this.proveedores[0]),this.subtotal=0,this.iva=0,this.total=0,this.lista_impuestos=[],this.lista_impuestos=[];for(var i=0;i<this.impuestos.length;i++)this.lista_impuestos.push({id:this.impuestos[i].id,simpuesto:this.impuestos[i].simpuesto,total:0,idempresa:this.impuestos[i].idempresa,rporc:this.impuestos[i].rporc})}},{key:"cancelarCompra",value:function(){}},{key:"fechaAfip",value:function(){var t=this.fechacaicae.value,e=t.getUTCMonth()+1,o=t.getUTCDate(),i=t.getUTCFullYear();return i=e<10?i+"0"+e:i+""+e,o<10?i+"0"+o:i+""+o}},{key:"EsNotaDeCredito",value:function(t){return"CNA"==t||"CNB"==t||"CNC"==t||"CND"==t||"PSC"==t}},{key:"generarCompra",value:function(t,e){this.servicioUUID.generateUUID(),this.tipoComprobanteDeCompra(this.form_tipoDocumento),this.fecha.value.toISOString(),(new Date).toISOString(),this.fecha.value.toISOString(),this.fechacontable.value.toISOString(),this.EsNotaDeCredito(this.tipoComprobanteDeCompra(this.form_tipoDocumento))}},{key:"verificar_iva",value:function(){this.error_iva=this.total_impuestos!=this.iva}},{key:"calcular_total_impuestos",value:function(){for(var t=0,e=0;e<this.lista_impuestos.length;e++)t+=this.lista_impuestos[e].total;this.total_impuestos=parseFloat(t.toFixed(this.cantidaddecimales)),this.iva=this.total_impuestos}},{key:"calcular_total",value:function(t){for(var e=0,o=0,i=0;i<this.items.length;i++)e+=this.items[i].rtotal,o+=this.items[i].rtotalneto;if(t){for(var r=0;r<this.lista_impuestos.length;r++)this.lista_impuestos[r].total=0;for(i=0;i<this.items.length;i++)for(r=0;r<this.lista_impuestos.length;r++){if(this.items[i].rporciva==this.lista_impuestos[r].rporc){this.lista_impuestos[r].total+=this.items[i].impuesto_iva;break}if(this.items[i].rporcdgr==this.lista_impuestos[r].rporc){this.lista_impuestos[r].total+=this.items[i].impuesto_dgr;break}if(this.items[i].rvalorimpinterno==this.lista_impuestos[r].rporc){this.lista_impuestos[r].total+=this.items[i].impuesto_interno;break}}for(r=0;r<this.lista_impuestos.length;r++)this.lista_impuestos[r].total=parseFloat(this.lista_impuestos[r].total.toFixed(this.cantidaddecimales))}"Factura de Compra A"==this.form_tipoDocumento||"Nota de Cr\xe9dito A"==this.form_tipoDocumento?(this.calcular_total_impuestos(),this.subtotal=parseFloat(o.toFixed(this.cantidaddecimales))):(this.subtotal=parseFloat(e.toFixed(this.cantidaddecimales)),this.iva=0),this.total=parseFloat((this.subtotal-this.form_descuento+this.iva).toFixed(this.cantidaddecimales))}}]),e}(),J.\u0275fac=function(t){return new(t||J)(C.Rb(m.a),C.Rb(u.a),C.Rb(y.a),C.Rb(F),C.Rb(b.a),C.Rb(h.a),C.Rb(v.a))},J.\u0275cmp=C.Lb({type:J,selectors:[["app-new-purchase"]],decls:86,vars:86,consts:[["fxLayout","row wrap"],["appearance","fill","fxFlex","100",1,"m-8","graphic-select-form-field"],["type","text","aria-label","Proveedor","matInput","",3,"formControl","matAutocomplete"],[3,"displayWith","optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["appearance","fill","fxFlex","30",1,"m-8","graphic-select-form-field"],[3,"ngModel","ngModelChange"],["fxFlex","25","appearance","fill",1,"m-8","graphic-select-form-field"],["name","form_numero_sucursal","matInput","","type","number","max","9999","min","0",3,"formControl"],["name","form_numero","matInput","","type","number","max","99999999","min","0",3,"formControl"],["fxFlex","10",1,"m-8",2,"padding-top","15px"],["name","form_acredito",3,"formControl"],["fxFlex","10","appearance","fill",1,"m-8","graphic-select-form-field"],["matInput","",3,"ngxMatDatetimePicker","formControl"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","stepSecond","touchUi","color","enableMeridian","disableMinute","hideTime"],["picker",""],["picker2",""],["fxFlex","15","appearance","fill",1,"m-8","graphic-select-form-field"],["name","form_caicae","matInput","","type","number","min","0",3,"formControl"],["picker3",""],["appearance","fill","fxFlex","15",1,"m-8","graphic-select-form-field"],[3,"ngModel","disabled","ngModelChange","selectionChange"],["fxFlex","10",1,"m-8",2,"padding-top","15px",3,"hidden"],["name","form_afectarStock",3,"formControl"],["class","m-8 graphic-select-form-field","appearance","fill","fxFlex","15",4,"ngIf"],["name","form_cantidad","matInput","","type","number","min","0",3,"formControl"],["class","m-8 graphic-select-form-field","appearance","fill","fxFlex","50",4,"ngIf"],["class","m-8 graphic-select-form-field","fxFlex","50","appearance","fill",4,"ngIf"],[4,"ngIf"],["name","form_precio","matInput","","type","number","min","0",3,"formControl"],["class","m-8 graphic-select-form-field","fxFlex","10","appearance","fill",4,"ngIf"],["mat-button","","color","primary",3,"click"],["class","red-400 red-400-fg p-16",4,"ngIf"],[3,"value"],["appearance","fill","fxFlex","50",1,"m-8","graphic-select-form-field"],["type","text","aria-label","Producto","matInput","",3,"formControl","matAutocomplete"],["auto2","matAutocomplete"],["fxFlex","50","appearance","fill",1,"m-8","graphic-select-form-field"],["name","form_servicio","matInput","","type","text","min","0",3,"formControl"],["readonly","","name","form_precio_final","matInput","","type","number","min","0",3,"formControl"],[1,"red-400","red-400-fg","p-16"]],template:function(t,e){if(1&t&&(C.Xb(0,"div"),C.Xb(1,"div",0),C.Xb(2,"mat-form-field",1),C.Xb(3,"mat-label"),C.Oc(4),C.kc(5,"translate"),C.Wb(),C.Sb(6,"input",2),C.Xb(7,"mat-autocomplete",3,4),C.fc("optionSelected",function(t){return e.cambiarProveedor(t.option.value)}),C.Mc(9,X,2,2,"mat-option",5),C.kc(10,"async"),C.Wb(),C.Wb(),C.Wb(),C.Xb(11,"div",6),C.Xb(12,"mat-form-field",7),C.Xb(13,"mat-label"),C.Oc(14),C.kc(15,"translate"),C.Wb(),C.Xb(16,"mat-select",8),C.fc("ngModelChange",function(t){return e.form_tipoDocumento=t}),C.Mc(17,N,2,2,"mat-option",5),C.Wb(),C.Wb(),C.Xb(18,"mat-form-field",9),C.Xb(19,"mat-label"),C.Oc(20,"N\xfamero (primeros 4 d\xedgitos)"),C.Wb(),C.Sb(21,"input",10),C.Wb(),C.Xb(22,"mat-form-field",9),C.Xb(23,"mat-label"),C.Oc(24,"N\xfamero (\xfaltimos 8 d\xedgitos)"),C.Wb(),C.Sb(25,"input",11),C.Wb(),C.Xb(26,"div",12),C.Xb(27,"mat-checkbox",13),C.Oc(28,"A Cr\xe9dito"),C.Wb(),C.Wb(),C.Wb(),C.Xb(29,"div",6),C.Xb(30,"mat-form-field",14),C.Xb(31,"mat-label"),C.Oc(32),C.kc(33,"translate"),C.Wb(),C.Sb(34,"input",15),C.Sb(35,"mat-datepicker-toggle",16),C.Sb(36,"ngx-mat-datetime-picker",17,18),C.Wb(),C.Xb(38,"mat-form-field",14),C.Xb(39,"mat-label"),C.Oc(40),C.kc(41,"translate"),C.Wb(),C.Sb(42,"input",15),C.Sb(43,"mat-datepicker-toggle",16),C.Sb(44,"ngx-mat-datetime-picker",17,19),C.Wb(),C.Xb(46,"mat-form-field",20),C.Xb(47,"mat-label"),C.Oc(48,"CAI/CAE"),C.Wb(),C.Sb(49,"input",21),C.Wb(),C.Xb(50,"mat-form-field",14),C.Xb(51,"mat-label"),C.Oc(52),C.kc(53,"translate"),C.Wb(),C.Sb(54,"input",15),C.Sb(55,"mat-datepicker-toggle",16),C.Sb(56,"ngx-mat-datetime-picker",17,22),C.Wb(),C.Xb(58,"mat-form-field",23),C.Xb(59,"mat-label"),C.Oc(60),C.kc(61,"translate"),C.Wb(),C.Xb(62,"mat-select",24),C.fc("ngModelChange",function(t){return e.form_tipoFactura=t})("selectionChange",function(){return e.cambiarTiposFactura()}),C.Mc(63,V,2,2,"mat-option",5),C.Wb(),C.Wb(),C.Xb(64,"div",25),C.Xb(65,"mat-checkbox",26),C.Oc(66,"Afectar Stock"),C.Wb(),C.Wb(),C.Mc(67,U,6,5,"mat-form-field",27),C.Wb(),C.Wb(),C.Xb(68,"div",6),C.Xb(69,"mat-form-field",14),C.Xb(70,"mat-label"),C.Oc(71,"Cantidad"),C.Wb(),C.Sb(72,"input",28),C.Wb(),C.Mc(73,T,9,9,"mat-form-field",29),C.Mc(74,L,4,1,"mat-form-field",30),C.Xb(75,"mat-form-field",14),C.Mc(76,B,2,0,"mat-label",31),C.Mc(77,q,2,0,"mat-label",31),C.Sb(78,"input",32),C.Wb(),C.Mc(79,H,4,1,"mat-form-field",33),C.Xb(80,"button",34),C.fc("click",function(){return e.guardarItem()}),C.Xb(81,"mat-icon"),C.Oc(82,"save"),C.Wb(),C.Oc(83),C.kc(84,"translate"),C.Wb(),C.Wb(),C.Mc(85,z,4,0,"div",35)),2&t){var o=C.Ac(8),i=C.Ac(37),r=C.Ac(45),a=C.Ac(57);C.Eb(4),C.Pc(C.lc(5,70,"Proveedor")),C.Eb(2),C.pc("formControl",e.editorProveedor)("matAutocomplete",o),C.Eb(1),C.pc("displayWith",e.displayFnProveedores),C.Eb(2),C.pc("ngForOf",C.lc(10,72,e.filteredProveedores)),C.Eb(5),C.Pc(C.lc(15,74,"Documento")),C.Eb(2),C.pc("ngModel",e.form_tipoDocumento),C.Eb(1),C.pc("ngForOf",e.tiposDocumento),C.Eb(4),C.pc("formControl",e.form_numero_sucursal),C.Eb(4),C.pc("formControl",e.form_numero),C.Eb(2),C.pc("formControl",e.form_acredito),C.Eb(5),C.Pc(C.lc(33,76,"Fecha")),C.Eb(2),C.pc("ngxMatDatetimePicker",i)("formControl",e.fecha),C.Eb(1),C.pc("for",i),C.Eb(1),C.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!0),C.Eb(4),C.Pc(C.lc(41,78,"Fecha Contable")),C.Eb(2),C.pc("ngxMatDatetimePicker",r)("formControl",e.fechacontable),C.Eb(1),C.pc("for",r),C.Eb(1),C.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!0),C.Eb(5),C.pc("formControl",e.form_caicae),C.Eb(3),C.Pc(C.lc(53,80,"Fecha CAI / CAE")),C.Eb(2),C.pc("ngxMatDatetimePicker",a)("formControl",e.fechacaicae),C.Eb(1),C.pc("for",a),C.Eb(1),C.pc("showSpinners",!0)("showSeconds",!0)("stepHour",1)("stepMinute",1)("stepSecond",1)("touchUi",!1)("color","white")("enableMeridian",!0)("disableMinute",!1)("hideTime",!0),C.Eb(4),C.Pc(C.lc(61,82,"Tipo de Factura")),C.Eb(2),C.pc("ngModel",e.form_tipoFactura)("disabled",e.items.length>0||e.tipoFacturaBloqueado),C.Eb(1),C.pc("ngForOf",e.tiposFactura),C.Eb(1),C.pc("hidden",e.form_tipoFactura!=e.tiposFactura[0]),C.Eb(1),C.pc("formControl",e.form_afectarStock),C.Eb(2),C.pc("ngIf",e.form_tipoFactura==e.tiposFactura[0]&&e.form_afectarStock.value),C.Eb(5),C.pc("formControl",e.form_cantidad),C.Eb(1),C.pc("ngIf",e.form_tipoFactura==e.tiposFactura[0]),C.Eb(1),C.pc("ngIf",e.form_tipoFactura==e.tiposFactura[1]),C.Eb(2),C.pc("ngIf","Factura de Compra A"==e.form_tipoDocumento||"Nota de Cr\xe9dito A"==e.form_tipoDocumento),C.Eb(1),C.pc("ngIf","Factura de Compra A"!=e.form_tipoDocumento&&"Nota de Cr\xe9dito A"!=e.form_tipoDocumento),C.Eb(1),C.pc("formControl",e.form_precio),C.Eb(1),C.pc("ngIf","Factura de Compra A"==e.form_tipoDocumento||"Nota de Cr\xe9dito A"==e.form_tipoDocumento),C.Eb(4),C.Qc("",C.lc(84,84,"Guardar")," "),C.Eb(2),C.pc("ngIf",!e.form_afectarStock.value)}},directives:[D.c,k.c,D.a,k.f,P.b,n.c,S.c,n.o,n.f,S.a,c.n,w.a,n.r,n.s,E.a,O.a,x.h,k.h,O.b,c.o,W.b,M.a,I.n],pipes:[A.c,c.b],styles:[""]}),J),data:{title:"NUEVA COMPRA"}}],K=a("iInd"),Y=a("u9T3"),Z=a("PDjf"),G=a("f44v"),tt=a("iELJ"),et=a("jMqV"),ot=a("M9ds"),it=a("ZFy/"),rt=a("w9WL"),at=a("PCNd"),st=a("BxcV"),ct=((Q=function t(){o(this,t)}).\u0275mod=C.Pb({type:Q}),Q.\u0275inj=C.Ob({factory:function(t){return new(t||Q)},imports:[[c.c,n.t,Y.a,rt.f,P.c,P.c,Z.c,P.c,W.c,G.a,P.c,it.b,tt.f,y.b,et.b,ot.c,w.b,M.b,A.b,at.a,S.b,st.a,n.j,x.g,O.c,O.e,O.d,E.b,K.k.forChild($)]]}),Q)}}])}();