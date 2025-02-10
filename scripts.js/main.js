import { perguntas } from "./perguntas.js";

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta () {
    const elementoPergunta = document.getElementById("pergunta");
    const elementoOpcoes = document.querySelectorAll(".options");
    const pergunta = perguntas[perguntaAtual];

    elementoOpcoes.forEach((opcao, index) => {
        opcao.innerText = pergunta.respostas[index];
    })

    document.getElementById("pontuacao").innerText = `Pontuação: ${pontuacao}`;
    
}


