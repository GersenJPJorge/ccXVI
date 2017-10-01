import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { ClientesListaComponent} from './clientes-lista.component'
import { ClienteDetalheComponent} from './cliente-detalhe.component'


const clienteRoutes: Routes =[
  {
      path : 'cliente',
      component: ClientesListaComponent
  },
  {
      path : 'cliente/salvar',
      component: ClienteDetalheComponent
  },
  {
      path : 'cliente/salvar/:id',
      component: ClienteDetalheComponent
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(clienteRoutes)
    ],
    exports : [RouterModule]
})
export class ClienteRoutingModule {}