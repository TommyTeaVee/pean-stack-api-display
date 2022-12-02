"use strict";(self.webpackChunkpean_stack_api_display=self.webpackChunkpean_stack_api_display||[]).push([[157],{4157:(F,m,c)=>{c.r(m),c.d(m,{BooksModule:()=>C});var a=c(6895),i=c(433),g=c(7905),o=c(1571),u=c(4004),p=c(262),k=c(529);let b=(()=>{class t{constructor(e){this.http=e}findBook(e){return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${e}&maxResults=40`).pipe((0,u.U)(s=>s.items?.filter(n=>"NOT_FOR_SALE"!==n.saleInfo.saleability)||[]),(0,p.K)(s=>{throw"error in getting API data. Details: "+s}))}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(k.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),h=(()=>{class t{constructor(){}set(e,s){try{sessionStorage.setItem(e,JSON.stringify(s))}catch(n){console.error("Error saving to localStorage",n)}}get(e){try{return JSON.parse(sessionStorage.getItem(e))}catch(s){return console.error("Error getting data from localStorage",s),null}}clear(){sessionStorage.clear()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),t})();function v(t,r){if(1&t){const e=o.EpF();o.TgZ(0,"button",11),o.NdJ("click",function(){o.CHM(e);const n=o.oxw();return o.KtG(n.clearStore())}),o._uU(1," Clear "),o.qZA()}}function y(t,r){if(1&t){const e=o.EpF();o.TgZ(0,"div",14)(1,"img",15),o.NdJ("click",function(){const d=o.CHM(e).$implicit,l=o.oxw(2);return o.KtG(l.onGoToBookDetail(d))}),o.qZA()()}if(2&t){const e=r.$implicit;o.xp6(1),o.s9C("src",null!=e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.smallThumbnail:"assets/params/images/not-found.png",o.LSH)}}function B(t,r){if(1&t&&(o.TgZ(0,"div",12),o.YNc(1,y,2,1,"div",13),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.booksArray)("ngForTrackBy",e.bookTrackbyFn)}}const S=[{path:"",component:(()=>{class t{constructor(e,s,n,d,l){this.googleBookService=e,this.router=s,this.fb=n,this.storageService=d,this.platformId=l,this.storedItems=!1}ngOnInit(){(0,a.NF)(this.platformId)&&(null!==this.booksArray?(this.storedItems=!0,this.booksArray=this.storageService.get("this.searchedBooks")):(this.storedItems=!1,console.log("There is no book search in storage"))),this.searchForm=this.fb.group({searchQuery:[""]})}clearStore(){this.storageService.clear(),this.searchForm.reset(),this.booksArray=[],this.storedItems=!1}bookQuery(e){e&&e.length&&((0,a.NF)(this.platformId)?(this.storageService.set("this.searchedItem",e),this.searchString=this.storageService.get("this.searchedItem"),this.storedItems=!0,this.googleBookService.findBook(this.searchString).subscribe(s=>{this.books=s,this.storageService.set("this.searchedBooks",this.books),this.booksArray=this.storageService.get("this.searchedBooks")})):this.googleBookService.findBook(this.searchString).subscribe(s=>{this.booksArray=s}))}onGoToBookDetail(e){this.router.navigate(["/book-detail"],{state:{book:e}})}bookTrackbyFn(e,s){return s.bookId}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(b),o.Y36(g.F0),o.Y36(i.QS),o.Y36(h),o.Y36(o.Lbi))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-books"]],decls:14,vars:3,consts:[["name","description","content","Shows data from the Google Books api"],[1,"main-div"],[1,"rounded","card"],[1,"card-body","bg-light"],[3,"ngSubmit"],["searchForm","ngForm"],["type","text","ngModel","","name","searchQuery","id","searchQuery","placeholder","Enter book title..","aria-label","Enter book title","name","search","required",""],["searchWord","ngModel"],["type","submit",1,"btn","btn-dark",3,"disabled"],["class","btn btn-warning","type","button",3,"click",4,"ngIf"],["class","row",4,"ngIf"],["type","button",1,"btn","btn-warning",3,"click"],[1,"row"],["class","p-2 text-center book-card col-lg-2 col-md-3 col-sm-3 col-xs-6",4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-2","text-center","book-card","col-lg-2","col-md-3","col-sm-3","col-xs-6"],["alt","Book image",2,"width","140px","height","224px",3,"src","click"]],template:function(e,s){if(1&e){const n=o.EpF();o.TgZ(0,"head"),o._UZ(1,"meta",0),o.qZA(),o.TgZ(2,"body")(3,"div",1)(4,"div",2)(5,"div",3)(6,"form",4,5),o.NdJ("ngSubmit",function(){o.CHM(n);const l=o.MAs(9),x=o.MAs(7);return s.bookQuery(l.value),o.KtG(x.reset())}),o._UZ(8,"input",6,7),o.TgZ(10,"button",8),o._uU(11," Search "),o.qZA(),o.YNc(12,v,2,0,"button",9),o.qZA()()(),o.YNc(13,B,2,2,"div",10),o.qZA()()}if(2&e){const n=o.MAs(7);o.xp6(10),o.Q6J("disabled",n.invalid),o.xp6(2),o.Q6J("ngIf",s.storedItems),o.xp6(1),o.Q6J("ngIf",s.booksArray)}},dependencies:[a.sg,a.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.On,i.F],styles:[".main-div[_ngcontent-%COMP%]{justify-content:center;align-items:center}.card[_ngcontent-%COMP%]{max-width:800px;margin:auto}.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.book-card[_ngcontent-%COMP%]{padding:12px auto}"]}),t})()}];let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[g.Bz.forChild(S),g.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[h],imports:[a.ez,_,i.u5,i.UX]}),t})()}}]);