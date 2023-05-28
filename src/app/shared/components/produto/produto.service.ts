import { Injectable } from '@angular/core';
import { Produto } from './models/produto';
import { CrudService } from '../../services/crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends CrudService<Produto> {

  constructor(protected override http: HttpClient) {
    super(http, '/api/produtos');
  }
}
