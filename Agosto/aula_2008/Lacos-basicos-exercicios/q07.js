let password = prompt("Digite a senha: ");

while (password != 1234) {
    console.log("Senha inválida. Tente novamente.");
    password = prompt("Digite a senha: ");
}