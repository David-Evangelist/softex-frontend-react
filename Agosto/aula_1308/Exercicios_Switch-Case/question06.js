let opcaoEstacaoDoAno = Number(
  prompt(
    "Escolha um número de 1 a 4 para escolher a estação do ano (1- Verão, 2- Outono, 3- Inverno, 4- Primavera)):"
  )
);

switch (opcaoEstacaoDoAno) {
  case 1:
    console.log(`Verão`);
    break;
  case 2:
    console.log(`Outono`);
    break;
  case 3:
    console.log(`Inverno`);
    break;
  case 4:
    console.log(`Primavera`);
    break;
  default:
    console.log("Opção inválida! Escolha um número de 1 a 4.");
}
