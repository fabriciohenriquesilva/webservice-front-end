import { Injectable } from '@angular/core';
import notify from "devextreme/ui/notify";

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor() { }

  mostrarErro(mensagem: string) {
    notify(
      {
        message: mensagem,
        width: 550,
        position: {
          at: 'bottom',
          my: 'bottom',
          of: 'h3' }
      },
      'error',
      2000
    );
  }

  mostrarSucesso(mensagem: string) {
    notify(
      {
        message: mensagem,
        width: 550,
        position: {
          at: 'bottom',
          my: 'bottom',
          of: 'h3' }
      },
      'success',
      2000
    );
  }

}
