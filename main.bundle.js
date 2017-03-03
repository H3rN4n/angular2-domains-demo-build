webpackJsonp([2,5],{

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
            selector: 'app-landing',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ChangeDetectionStrategy */].OnPush,
            template: __webpack_require__(728)
        }), 
        __metadata('design:paramtypes', [])
    ], LandingComponent);
    return LandingComponent;
}());
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/landing.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
            selector: 'app-not-found-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ChangeDetectionStrategy */].OnPush,
            template: __webpack_require__(730),
            styles: ["\n    :host {\n      text-align: center;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/not-found-page.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_domains__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_domains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__effects__ = __webpack_require__(566);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__effects__["a"]; });



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__["createDomain"])('app', __WEBPACK_IMPORTED_MODULE_2__reducer__["a" /* reducer */]);

//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/index.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/environment.js.map

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../modules/+list/list.module": [
		745,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 410;


/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(562);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/main.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_not_found_not_found_page_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_landing_landing_component__ = __webpack_require__(363);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__components_landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__components_landing_landing_component__["a" /* LandingComponent */]
    },
    {
        path: 'list',
        loadChildren: '../modules/+list/list.module#ListModule'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__components_not_found_not_found_page_component__["a" /* NotFoundPageComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: false })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/app-routing.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(727),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/app.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_not_found_not_found_page_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_landing_landing_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_reducer__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__domain__ = __webpack_require__(569);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_not_found_not_found_page_component__["a" /* NotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_12__app_reducer__["a" /* reducer */]),
                //RouterStoreModule.connectRouter(),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_14__domain__["a" /* AppEffects */]),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/app.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_domains__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_domains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_core_compose__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(61);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;





var _reducer;
// Support lazy loading, re-build reducer tree when a new domain is added
__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__["tableCreated$"].subscribe(function (domain) {
    console.log('Reducer updated - new domain: ' + domain);
    _reducer = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production
        ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* combineReducers */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__["getReducers"])())
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* combineReducers */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__["getReducers"])());
});
function reducer(state, action) {
    return _reducer(state, action);
}
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/app.reducer.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
            selector: 'app-navbar',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ChangeDetectionStrategy */].OnPush,
            template: __webpack_require__(729)
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/navbar.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_domains__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_domains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__);

/**
 * Views are inter-domain queries the involve at least 2 domains.
 * Views are slightly more complex, transforming at least 2 or domains into a new (virtual) domain.
 * Views will usually mimic operations like SQL Joins, virtual/calculated properties etc...
 */
__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__["Queries"].VIEWS = {};
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/VIEWS.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(257);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppEffects = (function () {
    function AppEffects(actions$) {
        this.actions$ = actions$;
        console.log('AppEffects');
    }
    AppEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === 'function' && _a) || Object])
    ], AppEffects);
    return AppEffects;
    var _a;
}());
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/effects.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_domains__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_domains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;

/*=
 * The ngrx example-app originally uses a class for every action.
 * The classes does not come with a static property representing the token for the action (type),
 * the example-app uses an exported object (ActionTypes) to export the types.
 * Since ngrx-domains does not provide a way to export the tokens in the global api they can only be
 * access directly (import { ActionTypes } from './actions').
 * Direct import will work fine but when we want to import action types from a different domain we
 * need to import it directly which couples both domains together.
 *
 * There's no problem with coupling if this is by design, but if not we can bypass it.
 * To minimize changes to the original app I have left the class based actions in tact and used
 * direct reference comparision to find the dispatched action.
 *
 */
function reducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0_ngrx_domains__["State"].core; }
    switch (action.constructor) {
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/reducer.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_domains__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngrx_domains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__);

__WEBPACK_IMPORTED_MODULE_0_ngrx_domains__["State"].core = {};
//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/state.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__VIEWS__ = __webpack_require__(565);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app__["a"]; });




//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/index.js.map

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

//# sourceMappingURL=/Users/H3rN4n/Documents/workspace/05GDG/14-Meetup030317/basic-app/src/router.js.map

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <br>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-3\">NgRx Domains!</h1>\n  <p class=\"lead\">Demostración práctica sobre el uso de Ngrx-Domains simplificando la implementación LazyLoad de Modulos y lógica de Rxjs</p>\n  <hr class=\"my-4\">\n  <p>Podés encontrar los slides de esta demo en el siguiente link</p>\n  <p class=\"lead\">\n    <a class=\"btn btn-primary btn-lg\" href=\"https://h3rn4n.github.io/angular2-domains-presentation/\" role=\"button\">Ver Slides</a>\n  </p>\n</div>"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light\" style=\"background-color: #e3f2fd;\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <img src=\"/assets/rxjs.png\" alt=\"\" style=\"height: 40px\">\n  </a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\" [routerLinkActive]=\"['active']\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/list\" [routerLinkActive]=\"['active']\">List</a>\n      </li>\n    </ul>\n    <!--<form class=\"form-inline\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n        <button class=\"btn btn-outline-info my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>-->\n  </div>\n</nav>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">404: Not Found</h4>\n      <div class=\"card-block\">\n        <p>Hey! It looks like this page doesn't exist yet.</p>\n      </div>\n      <div class=\"card-footer\">\n        <button type=\"button\"\n                class=\"btn btn-primary\"\n                routerLink=\"/\">Take Me Home</button>\n      </div>        \n  </div>\n</div>"

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(411);


/***/ })

},[742]);
//# sourceMappingURL=main.bundle.map