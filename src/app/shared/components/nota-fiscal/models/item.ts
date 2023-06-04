import { Produto } from './../../produto/models/produto';

export interface Item {

  id: number | null;
  numeroSequencial: number | null;
  produto: Produto | null;
  quantidade: number | null;
  valorUnitario: number | null;
  valorTotal: number | null;

}
