import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';

@Component({
    moduleId: module.id,
    selector : 'cliente-detalhe',
    templateUrl : 'cliente-detalhe.component.html'   
})
export class ClienteDetalheComponent implements OnInit  {

      cliente : Cliente;
      private isNovo : boolean= true;

      constructor(
         private clienteService : ClienteService,
         private route : ActivatedRoute,
         private location : Location
      ) {}

       ngOnInit(): void {
           this.cliente = new Cliente(0,'','','',);
           this.route.params.forEach((params: Params)=>{
               let id: number = +params['id'];

          if(id){

           this.isNovo = false;

           this.clienteService.getCliente(id)
               .then((cliente: Cliente)=> {
                    console.log(cliente);
                    this.cliente = cliente;
               });
          }
        });
    }

    getFormGroupClass(isValid : boolean, isPristine: boolean) : {} {
        return {
            'form-group' : true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    getFormControlClass(isValid : boolean, isPristine: boolean) : {} {
        return {
            'form-control' : true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    onSubmit() : void {

        if (this.isNovo) {
            console.log('cadastrar');
        } else {
            console.log('alterar');
        }
    }
}