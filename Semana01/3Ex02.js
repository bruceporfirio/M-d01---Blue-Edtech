// Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média
// alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.

const prompt = require(`prompt-sync`)();

console.log(`Vamos calcular a média!`);

let n1 = +prompt(`Digite m1: `);
let n2 = +prompt(`Digite m2: `);
let n3 = +prompt(`Digite m3: `);
let n4 = +prompt(`Digite m4: `);

let media = ((n1 + n2 + n3 + n4) / 4).toFixed(1);
let mediaFinal = Number(media);

// console.log(mediaFinal, typeof mediaFinal); VERIFICAÇÃO de VALOR e TIPO respectivamente.

if (mediaFinal >= 7) {
    console.log(`Voce foi aprovado! Sua média foi: ${mediaFinal}.`);
} else if (mediaFinal >= 5 && mediaFinal <= 7) {
    console.log(`Você está em recuperação! Sua média foi: ${mediaFinal}.`);
} else {
    console.log(`Você foi reprovado! Sua média foi: ${mediaFinal}.`);
}
