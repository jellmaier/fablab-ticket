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

/***/ "../../../../../src/app/admin/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ------------------------------------------------------------ */\n/* Checkbox toggle */\n/* source: https://www.w3schools.com/howto/howto_css_switch.asp */\n/* ------------------------------------------------------------ */\n\n /* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 34px;\n  height: 19px;\n  margin-bottom: -4px;\n  margin-left: 2px;\n  margin-right: 10px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {display:none;}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 13px;\n  width: 13px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: .2s;\n}\n\ninput:checked + .slider {\n  background-color: #AEDE1A;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #AEDE1A;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(15px);\n  transform: translateX(15px);\n}\n\n/* for Angular methodes */\n\n.active .slider {\n  background-color: #AEDE1A;\n}\n\n.active .slider:before {\n  -webkit-transform: translateX(15px);\n  transform: translateX(15px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 19px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Admin Optionen</h4>   <!-- totoranslate -->\n\n<a href=\"{{appApiService.getBlogUrl()}}/wp-admin/edit.php?post_type=device&page=fablab_options\">   \n  <input type=\"submit\" value=\"Einstellungen\" style=\"margin-bottom:12px\">\n</a>\n<br>\n<caption>This is a Login Terminal: </caption>                      <!-- totoranslate --> \n<label class=\"switch\" (click)=\"toggleIsTerminal()\" [ngClass]=\"{'active': toggle_terminal}\" >\n  <div class=\"slider round\"></div>\n</label>\n<br>\n<caption>Ticket System Online: </caption>                       <!-- totoranslate -->\n<label class=\"switch\" (click)=\"toggleTicketSystemOnline()\" [ngClass]=\"{'active': toggle_ticket_system_online}\" >\n  <div class=\"slider round\"></div>\n</label>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_terminal_service__ = __webpack_require__("../../../../../src/app/services/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    //private toggle_subscription: Subscription;
    function AdminComponent(appApiService, terminalSercie) {
        this.appApiService = appApiService;
        this.terminalSercie = terminalSercie;
        this.toggle_terminal = false;
        this.toggle_ticket_system_online = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    AdminComponent.prototype.initData = function () {
        var _this = this;
        this.appApiService.isApiDataLoaded()
            .subscribe(function (isDataLoaded) {
            if (isDataLoaded == true) {
                _this.toggle_terminal = _this.appApiService.isTerminal();
                _this.toggle_ticket_system_online = _this.appApiService.isTicketSystemOnline();
            }
        });
    };
    /*
      private loadToggleSubscription():void {
        this.toggle_subscription = this.appApiService.getTerminalObservable()
        .subscribe((isTerminal) => {
          //console.log('toggle: ' + isTerminal);
          this.toggle_terminal = isTerminal;
          if(this.count >= 5) {
            //this.toggle_subscription.unsubscribe();
          }
          this.count ++;
          
        })
      }
    
    */
    AdminComponent.prototype.ngOnDestroy = function () {
        //this.toggle_subscription.unsubscribe();
    };
    AdminComponent.prototype.toggleIsTerminal = function () {
        //this.appApiService.toggleTerminal();
        this.toggle_terminal = !this.toggle_terminal;
        this.terminalSercie.makeTerminal(this.toggle_terminal);
        //console.log(this.toggleTerminal);
    };
    AdminComponent.prototype.toggleTicketSystemOnline = function () {
        var _this = this;
        this.toggle_ticket_system_online = !this.toggle_ticket_system_online;
        this.terminalSercie.setTicketSystemOnline(this.toggle_ticket_system_online).subscribe(function (data) {
            _this.toggle_ticket_system_online = data;
        });
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_api_service__["a" /* AppApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_terminal_service__["a" /* TerminalService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistic_statistic_component__ = __webpack_require__("../../../../../src/app/statistic/statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__startpage_startpage_component__ = __webpack_require__("../../../../../src/app/startpage/startpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_register_register_component__ = __webpack_require__("../../../../../src/app/login/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_terminallogin_terminallogin_component__ = __webpack_require__("../../../../../src/app/login/terminallogin/terminallogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_nfclogin_nfclogin_component__ = __webpack_require__("../../../../../src/app/login/nfclogin/nfclogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_guards_login_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/login-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/terminallogin', pathMatch: 'full' },
    //{ path: 'detail/:id', component: HeroDetailComponent },
    { path: 'terminallogin', canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_login_guard_service__["c" /* IsNotLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_8__services_guards_login_guard_service__["d" /* IsTerminalGuard */]], component: __WEBPACK_IMPORTED_MODULE_6__login_terminallogin_terminallogin_component__["a" /* TerminalLoginComponent */] },
    { path: 'loginnfc', canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_login_guard_service__["c" /* IsNotLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_8__services_guards_login_guard_service__["d" /* IsTerminalGuard */]], component: __WEBPACK_IMPORTED_MODULE_7__login_nfclogin_nfclogin_component__["a" /* NfcloginComponent */] },
    { path: 'startpage', canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_login_guard_service__["b" /* IsLoggedInGuard */]], component: __WEBPACK_IMPORTED_MODULE_3__startpage_startpage_component__["a" /* StartpageComponent */] },
    { path: 'login', canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_login_guard_service__["c" /* IsNotLoggedInGuard */]], component: __WEBPACK_IMPORTED_MODULE_4__login_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_login_guard_service__["c" /* IsNotLoggedInGuard */]], component: __WEBPACK_IMPORTED_MODULE_5__login_register_register_component__["a" /* RegisterComponent */] },
    { path: 'statistic', canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_guards_login_guard_service__["a" /* IsAdminGuard */]], component: __WEBPACK_IMPORTED_MODULE_2__statistic_statistic_component__["a" /* StatisticComponent */] }
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
            template: "\n    <ng-progress [color]=\"'#028F76'\" [spinner]=\"false\"></ng-progress>\n    <router-outlet></router-outlet>\n  ",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_parser_service__ = __webpack_require__("../../../../../src/app/services/parser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_focus__ = __webpack_require__("../../../../angular2-focus/dist/angular2-focus.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_terminallogin_terminallogin_component__ = __webpack_require__("../../../../../src/app/login/terminallogin/terminallogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_nfclogin_nfclogin_component__ = __webpack_require__("../../../../../src/app/login/nfclogin/nfclogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_register_register_component__ = __webpack_require__("../../../../../src/app/login/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_guards_login_guard_service__ = __webpack_require__("../../../../../src/app/services/guards/login-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_terminal_service__ = __webpack_require__("../../../../../src/app/services/terminal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__startpage_startpage_component__ = __webpack_require__("../../../../../src/app/startpage/startpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__admin_admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin/admin.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_17_ng2_nvd3__["NvD3Module"],
                __WEBPACK_IMPORTED_MODULE_18_angular2_focus__["a" /* FocusModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__statistic_statistic_component__["a" /* StatisticComponent */],
                __WEBPACK_IMPORTED_MODULE_21__login_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_23__login_nfclogin_nfclogin_component__["a" /* NfcloginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__login_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__login_terminallogin_terminallogin_component__["a" /* TerminalLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__startpage_startpage_component__["a" /* StartpageComponent */],
                __WEBPACK_IMPORTED_MODULE_28__admin_admin_admin_component__["a" /* AdminComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__statistic_statistic_service__["a" /* StatisticService */],
                __WEBPACK_IMPORTED_MODULE_10__statistic_chart_service__["a" /* ChartService */],
                __WEBPACK_IMPORTED_MODULE_11__services_http_service__["a" /* HttpService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_12__services_http_interceptor_service__["a" /* HttpInterceptorService */], multi: true },
                __WEBPACK_IMPORTED_MODULE_15__services_app_api_service__["a" /* AppApiService */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_25__services_guards_login_guard_service__["b" /* IsLoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_25__services_guards_login_guard_service__["c" /* IsNotLoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_25__services_guards_login_guard_service__["a" /* IsAdminGuard */],
                __WEBPACK_IMPORTED_MODULE_25__services_guards_login_guard_service__["d" /* IsTerminalGuard */],
                __WEBPACK_IMPORTED_MODULE_26__services_terminal_service__["a" /* TerminalService */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_14__services_parser_service__["a" /* ParserService */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_api_service__["a" /* AppApiService */]])
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

module.exports = "<input  style=\"margin-top:10px;\" (click)=\"showHideNfcOverlay()\" type=\"submit\"  value=\"{{nfcButtonLabel}}\"/>\n<!-- Overlay -->\n<div class=\"nfc-overlay\" *ngIf=\"showNfcOverlay\">\n  <div class=\"nfc-overlay-content\" *ngIf=\"showNfcOverlay\">\n    <a (click)=\"showHideNfcOverlay(false)\" class=\"close\">x</a>\n    <h2>Jetzt Karte auflegen</h2>     <!-- totranslate -->\n      <p>{{nfc_message}}</p>\n      <form #f=\"ngForm\" (keyup.enter)=\"submitCheckToken(f)\" class=\"nfc-token\" novalidate>\n        <input name=\"token\" autocomplete=\"off\" ngModel focus=\"{{showNfcOverlay}}\">\n      </form>\n      <img src=\"{{appApiService.getBlogUrl()}}/wp-content/plugins/fablab-ticket/plugins/nfc-login/tucard.jpg\"/> \n  </div>\n  <div class=\"nfc-overlay-background\" (click)=\"showHideNfcOverlay(false)\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/nfclogin/nfclogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NfcloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parser_service__ = __webpack_require__("../../../../../src/app/services/parser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
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
    function NfcloginComponent(httpService, appApiService, parserService) {
        this.httpService = httpService;
        this.appApiService = appApiService;
        this.parserService = parserService;
        this.auto_hide = false;
        this.showNfcOverlay = false;
        this.onCardLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NfcloginComponent.prototype.ngOnInit = function () {
    };
    NfcloginComponent.prototype.showHideNfcOverlay = function (val) {
        if (val === void 0) { val = null; }
        if (val == null)
            this.showNfcOverlay = !this.showNfcOverlay;
        else
            this.showNfcOverlay = val;
    };
    NfcloginComponent.prototype.submitCheckToken = function (nfc_form) {
        //console.log(nfc_form.controls['token'].value);
        var card_data = this.parserService.parseCardData(nfc_form.controls['token'].value);
        this.onCardLoaded.emit(card_data);
        if (this.auto_hide) {
            this.showHideNfcOverlay(false);
        }
        nfc_form.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NfcloginComponent.prototype, "nfc_message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NfcloginComponent.prototype, "auto_hide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NfcloginComponent.prototype, "nfcButtonLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NfcloginComponent.prototype, "onCardLoaded", void 0);
    NfcloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nfclogin',
            template: __webpack_require__("../../../../../src/app/login/nfclogin/nfclogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/nfclogin/nfclogin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__services_app_api_service__["a" /* AppApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_parser_service__["a" /* ParserService */]])
    ], NfcloginComponent);
    return NfcloginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"entry-title\">Register</h1>\n<app-nfclogin [auto_hide]=\"nfc_overlay_autohide\" [nfcButtonLabel]=\"nfc_button_label\" \n   (onCardLoaded)=\"onCardLoaded($event)\"> ></app-nfclogin>\n<br>\n<form #registerform=\"ngForm\" (ngSubmit)=\"submitRegistration()\" class=\"login-form\">\n  <label for=\"loginInput\">Username:</label>  \n  <input [(ngModel)]=\"user.username\" name=\"login\" type=\"text\" id=\"usernameInput\" ngModel required minlength=\"5\"><br>\n  <label for=\"loginInput\">Vorname:</label>  \n  <input [(ngModel)]=\"user.name\" name=\"name\" type=\"text\" id=\"nameInput\" ngModel>\n  <label for=\"loginInput\">Nachname:</label>  \n  <input [(ngModel)]=\"user.surename\" name=\"surename\" type=\"text\" id=\"surenameInput\" ngModel><br>\n  <label for=\"loginInput\">Email:</label>  \n  <input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" id=\"emailInput\" ngModel email required><br>\n  <label for=\"passwordInput\">Password:</label>\n  <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" id=\"passwordInput\" ngModel required minlength=\"8\" focus=\"{{focus_password}}\"><br>\n  <label for=\"cardset\">NFC-Card:</label>\n  <input [(ngModel)]=\"cardset\" name=\"cardset\" type=\"checkbox\" ngModel disabled><br>\n  <p>{{register_message}}</p>\n  <button type=\"submit\" [disabled]=\"registerform.form.invalid\">Registrieren</button>  \n</form> \n\n"

/***/ }),

/***/ "../../../../../src/app/login/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
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
    function RegisterComponent(httpService) {
        this.httpService = httpService;
        this.cardset = false;
        // ----------- for NfcLogin ---------------------------------
        this.nfc_overlay_autohide = true; // show / hide overlay
        this.nfc_button_label = 'Register with TU-Card'; // show / hide Label
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = {
            username: '',
            name: '',
            surename: '',
            email: '',
            password: '',
            cardid: ''
        };
    };
    RegisterComponent.prototype.submitRegistration = function () {
        var _this = this;
        this.httpService.registerUser(this.user).subscribe(function (data) {
            //console.log(data);
            _this.refresh();
        }, function (err) {
            //console.log(err);
            _this.register_message = err.error.message;
        });
    };
    //public showHideNfcOverlay: Function;
    RegisterComponent.prototype.onCardLoaded = function (card_data) {
        if (this.user.username == '' && card_data.name != null && card_data.surename != null) {
            this.user.username = card_data.name.toLowerCase() + card_data.surename.toLowerCase();
        }
        if (this.user.name == '' && card_data.name != null) {
            this.user.name = card_data.name;
        }
        if (this.user.surename == '' && card_data.surename != null) {
            this.user.surename = card_data.surename;
        }
        if (this.user.email == '' && card_data.email != null) {
            this.user.email = card_data.email;
        }
        if (card_data.cardid != null) {
            this.user.cardid = card_data.cardid;
            this.cardset = true;
        }
        this.focus_password = true;
    };
    RegisterComponent.prototype.refresh = function () {
        window.location.reload();
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/login/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */]])
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

module.exports = "<h1 class=\"entry-title\">Login</h1>\n<p>{{login_message}}</p>\n<form #loginform=\"ngForm\" (ngSubmit)=\"submitLogin(loginform)\" class=\"login-form\" novalidate>\n  <label for=\"loginInput\">Username:</label>  \n  <input name=\"login\" type=\"text\" id=\"loginInput\" ngModel>\n  <label for=\"passwordInput\">Password:</label>\n  <input name=\"password\" type=\"password\" id=\"passwordInput\" ngModel>\n  <button type=\"submit\">Login</button>  \n</form>\n<app-nfclogin [nfc_message]=\"nfc_login_message\" [nfcButtonLabel]=\"nfc_button_label\"\n   (onCardLoaded)=\"onCardLoaded($event)\"> ></app-nfclogin>\n<br>\n<a routerLink=\"/register\"><input type=\"submit\"  value=\"Registrieren\"/></a>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/login/terminallogin/terminallogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//let teststring:string = 'name:jakob, cardid:123456, nachname: hubert, email:jakob.ellmaier@gmx.at';   
var TerminalLoginComponent = (function () {
    function TerminalLoginComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        // ----------- for NfcLogin ---------------------------------
        this.nfc_login_message = "Achtung: Du musst die Karte zuerst zu deinem Account hinzufügen!"; // output to child
        this.nfc_button_label = 'Login with NFC-Card'; // show / hide Label
    }
    TerminalLoginComponent.prototype.ngOnInit = function () {
    };
    TerminalLoginComponent.prototype.submitLogin = function (login_form) {
        var _this = this;
        var username = login_form.controls['login'].value;
        var password = login_form.controls['password'].value;
        this.httpService.checkLogin(username, password).subscribe(function (data) {
            _this.refresh();
        }, function (err) {
            _this.login_message = err.error.message;
        });
    };
    TerminalLoginComponent.prototype.onCardLoaded = function (card_data) {
        var _this = this;
        console.log('input card' + card_data.cardid);
        console.log('input name' + card_data.name + ' ' + card_data.surename);
        this.httpService.checkLoginToken(card_data.cardid).subscribe(function (data) {
            _this.nfc_login_message = "Karte gefunden!";
            _this.refresh();
        }, function (err) {
            console.log(err);
            _this.nfc_login_message = "Karte nicht gefunden, bitte versuche es erneut!";
        });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], TerminalLoginComponent);
    return TerminalLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/AppAPI.json":
/***/ (function(module, exports) {

module.exports = {"blog_url":"http://127.0.0.1/wordpress","templates_url":"http://127.0.0.1/wordpress/wp-content/plugins/fablab-ticket/views/templates/","api_url":"http://127.0.0.1/wordpress/api/","sharing_url":"http://127.0.0.1/wordpress/wp-json/sharepl/v1/","nonce":"c694a76626","is_user_logged_in":true,"is_terminal":true}

/***/ }),

/***/ "../../../../../src/app/services/TerminalData.json":
/***/ (function(module, exports) {

module.exports = {"is_terminal":true,"ticket_terminals_only":true,"auto_logout":30,"ticket_system_online":true}

/***/ }),

/***/ "../../../../../src/app/services/UserData.json":
/***/ (function(module, exports) {

module.exports = {"is_user_logged_in":false,"is_admin":true,"user_display_name":"Dev Admin"}

/***/ }),

/***/ "../../../../../src/app/services/app-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppAPI_json__ = __webpack_require__("../../../../../src/app/services/AppAPI.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppAPI_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__AppAPI_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserData_json__ = __webpack_require__("../../../../../src/app/services/UserData.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserData_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__UserData_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TerminalData_json__ = __webpack_require__("../../../../../src/app/services/TerminalData.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TerminalData_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TerminalData_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_json__ = __webpack_require__("../../../../../src/app/services/user.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__user_json__);
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
        this.apiDataLoaded = false;
        this.test_toggle = false;
        //this.toggle_subject = new BehaviorSubject<boolean>(this.test_toggle);
        this.app_data_subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.loadApiData();
    }
    AppApiService.prototype.loadApiData = function () {
        this.is_dev_mode = (typeof AppAPI === 'undefined');
        if (this.is_dev_mode) {
            console.log('Runing in Dev-Mode');
            this.app_api = __WEBPACK_IMPORTED_MODULE_2__AppAPI_json__;
            this.user_data = __WEBPACK_IMPORTED_MODULE_3__UserData_json__;
            this.terminal_data = __WEBPACK_IMPORTED_MODULE_4__TerminalData_json__;
            if (this.user_data.is_admin)
                this.user = __WEBPACK_IMPORTED_MODULE_5__user_json__["admin"];
            else
                this.user = __WEBPACK_IMPORTED_MODULE_5__user_json__["user"];
        }
        else {
            this.app_api = AppAPI;
            this.user_data = UserDataLoc;
            this.terminal_data = TerminalDataLoc;
        }
        this.app_data_subject.next(true);
        //console.log(this.app_api);
        //console.log(this.user_data);
        //console.log(this.terminal_data);
    };
    // check if data loaded
    AppApiService.prototype.isApiDataLoaded = function () {
        return this.app_data_subject;
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
    // -------   Terminal methods ----------
    AppApiService.prototype.isTerminal = function () {
        return this.terminal_data.is_terminal;
    };
    AppApiService.prototype.isTicketSystemOnline = function () {
        return this.terminal_data.ticket_system_online;
    };
    /*
      public toggleTerminal():void {
        this.test_toggle = !this.test_toggle;
        this.toggle_subject.next(this.test_toggle);
      }
    
      public getTerminalObservable():BehaviorSubject<boolean> {
        return this.toggle_subject;
      }
    */
    // -------   User methods ----------
    AppApiService.prototype.isUserLoggedIn = function () {
        return this.user_data.is_user_logged_in;
    };
    AppApiService.prototype.isAdmin = function () {
        return this.user_data.is_admin;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IsLoggedInGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IsNotLoggedInGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAdminGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IsTerminalGuard; });
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
    function IsLoggedInGuard(appApiService, router) {
        this.appApiService = appApiService;
        this.router = router;
    }
    IsLoggedInGuard.prototype.canActivate = function () {
        console.log('IsLoggedInGuard#canActivate called');
        if (this.appApiService.isUserLoggedIn() == true) {
            return true;
        }
        else {
            this.router.navigate(['/terminallogin']);
            return false;
        }
    };
    IsLoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_api_service__["a" /* AppApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], IsLoggedInGuard);
    return IsLoggedInGuard;
}());

var IsNotLoggedInGuard = (function () {
    function IsNotLoggedInGuard(appApiService, router) {
        this.appApiService = appApiService;
        this.router = router;
    }
    IsNotLoggedInGuard.prototype.canActivate = function () {
        console.log('IsNotLoggedInGuard#canActivate called');
        if (this.appApiService.isUserLoggedIn() == true) {
            this.router.navigate(['/startpage']);
            return false;
        }
        else {
            return true;
        }
    };
    IsNotLoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_api_service__["a" /* AppApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], IsNotLoggedInGuard);
    return IsNotLoggedInGuard;
}());

var IsAdminGuard = (function () {
    function IsAdminGuard(appApiService) {
        this.appApiService = appApiService;
    }
    IsAdminGuard.prototype.canActivate = function () {
        console.log('IsAdminGuard#canActivate called');
        if (this.appApiService.isAdmin() == true)
            return true;
        else
            return false;
    };
    IsAdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_api_service__["a" /* AppApiService */]])
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
        console.log('IsTerminalGuard#canActivate called');
        /*
            if(!this.terminalService.hasTerminalToken()) {
              this.router.navigate(['/login']);
              return false;
            }
        */
        if (this.appApiService.isTerminal()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
        // check twice if the cookie is set
        /*
            if (this.appApiService.isAppConnectLoaded()) {
              return this.appApiService.isTerminal();
            }
        
            return this.terminalService.checkTerminalToken().map(data => data.is_terminal);
        */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
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
    function HttpService(http, appApiService, cookieService) {
        this.http = http;
        this.appApiService = appApiService;
        this.cookieService = cookieService;
    }
    //--------  ticket system online  -----------------------
    /*  public checkTicketSystemOnline(): Observable<any> {
    
        let url = this.appApiService.getPluginApiUrl() + 'check_user_login';
    
        return this.http.get<any>(url, {
            params: { username: 'login'}
          });
    
      }
    */
    HttpService.prototype.setTicketSystemOnline = function (online) {
        var _this = this;
        var url = this.appApiService.getPluginApiUrl() + 'ticket_system_online';
        var param = online ? 'online' : 'offline';
        return this.http.post(url, {
            params: { set_online: param }
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(_this.handleHttpError(err)); });
    };
    //--------  terminal_token  -----------------------
    /*  public checkTerminalToken(terminal_token: string): Observable<any> {
        let url = this.appApiService.getPluginApiUrl() + 'check_terminal_token';
        return this.http.get<any>(url, {
            params: { token: terminal_token }
          })
              .catch((err: HttpErrorResponse) => Observable.throw(this.handleHttpError(err)));
      } */
    HttpService.prototype.getTerminalToken = function () {
        var _this = this;
        var url = this.appApiService.getPluginApiUrl() + 'get_terminal_token';
        return this.http.get(url)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(_this.handleHttpError(err)); });
    };
    // -------  Register Methods  ------------------------
    HttpService.prototype.registerUser = function (registerData) {
        var url = this.appApiService.getPluginApiUrl() + 'register_user_on_terminal';
        var terminaltoken = this.cookieService.get('terminal_token'); // should be in terminal service
        return this.http.post(url, {
            params: { username: registerData.username,
                name: registerData.name,
                surename: registerData.surename,
                email: registerData.email,
                password: registerData.password,
                cardid: registerData.cardid,
                terminaltoken: terminaltoken
            }
        });
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
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(_this.handleHttpError(err)); });
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
        }).catch(function (err) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(_this.handleHttpError(err)); });
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
            __WEBPACK_IMPORTED_MODULE_2__app_api_service__["a" /* AppApiService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "../../../../../src/app/services/parser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParserService; });
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

var ParserService = (function () {
    function ParserService() {
        this.card_data_config = {
            cardid: 'cardid',
            name: 'name',
            surename: 'nachname',
            email: 'email',
            elementseperator: ',',
            itemseperator: ':'
        };
    }
    ParserService.prototype.parseCardData = function (input) {
        var result = {};
        if (input.includes(this.card_data_config.itemseperator)) {
            this.stringToInterface(result, input);
        }
        else {
            result.cardid = input;
        }
        return result;
    };
    ParserService.prototype.mapCardData = function (result, key, value) {
        key = key.trim();
        value = value.trim();
        if (key == this.card_data_config.cardid) {
            result.cardid = value;
        }
        else if (key == this.card_data_config.name) {
            result.name = value;
        }
        else if (key == this.card_data_config.surename) {
            result.surename = value;
        }
        else if (key == this.card_data_config.email) {
            result.email = value;
        }
    };
    ParserService.prototype.stringToInterface = function (result, input) {
        var _this = this;
        input.split(this.card_data_config.elementseperator).forEach(function (elemet) {
            var elemet_array = elemet.split(_this.card_data_config.itemseperator);
            //console.log('key: ' + elemet_array[0] + ', value: ' + elemet_array[1]);
            _this.mapCardData(result, elemet_array[0], elemet_array[1]);
            //result[elemet_array[0]] = elemet_array[1];
            //result_array.set(elemet_array[0], elemet_array[1]);
        });
    };
    ParserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ParserService);
    return ParserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/terminal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
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
    function TerminalService(httpService, cookieService) {
        this.httpService = httpService;
        this.cookieService = cookieService;
        this.cookie_name = 'terminal_token';
        this.cookie_days = 180;
        this.cookie_path = '/';
        //this.setTerminalToken();
        //this.loadTerminalToken();
        //console.log('has token: ' + this.hasTerminalToken());
    }
    TerminalService.prototype.makeTerminal = function (make) {
        if (make == true) {
            this.setTerminalToken();
        }
        else {
            this.deleteTerminalToken();
        }
    };
    TerminalService.prototype.setTerminalToken = function () {
        var _this = this;
        this.httpService.getTerminalToken().subscribe(function (data) {
            _this.cookieService.set(_this.cookie_name, data, _this.cookie_days, _this.cookie_path);
        });
    };
    TerminalService.prototype.deleteTerminalToken = function () {
        this.cookieService.delete(this.cookie_name, this.cookie_path);
    };
    /*
    public loadTerminalToken():void {
      this.checkTerminalToken().subscribe(
        data =>  {
          this.appApiService.setAppConnect(data);
        });
    }
  */
    TerminalService.prototype.hasTerminalToken = function () {
        return this.cookieService.check(this.cookie_name);
    };
    /*
      public checkTerminalToken(): Observable<AppConnect>{
        let cookie_value = this.cookieService.get('terminal_token');
        return this.httpService.checkTerminalToken(cookie_value);
      }
    */
    // ------------ Ticket System Online --------
    TerminalService.prototype.setTicketSystemOnline = function (online) {
        return this.httpService.setTicketSystemOnline(online);
    };
    TerminalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]])
    ], TerminalService);
    return TerminalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.json":
/***/ (function(module, exports) {

module.exports = {"admin":{"username":"admin","password":"10202911"},"user":{"username":"jakob","password":"10202911"}}

/***/ }),

/***/ "../../../../../src/app/startpage/startpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/startpage/startpage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  startpage works!\n</p>\n<app-admin *ngIf=\"is_admin\" ></app-admin>\n"

/***/ }),

/***/ "../../../../../src/app/startpage/startpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_api_service__ = __webpack_require__("../../../../../src/app/services/app-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartpageComponent = (function () {
    function StartpageComponent(appApiService) {
        this.appApiService = appApiService;
        this.is_admin = false;
    }
    StartpageComponent.prototype.ngOnInit = function () {
        //window.location.href = '../rest-test';
        this.loadAdminInfo();
    };
    StartpageComponent.prototype.loadAdminInfo = function () {
        var _this = this;
        this.is_admin_subscription = this.appApiService.isApiDataLoaded().subscribe(function (loaded) {
            if (loaded == true) {
                //console.log('Admin: ' + this.appApiService.isAdmin());
                _this.is_admin = _this.appApiService.isAdmin();
                //this.is_admin_subscription.unsubscribe();
            }
        });
    };
    StartpageComponent.prototype.ngOnDestroy = function () {
        this.is_admin_subscription.unsubscribe();
    };
    StartpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-startpage',
            template: __webpack_require__("../../../../../src/app/startpage/startpage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/startpage/startpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_api_service__["a" /* AppApiService */]])
    ], StartpageComponent);
    return StartpageComponent;
}());



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