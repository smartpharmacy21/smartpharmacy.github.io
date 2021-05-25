(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Inbox\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"where\">\n    Куда отправимся?\n  </div>\n  <div class=\"compass\">\n    <div style=\"display: flex; justify-content: center;\" >\n      <div class=\"b\" (click)=\"goToN()\">\n        C\n      </div>\n    </div>\n    <div style=\"display: flex; justify-content: space-between; padding: 115px 0;\">\n    <div class=\"b\" (click)=\"goToW()\">\n      З\n    </div>\n    <div class=\"b\" (click)=\"goToE()\">\n      В\n    </div>\n    </div>\n    <div style=\"display: flex; justify-content: center;\" >\n      <div class=\"b\" (click)=\"goToS()\">\n        Ю\n      </div>\n    </div>\n  </div>\n  \n  <img style=\"width: 100%; margin-top: -345px;\" src=\"./assets/compass.png\">\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _message_message_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message/message.module */ "3tpA");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _message_message_module__WEBPACK_IMPORTED_MODULE_7__["MessageComponentModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".compass {\n  margin-top: 85px;\n  width: 100%;\n}\n\n.b {\n  background-color: black;\n  color: white;\n  border-radius: 3px;\n  z-index: 100;\n  font-size: 30px;\n  font-weight: 600;\n  padding: 2px;\n}\n\n.where {\n  background-color: darkorange;\n  font-size: 25px;\n  border-radius: 7px;\n  color: white;\n  font-weight: 600;\n  padding: 3px;\n  margin: 25px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhc3N7XG4gICAgbWFyZ2luLXRvcDogODVweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDJweDtcbn1cblxuLndoZXJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb3JhbmdlO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbjogMjVweCAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
    }
    goToN() {
        this.router.navigate(['/country-list', 'n']);
    }
    goToS() {
        this.router.navigate(['/country-list', 's']);
    }
    goToW() {
        this.router.navigate(['/country-list', 'w']);
    }
    goToE() {
        this.router.navigate(['/country-list', 'e']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map