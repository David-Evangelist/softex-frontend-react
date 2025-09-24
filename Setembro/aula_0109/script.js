let textoOriginal = "";
let bool = false;

function mudarTexto() {
  const texto = document.getElementById("t1");

  if (!bool) {
    textoOriginal = texto.innerHTML;
    texto.innerHTML = "Texto alterado";

    bool = true;
} else {
      texto.innerHTML = textoOriginal;
  
      bool = false;
  }
}
