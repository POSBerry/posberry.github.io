(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9ztt":function(t,e,o){"use strict";o.r(e),o.d(e,"InventoryModule",function(){return pt});var c=o("SVse"),a=o("s7LF"),i=o("GmJt"),n=o("3kSh"),r=o("3sEA"),s=o("vpPe"),l=o("cp0P"),u=o("bPAe"),b=o("CHRX"),f=o("AytR"),d=o("8Y7J"),p=o("IheW");let m=(()=>{class t{constructor(t){this.http=t}obtenerDepositos(){return this.http.get(encodeURI(f.a.apiURL+'Depositos?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerStock(t){return this.http.get(encodeURI(`${f.a.apiURL}Productos/GetStock?idDeposito=${t}`))}obtenerMovStock(){return this.http.get(encodeURI(f.a.apiURL+'MovStock?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerDepositoXPtoVta(){return this.http.get(encodeURI(f.a.apiURL+'DepositoXPtoVta?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerTiposMovStock(){return this.http.get(f.a.apiURL+'TiposMovStock?filter={"where":{"and":%20[{%22itipo%22:3},{"deletedon":{"eq":null}}]}}')}guardarMovStock(t){return this.http.post(f.a.apiURL+"MovStock/",t)}guardarMovStockItems(t){return this.http.post(f.a.apiURL+"MovStockItems/",t)}}return t.\u0275fac=function(e){return new(e||t)(d.bc(p.c))},t.\u0275prov=d.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=o("iELJ"),h=o("zHaW"),v=o("PDjf"),k=o("VDRc"),S=o("Q2Ze"),x=o("ZTz/"),w=o("Dxy4"),E=o("Tj54"),y=o("w9WL"),D=o("UhP/"),F=o("jMqV"),I=o("e6WT"),M=o("TSSN");function W(t,e){if(1&t&&(d.Xb(0,"mat-option",25),d.Oc(1),d.Wb()),2&t){const t=e.$implicit;d.pc("value",t),d.Eb(1),d.Pc(null==t?null:t.sdescripcion)}}function X(t,e){if(1&t&&(d.Xb(0,"div",1),d.Xb(1,"mat-slide-toggle",26),d.Oc(2),d.kc(3,"translate"),d.Wb(),d.Xb(4,"mat-slide-toggle",26),d.Oc(5),d.kc(6,"translate"),d.Wb(),d.Xb(7,"mat-slide-toggle",26),d.Oc(8),d.kc(9,"translate"),d.Wb(),d.Wb()),2&t){const t=d.jc();d.Eb(1),d.pc("formControl",t.toggle),d.Eb(1),d.Pc(d.lc(3,6,"Solo Activos")),d.Eb(2),d.pc("formControl",t.toggleStock),d.Eb(1),d.Pc(d.lc(6,8,"Solo Stock debajo del m\xednimo")),d.Eb(2),d.pc("formControl",t.toggleStockDifferent),d.Eb(1),d.Pc(d.lc(9,10,"Solo con diferencias"))}}function C(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",5),d.fc("click",function(){return d.Dc(t),d.jc(2).guardar()}),d.Xb(1,"mat-icon"),d.Oc(2,"preview"),d.Wb(),d.Oc(3),d.kc(4,"translate"),d.Wb()}2&t&&(d.Eb(3),d.Pc(d.lc(4,1,"Revisar")))}function A(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",5),d.fc("click",function(){return d.Dc(t),d.jc(2).guardar()}),d.Xb(1,"mat-icon"),d.Oc(2,"save"),d.Wb(),d.Oc(3),d.kc(4,"translate"),d.Wb()}2&t&&(d.Eb(3),d.Pc(d.lc(4,1,"Grabar")))}function O(t,e){if(1&t&&(d.Xb(0,"div",1),d.Mc(1,C,5,3,"button",27),d.Mc(2,A,5,3,"button",27),d.Wb()),2&t){const t=d.jc();d.Eb(1),d.pc("ngIf",!t.confirmado),d.Eb(1),d.pc("ngIf",t.confirmado)}}function R(t,e){if(1&t&&d.Oc(0),2&t){const t=e.row;d.Qc(" ",null==t?null:t.sCodProducto," ")}}function T(t,e){if(1&t&&d.Oc(0),2&t){const t=e.row;d.Qc(" ",null==t?null:t.sProducto," ")}}function j(t,e){if(1&t&&d.Oc(0),2&t){const t=e.row;d.Qc(" ",(null==t?null:t.sEAN)||(null==t?null:t.sEAN2)," ")}}function P(t,e){if(1&t&&d.Oc(0),2&t){const t=e.row;d.Qc(" ",null==t?null:t.sFamilia," ")}}function U(t,e){if(1&t&&(d.Oc(0),d.kc(1,"number")),2&t){const t=e.row;d.Qc(" ",d.lc(1,1,null==t?null:t.rStock)," ")}}function L(t,e){if(1&t&&(d.Oc(0),d.kc(1,"number")),2&t){const t=e.row;d.Qc(" ",d.lc(1,1,null==t?null:t.rStockMinimo)," ")}}function N(t,e){if(1&t){const t=d.Yb();d.Xb(0,"input",28),d.fc("input",function(o){d.Dc(t);const c=e.row;return d.jc().rowChange(o,c)}),d.Wb()}if(2&t){const t=e.row;d.pc("value",null==t?null:t.rStockFisico)}}function V(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",5),d.fc("click",function(){return d.Dc(t),d.jc(3).export()}),d.Xb(1,"mat-icon"),d.Oc(2,"save_alt"),d.Wb(),d.Oc(3),d.kc(4,"translate"),d.Wb()}2&t&&(d.Eb(3),d.Pc(d.lc(4,1,"SALES.EXCEL")))}function B(t,e){if(1&t&&(d.Xb(0,"div",30),d.Mc(1,V,5,3,"button",27),d.Wb()),2&t){const t=d.jc(2);d.Eb(1),d.pc("ngIf",t.tabla1.data.length>0)}}function Y(t,e){1&t&&(d.Xb(0,"ngx-datatable-footer"),d.Mc(1,B,2,1,"ng-template",29),d.Wb())}function G(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",35),d.fc("click",function(e){d.Dc(t),d.jc();const o=d.Ac(2);return d.jc().tabla1.updateFilter(e,"sCodProducto")&&(o.value="")}),d.Xb(1,"mat-icon"),d.Oc(2,"close"),d.Wb(),d.Wb()}}function H(t,e){if(1&t){const t=d.Yb();d.Xb(0,"mat-form-field",31),d.Xb(1,"input",32,33),d.fc("keyup",function(e){return d.Dc(t),d.jc().tabla1.updateFilter(e,"sCodProducto")}),d.Wb(),d.Mc(3,G,3,0,"button",34),d.Wb()}if(2&t){const t=d.Ac(2);d.Eb(3),d.pc("ngIf",t.value)}}function _(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",35),d.fc("click",function(e){d.Dc(t),d.jc();const o=d.Ac(2);return d.jc().tabla1.updateFilter(e,"sProducto")&&(o.value="")}),d.Xb(1,"mat-icon"),d.Oc(2,"close"),d.Wb(),d.Wb()}}function q(t,e){if(1&t){const t=d.Yb();d.Xb(0,"mat-form-field",31),d.Xb(1,"input",32,33),d.fc("keyup",function(e){return d.Dc(t),d.jc().tabla1.updateFilter(e,"sProducto")}),d.Wb(),d.Mc(3,_,3,0,"button",34),d.Wb()}if(2&t){const t=d.Ac(2);d.Eb(3),d.pc("ngIf",t.value)}}function J(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",35),d.fc("click",function(e){d.Dc(t),d.jc();const o=d.Ac(2);return d.jc().tabla1.updateFilter(e,"sEAN")&&(o.value="")}),d.Xb(1,"mat-icon"),d.Oc(2,"close"),d.Wb(),d.Wb()}}function Q(t,e){if(1&t){const t=d.Yb();d.Xb(0,"mat-form-field",31),d.Xb(1,"input",32,33),d.fc("keyup",function(e){return d.Dc(t),d.jc().tabla1.updateFilter(e,"sEAN")}),d.Wb(),d.Mc(3,J,3,0,"button",34),d.Wb()}if(2&t){const t=d.Ac(2);d.Eb(3),d.pc("ngIf",t.value)}}function z(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",35),d.fc("click",function(e){d.Dc(t),d.jc();const o=d.Ac(2);return d.jc().tabla1.updateFilter(e,"sFamilia")&&(o.value="")}),d.Xb(1,"mat-icon"),d.Oc(2,"close"),d.Wb(),d.Wb()}}function K(t,e){if(1&t){const t=d.Yb();d.Xb(0,"mat-form-field",31),d.Xb(1,"input",32,33),d.fc("keyup",function(e){return d.Dc(t),d.jc().tabla1.updateFilter(e,"sFamilia")}),d.Wb(),d.Mc(3,z,3,0,"button",34),d.Wb()}if(2&t){const t=d.Ac(2);d.Eb(3),d.pc("ngIf",t.value)}}function Z(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",35),d.fc("click",function(e){d.Dc(t),d.jc();const o=d.Ac(2);return d.jc().tabla1.updateFilter(e,"rStock")&&(o.value="")}),d.Xb(1,"mat-icon"),d.Oc(2,"close"),d.Wb(),d.Wb()}}function $(t,e){if(1&t){const t=d.Yb();d.Xb(0,"mat-form-field",31),d.Xb(1,"input",36,33),d.fc("keyup",function(e){return d.Dc(t),d.jc().tabla1.updateFilter(e,"rStock")}),d.Wb(),d.Mc(3,Z,3,0,"button",34),d.Wb()}if(2&t){const t=d.Ac(2);d.Eb(3),d.pc("ngIf",t.value)}}function tt(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",35),d.fc("click",function(e){d.Dc(t),d.jc();const o=d.Ac(2);return d.jc().tabla1.updateFilter(e,"rStockMinimo")&&(o.value="")}),d.Xb(1,"mat-icon"),d.Oc(2,"close"),d.Wb(),d.Wb()}}function et(t,e){if(1&t){const t=d.Yb();d.Xb(0,"mat-form-field",31),d.Xb(1,"input",36,33),d.fc("keyup",function(e){return d.Dc(t),d.jc().tabla1.updateFilter(e,"rStockMinimo")}),d.Wb(),d.Mc(3,tt,3,0,"button",34),d.Wb()}if(2&t){const t=d.Ac(2);d.Eb(3),d.pc("ngIf",t.value)}}function ot(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",35),d.fc("click",function(e){d.Dc(t),d.jc();const o=d.Ac(2);return d.jc().tabla1.updateFilter(e,"rStockFisico")&&(o.value="")}),d.Xb(1,"mat-icon"),d.Oc(2,"close"),d.Wb(),d.Wb()}}function ct(t,e){if(1&t){const t=d.Yb();d.Xb(0,"mat-form-field",31),d.Xb(1,"input",36,33),d.fc("keyup",function(e){return d.Dc(t),d.jc().tabla1.updateFilter(e,"rStockFisico")}),d.Wb(),d.Mc(3,ot,3,0,"button",34),d.Wb()}if(2&t){const t=d.Ac(2);d.Eb(3),d.pc("ngIf",t.value)}}const at=function(){return{y:"50px",delay:"300ms"}},it=function(t){return{value:"*",params:t}},nt=[{path:"",component:(()=>{class t{constructor(t,e,o,c,i,n,r,s){this.dialog=t,this.servicioInventario=e,this.servicioExportarExcel=o,this.loader=c,this.snack=i,this.confirmService=n,this.cdr=r,this.servicioUUID=s,this.toggle=new a.e(!0,[]),this.toggleValue=!0,this.toggleStock=new a.e(!1,[]),this.toggleStockValue=!1,this.toggleStockDifferent=new a.e(!1,[]),this.toggleStockDifferentValue=!1,this.mostrar_guardar=!1,this.cargandoDB=!1,this.confirmado=!1,this.toggle.valueChanges.subscribe(t=>{this.toggleValue=t,this.tabla1.updateFilterBoolean(this.toggleValue?"T":"","bActivo")}),this.toggleStock.valueChanges.subscribe(t=>{this.toggleStockValue=t,this.tabla1.filterRows()}),this.toggleStockDifferent.valueChanges.subscribe(t=>{this.toggleStockDifferentValue=t,this.tabla1.filterRows()})}ngOnInit(){this.tabla1=new b.a,this.tabla1.groupField="",this.tabla1.secondarySort="sProducto",this.tabla1.sum=[],this.tabla1.updateFilterBoolean("T","bActivo"),this.tabla1.customFilter=t=>(this.toggleStockValue&&(t=t.filter(t=>t.rStock<t.rStockMinimo)),this.toggleStockDifferentValue&&(t=t.filter(t=>t.rStock.toFixed(2)!=t.rStockFisico)),t),this.loader.open(),Object(l.a)([this.servicioInventario.obtenerDepositos(),this.servicioInventario.obtenerDepositoXPtoVta(),this.servicioInventario.obtenerTiposMovStock()]).subscribe(t=>{this.depositos=t[0],this.depositos.sort((t,e)=>t.sdescripcion>e.sdescripcion?1:t.sdescripcion<e.sdescripcion?-1:0),this.depositoActual=this.depositos[0],this.depositoxptovta=t[1],this.tiposmovstock=t[2],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}refresh(t=!1){this.loader.open(),this.servicioInventario.obtenerStock(this.depositoActual.id).subscribe(e=>{this.cargandoDB=!0,e.forEach(t=>{console.log(e),t.sEAN||(t.sEAN=""),t.sEAN2||(t.sEAN2=""),t.rStock=parseFloat(t.rStock),t.rStockMinimo=parseFloat(t.rStockMinimo),t.rStockFisico=t.rStock,this.cargarDB(t)}),this.cargandoDB=!1,this.tabla1.setData(e.filter(()=>!0)),this.loader.close(),t&&(this.toggle.setValue(!0),this.toggleStock.setValue(!1),this.toggleStockDifferent.setValue(!0),this.confirmado=!0)},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}seleccionarDeposito(t){this.depositoActual=t}getRowHeight(t){return 50}export(){var t=this.tabla1.data.map(t=>({C\u00f3digo:t.sCodProducto,Nombre:t.sProducto,"Codigo de Barras":t.sEAN,Familia:t.sFamilia,Stock:t.rStock,"Stock Minimo":t.rStockMinimo,"Stock Fisico":t.rStock}));this.servicioExportarExcel.exportExcel(t,"Inventario","Inventario")}onSort(t){const e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}rowChange(t,e){t.target.value&&null!=t.target.value?(e.rStockFisico=parseFloat(t.target.value),this.guardarDB(e)):e.rStockFisico=null}getCellClass({row:t}){if(t.hasOwnProperty("rStock")&&t.hasOwnProperty("rStockFisico"))return{ngxdifferences:t.rStock!=t.rStockFisico}}guardarDB(t){this.cargandoDB||(this.mostrar_guardar||(this.mostrar_guardar=!0),localStorage.setItem("inventario/"+t.idEmpresa+"/"+t.idDeposito+"/"+t.idProducto,t.rStockFisico.toString()),null==localStorage.getItem("inventario/"+t.idEmpresa+"/"+t.idDeposito+"/"+t.idProducto+"/stock_original")&&localStorage.setItem("inventario/"+t.idEmpresa+"/"+t.idDeposito+"/"+t.idProducto+"/stock_original",t.rStock.toString()),t.modificado=t.rStock!=t.rStockFisico,t.modificado&&(this.confirmado=!1))}cargarDB(t){var e=localStorage.getItem("inventario/"+t.idEmpresa+"/"+t.idDeposito+"/"+t.idProducto),o=localStorage.getItem("inventario/"+t.idEmpresa+"/"+t.idDeposito+"/"+t.idProducto+"/stock_original");null!=e&&(t.rStockFisico=parseFloat(e),t.modificado=t.rStock!=t.rStockFisico,t.conflicto=t.rStock!=parseFloat(o),this.mostrar_guardar||(this.mostrar_guardar=!0))}eliminarDB(){for(var t in localStorage)t.startsWith("inventario")&&localStorage.removeItem(t)}getIdNumDoc(t){for(var e=0,o=0;o<this.movstock.length;o++)this.movstock[o].idpv==t&&this.movstock[o].idnumdoc>e&&(e=this.movstock[o].idnumdoc);return e+1}grabar(){this.loader.open(),this.servicioInventario.obtenerMovStock().subscribe(t=>{this.movstock=t;var e=this.depositoActual.iddeposito,o=this.getIdNumDoc(e),c=this.tabla1.data.filter(t=>t.rStock!=t.rStockFisico&&(t.rStockFisico||0==t.rStockFisico)),a=this.depositoxptovta.filter(t=>"T"==t.bactivo&&t.iddeposito==e),i=e;a[0]&&(i=a[0].idpv);var n={id:this.servicioUUID.generateUUID(),idempresa:this.depositos[0].idempresa,idpv:i,idnumdoc:o,fmovimiento:(new Date).toISOString(),fcarga:(new Date).toISOString(),stipomovstock:this.tiposmovstock[0].stipomovstock,baplicado:"T",iddepdestino:e,iddeporigen:e,banulado:"F",sobservacion:"Ajuste de Inventario nro "+o,idtipomovstock:this.tiposmovstock[0].id,idref:null,iestado:0,fcreacion:(new Date).toISOString(),fmodificacion:(new Date).toISOString()};this.servicioInventario.guardarMovStock(n).subscribe(t=>{var o=[];c.forEach(t=>{var c={id:this.servicioUUID.generateUUID(),idmovstock:n.id,idempresa:this.tiposmovstock[0].idempresa,idpv:i,idnumdoc:n.idnumdoc,iddeposito:e,idproducto:t.idProducto,rcantidad:t.rStockFisico-t.rStock,isumaresta:1,soperadorcreacion:"admin",fcreacion:(new Date).toISOString()};o.push(this.servicioInventario.guardarMovStockItems(c))}),Object(l.a)(o).subscribe(t=>{this.loader.close(),this.toggle.setValue(!0),this.toggleStock.setValue(!1),this.toggleStockDifferent.setValue(!1),this.confirmado=!1,this.mostrar_guardar=!1,this.snack.open("\xa1Guardado!","OK",{duration:4e3}),this.eliminarDB(),this.refresh()},t=>{this.loader.close(),this.confirmado=!1,this.snack.open("ERROR","OK",{duration:4e3})})})})}guardar(){this.confirmado?this.confirmService.confirm({title:"Confirmaci\xf3n",message:"\xbfConfirma ajustar el stock seg\xfan el inventario?",cancel:!0,okText:"Si",cancelText:"No"}).subscribe(t=>{t&&(this.grabar(),this.cdr.markForCheck())}):this.confirmService.confirm({title:"Revisar",message:"Antes de guardar, revise nuevamente los cambios realizados y posibles cambios en el stock (se actualizar\xe1 la lista con los datos del stock mas reciente).",cancel:!1,okText:"Revisar",cancelText:"Cancelar"}).subscribe(t=>{t&&(this.refresh(!0),this.cdr.markForCheck())})}}return t.\u0275fac=function(e){return new(e||t)(d.Rb(g.b),d.Rb(m),d.Rb(u.a),d.Rb(r.a),d.Rb(h.a),d.Rb(n.a),d.Rb(d.h),d.Rb(s.a))},t.\u0275cmp=d.Lb({type:t,selectors:[["app-inventory"]],decls:55,vars:67,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],[1,"material","expandable","bg-white",2,"height","60vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort"],["myTable",""],["prop","sCodProducto",3,"cellClass","summaryTemplate","name","flexGrow"],["ngx-datatable-cell-template",""],["prop","sProducto",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","sEAN",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","sFamilia",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","rStock",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","rStockMinimo",3,"cellClass","summaryTemplate","name","flexGrow"],["prop","rStockFisico",3,"cellClass","summaryTemplate","name","flexGrow"],[4,"ngIf"],["tabla1sCodProducto",""],["tabla1sProducto",""],["tabla1sEAN",""],["tabla1sFamilia",""],["tabla1rStock",""],["tabla1rStockMinimo",""],["tabla1rStockFisico",""],[3,"value"],[1,"m-8",3,"formControl"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],["matInput","","placeholder","","type","number","step","any",3,"value","input"],["ngx-datatable-footer-template",""],[1,"p-8",2,"margin-left","auto"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(d.Xb(0,"mat-card",0),d.Xb(1,"div",1),d.Xb(2,"mat-form-field",2),d.Xb(3,"mat-label"),d.Oc(4),d.kc(5,"translate"),d.Wb(),d.Xb(6,"mat-select",3),d.fc("selectionChange",function(t){return e.seleccionarDeposito(t.value)})("valueChange",function(t){return e.depositoActual=t}),d.Mc(7,W,2,2,"mat-option",4),d.Wb(),d.Wb(),d.Xb(8,"button",5),d.fc("click",function(){return e.refresh()}),d.Xb(9,"mat-icon"),d.Oc(10,"search"),d.Wb(),d.Oc(11),d.kc(12,"translate"),d.Wb(),d.Wb(),d.Mc(13,X,10,12,"div",6),d.Mc(14,O,3,2,"div",6),d.Wb(),d.Xb(15,"mat-card",0),d.Xb(16,"mat-card-content",0),d.Xb(17,"ngx-datatable",7,8),d.fc("sort",function(t){return e.onSort(t)}),d.Xb(19,"ngx-datatable-column",9),d.kc(20,"translate"),d.Mc(21,R,1,1,"ng-template",10),d.Wb(),d.Xb(22,"ngx-datatable-column",11),d.kc(23,"translate"),d.Mc(24,T,1,1,"ng-template",10),d.Wb(),d.Xb(25,"ngx-datatable-column",12),d.kc(26,"translate"),d.Mc(27,j,1,1,"ng-template",10),d.Wb(),d.Xb(28,"ngx-datatable-column",13),d.kc(29,"translate"),d.Mc(30,P,1,1,"ng-template",10),d.Wb(),d.Xb(31,"ngx-datatable-column",14),d.kc(32,"translate"),d.Mc(33,U,2,3,"ng-template",10),d.Wb(),d.Xb(34,"ngx-datatable-column",15),d.kc(35,"translate"),d.Mc(36,L,2,3,"ng-template",10),d.Wb(),d.Xb(37,"ngx-datatable-column",16),d.kc(38,"translate"),d.Mc(39,N,1,1,"ng-template",10),d.Wb(),d.Mc(40,Y,2,0,"ngx-datatable-footer",17),d.Wb(),d.Wb(),d.Wb(),d.Mc(41,H,4,1,"ng-template",null,18,d.Nc),d.Mc(43,q,4,1,"ng-template",null,19,d.Nc),d.Mc(45,Q,4,1,"ng-template",null,20,d.Nc),d.Mc(47,K,4,1,"ng-template",null,21,d.Nc),d.Mc(49,$,4,1,"ng-template",null,22,d.Nc),d.Mc(51,et,4,1,"ng-template",null,23,d.Nc),d.Mc(53,ct,4,1,"ng-template",null,24,d.Nc)),2&t){const t=d.Ac(42),o=d.Ac(44),c=d.Ac(46),a=d.Ac(48),i=d.Ac(50),n=d.Ac(52),r=d.Ac(54);d.Eb(4),d.Pc(d.lc(5,46,"Dep\xf3sitos")),d.Eb(2),d.pc("value",e.depositoActual),d.Eb(1),d.pc("ngForOf",e.depositos),d.Eb(4),d.Pc(d.lc(12,48,"SALES.SHOW")),d.Eb(2),d.pc("ngIf",e.tabla1.data.length>0),d.Eb(1),d.pc("ngIf",e.mostrar_guardar),d.Eb(1),d.pc("@animate",d.vc(65,it,d.uc(64,at))),d.Eb(2),d.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",e.tabla1.rows)("summaryRow",!0)("externalSorting",!0)("selectionType","single"),d.Eb(2),d.qc("name",d.lc(20,50,"C\xf3digo")),d.pc("cellClass",e.getCellClass)("summaryTemplate",t)("flexGrow",1),d.Eb(3),d.qc("name",d.lc(23,52,"Nombre")),d.pc("cellClass",e.getCellClass)("summaryTemplate",o)("flexGrow",2),d.Eb(3),d.qc("name",d.lc(26,54,"C\xf3digo de Barras")),d.pc("cellClass",e.getCellClass)("summaryTemplate",c)("flexGrow",1),d.Eb(3),d.qc("name",d.lc(29,56,"Familia")),d.pc("cellClass",e.getCellClass)("summaryTemplate",a)("flexGrow",1),d.Eb(3),d.qc("name",d.lc(32,58,"Stock")),d.pc("cellClass",e.getCellClass)("summaryTemplate",i)("flexGrow",1),d.Eb(3),d.qc("name",d.lc(35,60,"Stock M\xednimo")),d.pc("cellClass",e.getCellClass)("summaryTemplate",n)("flexGrow",1),d.Eb(3),d.qc("name",d.lc(38,62,"Stock Fisico")),d.pc("cellClass",e.getCellClass)("summaryTemplate",r)("flexGrow",1),d.Eb(3),d.pc("ngIf",e.tabla1.data.length>0)}},directives:[v.a,k.c,k.b,S.c,k.a,S.f,x.a,c.n,w.b,E.a,c.o,v.b,y.d,y.b,y.a,D.n,F.a,a.o,a.f,I.b,y.e,y.c,S.h],pipes:[M.c,c.g],styles:[""],data:{animation:[i.a]}}),t})(),data:{title:"INVENTARIO"}}];var rt=o("iInd"),st=o("u9T3"),lt=o("f44v"),ut=o("TN/R"),bt=o("M9ds"),ft=o("ZFy/"),dt=o("PCNd");let pt=(()=>{class t{}return t.\u0275mod=d.Pb({type:t}),t.\u0275inj=d.Ob({factory:function(e){return new(e||t)},imports:[[c.c,a.t,st.a,y.f,I.c,I.c,v.c,I.c,w.c,lt.a,I.c,ft.b,g.f,h.b,F.b,bt.c,x.b,E.b,M.b,dt.a,ut.g,rt.k.forChild(nt)]]}),t})()},Iab2:function(t,e,o){var c,a;void 0===(a="function"==typeof(c=function(){"use strict";function e(t,e,o){var c=new XMLHttpRequest;c.open("GET",t),c.responseType="blob",c.onload=function(){n(c.response,e,o)},c.onerror=function(){console.error("could not download file")},c.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function c(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),n=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(t,i,n){var r=a.URL||a.webkitURL,s=document.createElement("a");s.download=i=i||t.name||"download",s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?c(s):o(s.href)?e(t,i,n):c(s,s.target="_blank")):(s.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(s.href)},4e4),setTimeout(function(){c(s)},0))}:"msSaveOrOpenBlob"in navigator?function(t,a,i){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,i),a);else if(o(t))e(t,a,i);else{var n=document.createElement("a");n.href=t,n.target="_blank",setTimeout(function(){c(n)})}}:function(t,o,c,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,c);var r="application/octet-stream"===t.type,s=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&s||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var t=u.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=t:location=t,n=null},u.readAsDataURL(t)}else{var b=a.URL||a.webkitURL,f=b.createObjectURL(t);n?n.location=f:location.href=f,n=null,setTimeout(function(){b.revokeObjectURL(f)},4e4)}});a.saveAs=n.saveAs=n,t.exports=n})?c.apply(e,[]):c)||(t.exports=a)},bPAe:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var c=o("Iab2"),a=o("EUZL"),i=o("8Y7J");let n=(()=>{class t{constructor(){this.fileType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",this.fileExtension=".xlsx"}exportExcel(t,e,o){const c=a.utils.json_to_sheet(t),i=a.write({Sheets:{[o]:c},SheetNames:[o]},{bookType:"xlsx",type:"array"});this.saveExcelFile(i,e)}saveExcelFile(t,e){const o=new Blob([t],{type:this.fileType});c.saveAs(o,e+this.fileExtension)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},vpPe:function(t,e,o){"use strict";o.d(e,"a",function(){return a});var c=o("8Y7J");let a=(()=>{class t{constructor(){}generateUUID(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var o=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?o:3&o|8).toString(16)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);