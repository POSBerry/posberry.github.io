(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{N3eF:function(t,e,c){"use strict";c.r(e),c.d(e,"BondingSettingsModule",function(){return H});var i=c("SVse"),a=c("3kSh"),n=c("3sEA"),r=c("vpPe"),o=c("cp0P"),s=c("AytR"),l=c("8Y7J"),u=c("IheW");let b=(()=>{class t{constructor(t){this.http=t}obtenerDatos(t,e,c,i){return this.http.get(encodeURI(`${s.a.apiURL}PuntosVenta?filter={"where":${t},"limit":${e},"skip":${c},"order":"${i}"}`))}obtenerCount(t){return this.http.get(encodeURI(`${s.a.apiURL}PuntosVenta/count?where=${t}`))}actualizarSucursales(t){return this.http.put(`${s.a.apiURL}PuntosVenta/${t.id}`,t)}agregarSucursales(t){return this.http.post(s.a.apiURL+"Sucursales",t)}}return t.\u0275fac=function(e){return new(e||t)(l.bc(u.c))},t.\u0275prov=l.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=c("iELJ"),p=c("zHaW"),f=c("PDjf"),d=c("Q2Ze"),m=c("Tj54"),g=c("e6WT"),I=c("w9WL"),N=c("Dxy4"),S=c("TSSN");function O(t,e){if(1&t){const t=l.Yb();l.Xb(0,"button",11),l.fc("click",function(e){l.Dc(t);const c=l.jc(),i=l.Ac(22);return c.updateFilter(e)&&(i.value="")}),l.Xb(1,"mat-icon"),l.Oc(2,"close"),l.Wb(),l.Wb()}}function E(t,e){if(1&t&&l.Oc(0),2&t){const t=e.row;l.Qc(" ",null==t?null:t.sdescripcion," ")}}function T(t,e){if(1&t&&l.Oc(0),2&t){const t=e.row;l.Qc(" ",null==t?null:t.hardid," ")}}function w(t,e){if(1&t){const t=l.Yb();l.Xb(0,"button",12),l.fc("click",function(){l.Dc(t);const c=e.row;return l.jc().deleteItem(c)}),l.Xb(1,"mat-icon"),l.Oc(2,"delete"),l.Wb(),l.Wb()}}const k=function(){return{y:"50px",delay:"300ms"}},R=function(t){return{value:"*",params:t}},v=[{path:"",component:(()=>{class t{constructor(t,e,c,i,a,n){this.servicioVinculacion=t,this.dialog=e,this.snack=c,this.confirmService=i,this.loader=a,this.servicioUUID=n,this.timeOutDuration=800,this.rows=[],this.order="sdescripcion ASC",this.search="",this.page={count:0,offset:0,limit:10}}ngOnInit(){this.prepararFiltro(),this.refresh()}prepararFiltro(){if(this.search){this.filter='{"and":[';var t=this.search.split(" ");t.length>0&&(t.forEach((t,e)=>{t.length>1&&(this.filter+=`{"or":[{"sdescripcion":{"ilike":"%${t}%"}}]}`,e<this.search.length-1&&(this.filter+=","))}),this.filter+='{"deletedon":{"eq":null}},{"hardid":{"neq":null}}]}')}else this.filter='{"and":[{"deletedon":{"eq":null}},{"hardid":{"neq":null}}]}'}refresh(){this.prepararFiltro(),Object(o.a)([this.servicioVinculacion.obtenerCount(this.filter),this.servicioVinculacion.obtenerDatos(this.filter,this.page.limit,this.page.offset*this.page.limit,this.order)]).subscribe(t=>{this.page.count=t[0].count,this.rows=t[1]},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}pageCallback(t){this.page.offset=t.offset,this.refresh()}updateFilter(t){return this.search=t instanceof MouseEvent?"":t.target.value,clearTimeout(this.timeOut),this.timeOut=setTimeout(()=>{this.refresh()},this.timeOutDuration),!0}onSort(t){const e=t.sorts[0];this.order=`${e.prop} ${e.dir.toUpperCase()}`,this.refresh()}deleteItem(t){this.confirmService.confirm({message:`\xbfDesvincular ${t.sdescripcion}?`}).subscribe(e=>{if(e){this.loader.open();var c={};Object.assign(c,t),c.hardid=null,this.servicioVinculacion.actualizarSucursales(c).subscribe(t=>{this.refresh(),this.loader.close(),this.snack.open("\xa1Hardware ID Desvinculado!","OK",{duration:4e3})},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}})}}return t.\u0275fac=function(e){return new(e||t)(l.Rb(b),l.Rb(h.b),l.Rb(p.a),l.Rb(a.a),l.Rb(n.a),l.Rb(r.a))},t.\u0275cmp=l.Lb({type:t,selectors:[["app-bonding-settings"]],decls:37,vars:50,consts:[[1,"margin-333",2,"width","100%"],["matPrefix",""],["matInput","","value","",3,"placeholder","keyup"],["searchinput",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"p-0"],[1,"material","ml-0","mr-0",3,"rows","columnMode","headerHeight","footerHeight","scrollbarH","rowHeight","count","offset","limit","externalPaging","selectionType","page","sort"],["prop","sdescripcion",3,"name","flexGrow"],["ngx-datatable-cell-template",""],["prop","hardid",3,"name","flexGrow"],[3,"name","flexGrow"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"]],template:function(t,e){if(1&t&&(l.Xb(0,"mat-card"),l.Xb(1,"mat-card-content"),l.Xb(2,"h2"),l.Xb(3,"b"),l.Oc(4),l.kc(5,"translate"),l.Wb(),l.Wb(),l.Xb(6,"p"),l.Oc(7),l.kc(8,"translate"),l.Wb(),l.Xb(9,"p"),l.Oc(10),l.kc(11,"translate"),l.Wb(),l.Xb(12,"p"),l.Xb(13,"b"),l.Oc(14),l.kc(15,"translate"),l.Wb(),l.Oc(16),l.kc(17,"translate"),l.Wb(),l.Wb(),l.Wb(),l.Xb(18,"mat-form-field",0),l.Xb(19,"mat-icon",1),l.Oc(20,"search"),l.Wb(),l.Xb(21,"input",2,3),l.fc("keyup",function(t){return e.updateFilter(t)}),l.kc(23,"translate"),l.Wb(),l.Mc(24,O,3,0,"button",4),l.Wb(),l.Xb(25,"mat-card",5),l.Xb(26,"mat-card-content",5),l.Xb(27,"ngx-datatable",6),l.fc("page",function(t){return e.pageCallback(t)})("sort",function(t){return e.onSort(t)}),l.Xb(28,"ngx-datatable-column",7),l.kc(29,"translate"),l.Mc(30,E,1,1,"ng-template",8),l.Wb(),l.Xb(31,"ngx-datatable-column",9),l.kc(32,"translate"),l.Mc(33,T,1,1,"ng-template",8),l.Wb(),l.Xb(34,"ngx-datatable-column",10),l.kc(35,"translate"),l.Mc(36,w,3,0,"ng-template",8),l.Wb(),l.Wb(),l.Wb(),l.Wb()),2&t){const t=l.Ac(22);l.pc("@animate",l.vc(45,R,l.uc(44,k))),l.Eb(4),l.Pc(l.lc(5,26,"BONDINGSETTINGS.LINKINGDEVICESWITHPOINTOFSALE")),l.Eb(3),l.Pc(l.lc(8,28,"BONDINGSETTINGS.PARRAF1")),l.Eb(3),l.Pc(l.lc(11,30,"BONDINGSETTINGS.PARRAF2")),l.Eb(4),l.Qc("",l.lc(15,32,"BONDINGSETTINGS.UNLINK"),":"),l.Eb(2),l.Qc(" ",l.lc(17,34,"BONDINGSETTINGS.PARRAF3"),""),l.Eb(5),l.qc("placeholder",l.lc(23,36,"BONDINGSETTINGS.FILTER")),l.Eb(3),l.pc("ngIf",t.value),l.Eb(1),l.pc("@animate",l.vc(48,R,l.uc(47,k))),l.Eb(2),l.pc("rows",e.rows)("columnMode","flex")("headerHeight",50)("footerHeight",50)("scrollbarH",!1)("rowHeight",50)("count",e.page.count)("offset",e.page.offset)("limit",e.page.limit)("externalPaging",!0)("selectionType","single"),l.Eb(1),l.qc("name",l.lc(29,38,"BONDINGSETTINGS.BRANCHOFFICE")),l.pc("flexGrow",1),l.Eb(3),l.qc("name",l.lc(32,40,"BONDINGSETTINGS.HARDWAREID")),l.pc("flexGrow",1),l.Eb(3),l.qc("name",l.lc(35,42,"BONDINGSETTINGS.ACTIONS")),l.pc("flexGrow",1)}},directives:[f.a,f.b,d.c,m.a,d.g,g.b,i.o,I.d,I.b,I.a,N.b,d.h],pipes:[S.c],styles:[""]}),t})(),data:{title:"Vinculaci\xf3n"}}];var W=c("iInd"),G=c("u9T3"),D=c("s7LF"),X=c("f44v"),x=c("ZTz/"),P=c("jMqV"),A=c("M9ds"),F=c("ZFy/"),y=c("PCNd"),C=c("BxcV");let H=(()=>{class t{}return t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(e){return new(e||t)},imports:[[i.c,D.t,G.a,I.f,g.c,g.c,f.c,g.c,N.c,X.a,g.c,F.b,h.f,p.b,P.b,A.c,x.b,m.b,S.b,y.a,C.a,W.k.forChild(v)]]}),t})()}}]);