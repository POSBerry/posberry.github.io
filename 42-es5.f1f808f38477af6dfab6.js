!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"2Gm7":function(e,a,o){"use strict";o.r(a),o.d(a,"WebappsSettingsModule",function(){return K});var i,c,r=o("SVse"),s=o("GmJt"),l=o("3kSh"),b=o("3sEA"),u=o("vpPe"),p=o("cp0P"),f=o("Ap+n"),d=o("iELJ"),m=o("8Y7J"),h=o("s7LF"),v=o("VDRc"),g=o("Q2Ze"),O=o("e6WT"),y=o("Dxy4"),k=o("Tj54"),W=o("TSSN"),x=((i=function(){function e(n,a,o){t(this,e),this.data=n,this.dialogRef=a,this.fb=o}return n(e,[{key:"ngOnInit",value:function(){this.buildItemForm(this.data.payload)}},{key:"buildItemForm",value:function(t){this.itemForm=this.fb.group({id:[t.id||""],snombre:[t.snombre||""],surl:[t.surl||""]})}},{key:"submit",value:function(){this.dialogRef.close(this.itemForm.value)}}]),e}()).\u0275fac=function(t){return new(t||i)(m.Rb(d.a),m.Rb(d.g),m.Rb(h.d))},i.\u0275cmp=m.Lb({type:i,selectors:[["app-webapps-settings-popup"]],decls:25,vars:17,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","snombre",3,"formControl","placeholder"],["matInput","","name","surl",3,"formControl","placeholder"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"]],template:function(t,e){1&t&&(m.Xb(0,"h1",0),m.Oc(1),m.Wb(),m.Xb(2,"form",1),m.fc("ngSubmit",function(){return e.submit()}),m.Xb(3,"mat-dialog-content",2),m.Xb(4,"div",3),m.Xb(5,"mat-form-field",4),m.Sb(6,"input",5),m.kc(7,"translate"),m.Wb(),m.Wb(),m.Xb(8,"div",3),m.Xb(9,"mat-form-field",4),m.Sb(10,"input",6),m.kc(11,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Xb(12,"mat-dialog-content",2),m.Xb(13,"div",7),m.Xb(14,"button",8),m.Xb(15,"mat-icon"),m.Oc(16,"save"),m.Wb(),m.Oc(17),m.kc(18,"translate"),m.Wb(),m.Sb(19,"span",9),m.Xb(20,"button",10),m.fc("click",function(){return e.dialogRef.close(!1)}),m.Xb(21,"mat-icon"),m.Oc(22,"cancel"),m.Wb(),m.Oc(23),m.kc(24,"translate"),m.Wb(),m.Wb(),m.Wb(),m.Wb()),2&t&&(m.Eb(1),m.Pc(e.data.title),m.Eb(1),m.pc("formGroup",e.itemForm),m.Eb(4),m.qc("placeholder",m.lc(7,9,"NOMBRE")),m.pc("formControl",e.itemForm.controls.snombre),m.Eb(4),m.qc("placeholder",m.lc(11,11,"URL")),m.pc("formControl",e.itemForm.controls.surl),m.Eb(4),m.pc("disabled",e.itemForm.invalid),m.Eb(3),m.Pc(m.lc(18,13,"FAMILIESPOPUPCOMPONENT.SAVE")),m.Eb(6),m.Pc(m.lc(24,15,"FAMILIESPOPUPCOMPONENT.CANCEL")))},directives:[d.h,h.v,h.o,h.i,d.e,v.c,v.a,g.c,O.b,h.c,h.n,h.f,y.b,k.a],pipes:[W.c],styles:[""],data:{animation:[s.a]}}),i),w=o("AytR"),E=o("IheW"),I=((c=function(){function e(n){t(this,e),this.http=n}return n(e,[{key:"obtenerDatos",value:function(t,e,n){return this.http.get(encodeURI("".concat(w.a.apiURL,'Webapps?filter={"where":').concat(t,',"limit":').concat(e,',"skip":').concat(n,',"order":"snombre ASC"}')))}},{key:"obtenerCount",value:function(t){return this.http.get(encodeURI("".concat(w.a.apiURL,"Webapps/count?where=").concat(t)))}},{key:"actualizarWebapps",value:function(t){return this.http.put("".concat(w.a.apiURL,"Webapps/").concat(t.id),t)}},{key:"agregarWebapps",value:function(t){return this.http.post(w.a.apiURL+"Webapps",t)}}]),e}()).\u0275fac=function(t){return new(t||c)(m.bc(E.c))},c.\u0275prov=m.Nb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),R=o("zHaW"),P=o("PDjf"),X=o("w9WL");function A(t,e){if(1&t&&m.Oc(0),2&t){var n=e.row;m.Qc(" ",null==n?null:n.snombre," ")}}function j(t,e){if(1&t){var n=m.Yb();m.Xb(0,"button",9),m.fc("click",function(){m.Dc(n);var t=e.row;return m.jc().openPopUp(t)}),m.Xb(1,"mat-icon"),m.Oc(2,"edit"),m.Wb(),m.Wb(),m.Xb(3,"button",10),m.fc("click",function(){m.Dc(n);var t=e.row;return m.jc().deleteItem(t)}),m.Xb(4,"mat-icon"),m.Oc(5,"delete"),m.Wb(),m.Wb(),m.Xb(6,"button",9),m.fc("click",function(){m.Dc(n);var t=e.row;return m.jc().openUserInfoPopUp(t)}),m.Xb(7,"mat-icon"),m.Oc(8,"person_pin"),m.Wb(),m.Wb()}}var F,C,U=function(){return{y:"50px",delay:"300ms"}},S=function(t){return{value:"*",params:t}},T=[{path:"",component:(F=function(){function e(n,a,o,i,c,r){t(this,e),this.servicioWebapps=n,this.dialog=a,this.snack=o,this.confirmService=i,this.loader=c,this.servicioUUID=r,this.timeOutDuration=800,this.rows=[],this.search="",this.page={count:0,offset:0,limit:10}}return n(e,[{key:"ngOnInit",value:function(){this.prepararFiltro(),this.refresh()}},{key:"prepararFiltro",value:function(){var t=this;if(this.search){this.filter='{"and":[';var e=this.search.split(" ");e.length>0&&(e.forEach(function(e,n){e.length>1&&(t.filter+='{"or":[{"snombre":{"ilike":"%'.concat(e,'%"}}]}'),n<t.search.length-1&&(t.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}},{key:"refresh",value:function(){var t=this;this.prepararFiltro(),Object(p.a)([this.servicioWebapps.obtenerCount(this.filter),this.servicioWebapps.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit)]).subscribe(function(e){t.page.count=e[0].count,t.rows=e[1]},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"pageCallback",value:function(t){this.page.offset=t.offset,this.refresh()}},{key:"updateFilter",value:function(t){var e=this;this.search=t.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(function(){e.refresh()},this.timeOutDuration)}},{key:"openPopUp",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.dialog.open(x,{width:"720px",disableClose:!0,data:{title:n?"AGREGAR WEBAPP":"ACTUALIZAR WEBAPP",payload:e}}).afterClosed().subscribe(function(e){if(e){t.loader.open();var a={};Object.assign(a,e),a.bactivo=e.bactivo?"T":"F",a.bfavorito=e.bfavorito?"T":"F",n?(a.id=t.servicioUUID.generateUUID(),t.servicioWebapps.agregarWebapps(a).subscribe(function(e){t.refresh(),t.loader.close(),t.snack.open("\xa1WebApp Agregada!","OK",{duration:4e3})},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})):t.servicioWebapps.actualizarWebapps(a).subscribe(function(e){t.refresh(),t.loader.close(),t.snack.open("\xa1WebApp Actualizada!","OK",{duration:4e3})},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}})}},{key:"deleteItem",value:function(t){var e=this;this.confirmService.confirm({message:"\xbfEliminar ".concat(t.snombre,"?")}).subscribe(function(n){if(n){e.loader.open();var a={};Object.assign(a,t),delete a.soperadorcreacion,delete a.fcreacion,delete a.soperadormodificacion,delete a.fmodificacion,delete a.insertedon,delete a.updatedon,a.deletedon=(new Date).toISOString(),e.servicioWebapps.actualizarWebapps(a).subscribe(function(t){e.refresh(),e.loader.close(),e.snack.open("\xa1WebApp Eliminada!","OK",{duration:4e3})},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}})}},{key:"openUserInfoPopUp",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.dialog.open(f.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}]),e}(),F.\u0275fac=function(t){return new(t||F)(m.Rb(I),m.Rb(d.b),m.Rb(R.a),m.Rb(l.a),m.Rb(b.a),m.Rb(u.a))},F.\u0275cmp=m.Lb({type:F,selectors:[["app-webapps-settings"]],decls:20,vars:29,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page"],[3,"name","width"],["ngx-datatable-cell-template",""],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(t,e){1&t&&(m.Xb(0,"div",0),m.Xb(1,"button",1),m.fc("click",function(){return e.openPopUp({},!0)}),m.Xb(2,"mat-icon"),m.Oc(3,"library_add"),m.Wb(),m.Oc(4),m.kc(5,"translate"),m.Wb(),m.Wb(),m.Xb(6,"mat-form-field",2),m.Xb(7,"mat-icon",3),m.Oc(8,"search"),m.Wb(),m.Xb(9,"input",4),m.fc("keyup",function(t){return e.updateFilter(t)}),m.kc(10,"translate"),m.Wb(),m.Wb(),m.Xb(11,"mat-card",5),m.Xb(12,"mat-card-content",5),m.Xb(13,"ngx-datatable",6),m.fc("page",function(t){return e.pageCallback(t)}),m.Xb(14,"ngx-datatable-column",7),m.kc(15,"translate"),m.Mc(16,A,1,1,"ng-template",8),m.Wb(),m.Xb(17,"ngx-datatable-column",7),m.kc(18,"translate"),m.Mc(19,j,9,0,"ng-template",8),m.Wb(),m.Wb(),m.Wb(),m.Wb()),2&t&&(m.Eb(4),m.Pc(m.lc(5,18,"Agregar Web App")),m.Eb(5),m.qc("placeholder",m.lc(10,20,"FAMILIESCOMPONENT.FILTER")),m.Eb(2),m.pc("@animate",m.vc(27,S,m.uc(26,U))),m.Eb(2),m.pc("rows",e.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),m.Eb(1),m.qc("name",m.lc(15,22,"Nombre")),m.pc("width",150),m.Eb(3),m.qc("name",m.lc(18,24,"FAMILIESCOMPONENT.ACTIONS")),m.pc("width",150))},directives:[y.b,k.a,g.c,g.g,O.b,P.a,P.b,X.d,X.b,X.a],pipes:[W.c],styles:[""],data:{animation:[s.a]}}),F),data:{title:"WebApps"}}],M=o("u9T3"),D=o("f44v"),L=o("ZTz/"),N=o("jMqV"),z=o("M9ds"),H=o("ZFy/"),q=o("iInd"),G=o("PCNd"),J=o("BxcV"),K=((C=function e(){t(this,e)}).\u0275mod=m.Pb({type:C}),C.\u0275inj=m.Ob({factory:function(t){return new(t||C)},imports:[[r.c,h.s,M.a,X.f,O.c,O.c,P.c,O.c,y.c,D.a,O.c,H.b,d.f,R.b,N.b,z.c,L.b,k.b,W.b,G.a,J.a,q.k.forChild(T)]]}),C)},GmJt:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("GS7A"),o=Object(a.g)([Object(a.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(a.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(a.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),i=[Object(a.n)("animate",[Object(a.m)("void => *",[Object(a.o)(o)])]),Object(a.n)("fadeInOut",[Object(a.k)("0",Object(a.l)({opacity:0,display:"none"})),Object(a.k)("1",Object(a.l)({opacity:1,display:"block"})),Object(a.m)("0 => 1",Object(a.e)("300ms")),Object(a.m)("1 => 0",Object(a.e)("300ms"))])]},vpPe:function(e,a,o){"use strict";o.d(a,"a",function(){return c});var i=o("8Y7J"),c=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"generateUUID",value:function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)})}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();