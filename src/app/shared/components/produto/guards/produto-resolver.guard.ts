import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Produto } from './../models/produto';
import { ProdutoService } from './../produto.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoResolverGuard implements Resolve<Produto> {

  constructor(private service: ProdutoService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Produto | Observable<Produto> | Promise<Produto> {

    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of<Produto>({
      id: null,
      codigo: null,
      descricao: null,
      valorUnitario: null
    });

  }



}
