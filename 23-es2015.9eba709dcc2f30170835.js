(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{GmJt:function(e,t,o){"use strict";o.d(t,"a",function(){return a});var i=o("GS7A");const r=Object(i.g)([Object(i.l)({opacity:"{{opacity}}",transform:"scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})"}),Object(i.e)("{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)",Object(i.l)("*"))],{params:{duration:"200ms",delay:"0ms",opacity:"0",scale:"1",x:"0",y:"0",z:"0"}}),a=[Object(i.n)("animate",[Object(i.m)("void => *",[Object(i.o)(r)])]),Object(i.n)("fadeInOut",[Object(i.k)("0",Object(i.l)({opacity:0,display:"none"})),Object(i.k)("1",Object(i.l)({opacity:1,display:"block"})),Object(i.m)("0 => 1",Object(i.e)("300ms")),Object(i.m)("1 => 0",Object(i.e)("300ms"))])]},jrR4:function(e,t,o){"use strict";o.r(t),o.d(t,"BranchOfficeSettingsModule",function(){return q});var i=o("SVse"),r=o("iInd"),a=o("u9T3"),c=o("s7LF"),l=o("Dxy4"),n=o("PDjf"),s=o("f44v"),b=o("iELJ"),d=o("Tj54"),m=o("e6WT"),p=o("ZTz/"),u=o("jMqV"),f=o("zHaW"),h=o("M9ds"),v=o("ZFy/"),O=o("TSSN"),C=o("w9WL"),g=o("PCNd"),E=o("GmJt"),S=o("3kSh"),W=o("3sEA"),I=o("vpPe"),F=o("cp0P"),X=o("Ap+n"),P=o("8Y7J"),R=o("VDRc"),k=o("Q2Ze"),y=o("UhP/");function w(e,t){if(1&e&&(P.Xb(0,"mat-option",31),P.Oc(1),P.Wb()),2&e){const e=t.$implicit;P.pc("value",null==e?null:e.indice),P.Eb(1),P.Qc(" ",null==e?null:e.value," ")}}function T(e,t){if(1&e&&(P.Xb(0,"mat-option",31),P.Oc(1),P.Wb()),2&e){const e=t.$implicit;P.pc("value",null==e?null:e.indice),P.Eb(1),P.Qc(" ",null==e?null:e.value," ")}}let N=(()=>{class e{constructor(e,t,o){this.data=e,this.dialogRef=t,this.fb=o,this.listasDePrecios=[{value:"Ninguno",indice:0},{value:"1",indice:1},{value:"2",indice:2},{value:"3",indice:3},{value:"4",indice:4},{value:"5",indice:5},{value:"6",indice:6},{value:"7",indice:7}],this.politicasDeHorarios=[{value:"Recibir Siempre",indice:0},{value:"Recibir Solo en Horario Comercial",indice:1},{value:"Recibir solo si el sistema esta recibiendo pedidos online",indice:2},{value:"No recibir pedidos temporalmente",indice:3}]}ngOnInit(){this.buildItemForm(this.data.payload)}buildItemForm(e){this.itemForm=this.fb.group({id:[e.id||""],idsucursal:[e.idsucursal||""],sdescripcion:[e.sdescripcion||""],sdomicilio:[e.sdomicilio||""],slocalidad:[e.slocalidad||""],sprovincia:[e.sprovincia||""],semail:[e.semail||""],stelefono:[e.stelefono||""],spais:[e.spais||""],bactivo:[!e.hasOwnProperty("bactivo")||"T"==e.bactivo],bnoverproductosconpreciocero:[!e.hasOwnProperty("bnoverproductosconpreciocero")||"T"==e.bnoverproductosconpreciocero],ilistadepreciospredeterminada:[e.ilistadepreciospredeterminada||0],stelefonosucursal:[e.stelefonosucursal||""],busardeliveryweb:[!e.hasOwnProperty("busardeliveryweb")||"T"==e.busardeliveryweb],ipoliticadehorarioweb:[e.ipoliticadehorarioweb||0],rbonificarenviodesdemonto:[e.rbonificarenviodesdemonto||0],icuadrasdeliverygratis:[e.icuadrasdeliverygratis],icuadrasalcancedelivery:[e.icuadrasalcancedelivery],iminutosestimadodeentrega:[e.iminutosestimadodeentrega],busarpickupweb:[!e.hasOwnProperty("busarpickupweb")||"T"==e.busarpickupweb]})}submit(){this.dialogRef.close(this.itemForm.value)}}return e.\u0275fac=function(t){return new(t||e)(P.Rb(b.a),P.Rb(b.g),P.Rb(c.d))},e.\u0275cmp=P.Lb({type:e,selectors:[["app-branch-office-settings-popup"]],decls:102,vars:84,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["label","Detalles"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","sdescripcion",3,"formControl","placeholder"],["matInput","","name","sdomicilio",3,"formControl","placeholder"],["matInput","","name","slocalidad",3,"formControl","placeholder"],["matInput","","name","sprovincia",3,"formControl","placeholder"],["matInput","","name","spais",3,"formControl","placeholder"],["matInput","","name","semail",3,"formControl","placeholder"],["matInput","","name","stelefono",3,"formControl","placeholder"],["name","bactivo",3,"formControl"],["name","bnoverproductosconpreciocero",3,"formControl"],["appearance","fill"],["name","ilistadepreciospredeterminada",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["label","Tienda en Linea"],["matInput","","name","stelefonosucursal",3,"formControl","placeholder"],["name","ipoliticadehorarioweb",3,"formControl"],["name","busardeliveryweb",3,"formControl"],["matInput","","name","rpreciodelivery",3,"formControl","placeholder"],["matInput","","name","rbonificarenviodesdemonto",3,"formControl","placeholder"],["matInput","","name","icuadrasdeliverygratis",3,"formControl","placeholder"],["matInput","","name","iminutosestimadodeentrega",3,"formControl","placeholder"],["name","busarpickupweb",3,"formControl"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"],[3,"value"]],template:function(e,t){1&e&&(P.Xb(0,"h1",0),P.Oc(1),P.Wb(),P.Xb(2,"form",1),P.fc("ngSubmit",function(){return t.submit()}),P.Xb(3,"mat-tab-group"),P.Xb(4,"mat-tab",2),P.Xb(5,"mat-dialog-content",3),P.Xb(6,"div",4),P.Xb(7,"p"),P.Oc(8),P.Wb(),P.Wb(),P.Xb(9,"div",4),P.Xb(10,"mat-form-field",5),P.Sb(11,"input",6),P.kc(12,"translate"),P.Wb(),P.Wb(),P.Xb(13,"div",4),P.Xb(14,"mat-form-field",5),P.Sb(15,"input",7),P.kc(16,"translate"),P.Wb(),P.Wb(),P.Xb(17,"div",4),P.Xb(18,"mat-form-field",5),P.Sb(19,"input",8),P.kc(20,"translate"),P.Wb(),P.Wb(),P.Xb(21,"div",4),P.Xb(22,"mat-form-field",5),P.Sb(23,"input",9),P.kc(24,"translate"),P.Wb(),P.Wb(),P.Xb(25,"div",4),P.Xb(26,"mat-form-field",5),P.Sb(27,"input",10),P.kc(28,"translate"),P.Wb(),P.Wb(),P.Xb(29,"div",4),P.Xb(30,"mat-form-field",5),P.Sb(31,"input",11),P.kc(32,"translate"),P.Wb(),P.Wb(),P.Xb(33,"div",4),P.Xb(34,"mat-form-field",5),P.Sb(35,"input",12),P.kc(36,"translate"),P.Wb(),P.Wb(),P.Xb(37,"div",4),P.Xb(38,"mat-slide-toggle",13),P.Oc(39),P.kc(40,"translate"),P.Wb(),P.Wb(),P.Xb(41,"div",4),P.Xb(42,"mat-slide-toggle",14),P.Oc(43),P.kc(44,"translate"),P.Wb(),P.Wb(),P.Xb(45,"div",4),P.Xb(46,"mat-form-field",15),P.Xb(47,"mat-label"),P.Oc(48),P.kc(49,"translate"),P.Wb(),P.Xb(50,"mat-select",16),P.Mc(51,w,2,2,"mat-option",17),P.Wb(),P.Wb(),P.Wb(),P.Wb(),P.Wb(),P.Xb(52,"mat-tab",18),P.Xb(53,"mat-dialog-content",3),P.Xb(54,"div",4),P.Xb(55,"mat-form-field",5),P.Sb(56,"input",19),P.kc(57,"translate"),P.Wb(),P.Wb(),P.Xb(58,"div",4),P.Xb(59,"mat-form-field",15),P.Xb(60,"mat-label"),P.Oc(61),P.kc(62,"translate"),P.Wb(),P.Xb(63,"mat-select",20),P.Mc(64,T,2,2,"mat-option",17),P.Wb(),P.Wb(),P.Wb(),P.Wb(),P.Xb(65,"div",4),P.Xb(66,"mat-slide-toggle",21),P.Oc(67),P.kc(68,"translate"),P.Wb(),P.Wb(),P.Xb(69,"div",4),P.Xb(70,"mat-form-field",5),P.Sb(71,"input",22),P.kc(72,"translate"),P.Wb(),P.Wb(),P.Xb(73,"div",4),P.Xb(74,"mat-form-field",5),P.Sb(75,"input",23),P.kc(76,"translate"),P.Wb(),P.Wb(),P.Xb(77,"div",4),P.Xb(78,"mat-form-field",5),P.Sb(79,"input",24),P.kc(80,"translate"),P.Wb(),P.Wb(),P.Xb(81,"div",4),P.Xb(82,"mat-form-field",5),P.Sb(83,"input",25),P.kc(84,"translate"),P.Wb(),P.Wb(),P.Xb(85,"div",4),P.Xb(86,"mat-slide-toggle",26),P.Oc(87),P.kc(88,"translate"),P.Wb(),P.Wb(),P.Wb(),P.Wb(),P.Xb(89,"mat-dialog-content",3),P.Xb(90,"div",27),P.Xb(91,"button",28),P.Xb(92,"mat-icon"),P.Oc(93,"save"),P.Wb(),P.Oc(94),P.kc(95,"translate"),P.Wb(),P.Sb(96,"span",29),P.Xb(97,"button",30),P.fc("click",function(){return t.dialogRef.close(!1)}),P.Xb(98,"mat-icon"),P.Oc(99,"cancel"),P.Wb(),P.Oc(100),P.kc(101,"translate"),P.Wb(),P.Wb(),P.Wb(),P.Wb()),2&e&&(P.Eb(1),P.Pc(t.data.title),P.Eb(1),P.pc("formGroup",t.itemForm),P.Eb(6),P.Qc("Numero de Sucursal: ",t.data.payload.idsucursal,""),P.Eb(3),P.qc("placeholder",P.lc(12,44,"BRANCHOFFICESETTINGSPOPUP.NAME")),P.pc("formControl",t.itemForm.controls.sdescripcion),P.Eb(4),P.qc("placeholder",P.lc(16,46,"BRANCHOFFICESETTINGSPOPUP.ADDRESS")),P.pc("formControl",t.itemForm.controls.sdomicilio),P.Eb(4),P.qc("placeholder",P.lc(20,48,"BRANCHOFFICESETTINGSPOPUP.LOCATION")),P.pc("formControl",t.itemForm.controls.slocalidad),P.Eb(4),P.qc("placeholder",P.lc(24,50,"BRANCHOFFICESETTINGSPOPUP.PROVINCE")),P.pc("formControl",t.itemForm.controls.sprovincia),P.Eb(4),P.qc("placeholder",P.lc(28,52,"BRANCHOFFICESETTINGSPOPUP.COUNTRY")),P.pc("formControl",t.itemForm.controls.spais),P.Eb(4),P.qc("placeholder",P.lc(32,54,"BRANCHOFFICESETTINGSPOPUP.EMAIL")),P.pc("formControl",t.itemForm.controls.semail),P.Eb(4),P.qc("placeholder",P.lc(36,56,"BRANCHOFFICESETTINGSPOPUP.PHONE")),P.pc("formControl",t.itemForm.controls.stelefono),P.Eb(3),P.pc("formControl",t.itemForm.controls.bactivo),P.Eb(1),P.Pc(P.lc(40,58,"BRANCHOFFICESETTINGSPOPUP.ACTIVE")),P.Eb(3),P.pc("formControl",t.itemForm.controls.bnoverproductosconpreciocero),P.Eb(1),P.Pc(P.lc(44,60,"Ver productos con precio cero")),P.Eb(5),P.Pc(P.lc(49,62,"CLIENTSPOPUPCOMPONENT.VATCONDITION")),P.Eb(2),P.pc("formControl",t.itemForm.controls.ilistadepreciospredeterminada),P.Eb(1),P.pc("ngForOf",t.listasDePrecios),P.Eb(5),P.qc("placeholder",P.lc(57,64,"WhatsApp")),P.pc("formControl",t.itemForm.controls.stelefonosucursal),P.Eb(5),P.Pc(P.lc(62,66,"Politica de Horarios Web")),P.Eb(2),P.pc("formControl",t.itemForm.controls.ipoliticadehorarioweb),P.Eb(1),P.pc("ngForOf",t.politicasDeHorarios),P.Eb(2),P.pc("formControl",t.itemForm.controls.busardeliveryweb),P.Eb(1),P.Pc(P.lc(68,68,"Usar Delivery web")),P.Eb(4),P.qc("placeholder",P.lc(72,70,"Precio Del Delivery")),P.pc("formControl",t.itemForm.controls.rpreciodelivery),P.Eb(4),P.qc("placeholder",P.lc(76,72,"Bonificar desde Monto")),P.pc("formControl",t.itemForm.controls.rbonificarenviodesdemonto),P.Eb(4),P.qc("placeholder",P.lc(80,74,"Cuadras gratis Delivery")),P.pc("formControl",t.itemForm.controls.icuadrasdeliverygratis),P.Eb(4),P.qc("placeholder",P.lc(84,76,"Minutos estimados de entrega")),P.pc("formControl",t.itemForm.controls.iminutosestimadodeentrega),P.Eb(3),P.pc("formControl",t.itemForm.controls.busarpickupweb),P.Eb(1),P.Pc(P.lc(88,78,"Usar Pickup web")),P.Eb(4),P.pc("disabled",t.itemForm.invalid),P.Eb(3),P.Pc(P.lc(95,80,"BRANCHOFFICESETTINGSPOPUP.SAVE")),P.Eb(6),P.Pc(P.lc(101,82,"BRANCHOFFICESETTINGSPOPUP.CANCEL")))},directives:[b.h,c.v,c.o,c.i,h.b,h.a,b.e,R.c,R.a,k.c,m.b,c.c,c.n,c.f,u.a,k.f,p.a,i.n,l.b,d.a,y.n],pipes:[O.c],styles:[""],data:{animation:[E.a]}}),e})();var A=o("AytR"),U=o("IheW");let D=(()=>{class e{constructor(e){this.http=e}obtenerDatos(e,t,o){return this.http.get(encodeURI(`${A.a.apiURL}Sucursales?filter={"where":${e},"limit":${t},"skip":${o},"order":"sdescripcion ASC"}`))}obtenerCount(e){return this.http.get(encodeURI(`${A.a.apiURL}Sucursales/count?where=${e}`))}actualizarSucursales(e){return this.http.put(`${A.a.apiURL}Sucursales/${e.id}`,e)}agregarSucursales(e){return this.http.post(A.a.apiURL+"Sucursales",e)}}return e.\u0275fac=function(t){return new(t||e)(P.bc(U.c))},e.\u0275prov=P.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function H(e,t){if(1&e&&P.Oc(0),2&e){const e=t.row;P.Qc(" ",null==e?null:e.sdescripcion," ")}}function j(e,t){if(1&e){const e=P.Yb();P.Xb(0,"button",9),P.fc("click",function(){P.Dc(e);const o=t.row;return P.jc().openPopUp(o)}),P.Xb(1,"mat-icon"),P.Oc(2,"edit"),P.Wb(),P.Wb(),P.Xb(3,"button",9),P.fc("click",function(){P.Dc(e);const o=t.row;return P.jc().openUserInfoPopUp(o)}),P.Xb(4,"mat-icon"),P.Oc(5,"person_pin"),P.Wb(),P.Wb()}}const x=function(){return{y:"50px",delay:"300ms"}},G=function(e){return{value:"*",params:e}},L=[{path:"",component:(()=>{class e{constructor(e,t,o,i,r,a){this.servicioSucursales=e,this.dialog=t,this.snack=o,this.confirmService=i,this.loader=r,this.servicioUUID=a,this.timeOutDuration=800,this.rows=[],this.search="",this.page={count:0,offset:0,limit:10}}ngOnInit(){this.prepararFiltro(),this.refresh()}prepararFiltro(){if(this.search){this.filter='{"and":[';var e=this.search.split(" ");e.length>0&&(e.forEach((e,t)=>{e.length>1&&(this.filter+=`{"or":[{"sdescripcion":{"ilike":"%${e}%"}}]}`,t<this.search.length-1&&(this.filter+=","))}),this.filter+='{"deletedon":{"eq":null}}]}')}else this.filter='{"deletedon":{"eq":null}}'}refresh(){this.prepararFiltro(),Object(F.a)([this.servicioSucursales.obtenerCount(this.filter),this.servicioSucursales.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit)]).subscribe(e=>{this.page.count=e[0].count,this.rows=e[1],console.log(e)},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(e){this.page.offset=e.offset,this.refresh()}updateFilter(e){this.search=e.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration)}openPopUp(e={},t){this.dialog.open(N,{width:"720px",disableClose:!0,data:{title:t?"AGREGAR SUCURSAL":"ACTUALIZAR SUCURSAL",payload:e}}).afterClosed().subscribe(e=>{if(e){this.loader.open();var o={};Object.assign(o,e),o.bactivo=e.bactivo?"T":"F",t?(o.id=this.servicioUUID.generateUUID(),this.servicioSucursales.agregarSucursales(o).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Sucursal Agregada!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})):this.servicioSucursales.actualizarSucursales(o).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Sucursal Actualizada!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}deleteItem(e){this.confirmService.confirm({message:`\xbfEliminar ${e.stipocliente}?`}).subscribe(t=>{if(t){this.loader.open();var o={};Object.assign(o,e),delete o.soperadorcreacion,delete o.fcreacion,delete o.soperadormodificacion,delete o.fmodificacion,delete o.insertedon,delete o.updatedon,o.deletedon=(new Date).toISOString(),this.servicioSucursales.actualizarSucursales(o).subscribe(e=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Sucursal Eliminada!","OK",{duration:4e3})},e=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}openUserInfoPopUp(e={}){this.dialog.open(X.a,{width:"720px",disableClose:!0,data:{title:"INFORMACION DE MODIFICACION",payload:e}})}}return e.\u0275fac=function(t){return new(t||e)(P.Rb(D),P.Rb(b.b),P.Rb(f.a),P.Rb(S.a),P.Rb(W.a),P.Rb(I.a))},e.\u0275cmp=P.Lb({type:e,selectors:[["app-branch-office-settings"]],decls:20,vars:29,consts:[[1,"m-333"],["mat-raised-button","","color","primary",1,"mb-8",3,"click"],[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page"],[3,"name","width"],["ngx-datatable-cell-template",""],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"]],template:function(e,t){1&e&&(P.Xb(0,"div",0),P.Xb(1,"button",1),P.fc("click",function(){return t.openPopUp({},!0)}),P.Xb(2,"mat-icon"),P.Oc(3,"library_add"),P.Wb(),P.Oc(4),P.kc(5,"translate"),P.Wb(),P.Wb(),P.Xb(6,"mat-form-field",2),P.Xb(7,"mat-icon",3),P.Oc(8,"search"),P.Wb(),P.Xb(9,"input",4),P.fc("keyup",function(e){return t.updateFilter(e)}),P.kc(10,"translate"),P.Wb(),P.Wb(),P.Xb(11,"mat-card",5),P.Xb(12,"mat-card-content",5),P.Xb(13,"ngx-datatable",6),P.fc("page",function(e){return t.pageCallback(e)}),P.Xb(14,"ngx-datatable-column",7),P.kc(15,"translate"),P.Mc(16,H,1,1,"ng-template",8),P.Wb(),P.Xb(17,"ngx-datatable-column",7),P.kc(18,"translate"),P.Mc(19,j,6,0,"ng-template",8),P.Wb(),P.Wb(),P.Wb(),P.Wb()),2&e&&(P.Eb(4),P.Pc(P.lc(5,18,"BRANCHOFFICESETTINGS.ADDBRANCHOFFICE")),P.Eb(5),P.qc("placeholder",P.lc(10,20,"BRANCHOFFICESETTINGS.FILTER")),P.Eb(2),P.pc("@animate",P.vc(27,G,P.uc(26,x))),P.Eb(2),P.pc("rows",t.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit)("externalPaging",!0)("selectionType","single"),P.Eb(1),P.qc("name",P.lc(15,22,"BRANCHOFFICESETTINGS.BRANCHOFFICE")),P.pc("width",150),P.Eb(3),P.qc("name",P.lc(18,24,"BRANCHOFFICESETTINGS.ACTIONS")),P.pc("width",150))},directives:[l.b,d.a,k.c,k.g,m.b,n.a,n.b,C.d,C.b,C.a],pipes:[O.c],styles:[""],data:{animation:[E.a]}}),e})(),data:{title:"Sucursales"}}];var B=o("BxcV");let q=(()=>{class e{}return e.\u0275mod=P.Pb({type:e}),e.\u0275inj=P.Ob({factory:function(t){return new(t||e)},imports:[[i.c,c.s,a.a,C.f,m.c,m.c,n.c,m.c,l.c,s.a,m.c,v.b,b.f,f.b,u.b,h.c,p.b,d.b,O.b,g.a,B.a,r.k.forChild(L)]]}),e})()}}]);