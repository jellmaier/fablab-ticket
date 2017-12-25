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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    //{ path: 'dashboard',  component: DashboardComponent },
    //{ path: 'detail/:id', component: HeroDetailComponent },
    //{ path: 'heroes',     component: HeroesComponent },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'statistic', component: __WEBPACK_IMPORTED_MODULE_2__statistic_statistic_component__["a" /* StatisticComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
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
            template: "\n    <nav>\n      <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n      <a routerLink=\"/statistic\" routerLinkActive=\"active\">Statistic</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_progressbar__ = __webpack_require__("../../../../ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__statistic_statistic_service__ = __webpack_require__("../../../../../src/app/statistic/statistic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__statistic_statistic_component__ = __webpack_require__("../../../../../src/app/statistic/statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__statistic_chart_service__ = __webpack_require__("../../../../../src/app/statistic/chart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_nvd3__ = __webpack_require__("../../../../ng2-nvd3/build/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// d3 and nvd3 should be included somewhere



/* for angular 4.3 and later
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';

@NgModule({
 providers: [
   // ...
   { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
 ],
 imports: [
   // ...
   HttpClientModule,
   NgProgressModule
 ]
})
*/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_progressbar__["b" /* NgProgressModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_nvd3__["NvD3Module"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__statistic_statistic_component__["a" /* StatisticComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__statistic_statistic_service__["a" /* StatisticService */],
                __WEBPACK_IMPORTED_MODULE_9__statistic_chart_service__["a" /* ChartService */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* DatePipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BrowserXhr */], useClass: __WEBPACK_IMPORTED_MODULE_4_ngx_progressbar__["a" /* NgProgressBrowserXhr */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = (function () {
    function LoginComponent() {
        this.app_api = AppAPI;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("URLa: " + this.app_api.sharing_url);
        console.log(this.app_api);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = "<ng-progress [color]=\"'#028F76'\" [showSpinner]=\"false\"></ng-progress>\n<h1>Statistic</h1>  \n<div class=\"statistic-box box\">\n  <div class=\"box-header\">\n  \t<h3>Wochennutzung</h3>\n    <button (click)=\"checkLoadAndSetData(false)\">-</button>\n    <button (click)=\"checkLoadAndSetData(true)\">+</button>\n  </div>\n  <div class=\"box-content\">\n  \t <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n     <p>{{currentWeek}}</p>\n  </div>\n</div>\n<div class=\"statistic-box trend-box\">\n  <div class=\"box-header\">\n  \t<h3>Nutzungsverlauf</h3>\n  </div>\n  <div class=\"box-content\">\n  \t <nvd3 #linechart [options]=\"linechartoptions\" [data]=\"datatrend\"></nvd3>\n  </div>\n</div>"

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
            .then(function (statisticdata) {
            _this.data = statisticdata;
            _this.addStatisticData(statisticdata, week, offset);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
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
    function StatisticService(http) {
        this.http = http;
        this.statisticUrl = 'http://fablab.tugraz.at/wp-json/sharepl/v1/statistic'; // URL to web api
    }
    StatisticService.prototype.getStatisticOfWeek = function (week) {
        var url = this.statisticUrl +
            "?start_date=" + this.getDateString(week.monday)
            + "&end_date=" + this.getDateString(week.sunday);
        //console.log(url);
        return this.http.get(url).toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StatisticService.prototype.getDateString = function (date) {
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    };
    StatisticService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    StatisticService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
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