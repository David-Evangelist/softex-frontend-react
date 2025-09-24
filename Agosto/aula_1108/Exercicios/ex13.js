/*
13. IF/ELSE IF/ELSE (Encadeado) – Faixa etária:
Peça a idade. Mostre no console:
- &quot;Criança&quot; se idade &lt; 12
- &quot;Adolescente&quot; se idade ≥ 12 e &lt; 18
- &quot;Adulto&quot; se idade ≥ 18 e &lt; 60
- &quot;Idoso&quot; se idade ≥ 60
*/

let age = Number(prompt("Digite sua idade: "));

if (isNaN(age) || age < 0) {
  console.log("Idade inválida. Por favor, insira um número positivo.");
} else if (age < 12) {
  console.log("Criança");
} else if (age >= 12 && age < 18) {
  console.log("Adolescente");
} else if (age >= 18 && age < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
