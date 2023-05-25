import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Estado } from "../components/models/estado";
import { Cidade } from "../components/models/cidade";
import { Observable } from "rxjs";

@Injectable()
export class EstadoCidadeService {

  private readonly API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades';

  constructor(private http: HttpClient) { }

  getEstados(): Observable<Estado[]> {
    let params = new HttpParams().set('orderBy', 'nome');
    return this.http.get<Estado[]>(`${this.API_URL}/estados`, { params });
  }

  getCidadesPorEstado(id: number) {
    return this.http.get<Cidade[]>(`${this.API_URL}/estados/${id}/municipios`);
  }

  buscarCidadePeloNome(nome: string) {
    return this.http.get<Cidade>(`${this.API_URL}/municipios/${nome}`);
  }

}
