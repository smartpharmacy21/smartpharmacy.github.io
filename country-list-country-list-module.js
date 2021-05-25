(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["country-list-country-list-module"],{

/***/ "ESec":
/*!***************************************************!*\
  !*** ./src/app/country-list/country-list.page.ts ***!
  \***************************************************/
/*! exports provided: CountryListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListPage", function() { return CountryListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_country_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./country-list.page.html */ "sa4H");
/* harmony import */ var _country_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country-list.page.scss */ "Z5Cc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");






let CountryListPage = class CountryListPage {
    constructor(data, activatedRoute, router) {
        this.data = data;
        this.activatedRoute = activatedRoute;
        this.router = router;
        activatedRoute.params.subscribe((params) => { this.type = params['type']; this.getCountries(); });
    }
    getCountries() {
        if (this.type === 'n') {
            this.countries = this.data.getN();
        }
        if (this.type === 's') {
            this.countries = this.data.getS();
        }
        if (this.type === 'w') {
            this.countries = this.data.getW();
        }
        if (this.type === 'e') {
            this.countries = this.data.getE();
        }
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
    }
    goHome() {
        this.router.navigate(['/']);
    }
    goApt() {
        this.router.navigate(['/apteka']);
    }
    goCheck() {
        this.router.navigate(['/check']);
    }
};
CountryListPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CountryListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-country-list',
        template: _raw_loader_country_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_country_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CountryListPage);



/***/ }),

/***/ "OPkD":
/*!*****************************************************!*\
  !*** ./src/app/country-list/country-list.module.ts ***!
  \*****************************************************/
/*! exports provided: CountryListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListPageModule", function() { return CountryListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _country_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./country-list-routing.module */ "PVnl");
/* harmony import */ var _country_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country-list.page */ "ESec");
/* harmony import */ var _message_message_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message/message.module */ "3tpA");








let CountryListPageModule = class CountryListPageModule {
};
CountryListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _country_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CountryListPageRoutingModule"],
            _message_message_module__WEBPACK_IMPORTED_MODULE_7__["MessageComponentModule"],
        ],
        declarations: [_country_list_page__WEBPACK_IMPORTED_MODULE_6__["CountryListPage"]]
    })
], CountryListPageModule);



/***/ }),

/***/ "PVnl":
/*!*************************************************************!*\
  !*** ./src/app/country-list/country-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CountryListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListPageRoutingModule", function() { return CountryListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _country_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country-list.page */ "ESec");




const routes = [
    {
        path: '',
        component: _country_list_page__WEBPACK_IMPORTED_MODULE_3__["CountryListPage"]
    }
];
let CountryListPageRoutingModule = class CountryListPageRoutingModule {
};
CountryListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CountryListPageRoutingModule);



/***/ }),

/***/ "Z5Cc":
/*!*****************************************************!*\
  !*** ./src/app/country-list/country-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJ5LWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "sa4H":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/country-list/country-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title size=\"large\" *ngIf=\"type=='n'\">\n      Север\n    </ion-title>\n    <ion-title size=\"large\" *ngIf=\"type=='s'\">\n      Юг\n    </ion-title>\n    <ion-title size=\"large\" *ngIf=\"type=='w'\">\n      Запад\n    </ion-title>\n    <ion-title size=\"large\" *ngIf=\"type=='e'\">\n      Восток\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" *ngIf=\"type=='n'\">\n        Север\n      </ion-title>\n      <ion-title size=\"large\" *ngIf=\"type=='s'\">\n        Юг\n      </ion-title>\n      <ion-title size=\"large\" *ngIf=\"type=='w'\">\n        Запад\n      </ion-title>\n      <ion-title size=\"large\" *ngIf=\"type=='e'\">\n        Восток\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-list>\n    <ion-item *ngFor=\"let c of countries\" [routerLink]=\"'/message/' + c.id\" [detail]=\"false\">\n      <ion-label class=\"ion-text-wrap\">\n        <h2>\n          {{ c.name }}\n        </h2>\n      </ion-label>\n      </ion-item>\n  </ion-list>\n  <br/>\n  <ion-button (click)=\"goHome()\" expand=\"block\">На другую сторону света</ion-button>\n  <br/>\n  <ion-button (click)=\"goApt()\" color=\"success\" expand=\"block\">Аптечка путешественника</ion-button>\n  <br/>\n  <ion-button (click)=\"goCheck()\" color=\"success\" expand=\"block\">Чек лист лекарств</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=country-list-country-list-module.js.map