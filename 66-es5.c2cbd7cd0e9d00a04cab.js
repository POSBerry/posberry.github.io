!function(){function e(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function a(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{WDA5:function(t,n,i){"use strict";i.r(n),i.d(n,"TicketSettingsModule",function(){return D});var c,o,s=i("SVse"),r=i("3sEA"),l=i("O/+5"),b=i("8Y7J"),d=i("zHaW"),p=i("PDjf"),m=i("Dxy4"),u=i("Tj54"),h=i("s7LF"),g=i("Q2Ze"),f=i("e6WT"),E=i("iELJ"),T=i("TSSN"),O=[{path:"",component:(c=function(){function t(a,n,i){e(this,t),this.servicioTicket=a,this.loader=n,this.snack=i,this.encabezado1="",this.encabezado2="",this.pie="",this.pie2="",this.pie3="",this.mostrarEliminar=!1,this.fileName="",this.formCancelar=function(){this.cargarlogo("canvaslogo",this.empresas.slogo),this.empresas.sencabezado1&&(this.encabezado1=this.empresas.sencabezado1),this.empresas.sencabezado2&&(this.encabezado2=this.empresas.sencabezado2),this.empresas.spie&&(this.pie=this.empresas.spie),this.empresas.spie2&&(this.pie2=this.empresas.spie2),this.empresas.spie3&&(this.pie3=this.empresas.spie3)}}var n,i,c;return n=t,(i=[{key:"ngOnInit",value:function(){var e=this;this.loader.open(),this.servicioTicket.obtenerEmpresas().subscribe(function(a){e.empresas=a[0],e.cargarlogo("canvaslogo",e.empresas.slogo),e.empresas.sencabezado1&&(e.encabezado1=e.empresas.sencabezado1),e.empresas.sencabezado2&&(e.encabezado2=e.empresas.sencabezado2),e.empresas.spie&&(e.pie=e.empresas.spie),e.empresas.spie2&&(e.pie2=e.empresas.spie2),e.empresas.spie3&&(e.pie3=e.empresas.spie3),e.loader.close()},function(a){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}},{key:"formGuardar",value:function(){var e=this;this.loader.open(),this.servicioTicket.obtenerEmpresas().subscribe(function(a){e.empresas=a[0];var t=document.getElementById("canvaslogo"),n={};Object.assign(n,e.empresas),n.slogo=0!=t.width&&0!=t.height?t.toDataURL():null,n.sencabezado1=e.encabezado1,n.sencabezado2=e.encabezado2,n.spie=e.pie,n.spie2=e.pie2,n.spie3=e.pie3,e.servicioTicket.actualizarEmpresa(n).subscribe(function(a){e.loader.close(),e.snack.open("\xa1Configuraci\xf3n Guardada!","OK",{duration:4e3})},function(a){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})},function(a){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}},{key:"formEliminar",value:function(){var e=document.getElementById("canvaslogo");e.width=0,e.height=0,this.mostrarEliminar=!1}},{key:"cargarlogo",value:function(e,a){this.mostrarEliminar=a;var t=document.getElementById(e),n=t.getContext("2d");if(t.width=0,t.height=0,a){var i=new Image;i.onload=function(){t.width=i.width,t.height=i.height,n.drawImage(i,0,0)},i.src=a}}},{key:"fileExist",value:function(e){var a=e.target.files[0];a&&(this.fileName=a.name)}},{key:"submitLogo",value:function(e,a,t){var n=this,i=document.getElementById(e),c=i.getContext("2d"),o=document.getElementById(a).files[0];if(null!=o){this.mostrarEliminar=!0;var s=new FileReader;s.onload=function(e){var a=new Image;a.onload=function(){i.width=a.width,i.height=a.height,c.drawImage(a,0,0);for(var e=c.getImageData(0,0,i.width,i.height),t=0;t<e.data.length;t+=4){var n=Math.round(.3*e.data[t]+.59*e.data[t+1]+.11*e.data[t+2])<127?0:255;e.data[t+3]<255&&(n=e.data[t+3]<127?255:0,e.data[t+3]=255),e.data[t]=n,e.data[t+1]=n,e.data[t+2]=n}c.putImageData(e,0,0,0,0,e.width,e.height)},a.src=e.target.result,n.fileName=""},s.readAsDataURL(o)}}}])&&a(n.prototype,i),c&&a(n,c),t}(),c.\u0275fac=function(e){return new(e||c)(b.Rb(l.a),b.Rb(r.a),b.Rb(d.a))},c.\u0275cmp=b.Lb({type:c,selectors:[["app-ticket-settings"]],decls:60,vars:37,consts:[["mat-button","","color","warn","type","button",3,"click"],["id","canvaslogo",1,"m-16"],[3,"hidden"],["type","file","id","inputlogo","accept","image/x-png",3,"change"],["fileUpload",""],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["mat-raised-button","","type","submit","color","primary","value","Upload Image","name","submit",1,"mb-16",3,"click"],[1,"full-width"],["matInput","","maxlength","50","placeholder","Encabezado 1",3,"ngModel","ngModelChange"],["matInput","","maxlength","50","placeholder","Encabezado 2",3,"ngModel","ngModelChange"],["matInput","","maxlength","50","placeholder","Pie 1",3,"ngModel","ngModelChange"],["matInput","","maxlength","50","placeholder","Pie 2",3,"ngModel","ngModelChange"],["matInput","","maxlength","50","placeholder","Pie 3",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,a){if(1&e){var t=b.Yb();b.Xb(0,"mat-card"),b.Xb(1,"mat-card-content"),b.Xb(2,"p"),b.Oc(3),b.kc(4,"translate"),b.Wb(),b.Xb(5,"p"),b.Oc(6),b.kc(7,"translate"),b.Xb(8,"strong"),b.Oc(9),b.kc(10,"translate"),b.Wb(),b.Oc(11),b.kc(12,"translate"),b.Xb(13,"strong"),b.Oc(14),b.kc(15,"translate"),b.Wb(),b.Oc(16,". "),b.Wb(),b.Wb(),b.Xb(17,"mat-card-content"),b.Xb(18,"button",0),b.fc("click",function(){return a.formEliminar()}),b.Xb(19,"mat-icon"),b.Oc(20,"delete"),b.Wb(),b.Oc(21),b.kc(22,"translate"),b.Wb(),b.Sb(23,"br"),b.Sb(24,"canvas",1),b.Xb(25,"form"),b.Xb(26,"div",2),b.Xb(27,"input",3,4),b.fc("change",function(e){return a.fileExist(e)}),b.Wb(),b.Wb(),b.Xb(29,"div",2),b.Oc(30),b.Xb(31,"button",5),b.fc("click",function(){return b.Dc(t),b.Ac(28).click()}),b.Xb(32,"mat-icon"),b.Oc(33,"attach_file"),b.Wb(),b.Oc(34),b.kc(35,"translate"),b.Wb(),b.Wb(),b.Xb(36,"div",2),b.Oc(37),b.Xb(38,"button",6),b.fc("click",function(){return a.submitLogo("canvaslogo","inputlogo","logo")}),b.Xb(39,"mat-icon"),b.Oc(40,"cloud_upload"),b.Wb(),b.Oc(41),b.kc(42,"translate"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(43,"mat-card-content"),b.Xb(44,"mat-form-field",7),b.Xb(45,"input",8),b.fc("ngModelChange",function(e){return a.encabezado1=e}),b.Wb(),b.Wb(),b.Xb(46,"mat-form-field",7),b.Xb(47,"input",9),b.fc("ngModelChange",function(e){return a.encabezado2=e}),b.Wb(),b.Wb(),b.Xb(48,"mat-form-field",7),b.Xb(49,"input",10),b.fc("ngModelChange",function(e){return a.pie=e}),b.Wb(),b.Wb(),b.Xb(50,"mat-form-field",7),b.Xb(51,"input",11),b.fc("ngModelChange",function(e){return a.pie2=e}),b.Wb(),b.Wb(),b.Xb(52,"mat-form-field",7),b.Xb(53,"input",12),b.fc("ngModelChange",function(e){return a.pie3=e}),b.Wb(),b.Wb(),b.Xb(54,"mat-dialog-content"),b.Xb(55,"button",13),b.fc("click",function(){return a.formGuardar()}),b.Xb(56,"mat-icon"),b.Oc(57,"save"),b.Wb(),b.Oc(58),b.kc(59,"translate"),b.Wb(),b.Wb(),b.Wb(),b.Wb()}2&e&&(b.Eb(3),b.Pc(b.lc(4,19,"TICKETSSETTINGSCOMPONENT.PARRAF1")),b.Eb(3),b.Qc("",b.lc(7,21,"TICKETSSETTINGSCOMPONENT.PARRAF2")," "),b.Eb(3),b.Qc("",b.lc(10,23,"TICKETSSETTINGSCOMPONENT.PARRAF3")," "),b.Eb(2),b.Qc(" ",b.lc(12,25,"TICKETSSETTINGSCOMPONENT.PARRAF4")," "),b.Eb(3),b.Pc(b.lc(15,27,"TICKETSSETTINGSCOMPONENT.PARRAF5")),b.Eb(7),b.Qc("",b.lc(22,29,"TICKETSSETTINGSCOMPONENT.DELETELOGO")," "),b.Eb(5),b.pc("hidden",!0),b.Eb(3),b.pc("hidden",a.fileName),b.Eb(1),b.Qc(" ",a.fileName||"Ning\xfan archivo cargado todav\xeda."," "),b.Eb(4),b.Qc("",b.lc(35,31,"TICKETSSETTINGSCOMPONENT.UPLOADIMAGE")," "),b.Eb(2),b.pc("hidden",!a.fileName),b.Eb(1),b.Qc(" ",a.fileName||"Ning\xfan archivo cargado todav\xeda."," "),b.Eb(4),b.Qc("",b.lc(42,33,"TICKETSSETTINGSCOMPONENT.UPLOAD")," "),b.Eb(4),b.pc("ngModel",a.encabezado1),b.Eb(2),b.pc("ngModel",a.encabezado2),b.Eb(2),b.pc("ngModel",a.pie),b.Eb(2),b.pc("ngModel",a.pie2),b.Eb(2),b.pc("ngModel",a.pie3),b.Eb(5),b.Qc("",b.lc(59,35,"TICKETSSETTINGSCOMPONENT.SAVE")," "))},directives:[p.a,p.b,m.b,u.a,h.w,h.p,h.q,g.c,f.b,h.c,h.k,h.o,h.r,E.e],pipes:[T.c],styles:[""]}),c),data:{title:"TICKETS CONFIGURACION"}}],v=i("iInd"),I=i("u9T3"),N=i("pMoy"),k=i("f44v"),C=i("TN/R"),S=i("40+f"),W=i("SqCe"),M=i("rJgo"),X=i("BTe0"),y=i("zQhy"),w=i("ZTz/"),z=i("jMqV"),R=i("M9ds"),P=i("ZFy/"),A=i("w9WL"),G=i("aYsj"),K=i("PCNd"),L=i("hrfs"),x=i("pYyI"),D=((o=function a(){e(this,a)}).\u0275mod=b.Pb({type:o}),o.\u0275inj=b.Ob({factory:function(e){return new(e||o)},imports:[[s.c,h.t,I.a,A.f,f.c,f.c,p.c,f.c,m.c,k.a,f.c,P.b,E.f,d.b,z.b,R.c,w.b,u.b,T.b,K.a,C.g,h.j,W.b,M.c,S.b,N.b,y.c,X.b,L.a,x.a,G.a,v.k.forChild(O)]]}),o)}}])}();