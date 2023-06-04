import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { NotaFiscal } from './../models/nota-fiscal';
import { NotaFiscalService } from './../nota-fiscal.service';

@Injectable({
  providedIn: 'root'
})
export class NotaFiscalResolverGuard implements Resolve<NotaFiscal> {

  constructor(private service: NotaFiscalService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): NotaFiscal | Observable<NotaFiscal> | Promise<NotaFiscal> {

    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of<NotaFiscal>({
      id: null,
      numero: null,
      cliente: null,
      itens: null,
      data: null,
      valorTotal: null
    });

  }



}
