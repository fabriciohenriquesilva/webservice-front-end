import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { NotaFiscal } from './../models/nota-fiscal';
import { Cliente } from './../../cliente/models/cliente';
import { ClienteService } from './../../cliente/cliente.service';
import { Produto } from './../../produto/models/produto';
import { ProdutoService } from './../../produto/produto.service';
import { lastValueFrom } from "rxjs";
import { NotaFiscalService } from "../nota-fiscal.service";

@Component({
  selector: 'app-nota-fiscal-form',
  templateUrl: './nota-fiscal-form.component.html',
  styleUrls: ['./nota-fiscal-form.component.scss']
})
export class NotaFiscalFormComponent implements OnInit {

  notaFiscal!: NotaFiscal;
  clientes!: Cliente[];
  produtos!: Produto[];

  cliente!: Cliente;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private service: NotaFiscalService,
  ) {
    this.atualizarValoresDoItemNaGrade = this.atualizarValoresDoItemNaGrade.bind(this);
  }

  ngOnInit(): void {
    this.notaFiscal = this.route.snapshot.data['notaFiscal'];

    if(!this.notaFiscal.itens) {
      this.notaFiscal.itens = [];
    }

    this.clienteService.list().subscribe(
      (data: any) => {
        this.clientes = data.content;
        this.cliente = this.clientes.find( (cliente) => cliente.id == this.notaFiscal?.cliente?.id )!
      }
    );

    this.produtoService.list().subscribe(
      (data: any) => {
        this.produtos = data.content;
      }
    )
  }

  salvar() {
    console.log(this.notaFiscal);
    this.service.save(this.notaFiscal).subscribe();
  }

  voltar() {
    this.location.back();
  }

  salvarEFechar() {
    this.salvar();
    this.voltar();
  }

  excluir() {
    this.service.remove(this.notaFiscal.id!);
  }

  setCliente(event: any) {
    this.notaFiscal.cliente = event.value;
  }

  buscarProduto(id: number) {
    return this.produtoService.loadById(id);
  }

  atualizarValoresDoItemNaGrade(newData: any, value: any, currentRowData: any) {

    return lastValueFrom(this.buscarProduto(value))
      .then( data => {
        newData.produto = data;
        newData.valorUnitario = data.valorUnitario;
        newData.notaFiscal = this.notaFiscal.numero;
        if(currentRowData.quantidade) {
          newData.valorTotal = newData.valorUnitario * currentRowData.quantidade;
        }
      });
  }

  atualizarPrecoTotalPelaQuantidade(newData: any, value: any, currentRowData: any) {
    newData.quantidade = value;
    if(value) {
      newData.valorTotal = currentRowData.valorUnitario * value;
    }
  }

  atualizarPrecoTotalPeloPrecoUnitario(newData: any, value: any, currentRowData: any) {
    newData.valorUnitario = value;
    if(value) {
      newData.valorTotal = currentRowData.quantidade * value;
    }
  }

  calcularValorTotalDaNota(event: any) {
    console.log(event.data);
    const valorTotal = this.notaFiscal.itens?.map(item => item.valorTotal!)
      .reduce( ((soma, valor) => soma += valor), 0);
    this.notaFiscal.valorTotal = valorTotal!;
  }

}
