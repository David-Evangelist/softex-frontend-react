let number = Number(prompt("Insira um número inteiro positivo: "));
let fatorial = 1;

do {
    fatorial *= number;

    number--;
} while (number > 0);

console.log(fatorial);

// 3! = 3 * (3 - 1) * (3-2)
