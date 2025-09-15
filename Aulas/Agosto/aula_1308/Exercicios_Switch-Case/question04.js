let number1 = Number(prompt("Digite o primeiro número:"));
let number2 = Number(prompt("Digite o segundo número:"));
let result;

let opcaoOperacao = prompt("Escolha qual operação deseja realizar ( +, - , * , /):");

switch (opcaoOperacao) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;
  default:
    console.log(
      "Conceito inválido! Escolha algum desses operadores: +, -, *, /"
    );
}
