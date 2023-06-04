import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from './../models/cliente';
import { ClienteService } from './../cliente.service';
import {NotificacaoService} from "../../../services/notificacao.service";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  cliente!: Cliente;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ClienteService,
    private notificacaoService: NotificacaoService
  ) {
     this.cliente = this.route.snapshot.data['cliente'];
  }

  ngOnInit(): void {
  }

  salvar() {
    console.log(this.cliente);
    this.service.save(this.cliente)
      .subscribe( {
        next: (data) => {
          this.notificacaoService.mostrarSucesso('Salvo com sucesso!');
          console.log(data);
        }
      });
    this.voltar();
  }

  voltar() {
    this.router.navigate(['pages/clientes']);
  }

  excluir() {
    console.log(this.cliente);
    this.service.remove(this.cliente)
      .subscribe({
        next: () => {
          this.notificacaoService.mostrarSucesso('Excluído com sucesso!');
          setTimeout( () => this.voltar(), 2000);
        },
        error: (e) => {
          this.notificacaoService.mostrarErro(e.error.mensagem);
        }
      });
  }

}
