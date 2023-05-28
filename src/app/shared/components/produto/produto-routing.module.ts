import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoComponent } from './produto.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoResolverGuard } from './guards/produto-resolver.guard';

const routes: Routes = [
  { path: '', component: ProdutoComponent },
  {
    path: 'novo',
    component: ProdutoFormComponent,
    resolve: {
      produto: ProdutoResolverGuard
    }
  },
  {
    path: 'editar/:id',
    component: ProdutoFormComponent,
    resolve: {
      produto: ProdutoResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
