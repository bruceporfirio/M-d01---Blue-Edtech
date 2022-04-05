// Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule e informe a média ponderada do
// aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. Ex: nota a * 4 e nota b * 6.

var prompt = require('prompt-sync')();
console.log(`Vamos calcular sua média!`);
prompt(`Aperte ENTER para continuar!`);

let media1 = +prompt(`Digite nota 1: `);
let media2 = +prompt(`Digite nota 2: `);

media1 = media1 * 4;
media2 = media2 * 6;

let mediaFinal = (media1 + media2) / 10;

prompt(`Aperte ENTER para saber o resultado!`);

console.log(mediaFinal);
