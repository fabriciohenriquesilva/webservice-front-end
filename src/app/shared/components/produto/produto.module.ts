import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxButtonModule, DxFormModule } from 'devextreme-angular';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { ProdutoService } from './produto.service';
import { FormsModule } from '@angular/forms';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoFormComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    DxDataGridModule,
    DxButtonModule,
    DxFormModule
  ],
  exports: [ProdutoComponent],
  providers: [ProdutoService]
})
export class ProdutoModule { }
