import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotaFiscalComponent } from './nota-fiscal.component';

const routes: Routes = [
  { path: '', component: NotaFiscalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotaFiscalRoutingModule { }
