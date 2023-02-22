"use strict";
exports.id = 623;
exports.ids = [623];
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

/***/ 87654:
/*!******************************************************************!*\
  !*** ./src/app/modules/common/contact/contact-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactRoutingModule": () => (/* binding */ ContactRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component */ 2962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);




const routes = [{
  path: "",
  component: _contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
}];
class ContactRoutingModule {
  static #_ = this.ɵfac = function ContactRoutingModule_Factory(t) {
    return new (t || ContactRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ContactRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2962:
/*!*************************************************************!*\
  !*** ./src/app/modules/common/contact/contact.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _services_github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/github.service */ 65891);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _components_svg_folder_svg_folder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/svg-folder/svg-folder.component */ 77129);
/* harmony import */ var _components_svg_person_svg_person_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/svg-person/svg-person.component */ 14750);
/* harmony import */ var _components_svg_globe_svg_globe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/svg-globe/svg-globe.component */ 4356);






function ContactComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-svg-globe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-svg-person", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Bio:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "app-svg-folder", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Github repositories:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 12)(24, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 12)(27, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.user.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.user.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.user.bio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.user.public_repos, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", ctx_r0.user.html_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
class ContactComponent {
  constructor(githubService) {
    this.githubService = githubService;
  }
  ngOnInit() {
    this.githubService.getUser("tommyteavee").subscribe(user => {
      this.user = user;
    });
  }
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_github_service__WEBPACK_IMPORTED_MODULE_0__.GithubService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 3,
    vars: 1,
    consts: [["name", "description", "content", "Shows contact details of author"], ["class", "card rounded", 4, "ngIf"], [1, "card", "rounded"], [1, "card-header", "bg-light"], ["alt", "Github user profile photo", 1, "header-image", "float-left", 3, "src"], [1, "card-title"], [1, "indent-text", "mb-0"], [1, "card-body", "pb-0"], [1, ""], [1, "pr-1"], [1, "font-weight-bold", "pr-2"], [1, "d-flex", "justify-content-around", "bg-light"], [1, "p-3"], ["target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-dark", 3, "href"], ["href", "#", "target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-warning"], ["href", "#", "target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-success"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ContactComponent_div_2_Template, 29, 6, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_svg_folder_svg_folder_component__WEBPACK_IMPORTED_MODULE_1__.SvgFolderComponent, _components_svg_person_svg_person_component__WEBPACK_IMPORTED_MODULE_2__.SvgPersonComponent, _components_svg_globe_svg_globe_component__WEBPACK_IMPORTED_MODULE_3__.SvgGlobeComponent],
    styles: [".card[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: auto auto;\n}\n\n.card-title[_ngcontent-%COMP%], .indent-text[_ngcontent-%COMP%] {\n  padding-left: 80px;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n  width: 64px;\n  height: 64px;\n}\n\na.btn[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n/*# sourceURL=webpack://./src/app/modules/common/contact/contact.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21tb24vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG59XG5cbi5jYXJkLXRpdGxlLFxuLmluZGVudC10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xufVxuXG4uaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuYS5idG4ge1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 10623:
/*!**********************************************************!*\
  !*** ./src/app/modules/common/contact/contact.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component */ 2962);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-routing.module */ 87654);
/* harmony import */ var _components_svg_folder_svg_folder_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../components/svg-folder/svg-folder.module */ 529);
/* harmony import */ var _components_svg_person_svg_person_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../components/svg-person/svg-person.module */ 33350);
/* harmony import */ var _components_svg_globe_svg_globe_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/svg-globe/svg-globe.module */ 776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);







class ContactModule {
  static #_ = this.ɵfac = function ContactModule_Factory(t) {
    return new (t || ContactModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ContactModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_1__.ContactRoutingModule, _components_svg_folder_svg_folder_module__WEBPACK_IMPORTED_MODULE_2__.SvgFolderModule, _components_svg_person_svg_person_module__WEBPACK_IMPORTED_MODULE_3__.SvgPersonModule, _components_svg_globe_svg_globe_module__WEBPACK_IMPORTED_MODULE_4__.SvgGlobeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContactModule, {
    declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_1__.ContactRoutingModule, _components_svg_folder_svg_folder_module__WEBPACK_IMPORTED_MODULE_2__.SvgFolderModule, _components_svg_person_svg_person_module__WEBPACK_IMPORTED_MODULE_3__.SvgPersonModule, _components_svg_globe_svg_globe_module__WEBPACK_IMPORTED_MODULE_4__.SvgGlobeModule],
    exports: [_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent]
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
//# sourceMappingURL=623.js.map