(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{GmJt:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var i=o("GS7A");const c=Object(i.g)([Object(i.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(i.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(i.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),r=[Object(i.n)("animate",[Object(i.m)("void => *",[Object(i.o)(c)])]),Object(i.n)("fadeInOut",[Object(i.k)("0",Object(i.l)({opacity:0,display:"none"})),Object(i.k)("1",Object(i.l)({opacity:1,display:"block"})),Object(i.m)("0 => 1",Object(i.e)("300ms")),Object(i.m)("1 => 0",Object(i.e)("300ms"))])]},ffTE:function(t,e,o){"use strict";o.r(e),o.d(e,"GiftcardTypesModule",function(){return tt});var i=o("SVse"),c=o("GmJt"),r=o("3kSh"),a=o("3sEA"),n=o("vpPe"),s=o("GyhO"),l=o("cp0P"),b=o("IAdc"),d=o("7M/S"),u=o("Ap+n"),p=o("s7LF"),f=o("iELJ"),m=o("JX91"),h=o("lJxs"),g=o("8Y7J"),P=o("VDRc"),O=o("Q2Ze"),v=o("ZTz/"),I=o("e6WT"),E=o("vrAh"),T=o("jMqV"),F=o("Dxy4"),C=o("Tj54"),R=o("UhP/"),D=o("TSSN");function W(t,e){1&t&&(g.Xb(0,"h1",20),g.Oc(1),g.kc(2,"translate"),g.Wb()),2&t&&(g.Eb(1),g.Pc(g.lc(2,1,"GIFTCARDTYPESPOPUP.ADDGIFTCARDTYPES")))}function k(t,e){1&t&&(g.Xb(0,"h1",20),g.Oc(1),g.kc(2,"translate"),g.Wb()),2&t&&(g.Eb(1),g.Pc(g.lc(2,1,"GIFTCARDTYPESPOPUP.EDITGIFTCARDTYPES")))}function A(t,e){if(1&t&&(g.Xb(0,"mat-option",21),g.Oc(1),g.Wb()),2&t){const t=e.$implicit;g.pc("value",null==t?null:t.indice),g.Eb(1),g.Qc(" ",null==t?null:t.value," ")}}function y(t,e){if(1&t&&(g.Xb(0,"mat-option",21),g.Oc(1),g.Wb()),2&t){const t=e.$implicit;g.pc("value",t),g.Eb(1),g.Qc(" ",null==t?null:t.snombre," ")}}let G=(()=>{class t{constructor(t,e,o){this.data=t,this.dialogRef=e,this.fb=o,this.editorProducto=new p.e(""),this.listaDeTipos=[{value:"Monto",indice:"M"},{value:"Porcentaje",indice:"P"},{value:"Producto",indice:"I"}]}_filterProductos(t){if("string"==typeof t){const e=t.toLowerCase();return this.listaProductos.filter(t=>t.snombre.toLowerCase().includes(e))}return[]}displayFnProductos(t){return t&&t.snombre?t.snombre:""}ngOnInit(){this.listaProductos=this.data.productos,this.buildItemForm(this.data.payload),this.filteredProductos=this.editorProducto.valueChanges.pipe(Object(m.a)(""),Object(h.a)(t=>this._filterProductos(t)))}buildItemForm(t){this.itemForm=this.fb.group({id:[t.id||""],stipo:[t.stipo||""],rvalor:[t.rvalor||0],ipuntosfidelizacion:[t.ipuntosfidelizacion||0],idiasdevigencia:[t.idiasdevigencia||0],bactivo:[!t.hasOwnProperty("bactivo")||"T"==t.bactivo],idproducto:[this.data.productos.find(e=>e.id==t.idproducto)||null]}),console.log("Form"),console.log(this.itemForm)}submit(){this.dialogRef.close(this.itemForm.value)}}return t.\u0275fac=function(e){return new(e||t)(g.Rb(f.a),g.Rb(f.g),g.Rb(p.d))},t.\u0275cmp=g.Lb({type:t,selectors:[["app-giftcard-types-popup"]],decls:48,vars:41,consts:[["matDialogTitle","",4,"ngIf"],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],["appearance","fill"],["name","stipo",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["appearance","fill","fxFlex","100",3,"hidden"],["type","text","aria-label","Number","matInput","",3,"placeholder","formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[1,"full-width"],["matInput","","name","rvalor",3,"formControl","placeholder"],["matInput","","name","ipuntosfidelizacion",3,"formControl","placeholder"],["matInput","","name","idiasdevigencia",3,"formControl","placeholder"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],["matDialogTitle",""],[3,"value"]],template:function(t,e){if(1&t&&(g.Mc(0,W,3,3,"h1",0),g.Mc(1,k,3,3,"h1",0),g.Xb(2,"form",1),g.fc("ngSubmit",function(){return e.submit()}),g.Xb(3,"mat-dialog-content",2),g.Xb(4,"div",3),g.Xb(5,"mat-form-field",4),g.Xb(6,"mat-label"),g.Oc(7),g.kc(8,"translate"),g.Wb(),g.Xb(9,"mat-select",5),g.Mc(10,A,2,2,"mat-option",6),g.Wb(),g.Wb(),g.Wb(),g.Xb(11,"section"),g.Xb(12,"mat-form-field",7),g.Sb(13,"input",8),g.kc(14,"translate"),g.Xb(15,"mat-autocomplete",9,10),g.Mc(17,y,2,2,"mat-option",6),g.kc(18,"async"),g.Wb(),g.Wb(),g.Wb(),g.Xb(19,"div",3),g.Xb(20,"mat-form-field",11),g.Sb(21,"input",12),g.kc(22,"translate"),g.Wb(),g.Wb(),g.Xb(23,"div",3),g.Xb(24,"mat-form-field",11),g.Sb(25,"input",13),g.kc(26,"translate"),g.Wb(),g.Wb(),g.Xb(27,"div",3),g.Xb(28,"mat-form-field",11),g.Sb(29,"input",14),g.kc(30,"translate"),g.Wb(),g.Wb(),g.Xb(31,"div",3),g.Xb(32,"mat-slide-toggle",15),g.Oc(33),g.kc(34,"translate"),g.Wb(),g.Wb(),g.Wb(),g.Xb(35,"mat-dialog-content",2),g.Xb(36,"div",16),g.Xb(37,"button",17),g.Xb(38,"mat-icon"),g.Oc(39,"save"),g.Wb(),g.Oc(40),g.kc(41,"translate"),g.Wb(),g.Sb(42,"span",18),g.Xb(43,"button",19),g.fc("click",function(){return e.dialogRef.close(!1)}),g.Xb(44,"mat-icon"),g.Oc(45,"cancel"),g.Wb(),g.Oc(46),g.kc(47,"translate"),g.Wb(),g.Wb(),g.Wb(),g.Wb()),2&t){const t=g.Ac(16);g.pc("ngIf",e.data.isNew),g.Eb(1),g.pc("ngIf",!e.data.isNew),g.Eb(1),g.pc("formGroup",e.itemForm),g.Eb(5),g.Pc(g.lc(8,23,"GIFTCARDTYPESPOPUP.TYPELIST")),g.Eb(2),g.pc("formControl",e.itemForm.controls.stipo),g.Eb(1),g.pc("ngForOf",e.listaDeTipos),g.Eb(2),g.pc("hidden",!("I"==e.itemForm.controls.stipo.value)),g.Eb(1),g.qc("placeholder",g.lc(14,25,"GIFTCARDTYPESPOPUP.PRODUCT")),g.pc("formControl",e.itemForm.controls.idproducto)("matAutocomplete",t),g.Eb(2),g.pc("displayWith",e.displayFnProductos),g.Eb(2),g.pc("ngForOf",g.lc(18,27,e.filteredProductos)),g.Eb(4),g.qc("placeholder",g.lc(22,29,"GIFTCARDTYPESPOPUP.AMOUNT")),g.pc("formControl",e.itemForm.controls.rvalor),g.Eb(4),g.qc("placeholder",g.lc(26,31,"GIFTCARDTYPESPOPUP.LOYALTYPOINTS")),g.pc("formControl",e.itemForm.controls.ipuntosfidelizacion),g.Eb(4),g.qc("placeholder",g.lc(30,33,"GIFTCARDTYPESPOPUP.DAYSOFVALIDITY")),g.pc("formControl",e.itemForm.controls.idiasdevigencia),g.Eb(3),g.pc("formControl",e.itemForm.controls.bactivo),g.Eb(1),g.Pc(g.lc(34,35,"GIFTCARDTYPESPOPUP.ACTIVE")),g.Eb(4),g.pc("disabled",e.itemForm.invalid),g.Eb(3),g.Pc(g.lc(41,37,"GIFTCARDTYPESPOPUP.SAVE")),g.Eb(6),g.Pc(g.lc(47,39,"GIFTCARDTYPESPOPUP.CANCEL"))}},directives:[i.o,p.w,p.p,p.i,f.e,P.c,P.a,O.c,O.f,v.a,p.o,p.f,i.n,I.b,p.c,E.c,E.a,T.a,F.b,C.a,f.h,R.n],pipes:[D.c,i.b],styles:[""]}),t})();var w=o("AytR"),X=o("IheW");let S=(()=>{class t{constructor(t){this.http=t}obtenerDatos(){return this.http.get(encodeURI(w.a.apiURL+'TiposGiftCard?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerProductos(){return this.http.get(encodeURI(w.a.apiURL+'Productos?filter={"where":{"deletedon":{"eq":null}}}'))}actualizarGiftcard(t){return this.http.put(`${w.a.apiURL}TiposGiftCard/${t.id}`,t)}agregarGiftcard(t){return this.http.post(w.a.apiURL+"TiposGiftCard",t)}obtenerCount(t){return this.http.get(encodeURI(`${w.a.apiURL}TiposGiftCard/count?where=${t}`))}}return t.\u0275fac=function(e){return new(e||t)(g.bc(X.c))},t.\u0275prov=g.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var j=o("zHaW"),U=o("PDjf"),x=o("w9WL");function Y(t,e){if(1&t){const t=g.Yb();g.Xb(0,"div",11),g.Xb(1,"button",12),g.fc("click",function(){return g.Dc(t),g.jc().openPopUp({},!0)}),g.Xb(2,"mat-icon"),g.Oc(3,"library_add"),g.Wb(),g.Oc(4),g.kc(5,"translate"),g.Wb(),g.Wb()}2&t&&(g.Eb(4),g.Qc("",g.lc(5,1,"GIFTCARDTYPES.ADDGIFTCARDTYPE")," "))}function M(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",13),g.fc("click",function(e){g.Dc(t);const o=g.jc(),i=g.Ac(5);return o.updateFilter(e)&&(i.value="")}),g.Xb(1,"mat-icon"),g.Oc(2,"close"),g.Wb(),g.Wb()}}function L(t,e){if(1&t&&g.Oc(0),2&t){const t=e.row,o=g.jc();g.Qc(" ",o.mostrarDescripcionDePromocion(t)," ")}}function z(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",16),g.fc("click",function(){g.Dc(t);const e=g.jc().row;return g.jc().deleteItem(e)}),g.Xb(1,"mat-icon"),g.Oc(2,"delete"),g.Wb(),g.Wb()}}function N(t,e){if(1&t){const t=g.Yb();g.Xb(0,"button",14),g.fc("click",function(){g.Dc(t);const o=e.row;return g.jc().openPopUp(o)}),g.Xb(1,"mat-icon"),g.Oc(2,"edit"),g.Wb(),g.Wb(),g.Mc(3,z,3,0,"button",15),g.Xb(4,"button",14),g.fc("click",function(){g.Dc(t);const o=e.row;return g.jc().openUserInfoPopUp(o)}),g.Xb(5,"mat-icon"),g.Oc(6,"person_pin"),g.Wb(),g.Wb()}if(2&t){const t=g.jc();g.Eb(3),g.pc("ngIf",t.puedeEliminar)}}const q=function(){return{y:"50px",delay:"300ms"}},$=function(t){return{value:"*",params:t}},H=[{path:"",component:(()=>{class t{constructor(t,e,o,i,c,r,a){this.servicioGiftcards=t,this.dialog=e,this.snack=o,this.confirmService=i,this.loader=c,this.servicioUUID=r,this.servicioPermisos=a,this.timeOutDuration=800,this.rows=[],this.puedeAgregar=!1,this.puedeEliminar=!1,this.order="sfamilia ASC",this.search="",this.page={count:0,offset:0,limit:10}}ngOnInit(){this.servicioGiftcards.obtenerProductos().subscribe(t=>{this.productos=t}),Object(s.a)(this.servicioPermisos.puedeAgregar("Familias"),this.servicioPermisos.puedeEliminar("Familias")).pipe(Object(b.a)()).subscribe(t=>{this.puedeAgregar=t[0],this.puedeEliminar=t[1]}),this.prepararFiltro(),this.refresh()}prepararFiltro(){if(this.search){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&(t.forEach((t,e)=>{t.length>1&&(this.filter+=`{"or":[{"sfamilia":{"ilike":"%${t}%"}}]}`,e<this.search.length-1&&(this.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}refresh(){this.prepararFiltro(),Object(l.a)([this.servicioGiftcards.obtenerCount(this.filter),this.servicioGiftcards.obtenerDatos()]).subscribe(t=>{this.page.count=t[0].count,this.rows=t[1],console.log(t)},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}mostrarDescripcionDePromocion(t){switch(this.descripcion=t.ipuntosfidelizacion+"pts.",t.stipo){case"M":this.descripcion+=" Monto $"+t.rvalor+".";break;case"P":this.descripcion+=" Porcentaje "+t.rvalor+"%.";break;case"I":var e=this.productos.filter(e=>e.id==t.idproducto);this.descripcion+=e&&e[0]?' Producto "'+e[0].snombre+'" '+t.rvalor+"u.":" Producto (sin definir) "+t.rvalor+"u."}return this.descripcion}pageCallback(t){this.page.offset=t.offset,this.refresh()}updateFilter(t){return this.search=t instanceof MouseEvent?"":t.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(t){const e=t.sorts[0];this.order=`${e.prop} ${e.dir.toUpperCase()}`,this.refresh()}openPopUp(t={},e){this.dialog.open(G,{width:"720px",disableClose:!0,data:{payload:t,productos:this.productos,isNew:e}}).afterClosed().subscribe(t=>{if(t){this.loader.open();var o={};Object.assign(o,t),o.bactivo=t.bactivo?"T":"F",o.bfavorito=t.bfavorito?"T":"F",console.log("Guardar:"),console.log(o),"object"==typeof o.idproducto&&(o.idproducto=o.idproducto.id),e?(o.id=this.servicioUUID.generateUUID(),this.servicioGiftcards.agregarGiftcard(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Giftcard Agregada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioGiftcards.actualizarGiftcard(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Giftcard Actualizada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(t){this.confirmService.confirm({message:`\xbfEliminar ${t}?`}).subscribe(e=>{if(e){this.loader.open();var o={};Object.assign(o,t),delete o.soperadorcreacion,delete o.fcreacion,delete o.soperadormodificacion,delete o.fmodificacion,delete o.insertedon,delete o.updatedon,o.deletedon=(new Date).toISOString(),this.servicioGiftcards.actualizarGiftcard(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Giftcard Eliminada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}openUserInfoPopUp(t={}){this.dialog.open(u.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(g.Rb(S),g.Rb(f.b),g.Rb(j.a),g.Rb(r.a),g.Rb(a.a),g.Rb(n.a),g.Rb(d.a))},t.\u0275cmp=g.Lb({type:t,selectors:[["app-giftcard-types"]],decls:17,vars:29,consts:[["class","m-333",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","sort","page"],["prop","sfamilia",3,"name","flexGrow"],["ngx-datatable-cell-template",""],[3,"sortable","name","flexGrow"],[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(t,e){if(1&t&&(g.Mc(0,Y,6,3,"div",0),g.Xb(1,"mat-form-field",1),g.Xb(2,"mat-icon",2),g.Oc(3,"search"),g.Wb(),g.Xb(4,"input",3,4),g.fc("keyup",function(t){return e.updateFilter(t)}),g.kc(6,"translate"),g.Wb(),g.Mc(7,M,3,0,"button",5),g.Wb(),g.Xb(8,"mat-card",6),g.Xb(9,"mat-card-content",6),g.Xb(10,"ngx-datatable",7),g.fc("sort",function(t){return e.onSort(t)})("page",function(t){return e.pageCallback(t)}),g.Xb(11,"ngx-datatable-column",8),g.kc(12,"translate"),g.Mc(13,L,1,1,"ng-template",9),g.Wb(),g.Xb(14,"ngx-datatable-column",10),g.kc(15,"translate"),g.Mc(16,N,7,1,"ng-template",9),g.Wb(),g.Wb(),g.Wb(),g.Wb()),2&t){const t=g.Ac(5);g.pc("ngIf",e.puedeAgregar),g.Eb(4),g.qc("placeholder",g.lc(6,20,"GIFTCARDTYPES.FILTER")),g.Eb(3),g.pc("ngIf",t.value),g.Eb(1),g.pc("@animate",g.vc(27,$,g.uc(26,q))),g.Eb(2),g.pc("rows",e.rows)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),g.Eb(1),g.qc("name",g.lc(12,22,"GIFTCARDTYPES.GIFTCARDS")),g.pc("flexGrow",1),g.Eb(3),g.qc("name",g.lc(15,24,"GIFTCARDTYPES.ACTIONS")),g.pc("sortable",!1)("flexGrow",1)}},directives:[i.o,O.c,C.a,O.g,I.b,U.a,U.b,x.d,x.b,x.a,F.b,O.h],pipes:[D.c],styles:[""],data:{animation:[c.a]}}),t})(),data:{title:"FAMILIAS"}}];var J=o("iInd"),K=o("u9T3"),V=o("f44v"),Q=o("M9ds"),_=o("ZFy/"),Z=o("PCNd"),B=o("BxcV");let tt=(()=>{class t{}return t.\u0275mod=g.Pb({type:t}),t.\u0275inj=g.Ob({factory:function(e){return new(e||t)},imports:[[i.c,p.t,K.a,x.f,I.c,I.c,U.c,I.c,F.c,V.a,I.c,_.b,f.f,j.b,T.b,Q.c,v.b,C.b,D.b,Z.a,B.a,E.b,J.k.forChild(H)]]}),t})()}}]);