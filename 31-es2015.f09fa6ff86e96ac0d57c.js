(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"3W+A":function(t,e,a){"use strict";a.r(e),a.d(e,"TypeOfCashMovementModule",function(){return V});var i=a("SVse"),o=a("GmJt"),c=a("3kSh"),n=a("3sEA"),r=a("vpPe"),s=a("Ap+n"),l=a("iELJ"),b=a("8Y7J"),p=a("s7LF"),m=a("VDRc"),u=a("Q2Ze"),d=a("e6WT"),f=a("ZTz/"),h=a("jMqV"),O=a("Dxy4"),E=a("Tj54"),v=a("UhP/"),g=a("TSSN");function T(t,e){if(1&t&&(b.Xb(0,"mat-option",14),b.Oc(1),b.Wb()),2&t){const t=e.$implicit;b.pc("value",t.value),b.Eb(1),b.Qc(" ",null==t?null:t.name," ")}}let M=(()=>{class t{constructor(t,e,a){this.data=t,this.dialogRef=e,this.fb=a,this.tipoDeAplicacion=[{name:"NO APLICA",value:0},{name:"Ingreso",value:1},{name:"Egreso",value:-1}]}ngOnInit(){this.buildItemForm(this.data.payload)}buildItemForm(t){this.itemForm=this.fb.group({id:[t.id||""],stipomovcaja:[t.stipomovcaja||""],itipo:[t.itipo||0],isumaresta:[t.isumaresta||0],bactivo:[!t.hasOwnProperty("bactivo")||"T"==t.bactivo]})}submit(){this.dialogRef.close(this.itemForm.value)}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(l.a),b.Rb(l.f),b.Rb(p.d))},t.\u0275cmp=b.Lb({type:t,selectors:[["app-type-of-cash-movement-popup"]],decls:32,vars:22,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","stipomovcaja",3,"formControl","placeholder"],["appearance","fill"],["name","isumaresta",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(t,e){1&t&&(b.Xb(0,"h1",0),b.Oc(1),b.Wb(),b.Xb(2,"form",1),b.fc("ngSubmit",function(){return e.submit()}),b.Xb(3,"mat-dialog-content",2),b.Xb(4,"div",3),b.Xb(5,"mat-form-field",4),b.Sb(6,"input",5),b.kc(7,"translate"),b.Wb(),b.Wb(),b.Xb(8,"div",3),b.Xb(9,"mat-form-field",6),b.Xb(10,"mat-label"),b.Oc(11),b.kc(12,"translate"),b.Wb(),b.Xb(13,"mat-select",7),b.Mc(14,T,2,2,"mat-option",8),b.Wb(),b.Wb(),b.Wb(),b.Xb(15,"div",3),b.Xb(16,"mat-slide-toggle",9),b.Oc(17),b.kc(18,"translate"),b.Wb(),b.Wb(),b.Wb(),b.Xb(19,"mat-dialog-content",2),b.Xb(20,"div",10),b.Xb(21,"button",11),b.Xb(22,"mat-icon"),b.Oc(23,"save"),b.Wb(),b.Oc(24),b.kc(25,"translate"),b.Wb(),b.Sb(26,"span",12),b.Xb(27,"button",13),b.fc("click",function(){return e.dialogRef.close(!1)}),b.Xb(28,"mat-icon"),b.Oc(29,"cancel"),b.Wb(),b.Oc(30),b.kc(31,"translate"),b.Wb(),b.Wb(),b.Wb(),b.Wb()),2&t&&(b.Eb(1),b.Pc(e.data.title),b.Eb(1),b.pc("formGroup",e.itemForm),b.Eb(4),b.qc("placeholder",b.lc(7,12,"TYPEOFCASHMOVEMENTPOPUP.TYPEOFCASHMOVEMENTNAME")),b.pc("formControl",e.itemForm.controls.stipomovcaja),b.Eb(5),b.Pc(b.lc(12,14,"TYPEOFCASHMOVEMENTPOPUP.TYPEOFAPPLICATION")),b.Eb(2),b.pc("formControl",e.itemForm.controls.isumaresta),b.Eb(1),b.pc("ngForOf",e.tipoDeAplicacion),b.Eb(2),b.pc("formControl",e.itemForm.controls.bactivo),b.Eb(1),b.Pc(b.lc(18,16,"TYPEOFCASHMOVEMENTPOPUP.ACTIVE")),b.Eb(4),b.pc("disabled",e.itemForm.invalid),b.Eb(3),b.Pc(b.lc(25,18,"TYPEOFCASHMOVEMENTPOPUP.SAVE")),b.Eb(6),b.Pc(b.lc(31,20,"TYPEOFCASHMOVEMENTPOPUP.CANCEL")))},directives:[l.g,p.v,p.o,p.i,l.d,m.c,m.a,u.c,d.b,p.c,p.n,p.f,u.f,f.a,i.n,h.a,O.b,E.a,v.n],pipes:[g.c],styles:[""],data:{animation:[o.a]}}),t})();var P=a("AytR"),C=a("IheW");let j=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t,e,a){return this.http.get(encodeURI(`${P.a.apiURL}TiposMovCaja?filter={"where":${t},"limit":${e},"skip":${a},"order":"stipomovcaja ASC"}`))}actualizarTipoDeMovimientoDeCaja(t){return this.http.put(`${P.a.apiURL}TiposMovCaja/${t.id}`,t)}agregarTipoDeMovimientoDeCaja(t){return this.http.post(P.a.apiURL+"TiposMovCaja",t)}}return t.\u0275fac=function(e){return new(e||t)(b.bc(C.c))},t.\u0275prov=b.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var D=a("zHaW"),A=a("PDjf"),I=a("w9WL");function k(t,e){if(1&t&&b.Oc(0),2&t){const t=e.row;b.Qc(" ",null==t?null:t.stipomovcaja," ")}}function y(t,e){if(1&t){const t=b.Yb();b.Xb(0,"button",9),b.fc("click",function(){b.Dc(t);const a=e.row;return b.jc().openPopUp(a)}),b.Xb(1,"mat-icon"),b.Oc(2,"edit"),b.Wb(),b.Wb(),b.Xb(3,"button",10),b.fc("click",function(){b.Dc(t);const a=e.row;return b.jc().deleteItem(a)}),b.Xb(4,"mat-icon"),b.Oc(5,"delete"),b.Wb(),b.Wb(),b.Xb(6,"button",9),b.fc("click",function(){b.Dc(t);const a=e.row;return b.jc().openUserInfoPopUp(a)}),b.Xb(7,"mat-icon"),b.Oc(8,"person_pin"),b.Wb(),b.Wb()}}const W=function(){return{y:"50px",delay:"300ms"}},F=function(t){return{value:"*",params:t}},w=[{path:"",component:(()=>{class t{constructor(t,e,a,i,o,c){this.servicioTipoDeMovimientoDeCaja=t,this.dialog=e,this.snack=a,this.confirmService=i,this.loader=o,this.servicioUUID=c,this.timeOutDuration=800,this.rows=[],this.search="",this.page={count:0,offset:0,limit:10}}ngOnInit(){this.prepararFiltro(),this.refresh()}prepararFiltro(){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&t.forEach((t,e)=>{t.length>1&&(this.filter+=`{"or":[{"stipomovcaja":{"ilike":"%${t}%"}}]}`,e<this.search.length-1&&(this.filter+=","))}),this.filter+='{"itipo":0},{"deletedon":{"eq":null}}]}'}refresh(){this.prepararFiltro(),this.servicioTipoDeMovimientoDeCaja.obtenerDatos(this.filter,this.page.limit,this.page.offset).subscribe(t=>{this.page.count=50,this.rows=t},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(t){this.page.offset=t.offset*t.pageSize,this.refresh()}updateFilter(t){this.search=t.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration)}openPopUp(t={},e){this.dialog.open(M,{width:"720px",disableClose:!0,data:{title:e?"AGREGAR TIPO DE MOVIMIENTO DE CAJA":"ACTUALIZAR TIPO DE MOVIMIENTO DE CAJA",payload:t}}).afterClosed().subscribe(t=>{if(t){this.loader.open();var a={};Object.assign(a,t),a.bactivo=t.bactivo?"T":"F",e?(a.id=this.servicioUUID.generateUUID(),this.servicioTipoDeMovimientoDeCaja.agregarTipoDeMovimientoDeCaja(a).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Tipo de Movimiento de caja Agregada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioTipoDeMovimientoDeCaja.actualizarTipoDeMovimientoDeCaja(a).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Tipo de Movimiento de caja Actualizada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(t){this.confirmService.confirm({message:`\xbfEliminar ${t.stipomovcaja}?`}).subscribe(e=>{if(e){this.loader.open();var a={};Object.assign(a,t),delete a.soperadorcreacion,delete a.fcreacion,delete a.soperadormodificacion,delete a.fmodificacion,delete a.insertedon,delete a.updatedon,a.deletedon=(new Date).toISOString(),this.servicioTipoDeMovimientoDeCaja.actualizarTipoDeMovimientoDeCaja(a).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Tipo de Movimiento de caja Eliminada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}openUserInfoPopUp(t={}){this.dialog.open(s.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(j),b.Rb(l.b),b.Rb(D.a),b.Rb(c.a),b.Rb(n.a),b.Rb(r.a))},t.\u0275cmp=b.Lb({type:t,selectors:[["app-type-of-cash-movement"]],decls:20,vars:29,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page"],[3,"name","width"],["ngx-datatable-cell-template",""],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(t,e){1&t&&(b.Xb(0,"div",0),b.Xb(1,"button",1),b.fc("click",function(){return e.openPopUp({},!0)}),b.Xb(2,"mat-icon"),b.Oc(3,"library_add"),b.Wb(),b.Oc(4),b.kc(5,"translate"),b.Wb(),b.Wb(),b.Xb(6,"mat-form-field",2),b.Xb(7,"mat-icon",3),b.Oc(8,"search"),b.Wb(),b.Xb(9,"input",4),b.fc("keyup",function(t){return e.updateFilter(t)}),b.kc(10,"translate"),b.Wb(),b.Wb(),b.Xb(11,"mat-card",5),b.Xb(12,"mat-card-content",5),b.Xb(13,"ngx-datatable",6),b.fc("page",function(t){return e.pageCallback(t)}),b.Xb(14,"ngx-datatable-column",7),b.kc(15,"translate"),b.Mc(16,k,1,1,"ng-template",8),b.Wb(),b.Xb(17,"ngx-datatable-column",7),b.kc(18,"translate"),b.Mc(19,y,9,0,"ng-template",8),b.Wb(),b.Wb(),b.Wb(),b.Wb()),2&t&&(b.Eb(4),b.Pc(b.lc(5,18,"TYPEOFCASHMOVEMENT.ADDTYPEOFCASHMOVEMENT")),b.Eb(5),b.qc("placeholder",b.lc(10,20,"TYPEOFCASHMOVEMENT.FILTER")),b.Eb(2),b.pc("@animate",b.vc(27,F,b.uc(26,W))),b.Eb(2),b.pc("rows",e.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),b.Eb(1),b.qc("name",b.lc(15,22,"TYPEOFCASHMOVEMENT.TYPEOFCASHMOVEMENTNAME")),b.pc("width",150),b.Eb(3),b.qc("name",b.lc(18,24,"TYPEOFCASHMOVEMENT.ACTIONS")),b.pc("width",150))},directives:[O.b,E.a,u.c,u.g,d.b,A.a,A.b,I.d,I.b,I.a],pipes:[g.c],styles:[""],data:{animation:[o.a]}}),t})(),data:{title:"TIPO DE MOVIMIENTO DE CAJA"}}];var R=a("iInd"),X=a("u9T3"),S=a("f44v"),N=a("M9ds"),U=a("ZFy/"),x=a("PCNd"),H=a("BxcV");let V=(()=>{class t{}return t.\u0275mod=b.Pb({type:t}),t.\u0275inj=b.Ob({factory:function(e){return new(e||t)},imports:[[i.c,p.s,X.a,I.f,d.c,d.c,A.c,d.c,O.c,S.a,d.c,U.b,l.e,D.b,h.b,N.c,f.b,E.b,g.b,x.a,H.a,R.k.forChild(w)]]}),t})()},GmJt:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var i=a("GS7A");const o=Object(i.g)([Object(i.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(i.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(i.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),c=[Object(i.n)("animate",[Object(i.m)("void => *",[Object(i.o)(o)])]),Object(i.n)("fadeInOut",[Object(i.k)("0",Object(i.l)({opacity:0,display:"none"})),Object(i.k)("1",Object(i.l)({opacity:1,display:"block"})),Object(i.m)("0 => 1",Object(i.e)("300ms")),Object(i.m)("1 => 0",Object(i.e)("300ms"))])]}}]);