(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{BqQZ:function(t,e,o){"use strict";o.r(e),o.d(e,"ProductPricesModule",function(){return I});var r=o("SVse"),i=o("cp0P"),a=o("Sp5M"),c=o("AytR"),s=o("8Y7J"),n=o("IheW");let d=(()=>{class t{constructor(t){this.http=t}obtenerFamilias(){return this.http.get(encodeURI(c.a.apiURL+'Familias?filter={"where":{"deletedon":{"eq":null}}}'))}}return t.\u0275fac=function(e){return new(e||t)(s.bc(n.c))},t.\u0275prov=s.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=o("Q2Ze"),h=o("ZTz/"),b=o("s7LF"),u=o("jMqV"),p=o("e6WT"),f=o("UhP/"),g=o("TSSN");function _(t,e){if(1&t&&(s.Xb(0,"mat-option",11),s.Oc(1),s.Wb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Eb(1),s.Qc(" ",t.sfamilia," ")}}function m(t,e){if(1&t&&(s.Xb(0,"mat-option",11),s.Oc(1),s.Wb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Eb(1),s.Qc(" ",t.nombre," ")}}function v(t,e){if(1&t&&(s.Xb(0,"mat-option",11),s.Oc(1),s.Wb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Eb(1),s.Qc(" ",t.valor," ")}}function M(t,e){if(1&t&&(s.Xb(0,"mat-option",11),s.Oc(1),s.Wb()),2&t){const t=e.$implicit;s.pc("value",t.id),s.Eb(1),s.Qc(" ",t.valor," ")}}const W=[{path:"",component:(()=>{class t{constructor(t,e){this.servicioPrecioProductos=t,this.servicioEmpresas=e,this.editor_redondeo=0,this.editor_margen=30,this.editor_lista_precios=0,this.editor_compras_dias=1,this.editor_costo_dias=1,this.editor_buscar="",this.editor_previsualizar_switch=!0,this.editor_costo_switch=!0,this.precio_base=[{id:0,valor:"Precio de Costo"},{id:1,valor:"Precio de Ultima Compra"},{id:2,valor:"Precio de Venta"}],this.editor_precio_base="0"}ngOnInit(){Object(i.a)([this.servicioPrecioProductos.obtenerFamilias(),this.servicioEmpresas.obtenerEmpresas()]).subscribe(t=>{this.familias=t[0],this.familias.sort((t,e)=>t.sfamilia>e.sfamilia?1:t.sfamilia<e.sfamilia?-1:0),this.familias.length>0&&(this.editor_familia=this.familias[0].id),this.empresas=t[1],this.listadeprecios=[];for(var e=parseInt(this.empresas[0].icantidadlistasdeprecios),o=0;o<e;o++)this.listadeprecios.push({id:o,nombre:"Lista "+(o+1)});this.cantidaddecimales=this.empresas[0].icantidaddecimales,this.redondeo=0==this.empresas[0].icantidaddecimales?[{id:0,valor:10},{id:1,valor:100},{id:2,valor:1e3}]:[{id:0,valor:.1},{id:1,valor:.25},{id:2,valor:.5},{id:3,valor:1},{id:4,valor:2},{id:5,valor:5},{id:6,valor:10}]})}redondear(t,e){return Math.round(t/e)*e}precioProducto(t){var e=0,o=0;switch(this.editor_precio_base){case"0":e=t.CostoU;break;case"1":e=t.UltCompra;break;case"2":e=t.PrecioU}return o=e*(1+this.margenProducto(t)/100),this.editor_redondeo_switch&&this.editor_previsualizar_switch&&(o=this.redondear(o,this.redondeo[this.editor_redondeo].valor)),t.precioproducto=o,t.precioproducto}margenProductoReal(t){var e=0;switch(this.editor_precio_base){case"0":e=t.CostoU;break;case"1":e=t.UltCompra;break;case"2":e=t.PrecioU}return t.margenproductoreal=this.getMargen(e,this.precioProducto(t)),t.margenproductoreal}margenProducto(t){return this.editor_margen_switch&&this.editor_previsualizar_switch?Math.round(this.editor_margen):this.getMargen(t.CostoU,t.PrecioU)}getMargen(t,e){return 0==t&&(t=e),100*(e/t-1)||0}refresh_por_costo(){this.editor_costo_switch&&this.refresh()}refresh_por_compras(){this.editor_compras_switch&&this.refresh()}getLengthProductos(){if(this.productos_filtrados)return this.productos_filtrados.length}refresh(){this.editor_compras_switch&&null!=this.editor_compras_dias&&Math.abs(this.editor_compras_dias),this.editor_costo_switch&&null!=this.editor_costo_dias&&Math.abs(this.editor_costo_dias)}filtrar_productos(){if(this.productos_filtrados=[],""!=this.editor_buscar)var t=this.editor_buscar.toLowerCase();for(var e=0;e<this.productos.length;e++){var o=!0;if(""!=this.editor_buscar){var r=this.productos[e].Proveedor?this.productos[e].Proveedor.toLowerCase():"";o=-1!=(this.productos[e].Codigo+" - "+this.productos[e].Nombre.toLowerCase()+" - "+r).indexOf(t)}o&&this.mostrarProducto(this.productos[e])&&(this.productos_filtrados.push({}),this.productos_filtrados[this.productos_filtrados.length-1]=this.productos[e],this.productos_filtrados[this.productos_filtrados.length-1].cambiar=!0)}}mostrarProducto(t){var e=this.precioProducto(t).toFixed(2);return(t.PrecioU?t.PrecioU:0).toFixed(2)!=e&&e>0}guardar_cambios(){this.err_212=!1,this.guardando=!0,this.texto_guardando="Guardando...",this.cant_guardados=0,this.cambiados=0,this.error_precios=!1}guardar_productos(){}editarProducto(t){}}return t.\u0275fac=function(e){return new(e||t)(s.Rb(d),s.Rb(a.a))},t.\u0275cmp=s.Lb({type:t,selectors:[["app-product-prices"]],decls:69,vars:60,consts:[["layout-gt-sm","row"],["layout","column","flex-gt-sm","50",2,"padding","10px"],["appearance","fill"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"ngModel","change","ngModelChange"],[1,"full-width"],["matInput","","type","number","step","1","min","0",3,"ngModel","placeholder","change","ngModelChange"],[2,"text-align","center"],["matInput","","type","number","step","any","min","0","max","100",3,"ngModel","placeholder","ngModelChange"],[3,"ngModel","ngModelChange"],[3,"value"]],template:function(t,e){1&t&&(s.Xb(0,"div",0),s.Xb(1,"div",1),s.Xb(2,"div"),s.Xb(3,"mat-form-field",2),s.Xb(4,"mat-label"),s.Oc(5),s.kc(6,"translate"),s.Wb(),s.Xb(7,"mat-select",3),s.fc("ngModelChange",function(t){return e.editor_familia=t})("selectionChange",function(){return e.filtrar_productos()}),s.Mc(8,_,2,2,"mat-option",4),s.Wb(),s.Wb(),s.Wb(),s.Xb(9,"div"),s.Xb(10,"mat-slide-toggle",5),s.fc("change",function(){return e.refresh()})("ngModelChange",function(t){return e.editor_familia_switch=t}),s.Oc(11),s.kc(12,"translate"),s.Wb(),s.Wb(),s.Xb(13,"div"),s.Xb(14,"mat-slide-toggle",5),s.fc("change",function(){return e.refresh()})("ngModelChange",function(t){return e.editor_compras_switch=t}),s.Oc(15),s.kc(16,"translate"),s.Wb(),s.Xb(17,"mat-form-field",6),s.Xb(18,"input",7),s.fc("change",function(){return e.refresh_por_compras()})("ngModelChange",function(t){return e.editor_compras_dias=t}),s.kc(19,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Xb(20,"div"),s.Xb(21,"mat-slide-toggle",5),s.fc("change",function(){return e.refresh()})("ngModelChange",function(t){return e.editor_costo_switch=t}),s.Oc(22),s.kc(23,"translate"),s.Wb(),s.Xb(24,"mat-form-field",6),s.Xb(25,"input",7),s.fc("change",function(){return e.refresh_por_costo()})("ngModelChange",function(t){return e.editor_costo_dias=t}),s.kc(26,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Xb(27,"div"),s.Xb(28,"mat-form-field",2),s.Xb(29,"mat-label"),s.Oc(30),s.kc(31,"translate"),s.Wb(),s.Xb(32,"mat-select",3),s.fc("ngModelChange",function(t){return e.editor_lista_precios=t})("selectionChange",function(){return e.refresh()}),s.Mc(33,m,2,2,"mat-option",4),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(34,"div",1),s.Xb(35,"h3",8),s.Oc(36,"Modificar precios masivamente"),s.Wb(),s.Xb(37,"div"),s.Xb(38,"mat-slide-toggle",5),s.fc("change",function(){return e.filtrar_productos()})("ngModelChange",function(t){return e.editor_margen_switch=t}),s.Oc(39),s.kc(40,"translate"),s.Wb(),s.Xb(41,"mat-form-field",6),s.Xb(42,"input",9),s.fc("ngModelChange",function(t){return e.editor_margen=t}),s.kc(43,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Xb(44,"div"),s.Xb(45,"mat-slide-toggle",5),s.fc("change",function(){return e.filtrar_productos()})("ngModelChange",function(t){return e.editor_redondeo_switch=t}),s.Oc(46),s.kc(47,"translate"),s.Wb(),s.Xb(48,"mat-form-field",2),s.Xb(49,"mat-label"),s.Oc(50),s.kc(51,"translate"),s.Wb(),s.Xb(52,"mat-select",3),s.fc("ngModelChange",function(t){return e.editor_redondeo=t})("selectionChange",function(){return e.filtrar_productos()}),s.Mc(53,v,2,2,"mat-option",4),s.Wb(),s.Wb(),s.Wb(),s.Xb(54,"div"),s.Xb(55,"mat-form-field",2),s.Xb(56,"mat-label"),s.Oc(57),s.kc(58,"translate"),s.Wb(),s.Xb(59,"mat-select",3),s.fc("ngModelChange",function(t){return e.editor_precio_base=t})("selectionChange",function(){return e.filtrar_productos()}),s.Mc(60,M,2,2,"mat-option",4),s.Wb(),s.Wb(),s.Wb(),s.Xb(61,"div"),s.Xb(62,"mat-slide-toggle",10),s.fc("ngModelChange",function(t){return e.editor_precio_costo_switch=t}),s.Oc(63),s.kc(64,"translate"),s.Wb(),s.Wb(),s.Xb(65,"div"),s.Xb(66,"mat-slide-toggle",10),s.fc("ngModelChange",function(t){return e.editor_previsualizar_switch=t}),s.Oc(67),s.kc(68,"translate"),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&t&&(s.Eb(5),s.Pc(s.lc(6,32,"Familias")),s.Eb(2),s.pc("ngModel",e.editor_familia),s.Eb(1),s.pc("ngForOf",e.familias),s.Eb(2),s.pc("ngModel",e.editor_familia_switch),s.Eb(1),s.Qc(" ",s.lc(12,34,"Solo esta Familia"),""),s.Eb(3),s.pc("ngModel",e.editor_compras_switch),s.Eb(1),s.Qc(" ",s.lc(16,36,"Solo con compras en los \xfaltimos"),""),s.Eb(3),s.qc("placeholder",s.lc(19,38,"D\xedas")),s.pc("ngModel",e.editor_compras_dias),s.Eb(3),s.pc("ngModel",e.editor_costo_switch),s.Eb(1),s.Qc(" ",s.lc(23,40,"Con cambios en el costo en los \xfaltimos"),""),s.Eb(3),s.qc("placeholder",s.lc(26,42,"D\xedas")),s.pc("ngModel",e.editor_costo_dias),s.Eb(5),s.Pc(s.lc(31,44,"Lista de Precios")),s.Eb(2),s.pc("ngModel",e.editor_lista_precios),s.Eb(1),s.pc("ngForOf",e.listadeprecios),s.Eb(5),s.pc("ngModel",e.editor_margen_switch),s.Eb(1),s.Qc(" ",s.lc(40,46,"Cambiar margen de ganancia"),""),s.Eb(3),s.qc("placeholder",s.lc(43,48,"Margen")),s.pc("ngModel",e.editor_margen),s.Eb(3),s.pc("ngModel",e.editor_redondeo_switch),s.Eb(1),s.Qc(" ",s.lc(47,50,"Pol\xedtica de redondeo"),""),s.Eb(4),s.Pc(s.lc(51,52,"Redondear a")),s.Eb(2),s.pc("ngModel",e.editor_redondeo),s.Eb(1),s.pc("ngForOf",e.redondeo),s.Eb(4),s.Pc(s.lc(58,54,"Usar como precio base")),s.Eb(2),s.pc("ngModel",e.editor_precio_base),s.Eb(1),s.pc("ngForOf",e.precio_base),s.Eb(2),s.pc("ngModel",e.editor_precio_costo_switch),s.Eb(1),s.Qc(" ",s.lc(64,56,"Modificar Precio de Costo"),""),s.Eb(3),s.pc("ngModel",e.editor_previsualizar_switch),s.Eb(1),s.Qc(" ",s.lc(68,58,"Previsualizar"),""))},directives:[l.c,l.f,h.a,b.o,b.r,r.n,u.a,p.b,b.s,b.c,f.n],pipes:[g.c],styles:[""]}),t})(),data:{title:"CAMBIO DE PRECIOS"}}];var X=o("iInd"),w=o("u9T3"),C=o("Dxy4"),P=o("PDjf"),E=o("f44v"),O=o("iELJ"),k=o("Tj54"),F=o("zHaW"),U=o("M9ds"),y=o("ZFy/"),Q=o("w9WL"),L=o("PCNd"),x=o("BxcV");let I=(()=>{class t{}return t.\u0275mod=s.Pb({type:t}),t.\u0275inj=s.Ob({factory:function(e){return new(e||t)},imports:[[r.c,b.t,w.a,Q.f,p.c,p.c,P.c,p.c,C.c,E.a,p.c,y.b,O.f,F.b,u.b,U.c,h.b,k.b,g.b,L.a,x.a,b.j,X.k.forChild(W)]]}),t})()}}]);