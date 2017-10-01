import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cliente } from './clientes/cliente.model';

export class InMemoryDataService implements InMemoryDbService {
    
    createDb() : {} {
        let clientes : Cliente[] = [
            {id:1, nome: 'Jose C Macoratti', email:'macoratti@yahoo.com',telefone: '(21) 9987-6666'},
            {id:2, nome: 'Paulo Lima', email:'paulolima@yahoo.com',telefone: '(31) 9787-3333'},
            {id:3, nome: 'Suzana Ribeiro', email:'suzana@net.com',telefone: '(41) 8887-4444'},
            {id:4, nome: 'Paola Fernandes', email:'paolafernand@hotmail.com',telefone: '(13) 8987-5555'},
            {id:5, nome: 'Amelia Souza', email:'amelia@bol.com.br',telefone: '(11) 9808-7777'}
         ];
         return {clientes};
    }
}
