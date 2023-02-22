"use strict";
exports.id = 40;
exports.ids = [40];
exports.modules = {

/***/ 77129:
/*!***************************************************************!*\
  !*** ./src/app/components/svg-folder/svg-folder.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgFolderComponent": () => (/* binding */ SvgFolderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class SvgFolderComponent {
  static #_ = this.ɵfac = function SvgFolderComponent_Factory(t) {
    return new (t || SvgFolderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SvgFolderComponent,
    selectors: [["app-svg-folder"]],
    decls: 2,
    vars: 0,
    consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "folder-open", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "svg-inline--fa", "fa-folder-open", "fa-w-18"], ["fill", "currentColor", "d", "M527.9 224H480v-48c0-26.5-21.5-48-48-48H272l-64-64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h400c16.5 0 31.9-8.5 40.7-22.6l79.9-128c20-31.9-3-73.4-40.7-73.4zM48 118c0-3.3 2.7-6 6-6h134.1l64 64H426c3.3 0 6 2.7 6 6v42H152c-16.8 0-32.4 8.8-41.1 23.2L48 351.4zm400 282H72l77.2-128H528z"]],
    template: function SvgFolderComponent_Template(rf, ctx) {
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

/***/ 529:
/*!************************************************************!*\
  !*** ./src/app/components/svg-folder/svg-folder.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgFolderModule": () => (/* binding */ SvgFolderModule)
/* harmony export */ });
/* harmony import */ var _svg_folder_svg_folder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg-folder/svg-folder.component */ 77129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);


class SvgFolderModule {
  static #_ = this.ɵfac = function SvgFolderModule_Factory(t) {
    return new (t || SvgFolderModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SvgFolderModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SvgFolderModule, {
    declarations: [_svg_folder_svg_folder_component__WEBPACK_IMPORTED_MODULE_0__.SvgFolderComponent],
    exports: [_svg_folder_svg_folder_component__WEBPACK_IMPORTED_MODULE_0__.SvgFolderComponent]
  });
})();

/***/ }),

/***/ 4356:
/*!*************************************************************!*\
  !*** ./src/app/components/svg-globe/svg-globe.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgGlobeComponent": () => (/* binding */ SvgGlobeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class SvgGlobeComponent {
  static #_ = this.ɵfac = function SvgGlobeComponent_Factory(t) {
    return new (t || SvgGlobeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SvgGlobeComponent,
    selectors: [["app-svg-globe"]],
    decls: 2,
    vars: 0,
    consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "globe", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 496 512", 1, "svg-inline--fa", "fa-globe", "fa-w-16"], ["fill", "currentColor", "d", "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"]],
    template: function SvgGlobeComponent_Template(rf, ctx) {
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

/***/ 776:
/*!**********************************************************!*\
  !*** ./src/app/components/svg-globe/svg-globe.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgGlobeModule": () => (/* binding */ SvgGlobeModule)
/* harmony export */ });
/* harmony import */ var _svg_globe_svg_globe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg-globe/svg-globe.component */ 4356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);


class SvgGlobeModule {
  static #_ = this.ɵfac = function SvgGlobeModule_Factory(t) {
    return new (t || SvgGlobeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SvgGlobeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SvgGlobeModule, {
    declarations: [_svg_globe_svg_globe_component__WEBPACK_IMPORTED_MODULE_0__.SvgGlobeComponent],
    exports: [_svg_globe_svg_globe_component__WEBPACK_IMPORTED_MODULE_0__.SvgGlobeComponent]
  });
})();

/***/ }),

/***/ 57096:
/*!*********************************************************!*\
  !*** ./src/app/components/svg-pen/svg-pen.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgPenComponent": () => (/* binding */ SvgPenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class SvgPenComponent {
  static #_ = this.ɵfac = function SvgPenComponent_Factory(t) {
    return new (t || SvgPenComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SvgPenComponent,
    selectors: [["app-svg-pen"]],
    decls: 2,
    vars: 0,
    consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "pen", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-pen", "fa-w-16"], ["fill", "currentColor", "d", "M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"]],
    template: function SvgPenComponent_Template(rf, ctx) {
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

/***/ 14750:
/*!***************************************************************!*\
  !*** ./src/app/components/svg-person/svg-person.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgPersonComponent": () => (/* binding */ SvgPersonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class SvgPersonComponent {
  static #_ = this.ɵfac = function SvgPersonComponent_Factory(t) {
    return new (t || SvgPersonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SvgPersonComponent,
    selectors: [["app-svg-person"]],
    decls: 2,
    vars: 0,
    consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "user", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-user", "fa-w-14"], ["fill", "currentColor", "d", "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"]],
    template: function SvgPersonComponent_Template(rf, ctx) {
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

/***/ 33350:
/*!************************************************************!*\
  !*** ./src/app/components/svg-person/svg-person.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgPersonModule": () => (/* binding */ SvgPersonModule)
/* harmony export */ });
/* harmony import */ var _svg_person_svg_person_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svg-person/svg-person.component */ 14750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);


class SvgPersonModule {
  static #_ = this.ɵfac = function SvgPersonModule_Factory(t) {
    return new (t || SvgPersonModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SvgPersonModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SvgPersonModule, {
    declarations: [_svg_person_svg_person_component__WEBPACK_IMPORTED_MODULE_0__.SvgPersonComponent],
    exports: [_svg_person_svg_person_component__WEBPACK_IMPORTED_MODULE_0__.SvgPersonComponent]
  });
})();

/***/ }),

/***/ 64104:
/*!***********************************************************!*\
  !*** ./src/app/components/svg-user/svg-user.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgUserComponent": () => (/* binding */ SvgUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class SvgUserComponent {
  static #_ = this.ɵfac = function SvgUserComponent_Factory(t) {
    return new (t || SvgUserComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SvgUserComponent,
    selectors: [["app-svg-user"]],
    decls: 2,
    vars: 0,
    consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "user-tag", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 640 512", 1, "svg-inline--fa", "fa-user-tag", "fa-w-20"], ["fill", "currentColor", "d", "M630.6 364.9l-90.3-90.2c-12-12-28.3-18.7-45.3-18.7h-79.3c-17.7 0-32 14.3-32 32v79.2c0 17 6.7 33.2 18.7 45.2l90.3 90.2c12.5 12.5 32.8 12.5 45.3 0l92.5-92.5c12.6-12.5 12.6-32.7.1-45.2zm-182.8-21c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24c0 13.2-10.7 24-24 24zm-223.8-88c70.7 0 128-57.3 128-128C352 57.3 294.7 0 224 0S96 57.3 96 128c0 70.6 57.3 127.9 128 127.9zm127.8 111.2V294c-12.2-3.6-24.9-6.2-38.2-6.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 287.9 0 348.1 0 422.3v41.6c0 26.5 21.5 48 48 48h352c15.5 0 29.1-7.5 37.9-18.9l-58-58c-18.1-18.1-28.1-42.2-28.1-67.9z"]],
    template: function SvgUserComponent_Template(rf, ctx) {
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

/***/ 32373:
/*!*********************************************************************!*\
  !*** ./src/app/modules/application/github/github-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubRoutingModule": () => (/* binding */ GithubRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _github_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github.component */ 75032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);




const routes = [{
  path: "",
  component: _github_component__WEBPACK_IMPORTED_MODULE_0__.GithubComponent
}];
class GithubRoutingModule {
  static #_ = this.ɵfac = function GithubRoutingModule_Factory(t) {
    return new (t || GithubRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: GithubRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GithubRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 57059:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/application/github/github-user/github-user.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubUserComponent": () => (/* binding */ GithubUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _components_svg_folder_svg_folder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/svg-folder/svg-folder.component */ 77129);
/* harmony import */ var _components_svg_person_svg_person_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/svg-person/svg-person.component */ 14750);
/* harmony import */ var _components_svg_globe_svg_globe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/svg-globe/svg-globe.component */ 4356);
/* harmony import */ var _components_svg_user_svg_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/svg-user/svg-user.component */ 64104);
/* harmony import */ var _pipes_date_convert_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../pipes/date-convert.pipe */ 99395);








function GithubUserComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-svg-globe", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.user.location);
  }
}
function GithubUserComponent_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-svg-globe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " No user location data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function GithubUserComponent_div_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.user.bio);
  }
}
function GithubUserComponent_div_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "No user bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function GithubUserComponent_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.user.public_repos);
  }
}
function GithubUserComponent_div_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "no user repos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/github-repos", a1];
};
function GithubUserComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, GithubUserComponent_div_2_div_6_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, GithubUserComponent_div_2_div_7_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-svg-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, GithubUserComponent_div_2_span_11_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, GithubUserComponent_div_2_span_12_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Repos: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, GithubUserComponent_div_2_span_15_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, GithubUserComponent_div_2_span_16_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Joined: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "dateConvert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Following: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Followers: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 14)(29, "div", 15)(30, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "app-svg-folder", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Repos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 15)(35, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "app-svg-person", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r0.user.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.user.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.user.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.user.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.user.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.user.public_repos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.user.public_repos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 13, ctx_r0.user.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.user.following);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.user.followers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c0, ctx_r0.user.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx_r0.user.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
class GithubUserComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GithubUserComponent_Factory(t) {
    return new (t || GithubUserComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: GithubUserComponent,
    selectors: [["app-github-user"]],
    inputs: {
      user: "user"
    },
    decls: 3,
    vars: 1,
    consts: [["name", "description", "content", "Shows repo user data from the Github API"], ["class", "card rounded", 4, "ngIf"], [1, "card", "rounded"], [1, "card-header", "bg-light"], ["alt", "Github user profile photo", 1, "header-image", "float-left", 3, "src"], [1, "card-title", "textSecondaryBlue"], [1, "card-subtitle"], [4, "ngIf"], [1, "card-body", "pb-0"], ["class", "px-1 textSecondaryBlue", 4, "ngIf"], ["class", "pr-1", 4, "ngIf"], [1, "text-dark"], ["class", "textSecondaryBlue pr-2", 4, "ngIf"], [1, "textSecondaryBlue", "pr-2"], [1, "d-flex", "justify-content-around"], [1, "p-2"], [1, "btn", "btn-outline-dark", 3, "routerLink"], [1, "pr-1"], [1, "textSecondaryBlue"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-outline-dark", 3, "href"], [1, "text-dark", "pr-1"], [1, "px-1", "textSecondaryBlue"]],
    template: function GithubUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, GithubUserComponent_div_2_Template, 39, 17, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.user);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _components_svg_folder_svg_folder_component__WEBPACK_IMPORTED_MODULE_0__.SvgFolderComponent, _components_svg_person_svg_person_component__WEBPACK_IMPORTED_MODULE_1__.SvgPersonComponent, _components_svg_globe_svg_globe_component__WEBPACK_IMPORTED_MODULE_2__.SvgGlobeComponent, _components_svg_user_svg_user_component__WEBPACK_IMPORTED_MODULE_3__.SvgUserComponent, _pipes_date_convert_pipe__WEBPACK_IMPORTED_MODULE_4__.DateConvertPipe],
    styles: [".card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: auto auto;\n}\n\n.card-title[_ngcontent-%COMP%], .card-subtitle[_ngcontent-%COMP%] {\n  padding-left: 80px;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  width: 60px;\n  height: 60px;\n}\n/*# sourceURL=webpack://./src/app/modules/application/github/github-user/github-user.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9naXRodWIvZ2l0aHViLXVzZXIvZ2l0aHViLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xufVxuXG4uY2FyZC10aXRsZSxcbi5jYXJkLXN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xufVxuXG4uaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 75032:
/*!****************************************************************!*\
  !*** ./src/app/modules/application/github/github.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubComponent": () => (/* binding */ GithubComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _services_github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/github.service */ 65891);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _github_user_github_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-user/github-user.component */ 57059);
/* harmony import */ var _components_svg_pen_svg_pen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/svg-pen/svg-pen.component */ 57096);







function GithubComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-github-user", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("user", ctx_r1.user);
  }
}
class GithubComponent {
  constructor(router, githubService) {
    this.router = router;
    this.githubService = githubService;
    this.displayCleared = false;
  }
  ngOnInit() {
    this.getUser("tommyteavee");
  }
  submitForm(githubSearch) {
    this.getUser(githubSearch.value.name);
  }
  getUser(userName) {
    this.displayCleared = false;
    this.githubService.getUser(userName).subscribe(user => {
      this.user = user;
    });
  }
  clearUser() {
    this.displayCleared = true;
  }
  static #_ = this.ɵfac = function GithubComponent_Factory(t) {
    return new (t || GithubComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_github_service__WEBPACK_IMPORTED_MODULE_0__.GithubService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GithubComponent,
    selectors: [["app-github"]],
    decls: 25,
    vars: 3,
    consts: [["name", "description", "content", "Shows data from the Google Books api"], [1, "main-div"], [1, "card", "rounded"], [1, "card-header", "bg-light"], ["src", "../../../../assets/params/images/logo/github.png", "alt", "Github logo", 1, "header-image", "float-left"], [1, "card-title", "text-dark"], [1, "card-subtitle", "font-italic"], [1, "card-body"], ["method", "POST", 3, "ngSubmit"], ["githubSearch", "ngForm"], [1, "input-group", "mb-0"], [1, "input-group-prepend"], [1, "input-group-text", "text-light", "bg-dark"], ["id", "name", "name", "name", "type", "text", "minlength", "4", "placeholder", "Enter username", "aria-label", "Enter username", "required", "", "ngModel", "", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-dark", 3, "disabled"], ["type", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], ["class", "github-card", 4, "ngIf"], [1, "github-card"], [3, "user"]],
    template: function GithubComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "body")(3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Github API");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Search by username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "form", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function GithubComponent_Template_form_ngSubmit_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
          ctx.submitForm(_r0);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.reset());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-svg-pen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14)(20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GithubComponent_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
          ctx.clearUser();
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.reset());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, GithubComponent_div_24_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.value.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.displayCleared);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _github_user_github_user_component__WEBPACK_IMPORTED_MODULE_1__.GithubUserComponent, _components_svg_pen_svg_pen_component__WEBPACK_IMPORTED_MODULE_2__.SvgPenComponent],
    styles: [".main-div[_ngcontent-%COMP%] {\n  \n  justify-content: center;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: auto auto;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n\n.card-subtitle[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  width: 48px;\n  height: 48px;\n}\n\n.github-card[_ngcontent-%COMP%] {\n  padding: 12px auto;\n  align-items: center;\n}\n/*# sourceURL=webpack://./src/app/modules/application/github/github.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9naXRodWIvZ2l0aHViLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYge1xuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IGF1dG8gYXV0bztcbn1cblxuLmNhcmQtdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuXG4uaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmdpdGh1Yi1jYXJkIHtcbiAgcGFkZGluZzogMTJweCBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 42040:
/*!*************************************************************!*\
  !*** ./src/app/modules/application/github/github.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubModule": () => (/* binding */ GithubModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _github_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github.component */ 75032);
/* harmony import */ var _github_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-routing.module */ 32373);
/* harmony import */ var _github_user_github_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github-user/github-user.component */ 57059);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/pipes.module */ 30571);
/* harmony import */ var _components_svg_globe_svg_globe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/svg-globe/svg-globe.module */ 776);
/* harmony import */ var _components_svg_pen_svg_pen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/svg-pen/svg-pen.component */ 57096);
/* harmony import */ var _components_svg_user_svg_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../components/svg-user/svg-user.component */ 64104);
/* harmony import */ var _components_svg_person_svg_person_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../components/svg-person/svg-person.module */ 33350);
/* harmony import */ var _components_svg_folder_svg_folder_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../components/svg-folder/svg-folder.module */ 529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4009);












class GithubModule {
  static #_ = this.ɵfac = function GithubModule_Factory(t) {
    return new (t || GithubModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: GithubModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _github_routing_module__WEBPACK_IMPORTED_MODULE_1__.GithubRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _components_svg_folder_svg_folder_module__WEBPACK_IMPORTED_MODULE_8__.SvgFolderModule, _components_svg_person_svg_person_module__WEBPACK_IMPORTED_MODULE_7__.SvgPersonModule, _components_svg_globe_svg_globe_module__WEBPACK_IMPORTED_MODULE_4__.SvgGlobeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](GithubModule, {
    declarations: [_github_component__WEBPACK_IMPORTED_MODULE_0__.GithubComponent, _github_user_github_user_component__WEBPACK_IMPORTED_MODULE_2__.GithubUserComponent, _components_svg_pen_svg_pen_component__WEBPACK_IMPORTED_MODULE_5__.SvgPenComponent, _components_svg_user_svg_user_component__WEBPACK_IMPORTED_MODULE_6__.SvgUserComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _github_routing_module__WEBPACK_IMPORTED_MODULE_1__.GithubRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _components_svg_folder_svg_folder_module__WEBPACK_IMPORTED_MODULE_8__.SvgFolderModule, _components_svg_person_svg_person_module__WEBPACK_IMPORTED_MODULE_7__.SvgPersonModule, _components_svg_globe_svg_globe_module__WEBPACK_IMPORTED_MODULE_4__.SvgGlobeModule],
    exports: [_github_component__WEBPACK_IMPORTED_MODULE_0__.GithubComponent]
  });
})();

/***/ }),

/***/ 65891:
/*!********************************************!*\
  !*** ./src/app/services/github.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubService": () => (/* binding */ GithubService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 55010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);





const baseUrl = "https://api.github.com/users/";
//const githubAPIKey = process.env.GITHUB_KEY;
const githubAPIKey = "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E";
const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set("api_key", githubAPIKey);
class GithubService {
  constructor(http) {
    this.http = http;
  }
  getUser(user) {
    const userSearchUrl = `${baseUrl + user}`;
    return this.http.get(userSearchUrl, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      throw "error in getting API data. Details: " + err;
    }));
  }
  getRepos(user) {
    const repoSearchUrl = `${baseUrl + user + "/repos?order=updated&sort=desc?per_page=100&page=1"}`;
    return this.http.get(repoSearchUrl, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      throw "error in getting API data. Details: " + err;
    }));
  }
  static #_ = this.ɵfac = function GithubService_Factory(t) {
    return new (t || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: GithubService,
    factory: GithubService.ɵfac,
    providedIn: "root"
  });
}

/***/ })

};
;
//# sourceMappingURL=40.js.map