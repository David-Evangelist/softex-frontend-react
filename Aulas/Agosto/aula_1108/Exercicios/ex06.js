/*
6. Positivo, negativo ou zero:
Peça um número e informe se é positivo, negativo ou zero.
*/

let num = Number(prompt("Digite um número: "));

if (num > 0) {
  console.log(`O número informado é Positivo.`);
} else if (num == 0) {
  console.log(`O número informado é Zero.`);
} else {
  console.log(`O número informado é Negativo.`);
}
