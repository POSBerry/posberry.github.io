(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{GmJt:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var o=i("GS7A");const r=Object(o.g)([Object(o.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(o.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(o.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),a=[Object(o.n)("animate",[Object(o.m)("void => *",[Object(o.o)(r)])]),Object(o.n)("fadeInOut",[Object(o.k)("0",Object(o.l)({opacity:0,display:"none"})),Object(o.k)("1",Object(o.l)({opacity:1,display:"block"})),Object(o.m)("0 => 1",Object(o.e)("300ms")),Object(o.m)("1 => 0",Object(o.e)("300ms"))])]},ffTE:function(t,e,i){"use strict";i.r(e),i.d(e,"GiftcardTypesModule",function(){return B});var o=i("SVse"),r=i("GmJt"),a=i("3kSh"),c=i("3sEA"),n=i("vpPe"),s=i("GyhO"),l=i("cp0P"),b=i("IAdc"),d=i("7M/S"),p=i("Ap+n"),u=i("s7LF"),f=i("iELJ"),m=i("JX91"),h=i("lJxs"),g=i("8Y7J"),O=i("VDRc"),v=i("Q2Ze"),P=i("ZTz/"),E=i("e6WT"),I=i("jMqV"),W=i("Dxy4"),C=i("Tj54"),k=i("UhP/"),y=i("vrAh"),X=i("TSSN");function w(t,e){if(1&t&&(g.Xb(0,"mat-option",17),g.Oc(1),g.Wb()),2&t){const t=e.$implicit;g.pc("value",null==t?null:t.indice),g.Eb(1),g.Qc(" ",null==t?null:t.value," ")}}function F(t,e){if(1&t&&(g.Xb(0,"mat-option",17),g.Oc(1),g.Wb()),2&t){const t=e.$implicit;g.pc("value",t),g.Eb(1),g.Qc(" ",null==t?null:t.snombre," ")}}function R(t,e){if(1&t&&(g.Xb(0,"mat-form-field",18),g.Sb(1,"input",19),g.Xb(2,"mat-autocomplete",20,21),g.Mc(4,F,2,2,"mat-option",6),g.kc(5,"async"),g.Wb(),g.Wb()),2&t){const t=g.Ac(3),e=g.jc();g.Eb(1),g.pc("formControl",e.itemForm.controls.stipo)("matAutocomplete",t),g.Eb(1),g.pc("displayWith",e.displayFnProductos),g.Eb(2),g.pc("ngForOf",g.lc(5,4,e.filteredProductos))}}let j=(()=>{class t{constructor(t,e,i){this.data=t,this.dialogRef=e,this.fb=i,this.editorProducto=new u.e(""),this.listaDeTipos=[{value:"Monto",indice:"M"},{value:"Porcentaje",indice:"P"},{value:"Producto",indice:"I"}]}_filterProductos(t){if("string"==typeof t){const e=t.toLowerCase();return this.listaProductos.filter(t=>t.snombre.toLowerCase().includes(e))}return[]}displayFnProductos(t){return t&&t.snombre?t.snombre:""}ngOnInit(){this.listaProductos=this.data.productos,this.buildItemForm(this.data.payload),this.filteredProductos=this.editorProducto.valueChanges.pipe(Object(m.a)(""),Object(h.a)(t=>this._filterProductos(t)))}buildItemForm(t){this.itemForm=this.fb.group({id:[t.id||""],stipo:[t.stipo||""],rvalor:[t.rvalor||0],ipuntosfidelizacion:[t.ipuntosfidelizacion||0],idiasdevigencia:[t.idiasdevigencia||0],bactivo:[!t.hasOwnProperty("bactivo")||"T"==t.bactivo]})}submit(){this.dialogRef.close(this.itemForm.value)}}return t.\u0275fac=function(e){return new(e||t)(g.Rb(f.a),g.Rb(f.g),g.Rb(u.d))},t.\u0275cmp=g.Lb({type:t,selectors:[["app-giftcard-types-popup"]],decls:42,vars:31,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],["appearance","fill"],["name","stipo",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill","fxFlex","100",4,"ngIf"],[1,"full-width"],["matInput","","name","rvalor",3,"formControl","placeholder"],["matInput","","name","ipuntosfidelizacion",3,"formControl","placeholder"],["matInput","","name","idiasdevigencia",3,"formControl","placeholder"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"],["appearance","fill","fxFlex","100"],["type","text","placeholder","Producto","aria-label","Number","matInput","",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"]],template:function(t,e){1&t&&(g.Xb(0,"h1",0),g.Oc(1),g.Wb(),g.Xb(2,"form",1),g.fc("ngSubmit",function(){return e.submit()}),g.Xb(3,"mat-dialog-content",2),g.Xb(4,"div",3),g.Xb(5,"mat-form-field",4),g.Xb(6,"mat-label"),g.Oc(7),g.kc(8,"translate"),g.Wb(),g.Xb(9,"mat-select",5),g.Mc(10,w,2,2,"mat-option",6),g.Wb(),g.Wb(),g.Wb(),g.Xb(11,"section"),g.Mc(12,R,6,6,"mat-form-field",7),g.Wb(),g.Xb(13,"div",3),g.Xb(14,"mat-form-field",8),g.Sb(15,"input",9),g.kc(16,"translate"),g.Wb(),g.Wb(),g.Xb(17,"div",3),g.Xb(18,"mat-form-field",8),g.Sb(19,"input",10),g.kc(20,"translate"),g.Wb(),g.Wb(),g.Xb(21,"div",3),g.Xb(22,"mat-form-field",8),g.Sb(23,"input",11),g.kc(24,"translate"),g.Wb(),g.Wb(),g.Xb(25,"div",3),g.Xb(26,"mat-slide-toggle",12),g.Oc(27),g.kc(28,"translate"),g.Wb(),g.Wb(),g.Wb(),g.Xb(29,"mat-dialog-content",2),g.Xb(30,"div",13),g.Xb(31,"button",14),g.Xb(32,"mat-icon"),g.Oc(33,"save"),g.Wb(),g.Oc(34),g.kc(35,"translate"),g.Wb(),g.Sb(36,"span",15),g.Xb(37,"button",16),g.fc("click",function(){return e.dialogRef.close(!1)}),g.Xb(38,"mat-icon"),g.Oc(39,"cancel"),g.Wb(),g.Oc(40),g.kc(41,"translate"),g.Wb(),g.Wb(),g.Wb(),g.Wb()),2&t&&(g.Eb(1),g.Pc(e.data.title),g.Eb(1),g.pc("formGroup",e.itemForm),g.Eb(5),g.Pc(g.lc(8,17,"Lista de Precios")),g.Eb(2),g.pc("formControl",e.itemForm.controls.stipo),g.Eb(1),g.pc("ngForOf",e.listaDeTipos),g.Eb(2),g.pc("ngIf","I"==e.itemForm.controls.stipo.value),g.Eb(3),g.qc("placeholder",g.lc(16,19,"Monto $")),g.pc("formControl",e.itemForm.controls.rvalor),g.Eb(4),g.qc("placeholder",g.lc(20,21,"Puntos Fidelizacion")),g.pc("formControl",e.itemForm.controls.ipuntosfidelizacion),g.Eb(4),g.qc("placeholder",g.lc(24,23,"Dias de Vigencia")),g.pc("formControl",e.itemForm.controls.idiasdevigencia),g.Eb(3),g.pc("formControl",e.itemForm.controls.bactivo),g.Eb(1),g.Pc(g.lc(28,25,"CLIENTSPOPUPCOMPONENT.ACTIVE")),g.Eb(4),g.pc("disabled",e.itemForm.invalid),g.Eb(3),g.Pc(g.lc(35,27,"CLIENTSPOPUPCOMPONENT.SAVE")),g.Eb(6),g.Pc(g.lc(41,29,"CLIENTSPOPUPCOMPONENT.CANCEL")))},directives:[f.h,u.w,u.p,u.i,f.e,O.c,O.a,v.c,v.f,P.a,u.o,u.f,o.n,o.o,E.b,u.c,I.a,W.b,C.a,k.n,y.c,y.a],pipes:[X.c,o.b],styles:[""]}),t})();var A=i("AytR"),G=i("IheW");let T=(()=>{class t{constructor(t){this.http=t}obtenerDatos(){return this.http.get(encodeURI(A.a.apiURL+'TiposGiftCard?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerProductos(){return this.http.get(encodeURI(A.a.apiURL+'Productos?filter={"where":{"deletedon":{"eq":null}}}'))}actualizarGiftcard(t){return this.http.put(`${A.a.apiURL}TiposGiftCard/${t.id}`,t)}agregarGiftcard(t){return this.http.post(A.a.apiURL+"TiposGiftCard",t)}obtenerCount(t){return this.http.get(encodeURI(`${A.a.apiURL}TiposGiftCard/count?where=${t}`))}}return t.\u0275fac=function(e){return new(e||t)(g.bc(G.c))},t.\u0275prov=g.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var x=i("zHaW"),M=i("PDjf"),S=i("w9WL");function D(t,e){if(1&t){const t=g.Yb();g.Xb(0,"div",11),g.Xb(1,"button",12),g.fc("click",function(){return g.Dc(t),g.jc().openPopUp({},!0)}),g.Xb(2,"mat-icon"),g.Oc(3,"library_add"),g.Wb(),g.Oc(4),g.kc(5,"translate"),g.Wb(),g.Wb()}2&t&&(g.Eb(4),g.Qc("",g.lc(5,1,"Agregar Tipo de Giftcard")," "))}function U(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",13),g.fc("click",function(e){g.Dc(t);const i=g.jc(),o=g.Ac(5);return i.updateFilter(e)&&(o.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function L(t,e){if(1&t&&g.Oc(0),2&t){const t=e.row,i=g.jc();g.Qc(" ",i.mostrarDescripcionDePromocion(t)," ")}}function N(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",16),g.fc("click",function(){g.Dc(t);const e=g.jc().row;return g.jc().deleteItem(e)}),g.Xb(1,"mat-icon"),g.Oc(2,"delete"),g.Wb(),g.Wb()}}function z(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",14),g.fc("click",function(){g.Dc(t);const i=e.row;return g.jc().openPopUp(i)}),g.Xb(1,"mat-icon"),g.Oc(2,"edit"),g.Wb(),g.Wb(),g.Mc(3,N,3,0,"button",15),g.Xb(4,"button",14),g.fc("click",function(){g.Dc(t);const i=e.row;return g.jc().openUserInfoPopUp(i)}),g.Xb(5,"mat-icon"),g.Oc(6,"person_pin"),g.Wb(),g.Wb()}if(2&t){const t=g.jc();g.Eb(3),g.pc("ngIf",t.puedeEliminar)}}const $=function(){return{y:"50px",delay:"300ms"}},q=function(t){return{value:"*",params:t}},H=[{path:"",component:(()=>{class t{constructor(t,e,i,o,r,a,c){this.servicioGiftcards=t,this.dialog=e,this.snack=i,this.confirmService=o,this.loader=r,this.servicioUUID=a,this.servicioPermisos=c,this.timeOutDuration=800,this.rows=[],this.puedeAgregar=!1,this.puedeEliminar=!1,this.order="sfamilia ASC",this.search="",this.page={count:0,offset:0,limit:10}}ngOnInit(){this.servicioGiftcards.obtenerProductos().subscribe(t=>{this.productos=t}),Object(s.a)(this.servicioPermisos.puedeAgregar("Familias"),this.servicioPermisos.puedeEliminar("Familias")).pipe(Object(b.a)()).subscribe(t=>{this.puedeAgregar=t[0],this.puedeEliminar=t[1]}),this.prepararFiltro(),this.refresh()}prepararFiltro(){if(this.search){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&(t.forEach((t,e)=>{t.length>1&&(this.filter+=`{"or":[{"sfamilia":{"ilike":"%${t}%"}}]}`,e<this.search.length-1&&(this.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}refresh(){this.prepararFiltro(),Object(l.a)([this.servicioGiftcards.obtenerCount(this.filter),this.servicioGiftcards.obtenerDatos()]).subscribe(t=>{this.page.count=t[0].count,this.rows=t[1],console.log(t)},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}mostrarDescripcionDePromocion(t){switch(this.descripcion=t.ipuntosfidelizacion+"pts.",t.stipo){case"M":this.descripcion+=" Monto $"+t.rvalor+".";break;case"P":this.descripcion+=" Porcentaje "+t.rvalor+"%.";break;case"I":var e=this.productos.filter(e=>e.id==t.idproducto);this.descripcion+=e&&e[0]?' Producto "'+e[0].snombre+'" '+t.rvalor+"u.":" Producto (sin definir) "+t.rvalor+"u."}return this.descripcion}pageCallback(t){this.page.offset=t.offset,this.refresh()}updateFilter(t){return this.search=t instanceof MouseEvent?"":t.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(t){const e=t.sorts[0];this.order=`${e.prop} ${e.dir.toUpperCase()}`,this.refresh()}openPopUp(t={},e){this.dialog.open(j,{width:"720px",disableClose:!0,data:{title:e?"AGREGAR GIFTCARD":"ACTUALIZAR GIFTCARD",payload:t,productos:this.productos}}).afterClosed().subscribe(t=>{if(t){this.loader.open();var i={};Object.assign(i,t),i.bactivo=t.bactivo?"T":"F",i.bfavorito=t.bfavorito?"T":"F",e?(i.id=this.servicioUUID.generateUUID(),this.servicioGiftcards.agregarGiftcard(i).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Giftcard Agregada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioGiftcards.actualizarGiftcard(i).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Giftcard Actualizada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(t){this.confirmService.confirm({message:`\xbfEliminar ${t}?`}).subscribe(e=>{if(e){this.loader.open();var i={};Object.assign(i,t),delete i.soperadorcreacion,delete i.fcreacion,delete i.soperadormodificacion,delete i.fmodificacion,delete i.insertedon,delete i.updatedon,i.deletedon=(new Date).toISOString(),this.servicioGiftcards.actualizarGiftcard(i).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Giftcard Eliminada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}openUserInfoPopUp(t={}){this.dialog.open(p.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(g.Rb(T),g.Rb(f.b),g.Rb(x.a),g.Rb(a.a),g.Rb(c.a),g.Rb(n.a),g.Rb(d.a))},t.\u0275cmp=g.Lb({type:t,selectors:[["app-giftcard-types"]],decls:17,vars:29,consts:[["class","m-333",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","sort","page"],["prop","sfamilia",3,"name","flexGrow"],["ngx-datatable-cell-template",""],[3,"sortable","name","flexGrow"],[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(t,e){if(1&t&&(g.Mc(0,D,6,3,"div",0),g.Xb(1,"mat-form-field",1),g.Xb(2,"mat-icon",2),g.Oc(3,"search"),g.Wb(),g.Xb(4,"input",3,4),g.fc("keyup",function(t){return e.updateFilter(t)}),g.kc(6,"translate"),g.Wb(),g.Mc(7,U,3,0,"button",5),g.Wb(),g.Xb(8,"mat-card",6),g.Xb(9,"mat-card-content",6),g.Xb(10,"ngx-datatable",7),g.fc("sort",function(t){return e.onSort(t)})("page",function(t){return e.pageCallback(t)}),g.Xb(11,"ngx-datatable-column",8),g.kc(12,"translate"),g.Mc(13,L,1,1,"ng-template",9),g.Wb(),g.Xb(14,"ngx-datatable-column",10),g.kc(15,"translate"),g.Mc(16,z,7,1,"ng-template",9),g.Wb(),g.Wb(),g.Wb(),g.Wb()),2&t){const t=g.Ac(5);g.pc("ngIf",e.puedeAgregar),g.Eb(4),g.qc("placeholder",g.lc(6,20,"FAMILIESCOMPONENT.FILTER")),g.Eb(3),g.pc("ngIf",t.value),g.Eb(1),g.pc("@animate",g.vc(27,q,g.uc(26,$))),g.Eb(2),g.pc("rows",e.rows)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),g.Eb(1),g.qc("name",g.lc(12,22,"Giftcards")),g.pc("flexGrow",1),g.Eb(3),g.qc("name",g.lc(15,24,"FAMILIESCOMPONENT.ACTIONS")),g.pc("sortable",!1)("flexGrow",1)}},directives:[o.o,v.c,C.a,v.g,E.b,M.a,M.b,S.d,S.b,S.a,W.b,v.h],pipes:[X.c],styles:[""],data:{animation:[r.a]}}),t})(),data:{title:"FAMILIAS"}}];var J=i("iInd"),K=i("u9T3"),V=i("f44v"),Q=i("M9ds"),Y=i("ZFy/"),Z=i("PCNd"),_=i("BxcV");let B=(()=>{class t{}return t.\u0275mod=g.Pb({type:t}),t.\u0275inj=g.Ob({factory:function(e){return new(e||t)},imports:[[o.c,u.t,K.a,S.f,E.c,E.c,M.c,E.c,W.c,V.a,E.c,Y.b,f.f,x.b,I.b,Q.c,P.b,C.b,X.b,Z.a,_.a,y.b,J.k.forChild(H)]]}),t})()}}]);