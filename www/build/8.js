webpackJsonp([8],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCreatePageModule", function() { return EventCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_create__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventCreatePageModule = (function () {
    function EventCreatePageModule() {
    }
    EventCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_create__["a" /* EventCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_create__["a" /* EventCreatePage */]),
            ],
        })
    ], EventCreatePageModule);
    return EventCreatePageModule;
}());

//# sourceMappingURL=event-create.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_event_event__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventCreatePage = (function () {
    function EventCreatePage(navCtrl, eventProvider) {
        this.navCtrl = navCtrl;
        this.eventProvider = eventProvider;
    }
    EventCreatePage.prototype.createEvent = function (studentName, studentId) {
        var _this = this;
        this.eventProvider
            .createEvent(studentName, studentId)
            .then(function (newEvent) {
            _this.navCtrl.pop();
        });
    };
    EventCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-create',template:/*ion-inline-start:"C:\Users\duaaa\Desktop\New folder (2)\Duaa_project-master\src\pages\event-create\event-create.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>New student</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>student Name</ion-label>\n    <ion-input [(ngModel)]="studentName" type="text" placeholder="What\'s your student name?">\n    </ion-input>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-label stacked>Student Id</ion-label>\n    <ion-input [(ngModel)]="studentId" type="number" placeholder="Id?">\n    </ion-input>\n  </ion-item>\n\n  \n  <button ion-button block (click)="createEvent(studentName, studentId)">\n    Add Student\n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\duaaa\Desktop\New folder (2)\Duaa_project-master\src\pages\event-create\event-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_event_event__["a" /* EventProvider */]])
    ], EventCreatePage);
    return EventCreatePage;
}());

//# sourceMappingURL=event-create.js.map

/***/ })

});
//# sourceMappingURL=8.js.map