(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{GmJt:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var r=o("GS7A");const i=Object(r.g)([Object(r.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(r.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(r.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),c=[Object(r.n)("animate",[Object(r.m)("void => *",[Object(r.o)(i)])]),Object(r.n)("fadeInOut",[Object(r.k)("0",Object(r.l)({opacity:0,display:"none"})),Object(r.k)("1",Object(r.l)({opacity:1,display:"block"})),Object(r.m)("0 => 1",Object(r.e)("300ms")),Object(r.m)("1 => 0",Object(r.e)("300ms"))])]},TZLx:function(e,t,o){"use strict";o.r(t),o.d(t,"ProviderModule",function(){return K});var r=o("SVse"),i=o("GmJt"),c=o("3kSh"),a=o("3sEA"),n=o("vpPe"),s=o("Ap+n"),l=o("s7LF"),b=o("iELJ"),d=o("AytR"),m=o("8Y7J"),p=o("IheW");let u=(()=>{class e{constructor(e){this.http=e}obtenerDatos(e,t,o){return this.http.get(encodeURI(`${d.a.apiURL}Proveedores?filter={"where":${e},"limit":${t},"skip":${o},"order":"srazonsocial ASC"}`))}obtenerProveedores(){return this.http.get(encodeURI(d.a.apiURL+'Proveedores?filter={"where":{"deletedon":{"eq":null}}}'))}actualizarProveedor(e){return this.http.put(`${d.a.apiURL}Proveedores/${e.id}`,e)}agregarProveedor(e){return this.http.post(d.a.apiURL+"Proveedores",e)}}return e.\u0275fac=function(t){return new(t||e)(m.bc(p.c))},e.\u0275prov=m.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var O=o("VDRc"),f=o("Q2Ze"),h=o("e6WT"),P=o("ZTz/"),E=o("jMqV"),v=o("Dxy4"),R=o("Tj54"),g=o("UhP/"),C=o("TSSN");function I(e,t){if(1&e&&(m.Xb(0,"mat-option",23),m.Oc(1),m.Wb()),2&e){const e=t.$implicit;m.pc("value",e),m.Eb(1),m.Qc(" ",e," ")}}let N=(()=>{class e{constructor(e,t,o,r){this.data=e,this.dialogRef=t,this.fb=o,this.servicioClientes=r,this.condicionesDeIVA=["Responsable Inscripto","Consumidor Final","Eventual","Excento","Monotributista"]}ngOnInit(){this.buildItemForm(this.data.payload)}buildItemForm(e){this.itemForm=this.fb.group({id:[e.id||""],idempresa:[e.idempresa||""],scodproveedor:[e.scodproveedor||"",l.u.required],srazonsocial:[e.srazonsocial||"",l.u.required],sdomicilio:[e.sdomicilio||"",l.u.required],slocalidad:[e.slocalidad||""],sprovincia:[e.sprovincia||""],spais:[e.spais||""],scondicioniva:[e.scondicioniva||"Consumidor Final"],scuit:[e.scuit||""],sobservacion:[e.sobservacion||""],bdeproductos:["T"==e.bdeproductos||!1],bdeservicios:["T"==e.bdeservicios||!1],bactivo:[!e.hasOwnProperty("bactivo")||"T"==e.bactivo]})}submit(){this.dialogRef.close(this.itemForm.value)}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(b.a),m.Rb(b.f),m.Rb(l.d),m.Rb(u))},e.\u0275cmp=m.Lb({type:e,selectors:[["app-provider-popup"]],decls:68,vars:58,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","scodproveedor",3,"formControl","placeholder"],["matInput","","name","srazonsocial",3,"formControl","placeholder"],["matInput","","name","sdomicilio",3,"formControl","placeholder"],["matInput","","name","slocalidad",3,"formControl","placeholder"],["matInput","","name","sprovincia",3,"formControl","placeholder"],["matInput","","name","spais",3,"formControl","placeholder"],["appearance","fill"],["name","scondicioniva",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","scuit",3,"formControl","placeholder"],["matInput","","name","sobservacion",3,"formControl","placeholder"],["name","bdeproductos",3,"formControl"],["name","bdeservicios",3,"formControl"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(e,t){1&e&&(m.Xb(0,"h1",0),m.Oc(1),m.Wb(),m.Xb(2,"form",1),m.fc("ngSubmit",function(){return t.submit()}),m.Xb(3,"mat-dialog-content",2),m.Xb(4,"div",3),m.Xb(5,"mat-form-field",4),m.Sb(6,"input",5),m.kc(7,"translate"),m.Wb(),m.Wb(),m.Xb(8,"div",3),m.Xb(9,"mat-form-field",4),m.Sb(10,"input",6),m.kc(11,"translate"),m.Wb(),m.Wb(),m.Xb(12,"div",3),m.Xb(13,"mat-form-field",4),m.Sb(14,"input",7),m.kc(15,"translate"),m.Wb(),m.Wb(),m.Xb(16,"div",3),m.Xb(17,"mat-form-field",4),m.Sb(18,"input",8),m.kc(19,"translate"),m.Wb(),m.Wb(),m.Xb(20,"div",3),m.Xb(21,"mat-form-field",4),m.Sb(22,"input",9),m.kc(23,"translate"),m.Wb(),m.Wb(),m.Xb(24,"div",3),m.Xb(25,"mat-form-field",4),m.Sb(26,"input",10),m.kc(27,"translate"),m.Wb(),m.Wb(),m.Xb(28,"div",3),m.Xb(29,"mat-form-field",11),m.Xb(30,"mat-label"),m.Oc(31),m.kc(32,"translate"),m.Wb(),m.Xb(33,"mat-select",12),m.Mc(34,I,2,2,"mat-option",13),m.Wb(),m.Wb(),m.Wb(),m.Xb(35,"div",3),m.Xb(36,"mat-form-field",4),m.Sb(37,"input",14),m.kc(38,"translate"),m.Wb(),m.Wb(),m.Xb(39,"div",3),m.Xb(40,"mat-form-field",4),m.Sb(41,"input",15),m.kc(42,"translate"),m.Wb(),m.Wb(),m.Xb(43,"div",3),m.Xb(44,"mat-slide-toggle",16),m.Oc(45),m.kc(46,"translate"),m.Wb(),m.Wb(),m.Xb(47,"div",3),m.Xb(48,"mat-slide-toggle",17),m.Oc(49),m.kc(50,"translate"),m.Wb(),m.Wb(),m.Xb(51,"div",3),m.Xb(52,"mat-slide-toggle",18),m.Oc(53),m.kc(54,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Xb(55,"mat-dialog-content",2),m.Xb(56,"div",19),m.Xb(57,"button",20),m.Xb(58,"mat-icon"),m.Oc(59,"save"),m.Wb(),m.Oc(60),m.kc(61,"translate"),m.Wb(),m.Sb(62,"span",21),m.Xb(63,"button",22),m.fc("click",function(){return t.dialogRef.close(!1)}),m.Xb(64,"mat-icon"),m.Oc(65,"cancel"),m.Wb(),m.Oc(66),m.kc(67,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Wb()),2&e&&(m.Eb(1),m.Pc(t.data.title),m.Eb(1),m.pc("formGroup",t.itemForm),m.Eb(4),m.qc("placeholder",m.lc(7,30,"PROVIDERPOPUPCOMPONENT.CODE")),m.pc("formControl",t.itemForm.controls.scodproveedor),m.Eb(4),m.qc("placeholder",m.lc(11,32,"PROVIDERPOPUPCOMPONENT.BUSINESSNAME")),m.pc("formControl",t.itemForm.controls.srazonsocial),m.Eb(4),m.qc("placeholder",m.lc(15,34,"PROVIDERPOPUPCOMPONENT.ADDRESS")),m.pc("formControl",t.itemForm.controls.sdomicilio),m.Eb(4),m.qc("placeholder",m.lc(19,36,"PROVIDERPOPUPCOMPONENT.LOCATION")),m.pc("formControl",t.itemForm.controls.slocalidad),m.Eb(4),m.qc("placeholder",m.lc(23,38,"PROVIDERPOPUPCOMPONENT.PROVINCE")),m.pc("formControl",t.itemForm.controls.sprovincia),m.Eb(4),m.qc("placeholder",m.lc(27,40,"PROVIDERPOPUPCOMPONENT.COUNTRY")),m.pc("formControl",t.itemForm.controls.spais),m.Eb(5),m.Pc(m.lc(32,42,"PROVIDERPOPUPCOMPONENT.FISCALCONDITION")),m.Eb(2),m.pc("formControl",t.itemForm.controls.scondicioniva),m.Eb(1),m.pc("ngForOf",t.condicionesDeIVA),m.Eb(3),m.qc("placeholder",m.lc(38,44,"PROVIDERPOPUPCOMPONENT.CUIT")),m.pc("formControl",t.itemForm.controls.scuit),m.Eb(4),m.qc("placeholder",m.lc(42,46,"PROVIDERPOPUPCOMPONENT.OBSERVATION")),m.pc("formControl",t.itemForm.controls.sobservacion),m.Eb(3),m.pc("formControl",t.itemForm.controls.bdeproductos),m.Eb(1),m.Qc(" ",m.lc(46,48,"PROVIDERPOPUPCOMPONENT.OFPRODUCTS"),""),m.Eb(3),m.pc("formControl",t.itemForm.controls.bdeservicios),m.Eb(1),m.Qc(" ",m.lc(50,50,"PROVIDERPOPUPCOMPONENT.OFSERVICES"),""),m.Eb(3),m.pc("formControl",t.itemForm.controls.bactivo),m.Eb(1),m.Pc(m.lc(54,52,"PROVIDERPOPUPCOMPONENT.ACTIVE")),m.Eb(4),m.pc("disabled",t.itemForm.invalid),m.Eb(3),m.Pc(m.lc(61,54,"PROVIDERPOPUPCOMPONENT.SAVE")),m.Eb(6),m.Pc(m.lc(67,56,"PROVIDERPOPUPCOMPONENT.CANCEL")))},directives:[b.g,l.v,l.o,l.i,b.d,O.c,O.a,f.c,h.b,l.c,l.n,l.f,f.f,P.a,r.n,E.a,v.b,R.a,g.n],pipes:[C.c],styles:[""],data:{animation:[i.a]}}),e})();var W=o("zHaW"),D=o("PDjf"),X=o("w9WL");function k(e,t){if(1&e&&m.Oc(0),2&e){const e=t.row;m.Qc(" ",null==e?null:e.scodproveedor," ")}}function T(e,t){if(1&e&&m.Oc(0),2&e){const e=t.row;m.Qc(" ",null==e?null:e.srazonsocial," ")}}function w(e,t){if(1&e&&m.Oc(0),2&e){const e=t.row;m.Qc(" ",null==e?null:e.sdomicilio," ")}}function S(e,t){if(1&e&&m.Oc(0),2&e){const e=t.row;m.Qc(" ",null==e?null:e.scuit," ")}}function M(e,t){if(1&e&&m.Oc(0),2&e){const e=t.row;m.Qc(" ",null==e?null:e.scondicioniva," ")}}function F(e,t){if(1&e&&m.Oc(0),2&e){const e=t.row,o=m.jc();m.Qc(" ",o.convertirComoSi(null==e?null:e.bdeproductos)," ")}}function U(e,t){if(1&e&&m.Oc(0),2&e){const e=t.row,o=m.jc();m.Qc(" ",o.convertirComoSi(null==e?null:e.bdeservicios)," ")}}function V(e,t){if(1&e&&m.Oc(0),2&e){const e=t.row,o=m.jc();m.Qc(" ",o.convertirComoSi(null==e?null:e.bactivo)," ")}}function y(e,t){if(1&e){const e=m.Yb();m.Xb(0,"button",9),m.fc("click",function(){m.Dc(e);const o=t.row;return m.jc().openPopUp(o)}),m.Xb(1,"mat-icon"),m.Oc(2,"edit"),m.Wb(),m.Wb(),m.Xb(3,"button",10),m.fc("click",function(){m.Dc(e);const o=t.row;return m.jc().deleteItem(o)}),m.Xb(4,"mat-icon"),m.Oc(5,"delete"),m.Wb(),m.Wb(),m.Xb(6,"button",9),m.fc("click",function(){m.Dc(e);const o=t.row;return m.jc().openUserInfoPopUp(o)}),m.Xb(7,"mat-icon"),m.Oc(8,"person_pin"),m.Wb(),m.Wb()}}const x=function(){return{y:"50px",delay:"300ms"}},A=function(e){return{value:"*",params:e}},j=[{path:"",component:(()=>{class e{constructor(e,t,o,r,i,c){this.servicioProveedores=e,this.dialog=t,this.snack=o,this.confirmService=r,this.loader=i,this.servicioUUID=c,this.timeOutDuration=800,this.rows=[],this.margenDeGanancia=function(e,t){var o=this.getMargen(e,t).toFixed(2);return o!=1/0?o:0},this.getMargen=function(e,t){return 0==e&&(e=t),100*(t/e-1)||0},this.search="",this.page={count:0,offset:0,limit:10},this.proveedores=[],this.empresas=[]}getProveedor(e){var t=this.proveedores.find(t=>t.id==e);return t?t.srazonsocial:""}ngOnInit(){this.loader.open(),this.servicioProveedores.obtenerProveedores().subscribe(e=>{this.proveedores=e,this.proveedores.sort((e,t)=>e.srazonsocial>t.srazonsocial?1:e.srazonsocial<t.srazonsocial?-1:0),this.loader.close()},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})}),this.prepararFiltro(),this.refresh()}convertirComoSi(e){return"T"==e?"Si":"No"}prepararFiltro(){if(this.search){this.filter='{"and":[';var e=this.search.split(" ");e.length>0&&(e.forEach((e,t)=>{e.length>1&&(this.filter+=`{"or":[{"sean":"${e}"},{"scodproveedor":"${e}"},{"srazonsocial":{"ilike":"%${e}%"}}]}`,t<this.search.length-1&&(this.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}refresh(){this.prepararFiltro(),this.servicioProveedores.obtenerDatos(this.filter,this.page.limit,this.page.offset).subscribe(e=>{this.page.count=50,this.rows=e},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(e){this.page.offset=e.offset*e.pageSize,this.refresh()}updateFilter(e){this.search=e.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration)}openPopUp(e={},t){this.dialog.open(N,{width:"720px",disableClose:!0,data:{title:t?"AGREGAR PROVEEDOR":"ACTUALIZAR PROVEEDOR",payload:e,proveedores:this.proveedores}}).afterClosed().subscribe(e=>{if(e){this.loader.open();var o={};Object.assign(o,e),o.bactivo=e.bactivo?"T":"F",o.bdeproductos=e.bdeproductos?"T":"F",o.bdeservicios=e.bdeservicios?"T":"F",t?(o.id=this.servicioUUID.generateUUID(),this.servicioProveedores.agregarProveedor(o).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Proveedor Agregado!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioProveedores.actualizarProveedor(o).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Proveedor Actualizado!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(e){this.confirmService.confirm({message:`\xbfEliminar ${e.srazonsocial}?`}).subscribe(t=>{if(t){this.loader.open();var o={};Object.assign(o,e),delete o.soperadorcreacion,delete o.fcreacion,delete o.soperadormodificacion,delete o.fmodificacion,delete o.insertedon,delete o.updatedon,o.deletedon=(new Date).toISOString(),this.servicioProveedores.actualizarProveedor(o).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Proveedor Eliminado!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}openUserInfoPopUp(e={}){this.dialog.open(s.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:e}})}}return e.\u0275fac=function(t){return new(t||e)(m.Rb(u),m.Rb(b.b),m.Rb(W.a),m.Rb(c.a),m.Rb(a.a),m.Rb(n.a))},e.\u0275cmp=m.Lb({type:e,selectors:[["app-provider"]],decls:41,vars:57,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page"],[3,"name","width"],["ngx-datatable-cell-template",""],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(e,t){1&e&&(m.Xb(0,"div",0),m.Xb(1,"button",1),m.fc("click",function(){return t.openPopUp({},!0)}),m.Xb(2,"mat-icon"),m.Oc(3,"library_add"),m.Wb(),m.Oc(4),m.kc(5,"translate"),m.Wb(),m.Wb(),m.Xb(6,"mat-form-field",2),m.Xb(7,"mat-icon",3),m.Oc(8,"search"),m.Wb(),m.Xb(9,"input",4),m.fc("keyup",function(e){return t.updateFilter(e)}),m.kc(10,"translate"),m.Wb(),m.Wb(),m.Xb(11,"mat-card",5),m.Xb(12,"mat-card-content",5),m.Xb(13,"ngx-datatable",6),m.fc("page",function(e){return t.pageCallback(e)}),m.Xb(14,"ngx-datatable-column",7),m.kc(15,"translate"),m.Mc(16,k,1,1,"ng-template",8),m.Wb(),m.Xb(17,"ngx-datatable-column",7),m.kc(18,"translate"),m.Mc(19,T,1,1,"ng-template",8),m.Wb(),m.Xb(20,"ngx-datatable-column",7),m.kc(21,"translate"),m.Mc(22,w,1,1,"ng-template",8),m.Wb(),m.Xb(23,"ngx-datatable-column",7),m.kc(24,"translate"),m.Mc(25,S,1,1,"ng-template",8),m.Wb(),m.Xb(26,"ngx-datatable-column",7),m.kc(27,"translate"),m.Mc(28,M,1,1,"ng-template",8),m.Wb(),m.Xb(29,"ngx-datatable-column",7),m.kc(30,"translate"),m.Mc(31,F,1,1,"ng-template",8),m.Wb(),m.Xb(32,"ngx-datatable-column",7),m.kc(33,"translate"),m.Mc(34,U,1,1,"ng-template",8),m.Wb(),m.Xb(35,"ngx-datatable-column",7),m.kc(36,"translate"),m.Mc(37,V,1,1,"ng-template",8),m.Wb(),m.Xb(38,"ngx-datatable-column",7),m.kc(39,"translate"),m.Mc(40,y,9,0,"ng-template",8),m.Wb(),m.Wb(),m.Wb(),m.Wb()),2&e&&(m.Eb(4),m.Pc(m.lc(5,32,"PROVIDERCOMPONENT.ADDPROVIDER")),m.Eb(5),m.qc("placeholder",m.lc(10,34,"PROVIDERCOMPONENT.FILTER")),m.Eb(2),m.pc("@animate",m.vc(55,A,m.uc(54,x))),m.Eb(2),m.pc("rows",t.rows)("columnMode","standard")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit)("externalPaging",!0)("selectionType","single"),m.Eb(1),m.qc("name",m.lc(15,36,"PROVIDERCOMPONENT.CODE")),m.pc("width",150),m.Eb(3),m.qc("name",m.lc(18,38,"PROVIDERCOMPONENT.BUSINESSNAME")),m.pc("width",325),m.Eb(3),m.qc("name",m.lc(21,40,"PROVIDERCOMPONENT.ADDRESS")),m.pc("width",325),m.Eb(3),m.qc("name",m.lc(24,42,"PROVIDERCOMPONENT.CUIT")),m.pc("width",150),m.Eb(3),m.qc("name",m.lc(27,44,"PROVIDERCOMPONENT.FISCALCONDITION")),m.pc("width",200),m.Eb(3),m.qc("name",m.lc(30,46,"PROVIDERCOMPONENT.OFPRODUCTS")),m.pc("width",150),m.Eb(3),m.qc("name",m.lc(33,48,"PROVIDERCOMPONENT.OFSERVICES")),m.pc("width",150),m.Eb(3),m.qc("name",m.lc(36,50,"PROVIDERCOMPONENT.ACTIVE")),m.pc("width",150),m.Eb(3),m.qc("name",m.lc(39,52,"PROVIDERCOMPONENT.ACTIONS")),m.pc("width",150))},directives:[v.b,R.a,f.c,f.g,h.b,D.a,D.b,X.d,X.b,X.a],pipes:[C.c],styles:[""],data:{animation:[i.a]}}),e})(),data:{title:"PROVEEDORES"}}];var q=o("iInd"),z=o("u9T3"),L=o("f44v"),Q=o("ZFy/"),$=o("M9ds"),H=o("PCNd"),G=o("BxcV");let K=(()=>{class e{}return e.\u0275mod=m.Pb({type:e}),e.\u0275inj=m.Ob({factory:function(t){return new(t||e)},providers:[u],imports:[[r.c,l.s,z.a,X.f,h.c,h.c,D.c,h.c,v.c,L.a,h.c,Q.b,b.e,W.b,E.b,$.c,P.b,R.b,C.b,H.a,G.a,q.k.forChild(j)]]}),e})()}}]);