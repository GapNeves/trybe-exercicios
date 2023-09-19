import Cliente from './cliente';
import ItemDoPedido from './itemDoPedido';

export default class Pedido {
  private _cliente: Cliente;
  private _itens: ItemDoPedido[] = [];
  private _pagamento: string;
  private _desconto = 0;

  constructor(cliente: Cliente, itens: ItemDoPedido[], pagamento: string, desconto: number) {
    this._cliente = cliente;
    this._itens = itens;
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  get cliente(): Cliente {
    return this._cliente;
  }
  set cliente(value: Cliente) {
    this._cliente = value;
  }

  get itens(): ItemDoPedido[] {
    return this._itens;
  }
  set itens(value: ItemDoPedido[]) {
    if (value.length <= 0) {
      throw new Error('O pedido deve conter pelo menos um item.');
    }

    this._itens = value;
  }

  get pagamento(): string {
    return this._pagamento;
  }
  set pagamento(value: string) {
    this._pagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }
  set desconto(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._desconto = value;
  }

  totalDoPedido(): number {
    return this._itens.reduce((valorAnterior, item) => {
      const total = valorAnterior + item.preco;

      return total;
    }, 0);
  }

  totalComDesconto(): number {
    return this.totalDoPedido() * (1 - this._desconto);
  }
}
