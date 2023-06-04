import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxButtonModule, DxFormModule, DxNumberBoxModule, DxDateBoxModule, DxSelectBoxModule, DxLookupModule, DxDropDownBoxModule, DxTextBoxModule } from 'devextreme-angular';

import { NotaFiscalRoutingModule } from './nota-fiscal-routing.module';
import { NotaFiscalComponent } from './nota-fiscal.component';
import { NotaFiscalFormComponent } from './nota-fiscal-form/nota-fiscal-form.component';


@NgModule({
  declarations: [
    NotaFiscalComponent,
    NotaFiscalFormComponent
  ],
  imports: [
    CommonModule,
    NotaFiscalRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    DxNumberBoxModule,
    DxDateBoxModule,
    DxSelectBoxModule,
    DxLookupModule,
    DxDropDownBoxModule,
    DxTextBoxModule
  ]
})
export class NotaFiscalModule { }
