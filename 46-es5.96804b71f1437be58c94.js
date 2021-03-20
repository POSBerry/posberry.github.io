!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{N3eF:function(t,a,i){"use strict";i.r(a),i.d(a,"BondingSettingsModule",function(){return L});var r,c=i("SVse"),o=i("3kSh"),s=i("3sEA"),u=i("vpPe"),l=i("cp0P"),f=i("AytR"),p=i("8Y7J"),d=i("IheW"),b=((r=function(){function t(n){e(this,t),this.http=n}return n(t,[{key:"obtenerDatos",value:function(e,t,n){return this.http.get(encodeURI("".concat(f.a.apiURL,'PuntosVenta?filter={"where":').concat(e,',"limit":').concat(t,',"skip":').concat(n,',"order":"sdescripcion ASC"}')))}},{key:"obtenerCount",value:function(e){return this.http.get(encodeURI("".concat(f.a.apiURL,"PuntosVenta/count?where=").concat(e)))}},{key:"actualizarSucursales",value:function(e){return this.http.put("".concat(f.a.apiURL,"PuntosVenta/").concat(e.id),e)}},{key:"agregarSucursales",value:function(e){return this.http.post(f.a.apiURL+"Sucursales",e)}}]),t}()).\u0275fac=function(e){return new(e||r)(p.bc(d.c))},r.\u0275prov=p.Nb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),h=i("iELJ"),m=i("zHaW"),v=i("PDjf"),g=i("Q2Ze"),x=i("Tj54"),w=i("e6WT"),y=i("w9WL"),k=i("Dxy4"),O=i("TSSN");function I(e,t){if(1&e&&p.Oc(0),2&e){var n=t.row;p.Qc(" ",null==n?null:n.sdescripcion," ")}}function S(e,t){if(1&e&&p.Oc(0),2&e){var n=t.row;p.Qc(" ",null==n?null:n.hardid," ")}}function R(e,t){if(1&e){var n=p.Yb();p.Xb(0,"button",7),p.fc("click",function(){p.Dc(n);var e=t.row;return p.jc().deleteItem(e)}),p.Xb(1,"mat-icon"),p.Oc(2,"delete"),p.Wb(),p.Wb()}}var W,E,T=function(){return{y:"50px",delay:"300ms"}},X=function(e){return{value:"*",params:e}},D=[{path:"",component:(W=function(){function t(n,a,i,r,c,o){e(this,t),this.servicioVinculacion=n,this.dialog=a,this.snack=i,this.confirmService=r,this.loader=c,this.servicioUUID=o,this.timeOutDuration=800,this.rows=[],this.search="",this.page={count:0,offset:0,limit:10}}return n(t,[{key:"ngOnInit",value:function(){this.prepararFiltro(),this.refresh()}},{key:"prepararFiltro",value:function(){var e=this;if(this.search){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&(t.forEach(function(t,n){t.length>1&&(e.filter+='{"or":[{"sdescripcion":{"ilike":"%'.concat(t,'%"}}]}'),n<e.search.length-1&&(e.filter+=","))}),this.filter+='{"deletedon":{"eq":null}},{"hardid":{"neq":null}}]}')}else this.filter='{"and":[{"deletedon":{"eq":null}},{"hardid":{"neq":null}}]}'}},{key:"refresh",value:function(){var e=this;this.prepararFiltro(),Object(l.a)([this.servicioVinculacion.obtenerCount(this.filter),this.servicioVinculacion.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit)]).subscribe(function(t){e.page.count=t[0].count,e.rows=t[1]},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}},{key:"pageCallback",value:function(e){this.page.offset=e.offset,this.refresh()}},{key:"updateFilter",value:function(e){var t=this;this.search=e.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(function(){t.refresh()},this.timeOutDuration)}},{key:"deleteItem",value:function(e){var t=this;this.confirmService.confirm({message:"\xbfDesvincular ".concat(e.sdescripcion,"?")}).subscribe(function(n){if(n){t.loader.open();var a={};Object.assign(a,e),a.hardid=null,t.servicioVinculacion.actualizarSucursales(a).subscribe(function(e){t.refresh(),t.loader.close(),t.snack.open("\xa1Hardware ID Desvinculado!","OK",{duration:4e3})},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}})}}]),t}(),W.\u0275fac=function(e){return new(e||W)(p.Rb(b),p.Rb(h.b),p.Rb(m.a),p.Rb(o.a),p.Rb(s.a),p.Rb(u.a))},W.\u0275cmp=p.Lb({type:W,selectors:[["app-bonding-settings"]],decls:30,vars:34,consts:[[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page"],[3,"name","width"],["ngx-datatable-cell-template",""],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"]],template:function(e,t){1&e&&(p.Xb(0,"mat-card"),p.Xb(1,"mat-card-content"),p.Xb(2,"h2"),p.Xb(3,"b"),p.Oc(4,"Vinculaci\xf3n de Dispositivos con Punto de Venta"),p.Wb(),p.Wb(),p.Xb(5,"p"),p.Oc(6,"Al iniciar por primera vez el sistema o si no hay ning\xfan dispositivo vinculado, POSBerry asocia su equipo (Hardware ID) con el punto de venta autom\xe1ticamente. Solo puede haber un equipo vinculado por punto de venta a la vez."),p.Wb(),p.Xb(7,"p"),p.Oc(8,'Puede ver el Hardware ID en el programa de escritorio en el men\xfa "Opciones > Acerca de", en la pesta\xf1a "Informe del Sistema", al lado del nombre del "Sistema Operativo".'),p.Wb(),p.Xb(9,"p"),p.Xb(10,"b"),p.Oc(11,"Desvincular:"),p.Wb(),p.Oc(12," si va a desvincular un dispositivo, aseg\xfarese que el programa de escritorio POSBerry esta cerrado en el equipo que va a desvincular."),p.Wb(),p.Wb(),p.Wb(),p.Xb(13,"mat-form-field",0),p.Xb(14,"mat-icon",1),p.Oc(15,"search"),p.Wb(),p.Xb(16,"input",2),p.fc("keyup",function(e){return t.updateFilter(e)}),p.kc(17,"translate"),p.Wb(),p.Wb(),p.Xb(18,"mat-card",3),p.Xb(19,"mat-card-content",3),p.Xb(20,"ngx-datatable",4),p.fc("page",function(e){return t.pageCallback(e)}),p.Xb(21,"ngx-datatable-column",5),p.kc(22,"translate"),p.Mc(23,I,1,1,"ng-template",6),p.Wb(),p.Xb(24,"ngx-datatable-column",5),p.kc(25,"translate"),p.Mc(26,S,1,1,"ng-template",6),p.Wb(),p.Xb(27,"ngx-datatable-column",5),p.kc(28,"translate"),p.Mc(29,R,3,0,"ng-template",6),p.Wb(),p.Wb(),p.Wb(),p.Wb()),2&e&&(p.pc("@animate",p.vc(29,X,p.uc(28,T))),p.Eb(16),p.qc("placeholder",p.lc(17,20,"BRANCHOFFICESETTINGS.FILTER")),p.Eb(2),p.pc("@animate",p.vc(32,X,p.uc(31,T))),p.Eb(2),p.pc("rows",t.rows)("columnMode","force")("headerHeight",50)("footerHeight",50)("scrollbarH",!0)("rowHeight",50)("count",t.page.count)("offset",t.page.offset)("limit",t.page.limit)("externalPaging",!0)("selectionType","single"),p.Eb(1),p.qc("name",p.lc(22,22,"BRANCHOFFICESETTINGS.BRANCHOFFICE")),p.pc("width",150),p.Eb(3),p.qc("name",p.lc(25,24,"Hardware ID")),p.pc("width",150),p.Eb(3),p.qc("name",p.lc(28,26,"BRANCHOFFICESETTINGS.ACTIONS")),p.pc("width",150))},directives:[v.a,v.b,g.c,x.a,g.g,w.b,y.d,y.b,y.a,k.b],pipes:[O.c],styles:[""]}),W),data:{title:"Vinculaci\xf3n"}}],C=i("iInd"),F=i("u9T3"),H=i("s7LF"),P=i("f44v"),q=i("ZTz/"),N=i("jMqV"),V=i("M9ds"),A=i("ZFy/"),M=i("PCNd"),U=i("BxcV"),L=((E=function t(){e(this,t)}).\u0275mod=p.Pb({type:E}),E.\u0275inj=p.Ob({factory:function(e){return new(e||E)},imports:[[c.c,H.s,F.a,y.f,w.c,w.c,v.c,w.c,k.c,P.a,w.c,A.b,h.f,m.b,N.b,V.c,q.b,x.b,O.b,M.a,U.a,C.k.forChild(D)]]}),E)},vpPe:function(t,a,i){"use strict";i.d(a,"a",function(){return c});var r=i("8Y7J"),c=function(){var t=function(){function t(){e(this,t)}return n(t,[{key:"generateUUID",value:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();