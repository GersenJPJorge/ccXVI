"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var clientes = [
            { id: 1, nome: 'Jose C Macoratti', email: 'macoratti@yahoo.com', telefone: '(21) 9987-6666' },
            { id: 2, nome: 'Paulo Lima', email: 'paulolima@yahoo.com', telefone: '(31) 9787-3333' },
            { id: 3, nome: 'Suzana Ribeiro', email: 'suzana@net.com', telefone: '(41) 8887-4444' },
            { id: 4, nome: 'Paola Fernandes', email: 'paolafernand@hotmail.com', telefone: '(13) 8987-5555' },
            { id: 5, nome: 'Amelia Souza', email: 'amelia@bol.com.br', telefone: '(11) 9808-7777' }
        ];
        return { clientes: clientes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map