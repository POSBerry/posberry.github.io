(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5IEN":function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("AytR"),r=a("8Y7J"),c=a("IheW");let o=(()=>{class t{constructor(t){this.http=t}obtenerDatosTabla1(t,e,a){return this.http.get(`${n.a.apiURL}Movcaja?filter={"where":{"and":%20[{"and":%20[{"fmovimiento":%20{"gt":"${t}"}},%20{"fmovimiento":%20{"lt":"${e}"}}]},{"idpv":{"inq":%20[${a}]}},{"deletedon":{"eq":null}}]}}`)}}return t.\u0275fac=function(e){return new(e||t)(r.bc(c.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"8iJF":function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("AytR"),r=a("8Y7J"),c=a("IheW");let o=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t,e,a,r){return this.http.get(encodeURI(`${n.a.apiURL}Clientes?filter={"where":${t},"limit":${e},"skip":${a},"order":"${r}"}`))}obtenerIdMasAlto(){return this.http.get(encodeURI(n.a.apiURL+"Clientes/idMasAlto"))}obtenerCount(t){return this.http.get(encodeURI(`${n.a.apiURL}Clientes/count?where=${t}`))}traerClientes(){return this.http.get(encodeURI(n.a.apiURL+'Clientes?filter={"where":{"deletedon":{"eq":null}}}'))}actualizarCliente(t){return this.http.put(`${n.a.apiURL}Clientes/${t.id}`,t)}obtenerTiposClientes(){return this.http.get(encodeURI(n.a.apiURL+'Tiposcliente?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerEmpresas(){return this.http.get(n.a.apiURL+"Empresas")}agregarCliente(t){return this.http.post(n.a.apiURL+"Clientes",t)}}return t.\u0275fac=function(e){return new(e||t)(r.bc(c.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"Ap+n":function(t,e,a){"use strict";a.d(e,"a",function(){return f});var n=a("iELJ"),r=a("GmJt"),c=a("8Y7J"),o=a("PDjf"),i=a("VDRc"),s=a("Dxy4"),l=a("Tj54"),u=a("TSSN"),d=a("SVse");const p=function(){return{y:"50px",delay:"300ms"}},b=function(t){return{value:"*",params:t}};let f=(()=>{class t{constructor(t,e){this.data=t,this.dialogRef=e}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(n.a),c.Rb(n.g))},t.\u0275cmp=c.Lb({type:t,selectors:[["app-user-info-popup"]],decls:23,vars:37,consts:[["matDialogTitle",""],["ng-if","data.payload.fModificacion"],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"]],template:function(t,e){1&t&&(c.Xb(0,"h1",0),c.Oc(1),c.Wb(),c.Xb(2,"mat-dialog-content"),c.Xb(3,"mat-card"),c.Xb(4,"mat-card-content"),c.Xb(5,"h5"),c.Oc(6),c.kc(7,"translate"),c.kc(8,"date"),c.kc(9,"date"),c.Wb(),c.Xb(10,"h5",1),c.Oc(11),c.kc(12,"translate"),c.kc(13,"date"),c.kc(14,"date"),c.kc(15,"translate"),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(16,"mat-dialog-content",2),c.Xb(17,"div",3),c.Xb(18,"button",4),c.fc("click",function(){return e.dialogRef.close(!1)}),c.Xb(19,"mat-icon"),c.Oc(20,"cancel"),c.Wb(),c.Oc(21),c.kc(22,"translate"),c.Wb(),c.Wb(),c.Wb()),2&t&&(c.Eb(1),c.Pc(e.data.title),c.Eb(2),c.pc("@animate",c.vc(35,b,c.uc(34,p))),c.Eb(3),c.Uc("",c.lc(7,14,"Creado")," ",c.mc(8,16,e.data.payload.fcreacion,"dd/MM/yyyy ' a las ' HH:mm")," ",c.mc(9,19,e.data.payload.fCreacion,"dd/MM/yyyy ' a las ' HH:mm")," por ",e.data.payload.soperadorcreacion," ",e.data.payload.sOperadorCreacion,""),c.Eb(5),c.Vc("",c.lc(12,22,"Modificado")," ",c.mc(13,24,e.data.payload.fmodificacion,"dd/MM/yyyy ' a las ' HH:mm"),"",c.mc(14,27,e.data.payload.fModificacion,"dd/MM/yyyy ' a las ' HH:mm")," ",c.lc(15,30,"por")," ",e.data.payload.soperadormodificacion," ",e.data.payload.sOperadorModificacion,""),c.Eb(10),c.Pc(c.lc(22,32,"Cancelar")))},directives:[n.h,n.e,o.a,o.b,i.c,i.b,i.a,s.b,l.a],pipes:[u.c,d.f],styles:[""],data:{animation:[r.a]}}),t})()},BxcV:function(t,e,a){"use strict";a.d(e,"a",function(){return y});var n=a("SVse"),r=a("u9T3"),c=a("s7LF"),o=a("Dxy4"),i=a("PDjf"),s=a("f44v"),l=a("TN/R"),u=a("iELJ"),d=a("Tj54"),p=a("e6WT"),b=a("ZTz/"),f=a("jMqV"),h=a("zHaW"),m=a("M9ds"),g=a("ZFy/"),P=a("TSSN"),x=a("w9WL"),v=a("PCNd"),O=a("8Y7J");let y=(()=>{class t{}return t.\u0275mod=O.Pb({type:t}),t.\u0275inj=O.Ob({factory:function(e){return new(e||t)},imports:[[n.c,c.t,r.a,x.f,p.c,p.c,i.c,p.c,o.c,s.a,p.c,g.b,u.f,h.b,f.b,m.c,b.b,d.b,P.b,v.a,l.g]]}),t})()},IAdc:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var n=a("Kqap"),r=a("BFxc"),c=a("xbPD"),o=a("mCNh");function i(t,e,a){return 0===a?[e]:(t.push(e),t)}function s(){return function(t,e){return arguments.length>=2?function(a){return Object(o.a)(Object(n.a)(t,e),Object(r.a)(1),Object(c.a)(e))(a)}:function(e){return Object(o.a)(Object(n.a)((e,a,n)=>t(e,a,n+1)),Object(r.a)(1))(e)}}(i,[])}},"O/+5":function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("AytR"),r=a("8Y7J"),c=a("IheW");let o=(()=>{class t{constructor(t){this.http=t}obtenerEmpresas(){return this.http.get(n.a.apiURL+"Empresas")}actualizarEmpresa(t){return this.http.put(`${n.a.apiURL}Empresas/${t.id}`,t)}}return t.\u0275fac=function(e){return new(e||t)(r.bc(c.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Sp5M:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("AytR"),r=a("8Y7J"),c=a("IheW");let o=(()=>{class t{constructor(t){this.http=t}obtenerEmpresas(){return this.http.get(n.a.apiURL+"Empresas")}actualizarEmpresa(t){return this.http.put(`${n.a.apiURL}Empresas/${t.id}`,t)}obtenerPV(){return this.http.get(n.a.apiURL+"PuntosVenta")}vincularMP(t,e){return this.http.post("/api/mpoint",{client_id:t,client_secret:e})}imprimirQR(t,e){return this.http.post("/api/mpuser",{client_id:t,client_secret:e})}}return t.\u0275fac=function(e){return new(e||t)(r.bc(c.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},UVsP:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var n=a("AytR"),r=a("HDdC"),c=a("cp0P"),o=a("8Y7J"),i=a("IheW");let s=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t=!1,e=!1,a=!1){return new r.a(r=>{let o=n.a.apiURL+"Sucursales/SucursalesPorOperador";a&&(o=n.a.apiURL+'Sucursales/?filter={"where":{"deletedon":{"eq":null}}}');var i=[this.http.get(encodeURI(o))];t&&i.push(this.http.get(encodeURI(n.a.apiURL+'PuntosVenta/?filter={"where":{"deletedon":{"eq":null}}}'))),Object(c.a)(i).subscribe(n=>{var c=n[0];if(c=c.map((t,e,a)=>({bactivo:"T"==t.bactivo,nombre:t.sdescripcion,id:t.idsucursal,idsucursal:t.idsucursal,puntosventas:new Array})),e&&(c=c.filter(t=>t.bactivo)),c.sort((t,e)=>t.nombre>e.nombre?1:t.nombre<e.nombre?-1:0),c.splice(0,0,{nombre:"TODAS",id:"",puntosventas:new Array}),t){var o=n[1];e&&(o=o.filter(t=>"T"==t.bactivo));for(var i=0;i<o.length;i++){1!=c.length&&-1==c[0].puntosventas.indexOf(o[i])&&c[0].puntosventas.push(o[i].idpv);for(var s=1;s<c.length;s++)o[i].idsucursal==c[s].idsucursal&&-1==c[s].puntosventas.indexOf(o[i].idpv)&&c[s].puntosventas.push(o[i].idpv)}for(i=0;i<c.length;i++)c[i].puntosventasstr=c[i].puntosventas.join()}a||2!=c.length||c.shift(),r.next(c),r.complete()},t=>r.error(t))})}}return t.\u0275fac=function(e){return new(e||t)(o.bc(i.c))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},qA6C:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("AytR"),r=a("8Y7J"),c=a("IheW");let o=(()=>{class t{constructor(t){this.http=t,this.listaProductos=[]}obtenerDatos(t,e,a,r){return this.http.get(encodeURI(`${n.a.apiURL}Productos?filter={"where":${t},"limit":${e},"skip":${a},"order":"${r}"}`))}traerProductosPagina(t,e,a,r,c){this.http.get(encodeURI(`${n.a.apiURL}Productos?filter={"limit":${t},"skip":${e},"order":"${a}"}`)).subscribe(n=>{n.length>0?(this.listaProductos=this.listaProductos.concat(n),this.traerProductosPagina(t,e+t,a,r,c)):r()},t=>{"function"==typeof c&&c(t)})}traerProductos(t,e,a){this.listaProductos.length=0,this.traerProductosPagina(2e4,0,t,e,a)}obtenerFamilias(){return this.http.get(encodeURI(n.a.apiURL+'Familias?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerProveedores(){return this.http.get(encodeURI(n.a.apiURL+'Proveedores?filter={"where":{"and":[{"deletedon":{"eq":null}},{"srazonsocial":{"neq":""}}]},"order":"srazonsocial ASC"}'))}obtenerCount(t){return this.http.get(encodeURI(`${n.a.apiURL}Productos/count?where=${t}`))}actualizarProducto(t){return this.http.put(`${n.a.apiURL}Productos/${t.id}`,t)}agregarProducto(t){return this.http.post(n.a.apiURL+"Productos",t)}obtenerEmpresas(){return this.http.get(n.a.apiURL+"Empresas")}obtenerIdMasAlto(){return this.http.get(n.a.apiURL+"Productos/idMasAlto")}}return t.\u0275fac=function(e){return new(e||t)(r.bc(c.c))},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},rGvg:function(t,e,a){"use strict";a.d(e,"a",function(){return R});var n=a("iELJ"),r=a("bPAe"),c=a("wd/R"),o=a("GmJt"),i=a("8Y7J"),s=a("PDjf"),l=a("w9WL"),u=a("SVse"),d=a("VDRc"),p=a("Dxy4"),b=a("Tj54"),f=a("TSSN");function h(t,e){}function m(t,e){if(1&t&&(i.Oc(0),i.kc(1,"date")),2&t){const t=e.row;i.Qc(" ",i.mc(1,1,null==t?null:t.Fecha,"dd/MM/yyyy HH:mm:ss")," ")}}function g(t,e){if(1&t&&i.Oc(0),2&t){const t=e.row;i.Qc(" ",null==t?null:t.Descripcion," ")}}function P(t,e){if(1&t&&(i.Oc(0),i.kc(1,"number")),2&t){const t=e.row;i.Qc(" ",i.lc(1,1,null==t?null:t.Cantidad)," ")}}function x(t,e){if(1&t&&i.Oc(0),2&t){const t=e.row;i.Qc(" ",null==t?null:t.Operador," ")}}function v(t,e){if(1&t){const t=i.Yb();i.Xb(0,"button",11),i.fc("click",function(){return i.Dc(t),i.jc().export()}),i.Xb(1,"mat-icon"),i.Oc(2,"save_alt"),i.Wb(),i.Oc(3),i.kc(4,"translate"),i.Wb()}2&t&&(i.Eb(3),i.Pc(i.lc(4,1,"STOCKPOPUPCOMPONENT.EXCEL")))}const O=function(){return{y:"50px",delay:"300ms"}},y=function(t){return{value:"*",params:t}};let R=(()=>{class t{constructor(t,e,a,n){this.data=t,this.dialogRef=e,this.servicioExportarExcel=a,this.cdRef=n,this.page={count:0,offset:0,limit:5}}ngOnInit(){}ngAfterViewChecked(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}getCellClass({row:t,column:e}){return{ngxgroup:t.isGroup,"ngx-alert-success ngx-alert-padding":"status"==e.prop&&t.Cantidad>0,"ngx-alert-danger ngx-alert-padding":"status"==e.prop&&t.Cantidad<0,"ngx-alert-warning ngx-alert-padding":"status"==e.prop&&0==t.Cantidad}}export(){var t=this.data.historialstock.map(t=>({Fecha:c(t.Fecha).format("DD/MM/YYYY HH:mm:ss"),Descripci\u00f3n:t.Descripcion,Cantidad:t.Cantidad,Operador:t.Operador}));this.servicioExportarExcel.exportExcel(t,"historial_stock_"+this.data.payload.sProducto,"historial_stock")}}return t.\u0275fac=function(e){return new(e||t)(i.Rb(n.a),i.Rb(n.g),i.Rb(r.a),i.Rb(i.h))},t.\u0275cmp=i.Lb({type:t,selectors:[["app-products-popup"]],decls:37,vars:51,consts:[["matDialogTitle",""],[1,"p-0"],[1,"material","ml-0","mr-0","ngx-status",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit"],["prop","status","name","",3,"cellClass","sortable","width","flexGrow"],["ngx-datatable-cell-template",""],[3,"name","width"],["align","right",1,"p-8"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],["fxLayout","row wrap","fxLayoutAlign","end"],["fxFlex","100",1,"mt-16"],["mat-button","","color","warn","type","button",3,"click"],["mat-raised-button","","color","primary",1,"m-8",3,"click"]],template:function(t,e){1&t&&(i.Xb(0,"h1",0),i.Oc(1),i.Wb(),i.Xb(2,"mat-dialog-content"),i.Xb(3,"mat-card"),i.Xb(4,"mat-card-content"),i.Xb(5,"h5"),i.Oc(6),i.kc(7,"translate"),i.Wb(),i.Xb(8,"h5"),i.Oc(9),i.kc(10,"translate"),i.Wb(),i.Wb(),i.Wb(),i.Xb(11,"mat-card",1),i.Xb(12,"mat-card-content",1),i.Xb(13,"ngx-datatable",2),i.Xb(14,"ngx-datatable-column",3),i.Mc(15,h,0,0,"ng-template",4),i.Wb(),i.Xb(16,"ngx-datatable-column",5),i.kc(17,"translate"),i.Mc(18,m,2,4,"ng-template",4),i.Wb(),i.Xb(19,"ngx-datatable-column",5),i.kc(20,"translate"),i.Mc(21,g,1,1,"ng-template",4),i.Wb(),i.Xb(22,"ngx-datatable-column",5),i.kc(23,"translate"),i.Mc(24,P,2,3,"ng-template",4),i.Wb(),i.Xb(25,"ngx-datatable-column",5),i.kc(26,"translate"),i.Mc(27,x,1,1,"ng-template",4),i.Wb(),i.Wb(),i.Xb(28,"div",6),i.Mc(29,v,5,3,"button",7),i.Wb(),i.Wb(),i.Wb(),i.Wb(),i.Xb(30,"mat-dialog-content",8),i.Xb(31,"div",9),i.Xb(32,"button",10),i.fc("click",function(){return e.dialogRef.close(!1)}),i.Xb(33,"mat-icon"),i.Oc(34,"cancel"),i.Wb(),i.Oc(35),i.kc(36,"translate"),i.Wb(),i.Wb(),i.Wb()),2&t&&(i.Eb(1),i.Rc("",e.data.title,": ",e.data.payload.sProducto,""),i.Eb(2),i.pc("@animate",i.vc(46,y,i.uc(45,O))),i.Eb(3),i.Rc("",i.lc(7,31,"STOCKPOPUPCOMPONENT.DEPOSIT"),": ",e.data.payload.sDeposito,""),i.Eb(3),i.Rc("",i.lc(10,33,"STOCKPOPUPCOMPONENT.STOCK"),": ",e.data.payload.rStock,""),i.Eb(2),i.pc("@animate",i.vc(49,y,i.uc(48,O))),i.Eb(2),i.pc("rows",e.data.historialstock)("columnMode","force")("headerHeight",50)("footerHeight",e.data.historialstock.length>e.page.limit?50:0)("scrollbarH",!0)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit),i.Eb(1),i.pc("cellClass",e.getCellClass)("sortable",!1)("width",10)("flexGrow",.1),i.Eb(2),i.qc("name",i.lc(17,35,"STOCKPOPUPCOMPONENT.DATE")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(20,37,"STOCKPOPUPCOMPONENT.DESCRIPTION")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(23,39,"STOCKPOPUPCOMPONENT.QUANTITY")),i.pc("width",150),i.Eb(3),i.qc("name",i.lc(26,41,"STOCKPOPUPCOMPONENT.OPERATOR")),i.pc("width",150),i.Eb(4),i.pc("ngIf",e.data.historialstock.length>0),i.Eb(6),i.Pc(i.lc(36,43,"STOCKPOPUPCOMPONENT.CANCEL")))},directives:[n.h,n.e,s.a,s.b,l.d,l.b,l.a,u.o,d.c,d.b,d.a,p.b,b.a],pipes:[f.c,u.f,u.g],styles:[""],data:{animation:[o.a]}}),t})()},vpPe:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var n=a("8Y7J");let r=(()=>{class t{constructor(){}generateUUID(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var a=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?a:3&a|8).toString(16)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);