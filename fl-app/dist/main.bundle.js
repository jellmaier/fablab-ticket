webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistic_statistic_component__ = __webpack_require__("../../../../../src/app/statistic/statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_terminallogin_terminallogin_component__ = __webpack_require__("../../../../../src/app/login/terminallogin/terminallogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_nfclogin_nfclogin_component__ = __webpack_require__("../../../../../src/app/login/nfclogin/nfclogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_guards_login_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/login-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/terminallogin', pathMatch: 'full' },
    //{ path: 'detail/:id', component: HeroDetailComponent },
    { path: 'terminallogin', canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_guards_login_guard_service__["b" /* IsTerminalGuard */]], component: __WEBPACK_IMPORTED_MODULE_4__login_terminallogin_terminallogin_component__["a" /* TerminalLoginComponent */] },
    { path: 'loginnfc', canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_guards_login_guard_service__["b" /* IsTerminalGuard */]], component: __WEBPACK_IMPORTED_MODULE_5__login_nfclogin_nfclogin_component__["a" /* NfcloginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_login_component__["a" /* LoginComponent */] },
    { path: 'statistic', component: __WEBPACK_IMPORTED_MODULE_2__statistic_statistic_component__["a" /* StatisticComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "\n    <ng-progress [color]=\"'#028F76'\" [spinner]=\"false\"></ng-progress>\n    <nav>\n      <a routerLink=\"/terminallogin\" routerLinkActive=\"active\">TerminalLogin</a>\n      <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n      <a routerLink=\"/statistic\" routerLinkActive=\"active\">Statistic</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//<ng-progress [color]="'#028F76'" [showSpinner]="false"></ng-progress> 


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_progressbar_core__ = __webpack_require__("../../../../@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_progressbar_http_client__ = __webpack_require__("../../../../@ngx-progressbar/http-client/esm5/ngx-progressbar-http-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__statistic_statistic_service__ = __webpack_require__("../../../../../src/app/statistic/statistic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__statistic_statistic_component__ = __webpack_require__("../../../../../src/app/statistic/statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__statistic_chart_service__ = __webpack_require__("../../../../../src/app/statistic/chart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_http_interceptor_service__ = __webpack_require__("../../../../../src/app/services/http-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_terminallogin_terminallogin_component__ = __webpack_require__("../../../../../src/app/login/terminallogin/terminallogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_nfclogin_nfclogin_component__ = __webpack_require__("../../../../../src/app/login/nfclogin/nfclogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_register_register_component__ = __webpack_require__("../../../../../src/app/login/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_guards_login_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/login-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_terminal_service__ = __webpack_require__("../../../../../src/app/services/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// d3 and nvd3 should be included somewhere








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_progressbar_core__["b" /* NgProgressModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ngx_progressbar_http_client__["a" /* NgProgressHttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_nvd3__["NvD3Module"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__statistic_statistic_component__["a" /* StatisticComponent */],
                __WEBPACK_IMPORTED_MODULE_19__login_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__login_nfclogin_nfclogin_component__["a" /* NfcloginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__login_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__login_terminallogin_terminallogin_component__["a" /* TerminalLoginComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__statistic_statistic_service__["a" /* StatisticService */],
                __WEBPACK_IMPORTED_MODULE_10__statistic_chart_service__["a" /* ChartService */],
                __WEBPACK_IMPORTED_MODULE_11__services_http_service__["a" /* HttpService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_12__services_http_interceptor_service__["a" /* HttpInterceptorService */], multi: true },
                __WEBPACK_IMPORTED_MODULE_14__services_app_api_service__["a" /* AppApiService */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_23__services_guards_login_guard_service__["a" /* IsLoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_23__services_guards_login_guard_service__["b" /* IsTerminalGuard */],
                __WEBPACK_IMPORTED_MODULE_24__services_terminal_service__["a" /* TerminalService */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_cookie_service__["a" /* CookieService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"message\" class=\"message-box\">\n  <p>Du bist nicht eingeloggt!</p>\n  <a href=\"{{appApiService.getBlogUrl()}}/login?redirect_to=' . get_permalink($post->ID) . '\" style=\"margin-right:20px;\">\n  <input type=\"submit\"  value=\"Login\"/></a>\n  <a href=\"{{appApiService.getBlogUrl()}}/wp-login.php?action=register\">\n  <input type=\"submit\"  value=\"Register\"/></a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(appApiService) {
        this.appApiService = appApiService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_app_api_service__["a" /* AppApiService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/nfclogin/nfclogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.login-form label, .login-form input {\n    display: block;\n}\n\n/* ------------------------------------------------------------ */\n/* overlay style */\n/* ------------------------------------------------------------ */\n\n.nfc-token {\n    opacity: 0; \n    position: absolute;\n}\n\n.nfc-overlay p {\n    margin: 0;\n    margin-bottom: 6px;\n    color: #028F76;\n}\n\n\n.nfc-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    right: 0;\n    top: 0;\n    overflow-x: hidden;\n    overflow-y: auto;\n    z-index: 10012;\n}\n\n.nfc-overlay-background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n    right: 0;\n    top: 0;\n    z-index: 10010;\n}\n\n/* NFC Overlay */\n\n.nfc-overlay-content {\n    width: 70%;\n    position: relative;\n    margin: 150px auto; \n    padding: 30px 30px 30px;\n    background-color: #fdfdfd;\n    border: 7px solid #ccc;\n    border-radius: 8px;\n    z-index: 10013; /* 1px higher than the overlay layer */\n}\n\n@media all and (min-width: 800px) {\n    .nfc-overlay-content {\n        width: 650px;\n    }\n}\n\n@media all and (max-height: 800px) {\n    .nfc-overlay-content {\n        margin: 50px auto;\n    }\n}\n\n.nfc-overlay-content .close {\n    margin: -20px -14px;\n    float: right;\n    text-align: right;\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 1;\n    opacity: 0.3;\n    text-decoration: none;  \n}\n.nfc-overlay-content .close:hover {\n    cursor: pointer;\n    opacity: 0.5;\n}\n\n.nfc-overlay-content h2 {\n    margin-top: 6px;\n    margin-bottom: 14px;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n}\n\n.nfc-overlay-content img{\n    max-width: 100%;\n    height: auto;\n    vertical-align: middle;\n    border: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/nfclogin/nfclogin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"entry-title\">NFC-Login</h1>\n<div class=\"nfc-overlay-content\" >\n  <h2>Jetzt Karte auflegen</h2>     \n    <p>Achtung: Du musst die Karte zuerst zu deinem Account hinzufügen!</p>  <!-- totranslete class=\"nfc-token\"-->\n    <p>{{nfc_login_message}}</p>\n    <form #f=\"ngForm\" (keyup.enter)=\"submitCheckToken(f)\" class=\"nfc-token\" novalidate>\n      <input name=\"token\" autocomplete=\"off\" ngModel autofocus>\n    </form>\n    <img src=\"{{appApiService.getBlogUrl()}}/wp-content/plugins/fablab-ticket/plugins/nfc-login/tucard.jpg\"/> \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/nfclogin/nfclogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NfcloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NfcloginComponent = (function () {
    function NfcloginComponent(httpService, appApiService) {
        this.httpService = httpService;
        this.appApiService = appApiService;
    }
    NfcloginComponent.prototype.ngOnInit = function () {
        //this.httpService.getTerminalToken();
    };
    NfcloginComponent.prototype.submitCheckToken = function (nfc_form) {
        var _this = this;
        console.log(nfc_form.controls['token'].value);
        this.httpService.checkLoginToken(nfc_form.controls['token'].value).subscribe(function (data) {
            _this.nfc_login_message = "Karte gefunden!";
            _this.refresh();
        }, function (err) {
            console.log(err);
            _this.nfc_login_message = "Karte nicht gefunden, bitte versuche es erneut!";
        });
        nfc_form.reset();
    };
    NfcloginComponent.prototype.refresh = function () {
        window.location.reload();
    };
    NfcloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nfclogin',
            template: __webpack_require__("../../../../../src/app/login/nfclogin/nfclogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/nfclogin/nfclogin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2_app_services_app_api_service__["a" /* AppApiService */]])
    ], NfcloginComponent);
    return NfcloginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/login/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/login/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/terminallogin/terminallogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.login-form label, .login-form input {\n    display: block;\n}\n\n/* ------------------------------------------------------------ */\n/* overlay style */\n/* ------------------------------------------------------------ */\n\n.nfc-token {\n    opacity: 0; \n    position: absolute;\n}\n\n.nfc-overlay p {\n    margin: 0;\n    margin-bottom: 6px;\n    color: #028F76;\n}\n\n\n.nfc-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    right: 0;\n    top: 0;\n    overflow-x: hidden;\n    overflow-y: auto;\n    z-index: 10012;\n}\n\n.nfc-overlay-background {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.5);\n    right: 0;\n    top: 0;\n    z-index: 10010;\n}\n\n/* NFC Overlay */\n\n.nfc-overlay-content {\n    width: 70%;\n    position: relative;\n    margin: 150px auto; \n    padding: 30px 30px 30px;\n    background-color: #fdfdfd;\n    border: 7px solid #ccc;\n    border-radius: 8px;\n    z-index: 10013; /* 1px higher than the overlay layer */\n}\n\n@media all and (min-width: 800px) {\n    .nfc-overlay-content {\n        width: 650px;\n    }\n}\n\n@media all and (max-height: 800px) {\n    .nfc-overlay-content {\n        margin: 50px auto;\n    }\n}\n\n.nfc-overlay-content .close {\n    margin: -20px -14px;\n    float: right;\n    text-align: right;\n    font-size: 18px;\n    font-weight: bold;\n    line-height: 1;\n    opacity: 0.3;\n    text-decoration: none;  \n}\n.nfc-overlay-content .close:hover {\n    cursor: pointer;\n    opacity: 0.5;\n}\n\n.nfc-overlay-content h2 {\n    margin-top: 6px;\n    margin-bottom: 14px;\n    font-weight: bold;\n    letter-spacing: 0.5px;\n}\n\n.nfc-overlay-content img{\n    max-width: 100%;\n    height: auto;\n    vertical-align: middle;\n    border: 0;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/terminallogin/terminallogin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"entry-title\">Login</h1>\n<p>{{login_message}}</p>\n<form #loginform=\"ngForm\" (ngSubmit)=\"submitLogin(loginform)\" class=\"login-form\" novalidate>\n  <label for=\"loginInput\">Username:</label>  \n  <input name=\"login\" type=\"text\" id=\"loginInput\" ngModel>\n  <label for=\"passwordInput\">Password:</label>\n  <input name=\"password\" type=\"password\" id=\"passwordInput\" ngModel>\n  <button type=\"submit\">Login</button>  \n</form>\n\n<input  style=\"margin-top:10px;\" (click)=\"showHideNfcLogin()\" type=\"submit\"  value=\"Login with NFC-Card\"/>\n<!-- Overlay -->\n<div class=\"nfc-overlay\" *ngIf=\"showNfcLogin\">\n  <div class=\"nfc-overlay-content\" *ngIf=\"showNfcLogin\">\n    <a (click)=\"showHideNfcLogin(false)\" class=\"close\">x</a>\n    <h2>Jetzt Karte auflegen</h2>     \n      <p>Achtung: Du musst die Karte zuerst zu deinem Account hinzufügen!</p>  <!-- totranslete class=\"nfc-token\"-->\n      <p>{{nfc_login_message}}</p>\n      <form #f=\"ngForm\" (keyup.enter)=\"submitCheckToken(f)\" class=\"nfc-token\" novalidate>\n        <input name=\"token\" autocomplete=\"off\" ngModel autofocus>\n      </form>\n      <img src=\"{{appApiService.getBlogUrl()}}/wp-content/plugins/fablab-ticket/plugins/nfc-login/tucard.jpg\"/> \n  </div>\n  <div class=\"nfc-overlay-background\" (click)=\"showHideNfcLogin(false)\"></div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/terminallogin/terminallogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TerminalLoginComponent = (function () {
    function TerminalLoginComponent(httpService, appApiService) {
        this.httpService = httpService;
        this.appApiService = appApiService;
        this.showNfcLogin = false;
    }
    TerminalLoginComponent.prototype.ngOnInit = function () {
    };
    TerminalLoginComponent.prototype.showHideNfcLogin = function (val) {
        if (val === void 0) { val = null; }
        if (val == null)
            this.showNfcLogin = !this.showNfcLogin;
        else
            this.showNfcLogin = val;
    };
    TerminalLoginComponent.prototype.submitLogin = function (login_form) {
        var _this = this;
        var username = login_form.controls['login'].value;
        var password = login_form.controls['password'].value;
        console.log(username);
        console.log(password);
        this.httpService.checkLogin(username, password).subscribe(function (data) {
            _this.refresh();
        }, function (err) {
            _this.login_message = err.error.message;
        });
    };
    TerminalLoginComponent.prototype.submitCheckToken = function (nfc_form) {
        var _this = this;
        console.log(nfc_form.controls['token'].value);
        this.httpService.checkLoginToken(nfc_form.controls['token'].value).subscribe(function (data) {
            _this.nfc_login_message = "Karte gefunden!";
            _this.refresh();
        }, function (err) {
            console.log(err);
            _this.nfc_login_message = "Karte nicht gefunden, bitte versuche es erneut!";
        });
        nfc_form.reset();
    };
    TerminalLoginComponent.prototype.refresh = function () {
        window.location.reload();
    };
    TerminalLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/terminallogin/terminallogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/terminallogin/terminallogin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_2_app_services_app_api_service__["a" /* AppApiService */]])
    ], TerminalLoginComponent);
    return TerminalLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/AppAPI.json":
/***/ (function(module, exports) {

module.exports = {"blog_url":"http://127.0.0.1/wordpress","templates_url":"http://127.0.0.1/wordpress/wp-content/plugins/fablab-ticket/views/templates/","api_url":"http://127.0.0.1/wordpress/api/","sharing_url":"http://127.0.0.1/wordpress/wp-json/sharepl/v1/","nonce":"c694a76626"}

/***/ }),

/***/ "../../../../../src/app/services/app-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppAPI_json__ = __webpack_require__("../../../../../src/app/services/AppAPI.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppAPI_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AppAPI_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_json__ = __webpack_require__("../../../../../src/app/services/user.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__user_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppApiService = (function () {
    function AppApiService() {
        this.loadApiData();
    }
    AppApiService.prototype.loadApiData = function () {
        this.is_dev_mode = (typeof AppAPI === 'undefined');
        if (this.is_dev_mode) {
            this.app_api = __WEBPACK_IMPORTED_MODULE_1__AppAPI_json__;
            this.user = __WEBPACK_IMPORTED_MODULE_2__user_json__["admin"]; // switch between admin and user
        }
        else {
            console.log('Runing in Embadded-Mode');
            this.app_api = AppAPI;
        }
    };
    // getter Methods
    AppApiService.prototype.getBlogUrl = function () {
        return this.app_api.blog_url;
    };
    AppApiService.prototype.getTemplatesUrl = function () {
        return this.app_api.templates_url;
    };
    AppApiService.prototype.getApiUrl = function () {
        return this.app_api.api_url;
    };
    AppApiService.prototype.getPluginApiUrl = function () {
        return this.app_api.sharing_url;
    };
    AppApiService.prototype.getNonce = function () {
        return this.app_api.nonce;
    };
    AppApiService.prototype.isDevMode = function () {
        return this.is_dev_mode;
    };
    AppApiService.prototype.getAutentificationToken = function () {
        return btoa(this.user.username + ":" + this.user.password);
    };
    // AppConnect methods
    AppApiService.prototype.setAppConnect = function (data) {
        this.app_connect = data;
    };
    AppApiService.prototype.isAppConnectLoaded = function () {
        return (this.app_connect != null);
    };
    AppApiService.prototype.isTerminal = function () {
        return this.app_connect.is_terminal;
    };
    AppApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppApiService);
    return AppApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/guards/login-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInGuard; });
/* unused harmony export IsAdminGuard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IsTerminalGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terminal_service__ = __webpack_require__("../../../../../src/app/services/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IsLoggedInGuard = (function () {
    function IsLoggedInGuard() {
    }
    IsLoggedInGuard.prototype.canActivate = function () {
        console.log('AuthGuard#canActivate called');
        return false;
    };
    IsLoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], IsLoggedInGuard);
    return IsLoggedInGuard;
}());

var IsAdminGuard = (function () {
    function IsAdminGuard() {
    }
    IsAdminGuard.prototype.canActivate = function () {
        console.log('AuthGuard#canActivate called');
        return false;
    };
    IsAdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], IsAdminGuard);
    return IsAdminGuard;
}());

var IsTerminalGuard = (function () {
    function IsTerminalGuard(appApiService, terminalService, router) {
        this.appApiService = appApiService;
        this.terminalService = terminalService;
        this.router = router;
    }
    IsTerminalGuard.prototype.canActivate = function () {
        console.log('AuthGuard#canActivate called');
        if (!this.terminalService.hasTerminalToken()) {
            this.router.navigate(['/login']);
            return false;
        }
        if (this.appApiService.isAppConnectLoaded()) {
            return this.appApiService.isTerminal();
        }
        return this.terminalService.checkTerminalToken().map(function (data) { return data.is_terminal; });
        // Navigate to the login page with extras
        //this.router.navigate(['/login']);
        //return false;
    };
    IsTerminalGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_api_service__["a" /* AppApiService */],
            __WEBPACK_IMPORTED_MODULE_4__terminal_service__["a" /* TerminalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], IsTerminalGuard);
    return IsTerminalGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/http-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpInterceptorService = (function () {
    function HttpInterceptorService(appApiService) {
        this.appApiService = appApiService;
    }
    HttpInterceptorService.prototype.intercept = function (req, next) {
        // Clone the request to add the new header.
        var authReq = req.clone({ setHeaders: this.httpAuthHeader() });
        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);
    };
    HttpInterceptorService.prototype.httpAuthHeader = function () {
        if (this.appApiService.isDevMode()) {
            return { 'Authorization': "Basic " + this.appApiService.getAutentificationToken() };
        }
        else {
            return { 'X-WP-Nonce': this.appApiService.getNonce() };
        }
    };
    HttpInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_api_service__["a" /* AppApiService */]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import 'rxjs/add/operator/toPromise';
var HttpService = (function () {
    function HttpService(http, appApiService) {
        this.http = http;
        this.appApiService = appApiService;
    }
    //--------  terminal_token  -----------------------
    HttpService.prototype.checkTerminalToken = function (terminal_token) {
        var _this = this;
        var url = this.appApiService.getPluginApiUrl() + 'check_terminal_token';
        return this.http.get(url, {
            params: { token: terminal_token }
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this.handleHttpError(err)); });
    };
    HttpService.prototype.getTerminalToken = function () {
        var _this = this;
        var url = this.appApiService.getPluginApiUrl() + 'get_terminal_token';
        return this.http.get(url)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this.handleHttpError(err)); });
    };
    // -------  Login Methods  ------------------------
    HttpService.prototype.checkLogin = function (login, password) {
        var url = this.appApiService.getPluginApiUrl() + 'check_user_login';
        return this.http.get(url, {
            params: { username: login, password: password }
        }); //.catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));
    };
    HttpService.prototype.checkLoginToken = function (submitcode) {
        var _this = this;
        var url = this.appApiService.getPluginApiUrl() + 'check_nfc_token';
        return this.http.get(url, {
            params: { token: submitcode }
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this.handleHttpError(err)); });
    };
    // -------  get Statistic Data  ------------------------
    HttpService.prototype.getStatisticOf = function (start, end) {
        var _this = this;
        var url = this.appApiService.getPluginApiUrl() + 'statistic';
        //let statisticUrl = 'http://fablab.tugraz.at/wp-json/sharepl/v1/statistic';
        return this.http.get(url, {
            params: {
                start_date: start,
                end_date: end
            }
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_this.handleHttpError(err)); });
    };
    // -------  handleErrors  ------------------------
    HttpService.prototype.handleHttpError = function (err) {
        console.log(err);
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log("Backend returned code " + err.status + ", body was: " + err.error.message);
        }
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__app_api_service__["a" /* AppApiService */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/app/services/terminal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TerminalService = (function () {
    function TerminalService(appApiService, httpService, cookieService) {
        this.appApiService = appApiService;
        this.httpService = httpService;
        this.cookieService = cookieService;
        //this.setTerminalToken();
        this.loadTerminalToken();
    }
    TerminalService.prototype.setTerminalToken = function () {
        var _this = this;
        this.httpService.getTerminalToken().subscribe(function (data) {
            _this.cookieService.set('terminal_token', data, 180);
        });
    };
    TerminalService.prototype.deleteTerminalToken = function () {
        this.cookieService.delete('terminal_token');
    };
    TerminalService.prototype.loadTerminalToken = function () {
        var _this = this;
        this.checkTerminalToken().subscribe(function (data) {
            _this.appApiService.setAppConnect(data);
        });
    };
    TerminalService.prototype.hasTerminalToken = function () {
        return this.cookieService.check('terminal_token');
    };
    TerminalService.prototype.checkTerminalToken = function () {
        var cookie_value = this.cookieService.get('terminal_token');
        return this.httpService.checkTerminalToken(cookie_value);
    };
    TerminalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_api_service__["a" /* AppApiService */],
            __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]])
    ], TerminalService);
    return TerminalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.json":
/***/ (function(module, exports) {

module.exports = {"admin":{"username":"admin","password":"10202911"},"user":{"username":"jakob","password":"10202911"}}

/***/ }),

/***/ "../../../../../src/app/statistic/chart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartService = (function () {
    function ChartService() {
    }
    // from 
    // https://github.com/krispo/ng2-nvd3
    // http://krispo.github.io/ng2-nvd3/
    // http://krispo.github.io/angular-nvd3/#/pieChart
    ChartService.prototype.getOptions = function () {
        return {
            chart: {
                type: 'pieChart',
                height: 300,
                donut: true,
                x: function (d) { return d.name; },
                y: function (d) { return d.number; },
                color: function (d) { return d.color; },
                showLabels: false,
                labelsOutside: true,
                donutRatio: 0.65,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 0,
                        bottom: 10,
                        left: 0
                    },
                    rightAlign: false
                }
            }
        };
    };
    ;
    ChartService.prototype.getData = function () {
        return [{ "id": 29, "name": "3D Drucker", "color": "#AEDE1A", "number": 1, "duration": 1 },
            { "id": 28, "name": "CNC-Fr\u00e4se", "color": "#2B79DE", "number": 1, "duration": 1 },
            { "id": 27, "name": "Lasercutter", "color": "#F6831E", "number": 1, "duration": 1 },
            { "id": 31, "name": "Sandstrahlmaschine", "color": "#449ACD", "number": 1, "duration": 1 },
            { "id": 30, "name": "Vinylcutter", "color": "#860090", "number": 1, "duration": 1 }
        ];
    };
    ChartService.prototype.getlinechartoptions = function () {
        return {
            chart: {
                type: 'lineChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function (d) { return d.x; },
                y: function (d) { return d.y; },
                interpolate: "cardinal",
                useInteractiveGuideline: true,
                refreshDataOnly: true,
                deepWatchOptions: true,
                deepWatchData: true,
                dispatch: {
                    stateChange: function (e) { console.log("stateChange"); },
                    changeState: function (e) { console.log("changeState"); },
                    tooltipShow: function (e) { console.log("tooltipShow"); },
                    tooltipHide: function (e) { console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Woche'
                },
                yAxis: {
                    axisLabel: 'User',
                    axisLabelDistance: -10
                }
            },
            title: {
                enable: true,
                text: 'Title for Line Chart'
            }
        };
    };
    ;
    ChartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ChartService);
    return ChartService;
}());



/***/ }),

/***/ "../../../../../src/app/statistic/statistic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".statistic-box{\n    height: 100%;\n    border: 1px solid #eee;\n    box-shadow: 0px 0px 5px #eee;\n    background-color: #fff;\n    margin: 10px;\n    float: left;\n    position: relative;\n}\n\n.trend-box{\n    width: 800px;\n}\n\n.box{\n    width: 400px;\n}\n\n.box-header {\n    padding: 20px 20px 10px 20px;\n}\n\n.box-header h3{\n    margin:0;\n    border-bottom: solid 3px #028F76;\n    display: inline-block;\n}\n\n.box-content {\n    height: 100%;\n    padding: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/statistic/statistic.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Statistic</h1>  \n<div class=\"statistic-box box\">\n  <div class=\"box-header\">\n  \t<h3>Wochennutzung</h3>\n    <button (click)=\"checkLoadAndSetData(false)\">-</button>\n    <button (click)=\"checkLoadAndSetData(true)\">+</button>\n  </div>\n  <div class=\"box-content\">\n  \t <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n     <p>{{currentWeek}}</p>\n  </div>\n</div>\n<div class=\"statistic-box trend-box\">\n  <div class=\"box-header\">\n  \t<h3>Nutzungsverlauf</h3>\n  </div>\n  <div class=\"box-content\">\n  \t <nvd3 #linechart [options]=\"linechartoptions\" [data]=\"datatrend\"></nvd3>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/statistic/statistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__statistic_service__ = __webpack_require__("../../../../../src/app/statistic/statistic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_service__ = __webpack_require__("../../../../../src/app/statistic/chart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatisticComponent = (function () {
    function StatisticComponent(statisticService, chartService, datePipe) {
        this.statisticService = statisticService;
        this.chartService = chartService;
        this.datePipe = datePipe;
        this.index = 0;
    }
    StatisticComponent.prototype.checkLoadAndSetData = function (increment) {
        var _this = this;
        if (increment)
            this.index++;
        else
            this.index--;
        if (this.datatrend[0].values.find(function (x) { return x.x == _this.index; }))
            this.setData();
        else {
            console.log('noentry');
            var weeknuber = -this.index;
            this.loadStatistic(this.getWeek(weeknuber), weeknuber, true);
            return;
        }
    };
    StatisticComponent.prototype.setData = function () {
        var _this = this;
        var data = [];
        console.log(this.datatrend);
        for (var _i = 0, _a = this.datatrend; _i < _a.length; _i++) {
            var entry = _a[_i];
            var dataentry = entry.values.find(function (x) { return x.x == _this.index; });
            data.push({
                name: entry.key,
                color: entry.color,
                number: dataentry.y
            });
            this.currentWeek = dataentry.label;
        }
        this.data = data;
    };
    StatisticComponent.prototype.getWeek = function (earlierWeeks) {
        var current = new Date(); // get current date   
        var weekend = current.getDate() - current.getDay() - (earlierWeeks * 7); // day 0 is sunday 
        var weekstart = weekend - 6; // end day is the first day + 6 	
        var monday = new Date(current.setDate(weekstart));
        current = new Date(); // reset current date
        var sunday = new Date(current.setDate(weekend));
        var week = {
            monday: monday,
            sunday: sunday
        };
        return week;
    };
    StatisticComponent.prototype.addStatisticData = function (data, week, offset) {
        var string = Number(this.datePipe.transform(week.monday, 'yyMMdd'));
        var _loop_1 = function (entry) {
            if (this_1.datatrend.find(function (x) { return x.key == entry.name; })) {
                // push data to existing entry
                this_1.datatrend.find(function (x) { return x.key == entry.name; }).values
                    .push({ x: -offset, y: entry.number, label: this_1.getWeekString(week) });
                this_1.datatrend.find(function (x) { return x.key == entry.name; }).values.sort(function (a, b) {
                    return d3.ascending(a.x, b.x);
                });
            }
            else {
                //create new entry
                this_1.datatrend.push({
                    key: entry.name,
                    values: [{ x: -offset, y: entry.number,
                            label: this_1.getWeekString(week)
                        }],
                    color: entry.color
                });
            }
        };
        var this_1 = this;
        // week.monday | date :'fullDate');
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var entry = data_1[_i];
            _loop_1(entry);
        }
        this.linechart.chart.update();
    };
    StatisticComponent.prototype.getWeekString = function (week) {
        return week.monday.toDateString() + ' - ' + week.sunday.toDateString();
    };
    StatisticComponent.prototype.loadStatistic = function (week, offset, setData) {
        var _this = this;
        if (setData === void 0) { setData = false; }
        this.statisticService.getStatisticOfWeek(week)
            .subscribe(function (data) {
            _this.data = data;
            _this.addStatisticData(data, week, offset);
            if (setData)
                _this.setData();
        });
    };
    StatisticComponent.prototype.ngOnInit = function () {
        this.datatrend = [];
        this.options = this.chartService.getOptions();
        this.data = this.chartService.getData();
        this.linechartoptions = this.chartService.getlinechartoptions();
        for (var i = 0; i < 12; i++)
            this.loadStatistic(this.getWeek(i), i);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('linechart'),
        __metadata("design:type", Object)
    ], StatisticComponent.prototype, "linechart", void 0);
    StatisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistic',
            template: __webpack_require__("../../../../../src/app/statistic/statistic.component.html"),
            styles: [__webpack_require__("../../../../nvd3/build/nv.d3.css"), __webpack_require__("../../../../../src/app/statistic/statistic.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__statistic_service__["a" /* StatisticService */],
            __WEBPACK_IMPORTED_MODULE_2__chart_service__["a" /* ChartService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
    ], StatisticComponent);
    return StatisticComponent;
}());



/***/ }),

/***/ "../../../../../src/app/statistic/statistic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticService = (function () {
    function StatisticService(httpService) {
        this.httpService = httpService;
        this.statisticUrl = 'http://fablab.tugraz.at/wp-json/sharepl/v1/statistic'; // URL to web api
    }
    StatisticService.prototype.getStatisticOfWeek = function (week) {
        return this.httpService.getStatisticOf(this.getDateString(week.monday), this.getDateString(week.sunday));
    };
    StatisticService.prototype.getDateString = function (date) {
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    };
    StatisticService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_http_service__["a" /* HttpService */]])
    ], StatisticService);
    return StatisticService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map