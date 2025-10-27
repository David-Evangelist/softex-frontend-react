class Animal {
  raca: string;
  tamanho: number;
  cor: string;

  constructor(raca: string, cor: string, tamanho: number) {
    this.raca = raca;
    this.tamanho = tamanho;
    this.cor = cor;
  }

  andar(): void {
    console.log("Animal está andando")
  }
  dormir(): void {
    console.log("Animal está dormindo")
  }
  emitirSom(): void {}
}

class Cachorro extends Animal {
    emitirSom(): void {
        console.log("Latido")
    }
}
class Gato extends Animal {
    emitirSom(): void {
        console.log("Miado")
    }
}

let pastorAlemao = new Cachorro("Pastor Alemão", "Preto e Marrom", 80)
let luluPomerania = new Cachorro("Lulu da Pomerânia", "Branco", 25)


luluPomerania.dormir()