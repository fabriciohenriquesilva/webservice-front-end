import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NotaFiscal } from './models/nota-fiscal';
import { CrudService } from '../../services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class NotaFiscalService extends CrudService<NotaFiscal>{

  constructor(protected override http: HttpClient) {
      super(http, '/api/notas');
  }
}
