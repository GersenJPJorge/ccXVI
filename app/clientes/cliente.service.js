"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
        // app é a pasta de onde fizermos a chamada
        // clientes é o nome da variável na classe InMemoryDataService
        this.clientesUrl = 'app/clientes';
    }
    ClienteService.prototype.getClientes = function () {
        return this.http.get(this.clientesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.trataErro);
    };
    ClienteService.prototype.trataErro = function (err) {
        console.log('Erro : ', err);
        return Promise.reject(err.message || err);
    };
    ClienteService.prototype.getCliente = function (id) {
        return this.getClientes()
            .then(function (clientes) { return clientes.find(function (cliente) { return cliente.id === id; }); });
    };
    ClienteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map