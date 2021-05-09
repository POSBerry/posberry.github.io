!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{GmJt:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var n=o("GS7A"),a=Object(n.g)([Object(n.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(n.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(n.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),r=[Object(n.n)("animate",[Object(n.m)("void => *",[Object(n.o)(a)])]),Object(n.n)("fadeInOut",[Object(n.k)("0",Object(n.l)({opacity:0,display:"none"})),Object(n.k)("1",Object(n.l)({opacity:1,display:"block"})),Object(n.m)("0 => 1",Object(n.e)("300ms")),Object(n.m)("1 => 0",Object(n.e)("300ms"))])]},tzF1:function(t,n,a){"use strict";a.r(n),a.d(n,"VendorSettingsModule",function(){return $});var r=a("SVse"),c=a("iInd"),i=a("GmJt"),l=a("3kSh"),s=a("3sEA"),u=a("vpPe"),b=a("cp0P"),d=a("Ap+n"),f=a("iELJ"),p=a("8Y7J"),m=a("s7LF"),h=a("VDRc"),v=a("Q2Ze"),O=a("e6WT"),E=a("ZTz/"),g=a("jMqV"),k=a("Dxy4"),S=a("Tj54"),x=a("UhP/"),N=a("TSSN");function P(e,t){1&e&&(p.Xb(0,"h1",19),p.Oc(1),p.kc(2,"translate"),p.Wb()),2&e&&(p.Eb(1),p.Pc(p.lc(2,1,"VENDORSETTINGSPOPUP.ADDSELLER")))}function T(e,t){1&e&&(p.Xb(0,"h1",19),p.Oc(1),p.kc(2,"translate"),p.Wb()),2&e&&(p.Eb(1),p.Pc(p.lc(2,1,"VENDORSETTINGSPOPUP.EDITSELLER")))}function I(e,t){if(1&e&&(p.Xb(0,"mat-option",20),p.Oc(1),p.Wb()),2&e){var o=t.$implicit;p.pc("value",o.idsucursal),p.Eb(1),p.Qc(" ",o.sdescripcion," ")}}var y,R,W=((y=function(){function t(o,n,a){e(this,t),this.data=o,this.dialogRef=n,this.fb=a}return o(t,[{key:"ngOnInit",value:function(){this.buildItemForm(this.data.payload),this.sucursales=this.data.sucursales}},{key:"buildItemForm",value:function(e){this.itemForm=this.fb.group({id:[e.id||""],scodvendedor:[e.scodvendedor||""],snombre:[e.snombre||""],sapellido:[e.sapellido||""],stelefono:[e.stelefono||""],semail:[e.semail||""],sloclidad:[e.slocalidad||""],bactivo:[!e.hasOwnProperty("bactivo")||"T"==e.bactivo],idsucursal:[e.idsucursal]})}},{key:"submit",value:function(){this.dialogRef.close(this.itemForm.value)}}]),t}()).\u0275fac=function(e){return new(e||y)(p.Rb(f.a),p.Rb(f.g),p.Rb(m.d))},y.\u0275cmp=p.Lb({type:y,selectors:[["app-vendor-settings-popup"]],decls:52,vars:43,consts:[["matDialogTitle","",4,"ngIf"],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","scodvendedor",3,"formControl","placeholder"],["matInput","","name","snombre",3,"formControl","placeholder"],["matInput","","name","sapellido",3,"formControl","placeholder"],["matInput","","name","stelefono",3,"formControl","placeholder"],["matInput","","name","semail",3,"formControl","placeholder"],["matInput","","name","slocalidad",3,"formControl","placeholder"],["appearance","fill"],["name","idsucursal",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],["matDialogTitle",""],[3,"value"]],template:function(e,t){1&e&&(p.Mc(0,P,3,3,"h1",0),p.Mc(1,T,3,3,"h1",0),p.Xb(2,"form",1),p.fc("ngSubmit",function(){return t.submit()}),p.Xb(3,"mat-dialog-content",2),p.Xb(4,"div",3),p.Xb(5,"mat-form-field",4),p.Sb(6,"input",5),p.kc(7,"translate"),p.Wb(),p.Wb(),p.Xb(8,"div",3),p.Xb(9,"mat-form-field",4),p.Sb(10,"input",6),p.kc(11,"translate"),p.Wb(),p.Wb(),p.Xb(12,"div",3),p.Xb(13,"mat-form-field",4),p.Sb(14,"input",7),p.kc(15,"translate"),p.Wb(),p.Wb(),p.Xb(16,"div",3),p.Xb(17,"mat-form-field",4),p.Sb(18,"input",8),p.kc(19,"translate"),p.Wb(),p.Wb(),p.Xb(20,"div",3),p.Xb(21,"mat-form-field",4),p.Sb(22,"input",9),p.kc(23,"translate"),p.Wb(),p.Wb(),p.Xb(24,"div",3),p.Xb(25,"mat-form-field",4),p.Sb(26,"input",10),p.kc(27,"translate"),p.Wb(),p.Wb(),p.Xb(28,"div",3),p.Xb(29,"mat-form-field",11),p.Xb(30,"mat-label"),p.Oc(31),p.kc(32,"translate"),p.Wb(),p.Xb(33,"mat-select",12),p.Mc(34,I,2,2,"mat-option",13),p.Wb(),p.Wb(),p.Wb(),p.Xb(35,"div",3),p.Xb(36,"mat-slide-toggle",14),p.Oc(37),p.kc(38,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Xb(39,"mat-dialog-content",2),p.Xb(40,"div",15),p.Xb(41,"button",16),p.Xb(42,"mat-icon"),p.Oc(43,"save"),p.Wb(),p.Oc(44),p.kc(45,"translate"),p.Wb(),p.Sb(46,"span",17),p.Xb(47,"button",18),p.fc("click",function(){return t.dialogRef.close(!1)}),p.Xb(48,"mat-icon"),p.Oc(49,"cancel"),p.Wb(),p.Oc(50),p.kc(51,"translate"),p.Wb(),p.Wb(),p.Wb(),p.Wb()),2&e&&(p.pc("ngIf",t.data.isNew),p.Eb(1),p.pc("ngIf",!t.data.isNew),p.Eb(1),p.pc("formGroup",t.itemForm),p.Eb(4),p.qc("placeholder",p.lc(7,23,"VENDORSETTINGSPOPUP.CODE")),p.pc("formControl",t.itemForm.controls.scodvendedor),p.Eb(4),p.qc("placeholder",p.lc(11,25,"VENDORSETTINGSPOPUP.NAME")),p.pc("formControl",t.itemForm.controls.snombre),p.Eb(4),p.qc("placeholder",p.lc(15,27,"VENDORSETTINGSPOPUP.SURNAME")),p.pc("formControl",t.itemForm.controls.sapellido),p.Eb(4),p.qc("placeholder",p.lc(19,29,"VENDORSETTINGSPOPUP.PHONE")),p.pc("formControl",t.itemForm.controls.stelefono),p.Eb(4),p.qc("placeholder",p.lc(23,31,"VENDORSETTINGSPOPUP.EMAIL")),p.pc("formControl",t.itemForm.controls.semail),p.Eb(4),p.qc("placeholder",p.lc(27,33,"VENDORSETTINGSPOPUP.LOCATION")),p.pc("formControl",t.itemForm.controls.slocalidad),p.Eb(5),p.Qc("",p.lc(32,35,"VENDORSETTINGSPOPUP.DEFAULTCLIENT"),":"),p.Eb(2),p.pc("formControl",t.itemForm.controls.idsucursal),p.Eb(1),p.pc("ngForOf",t.sucursales),p.Eb(2),p.pc("formControl",t.itemForm.controls.bactivo),p.Eb(1),p.Pc(p.lc(38,37,"VENDORSETTINGSPOPUP.ACTIVE")),p.Eb(4),p.pc("disabled",t.itemForm.invalid),p.Eb(3),p.Pc(p.lc(45,39,"VENDORSETTINGSPOPUP.SAVE")),p.Eb(6),p.Pc(p.lc(51,41,"VENDORSETTINGSPOPUP.CANCEL")))},directives:[r.o,m.w,m.p,m.i,f.e,h.c,h.a,v.c,O.b,m.c,m.o,m.f,v.f,E.a,r.n,g.a,k.b,S.a,f.h,x.n],pipes:[N.c],styles:[""],data:{animation:[i.a]}}),y),w=a("AytR"),X=a("IheW"),C=((R=function(){function t(o){e(this,t),this.http=o}return o(t,[{key:"obtenerDatos",value:function(e,t,o,n){return this.http.get(encodeURI("".concat(w.a.apiURL,'Vendedores?filter={"where":').concat(e,',"limit":').concat(t,',"skip":').concat(o,',"order":"').concat(n,'"}')))}},{key:"obtenerCount",value:function(e){return this.http.get(encodeURI("".concat(w.a.apiURL,"Vendedores/count?where=").concat(e)))}},{key:"actualizarVendedor",value:function(e){return this.http.put("".concat(w.a.apiURL,"Vendedores/").concat(e.id),e)}},{key:"agregarVendedor",value:function(e){return this.http.post(w.a.apiURL+"Vendedores",e)}},{key:"obtenerSucursales",value:function(){return this.http.get(encodeURI(w.a.apiURL+"Sucursales?"))}}]),t}()).\u0275fac=function(e){return new(e||R)(p.bc(X.c))},R.\u0275prov=p.Nb({token:R,factory:R.\u0275fac,providedIn:"root"}),R),D=a("zHaW"),V=a("PDjf"),U=a("w9WL");function F(e,t){if(1&e){var o=p.Yb();p.Xb(0,"button",14),p.fc("click",function(e){p.Dc(o);var t=p.jc(),n=p.Ac(10);return t.updateFilter(e)&&(n.value="")}),p.Xb(1,"mat-icon"),p.Oc(2,"close"),p.Wb(),p.Wb()}}function G(e,t){if(1&e&&p.Oc(0),2&e){var o=t.row;p.Qc(" ",null==o?null:o.scodvendedor," ")}}function M(e,t){if(1&e&&p.Oc(0),2&e){var o=t.row;p.Qc(" ",null==o?null:o.snombre," ")}}function j(e,t){if(1&e&&p.Oc(0),2&e){var o=t.row;p.Qc(" ",null==o?null:o.sapellido," ")}}function A(e,t){if(1&e){var o=p.Yb();p.Xb(0,"button",15),p.fc("click",function(){p.Dc(o);var e=t.row;return p.jc().openPopUp(e)}),p.Xb(1,"mat-icon"),p.Oc(2,"edit"),p.Wb(),p.Wb(),p.Xb(3,"button",16),p.fc("click",function(){p.Dc(o);var e=t.row;return p.jc().deleteItem(e)}),p.Xb(4,"mat-icon"),p.Oc(5,"delete"),p.Wb(),p.Wb(),p.Xb(6,"button",15),p.fc("click",function(){p.Dc(o);var e=t.row;return p.jc().openUserInfoPopUp(e)}),p.Xb(7,"mat-icon"),p.Oc(8,"person_pin"),p.Wb(),p.Wb()}}var L,q,z=function(){return{y:"50px",delay:"300ms"}},H=function(e){return{value:"*",params:e}},J=[{path:"",component:(L=function(){function t(o,n,a,r,c,i){e(this,t),this.servicioVendedores=o,this.dialog=n,this.snack=a,this.confirmService=r,this.loader=c,this.servicioUUID=i,this.timeOutDuration=800,this.rows=[],this.order="snombre ASC",this.search="",this.page={count:0,offset:0,limit:10}}return o(t,[{key:"ngOnInit",value:function(){var e=this;this.prepararFiltro(),this.refresh(),this.servicioVendedores.obtenerSucursales().subscribe(function(t){e.sucursales=t})}},{key:"prepararFiltro",value:function(){var e=this;if(this.search){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&(t.forEach(function(t,o){t.length>1&&(e.filter+='{"or":[{"snombre":{"ilike":"%'.concat(t,'%"}}]}'),o<e.search.length-1&&(e.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}},{key:"refresh",value:function(){var e=this;this.prepararFiltro(),Object(b.a)([this.servicioVendedores.obtenerCount(this.filter),this.servicioVendedores.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(function(t){e.page.count=t[0].count,e.rows=t[1]},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}},{key:"pageCallback",value:function(e){this.page.offset=e.offset,this.refresh()}},{key:"updateFilter",value:function(e){var t=this;return this.search=e instanceof MouseEvent?"":e.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(function(){t.refresh()},this.timeOutDuration),!0}},{key:"onSort",value:function(e){var t=e.sorts[0];this.order="".concat(t.prop," ").concat(t.dir.toUpperCase()),this.refresh()}},{key:"openPopUp",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;this.dialog.open(W,{width:"720px",disableClose:!0,data:{payload:t,sucursales:this.sucursales,isNew:o}}).afterClosed().subscribe(function(t){if(t){e.loader.open();var n={};Object.assign(n,t),n.bactivo=t.bactivo?"T":"F",n.bfavorito=t.bfavorito?"T":"F",o?(n.id=e.servicioUUID.generateUUID(),e.servicioVendedores.agregarVendedor(n).subscribe(function(t){e.refresh(),e.loader.close(),e.snack.open("\xa1Vendedor Agregado!","OK",{duration:4e3})},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})):e.servicioVendedores.actualizarVendedor(n).subscribe(function(t){e.refresh(),e.loader.close(),e.snack.open("\xa1Vendedor Actualizado!","OK",{duration:4e3})},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}})}},{key:"deleteItem",value:function(e){var t=this;this.confirmService.confirm({message:"\xbfEliminar ".concat(e.snombre,"?")}).subscribe(function(o){if(o){t.loader.open();var n={};Object.assign(n,e),delete n.soperadorcreacion,delete n.fcreacion,delete n.soperadormodificacion,delete n.fmodificacion,delete n.insertedon,delete n.updatedon,n.deletedon=(new Date).toISOString(),t.servicioVendedores.actualizarVendedor(n).subscribe(function(e){t.refresh(),t.loader.close(),t.snack.open("\xa1Vendedor Eliminado!","OK",{duration:4e3})},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}})}},{key:"openUserInfoPopUp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(d.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:e}})}}]),t}(),L.\u0275fac=function(e){return new(e||L)(p.Rb(C),p.Rb(f.b),p.Rb(D.a),p.Rb(l.a),p.Rb(s.a),p.Rb(u.a))},L.\u0275cmp=p.Lb({type:L,selectors:[["app-vendor-settings"]],decls:28,vars:38,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","scodvendedor",3,"name","flexGrow"],["ngx-datatable-cell-template",""],["prop","snombre",3,"name","flexGrow"],["prop","sapellido",3,"name","flexGrow"],[3,"name","flexGrow"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(e,t){if(1&e&&(p.Xb(0,"div",0),p.Xb(1,"button",1),p.fc("click",function(){return t.openPopUp({},!0)}),p.Xb(2,"mat-icon"),p.Oc(3,"library_add"),p.Wb(),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Wb(),p.Xb(6,"mat-form-field",2),p.Xb(7,"mat-icon",3),p.Oc(8,"search"),p.Wb(),p.Xb(9,"input",4,5),p.fc("keyup",function(e){return t.updateFilter(e)}),p.kc(11,"translate"),p.Wb(),p.Mc(12,F,3,0,"button",6),p.Wb(),p.Xb(13,"mat-card",7),p.Xb(14,"mat-card-content",7),p.Xb(15,"ngx-datatable",8),p.fc("page",function(e){return t.pageCallback(e)})("sort",function(e){return t.onSort(e)}),p.Xb(16,"ngx-datatable-column",9),p.kc(17,"translate"),p.Mc(18,G,1,1,"ng-template",10),p.Wb(),p.Xb(19,"ngx-datatable-column",11),p.kc(20,"translate"),p.Mc(21,M,1,1,"ng-template",10),p.Wb(),p.Xb(22,"ngx-datatable-column",12),p.kc(23,"translate"),p.Mc(24,j,1,1,"ng-template",10),p.Wb(),p.Xb(25,"ngx-datatable-column",13),p.kc(26,"translate"),p.Mc(27,A,9,0,"ng-template",10),p.Wb(),p.Wb(),p.Wb(),p.Wb()),2&e){var o=p.Ac(10);p.Eb(4),p.Qc("",p.lc(5,23,"VENDORSETTINGSCOMPONENT.ADDSELLER")," "),p.Eb(5),p.qc("placeholder",p.lc(11,25,"VENDORSETTINGSCOMPONENT.FILTER")),p.Eb(3),p.pc("ngIf",o.value),p.Eb(1),p.pc("@animate",p.vc(36,H,p.uc(35,z))),p.Eb(2),p.pc("rows",t.rows)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit)("externalPaging",!0)("selectionType","single"),p.Eb(1),p.qc("name",p.lc(17,27,"VENDORSETTINGSCOMPONENT.CODE")),p.pc("flexGrow",1),p.Eb(3),p.qc("name",p.lc(20,29,"VENDORSETTINGSCOMPONENT.NAME")),p.pc("flexGrow",1),p.Eb(3),p.qc("name",p.lc(23,31,"VENDORSETTINGSCOMPONENT.SURNAME")),p.pc("flexGrow",1),p.Eb(3),p.qc("name",p.lc(26,33,"VENDORSETTINGSCOMPONENT.ACTIONS")),p.pc("flexGrow",1)}},directives:[k.b,S.a,v.c,v.g,O.b,r.o,V.a,V.b,U.d,U.b,U.a,v.h],pipes:[N.c],styles:[""],data:{animation:[i.a]}}),L),data:{title:"Vendedores"}}],K=a("u9T3"),Q=a("f44v"),Y=a("M9ds"),Z=a("ZFy/"),_=a("PCNd"),B=a("BxcV"),$=((q=function t(){e(this,t)}).\u0275mod=p.Pb({type:q}),q.\u0275inj=p.Ob({factory:function(e){return new(e||q)},imports:[[r.c,m.t,K.a,U.f,O.c,O.c,V.c,O.c,k.c,Q.a,O.c,Z.b,f.f,D.b,g.b,Y.c,E.b,S.b,N.b,_.a,B.a,c.k.forChild(J)]]}),q)},vpPe:function(t,n,a){"use strict";a.d(n,"a",function(){return c});var r=a("8Y7J"),c=function(){var t=function(){function t(){e(this,t)}return o(t,[{key:"generateUUID",value:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var o=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?o:3&o|8).toString(16)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();