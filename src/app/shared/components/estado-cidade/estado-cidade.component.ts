import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxFormModule, DxSelectBoxModule } from 'devextreme-angular';
import { EstadoCidadeService } from '../../services';
import { Estado } from './../models/estado';
import { Cidade } from './../models/cidade';

@Component({
  selector: 'app-estado-cidade',
  templateUrl: './estado-cidade.component.html',
  styleUrls: ['./estado-cidade.component.scss']
})
export class EstadoCidadeComponent implements OnInit {

  localidade = {
    estado: null,
    cidade: null
  };

  estados!: Estado[];
  cidades!: Cidade[];
  estado!: Estado;
  cidade!: Cidade;

  constructor(private service: EstadoCidadeService) {
    this.service.getEstados().subscribe(data => {
      this.estados = data;
      this.localidade.estado = this.buscarEstadoInicial(data);
    });
  }

  ngOnInit(): void {
  };

  buscarEstadoInicial(estados: any) {
    return estados
      .filter((estado: Estado) => estado.sigla == 'MG')
      .map((estado: Estado) => estado.id)
      .pop();
  }

  buscarCidades(event: any) {
    this.service.getCidadesPorEstado(event.value)
      .subscribe((data: Cidade[]) => {
        this.cidades = data;
      });
  }
}

@NgModule({
  declarations: [EstadoCidadeComponent],
  imports: [CommonModule, DxFormModule, DxSelectBoxModule],
  exports: [EstadoCidadeComponent]
})
export class EstadoCidadeModule { }