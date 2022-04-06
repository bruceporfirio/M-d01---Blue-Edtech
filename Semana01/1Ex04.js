// Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias.
// Também considere todo ano com 365 dias e todo mês com 30 dias.

const prompt = require('prompt-sync')();
console.log(`Vamos calcular sua idade baseado em quantos dias você viveu`);
let idade = +prompt(`Quantos dias você viveu: `);

let anos = Math.floor(idade / 365);
let saldo = Math.floor(idade - anos * 365); //A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
let meses = Math.floor(saldo / 30);
let dias2 = (saldo - meses * 30);

console.log(`Anos(s): ${anos}, mês(s): ${meses}, dia(s) ${dias2}`);

