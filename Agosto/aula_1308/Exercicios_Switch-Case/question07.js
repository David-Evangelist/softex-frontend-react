let opcaoFrete = Number(
  prompt(
    "Escolha a opção de transporte (1- Motoboy, 2- Correios, 3- Transportadora):"
  )
);

let frete;

switch (opcaoFrete) {
  case 1:
    frete = 10;
    console.log(`O frete do Motoboy é R$ ${frete.toFixed(2)}`);
    break;
  case 2:
    frete = 20;
    console.log(`O frete dos Correios é R$ ${frete.toFixed(2)}`);
    break;
  case 3:
    frete = 35;
    console.log(`O frete da Transportadora é R$ ${frete.toFixed(2)}`);
    break;
  default:
    console.log("Opção inválida! Escolha um número de 1 a 3.");
}
