(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{CHRX:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var o=i("wd/R");class n{constructor(){this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.summaryRow=!0,this.emptyRow=!0,this.customFilter=function(t){return t}}static prepararFiltroAPI(t){var e="";for(var i in t)t[i].search&&(e+="number"==typeof t[i].search?`{"${i}":${t[i].search}},`:t[i].exact?`{"${i}":"${t[i].search}"},`:`{"${i}":{"ilike":"%${t[i].search}%"}},`);return e}setGroup(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}setData(t){this.data=t,this.sortData()}sortData(){this.data.sort((t,e)=>{if(t[this.groupField]==e[this.groupField]){if(this.secondarySort){if(null==t[this.secondarySort])return 1;if(null==e[this.secondarySort])return-1;if(t[this.secondarySort]>e[this.secondarySort])return 1*("desc"===this.sortDir?-1:1);if(t[this.secondarySort]<e[this.secondarySort])return-1*("desc"===this.sortDir?-1:1)}}else{if(null==t[this.groupField])return 1;if(null==e[this.groupField])return-1;if(t[this.groupField]>e[this.groupField])return 1;if(t[this.groupField]<e[this.groupField])return-1}return 0}),this.filterRows()}filterRows(){var t=[];t=this.data.filter(t=>{for(var e in this.filter){if(this.filter[e]&&null==t[e])return!1;switch(typeof t[e]){case"number":if(this.filter[e]&&Math.trunc(t[e]).toString()!==Math.trunc(this.filter[e]).toString())return!1;break;case"string":if("f"==e.charAt(0).toLowerCase()&&o(t[e]).isValid){if(-1==o(t[e]).format("DD/MM/YYYY HH:mm:ss").indexOf(this.filter[e]))return!1;break}if(-1==t[e].toLowerCase().indexOf(this.filter[e].toLowerCase()))return!1}}return!0}),t=this.customFilter(t);var e={};this.groupField?e[this.groupField]=t.length.toString():e.count=t.length.toString(),this.sum.forEach(t=>e[t]=0);for(var i=0;i<t.length;i++)this.sum.forEach(o=>e[o]+=t[i][o]);if(e.isGroup=!0,this.footer=e,this.groupField){var n=[];t.forEach(t=>{-1==n.indexOf(t[this.groupField])&&n.push(t[this.groupField])}),n=n.map(t=>({name:t,count:1}));var r=[],s=!0,a=0,c=null,l=()=>{c&&(c[this.groupField]+=" ("+n[a-1].count.toString()+")")};for(i=0;i<t.length;i++){if(s&&t[i][this.groupField]==n[a].name){l();var u="+";this.groups[n[a].name]&&(u="-"),c={[this.groupField]:u+" "+n[a].name,isGroup:!0,name:n[a].name},this.sum.forEach(t=>c[t]=0),r.push(c),s=++a<n.length}else n[a-1].count++;this.sum.forEach(e=>c[e]+=t[i][e]),r.push(t[i])}l(),t=null,r=r.filter(t=>!!t.isGroup||!!this.groups[t[this.groupField]]||void 0),this.rows=r}else this.rows=t;this.summaryRow&&this.rows.push(this.footer),0==this.rows.length&&this.emptyRow&&this.rows.push({})}updateFilter(t,e){if(t&&e){var i=t.target.value;t instanceof MouseEvent&&(i=""),this.filter[e]=i,this.filterRows()}return!0}updateFilterBoolean(t,e){return this.filter[e]=t,this.filterRows(),!0}}},vpPe:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var o=i("8Y7J");let n=(()=>{class t{constructor(){}generateUUID(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?i:3&i|8).toString(16)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},yElb:function(t,e,i){"use strict";i.r(e),i.d(e,"ClientsUploadModule",function(){return it});var o=i("SVse"),n=i("s7LF"),r=i("GmJt"),s=i("3sEA"),a=i("vpPe"),c=i("GyhO"),l=i("VRyK"),u=i("Cfvw"),d=i("CHRX"),h=i("EUZL"),p=i("AytR"),b=i("8Y7J"),f=i("IheW");let g=(()=>{class t{constructor(t){this.http=t,this.listaClientes=[]}obtenerDatos(t,e,i){return this.http.get(encodeURI(`${p.a.apiURL}Clientes?filter={"where":${t},"limit":${e},"skip":${i},"order":"srazonsocial ASC"}`))}traerClientes(){return this.http.get(encodeURI(p.a.apiURL+"Clientes"))}actualizarCliente(t){return this.http.put(`${p.a.apiURL}Clientes/${t.id}`,t)}obtenerTiposClientes(){return this.http.get(encodeURI(p.a.apiURL+'Tiposcliente?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerEmpresas(){return this.http.get(p.a.apiURL+"Empresas")}agregarCliente(t){return this.http.post(p.a.apiURL+"Clientes",t)}traerClientesPagina(t,e,i,o){this.http.get(encodeURI(`${p.a.apiURL}Clientes?filter={"limit":${t},"skip":${e},"order":"${i}"}`)).subscribe(n=>{n.length>0?(this.listaClientes=this.listaClientes.concat(n),this.traerClientesPagina(t,e+t,i,o)):o()})}traerProductos(t,e){this.listaClientes.length=0,this.traerClientesPagina(2e4,0,t,e)}}return t.\u0275fac=function(e){return new(e||t)(b.bc(f.c))},t.\u0275prov=b.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=i("5+tZ"),C=i("vkgz"),O=i("IAdc"),v=i("zHaW"),E=i("PDjf"),w=i("w9WL"),S=i("Dxy4"),x=i("Tj54"),y=i("jMqV"),D=i("TSSN");function I(t,e){if(1&t){const t=b.Yb();b.Xb(0,"div"),b.Oc(1),b.kc(2,"translate"),b.Xb(3,"button",9),b.fc("click",function(){return b.Dc(t),b.jc(),b.Ac(3).click()}),b.Xb(4,"mat-icon"),b.Oc(5,"attach_file"),b.Wb(),b.Oc(6),b.kc(7,"translate"),b.Wb(),b.Wb()}if(2&t){const t=b.jc();b.Eb(1),b.Qc(" ",b.lc(2,2,t.fileName||"CLIENTSUPLOAD.NOFILEUPLOADEDYET.")," "),b.Eb(5),b.Qc("",b.lc(7,4,"CLIENTSUPLOAD.UPLOADFILE")," ")}}function L(t,e){if(1&t){const t=b.Yb();b.Xb(0,"button",9),b.fc("click",function(){return b.Dc(t),b.jc(2).upload()}),b.Xb(1,"mat-icon"),b.Oc(2,"cloud_upload"),b.Wb(),b.Oc(3),b.kc(4,"translate"),b.Wb()}2&t&&(b.Eb(3),b.Qc("",b.lc(4,1,"CLIENTSUPLOAD.UPLOAD")," "))}function T(t,e){if(1&t&&(b.Xb(0,"div"),b.Oc(1),b.kc(2,"translate"),b.Xb(3,"mat-slide-toggle",10),b.Oc(4),b.kc(5,"translate"),b.Wb(),b.Mc(6,L,5,3,"button",11),b.Wb()),2&t){const t=b.jc();b.Eb(1),b.Qc(" ",b.lc(2,4,t.fileName||"CLIENTSUPLOAD.NOFILEUPLOADEDYET.")," "),b.Eb(2),b.pc("formControl",t.toggle),b.Eb(1),b.Pc(b.lc(5,6,"Mostrar clientes")),b.Eb(2),b.pc("ngIf",0==t.total)}}function R(t,e){if(1&t&&(b.Xb(0,"div"),b.Xb(1,"p"),b.Xb(2,"strong"),b.Oc(3),b.kc(4,"translate"),b.Wb(),b.Oc(5),b.kc(6,"translate"),b.Wb(),b.Xb(7,"p"),b.Oc(8),b.Wb(),b.Wb()),2&t){const t=b.jc();b.Eb(3),b.Qc("",b.lc(4,3,"CLIENTSUPLOAD.THEREAREDUPLICATECODES"),":"),b.Eb(2),b.Qc(" ",b.lc(6,5,"CLIENTSUPLOAD.PARRAF1"),""),b.Eb(3),b.Pc(t.duplicados.join(", "))}}function U(t,e){if(1&t&&(b.Xb(0,"div"),b.Xb(1,"div",12),b.Xb(2,"p"),b.Oc(3),b.kc(4,"translate"),b.Wb(),b.Xb(5,"p"),b.Xb(6,"b",13),b.Oc(7),b.Wb(),b.Wb(),b.Wb(),b.Wb()),2&t){const t=b.jc();b.Eb(3),b.Sc("",b.lc(4,4,"CLIENTSUPLOAD.UPLOAD"),": ",t.count," / ",t.total,""),b.Eb(4),b.Qc("",t.percent," %")}}function F(t,e){if(1&t&&b.Oc(0),2&t){const t=e.row;b.Qc(" ",null==t?null:t.scodcliente," ")}}function A(t,e){if(1&t&&b.Oc(0),2&t){const t=e.row;b.Qc(" ",null==t?null:t.srazonsocial," ")}}function P(t,e){if(1&t&&b.Oc(0),2&t){const t=e.row;b.Qc(" ",null==t?null:t.sdomicilio," ")}}function M(t,e){if(1&t&&b.Oc(0),2&t){const t=e.row;b.Qc(" ",null==t?null:t.scuit," ")}}function W(t,e){if(1&t&&b.Oc(0),2&t){const t=e.row;b.Qc(" ",null==t?null:t.scondicioniva," ")}}function k(t,e){1&t&&(b.Xb(0,"span"),b.Oc(1,"Si"),b.Wb())}function X(t,e){1&t&&(b.Xb(0,"span"),b.Oc(1,"No"),b.Wb())}function N(t,e){if(1&t&&(b.Mc(0,k,2,0,"span",2),b.Mc(1,X,2,0,"span",2)),2&t){const t=e.row;b.pc("ngIf","T"==(null==t?null:t.bcredito)),b.Eb(1),b.pc("ngIf","F"==(null==t?null:t.bcredito))}}function j(t,e){if(1&t&&b.Oc(0),2&t){const t=e.row;b.Qc(" ",null==t?null:t.rlimitecredito," ")}}function V(t,e){1&t&&(b.Xb(0,"span"),b.Oc(1,"Si"),b.Wb())}function H(t,e){1&t&&(b.Xb(0,"span"),b.Oc(1,"No"),b.Wb())}function $(t,e){if(1&t&&(b.Mc(0,V,2,0,"span",2),b.Mc(1,H,2,0,"span",2)),2&t){const t=e.row;b.pc("ngIf","T"==(null==t?null:t.bactivo)),b.Eb(1),b.pc("ngIf","F"==(null==t?null:t.bactivo))}}const G=function(){return{y:"50px",delay:"300ms"}},z=function(t){return{value:"*",params:t}},Q=[{path:"",component:(()=>{class t{constructor(t,e,i,o){this.servicioClientes=t,this.loader=e,this.snack=i,this.servicioUUID=o,this.fileName="",this.toggle=new n.e(!1,[]),this.toggleValue=!1,this.count=0,this.percent=0,this.total=0,this.toggle.valueChanges.subscribe(t=>{this.toggleValue=t}),this.empresas=[],this.duplicados=[],this.tipoCliente=[]}ngOnInit(){this.tabla1=new d.a,this.tabla1.groupField="",this.tabla1.secondarySort="snombre",this.tabla1.sum=[],this.loader.open(),this.servicioClientes.obtenerEmpresas().subscribe(t=>{this.empresas=t,this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}getTipoCliente(t){var e=this.tipoCliente.find(e=>e.id==t);return e?e.stipocliente:""}convertirComoSi(t){return"T"==t?"Si":"No"}esElMismoCliente(t,e){return!("string"==typeof e["*Codigo"]&&!Object.is(e["*Codigo"],t.scodcliente)||"string"==typeof e["*Raz\xf3n Social"]&&!Object.is(e["*Raz\xf3n Social"],t.srazonsocial)||"string"==typeof e["*Domicilio"]&&!Object.is(e["*Domicilio"],t.sdomicilio)||"string"==typeof e.Localidad&&!Object.is(e.Localidad,t.slocalidad?t.slocalidad:"")||"string"==typeof e["*Condicion IVA"]&&!Object.is(e["*Condicion IVA"],t.scondicioniva)||"string"==typeof e.CUIT&&!Object.is(e.CUIT,t.scuit?t.scuit:"")||"string"==typeof e["*Documento"]&&!Object.is(e["*Documento"],t.sdocumento)||"number"==typeof e["Limite de Credito"]&&!Object.is(e["Limite de Credito"],t.rlimitecredito)||"number"==typeof e["Tope de Descuento"]&&!Object.is(e["Tope de Descuento"],t.rtopedescuento)||"string"==typeof e["Venta a Credito"]&&!Object.is("S"==e["Venta a Credito"]?"T":"F",t.bcredito)||"string"==typeof e.Activo&&!Object.is("S"==e.Activo?"T":"F",t.bactivo)||"string"==typeof e.Favorito&&!Object.is("S"==e.Favorito?"T":"F","F"!=t.bfavorito?"T":"F"))}asignarValores(t,e){t.scodcliente=e["*Codigo"],e["*Raz\xf3n Social"]&&(t.srazonsocial=e["*Raz\xf3n Social"].toString()),e["*Domicilio"]&&(t.sdomicilio=e["*Domicilio"].toString()),e.Localidad&&(t.slocalidad=e.Localidad.toString()),e["*Condicion IVA"]&&(t.scondicioniva=e["*Condicion IVA"].toString()),e.CUIT&&(t.scuit=e.CUIT.toString()),e["*Documento"]&&(t.sdocumento=e["*Documento"].toString()),"number"==typeof e["Limite de Credito"]&&(t.rlimitecredito=e["Limite de Credito"]),t.hasOwnProperty("bactivo")||(t.bactivo="T"),"string"==typeof e.Activo&&("S"===e.Activo?t.bactivo="T":"N"===e.Activo&&(t.bactivo="F")),t.hasOwnProperty("bfavorito")||(t.bfavorito="F"),t.hasOwnProperty("rtopedescuento")||(t.rtopedescuento=100),"number"==typeof e["Tope de Descuento"]&&(t.rtopedescuento=e["Tope de Descuento"]),"string"==typeof e["Venta a Credito"]&&(t.bcredito="S"==e["Venta a Credito"]?"T":"F")}onFileSelected(t){const e=t.target.files[0];if(e){this.fileName=e.name;const t=new FileReader;t.onload=e=>{var i=h.read(t.result,{type:"binary"}),o=h.utils.sheet_to_json(i.Sheets.Clientes);this.loader.open(),this.servicioClientes.traerClientes().subscribe(t=>{this.rows=[];try{o.forEach(e=>{if(null!=e["*Codigo"]&&null!=e["*Codigo"]&&""!=e["*Codigo"]){var i=t.find(t=>t.scodcliente==e["*Codigo"]);if(i){if(!this.esElMismoCliente(i,e)){var o={};Object.assign(o,i),this.asignarValores(o,e),this.rows.push(o)}}else this.asignarValores(o={},e),this.rows.push(o)}})}catch(r){console.error(r)}for(var e=[],i=0;i<o.length;i++)if(o[i]["*Codigo"]){var n=o.filter(t=>{if(t["*Codigo"])return o[i]["*Codigo"]==t["*Codigo"]});n.length>1&&e.push(o[i]["*Codigo"]+" ("+n.length+" veces)")}this.duplicados=e,this.duplicados=Array.from(new Set(e)),this.tabla1.setData(this.rows),this.loader.close()})},this.loader.close(),t.readAsBinaryString(e)}}uploadFile(t){return t.id?this.servicioClientes.actualizarCliente(t):(t.id=this.servicioUUID.generateUUID(),this.servicioClientes.agregarCliente(t))}upload(){(new Date).getTime().toString(),this.count=0,this.percent=0,this.total=this.rows.length;const t=this.rows.map(t=>this.uploadFile(t)),e=(Object(c.a)(...t),Object(l.a)(...t),Object(u.a)(t).pipe(Object(m.a)(t=>t,6)));this.sub=e.pipe(Object(C.a)(t=>this.updateProgressMeter(t)),Object(O.a)()).subscribe(t=>{},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}updateProgressMeter(t){this.count++,this.percent=this.total>0?Math.round(this.count/this.total*100):0}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}getRowHeight(t){return 50}onSort(t){const e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}}return t.\u0275fac=function(e){return new(e||t)(b.Rb(g),b.Rb(s.a),b.Rb(v.a),b.Rb(a.a))},t.\u0275cmp=b.Lb({type:t,selectors:[["app-clients-upload"]],decls:37,vars:55,consts:[["type","file","accept","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",1,"file-input",3,"change"],["fileUpload",""],[4,"ngIf"],[3,"hidden"],[1,"p-0"],[1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort"],["myTable",""],[3,"name","flexGrow"],["ngx-datatable-cell-template",""],["mat-raised-button","","color","primary",1,"m-8",3,"click"],[1,"m-8",3,"formControl"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[2,"text-align","center"],[2,"font-size","150%"]],template:function(t,e){1&t&&(b.Xb(0,"mat-card"),b.Xb(1,"mat-card-content"),b.Xb(2,"input",0,1),b.fc("change",function(t){return e.onFileSelected(t)}),b.Wb(),b.Mc(4,I,8,6,"div",2),b.Mc(5,T,7,8,"div",2),b.Mc(6,R,9,7,"div",2),b.Mc(7,U,8,6,"div",2),b.Wb(),b.Wb(),b.Xb(8,"div",3),b.Xb(9,"mat-card",4),b.Xb(10,"mat-card-content",4),b.Xb(11,"ngx-datatable",5,6),b.fc("sort",function(t){return e.onSort(t)}),b.Xb(13,"ngx-datatable-column",7),b.kc(14,"translate"),b.Mc(15,F,1,1,"ng-template",8),b.Wb(),b.Xb(16,"ngx-datatable-column",7),b.kc(17,"translate"),b.Mc(18,A,1,1,"ng-template",8),b.Wb(),b.Xb(19,"ngx-datatable-column",7),b.kc(20,"translate"),b.Mc(21,P,1,1,"ng-template",8),b.Wb(),b.Xb(22,"ngx-datatable-column",7),b.kc(23,"translate"),b.Mc(24,M,1,1,"ng-template",8),b.Wb(),b.Xb(25,"ngx-datatable-column",7),b.kc(26,"translate"),b.Mc(27,W,1,1,"ng-template",8),b.Wb(),b.Xb(28,"ngx-datatable-column",7),b.kc(29,"translate"),b.Mc(30,N,2,2,"ng-template",8),b.Wb(),b.Xb(31,"ngx-datatable-column",7),b.kc(32,"translate"),b.Mc(33,j,1,1,"ng-template",8),b.Wb(),b.Xb(34,"ngx-datatable-column",7),b.kc(35,"translate"),b.Mc(36,$,2,2,"ng-template",8),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb()),2&t&&(b.pc("@animate",b.vc(50,z,b.uc(49,G))),b.Eb(4),b.pc("ngIf",!e.fileName),b.Eb(1),b.pc("ngIf",e.fileName),b.Eb(1),b.pc("ngIf",e.duplicados.length>0),b.Eb(1),b.pc("ngIf",e.total>0),b.Eb(1),b.pc("hidden",!e.toggleValue),b.Eb(1),b.pc("@animate",b.vc(53,z,b.uc(52,G))),b.Eb(2),b.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",e.tabla1.rows)("summaryRow",!1)("externalSorting",!0)("selectionType","single"),b.Eb(2),b.qc("name",b.lc(14,33,"CLIENTSUPLOAD.CODE")),b.pc("flexGrow",1),b.Eb(3),b.qc("name",b.lc(17,35,"CLIENTSUPLOAD.BUSINESSNAME")),b.pc("flexGrow",1),b.Eb(3),b.qc("name",b.lc(20,37,"CLIENTSUPLOAD.ADDRESS")),b.pc("flexGrow",1),b.Eb(3),b.qc("name",b.lc(23,39,"CLIENTSUPLOAD.CUIT")),b.pc("flexGrow",1),b.Eb(3),b.qc("name",b.lc(26,41,"CLIENTSUPLOAD.FISCALCONDITION")),b.pc("flexGrow",1),b.Eb(3),b.qc("name",b.lc(29,43,"CLIENTSUPLOAD.CREDIT")),b.pc("flexGrow",1),b.Eb(3),b.qc("name",b.lc(32,45,"CLIENTSUPLOAD.CREDITLIMIT")),b.pc("flexGrow",1),b.Eb(3),b.qc("name",b.lc(35,47,"CLIENTSUPLOAD.ACTIVE")),b.pc("flexGrow",1))},directives:[E.a,E.b,o.o,w.d,w.b,w.a,S.b,x.a,y.a,n.o,n.f],pipes:[D.c],styles:[".file-input[_ngcontent-%COMP%]{display:none}.progress[_ngcontent-%COMP%]{display:block;width:16px;height:16px;border:1px solid #000;float:left;margin:0 4px 4px 0}.progress.uploading[_ngcontent-%COMP%]{background:gold}.progress.uploaded[_ngcontent-%COMP%], uploading[_ngcontent-%COMP%]{background:green}"],data:{animation:[r.a]}}),t})(),data:{title:"SUBIR CLIENTES"}}];var q=i("iInd"),Y=i("u9T3"),_=i("f44v"),J=i("iELJ"),B=i("e6WT"),Z=i("ZTz/"),K=i("M9ds"),tt=i("ZFy/"),et=i("PCNd");let it=(()=>{class t{}return t.\u0275mod=b.Pb({type:t}),t.\u0275inj=b.Ob({factory:function(e){return new(e||t)},imports:[[o.c,n.t,Y.a,w.f,B.c,B.c,E.c,B.c,S.c,_.a,B.c,tt.b,J.f,v.b,y.b,K.c,Z.b,x.b,D.b,et.a,q.k.forChild(Q)]]}),t})()}}]);