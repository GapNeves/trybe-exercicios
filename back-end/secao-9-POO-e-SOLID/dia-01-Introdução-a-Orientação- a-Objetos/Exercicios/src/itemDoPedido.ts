export default class ItemDoPedido {
  private _nome: string;
  private _preco: number;

  constructor(nome: string, price: number) {
    this._nome = nome;
    this._preco = price;
  }

  get nome(): string {
    return this._nome;
  }
  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no minimo 3 caracters.');
    }

    this._nome = value;
  }

  get preco(): number {
    return this._preco;
  }
  set preco(value: number) {
    this._preco = value;
  }
}
