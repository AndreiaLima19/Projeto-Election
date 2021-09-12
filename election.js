/*Projeto 04 - Election - Crie um programa que simule uma votação
*/

const prompt = require('prompt-sync')();

console.log("<<<< ELEIÇÃO >>>>\n");

var voto1 = 0;
var voto2 = 0;
var voto3 = 0;
var voto4 = 0;
var voto5 = 0;

var eleicao = [];

/*
autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"
*/
function autorizaVoto(anoNascimento){
    if ((2021 - anoNascimento) < 16){
        return 'Negado';
    }else if ((2021 - anoNascimento) >= 16 && (2021 - anoNascimento) < 18){
        return 'Opcional';
    }else if ((2021 - anoNascimento) >= 18){
        return 'Obrigatório';
    }
}

/*
votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou 
retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado
*/
function votacao(autorizacao, voto){
    if (autorizacao == 'Negado'){
        console.log('<< Você não pode votar >>');
    }else{
        if (voto == 1){
            voto1++;
        }else if (voto == 2){
            voto2++;
        }else if (voto == 3){
            voto3++;
        }else if (voto == 4){
            voto4++;
        }else if (voto == 5){
            voto5++;
        }
    }
}

/*
Ter uma função chamada exibirResultados() que deve mostrar: 
- O total de votos para cada candidato 
- O total de votos nulos
- O total de votos em branco
- Qual candidato venceu a votação
*/

function exibirResultados(){
    
    // Calculando o candidato vencedor

    var eleicao = [
        {nome: 'Candidato 1', votos: voto1},
        {nome: 'Candidato 2', votos: voto2},
        {nome: 'Candidato 3', votos: voto3},
        {nome: 'Nulo', votos: voto4},
        {nome: 'Em branco', votos: voto5}  
    ];

    for (let i = 1;  i <= 5; i++){
        
        // Ordenar a lista por votos
        eleicao.sort((a,b) => {
            if (b.votos < a.votos){
                return -1;
            }else{
                return true;
            }
        }) 
    } 
    
    // Exibindo o resultado

    console.log();  
    console.log(`O Candidato 1 recebeu --> ${voto1} voto(s)`);
    console.log(`O Candidato 2 recebeu --> ${voto2} voto(s)`);
    console.log(`O Candidato 3 recebeu --> ${voto3} voto(s)`);
    console.log(`Nulo                  --> ${voto4} voto(s)`);
    console.log(`Em branco             --> ${voto5} voto(s)`);
    console.log();
    console.log(`<<<< ${eleicao[0].nome}, VENCEU A VOTAÇÃO >>>>`);
}

var pergunta = 'S';

while (pergunta == 'S' ){
     
    let anoNascimento = +prompt('Digite o ano de nascimento: ');

    let autorizacao = autorizaVoto(anoNascimento);

    let voto = +prompt(`Digite o seu voto : (1)Candidato 1 / (2)Candidato 2 / (3)Candidato 3 / (4)Voto Nulo / (5)Voto em Branco `);
    
    votacao(autorizacao,voto);
    
    var pergunta = prompt('Deseja continuar? Digite S(Sim) ou N(Não) ').toUpperCase();
    
}

exibirResultados();

