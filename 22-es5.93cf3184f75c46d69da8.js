!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{GmJt:function(e,t,o){"use strict";o.d(t,"a",function(){return n});var r=o("GS7A"),a=Object(r.g)([Object(r.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(r.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(r.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),n=[Object(r.n)("animate",[Object(r.m)("void => *",[Object(r.o)(a)])]),Object(r.n)("fadeInOut",[Object(r.k)("0",Object(r.l)({opacity:0,display:"none"})),Object(r.k)("1",Object(r.l)({opacity:1,display:"block"})),Object(r.m)("0 => 1",Object(r.e)("300ms")),Object(r.m)("1 => 0",Object(r.e)("300ms"))])]},WGxG:function(t,r,a){"use strict";a.r(r),a.d(r,"OperatorSettingsModule",function(){return Z});var n=a("SVse"),i=a("iInd"),c=a("GmJt"),l=a("3kSh"),s=a("3sEA"),b=a("vpPe"),u=a("cp0P"),p=a("Ap+n"),f=a("iELJ"),d=a("8Y7J"),m=a("s7LF"),h=a("VDRc"),v=a("Q2Ze"),O=a("ZTz/"),g=a("e6WT"),k=a("jMqV"),y=a("Dxy4"),x=a("Tj54"),E=a("UhP/"),R=a("TSSN");function W(e,t){if(1&e&&(d.Xb(0,"mat-option",19),d.Oc(1),d.Wb()),2&e){var o=t.$implicit;d.pc("value",o.id),d.Eb(1),d.Qc(" ",o.srol," ")}}var I,X,w=((I=function(){function t(o,r,a){e(this,t),this.data=o,this.dialogRef=r,this.fb=a}return o(t,[{key:"ngOnInit",value:function(){this.buildItemForm(this.data.payload),this.listaDeRoles=this.data.roles}},{key:"buildItemForm",value:function(e){this.itemForm=this.fb.group({id:[e.id||""],soperador:[e.soperator||""],sclave:[e.sclave||""],snombre:[e.snombre||""],sapellido:[e.sapellido||""],semail:[e.semail||""],stelefono:[e.stelefono||""],rtopedescuento:[e.rtopedescuento||0],icodigosupervisor:[e.icodigosupervisor||0],bactivo:[!e.hasOwnProperty("bactivo")||"T"==e.bactivo],surlimage1:[e.surlimage1||""],idrol:[e.idrol]})}},{key:"submit",value:function(){this.dialogRef.close(this.itemForm.value)}}]),t}()).\u0275fac=function(e){return new(e||I)(d.Rb(f.a),d.Rb(f.g),d.Rb(m.d))},I.\u0275cmp=d.Lb({type:I,selectors:[["app-operator-settings-popup"]],decls:52,vars:42,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],["appearance","fill"],["name","irol",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"full-width"],["matInput","","name","snombre",3,"formControl","placeholder"],["matInput","","name","sapellido",3,"formControl","placeholder"],["matInput","","name","semail",3,"formControl","placeholder"],["matInput","","name","stelefono",3,"formControl","placeholder"],["matInput","","name","rtopedescuento",3,"formControl","placeholder"],["matInput","","type","password","name","icodigosupervisor",3,"formControl","placeholder"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(e,t){1&e&&(d.Xb(0,"h1",0),d.Oc(1),d.Wb(),d.Xb(2,"form",1),d.fc("ngSubmit",function(){return t.submit()}),d.Xb(3,"mat-dialog-content",2),d.Xb(4,"div",3),d.Xb(5,"mat-form-field",4),d.Xb(6,"mat-label"),d.Oc(7),d.kc(8,"translate"),d.Wb(),d.Xb(9,"mat-select",5),d.Mc(10,W,2,2,"mat-option",6),d.Wb(),d.Wb(),d.Wb(),d.Xb(11,"div",3),d.Xb(12,"mat-form-field",7),d.Sb(13,"input",8),d.kc(14,"translate"),d.Wb(),d.Wb(),d.Xb(15,"div",3),d.Xb(16,"mat-form-field",7),d.Sb(17,"input",9),d.kc(18,"translate"),d.Wb(),d.Wb(),d.Xb(19,"div",3),d.Xb(20,"mat-form-field",7),d.Sb(21,"input",10),d.kc(22,"translate"),d.Wb(),d.Wb(),d.Xb(23,"div",3),d.Xb(24,"mat-form-field",7),d.Sb(25,"input",11),d.kc(26,"translate"),d.Wb(),d.Wb(),d.Xb(27,"div",3),d.Xb(28,"mat-form-field",7),d.Sb(29,"input",12),d.kc(30,"translate"),d.Wb(),d.Wb(),d.Xb(31,"div",3),d.Xb(32,"mat-form-field",7),d.Sb(33,"input",13),d.kc(34,"translate"),d.Wb(),d.Wb(),d.Xb(35,"div",3),d.Xb(36,"mat-slide-toggle",14),d.Oc(37),d.kc(38,"translate"),d.Wb(),d.Wb(),d.Wb(),d.Xb(39,"mat-dialog-content",2),d.Xb(40,"div",15),d.Xb(41,"button",16),d.Xb(42,"mat-icon"),d.Oc(43,"save"),d.Wb(),d.Oc(44),d.kc(45,"translate"),d.Wb(),d.Sb(46,"span",17),d.Xb(47,"button",18),d.fc("click",function(){return t.dialogRef.close(!1)}),d.Xb(48,"mat-icon"),d.Oc(49,"cancel"),d.Wb(),d.Oc(50),d.kc(51,"translate"),d.Wb(),d.Wb(),d.Wb(),d.Wb()),2&e&&(d.Eb(1),d.Pc(t.data.title),d.Eb(1),d.pc("formGroup",t.itemForm),d.Eb(5),d.Pc(d.lc(8,22,"Roles")),d.Eb(2),d.pc("formControl",t.itemForm.controls.idrol),d.Eb(1),d.pc("ngForOf",t.listaDeRoles),d.Eb(3),d.qc("placeholder",d.lc(14,24,"Nombre")),d.pc("formControl",t.itemForm.controls.snombre),d.Eb(4),d.qc("placeholder",d.lc(18,26,"Apellido")),d.pc("formControl",t.itemForm.controls.sapellido),d.Eb(4),d.qc("placeholder",d.lc(22,28,"E-Mail")),d.pc("formControl",t.itemForm.controls.semail),d.Eb(4),d.qc("placeholder",d.lc(26,30,"Tel\xe9fono")),d.pc("formControl",t.itemForm.controls.stelefono),d.Eb(4),d.qc("placeholder",d.lc(30,32,"Tope de Descuento")),d.pc("formControl",t.itemForm.controls.rtopedescuento),d.Eb(4),d.qc("placeholder",d.lc(34,34,"Codigo Supervisor")),d.pc("formControl",t.itemForm.controls.icodigosupervisor),d.Eb(3),d.pc("formControl",t.itemForm.controls.bactivo),d.Eb(1),d.Pc(d.lc(38,36,"FAMILIESPOPUPCOMPONENT.ACTIVE")),d.Eb(4),d.pc("disabled",t.itemForm.invalid),d.Eb(3),d.Pc(d.lc(45,38,"FAMILIESPOPUPCOMPONENT.SAVE")),d.Eb(6),d.Pc(d.lc(51,40,"FAMILIESPOPUPCOMPONENT.CANCEL")))},directives:[f.h,m.w,m.p,m.i,f.e,h.c,h.a,v.c,v.f,O.a,m.o,m.f,n.n,g.b,m.c,k.a,y.b,x.a,E.n],pipes:[R.c],styles:[""],data:{animation:[c.a]}}),I),C=a("AytR"),P=a("IheW"),F=((X=function(){function t(o){e(this,t),this.http=o}return o(t,[{key:"obtenerDatos",value:function(e,t,o,r){return this.http.get(encodeURI("".concat(C.a.apiURL,'Operadores?filter={"where":').concat(e,',"limit":').concat(t,',"skip":').concat(o,',"order":"').concat(r,'"}')))}},{key:"obtenerCount",value:function(e){return this.http.get(encodeURI("".concat(C.a.apiURL,"Operadores/count?where=").concat(e)))}},{key:"actualizarOperador",value:function(e){return this.http.put("".concat(C.a.apiURL,"Operadores/").concat(e.id),e)}},{key:"agregarOperador",value:function(e){return this.http.post(C.a.apiURL+"Operadores",e)}},{key:"obtenerRoles",value:function(){return this.http.get(encodeURI(C.a.apiURL+"Roles"))}}]),t}()).\u0275fac=function(e){return new(e||X)(d.bc(P.c))},X.\u0275prov=d.Nb({token:X,factory:X.\u0275fac,providedIn:"root"}),X),S=a("zHaW"),A=a("PDjf"),U=a("w9WL");function j(e,t){if(1&e){var o=d.Yb();d.Xb(0,"button",12),d.fc("click",function(e){d.Dc(o);var t=d.jc(),r=d.Ac(10);return t.updateFilter(e)&&(r.value="")}),d.Xb(1,"mat-icon"),d.Oc(2,"close"),d.Wb(),d.Wb()}}function D(e,t){if(1&e&&d.Oc(0),2&e){var o=t.row;d.Rc(" ",null==o?null:o.snombre,"\xa0",null==o?null:o.sapellido," ")}}function T(e,t){if(1&e){var o=d.Yb();d.Xb(0,"button",13),d.fc("click",function(){d.Dc(o);var e=t.row;return d.jc().openPopUp(e)}),d.Xb(1,"mat-icon"),d.Oc(2,"edit"),d.Wb(),d.Wb(),d.Xb(3,"button",14),d.fc("click",function(){d.Dc(o);var e=t.row;return d.jc().deleteItem(e)}),d.Xb(4,"mat-icon"),d.Oc(5,"delete"),d.Wb(),d.Wb(),d.Xb(6,"button",13),d.fc("click",function(){d.Dc(o);var e=t.row;return d.jc().openUserInfoPopUp(e)}),d.Xb(7,"mat-icon"),d.Oc(8,"person_pin"),d.Wb(),d.Wb()}}var M,L,N=function(){return{y:"50px",delay:"300ms"}},q=function(e){return{value:"*",params:e}},z=[{path:"",component:(M=function(){function t(o,r,a,n,i,c){e(this,t),this.servicioOperadores=o,this.dialog=r,this.snack=a,this.confirmService=n,this.loader=i,this.servicioUUID=c,this.timeOutDuration=800,this.rows=[],this.order="snombre ASC",this.search="",this.page={count:0,offset:0,limit:10}}return o(t,[{key:"ngOnInit",value:function(){this.prepararFiltro(),this.refresh()}},{key:"prepararFiltro",value:function(){var e=this;if(this.search){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&(t.forEach(function(t,o){t.length>1&&(e.filter+='{"or":[{"snombre":{"ilike":"%'.concat(t,'%"}}]}'),o<e.search.length-1&&(e.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}},{key:"refresh",value:function(){var e=this;this.prepararFiltro(),Object(u.a)([this.servicioOperadores.obtenerCount(this.filter),this.servicioOperadores.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(function(t){e.page.count=t[0].count,e.rows=t[1]},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})}),this.servicioOperadores.obtenerRoles().subscribe(function(t){e.roles=t})}},{key:"pageCallback",value:function(e){this.page.offset=e.offset,this.refresh()}},{key:"updateFilter",value:function(e){var t=this;return this.search=e instanceof MouseEvent?"":e.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(function(){t.refresh()},this.timeOutDuration),!0}},{key:"onSort",value:function(e){var t=e.sorts[0];this.order="".concat(t.prop," ").concat(t.dir.toUpperCase()),this.refresh()}},{key:"openPopUp",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;this.dialog.open(w,{width:"720px",disableClose:!0,data:{title:o?"AGREGAR OPERADOR":"ACTUALIZAR OPERADOR",payload:t,roles:this.roles}}).afterClosed().subscribe(function(t){if(t){e.loader.open();var r={};Object.assign(r,t),r.bactivo=t.bactivo?"T":"F",r.bfavorito=t.bfavorito?"T":"F",o?(r.id=e.servicioUUID.generateUUID(),e.servicioOperadores.agregarOperador(r).subscribe(function(t){e.refresh(),e.loader.close(),e.snack.open("\xa1Operador Agregado!","OK",{duration:4e3})},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})):e.servicioOperadores.actualizarOperador(r).subscribe(function(t){e.refresh(),e.loader.close(),e.snack.open("\xa1Operador Actualizado!","OK",{duration:4e3})},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}})}},{key:"deleteItem",value:function(e){var t=this;this.confirmService.confirm({message:"\xbfEliminar ".concat(e.snombre,"?")}).subscribe(function(o){if(o){t.loader.open();var r={};Object.assign(r,e),delete r.soperadorcreacion,delete r.fcreacion,delete r.soperadormodificacion,delete r.fmodificacion,delete r.insertedon,delete r.updatedon,r.deletedon=(new Date).toISOString(),t.servicioOperadores.actualizarOperador(r).subscribe(function(e){t.refresh(),t.loader.close(),t.snack.open("\xa1Operador Eliminado!","OK",{duration:4e3})},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}})}},{key:"openUserInfoPopUp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(p.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:e}})}}]),t}(),M.\u0275fac=function(e){return new(e||M)(d.Rb(F),d.Rb(f.b),d.Rb(S.a),d.Rb(l.a),d.Rb(s.a),d.Rb(b.a))},M.\u0275cmp=d.Lb({type:M,selectors:[["app-operator-settings"]],decls:22,vars:30,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","snombre",3,"name","width"],["ngx-datatable-cell-template",""],[3,"name","width"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(e,t){if(1&e&&(d.Xb(0,"div",0),d.Xb(1,"button",1),d.fc("click",function(){return t.openPopUp({},!0)}),d.Xb(2,"mat-icon"),d.Oc(3,"library_add"),d.Wb(),d.Oc(4),d.kc(5,"translate"),d.Wb(),d.Wb(),d.Xb(6,"mat-form-field",2),d.Xb(7,"mat-icon",3),d.Oc(8,"search"),d.Wb(),d.Xb(9,"input",4,5),d.fc("keyup",function(e){return t.updateFilter(e)}),d.kc(11,"translate"),d.Wb(),d.Mc(12,j,3,0,"button",6),d.Wb(),d.Xb(13,"mat-card",7),d.Xb(14,"mat-card-content",7),d.Xb(15,"ngx-datatable",8),d.fc("page",function(e){return t.pageCallback(e)})("sort",function(e){return t.onSort(e)}),d.Xb(16,"ngx-datatable-column",9),d.kc(17,"translate"),d.Mc(18,D,1,2,"ng-template",10),d.Wb(),d.Xb(19,"ngx-datatable-column",11),d.kc(20,"translate"),d.Mc(21,T,9,0,"ng-template",10),d.Wb(),d.Wb(),d.Wb(),d.Wb()),2&e){var o=d.Ac(10);d.Eb(4),d.Qc("",d.lc(5,19,"Agregar Operador")," "),d.Eb(5),d.qc("placeholder",d.lc(11,21,"FAMILIESCOMPONENT.FILTER")),d.Eb(3),d.pc("ngIf",o.value),d.Eb(1),d.pc("@animate",d.vc(28,q,d.uc(27,N))),d.Eb(2),d.pc("rows",t.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit)("externalPaging",!0)("selectionType","single"),d.Eb(1),d.qc("name",d.lc(17,23,"Operadores")),d.pc("width",150),d.Eb(3),d.qc("name",d.lc(20,25,"FAMILIESCOMPONENT.ACTIONS")),d.pc("width",150)}},directives:[y.b,x.a,v.c,v.g,g.b,n.o,A.a,A.b,U.d,U.b,U.a,v.h],pipes:[R.c],styles:[""],data:{animation:[c.a]}}),M),data:{title:"OPERADORES"}}],G=a("u9T3"),H=a("f44v"),J=a("M9ds"),K=a("ZFy/"),V=a("PCNd"),Y=a("BxcV"),Z=((L=function t(){e(this,t)}).\u0275mod=d.Pb({type:L}),L.\u0275inj=d.Ob({factory:function(e){return new(e||L)},imports:[[n.c,m.t,G.a,U.f,g.c,g.c,A.c,g.c,y.c,H.a,g.c,K.b,f.f,S.b,k.b,J.c,O.b,x.b,R.b,V.a,Y.a,i.k.forChild(z)]]}),L)},vpPe:function(t,r,a){"use strict";a.d(r,"a",function(){return i});var n=a("8Y7J"),i=function(){var t=function(){function t(){e(this,t)}return o(t,[{key:"generateUUID",value:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var o=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?o:3&o|8).toString(16)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();