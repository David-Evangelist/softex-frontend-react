let opcaoLetraConceito = prompt(
  "Escolha uma letra de conceito de A a E para classificar a nota. (A - Excelente, B - Ótimo, C - Bom, D - Regular, E - Reprovado)."
).toUpperCase();

switch (opcaoLetraConceito) {
  case "A":
    console.log("Excelente");
    break;
  case "B":
    console.log("Ótimo");
    break;
  case "C":
    console.log("Bom");
    break;
  case "D":
    console.log("Regular");
    break;
  case "E":
    console.log("Reprovado");
    break;
  default:
    console.log("Conceito inválido! Escolha uma letra de A a E.");
}
