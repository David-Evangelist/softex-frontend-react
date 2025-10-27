class Pessoa {
  public name: string;
  public age: number;
  public height: number;
  private cpf: string;

  constructor(name: string, age: number, height: number, cpf: string) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.cpf = cpf;
  }
}

let david = new Pessoa("David", 22, 170, "15985385200")
console.log(david)