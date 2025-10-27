export class Livro {
  public titulo: string;
  public autor: string;
  public disponivel: boolean;

  constructor(titulo: string, autor: string) {
    this.autor = autor;
    this.titulo = titulo;
    this.disponivel = true;
  }
}

export class Usuario {
  public nome: string;
  public listaDeLivros: Livro[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  public listarLivrosEmprestados() {
    if (this.listaDeLivros.length === 0) {
      console.log("Sua lista está vazia!");
      console.log("");
    } else {
      console.log(this.listaDeLivros);
      console.log("");
    }
  }

  public pegarLivro(livro: Livro) {
    if (livro.disponivel) {
      livro.disponivel = false;
      this.listaDeLivros.push(livro);
      console.log(`Lista de Livos Emprestados do usuário ${this.nome}:`);
      console.log(this.listaDeLivros);
      console.log("");
    } else {
      console.log("Livro está indisponível!");
    }
  }

  public devolverLivro(livro: Livro) {
    if (!livro.disponivel) {
      let indiceLivro = this.listaDeLivros.indexOf(livro);

      if (indiceLivro !== -1) {
        this.listaDeLivros.splice(indiceLivro, 1);
        livro.disponivel = true;
        console.log(`Livro ${livro.titulo} foi devolvido com sucesso!`);
        console.log("");
      }
    }
  }
}

let user1 = new Usuario("User1");
let user2 = new Usuario("User2");
let user3 = new Usuario("User3");

let livro1 = new Livro("As Cronicas", "Fulano");
let livro2 = new Livro("As Aventuras", "Siclano");
let livro3 = new Livro("Era uma vez", "Beltrano");

user1.listarLivrosEmprestados();
user1.pegarLivro(livro1);

user2.listarLivrosEmprestados();

user1.devolverLivro(livro1);

user2.pegarLivro(livro1);
user2.pegarLivro(livro3);

user3.pegarLivro(livro2);
user3.pegarLivro(livro1);

user1.listarLivrosEmprestados();
