console.log("De qual número quer saber a tabuada?")
let tabuada = Number(prompt("Insira o número: "))

for (let i = 1; i <= 10; i++) {
    let resultado = i * tabuada

    console.log(`${tabuada} x ${i} = ${resultado}`)
}