import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { take, tap } from 'rxjs';

import { Page } from './../components/models/page';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T extends { id?: number | null }> {

  constructor(
    protected http: HttpClient,
    @Inject(String) private API_URL: string
  ) { }

  list() {
    let params = new HttpParams();
    params = params.set('size', 500);
    return this.http.get<Page<T>>(this.API_URL, { params })
      .pipe(
        take(1)
      )
  }

  loadById(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`)
      .pipe(
        take(1)
      );
  }

  private create(entity: T) {
    return this.http.post(this.API_URL, entity)
      .pipe(
        take(1)
      );
  }

  private update(entity: T) {
    return this.http.put(this.API_URL, entity)
      .pipe(
        take(1)
      );
  }

  save(entity: T) {
    if (entity.id) {
      return this.update(entity);
    }
    return this.create(entity);
  }

  remove(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}

