(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"1A9S":function(e,t,i){"use strict";i.r(t),i.d(t,"AppInboxModule",function(){return B});var s=i("SVse"),o=i("iInd"),n=i("s7LF"),r=i("Dxy4"),l=i("pMoy"),a=i("iELJ"),c=i("o4Yh"),h=i("Tj54"),d=i("e6WT"),u=i("SqCe"),m=i("rJgo"),b=i("q7Ft"),g=i("l0rg"),f=i("ZFy/"),p=i("u9T3"),v=i("8Y7J"),E=i("mrSG"),C=i("cUpR");const q=[[["","quill-editor-toolbar",""]]],y=["[quill-editor-toolbar]"],O={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},x=(e,t)=>e||t||"html",S=new v.t("config");let w=(()=>{class e{constructor(e){this.config=e,this.count=0,this.config||(this.config={modules:O})}getQuill(){return this.count++,this.Quill||1!==this.count||(this.$importPromise=new Promise(e=>Object(E.a)(this,void 0,void 0,function*(){var t,s;const o=yield i.e(51).then(i.t.bind(null,"kzlf",7));this.Quill=o.default?o.default:o,null===(t=this.config.customOptions)||void 0===t||t.forEach(e=>{const t=this.Quill.import(e.import);t.whitelist=e.whitelist,this.Quill.register(t,!0,this.config.suppressGlobalRegisterWarning)}),null===(s=this.config.customModules)||void 0===s||s.forEach(({implementation:e,path:t})=>{this.Quill.register(t,e,this.config.suppressGlobalRegisterWarning)}),e(this.Quill)}))),this.$importPromise}}return e.\u0275fac=function(t){return new(t||e)(v.bc(S))},e.\u0275prov=Object(v.Nb)({factory:function(){return new e(Object(v.bc)(S))},token:e,providedIn:"root"}),e})(),F=(()=>{class e{constructor(e,t,i,s,o,n,r){this.elementRef=e,this.domSanitizer=t,this.doc=i,this.platformId=s,this.renderer=o,this.zone=n,this.service=r,this.required=!1,this.customToolbarPosition="top",this.sanitize=!1,this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.onEditorCreated=new v.o,this.onEditorChanged=new v.o,this.onContentChanged=new v.o,this.onSelectionChanged=new v.o,this.onFocus=new v.o,this.onBlur=new v.o,this.disabled=!1,this.valueGetter=(e,t)=>{let i=t.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==i&&"<div><br></div>"!==i||(i=null);let s=i;const o=x(this.format,this.service.config.format);if("text"===o)s=e.getText();else if("object"===o)s=e.getContents();else if("json"===o)try{s=JSON.stringify(e.getContents())}catch(n){s=e.getText()}return s},this.valueSetter=(e,t)=>{const i=x(this.format,this.service.config.format);if("html"===i)return this.sanitize&&(t=this.domSanitizer.sanitize(v.M.HTML,t)),e.clipboard.convert(t);if("json"===i)try{return JSON.parse(t)}catch(s){return[{insert:t}]}return t},this.selectionChangeHandler=(e,t,i)=>{const s=!e&&!!this.onModelTouched;(this.onBlur.observers.length||this.onFocus.observers.length||this.onSelectionChanged.observers.length||s)&&this.zone.run(()=>{null===e?this.onBlur.emit({editor:this.quillEditor,source:i}):null===t&&this.onFocus.emit({editor:this.quillEditor,source:i}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:t,range:e,source:i}),s&&this.onModelTouched()})},this.textChangeHandler=(e,t,i)=>{const s=this.quillEditor.getText(),o=this.quillEditor.getContents();let n=this.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==n&&"<div><br></div>"!==n||(n=null);const r=this.trackChanges||this.service.config.trackChanges,l=("user"===i||r&&"all"===r)&&!!this.onModelChange;(this.onContentChanged.observers.length||l)&&this.zone.run(()=>{l&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:o,delta:e,editor:this.quillEditor,html:n,oldDelta:t,source:i,text:s})})},this.editorChangeHandler=(e,t,i,s)=>{if(this.onEditorChanged.observers.length)if("text-change"===e){const o=this.quillEditor.getText(),n=this.quillEditor.getContents();let r=this.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==r&&"<div><br></div>"!==r||(r=null),this.zone.run(()=>{this.onEditorChanged.emit({content:n,delta:t,editor:this.quillEditor,event:e,html:r,oldDelta:i,source:s,text:o})})}else this.onEditorChanged.emit({editor:this.quillEditor,event:e,oldRange:i,range:t,source:s})}}static normalizeClassNames(e){return e.trim().split(" ").reduce((e,t)=>{const i=t.trim();return i&&e.push(i),e},[])}ngAfterViewInit(){return Object(E.a)(this,void 0,void 0,function*(){if(Object(s.y)(this.platformId))return;const e=yield this.service.getQuill();this.elementRef.nativeElement.insertAdjacentHTML("top"===this.customToolbarPosition?"beforeend":"afterbegin",this.preserveWhitespace?"<pre quill-editor-element></pre>":"<div quill-editor-element></div>"),this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const t=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),i=Object.assign({},this.modules||this.service.config.modules);t?i.toolbar=t:void 0===i.toolbar&&(i.toolbar=O.toolbar);let o=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===o&&(o="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(e=>{this.renderer.setStyle(this.editorElem,e,this.styles[e])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(t=>{const i=e.import(t.import);i.whitelist=t.whitelist,e.register(i,!0)}),this.customModules.forEach(({implementation:t,path:i})=>{e.register(i,t)});let n=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;n||(n=this.service.config.bounds?this.service.config.bounds:this.doc.body);let r=this.debug;!r&&!1!==r&&this.service.config.debug&&(r=this.service.config.debug);let l=this.readOnly;l||!1===this.readOnly||(l=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let a=this.scrollingContainer;a||null===this.scrollingContainer||(a=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let c=this.formats;if(c||void 0!==c||(c=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{this.quillEditor=new e(this.editorElem,{bounds:n,debug:r,formats:c,modules:i,placeholder:o,readOnly:l,scrollingContainer:a,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")})}),this.content){const e=x(this.format,this.service.config.format);if("object"===e)this.quillEditor.setContents(this.content,"silent");else if("text"===e)this.quillEditor.setText(this.content,"silent");else if("json"===e)try{this.quillEditor.setContents(JSON.parse(this.content),"silent")}catch(h){this.quillEditor.setText(this.content,"silent")}else{this.sanitize&&(this.content=this.domSanitizer.sanitize(v.M.HTML,this.content));const e=this.quillEditor.clipboard.convert(this.content);this.quillEditor.setContents(e,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.quillEditor.on("editor-change",this.editorChangeHandler),this.quillEditor.on("selection-change",this.selectionChangeHandler),this.quillEditor.on("text-change",this.textChangeHandler),setTimeout(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})})}ngOnDestroy(){this.quillEditor&&(this.quillEditor.off("selection-change",this.selectionChangeHandler),this.quillEditor.off("text-change",this.textChangeHandler),this.quillEditor.off("editor-change",this.editorChangeHandler))}ngOnChanges(e){if(this.quillEditor){if(e.readOnly&&this.quillEditor.enable(!e.readOnly.currentValue),e.placeholder&&(this.quillEditor.root.dataset.placeholder=e.placeholder.currentValue),e.styles){const t=e.styles.currentValue,i=e.styles.previousValue;i&&Object.keys(i).forEach(e=>{this.renderer.removeStyle(this.editorElem,e)}),t&&Object.keys(t).forEach(e=>{this.renderer.setStyle(this.editorElem,e,this.styles[e])})}if(e.classes){const t=e.classes.currentValue,i=e.classes.previousValue;i&&this.removeClasses(i),t&&this.addClasses(t)}}}addClasses(t){e.normalizeClassNames(t).forEach(e=>{this.renderer.addClass(this.editorElem,e)})}removeClasses(t){e.normalizeClassNames(t).forEach(e=>{this.renderer.removeClass(this.editorElem,e)})}writeValue(e){this.content=e;const t=x(this.format,this.service.config.format);if(this.quillEditor){if(e)return void("text"===t?this.quillEditor.setText(e):this.quillEditor.setContents(this.valueSetter(this.quillEditor,this.content)));this.quillEditor.setText("")}}setDisabledState(e=this.disabled){this.disabled=e,this.quillEditor&&(e?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}registerOnValidatorChange(e){this.onValidatorChanged=e}validate(){if(!this.quillEditor)return null;const e={};let t=!0;const i=this.quillEditor.getText(),s=this.trimOnValidation?i.trim().length:1===i.length&&0===i.trim().length?0:i.length-1;return this.minLength&&s&&s<this.minLength&&(e.minLengthError={given:s,minLength:this.minLength},t=!1),this.maxLength&&s>this.maxLength&&(e.maxLengthError={given:s,maxLength:this.maxLength},t=!1),this.required&&!s&&(e.requiredError={empty:!0},t=!1),t?null:e}}return e.\u0275fac=function(t){return new(t||e)(v.Rb(v.l),v.Rb(C.b),v.Rb(s.e),v.Rb(v.F),v.Rb(v.I),v.Rb(v.D),v.Rb(w))},e.\u0275dir=v.Mb({type:e,inputs:{required:"required",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",styles:"styles",strict:"strict",customOptions:"customOptions",customModules:"customModules",preserveWhitespace:"preserveWhitespace",trimOnValidation:"trimOnValidation",valueGetter:"valueGetter",valueSetter:"valueSetter",format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",formats:"formats",scrollingContainer:"scrollingContainer",bounds:"bounds",trackChanges:"trackChanges",classes:"classes"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[v.Cb]}),e})(),W=(()=>{class e extends F{constructor(e,t,i,s,o,n,r){super(e,t,i,s,o,n,r)}}return e.\u0275fac=function(t){return new(t||e)(v.Rb(v.l),v.Rb(C.b),v.Rb(s.e),v.Rb(v.F),v.Rb(v.I),v.Rb(v.D),v.Rb(w))},e.\u0275cmp=v.Lb({type:e,selectors:[["quill-editor"]],features:[v.Db([{multi:!0,provide:n.l,useExisting:Object(v.X)(()=>e)},{multi:!0,provide:n.k,useExisting:Object(v.X)(()=>e)}]),v.Bb],ngContentSelectors:y,decls:1,vars:0,template:function(e,t){1&e&&(v.oc(q),v.nc(0))},encapsulation:2}),e})(),T=(()=>{class e{static forRoot(t){return{ngModule:e,providers:[{provide:S,useValue:t}]}}}return e.\u0275mod=v.Pb({type:e}),e.\u0275inj=v.Ob({factory:function(t){return new(t||e)},providers:[w],imports:[[s.c]]}),e})();var M=i("2p9g"),j=i("Q2Ze"),R=i("VDRc");function X(e,t){1&e&&(v.Xb(0,"small",12),v.Oc(1," Email is required "),v.Wb())}function L(e,t){1&e&&(v.Xb(0,"small",12),v.Oc(1," Invaild email address "),v.Wb())}function z(e,t){1&e&&(v.Xb(0,"small",12),v.Oc(1," Subject is required "),v.Wb())}function I(e,t){1&e&&(v.Xb(0,"small",12),v.Oc(1," Message is required "),v.Wb())}let D=(()=>{class e{constructor(e){this.composeDialog=e,this.newMailData={}}ngOnInit(){this.mailForm=new n.h({to:new n.e("",[n.u.required,n.u.email]),subject:new n.e("",[n.u.required]),message:new n.e("",[n.u.required])})}sendEmail(){}closeDialog(){}}return e.\u0275fac=function(t){return new(t||e)(v.Rb(a.b))},e.\u0275cmp=v.Lb({type:e,selectors:[["mail-compose"]],decls:23,vars:5,consts:[["novalidate","",3,"formGroup","submit"],[1,"pb-16"],[1,"full-width"],["matInput","","formControlName","to","placeholder","To"],["class","form-error-msg",4,"ngIf"],["matInput","","name","subject","formControlName","subject","placeholder","Subject","value",""],["theme","snow","formControlName","message"],[1,""],["type","button","mat-button","","matDialogClose",""],["fxFlex",""],["mat-icon-button",""],["mat-mini-fab","","type","submit",1,"mat-primary"],[1,"form-error-msg"]],template:function(e,t){1&e&&(v.Xb(0,"form",0),v.fc("submit",function(){return t.sendEmail()}),v.Xb(1,"div",1),v.Xb(2,"mat-form-field",2),v.Sb(3,"input",3),v.Wb(),v.Mc(4,X,2,0,"small",4),v.Mc(5,L,2,0,"small",4),v.Wb(),v.Xb(6,"div",1),v.Xb(7,"mat-form-field",2),v.Sb(8,"input",5),v.Wb(),v.Mc(9,z,2,0,"small",4),v.Wb(),v.Xb(10,"div",1),v.Sb(11,"quill-editor",6),v.Mc(12,I,2,0,"small",4),v.Wb(),v.Xb(13,"div",7),v.Xb(14,"button",8),v.Oc(15,"Cancel"),v.Wb(),v.Sb(16,"span",9),v.Xb(17,"button",10),v.Xb(18,"mat-icon"),v.Oc(19,"attachment"),v.Wb(),v.Wb(),v.Xb(20,"button",11),v.Xb(21,"mat-icon"),v.Oc(22,"send"),v.Wb(),v.Wb(),v.Wb(),v.Wb()),2&e&&(v.pc("formGroup",t.mailForm),v.Eb(4),v.pc("ngIf",t.mailForm.controls.to.errors&&(t.mailForm.controls.to.dirty||t.mailForm.controls.to.touched)&&t.mailForm.controls.to.errors.required),v.Eb(1),v.pc("ngIf",t.mailForm.controls.to.errors&&(t.mailForm.controls.to.dirty||t.mailForm.controls.to.touched)&&t.mailForm.controls.to.errors.email),v.Eb(4),v.pc("ngIf",t.mailForm.controls.subject.errors&&(t.mailForm.controls.subject.dirty||t.mailForm.controls.subject.touched)&&t.mailForm.controls.subject.errors.required),v.Eb(3),v.pc("ngIf",t.mailForm.controls.message.errors&&(t.mailForm.controls.message.dirty||t.mailForm.controls.message.touched)&&t.mailForm.controls.message.errors.required))},directives:[n.v,n.o,n.i,j.c,d.b,n.c,n.n,n.g,s.o,W,r.b,a.d,R.a,h.a],encapsulation:2}),e})();var k=i("wd/R"),V=i("/q54"),P=i("ura0"),A=i("2Odn");function H(e,t){if(1&e&&(v.Xb(0,"mat-expansion-panel",2),v.Xb(1,"mat-expansion-panel-header"),v.Xb(2,"mat-panel-title"),v.Xb(3,"span",3),v.Oc(4),v.Wb(),v.Xb(5,"div",4),v.Xb(6,"div",5),v.Xb(7,"span",6),v.Oc(8),v.Wb(),v.Xb(9,"small",7),v.Oc(10),v.kc(11,"date"),v.Wb(),v.Wb(),v.Wb(),v.Wb(),v.Xb(12,"mat-panel-description"),v.Sb(13,"span",8),v.Sb(14,"span",9),v.Xb(15,"span",10),v.Oc(16),v.kc(17,"timeago"),v.Wb(),v.Wb(),v.Wb(),v.Sb(18,"div",11),v.Wb()),2&e){const e=t.$implicit;v.Eb(4),v.Pc(e.stitulo),v.Eb(4),v.Pc(e.stitulo),v.Eb(2),v.Pc(v.lc(11,5,e.ffecha)),v.Eb(6),v.Pc(v.lc(17,7,e.ffecha)),v.Eb(2),v.pc("innerHTML",e.scuerpo,v.Ec)}}const N=[{path:"",component:(()=>{class e{constructor(e,t,i,s){this.router=e,this.mediaObserver=t,this.composeDialog=i,this.inboxService=s,this.isSidenavOpen=!0,this.selectToggleFlag=!1}ngOnInit(){this.inboxSideNavInit(),this.messages=[],this.inboxService.obtenerDatos().subscribe(e=>{this.messages=e,this.messages.unshift({stitulo:"Notificaci\xf3n de Abonos 2021",scuerpo:"\n        <p>Estimados usuarios,</p>\n        <p>Debido a que nuestros costos han sufrido variaciones durante los \xfaltimos meses, y con el fin de poder seguir mejorando el servicio, nos vemos obligados a actualizar el valor de nuestros abonos.\n        Por esta raz\xf3n, a partir del 1ro de enero de 2021, los planes por el uso de POSBerry tendr\xe1n los siguientes precios:</p>\n        <ul>\n          <li><b>Base:</b> $2400</li>\n          <li><b>Full:</b> $2800</li>\n          <li><b>MultiSucursal:</b> $5600</li>\n          <li><b>Adicional PV:</b> $1400</li>\n          <li><b>Adicional Sucursal:</b> $2800</li>\n        </ul>\n        <p>Ante cualquier consulta, no duden en escribirnos a info@posberry.com.</p>\n        <p>Agradecemos su comprensi\xf3n.</p>\n        <p>Saludos,</p>\n        <p><b>Equipo POSBerry</b></p>",ffecha:k("2021-01-01").toISOString()})})}ngOnDestroy(){this.screenSizeWatcher&&this.screenSizeWatcher.unsubscribe()}openComposeDialog(){this.composeDialog.open(D).afterClosed().subscribe(e=>{})}selectToggleAll(){this.selectToggleFlag=!this.selectToggleFlag,this.messages.forEach(e=>{e.selected=this.selectToggleFlag})}stopProp(e){e.stopPropagation()}updateSidenav(){let e=this;setTimeout(()=>{e.isSidenavOpen=!e.isMobile})}inboxSideNavInit(){this.isMobile=this.mediaObserver.isActive("xs")||this.mediaObserver.isActive("sm"),this.updateSidenav(),this.screenSizeWatcher=this.mediaObserver.media$.subscribe(e=>{this.isMobile="xs"==e.mqAlias||"sm"==e.mqAlias,this.updateSidenav()})}}return e.\u0275fac=function(t){return new(t||e)(v.Rb(o.g),v.Rb(V.g),v.Rb(a.b),v.Rb(M.a))},e.\u0275cmp=v.Lb({type:e,selectors:[["app-inbox"]],viewQuery:function(e,t){if(1&e&&v.Xc(b.a,!0),2&e){let e;v.zc(e=v.gc())&&(t.sideNav=e.first)}},features:[v.Db([M.a])],decls:4,vars:1,consts:[[1,"messages-wrap"],["hideToggle","true",4,"ngFor","ngForOf"],["hideToggle","true"],[1,"hide-on-open"],["fxFlex","1 1 auto","fxLayout","row","fxLayoutAlign","start center",1,"show-on-open"],["fxLayout","column"],[1,"m-0"],[1,"text-muted","m-0"],[1,"mail-subject","text-sm","mat-color-default"],["fxFlex",""],["fxHide.lt-sm","true",1,"text-sm"],[1,"message-text",3,"innerHTML"]],template:function(e,t){1&e&&(v.Xb(0,"mat-sidenav-container"),v.Xb(1,"div",0),v.Xb(2,"mat-accordion"),v.Mc(3,H,19,9,"mat-expansion-panel",1),v.Wb(),v.Wb(),v.Wb()),2&e&&(v.Eb(3),v.pc("ngForOf",t.messages))},directives:[b.b,c.a,s.n,c.c,c.e,c.f,R.a,R.c,R.b,c.d,P.b],pipes:[s.f,A.e],styles:[""]}),e})(),data:{title:"Inbox"}}];var Q=i("aYsj");let B=(()=>{class e{}return e.\u0275mod=v.Pb({type:e}),e.\u0275inj=v.Ob({factory:function(t){return new(t||e)},imports:[[s.c,n.j,n.s,h.b,r.c,g.b,b.d,m.c,d.c,a.f,u.b,l.b,f.b,c.b,p.a,T,Q.a,A.d,o.k.forChild(N)]]}),e})()}}]);