webpackJsonp([4],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoPageModule", function() { return PhotoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__photo__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PhotoPageModule = (function () {
    function PhotoPageModule() {
    }
    PhotoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__photo__["a" /* PhotoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__photo__["a" /* PhotoPage */]),
            ],
        })
    ], PhotoPageModule);
    return PhotoPageModule;
}());

//# sourceMappingURL=photo.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_homework_homework__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhotoPage = (function () {
    function PhotoPage(cameraPlugin, photoProvider, loadingCtrl, camera, navCtrl, navParams) {
        var _this = this;
        this.cameraPlugin = cameraPlugin;
        this.photoProvider = photoProvider;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.onSuccess = function (snapshot) {
            _this.currentPhoto = snapshot.downloadURL;
            _this.loading.dismiss();
        };
        this.onErrors = function (error) {
            console.log(error);
            _this.loading.dismiss();
        };
    }
    PhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyphotoPage');
    };
    PhotoPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 200,
            targetWidth: 200,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.loading = _this.loadingCtrl.create({
                content: "Taking photo wait ..."
            });
            _this.loading.present();
            _this.mySelectedPhoto = _this.dataURLtoBlob('data:image/jpeg;base64,' + imageData);
            _this.upload();
        }, function (err) {
            console.log(err);
        });
    };
    PhotoPage.prototype.dataURLtoBlob = function (myURL) {
        var binary = atob(myURL.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    PhotoPage.prototype.upload = function () {
        if (this.mySelectedPhoto) {
            //var filename='sample-'+ new Date().getTime()+'.jpg';
            var uploadTask = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref().child('images/' + this.filename).put(this.mySelectedPhoto);
            uploadTask.then(this.onSuccess, this.onErrors);
        }
    };
    PhotoPage.prototype.getMyURL = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref().child('images/' + this.filename).getDownloadURL().then(function (url) {
            _this.imgSource = url;
        });
    };
    PhotoPage.prototype.gotophotolist = function () {
        this.navCtrl.push('PhotoListPage');
    };
    PhotoPage.prototype.createPost = function (photoName, Picture) {
        this.photoProvider.createPost(photoName, this.Picture);
        // this.navCtrl.setRoot(PhotoListPage);
    };
    PhotoPage.prototype.takePicture = function () {
        var _this = this;
        this.cameraPlugin
            .getPicture({
            quality: 100,
            targetHeight: 200,
            targetWidth: 200,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            //this.Picture is passing the string to our DB
            _this.Picture = imageData;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    PhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-photo',template:/*ion-inline-start:"C:\Users\duaaa\Desktop\New folder (2)\Duaa_project-master\src\pages\photo\photo.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Upload a new photo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    \n  <ion-card>\n<!--  <img src="img/nin-live.png"/>-->\n  <ion-card-content>\n    <ion-card-title>\n     Take photo\n      </ion-card-title>\n      \n      <img src= {{currentPhoto}} />\n      \n\n\n      <ion-item>\n        <ion-label stacked>Homework name </ion-label>\n        <ion-input [(ngModel)]="filename" type="text" placeholder="Id?">\n        </ion-input>\n      </ion-item>\n      \n   <button ion-button   round (click)="takePhoto()">Take Photo</button>\n   <button ion-button   round (click)="gotophotolist()">go list</button>\n\n <button ion-button   round (click)="getMyURL()">Get Photo</button>\n  <img src= {{imgSource}} />\n      \n      </ion-card-content>\n</ion-card>  \n    \n   \n\n\n\n\n<button ion-button color="primary" block (click)="takePicture()">\n  Take a Picture\n</button>\n\n<img [src]="base64Image" *ngIf="base64Image" />\n\n<ion-item>\n<ion-label stacked>Photo Caption</ion-label>\n<ion-input [(ngModel)]="photoName" type="text" placeholder="What\'s your plants\'s name?">\n</ion-input>\n</ion-item>\n\n<button ion-button block (click)=" createPost(photoName, Picture);  ">\nUpload Photo\n</button>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\duaaa\Desktop\New folder (2)\Duaa_project-master\src\pages\photo\photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers_homework_homework__["a" /* HomeworkProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PhotoPage);
    return PhotoPage;
}());

//# sourceMappingURL=photo.js.map

/***/ })

});
//# sourceMappingURL=4.js.map