import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Estado } from "../components/models/estado";
import { Cidade } from "../components/models/cidade";

@Injectable()
export class EstadoCidadeService {

  private readonly API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private http: HttpClient) { }

  getEstados() {
    let params = new HttpParams().set('orderBy', 'nome');
    return this.http.get<Estado[]>(this.API_URL, { params });
  }

  getCidadesPorEstado(id: number) {
    return this.http.get<Cidade[]>(`${this.API_URL}/${id}/municipios`);
  }

}