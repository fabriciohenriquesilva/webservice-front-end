import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotaFiscalComponent } from './nota-fiscal.component';
import { NotaFiscalFormComponent } from './nota-fiscal-form/nota-fiscal-form.component';
import { NotaFiscalResolverGuard } from './guards/nota-fiscal-resolver.guard';

const routes: Routes = [
  { path: '', component: NotaFiscalComponent },
  {
    path: 'novo',
    component: NotaFiscalFormComponent,
    resolve: {
      notaFiscal: NotaFiscalResolverGuard
    }
  },
  {
    path: 'editar/:id',
    component: NotaFiscalFormComponent,
    resolve: {
      notaFiscal: NotaFiscalResolverGuard
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotaFiscalRoutingModule { }
