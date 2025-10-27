class Aluno {
  public name: string;
  public nota: number;

  constructor(name: string, nota: number) {
    this.name = name;
    this.nota = nota;
  }

  apresentar() {
    return `Olá, me chamo ${this.name} e minha nota é ${this.nota}`;
  }
}

let aluno1: Aluno = new Aluno("David", 8);

console.log(aluno1.apresentar());
