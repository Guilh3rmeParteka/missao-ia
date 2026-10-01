import { aleatorio } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {

  caixaResultado.style.display = "none";

  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;

  caixaAlternativas.innerHTML = "";

  perguntaAtual.alternativas.forEach((alternativa) => {

    const botao = document.createElement("button");

    botao.textContent = alternativa.texto;

    botao.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botao);

  });
}

function respostaSelecionada(alternativa) {

  const afirmacao = aleatorio(alternativa.afirmacao);

  historiaFinal += afirmacao + " ";

  atual++;

  mostraPergunta();
}

function mostraResultado() {

  caixaPerguntas.textContent =
    "Olha só o que podemos afirmar sobre você...";

  caixaAlternativas.innerHTML = "";

  textoResultado.textContent = historiaFinal;

  caixaResultado.style.display = "block";
}

botaoJogarNovamente.addEventListener("click", () => {

  atual = 0;

  historiaFinal = "";

  mostraPergunta();

});

mostraPergunta();
