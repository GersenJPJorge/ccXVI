import {Component, OnInit} from '@angular/core';

import { Cliente } from './cliente.model';
import { ClienteService} from './cliente.service';

@Component({
    moduleId: module.id,
    selector : 'clientes-lista',
    templateUrl: 'clientes-lista.component.html'
})
export class ClientesListaComponent implements OnInit {
    
    clientes : Cliente[] ;

    constructor(private clienteService : ClienteService){}

    ngOnInit() : void {
        this.clienteService.getClientes()
        .then((clientes : Cliente[]) => {
            this.clientes = clientes;
        }).catch(err => console.log(err));
     }
}