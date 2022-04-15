// Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça
// para o usuário tentar descobrir qual foi o número escolhido pelo computador.
// O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite.
// No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.
const prompt = require(`prompt-sync`)();

let numUsuario;
let numComp = '';
let contador = 0;

while (numUsuario !== numComp) {
    numUsuario = +prompt(`Digite o um número:`);
    numComp = Math.floor(Math.random() * 10);

    if (numUsuario !== numComp) {
        contador++;
        if (numUsuario > numComp) {
            console.log(
                `O número ${numUsuario} digitado pelo usuário é maior que o número ${numComp} pensado pelo computador.`,
            );
        }
        if (numUsuario < numComp) {
            console.log(
                `O número ${numUsuario} digitado pelo usuário é menor que o número ${numComp} pensado pelo computador.`,
            );
        }
    }
}

console.log(`Você adivinhou o número pensado pelo computador.
Quantidade de tentativas: ${contador}.
Número digitado: ${numComp}`);
