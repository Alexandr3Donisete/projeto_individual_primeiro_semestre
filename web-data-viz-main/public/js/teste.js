var perguntas = [
  // RESILIÊNCIA -----------------------------
  {
    traco: "resiliencia",
    texto: "Quando algo dá errado nos seus planos, como você reage?",
    opcoes: [
      "Respiro fundo e tento continuar.",
      "Fico frustrado, mas sigo em frente.",
      "Analiso o que deu errado para tentar melhorar.",
      "Peço ajuda antes de continuar.",
      "Fico muito abalado e paro tudo.",
    ],
  },
  {
    traco: "resiliencia",
    texto: "Como você lida com obstáculos inesperados?",
    opcoes: [
      "Me adapto rapidamente.",
      "Encaro o problema direto.",
      "Busco alternativas.",
      "Procuro apoio externo.",
      "Fico perdido e demoro para reagir.",
    ],
  },
  {
    traco: "resiliencia",
    texto: "Quando enfrenta uma grande dificuldade pessoal, você:",
    opcoes: [
      "Mantém a calma e tenta resolver.",
      "Luta com força total.",
      "Pensa em um plano.",
      "Conversa com alguém de confiança.",
      "Age sem saber muito bem o que fazer.",
    ],
  },

  // CONFIANÇA -----------------------------
  {
    traco: "confianca",
    texto: "Diante de um desafio que parece acima do seu nível, você:",
    opcoes: [
      "Duvida de si mesmo, mas tenta.",
      "Acredita que pode vencer.",
      "Planeja antes de agir.",
      "Pede conselhos.",
      "Parte para cima mesmo sem pensar.",
    ],
  },
  {
    traco: "confianca",
    texto: "Como você reage quando alguém subestima suas capacidades?",
    opcoes: [
      "Fico quieto, mas provo meu valor.",
      "Mostro confiança imediatamente.",
      "Mostro resultados concretos.",
      "Ouço outras opiniões.",
      "Sou impulsivo e bato de frente.",
    ],
  },
  {
    traco: "confianca",
    texto: "Quando precisa tomar uma decisão importante, você:",
    opcoes: [
      "Pensa muito antes.",
      "Decide com firmeza.",
      "Analisa vários cenários.",
      "Conversa com outros.",
      "Vai no instinto.",
    ],
  },

  // ESTRATÉGIA -----------------------------
  {
    traco: "estrategia",
    texto: "Como você encara problemas complexos?",
    opcoes: [
      "Divido em partes menores.",
      "Vejo o caminho direto para a solução.",
      "Faço um planejamento completo.",
      "Pergunto opiniões externas.",
      "Tento várias coisas na hora.",
    ],
  },
  {
    traco: "estrategia",
    texto: "Antes de agir em uma situação importante, você:",
    opcoes: [
      "Pensa um pouco e vai.",
      "Age rápido.",
      "Cria um plano detalhado.",
      "Compartilha a decisão.",
      "Improvisa no momento.",
    ],
  },
  {
    traco: "estrategia",
    texto: "Quando está aprendendo algo novo, você:",
    opcoes: [
      "Testa e ajusta.",
      "Faz sem medo.",
      "Estuda e entende o conceito.",
      "Pergunta para outras pessoas.",
      "Vai tentando até acertar.",
    ],
  },

  // CONTROLE EMOCIONAL -----------------------------
  {
    traco: "controle_emocional",
    texto: "Quando está sob pressão, você:",
    opcoes: [
      "Respira fundo e se controla.",
      "Fica firme.",
      "Tenta analisar racionalmente.",
      "Busca apoio emocional.",
      "Se deixa levar pela emoção.",
    ],
  },
  {
    traco: "controle_emocional",
    texto: "Quando algo te magoa, você:",
    opcoes: [
      "Tenta entender sem explodir.",
      "Mantém a postura.",
      "Analisa por que se sentiu assim.",
      "Fala com alguém.",
      "Reage na hora.",
    ],
  },
  {
    traco: "controle_emocional",
    texto: "Quando está irritado, você:",
    opcoes: [
      "Se afasta e respira.",
      "Tenta manter a compostura.",
      "Pensa antes de reagir.",
      "Conversa para aliviar.",
      "Explode facilmente.",
    ],
  },

  // IMPULSIVIDADE -----------------------------
  {
    traco: "impulsividade",
    texto: "Você costuma agir:",
    opcoes: [
      "Após pensar um pouco.",
      "Com firmeza e decisão.",
      "Depois de analisar tudo.",
      "Após conversar com alguém.",
      "No impulso.",
    ],
  },
  {
    traco: "impulsividade",
    texto: "Quando está muito animado com algo, você:",
    opcoes: [
      "Aguarda o momento certo.",
      "Vai com tudo.",
      "Planeja antes.",
      "Comenta com os outros.",
      "Age sem pensar.",
    ],
  },
  {
    traco: "impulsividade",
    texto: "Em uma situação urgente, você:",
    opcoes: [
      "Mantém o controle.",
      "Corre para resolver.",
      "Planeja rápido.",
      "Pede apoio.",
      "Parte para ação imediatamente.",
    ],
  },
];

//  VARIÁVEIS DE CONTROLE

var indiceAtual = 0;
var respostas = [];

var campoNumeroAtual = document.getElementById("numAtual");
var campoNumeroTotal = document.getElementById("numTotal");
var textoPergunta = document.getElementById("question-text");
var campoOpcoes = document.getElementById("options-container");

campoNumeroTotal.innerHTML = perguntas.length;

//  FUNÇÃO: CARREGAR PERGUNTA

function carregarPergunta() {
  var p = perguntas[indiceAtual];

  textoPergunta.innerHTML = p.texto;
  campoOpcoes.innerHTML = "";

  for (var i = 0; i < p.opcoes.length; i++) {
    campoOpcoes.innerHTML += `
      <label class="option">
        <input type="radio" name="pergunta" value="${i + 1}">
        ${p.opcoes[i]}
      </label>
    `;
  }

  campoNumeroAtual.innerHTML = indiceAtual + 1;
}

carregarPergunta();

// ===========================
//  FUNÇÃO: PRÓXIMA PERGUNTA
// ===========================

function proximaPergunta() {
  var selecionado = document.querySelector("input[name='pergunta']:checked");

  if (!selecionado) {
    alert("Por favor, escolha uma opção antes de continuar!");
    return;
  }

  respostas.push({
    traco: perguntas[indiceAtual].traco,
    valor: Number(selecionado.value),
  });

  indiceAtual++;

  if (indiceAtual >= perguntas.length) {
    mostrarResultado();
    return;
  }

  carregarPergunta();
}

//  FUNÇÃO: RESULTADO FINAL

function mostrarResultado() {
  var total = {
    resiliencia: 0,
    confianca: 0,
    estrategia: 0,
    controle_emocional: 0,
    impulsividade: 0,
  };

  for (var i = 0; i < respostas.length; i++) {
    total[respostas[i].traco] += respostas[i].valor;
  }

  document.querySelector(".test-box").innerHTML = `
    <h1 style="text-align:center; margin-bottom:20px;">Resultado Final</h1>

    <p style="font-size:1.6rem;">Resiliência: ${total.resiliencia}</p>
    <p style="font-size:1.6rem;">Confiança: ${total.confianca}</p>
    <p style="font-size:1.6rem;">Estratégia: ${total.estrategia}</p>
    <p style="font-size:1.6rem;">Controle Emocional: ${total.controle_emocional}</p>
    <p style="font-size:1.6rem;">Impulsividade: ${total.impulsividade}</p>

    <br><br>
    <h2 style="text-align:center;">Em breve: seu personagem correspondente!</h2>
  `;
}
