/*
4. Média e aprovação
*/

let nota1 = Number(prompt("Informe a 1ª nota: "));
let nota2 = Number(prompt("Informe a 2ª nota: "));
let nota3 = Number(prompt("Informe a 3ª nota: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log(`Aluno aprovado!`);
} else {
  console.log(`Aluno reprovado!`);
}

// #### USANDO UM ARRAY ####

// let notas = [];

// notas.push(Number(prompt("Informe a 1ª nota: ")));
// notas.push(Number(prompt("Informe a 2ª nota: ")));
// notas.push(Number(prompt("Informe a 3ª nota: ")));
// console.log(notas);

// let media = (notas[0] + notas[1] + notas[2]) / notas.length;
// console.log(media);

// if (media >= 7) {
//   console.log(`Aluno aprovado!`);
// } else {
//   console.log(`Aluno reprovado!`);
// }
