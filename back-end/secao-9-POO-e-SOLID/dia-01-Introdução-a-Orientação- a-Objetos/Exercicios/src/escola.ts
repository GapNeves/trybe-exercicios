export default class Estudante {
  private _matricula: string;
  private _nome: string;
  private _provas: number[] = Array();
  private _trabalhos: number[] = Array();

  constructor(matricula: string, nome: string, provas: number[], trabalhos: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this.provas = provas;
    this.trabalhos = trabalhos;
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._nome = value;
  }

  get provas(): number[] {
    return this._provas;
  }

  set provas(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A pessoa estudante deve possuir 4 notas de provas.');
    }

    this._provas = value;
  }

  get trabalhos(): number[] {
    return this._trabalhos;
  }

  set trabalhos(value: number[]) {
    if (value.length !== 2) {
      throw new Error('A pessoa estudante deve possuir 2 notas de trabalhos.');
    }

    this._trabalhos = value;
  }

  sumNotas(): number {
    return [...this.provas, ...this.trabalhos].reduce((notaAnterior, nota) => {
      nota += notaAnterior;
      return nota;
    }, 0);
  }

  medNotas(): number {
    const sumNotas = this.sumNotas();
    const divisor = this.provas.length + this.trabalhos.length;
    const media = parseFloat((sumNotas / divisor).toFixed(2));

    return media;
  }
}
