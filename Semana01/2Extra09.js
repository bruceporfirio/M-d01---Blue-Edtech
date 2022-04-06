// Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário e converta esse valor,
// para dólar.
const prompt = require('prompt-sync')();
let real;
let dolar = 4.64;

real = +prompt(`Digite o valor em real que você deseja converter para dolar: `);

let valorFinal;

valorFinal = (real / dolar).toFixed(2);

console.log(`R$${real} equivale a U$${valorFinal}`);
