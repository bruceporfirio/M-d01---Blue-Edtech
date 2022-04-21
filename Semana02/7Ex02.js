// Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois peça e armazene essa
// quantidade de notas em um array. Ao final imprima a quantidade de alunos
// APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).

const prompt = require('prompt-sync')();

let num = +prompt(`Quantos cadastros você deseja fazer: `);
let contador = 0;
let notas = ``;
let array = [];
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

while (contador < num) {
    notas = +prompt(`Digite a nota: `);
    array.push(notas);
    contador++;
    if (notas >= 7) {
        aprovados++;
    } else if (notas >= 5 && notas <= 7) {
        recuperacao++;
    } else {
        reprovados++;
    }
}

console.log(`Notas: ${array}`);
console.log(`Aprovados: ${aprovados}`);
console.log(`Recuperação: ${recuperacao}`);
console.log(`Reprovados: ${reprovados}`);
