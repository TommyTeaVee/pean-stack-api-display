"use strict";
exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 2885:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/application/github/github-repos/github-repos-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubReposRoutingModule": () => (/* binding */ GithubReposRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _github_repos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-repos.component */ 23521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);




const routes = [{
  path: "",
  component: _github_repos_component__WEBPACK_IMPORTED_MODULE_0__.GithubReposComponent
}];
class GithubReposRoutingModule {
  static #_ = this.ɵfac = function GithubReposRoutingModule_Factory(t) {
    return new (t || GithubReposRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: GithubReposRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GithubReposRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 23521:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/application/github/github-repos/github-repos.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubReposComponent": () => (/* binding */ GithubReposComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _services_github_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/github.service */ 65891);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _pipes_date_convert_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../pipes/date-convert.pipe */ 99395);





function GithubReposComponent_div_7_div_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 12)(1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", repo_r1.language, " ");
  }
}
function GithubReposComponent_div_7_div_1_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "None ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function GithubReposComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11)(5, "p", 12)(6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 12)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Updated:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "dateConvert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, GithubReposComponent_div_7_div_1_p_14_Template, 4, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, GithubReposComponent_div_7_div_1_p_15_Template, 4, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const repo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Name: ", repo_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", repo_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 5, repo_r1.updated_at), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", repo_r1.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !repo_r1.language);
  }
}
function GithubReposComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GithubReposComponent_div_7_div_1_Template, 16, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const repo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", repo_r1);
  }
}
class GithubReposComponent {
  constructor(route, githubService, location) {
    this.route = route;
    this.githubService = githubService;
    this.location = location;
  }
  // on init run searchRepos function with input username from router params
  ngOnInit() {
    this.searchRepos(this.route.snapshot.params.username);
  }
  searchRepos(userName) {
    this.repos = this.githubService.getRepos(userName);
  }
  returnToUser() {
    this.location.back();
  }
  repoTrackbyFn(index, item) {
    return item.repoId;
  }
  static #_ = this.ɵfac = function GithubReposComponent_Factory(t) {
    return new (t || GithubReposComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_github_service__WEBPACK_IMPORTED_MODULE_0__.GithubService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: GithubReposComponent,
    selectors: [["app-github-repos"]],
    decls: 9,
    vars: 4,
    consts: [["name", "description", "content", "Shows repo data from the Github API"], [1, "card", "bg-light"], [1, "d-flex", "justify-content-around"], [1, "p-2"], [1, "btn", "btn-outline-dark", 3, "click"], ["class", "github-card pb-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "github-card", "pb-2"], ["class", "card rounded", 4, "ngIf"], [1, "card", "rounded"], [1, "card-header", "text-white", "backgroundSecondaryBlue"], [1, "card-title", "mb-0"], [1, "card-body", "pb-0"], [1, "mb-2"], [1, "font-weight-bold", "pr-2"], [1, "font-weight-bold", "pr-2", "mb-2"], ["class", "mb-2", 4, "ngIf"]],
    template: function GithubReposComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GithubReposComponent_Template_a_click_5_listener() {
          return ctx.returnToUser();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Back to List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, GithubReposComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 2, ctx.repos))("ngForTrackBy", ctx.repoTrackbyFn);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _pipes_date_convert_pipe__WEBPACK_IMPORTED_MODULE_1__.DateConvertPipe],
    styles: [".card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: auto auto;\n}\n/*# sourceURL=webpack://./src/app/modules/application/github/github-repos/github-repos.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hcHBsaWNhdGlvbi9naXRodWIvZ2l0aHViLXJlcG9zL2dpdGh1Yi1yZXBvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 81303:
/*!********************************************************************************!*\
  !*** ./src/app/modules/application/github/github-repos/github-repos.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubReposModule": () => (/* binding */ GithubReposModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _github_repos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github-repos.component */ 23521);
/* harmony import */ var _github_repos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-repos-routing.module */ 2885);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ 30571);
/* harmony import */ var _components_svg_github_svg_github_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/svg-github/svg-github.module */ 25343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4009);






class GithubReposModule {
  static #_ = this.ɵfac = function GithubReposModule_Factory(t) {
    return new (t || GithubReposModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: GithubReposModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _github_repos_routing_module__WEBPACK_IMPORTED_MODULE_1__.GithubReposRoutingModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _components_svg_github_svg_github_module__WEBPACK_IMPORTED_MODULE_3__.SvgGithubModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GithubReposModule, {
    declarations: [_github_repos_component__WEBPACK_IMPORTED_MODULE_0__.GithubReposComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _github_repos_routing_module__WEBPACK_IMPORTED_MODULE_1__.GithubReposRoutingModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _components_svg_github_svg_github_module__WEBPACK_IMPORTED_MODULE_3__.SvgGithubModule],
    exports: [_github_repos_component__WEBPACK_IMPORTED_MODULE_0__.GithubReposComponent]
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
//# sourceMappingURL=303.js.map