(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5IEN":function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a("AytR"),r=a("8Y7J"),o=a("IheW");let c=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,e,a){return this.http.get(`${n.a.apiURL}Movcaja?filter={"where":{"and":%20[{"and":%20[{"fmovimiento":%20{"gt":"${t}"}},%20{"fmovimiento":%20{"lt":"${e}"}}]},{"idpv":{"inq":%20[${a}]}},{"deletedon":{"eq":null}}]}}`)}}return t.\u0275fac=function(e){return new(e||t)(r.bc(o.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"8iJF":function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a("AytR"),r=a("8Y7J"),o=a("IheW");let c=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t,e,a,r){return this.http.get(encodeURI(`${n.a.apiURL}Clientes?filter={"where":${t},"limit":${e},"skip":${a},"order":"${r}"}`))}obtenerIdMasAlto(){return this.http.get(encodeURI(n.a.apiURL+"Clientes/idMasAlto"))}obtenerCount(t){return this.http.get(encodeURI(`${n.a.apiURL}Clientes/count?where=${t}`))}traerClientes(){return this.http.get(encodeURI(n.a.apiURL+'Clientes?filter={"where":{"deletedon":{"eq":null}}}'))}actualizarCliente(t){return this.http.put(`${n.a.apiURL}Clientes/${t.id}`,t)}obtenerTiposClientes(){return this.http.get(encodeURI(n.a.apiURL+'Tiposcliente?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerEmpresas(){return this.http.get(n.a.apiURL+"Empresas")}agregarCliente(t){return this.http.post(n.a.apiURL+"Clientes",t)}}return t.\u0275fac=function(e){return new(e||t)(r.bc(o.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"Ao8+":function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("AytR"),r=a("cp0P"),o=a("8Y7J"),c=a("IheW");let i=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,e,a){let r=`${n.a.apiURL}MovStock/DetalleDeMovStockEnUnaFecha?fdesde=${t}&fhasta=${e}`;return a&&(r=`${n.a.apiURL}MovStock/DetalleDeMovStockEnUnaFecha?fdesde=${t}&fhasta=${e}&idsucursal=${a}`),this.http.get(encodeURI(r))}obtenerDepositos(){return this.http.get(encodeURI(n.a.apiURL+'Depositos?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerMovStockItems(t){return this.http.get(encodeURI(`${n.a.apiURL}MovStockItems/DetalleDeMovStockPorId?idmovstock=${t}`))}obtenerDatosTabla2(t,e,a){let r=`${n.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}`;return a&&(r=`${n.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}&idsucursal=${a}`),this.http.get(encodeURI(r))}obtenerDatosVenta(t){return Object(r.a)([this.http.get(encodeURI(`${n.a.apiURL}Ventasitems/DetalleDeVentaPorId?idVenta=${t}`)),this.http.get(encodeURI(`${n.a.apiURL}Ventas/DetalleDeMovCajaVenta?idVenta=${t}`))])}actualizarMovStock(t){return this.http.put(`${n.a.apiURL}MovStock/${t.id}`,t)}obtenerTiposMovStock(){return this.http.get(n.a.apiURL+'TiposMovStock?filter={"where":{"and":%20[{%22itipo%22:0},{"deletedon":{"eq":null}}]}}')}agregarMovStock(t){return this.http.post(n.a.apiURL+"MovStock",t)}agregarMovStockItems(t){return this.http.post(n.a.apiURL+"MovStockItems",t)}}return t.\u0275fac=function(e){return new(e||t)(o.bc(c.c))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"Ap+n":function(t,e,a){"use strict";a.d(e,"a",function(){return b});var n=a("iELJ"),r=a("GmJt"),o=a("8Y7J"),c=a("PDjf"),i=a("VDRc"),s=a("Dxy4"),l=a("Tj54"),d=a("TSSN"),u=a("SVse");const p=function(){return{y:"50px",delay:"300ms"}},h=function(t){return{value:"*",params:t}};let b=(()=>{class t{constructor(t,e){this.data=t,this.dialogRef=e}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Rb(n.a),o.Rb(n.g))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-user-info-popup"]],decls:30,vars:62,consts:[["matDialogTitle",""],["ng-if","data.payload.fModificacion"],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"]],template:function(t,e){1&t&&(o.Xb(0,"h1",0),o.Oc(1),o.Wb(),o.Xb(2,"mat-dialog-content"),o.Xb(3,"mat-card"),o.Xb(4,"mat-card-content"),o.Xb(5,"h5"),o.Oc(6),o.kc(7,"translate"),o.kc(8,"date"),o.kc(9,"date"),o.kc(10,"translate"),o.kc(11,"date"),o.kc(12,"date"),o.kc(13,"translate"),o.Wb(),o.Xb(14,"h5",1),o.Oc(15),o.kc(16,"translate"),o.kc(17,"date"),o.kc(18,"date"),o.kc(19,"translate"),o.kc(20,"date"),o.kc(21,"date"),o.kc(22,"translate"),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Xb(23,"mat-dialog-content",2),o.Xb(24,"div",3),o.Xb(25,"button",4),o.fc("click",function(){return e.dialogRef.close(!1)}),o.Xb(26,"mat-icon"),o.Oc(27,"cancel"),o.Wb(),o.Oc(28),o.kc(29,"translate"),o.Wb(),o.Wb(),o.Wb()),2&t&&(o.Eb(1),o.Pc(e.data.title),o.Eb(2),o.pc("@animate",o.vc(60,h,o.uc(59,p))),o.Eb(3),o.Wc(["",o.lc(7,21,"USERINFOPOPUP.CREATED")," ",o.mc(8,23,e.data.payload.fcreacion,"dd/MM/yyyy"),"",o.mc(9,26,e.data.payload.fCreacion,"dd/MM/yyyy")," ",o.lc(10,29,"USERINFOPOPUP.AT")," ",o.mc(11,31,e.data.payload.fcreacion,"HH:mm"),"",o.mc(12,34,e.data.payload.fCreacion,"HH:mm")," ",o.lc(13,37,"USERINFOPOPUP.BY")," ",e.data.payload.soperadorcreacion," ",e.data.payload.sOperadorCreacion,""]),o.Eb(9),o.Wc(["",o.lc(16,39,"USERINFOPOPUP.MODIFIED")," ",o.mc(17,41,e.data.payload.fmodificacion,"dd/MM/yyyy"),"",o.mc(18,44,e.data.payload.fModificacion,"dd/MM/yyyy")," ",o.lc(19,47,"USERINFOPOPUP.AT")," ",o.mc(20,49,e.data.payload.fmodificacion,"HH:mm"),"",o.mc(21,52,e.data.payload.fModificacion,"HH:mm")," ",o.lc(22,55,"USERINFOPOPUP.BY")," ",e.data.payload.soperadormodificacion," ",e.data.payload.sOperadorModificacion,""]),o.Eb(13),o.Pc(o.lc(29,57,"USERINFOPOPUP.CANCEL")))},directives:[n.h,n.e,c.a,c.b,i.c,i.b,i.a,s.b,l.a],pipes:[d.c,u.f],styles:[""],data:{animation:[r.a]}}),t})()},BxcV:function(t,e,a){"use strict";a.d(e,"a",function(){return O});var n=a("SVse"),r=a("u9T3"),o=a("s7LF"),c=a("Dxy4"),i=a("PDjf"),s=a("f44v"),l=a("TN/R"),d=a("iELJ"),u=a("Tj54"),p=a("e6WT"),h=a("ZTz/"),b=a("jMqV"),f=a("zHaW"),m=a("M9ds"),g=a("ZFy/"),R=a("TSSN"),P=a("w9WL"),U=a("PCNd"),v=a("8Y7J");let O=(()=>{class t{}return t.\u0275mod=v.Pb({type:t}),t.\u0275inj=v.Ob({factory:function(e){return new(e||t)},imports:[[n.c,o.t,r.a,P.f,p.c,p.c,i.c,p.c,c.c,s.a,p.c,g.b,d.f,f.b,b.b,m.c,h.b,u.b,R.b,U.a,l.g]]}),t})()},IAdc:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var n=a("Kqap"),r=a("BFxc"),o=a("xbPD"),c=a("mCNh");function i(t,e,a){return 0===a?[e]:(t.push(e),t)}function s(){return function(t,e){return arguments.length>=2?function(a){return Object(c.a)(Object(n.a)(t,e),Object(r.a)(1),Object(o.a)(e))(a)}:function(e){return Object(c.a)(Object(n.a)((e,a,n)=>t(e,a,n+1)),Object(r.a)(1))(e)}}(i,[])}},"O/+5":function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a("AytR"),r=a("8Y7J"),o=a("IheW");let c=(()=>{class t{constructor(t){this.http=t}obtenerEmpresas(){return this.http.get(n.a.apiURL+"Empresas")}actualizarEmpresa(t){return this.http.put(`${n.a.apiURL}Empresas/${t.id}`,t)}}return t.\u0275fac=function(e){return new(e||t)(r.bc(o.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Sp5M:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a("AytR"),r=a("8Y7J"),o=a("IheW");let c=(()=>{class t{constructor(t){this.http=t}obtenerEmpresas(){return this.http.get(n.a.apiURL+"Empresas")}actualizarEmpresa(t){return this.http.put(`${n.a.apiURL}Empresas/${t.id}`,t)}obtenerPV(){return this.http.get(n.a.apiURL+"PuntosVenta")}vincularMP(t,e){return this.http.post("/api/mpoint",{client_id:t,client_secret:e})}imprimirQR(t,e){return this.http.post("/api/mpuser",{client_id:t,client_secret:e})}}return t.\u0275fac=function(e){return new(e||t)(r.bc(o.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},UVsP:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var n=a("AytR"),r=a("HDdC"),o=a("cp0P"),c=a("8Y7J"),i=a("IheW");let s=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t=!1,e=!1,a=!1){return new r.a(r=>{let c=n.a.apiURL+"Sucursales/SucursalesPorOperador";a&&(c=n.a.apiURL+'Sucursales/?filter={"where":{"deletedon":{"eq":null}}}');var i=[this.http.get(encodeURI(c))];t&&i.push(this.http.get(encodeURI(n.a.apiURL+'PuntosVenta/?filter={"where":{"deletedon":{"eq":null}}}'))),Object(o.a)(i).subscribe(n=>{var o=n[0];if(o=o.map((t,e,a)=>({bactivo:"T"==t.bactivo,nombre:t.sdescripcion,id:t.idsucursal,idsucursal:t.idsucursal,puntosventas:new Array})),e&&(o=o.filter(t=>t.bactivo)),o.sort((t,e)=>t.nombre>e.nombre?1:t.nombre<e.nombre?-1:0),o.splice(0,0,{nombre:"TODAS",id:"",puntosventas:new Array}),t){var c=n[1];e&&(c=c.filter(t=>"T"==t.bactivo));for(var i=0;i<c.length;i++){1!=o.length&&-1==o[0].puntosventas.indexOf(c[i])&&o[0].puntosventas.push(c[i].idpv);for(var s=1;s<o.length;s++)c[i].idsucursal==o[s].idsucursal&&-1==o[s].puntosventas.indexOf(c[i].idpv)&&o[s].puntosventas.push(c[i].idpv)}for(i=0;i<o.length;i++)o[i].puntosventasstr=o[i].puntosventas.join()}a||2!=o.length||o.shift(),r.next(o),r.complete()},t=>r.error(t))})}}return t.\u0275fac=function(e){return new(e||t)(c.bc(i.c))},t.\u0275prov=c.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},qA6C:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a("AytR"),r=a("8Y7J"),o=a("IheW");let c=(()=>{class t{constructor(t){this.http=t,this.listaProductos=[]}obtenerDatos(t,e,a,r){return this.http.get(encodeURI(`${n.a.apiURL}Productos?filter={"where":${t},"limit":${e},"skip":${a},"order":"${r}"}`))}traerProductosPagina(t,e,a,r,o){this.http.get(encodeURI(`${n.a.apiURL}Productos?filter={"limit":${t},"skip":${e},"order":"${a}"}`)).subscribe(n=>{n.length>0?(this.listaProductos=this.listaProductos.concat(n),this.traerProductosPagina(t,e+t,a,r,o)):r()},t=>{"function"==typeof o&&o(t)})}traerProductos(t,e,a){this.listaProductos.length=0,this.traerProductosPagina(2e4,0,t,e,a)}obtenerFamilias(){return this.http.get(encodeURI(n.a.apiURL+'Familias?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerProveedores(){return this.http.get(encodeURI(n.a.apiURL+'Proveedores?filter={"where":{"and":[{"deletedon":{"eq":null}},{"srazonsocial":{"neq":""}}]},"order":"srazonsocial ASC"}'))}obtenerCount(t){return this.http.get(encodeURI(`${n.a.apiURL}Productos/count?where=${t}`))}actualizarProducto(t){return this.http.put(`${n.a.apiURL}Productos/${t.id}`,t)}agregarProducto(t){return this.http.post(n.a.apiURL+"Productos",t)}obtenerEmpresas(){return this.http.get(n.a.apiURL+"Empresas")}obtenerIdMasAlto(){return this.http.get(n.a.apiURL+"Productos/idMasAlto")}}return t.\u0275fac=function(e){return new(e||t)(r.bc(o.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},rGvg:function(t,e,a){"use strict";a.d(e,"a",function(){return y});var n=a("iELJ"),r=a("bPAe"),o=a("wd/R"),c=a("GmJt"),i=a("8Y7J"),s=a("PDjf"),l=a("w9WL"),d=a("SVse"),u=a("VDRc"),p=a("Dxy4"),h=a("Tj54"),b=a("TSSN");function f(t,e){}function m(t,e){if(1&t&&(i.Oc(0),i.kc(1,"date")),2&t){const t=e.row;i.Qc(" ",i.mc(1,1,null==t?null:t.Fecha,"dd/MM/yyyy HH:mm:ss")," ")}}function g(t,e){if(1&t&&i.Oc(0),2&t){const t=e.row;i.Qc(" ",null==t?null:t.Descripcion," ")}}function R(t,e){if(1&t&&(i.Oc(0),i.kc(1,"number")),2&t){const t=e.row;i.Qc(" ",i.lc(1,1,null==t?null:t.Cantidad)," ")}}function P(t,e){if(1&t&&i.Oc(0),2&t){const t=e.row;i.Qc(" ",null==t?null:t.Operador," ")}}function U(t,e){if(1&t){const t=i.Yb();i.Xb(0,"button",11),i.fc("click",function(){return i.Dc(t),i.jc().export()}),i.Xb(1,"mat-icon"),i.Oc(2,"save_alt"),i.Wb(),i.Oc(3),i.kc(4,"translate"),i.Wb()}2&t&&(i.Eb(3),i.Pc(i.lc(4,1,"STOCKPOPUPCOMPONENT.EXCEL")))}const v=function(){return{y:"50px",delay:"300ms"}},O=function(t){return{value:"*",params:t}};let y=(()=>{class t{constructor(t,e,a,n){this.data=t,this.dialogRef=e,this.servicioExportarExcel=a,this.cdRef=n,this.page={count:0,offset:0,limit:5}}ngOnInit(){}ngAfterViewChecked(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}getCellClass({row:t,column:e}){return{ngxgroup:t.isGroup,"ngx-alert-success ngx-alert-padding":"status"==e.prop&&t.Cantidad>0,"ngx-alert-danger ngx-alert-padding":"status"==e.prop&&t.Cantidad<0,"ngx-alert-warning ngx-alert-padding":"status"==e.prop&&0==t.Cantidad}}export(){var t=this.data.historialstock.map(t=>({Fecha:o(t.Fecha).format("DD/MM/YYYY HH:mm:ss"),Descripci\u00f3n:t.Descripcion,Cantidad:t.Cantidad,Operador:t.Operador}));this.servicioExportarExcel.exportExcel(t,"historial_stock_"+this.data.payload.sProducto,"historial_stock")}}return t.\u0275fac=function(e){return new(e||t)(i.Rb(n.a),i.Rb(n.g),i.Rb(r.a),i.Rb(i.h))},t.\u0275cmp=i.Lb({type:t,selectors:[["app-products-popup"]],decls:37,vars:51,consts:[["matDialogTitle",""],[1,"p-0"],[1,"material","ml-0","mr-0","ngx-status",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit"],["prop","status","name","",3,"cellClass","sortable","width","flexGrow"],["ngx-datatable-cell-template",""],[3,"name","width"],["align","right",1,"p-8"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"],["mat-raised-button","","color","primary",1,"m-8",3,"click"]],template:function(t,e){1&t&&(i.Xb(0,"h1",0),i.Oc(1),i.Wb(),i.Xb(2,"mat-dialog-content"),i.Xb(3,"mat-card"),i.Xb(4,"mat-card-content"),i.Xb(5,"h5"),i.Oc(6),i.kc(7,"translate"),i.Wb(),i.Xb(8,"h5"),i.Oc(9),i.kc(10,"translate"),i.Wb(),i.Wb(),i.Wb(),i.Xb(11,"mat-card",1),i.Xb(12,"mat-card-content",1),i.Xb(13,"ngx-datatable",2),i.Xb(14,"ngx-datatable-column",3),i.Mc(15,f,0,0,"ng-template",4),i.Wb(),i.Xb(16,"ngx-datatable-column",5),i.kc(17,"translate"),i.Mc(18,m,2,4,"ng-template",4),i.Wb(),i.Xb(19,"ngx-datatable-column",5),i.kc(20,"translate"),i.Mc(21,g,1,1,"ng-template",4),i.Wb(),i.Xb(22,"ngx-datatable-column",5),i.kc(23,"translate"),i.Mc(24,R,2,3,"ng-template",4),i.Wb(),i.Xb(25,"ngx-datatable-column",5),i.kc(26,"translate"),i.Mc(27,P,1,1,"ng-template",4),i.Wb(),i.Wb(),i.Xb(28,"div",6),i.Mc(29,U,5,3,"button",7),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Xb(30,"mat-dialog-content",8),i.Xb(31,"div",9),i.Xb(32,"button",10),i.fc("click",function(){return e.dialogRef.close(!1)}),i.Xb(33,"mat-icon"),i.Oc(34,"cancel"),i.Wb(),i.Oc(35),i.kc(36,"translate"),i.Wb(),i.Wb(),i.Wb()),2&t&&(i.Eb(1),i.Rc("",e.data.title,": ",e.data.payload.sProducto,""),i.Eb(2),i.pc("@animate",i.vc(46,O,i.uc(45,v))),i.Eb(3),i.Rc("",i.lc(7,31,"STOCKPOPUPCOMPONENT.DEPOSIT"),": ",e.data.payload.sDeposito,""),i.Eb(3),i.Rc("",i.lc(10,33,"STOCKPOPUPCOMPONENT.STOCK"),": ",e.data.payload.rStock,""),i.Eb(2),i.pc("@animate",i.vc(49,O,i.uc(48,v))),i.Eb(2),i.pc("rows",e.data.historialstock)("columnMode","force")("headerHeight",50)("footerHeight",e.data.historialstock.length>e.page.limit?50:0)("scrollbarH",!0)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit),i.Eb(1),i.pc("cellClass",e.getCellClass)("sortable",!1)("width",10)("flexGrow",.1),i.Eb(2),i.qc("name",i.lc(17,35,"STOCKPOPUPCOMPONENT.DATE")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(20,37,"STOCKPOPUPCOMPONENT.DESCRIPTION")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(23,39,"STOCKPOPUPCOMPONENT.QUANTITY")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(26,41,"STOCKPOPUPCOMPONENT.OPERATOR")),i.pc("width",150),i.Eb(4),i.pc("ngIf",e.data.historialstock.length>0),i.Eb(6),i.Pc(i.lc(36,43,"STOCKPOPUPCOMPONENT.CANCEL")))},directives:[n.h,n.e,s.a,s.b,l.d,l.b,l.a,d.o,u.c,u.b,u.a,p.b,h.a],pipes:[b.c,d.f,d.g],styles:[""],data:{animation:[c.a]}}),t})()},rbHy:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("AytR"),r=a("cp0P"),o=a("8Y7J"),c=a("IheW");let i=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,e,a){let r=`${n.a.apiURL}Ventas/DocumentosDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}`;return a&&(r=`${n.a.apiURL}Ventas/DocumentosDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}&idsucursal=${a}`),this.http.get(encodeURI(r))}obtenerDatosTabla2(t,e,a){let r=`${n.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}`;return a&&(r=`${n.a.apiURL}Ventas/DetalleDeVentasEnUnaFecha?fdesde=${t}&fhasta=${e}&idsucursal=${a}`),this.http.get(encodeURI(r))}obtenerDatosVenta(t){return Object(r.a)([this.http.get(encodeURI(`${n.a.apiURL}Ventasitems/DetalleDeVentaPorId?idVenta=${t}`)),this.http.get(encodeURI(`${n.a.apiURL}Ventas/DetalleDeMovCajaVenta?idVenta=${t}`))])}}return t.\u0275fac=function(e){return new(e||t)(o.bc(c.c))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);