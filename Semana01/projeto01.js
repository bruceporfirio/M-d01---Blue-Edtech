// Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, por exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", "Você conseguiu consertar os reatores nucleares do motor de dobra?", "Você se lembrou de passar no mercado e comprar óleo?"
// No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o resultado de acordo com esse número:
// 0 respostas Sim: Você falha miseravelmente.
// 1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
// 3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
// 4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
// 5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
// O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima.

var prompt = require('prompt-sync')(); //instalação prompt para receber informação do usuário
console.clear(); //limpar tela

console.log(
    'Após um longo dia de trabalho, tudo que se quer é descansar. Mas como tudo na vida é conquistado, você deve cumprir 5 tarefas para ter uma noite perfeita: \n*Ir ao mercado comprar comida para o final de semana; \n*Comprar bebida; \n*Buscar suas roupas na lavanderia; \n*Pedir comida para o jantar; \n*Buscar seu/sua companheira(o).  ',
); //texto introdução para contextualizar usuário
prompt('Clique ENTER para continuar!'); //continuação com enter
console.log(); //pular linha

console.log('Responda as peguntas com "sim" ou "não".'); //tutorial
let ponto = 0; //variável pontuação

prompt('Clique ENTER para continuar!'); //continuação com enter
console.log(); //pular linha

let perg1 = prompt(
    'Você foi ao mercado comprar comida para o final de semana? ',
); //pergunta 1
if (perg1.toLowerCase() == 'sim') {
    //se
    ponto++; //incremento x=x+1
    console.log('A comida do final de semana ta garantida!');
} else {
    //senão
    console.log('O final dde semana será difícil!');
}
console.log(); //pular linha

let perg2 = prompt('Comprou bebida? ');
if (perg2.toLowerCase() == 'sim') {
    //se
    ponto++; //incremento x=x+1
    console.log('Um vinho ao jantar sempre é bem vindo!');
} else {
    //senão
    console.log('Faltou aquela bebida pra compor o paladar!');
}

console.log(); //pular linha

let perg3 = prompt('Buscou suas roupas na lavanderia? ');
if (perg3.toLowerCase() == 'sim') {
    //se
    ponto++; //incremento x=x+1
    console.log('Nada como uma roupa cheirosa!');
} else {
    //senão
    console.log('Vai ter que repetir a mesma roupa! ');
}
console.log(); //pular linha

let perg4 = prompt('Pediu comida para o jantar? ');
if (perg4.toLowerCase() == 'sim') {
    //se
    ponto++; //incremento x=x+1
    console.log('Boa! Quanto mais cedo pedir, menor a espera!');
} else {
    //senão
    console.log('Saco vazio não para em pé!');
}
console.log(); //pular linha

let perg5 = prompt('Buscou sua/seu companheira(o)? ');
if (perg5.toLowerCase() == 'sim') {
    //se
    ponto++; //incremento x=x+1
    console.log('A noite tá perfeita!');
} else {
    //senão
    console.log('Vai se criando um clima terrível...');
}
console.log(); //pular linha

console.log('Resultado:'); //resultado
prompt('Clique ENTER para descobrir!'); //continuação com enter
console.log(); //pular linha

if (ponto == 0) {
    //se pontuação é igual a 0
    console.log(
        'Sem esforço, sem noite tranquila. Era pra ser incrível, mas virou um grande problema.',
    );
} else if (ponto == 1 || ponto == 2) {
    //se pontuação incrementada é igual a 1 OR 2
    console.log(
        'Ao menos escolha bem o filme, pois sua noite não será muito agradável!',
    );
} else if (ponto == 3) {
    //se pontuação incrementada é igual a 3
    console.log('Nem bom, nem ruim. Quem sabe na próxima!');
} else if (ponto == 4) {
    //se pontuação incrementada é igual a 4
    console.log('Quase lá! Mas a noite vai ser ótima!');
} else if (ponto == 5) {
    //se pontuação incrementada é igual a 5
    console.log(
        'O sonho do proletariado! Após um longo e gratificante dia de trabalho, uma ótima noite de diversão e descanso. Parabéns! missão concluída com sucesso. ',
    );
}
