import { Component, NgModule, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  estados!: Estado[];
  cidades: Cidade[] = [];

  @Input() cidade!: Cidade;
  @Input() estado!: Estado;

  @Output() estadoEmitter = new EventEmitter<Estado>();
  @Output() cidadeEmitter = new EventEmitter<Cidade>();

  constructor(private service: EstadoCidadeService) { }

  ngOnInit(): void {

    this.service.getEstados().subscribe((data: Estado[]) => {
      this.estados = data;

      if (this.estado) {
        const sigla = this.estado.sigla;
        const estadoSelecionado = this.estados.find(e => e.sigla == sigla);
        this.estado = estadoSelecionado!;
      }
    });

    if (this.cidade && !this.estado) {
      let nome = this.cidade.nome;
      nome = nome?.split(' ').join('-');
      this.service.buscarCidadePeloNome(nome!).subscribe(res => {
        this.cidades.push(res);
        this.cidade = res;
      });
    }
  };

  carregarCidadesOnSelect(event: any) {
    const estadoSelecionado: Estado = event.value;
    this.estadoEmitter.emit(estadoSelecionado);
    this.cidadeEmitter.emit({});
    this.buscarCidades(estadoSelecionado.id!);
  }

  emitirNovaCidade(event: any) {
    const cidadeSelecionada = event.value;
    this.cidadeEmitter.emit(cidadeSelecionada);
  }

  private buscarCidades(id: number) {
    this.service.getCidadesPorEstado(id)
      .subscribe((data: Cidade[]) => {
        this.cidades = data;
      });
  }
}

@NgModule({
  declarations: [EstadoCidadeComponent],
  imports: [CommonModule, DxFormModule, DxSelectBoxModule, FormsModule],
  exports: [EstadoCidadeComponent]
})
export class EstadoCidadeModule { }