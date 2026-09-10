const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual medida você considera mais importante para melhorar a saúde pública da sua comunidade?",
        alternativas: [
            {
                texto: "Investir em campanhas de vacinação, prevenção de doenças e educação em saúde. Acredito que prevenir problemas de saúde é melhor do que esperar as pessoas adoecerem para procurar atendimento",
                afirmacao: "Pessoa preocupada com a prevenção"
            },
            {
                texto:  "Ampliar e melhorar os postos de saúde e hospitais, reduzindo o tempo de espera e garantindo atendimento de qualidade para todos. Muitas pessoas precisam de atendimento rápido e não conseguem acesso quando necessitam.",
                afirmacao: "Pessoa preocupada com o acesso ao atendimento"
            }    
           
        ]
    },
    {
       
            enunciado: "Qual deveria ser a principal prioridade do governo para melhorar a saúde pública?",
            alternativas: [
                {
                    texto: "“Investir mais em campanhas de prevenção e educação em saúde nas escolas, para que os jovens aprendam desde cedo sobre alimentação saudável, vacinação e prevenção de doenças.",
                    afirmacao: "Jovem estudante"
                },
                {
                    texto:  "Melhorar o atendimento nos postos de saúde e hospitais, diminuindo as filas e garantindo consultas, exames e medicamentos para quem precisa, principalmente para os idosos.",
                    afirmacao: "Pessoa idosa"
                }    
               
            ]
        },
        {
            enunciado: "Na sua opinião, qual é o maior problema da saúde pública atualmente?",

            alternativas: [
                {
                    texto: "Para mim, o principal problema é a demora para conseguir consultas e exames. Como mãe, preciso de um atendimento rápido quando meus filhos ficam doentes.",
                    afirmacao: "Mãe de família"
                },
                {
                    texto:    "Na minha visão, o maior problema é a falta de profissionais e de recursos nos serviços públicos. Isso aumenta a sobrecarga dos trabalhadores e prejudica a qualidade do atendimento.",
               
                    afirmacao: "Profissional da saúde"
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();