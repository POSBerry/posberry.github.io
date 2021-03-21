!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{GmJt:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var n=o("GS7A"),a=Object(n.g)([Object(n.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(n.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(n.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),r=[Object(n.n)("animate",[Object(n.m)("void => *",[Object(n.o)(a)])]),Object(n.n)("fadeInOut",[Object(n.k)("0",Object(n.l)({opacity:0,display:"none"})),Object(n.k)("1",Object(n.l)({opacity:1,display:"block"})),Object(n.m)("0 => 1",Object(n.e)("300ms")),Object(n.m)("1 => 0",Object(n.e)("300ms"))])]},tzF1:function(t,n,a){"use strict";a.r(n),a.d(n,"VendorSettingsModule",function(){return _});var r=a("SVse"),c=a("iInd"),i=a("GmJt"),l=a("3kSh"),s=a("3sEA"),u=a("vpPe"),b=a("cp0P"),d=a("Ap+n"),f=a("iELJ"),m=a("8Y7J"),p=a("s7LF"),h=a("VDRc"),v=a("Q2Ze"),O=a("e6WT"),g=a("ZTz/"),E=a("jMqV"),k=a("Dxy4"),y=a("Tj54"),x=a("UhP/"),I=a("TSSN");function W(e,t){if(1&e&&(m.Xb(0,"mat-option",19),m.Oc(1),m.Wb()),2&e){var o=t.$implicit;m.pc("value",o.idsucursal),m.Eb(1),m.Qc(" ",o.sdescripcion," ")}}var P,R,S=((P=function(){function t(o,n,a){e(this,t),this.data=o,this.dialogRef=n,this.fb=a}return o(t,[{key:"ngOnInit",value:function(){this.buildItemForm(this.data.payload),this.sucursales=this.data.sucursales}},{key:"buildItemForm",value:function(e){this.itemForm=this.fb.group({id:[e.id||""],scodvendedor:[e.scodvendedor||""],snombre:[e.snombre||""],sapellido:[e.sapellido||""],stelefono:[e.stelefono||""],semail:[e.semail||""],sloclidad:[e.slocalidad||""],bactivo:[!e.hasOwnProperty("bactivo")||"T"==e.bactivo],idsucursal:[e.idsucursal]})}},{key:"submit",value:function(){this.dialogRef.close(this.itemForm.value)}}]),t}()).\u0275fac=function(e){return new(e||P)(m.Rb(f.a),m.Rb(f.g),m.Rb(p.d))},P.\u0275cmp=m.Lb({type:P,selectors:[["app-vendor-settings-popup"]],decls:52,vars:42,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","scodvendedor",3,"formControl","placeholder"],["matInput","","name","snombre",3,"formControl","placeholder"],["matInput","","name","sapellido",3,"formControl","placeholder"],["matInput","","name","stelefono",3,"formControl","placeholder"],["matInput","","name","semail",3,"formControl","placeholder"],["matInput","","name","slocalidad",3,"formControl","placeholder"],["appearance","fill"],["name","idsucursal",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(e,t){1&e&&(m.Xb(0,"h1",0),m.Oc(1),m.Wb(),m.Xb(2,"form",1),m.fc("ngSubmit",function(){return t.submit()}),m.Xb(3,"mat-dialog-content",2),m.Xb(4,"div",3),m.Xb(5,"mat-form-field",4),m.Sb(6,"input",5),m.kc(7,"translate"),m.Wb(),m.Wb(),m.Xb(8,"div",3),m.Xb(9,"mat-form-field",4),m.Sb(10,"input",6),m.kc(11,"translate"),m.Wb(),m.Wb(),m.Xb(12,"div",3),m.Xb(13,"mat-form-field",4),m.Sb(14,"input",7),m.kc(15,"translate"),m.Wb(),m.Wb(),m.Xb(16,"div",3),m.Xb(17,"mat-form-field",4),m.Sb(18,"input",8),m.kc(19,"translate"),m.Wb(),m.Wb(),m.Xb(20,"div",3),m.Xb(21,"mat-form-field",4),m.Sb(22,"input",9),m.kc(23,"translate"),m.Wb(),m.Wb(),m.Xb(24,"div",3),m.Xb(25,"mat-form-field",4),m.Sb(26,"input",10),m.kc(27,"translate"),m.Wb(),m.Wb(),m.Xb(28,"div",3),m.Xb(29,"mat-form-field",11),m.Xb(30,"mat-label"),m.Oc(31),m.kc(32,"translate"),m.Wb(),m.Xb(33,"mat-select",12),m.Mc(34,W,2,2,"mat-option",13),m.Wb(),m.Wb(),m.Wb(),m.Xb(35,"div",3),m.Xb(36,"mat-slide-toggle",14),m.Oc(37),m.kc(38,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Xb(39,"mat-dialog-content",2),m.Xb(40,"div",15),m.Xb(41,"button",16),m.Xb(42,"mat-icon"),m.Oc(43,"save"),m.Wb(),m.Oc(44),m.kc(45,"translate"),m.Wb(),m.Sb(46,"span",17),m.Xb(47,"button",18),m.fc("click",function(){return t.dialogRef.close(!1)}),m.Xb(48,"mat-icon"),m.Oc(49,"cancel"),m.Wb(),m.Oc(50),m.kc(51,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Wb()),2&e&&(m.Eb(1),m.Pc(t.data.title),m.Eb(1),m.pc("formGroup",t.itemForm),m.Eb(4),m.qc("placeholder",m.lc(7,22,"VENDORSETTINGSPOPUP.CODE")),m.pc("formControl",t.itemForm.controls.scodvendedor),m.Eb(4),m.qc("placeholder",m.lc(11,24,"VENDORSETTINGSPOPUP.NAME")),m.pc("formControl",t.itemForm.controls.snombre),m.Eb(4),m.qc("placeholder",m.lc(15,26,"VENDORSETTINGSPOPUP.SURNAME")),m.pc("formControl",t.itemForm.controls.sapellido),m.Eb(4),m.qc("placeholder",m.lc(19,28,"VENDORSETTINGSPOPUP.PHONE")),m.pc("formControl",t.itemForm.controls.stelefono),m.Eb(4),m.qc("placeholder",m.lc(23,30,"VENDORSETTINGSPOPUP.EMAIL")),m.pc("formControl",t.itemForm.controls.semail),m.Eb(4),m.qc("placeholder",m.lc(27,32,"VENDORSETTINGSPOPUP.LOCATION")),m.pc("formControl",t.itemForm.controls.slocalidad),m.Eb(5),m.Pc(m.lc(32,34,"Cliente predeterminado:")),m.Eb(2),m.pc("formControl",t.itemForm.controls.idsucursal),m.Eb(1),m.pc("ngForOf",t.sucursales),m.Eb(2),m.pc("formControl",t.itemForm.controls.bactivo),m.Eb(1),m.Pc(m.lc(38,36,"VENDORSETTINGSPOPUP.ACTIVE")),m.Eb(4),m.pc("disabled",t.itemForm.invalid),m.Eb(3),m.Pc(m.lc(45,38,"VENDORSETTINGSPOPUP.SAVE")),m.Eb(6),m.Pc(m.lc(51,40,"VENDORSETTINGSPOPUP.CANCEL")))},directives:[f.h,p.v,p.o,p.i,f.e,h.c,h.a,v.c,O.b,p.c,p.n,p.f,v.f,g.a,r.n,E.a,k.b,y.a,x.n],pipes:[I.c],styles:[""],data:{animation:[i.a]}}),P),w=a("AytR"),X=a("IheW"),C=((R=function(){function t(o){e(this,t),this.http=o}return o(t,[{key:"obtenerDatos",value:function(e,t,o,n){return this.http.get(encodeURI("".concat(w.a.apiURL,'Vendedores?filter={"where":').concat(e,',"limit":').concat(t,',"skip":').concat(o,',"order":"').concat(n,'"}')))}},{key:"obtenerCount",value:function(e){return this.http.get(encodeURI("".concat(w.a.apiURL,"Vendedores/count?where=").concat(e)))}},{key:"actualizarVendedor",value:function(e){return this.http.put("".concat(w.a.apiURL,"Vendedores/").concat(e.id),e)}},{key:"agregarVendedor",value:function(e){return this.http.post(w.a.apiURL+"Vendedores",e)}},{key:"obtenerSucursales",value:function(){return this.http.get(encodeURI(w.a.apiURL+"Sucursales?"))}}]),t}()).\u0275fac=function(e){return new(e||R)(m.bc(X.c))},R.\u0275prov=m.Nb({token:R,factory:R.\u0275fac,providedIn:"root"}),R),T=a("zHaW"),V=a("PDjf"),N=a("w9WL");function F(e,t){if(1&e){var o=m.Yb();m.Xb(0,"button",14),m.fc("click",function(e){m.Dc(o);var t=m.jc(),n=m.Ac(10);return t.updateFilter(e)&&(n.value="")}),m.Xb(1,"mat-icon"),m.Oc(2,"close"),m.Wb(),m.Wb()}}function U(e,t){if(1&e&&m.Oc(0),2&e){var o=t.row;m.Qc(" ",null==o?null:o.scodvendedor," ")}}function D(e,t){if(1&e&&m.Oc(0),2&e){var o=t.row;m.Qc(" ",null==o?null:o.snombre," ")}}function j(e,t){if(1&e&&m.Oc(0),2&e){var o=t.row;m.Qc(" ",null==o?null:o.sapellido," ")}}function A(e,t){if(1&e){var o=m.Yb();m.Xb(0,"button",15),m.fc("click",function(){m.Dc(o);var e=t.row;return m.jc().openPopUp(e)}),m.Xb(1,"mat-icon"),m.Oc(2,"edit"),m.Wb(),m.Wb(),m.Xb(3,"button",16),m.fc("click",function(){m.Dc(o);var e=t.row;return m.jc().deleteItem(e)}),m.Xb(4,"mat-icon"),m.Oc(5,"delete"),m.Wb(),m.Wb(),m.Xb(6,"button",15),m.fc("click",function(){m.Dc(o);var e=t.row;return m.jc().openUserInfoPopUp(e)}),m.Xb(7,"mat-icon"),m.Oc(8,"person_pin"),m.Wb(),m.Wb()}}var M,L,G=function(){return{y:"50px",delay:"300ms"}},q=function(e){return{value:"*",params:e}},z=[{path:"",component:(M=function(){function t(o,n,a,r,c,i){e(this,t),this.servicioVendedores=o,this.dialog=n,this.snack=a,this.confirmService=r,this.loader=c,this.servicioUUID=i,this.timeOutDuration=800,this.rows=[],this.order="snombre ASC",this.search="",this.page={count:0,offset:0,limit:10}}return o(t,[{key:"ngOnInit",value:function(){var e=this;this.prepararFiltro(),this.refresh(),this.servicioVendedores.obtenerSucursales().subscribe(function(t){e.sucursales=t})}},{key:"prepararFiltro",value:function(){var e=this;if(this.search){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&(t.forEach(function(t,o){t.length>1&&(e.filter+='{"or":[{"snombre":{"ilike":"%'.concat(t,'%"}}]}'),o<e.search.length-1&&(e.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}},{key:"refresh",value:function(){var e=this;this.prepararFiltro(),Object(b.a)([this.servicioVendedores.obtenerCount(this.filter),this.servicioVendedores.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(function(t){e.page.count=t[0].count,e.rows=t[1]},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}},{key:"pageCallback",value:function(e){this.page.offset=e.offset,this.refresh()}},{key:"updateFilter",value:function(e){var t=this;return this.search=e instanceof MouseEvent?"":e.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(function(){t.refresh()},this.timeOutDuration),!0}},{key:"onSort",value:function(e){var t=e.sorts[0];this.order="".concat(t.prop," ").concat(t.dir.toUpperCase()),this.refresh()}},{key:"openPopUp",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;this.dialog.open(S,{width:"720px",disableClose:!0,data:{title:o?"AGREGAR VENDEDOR":"ACTUALIZAR VENDEDOR",payload:t,sucursales:this.sucursales}}).afterClosed().subscribe(function(t){if(t){e.loader.open();var n={};Object.assign(n,t),n.bactivo=t.bactivo?"T":"F",n.bfavorito=t.bfavorito?"T":"F",o?(n.id=e.servicioUUID.generateUUID(),e.servicioVendedores.agregarVendedor(n).subscribe(function(t){e.refresh(),e.loader.close(),e.snack.open("\xa1Vendedor Agregado!","OK",{duration:4e3})},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})):e.servicioVendedores.actualizarVendedor(n).subscribe(function(t){e.refresh(),e.loader.close(),e.snack.open("\xa1Vendedor Actualizado!","OK",{duration:4e3})},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}})}},{key:"deleteItem",value:function(e){var t=this;this.confirmService.confirm({message:"\xbfEliminar ".concat(e.snombre,"?")}).subscribe(function(o){if(o){t.loader.open();var n={};Object.assign(n,e),delete n.soperadorcreacion,delete n.fcreacion,delete n.soperadormodificacion,delete n.fmodificacion,delete n.insertedon,delete n.updatedon,n.deletedon=(new Date).toISOString(),t.servicioVendedores.actualizarVendedor(n).subscribe(function(e){t.refresh(),t.loader.close(),t.snack.open("\xa1Vendedor Eliminado!","OK",{duration:4e3})},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}})}},{key:"openUserInfoPopUp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(d.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:e}})}}]),t}(),M.\u0275fac=function(e){return new(e||M)(m.Rb(C),m.Rb(f.b),m.Rb(T.a),m.Rb(l.a),m.Rb(s.a),m.Rb(u.a))},M.\u0275cmp=m.Lb({type:M,selectors:[["app-vendor-settings"]],decls:28,vars:38,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","scodvendedor",3,"name","width"],["ngx-datatable-cell-template",""],["prop","snombre",3,"name","width"],["prop","sapellido",3,"name","width"],[3,"name","width"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(e,t){if(1&e&&(m.Xb(0,"div",0),m.Xb(1,"button",1),m.fc("click",function(){return t.openPopUp({},!0)}),m.Xb(2,"mat-icon"),m.Oc(3,"library_add"),m.Wb(),m.Oc(4),m.kc(5,"translate"),m.Wb(),m.Wb(),m.Xb(6,"mat-form-field",2),m.Xb(7,"mat-icon",3),m.Oc(8,"search"),m.Wb(),m.Xb(9,"input",4,5),m.fc("keyup",function(e){return t.updateFilter(e)}),m.kc(11,"translate"),m.Wb(),m.Mc(12,F,3,0,"button",6),m.Wb(),m.Xb(13,"mat-card",7),m.Xb(14,"mat-card-content",7),m.Xb(15,"ngx-datatable",8),m.fc("page",function(e){return t.pageCallback(e)})("sort",function(e){return t.onSort(e)}),m.Xb(16,"ngx-datatable-column",9),m.kc(17,"translate"),m.Mc(18,U,1,1,"ng-template",10),m.Wb(),m.Xb(19,"ngx-datatable-column",11),m.kc(20,"translate"),m.Mc(21,D,1,1,"ng-template",10),m.Wb(),m.Xb(22,"ngx-datatable-column",12),m.kc(23,"translate"),m.Mc(24,j,1,1,"ng-template",10),m.Wb(),m.Xb(25,"ngx-datatable-column",13),m.kc(26,"translate"),m.Mc(27,A,9,0,"ng-template",10),m.Wb(),m.Wb(),m.Wb(),m.Wb()),2&e){var o=m.Ac(10);m.Eb(4),m.Qc("",m.lc(5,23,"Agregar Vendedor")," "),m.Eb(5),m.qc("placeholder",m.lc(11,25,"FAMILIESCOMPONENT.FILTER")),m.Eb(3),m.pc("ngIf",o.value),m.Eb(1),m.pc("@animate",m.vc(36,q,m.uc(35,G))),m.Eb(2),m.pc("rows",t.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit)("externalPaging",!0)("selectionType","single"),m.Eb(1),m.qc("name",m.lc(17,27,"Codigo")),m.pc("width",150),m.Eb(3),m.qc("name",m.lc(20,29,"Nombre")),m.pc("width",150),m.Eb(3),m.qc("name",m.lc(23,31,"Apellido")),m.pc("width",150),m.Eb(3),m.qc("name",m.lc(26,33,"FAMILIESCOMPONENT.ACTIONS")),m.pc("width",150)}},directives:[k.b,y.a,v.c,v.g,O.b,r.o,V.a,V.b,N.d,N.b,N.a,v.h],pipes:[I.c],styles:[""],data:{animation:[i.a]}}),M),data:{title:"Vendedores"}}],H=a("u9T3"),J=a("f44v"),K=a("M9ds"),Q=a("ZFy/"),Y=a("PCNd"),Z=a("BxcV"),_=((L=function t(){e(this,t)}).\u0275mod=m.Pb({type:L}),L.\u0275inj=m.Ob({factory:function(e){return new(e||L)},imports:[[r.c,p.s,H.a,N.f,O.c,O.c,V.c,O.c,k.c,J.a,O.c,Q.b,f.f,T.b,E.b,K.c,g.b,y.b,I.b,Y.a,Z.a,c.k.forChild(z)]]}),L)},vpPe:function(t,n,a){"use strict";a.d(n,"a",function(){return c});var r=a("8Y7J"),c=function(){var t=function(){function t(){e(this,t)}return o(t,[{key:"generateUUID",value:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var o=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?o:3&o|8).toString(16)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();