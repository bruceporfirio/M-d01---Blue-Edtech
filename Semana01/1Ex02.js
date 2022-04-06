// Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, o número de peças1 que o usuário quer,
// o valor unitário de cada peça1, o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2.
// Após, calcule e mostre o valor a ser pago.

var prompt = require('prompt-sync')();
let peca1 = prompt(`Digite o nome da peça1: `);
let qntPeca1 = +prompt(`Digite a quantidade de peças: `);
let valorPeca1 = +prompt(`Digite o valor R$: `);

let peca2 = prompt(`Digite o nome da peça2: `);
let qntPeca2 = +prompt(`Digite a quantidade de peças: `);
let valorPeca2 = +prompt(`Digite o valor R$: `);

let valorFinal = (qntPeca1 * valorPeca1 + qntPeca2 * valorPeca2).toFixed(2);

console.log(`Valor total R$ ${valorFinal}.`);
