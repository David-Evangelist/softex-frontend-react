/*
12. IF/ELSE – Autorização para entrar:
Peça a idade. Se for maior ou igual a 18, mostre “Entrada permitida”. Senão, “Entrada
proibida”.
*/

let age = Number(prompt("Digite sua idade: "));

if (age >= 18) {
  console.log(`Entrada permitida.`);
} else {
  console.log(`Entrada proibida.`);
}
