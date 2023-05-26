import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap, pipe } from 'rxjs';

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
    );
  }

  save(cliente: Cliente) {
    if(cliente.id){
      return this.update(cliente)
    }
    return this.create(cliente);
  }

  remove(cliente: Cliente) {
    return this.http.delete(`${this.api}/${cliente.id}`);
  }

  private create(cliente: Cliente) {
    return this.http.post<Cliente>(this.api, cliente)
      .pipe(
        take(1)
      );
  }

  private update(cliente: Cliente) {
    return this.http.put<Cliente>(this.api, cliente)
      .pipe(
        take(1)
      );
  }


}
