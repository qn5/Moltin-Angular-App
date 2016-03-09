System.register(['angular2/core', 'angular2/common', '../dataService/data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, data_service_1;
    var Search;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Search = (function () {
                function Search(_dataService) {
                    this._dataService = _dataService;
                    this.term = new common_1.Control();
                }
                Search.prototype.search = function (searchParams) {
                    var _this = this;
                    var that = this;
                    this._dataService.authenticate()
                        .then(function (response) {
                        _this._dataService.moltin.Product.Search({ title: searchParams }, function (products) {
                            that.items = products;
                        });
                    });
                };
                Search = __decorate([
                    core_1.Component({
                        selector: 'search'
                    }),
                    core_1.View({
                        templateUrl: '/app/views/searchTop.html'
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], Search);
                return Search;
            }());
            exports_1("Search", Search);
        }
    }
});
//# sourceMappingURL=search.component.js.map