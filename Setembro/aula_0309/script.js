let textoOriginal;
let change = false;

function mudarText(id) {
  const titulo = document.getElementById(`${id}`);

  if (!change) {
    textoOriginal = titulo.innerHTML;
    titulo.innerHTML = "Texto Alterado";
    change = true;
  } else {
    titulo.innerHTML = textoOriginal
    change = false
  }
}

function mudarCor() {
    
}
