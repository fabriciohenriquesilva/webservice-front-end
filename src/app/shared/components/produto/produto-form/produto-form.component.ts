import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Produto } from './../models/produto';
import { ProdutoService } from './../produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

  produto!: Produto;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.produto = this.route.snapshot.data['produto'];
  }

  salvar() {
    this.service.save(this.produto)
      .subscribe();
    this.voltar();
  }

  voltar() {
    this.location.back();
  }

  excluir() {
    this.service.remove(this.produto.id!)
      .subscribe();
    this.voltar();
  }

}
