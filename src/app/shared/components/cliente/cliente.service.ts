import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs';

import { Cliente } from './models/cliente';
import { Page } from './../models/page';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly api = '/api/clientes'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Page<Cliente>>(this.api)
    .pipe(
      take(1)
    );
  }

  loadById(id: number) {
    return this.http.get<Cliente>(`${this.api}/${id}`)
    .pipe(
      take(1)
    )
  }
}
