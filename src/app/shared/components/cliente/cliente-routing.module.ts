import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './cliente.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteResolverGuard } from './guards/cliente-resolver.guard';

const routes: Routes = [
  { path: '', component: ClienteComponent },
  {
    path: 'editar/:id',
    component: ClienteFormComponent,
    resolve: {
      cliente: ClienteResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
