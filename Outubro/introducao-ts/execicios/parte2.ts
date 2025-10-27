const saudar = (name: string): string => {
  return `Bom dia, ${name}! Seja bem-vindo.`;
};

const calcularDobro = (num: number): number => {
  return num * 2;
};

let username: string = "David";
console.log(saudar(username));

let num: number = 28;
console.log(calcularDobro(num));
