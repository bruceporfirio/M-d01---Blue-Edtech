// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array.
// Imprima a média de idade e de altura.
const prompt = require('prompt-sync')();

let idade = [];
let altura = [];
pessoas = 0;

while (pessoas < 5) {
    idade.push(+prompt(`Digite sua idade: `));
    altura.push(+prompt(`Digite sua altura: `));
    pessoas++;
}

somaIdade = idade.reduce(function (soma, i) {
    //O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array,
    //resultando num único valor de retorno.

    return soma + i;
});

somaAltura = altura.reduce(function (soma, i) {
    return soma + i;
});

console.log(`Medía idade: ${(somaIdade / 5).toFixed(2)}
Média altura: ${(somaAltura / 5).toFixed(2)}`);
