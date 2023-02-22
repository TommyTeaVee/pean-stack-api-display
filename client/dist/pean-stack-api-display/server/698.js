"use strict";
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 33949:
/*!**************************************************************!*\
  !*** ./src/app/modules/common/about/about-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutRoutingModule": () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 29366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);




const routes = [{
  path: "",
  component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}];
class AboutRoutingModule {
  static #_ = this.ɵfac = function AboutRoutingModule_Factory(t) {
    return new (t || AboutRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AboutRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 29366:
/*!*********************************************************!*\
  !*** ./src/app/modules/common/about/about.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class AboutComponent {
  constructor() {
    this.features = [{
      expanded: true,
      icon: "fas fa-satellite-dish",
      title: "NASA API",
      state: "show",
      description: `Astronomy Picture of the Day (APOD) Data is fetched from the
        <a href="https://api.nasa.gov/index.html#getting-started" target="_blank" rel="noreferrer noopener">official NASA API</a>.
        The APOD can also be a video and npm module
        <a href="https://www.npmjs.com/package/safe-pipe" target="_blank" rel="noreferrer noopener">safe-pipe</a>
        was required to prevent the app from crashing.
        Data is displayed in a Bootstrap card with a description, date and credit text (where available) below.`
    }, {
      expanded: false,
      icon: "fab fa-btc",
      title: "Crypto API",
      state: "hide",
      description: `Price data for a range of cryptocurrencies is fetched from the
        <a href="https://min-api.cryptocompare.com/">CryptoCompare API</a> and
        is displayed using a Bootstrap responsive table. The table also shows
        svg icons for each currency, retrieved from the assets folder. The
        cryptocurrency prices are displayed in euro but this can be changed to
        other currencies.`
    }, {
      expanded: false,
      icon: "fas fa-map-marker",
      title: "Maps API",
      state: "hide",
      description: `User location data is fetched from
        <a href="https://ipapi.co"
          >ipapi, a real-time Geolocation & Reverse IP Lookup REST API</a
        >. If location data is not available then the coordinates of the
        Eiffel Tower are used to center the map. Map data is obtained using
        <a href="https://ipapi.com/">Leaflet</a>, an open-source JavaScript
        library for mobile-friendly interactive maps that requires no API key.`
    }, {
      expanded: false,
      icon: "far fa-newspaper",
      title: "News API",
      state: "hide",
      description: `News data is obtained from the
        <a
          href="https://developer.nytimes.com/docs/top-stories-product/1/overview"
          >New York Times Top Stories HTTP REST API.</a
        > Each Bootstrap News card shows an image with title and content.
        There is a footer that shows the date of the article as '..ago' via a
        custom 'date-convert' pipe based on the Day.js minimalist JavaScript
        library. There is also a hyper-link to the original NYT article.`
    }, {
      expanded: false,
      icon: "fas fa-chart-bar",
      title: "Charts API",
      state: "hide",
      description: `Bootstrap accordian-style collapsible cards are used to display data
        from the
        <a href="https://developers.google.com/books/docs/overview"
          >Google Charts API</a
        >
        in a range of formats, including line, pie, gauge (3 gauges shown),
        table and bar-chart. All charts have their own components. Only one
        card is displayed at a time - clicking on one will collapse the other
        one.`
    }, {
      expanded: false,
      icon: "fas fa-book-open",
      title: "Books API",
      state: "hide",
      description: `Data on books is fetched from the
        <a href="https://developers.google.com/books/docs/overview"
          >Google Books API.</a
        >
        Book data is displayed in a grid of Bootstrap cards. Clicking on a
        card will activate ruote the user to a page with more details about
        the book.`
    }, {
      expanded: false,
      icon: "fas fa-book-reader",
      title: "Bestsellers API",
      state: "hide",
      description: `Data on bestsellers is fetched from the
        <a href="https://developer.nytimes.com/docs/books-product/1/overview"
          >New York Times API.</a
        >
        Bestseller data is displayed in a grid of Bootstrap cards. Clicking on
        a card will route the user to a page with more details about the book.`
    }, {
      expanded: false,
      icon: "fab fa-github",
      title: "Github API",
      state: "hide",
      description: `User and repository data is fetched from the
        <a href="https://developer.github.com/v3/">Github REST API v3. </a
        >Github card shows Github repo details from user search. Repo button
        redirects to repo list page.`
    }];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 90,
    vars: 0,
    consts: [["name", "description", "content", "Shows details of app"], [1, "main-div"], ["id", "accordionExample", 1, "accordion"], [1, "accordion-item"], ["id", "headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", "show"], [1, "accordion-body"], ["href", "https://api.nasa.gov/index.html#getting-started", "target", "_blank", "rel", "noreferrer"], ["href", "https://www.npmjs.com/package/safe-pipe", "target", "_blank", "rel", "noreferrer"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "accordion-button", "collapsed"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["href", "https://min-api.cryptocompare.com/", "target", "_blank", "rel", "noreferrer"], ["id", "headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "accordion-button", "collapsed"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["href", "https://ipapi.co", "target", "_blank", "rel", "noreferrer"], ["href", "https://ipapi.com/", "target", "_blank", "rel", "noreferrer"], ["id", "headingFour", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "accordion-button", "collapsed"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["href", "https://developer.nytimes.com/docs/top-stories-product/1/overview", "target", "_blank", "rel", "noreferrer"], ["id", "headingFive", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "accordion-button", "collapsed"], ["id", "collapseFive", "aria-labelledby", "headingFive", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["href", "https://developers.google.com/books/docs/overview", "target", "_blank", "rel", "noreferrer"], ["id", "headingSix", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSix", "aria-expanded", "false", "aria-controls", "collapseSix", 1, "accordion-button", "collapsed"], ["id", "collapseSix", "aria-labelledby", "headingSix", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["id", "headingSeven", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseSeven", "aria-expanded", "false", "aria-controls", "collapseSeven", 1, "accordion-button", "collapsed"], ["id", "collapseSeven", "aria-labelledby", "headingSeven", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["href", "https://developer.nytimes.com/docs/books-product/1/overview", "target", "_blank", "rel", "noreferrer"], ["id", "headingEight", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#collapseEight", "aria-expanded", "false", "aria-controls", "collapseEight", 1, "accordion-button", "collapsed"], ["id", "collapseEight", "aria-labelledby", "headingEight", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse"], ["href", "https://developer.github.com/v3/", "target", "_blank", "rel", "noreferrer"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h2", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " NASA API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Astronomy Picture of the Day (APOD) Data is fetched from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "official NASA API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". The APOD can also be a video and npm module ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "safe-pipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " was required to prevent the app from crashing. Data is displayed in a Bootstrap card with a description, date and credit text (where available) below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3)(18, "h2", 10)(19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Cryptocurrency API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Price data for a range of cryptocurrencies is fetched from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CryptoCompare API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " and is displayed using a Bootstrap responsive table. The table also shows svg icons for each currency, retrieved from the assets folder. The cryptocurrency prices are displayed in euro but this can be changed to other currencies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3)(28, "h2", 14)(29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Maps API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16)(32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " User location data is fetched from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ipapi, a real-time Geolocation & Reverse IP Lookup REST API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ". If location data is not available then the coordinates of the Eiffel Tower are used to center the map. Map data is obtained using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Leaflet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ", an open-source JavaScript library for mobile-friendly interactive maps that requires no API key. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3)(41, "h2", 19)(42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " News API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21)(45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " News data is obtained from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "New York Times Top Stories HTTP REST API.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Each Bootstrap News card shows an image with title and content. There is a footer that shows the date of the article as '..ago' via a custom 'date-convert' pipe based on the Day.js minimalist JavaScript library. There is also a hyper-link to the original NYT article. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3)(51, "h2", 23)(52, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Google Charts API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25)(55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Bootstrap accordian-style collapsible cards are used to display data from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Google Charts API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " in a range of formats, including line, pie, gauge (3 gauges shown), table and bar-chart. All charts have their own components. Only one card is displayed at a time - clicking on one will collapse the other one. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3)(61, "h2", 27)(62, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Google Books API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29)(65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Data on books is fetched from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Google Books API.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Book data is displayed in a grid of Bootstrap cards. Clicking on a card will activate ruote the user to a page with more details about the book. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 3)(71, "h2", 30)(72, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " NYT Bestsellers API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32)(75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Data on bestsellers is fetched from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "New York Times API.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Bestseller data is displayed in a grid of Bootstrap cards. Clicking on a card will route the user to a page with more details about the book. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 3)(81, "h2", 34)(82, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Github API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36)(85, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " User and repository data is fetched from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Github REST API v3. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Github card shows Github repo details from user search. Repo button redirects to repo list page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: [".main-div[_ngcontent-%COMP%] {\n  \n  \n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  align-items: left;\n}\n\n\n\na[_ngcontent-%COMP%] {\n  color: #6a5eff;\n}\n/*# sourceURL=webpack://./src/app/modules/common/about/about.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21tb24vYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYge1xuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbn1cblxuLmNhcmQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBhbGlnbi1pdGVtczogbGVmdDtcbn1cblxuLyogYnV0dG9uIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBhbGlnbi1pdGVtczogbGVmdCAhaW1wb3J0YW50O1xufSAqL1xuXG5hIHtcbiAgY29sb3I6ICM2YTVlZmY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 95698:
/*!******************************************************!*\
  !*** ./src/app/modules/common/about/about.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 29366);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-routing.module */ 33949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);




class AboutModule {
  static #_ = this.ɵfac = function AboutModule_Factory(t) {
    return new (t || AboutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AboutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_1__.AboutRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutModule, {
    declarations: [_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_1__.AboutRoutingModule],
    exports: [_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent]
  });
})();

/***/ })

};
;
//# sourceMappingURL=698.js.map