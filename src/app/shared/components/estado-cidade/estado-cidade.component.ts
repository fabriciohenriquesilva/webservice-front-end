import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxFormModule } from 'devextreme-angular';
import { EstadoCidadeService } from '../../services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estado-cidade',
  templateUrl: './estado-cidade.component.html',
  styleUrls: ['./estado-cidade.component.scss']
})
export class EstadoCidadeComponent implements OnInit {

  localidade = {
    estado: ['MG', 'SP'],
    cidade: ['Unai', 'São Paulo']
  };

  estados!: string[];

  constructor(private service: EstadoCidadeService, private http: HttpClient) {

    this.service.getEstados()
      .subscribe(dados => {
        this.estados = dados.map(e => e.sigla);
      });

  }

  ngOnInit(): void {

  };
}

@NgModule({
  declarations: [EstadoCidadeComponent],
  imports: [CommonModule, DxFormModule],
  exports: [EstadoCidadeComponent]
})
export class EstadoCidadeModule { }