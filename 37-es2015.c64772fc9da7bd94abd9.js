(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{CHRX:function(t,e,o){"use strict";o.d(e,"a",function(){return i});var a=o("wd/R");class i{constructor(){this.sum=[],this.data=[],this.rows=[],this.filter={},this.groups={},this.groupField="",this.secondarySort="",this.sortDir="asc",this.footer={},this.customFilter=function(t){return t}}setGroup(t){this.groups[t.name]=!this.groups[t.name],this.filterRows()}setData(t){this.data=t,this.sortData()}sortData(){this.data.sort((t,e)=>{if(t[this.groupField]==e[this.groupField]){if(this.secondarySort){if(t[this.secondarySort]>e[this.secondarySort])return 1*("desc"===this.sortDir?-1:1);if(t[this.secondarySort]<e[this.secondarySort])return-1*("desc"===this.sortDir?-1:1)}}else{if(t[this.groupField]>e[this.groupField])return 1;if(t[this.groupField]<e[this.groupField])return-1}return 0}),this.filterRows()}filterRows(){var t=[];t=this.data.filter(t=>{for(var e in this.filter)switch(typeof t[e]){case"number":if(this.filter[e]&&t[e].toString()!==this.filter[e].toString())return!1;break;case"string":if("f"==e.charAt(0).toLowerCase()&&a(t[e]).isValid){if(-1==a(t[e]).format("DD/MM/YYYY HH:mm:ss").indexOf(this.filter[e]))return!1;break}if(-1==t[e].toLowerCase().indexOf(this.filter[e].toLowerCase()))return!1}return!0}),t=this.customFilter(t);var e={};this.groupField?e[this.groupField]=t.length.toString():e.count=t.length.toString(),this.sum.forEach(t=>e[t]=0);for(var o=0;o<t.length;o++)this.sum.forEach(a=>e[a]+=t[o][a]);if(e.isGroup=!0,this.footer=e,this.groupField){var i=[];t.forEach(t=>{-1==i.indexOf(t[this.groupField])&&i.push(t[this.groupField])}),i=i.map(t=>({name:t,count:1}));var c=[],r=!0,n=0,s=null,l=()=>{s&&(s[this.groupField]+=" ("+i[n-1].count.toString()+")")};for(o=0;o<t.length;o++){if(r&&t[o][this.groupField]==i[n].name){l();var u="+";this.groups[i[n].name]&&(u="-"),s={[this.groupField]:u+" "+i[n].name,isGroup:!0,name:i[n].name},this.sum.forEach(t=>s[t]=0),c.push(s),r=++n<i.length}else i[n-1].count++;this.sum.forEach(e=>s[e]+=t[o][e]),c.push(t[o])}l(),t=null,c=c.filter(t=>!!t.isGroup||!!this.groups[t[this.groupField]]||void 0),this.rows=c}else this.rows=t;this.rows.push(this.footer),0==this.rows.length&&this.rows.push({})}updateFilter(t,e){t&&e&&(this.filter[e]=t.target.value,this.filterRows())}updateFilterBoolean(t,e){this.filter[e]=t,this.filterRows()}}},I2yB:function(t,e,o){"use strict";o.r(e),o.d(e,"StockOnDateModule",function(){return ct});var a=o("SVse"),i=o("s7LF"),c=o("GmJt"),r=o("3sEA"),n=o("wd/R"),s=o("bPAe"),l=o("CHRX"),u=o("rGvg"),b=o("AytR"),p=o("8Y7J"),d=o("IheW");let m=(()=>{class t{constructor(t){this.http=t}obtenerDepositos(){return this.http.get(encodeURI(b.a.apiURL+'Depositos?filter={"where":{"deletedon":{"eq":null}}}'))}obtenerStock(t){return this.http.get(encodeURI(`${b.a.apiURL}Productos/GetStockEnFecha?idDeposito=${t}`))}obtenerHistorialProducto(t,e){return this.http.get(encodeURI(`${b.a.apiURL}Productos/GetHistorialStock?idProducto=${e}&idDeposito=${t}`))}}return t.\u0275fac=function(e){return new(e||t)(p.bc(d.c))},t.\u0275prov=p.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=o("iELJ"),f=o("zHaW"),g=o("PDjf"),k=o("VDRc"),w=o("Q2Ze"),S=o("ZTz/"),y=o("Dxy4"),E=o("Tj54"),F=o("w9WL"),v=o("UhP/"),W=o("jMqV"),X=o("e6WT"),x=o("TSSN");function M(t,e){if(1&t&&(p.Xb(0,"mat-option",26),p.Oc(1),p.Wb()),2&t){const t=e.$implicit;p.pc("value",t),p.Eb(1),p.Pc(null==t?null:t.sdescripcion)}}function A(t,e){if(1&t&&(p.Xb(0,"div",1),p.Xb(1,"mat-slide-toggle",27),p.Oc(2),p.kc(3,"translate"),p.Wb(),p.Xb(4,"mat-slide-toggle",27),p.Oc(5),p.kc(6,"translate"),p.Wb(),p.Wb()),2&t){const t=p.jc();p.Eb(1),p.pc("formControl",t.toggle),p.Eb(1),p.Pc(p.lc(3,4,"Solo Activos")),p.Eb(2),p.pc("formControl",t.toggleStock),p.Eb(1),p.Pc(p.lc(6,6,"Solo Stock debajo del m\xednimo"))}}function D(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sCodProducto," ")}}function R(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sProducto," ")}}function O(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",(null==t?null:t.sEAN)||(null==t?null:t.sEAN2)," ")}}function C(t,e){if(1&t&&p.Oc(0),2&t){const t=e.row;p.Qc(" ",null==t?null:t.sFamilia," ")}}function P(t,e){if(1&t&&(p.Oc(0),p.kc(1,"number")),2&t){const t=e.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rStock)," ")}}function T(t,e){if(1&t&&(p.Oc(0),p.kc(1,"number")),2&t){const t=e.row;p.Qc(" ",p.lc(1,1,null==t?null:t.rStockMinimo)," ")}}function N(t,e){if(1&t&&(p.Oc(0),p.kc(1,"date")),2&t){const t=e.row;p.Qc(" ",p.mc(1,1,null==t?null:t.fStock,"dd/MM/yyyy")," ")}}function H(t,e){if(1&t){const t=p.Yb();p.Xb(0,"button",29),p.fc("click",function(){p.Dc(t);const e=p.jc().row;return p.jc().openPopUp(e)}),p.Xb(1,"mat-icon"),p.Oc(2,"info"),p.Wb(),p.Wb()}}function I(t,e){1&t&&p.Mc(0,H,3,0,"button",28),2&t&&p.pc("ngIf",!e.row.isGroup)}function L(t,e){if(1&t){const t=p.Yb();p.Xb(0,"button",5),p.fc("click",function(){return p.Dc(t),p.jc(3).export()}),p.Xb(1,"mat-icon"),p.Oc(2,"save_alt"),p.Wb(),p.Oc(3),p.kc(4,"translate"),p.Wb()}2&t&&(p.Eb(3),p.Pc(p.lc(4,1,"SALES.EXCEL")))}function Y(t,e){if(1&t&&(p.Xb(0,"div",31),p.Mc(1,L,5,3,"button",32),p.Wb()),2&t){const t=p.jc(2);p.Eb(1),p.pc("ngIf",t.tabla1.data.length>0)}}function j(t,e){1&t&&(p.Xb(0,"ngx-datatable-footer"),p.Mc(1,Y,2,1,"ng-template",30),p.Wb())}function V(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",33),p.Xb(1,"input",34),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sCodProducto")}),p.Wb(),p.Wb()}}function G(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",33),p.Xb(1,"input",34),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sProducto")}),p.Wb(),p.Wb()}}function q(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",33),p.Xb(1,"input",34),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sEAN")}),p.Wb(),p.Wb()}}function U(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",33),p.Xb(1,"input",34),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"sFamilia")}),p.Wb(),p.Wb()}}function Q(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",33),p.Xb(1,"input",35),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"rStock")}),p.Wb(),p.Wb()}}function $(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",33),p.Xb(1,"input",35),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"rStockMinimo")}),p.Wb(),p.Wb()}}function B(t,e){if(1&t){const t=p.Yb();p.Xb(0,"mat-form-field",33),p.Xb(1,"input",34),p.fc("keyup",function(e){return p.Dc(t),p.jc().tabla1.updateFilter(e,"fStock")}),p.Wb(),p.Wb()}}const J=function(){return{y:"50px",delay:"300ms"}},K=function(t){return{value:"*",params:t}},Z=[{path:"",component:(()=>{class t{constructor(t,e,o,a,c){this.dialog=t,this.servicioStock=e,this.servicioExportarExcel=o,this.loader=a,this.snack=c,this.toggle=new i.e(!0,[]),this.toggleValue=!0,this.toggleStock=new i.e(!1,[]),this.toggleStockValue=!1,this.toggle.valueChanges.subscribe(t=>{this.toggleValue=t,this.tabla1.updateFilterBoolean(this.toggleValue?"T":"","bActivo")}),this.toggleStock.valueChanges.subscribe(t=>{this.toggleStockValue=t,this.tabla1.filterRows()})}ngOnInit(){this.tabla1=new l.a,this.tabla1.groupField="",this.tabla1.secondarySort="sProducto",this.tabla1.sum=[],this.tabla1.updateFilterBoolean("T","bActivo"),this.tabla1.customFilter=t=>this.toggleStockValue?t.filter(t=>t.rStock<t.rStockMinimo):t,this.loader.open(),this.servicioStock.obtenerDepositos().subscribe(t=>{this.depositos=t,console.log(t),this.depositos.sort((t,e)=>t.sdescripcion>e.sdescripcion?1:t.sdescripcion<e.sdescripcion?-1:0),this.depositoActual=this.depositos[0],this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}refresh(){this.loader.open(),this.servicioStock.obtenerStock(this.depositoActual.iddeposito).subscribe(t=>{console.log(t),t.forEach(t=>{t.sEAN||(t.sEAN=""),t.sEAN2||(t.sEAN2=""),t.rStock=parseFloat(t.rStock),t.rStockMinimo=parseFloat(t.rStockMinimo)}),this.tabla1.setData(t.filter(()=>!0)),this.loader.close()},t=>{this.loader.close(),this.snack.open("ERROR","OK",{duration:4e3})})}seleccionarDeposito(t){this.depositoActual=t}getRowHeight(t){return 50}export(){var t=this.tabla1.data.map(t=>({Dep\u00f3sito:t.sDeposito,C\u00f3digo:t.sCodProducto,Nombre:t.sProducto,Familia:t.sFamilia,"Stock en Fecha":t.rStock,Fecha:n(t.fStock).format("DD/MM/YYYY")}));this.servicioExportarExcel.exportExcel(t,"stock","stock")}onSort(t){const e=t.sorts[0];this.tabla1.secondarySort=e.prop,this.tabla1.sortDir=e.dir,this.tabla1.sortData()}openPopUp(t={}){this.loader.open(),this.servicioStock.obtenerHistorialProducto(this.depositoActual.id,t.idProducto).subscribe(e=>{this.loader.close(),console.log(t),this.dialog.open(u.a,{width:"720px",disableClose:!0,data:{title:"HISTORIAL DE STOCK",payload:t,historialstock:e}}).afterClosed().subscribe(t=>{})})}}return t.\u0275fac=function(e){return new(e||t)(p.Rb(h.b),p.Rb(m),p.Rb(s.a),p.Rb(r.a),p.Rb(f.a))},t.\u0275cmp=p.Lb({type:t,selectors:[["app-stock-on-date"]],decls:57,vars:64,consts:[[1,"p-0"],["fxLayout","row wrap","fxLayoutAlign","end center",1,"p-8"],["appearance","fill","fxFlex","100","fxFlex.gt-xs","25","fxFlex.gt-sm","16",1,"m-8"],[3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["class","p-8","fxLayout","row wrap","fxLayoutAlign","end center",4,"ngIf"],[1,"material","expandable","bg-white",2,"height","50vh",3,"columnMode","headerHeight","footerHeight","rowHeight","scrollbarV","scrollbarH","rows","summaryRow","externalSorting","selectionType","sort"],["myTable",""],["prop","sCodProducto",3,"summaryTemplate","name","width"],["ngx-datatable-cell-template",""],["prop","sProducto",3,"summaryTemplate","name","width"],["prop","sEAN",3,"summaryTemplate","name","width"],["prop","sFamilia",3,"summaryTemplate","name","width"],["prop","rStock",3,"summaryTemplate","name","width"],["prop","rStockMinimo",3,"summaryTemplate","name","width"],["prop","fStock",3,"summaryTemplate","name","width"],[3,"name","flexGrow","sortable"],[4,"ngIf"],["tabla1sCodProducto",""],["tabla1sProducto",""],["tabla1sEAN",""],["tabla1sFamilia",""],["tabla1rStock",""],["tabla1rStockMinimo",""],["tabla1fStock",""],[3,"value"],[1,"m-8",3,"formControl"],["mat-icon-button","","mat-sm-button","","color","foreground","class","mr-16",3,"click",4,"ngIf"],["mat-icon-button","","mat-sm-button","","color","foreground",1,"mr-16",3,"click"],["ngx-datatable-footer-template",""],[1,"p-8",2,"margin-left","auto"],["mat-raised-button","","class","m-8","color","primary",3,"click",4,"ngIf"],[1,"margin-333",2,"width","100%"],["matInput","","placeholder","","value","",3,"keyup"],["type","number","matInput","","placeholder","","value","",3,"keyup"]],template:function(t,e){if(1&t&&(p.Xb(0,"mat-card",0),p.Xb(1,"div",1),p.Xb(2,"mat-form-field",2),p.Xb(3,"mat-label"),p.Oc(4),p.kc(5,"translate"),p.Wb(),p.Xb(6,"mat-select",3),p.fc("selectionChange",function(t){return e.seleccionarDeposito(t.value)})("valueChange",function(t){return e.depositoActual=t}),p.Mc(7,M,2,2,"mat-option",4),p.Wb(),p.Wb(),p.Xb(8,"button",5),p.fc("click",function(){return e.refresh()}),p.Xb(9,"mat-icon"),p.Oc(10,"search"),p.Wb(),p.Oc(11),p.kc(12,"translate"),p.Wb(),p.Wb(),p.Mc(13,A,7,8,"div",6),p.Wb(),p.Xb(14,"mat-card",0),p.Xb(15,"mat-card-content",0),p.Xb(16,"ngx-datatable",7,8),p.fc("sort",function(t){return e.onSort(t)}),p.Xb(18,"ngx-datatable-column",9),p.kc(19,"translate"),p.Mc(20,D,1,1,"ng-template",10),p.Wb(),p.Xb(21,"ngx-datatable-column",11),p.kc(22,"translate"),p.Mc(23,R,1,1,"ng-template",10),p.Wb(),p.Xb(24,"ngx-datatable-column",12),p.kc(25,"translate"),p.Mc(26,O,1,1,"ng-template",10),p.Wb(),p.Xb(27,"ngx-datatable-column",13),p.kc(28,"translate"),p.Mc(29,C,1,1,"ng-template",10),p.Wb(),p.Xb(30,"ngx-datatable-column",14),p.kc(31,"translate"),p.Mc(32,P,2,3,"ng-template",10),p.Wb(),p.Xb(33,"ngx-datatable-column",15),p.kc(34,"translate"),p.Mc(35,T,2,3,"ng-template",10),p.Wb(),p.Xb(36,"ngx-datatable-column",16),p.kc(37,"translate"),p.Mc(38,N,2,4,"ng-template",10),p.Wb(),p.Xb(39,"ngx-datatable-column",17),p.kc(40,"translate"),p.Mc(41,I,1,1,"ng-template",10),p.Wb(),p.Mc(42,j,2,0,"ngx-datatable-footer",18),p.Wb(),p.Wb(),p.Wb(),p.Mc(43,V,2,0,"ng-template",null,19,p.Nc),p.Mc(45,G,2,0,"ng-template",null,20,p.Nc),p.Mc(47,q,2,0,"ng-template",null,21,p.Nc),p.Mc(49,U,2,0,"ng-template",null,22,p.Nc),p.Mc(51,Q,2,0,"ng-template",null,23,p.Nc),p.Mc(53,$,2,0,"ng-template",null,24,p.Nc),p.Mc(55,B,2,0,"ng-template",null,25,p.Nc)),2&t){const t=p.Ac(44),o=p.Ac(46),a=p.Ac(48),i=p.Ac(50),c=p.Ac(52),r=p.Ac(54),n=p.Ac(56);p.Eb(4),p.Pc(p.lc(5,41,"Dep\xf3sitos")),p.Eb(2),p.pc("value",e.depositoActual),p.Eb(1),p.pc("ngForOf",e.depositos),p.Eb(4),p.Pc(p.lc(12,43,"SALES.SHOW")),p.Eb(2),p.pc("ngIf",e.tabla1.data.length>0),p.Eb(1),p.pc("@animate",p.vc(62,K,p.uc(61,J))),p.Eb(2),p.pc("columnMode","standard")("headerHeight",50)("footerHeight",100)("rowHeight",e.getRowHeight)("scrollbarV",!0)("scrollbarH",!0)("rows",e.tabla1.rows)("summaryRow",!0)("externalSorting",!0)("selectionType","single"),p.Eb(2),p.qc("name",p.lc(19,45,"C\xf3digo")),p.pc("summaryTemplate",t)("width",200),p.Eb(3),p.qc("name",p.lc(22,47,"Nombre")),p.pc("summaryTemplate",o)("width",500),p.Eb(3),p.qc("name",p.lc(25,49,"C\xf3digo de Barras")),p.pc("summaryTemplate",a)("width",150),p.Eb(3),p.qc("name",p.lc(28,51,"Familia")),p.pc("summaryTemplate",i)("width",225),p.Eb(3),p.qc("name",p.lc(31,53,"Stock en Fecha")),p.pc("summaryTemplate",c)("width",150),p.Eb(3),p.qc("name",p.lc(34,55,"Stock M\xednimo")),p.pc("summaryTemplate",r)("width",150),p.Eb(3),p.qc("name",p.lc(37,57,"Fecha")),p.pc("summaryTemplate",n)("width",150),p.Eb(3),p.qc("name",p.lc(40,59,"SALES.ACTIONS")),p.pc("flexGrow",1)("sortable",!1),p.Eb(3),p.pc("ngIf",e.tabla1.data.length>0)}},directives:[g.a,k.c,k.b,w.c,k.a,w.f,S.a,a.n,y.b,E.a,a.o,g.b,F.d,F.b,F.a,v.n,W.a,i.n,i.f,F.e,F.c,X.b],pipes:[x.c,a.g,a.f],styles:[""],data:{animation:[c.a]}}),t})(),data:{title:"STOCK EN FECHA"}}];var z=o("iInd"),_=o("u9T3"),tt=o("f44v"),et=o("TN/R"),ot=o("M9ds"),at=o("ZFy/"),it=o("PCNd");let ct=(()=>{class t{}return t.\u0275mod=p.Pb({type:t}),t.\u0275inj=p.Ob({factory:function(e){return new(e||t)},imports:[[a.c,i.s,_.a,F.f,X.c,X.c,g.c,X.c,y.c,tt.a,X.c,at.b,h.e,f.b,W.b,ot.c,S.b,E.b,x.b,it.a,et.c,z.k.forChild(Z)]]}),t})()}}]);