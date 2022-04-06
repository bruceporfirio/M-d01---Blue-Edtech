// Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

const prompt = require('prompt-sync')();

console.log(`Descubra qual número digitado é maior!`);

let num1 = +prompt(`Digite o número 1: `);
let num2 = +prompt(`Digite o número : `);

if (num1 > num2) {
    console.log(`O numero ${num1} é maior!`);
} else if (num2 > num1) {
    console.log(`O número ${num2} é maior!`);
} else {
    console.log(`Os números são iguais!`);
}
