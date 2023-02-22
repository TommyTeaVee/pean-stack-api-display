"use strict";
exports.id = 600;
exports.ids = [600];
exports.modules = {

/***/ 70709:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/application/nyt-bestsellers/bestseller-item/bestseller-item.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BestsellerItemComponent": () => (/* binding */ BestsellerItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 97191);


function BestsellerItemComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.bestseller.books[0].book_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class BestsellerItemComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function BestsellerItemComponent_Factory(t) {
    return new (t || BestsellerItemComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BestsellerItemComponent,
    selectors: [["app-bestseller-item"]],
    inputs: {
      bestseller: "bestseller"
    },
    decls: 7,
    vars: 2,
    consts: [[1, "card", "rounded"], [1, "card-header"], [1, "category-text"], [1, "fas", "fa-clipboard-list", "text-info"], [1, "card-body", "p-0", "text-center"], ["class", "text-center", "style", "width: 100%; height: 242px", "alt", "bestseller logo", 3, "src", 4, "ngIf"], ["alt", "bestseller logo", 1, "text-center", 2, "width", "100%", "height", "242px", 3, "src"]],
    template: function BestsellerItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BestsellerItemComponent_img_6_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bestseller.list_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bestseller.books[0].book_image);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".card[_ngcontent-%COMP%] {\n  \n  align-items: center;\n  min-width: 160px;\n  max-width: 160px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 8px;\n  height: 58.33px;\n  min-width: 160px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  align-items: center;\n  height: auto;\n  min-width: 160px;\n  max-width: 160px;\n  align-items: center;\n  padding: auto auto;\n  margin: auto auto;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, 0.5);\n}\n\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n\n.category-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 0;\n  color: #0d47a1;\n}\n/*# sourceURL=webpack://./src/app/modules/application/nyt-bestsellers/bestseller-item/bestseller-item.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9ueXQtYmVzdHNlbGxlcnMvYmVzdHNlbGxlci1pdGVtL2Jlc3RzZWxsZXItaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxjQUFjO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIG1heC13aWR0aDogMTYwcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDhweDtcbiAgaGVpZ2h0OiA1OC4zM3B4O1xuICBtaW4td2lkdGg6IDE2MHB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiBhdXRvIGF1dG87XG4gIG1hcmdpbjogYXV0byBhdXRvO1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jYXRlZ29yeS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMGQ0N2ExO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 82447:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/application/nyt-bestsellers/nyt-bestsellers-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NytBestsellersRoutingModule": () => (/* binding */ NytBestsellersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _nyt_bestsellers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nyt-bestsellers.component */ 56073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);




const routes = [{
  path: "",
  component: _nyt_bestsellers_component__WEBPACK_IMPORTED_MODULE_0__.NytBestsellersComponent
}];
class NytBestsellersRoutingModule {
  static #_ = this.ɵfac = function NytBestsellersRoutingModule_Factory(t) {
    return new (t || NytBestsellersRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NytBestsellersRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NytBestsellersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 56073:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/application/nyt-bestsellers/nyt-bestsellers.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NytBestsellersComponent": () => (/* binding */ NytBestsellersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _nyt_services_nyt_bestsellers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nyt-services/nyt-bestsellers.service */ 87463);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _bestseller_item_bestseller_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bestseller-item/bestseller-item.component */ 70709);





function NytBestsellersComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "app-bestseller-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NytBestsellersComponent_div_5_Template_app_bestseller_item_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const bestseller_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onGoToBestsellerDetail(bestseller_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bestseller_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("bestseller", bestseller_r1);
  }
}
class NytBestsellersComponent {
  constructor(nytBestsellersService, router) {
    this.nytBestsellersService = nytBestsellersService;
    this.router = router;
  }
  ngOnInit() {
    this.getBestsellers();
  }
  getBestsellers() {
    this.bestsellerLists$ = this.nytBestsellersService.getBooks();
  }
  onGoToBestsellerDetail(bestseller) {
    const navigationExtras = {
      state: {
        bestseller
      }
    };
    this.router.navigate(["/bestseller-detail"], navigationExtras);
  }
  static #_ = this.ɵfac = function NytBestsellersComponent_Factory(t) {
    return new (t || NytBestsellersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nyt_services_nyt_bestsellers_service__WEBPACK_IMPORTED_MODULE_0__.NytBestsellersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NytBestsellersComponent,
    selectors: [["app-nyt-bestsellers"]],
    decls: 7,
    vars: 3,
    consts: [["name", "description", "content", "Shows data from the New York Times Bestsellers API"], [1, "main"], [1, "row"], ["class", "bestseller-card align-center col-lg-2 col-md-4 col-sm-4 col-xs-6 pb-3", 4, "ngFor", "ngForOf"], [1, "bestseller-card", "align-center", "col-lg-2", "col-md-4", "col-sm-4", "col-xs-6", "pb-3"], [3, "bestseller", "click"]],
    template: function NytBestsellersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "body")(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NytBestsellersComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 1, ctx.bestsellerLists$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _bestseller_item_bestseller_item_component__WEBPACK_IMPORTED_MODULE_1__.BestsellerItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: [".main[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.bestseller-card[_ngcontent-%COMP%] {\n  padding: 12px auto;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n/*# sourceURL=webpack://./src/app/modules/application/nyt-bestsellers/nyt-bestsellers.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9ueXQtYmVzdHNlbGxlcnMvbnl0LWJlc3RzZWxsZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iZXN0c2VsbGVyLWNhcmQge1xuICBwYWRkaW5nOiAxMnB4IGF1dG87XG59XG5cbi5jYXJkLXRleHQge1xuICBtYXJnaW46IDE2cHggMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 34600:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/application/nyt-bestsellers/nyt-bestsellers.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NytBestsellersModule": () => (/* binding */ NytBestsellersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _nyt_bestsellers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nyt-bestsellers.component */ 56073);
/* harmony import */ var _nyt_bestsellers_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nyt-bestsellers-routing.module */ 82447);
/* harmony import */ var _bestseller_item_bestseller_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bestseller-item/bestseller-item.component */ 70709);
/* harmony import */ var _components_svg_list_svg_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/svg-list/svg-list.module */ 7346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4009);






class NytBestsellersModule {
  static #_ = this.ɵfac = function NytBestsellersModule_Factory(t) {
    return new (t || NytBestsellersModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: NytBestsellersModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _nyt_bestsellers_routing_module__WEBPACK_IMPORTED_MODULE_1__.NytBestsellersRoutingModule, _components_svg_list_svg_list_module__WEBPACK_IMPORTED_MODULE_3__.SvgListModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NytBestsellersModule, {
    declarations: [_nyt_bestsellers_component__WEBPACK_IMPORTED_MODULE_0__.NytBestsellersComponent, _bestseller_item_bestseller_item_component__WEBPACK_IMPORTED_MODULE_2__.BestsellerItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _nyt_bestsellers_routing_module__WEBPACK_IMPORTED_MODULE_1__.NytBestsellersRoutingModule, _components_svg_list_svg_list_module__WEBPACK_IMPORTED_MODULE_3__.SvgListModule],
    exports: [_nyt_bestsellers_component__WEBPACK_IMPORTED_MODULE_0__.NytBestsellersComponent, _bestseller_item_bestseller_item_component__WEBPACK_IMPORTED_MODULE_2__.BestsellerItemComponent]
  });
})();

/***/ }),

/***/ 87463:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/application/nyt-bestsellers/nyt-services/nyt-bestsellers.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NytBestsellersService": () => (/* binding */ NytBestsellersService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 55010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8746);



const apiUrl = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?";
const apiKey = process.env.NYT_BEST_KEY;
// const apiKey = "YOUR DEV KEY HERE"
class NytBestsellersService {
  constructor(http) {
    this.http = http;
  }
  getBooks() {
    const booksUrl = `${apiUrl}api-key=${apiKey}`;
    return this.http.get(booksUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(items => items.results.lists), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(err => {
      throw 'error in getting API data. Details: ' + err;
    }));
  }
  static #_ = this.ɵfac = function NytBestsellersService_Factory(t) {
    return new (t || NytBestsellersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NytBestsellersService,
    factory: NytBestsellersService.ɵfac,
    providedIn: "root"
  });
}

/***/ })

};
;
//# sourceMappingURL=600.js.map