// Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.

const prompt = require(`prompt-sync`)();
let numero;

while (numero % 2 !== 0) {
    numero = +prompt(`Digite o número:`);
    if (numero % 2 !== 0) {
        console.log(`O número digitado é ímpar, tente novamente!`);
    }
}

console.log(`O número digitado é par!`);
