// Faça um Programa que leia 20 números inteiros e armazene-os num array.
// Armazene os números pares no array PAR e os números IMPARES no array IMPAR.
// Imprima os três vetores.

const prompt = require('prompt-sync')();

let numero = ``;
let contador = 0;
let pares = [];
let impares = [];
let todosNum = [];

while (contador < 20) {
    numero = +prompt(`Digite um número: `);
    todosNum.push(numero);
    contador++;

    if (numero % 2 == 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}

console.log(`Pares: ${pares}, Ímpares: ${impares}, Numeros: ${todosNum}`);
