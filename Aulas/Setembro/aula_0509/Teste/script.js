const titulos = document.querySelectorAll("h1");
let boolChangeColor = false;

function changeColor() {
  if (!boolChangeColor) {
    titulos.forEach((element) => {
      return element.classList.add("change-color");
    });
    boolChangeColor = true;
    console.log("mudou");
  } else {
    titulos.forEach((element) => {
      return element.classList.remove("change-color");
    });
    boolChangeColor = false;
    console.log("Voltou");
  }
}
