(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{GmJt:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var o=i("GS7A");const c=Object(o.g)([Object(o.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(o.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(o.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),a=[Object(o.n)("animate",[Object(o.m)("void => *",[Object(o.o)(c)])]),Object(o.n)("fadeInOut",[Object(o.k)("0",Object(o.l)({opacity:0,display:"none"})),Object(o.k)("1",Object(o.l)({opacity:1,display:"block"})),Object(o.m)("0 => 1",Object(o.e)("300ms")),Object(o.m)("1 => 0",Object(o.e)("300ms"))])]},mzdz:function(e,t,i){"use strict";i.r(t),i.d(t,"RolesSettingsModule",function(){return V});var o=i("SVse"),c=i("GmJt"),a=i("3kSh"),r=i("3sEA"),n=i("vpPe"),s=i("cp0P"),l=i("7M/S"),b=i("Ap+n"),p=i("s7LF"),d=i("iELJ"),u=i("8Y7J"),m=i("VDRc"),h=i("Q2Ze"),f=i("e6WT"),g=i("Dxy4"),O=i("Tj54"),R=i("TSSN");let E=(()=>{class e{constructor(e,t,i,o){this.data=e,this.dialogRef=t,this.fb=i,this.cdRef=o}ngOnInit(){this.buildItemForm(this.data.payload)}buildItemForm(e){this.itemForm=this.fb.group({id:[e.id||""],srol:[e.srol||"",p.v.required],sdescripcion:[e.sdescripcion||"",p.v.required]})}submit(){this.dialogRef.close(this.itemForm.value)}ngAfterViewChecked(){window.dispatchEvent(new Event("resize")),this.cdRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(u.Rb(d.a),u.Rb(d.g),u.Rb(p.d),u.Rb(u.h))},e.\u0275cmp=u.Lb({type:e,selectors:[["app-new-rol-popup"]],decls:25,vars:17,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","srol",3,"formControl","placeholder"],["matInput","","name","sdescripcion",3,"formControl","placeholder"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"]],template:function(e,t){1&e&&(u.Xb(0,"h1",0),u.Oc(1),u.Wb(),u.Xb(2,"form",1),u.fc("ngSubmit",function(){return t.submit()}),u.Xb(3,"mat-dialog-content",2),u.Xb(4,"div",3),u.Xb(5,"mat-form-field",4),u.Sb(6,"input",5),u.kc(7,"translate"),u.Wb(),u.Wb(),u.Xb(8,"div",3),u.Xb(9,"mat-form-field",4),u.Sb(10,"input",6),u.kc(11,"translate"),u.Wb(),u.Wb(),u.Wb(),u.Xb(12,"mat-dialog-content",2),u.Xb(13,"div",7),u.Xb(14,"button",8),u.Xb(15,"mat-icon"),u.Oc(16,"save"),u.Wb(),u.Oc(17),u.kc(18,"translate"),u.Wb(),u.Sb(19,"span",9),u.Xb(20,"button",10),u.fc("click",function(){return t.dialogRef.close(!1)}),u.Xb(21,"mat-icon"),u.Oc(22,"cancel"),u.Wb(),u.Oc(23),u.kc(24,"translate"),u.Wb(),u.Wb(),u.Wb(),u.Wb()),2&e&&(u.Eb(1),u.Pc(t.data.title),u.Eb(1),u.pc("formGroup",t.itemForm),u.Eb(4),u.rc("placeholder","*",u.lc(7,9,"Rol"),""),u.pc("formControl",t.itemForm.controls.srol),u.Eb(4),u.rc("placeholder","*",u.lc(11,11,"Descripci\xf3n"),""),u.pc("formControl",t.itemForm.controls.sdescripcion),u.Eb(4),u.pc("disabled",t.itemForm.invalid),u.Eb(3),u.Qc("",u.lc(18,13,"PRODUCTSPOPUPCOMPONENT.SAVE")," "),u.Eb(6),u.Qc("",u.lc(24,15,"PRODUCTSPOPUPCOMPONENT.CANCEL")," "))},directives:[d.h,p.w,p.p,p.i,d.e,m.c,m.a,h.c,f.b,p.c,p.o,p.f,g.b,O.a],pipes:[R.c],styles:[""],data:{animation:[c.a]}}),e})();var P=i("pMoy");function v(e,t){if(1&e){const e=u.Yb();u.Xb(0,"section",7),u.Xb(1,"mat-checkbox",9),u.fc("ngModelChange",function(t){return u.Dc(e),u.jc().$implicit.permitido=t})("ngModelChange",function(){u.Dc(e);const t=u.jc().$implicit;return u.jc().cambiarPermiso(t)}),u.Oc(2),u.Wb(),u.Wb()}if(2&e){const e=u.jc().$implicit;u.Eb(1),u.pc("ngModel",e.permitido),u.Eb(1),u.Qc("",e.sdescripcion," ")}}function X(e,t){if(1&e){const e=u.Yb();u.Xb(0,"section",7),u.Xb(1,"mat-checkbox",9),u.fc("ngModelChange",function(t){return u.Dc(e),u.jc().$implicit.puedeagregar=t})("ngModelChange",function(){u.Dc(e);const t=u.jc().$implicit;return u.jc().cambiarPermiso(t)}),u.Oc(2,"Puede Agregar"),u.Wb(),u.Xb(3,"mat-checkbox",9),u.fc("ngModelChange",function(t){return u.Dc(e),u.jc().$implicit.puedeeditar=t})("ngModelChange",function(){u.Dc(e);const t=u.jc().$implicit;return u.jc().cambiarPermiso(t)}),u.Oc(4,"Puede Ver y Editar"),u.Wb(),u.Xb(5,"mat-checkbox",9),u.fc("ngModelChange",function(t){return u.Dc(e),u.jc().$implicit.puedeeliminar=t})("ngModelChange",function(){u.Dc(e);const t=u.jc().$implicit;return u.jc().cambiarPermiso(t)}),u.Oc(6,"Puede Eliminar"),u.Wb(),u.Wb()}if(2&e){const e=u.jc().$implicit;u.Eb(1),u.pc("ngModel",e.puedeagregar),u.Eb(2),u.pc("ngModel",e.puedeeditar),u.Eb(2),u.pc("ngModel",e.puedeeliminar)}}function k(e,t){if(1&e&&(u.Xb(0,"div"),u.Xb(1,"section",7),u.Xb(2,"h4"),u.Oc(3),u.Wb(),u.Wb(),u.Mc(4,v,3,2,"section",8),u.Mc(5,X,7,3,"section",8),u.Wb()),2&e){const e=t.$implicit;u.Eb(3),u.Pc(e.sdescripcion),u.Eb(1),u.pc("ngIf",e.spermiso),u.Eb(1),u.pc("ngIf",!e.spermiso)}}let W=(()=>{class e{constructor(e,t){this.data=e,this.dialogRef=t,this.data.permisos.forEach(e=>{e.permitido="T"==e.bpermitido,e.puedeagregar="T"==e.bpuedeagregar,e.puedeeditar="T"==e.bpuedeeditar,e.puedeeliminar="T"==e.bpuedeeliminar,e.editado=!1}),this.data.permisos.sort((e,t)=>e.sdescripcion>t.sdescripcion?1:e.sdescripcion<t.sdescripcion?-1:0)}ngOnInit(){}cambiarPermiso(e){e.editado=!0}submit(){this.dialogRef.close(this.data.permisos)}}return e.\u0275fac=function(t){return new(t||e)(u.Rb(d.a),u.Rb(d.g))},e.\u0275cmp=u.Lb({type:e,selectors:[["app-roles-popup"]],decls:17,vars:8,consts:[["matDialogTitle",""],[4,"ngFor","ngForOf"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"click"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[1,"example-section"],["class","example-section",4,"ngIf"],[1,"example-margin",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(u.Xb(0,"h1",0),u.Oc(1),u.Wb(),u.Xb(2,"mat-dialog-content"),u.Mc(3,k,6,3,"div",1),u.Wb(),u.Xb(4,"mat-dialog-content",2),u.Xb(5,"div",3),u.Xb(6,"button",4),u.fc("click",function(){return t.submit()}),u.Xb(7,"mat-icon"),u.Oc(8,"save"),u.Wb(),u.Oc(9),u.kc(10,"translate"),u.Wb(),u.Sb(11,"span",5),u.Xb(12,"button",6),u.fc("click",function(){return t.dialogRef.close(!1)}),u.Xb(13,"mat-icon"),u.Oc(14,"cancel"),u.Wb(),u.Oc(15),u.kc(16,"translate"),u.Wb(),u.Wb(),u.Wb()),2&e&&(u.Eb(1),u.Pc(t.data.title),u.Eb(2),u.pc("ngForOf",t.data.permisos),u.Eb(6),u.Qc("",u.lc(10,4,"FAMILIESPOPUPCOMPONENT.SAVE")," "),u.Eb(6),u.Qc("",u.lc(16,6,"FAMILIESPOPUPCOMPONENT.CANCEL")," "))},directives:[d.h,d.e,o.n,m.c,m.a,g.b,O.a,o.o,P.a,p.o,p.r],pipes:[R.c],styles:[".example-section[_ngcontent-%COMP%]{margin:12px 0}.example-margin[_ngcontent-%COMP%]{margin:0 12px}"],data:{animation:[c.a]}}),e})();var C=i("AytR"),w=i("IheW");let y=(()=>{class e{constructor(e){this.http=e}obtenerDatos(e,t,i,o){return this.http.get(encodeURI(`${C.a.apiURL}Roles?filter={"where":${e},"limit":${t},"skip":${i},"order":"${o}"}`))}actualizarRol(e){return this.http.put(`${C.a.apiURL}Roles/${e.id}`,e)}agregarRol(e){return this.http.post(C.a.apiURL+"Roles",e)}obtenerCount(e){return this.http.get(encodeURI(`${C.a.apiURL}Roles/count?where=${e}`))}obtenerPermisosXRol(e){return this.http.get(encodeURI(`${C.a.apiURL}PermisosXRol?filter={"where":{"and":[{"idrol":"${e}"},{"deletedon":{"eq":null}}]}}`))}actualizarPermisosXRol(e){return this.http.put(`${C.a.apiURL}PermisosXRol/${e.id}`,e)}}return e.\u0275fac=function(t){return new(t||e)(u.bc(w.c))},e.\u0275prov=u.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=i("zHaW"),M=i("PDjf"),x=i("w9WL");function j(e,t){if(1&e){const e=u.Yb();u.Xb(0,"button",12),u.fc("click",function(t){u.Dc(e);const i=u.jc(),o=u.Ac(10);return i.updateFilter(t)&&(o.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function F(e,t){if(1&e&&u.Oc(0),2&e){const e=t.row;u.Qc(" ",null==e?null:e.srol," ")}}function A(e,t){if(1&e){const e=u.Yb();u.Xb(0,"button",13),u.fc("click",function(){u.Dc(e);const i=t.row;return u.jc().openPopUp(i)}),u.Xb(1,"mat-icon"),u.Oc(2,"edit"),u.Wb(),u.Wb(),u.Xb(3,"button",13),u.fc("click",function(){u.Dc(e);const i=t.row;return u.jc().openUserInfoPopUp(i)}),u.Xb(4,"mat-icon"),u.Oc(5,"person_pin"),u.Wb(),u.Wb()}}const U=function(){return{y:"50px",delay:"300ms"}},T=function(e){return{value:"*",params:e}},S=[{path:"",component:(()=>{class e{constructor(e,t,i,o,c,a,r){this.servicioRoles=e,this.dialog=t,this.snack=i,this.confirmService=o,this.loader=c,this.servicioUUID=a,this.servicioPermisos=r,this.timeOutDuration=800,this.rows=[],this.order="srol ASC",this.search="",this.page={count:0,offset:0,limit:10}}ngOnInit(){this.prepararFiltro(),this.refresh()}prepararFiltro(){this.filter='{"and":[';var e=this.search.split(" ");e.length>0&&e.forEach((e,t)=>{e.length>1&&(this.filter+=`{"or":[{"srol":{"ilike":"%${e}%"}}]}`,t<this.search.length-1&&(this.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}'}refresh(){this.prepararFiltro(),Object(s.a)([this.servicioRoles.obtenerCount(this.filter),this.servicioRoles.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(e=>{this.page.count=e[0].count,this.rows=e[1]},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(e){this.page.offset=e.offset,this.refresh()}updateFilter(e){return this.search=e instanceof MouseEvent?"":e.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(e){const t=e.sorts[0];this.order=`${t.prop} ${t.dir.toUpperCase()}`,this.refresh()}openPopUp(e={}){this.loader.open(),this.servicioRoles.obtenerPermisosXRol(e.id).subscribe(t=>{this.loader.close(),this.dialog.open(W,{width:"720px",disableClose:!0,data:{title:"ACTUALIZAR PERMISOS",payload:e,permisos:t}}).afterClosed().subscribe(e=>{if(e){var t=e.filter(e=>e.editado);if(0!=t.length){this.loader.open(),t.forEach(e=>{e.bpuedeagregar=e.puedeagregar?"T":"F",e.bpuedeeditar=e.puedeeditar?"T":"F",e.bpuedeeliminar=e.puedeeliminar?"T":"F",e.bpermitido=e.permitido?"T":"F",delete e.puedeagregar,delete e.puedeeditar,delete e.puedeeliminar,delete e.permitido,delete e.editado});var i=[];t.forEach(e=>{i.push(this.servicioRoles.actualizarPermisosXRol(e))}),Object(s.a)(i).subscribe(e=>{this.loader.close(),this.snack.open("\xa1Permisos Actualizados!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}}})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}openUserInfoPopUp(e={}){this.dialog.open(b.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:e}})}openPopUpNewRol(e={},t){this.dialog.open(E,{width:"720px",disableClose:!0,data:{title:t?"AGREGAR ROL":"ACTUALIZAR ROL",payload:e}}).afterClosed().subscribe(e=>{if(e){this.loader.open();var i={};Object.assign(i,e),t?(i.id=this.servicioUUID.generateUUID(),this.servicioRoles.agregarRol(i).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Rol Agregado!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioRoles.actualizarRol(i).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Rol Actualizado!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}}return e.\u0275fac=function(t){return new(t||e)(u.Rb(y),u.Rb(d.b),u.Rb(I.a),u.Rb(a.a),u.Rb(r.a),u.Rb(n.a),u.Rb(l.a))},e.\u0275cmp=u.Lb({type:e,selectors:[["app-roles-settings"]],decls:22,vars:31,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","sort","page"],["prop","srol",3,"name","width"],["ngx-datatable-cell-template",""],[3,"sortable","name","width"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"]],template:function(e,t){if(1&e&&(u.Xb(0,"div",0),u.Xb(1,"button",1),u.fc("click",function(){return t.openPopUpNewRol({},!0)}),u.Xb(2,"mat-icon"),u.Oc(3,"library_add"),u.Wb(),u.Oc(4),u.kc(5,"translate"),u.Wb(),u.Wb(),u.Xb(6,"mat-form-field",2),u.Xb(7,"mat-icon",3),u.Oc(8,"search"),u.Wb(),u.Xb(9,"input",4,5),u.fc("keyup",function(e){return t.updateFilter(e)}),u.kc(11,"translate"),u.Wb(),u.Mc(12,j,3,0,"button",6),u.Wb(),u.Xb(13,"mat-card",7),u.Xb(14,"mat-card-content",7),u.Xb(15,"ngx-datatable",8),u.fc("sort",function(e){return t.onSort(e)})("page",function(e){return t.pageCallback(e)}),u.Xb(16,"ngx-datatable-column",9),u.kc(17,"translate"),u.Mc(18,F,1,1,"ng-template",10),u.Wb(),u.Xb(19,"ngx-datatable-column",11),u.kc(20,"translate"),u.Mc(21,A,6,0,"ng-template",10),u.Wb(),u.Wb(),u.Wb(),u.Wb()),2&e){const e=u.Ac(10);u.Eb(4),u.Qc("",u.lc(5,20,"Agregar Rol")," "),u.Eb(5),u.qc("placeholder",u.lc(11,22,"FAMILIESCOMPONENT.FILTER")),u.Eb(3),u.pc("ngIf",e.value),u.Eb(1),u.pc("@animate",u.vc(29,T,u.uc(28,U))),u.Eb(2),u.pc("rows",t.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit)("externalPaging",!0)("selectionType","single"),u.Eb(1),u.qc("name",u.lc(17,24,"Rol")),u.pc("width",250),u.Eb(3),u.qc("name",u.lc(20,26,"FAMILIESCOMPONENT.ACTIONS")),u.pc("sortable",!1)("width",150)}},directives:[g.b,O.a,h.c,h.g,f.b,o.o,M.a,M.b,x.d,x.b,x.a,h.h],pipes:[R.c],styles:[""],data:{animation:[c.a]}}),e})(),data:{title:"Roles"}}];var D=i("iInd"),L=i("u9T3"),$=i("f44v"),N=i("ZTz/"),z=i("jMqV"),H=i("M9ds"),q=i("ZFy/"),K=i("PCNd"),Q=i("BxcV");let V=(()=>{class e{}return e.\u0275mod=u.Pb({type:e}),e.\u0275inj=u.Ob({factory:function(t){return new(t||e)},imports:[[o.c,p.t,L.a,x.f,f.c,f.c,M.c,f.c,g.c,$.a,f.c,q.b,d.f,I.b,z.b,H.c,N.b,O.b,R.b,K.a,Q.a,p.j,P.b,D.k.forChild(S)]]}),e})()}}]);