"use strict";
exports.id = 234;
exports.ids = [234];
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

/***/ 23782:
/*!***********************************************************!*\
  !*** ./src/app/components/svg-link/svg-link.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgLinkComponent": () => (/* binding */ SvgLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class SvgLinkComponent {
  static #_ = this.ɵfac = function SvgLinkComponent_Factory(t) {
    return new (t || SvgLinkComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SvgLinkComponent,
    selectors: [["app-svg-link"]],
    decls: 2,
    vars: 0,
    consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "external-link-alt", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-external-link-alt", "fa-w-16"], ["fill", "currentColor", "d", "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"]],
    template: function SvgLinkComponent_Template(rf, ctx) {
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

/***/ 95966:
/*!*****************************************************************!*\
  !*** ./src/app/modules/application/news/news-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsRoutingModule": () => (/* binding */ NewsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.component */ 38962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);




const routes = [{
  path: "",
  component: _news_component__WEBPACK_IMPORTED_MODULE_0__.NewsComponent
}];
class NewsRoutingModule {
  static #_ = this.ɵfac = function NewsRoutingModule_Factory(t) {
    return new (t || NewsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NewsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NewsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 56042:
/*!****************************************************************************!*\
  !*** ./src/app/modules/application/news/news-services/nyt-news.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NytNewsService": () => (/* binding */ NytNewsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 55010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8746);



const apiUrl = "https://api.nytimes.com/svc/topstories/v2/home.json?";
const apiKey = process.env.NYT_NEWS_KEY;
// const apiKey = "DEV API KEY HERE"
class NytNewsService {
  constructor(http) {
    this.http = http;
  }
  getNews() {
    const newsUrl = `${apiUrl}api-key=${apiKey}`;
    return this.http.get(newsUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => res.results), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(err => {
      throw "error in getting API data. Details: " + err;
    }));
  }
  static #_ = this.ɵfac = function NytNewsService_Factory(t) {
    return new (t || NytNewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NytNewsService,
    factory: NytNewsService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 38962:
/*!************************************************************!*\
  !*** ./src/app/modules/application/news/news.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _news_services_nyt_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-services/nyt-news.service */ 56042);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _components_svg_calender_svg_calender_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/svg-calender/svg-calender.component */ 95067);
/* harmony import */ var _components_svg_link_svg_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/svg-link/svg-link.component */ 23782);
/* harmony import */ var _pipes_date_convert_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/date-convert.pipe */ 99395);






function NewsComponent_div_4_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const article_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", article_r1.abstract, " ");
  }
}
function NewsComponent_div_4_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-svg-calender");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "dateConvert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const article_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, article_r1.created_date), " ");
  }
}
function NewsComponent_div_4_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-svg-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " article");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const article_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", article_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function NewsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7)(4, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NewsComponent_div_4_p_6_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 10)(8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NewsComponent_div_4_p_9_Template, 4, 3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, NewsComponent_div_4_p_10_Template, 4, 1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", article_r1.multimedia ? article_r1.multimedia[2].url : "/assets/svgs/nyt.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", article_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", article_r1.abstract);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", article_r1.created_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", article_r1.url);
  }
}
class NewsComponent {
  constructor(newsService) {
    this.newsService = newsService;
  }
  ngOnInit() {
    this.getNytNews();
  }
  getNytNews() {
    this.mArticles$ = this.newsService.getNews();
  }
  newsTrackbyFn(index, item) {
    return item.newsId;
  }
  static #_ = this.ɵfac = function NewsComponent_Factory(t) {
    return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_news_services_nyt_news_service__WEBPACK_IMPORTED_MODULE_0__.NytNewsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NewsComponent,
    selectors: [["app-news"]],
    decls: 6,
    vars: 4,
    consts: [["name", "description", "content", "Shows New York Times News API data"], [1, "main-div"], [1, "row"], ["class", "mb-4 col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "mb-4", "col-12", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-3"], [1, "card", "full-height"], ["alt", "news article", 1, "card-img-top", 3, "src"], [1, "p-2", "card-body"], [1, "card-title"], ["class", "mb-0 card-text", 4, "ngIf"], [1, "p-2", "card-footer", "backgroundSecondaryBlue"], [1, "d-flex", "justify-content-around"], ["class", "footer-text", 4, "ngIf"], ["class", "mb-0 link-text", 4, "ngIf"], [1, "mb-0", "card-text"], [1, "footer-text"], [1, "mb-0", "link-text"], ["target", "_blank", "rel", "noopener noreferrer", "alt", "link for news article", "aria-label", "link for news article", 1, "text-light", 3, "href"]],
    template: function NewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NewsComponent_div_4_Template, 11, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, ctx.mArticles$))("ngForTrackBy", ctx.newsTrackbyFn);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_svg_calender_svg_calender_component__WEBPACK_IMPORTED_MODULE_1__.SvgCalenderComponent, _components_svg_link_svg_link_component__WEBPACK_IMPORTED_MODULE_2__.SvgLinkComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _pipes_date_convert_pipe__WEBPACK_IMPORTED_MODULE_3__.DateConvertPipe],
    styles: [".main-div[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  padding: 0 !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: auto auto;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\np.card-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 0 !important;\n}\n\np.footer-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 0 !important;\n  color: white;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceURL=webpack://./src/app/modules/application/news/news.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IGF1dG8gYXV0bztcbn1cblxuLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5wLmNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG5wLmZvb3Rlci10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 94234:
/*!*********************************************************!*\
  !*** ./src/app/modules/application/news/news.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsModule": () => (/* binding */ NewsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.component */ 38962);
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-routing.module */ 95966);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/pipes.module */ 30571);
/* harmony import */ var _components_svg_calender_svg_calender_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../components/svg-calender/svg-calender.module */ 77405);
/* harmony import */ var _components_svg_link_svg_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/svg-link/svg-link.component */ 23782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);







class NewsModule {
  static #_ = this.ɵfac = function NewsModule_Factory(t) {
    return new (t || NewsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: NewsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _news_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewsRoutingModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _components_svg_calender_svg_calender_module__WEBPACK_IMPORTED_MODULE_3__.SvgCalenderModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NewsModule, {
    declarations: [_news_component__WEBPACK_IMPORTED_MODULE_0__.NewsComponent, _components_svg_link_svg_link_component__WEBPACK_IMPORTED_MODULE_4__.SvgLinkComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _news_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewsRoutingModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _components_svg_calender_svg_calender_module__WEBPACK_IMPORTED_MODULE_3__.SvgCalenderModule],
    exports: [_news_component__WEBPACK_IMPORTED_MODULE_0__.NewsComponent]
  });
})();

/***/ })

};
;
//# sourceMappingURL=234.js.map