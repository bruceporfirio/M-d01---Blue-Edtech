// Faça um programa que peça um número inteiro e crie arrays com:
// Todos os números pares de 0 ao número escolhido;
// Todos os números ímpares do 0 ao número escolhido.

const prompt = require('prompt-sync')();

let numero = +prompt(`Digite um número inteiro: `);
let contador = 0;
let par = [];
let impar = [];

