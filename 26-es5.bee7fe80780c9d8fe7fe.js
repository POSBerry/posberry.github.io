!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{GmJt:function(e,t,o){"use strict";o.d(t,"a",function(){return n});var a=o("GS7A"),r=Object(a.g)([Object(a.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(a.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(a.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),n=[Object(a.n)("animate",[Object(a.m)("void => *",[Object(a.o)(r)])]),Object(a.n)("fadeInOut",[Object(a.k)("0",Object(a.l)({opacity:0,display:"none"})),Object(a.k)("1",Object(a.l)({opacity:1,display:"block"})),Object(a.m)("0 => 1",Object(a.e)("300ms")),Object(a.m)("1 => 0",Object(a.e)("300ms"))])]},WGxG:function(t,a,r){"use strict";r.r(a),r.d(a,"OperatorSettingsModule",function(){return Q});var n=r("SVse"),i=r("iInd"),c=r("GmJt"),l=r("3kSh"),s=r("3sEA"),b=r("vpPe"),u=r("cp0P"),p=r("Ap+n"),f=r("iELJ"),d=r("8Y7J"),m=r("s7LF"),O=r("VDRc"),h=r("Q2Ze"),v=r("ZTz/"),E=r("e6WT"),g=r("jMqV"),P=r("Dxy4"),R=r("Tj54"),T=r("UhP/"),k=r("TSSN");function y(e,t){if(1&e&&(d.Xb(0,"mat-option",19),d.Oc(1),d.Wb()),2&e){var o=t.$implicit;d.pc("value",o.id),d.Eb(1),d.Qc(" ",o.srol," ")}}var C,I,N=((C=function(){function t(o,a,r){e(this,t),this.data=o,this.dialogRef=a,this.fb=r}return o(t,[{key:"ngOnInit",value:function(){this.buildItemForm(this.data.payload),this.listaDeRoles=this.data.roles}},{key:"buildItemForm",value:function(e){this.itemForm=this.fb.group({id:[e.id||""],soperador:[e.soperator||""],sclave:[e.sclave||""],snombre:[e.snombre||""],sapellido:[e.sapellido||""],semail:[e.semail||""],stelefono:[e.stelefono||""],rtopedescuento:[e.rtopedescuento||0],icodigosupervisor:[e.icodigosupervisor||0],bactivo:[!e.hasOwnProperty("bactivo")||"T"==e.bactivo],surlimage1:[e.surlimage1||""],idrol:[e.idrol]})}},{key:"submit",value:function(){this.dialogRef.close(this.itemForm.value)}}]),t}()).\u0275fac=function(e){return new(e||C)(d.Rb(f.a),d.Rb(f.g),d.Rb(m.d))},C.\u0275cmp=d.Lb({type:C,selectors:[["app-operator-settings-popup"]],decls:52,vars:42,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],["appearance","fill"],["name","irol",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"full-width"],["matInput","","name","snombre",3,"formControl","placeholder"],["matInput","","name","sapellido",3,"formControl","placeholder"],["matInput","","name","semail",3,"formControl","placeholder"],["matInput","","name","stelefono",3,"formControl","placeholder"],["matInput","","name","rtopedescuento",3,"formControl","placeholder"],["matInput","","type","password","name","icodigosupervisor",3,"formControl","placeholder"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(e,t){1&e&&(d.Xb(0,"h1",0),d.Oc(1),d.Wb(),d.Xb(2,"form",1),d.fc("ngSubmit",function(){return t.submit()}),d.Xb(3,"mat-dialog-content",2),d.Xb(4,"div",3),d.Xb(5,"mat-form-field",4),d.Xb(6,"mat-label"),d.Oc(7),d.kc(8,"translate"),d.Wb(),d.Xb(9,"mat-select",5),d.Mc(10,y,2,2,"mat-option",6),d.Wb(),d.Wb(),d.Wb(),d.Xb(11,"div",3),d.Xb(12,"mat-form-field",7),d.Sb(13,"input",8),d.kc(14,"translate"),d.Wb(),d.Wb(),d.Xb(15,"div",3),d.Xb(16,"mat-form-field",7),d.Sb(17,"input",9),d.kc(18,"translate"),d.Wb(),d.Wb(),d.Xb(19,"div",3),d.Xb(20,"mat-form-field",7),d.Sb(21,"input",10),d.kc(22,"translate"),d.Wb(),d.Wb(),d.Xb(23,"div",3),d.Xb(24,"mat-form-field",7),d.Sb(25,"input",11),d.kc(26,"translate"),d.Wb(),d.Wb(),d.Xb(27,"div",3),d.Xb(28,"mat-form-field",7),d.Sb(29,"input",12),d.kc(30,"translate"),d.Wb(),d.Wb(),d.Xb(31,"div",3),d.Xb(32,"mat-form-field",7),d.Sb(33,"input",13),d.kc(34,"translate"),d.Wb(),d.Wb(),d.Xb(35,"div",3),d.Xb(36,"mat-slide-toggle",14),d.Oc(37),d.kc(38,"translate"),d.Wb(),d.Wb(),d.Wb(),d.Xb(39,"mat-dialog-content",2),d.Xb(40,"div",15),d.Xb(41,"button",16),d.Xb(42,"mat-icon"),d.Oc(43,"save"),d.Wb(),d.Oc(44),d.kc(45,"translate"),d.Wb(),d.Sb(46,"span",17),d.Xb(47,"button",18),d.fc("click",function(){return t.dialogRef.close(!1)}),d.Xb(48,"mat-icon"),d.Oc(49,"cancel"),d.Wb(),d.Oc(50),d.kc(51,"translate"),d.Wb(),d.Wb(),d.Wb(),d.Wb()),2&e&&(d.Eb(1),d.Pc(t.data.title),d.Eb(1),d.pc("formGroup",t.itemForm),d.Eb(5),d.Pc(d.lc(8,22,"OPERATORSETTINGPOPUPCOMPONENT.ROLES")),d.Eb(2),d.pc("formControl",t.itemForm.controls.idrol),d.Eb(1),d.pc("ngForOf",t.listaDeRoles),d.Eb(3),d.qc("placeholder",d.lc(14,24,"OPERATORSETTINGPOPUPCOMPONENT.NAME")),d.pc("formControl",t.itemForm.controls.snombre),d.Eb(4),d.qc("placeholder",d.lc(18,26,"OPERATORSETTINGPOPUPCOMPONENT.SURNAME")),d.pc("formControl",t.itemForm.controls.sapellido),d.Eb(4),d.qc("placeholder",d.lc(22,28,"OPERATORSETTINGPOPUPCOMPONENT.EMAIL")),d.pc("formControl",t.itemForm.controls.semail),d.Eb(4),d.qc("placeholder",d.lc(26,30,"OPERATORSETTINGPOPUPCOMPONENT.PHONE")),d.pc("formControl",t.itemForm.controls.stelefono),d.Eb(4),d.qc("placeholder",d.lc(30,32,"OPERATORSETTINGPOPUPCOMPONENT.DISCOUNTCAP")),d.pc("formControl",t.itemForm.controls.rtopedescuento),d.Eb(4),d.qc("placeholder",d.lc(34,34,"OPERATORSETTINGPOPUPCOMPONENT.SUPERVISORCODE")),d.pc("formControl",t.itemForm.controls.icodigosupervisor),d.Eb(3),d.pc("formControl",t.itemForm.controls.bactivo),d.Eb(1),d.Pc(d.lc(38,36,"OPERATORSETTINGPOPUPCOMPONENT.ACTIVE")),d.Eb(4),d.pc("disabled",t.itemForm.invalid),d.Eb(3),d.Pc(d.lc(45,38,"OPERATORSETTINGPOPUPCOMPONENT.SAVE")),d.Eb(6),d.Pc(d.lc(51,40,"OPERATORSETTINGPOPUPCOMPONENT.CANCEL")))},directives:[f.h,m.w,m.p,m.i,f.e,O.c,O.a,h.c,h.f,v.a,m.o,m.f,n.n,E.b,m.c,g.a,P.b,R.a,T.n],pipes:[k.c],styles:[""],data:{animation:[c.a]}}),C),W=r("AytR"),S=r("IheW"),X=((I=function(){function t(o){e(this,t),this.http=o}return o(t,[{key:"obtenerDatos",value:function(e,t,o,a){return this.http.get(encodeURI("".concat(W.a.apiURL,'Operadores?filter={"where":').concat(e,',"limit":').concat(t,',"skip":').concat(o,',"order":"').concat(a,'"}')))}},{key:"obtenerCount",value:function(e){return this.http.get(encodeURI("".concat(W.a.apiURL,"Operadores/count?where=").concat(e)))}},{key:"actualizarOperador",value:function(e){return this.http.put("".concat(W.a.apiURL,"Operadores/").concat(e.id),e)}},{key:"agregarOperador",value:function(e){return this.http.post(W.a.apiURL+"Operadores",e)}},{key:"obtenerRoles",value:function(){return this.http.get(encodeURI(W.a.apiURL+"Roles"))}}]),t}()).\u0275fac=function(e){return new(e||I)(d.bc(S.c))},I.\u0275prov=d.Nb({token:I,factory:I.\u0275fac,providedIn:"root"}),I),A=r("zHaW"),w=r("PDjf"),U=r("w9WL");function F(e,t){if(1&e){var o=d.Yb();d.Xb(0,"button",12),d.fc("click",function(e){d.Dc(o);var t=d.jc(),a=d.Ac(10);return t.updateFilter(e)&&(a.value="")}),d.Xb(1,"mat-icon"),d.Oc(2,"close"),d.Wb(),d.Wb()}}function x(e,t){if(1&e&&d.Oc(0),2&e){var o=t.row;d.Rc(" ",null==o?null:o.snombre,"\xa0",null==o?null:o.sapellido," ")}}function M(e,t){if(1&e){var o=d.Yb();d.Xb(0,"button",13),d.fc("click",function(){d.Dc(o);var e=t.row;return d.jc().openPopUp(e)}),d.Xb(1,"mat-icon"),d.Oc(2,"edit"),d.Wb(),d.Wb(),d.Xb(3,"button",14),d.fc("click",function(){d.Dc(o);var e=t.row;return d.jc().deleteItem(e)}),d.Xb(4,"mat-icon"),d.Oc(5,"delete"),d.Wb(),d.Wb(),d.Xb(6,"button",13),d.fc("click",function(){d.Dc(o);var e=t.row;return d.jc().openUserInfoPopUp(e)}),d.Xb(7,"mat-icon"),d.Oc(8,"person_pin"),d.Wb(),d.Wb()}}var j,D,G=function(){return{y:"50px",delay:"300ms"}},L=function(e){return{value:"*",params:e}},q=[{path:"",component:(j=function(){function t(o,a,r,n,i,c){e(this,t),this.servicioOperadores=o,this.dialog=a,this.snack=r,this.confirmService=n,this.loader=i,this.servicioUUID=c,this.timeOutDuration=800,this.rows=[],this.order="snombre ASC",this.search="",this.page={count:0,offset:0,limit:10}}return o(t,[{key:"ngOnInit",value:function(){var e=this;this.servicioOperadores.obtenerRoles().subscribe(function(t){e.roles=t}),this.prepararFiltro(),this.refresh()}},{key:"prepararFiltro",value:function(){var e=this;if(this.search){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&(t.forEach(function(t,o){t.length>1&&(e.filter+='{"or":[{"snombre":{"ilike":"%'.concat(t,'%"}}]}'),o<e.search.length-1&&(e.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}},{key:"refresh",value:function(){var e=this;this.prepararFiltro(),Object(u.a)([this.servicioOperadores.obtenerCount(this.filter),this.servicioOperadores.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(function(t){e.page.count=t[0].count,e.rows=t[1]},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}},{key:"pageCallback",value:function(e){this.page.offset=e.offset,this.refresh()}},{key:"updateFilter",value:function(e){var t=this;return this.search=e instanceof MouseEvent?"":e.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(function(){t.refresh()},this.timeOutDuration),!0}},{key:"onSort",value:function(e){var t=e.sorts[0];this.order="".concat(t.prop," ").concat(t.dir.toUpperCase()),this.refresh()}},{key:"openPopUp",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;this.dialog.open(N,{width:"720px",disableClose:!0,data:{title:o?"AGREGAR OPERADOR":"ACTUALIZAR OPERADOR",payload:t,roles:this.roles}}).afterClosed().subscribe(function(t){if(t){e.loader.open();var a={};Object.assign(a,t),a.bactivo=t.bactivo?"T":"F",a.bfavorito=t.bfavorito?"T":"F",o?(a.id=e.servicioUUID.generateUUID(),e.servicioOperadores.agregarOperador(a).subscribe(function(t){e.refresh(),e.loader.close(),e.snack.open("\xa1Operador Agregado!","OK",{duration:4e3})},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})):e.servicioOperadores.actualizarOperador(a).subscribe(function(t){e.refresh(),e.loader.close(),e.snack.open("\xa1Operador Actualizado!","OK",{duration:4e3})},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}})}},{key:"deleteItem",value:function(e){var t=this;this.confirmService.confirm({message:"\xbfEliminar ".concat(e.snombre,"?")}).subscribe(function(o){if(o){t.loader.open();var a={};Object.assign(a,e),delete a.soperadorcreacion,delete a.fcreacion,delete a.soperadormodificacion,delete a.fmodificacion,delete a.insertedon,delete a.updatedon,a.deletedon=(new Date).toISOString(),t.servicioOperadores.actualizarOperador(a).subscribe(function(e){t.refresh(),t.loader.close(),t.snack.open("\xa1Operador Eliminado!","OK",{duration:4e3})},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}})}},{key:"openUserInfoPopUp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(p.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:e}})}}]),t}(),j.\u0275fac=function(e){return new(e||j)(d.Rb(X),d.Rb(f.b),d.Rb(A.a),d.Rb(l.a),d.Rb(s.a),d.Rb(b.a))},j.\u0275cmp=d.Lb({type:j,selectors:[["app-operator-settings"]],decls:22,vars:30,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","snombre",3,"name","flexGrow"],["ngx-datatable-cell-template",""],[3,"name","flexGrow"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(e,t){if(1&e&&(d.Xb(0,"div",0),d.Xb(1,"button",1),d.fc("click",function(){return t.openPopUp({},!0)}),d.Xb(2,"mat-icon"),d.Oc(3,"library_add"),d.Wb(),d.Oc(4),d.kc(5,"translate"),d.Wb(),d.Wb(),d.Xb(6,"mat-form-field",2),d.Xb(7,"mat-icon",3),d.Oc(8,"search"),d.Wb(),d.Xb(9,"input",4,5),d.fc("keyup",function(e){return t.updateFilter(e)}),d.kc(11,"translate"),d.Wb(),d.Mc(12,F,3,0,"button",6),d.Wb(),d.Xb(13,"mat-card",7),d.Xb(14,"mat-card-content",7),d.Xb(15,"ngx-datatable",8),d.fc("page",function(e){return t.pageCallback(e)})("sort",function(e){return t.onSort(e)}),d.Xb(16,"ngx-datatable-column",9),d.kc(17,"translate"),d.Mc(18,x,1,2,"ng-template",10),d.Wb(),d.Xb(19,"ngx-datatable-column",11),d.kc(20,"translate"),d.Mc(21,M,9,0,"ng-template",10),d.Wb(),d.Wb(),d.Wb(),d.Wb()),2&e){var o=d.Ac(10);d.Eb(4),d.Qc("",d.lc(5,19,"OPERATORSETTINGSCOMPONENT.ADDOPERATOR")," "),d.Eb(5),d.qc("placeholder",d.lc(11,21,"OPERATORSETTINGSCOMPONENT.FILTER")),d.Eb(3),d.pc("ngIf",o.value),d.Eb(1),d.pc("@animate",d.vc(28,L,d.uc(27,G))),d.Eb(2),d.pc("rows",t.rows)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit)("externalPaging",!0)("selectionType","single"),d.Eb(1),d.qc("name",d.lc(17,23,"OPERATORSETTINGSCOMPONENT.OPERATORS")),d.pc("flexGrow",1),d.Eb(3),d.qc("name",d.lc(20,25,"OPERATORSETTINGSCOMPONENT.ACTIONS")),d.pc("flexGrow",1)}},directives:[P.b,R.a,h.c,h.g,E.b,n.o,w.a,w.b,U.d,U.b,U.a,h.h],pipes:[k.c],styles:[""],data:{animation:[c.a]}}),j),data:{title:"OPERADORES"}}],H=r("u9T3"),z=r("f44v"),K=r("M9ds"),V=r("ZFy/"),J=r("PCNd"),Z=r("BxcV"),Q=((D=function t(){e(this,t)}).\u0275mod=d.Pb({type:D}),D.\u0275inj=d.Ob({factory:function(e){return new(e||D)},imports:[[n.c,m.t,H.a,U.f,E.c,E.c,w.c,E.c,P.c,z.a,E.c,V.b,f.f,A.b,g.b,K.c,v.b,R.b,k.b,J.a,Z.a,i.k.forChild(q)]]}),D)}}])}();