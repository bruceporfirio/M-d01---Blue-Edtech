// Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário:
// quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10).
// Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar
// o monstro (o jogador irá derrotar o monstro em 8 turnos).

const prompt = require('prompt-sync')();

const vidaMonstro = +prompt(
    `Digite a quantidade de vida do monstro (entre 10 e 50): `,
);

const danoJogador = +prompt(
    `Digite o valo rde ataque do jogador (entre 5 e 10): `,
);

const turnos = Math.ceil(vidaMonstro / danoJogador); //Função Math.ceil vai arredondar o valor para cima.

console.log(`O jogador irá derrotar o monstro em  ${turnos} turnos.`);
