webpackJsonp([1],{

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/tournaments/tournaments.module": [
		445,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliteApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EliteApi = (function () {
    function EliteApi(http) {
        this.http = http;
        this.baseUrl = "https://elite-schedule-app-tg.firebaseio.com/";
        this.currentTourney = {};
        this.currentTeam = {};
        this.tourneyData = {};
    }
    EliteApi.prototype.getTournaments = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.baseUrl + "./tournaments.json")
                .subscribe(function (res) { return resolve(res); });
        });
    };
    EliteApi.prototype.getTournamentData = function (tourneyId, forceRefresh) {
        var _this = this;
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (!forceRefresh && this.tourneyData[tourneyId]) {
            this.currentTourney = this.tourneyData[tourneyId];
            console.log('just returning data');
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.currentTourney);
        }
        console.log('make http call');
        return this.http.get(this.baseUrl + "./tournaments-data/" + tourneyId + ".json")
            .map(function (response) {
            _this.tourneyData[tourneyId] = response;
            _this.currentTourney = _this.tourneyData[tourneyId];
            return _this.currentTourney;
        });
    };
    EliteApi.prototype.refreshCurrentTourney = function () {
        return this.getTournamentData(this.currentTourney.tournament.id, true);
    };
    EliteApi.prototype.getCurrentTourney = function () {
        return this.currentTourney;
    };
    EliteApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EliteApi);
    return EliteApi;
}());

//# sourceMappingURL=elite-api.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamHomePage = (function () {
    function TeamHomePage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
        this.teamDetailTab = __WEBPACK_IMPORTED_MODULE_2__pages__["e" /* TeamDetailPage */];
        this.standingsTab = __WEBPACK_IMPORTED_MODULE_2__pages__["d" /* StandingsPage */];
        this.team = this.navParams.data;
    }
    TeamHomePage.prototype.goHome = function () {
        this.nav.popToRoot();
    };
    TeamHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-home',template:/*ion-inline-start:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/team-home/team-home.html"*/'<!--\n  Generated template for the TeamHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{team.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="goHome()"><ion-icon name="home"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar> \n</ion-header>\n <ion-tabs> \n<ion-tab tabTitle="Team" [root] = "teamDetailTab" [rootParams]="team" tabIcon="basketball"> Team  </ion-tab>\n<ion-tab tabTitle="Standings" [root] = "standingsTab" [rootParams]="team" tabIcon="podium">Standings</ion-tab>\n   </ion-tabs>\n'/*ion-inline-end:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/team-home/team-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TeamHomePage);
    return TeamHomePage;
}());

//# sourceMappingURL=team-home.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_elite_api_elite_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = (function () {
    function MapPage(eliteApi, navParams, agmCoreModule) {
        this.eliteApi = eliteApi;
        this.navParams = navParams;
        this.agmCoreModule = agmCoreModule;
        this.map = {};
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var games = this.navParams.data;
        var tourneyData = this.eliteApi.getCurrentTourney();
        var location = tourneyData.locations[games.locationId];
        this.map = {
            lat: location.latitude,
            lng: location.longitude,
            zoom: 12,
            markerLabel: games.location,
        };
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/map/map.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <agm-map [latitude] = "map.lat" [longitude] = "map.lng" [zoom] = "map.zoom">\n    <agm-marker [latitude] = "map.lat" [longitude] = "map.lng"></agm-marker>\n    <agm-info-window>\n    <strong>{{ map.markerLabel }}</strong>\n    </agm-info-window>\n  </agm-map>\n\n</ion-content>\n'/*ion-inline-end:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_elite_api_elite_api__["a" /* EliteApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_elite_api_elite_api__["a" /* EliteApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */]) === "function" && _c || Object])
    ], MapPage);
    return MapPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_teams_my_teams__ = __webpack_require__(400);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__my_teams_my_teams__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tournaments_tournaments__ = __webpack_require__(352);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__tournaments_tournaments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teams_teams__ = __webpack_require__(410);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__teams_teams__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__ = __webpack_require__(411);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__team_detail_team_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__standings_standings__ = __webpack_require__(413);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__standings_standings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_game__ = __webpack_require__(414);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__game_game__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_home_team_home__ = __webpack_require__(298);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__team_home_team_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(299);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__map_map__["a"]; });








//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_elite_api_elite_api__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TournamentsPage = (function () {
    function TournamentsPage(nav, navParams, eliteApi, loadingController) {
        this.nav = nav;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.loadingController = loadingController;
    }
    TournamentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting tournaments...',
            spinner: 'dots'
        });
        loader.present().then(function () {
            _this.eliteApi.getTournaments().then(function (data) {
                _this.tournaments = data;
                loader.dismiss();
            });
        });
    };
    TournamentsPage.prototype.itemTapped = function ($event, tourney) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages__["g" /* TeamsPage */], tourney);
    };
    TournamentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tournaments',template:/*ion-inline-start:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/tournaments/tournaments.html"*/'<!--\n  Generated template for the TournamentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Tourneys</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n  <button *ngFor="let item of tournaments" ion-item (click) = "itemTapped($event,item)">\n    {{item.name}}\n    <p> {{item.tournamentName}} </p>\n    </button>\n   \n  </ion-list>\n</ion-content>\n\n\n \n'/*ion-inline-end:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/tournaments/tournaments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_elite_api_elite_api__["a" /* EliteApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TournamentsPage);
    return TournamentsPage;
}());

//# sourceMappingURL=tournaments.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_elite_api_elite_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_settings_user_settings__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["b" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["c" /* MyTeamsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["e" /* TeamDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["g" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["h" /* TournamentsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["d" /* StandingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["f" /* TeamHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/tournaments/tournaments.module#TournamentsPageModule', name: 'TournamentsPage', segment: 'tournaments', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyCc5Y62HWLcsabYMiS3SD1u751Uclj7ZPQ' })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["b" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["c" /* MyTeamsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["e" /* TeamDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["g" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["h" /* TournamentsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["d" /* StandingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pages__["f" /* TeamHomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_elite_api_elite_api__["a" /* EliteApi */],
                __WEBPACK_IMPORTED_MODULE_11__providers_user_settings_user_settings__["a" /* UserSettings */],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_elite_api_elite_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_settings_user_settings__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyTeamsPage = (function () {
    function MyTeamsPage(nav, loadingController, eliteApi, userSettings) {
        this.nav = nav;
        this.loadingController = loadingController;
        this.eliteApi = eliteApi;
        this.userSettings = userSettings;
        this.favorites = [];
    }
    MyTeamsPage.prototype.FindTourneys = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages__["h" /* TournamentsPage */]);
    };
    MyTeamsPage.prototype.favoriteTapped = function ($event, favorite) {
        var _this = this;
        var loader = this.loadingController.create({
            content: 'Getting data...',
            dismissOnPageChange: true
        });
        loader.present();
        this.eliteApi.getTournamentData(favorite.tournamentId)
            .subscribe(function (t) { return _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages__["f" /* TeamHomePage */], favorite.team); });
    };
    MyTeamsPage.prototype.ionViewDidEnter = function () {
        this.favorites = this.userSettings.getAllFavorites();
    };
    MyTeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-teams',template:/*ion-inline-start:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/my-teams/my-teams.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n<button ion-button menuToggle> \n  <ion-icon name="menu">\n    </ion-icon></button>\n    <ion-title>Elite Schedule</ion-title>\n  </ion-navbar>\n  \n  <ion-toolbar color="secondary">\n    <ion-title>My Teams</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="!favorites">\n        <ion-card-header class="my-teams-header">No Followed Teams</ion-card-header>\n        <ion-card-content>\n            <p>You are not currently following any teams.</p>\n            <p>First select a tournament, then you can follow teams \n                from their team page.</p>\n            <button ion-button full icon-left (click)="goToTournaments()">\n                <ion-icon name="search"></ion-icon>\n                Find a Tournament\n            </button>\n        </ion-card-content>\n    </ion-card>\n    \n\n    <ion-card *ngIf="favorites">\n        <ion-list>\n            <ion-list-header class="my-teams-header">Followed Teams</ion-list-header>\n            <button ion-item *ngFor="let item of favorites" (click)="favoriteTapped($event, item)">\n                <ion-icon name="star"></ion-icon>\n                {{item.team.name}}\n                <p>{{item.tournamentName}}</p>\n            </button>\n        </ion-list>\n        <ion-card-content>\n            <p>To follow more teams, select a tournament, \n                then you can follow teams from their team page.</p>    \n            <button ion-button icon-left full (click)="FindTourneys()">\n                <ion-icon   name="search"></ion-icon>\n                Find a Tournament\n            </button>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/my-teams/my-teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_elite_api_elite_api__["a" /* EliteApi */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_settings_user_settings__["a" /* UserSettings */]])
    ], MyTeamsPage);
    return MyTeamsPage;
}());

//# sourceMappingURL=my-teams.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_elite_api_elite_api__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamsPage = (function () {
    function TeamsPage(loadingController, nav, navParams, eliteApi) {
        this.loadingController = loadingController;
        this.nav = nav;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.teams = [];
    }
    TeamsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var selectedTourney = this.navParams.data;
        var loader = this.loadingController.create({
            content: 'Getting data...'
        });
        loader.present().then(function () {
            _this.eliteApi.getTournamentData(selectedTourney.id).subscribe(function (data) {
                _this.allTeams = data.team;
                _this.allTeamDivisions =
                    __WEBPACK_IMPORTED_MODULE_3_lodash__["chain"](data.teams)
                        .groupBy('division')
                        .toPairs()
                        .map(function (item) { return __WEBPACK_IMPORTED_MODULE_3_lodash__["zipObject"](['divisionName', 'divisionTeams'], item); })
                        .value();
                _this.teams = _this.allTeamDivisions;
                console.log('division teams', _this.teams);
                loader.dismiss();
            });
        });
    };
    TeamsPage.prototype.itemTapped = function ($event, team) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages__["f" /* TeamHomePage */], team);
    };
    TeamsPage.prototype.updateTeams = function () {
        console.log("filter run" + this.queryText);
        var queryTextLower = this.queryText.toLowerCase();
        var filteredTeams = [];
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](this.allTeamDivisions, function (td) {
            var teams = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](td.divisionTeams, function (t) { return t.name.toLowerCase().includes(queryTextLower); });
            if (teams.length) {
                filteredTeams.push({ divisionName: td.divisionName, divisionTeams: teams });
            }
        });
        this.teams = filteredTeams;
    };
    TeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/teams/teams.html"*/'<!--\n  Generated template for the TeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Teams</ion-title>\n    \n      </ion-navbar>\n  <ion-toolbar >\n  <ion-searchbar placeholder="Search" [(ngModel)]="queryText" (ionInput)="updateTeams()"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-group *ngFor = "let division of teams">\n      <ion-item-divider color="secondary">{{division.divisionName}} </ion-item-divider>\n  <button ion-item *ngFor="let team of division.divisionTeams" (click) = "itemTapped($event, team)"> \n  {{team.name}}\n  </button>\n        </ion-item-group>  \n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/teams/teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_elite_api_elite_api__["a" /* EliteApi */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_elite_api_elite_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_settings_user_settings__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TeamDetailPage = (function () {
    function TeamDetailPage(nav, userSettings, alertController, toastController, navParams, eliteApi) {
        this.nav = nav;
        this.userSettings = userSettings;
        this.alertController = alertController;
        this.toastController = toastController;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.isFollowing = false;
        this.team = {};
        this.teamStanding = {};
        this.games = [];
        this.useDateFilter = false;
    }
    TeamDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.team = this.navParams.data;
        this.tourneyData = this.eliteApi.getCurrentTourney();
        this.games = __WEBPACK_IMPORTED_MODULE_6_lodash__["chain"](this.tourneyData.games)
            .filter(function (g) { return g.team1Id === _this.team.id || g.team2Id === _this.team.id; })
            .map(function (g) {
            var isTeam1 = (g.team1Id === _this.team.id);
            var opponentName = isTeam1 ? g.team2 : g.team1;
            var scoreDisplay = _this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
            return {
                gameId: g.id,
                opponent: opponentName,
                time: Date.parse(g.time),
                location: g.location,
                locationUrl: g.locationUrl,
                scoreDisplay: scoreDisplay,
                homeAway: (isTeam1 ? "vs." : "at")
            };
        })
            .value();
        this.allGames = this.games;
        this.teamStanding = __WEBPACK_IMPORTED_MODULE_6_lodash__["find"](this.tourneyData.standings, { 'teamId': this.team.id });
        this.userSettings.isFavoriteTeam(this.team.id.toString()).then(function (value) { return _this.isFollowing = value; });
    };
    TeamDetailPage.prototype.dateChanged = function () {
        var _this = this;
        if (this.useDateFilter) {
            this.games = __WEBPACK_IMPORTED_MODULE_6_lodash__["filter"](this.allGames, function (g) { return __WEBPACK_IMPORTED_MODULE_5_moment___default()(g.time).isSame(_this.dateFilter, 'day'); });
        }
        else {
            this.games = this.allGames;
        }
    };
    TeamDetailPage.prototype.getScoreDisplay = function (isTeam1, team1Score, team2Score) {
        if (team1Score && team2Score) {
            var teamScore = (isTeam1 ? team1Score : team2Score);
            var opponentScore = (isTeam1 ? team2Score : team1Score);
            var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
            return winIndicator + teamScore + "-" + opponentScore;
        }
        else {
            return "";
        }
    };
    TeamDetailPage.prototype.gameClicked = function ($event, game) {
        var sourceGame = this.tourneyData.games.find(function (g) { return g.id === game.gameId; });
        this.nav.parent.parent.push(__WEBPACK_IMPORTED_MODULE_4__pages__["a" /* GamePage */], sourceGame);
    };
    TeamDetailPage.prototype.getScoreWorL = function (game) {
        return game.scoreDisplay ? game.scoreDisplay[0] : '';
    };
    TeamDetailPage.prototype.getScoreDisplayColor = function (game) {
        return game.scoreDisplay.indexOf('W:') === 0 ? "secondary" : "danger";
    };
    TeamDetailPage.prototype.toggleFollow = function () {
        var _this = this;
        if (this.isFollowing) {
            var confirm_1 = this.alertController.create({
                title: 'Unfollow?',
                message: 'Are you sure?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.isFollowing = false;
                            _this.userSettings.unFavoriteTeam(_this.team);
                            var toast = _this.toastController.create({
                                message: 'You have unfollowed this team',
                                duration: 2500,
                                position: 'bottom'
                            });
                            toast.present();
                        }
                    },
                    { text: 'No' }
                ]
            });
            confirm_1.present();
        }
        else {
            this.isFollowing = true;
            this.userSettings.favoriteTeam(this.team, this.tourneyData.tournament.id, this.tourneyData.tournament.name);
        }
    };
    TeamDetailPage.prototype.refreshAll = function (refresher) {
        var _this = this;
        this.eliteApi.refreshCurrentTourney().subscribe(function () {
            refresher.complete();
            _this.ionViewDidLoad();
        });
    };
    TeamDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-detail',template:/*ion-inline-start:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/team-detail/team-detail.html"*/'<!--\n  Generated template for the TeamDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{team.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header> \n<ion-content>\n  <ion-refresher (ionRefresh)="refreshAll($event)"> \n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n  <ion-card-content>\n   \n   <ion-row>\n    <ion-col col-6>\n      <h2>Record: {{teamStanding.wins}} - {{teamStanding.losses}}</h2>\n      <p> Coach: {{ team.coach }}</p>\n      </ion-col>\n     <ion-col col-6 text-right>\n       <button ion-button icon-left outline (click) = "toggleFollow()" *ngIf="!isFollowing">\n       <ion-icon name="star">Follow</ion-icon> \n       </button>\n       <button ion-button icon-only (click) = "toggleFollow()" *ngIf="isFollowing">\n       <ion-icon name="star"></ion-icon>\n       </button>     \n     </ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-label >Date Filter:</ion-label>\n      <ion-toggle [(ngModel)]="useDateFilter" (ionChange)="dateChanged()"></ion-toggle>\n      <ion-datetime displayFormat="M/D/YYYY" pickerFormat="M/D/YYYY" [(ngModel)]="dateFilter" (ionChange)="dateChanged()" [(disabled)]="!useDateFilter">\n      </ion-datetime>\n    </ion-item>\n    </ion-card-content>\n</ion-card>\n  \n  \n  \n  <ion-list>\n  <ion-item *ngFor="let game of games" (click)="gameClicked($event, game)">\n   \n    <ion-row>\n    <ion-col col-3>\n  <p>{{ game.time | date:\'M/d/yy\'}} </p> \n     <p>{{ game.time | date:\'shortTime\'}}</p> \n      </ion-col>\n      <ion-col col-6>\n      <p>{{game.homeAway}} {{game.opponent}}</p>\n        <p>{{game.location}}</p>\n      </ion-col>\n      <ion-col col-3>\n      <h4>{{game.scoreDisplay}}</h4>\n        <ion-badge [color]="getScoreDisplayColor(game)">{{ getScoreWorL(game) }}</ion-badge>\n      </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n    \n   \n  \n</ion-content>\n'/*ion-inline-end:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/team-detail/team-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_settings_user_settings__["a" /* UserSettings */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_elite_api_elite_api__["a" /* EliteApi */]])
    ], TeamDetailPage);
    return TeamDetailPage;
}());

//# sourceMappingURL=team-detail.js.map

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 175,
	"./af.js": 175,
	"./ar": 176,
	"./ar-dz": 177,
	"./ar-dz.js": 177,
	"./ar-kw": 178,
	"./ar-kw.js": 178,
	"./ar-ly": 179,
	"./ar-ly.js": 179,
	"./ar-ma": 180,
	"./ar-ma.js": 180,
	"./ar-sa": 181,
	"./ar-sa.js": 181,
	"./ar-tn": 182,
	"./ar-tn.js": 182,
	"./ar.js": 176,
	"./az": 183,
	"./az.js": 183,
	"./be": 184,
	"./be.js": 184,
	"./bg": 185,
	"./bg.js": 185,
	"./bm": 186,
	"./bm.js": 186,
	"./bn": 187,
	"./bn.js": 187,
	"./bo": 188,
	"./bo.js": 188,
	"./br": 189,
	"./br.js": 189,
	"./bs": 190,
	"./bs.js": 190,
	"./ca": 191,
	"./ca.js": 191,
	"./cs": 192,
	"./cs.js": 192,
	"./cv": 193,
	"./cv.js": 193,
	"./cy": 194,
	"./cy.js": 194,
	"./da": 195,
	"./da.js": 195,
	"./de": 196,
	"./de-at": 197,
	"./de-at.js": 197,
	"./de-ch": 198,
	"./de-ch.js": 198,
	"./de.js": 196,
	"./dv": 199,
	"./dv.js": 199,
	"./el": 200,
	"./el.js": 200,
	"./en-au": 201,
	"./en-au.js": 201,
	"./en-ca": 202,
	"./en-ca.js": 202,
	"./en-gb": 203,
	"./en-gb.js": 203,
	"./en-ie": 204,
	"./en-ie.js": 204,
	"./en-il": 205,
	"./en-il.js": 205,
	"./en-nz": 206,
	"./en-nz.js": 206,
	"./eo": 207,
	"./eo.js": 207,
	"./es": 208,
	"./es-do": 209,
	"./es-do.js": 209,
	"./es-us": 210,
	"./es-us.js": 210,
	"./es.js": 208,
	"./et": 211,
	"./et.js": 211,
	"./eu": 212,
	"./eu.js": 212,
	"./fa": 213,
	"./fa.js": 213,
	"./fi": 214,
	"./fi.js": 214,
	"./fo": 215,
	"./fo.js": 215,
	"./fr": 216,
	"./fr-ca": 217,
	"./fr-ca.js": 217,
	"./fr-ch": 218,
	"./fr-ch.js": 218,
	"./fr.js": 216,
	"./fy": 219,
	"./fy.js": 219,
	"./gd": 220,
	"./gd.js": 220,
	"./gl": 221,
	"./gl.js": 221,
	"./gom-latn": 222,
	"./gom-latn.js": 222,
	"./gu": 223,
	"./gu.js": 223,
	"./he": 224,
	"./he.js": 224,
	"./hi": 225,
	"./hi.js": 225,
	"./hr": 226,
	"./hr.js": 226,
	"./hu": 227,
	"./hu.js": 227,
	"./hy-am": 228,
	"./hy-am.js": 228,
	"./id": 229,
	"./id.js": 229,
	"./is": 230,
	"./is.js": 230,
	"./it": 231,
	"./it.js": 231,
	"./ja": 232,
	"./ja.js": 232,
	"./jv": 233,
	"./jv.js": 233,
	"./ka": 234,
	"./ka.js": 234,
	"./kk": 235,
	"./kk.js": 235,
	"./km": 236,
	"./km.js": 236,
	"./kn": 237,
	"./kn.js": 237,
	"./ko": 238,
	"./ko.js": 238,
	"./ky": 239,
	"./ky.js": 239,
	"./lb": 240,
	"./lb.js": 240,
	"./lo": 241,
	"./lo.js": 241,
	"./lt": 242,
	"./lt.js": 242,
	"./lv": 243,
	"./lv.js": 243,
	"./me": 244,
	"./me.js": 244,
	"./mi": 245,
	"./mi.js": 245,
	"./mk": 246,
	"./mk.js": 246,
	"./ml": 247,
	"./ml.js": 247,
	"./mn": 248,
	"./mn.js": 248,
	"./mr": 249,
	"./mr.js": 249,
	"./ms": 250,
	"./ms-my": 251,
	"./ms-my.js": 251,
	"./ms.js": 250,
	"./mt": 252,
	"./mt.js": 252,
	"./my": 253,
	"./my.js": 253,
	"./nb": 254,
	"./nb.js": 254,
	"./ne": 255,
	"./ne.js": 255,
	"./nl": 256,
	"./nl-be": 257,
	"./nl-be.js": 257,
	"./nl.js": 256,
	"./nn": 258,
	"./nn.js": 258,
	"./pa-in": 259,
	"./pa-in.js": 259,
	"./pl": 260,
	"./pl.js": 260,
	"./pt": 261,
	"./pt-br": 262,
	"./pt-br.js": 262,
	"./pt.js": 261,
	"./ro": 263,
	"./ro.js": 263,
	"./ru": 264,
	"./ru.js": 264,
	"./sd": 265,
	"./sd.js": 265,
	"./se": 266,
	"./se.js": 266,
	"./si": 267,
	"./si.js": 267,
	"./sk": 268,
	"./sk.js": 268,
	"./sl": 269,
	"./sl.js": 269,
	"./sq": 270,
	"./sq.js": 270,
	"./sr": 271,
	"./sr-cyrl": 272,
	"./sr-cyrl.js": 272,
	"./sr.js": 271,
	"./ss": 273,
	"./ss.js": 273,
	"./sv": 274,
	"./sv.js": 274,
	"./sw": 275,
	"./sw.js": 275,
	"./ta": 276,
	"./ta.js": 276,
	"./te": 277,
	"./te.js": 277,
	"./tet": 278,
	"./tet.js": 278,
	"./tg": 279,
	"./tg.js": 279,
	"./th": 280,
	"./th.js": 280,
	"./tl-ph": 281,
	"./tl-ph.js": 281,
	"./tlh": 282,
	"./tlh.js": 282,
	"./tr": 283,
	"./tr.js": 283,
	"./tzl": 284,
	"./tzl.js": 284,
	"./tzm": 285,
	"./tzm-latn": 286,
	"./tzm-latn.js": 286,
	"./tzm.js": 285,
	"./ug-cn": 287,
	"./ug-cn.js": 287,
	"./uk": 288,
	"./uk.js": 288,
	"./ur": 289,
	"./ur.js": 289,
	"./uz": 290,
	"./uz-latn": 291,
	"./uz-latn.js": 291,
	"./uz.js": 290,
	"./vi": 292,
	"./vi.js": 292,
	"./x-pseudo": 293,
	"./x-pseudo.js": 293,
	"./yo": 294,
	"./yo.js": 294,
	"./zh-cn": 295,
	"./zh-cn.js": 295,
	"./zh-hk": 296,
	"./zh-hk.js": 296,
	"./zh-tw": 297,
	"./zh-tw.js": 297
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 412;

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_elite_api_elite_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
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
 * Generated class for the StandingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StandingsPage = (function () {
    function StandingsPage(nav, navParams, eliteApi) {
        this.nav = nav;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.divisionFilter = "division";
    }
    StandingsPage.prototype.ionViewDidLoad = function () {
        this.team = this.navParams.data;
        var tourneyData = this.eliteApi.getCurrentTourney();
        this.standings = tourneyData.standings;
        this.allStandings = tourneyData.standings;
        console.log('standings: ', this.standings);
        console.log('division Standings: ', this.allStandings);
        this.filterDivision();
    };
    StandingsPage.prototype.filterDivision = function () {
        var _this = this;
        if (this.divisionFilter === 'all') {
            console.log('all' + this.allStandings);
            this.standings = this.allStandings;
        }
        else {
            this.standings = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.allStandings, function (s) { return s.division === _this.team.division; });
            console.log('division' + this.allStandings);
        }
    };
    StandingsPage.prototype.getHeader = function (record, recordIndex, records) {
        if (recordIndex === 0 || record.division !== records[recordIndex - 1].division) {
            return record.division;
        }
        return null;
    };
    StandingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-standings',template:/*ion-inline-start:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/standings/standings.html"*/' \n<ion-header>\n\n  <ion-navbar>\n     </ion-navbar>\n  <ion-toolbar>\n  <ion-segment color="secondary" [(ngModel)]="divisionFilter" (ionChange)="filterDivision()">\n    <ion-segment-button value="division">\n    Division\n    </ion-segment-button>\n    <ion-segment-button value="all">\n    All\n    </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n     \n \n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list [virtualScroll] = "standings" [approxItemHeight]="\'132px\'" [headerFn] = "getHeader">\n   <ion-item-divider color="secondary" *virtualHeader = "let header">{{header}}</ion-item-divider>\n    \n    <ion-item *virtualItem = "let team">\n     <ion-row>\n       <ion-col>\n         <h2 ion-text color="primary">\n       {{team.teamName}}\n       </h2></ion-col>\n       </ion-row>\n       <ion-row>   \n       <ion-col>\n         <h4>Wins</h4>\n         </ion-col>\n        <ion-col>\n         <h4>Losses</h4>\n         </ion-col>\n       <ion-col>\n         <h4>Pct</h4>\n         </ion-col>\n       <ion-col>\n         <h4>PF</h4>\n         </ion-col>\n       <ion-col>\n         <h4>PS</h4>\n         </ion-col>\n       <ion-col>\n         <h4>Diff</h4>\n         </ion-col>       \n       </ion-row>\n       \n       <ion-row>   \n       <ion-col>\n         <h5>{{team.wins}}</h5>\n         </ion-col>\n        <ion-col>\n         <h5>{{team.losses}}</h5>\n         </ion-col>\n       <ion-col>\n         <h5>{{team.winningPct}}</h5>\n         </ion-col>\n       <ion-col>\n        <h5>{{team.pointsFor}}</h5>\n         </ion-col>\n       <ion-col>\n        <h5>{{team.pointsAgainst}}</h5>\n         </ion-col>\n       <ion-col>\n         <h5>{{team.pointsDiff}}</h5>\n         </ion-col>       \n       </ion-row> \n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/standings/standings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_elite_api_elite_api__["a" /* EliteApi */]])
    ], StandingsPage);
    return StandingsPage;
}());

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_elite_api_elite_api__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_home_team_home__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GamePage = (function () {
    function GamePage(navCtrl, navParams, eliteApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eliteApi = eliteApi;
        this.game = {};
    }
    GamePage.prototype.ionViewDidLoad = function () {
        this.game = this.navParams.data;
        this.game.gameTime = Date.parse(this.game.time);
    };
    GamePage.prototype.goToDirections = function () {
    };
    GamePage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */], this.game);
    };
    GamePage.prototype.teamTapped = function (teamId) {
        var tourneyData = this.eliteApi.getCurrentTourney();
        var team = tourneyData.teams.find(function (t) { return t.id === teamId; });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__team_home_team_home__["a" /* TeamHomePage */], team);
    };
    GamePage.prototype.isWinner = function (score1, score2) {
        return Number(score1) > Number(score2) ? 'primary' : 'danger';
    };
    GamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game',template:/*ion-inline-start:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/game/game.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Game</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n  <ion-col col-6 text-center class="divider-col">\n    <button ion-button clear full (click)="teamTapped(game.team1Id)">Home</button>\n    </ion-col>\n    <ion-col col-6 text-center>\n    <button ion-button clear full (click)="teamTapped(game.team2Id)">Away</button>\n    </ion-col>\n  </ion-row>\n  <ion-row center>\n  <ion-col col-6 text-center class="divider-col" (click)="teamTapped(game.team1Id)">\n    <h4>{{game.team1}}</h4>\n    </ion-col>\n     <ion-col col-6 text-center class="" (click)="teamTapped(game.team2Id)">\n    <h4>{{game.team2}}</h4>\n    </ion-col>\n  </ion-row>\n  <ion-row baseline class="top-bottom-border">\n  <ion-col text-center (click)="teamTapped(game.team1Id)">\n    <h1 ion-text [color]="isWinner(game.team1Score,game.team2Score)">{{game.team1Score}}</h1>\n    </ion-col>\n    <ion-col text-center>\n    <ion-label>Score</ion-label>\n    </ion-col>\n    <ion-col text-center (click)="teamTapped(game.team2Id)" color="danger">\n    <h1 ion-text [color]="isWinner(game.team2Score,game.team1Score)">{{game.team2Score}}</h1>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n  <ion-item>\n    <ion-icon name="calendar-outline" item-left></ion-icon>\n    {{game.gameTime | date: \'M/d/yy\'}} {{game.gameTime | date: shortTime}}\n    </ion-item>\n    \n  <ion-row>\n    <ion-col col-7>\n    <ion-label>{{game.location}}</ion-label>\n    </ion-col>\n    <ion-col col-5 text-right>\n    <button ion-button icon-only outline (click)="goToMap()">\n      <ion-icon name="map"></ion-icon>\n      </button>\n    <button ion-button icon-only outline (click)="getDirections()">\n      <ion-icon name="navigate"></ion-icon>\n      </button>\n       \n    </ion-col>\n    </ion-row>\n  </ion-card>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/pages/game/game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_elite_api_elite_api__["a" /* EliteApi */]])
    ], GamePage);
    return GamePage;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pages__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_pages__["c" /* MyTeamsPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.goHome = function () {
        this.nav.pop();
    };
    MyApp.prototype.goToTournaments = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_pages__["h" /* TournamentsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>Navigate</ion-list-header>\n      <button menuClose ion-item (click)="goHome()">\n        Home\n      </button>\n      <button menuClose ion-item (click)="goToTournaments()">\n        Find a Tourney\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/thomasghoreyeb/Documents/GitHub/dev/Angular2 and Ionic/elite-schedule-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSettings = (function () {
    function UserSettings(storage) {
        this.storage = storage;
        console.log('Hello UserSettings Provider');
    }
    UserSettings.prototype.favoriteTeam = function (team, tournamentId, tournamentName) {
        var item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
        this.storage.set(team.id.toString(), JSON.stringify(item));
    };
    UserSettings.prototype.unFavoriteTeam = function (team) {
        this.storage.remove(team.id.toString());
    };
    UserSettings.prototype.isFavoriteTeam = function (teamId) {
        return this.storage.get(teamId).then(function (value) { return value ? true : false; });
    };
    UserSettings.prototype.getAllFavorites = function () {
        var results = [];
        this.storage.forEach(function (data) {
            console.log('for each=', data);
            results.push(JSON.parse(data));
        });
        return results;
    };
    UserSettings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], UserSettings);
    return UserSettings;
}());

//# sourceMappingURL=user-settings.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map