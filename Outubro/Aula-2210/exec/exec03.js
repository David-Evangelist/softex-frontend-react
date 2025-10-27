var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Animal = /** @class */ (function () {
  function Animal(raca, cor, tamanho) {
    this.raca = raca;
    this.tamanho = tamanho;
    this.cor = cor;
  }
  Animal.prototype.andar = function () {
    console.log("Animal está andando");
  };
  Animal.prototype.dormir = function () {
    console.log("Animal está dormindo");
  };
  Animal.prototype.emitirSom = function () {};
  return Animal;
})();
var Cachorro = /** @class */ (function (_super) {
  __extends(Cachorro, _super);
  function Cachorro() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Cachorro.prototype.emitirSom = function () {
    console.log("Latido");
  };
  return Cachorro;
})(Animal);
var Gato = /** @class */ (function (_super) {
  __extends(Gato, _super);
  function Gato() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Gato.prototype.emitirSom = function () {
    console.log("Miado");
  };
  return Gato;
})(Animal);
var pastorAlemao = new Cachorro("Pastor Alemão", "Preto e Marrom", 80);
var luluPomerania = new Cachorro("Lulu da Pomerânia", "Branco", 25);
luluPomerania.dormir();
