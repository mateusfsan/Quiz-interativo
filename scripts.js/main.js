import { perguntas } from "./perguntas.js";

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta () {
    const elementoPergunta = document.getElementById("pergunta");
    const elementoOpcoes = document.querySelectorAll(".option");
    const pergunta = perguntas[perguntaAtual];

    elementoPergunta.innerText = pergunta.pergunta;
    
    elementoOpcoes.forEach((opcao, index) => {
        opcao.innerText = pergunta.respostas[index];
    })

    document.getElementById("pontuacao").innerText = `Pontuação: ${pontuacao}`;

}

window.verificarResposta = function verificarResposta (opcaoSelecionada){
    const pergunta = perguntas[perguntaAtual];

    if(opcaoSelecionada === pergunta.respostaCorreta){
        pontuacao++;
    }

    perguntaAtual++;

    document.getElementById("pontuacao").innerText = `Pontuação: ${pontuacao}`;

    if(perguntaAtual < perguntas.length){
        carregarPergunta();
    } else {
        resultado();
    }
}

function resultado (){
    const resultadoMensagem = document.getElementById("resultadoMensagem");
    resultadoMensagem.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas realizadas!`;

    const modal = document.getElementById("modalResultado");
    modal.style.display = "block";

    const closeModal = document.getElementById("closeModal");
    closeModal.onclick = () => modal.style.display = "none";

}

window.reiniciarQuiz = function reiniciarQuiz() {

    if(perguntaAtual === 0){
        return;
    }

    perguntaAtual = 0;
    pontuacao = 0;
    carregarPergunta();
}


carregarPergunta();
