let opcaoGeneroFilme = prompt("Digite um tipo de gênero de filmes: ").toUpperCase();

switch (opcaoGeneroFilme) {
  case "AÇÃO":
    console.log("Explosões e perseguições emocionantes!");
    break;
  case "COMÉDIA":
    console.log("Prepare-se para rir!");
    break;
  case "DRAMA":
    console.log("Histórias emocionantes e profundas!");
    break;
  case "TERROR":
    console.log("Prepare-se para sustos!");
    break;
  default:
    console.log("Gênero não encontrado!");
}