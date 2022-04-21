// Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem
// crescente

let numerosSorteio = 1;
let numerosSorteados = 20;
let contador = 0;
let resultado = ``;
let array = [];

while (contador < numerosSorteados) {
    contador++;
    resultado = Math.floor(Math.random(numerosSorteio) * 101);
    array.push(resultado);
}

array.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

console.log(array);
