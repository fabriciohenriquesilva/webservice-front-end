import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxButtonModule, DxFormModule } from 'devextreme-angular';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteService } from './cliente.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteComponent } from './cliente.component';

@NgModule({
  declarations: [ClienteComponent, ClienteFormComponent],
  imports: [CommonModule, ClienteRoutingModule, DxDataGridModule, DxButtonModule, DxFormModule],
  exports: [ClienteComponent, ClienteFormComponent],
  providers: [ClienteService]
})
export class ClienteModule { }
