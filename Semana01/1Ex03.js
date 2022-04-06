// Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias.
// Exemplo: eu tenho 30 anos, 2 meses 3 7 dias. Calcule e exiba o total de dias que essa pessoa já viveu.
// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.
const prompt = require('prompt-sync')();
console.log(`Vamos calcular sua idade em dias!`);
let anos = +prompt(`Digite quantos anos você tem: `);
let meses = +prompt(`Digite quantos meses, além dos anos, você viveu: `);
let dias = +prompt(`Além de anos e meses, quantos dias você viveu: `);

let diasVividos = anos * 365 + meses * 30 + dias;

console.log(`Você tem ${diasVividos} dias de idade!`);
