import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Produto } from './models/produto';
import { ProdutoService } from './produto.service';
import { Page } from './../models/page';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  produtos!: Produto[];
  page!: Page<Produto>;

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.list().subscribe(
      (data: Page<Produto>) => {
        this.page = data;
        this.produtos = data.content;
      }
    )
  }

  detalhar = (event: any) => {
    const produto = { ...event.row.data };
    event.event.preventDefault();
    this.router.navigate(['editar', produto.id], { relativeTo: this.route });
  }

  cadastrarProduto() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

}
