import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesListaComponent } from './clientes-lista.component';
import { ClienteDetalheComponent } from './cliente-detalhe.component';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteService } from './cliente.service';
import { FormsModule} from '@angular/forms';

@NgModule({ 
    imports : [ 
        CommonModule,
        ClienteRoutingModule,
        FormsModule       
    ],
     declarations : [
         ClientesListaComponent,
         ClienteDetalheComponent
     ],
     exports : [ ClientesListaComponent],
     providers: [
         ClienteService
     ]
})
export class ClientesModule {}