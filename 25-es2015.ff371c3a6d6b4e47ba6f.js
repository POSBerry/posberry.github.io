(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{GmJt:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var a=o("GS7A");const i=Object(a.g)([Object(a.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(a.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(a.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),r=[Object(a.n)("animate",[Object(a.m)("void => *",[Object(a.o)(i)])]),Object(a.n)("fadeInOut",[Object(a.k)("0",Object(a.l)({opacity:0,display:"none"})),Object(a.k)("1",Object(a.l)({opacity:1,display:"block"})),Object(a.m)("0 => 1",Object(a.e)("300ms")),Object(a.m)("1 => 0",Object(a.e)("300ms"))])]},HkQJ:function(e,t,o){"use strict";o.r(t),o.d(t,"PointOfSaleSettingsModule",function(){return _});var a=o("SVse"),i=o("iInd"),r=o("u9T3"),c=o("s7LF"),n=o("Dxy4"),s=o("PDjf"),l=o("f44v"),b=o("iELJ"),d=o("Tj54"),p=o("e6WT"),u=o("ZTz/"),m=o("jMqV"),f=o("zHaW"),h=o("M9ds"),v=o("ZFy/"),g=o("TSSN"),O=o("w9WL"),P=o("PCNd"),E=o("GmJt"),W=o("3kSh"),F=o("3sEA"),X=o("vpPe"),k=o("cp0P"),S=o("Ap+n"),T=o("8Y7J"),I=o("VDRc"),y=o("Q2Ze"),C=o("pMoy"),w=o("UhP/");function x(e,t){if(1&e&&(T.Xb(0,"mat-option",22),T.Oc(1),T.Wb()),2&e){const e=t.$implicit;T.pc("value",e.id),T.Eb(1),T.Qc(" ",e.sdescripcion," ")}}function R(e,t){if(1&e&&(T.Xb(0,"mat-option",22),T.Oc(1),T.Wb()),2&e){const e=t.$implicit;T.pc("value",e.indice),T.Eb(1),T.Qc(" ",e.value," ")}}let N=(()=>{class e{constructor(e,t,o){this.data=e,this.dialogRef=t,this.fb=o,this.tipoFacturacion=[{value:"Sin Impresion",indice:0},{value:"Serial",indice:1},{value:"Fiscal",indice:2},{value:"Factura Electr\xf3nica",indice:3}],this.listaDeSucursales=[]}ngOnInit(){this.buildItemForm(this.data.payload),this.sucursalMostrar(),this.listaDeSucursales=this.data.sucursales}sucursalMostrar(){this.sucursal=this.data.sucursales.find(e=>e.idsucursal==this.data.payload.idpv).sdescripcion}buildItemForm(e){this.itemForm=this.fb.group({id:[e.id||""],bactivo:[!e.hasOwnProperty("bactivo")||"T"==e.bactivo],bfeenproduccion:[!e.hasOwnProperty("bfeenproduccion")||"T"==e.bactivo],busarpantallaalcliente:[!e.hasOwnProperty("busarpantallaalcliente")||"T"==e.bactivo],busarventaypreventaremota:[!e.hasOwnProperty("busarpantallaalcliente")||"T"==e.bactivo],busarverificadordeprecios:[!e.hasOwnProperty("busarverificadordeprecios")||"T"==e.bactivo],deletedon:[e.deletedon],factivacion:[e.factivacion],fcreacion:[e.fcreacion],fmodificacion:[e.fmodificacion],hardid:[e.hardid],idempresa:[e.idempresa],idpv:[e.idpv||""],idpvcaea:[e.idpvcaea||""],idsucursal:[e.idsucursal||""],insertedon:[e.insertedon],itipo:[e.itipo||0],rlatitud:[e.rlatitud],rlongitud:[e.rlongitud],rporcotrosimpuestos:[e.rporcotrosimpuestos],rtopedescuento:[e.rtopedescuento||0],safipcrt:[e.safipcrt],safipkey:[e.safipkey],sdescripcion:[e.sdescripcion||""],sdomicilio:[e.sdomicilio||""],slocalidad:[e.slocalidad||""],snumerodeserie:[e.snumerodeserie],soperadoractivacion:[e.soperadoractivacion],soperadorcreacion:[e.soperadorcreacion],soperadormodificacion:[e.soperadormodificacion],spais:[e.spais||""],sprovincia:[e.sprovincia||""],sweathercode:[e.sweathercode||""],updatedon:[e.updatedon]}),this.itemForm2=this.fb.group({id:[e.id||""],bagruparproductosidenticos:[e.bagruparproductosidenticos],bforzarloginalcerrarcaja:[!e.hasOwnProperty("bforzarloginalcerrarcaja")||"T"==e.bactivo],bpermitecantidadesnegativas:[e.bpermitecantidadesnegativas],bpuedeeditarpreciounitario:[1==e.bpuedeeditarpreciounitario],bpuedeeditarcantidad:[1==e.bpuedeeditarcantidad],deletedon:[e.deletedon],fcreacion:[e.fcreacion],fmodificacion:[e.fmodificacion],fultimocalculodestock:[e.fultimocalculodestock],idclientegenerico:[e.idclientegenerico],idempresa:[e.idempresa],idpv:[e.idpv],insertedon:[e.insertedon],isegundosentresincro:[e.isegundosentresincro],sformatofecha:[e.sformatofecha],smarcafiscal:[e.smarcafiscal],smodelofiscal:[e.smodelofiscal],soperadorcreacion:[e.soperadorcreacion],soperadormodificacion:[e.soperadormodificacion],sversion:[e.sversion],updatedon:[e.updatedon]})}submit(){this.dialogRef.close([this.itemForm.value,this.itemForm2.value])}}return e.\u0275fac=function(t){return new(t||e)(T.Rb(b.a),T.Rb(b.g),T.Rb(c.d))},e.\u0275cmp=T.Lb({type:e,selectors:[["app-point-of-sale-settings-popup"]],decls:81,vars:55,consts:[["matDialogTitle",""],["label","Detalles"],[3,"formGroup"],["mat-dialog-content","","fxLayout","row wrap","fxLayout.lt-sm","column",2,"max-width","100%","margin","0px","padding-top","10px"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","idsucursal",3,"formControl","placeholder"],["appearance","fill"],["name","idsucursal",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","sdescripcion",3,"formControl","placeholder"],["matInput","","name","idpvcaea",3,"formControl","placeholder"],["name","itipo",3,"formControl"],["matInput","","name","rtopedescuento",3,"formControl","placeholder"],["name","bactivo",3,"formControl"],["fxFlex","50",1,"mb-16"],[3,"formControl","checked"],["label","Preferencias"],["fxFlex","100",1,"mt-16"],["fxFlex",""],["mat-raised-button","","color","primary",3,"click"],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(e,t){1&e&&(T.Xb(0,"h1",0),T.Oc(1),T.Wb(),T.Xb(2,"mat-tab-group"),T.Xb(3,"mat-tab",1),T.Xb(4,"form",2),T.Xb(5,"mat-dialog-content",3),T.Xb(6,"div",4),T.Xb(7,"mat-form-field",5),T.Sb(8,"input",6),T.kc(9,"translate"),T.Wb(),T.Wb(),T.Xb(10,"div",4),T.Xb(11,"mat-form-field",7),T.Xb(12,"mat-label"),T.Oc(13),T.kc(14,"translate"),T.Wb(),T.Xb(15,"mat-select",8),T.Mc(16,x,2,2,"mat-option",9),T.Wb(),T.Wb(),T.Wb(),T.Xb(17,"div",4),T.Xb(18,"mat-form-field",5),T.Sb(19,"input",10),T.kc(20,"translate"),T.Wb(),T.Wb(),T.Xb(21,"div",4),T.Xb(22,"mat-form-field",5),T.Sb(23,"input",11),T.kc(24,"translate"),T.Wb(),T.Wb(),T.Xb(25,"div",4),T.Xb(26,"mat-form-field",7),T.Xb(27,"mat-label"),T.Oc(28),T.kc(29,"translate"),T.Wb(),T.Xb(30,"mat-select",12),T.Mc(31,R,2,2,"mat-option",9),T.Wb(),T.Wb(),T.Wb(),T.Xb(32,"div",4),T.Xb(33,"mat-form-field",5),T.Sb(34,"input",13),T.kc(35,"translate"),T.Wb(),T.Wb(),T.Xb(36,"div",4),T.Xb(37,"mat-slide-toggle",14),T.Oc(38),T.kc(39,"translate"),T.Wb(),T.Wb(),T.Xb(40,"div",15),T.Xb(41,"mat-checkbox",16),T.Oc(42,"Usar Pantalla al Cliente"),T.Wb(),T.Wb(),T.Xb(43,"div",15),T.Xb(44,"mat-checkbox",16),T.Oc(45,"Usar Venta y Preventa Remota"),T.Wb(),T.Wb(),T.Xb(46,"div",15),T.Xb(47,"mat-checkbox",16),T.Oc(48,"Usar Verificador de Precios"),T.Wb(),T.Wb(),T.Wb(),T.Wb(),T.Wb(),T.Xb(49,"mat-tab",17),T.Xb(50,"form",2),T.Xb(51,"mat-dialog-content",3),T.Xb(52,"div",15),T.Xb(53,"mat-checkbox",16),T.Oc(54,"Agrupar productos identicos"),T.Wb(),T.Wb(),T.Xb(55,"div",15),T.Xb(56,"mat-checkbox",16),T.Oc(57,"Forzar login al cerrar caja"),T.Wb(),T.Wb(),T.Xb(58,"div",15),T.Xb(59,"mat-checkbox",16),T.Oc(60,"Puede editar Precio Unitario"),T.Wb(),T.Wb(),T.Xb(61,"div",15),T.Xb(62,"mat-checkbox",16),T.Oc(63,"Puede editar Cantidades"),T.Wb(),T.Wb(),T.Xb(64,"div",15),T.Xb(65,"mat-checkbox",16),T.Oc(66,"Permitir cantidades negativas"),T.Wb(),T.Wb(),T.Wb(),T.Wb(),T.Wb(),T.Wb(),T.Xb(67,"mat-dialog-content",3),T.Xb(68,"div",18),T.Sb(69,"span",19),T.Xb(70,"div",18),T.Xb(71,"button",20),T.fc("click",function(){return t.submit()}),T.Xb(72,"mat-icon"),T.Oc(73,"save"),T.Wb(),T.Oc(74),T.kc(75,"translate"),T.Wb(),T.Wb(),T.Xb(76,"button",21),T.fc("click",function(){return t.dialogRef.close(!1)}),T.Xb(77,"mat-icon"),T.Oc(78,"cancel"),T.Wb(),T.Oc(79),T.kc(80,"translate"),T.Wb(),T.Wb(),T.Wb()),2&e&&(T.Eb(1),T.Pc(t.data.title),T.Eb(3),T.pc("formGroup",t.itemForm),T.Eb(4),T.qc("placeholder",T.lc(9,37,"Numero de PV")),T.pc("formControl",t.itemForm.controls.idsucursal),T.Eb(5),T.Pc(T.lc(14,39,"sucursal")),T.Eb(2),T.pc("formControl",t.itemForm.controls.idsucursal),T.Eb(1),T.pc("ngForOf",t.listaDeSucursales),T.Eb(3),T.qc("placeholder",T.lc(20,41,"POINTOFSALESETTINGSPOPUP.DESCRIPTION")),T.pc("formControl",t.itemForm.controls.sdescripcion),T.Eb(4),T.qc("placeholder",T.lc(24,43,"POINTOFSALESETTINGSPOPUP.POSCAEANUMBER")),T.pc("formControl",t.itemForm.controls.idpvcaea),T.Eb(5),T.Pc(T.lc(29,45,"Tipo de Facturaci\xf3n")),T.Eb(2),T.pc("formControl",t.itemForm.controls.itipo),T.Eb(1),T.pc("ngForOf",t.tipoFacturacion),T.Eb(3),T.qc("placeholder",T.lc(35,47,"Tope de Descuento")),T.pc("formControl",t.itemForm.controls.rtopedescuento),T.Eb(3),T.pc("formControl",t.itemForm.controls.bactivo),T.Eb(1),T.Pc(T.lc(39,49,"POINTOFSALESETTINGSPOPUP.ACTIVE")),T.Eb(3),T.pc("formControl",t.itemForm.controls.busarpantallaalcliente)("checked",t.itemForm2.controls.busarpantallaalcliente),T.Eb(3),T.pc("formControl",t.itemForm.controls.busarventaypreventaremota)("checked",t.itemForm2.controls.busarventaypreventaremota),T.Eb(3),T.pc("formControl",t.itemForm.controls.busarverificadordeprecios)("checked",t.itemForm2.controls.busarverificadordeprecios),T.Eb(3),T.pc("formGroup",t.itemForm2),T.Eb(3),T.pc("formControl",t.itemForm2.controls.bagruparproductosidenticos)("checked",t.itemForm2.controls.bagruparproductosidenticos),T.Eb(3),T.pc("formControl",t.itemForm2.controls.bforzarloginalcerrarcaja)("checked",t.itemForm2.controls.bforzarloginalcerrarcaja.value),T.Eb(3),T.pc("formControl",t.itemForm2.controls.bpuedeeditarpreciounitario)("checked",t.itemForm2.controls.bpuedeeditarpreciounitario),T.Eb(3),T.pc("formControl",t.itemForm2.controls.bpuedeeditarcantidad)("checked",t.itemForm2.controls.bpuedeeditarcantidad),T.Eb(3),T.pc("formControl",t.itemForm2.controls.bpermitecantidadesnegativas)("checked",t.itemForm2.controls.bpermitecantidadesnegativas),T.Eb(9),T.Pc(T.lc(75,51,"POINTOFSALESETTINGSPOPUP.SAVE")),T.Eb(5),T.Pc(T.lc(80,53,"POINTOFSALESETTINGSPOPUP.CANCEL")))},directives:[b.h,h.b,h.a,c.w,c.p,c.i,b.e,I.c,I.a,y.c,p.b,c.c,c.o,c.f,y.f,u.a,a.n,m.a,C.a,n.b,d.a,w.n],pipes:[g.c],styles:[""],data:{animation:[E.a]}}),e})();var U=o("AytR"),A=o("IheW");let D=(()=>{class e{constructor(e){this.http=e}obtenerDatos(e,t,o,a){return this.http.get(encodeURI(`${U.a.apiURL}PuntosVenta?filter={"where":${e},"limit":${t},"skip":${o},"order":"${a}"}`))}obtenerCount(e){return this.http.get(encodeURI(`${U.a.apiURL}PuntosVenta/count?where=${e}`))}actualizarPuntoDeVenta(e){return this.http.put(`${U.a.apiURL}PuntosVenta/${e.id}`,e)}agregarPuntoDeVenta(e){return this.http.post(U.a.apiURL+"PuntosVenta",e)}obtenerSucursales(){return this.http.get(encodeURI(U.a.apiURL+"Sucursales?"))}obtenerParametros(){return this.http.get(encodeURI(U.a.apiURL+"Parametros?"))}obtenerClientes(){return this.http.get(encodeURI(U.a.apiURL+"Clientes?"))}}return e.\u0275fac=function(t){return new(t||e)(T.bc(A.c))},e.\u0275prov=T.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function j(e,t){if(1&e){const e=T.Yb();T.Xb(0,"button",12),T.fc("click",function(t){T.Dc(e);const o=T.jc(),a=T.Ac(10);return o.updateFilter(t)&&(a.value="")}),T.Xb(1,"mat-icon"),T.Oc(2,"close"),T.Wb(),T.Wb()}}function L(e,t){if(1&e&&T.Oc(0),2&e){const e=t.row;T.Qc(" ",null==e?null:e.sdescripcion," ")}}function V(e,t){if(1&e){const e=T.Yb();T.Xb(0,"button",13),T.fc("click",function(){T.Dc(e);const o=t.row;return T.jc().openPopUp(o)}),T.Xb(1,"mat-icon"),T.Oc(2,"edit"),T.Wb(),T.Wb(),T.Xb(3,"button",13),T.fc("click",function(){T.Dc(e);const o=t.row;return T.jc().openUserInfoPopUp(o)}),T.Xb(4,"mat-icon"),T.Oc(5,"person_pin"),T.Wb(),T.Wb()}}const G=function(){return{y:"50px",delay:"300ms"}},M=function(e){return{value:"*",params:e}},$=[{path:"",component:(()=>{class e{constructor(e,t,o,a,i,r){this.servicioPuntoDeVenta=e,this.dialog=t,this.snack=o,this.confirmService=a,this.loader=i,this.servicioUUID=r,this.timeOutDuration=800,this.rows=[],this.order="sdescripcion ASC",this.search="",this.page={count:0,offset:0,limit:10}}ngOnInit(){this.prepararFiltro(),this.refresh(),this.servicioPuntoDeVenta.obtenerSucursales().subscribe(e=>{this.sucursales=e}),this.servicioPuntoDeVenta.obtenerParametros().subscribe(e=>{this.parametros=e}),this.servicioPuntoDeVenta.obtenerClientes().subscribe(e=>{this.clientes=e,console.log(e)})}prepararFiltro(){if(this.search){this.filter='{"and":[';var e=this.search.split(" ");e.length>0&&(e.forEach((e,t)=>{e.length>1&&(this.filter+=`{"or":[{"sdescripcion":{"ilike":"%${e}%"}}]}`,t<this.search.length-1&&(this.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}refresh(){this.prepararFiltro(),Object(k.a)([this.servicioPuntoDeVenta.obtenerCount(this.filter),this.servicioPuntoDeVenta.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(e=>{this.page.count=e[0].count,this.rows=e[1]},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(e){this.page.offset=e.offset,this.refresh()}updateFilter(e){return this.search=e instanceof MouseEvent?"":e.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(e){const t=e.sorts[0];this.order=`${t.prop} ${t.dir.toUpperCase()}`,this.refresh()}openPopUp(e={},t){this.dialog.open(N,{width:"720px",disableClose:!0,data:{title:t?"AGREGAR PUNTO DE VENTA":"ACTUALIZAR PUNTO DE VENTA",payload:e,sucursales:this.sucursales,parametros:this.parametros,clientes:this.clientes}}).afterClosed().subscribe(e=>{e&&(console.log("resultado"),console.log(e))})}deleteItem(e){this.confirmService.confirm({message:`\xbfEliminar ${e.sfamilia}?`}).subscribe(t=>{if(t){this.loader.open();var o={};Object.assign(o,e),delete o.soperadorcreacion,delete o.fcreacion,delete o.soperadormodificacion,delete o.fmodificacion,delete o.insertedon,delete o.updatedon,o.deletedon=(new Date).toISOString(),this.servicioPuntoDeVenta.actualizarPuntoDeVenta(o).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Familia Eliminada!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}openUserInfoPopUp(e={}){this.dialog.open(S.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:e}})}}return e.\u0275fac=function(t){return new(t||e)(T.Rb(D),T.Rb(b.b),T.Rb(f.a),T.Rb(W.a),T.Rb(F.a),T.Rb(X.a))},e.\u0275cmp=T.Lb({type:e,selectors:[["app-point-of-sale-settings"]],decls:22,vars:30,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","sdescripcion",3,"name","flexGrow"],["ngx-datatable-cell-template",""],[3,"name","flexGrow"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"]],template:function(e,t){if(1&e&&(T.Xb(0,"div",0),T.Xb(1,"button",1),T.fc("click",function(){return t.openPopUp({},!0)}),T.Xb(2,"mat-icon"),T.Oc(3,"library_add"),T.Wb(),T.Oc(4),T.kc(5,"translate"),T.Wb(),T.Wb(),T.Xb(6,"mat-form-field",2),T.Xb(7,"mat-icon",3),T.Oc(8,"search"),T.Wb(),T.Xb(9,"input",4,5),T.fc("keyup",function(e){return t.updateFilter(e)}),T.kc(11,"translate"),T.Wb(),T.Mc(12,j,3,0,"button",6),T.Wb(),T.Xb(13,"mat-card",7),T.Xb(14,"mat-card-content",7),T.Xb(15,"ngx-datatable",8),T.fc("page",function(e){return t.pageCallback(e)})("sort",function(e){return t.onSort(e)}),T.Xb(16,"ngx-datatable-column",9),T.kc(17,"translate"),T.Mc(18,L,1,1,"ng-template",10),T.Wb(),T.Xb(19,"ngx-datatable-column",11),T.kc(20,"translate"),T.Mc(21,V,6,0,"ng-template",10),T.Wb(),T.Wb(),T.Wb(),T.Wb()),2&e){const e=T.Ac(10);T.Eb(4),T.Qc("",T.lc(5,19,"POINTOFSALESETTINGS.ADDPOINTOFSALE")," "),T.Eb(5),T.qc("placeholder",T.lc(11,21,"POINTOFSALESETTINGS.FILTER")),T.Eb(3),T.pc("ngIf",e.value),T.Eb(1),T.pc("@animate",T.vc(28,M,T.uc(27,G))),T.Eb(2),T.pc("rows",t.rows)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit)("externalPaging",!0)("selectionType","single"),T.Eb(1),T.qc("name",T.lc(17,23,"POINTOFSALESETTINGS.POINTOFSALE")),T.pc("flexGrow",1),T.Eb(3),T.qc("name",T.lc(20,25,"POINTOFSALESETTINGS.ACTIONS")),T.pc("flexGrow",1)}},directives:[n.b,d.a,y.c,y.g,p.b,a.o,s.a,s.b,O.d,O.b,O.a,y.h],pipes:[g.c],styles:[""],data:{animation:[E.a]}}),e})(),data:{title:"PUNTO DE VENTA"}}];var z=o("TN/R"),q=o("40+f"),H=o("SqCe"),J=o("rJgo"),Q=o("BTe0"),Y=o("zQhy"),Z=o("aYsj"),K=o("hrfs"),B=o("pYyI");let _=(()=>{class e{}return e.\u0275mod=T.Pb({type:e}),e.\u0275inj=T.Ob({factory:function(t){return new(t||e)},imports:[[a.c,c.t,r.a,O.f,p.c,p.c,s.c,p.c,n.c,l.a,p.c,v.b,b.f,f.b,m.b,h.c,u.b,d.b,g.b,P.a,z.g,c.j,H.b,J.c,q.b,C.b,Y.c,Q.b,K.a,B.a,Z.a,i.k.forChild($)]]}),e})()}}]);