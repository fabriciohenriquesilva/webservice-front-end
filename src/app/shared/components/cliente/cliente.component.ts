import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.list().subscribe((data: Page<Cliente>) => {
      console.log(data);
      this.clientes = data.content;
      this.page = data;
    });

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
    this.router.navigate(['editar', item.id], { relativeTo: this.route });
  }

  cadastrarCliente(event: any) {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }

}


