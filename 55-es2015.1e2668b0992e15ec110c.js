(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{GmJt:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var r=o("GS7A");const a=Object(r.g)([Object(r.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(r.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(r.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),c=[Object(r.n)("animate",[Object(r.m)("void => *",[Object(r.o)(a)])]),Object(r.n)("fadeInOut",[Object(r.k)("0",Object(r.l)({opacity:0,display:"none"})),Object(r.k)("1",Object(r.l)({opacity:1,display:"block"})),Object(r.m)("0 => 1",Object(r.e)("300ms")),Object(r.m)("1 => 0",Object(r.e)("300ms"))])]},tzF1:function(e,t,o){"use strict";o.r(t),o.d(t,"VendorSettingsModule",function(){return z});var r=o("SVse"),a=o("iInd"),c=o("GmJt"),n=o("3kSh"),i=o("3sEA"),s=o("vpPe"),l=o("cp0P"),b=o("Ap+n"),d=o("iELJ"),u=o("8Y7J"),m=o("s7LF"),p=o("VDRc"),f=o("Q2Ze"),h=o("e6WT"),O=o("ZTz/"),E=o("jMqV"),g=o("Dxy4"),v=o("Tj54"),S=o("UhP/"),N=o("TSSN");function R(e,t){if(1&e&&(u.Xb(0,"mat-option",19),u.Oc(1),u.Wb()),2&e){const e=t.$implicit;u.pc("value",e.idsucursal),u.Eb(1),u.Qc(" ",e.sdescripcion," ")}}let T=(()=>{class e{constructor(e,t,o){this.data=e,this.dialogRef=t,this.fb=o}ngOnInit(){this.buildItemForm(this.data.payload),this.sucursales=this.data.sucursales}buildItemForm(e){this.itemForm=this.fb.group({id:[e.id||""],scodvendedor:[e.scodvendedor||""],snombre:[e.snombre||""],sapellido:[e.sapellido||""],stelefono:[e.stelefono||""],semail:[e.semail||""],sloclidad:[e.slocalidad||""],bactivo:[!e.hasOwnProperty("bactivo")||"T"==e.bactivo],idsucursal:[e.idsucursal]})}submit(){this.dialogRef.close(this.itemForm.value)}}return e.\u0275fac=function(t){return new(t||e)(u.Rb(d.a),u.Rb(d.g),u.Rb(m.d))},e.\u0275cmp=u.Lb({type:e,selectors:[["app-vendor-settings-popup"]],decls:52,vars:42,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","scodvendedor",3,"formControl","placeholder"],["matInput","","name","snombre",3,"formControl","placeholder"],["matInput","","name","sapellido",3,"formControl","placeholder"],["matInput","","name","stelefono",3,"formControl","placeholder"],["matInput","","name","semail",3,"formControl","placeholder"],["matInput","","name","slocalidad",3,"formControl","placeholder"],["appearance","fill"],["name","idsucursal",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["name","bactivo",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(e,t){1&e&&(u.Xb(0,"h1",0),u.Oc(1),u.Wb(),u.Xb(2,"form",1),u.fc("ngSubmit",function(){return t.submit()}),u.Xb(3,"mat-dialog-content",2),u.Xb(4,"div",3),u.Xb(5,"mat-form-field",4),u.Sb(6,"input",5),u.kc(7,"translate"),u.Wb(),u.Wb(),u.Xb(8,"div",3),u.Xb(9,"mat-form-field",4),u.Sb(10,"input",6),u.kc(11,"translate"),u.Wb(),u.Wb(),u.Xb(12,"div",3),u.Xb(13,"mat-form-field",4),u.Sb(14,"input",7),u.kc(15,"translate"),u.Wb(),u.Wb(),u.Xb(16,"div",3),u.Xb(17,"mat-form-field",4),u.Sb(18,"input",8),u.kc(19,"translate"),u.Wb(),u.Wb(),u.Xb(20,"div",3),u.Xb(21,"mat-form-field",4),u.Sb(22,"input",9),u.kc(23,"translate"),u.Wb(),u.Wb(),u.Xb(24,"div",3),u.Xb(25,"mat-form-field",4),u.Sb(26,"input",10),u.kc(27,"translate"),u.Wb(),u.Wb(),u.Xb(28,"div",3),u.Xb(29,"mat-form-field",11),u.Xb(30,"mat-label"),u.Oc(31),u.kc(32,"translate"),u.Wb(),u.Xb(33,"mat-select",12),u.Mc(34,R,2,2,"mat-option",13),u.Wb(),u.Wb(),u.Wb(),u.Xb(35,"div",3),u.Xb(36,"mat-slide-toggle",14),u.Oc(37),u.kc(38,"translate"),u.Wb(),u.Wb(),u.Wb(),u.Xb(39,"mat-dialog-content",2),u.Xb(40,"div",15),u.Xb(41,"button",16),u.Xb(42,"mat-icon"),u.Oc(43,"save"),u.Wb(),u.Oc(44),u.kc(45,"translate"),u.Wb(),u.Sb(46,"span",17),u.Xb(47,"button",18),u.fc("click",function(){return t.dialogRef.close(!1)}),u.Xb(48,"mat-icon"),u.Oc(49,"cancel"),u.Wb(),u.Oc(50),u.kc(51,"translate"),u.Wb(),u.Wb(),u.Wb(),u.Wb()),2&e&&(u.Eb(1),u.Pc(t.data.title),u.Eb(1),u.pc("formGroup",t.itemForm),u.Eb(4),u.qc("placeholder",u.lc(7,22,"VENDORSETTINGSPOPUP.CODE")),u.pc("formControl",t.itemForm.controls.scodvendedor),u.Eb(4),u.qc("placeholder",u.lc(11,24,"VENDORSETTINGSPOPUP.NAME")),u.pc("formControl",t.itemForm.controls.snombre),u.Eb(4),u.qc("placeholder",u.lc(15,26,"VENDORSETTINGSPOPUP.SURNAME")),u.pc("formControl",t.itemForm.controls.sapellido),u.Eb(4),u.qc("placeholder",u.lc(19,28,"VENDORSETTINGSPOPUP.PHONE")),u.pc("formControl",t.itemForm.controls.stelefono),u.Eb(4),u.qc("placeholder",u.lc(23,30,"VENDORSETTINGSPOPUP.EMAIL")),u.pc("formControl",t.itemForm.controls.semail),u.Eb(4),u.qc("placeholder",u.lc(27,32,"VENDORSETTINGSPOPUP.LOCATION")),u.pc("formControl",t.itemForm.controls.slocalidad),u.Eb(5),u.Qc("",u.lc(32,34,"VENDORSETTINGSPOPUP.DEFAULTCLIENT"),":"),u.Eb(2),u.pc("formControl",t.itemForm.controls.idsucursal),u.Eb(1),u.pc("ngForOf",t.sucursales),u.Eb(2),u.pc("formControl",t.itemForm.controls.bactivo),u.Eb(1),u.Pc(u.lc(38,36,"VENDORSETTINGSPOPUP.ACTIVE")),u.Eb(4),u.pc("disabled",t.itemForm.invalid),u.Eb(3),u.Pc(u.lc(45,38,"VENDORSETTINGSPOPUP.SAVE")),u.Eb(6),u.Pc(u.lc(51,40,"VENDORSETTINGSPOPUP.CANCEL")))},directives:[d.h,m.w,m.p,m.i,d.e,p.c,p.a,f.c,h.b,m.c,m.o,m.f,f.f,O.a,r.n,E.a,g.b,v.a,S.n],pipes:[N.c],styles:[""],data:{animation:[c.a]}}),e})();var I=o("AytR"),P=o("IheW");let W=(()=>{class e{constructor(e){this.http=e}obtenerDatos(e,t,o,r){return this.http.get(encodeURI(`${I.a.apiURL}Vendedores?filter={"where":${e},"limit":${t},"skip":${o},"order":"${r}"}`))}obtenerCount(e){return this.http.get(encodeURI(`${I.a.apiURL}Vendedores/count?where=${e}`))}actualizarVendedor(e){return this.http.put(`${I.a.apiURL}Vendedores/${e.id}`,e)}agregarVendedor(e){return this.http.post(I.a.apiURL+"Vendedores",e)}obtenerSucursales(){return this.http.get(encodeURI(I.a.apiURL+"Sucursales?"))}}return e.\u0275fac=function(t){return new(t||e)(u.bc(P.c))},e.\u0275prov=u.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var k=o("zHaW"),X=o("PDjf"),C=o("w9WL");function w(e,t){if(1&e){const e=u.Yb();u.Xb(0,"button",14),u.fc("click",function(t){u.Dc(e);const o=u.jc(),r=u.Ac(10);return o.updateFilter(t)&&(r.value="")}),u.Xb(1,"mat-icon"),u.Oc(2,"close"),u.Wb(),u.Wb()}}function V(e,t){if(1&e&&u.Oc(0),2&e){const e=t.row;u.Qc(" ",null==e?null:e.scodvendedor," ")}}function D(e,t){if(1&e&&u.Oc(0),2&e){const e=t.row;u.Qc(" ",null==e?null:e.snombre," ")}}function y(e,t){if(1&e&&u.Oc(0),2&e){const e=t.row;u.Qc(" ",null==e?null:e.sapellido," ")}}function U(e,t){if(1&e){const e=u.Yb();u.Xb(0,"button",15),u.fc("click",function(){u.Dc(e);const o=t.row;return u.jc().openPopUp(o)}),u.Xb(1,"mat-icon"),u.Oc(2,"edit"),u.Wb(),u.Wb(),u.Xb(3,"button",16),u.fc("click",function(){u.Dc(e);const o=t.row;return u.jc().deleteItem(o)}),u.Xb(4,"mat-icon"),u.Oc(5,"delete"),u.Wb(),u.Wb(),u.Xb(6,"button",15),u.fc("click",function(){u.Dc(e);const o=t.row;return u.jc().openUserInfoPopUp(o)}),u.Xb(7,"mat-icon"),u.Oc(8,"person_pin"),u.Wb(),u.Wb()}}const x=function(){return{y:"50px",delay:"300ms"}},F=function(e){return{value:"*",params:e}},G=[{path:"",component:(()=>{class e{constructor(e,t,o,r,a,c){this.servicioVendedores=e,this.dialog=t,this.snack=o,this.confirmService=r,this.loader=a,this.servicioUUID=c,this.timeOutDuration=800,this.rows=[],this.order="snombre ASC",this.search="",this.page={count:0,offset:0,limit:10}}ngOnInit(){this.prepararFiltro(),this.refresh(),this.servicioVendedores.obtenerSucursales().subscribe(e=>{this.sucursales=e})}prepararFiltro(){if(this.search){this.filter='{"and":[';var e=this.search.split(" ");e.length>0&&(e.forEach((e,t)=>{e.length>1&&(this.filter+=`{"or":[{"snombre":{"ilike":"%${e}%"}}]}`,t<this.search.length-1&&(this.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}refresh(){this.prepararFiltro(),Object(l.a)([this.servicioVendedores.obtenerCount(this.filter),this.servicioVendedores.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(e=>{this.page.count=e[0].count,this.rows=e[1]},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(e){this.page.offset=e.offset,this.refresh()}updateFilter(e){return this.search=e instanceof MouseEvent?"":e.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(e){const t=e.sorts[0];this.order=`${t.prop} ${t.dir.toUpperCase()}`,this.refresh()}openPopUp(e={},t){this.dialog.open(T,{width:"720px",disableClose:!0,data:{title:t?"AGREGAR VENDEDOR":"ACTUALIZAR VENDEDOR",payload:e,sucursales:this.sucursales}}).afterClosed().subscribe(e=>{if(e){this.loader.open();var o={};Object.assign(o,e),o.bactivo=e.bactivo?"T":"F",o.bfavorito=e.bfavorito?"T":"F",t?(o.id=this.servicioUUID.generateUUID(),this.servicioVendedores.agregarVendedor(o).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Vendedor Agregado!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioVendedores.actualizarVendedor(o).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Vendedor Actualizado!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(e){this.confirmService.confirm({message:`\xbfEliminar ${e.snombre}?`}).subscribe(t=>{if(t){this.loader.open();var o={};Object.assign(o,e),delete o.soperadorcreacion,delete o.fcreacion,delete o.soperadormodificacion,delete o.fmodificacion,delete o.insertedon,delete o.updatedon,o.deletedon=(new Date).toISOString(),this.servicioVendedores.actualizarVendedor(o).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Vendedor Eliminado!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}openUserInfoPopUp(e={}){this.dialog.open(b.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:e}})}}return e.\u0275fac=function(t){return new(t||e)(u.Rb(W),u.Rb(d.b),u.Rb(k.a),u.Rb(n.a),u.Rb(i.a),u.Rb(s.a))},e.\u0275cmp=u.Lb({type:e,selectors:[["app-vendor-settings"]],decls:28,vars:38,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","scodvendedor",3,"name","flexGrow"],["ngx-datatable-cell-template",""],["prop","snombre",3,"name","flexGrow"],["prop","sapellido",3,"name","flexGrow"],[3,"name","flexGrow"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["mat-icon-button","","mat-sm-button","","color","warn",1,"mr-16",3,"click"]],template:function(e,t){if(1&e&&(u.Xb(0,"div",0),u.Xb(1,"button",1),u.fc("click",function(){return t.openPopUp({},!0)}),u.Xb(2,"mat-icon"),u.Oc(3,"library_add"),u.Wb(),u.Oc(4),u.kc(5,"translate"),u.Wb(),u.Wb(),u.Xb(6,"mat-form-field",2),u.Xb(7,"mat-icon",3),u.Oc(8,"search"),u.Wb(),u.Xb(9,"input",4,5),u.fc("keyup",function(e){return t.updateFilter(e)}),u.kc(11,"translate"),u.Wb(),u.Mc(12,w,3,0,"button",6),u.Wb(),u.Xb(13,"mat-card",7),u.Xb(14,"mat-card-content",7),u.Xb(15,"ngx-datatable",8),u.fc("page",function(e){return t.pageCallback(e)})("sort",function(e){return t.onSort(e)}),u.Xb(16,"ngx-datatable-column",9),u.kc(17,"translate"),u.Mc(18,V,1,1,"ng-template",10),u.Wb(),u.Xb(19,"ngx-datatable-column",11),u.kc(20,"translate"),u.Mc(21,D,1,1,"ng-template",10),u.Wb(),u.Xb(22,"ngx-datatable-column",12),u.kc(23,"translate"),u.Mc(24,y,1,1,"ng-template",10),u.Wb(),u.Xb(25,"ngx-datatable-column",13),u.kc(26,"translate"),u.Mc(27,U,9,0,"ng-template",10),u.Wb(),u.Wb(),u.Wb(),u.Wb()),2&e){const e=u.Ac(10);u.Eb(4),u.Qc("",u.lc(5,23,"VENDORSETTINGSCOMPONENT.ADDSELLER")," "),u.Eb(5),u.qc("placeholder",u.lc(11,25,"VENDORSETTINGSCOMPONENT.FILTER")),u.Eb(3),u.pc("ngIf",e.value),u.Eb(1),u.pc("@animate",u.vc(36,F,u.uc(35,x))),u.Eb(2),u.pc("rows",t.rows)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit)("externalPaging",!0)("selectionType","single"),u.Eb(1),u.qc("name",u.lc(17,27,"VENDORSETTINGSCOMPONENT.CODE")),u.pc("flexGrow",1),u.Eb(3),u.qc("name",u.lc(20,29,"VENDORSETTINGSCOMPONENT.NAME")),u.pc("flexGrow",1),u.Eb(3),u.qc("name",u.lc(23,31,"VENDORSETTINGSCOMPONENT.SURNAME")),u.pc("flexGrow",1),u.Eb(3),u.qc("name",u.lc(26,33,"VENDORSETTINGSCOMPONENT.ACTIONS")),u.pc("flexGrow",1)}},directives:[g.b,v.a,f.c,f.g,h.b,r.o,X.a,X.b,C.d,C.b,C.a,f.h],pipes:[N.c],styles:[""],data:{animation:[c.a]}}),e})(),data:{title:"Vendedores"}}];var A=o("u9T3"),j=o("f44v"),M=o("M9ds"),L=o("ZFy/"),q=o("PCNd"),$=o("BxcV");let z=(()=>{class e{}return e.\u0275mod=u.Pb({type:e}),e.\u0275inj=u.Ob({factory:function(t){return new(t||e)},imports:[[r.c,m.t,A.a,C.f,h.c,h.c,X.c,h.c,g.c,j.a,h.c,L.b,d.f,k.b,E.b,M.c,O.b,v.b,N.b,q.a,$.a,a.k.forChild(G)]]}),e})()}}]);