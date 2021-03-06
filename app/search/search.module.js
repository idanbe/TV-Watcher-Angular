"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shared_module_1 = require("./../shared/shared.module");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var search_component_1 = require("./search.component");
var search_service_1 = require("./search.service");
var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forChild([
                { path: 'search', component: search_component_1.SearchComponent }
            ])
        ],
        declarations: [
            search_component_1.SearchComponent
        ],
        exports: [
            search_component_1.SearchComponent
        ],
        providers: [
            search_service_1.SearchService
        ]
    })
], SearchModule);
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map