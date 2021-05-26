(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-check-module"],{

/***/ "IWt8":
/*!***************************************!*\
  !*** ./src/app/check/check.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "SO6c":
/*!***********************************************!*\
  !*** ./src/app/check/check-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CheckPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPageRoutingModule", function() { return CheckPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check.page */ "owOe");




const routes = [
    {
        path: '',
        component: _check_page__WEBPACK_IMPORTED_MODULE_3__["CheckPage"]
    }
];
let CheckPageRoutingModule = class CheckPageRoutingModule {
};
CheckPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckPageRoutingModule);



/***/ }),

/***/ "dHgX":
/*!***************************************!*\
  !*** ./src/app/check/check.module.ts ***!
  \***************************************/
/*! exports provided: CheckPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPageModule", function() { return CheckPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _check_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-routing.module */ "SO6c");
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check.page */ "owOe");







let CheckPageModule = class CheckPageModule {
};
CheckPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _check_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckPageRoutingModule"]
        ],
        declarations: [_check_page__WEBPACK_IMPORTED_MODULE_6__["CheckPage"]]
    })
], CheckPageModule);



/***/ }),

/***/ "owOe":
/*!*************************************!*\
  !*** ./src/app/check/check.page.ts ***!
  \*************************************/
/*! exports provided: CheckPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPage", function() { return CheckPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_check_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./check.page.html */ "yq9Y");
/* harmony import */ var _check_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check.page.scss */ "IWt8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CheckPage = class CheckPage {
    constructor() { }
    ngOnInit() {
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Назад' : '';
    }
};
CheckPage.ctorParameters = () => [];
CheckPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-check',
        template: _raw_loader_check_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_check_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckPage);



/***/ }),

/***/ "yq9Y":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/check/check.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button [text]=\"getBackButtonText()\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"./assets/c1.jpg\" style=\"width: 100%;\">\n  <img src=\"./assets/c2.jpg\" style=\"width: 100%;\">\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=check-check-module.js.map