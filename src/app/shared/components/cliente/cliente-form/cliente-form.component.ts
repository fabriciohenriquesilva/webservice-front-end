import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from './../models/cliente';
import { ClienteService } from './../cliente.service';

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
    private service: ClienteService
  ) {
     this.cliente = this.route.snapshot.data['cliente'];
  }

  ngOnInit(): void {
  }

  salvar() {
    console.log(this.cliente);
    this.service.save(this.cliente)
      .subscribe( data => console.log(data));
    this.voltar();
  }

  voltar() {
    this.router.navigate(['pages/clientes']);
  }

  excluir() {
    console.log(this.cliente);
    this.service.remove(this.cliente)
      .subscribe();
    this.voltar();
  }

}
