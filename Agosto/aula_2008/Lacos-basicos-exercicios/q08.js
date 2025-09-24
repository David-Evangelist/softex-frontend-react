let nota1 = Number(prompt("Digite uma nota entre 0 e 10: "));
let nota2 = Number(prompt("Digite uma nota entre 0 e 10: "));
let somaNotas = 0;
let media = 0;

while (nota1 >= 0 && nota2 >=0) {
  somaNotas = nota1 + nota2;
  media = somaNotas / 2;
  console.log(`A média das notas é: ${media}`);
  nota1 = Number(prompt("Digite uma nota entre 0 e 10: "));
  nota2 = Number(prompt("Digite uma nota entre 0 e 10: "));
}
