(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8dkk":function(t,e,i){"use strict";i.r(e),i.d(e,"NotificationSettingsModule",function(){return z});var o=i("SVse"),a=i("GmJt"),c=i("3kSh"),r=i("3sEA"),n=i("vpPe"),s=i("cp0P"),l=i("Ap+n"),b=i("iELJ"),u=i("8Y7J"),p=i("s7LF"),f=i("VDRc"),d=i("Q2Ze"),m=i("e6WT"),h=i("ZTz/"),O=i("jMqV"),I=i("Dxy4"),g=i("Tj54"),N=i("UhP/"),v=i("TSSN");function T(t,e){if(1&t&&(u.Xb(0,"mat-option",15),u.Oc(1),u.Wb()),2&t){const t=e.$implicit;u.pc("value",t.value),u.Eb(1),u.Qc(" ",null==t?null:t.name," ")}}let x=(()=>{class t{constructor(t,e,i){this.data=t,this.dialogRef=e,this.fb=i,this.mostrarPrioridad=[{name:"Normal",value:1},{name:"Alta",value:0},{name:"Baja",value:2}]}ngOnInit(){this.buildItemForm(this.data.payload)}buildItemForm(t){this.itemForm=this.fb.group({id:[t.id||""],idpv:[t.idpv||""],stitulo:[t.stitulo||""],scuerpo:[t.scuerpo||""],ffecha:[t.ffecha||""],iprioridad:[t.iprioridad||0],bactivo:[!t.hasOwnProperty("bactivo")||"T"==t.bactivo],surlimage1:[t.surlimage1||""]})}submit(){this.dialogRef.close(this.itemForm.value)}}return t.\u0275fac=function(e){return new(e||t)(u.Rb(b.a),u.Rb(b.g),u.Rb(p.d))},t.\u0275cmp=u.Lb({type:t,selectors:[["app-notification-settings-popup"]],decls:36,vars:26,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","stitulo",3,"formControl","placeholder"],["matInput","","name","scuerpo",3,"formControl","placeholder"],["appearance","fill"],["name","iprioridad",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(t,e){1&t&&(u.Xb(0,"h1",0),u.Oc(1),u.Wb(),u.Xb(2,"form",1),u.fc("ngSubmit",function(){return e.submit()}),u.Xb(3,"mat-dialog-content",2),u.Xb(4,"div",3),u.Xb(5,"mat-form-field",4),u.Sb(6,"input",5),u.kc(7,"translate"),u.Wb(),u.Wb(),u.Xb(8,"div",3),u.Xb(9,"mat-form-field",4),u.Sb(10,"input",6),u.kc(11,"translate"),u.Wb(),u.Wb(),u.Xb(12,"div",3),u.Xb(13,"mat-form-field",7),u.Xb(14,"mat-label"),u.Oc(15),u.kc(16,"translate"),u.Wb(),u.Xb(17,"mat-select",8),u.Mc(18,T,2,2,"mat-option",9),u.Wb(),u.Wb(),u.Wb(),u.Xb(19,"div",3),u.Xb(20,"mat-slide-toggle",10),u.Oc(21),u.kc(22,"translate"),u.Wb(),u.Wb(),u.Wb(),u.Xb(23,"mat-dialog-content",2),u.Xb(24,"div",11),u.Xb(25,"button",12),u.Xb(26,"mat-icon"),u.Oc(27,"save"),u.Wb(),u.Oc(28),u.kc(29,"translate"),u.Wb(),u.Sb(30,"span",13),u.Xb(31,"button",14),u.fc("click",function(){return e.dialogRef.close(!1)}),u.Xb(32,"mat-icon"),u.Oc(33,"cancel"),u.Wb(),u.Oc(34),u.kc(35,"translate"),u.Wb(),u.Wb(),u.Wb(),u.Wb()),2&t&&(u.Eb(1),u.Pc(e.data.title),u.Eb(1),u.pc("formGroup",e.itemForm),u.Eb(4),u.qc("placeholder",u.lc(7,14,"NOTIFICATIONSETTINGSPOPUP.TITLE")),u.pc("formControl",e.itemForm.controls.stitulo),u.Eb(4),u.qc("placeholder",u.lc(11,16,"NOTIFICATIONSETTINGSPOPUP.BODY")),u.pc("formControl",e.itemForm.controls.scuerpo),u.Eb(5),u.Pc(u.lc(16,18,"NOTIFICATIONSETTINGSPOPUP.PRIORITY")),u.Eb(2),u.pc("formControl",e.itemForm.controls.iprioridad),u.Eb(1),u.pc("ngForOf",e.mostrarPrioridad),u.Eb(2),u.pc("formControl",e.itemForm.controls.bactivo),u.Eb(1),u.Pc(u.lc(22,20,"NOTIFICATIONSETTINGSPOPUP.ACTIVE")),u.Eb(4),u.pc("disabled",e.itemForm.invalid),u.Eb(3),u.Pc(u.lc(29,22,"NOTIFICATIONSETTINGSPOPUP.SAVE")),u.Eb(6),u.Pc(u.lc(35,24,"NOTIFICATIONSETTINGSPOPUP.CANCEL")))},directives:[b.h,p.v,p.o,p.i,b.e,f.c,f.a,d.c,m.b,p.c,p.n,p.f,d.f,h.a,o.n,O.a,I.b,g.a,N.n],pipes:[v.c],styles:[""],data:{animation:[a.a]}}),t})();var E=i("AytR"),k=i("IheW");let C=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t,e,i,o){return this.http.get(encodeURI(`${E.a.apiURL}Notificaciones?filter={"where":${t},"limit":${e},"skip":${i},"order":"${o}"}`))}obtenerCount(t){return this.http.get(encodeURI(`${E.a.apiURL}Notificaciones/count?where=${t}`))}actualizarNotificacion(t){return this.http.put(`${E.a.apiURL}Notificaciones/${t.id}`,t)}agregarNotificacion(t){return this.http.post(E.a.apiURL+"Notificaciones",t)}}return t.\u0275fac=function(e){return new(e||t)(u.bc(k.c))},t.\u0275prov=u.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var F=i("zHaW"),S=i("PDjf"),W=i("w9WL");function P(t,e){if(1&t){const t=u.Yb();u.Xb(0,"button",12),u.fc("click",function(e){u.Dc(t);const i=u.jc(),o=u.Ac(10);return i.updateFilter(e)&&(o.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function w(t,e){if(1&t&&u.Oc(0),2&t){const t=e.row;u.Qc(" ",null==t?null:t.stitulo," ")}}function y(t,e){if(1&t){const t=u.Yb();u.Xb(0,"button",13),u.fc("click",function(){u.Dc(t);const i=e.row;return u.jc().openPopUp(i)}),u.Xb(1,"mat-icon"),u.Oc(2,"edit"),u.Wb(),u.Wb(),u.Xb(3,"button",14),u.fc("click",function(){u.Dc(t);const i=e.row;return u.jc().deleteItem(i)}),u.Xb(4,"mat-icon"),u.Oc(5,"delete"),u.Wb(),u.Wb(),u.Xb(6,"button",13),u.fc("click",function(){u.Dc(t);const i=e.row;return u.jc().openUserInfoPopUp(i)}),u.Xb(7,"mat-icon"),u.Oc(8,"person_pin"),u.Wb(),u.Wb()}}const R=function(){return{y:"50px",delay:"300ms"}},X=function(t){return{value:"*",params:t}},A=[{path:"",component:(()=>{class t{constructor(t,e,i,o,a,c){this.servicioNotificaciones=t,this.dialog=e,this.snack=i,this.confirmService=o,this.loader=a,this.servicioUUID=c,this.timeOutDuration=800,this.rows=[],this.order="stitulo ASC",this.search="",this.page={count:0,offset:0,limit:10}}ngOnInit(){this.prepararFiltro(),this.refresh()}prepararFiltro(){if(this.search){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&(t.forEach((t,e)=>{t.length>1&&(this.filter+=`{"or":[{"stitulo":{"ilike":"%${t}%"}}]}`,e<this.search.length-1&&(this.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}refresh(){this.prepararFiltro(),Object(s.a)([this.servicioNotificaciones.obtenerCount(this.filter),this.servicioNotificaciones.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(t=>{this.page.count=t[0].count,this.rows=t[1]},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(t){this.page.offset=t.offset,this.refresh()}updateFilter(t){return this.search=t instanceof MouseEvent?"":t.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(t){const e=t.sorts[0];this.order=`${e.prop} ${e.dir.toUpperCase()}`,this.refresh()}openPopUp(t={},e){this.dialog.open(x,{width:"720px",disableClose:!0,data:{title:e?"AGREGAR NOTIFICACION":"ACTUALIZAR NOTIFICACION",payload:t}}).afterClosed().subscribe(t=>{if(t){this.loader.open();var i={};Object.assign(i,t),i.bactivo=t.bactivo?"T":"F",i.bfavorito=t.bfavorito?"T":"F",e?(i.id=this.servicioUUID.generateUUID(),this.servicioNotificaciones.agregarNotificacion(i).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Notificacion Agregada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioNotificaciones.actualizarNotificacion(i).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Notificacion Actualizada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(t){this.confirmService.confirm({message:`\xbfEliminar ${t.stitulo}?`}).subscribe(e=>{if(e){this.loader.open();var i={};Object.assign(i,t),delete i.soperadorcreacion,delete i.fcreacion,delete i.soperadormodificacion,delete i.fmodificacion,delete i.insertedon,delete i.updatedon,i.deletedon=(new Date).toISOString(),this.servicioNotificaciones.actualizarNotificacion(i).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Notificacion Eliminada!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}openUserInfoPopUp(t={}){this.dialog.open(l.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(u.Rb(C),u.Rb(b.b),u.Rb(F.a),u.Rb(c.a),u.Rb(r.a),u.Rb(n.a))},t.\u0275cmp=u.Lb({type:t,selectors:[["app-notification-settings"]],decls:22,vars:30,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","stitulo",3,"name","width"],["ngx-datatable-cell-template",""],[3,"name","width"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(t,e){if(1&t&&(u.Xb(0,"div",0),u.Xb(1,"button",1),u.fc("click",function(){return e.openPopUp({},!0)}),u.Xb(2,"mat-icon"),u.Oc(3,"library_add"),u.Wb(),u.Oc(4),u.kc(5,"translate"),u.Wb(),u.Wb(),u.Xb(6,"mat-form-field",2),u.Xb(7,"mat-icon",3),u.Oc(8,"search"),u.Wb(),u.Xb(9,"input",4,5),u.fc("keyup",function(t){return e.updateFilter(t)}),u.kc(11,"translate"),u.Wb(),u.Mc(12,P,3,0,"button",6),u.Wb(),u.Xb(13,"mat-card",7),u.Xb(14,"mat-card-content",7),u.Xb(15,"ngx-datatable",8),u.fc("page",function(t){return e.pageCallback(t)})("sort",function(t){return e.onSort(t)}),u.Xb(16,"ngx-datatable-column",9),u.kc(17,"translate"),u.Mc(18,w,1,1,"ng-template",10),u.Wb(),u.Xb(19,"ngx-datatable-column",11),u.kc(20,"translate"),u.Mc(21,y,9,0,"ng-template",10),u.Wb(),u.Wb(),u.Wb(),u.Wb()),2&t){const t=u.Ac(10);u.Eb(4),u.Qc("",u.lc(5,19,"NOTIFICATIONSETTINGS.ADDNOTIFICATION")," "),u.Eb(5),u.qc("placeholder",u.lc(11,21,"NOTIFICATIONSETTINGS.FILTER")),u.Eb(3),u.pc("ngIf",t.value),u.Eb(1),u.pc("@animate",u.vc(28,X,u.uc(27,R))),u.Eb(2),u.pc("rows",e.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),u.Eb(1),u.qc("name",u.lc(17,23,"NOTIFICATIONSETTINGS.NOTIFICATION")),u.pc("width",150),u.Eb(3),u.qc("name",u.lc(20,25,"NOTIFICATIONSETTINGS.ACTIONS")),u.pc("width",150)}},directives:[I.b,g.a,d.c,d.g,m.b,o.o,S.a,S.b,W.d,W.b,W.a,d.h],pipes:[v.c],styles:[""],data:{animation:[a.a]}}),t})(),data:{title:"NOTIFICACIONES"}}];var U=i("u9T3"),j=i("f44v"),D=i("M9ds"),G=i("ZFy/"),L=i("iInd"),M=i("PCNd"),$=i("BxcV");let z=(()=>{class t{}return t.\u0275mod=u.Pb({type:t}),t.\u0275inj=u.Ob({factory:function(e){return new(e||t)},imports:[[o.c,p.s,U.a,W.f,m.c,m.c,S.c,m.c,I.c,j.a,m.c,G.b,b.f,F.b,O.b,D.c,h.b,g.b,v.b,M.a,$.a,L.k.forChild(A)]]}),t})()},GmJt:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var o=i("GS7A");const a=Object(o.g)([Object(o.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(o.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(o.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),c=[Object(o.n)("animate",[Object(o.m)("void => *",[Object(o.o)(a)])]),Object(o.n)("fadeInOut",[Object(o.k)("0",Object(o.l)({opacity:0,display:"none"})),Object(o.k)("1",Object(o.l)({opacity:1,display:"block"})),Object(o.m)("0 => 1",Object(o.e)("300ms")),Object(o.m)("1 => 0",Object(o.e)("300ms"))])]},vpPe:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var o=i("8Y7J");let a=(()=>{class t{constructor(){}generateUUID(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?i:3&i|8).toString(16)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);