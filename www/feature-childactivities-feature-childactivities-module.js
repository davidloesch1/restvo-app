(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-childactivities-feature-childactivities-module"],{

/***/ "./src/app/pages/feature/manage/feature-childactivities/feature-childactivities.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/feature/manage/feature-childactivities/feature-childactivities.module.ts ***!
  \************************************************************************************************/
/*! exports provided: FeatureChildActivitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureChildActivitiesPageModule", function() { return FeatureChildActivitiesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _feature_childactivities_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature-childactivities.page */ "./src/app/pages/feature/manage/feature-childactivities/feature-childactivities.page.ts");
/* harmony import */ var _pipes_application_pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pipes/application-pipes */ "./src/app/pipes/application-pipes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var routes = [
    {
        path: '',
        component: _feature_childactivities_page__WEBPACK_IMPORTED_MODULE_5__["FeatureChildActivitiesPage"]
    }
];
var FeatureChildActivitiesPageModule = /** @class */ (function () {
    function FeatureChildActivitiesPageModule() {
    }
    FeatureChildActivitiesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_application_pipes__WEBPACK_IMPORTED_MODULE_6__["ApplicationPipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_feature_childactivities_page__WEBPACK_IMPORTED_MODULE_5__["FeatureChildActivitiesPage"]]
        })
    ], FeatureChildActivitiesPageModule);
    return FeatureChildActivitiesPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=feature-childactivities-feature-childactivities-module.js.map