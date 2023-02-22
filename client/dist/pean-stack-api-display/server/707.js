"use strict";
exports.id = 707;
exports.ids = [707];
exports.modules = {

/***/ 12924:
/*!*********************************************************************!*\
  !*** ./src/app/modules/application/crypto/crypto-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptoRoutingModule": () => (/* binding */ CryptoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _crypto_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto.component */ 34645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);




const routes = [{
  path: "",
  component: _crypto_component__WEBPACK_IMPORTED_MODULE_0__.CryptoComponent
}];
class CryptoRoutingModule {
  static #_ = this.ɵfac = function CryptoRoutingModule_Factory(t) {
    return new (t || CryptoRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: CryptoRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CryptoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 32520:
/*!******************************************************************************!*\
  !*** ./src/app/modules/application/crypto/crypto-services/crypto.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptoService": () => (/* binding */ CryptoService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 55010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8746);



class CryptoService {
  constructor(http) {
    this.http = http;
  }
  // function to get crypto prices from the API - no API key required.
  getPrices() {
    const fsymsList = "ADA,BCH,BTC,BTS,DASH,EOS,ETH,ETC,LTC,NEO,REP,QTUM,TRX,USDT,XLM,XMR,XRP,ZRX,ZEC";
    return this.http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + fsymsList + "&tsyms=EUR").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1));
  }
  static #_ = this.ɵfac = function CryptoService_Factory(t) {
    return new (t || CryptoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CryptoService,
    factory: CryptoService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 34645:
/*!****************************************************************!*\
  !*** ./src/app/modules/application/crypto/crypto.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptoComponent": () => (/* binding */ CryptoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _crypto_services_crypto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto-services/crypto.service */ 32520);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 97191);



function CryptoComponent_div_2_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const crypto_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/icons/crypto-icons/", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, crypto_r2), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", "crypto icon for ", crypto_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 6, ctx_r1.cryptos[crypto_r2].EUR, "EUR"), " ");
  }
}
function CryptoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "table", 4)(3, "thead", 5)(4, "tr")(5, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cryptocurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u20AC Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CryptoComponent_div_2_tr_12_Template, 9, 9, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Data from the:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "CryptoCompare API");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.objectKeys(ctx_r0.cryptos))("ngForTrackBy", ctx_r0.cryptoTrackbyFn);
  }
}
class CryptoComponent {
  constructor(cryptoService) {
    this.cryptoService = cryptoService;
    this.objectKeys = Object.keys;
  }
  ngOnInit() {
    this.cryptoService.getPrices().subscribe(res => {
      this.cryptos = res;
    });
  }
  cryptoTrackbyFn(index, item) {
    return item.cryptoId;
  }
  static #_ = this.ɵfac = function CryptoComponent_Factory(t) {
    return new (t || CryptoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_crypto_services_crypto_service__WEBPACK_IMPORTED_MODULE_0__.CryptoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CryptoComponent,
    selectors: [["app-crypto"]],
    decls: 3,
    vars: 1,
    consts: [["name", "description", "content", "Shows cryptocurrency api data"], ["class", "card rounded text-center", 4, "ngIf"], [1, "card", "rounded", "text-center"], [1, "card-body", "p-0"], [1, "table", "table-hover", "table-bordered"], [1, "bg-light"], ["scope", "col"], ["scope", "col", 1, "text-right"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "card-footer", "backgroundSecondaryBlue", "text-light"], [1, "mb-0", "text-left"], ["href", "https://min-api.cryptocompare.com/", "rel", "noreferrer", "target", "_blank", "title", "cryptoCurrency_link", 1, "crypto-footer-link"], ["scope", "row"], [3, "src", "alt"], [1, "text-right"]],
    template: function CryptoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CryptoComponent_div_2_Template, 18, 2, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cryptos);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.LowerCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
    styles: ["a[_ngcontent-%COMP%] {\n  position: center;\n  width: 70%;\n  margin: 0 auto 4px auto;\n  padding: 1em;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: auto auto;\n}\n\n.crypto-footer-link[_ngcontent-%COMP%] {\n  color: white;\n  font-style: bold;\n  font-weight: 600;\n}\n/*# sourceURL=webpack://./src/app/modules/application/crypto/crypto.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9jcnlwdG8vY3J5cHRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG8gNHB4IGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxudGFibGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xufVxuXG4uY3J5cHRvLWZvb3Rlci1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXN0eWxlOiBib2xkO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74707:
/*!*************************************************************!*\
  !*** ./src/app/modules/application/crypto/crypto.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptoModule": () => (/* binding */ CryptoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _crypto_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto.component */ 34645);
/* harmony import */ var _crypto_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crypto-routing.module */ 12924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);




class CryptoModule {
  static #_ = this.ɵfac = function CryptoModule_Factory(t) {
    return new (t || CryptoModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CryptoModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _crypto_routing_module__WEBPACK_IMPORTED_MODULE_1__.CryptoRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CryptoModule, {
    declarations: [_crypto_component__WEBPACK_IMPORTED_MODULE_0__.CryptoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _crypto_routing_module__WEBPACK_IMPORTED_MODULE_1__.CryptoRoutingModule],
    exports: [_crypto_component__WEBPACK_IMPORTED_MODULE_0__.CryptoComponent]
  });
})();

/***/ })

};
;
//# sourceMappingURL=707.js.map