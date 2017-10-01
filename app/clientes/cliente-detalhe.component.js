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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var cliente_model_1 = require("./cliente.model");
var cliente_service_1 = require("./cliente.service");
var ClienteDetalheComponent = /** @class */ (function () {
    function ClienteDetalheComponent(clienteService, route, location) {
        this.clienteService = clienteService;
        this.route = route;
        this.location = location;
        this.isNovo = true;
    }
    ClienteDetalheComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cliente = new cliente_model_1.Cliente(0, '', '', '');
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (id) {
                _this.isNovo = false;
                _this.clienteService.getCliente(id)
                    .then(function (cliente) {
                    console.log(cliente);
                    _this.cliente = cliente;
                });
            }
        });
    };
    ClienteDetalheComponent.prototype.getFormGroupClass = function (isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    };
    ClienteDetalheComponent.prototype.getFormControlClass = function (isValid, isPristine) {
        return {
            'form-control': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    };
    ClienteDetalheComponent.prototype.onSubmit = function () {
        if (this.isNovo) {
            console.log('cadastrar');
        }
        else {
            console.log('alterar');
        }
    };
    ClienteDetalheComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cliente-detalhe',
            templateUrl: 'cliente-detalhe.component.html'
        }),
        __metadata("design:paramtypes", [cliente_service_1.ClienteService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ClienteDetalheComponent);
    return ClienteDetalheComponent;
}());
exports.ClienteDetalheComponent = ClienteDetalheComponent;
//# sourceMappingURL=cliente-detalhe.component.js.map