"use strict";
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 95067:
/*!*******************************************************************!*\
  !*** ./src/app/components/svg-calender/svg-calender.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgCalenderComponent": () => (/* binding */ SvgCalenderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class SvgCalenderComponent {
  static #_ = this.ɵfac = function SvgCalenderComponent_Factory(t) {
    return new (t || SvgCalenderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SvgCalenderComponent,
    selectors: [["app-svg-calender"]],
    decls: 2,
    vars: 0,
    consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "calendar-day", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-calendar-day", "fa-w-14"], ["fill", "currentColor", "d", "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"]],
    template: function SvgCalenderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  fill: white;\n  background: inherit;\n  background-color: inherit;\n  padding-bottom: 4px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n/*# sourceURL=webpack://./src/app/components/svg-small.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdmctc21hbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmaWxsOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 77405:
/*!****************************************************************!*\
  !*** ./src/app/components/svg-calender/svg-calender.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgCalenderModule": () => (/* binding */ SvgCalenderModule)
/* harmony export */ });
/* harmony import */ var _svg_calender_svg_calender_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg-calender/svg-calender.component */ 95067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);


class SvgCalenderModule {
  static #_ = this.ɵfac = function SvgCalenderModule_Factory(t) {
    return new (t || SvgCalenderModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SvgCalenderModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SvgCalenderModule, {
    declarations: [_svg_calender_svg_calender_component__WEBPACK_IMPORTED_MODULE_0__.SvgCalenderComponent],
    exports: [_svg_calender_svg_calender_component__WEBPACK_IMPORTED_MODULE_0__.SvgCalenderComponent]
  });
})();

/***/ }),

/***/ 77694:
/*!*********************************************************************!*\
  !*** ./src/app/components/svg-copyright/svg-copyright.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgCopyrightComponent": () => (/* binding */ SvgCopyrightComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class SvgCopyrightComponent {
  static #_ = this.ɵfac = function SvgCopyrightComponent_Factory(t) {
    return new (t || SvgCopyrightComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SvgCopyrightComponent,
    selectors: [["app-svg-copyright"]],
    decls: 2,
    vars: 0,
    consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "copyright", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-copyright", "fa-w-16"], ["fill", "currentColor", "d", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"]],
    template: function SvgCopyrightComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  fill: white;\n  background: inherit;\n  background-color: inherit;\n  padding-bottom: 4px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n/*# sourceURL=webpack://./src/app/components/svg-small.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdmctc21hbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmaWxsOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 96730:
/*!***************************************************************!*\
  !*** ./src/app/components/svg-sticky/svg-sticky.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgStickyComponent": () => (/* binding */ SvgStickyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class SvgStickyComponent {
  static #_ = this.ɵfac = function SvgStickyComponent_Factory(t) {
    return new (t || SvgStickyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SvgStickyComponent,
    selectors: [["app-svg-sticky"]],
    decls: 2,
    vars: 0,
    consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "sticky-note", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-sticky-note", "fa-w-14"], ["fill", "currentColor", "d", "M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z"]],
    template: function SvgStickyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  fill: white;\n  background: inherit;\n  background-color: inherit;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n/*# sourceURL=webpack://./src/app/components/svg.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZpbGw6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG5pbWcge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 93557:
/*!*****************************************************************!*\
  !*** ./src/app/modules/application/nasa/nasa-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NasaRoutingModule": () => (/* binding */ NasaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _nasa_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nasa.component */ 87416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);




const routes = [{
  path: "",
  component: _nasa_component__WEBPACK_IMPORTED_MODULE_0__.NasaComponent
}];
class NasaRoutingModule {
  static #_ = this.ɵfac = function NasaRoutingModule_Factory(t) {
    return new (t || NasaRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NasaRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NasaRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 33030:
/*!************************************************************************!*\
  !*** ./src/app/modules/application/nasa/nasa-services/nasa.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NasaService": () => (/* binding */ NasaService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 55010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8746);




const apiUrl = "https://api.nasa.gov/planetary/apod?";
//const apiKey = process.env.NASA_KEY;
const apiKey = "i7epslZeterLoOnXPU1I2MlbmgfgnKq0C5NWVvTL";
class NasaService {
  constructor(http) {
    this.http = http;
  }
  //  rxjs take(1) takes the first emission of Nasa data and unsubscribes from the observable.
  getNasaImage() {
    const apodUrl = `${apiUrl}&api_key=${apiKey}&hd=true`;
    return this.http.get(apodUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(err => {
      throw "error in getting API data. Details: " + err;
    }));
  }
  static #_ = this.ɵfac = function NasaService_Factory(t) {
    return new (t || NasaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NasaService,
    factory: NasaService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 87416:
/*!************************************************************!*\
  !*** ./src/app/modules/application/nasa/nasa.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NasaComponent": () => (/* binding */ NasaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _nasa_services_nasa_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nasa-services/nasa.service */ 33030);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _components_svg_calender_svg_calender_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/svg-calender/svg-calender.component */ 95067);
/* harmony import */ var _components_svg_copyright_svg_copyright_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/svg-copyright/svg-copyright.component */ 77694);
/* harmony import */ var safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! safe-pipe */ 13291);






function NasaComponent_div_2_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 21);
  }
  if (rf & 2) {
    const nasaImgObj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", nasaImgObj_r1.hdurl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function NasaComponent_div_2_div_13_iframe_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "iframe", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "safe");
  }
  if (rf & 2) {
    const nasaImgObj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 1, nasaImgObj_r1.url, "resourceUrl"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
  }
}
function NasaComponent_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NasaComponent_div_2_div_13_iframe_1_Template, 2, 4, "iframe", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const nasaImgObj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nasaImgObj_r1.media_type === "video");
  }
}
function NasaComponent_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-svg-copyright");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const nasaImgObj_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", nasaImgObj_r1.copyright, " ");
  }
}
function NasaComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8)(7, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Today's Image:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, NasaComponent_div_2_img_12_Template, 1, 1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, NasaComponent_div_2_div_13_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "app-svg-calender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, NasaComponent_div_2_div_24_Template, 4, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const nasaImgObj_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", nasaImgObj_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nasaImgObj_r1.media_type === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nasaImgObj_r1.media_type === "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", nasaImgObj_r1.explanation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 6, nasaImgObj_r1.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", nasaImgObj_r1.copyright);
  }
}
class NasaComponent {
  constructor(nasaApi) {
    this.nasaApi = nasaApi;
    this.title = "ngNasaApi";
  }
  ngOnInit() {
    this.nasaImgObj$ = this.nasaApi.getNasaImage();
  }
  static #_ = this.ɵfac = function NasaComponent_Factory(t) {
    return new (t || NasaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nasa_services_nasa_service__WEBPACK_IMPORTED_MODULE_0__.NasaService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NasaComponent,
    selectors: [["app-nasa"]],
    decls: 4,
    vars: 3,
    consts: [["name", "description", "content", "Shows Nasa api data"], ["class", "main-div", 4, "ngIf"], [1, "main-div"], [1, "card", "rounded"], [1, "card-header", "bg-light"], [1, "row"], [1, "col-2"], ["src", "../../../../assets/params/images/logo/nasa-image.png", "alt", "Nasa logo", 1, "header-image", "float-left"], [1, "col-10"], [1, "card-title", "text-dark", "float-left", "p-0"], [1, "card-subtitle", "font-italic", "float-left", "p-0"], [1, "card-body"], ["class", "card-img-top", "alt", "Card image", 3, "src", 4, "ngIf"], ["id", "video", 4, "ngIf"], [1, "card-text"], [1, "far", "fa-sticky-note", "pr-1", "text-info"], [1, "actions"], [1, "d-flex", "justify-content-around"], [1, "p-2"], [1, "mb-0"], ["class", "p-2", 4, "ngIf"], ["alt", "Card image", 1, "card-img-top", 3, "src"], ["id", "video"], ["width", "560", "height", "315", "frameborder", "0", "allowfullscreen", "", 3, "src", 4, "ngIf"], ["width", "560", "height", "315", "frameborder", "0", "allowfullscreen", "", 3, "src"]],
    template: function NasaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NasaComponent_div_2_Template, 25, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx.nasaImgObj$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_svg_calender_svg_calender_component__WEBPACK_IMPORTED_MODULE_1__.SvgCalenderComponent, _components_svg_copyright_svg_copyright_component__WEBPACK_IMPORTED_MODULE_2__.SvgCopyrightComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, safe_pipe__WEBPACK_IMPORTED_MODULE_5__.SafePipe],
    styles: [".main-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n\n.card-subtitle[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n#video[_ngcontent-%COMP%] {\n\tposition: relative;\n\tpadding-bottom: 56.25%;\n\tpadding-top: 25px;\n\theight: 0;\n}\n\niframe[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n/*# sourceURL=webpack://./src/app/modules/application/nasa/nasa.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9uYXNhL25hc2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxXQUFXO0NBQ1gsWUFBWTtBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4jdmlkZW8ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG5cdHBhZGRpbmctdG9wOiAyNXB4O1xuXHRoZWlnaHQ6IDA7XG59XG5cbmlmcmFtZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66108:
/*!*********************************************************!*\
  !*** ./src/app/modules/application/nasa/nasa.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NasaModule": () => (/* binding */ NasaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var safe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! safe-pipe */ 13291);
/* harmony import */ var _nasa_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nasa.component */ 87416);
/* harmony import */ var _nasa_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nasa-routing.module */ 93557);
/* harmony import */ var _components_svg_calender_svg_calender_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../components/svg-calender/svg-calender.module */ 77405);
/* harmony import */ var _components_svg_sticky_svg_sticky_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/svg-sticky/svg-sticky.component */ 96730);
/* harmony import */ var _components_svg_copyright_svg_copyright_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/svg-copyright/svg-copyright.component */ 77694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);








class NasaModule {
  static #_ = this.ɵfac = function NasaModule_Factory(t) {
    return new (t || NasaModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: NasaModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _nasa_routing_module__WEBPACK_IMPORTED_MODULE_1__.NasaRoutingModule, safe_pipe__WEBPACK_IMPORTED_MODULE_7__.SafePipeModule, _components_svg_calender_svg_calender_module__WEBPACK_IMPORTED_MODULE_2__.SvgCalenderModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NasaModule, {
    declarations: [_nasa_component__WEBPACK_IMPORTED_MODULE_0__.NasaComponent, _components_svg_sticky_svg_sticky_component__WEBPACK_IMPORTED_MODULE_3__.SvgStickyComponent, _components_svg_copyright_svg_copyright_component__WEBPACK_IMPORTED_MODULE_4__.SvgCopyrightComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _nasa_routing_module__WEBPACK_IMPORTED_MODULE_1__.NasaRoutingModule, safe_pipe__WEBPACK_IMPORTED_MODULE_7__.SafePipeModule, _components_svg_calender_svg_calender_module__WEBPACK_IMPORTED_MODULE_2__.SvgCalenderModule],
    exports: [_nasa_component__WEBPACK_IMPORTED_MODULE_0__.NasaComponent]
  });
})();

/***/ }),

/***/ 13291:
/*!*******************************************************!*\
  !*** ./node_modules/safe-pipe/fesm2020/safe-pipe.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe),
/* harmony export */   "SafePipeModule": () => (/* binding */ SafePipeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 55806);



class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value, type) {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`SafePipe unable to bypass security for invalid type: ${type}`);
    }
  }
}
SafePipe.ɵfac = function SafePipe_Factory(t) {
  return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safe",
  type: SafePipe,
  pure: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'safe',
      pure: true
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer
    }];
  }, null);
})();
class SafePipeModule {}
SafePipeModule.ɵfac = function SafePipeModule_Factory(t) {
  return new (t || SafePipeModule)();
};
SafePipeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: SafePipeModule
});
SafePipeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [SafePipe],
      exports: [SafePipe]
    }]
  }], null, null);
})();

/*
 * Public API Surface of safe-pipe
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

};
;
//# sourceMappingURL=108.js.map