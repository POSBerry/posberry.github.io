!function(){function t(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9ztt":function(t,o,n){"use strict";n.r(o),n.d(o,"InventoryModule",function(){return dt});var i,r=n("SVse"),c=n("s7LF"),l=n("GmJt"),s=n("3kSh"),u=n("3sEA"),f=n("vpPe"),d=n("cp0P"),p=n("bPAe"),b=n("CHRX"),m=n("AytR"),g=n("8Y7J"),v=n("IheW"),h=((i=function(){function t(o){e(this,t),this.http=o}return a(t,[{key:"obtenerDepositos",value:function(){return this.http.get(encodeURI(m.a.apiURL+'Depositos?filter={"where":{"deletedon":{"eq":null}}}'))}},{key:"obtenerStock",value:function(t){return this.http.get(encodeURI("".concat(m.a.apiURL,"Productos/GetStock?idDeposito=").concat(t)))}},{key:"obtenerMovStock",value:function(){return this.http.get(encodeURI(m.a.apiURL+'MovStock?filter={"where":{"deletedon":{"eq":null}}}'))}},{key:"obtenerDepositoXPtoVta",value:function(){return this.http.get(encodeURI(m.a.apiURL+'DepositoXPtoVta?filter={"where":{"deletedon":{"eq":null}}}'))}},{key:"obtenerTiposMovStock",value:function(){return this.http.get(m.a.apiURL+'TiposMovStock?filter={"where":{"and":%20[{%22itipo%22:3},{"deletedon":{"eq":null}}]}}')}},{key:"guardarMovStock",value:function(t){return this.http.post(m.a.apiURL+"MovStock/",t)}},{key:"guardarMovStockItems",value:function(t){return this.http.post(m.a.apiURL+"MovStockItems/",t)}}]),t}()).\u0275fac=function(t){return new(t||i)(g.bc(v.c))},i.\u0275prov=g.Nb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),k=n("iELJ"),S=n("zHaW"),y=n("PDjf"),w=n("VDRc"),E=n("Q2Ze"),F=n("ZTz/"),D=n("Dxy4"),C=n("Tj54"),x=n("w9WL"),R=n("UhP/"),M=n("jMqV"),I=n("e6WT"),O=n("TSSN");function X(t,e){if(1&t&&(g.Xb(0,"mat-option",25),g.Oc(1),g.Wb()),2&t){var o=e.$implicit;g.pc("value",o),g.Eb(1),g.Pc(null==o?null:o.sdescripcion)}}function W(t,e){if(1&t&&(g.Xb(0,"div",1),g.Xb(1,"mat-slide-toggle",26),g.Oc(2),g.kc(3,"translate"),g.Wb(),g.Xb(4,"mat-slide-toggle",26),g.Oc(5),g.kc(6,"translate"),g.Wb(),g.Xb(7,"mat-slide-toggle",26),g.Oc(8),g.kc(9,"translate"),g.Wb(),g.Wb()),2&t){var o=g.jc();g.Eb(1),g.pc("formControl",o.toggle),g.Eb(1),g.Pc(g.lc(3,6,"Solo Activos")),g.Eb(2),g.pc("formControl",o.toggleStock),g.Eb(1),g.Pc(g.lc(6,8,"Solo Stock debajo del m\xednimo")),g.Eb(2),g.pc("formControl",o.toggleStockDifferent),g.Eb(1),g.Pc(g.lc(9,10,"Solo con diferencias"))}}function A(t,e){if(1&t){var o=g.Yb();g.Xb(0,"button",5),g.fc("click",function(){return g.Dc(o),g.jc(2).guardar()}),g.Xb(1,"mat-icon"),g.Oc(2,"preview"),g.Wb(),g.Oc(3),g.kc(4,"translate"),g.Wb()}2&t&&(g.Eb(3),g.Pc(g.lc(4,1,"Revisar")))}function T(t,e){if(1&t){var o=g.Yb();g.Xb(0,"button",5),g.fc("click",function(){return g.Dc(o),g.jc(2).guardar()}),g.Xb(1,"mat-icon"),g.Oc(2,"save"),g.Wb(),g.Oc(3),g.kc(4,"translate"),g.Wb()}2&t&&(g.Eb(3),g.Pc(g.lc(4,1,"Grabar")))}function P(t,e){if(1&t&&(g.Xb(0,"div",1),g.Mc(1,A,5,3,"button",27),g.Mc(2,T,5,3,"button",27),g.Wb()),2&t){var o=g.jc();g.Eb(1),g.pc("ngIf",!o.confirmado),g.Eb(1),g.pc("ngIf",o.confirmado)}}function j(t,e){if(1&t&&g.Oc(0),2&t){var o=e.row;g.Qc(" ",null==o?null:o.sCodProducto," ")}}function L(t,e){if(1&t&&g.Oc(0),2&t){var o=e.row;g.Qc(" ",null==o?null:o.sProducto," ")}}function U(t,e){if(1&t&&g.Oc(0),2&t){var o=e.row;g.Qc(" ",(null==o?null:o.sEAN)||(null==o?null:o.sEAN2)," ")}}function N(t,e){if(1&t&&g.Oc(0),2&t){var o=e.row;g.Qc(" ",null==o?null:o.sFamilia," ")}}function V(t,e){if(1&t&&(g.Oc(0),g.kc(1,"number")),2&t){var o=e.row;g.Qc(" ",g.lc(1,1,null==o?null:o.rStock)," ")}}function B(t,e){if(1&t&&(g.Oc(0),g.kc(1,"number")),2&t){var o=e.row;g.Qc(" ",g.lc(1,1,null==o?null:o.rStockMinimo)," ")}}function H(t,e){if(1&t){var o=g.Yb();g.Xb(0,"input",28),g.fc("input",function(t){g.Dc(o);var a=e.row;return g.jc().rowChange(t,a)}),g.Wb()}if(2&t){var a=e.row;g.pc("value",null==a?null:a.rStockFisico)}}function Y(t,e){if(1&t){var o=g.Yb();g.Xb(0,"button",5),g.fc("click",function(){return g.Dc(o),g.jc(3).export()}),g.Xb(1,"mat-icon"),g.Oc(2,"save_alt"),g.Wb(),g.Oc(3),g.kc(4,"translate"),g.Wb()}2&t&&(g.Eb(3),g.Pc(g.lc(4,1,"SALES.EXCEL")))}function _(t,e){if(1&t&&(g.Xb(0,"div",30),g.Mc(1,Y,5,3,"button",27),g.Wb()),2&t){var o=g.jc(2);g.Eb(1),g.pc("ngIf",o.tabla1.data.length>0)}}function q(t,e){1&t&&(g.Xb(0,"ngx-datatable-footer"),g.Mc(1,_,2,1,"ng-template",29),g.Wb())}function G(t,e){if(1&t){var o=g.Yb();g.Xb(0,"mat-form-field",31),g.Xb(1,"input",32),g.fc("keyup",function(t){return g.Dc(o),g.jc().tabla1.updateFilter(t,"sCodProducto")}),g.Wb(),g.Wb()}}function Q(t,e){if(1&t){var o=g.Yb();g.Xb(0,"mat-form-field",31),g.Xb(1,"input",32),g.fc("keyup",function(t){return g.Dc(o),g.jc().tabla1.updateFilter(t,"sProducto")}),g.Wb(),g.Wb()}}function J(t,e){if(1&t){var o=g.Yb();g.Xb(0,"mat-form-field",31),g.Xb(1,"input",32),g.fc("keyup",function(t){return g.Dc(o),g.jc().tabla1.updateFilter(t,"sEAN")}),g.Wb(),g.Wb()}}function z(t,e){if(1&t){var o=g.Yb();g.Xb(0,"mat-form-field",31),g.Xb(1,"input",32),g.fc("keyup",function(t){return g.Dc(o),g.jc().tabla1.updateFilter(t,"sFamilia")}),g.Wb(),g.Wb()}}function K(t,e){if(1&t){var o=g.Yb();g.Xb(0,"mat-form-field",31),g.Xb(1,"input",33),g.fc("keyup",function(t){return g.Dc(o),g.jc().tabla1.updateFilter(t,"rStock")}),g.Wb(),g.Wb()}}function Z(t,e){if(1&t){var o=g.Yb();g.Xb(0,"mat-form-field",31),g.Xb(1,"input",33),g.fc("keyup",function(t){return g.Dc(o),g.jc().tabla1.updateFilter(t,"rStockMinimo")}),g.Wb(),g.Wb()}}function $(t,e){if(1&t){var o=g.Yb();g.Xb(0,"mat-form-field",31),g.Xb(1,"input",33),g.fc("keyup",function(t){return g.Dc(o),g.jc().tabla1.updateFilter(t,"rStock")}),g.Wb(),g.Wb()}}var tt,et,ot=function(){return{y:"50px",delay:"300ms"}},at=function(t){return{value:"*",params:t}},nt=[{path:"",component:(tt=function(){function t(o,a,n,i,r,l,s,u){var f=this;e(this,t),this.dialog=o,this.servicioInventario=a,this.servicioExportarExcel=n,this.loader=i,this.snack=r,this.confirmService=l,this.cdr=s,this.servicioUUID=u,this.toggle=new c.e(!0,[]),this.toggleValue=!0,this.toggleStock=new c.e(!1,[]),this.toggleStockValue=!1,this.toggleStockDifferent=new c.e(!1,[]),this.toggleStockDifferentValue=!1,this.mostrar_guardar=!1,this.cargandoDB=!1,this.confirmado=!1,this.toggle.valueChanges.subscribe(function(t){f.toggleValue=t,f.tabla1.updateFilterBoolean(f.toggleValue?"T":"","bActivo")}),this.toggleStock.valueChanges.subscribe(function(t){f.toggleStockValue=t,f.tabla1.filterRows()}),this.toggleStockDifferent.valueChanges.subscribe(function(t){f.toggleStockDifferentValue=t,f.tabla1.filterRows()})}return a(t,[{key:"ngOnInit",value:function(){var t=this;this.tabla1=new b.a,this.tabla1.groupField="",this.tabla1.secondarySort="sProducto",this.tabla1.sum=[],this.tabla1.updateFilterBoolean("T","bActivo"),this.tabla1.customFilter=function(e){return t.toggleStockValue&&(e=e.filter(function(t){return t.rStock<t.rStockMinimo})),t.toggleStockDifferentValue&&(e=e.filter(function(t){return t.rStock.toFixed(2)!=t.rStockFisico})),e},this.loader.open(),Object(d.a)([this.servicioInventario.obtenerDepositos(),this.servicioInventario.obtenerDepositoXPtoVta(),this.servicioInventario.obtenerTiposMovStock()]).subscribe(function(e){t.depositos=e[0],t.depositos.sort(function(t,e){return t.sdescripcion>e.sdescripcion?1:t.sdescripcion<e.sdescripcion?-1:0}),t.depositoActual=t.depositos[0],t.depositoxptovta=e[1],t.tiposmovstock=e[2],t.loader.close()},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"refresh",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loader.open(),this.servicioInventario.obtenerStock(this.depositoActual.id).subscribe(function(o){t.cargandoDB=!0,o.forEach(function(e){console.log(o),e.sEAN||(e.sEAN=""),e.sEAN2||(e.sEAN2=""),e.rStock=parseFloat(e.rStock),e.rStockMinimo=parseFloat(e.rStockMinimo),e.rStockFisico=e.rStock,t.cargarDB(e)}),t.cargandoDB=!1,t.tabla1.setData(o.filter(function(){return!0})),t.loader.close(),e&&(t.toggle.setValue(!0),t.toggleStock.setValue(!1),t.toggleStockDifferent.setValue(!0),t.confirmado=!0)},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"seleccionarDeposito",value:function(t){this.depositoActual=t}},{key:"getRowHeight",value:function(t){return 50}},{key:"export",value:function(){var t=this.tabla1.data.map(function(t){return{"C\xf3digo":t.sCodProducto,Nombre:t.sProducto,"Codigo de Barras":t.sEAN,Familia:t.sFamilia,Stock:t.rStock,"Stock Minimo":t.rStockMinimo,"Stock Fisico":t.rStock}});this.servicioExportarExcel.exportExcel(t,"Inventario","Inventario")}},{key:"onSort",value:function(t){var e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}},{key:"rowChange",value:function(t,e){t.target.value&&null!=t.target.value?(e.rStockFisico=parseFloat(t.target.value),this.guardarDB(e)):e.rStockFisico=null}},{key:"getCellClass",value:function(t){var e=t.row;if(e.hasOwnProperty("rStock")&&e.hasOwnProperty("rStockFisico"))return{ngxdifferences:e.rStock!=e.rStockFisico}}},{key:"guardarDB",value:function(t){this.cargandoDB||(this.mostrar_guardar||(this.mostrar_guardar=!0),localStorage.setItem("inventario/"+t.idEmpresa+"/"+t.idDeposito+"/"+t.idProducto,t.rStockFisico.toString()),null==localStorage.getItem("inventario/"+t.idEmpresa+"/"+t.idDeposito+"/"+t.idProducto+"/stock_original")&&localStorage.setItem("inventario/"+t.idEmpresa+"/"+t.idDeposito+"/"+t.idProducto+"/stock_original",t.rStock.toString()),t.modificado=t.rStock!=t.rStockFisico,t.modificado&&(this.confirmado=!1))}},{key:"cargarDB",value:function(t){var e=localStorage.getItem("inventario/"+t.idEmpresa+"/"+t.idDeposito+"/"+t.idProducto),o=localStorage.getItem("inventario/"+t.idEmpresa+"/"+t.idDeposito+"/"+t.idProducto+"/stock_original");null!=e&&(t.rStockFisico=parseFloat(e),t.modificado=t.rStock!=t.rStockFisico,t.conflicto=t.rStock!=parseFloat(o),this.mostrar_guardar||(this.mostrar_guardar=!0))}},{key:"eliminarDB",value:function(){for(var t in localStorage)t.startsWith("inventario")&&localStorage.removeItem(t)}},{key:"getIdNumDoc",value:function(t){for(var e=0,o=0;o<this.movstock.length;o++)this.movstock[o].idpv==t&&this.movstock[o].idnumdoc>e&&(e=this.movstock[o].idnumdoc);return e+1}},{key:"grabar",value:function(){var t=this;this.loader.open(),this.servicioInventario.obtenerMovStock().subscribe(function(e){t.movstock=e;var o=t.depositoActual.iddeposito,a=t.getIdNumDoc(o),n=t.tabla1.data.filter(function(t){return t.rStock!=t.rStockFisico&&(t.rStockFisico||0==t.rStockFisico)}),i=t.depositoxptovta.filter(function(t){return"T"==t.bactivo&&t.iddeposito==o}),r=o;i[0]&&(r=i[0].idpv);var c={id:t.servicioUUID.generateUUID(),idempresa:t.depositos[0].idempresa,idpv:r,idnumdoc:a,fmovimiento:(new Date).toISOString(),fcarga:(new Date).toISOString(),stipomovstock:t.tiposmovstock[0].stipomovstock,baplicado:"T",iddepdestino:o,iddeporigen:o,banulado:"F",sobservacion:"Ajuste de Inventario nro "+a,idtipomovstock:t.tiposmovstock[0].id,idref:null,iestado:0,fcreacion:(new Date).toISOString(),fmodificacion:(new Date).toISOString()};t.servicioInventario.guardarMovStock(c).subscribe(function(e){var a=[];n.forEach(function(e){var n={id:t.servicioUUID.generateUUID(),idmovstock:c.id,idempresa:t.tiposmovstock[0].idempresa,idpv:r,idnumdoc:c.idnumdoc,iddeposito:o,idproducto:e.idProducto,rcantidad:e.rStockFisico-e.rStock,isumaresta:1,soperadorcreacion:"admin",fcreacion:(new Date).toISOString()};a.push(t.servicioInventario.guardarMovStockItems(n))}),Object(d.a)(a).subscribe(function(e){t.loader.close(),t.toggle.setValue(!0),t.toggleStock.setValue(!1),t.toggleStockDifferent.setValue(!1),t.confirmado=!1,t.mostrar_guardar=!1,t.snack.open("\xa1Guardado!","OK",{duration:4e3}),t.eliminarDB(),t.refresh()},function(e){t.loader.close(),t.confirmado=!1,t.snack.open("ERROR","OK",{duration:4e3})})})})}},{key:"guardar",value:function(){var t=this;this.confirmado?this.confirmService.confirm({title:"Confirmaci\xf3n",message:"\xbfConfirma ajustar el stock seg\xfan el inventario?",cancel:!0,okText:"Si",cancelText:"No"}).subscribe(function(e){t.grabar(),t.cdr.markForCheck()}):this.confirmService.confirm({title:"Revisar",message:"Antes de guardar, revise nuevamente los cambios realizados y posibles cambios en el stock (se actualizar\xe1 la lista con los datos del stock mas reciente).",cancel:!1,okText:"Revisar",cancelText:"Cancelar"}).subscribe(function(e){t.refresh(!0),t.cdr.markForCheck()})}}]),t}(),tt.\u0275fac=function(t){return new(t||tt)(g.Rb(k.b),g.Rb(h),g.Rb(p.a),g.Rb(u.a),g.Rb(S.a),g.Rb(s.a),g.Rb(g.h),g.Rb(f.a))},tt.\u0275cmp=g.Lb({type:tt,selectors:[["app-inventory"]],decls:55,vars:67,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],[1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort"],["myTable",""],["prop","sCodProducto",3,"cellClass","summaryTemplate","name","width"],["ngx-datatable-cell-template",""],["prop","sProducto",3,"cellClass","summaryTemplate","name","width"],["prop","sEAN",3,"cellClass","summaryTemplate","name","width"],["prop","sFamilia",3,"cellClass","summaryTemplate","name","width"],["prop","rStock",3,"cellClass","summaryTemplate","name","width"],["prop","rStockMinimo",3,"cellClass","summaryTemplate","name","width"],["prop","rStockFisico",3,"cellClass","summaryTemplate","name","width"],[4,"ngIf"],["tabla1sCodProducto",""],["tabla1sProducto",""],["tabla1sEAN",""],["tabla1sFamilia",""],["tabla1rStock",""],["tabla1rStockMinimo",""],["tabla1rStockFisico",""],[3,"value"],[1,"m-8",3,"formControl"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],["matInput","","placeholder","","type","number","step","any",3,"value","input"],["ngx-datatable-footer-template",""],[1,"p-8",2,"margin-left","auto"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(g.Xb(0,"mat-card",0),g.Xb(1,"div",1),g.Xb(2,"mat-form-field",2),g.Xb(3,"mat-label"),g.Oc(4),g.kc(5,"translate"),g.Wb(),g.Xb(6,"mat-select",3),g.fc("selectionChange",function(t){return e.seleccionarDeposito(t.value)})("valueChange",function(t){return e.depositoActual=t}),g.Mc(7,X,2,2,"mat-option",4),g.Wb(),g.Wb(),g.Xb(8,"button",5),g.fc("click",function(){return e.refresh()}),g.Xb(9,"mat-icon"),g.Oc(10,"search"),g.Wb(),g.Oc(11),g.kc(12,"translate"),g.Wb(),g.Wb(),g.Mc(13,W,10,12,"div",6),g.Mc(14,P,3,2,"div",6),g.Wb(),g.Xb(15,"mat-card",0),g.Xb(16,"mat-card-content",0),g.Xb(17,"ngx-datatable",7,8),g.fc("sort",function(t){return e.onSort(t)}),g.Xb(19,"ngx-datatable-column",9),g.kc(20,"translate"),g.Mc(21,j,1,1,"ng-template",10),g.Wb(),g.Xb(22,"ngx-datatable-column",11),g.kc(23,"translate"),g.Mc(24,L,1,1,"ng-template",10),g.Wb(),g.Xb(25,"ngx-datatable-column",12),g.kc(26,"translate"),g.Mc(27,U,1,1,"ng-template",10),g.Wb(),g.Xb(28,"ngx-datatable-column",13),g.kc(29,"translate"),g.Mc(30,N,1,1,"ng-template",10),g.Wb(),g.Xb(31,"ngx-datatable-column",14),g.kc(32,"translate"),g.Mc(33,V,2,3,"ng-template",10),g.Wb(),g.Xb(34,"ngx-datatable-column",15),g.kc(35,"translate"),g.Mc(36,B,2,3,"ng-template",10),g.Wb(),g.Xb(37,"ngx-datatable-column",16),g.kc(38,"translate"),g.Mc(39,H,1,1,"ng-template",10),g.Wb(),g.Mc(40,q,2,0,"ngx-datatable-footer",17),g.Wb(),g.Wb(),g.Wb(),g.Mc(41,G,2,0,"ng-template",null,18,g.Nc),g.Mc(43,Q,2,0,"ng-template",null,19,g.Nc),g.Mc(45,J,2,0,"ng-template",null,20,g.Nc),g.Mc(47,z,2,0,"ng-template",null,21,g.Nc),g.Mc(49,K,2,0,"ng-template",null,22,g.Nc),g.Mc(51,Z,2,0,"ng-template",null,23,g.Nc),g.Mc(53,$,2,0,"ng-template",null,24,g.Nc)),2&t){var o=g.Ac(42),a=g.Ac(44),n=g.Ac(46),i=g.Ac(48),r=g.Ac(50),c=g.Ac(52),l=g.Ac(54);g.Eb(4),g.Pc(g.lc(5,46,"Dep\xf3sitos")),g.Eb(2),g.pc("value",e.depositoActual),g.Eb(1),g.pc("ngForOf",e.depositos),g.Eb(4),g.Pc(g.lc(12,48,"SALES.SHOW")),g.Eb(2),g.pc("ngIf",e.tabla1.data.length>0),g.Eb(1),g.pc("ngIf",e.mostrar_guardar),g.Eb(1),g.pc("@animate",g.vc(65,at,g.uc(64,ot))),g.Eb(2),g.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("summaryRow",!0)("externalSorting",!0)("selectionType","single"),g.Eb(2),g.qc("name",g.lc(20,50,"C\xf3digo")),g.pc("cellClass",e.getCellClass)("summaryTemplate",o)("width",200),g.Eb(3),g.qc("name",g.lc(23,52,"Nombre")),g.pc("cellClass",e.getCellClass)("summaryTemplate",a)("width",500),g.Eb(3),g.qc("name",g.lc(26,54,"C\xf3digo de Barras")),g.pc("cellClass",e.getCellClass)("summaryTemplate",n)("width",150),g.Eb(3),g.qc("name",g.lc(29,56,"Familia")),g.pc("cellClass",e.getCellClass)("summaryTemplate",i)("width",225),g.Eb(3),g.qc("name",g.lc(32,58,"Stock")),g.pc("cellClass",e.getCellClass)("summaryTemplate",r)("width",150),g.Eb(3),g.qc("name",g.lc(35,60,"Stock M\xednimo")),g.pc("cellClass",e.getCellClass)("summaryTemplate",c)("width",150),g.Eb(3),g.qc("name",g.lc(38,62,"Stock Fisico")),g.pc("cellClass",e.getCellClass)("summaryTemplate",l)("width",150),g.Eb(3),g.pc("ngIf",e.tabla1.data.length>0)}},directives:[y.a,w.c,w.b,E.c,w.a,E.f,F.a,r.n,D.b,C.a,r.o,y.b,x.d,x.b,x.a,R.n,M.a,c.n,c.f,I.b,x.e,x.c],pipes:[O.c,r.g],styles:[""],data:{animation:[l.a]}}),tt),data:{title:"INVENTARIO"}}],it=n("iInd"),rt=n("u9T3"),ct=n("f44v"),lt=n("TN/R"),st=n("M9ds"),ut=n("ZFy/"),ft=n("PCNd"),dt=((et=function t(){e(this,t)}).\u0275mod=g.Pb({type:et}),et.\u0275inj=g.Ob({factory:function(t){return new(t||et)},imports:[[r.c,c.s,rt.a,x.f,I.c,I.c,y.c,I.c,D.c,ct.a,I.c,ut.b,k.e,S.b,M.b,st.c,F.b,C.b,O.b,ft.a,lt.c,it.k.forChild(nt)]]}),et)},CHRX:function(o,n,i){"use strict";i.d(n,"a",function(){return c});var r=i("wd/R"),c=function(){function o(){e(this,o),this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}return a(o,[{key:"setGroup",value:function(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}},{key:"setData",value:function(t){this.data=t,this.sortData()}},{key:"sortData",value:function(){var t=this;this.data.sort(function(e,o){if(e[t.groupField]==o[t.groupField]){if(t.secondarySort){if(e[t.secondarySort]>o[t.secondarySort])return 1*("desc"===t.sortDir?-1:1);if(e[t.secondarySort]<o[t.secondarySort])return-1*("desc"===t.sortDir?-1:1)}}else{if(e[t.groupField]>o[t.groupField])return 1;if(e[t.groupField]<o[t.groupField])return-1}return 0}),this.filterRows()}},{key:"filterRows",value:function(){var e=this,o=[];o=this.data.filter(function(t){for(var o in e.filter)switch(typeof t[o]){case"number":if(e.filter[o]&&t[o].toString()!==e.filter[o].toString())return!1;break;case"string":if("f"==o.charAt(0).toLowerCase()&&r(t[o]).isValid){if(-1==r(t[o]).format("DD/MM/YYYY HH:mm:ss").indexOf(e.filter[o]))return!1;break}if(-1==t[o].toLowerCase().indexOf(e.filter[o].toLowerCase()))return!1}return!0}),o=this.customFilter(o);var a={};this.groupField?a[this.groupField]=o.length.toString():a.count=o.length.toString(),this.sum.forEach(function(t){return a[t]=0});for(var n=0;n<o.length;n++)this.sum.forEach(function(t){return a[t]+=o[n][t]});if(a.isGroup=!0,this.footer=a,this.groupField){var i=[];o.forEach(function(t){-1==i.indexOf(t[e.groupField])&&i.push(t[e.groupField])}),i=i.map(function(t){return{name:t,count:1}});var c=[],l=!0,s=0,u=null,f=function(){u&&(u[e.groupField]+=" ("+i[s-1].count.toString()+")")};for(n=0;n<o.length;n++){if(l&&o[n][this.groupField]==i[s].name){var d;f();var p="+";this.groups[i[s].name]&&(p="-"),t(d={},this.groupField,p+" "+i[s].name),t(d,"isGroup",!0),t(d,"name",i[s].name),u=d,this.sum.forEach(function(t){return u[t]=0}),c.push(u),l=++s<i.length}else i[s-1].count++;this.sum.forEach(function(t){return u[t]+=o[n][t]}),c.push(o[n])}f(),o=null,c=c.filter(function(t){return!!t.isGroup||!!e.groups[t[e.groupField]]||void 0}),this.rows=c}else this.rows=o;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}},{key:"updateFilter",value:function(t,e){t&&e&&(this.filter[e]=t.target.value,this.filterRows())}},{key:"updateFilterBoolean",value:function(t,e){this.filter[e]=t,this.filterRows()}}]),o}()},Iab2:function(t,e,o){var a,n;void 0===(n="function"==typeof(a=function(){"use strict";function e(t,e,o){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){r(a.response,e,o)},a.onerror=function(){console.error("could not download file")},a.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,i,r){var c=n.URL||n.webkitURL,l=document.createElement("a");l.download=i=i||t.name||"download",l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?a(l):o(l.href)?e(t,i,r):a(l,l.target="_blank")):(l.href=c.createObjectURL(t),setTimeout(function(){c.revokeObjectURL(l.href)},4e4),setTimeout(function(){a(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,i){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),n);else if(o(t))e(t,n,i);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){a(r)})}}:function(t,o,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,a);var c="application/octet-stream"===t.type,l=/constructor/i.test(n.HTMLElement)||n.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||c&&l||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},u.readAsDataURL(t)}else{var f=n.URL||n.webkitURL,d=f.createObjectURL(t);r?r.location=d:location.href=d,r=null,setTimeout(function(){f.revokeObjectURL(d)},4e4)}});n.saveAs=r.saveAs=r,t.exports=r})?a.apply(e,[]):a)||(t.exports=n)},bPAe:function(o,n,i){"use strict";i.d(n,"a",function(){return s});var r=i("Iab2"),c=i("EUZL"),l=i("8Y7J"),s=function(){var o=function(){function o(){e(this,o),this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}return a(o,[{key:"exportExcel",value:function(e,o,a){var n=c.utils.json_to_sheet(e),i=c.write({Sheets:t({},a,n),SheetNames:[a]},{bookType:"xlsx",type:"array"});this.saveExcelFile(i,o)}},{key:"saveExcelFile",value:function(t,e){var o=new Blob([t],{type:this.fileType});r.saveAs(o,e+this.fileExtension)}}]),o}();return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=l.Nb({token:o,factory:o.\u0275fac,providedIn:"root"}),o}()}}])}();