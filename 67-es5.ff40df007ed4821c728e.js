!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"3loT":function(n,a,o){"use strict";o.r(a),o.d(a,"WipeDataSettingsModule",function(){return j});var c,i,r,s,b=o("SVse"),l=o("3kSh"),u=o("3sEA"),p=o("vpPe"),f=o("iELJ"),d=o("8Y7J"),m=o("s7LF"),E=o("VDRc"),h=o("Q2Ze"),T=o("e6WT"),O=o("Dxy4"),A=o("Tj54"),W=o("TSSN"),v=((c=function(){function n(e,a,o){t(this,n),this.data=e,this.dialogRef=a,this.fb=o}return e(n,[{key:"ngOnInit",value:function(){this.buildItemForm(this.data.payload)}},{key:"buildItemForm",value:function(t){this.itemForm=this.fb.group({sconfirmar:[t.sconfirmar||""]})}},{key:"submit",value:function(){this.dialogRef.close(this.itemForm.value)}}]),n}()).\u0275fac=function(t){return new(t||c)(d.Rb(f.a),d.Rb(f.g),d.Rb(m.d))},c.\u0275cmp=d.Lb({type:c,selectors:[["app-wipe-data-settings-popup"]],decls:24,vars:16,consts:[["matDialogTitle",""],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayout.lt-sm","column"],["fxFlex","50",1,"pr-16"],[1,"full-width"],["matInput","","name","sconfirmar",3,"formControl","placeholder"],["fxFlex","100",1,"mt-16"],["mat-raised-button","","color","primary",3,"disabled"],["fxFlex",""],["mat-button","","color","warn","type","button",3,"click"]],template:function(t,n){1&t&&(d.Xb(0,"h1",0),d.Oc(1),d.Wb(),d.Xb(2,"p"),d.Oc(3),d.kc(4,"translate"),d.Wb(),d.Xb(5,"form",1),d.fc("ngSubmit",function(){return n.submit()}),d.Xb(6,"mat-dialog-content",2),d.Xb(7,"div",3),d.Xb(8,"mat-form-field",4),d.Sb(9,"input",5),d.kc(10,"translate"),d.Wb(),d.Wb(),d.Wb(),d.Xb(11,"mat-dialog-content",2),d.Xb(12,"div",6),d.Xb(13,"button",7),d.Xb(14,"mat-icon"),d.Oc(15,"done"),d.Wb(),d.Oc(16),d.kc(17,"translate"),d.Wb(),d.Sb(18,"span",8),d.Xb(19,"button",9),d.fc("click",function(){return n.dialogRef.close(!1)}),d.Xb(20,"mat-icon"),d.Oc(21,"cancel"),d.Wb(),d.Oc(22),d.kc(23,"translate"),d.Wb(),d.Wb(),d.Wb(),d.Wb()),2&t&&(d.Eb(1),d.Pc(n.data.title),d.Eb(2),d.Pc(d.lc(4,8,"WIPEDATASETTINGS.PARRAF1")),d.Eb(2),d.pc("formGroup",n.itemForm),d.Eb(4),d.qc("placeholder",d.lc(10,10,"WIPEDATASETTINGS.CONFIRM")),d.pc("formControl",n.itemForm.controls.sconfirmar),d.Eb(4),d.pc("disabled",n.itemForm.invalid),d.Eb(3),d.Pc(d.lc(17,12,"WIPEDATASETTINGS.ACCEPT")),d.Eb(6),d.Pc(d.lc(23,14,"WIPEDATASETTINGS.CANCEL")))},directives:[f.h,m.w,m.p,m.i,f.e,E.c,E.a,h.c,T.b,m.c,m.o,m.f,O.b,A.a],pipes:[W.c],styles:[""]}),c),P=o("AytR"),k=o("IheW"),R=((i=function(){function n(e){t(this,n),this.http=e}return e(n,[{key:"limpiarDatos",value:function(){return this.http.get(encodeURI(P.a.apiURL+"Empresas/limpiarDatosEmpresa"))}}]),n}()).\u0275fac=function(t){return new(t||i)(d.bc(k.c))},i.\u0275prov=d.Nb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),y=o("zHaW"),I=o("PDjf"),N=[{path:"",component:(r=function(){function n(e,a,o,c,i,r){t(this,n),this.servicioWipedata=e,this.dialog=a,this.snack=o,this.confirmService=c,this.loader=i,this.servicioUUID=r}return e(n,[{key:"ngOnInit",value:function(){}},{key:"openPopUp",value:function(t){var n=this;this.dialog.open(v,{width:"720px",disableClose:!0,data:{title:"CONFIRMA",payload:t}}).afterClosed().subscribe(function(t){if(t){n.loader.open();var e={};Object.assign(e,t),e.bactivo=t.bactivo?"T":"F",e.bfavorito=t.bfavorito?"T":"F","CONFIRMO"==e.sconfirmar?n.servicioWipedata.limpiarDatos().subscribe(function(t){n.loader.close(),n.snack.open("\xa1Datos Eliminados!","OK",{duration:4e3})},function(t){n.loader.close(),n.snack.open("ERROR","OK",{duration:4e3})}):(n.loader.close(),n.snack.open("\xa1Datos NO Eliminados!","OK",{duration:4e3}))}})}}]),n}(),r.\u0275fac=function(t){return new(t||r)(d.Rb(R),d.Rb(f.b),d.Rb(y.a),d.Rb(l.a),d.Rb(u.a),d.Rb(p.a))},r.\u0275cmp=d.Lb({type:r,selectors:[["app-wipe-data-settings"]],decls:16,vars:15,consts:[["mat-button","","color","warn","type","button",3,"click"]],template:function(t,n){1&t&&(d.Xb(0,"mat-card"),d.Xb(1,"h3"),d.Oc(2),d.kc(3,"translate"),d.Wb(),d.Xb(4,"p"),d.Xb(5,"b"),d.Oc(6),d.kc(7,"translate"),d.Wb(),d.Oc(8),d.kc(9,"translate"),d.Wb(),d.Xb(10,"p"),d.Oc(11),d.kc(12,"translate"),d.Wb(),d.Xb(13,"button",0),d.fc("click",function(t){return n.openPopUp(t)}),d.Oc(14),d.kc(15,"translate"),d.Wb(),d.Wb()),2&t&&(d.Eb(2),d.Pc(d.lc(3,5,"WIPEDATACOMPONENT.CLEANDATA")),d.Eb(4),d.Qc("",d.lc(7,7,"WIPEDATACOMPONENT.ATTENTION"),":"),d.Eb(2),d.Qc(" ",d.lc(9,9,"WIPEDATACOMPONENT.PARRAF1"),""),d.Eb(3),d.Pc(d.lc(12,11,"WIPEDATACOMPONENT.PARRAF2")),d.Eb(3),d.Pc(d.lc(15,13,"WIPEDATACOMPONENT.DELETEDATA")))},directives:[I.a,O.b],pipes:[W.c],styles:[""]}),r),data:{title:"Wipe Data"}}],D=o("iInd"),w=o("u9T3"),g=o("f44v"),C=o("ZTz/"),F=o("jMqV"),S=o("M9ds"),X=o("ZFy/"),x=o("w9WL"),L=o("PCNd"),M=o("BxcV"),j=((s=function n(){t(this,n)}).\u0275mod=d.Pb({type:s}),s.\u0275inj=d.Ob({factory:function(t){return new(t||s)},imports:[[b.c,m.t,w.a,x.f,T.c,T.c,I.c,T.c,O.c,g.a,T.c,X.b,f.f,y.b,F.b,S.c,C.b,A.b,W.b,L.a,M.a,D.k.forChild(N)]]}),s)}}])}();