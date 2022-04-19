// Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça
//  o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o
//  nome e a nota correspondente de cada aluno, e a média total da notas.
const prompt = require('prompt-sync')();

let numAluno = +prompt(`Digite o número de alunos que deseja cadastrar: `);
let nome = [];
let nota = [];

for (let i = 0; i < numAluno; i++) {
    nome.push(prompt(`Digite o nome do aluno(a): `));
    nota.push(+prompt(`Digite a nota: `));
}

for (let i = 0; i < numAluno; i++) {
    console.log(`Aluno: ${nome[i]} Nota: ${nota[i]}`);
}

somaNota = nota.reduce(function (soma, i) {
    //O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array,
    //resultando num único valor de retorno.

    return soma + i;
});

console.log(`Média geral: ${somaNota / numAluno}`);
