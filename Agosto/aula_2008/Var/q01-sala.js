let colors = ["vermelho", "verde", "azul"];

colors.push("amarelo");
console.log(colors);

colors.shift();
console.log(colors);

console.log(colors.indexOf("verde"));


console.log(contaElementos(colors))


function contaElementos(array) {
  return array.length;
}
