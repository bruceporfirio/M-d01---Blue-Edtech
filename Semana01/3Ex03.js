// Faça um programa que leia um número, e informe se ele é par ou impar

const prompt = require(`prompt-sync`)();

console.log(`Descubra se o número DIGITADO é PAR ou IMPAR!`);
const numeroDigitado = +prompt(`Digite o número: `);

// console.log(typeof numeroDigitado); VERIFICAÇÃO de TIPO

if (numeroDigitado % 2 === 0) {
    console.log(`O número ${numeroDigitado} é par! `);
} else {
    console.log(`O número ${numeroDigitado} é impar!`);
}
