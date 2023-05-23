import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { ClienteService } from './cliente.service';
import { Cliente } from './models/cliente';
import { Page } from './../models/page';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clientes!: Cliente[];
  page!: Page<Cliente>;

  constructor(private service: ClienteService, private router: Router) {
    this.service.list().subscribe((data: Page<Cliente>) => {
      console.log(data);
      this.clientes = data.content;
      this.page = data;
    })
  }

  ngOnInit(): void {
  }

  onSelectionChanged(row: any) {
    console.log(row);
    console.log(row.selectedRowKeys);
    console.log(row.selectedRowsData);
  }

  onClick = (event: any) => {
    const item = { ...event.row.data};
    event.event.preventDefault();
    console.log(event.row);
    console.log(item);
    this.router.navigate(['editar', item.id]);
  }

}


