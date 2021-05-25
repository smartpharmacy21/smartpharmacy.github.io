(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apteka-apteka-module"],{

/***/ "8oQf":
/*!*************************************************!*\
  !*** ./src/app/apteka/apteka-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AptekaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AptekaPageRoutingModule", function() { return AptekaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apteka_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apteka.page */ "mXY9");




const routes = [
    {
        path: '',
        component: _apteka_page__WEBPACK_IMPORTED_MODULE_3__["AptekaPage"]
    }
];
let AptekaPageRoutingModule = class AptekaPageRoutingModule {
};
AptekaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AptekaPageRoutingModule);



/***/ }),

/***/ "9fy5":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apteka/apteka.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button [text]=\"getBackButtonText()\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"./assets/apte.jpg\" style=\"width: 100%;\">\n  <br/>\n  <div>\n    <P STYLE=\"margin-bottom: 0.11in\"><I>Противовирусные</I></P>\n<P STYLE=\"margin-bottom: 0.11in\">Стоимость известного\nпротивовирусного средства Тамифлю\nначинается от 1000 рублей. Отечественная\nфармакология предлагает более дешевые,\nно от того не менее сильные препараты:\nЦиклоферон (164 р.) или Кагоцел (219 р.).</P>\n<P STYLE=\"margin-bottom: 0.11in\">На фоне ослабленного\nиммунитета может проявиться «простуда»\nна губах или в области носа. Причина\nэтому – вирус герпеса. Бороться с ним\nможно при помощи мазей с действующим\nвеществом ацикловир – Зовиракс (от 300\nр.) или Ацикловир (от 19р.).</P>\n<P STYLE=\"margin-bottom: 0.11in\">Интерфероны –\nспецифические белки организма «на\nстраже здоровья». Когда своих недостаточно,\nпомогут защитники извне. Обычная Эхинацея\n(от 52 р.) может заменить Эргоферон (от\n318 р.) и другие препараты.</P>\n<P STYLE=\"margin-bottom: 0.11in\"><I>От температуры</I></P>\n<P STYLE=\"margin-bottom: 0.11in\">Температуру ниже 38.5\nградусов не стоит сбивать. Но если\nвсё-таки возникла такая необходимость,\nможно взять Парацетамол (от 14 р.) и\nаскорбиновую кислоту (от 17 р.), которые\nобладают эффектом, схожим с Колдрекс\n(от 313 р.) и Терафлю (317 р.). Если же вы\nпривыкли к вкусным порошкам «всё в 1»,\nМаксиколд (от 161 р.) станет прекрасной\nальтернативой дорогим препаратам.</P>\n<P STYLE=\"margin-bottom: 0.11in\"><I>От насморка</I></P>\n<P STYLE=\"margin-bottom: 0.11in\">Основной механизм\nдействия капель и спреев – суживание\nсосудов слизистой носа для устранения\nотечности. Некоторые из них еще и\nувлажняют слизистую. Современные\nпрепараты – Тизин, Тизин Ксило, Ксимелин,\nНазивин стоят в среднем 100-130 рублей.\nОтечественные спреи с аналогичным\nдействием – от 10 рублей (Риностоп и\nНафтизин).</P>\n<P STYLE=\"margin-bottom: 0.11in\">Для увлажнения\nслизистой подходит Виброцил (от 268 р.).\nВ некоторых случаях пара капель\nперсикового масла на стенки полости\nноса (от 23 р.) неплохо справятся с этой\nпроблемой.</P>\n<P STYLE=\"margin-bottom: 0.11in\"><I>От кашля</I></P>\n<P STYLE=\"margin-bottom: 0.11in\">Когда легкие «бурлят»,\nно с кашлем ничего не выходит наружу,\nпомогают отхаркивающие препараты.\nНаиболее известные – например, Лазолван\n– стоят от 233 рублей. К счастью, их могут\nзаменить такие лекарства как Амброксол\n(от 14 р), Мукалтин (от 6 р.) или Ацетилцистеин.\nРастительные препараты (Сироп солодки,\nот 12 р., Термопсол, от 45 р., или сироп\nподорожника, от 146 р.) тоже помогут с\nкашлем.</P>\n<P STYLE=\"margin-bottom: 0.11in\"><SPAN LANG=\"en-US\"><I>От боли\nв горле</I></SPAN></P>\n<P STYLE=\"margin-bottom: 0.11in\">Аналогом препарата\nСтрепсилс (от 200 р.) или Доктор МОМ (от\n121 р.) является Фарингосепт (от 98 р.) –\nантисептическое средство, которое уже\nмного лет представлено на отечественном\nрынке. Ингаляции на основе масла Эвкалипта\n(от 59 р.) позволят еще и увлажнить слизистые\nЛОР-органов.</P>\n<P STYLE=\"margin-bottom: 0.11in\"><I>От аллергии</I></P>\n<P STYLE=\"margin-bottom: 0.11in\">Аллергия может\nобостриться как на фоне вирусной\nинфекции, так и при первых признаках\nцветения. В таком случае, Цетризин венте\n(от 48 р.) снимет проявления аллергии\nнаравне с таблетками Кларитин (от 161 р.)\nили Зиртек (от 198 р.).</P>\n<P STYLE=\"margin-bottom: 0.11in\"><I>От боли</I></P>\n<P STYLE=\"margin-bottom: 0.11in\">Головная, женская,\nзубная – боли возникают вне сезона.\nЕсли причина боли – спазм (некоторые\nвиды головной, болезненные спазмы\nжелудка), то можно её облегчить при\nпомощи спазмолитиков – Но-Шпы (202 р.) или\nДротаверин, стоимость которого начинается\nот 59 р.</P>\n<P STYLE=\"margin-bottom: 0.11in\">Нестероидные\nпротивовоспалительные препараты (НПВС)\nподходят, когда недостаточно эффекта\nспазмолитиков или если врач целенаправленно\nназначил эту группу лекарств. Но и здесь\nесть выбор – Нурофен (от 92.) или Ибупрофен\n(от 27 р.).</P>\n<P STYLE=\"margin-bottom: 0.11in\"><I>От проблем с\nпищевариением</I></P>\n<P STYLE=\"margin-bottom: 0.11in\">Кишечник – настолько\nчувствительный орган, что реагирует\nдаже на стресс, что говорить о приеме\nбольшого количества лекарств, пусть\nдаже необходимых. И ему в таком случае\nможно помочь. Вместо таблеток Мезим (от\n122 р.) можно использовать Панкреатин (от\n35 р.), который и является действующим\nвеществом первого. Активированный\nуголь, стоимость которого начинается\nот 3 р., намного дешевле другого сорбента\n– Энтеросгеля (от 384 р.).</P>\n<P STYLE=\"margin-bottom: 0.11in\">При определенных\nпоказаниях врач может назначить\nпротиводиарейное средство. Обращаем\nвнимание, что самостоятельно принимать\nтакую группу лекарств нельзя! Единственное,\nчто вы можете сделать – спросить врача,\nможно ли вам вместо Имодиума (от 574 р.)\nпринимать недорогой Лоперамид-акрихин\n(от 28 р.).</P>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "dmxa":
/*!*****************************************!*\
  !*** ./src/app/apteka/apteka.module.ts ***!
  \*****************************************/
/*! exports provided: AptekaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AptekaPageModule", function() { return AptekaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _apteka_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apteka-routing.module */ "8oQf");
/* harmony import */ var _apteka_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apteka.page */ "mXY9");







let AptekaPageModule = class AptekaPageModule {
};
AptekaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _apteka_routing_module__WEBPACK_IMPORTED_MODULE_5__["AptekaPageRoutingModule"]
        ],
        declarations: [_apteka_page__WEBPACK_IMPORTED_MODULE_6__["AptekaPage"]]
    })
], AptekaPageModule);



/***/ }),

/***/ "jx24":
/*!*****************************************!*\
  !*** ./src/app/apteka/apteka.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHRla2EucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "mXY9":
/*!***************************************!*\
  !*** ./src/app/apteka/apteka.page.ts ***!
  \***************************************/
/*! exports provided: AptekaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AptekaPage", function() { return AptekaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_apteka_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./apteka.page.html */ "9fy5");
/* harmony import */ var _apteka_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apteka.page.scss */ "jx24");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AptekaPage = class AptekaPage {
    constructor() { }
    ngOnInit() {
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
    }
};
AptekaPage.ctorParameters = () => [];
AptekaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-apteka',
        template: _raw_loader_apteka_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_apteka_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AptekaPage);



/***/ })

}]);
//# sourceMappingURL=apteka-apteka-module.js.map