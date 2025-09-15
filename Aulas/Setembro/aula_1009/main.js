const nav = document.getElementById("nav");
const painel = document.getElementById("painel");
let isShow = false;

function mostrar() {
  if (!isShow) {
    painel.style.display = "block";
    isShow = true;
    console.log("f");
  } else {
    painel.style.display = "none";
    isShow = false;
  }
}
