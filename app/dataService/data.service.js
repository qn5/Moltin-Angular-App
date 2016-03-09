System.register(['angular2/core', './service.details', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, service_details_1, http_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_details_1_1) {
                service_details_1 = service_details_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                    this.moltin = new Moltin({ publicId: service_details_1.Statics.PUBLIC_ID });
                }
                DataService.prototype.authenticate = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.moltin.Authenticate(function (response) {
                            resolve(response);
                        });
                    });
                };
                DataService.prototype.accessToken = function () {
                    var id = service_details_1.Statics.PUBLIC_ID;
                    //var secret = Statics.SECRET;
                    var creds = "client_id=" + id + "&grant_type=implicit";
                    console.log(creds);
                    return this.http.post('https://api.molt.in/oauth/access_token?', creds);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map