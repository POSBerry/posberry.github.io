!function(){function t(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function o(t,o){for(var a=0;a<o.length;a++){var e=o[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function a(t,a,e){return a&&o(t.prototype,a),e&&o(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"3loT":function(o,e,i){"use strict";i.r(e),i.d(e,"WipeDataSettingsModule",function(){return A});var n,c,r,s,b=i("SVse"),l=i("3kSh"),u=i("3sEA"),p=i("vpPe"),d=i("iELJ"),f=i("8Y7J"),m=i("s7LF"),h=i("VDRc"),v=i("Q2Ze"),y=i("e6WT"),O=i("Dxy4"),W=i("Tj54"),k=i("TSSN"),g=((n=function(){function o(a,e,i){t(this,o),this.data=a,this.dialogRef=e,this.fb=i}return a(o,[{key:"ngOnInit",value:function(){this.buildItemForm(this.data.payload)}},{key:"buildItemForm",value:function(t){this.itemForm=this.fb.group({sconfirmar:[t.sconfirmar||""]})}},{key:"submit",value:function(){this.dialogRef.close(this.itemForm.value)}}]),o}()).\u0275fac=function(t){return new(t||n)(f.Rb(d.a),f.Rb(d.g),f.Rb(m.d))},n.\u0275cmp=f.Lb({type:n,selectors:[["app-wipe-data-settings-popup"]],decls:23,vars:13,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","sconfirmar",3,"formControl","placeholder"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"]],template:function(t,o){1&t&&(f.Xb(0,"h1",0),f.Oc(1),f.Wb(),f.Xb(2,"p"),f.Oc(3,"Escriba la palabra CONFIRMO en may\xfasculas para eliminar todos los datos."),f.Wb(),f.Xb(4,"form",1),f.fc("ngSubmit",function(){return o.submit()}),f.Xb(5,"mat-dialog-content",2),f.Xb(6,"div",3),f.Xb(7,"mat-form-field",4),f.Sb(8,"input",5),f.kc(9,"translate"),f.Wb(),f.Wb(),f.Wb(),f.Xb(10,"mat-dialog-content",2),f.Xb(11,"div",6),f.Xb(12,"button",7),f.Xb(13,"mat-icon"),f.Oc(14,"done"),f.Wb(),f.Oc(15),f.kc(16,"translate"),f.Wb(),f.Sb(17,"span",8),f.Xb(18,"button",9),f.fc("click",function(){return o.dialogRef.close(!1)}),f.Xb(19,"mat-icon"),f.Oc(20,"cancel"),f.Wb(),f.Oc(21),f.kc(22,"translate"),f.Wb(),f.Wb(),f.Wb(),f.Wb()),2&t&&(f.Eb(1),f.Pc(o.data.title),f.Eb(3),f.pc("formGroup",o.itemForm),f.Eb(4),f.qc("placeholder",f.lc(9,7,"Confirmar")),f.pc("formControl",o.itemForm.controls.sconfirmar),f.Eb(4),f.pc("disabled",o.itemForm.invalid),f.Eb(3),f.Pc(f.lc(16,9,"Aceptar")),f.Eb(6),f.Pc(f.lc(22,11,"FAMILIESPOPUPCOMPONENT.CANCEL")))},directives:[d.h,m.w,m.p,m.i,d.e,h.c,h.a,v.c,y.b,m.c,m.o,m.f,O.b,W.a],pipes:[k.c],styles:[""]}),n),w=i("AytR"),R=i("IheW"),E=((c=function(){function o(a){t(this,o),this.http=a}return a(o,[{key:"limpiarDatos",value:function(){return this.http.get(encodeURI(w.a.apiURL+"Empresas/limpiarDatosEmpresa"))}}]),o}()).\u0275fac=function(t){return new(t||c)(f.bc(R.c))},c.\u0275prov=f.Nb({token:c,factory:c.\u0275fac,providedIn:"root"}),c),F=i("zHaW"),X=i("PDjf"),I=[{path:"",component:(r=function(){function o(a,e,i,n,c,r){t(this,o),this.servicioWipedata=a,this.dialog=e,this.snack=i,this.confirmService=n,this.loader=c,this.servicioUUID=r}return a(o,[{key:"ngOnInit",value:function(){}},{key:"openPopUp",value:function(t){var o=this;this.dialog.open(g,{width:"720px",disableClose:!0,data:{title:"CONFIRMA",payload:t}}).afterClosed().subscribe(function(t){if(t){o.loader.open();var a={};Object.assign(a,t),a.bactivo=t.bactivo?"T":"F",a.bfavorito=t.bfavorito?"T":"F","CONFIRMO"==a.sconfirmar?o.servicioWipedata.limpiarDatos().subscribe(function(t){o.loader.close(),o.snack.open("\xa1Datos Eliminados!","OK",{duration:4e3})},function(t){o.loader.close(),o.snack.open("ERROR","OK",{duration:4e3})}):(o.loader.close(),o.snack.open("\xa1Datos NO Eliminados!","OK",{duration:4e3}))}})}}]),o}(),r.\u0275fac=function(t){return new(t||r)(f.Rb(E),f.Rb(d.b),f.Rb(F.a),f.Rb(l.a),f.Rb(u.a),f.Rb(p.a))},r.\u0275cmp=f.Lb({type:r,selectors:[["app-wipe-data-settings"]],decls:11,vars:0,consts:[["mat-button","","color","warn","type","button",3,"click"]],template:function(t,o){1&t&&(f.Xb(0,"mat-card"),f.Xb(1,"h3"),f.Oc(2,"Limpiar Datos"),f.Wb(),f.Xb(3,"p"),f.Xb(4,"b"),f.Oc(5,"ATENCI\xd3N:"),f.Wb(),f.Oc(6," se borran stock, productos, ventas, movimientos de stock, compras, promociones, movimientos de caja y familias. Los datos de la empresa, configuraci\xf3n, sucursales y puntos de venta NO se borran. Haga copia de seguridad de los datos primero."),f.Wb(),f.Xb(7,"p"),f.Oc(8,"Solo la cuenta de administrador puede eliminar los datos."),f.Wb(),f.Xb(9,"button",0),f.fc("click",function(t){return o.openPopUp(t)}),f.Oc(10,"Eliminar Datos"),f.Wb(),f.Wb())},directives:[X.a,O.b],styles:[""]}),r),data:{title:"Wipe Data"}}],C=i("iInd"),D=i("u9T3"),P=i("f44v"),N=i("ZTz/"),L=i("jMqV"),S=i("M9ds"),T=i("ZFy/"),x=i("w9WL"),M=i("PCNd"),j=i("BxcV"),A=((s=function o(){t(this,o)}).\u0275mod=f.Pb({type:s}),s.\u0275inj=f.Ob({factory:function(t){return new(t||s)},imports:[[b.c,m.t,D.a,x.f,y.c,y.c,X.c,y.c,O.c,P.a,y.c,T.b,d.f,F.b,L.b,S.c,N.b,W.b,k.b,M.a,j.a,C.k.forChild(I)]]}),s)}}])}();