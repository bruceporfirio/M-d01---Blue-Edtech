// Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados
// em um array. Depois, mostre quantas vezes cada valor foi conseguido.

const prompt = require('prompt-sync')();

let facesDados = [1, 2, 3, 4, 5, 6];
let arrayDados = [];
let resultadoDados = ``;
let numerolancados = 0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;

while (numerolancados < 100) {
    resultadoDados = Math.ceil(Math.random(facesDados) * 6);
    arrayDados.push(resultadoDados);
    numerolancados++;
    if (resultadoDados == 1) {
        contador1++;
    } else if (resultadoDados == 2) {
        contador2++;
    } else if (resultadoDados == 3) {
        contador3++;
    } else if (resultadoDados == 4) {
        contador4++;
    } else if (resultadoDados == 5) {
        contador5++;
    } else if (resultadoDados == 6) {
        contador6++;
    }
}

console.log(`Lista de números que cairam: ${arrayDados}`);
console.log(`1 caiu: ${contador1} vezes`);
console.log(`2 caiu: ${contador2} vezes`);
console.log(`3 caiu: ${contador3} vezes`);
console.log(`4 caiu: ${contador4} vezes`);
console.log(`6 caiu: ${contador5} vezes`);
console.log(`5 caiu: ${contador6} vezes`);
