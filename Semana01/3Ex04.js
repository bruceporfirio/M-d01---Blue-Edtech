// Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem
// "Sao Multiplos" ou "Nao sao Multiplos",
// indicando se os valores lidos são múltiplos entre si.

const prompt = require(`prompt-sync`)();

console.log(`Descubra se os números são múltiplos ou não!`);

const numA = +prompt(`Digite o valor A: `);
const numB = +prompt(`Digite o valor B: `);

// console.log(numA, numB, typeof numA, typeof numB) Verificação de valor e tipo

if (numA % numB === 0) {
    console.log(`Os números ${numA} e ${numB} são múltiplos!`);
} else {
    console.log(`Os números ${numA} e ${numB} não são múltiplos!`);
}
