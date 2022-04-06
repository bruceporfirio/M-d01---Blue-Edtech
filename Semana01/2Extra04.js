// Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos.
// Como primeiro passo, escreva um programa que produza a seguinte saída:
// ALUNO (A)
// NOTA
// ALINE
//  9.0
// MÁRI0
//  DEZ
// SÉRGIO
//   4.5
// SHIRLEY
//   7.0

const prompt = require('prompt-sync')();

let alunoA = prompt(`Digite o nome do aluno:`);
let notaA = prompt(`Digite a nota do aluno:`);
let alunoB = prompt(`Digite o nome do aluno:`);
let notaB = prompt(`Digite a nota do aluno:`);
let alunoC = prompt(`Digite o nome do aluno:`);
let notaC = prompt(`Digite a nota do aluno:`);
let alunoD = prompt(`Digite o nome do aluno:`);
let notaD = prompt(`Digite a nota do aluno:`);

console.log(`
ALUNO(a)                               ||                                   NOTA
${alunoA}                              ||                                   ${notaA}
${alunoB}                              ||                                   ${notaB}
${alunoC}                              ||                                   ${notaC}
${alunoD}                              ||                                   ${notaD}           `);
