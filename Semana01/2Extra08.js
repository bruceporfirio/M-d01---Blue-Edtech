// Qual o valor do troco? - Crie um programa que calcule o troco de uma compra no valor de R$100,98 e
// que foi paga com R$150,00.
// O valor do troco deve ser exibido no console.

console.log(`Cálculo de troco.`);
let compra = 100.98;
let valorPago = 150;

console.log(`Valor da compra R$${compra}. \nValor pago R$${valorPago}.`);

let resultado;

resultado = (valorPago - compra).toFixed(2);

console.log(`Seu troco é de R$${resultado}.`);
