// PROJETO GERAL - REQUISITOS:
// Permitir que eu decida quantas rodadas iremos fazer; OK
// Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo); OK
// Decidir de forma aleatória a decisão do computador; OK
// Comparar os valores e declarar o vencedor (marcando 1 vitória para ele); OK
// Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido; OK
// Ao final das repetições, mostrar quantas rodadas cada jogador ganhou; OK
// Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador); OK
// Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.  OK
// ----------------------------------------------------------------------------------------------------------------------------------------------
// PARTE 1
// Criar uma lista com os elementos a serem escolhidos; OK
// Criar as variáveis que receberão as escolhas do usuário e do computador (prompt para o usuário, e aleatório para o computador); OK
// Fazer a validação da entrada do usuário (o programa só deve aceitar o que foi definido por você como entradas válidas); ?????
// Exibir o elemento da lista correspondente à escolha de cada um; OK
// Comparar os elementos e exibir quem foi o vencedor dessa rodada. OK
// ---------------------------------------------------------------------------------------------------------------------------------------------------
//PARTE 2 (final)
// Criar a variável que receberá a quantidade de rodadas que o jogador deseja jogar; OK
// Criar o laço que irá repetir o jogo o número de vezes escolhida pelo jogador; OK
// Depois de declarar o vencedor da rodada, adicionar 1 ponto para esse vencedor; OK
// Ao final das rodadas mostrar quantos pontos cada um marcou;OK
// Determinar quem fez mais pontos e portanto foi o campeão do jogo; OK
// Perguntar ao final se ele quer jogar de novo e criar um laço que deve repetir todo o programa caso a resposta seja sim. OK
// -----------------------------------------------------------------------------------------------------------------------------------------------------

const prompt = require('prompt-sync')();
console.clear();
console.log(`
            _____________
            |           |
            |  JOKENPÔ  |
            |   ✊🖐️-✌️   |       
            |___________|          
`);
console.log();
prompt(`⌨️  Pressione ENTER para ver tutorial!`); // intro
console.log();
console.log(`-------📃 TUTORIAL 📃-------

➡︎ Você informará seu nome.

➡︎ Escolherá  quantas rodadas deseja jogar.

➡︎ Após informar o número de rodadas, o computador escolherá sua opção automaticamente e o usuário digitará o número 
correspondente conforme indicação abaixo:

Pedra______Digite: 0 ✊              
Papel______Digite: 1 🖐️
Tesoura____Digite: 2 ✌️

➡︎ Quem ganha, quem perde:

Pedra_____perde de papel e ganha de tesoura.
Papel_____perde de tesoura e ganha de pedra.
Tesoura___perde de pedra e ganha de papel.
Iguais____escolhas iguais resultam em empate.

➡︎ Resultado:
O jogo indicará o vencedor/empate a cada rodada. 
Cada rodada equivale a um ponto, ao final, quem somar mais, ganha.`);

console.log();
prompt(`🟢 Pressione ENTER para começar o jogo!`);
console.log();

let vezesJogada = ``;
let jogar = ``;
let escolhaPc = ``;
let escolhaUsuario = ``;

while (jogar !== 'nao') {
    console.clear();
    let nome = prompt(`Digite seu nome(mínimo 3 caracteres): `);
    while (nome.length < 3) {
        console.log('Digite um nome com no mínimo três caracteres!');
        nome = prompt(`Digite seu nome: `);
        console.log();
    }
    vezesJogada = +prompt(`Quantas rodadas você deseja jogar: `);
    while (isNaN(vezesJogada)) {
        console.log('Digite apenas números!');
        vezesJogada = +prompt(`Quantas rodadas você deseja jogar: `);
        console.log();
    }

    console.log();
    let contPc = 0;
    let contUsu = 0;
    let contEmp = 0;
    for (let i = 0; i < vezesJogada; i++) {
        let item = [`Pedra ✊`, `Papel 🖐️`, `Tesoura ✌️`];
        escolhaPc = Math.floor(Math.random(item) * 3);
        escolhaUsuario = +prompt(
            `Digite o número referente a opção desejada (0-Pedra, 1-Papel, 2-Tesoura): `,
        );

        while (
            escolhaUsuario !== 0 &&
            escolhaUsuario !== 1 &&
            escolhaUsuario !== 2
        ) {
            escolhaUsuario = +prompt(`Digite uma entrada válida: `);
        }

        console.log(`${nome} escolheu: ${item[escolhaUsuario]}`);
        console.log(`Computador escolheu: ${item[escolhaPc]}`);

        if (escolhaUsuario == 0 && escolhaPc == 1) {
            console.log(`🖥️  Computador VENCEU rodada! `);
            contPc++;
            console.log();
        } else if (escolhaUsuario == 1 && escolhaPc == 0) {
            console.log(`🧍 ${nome} VENCEU rodada! `);
            contUsu++;
            console.log();
        } else if (escolhaUsuario == 1 && escolhaPc == 2) {
            console.log(`🖥️  Computador VENCEU rodada! `);
            contPc++;
            console.log();
        } else if (escolhaUsuario == 2 && escolhaPc == 1) {
            console.log(`🧍 ${nome} VENCEU rodada! `);
            contUsu++;
            console.log();
        } else if (escolhaUsuario == 2 && escolhaPc == 0) {
            console.log(`🖥️  Computador VENCEU rodada! `);
            contPc++;
            console.log();
        } else if (escolhaUsuario == 0 && escolhaPc == 2) {
            console.log(`🧍 ${nome} VENCEU rodada! `);
            contUsu++;
            console.log();
        } else {
            console.log(`❌ Empate!`);
            contEmp++;
            console.log();
        }
    }
    console.log();
    prompt(
        `⌨️  Pressione ENTER para descobrir quem foi o(a) GRANDE CAMPEÃ(O)!`,
    );
    console.clear();

    console.log(`
    @@@          @@@
    @  @@@@@@@@@@  @
    @  @@@@@@@@@@  @
     @  @@@@@@@@  @ 
       @ @@@@@@ @   
          @@@@      
           @@       
         @@@@@@    
        @@@@@@@@   
        
        `);

    console.log(`${nome} venceu: ${contUsu} vez(es)`);
    console.log(`Computador venceu: ${contPc} vez(es)`);
    console.log(`Empate: ${contEmp} vez(es)`);

    if (contUsu > contPc) {
        console.log(
            `--------------------------------------------------------------------`,
        );

        console.log(
            `🧍🏆 ${nome} foi o(a) grande vencedor(a) com ${contUsu} ponto(s)! 🏆 🧍`,
        );
        console.log(
            `--------------------------------------------------------------------`,
        );
    } else if (contUsu < contPc) {
        console.log(
            `--------------------------------------------------------------------`,
        );

        console.log(
            `🖥️  🏆  Computador foi o grande vencedor com ${contPc} ponto(s)! 🏆 🖥️`,
        );
        console.log(
            `--------------------------------------------------------------------`,
        );
    } else {
        console.log(
            `--------------------------------------------------------------------`,
        );
        console.log(`❌ Os jogadores empataram. ❌`);
        console.log(
            `--------------------------------------------------------------------`,
        );
    }

    console.log();
    jogar = prompt(`Jogar Novamente (sim ou não): `).toLowerCase();

    while (jogar !== 'nao' && jogar !== 'sim') {
        jogar = prompt(
            'Digite uma entrada válida (sim ou nao): ',
        ).toLowerCase();
    }
}

console.log(`
--------------------------------------------------------------------
🏁 FIM DE JOGO! 🏁                              
--------------------------------------------------------------------`);
