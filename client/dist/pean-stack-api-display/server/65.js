"use strict";
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 34921:
/*!********************************************************************************!*\
  !*** ./src/app/modules/application/books/book-services/book-search.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleBookService": () => (/* binding */ GoogleBookService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 55010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8746);



const apiUrl = "https://www.googleapis.com/books/v1/volumes";
class GoogleBookService {
  constructor(http) {
    this.http = http;
  }
  findBook(title) {
    return this.http.get(`${apiUrl}?q=${title}&maxResults=40`).pipe(
    // tap((data: GoogleBooksApiInterface) =>
    //   console.log("data: ", data.items)
    // ),
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(data => data.items?.filter(item => item.saleInfo.saleability !== "NOT_FOR_SALE") || []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(err => {
      throw "error in getting API data. Details: " + err;
    }));
  }
  static #_ = this.ɵfac = function GoogleBookService_Factory(t) {
    return new (t || GoogleBookService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: GoogleBookService,
    factory: GoogleBookService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 87348:
/*!*******************************************************************!*\
  !*** ./src/app/modules/application/books/books-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksRoutingModule": () => (/* binding */ BooksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books.component */ 1709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);




const routes = [{
  path: "",
  component: _books_component__WEBPACK_IMPORTED_MODULE_0__.BooksComponent
}];
class BooksRoutingModule {
  static #_ = this.ɵfac = function BooksRoutingModule_Factory(t) {
    return new (t || BooksRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BooksRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BooksRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1709:
/*!**************************************************************!*\
  !*** ./src/app/modules/application/books/books.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksComponent": () => (/* binding */ BooksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _book_services_book_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-services/book-search.service */ 34921);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/localstorage.service */ 3370);








function BooksComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BooksComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.clearStore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BooksComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BooksComponent_div_13_div_1_Template_img_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const book_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onGoToBookDetail(book_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const book_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", book_r7.volumeInfo.imageLinks != undefined ? book_r7.volumeInfo.imageLinks.smallThumbnail : "assets/params/images/not-found.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function BooksComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BooksComponent_div_13_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.booksArray)("ngForTrackBy", ctx_r3.bookTrackbyFn);
  }
}
class BooksComponent {
  constructor(googleBookService, router, fb, storageService, platformId) {
    this.googleBookService = googleBookService;
    this.router = router;
    this.fb = fb;
    this.storageService = storageService;
    this.platformId = platformId;
    this.storedItems = false;
  }
  ngOnInit() {
    // check if platform browser then show stored book array if it exists
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
      if (this.booksArray !== null) {
        this.storedItems = true;
        this.booksArray = this.storageService.get("this.searchedBooks");
      } else {
        this.storedItems = false;
        console.log("There is no book search in storage");
      }
    }
    this.searchForm = this.fb.group({
      searchQuery: [""]
    });
  }
  // ngOnDestroy(): void {
  //   this.clearStore();
  // }
  clearStore() {
    this.storageService.clear();
    this.searchForm.reset();
    this.booksArray = [];
    this.storedItems = false;
  }
  // search for books and store search query.
  bookQuery(userQuery) {
    if (userQuery && userQuery.length) {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        this.storageService.set("this.searchedItem", userQuery);
        this.searchString = this.storageService.get("this.searchedItem");
        this.storedItems = true;
        this.googleBookService.findBook(this.searchString).subscribe(data => {
          this.books = data;
          this.storageService.set("this.searchedBooks", this.books);
          this.booksArray = this.storageService.get("this.searchedBooks");
        });
      } else {
        this.googleBookService.findBook(this.searchString).subscribe(data => {
          this.booksArray = data;
        });
      }
    }
  }
  onGoToBookDetail(book) {
    const navigationExtras = {
      state: {
        book
      }
    };
    this.router.navigate(["/book-detail"], navigationExtras);
  }
  bookTrackbyFn(index, item) {
    return item.bookId;
  }
  static #_ = this.ɵfac = function BooksComponent_Factory(t) {
    return new (t || BooksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_book_services_book_search_service__WEBPACK_IMPORTED_MODULE_0__.GoogleBookService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.PersistanceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BooksComponent,
    selectors: [["app-books"]],
    decls: 14,
    vars: 3,
    consts: [["name", "description", "content", "Shows data from the Google Books api"], [1, "main-div"], [1, "rounded", "card"], [1, "card-body", "bg-light"], [3, "ngSubmit"], ["searchForm", "ngForm"], ["type", "text", "ngModel", "", "name", "searchQuery", "id", "searchQuery", "placeholder", "Enter book title..", "aria-label", "Enter book title", "name", "search", "required", ""], ["searchWord", "ngModel"], ["type", "submit", 1, "btn", "btn-dark", 3, "disabled"], ["class", "btn btn-warning", "type", "button", 3, "click", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], [1, "row"], ["class", "p-2 text-center book-card col-lg-2 col-md-3 col-sm-3 col-xs-6", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-2", "text-center", "book-card", "col-lg-2", "col-md-3", "col-sm-3", "col-xs-6"], ["alt", "Book image", 2, "width", "140px", "height", "224px", 3, "src", "click"]],
    template: function BooksComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "body")(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BooksComponent_Template_form_ngSubmit_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
          ctx.bookQuery(_r1.value);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.reset());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, BooksComponent_button_12_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BooksComponent_div_13_Template, 2, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.storedItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.booksArray);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
    styles: [".main-div[_ngcontent-%COMP%] {\n  \n  justify-content: center;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: auto auto;\n}\n\n.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n  width: 100%;\n  \n}\n\n.book-card[_ngcontent-%COMP%] {\n  padding: 12px auto;\n}\n/*# sourceURL=webpack://./src/app/modules/application/books/books.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAgLyogZGlzcGxheTogZmxleDsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG59XG5cbi5jYXJkIGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkIGZvcm0gaW5wdXR7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBwYWRkaW5nOiAxcmVtOyAqL1xufVxuXG4uYm9vay1jYXJkIHtcbiAgcGFkZGluZzogMTJweCBhdXRvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74065:
/*!***********************************************************!*\
  !*** ./src/app/modules/application/books/books.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksModule": () => (/* binding */ BooksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _books_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books.component */ 1709);
/* harmony import */ var _books_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books-routing.module */ 87348);
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/localstorage.service */ 3370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);






class BooksModule {
  static #_ = this.ɵfac = function BooksModule_Factory(t) {
    return new (t || BooksModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: BooksModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    providers: [_services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.PersistanceService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _books_routing_module__WEBPACK_IMPORTED_MODULE_1__.BooksRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BooksModule, {
    declarations: [_books_component__WEBPACK_IMPORTED_MODULE_0__.BooksComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _books_routing_module__WEBPACK_IMPORTED_MODULE_1__.BooksRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
    exports: [_books_component__WEBPACK_IMPORTED_MODULE_0__.BooksComponent]
  });
})();

/***/ }),

/***/ 3370:
/*!**************************************************!*\
  !*** ./src/app/services/localstorage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersistanceService": () => (/* binding */ PersistanceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class PersistanceService {
  constructor() {}
  set(key, data) {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error("Error saving to localStorage", err);
    }
  }
  get(key) {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (err) {
      console.error("Error getting data from localStorage", err);
      return null;
    }
  }
  clear() {
    sessionStorage.clear();
  }
  static #_ = this.ɵfac = function PersistanceService_Factory(t) {
    return new (t || PersistanceService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PersistanceService,
    factory: PersistanceService.ɵfac
  });
}

/***/ })

};
;
//# sourceMappingURL=65.js.map