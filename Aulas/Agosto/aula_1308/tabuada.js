let num = Number(prompt("Qual tabuada deseja saber? (insira o número): "))

for(let i = 1; i <= 10; i++) {
    let resultado = i * num;

    console.log(`${num} x ${i} = ${resultado}`);
}