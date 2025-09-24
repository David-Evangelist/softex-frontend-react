/*
8. Reajuste salarial:
Peça o salário atual. Se for menor que 2000, aumente 15%. Senão, aumente 7%. Mostre o novo salário 
*/

let salario = Number(prompt("Digite o salário: "));
let novoSalario;

if (salario < 2000) {
  novoSalario = salario * 1.15;

  // O mesmo que --> salario = salario * 1.15;
  salario *= 1.15;

  console.log(salario);
  console.log(novoSalario);
} else {
  salario *= 1.07;
  console.log(salario);
}

// #### USANDO += ####

// let salario = Number(prompt("Digite o salário: "));

// if (salario < 2000) {
//   salario += salario * 0.15;
//   console.log(salario);
// } else {
//   salario += salario * 0.07;
//   console.log(salario);
// }
