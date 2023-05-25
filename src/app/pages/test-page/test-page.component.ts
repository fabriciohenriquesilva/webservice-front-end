import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/shared/components/models/cidade';

import { Estado } from 'src/app/shared/components/models/estado';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit, AfterContentChecked {

  estado: Estado = {
    sigla: 'MG'
  };

  cidade: Cidade = {
    nome: 'Rio de Janeiro'
  };

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  atualizarEstado(event: any) {
    this.estado = event;
  }

  atualizarCidade(event: any) {
    this.cidade = event;
  }

}
