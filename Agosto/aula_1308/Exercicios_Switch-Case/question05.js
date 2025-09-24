let opcaoCardapio = Number(
  prompt(
    "Escolha um número de 1 a 4 (1- Strogonoff, 2- Frango à parmegiana, 3- Feijoada, 4- Bobó de camarão)):"
  )
);

switch (opcaoCardapio) {
  case 1:
    console.log(`Strogonoff`);
    break;
  case 2:
    console.log(`Frango à parmegiana`);
    break;
  case 3:
    console.log(`Feijoada`);
    break;
  case 4:
    console.log(`Bobó de camarão`);
    break;
  default:
    console.log("Opção inválida! Escolha um número de 1 a 4.");
}
