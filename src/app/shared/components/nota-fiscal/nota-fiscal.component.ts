import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotaFiscal } from './models/nota-fiscal';
import { NotaFiscalService } from './nota-fiscal.service';

@Component({
  selector: 'app-nota-fiscal',
  templateUrl: './nota-fiscal.component.html',
  styleUrls: ['./nota-fiscal.component.scss']
})
export class NotaFiscalComponent implements OnInit {

  notasFiscais!: NotaFiscal[];

  constructor(
    private service: NotaFiscalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.list().subscribe(
      (data: any) => {
        console.log(data.content)
        this.notasFiscais = data.content
      }
    )
  }

  cadastrarNotaFiscal() {
    this.router.navigate(['novo'], { relativeTo: this.route } );
  }

  detalhar = (event: any) => {
    event.event.preventDefault();
    const notaFiscal = { ...event.row.data };
//     console.log(notaFiscal)
    this.router.navigate(['editar', notaFiscal.id], { relativeTo: this.route } );
  }

}
