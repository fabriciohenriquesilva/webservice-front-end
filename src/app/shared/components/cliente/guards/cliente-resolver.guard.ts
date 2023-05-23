import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Cliente } from './../models/cliente';
import { ClienteService } from './../cliente.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteResolverGuard implements Resolve<Cliente> {

  constructor(private service: ClienteService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Cliente | Observable<Cliente> | Promise<Cliente> {

    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of<Cliente>({
      id: null,
      codigo: null,
      nome: null
    });

  }



}
