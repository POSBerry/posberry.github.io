(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{GmJt:function(t,e,o){"use strict";o.d(e,"a",function(){return a});var i=o("GS7A");const r=Object(i.g)([Object(i.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(i.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(i.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),a=[Object(i.n)("animate",[Object(i.m)("void => *",[Object(i.o)(r)])]),Object(i.n)("fadeInOut",[Object(i.k)("0",Object(i.l)({opacity:0,display:"none"})),Object(i.k)("1",Object(i.l)({opacity:1,display:"block"})),Object(i.m)("0 => 1",Object(i.e)("300ms")),Object(i.m)("1 => 0",Object(i.e)("300ms"))])]},uQd1:function(t,e,o){"use strict";o.r(e),o.d(e,"TaxesModule",function(){return V});var i=o("SVse"),r=o("GmJt"),a=o("3kSh"),c=o("3sEA"),s=o("vpPe"),n=o("GyhO"),l=o("cp0P"),p=o("IAdc"),b=o("7M/S"),u=o("Ap+n"),m=o("iELJ"),d=o("8Y7J"),f=o("s7LF"),h=o("VDRc"),g=o("Q2Ze"),O=o("e6WT"),I=o("ZTz/"),v=o("jMqV"),x=o("Dxy4"),k=o("Tj54"),E=o("UhP/"),W=o("TSSN");function w(t,e){if(1&t&&(d.Xb(0,"mat-option",15),d.Oc(1),d.Wb()),2&t){const t=e.$implicit;d.pc("value",null==t?null:t.tipo),d.Eb(1),d.Qc(" ",null==t?null:t.nombre," ")}}let y=(()=>{class t{constructor(t,e,o){this.data=t,this.dialogRef=e,this.fb=o,this.tiposImpuesto=[{tipo:2,nombre:"IVA"},{tipo:3,nombre:"Impuestos Provinciales"},{tipo:4,nombre:"Impuestos Internos"},{tipo:6,nombre:"Otros Impuestos"}]}ngOnInit(){this.buildItemForm(this.data.payload)}buildItemForm(t){console.log(t),this.itemForm=this.fb.group({id:[t.id||""],simpuesto:[t.simpuesto||""],itipo:[t.itipo||2],idtipoimpuesto:[t.idtipoimpuesto||2],rporc:[t.rporc||0],bactivo:[!t.hasOwnProperty("bactivo")||"T"==t.bactivo]})}submit(){this.dialogRef.close(this.itemForm.value)}}return t.\u0275fac=function(e){return new(e||t)(d.Rb(m.a),d.Rb(m.g),d.Rb(f.d))},t.\u0275cmp=d.Lb({type:t,selectors:[["app-taxes-popup"]],decls:36,vars:26,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","simpuesto",3,"formControl","placeholder"],["type","number","min","0","max","100","matInput","","name","rporc",3,"formControl","placeholder"],["appearance","fill"],["name","idtipoimpuesto",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(t,e){1&t&&(d.Xb(0,"h1",0),d.Oc(1),d.Wb(),d.Xb(2,"form",1),d.fc("ngSubmit",function(){return e.submit()}),d.Xb(3,"mat-dialog-content",2),d.Xb(4,"div",3),d.Xb(5,"mat-form-field",4),d.Sb(6,"input",5),d.kc(7,"translate"),d.Wb(),d.Wb(),d.Xb(8,"div",3),d.Xb(9,"mat-form-field",4),d.Sb(10,"input",6),d.kc(11,"translate"),d.Wb(),d.Wb(),d.Xb(12,"div",3),d.Xb(13,"mat-form-field",7),d.Xb(14,"mat-label"),d.Oc(15),d.kc(16,"translate"),d.Wb(),d.Xb(17,"mat-select",8),d.Mc(18,w,2,2,"mat-option",9),d.Wb(),d.Wb(),d.Wb(),d.Xb(19,"div",3),d.Xb(20,"mat-slide-toggle",10),d.Oc(21),d.kc(22,"translate"),d.Wb(),d.Wb(),d.Wb(),d.Xb(23,"mat-dialog-content",2),d.Xb(24,"div",11),d.Xb(25,"button",12),d.Xb(26,"mat-icon"),d.Oc(27,"save"),d.Wb(),d.Oc(28),d.kc(29,"translate"),d.Wb(),d.Sb(30,"span",13),d.Xb(31,"button",14),d.fc("click",function(){return e.dialogRef.close(!1)}),d.Xb(32,"mat-icon"),d.Oc(33,"cancel"),d.Wb(),d.Oc(34),d.kc(35,"translate"),d.Wb(),d.Wb(),d.Wb(),d.Wb()),2&t&&(d.Eb(1),d.Pc(e.data.title),d.Eb(1),d.pc("formGroup",e.itemForm),d.Eb(4),d.qc("placeholder",d.lc(7,14,"Impuesto")),d.pc("formControl",e.itemForm.controls.simpuesto),d.Eb(4),d.qc("placeholder",d.lc(11,16,"Porcentaje")),d.pc("formControl",e.itemForm.controls.rporc),d.Eb(5),d.Pc(d.lc(16,18,"Tipo")),d.Eb(2),d.pc("formControl",e.itemForm.controls.idtipoimpuesto),d.Eb(1),d.pc("ngForOf",e.tiposImpuesto),d.Eb(2),d.pc("formControl",e.itemForm.controls.bactivo),d.Eb(1),d.Pc(d.lc(22,20,"Activo")),d.Eb(4),d.pc("disabled",e.itemForm.invalid),d.Eb(3),d.Pc(d.lc(29,22,"FAMILIESPOPUPCOMPONENT.SAVE")),d.Eb(6),d.Pc(d.lc(35,24,"FAMILIESPOPUPCOMPONENT.CANCEL")))},directives:[m.h,f.w,f.p,f.i,m.e,h.c,h.a,g.c,O.b,f.c,f.o,f.f,f.s,g.f,I.a,i.n,v.a,x.b,k.a,E.n],pipes:[W.c],styles:[""],data:{animation:[r.a]}}),t})();var X=o("AytR"),R=o("IheW");let P=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t,e,o,i){return this.http.get(encodeURI(`${X.a.apiURL}Impuestos?filter={"where":${t},"limit":${e},"skip":${o},"order":"${i}"}`))}actualizarImpuesto(t){return this.http.put(`${X.a.apiURL}Impuestos/${t.id}`,t)}agregarImpuesto(t){return this.http.post(X.a.apiURL+"Impuestos",t)}obtenerCount(t){return this.http.get(encodeURI(`${X.a.apiURL}Impuestos/count?where=${t}`))}}return t.\u0275fac=function(e){return new(e||t)(d.bc(R.c))},t.\u0275prov=d.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var j=o("zHaW"),C=o("PDjf"),F=o("w9WL");function A(t,e){if(1&t){const t=d.Yb();d.Xb(0,"div",11),d.Xb(1,"button",12),d.fc("click",function(){return d.Dc(t),d.jc().openPopUp({},!0)}),d.Xb(2,"mat-icon"),d.Oc(3,"library_add"),d.Wb(),d.Oc(4),d.kc(5,"translate"),d.Wb(),d.Wb()}2&t&&(d.Eb(4),d.Qc("",d.lc(5,1,"Agregar Impuesto")," "))}function U(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",13),d.fc("click",function(e){d.Dc(t);const o=d.jc(),i=d.Ac(5);return o.updateFilter(e)&&(i.value="")}),d.Xb(1,"mat-icon"),d.Oc(2,"close"),d.Wb(),d.Wb()}}function S(t,e){if(1&t&&d.Oc(0),2&t){const t=e.row;d.Qc(" ",null==t?null:t.simpuesto," ")}}function M(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",16),d.fc("click",function(){d.Dc(t);const e=d.jc().row;return d.jc().deleteItem(e)}),d.Xb(1,"mat-icon"),d.Oc(2,"delete"),d.Wb(),d.Wb()}}function D(t,e){if(1&t){const t=d.Yb();d.Xb(0,"button",14),d.fc("click",function(){d.Dc(t);const o=e.row;return d.jc().openPopUp(o)}),d.Xb(1,"mat-icon"),d.Oc(2,"edit"),d.Wb(),d.Wb(),d.Mc(3,M,3,0,"button",15),d.Xb(4,"button",14),d.fc("click",function(){d.Dc(t);const o=e.row;return d.jc().openUserInfoPopUp(o)}),d.Xb(5,"mat-icon"),d.Oc(6,"person_pin"),d.Wb(),d.Wb()}if(2&t){const t=d.jc();d.Eb(3),d.pc("ngIf",t.puedeEliminar)}}const T=function(){return{y:"50px",delay:"300ms"}},L=function(t){return{value:"*",params:t}},$=[{path:"",component:(()=>{class t{constructor(t,e,o,i,r,a,c){this.servicioImpuestos=t,this.dialog=e,this.snack=o,this.confirmService=i,this.loader=r,this.servicioUUID=a,this.servicioPermisos=c,this.timeOutDuration=800,this.rows=[],this.puedeAgregar=!1,this.puedeEliminar=!1,this.order="simpuesto ASC",this.search="",this.page={count:0,offset:0,limit:10}}ngOnInit(){Object(n.a)(this.servicioPermisos.puedeAgregar("Compras"),this.servicioPermisos.puedeEliminar("Compras")).pipe(Object(p.a)()).subscribe(t=>{this.puedeAgregar=t[0],this.puedeEliminar=t[1]}),this.prepararFiltro(),this.refresh()}prepararFiltro(){if(this.search){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&(t.forEach((t,e)=>{t.length>1&&(this.filter+=`{"or":[{"simpuesto":{"ilike":"%${t}%"}}]}`,e<this.search.length-1&&(this.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}refresh(){this.prepararFiltro(),Object(l.a)([this.servicioImpuestos.obtenerCount(this.filter),this.servicioImpuestos.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(t=>{this.page.count=t[0].count,this.rows=t[1]},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(t){this.page.offset=t.offset,this.refresh()}updateFilter(t){return this.search=t instanceof MouseEvent?"":t.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(t){const e=t.sorts[0];this.order=`${e.prop} ${e.dir.toUpperCase()}`,this.refresh()}openPopUp(t={},e){this.dialog.open(y,{width:"720px",disableClose:!0,data:{title:e?"AGREGAR IMPUESTO":"ACTUALIZAR IMPUESTO",payload:t}}).afterClosed().subscribe(t=>{if(t){this.loader.open();var o={};Object.assign(o,t),o.bactivo=t.bactivo?"T":"F",e?(o.id=this.servicioUUID.generateUUID(),this.servicioImpuestos.agregarImpuesto(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Impuesto Agregado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioImpuestos.actualizarImpuesto(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Impuesto Actualizado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(t){this.confirmService.confirm({message:`\xbfEliminar ${t.simpuesto}?`}).subscribe(e=>{if(e){this.loader.open();var o={};Object.assign(o,t),delete o.soperadorcreacion,delete o.fcreacion,delete o.soperadormodificacion,delete o.fmodificacion,delete o.insertedon,delete o.updatedon,o.deletedon=(new Date).toISOString(),this.servicioImpuestos.actualizarImpuesto(o).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Impuesto Eliminado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}openUserInfoPopUp(t={}){this.dialog.open(u.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:t}})}}return t.\u0275fac=function(e){return new(e||t)(d.Rb(P),d.Rb(m.b),d.Rb(j.a),d.Rb(a.a),d.Rb(c.a),d.Rb(s.a),d.Rb(b.a))},t.\u0275cmp=d.Lb({type:t,selectors:[["app-taxes"]],decls:17,vars:29,consts:[["class","m-333",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","sort","page"],["prop","simpuesto",3,"name","width"],["ngx-datatable-cell-template",""],[3,"sortable","name","width"],[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(t,e){if(1&t&&(d.Mc(0,A,6,3,"div",0),d.Xb(1,"mat-form-field",1),d.Xb(2,"mat-icon",2),d.Oc(3,"search"),d.Wb(),d.Xb(4,"input",3,4),d.fc("keyup",function(t){return e.updateFilter(t)}),d.kc(6,"translate"),d.Wb(),d.Mc(7,U,3,0,"button",5),d.Wb(),d.Xb(8,"mat-card",6),d.Xb(9,"mat-card-content",6),d.Xb(10,"ngx-datatable",7),d.fc("sort",function(t){return e.onSort(t)})("page",function(t){return e.pageCallback(t)}),d.Xb(11,"ngx-datatable-column",8),d.kc(12,"translate"),d.Mc(13,S,1,1,"ng-template",9),d.Wb(),d.Xb(14,"ngx-datatable-column",10),d.kc(15,"translate"),d.Mc(16,D,7,1,"ng-template",9),d.Wb(),d.Wb(),d.Wb(),d.Wb()),2&t){const t=d.Ac(5);d.pc("ngIf",e.puedeAgregar),d.Eb(4),d.qc("placeholder",d.lc(6,20,"Filtrar")),d.Eb(3),d.pc("ngIf",t.value),d.Eb(1),d.pc("@animate",d.vc(27,L,d.uc(26,T))),d.Eb(2),d.pc("rows",e.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),d.Eb(1),d.qc("name",d.lc(12,22,"Impuesto")),d.pc("width",250),d.Eb(3),d.qc("name",d.lc(15,24,"Acciones")),d.pc("sortable",!1)("width",150)}},directives:[i.o,g.c,k.a,g.g,O.b,C.a,C.b,F.d,F.b,F.a,x.b,g.h],pipes:[W.c],styles:[""],data:{animation:[r.a]}}),t})(),data:{title:"Impuestos"}}];var N=o("iInd"),z=o("u9T3"),H=o("f44v"),q=o("M9ds"),G=o("ZFy/"),J=o("PCNd"),K=o("BxcV");let V=(()=>{class t{}return t.\u0275mod=d.Pb({type:t}),t.\u0275inj=d.Ob({factory:function(e){return new(e||t)},imports:[[i.c,f.t,z.a,F.f,O.c,O.c,C.c,O.c,x.c,H.a,O.c,G.b,m.f,j.b,v.b,q.c,I.b,k.b,W.b,J.a,K.a,N.k.forChild($)]]}),t})()},vpPe:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var i=o("8Y7J");let r=(()=>{class t{constructor(){}generateUUID(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var o=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?o:3&o|8).toString(16)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);