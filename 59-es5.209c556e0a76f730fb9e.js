!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{vpPe:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var c=i("8Y7J"),a=function(){var t=function(){function t(){n(this,t)}return o(t,[{key:"generateUUID",value:function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)})}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},yElb:function(e,i,c){"use strict";c.r(i),c.d(i,"ClientsUploadModule",function(){return lt});var a,r=c("SVse"),l=c("s7LF"),s=c("GmJt"),u=c("3sEA"),b=c("vpPe"),f=c("GyhO"),d=c("VRyK"),p=c("Cfvw"),g=c("CHRX"),h=c("EUZL"),m=c("AytR"),v=c("8Y7J"),C=c("IheW"),y=((a=function(){function t(e){n(this,t),this.http=e,this.listaClientes=[]}return o(t,[{key:"obtenerDatos",value:function(t,e,n){return this.http.get(encodeURI("".concat(m.a.apiURL,'Clientes?filter={"where":').concat(t,',"limit":').concat(e,',"skip":').concat(n,',"order":"srazonsocial ASC"}')))}},{key:"traerClientes",value:function(){return this.http.get(encodeURI(m.a.apiURL+"Clientes"))}},{key:"actualizarCliente",value:function(t){return this.http.put("".concat(m.a.apiURL,"Clientes/").concat(t.id),t)}},{key:"obtenerTiposClientes",value:function(){return this.http.get(encodeURI(m.a.apiURL+'Tiposcliente?filter={"where":{"deletedon":{"eq":null}}}'))}},{key:"obtenerEmpresas",value:function(){return this.http.get(m.a.apiURL+"Empresas")}},{key:"agregarCliente",value:function(t){return this.http.post(m.a.apiURL+"Clientes",t)}},{key:"traerClientesPagina",value:function(t,e,n,i){var o=this;this.http.get(encodeURI("".concat(m.a.apiURL,'Clientes?filter={"limit":').concat(t,',"skip":').concat(e,',"order":"').concat(n,'"}'))).subscribe(function(c){c.length>0?(o.listaClientes=o.listaClientes.concat(c),o.traerClientesPagina(t,e+t,n,i)):i()})}},{key:"traerProductos",value:function(t,e){this.listaClientes.length=0,this.traerClientesPagina(2e4,0,t,e)}}]),t}()).\u0275fac=function(t){return new(t||a)(v.bc(C.c))},a.\u0275prov=v.Nb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),O=c("5+tZ"),E=c("vkgz"),I=c("IAdc"),S=c("zHaW"),x=c("PDjf"),w=c("w9WL"),L=c("Dxy4"),T=c("Tj54"),k=c("jMqV"),D=c("TSSN");function A(t,e){if(1&t){var n=v.Yb();v.Xb(0,"div"),v.Oc(1),v.kc(2,"translate"),v.Xb(3,"button",9),v.fc("click",function(){return v.Dc(n),v.jc(),v.Ac(3).click()}),v.Xb(4,"mat-icon"),v.Oc(5,"attach_file"),v.Wb(),v.Oc(6),v.kc(7,"translate"),v.Wb(),v.Wb()}if(2&t){var i=v.jc();v.Eb(1),v.Qc(" ",v.lc(2,2,i.fileName||"CLIENTSUPLOAD.NOFILEUPLOADEDYET.")," "),v.Eb(5),v.Qc("",v.lc(7,4,"CLIENTSUPLOAD.UPLOADFILE")," ")}}function U(t,e){if(1&t){var n=v.Yb();v.Xb(0,"button",9),v.fc("click",function(){return v.Dc(n),v.jc(2).upload()}),v.Xb(1,"mat-icon"),v.Oc(2,"cloud_upload"),v.Wb(),v.Oc(3),v.kc(4,"translate"),v.Wb()}2&t&&(v.Eb(3),v.Qc("",v.lc(4,1,"CLIENTSUPLOAD.UPLOAD")," "))}function P(t,e){if(1&t&&(v.Xb(0,"div"),v.Oc(1),v.kc(2,"translate"),v.Xb(3,"mat-slide-toggle",10),v.Oc(4),v.kc(5,"translate"),v.Wb(),v.Mc(6,U,5,3,"button",11),v.Wb()),2&t){var n=v.jc();v.Eb(1),v.Qc(" ",v.lc(2,4,n.fileName||"CLIENTSUPLOAD.NOFILEUPLOADEDYET.")," "),v.Eb(2),v.pc("formControl",n.toggle),v.Eb(1),v.Pc(v.lc(5,6,"Mostrar clientes")),v.Eb(2),v.pc("ngIf",0==n.total)}}function R(t,e){if(1&t&&(v.Xb(0,"div"),v.Xb(1,"p"),v.Xb(2,"strong"),v.Oc(3),v.kc(4,"translate"),v.Wb(),v.Oc(5),v.kc(6,"translate"),v.Wb(),v.Xb(7,"p"),v.Oc(8),v.Wb(),v.Wb()),2&t){var n=v.jc();v.Eb(3),v.Qc("",v.lc(4,3,"CLIENTSUPLOAD.THEREAREDUPLICATECODES"),":"),v.Eb(2),v.Qc(" ",v.lc(6,5,"CLIENTSUPLOAD.PARRAF1"),""),v.Eb(3),v.Pc(n.duplicados.join(", "))}}function W(t,e){if(1&t&&(v.Xb(0,"div"),v.Xb(1,"div",12),v.Xb(2,"p"),v.Oc(3),v.kc(4,"translate"),v.Wb(),v.Xb(5,"p"),v.Xb(6,"b",13),v.Oc(7),v.Wb(),v.Wb(),v.Wb(),v.Wb()),2&t){var n=v.jc();v.Eb(3),v.Sc("",v.lc(4,4,"CLIENTSUPLOAD.UPLOAD"),": ",n.count," / ",n.total,""),v.Eb(4),v.Qc("",n.percent," %")}}function M(t,e){if(1&t&&v.Oc(0),2&t){var n=e.row;v.Qc(" ",null==n?null:n.scodcliente," ")}}function j(t,e){if(1&t&&v.Oc(0),2&t){var n=e.row;v.Qc(" ",null==n?null:n.srazonsocial," ")}}function N(t,e){if(1&t&&v.Oc(0),2&t){var n=e.row;v.Qc(" ",null==n?null:n.sdomicilio," ")}}function X(t,e){if(1&t&&v.Oc(0),2&t){var n=e.row;v.Qc(" ",null==n?null:n.scuit," ")}}function F(t,e){if(1&t&&v.Oc(0),2&t){var n=e.row;v.Qc(" ",null==n?null:n.scondicioniva," ")}}function V(t,e){1&t&&(v.Xb(0,"span"),v.Oc(1,"Si"),v.Wb())}function z(t,e){1&t&&(v.Xb(0,"span"),v.Oc(1,"No"),v.Wb())}function H(t,e){if(1&t&&(v.Mc(0,V,2,0,"span",2),v.Mc(1,z,2,0,"span",2)),2&t){var n=e.row;v.pc("ngIf","T"==(null==n?null:n.bcredito)),v.Eb(1),v.pc("ngIf","F"==(null==n?null:n.bcredito))}}function Q(t,e){if(1&t&&v.Oc(0),2&t){var n=e.row;v.Qc(" ",null==n?null:n.rlimitecredito," ")}}function G(t,e){1&t&&(v.Xb(0,"span"),v.Oc(1,"Si"),v.Wb())}function q(t,e){1&t&&(v.Xb(0,"span"),v.Oc(1,"No"),v.Wb())}function _(t,e){if(1&t&&(v.Mc(0,G,2,0,"span",2),v.Mc(1,q,2,0,"span",2)),2&t){var n=e.row;v.pc("ngIf","T"==(null==n?null:n.bactivo)),v.Eb(1),v.pc("ngIf","F"==(null==n?null:n.bactivo))}}var J,Y,Z=function(){return{y:"50px",delay:"300ms"}},B=function(t){return{value:"*",params:t}},K=[{path:"",component:(J=function(){function e(t,i,o,c){var a=this;n(this,e),this.servicioClientes=t,this.loader=i,this.snack=o,this.servicioUUID=c,this.fileName="",this.toggle=new l.e(!1,[]),this.toggleValue=!1,this.count=0,this.percent=0,this.total=0,this.toggle.valueChanges.subscribe(function(t){a.toggleValue=t}),this.empresas=[],this.duplicados=[],this.tipoCliente=[]}return o(e,[{key:"ngOnInit",value:function(){var t=this;this.tabla1=new g.a,this.tabla1.groupField="",this.tabla1.secondarySort="snombre",this.tabla1.sum=[],this.loader.open(),this.servicioClientes.obtenerEmpresas().subscribe(function(e){t.empresas=e,t.loader.close()},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"getTipoCliente",value:function(t){var e=this.tipoCliente.find(function(e){return e.id==t});return e?e.stipocliente:""}},{key:"convertirComoSi",value:function(t){return"T"==t?"Si":"No"}},{key:"esElMismoCliente",value:function(t,e){return!("string"==typeof e["*Codigo"]&&!Object.is(e["*Codigo"],t.scodcliente)||"string"==typeof e["*Raz\xf3n Social"]&&!Object.is(e["*Raz\xf3n Social"],t.srazonsocial)||"string"==typeof e["*Domicilio"]&&!Object.is(e["*Domicilio"],t.sdomicilio)||"string"==typeof e.Localidad&&!Object.is(e.Localidad,t.slocalidad?t.slocalidad:"")||"string"==typeof e["*Condicion IVA"]&&!Object.is(e["*Condicion IVA"],t.scondicioniva)||"string"==typeof e.CUIT&&!Object.is(e.CUIT,t.scuit?t.scuit:"")||"string"==typeof e["*Documento"]&&!Object.is(e["*Documento"],t.sdocumento)||"number"==typeof e["Limite de Credito"]&&!Object.is(e["Limite de Credito"],t.rlimitecredito)||"number"==typeof e["Tope de Descuento"]&&!Object.is(e["Tope de Descuento"],t.rtopedescuento)||"string"==typeof e["Venta a Credito"]&&!Object.is("S"==e["Venta a Credito"]?"T":"F",t.bcredito)||"string"==typeof e.Activo&&!Object.is("S"==e.Activo?"T":"F",t.bactivo)||"string"==typeof e.Favorito&&!Object.is("S"==e.Favorito?"T":"F","F"!=t.bfavorito?"T":"F"))}},{key:"asignarValores",value:function(t,e){t.scodcliente=e["*Codigo"],e["*Raz\xf3n Social"]&&(t.srazonsocial=e["*Raz\xf3n Social"].toString()),e["*Domicilio"]&&(t.sdomicilio=e["*Domicilio"].toString()),e.Localidad&&(t.slocalidad=e.Localidad.toString()),e["*Condicion IVA"]&&(t.scondicioniva=e["*Condicion IVA"].toString()),e.CUIT&&(t.scuit=e.CUIT.toString()),e["*Documento"]&&(t.sdocumento=e["*Documento"].toString()),"number"==typeof e["Limite de Credito"]&&(t.rlimitecredito=e["Limite de Credito"]),t.hasOwnProperty("bactivo")||(t.bactivo="T"),"string"==typeof e.Activo&&("S"===e.Activo?t.bactivo="T":"N"===e.Activo&&(t.bactivo="F")),t.hasOwnProperty("bfavorito")||(t.bfavorito="F"),t.hasOwnProperty("rtopedescuento")||(t.rtopedescuento=100),"number"==typeof e["Tope de Descuento"]&&(t.rtopedescuento=e["Tope de Descuento"]),"string"==typeof e["Venta a Credito"]&&(t.bcredito="S"==e["Venta a Credito"]?"T":"F")}},{key:"onFileSelected",value:function(t){var e=this,n=t.target.files[0];if(n){this.fileName=n.name;var i=new FileReader;i.onload=function(t){var n=h.read(i.result,{type:"binary"}),o=h.utils.sheet_to_json(n.Sheets.Clientes);e.loader.open(),e.servicioClientes.traerClientes().subscribe(function(t){e.rows=[];try{o.forEach(function(n){if(null!=n["*Codigo"]&&null!=n["*Codigo"]&&""!=n["*Codigo"]){var i=t.find(function(t){return t.scodcliente==n["*Codigo"]});if(i){if(!e.esElMismoCliente(i,n)){var o={};Object.assign(o,i),e.asignarValores(o,n),e.rows.push(o)}}else e.asignarValores(o={},n),e.rows.push(o)}})}catch(a){console.error(a)}for(var n=[],i=0;i<o.length;i++)if(o[i]["*Codigo"]){var c=o.filter(function(t){if(t["*Codigo"])return o[i]["*Codigo"]==t["*Codigo"]});c.length>1&&n.push(o[i]["*Codigo"]+" ("+c.length+" veces)")}e.duplicados=n,e.duplicados=Array.from(new Set(n)),e.tabla1.setData(e.rows),e.loader.close()})},this.loader.close(),i.readAsBinaryString(n)}}},{key:"uploadFile",value:function(t){return t.id?this.servicioClientes.actualizarCliente(t):(t.id=this.servicioUUID.generateUUID(),this.servicioClientes.agregarCliente(t))}},{key:"upload",value:function(){var e=this;(new Date).getTime().toString(),this.count=0,this.percent=0,this.total=this.rows.length;var n=this.rows.map(function(t){return e.uploadFile(t)}),i=(Object(f.a).apply(void 0,t(n)),Object(d.a).apply(void 0,t(n)),Object(p.a)(n).pipe(Object(O.a)(function(t){return t},6)));this.sub=i.pipe(Object(E.a)(function(t){return e.updateProgressMeter(t)}),Object(I.a)()).subscribe(function(t){},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}},{key:"updateProgressMeter",value:function(t){this.count++,this.percent=this.total>0?Math.round(this.count/this.total*100):0}},{key:"ngOnDestroy",value:function(){this.sub&&this.sub.unsubscribe()}},{key:"getRowHeight",value:function(t){return 50}},{key:"onSort",value:function(t){var e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}}]),e}(),J.\u0275fac=function(t){return new(t||J)(v.Rb(y),v.Rb(u.a),v.Rb(S.a),v.Rb(b.a))},J.\u0275cmp=v.Lb({type:J,selectors:[["app-clients-upload"]],decls:37,vars:55,consts:[["type","file","accept","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",1,"file-input",3,"change"],["fileUpload",""],[4,"ngIf"],[3,"hidden"],[1,"p-0"],[1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort"],["myTable",""],[3,"name","flexGrow"],["ngx-datatable-cell-template",""],["mat-raised-button","","color","primary",1,"m-8",3,"click"],[1,"m-8",3,"formControl"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[2,"text-align","center"],[2,"font-size","150%"]],template:function(t,e){1&t&&(v.Xb(0,"mat-card"),v.Xb(1,"mat-card-content"),v.Xb(2,"input",0,1),v.fc("change",function(t){return e.onFileSelected(t)}),v.Wb(),v.Mc(4,A,8,6,"div",2),v.Mc(5,P,7,8,"div",2),v.Mc(6,R,9,7,"div",2),v.Mc(7,W,8,6,"div",2),v.Wb(),v.Wb(),v.Xb(8,"div",3),v.Xb(9,"mat-card",4),v.Xb(10,"mat-card-content",4),v.Xb(11,"ngx-datatable",5,6),v.fc("sort",function(t){return e.onSort(t)}),v.Xb(13,"ngx-datatable-column",7),v.kc(14,"translate"),v.Mc(15,M,1,1,"ng-template",8),v.Wb(),v.Xb(16,"ngx-datatable-column",7),v.kc(17,"translate"),v.Mc(18,j,1,1,"ng-template",8),v.Wb(),v.Xb(19,"ngx-datatable-column",7),v.kc(20,"translate"),v.Mc(21,N,1,1,"ng-template",8),v.Wb(),v.Xb(22,"ngx-datatable-column",7),v.kc(23,"translate"),v.Mc(24,X,1,1,"ng-template",8),v.Wb(),v.Xb(25,"ngx-datatable-column",7),v.kc(26,"translate"),v.Mc(27,F,1,1,"ng-template",8),v.Wb(),v.Xb(28,"ngx-datatable-column",7),v.kc(29,"translate"),v.Mc(30,H,2,2,"ng-template",8),v.Wb(),v.Xb(31,"ngx-datatable-column",7),v.kc(32,"translate"),v.Mc(33,Q,1,1,"ng-template",8),v.Wb(),v.Xb(34,"ngx-datatable-column",7),v.kc(35,"translate"),v.Mc(36,_,2,2,"ng-template",8),v.Wb(),v.Wb(),v.Wb(),v.Wb(),v.Wb()),2&t&&(v.pc("@animate",v.vc(50,B,v.uc(49,Z))),v.Eb(4),v.pc("ngIf",!e.fileName),v.Eb(1),v.pc("ngIf",e.fileName),v.Eb(1),v.pc("ngIf",e.duplicados.length>0),v.Eb(1),v.pc("ngIf",e.total>0),v.Eb(1),v.pc("hidden",!e.toggleValue),v.Eb(1),v.pc("@animate",v.vc(53,B,v.uc(52,Z))),v.Eb(2),v.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",e.tabla1.rows)("summaryRow",!1)("externalSorting",!0)("selectionType","single"),v.Eb(2),v.qc("name",v.lc(14,33,"CLIENTSUPLOAD.CODE")),v.pc("flexGrow",1),v.Eb(3),v.qc("name",v.lc(17,35,"CLIENTSUPLOAD.BUSINESSNAME")),v.pc("flexGrow",1),v.Eb(3),v.qc("name",v.lc(20,37,"CLIENTSUPLOAD.ADDRESS")),v.pc("flexGrow",1),v.Eb(3),v.qc("name",v.lc(23,39,"CLIENTSUPLOAD.CUIT")),v.pc("flexGrow",1),v.Eb(3),v.qc("name",v.lc(26,41,"CLIENTSUPLOAD.FISCALCONDITION")),v.pc("flexGrow",1),v.Eb(3),v.qc("name",v.lc(29,43,"CLIENTSUPLOAD.CREDIT")),v.pc("flexGrow",1),v.Eb(3),v.qc("name",v.lc(32,45,"CLIENTSUPLOAD.CREDITLIMIT")),v.pc("flexGrow",1),v.Eb(3),v.qc("name",v.lc(35,47,"CLIENTSUPLOAD.ACTIVE")),v.pc("flexGrow",1))},directives:[x.a,x.b,r.o,w.d,w.b,w.a,L.b,T.a,k.a,l.o,l.f],pipes:[D.c],styles:[".file-input[_ngcontent-%COMP%]{display:none}.progress[_ngcontent-%COMP%]{display:block;width:16px;height:16px;border:1px solid #000;float:left;margin:0 4px 4px 0}.progress.uploading[_ngcontent-%COMP%]{background:gold}.progress.uploaded[_ngcontent-%COMP%], uploading[_ngcontent-%COMP%]{background:green}"],data:{animation:[s.a]}}),J),data:{title:"SUBIR CLIENTES"}}],$=c("iInd"),tt=c("u9T3"),et=c("f44v"),nt=c("iELJ"),it=c("e6WT"),ot=c("ZTz/"),ct=c("M9ds"),at=c("ZFy/"),rt=c("PCNd"),lt=((Y=function t(){n(this,t)}).\u0275mod=v.Pb({type:Y}),Y.\u0275inj=v.Ob({factory:function(t){return new(t||Y)},imports:[[r.c,l.t,tt.a,w.f,it.c,it.c,x.c,it.c,L.c,et.a,it.c,at.b,nt.f,S.b,k.b,ct.c,ot.b,T.b,D.b,rt.a,$.k.forChild(K)]]}),Y)}}])}();