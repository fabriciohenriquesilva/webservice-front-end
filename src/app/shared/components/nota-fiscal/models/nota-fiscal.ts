import { Item } from './item';
import { Cliente } from './../../cliente/models/cliente';

export interface NotaFiscal {

  id: number | null;
  numero: number | null;
  cliente: Cliente | null;
  data: Date | null | number | string;
  itens: Item[] | null;
  valorTotal: number | null;

}
