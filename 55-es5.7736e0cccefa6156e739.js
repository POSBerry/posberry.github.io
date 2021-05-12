!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{CHRX:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var c=n("wd/R"),a=function(){function e(){o(this,e),this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.summaryRow=!0,this.emptyRow=!0,this.customFilter=function(e){return e}}return i(e,[{key:"setGroup",value:function(e){this.groups[e.name]=!this.groups[e.name],this.filterRows()}},{key:"setData",value:function(e){this.data=e,this.sortData()}},{key:"sortData",value:function(){var e=this;this.data.sort(function(t,r){if(t[e.groupField]==r[e.groupField]){if(e.secondarySort){if(null==t[e.secondarySort])return 1;if(null==r[e.secondarySort])return-1;if(t[e.secondarySort]>r[e.secondarySort])return 1*("desc"===e.sortDir?-1:1);if(t[e.secondarySort]<r[e.secondarySort])return-1*("desc"===e.sortDir?-1:1)}}else{if(null==t[e.groupField])return 1;if(null==r[e.groupField])return-1;if(t[e.groupField]>r[e.groupField])return 1;if(t[e.groupField]<r[e.groupField])return-1}return 0}),this.filterRows()}},{key:"filterRows",value:function(){var e=this,t=[];t=this.data.filter(function(t){for(var r in e.filter){if(e.filter[r]&&null==t[r])return!1;switch(typeof t[r]){case"number":if(e.filter[r]&&Math.trunc(t[r]).toString()!==Math.trunc(e.filter[r]).toString())return!1;break;case"string":if("f"==r.charAt(0).toLowerCase()&&c(t[r]).isValid){if(-1==c(t[r]).format("DD/MM/YYYY HH:mm:ss").indexOf(e.filter[r]))return!1;break}if(-1==t[r].toLowerCase().indexOf(e.filter[r].toLowerCase()))return!1}}return!0}),t=this.customFilter(t);var o={};this.groupField?o[this.groupField]=t.length.toString():o.count=t.length.toString(),this.sum.forEach(function(e){return o[e]=0});for(var n=0;n<t.length;n++)this.sum.forEach(function(e){return o[e]+=t[n][e]});if(o.isGroup=!0,this.footer=o,this.groupField){var i=[];t.forEach(function(t){-1==i.indexOf(t[e.groupField])&&i.push(t[e.groupField])}),i=i.map(function(e){return{name:e,count:1}});var a=[],s=!0,l=0,u=null,p=function(){u&&(u[e.groupField]+=" ("+i[l-1].count.toString()+")")};for(n=0;n<t.length;n++){if(s&&t[n][this.groupField]==i[l].name){var f;p();var d="+";this.groups[i[l].name]&&(d="-"),r(f={},this.groupField,d+" "+i[l].name),r(f,"isGroup",!0),r(f,"name",i[l].name),u=f,this.sum.forEach(function(e){return u[e]=0}),a.push(u),s=++l<i.length}else i[l-1].count++;this.sum.forEach(function(e){return u[e]+=t[n][e]}),a.push(t[n])}p(),t=null,a=a.filter(function(t){return!!t.isGroup||!!e.groups[t[e.groupField]]||void 0}),this.rows=a}else this.rows=t;this.summaryRow&&this.rows.push(this.footer),0==this.rows.length&&this.emptyRow&&this.rows.push({})}},{key:"updateFilter",value:function(e,t){if(e&&t){var r=e.target.value;e instanceof MouseEvent&&(r=""),this.filter[t]=r,this.filterRows()}return!0}},{key:"updateFilterBoolean",value:function(e,t){return this.filter[t]=e,this.filterRows(),!0}}],[{key:"prepararFiltroAPI",value:function(e){var t="";for(var r in e)e[r].search&&(t+="number"==typeof e[r].search?'{"'.concat(r,'":').concat(e[r].search,"},"):e[r].exact?'{"'.concat(r,'":"').concat(e[r].search,'"},'):'{"'.concat(r,'":{"ilike":"%').concat(e[r].search,'%"}},'));return t}}]),e}()},PX4K:function(t,r,n){"use strict";n.r(r),n.d(r,"ProductsUploadModule",function(){return de});var c=n("SVse"),a=n("iInd"),s=n("s7LF"),l=n("u9T3"),u=n("w9WL"),p=n("e6WT"),f=n("PDjf"),d=n("Dxy4"),b=n("f44v"),m=n("ZFy/"),g=n("iELJ"),O=n("zHaW"),h=n("jMqV"),P=n("TSSN"),v=n("PCNd"),y=n("M9ds"),E=n("ZTz/"),w=n("Tj54"),C=n("GmJt"),x=n("3sEA"),S=n("vpPe"),D=n("cp0P"),T=n("GyhO"),M=n("VRyK"),k=n("Cfvw"),R=n("5+tZ"),U=n("vkgz"),A=n("IAdc"),I=n("EUZL"),N=n("CHRX"),L=n("qA6C"),F=n("8Y7J");function j(e,t){if(1&e){var r=F.Yb();F.Xb(0,"div"),F.Oc(1),F.kc(2,"translate"),F.Xb(3,"button",20),F.fc("click",function(){return F.Dc(r),F.jc(),F.Ac(3).click()}),F.Xb(4,"mat-icon"),F.Oc(5,"attach_file"),F.Wb(),F.Oc(6),F.kc(7,"translate"),F.Wb(),F.Wb()}if(2&e){var o=F.jc();F.Eb(1),F.Qc(" ",F.lc(2,2,o.fileName||"PRODUCTSUPLOADCOMPONENT.NOFILEUPLOADEDYET.")," "),F.Eb(5),F.Qc("",F.lc(7,4,"PRODUCTSUPLOADCOMPONENT.FILEUPLOAD")," ")}}function V(e,t){if(1&e){var r=F.Yb();F.Xb(0,"button",20),F.fc("click",function(){return F.Dc(r),F.jc(2).upload()}),F.Xb(1,"mat-icon"),F.Oc(2,"cloud_upload"),F.Wb(),F.Oc(3),F.kc(4,"translate"),F.Wb()}2&e&&(F.Eb(3),F.Qc("",F.lc(4,1,"PRODUCTSUPLOADCOMPONENT.UPLOAD")," "))}function W(e,t){if(1&e&&(F.Xb(0,"div"),F.Oc(1),F.kc(2,"translate"),F.Xb(3,"mat-slide-toggle",21),F.Oc(4),F.kc(5,"translate"),F.Wb(),F.Mc(6,V,5,3,"button",22),F.Wb()),2&e){var r=F.jc();F.Eb(1),F.Qc(" ",F.lc(2,4,r.fileName||"PRODUCTSUPLOADCOMPONENT.NOFILEUPLOADEDYET.")," "),F.Eb(2),F.pc("formControl",r.toggle),F.Eb(1),F.Pc(F.lc(5,6,"PRODUCTSUPLOADCOMPONENT.SHOWPRODUCTS")),F.Eb(2),F.pc("ngIf",0==r.total)}}function X(e,t){if(1&e&&(F.Xb(0,"div"),F.Xb(1,"p"),F.Xb(2,"strong"),F.Oc(3),F.kc(4,"translate"),F.Wb(),F.Oc(5),F.kc(6,"translate"),F.Wb(),F.Xb(7,"p"),F.Oc(8),F.Wb(),F.Wb()),2&e){var r=F.jc();F.Eb(3),F.Qc("",F.lc(4,3,"PRODUCTSUPLOADCOMPONENT.THEREAREDUPLICATECODES"),":"),F.Eb(2),F.Qc(" ",F.lc(6,5,"PRODUCTSUPLOADCOMPONENT.PARRAF1"),"."),F.Eb(3),F.Pc(r.duplicados.join(", "))}}function G(e,t){if(1&e&&(F.Xb(0,"div"),F.Xb(1,"p"),F.Xb(2,"strong"),F.Oc(3),F.kc(4,"translate"),F.Wb(),F.Oc(5),F.kc(6,"translate"),F.Wb(),F.Xb(7,"p"),F.Oc(8),F.Wb(),F.Wb()),2&e){var r=F.jc();F.Eb(3),F.Qc("",F.lc(4,4,"PRODUCTSUPLOADCOMPONENT.THEREAREERRORSINTHEVATFIELDS"),":"),F.Eb(2),F.Rc(" ",r.erroriva.length," ",F.lc(6,6,"PRODUCTSUPLOADCOMPONENT.PRODUCT(S)HAVEINCORRECTLYLOADEDTHEVATFIELD"),"."),F.Eb(3),F.Pc(r.erroriva.join(", "))}}function H(e,t){if(1&e&&(F.Xb(0,"div"),F.Xb(1,"div",23),F.Xb(2,"p"),F.Oc(3),F.kc(4,"translate"),F.Wb(),F.Xb(5,"p"),F.Xb(6,"b",24),F.Oc(7),F.Wb(),F.Wb(),F.Wb(),F.Wb()),2&e){var r=F.jc();F.Eb(3),F.Sc("",F.lc(4,4,"PRODUCTSUPLOADCOMPONENT.UPLOAD"),": ",r.count," / ",r.total,""),F.Eb(4),F.Qc("",r.percent," %")}}function Q(e,t){if(1&e&&F.Oc(0),2&e){var r=t.row;F.Qc(" ",null==r?null:r.scodproducto," ")}}function Y(e,t){if(1&e&&F.Oc(0),2&e){var r=t.row;F.Qc(" ",null==r?null:r.snombre," ")}}function B(e,t){if(1&e&&(F.Oc(0),F.kc(1,"currency")),2&e){var r=t.row;F.Qc(" ",F.lc(1,1,null==r?null:r.rcostou)," ")}}function _(e,t){if(1&e&&(F.Oc(0),F.kc(1,"currency")),2&e){var r=t.row;F.Qc(" ",F.lc(1,1,null==r?null:r.rpreciou)," ")}}function q(e,t){if(1&e&&(F.Oc(0),F.kc(1,"currency")),2&e){var r=t.row;F.Qc(" ",F.lc(1,1,null==r?null:r.rpreciou2)," ")}}function J(e,t){1&e&&(F.Xb(0,"ngx-datatable-column",25),F.kc(1,"translate"),F.Mc(2,q,2,3,"ng-template",8),F.Wb()),2&e&&(F.rc("name","",F.lc(1,2,"PRODUCTSUPLOADCOMPONENT.SALESPRICE")," 2"),F.pc("flexGrow",1))}function z(e,t){if(1&e&&(F.Oc(0),F.kc(1,"currency")),2&e){var r=t.row;F.Qc(" ",F.lc(1,1,null==r?null:r.rpreciou3)," ")}}function K(e,t){1&e&&(F.Xb(0,"ngx-datatable-column",26),F.kc(1,"translate"),F.Mc(2,z,2,3,"ng-template",8),F.Wb()),2&e&&(F.rc("name","",F.lc(1,2,"PRODUCTSUPLOADCOMPONENT.SALESPRICE")," 3"),F.pc("flexGrow",1))}function Z(e,t){if(1&e&&(F.Oc(0),F.kc(1,"currency")),2&e){var r=t.row;F.Qc(" ",F.lc(1,1,null==r?null:r.rpreciou4)," ")}}function $(e,t){1&e&&(F.Xb(0,"ngx-datatable-column",27),F.kc(1,"translate"),F.Mc(2,Z,2,3,"ng-template",8),F.Wb()),2&e&&(F.rc("name","",F.lc(1,2,"PRODUCTSUPLOADCOMPONENT.SALESPRICE")," 4"),F.pc("flexGrow",1))}function ee(e,t){if(1&e&&(F.Oc(0),F.kc(1,"currency")),2&e){var r=t.row;F.Qc(" ",F.lc(1,1,null==r?null:r.rpreciou5)," ")}}function te(e,t){1&e&&(F.Xb(0,"ngx-datatable-column",28),F.kc(1,"translate"),F.Mc(2,ee,2,3,"ng-template",8),F.Wb()),2&e&&(F.rc("name","",F.lc(1,2,"PRODUCTSUPLOADCOMPONENT.SALESPRICE")," 5"),F.pc("flexGrow",1))}function re(e,t){if(1&e&&(F.Oc(0),F.kc(1,"currency")),2&e){var r=t.row;F.Qc(" ",F.lc(1,1,null==r?null:r.rpreciou6)," ")}}function oe(e,t){1&e&&(F.Xb(0,"ngx-datatable-column",29),F.kc(1,"translate"),F.Mc(2,re,2,3,"ng-template",8),F.Wb()),2&e&&(F.rc("name","",F.lc(1,2,"PRODUCTSUPLOADCOMPONENT.SALESPRICE")," 6"),F.pc("flexGrow",1))}function ne(e,t){if(1&e&&(F.Oc(0),F.kc(1,"currency")),2&e){var r=t.row;F.Qc(" ",F.lc(1,1,null==r?null:r.rpreciou7)," ")}}function ie(e,t){1&e&&(F.Xb(0,"ngx-datatable-column",30),F.kc(1,"translate"),F.Mc(2,ne,2,3,"ng-template",8),F.Wb()),2&e&&(F.rc("name","",F.lc(1,2,"PRODUCTSUPLOADCOMPONENT.SALESPRICE")," 7"),F.pc("flexGrow",1))}function ce(e,t){if(1&e&&F.Oc(0),2&e){var r=t.row;F.Qc(" ",null==r?null:r.sfamilia," ")}}function ae(e,t){if(1&e&&(F.Oc(0),F.kc(1,"number")),2&e){var r=t.row;F.Qc(" ",F.lc(1,1,null==r?null:r.rstockminimo)," ")}}var se,le,ue=function(){return{y:"50px",delay:"300ms"}},pe=function(e){return{value:"*",params:e}},fe=[{path:"",component:(se=function(){function t(e,r,n,i){var c=this;o(this,t),this.servicioProductos=e,this.loader=r,this.snack=n,this.servicioUUID=i,this.fileName="",this.toggle=new s.e(!1,[]),this.toggleValue=!1,this.count=0,this.percent=0,this.total=0,Object.is||(Object.is=function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}),this.toggle.valueChanges.subscribe(function(e){c.toggleValue=e}),this.empresas=[],this.duplicados=[],this.erroriva=[]}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.tabla1=new N.a,this.tabla1.groupField="",this.tabla1.secondarySort="snombre",this.tabla1.sum=[],this.loader.open(),Object(D.a)([this.servicioProductos.obtenerFamilias(),this.servicioProductos.obtenerEmpresas()]).subscribe(function(t){e.familias=t[0],e.empresas=t[1],e.loader.close()},function(t){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}},{key:"esElMismoProducto",value:function(e,t){return!("string"==typeof t["*Descripcion"]&&!Object.is(t["*Descripcion"],e.snombre)||t["Codigo de Barras"]&&!Object.is(t["Codigo de Barras"],e.sean?e.sean:"")||t["Codigo de Barras 2"]&&!Object.is(t["Codigo de Barras 2"],e.sean2?e.sean2:"")||"string"==typeof t.Familia&&!Object.is(t.Familia,e.sfamilia?e.sfamilia:"")||"number"==typeof t["*Costo"]&&!Object.is(t["*Costo"],e.rcostou)||"number"==typeof t["*Precio de Venta"]&&!Object.is(t["*Precio de Venta"],e.rpreciou)||"number"==typeof t["*Precio de Venta 2"]&&!Object.is(t["*Precio de Venta 2"],e.rpreciou2)||"number"==typeof t["*Precio de Venta 3"]&&!Object.is(t["*Precio de Venta 3"],e.rpreciou3)||"number"==typeof t["*Precio de Venta 4"]&&!Object.is(t["*Precio de Venta 4"],e.rpreciou4)||"number"==typeof t["*Precio de Venta 5"]&&!Object.is(t["*Precio de Venta 5"],e.rpreciou5)||"number"==typeof t["*Precio de Venta 6"]&&!Object.is(t["*Precio de Venta 6"],e.rpreciou6)||"number"==typeof t["*Precio de Venta 7"]&&!Object.is(t["*Precio de Venta 7"],e.rpreciou7)||"number"==typeof t["Stock Minimo"]&&!Object.is(t["Stock Minimo"],e.rstockminimo)||"number"==typeof t["Tope de Descuento"]&&!Object.is(t["Tope de Descuento"],e.rtopedescuento)||"number"==typeof t.IVA&&!Object.is(t.IVA,e.rporciva)||"string"==typeof t.Pesable&&!Object.is("S"==t.Pesable?"T":"F",e.besfraccionado)||"string"==typeof t.Tipo&&!Object.is(t.Tipo,e.stipoproducto)||"string"==typeof t.Activo&&!Object.is("S"==t.Activo?"T":"F",e.bactivo)||"string"==typeof t["Publicar en Web"]&&!Object.is("S"==t["Publicar en Web"]?"T":"F","F"!=e.bpublicarweb?"T":"F")||"number"==typeof t["Unidades por bulto"]&&!Object.is(t["Unidades por bulto"],e.rcantunidadesporbulto?e.rcantunidadesporbulto:0)||"string"==typeof t["URL de la imagen"]&&!Object.is(t["URL de la imagen"],e.surlimage1?e.surlimage1:""))}},{key:"asignarValores",value:function(e,t){if(e.scodproducto=t["*Codigo"],e.snombre=t["*Descripcion"]?t["*Descripcion"].toString():t["*Codigo"].toString(),t["Codigo de Barras"]&&(e.sean=t["Codigo de Barras"].toString()),t["Codigo de Barras 2"]&&(e.sean2=t["Codigo de Barras 2"].toString()),t.Familia){e.sfamilia=t.Familia.toString();var r=this.familias.find(function(t){return t.sfamilia===e.sfamilia});r&&(e.idfamilia=r.id)}"number"==typeof t["*Costo"]&&(e.rcostou=t["*Costo"]),"number"==typeof t["*Precio de Venta"]&&(e.rpreciou=t["*Precio de Venta"]),"number"==typeof t["*Precio de Venta 2"]&&(e.rpreciou2=t["*Precio de Venta 2"]),"number"==typeof t["*Precio de Venta 3"]&&(e.rpreciou3=t["*Precio de Venta 3"]),"number"==typeof t["*Precio de Venta 4"]&&(e.rpreciou4=t["*Precio de Venta 4"]),"number"==typeof t["*Precio de Venta 5"]&&(e.rpreciou5=t["*Precio de Venta 5"]),"number"==typeof t["*Precio de Venta 6"]&&(e.rpreciou6=t["*Precio de Venta 6"]),"number"==typeof t["*Precio de Venta 7"]&&(e.rpreciou7=t["*Precio de Venta 7"]),e.rstockminimo="number"==typeof t["Stock Minimo"]?t["Stock Minimo"]:0,e.hasOwnProperty("bactivo")||(e.bactivo="T"),"string"==typeof t.Activo&&("S"===t.Activo?e.bactivo="T":"N"===t.Activo&&(e.bactivo="F")),e.hasOwnProperty("bfavorito")||(e.bfavorito="F"),e.hasOwnProperty("stipoproducto")||(e.stipoproducto="P"),"string"==typeof t.Tipo&&("P"!==t.Tipo&&"S"!==t.Tipo&&"I"!==t.Tipo&&"R"!==t.Tipo&&"U"!==t.Tipo||(e.stipoproducto=t.Tipo)),e.hasOwnProperty("rtopedescuento")||(e.rtopedescuento=100),"number"==typeof t["Tope de Descuento"]&&(e.rtopedescuento=t["Tope de Descuento"]),"number"==typeof t.IVA&&(e.rporciva=t.IVA),"string"==typeof t.Pesable&&(e.besfraccionado="S"==t.Pesable?"T":"F"),"number"==typeof t["Impuesto Interno"]&&(e.rvalorimpinterno=t["Impuesto Interno"]),"number"==typeof t["Unidades por bulto"]&&(e.rcantunidadesporbulto=t["Unidades por bulto"]),"string"==typeof t["URL de la imagen"]&&(e.surlimage1=t["URL de la imagen"]),"string"==typeof t["Publicar en Web"]&&(e.bpublicarweb="S"==t["Publicar en Web"]?"T":"F")}},{key:"onFileSelected",value:function(e){var t=this,r=e.target.files[0];if(r){this.fileName=r.name;var o=new FileReader;o.onload=function(e){var r=I.read(o.result,{type:"binary"}),n=I.utils.sheet_to_json(r.Sheets.Productos);t.loader.open(),t.servicioProductos.traerProductos("scodproducto ASC",function(){t.rows=[],n.forEach(function(e){if(null!=e["*Codigo"]&&null!=e["*Codigo"]&&""!=e["*Codigo"]){var r=t.servicioProductos.listaProductos.find(function(t){return t.scodproducto==e["*Codigo"]});if(r){if(!t.esElMismoProducto(r,e)){var o={};Object.assign(o,r),t.asignarValores(o,e),t.rows.push(o)}}else t.asignarValores(o={},e),t.rows.push(o)}});for(var e=[],r=0;r<n.length;r++)if(n[r]["*Codigo"]){var o=n.filter(function(e){if(e["*Codigo"])return n[r]["*Codigo"]==e["*Codigo"]});o.length>1&&e.push(n[r]["*Codigo"]+" ("+o.length+" veces)")}t.duplicados=e,t.duplicados=Array.from(new Set(e));var i=n.filter(function(e){if(e.IVA)return e.IVA>100});t.erroriva=i.map(function(e){return"cod:"+e["*Codigo"]+" iva: "+e.IVA}),t.tabla1.setData(t.rows),t.loader.close()})},o.readAsBinaryString(r)}}},{key:"uploadFile",value:function(e){return e.id?this.servicioProductos.actualizarProducto(e):(e.id=this.servicioUUID.generateUUID(),this.servicioProductos.agregarProducto(e))}},{key:"upload",value:function(){var t=this;(new Date).getTime().toString(),this.count=0,this.percent=0,this.total=this.rows.length;var r=this.rows.map(function(e){return t.uploadFile(e)}),o=(Object(T.a).apply(void 0,e(r)),Object(M.a).apply(void 0,e(r)),Object(k.a)(r).pipe(Object(R.a)(function(e){return e},6)));this.sub=o.pipe(Object(U.a)(function(e){return t.updateProgressMeter(e)}),Object(A.a)()).subscribe(function(e){},function(e){t.loader.close(),t.snack.open("ERROR","OK",{duration:4e3})})}},{key:"updateProgressMeter",value:function(e){this.count++,this.percent=this.total>0?Math.round(this.count/this.total*100):0}},{key:"ngOnDestroy",value:function(){this.sub&&this.sub.unsubscribe()}},{key:"getRowHeight",value:function(e){return 50}},{key:"onSort",value:function(e){var t=e.sorts[0];this.tabla1.secondarySort=t.prop,this.tabla1.sortDir=t.dir,this.tabla1.sortData()}}]),t}(),se.\u0275fac=function(e){return new(e||se)(F.Rb(L.a),F.Rb(x.a),F.Rb(O.a),F.Rb(S.a))},se.\u0275cmp=F.Lb({type:se,selectors:[["app-products-upload"]],decls:38,vars:54,consts:[["type","file","accept","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",1,"file-input",3,"change"],["fileUpload",""],[4,"ngIf"],[3,"hidden"],[1,"p-0"],[1,"material","expandable","bg-white",2,"height","70vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort"],["myTable",""],["prop","scodproducto",3,"name","flexGrow"],["ngx-datatable-cell-template",""],["prop","snombre",3,"name","flexGrow"],["prop","rcostou",3,"name","flexGrow"],["prop","rpreciou",3,"name","flexGrow"],["prop","rpreciou2",3,"name","flexGrow",4,"ngIf"],["prop","rpreciou3",3,"name","flexGrow",4,"ngIf"],["prop","rpreciou4",3,"name","flexGrow",4,"ngIf"],["prop","rpreciou5",3,"name","flexGrow",4,"ngIf"],["prop","rpreciou6",3,"name","flexGrow",4,"ngIf"],["prop","rpreciou7",3,"name","flexGrow",4,"ngIf"],["prop","sfamilia",3,"name","flexGrow"],["prop","rstockminimo",3,"name","flexGrow"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],[1,"m-8",3,"formControl"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[2,"text-align","center"],[2,"font-size","150%"],["prop","rpreciou2",3,"name","flexGrow"],["prop","rpreciou3",3,"name","flexGrow"],["prop","rpreciou4",3,"name","flexGrow"],["prop","rpreciou5",3,"name","flexGrow"],["prop","rpreciou6",3,"name","flexGrow"],["prop","rpreciou7",3,"name","flexGrow"]],template:function(e,t){1&e&&(F.Xb(0,"mat-card"),F.Xb(1,"mat-card-content"),F.Xb(2,"input",0,1),F.fc("change",function(e){return t.onFileSelected(e)}),F.Wb(),F.Mc(4,j,8,6,"div",2),F.Mc(5,W,7,8,"div",2),F.Mc(6,X,9,7,"div",2),F.Mc(7,G,9,8,"div",2),F.Mc(8,H,8,6,"div",2),F.Wb(),F.Wb(),F.Xb(9,"div",3),F.Xb(10,"mat-card",4),F.Xb(11,"mat-card-content",4),F.Xb(12,"ngx-datatable",5,6),F.fc("sort",function(e){return t.onSort(e)}),F.Xb(14,"ngx-datatable-column",7),F.kc(15,"translate"),F.Mc(16,Q,1,1,"ng-template",8),F.Wb(),F.Xb(17,"ngx-datatable-column",9),F.kc(18,"translate"),F.Mc(19,Y,1,1,"ng-template",8),F.Wb(),F.Xb(20,"ngx-datatable-column",10),F.kc(21,"translate"),F.Mc(22,B,2,3,"ng-template",8),F.Wb(),F.Xb(23,"ngx-datatable-column",11),F.kc(24,"translate"),F.Mc(25,_,2,3,"ng-template",8),F.Wb(),F.Mc(26,J,3,4,"ngx-datatable-column",12),F.Mc(27,K,3,4,"ngx-datatable-column",13),F.Mc(28,$,3,4,"ngx-datatable-column",14),F.Mc(29,te,3,4,"ngx-datatable-column",15),F.Mc(30,oe,3,4,"ngx-datatable-column",16),F.Mc(31,ie,3,4,"ngx-datatable-column",17),F.Xb(32,"ngx-datatable-column",18),F.kc(33,"translate"),F.Mc(34,ce,1,1,"ng-template",8),F.Wb(),F.Xb(35,"ngx-datatable-column",19),F.kc(36,"translate"),F.Mc(37,ae,2,3,"ng-template",8),F.Wb(),F.Wb(),F.Wb(),F.Wb(),F.Wb()),2&e&&(F.pc("@animate",F.vc(49,pe,F.uc(48,ue))),F.Eb(4),F.pc("ngIf",!t.fileName),F.Eb(1),F.pc("ngIf",t.fileName),F.Eb(1),F.pc("ngIf",t.duplicados.length>0),F.Eb(1),F.pc("ngIf",t.erroriva.length>0),F.Eb(1),F.pc("ngIf",t.total>0),F.Eb(1),F.pc("hidden",!t.toggleValue),F.Eb(1),F.pc("@animate",F.vc(52,pe,F.uc(51,ue))),F.Eb(2),F.pc("columnMode","flex")("headerHeight",50)("footerHeight",100)("rowHeight",t.getRowHeight)("scrollbarV",!0)("scrollbarH",!1)("rows",t.tabla1.rows)("summaryRow",!1)("externalSorting",!0)("selectionType","single"),F.Eb(2),F.qc("name",F.lc(15,36,"PRODUCTSUPLOADCOMPONENT.CODE")),F.pc("flexGrow",1),F.Eb(3),F.qc("name",F.lc(18,38,"PRODUCTSUPLOADCOMPONENT.NAME")),F.pc("flexGrow",1),F.Eb(3),F.qc("name",F.lc(21,40,"PRODUCTSUPLOADCOMPONENT.COST")),F.pc("flexGrow",1),F.Eb(3),F.qc("name",F.lc(24,42,"PRODUCTSUPLOADCOMPONENT.SALESPRICE")),F.pc("flexGrow",1),F.Eb(3),F.pc("ngIf",(null==t.empresas?null:t.empresas.icantidadlistasdeprecios)>1),F.Eb(1),F.pc("ngIf",(null==t.empresas?null:t.empresas.icantidadlistasdeprecios)>2),F.Eb(1),F.pc("ngIf",(null==t.empresas?null:t.empresas.icantidadlistasdeprecios)>3),F.Eb(1),F.pc("ngIf",(null==t.empresas?null:t.empresas.icantidadlistasdeprecios)>4),F.Eb(1),F.pc("ngIf",(null==t.empresas?null:t.empresas.icantidadlistasdeprecios)>5),F.Eb(1),F.pc("ngIf",(null==t.empresas?null:t.empresas.icantidadlistasdeprecios)>6),F.Eb(1),F.qc("name",F.lc(33,44,"PRODUCTSUPLOADCOMPONENT.FAMILY")),F.pc("flexGrow",1),F.Eb(3),F.qc("name",F.lc(36,46,"PRODUCTSUPLOADCOMPONENT.MINIMUMSTOCK")),F.pc("flexGrow",1))},directives:[f.a,f.b,c.o,u.d,u.b,u.a,d.b,w.a,h.a,s.o,s.f],pipes:[P.c,c.d,c.g],styles:[".file-input[_ngcontent-%COMP%]{display:none}.progress[_ngcontent-%COMP%]{display:block;width:16px;height:16px;border:1px solid #000;float:left;margin:0 4px 4px 0}.progress.uploading[_ngcontent-%COMP%]{background:gold}.progress.uploaded[_ngcontent-%COMP%], uploading[_ngcontent-%COMP%]{background:green}"],data:{animation:[C.a]}}),se),data:{title:"SUBIDA DE PRODUCTOS"}}],de=((le=function e(){o(this,e)}).\u0275mod=F.Pb({type:le}),le.\u0275inj=F.Ob({factory:function(e){return new(e||le)},imports:[[c.c,s.t,l.a,u.f,p.c,p.c,f.c,p.c,d.c,b.a,p.c,m.b,g.f,O.b,h.b,y.c,E.b,w.b,P.b,v.a,a.k.forChild(fe)]]}),le)},vpPe:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r("8Y7J"),c=function(){var e=function(){function e(){o(this,e)}return i(e,[{key:"generateUUID",value:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?r:3&r|8).toString(16)})}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();