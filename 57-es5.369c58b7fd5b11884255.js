!function(){function e(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function a(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{WDA5:function(t,n,i){"use strict";i.r(n),i.d(n,"TicketSettingsModule",function(){return B});var o,c,s=i("SVse"),r=i("3sEA"),l=i("O/+5"),d=i("8Y7J"),b=i("zHaW"),p=i("PDjf"),m=i("Dxy4"),u=i("Tj54"),g=i("s7LF"),h=i("Q2Ze"),f=i("e6WT"),v=i("iELJ"),E=i("TSSN"),W=[{path:"",component:(o=function(){function t(a,n,i){e(this,t),this.servicioTicket=a,this.loader=n,this.snack=i,this.encabezado1="",this.encabezado2="",this.pie="",this.pie2="",this.pie3="",this.mostrarEliminar=!1,this.fileName="",this.formCancelar=function(){this.cargarlogo("canvaslogo",this.empresas.slogo),this.empresas.sencabezado1&&(this.encabezado1=this.empresas.sencabezado1),this.empresas.sencabezado2&&(this.encabezado2=this.empresas.sencabezado2),this.empresas.spie&&(this.pie=this.empresas.spie),this.empresas.spie2&&(this.pie2=this.empresas.spie2),this.empresas.spie3&&(this.pie3=this.empresas.spie3)}}var n,i,o;return n=t,(i=[{key:"ngOnInit",value:function(){var e=this;this.loader.open(),this.servicioTicket.obtenerEmpresas().subscribe(function(a){e.empresas=a[0],e.cargarlogo("canvaslogo",e.empresas.slogo),e.empresas.sencabezado1&&(e.encabezado1=e.empresas.sencabezado1),e.empresas.sencabezado2&&(e.encabezado2=e.empresas.sencabezado2),e.empresas.spie&&(e.pie=e.empresas.spie),e.empresas.spie2&&(e.pie2=e.empresas.spie2),e.empresas.spie3&&(e.pie3=e.empresas.spie3),e.loader.close()},function(a){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}},{key:"formGuardar",value:function(){var e=this;this.loader.open(),this.servicioTicket.obtenerEmpresas().subscribe(function(a){e.empresas=a[0];var t=document.getElementById("canvaslogo"),n={};Object.assign(n,e.empresas),n.slogo=0!=t.width&&0!=t.height?t.toDataURL():null,n.sencabezado1=e.encabezado1,n.sencabezado2=e.encabezado2,n.spie=e.pie,n.spie2=e.pie2,n.spie3=e.pie3,e.servicioTicket.actualizarEmpresa(n).subscribe(function(a){e.loader.close(),e.snack.open("\xa1Configuraci\xf3n Guardada!","OK",{duration:4e3})},function(a){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})},function(a){e.loader.close(),e.snack.open("ERROR","OK",{duration:4e3})})}},{key:"formEliminar",value:function(){var e=document.getElementById("canvaslogo");e.width=0,e.height=0,this.mostrarEliminar=!1}},{key:"cargarlogo",value:function(e,a){this.mostrarEliminar=a;var t=document.getElementById(e),n=t.getContext("2d");if(t.width=0,t.height=0,a){var i=new Image;i.onload=function(){t.width=i.width,t.height=i.height,n.drawImage(i,0,0)},i.src=a}}},{key:"fileExist",value:function(e){var a=e.target.files[0];a&&(this.fileName=a.name)}},{key:"submitLogo",value:function(e,a,t){var n=this,i=document.getElementById(e),o=i.getContext("2d"),c=document.getElementById(a).files[0];if(null!=c){this.mostrarEliminar=!0;var s=new FileReader;s.onload=function(e){var a=new Image;a.onload=function(){i.width=a.width,i.height=a.height,o.drawImage(a,0,0);for(var e=o.getImageData(0,0,i.width,i.height),t=0;t<e.data.length;t+=4){var n=Math.round(.3*e.data[t]+.59*e.data[t+1]+.11*e.data[t+2])<127?0:255;e.data[t+3]<255&&(n=e.data[t+3]<127?255:0,e.data[t+3]=255),e.data[t]=n,e.data[t+1]=n,e.data[t+2]=n}o.putImageData(e,0,0,0,0,e.width,e.height)},a.src=e.target.result,n.fileName=""},s.readAsDataURL(c)}}}])&&a(n.prototype,i),o&&a(n,o),t}(),o.\u0275fac=function(e){return new(e||o)(d.Rb(l.a),d.Rb(r.a),d.Rb(b.a))},o.\u0275cmp=d.Lb({type:o,selectors:[["app-ticket-settings"]],decls:53,vars:16,consts:[["mat-button","","color","warn","type","button",3,"click"],["id","canvaslogo",1,"m-16"],[3,"hidden"],["type","file","id","inputlogo","accept","image/x-png",3,"change"],["fileUpload",""],["mat-raised-button","","color","primary",1,"m-8",3,"click"],["mat-raised-button","","type","submit","color","primary","value","Upload Image","name","submit",1,"mb-16",3,"click"],[1,"full-width"],["matInput","","maxlength","50","placeholder","Encabezado 1",3,"ngModel","ngModelChange"],["matInput","","maxlength","50","placeholder","Encabezado 2",3,"ngModel","ngModelChange"],["matInput","","maxlength","50","placeholder","Pie 1",3,"ngModel","ngModelChange"],["matInput","","maxlength","50","placeholder","Pie 2",3,"ngModel","ngModelChange"],["matInput","","maxlength","50","placeholder","Pie 3",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,a){if(1&e){var t=d.Yb();d.Xb(0,"mat-card"),d.Xb(1,"mat-card-content"),d.Xb(2,"p"),d.Oc(3,"Puede cambiar el logo, el encabezado y el pie de p\xe1gina de los tickets impresos."),d.Wb(),d.Xb(4,"p"),d.Oc(5,"Las im\xe1gen debe estar en "),d.Xb(6,"strong"),d.Oc(7,"formato PNG sin transparencia con fondo blanco, texto y/o logo negro"),d.Wb(),d.Oc(8," (Resoluci\xf3n recomendada 500 pixeles de ancho por 130 pixeles de alto). Si tiene transparencia o si tiene color / escala de grises "),d.Xb(9,"strong"),d.Oc(10,"se convertir\xe1 a blanco y negro autom\xe1ticamente"),d.Wb(),d.Oc(11,". "),d.Wb(),d.Wb(),d.Xb(12,"mat-card-content"),d.Xb(13,"button",0),d.fc("click",function(){return a.formEliminar()}),d.Xb(14,"mat-icon"),d.Oc(15,"delete"),d.Wb(),d.Oc(16),d.kc(17,"translate"),d.Wb(),d.Sb(18,"br"),d.Sb(19,"canvas",1),d.Xb(20,"form"),d.Xb(21,"div",2),d.Xb(22,"input",3,4),d.fc("change",function(e){return a.fileExist(e)}),d.Wb(),d.Wb(),d.Xb(24,"div",2),d.Oc(25),d.Xb(26,"button",5),d.fc("click",function(){return d.Dc(t),d.Ac(23).click()}),d.Xb(27,"mat-icon"),d.Oc(28,"attach_file"),d.Wb(),d.Oc(29,"Cargar im\xe1gen "),d.Wb(),d.Wb(),d.Xb(30,"div",2),d.Oc(31),d.Xb(32,"button",6),d.fc("click",function(){return a.submitLogo("canvaslogo","inputlogo","logo")}),d.Xb(33,"mat-icon"),d.Oc(34,"cloud_upload"),d.Wb(),d.Oc(35,"Subir "),d.Wb(),d.Wb(),d.Wb(),d.Wb(),d.Xb(36,"mat-card-content"),d.Xb(37,"mat-form-field",7),d.Xb(38,"input",8),d.fc("ngModelChange",function(e){return a.encabezado1=e}),d.Wb(),d.Wb(),d.Xb(39,"mat-form-field",7),d.Xb(40,"input",9),d.fc("ngModelChange",function(e){return a.encabezado2=e}),d.Wb(),d.Wb(),d.Xb(41,"mat-form-field",7),d.Xb(42,"input",10),d.fc("ngModelChange",function(e){return a.pie=e}),d.Wb(),d.Wb(),d.Xb(43,"mat-form-field",7),d.Xb(44,"input",11),d.fc("ngModelChange",function(e){return a.pie2=e}),d.Wb(),d.Wb(),d.Xb(45,"mat-form-field",7),d.Xb(46,"input",12),d.fc("ngModelChange",function(e){return a.pie3=e}),d.Wb(),d.Wb(),d.Xb(47,"mat-dialog-content"),d.Xb(48,"button",13),d.fc("click",function(){return a.formGuardar()}),d.Xb(49,"mat-icon"),d.Oc(50,"save"),d.Wb(),d.Oc(51),d.kc(52,"translate"),d.Wb(),d.Wb(),d.Wb(),d.Wb()}2&e&&(d.Eb(16),d.Qc("",d.lc(17,12,"Eliminar Logo")," "),d.Eb(5),d.pc("hidden",!0),d.Eb(3),d.pc("hidden",a.fileName),d.Eb(1),d.Qc(" ",a.fileName||"Ning\xfan archivo cargado todav\xeda."," "),d.Eb(5),d.pc("hidden",!a.fileName),d.Eb(1),d.Qc(" ",a.fileName||"Ning\xfan archivo cargado todav\xeda."," "),d.Eb(7),d.pc("ngModel",a.encabezado1),d.Eb(2),d.pc("ngModel",a.encabezado2),d.Eb(2),d.pc("ngModel",a.pie),d.Eb(2),d.pc("ngModel",a.pie2),d.Eb(2),d.pc("ngModel",a.pie3),d.Eb(5),d.Qc("",d.lc(52,14,"FAMILIESPOPUPCOMPONENT.SAVE")," "))},directives:[p.a,p.b,m.b,u.a,g.x,g.q,g.r,h.c,f.b,g.d,g.l,g.p,g.s,v.e],pipes:[E.c],styles:[""]}),o),data:{title:"TICKETS CONFIGURACION"}}],k=i("iInd"),y=i("u9T3"),O=i("pMoy"),X=i("f44v"),z=i("TN/R"),w=i("40+f"),M=i("SqCe"),I=i("rJgo"),C=i("BTe0"),R=i("zQhy"),N=i("ZTz/"),T=i("jMqV"),x=i("M9ds"),P=i("ZFy/"),S=i("w9WL"),L=i("aYsj"),D=i("PCNd"),j=i("hrfs"),A=i("pYyI"),B=((c=function a(){e(this,a)}).\u0275mod=d.Pb({type:c}),c.\u0275inj=d.Ob({factory:function(e){return new(e||c)},imports:[[s.c,g.u,y.a,S.f,f.c,f.c,p.c,f.c,m.c,X.a,f.c,P.b,v.f,b.b,T.b,x.c,N.b,u.b,E.b,D.a,z.g,g.k,M.b,I.c,w.b,O.b,R.c,C.b,j.a,A.a,L.a,k.k.forChild(W)]]}),c)}}])}();