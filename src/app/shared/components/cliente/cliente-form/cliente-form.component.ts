import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from './../models/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  cliente!: Cliente;

  constructor(
    private route: ActivatedRoute
  ) {
     this.cliente = this.route.snapshot.data['cliente']
  }

  ngOnInit(): void {
  }

}
