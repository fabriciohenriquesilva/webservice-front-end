import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Estado } from "../components/models/estado";

@Injectable()
export class EstadoCidadeService {

  private readonly API_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

  constructor(private http: HttpClient) { }

  getEstados() {
    return this.http.get<Estado[]>(this.API_URL);
  }

}