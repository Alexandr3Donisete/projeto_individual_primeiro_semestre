var perguntas = [
  // RESILIÊNCIA -----------------------------
  {
    traco: "resiliencia",
    texto: "Quando algo dá errado nos seus planos, como você reage?",
    opcoes: [
      "Fico muito abalado e paro tudo.",
      "Fico frustrado, mas sigo em frente.",
      "Peço ajuda antes de continuar.",
      "Respiro fundo e tento continuar.",
      "Analiso o que deu errado para tentar melhorar.",
    ],
  },
  {
    traco: "resiliencia",
    texto: "Como você lida com obstáculos inesperados?",
    opcoes: [
      "Fico perdido e demoro para reagir.",
      "Procuro apoio externo.",
      "Busco alternativas.",
      "Encaro o problema direto.",
      "Me adapto rapidamente.",
    ],
  },
  {
    traco: "resiliencia",
    texto: "Quando enfrenta uma grande dificuldade pessoal, você:",
    opcoes: [
      "Age sem saber muito bem o que fazer.",
      "Conversa com alguém de confiança.",
      "Pensa em um plano.",
      "Mantém a calma e tenta resolver.",
      "Luta com força total.",
    ],
  },

  // CONFIANÇA -----------------------------
  {
    traco: "confianca",
    texto: "Diante de um desafio que parece acima do seu nível, você:",
    opcoes: [
      "Pede conselhos.",
      "Duvida de si mesmo, mas tenta.",
      "Planeja antes de agir.",
      "Parte para cima mesmo sem pensar.",
      "Acredita que pode vencer.",
    ],
  },
  {
    traco: "confianca",
    texto: "Como você reage quando alguém subestima suas capacidades?",
    opcoes: [
      "Ouço outras opiniões.",
      "Fico quieto, mas provo meu valor.",
      "Sou impulsivo e bato de frente.",
      "Mostro resultados concretos.",
      "Mostro confiança imediatamente.",
    ],
  },
  {
    traco: "confianca",
    texto: "Quando precisa tomar uma decisão importante, você:",
    opcoes: [
      "Conversa com outros.",
      "Pensa muito antes.",
      "Analisa vários cenários.",
      "Vai no instinto.",
      "Decide com firmeza.",
    ],
  },

  // ESTRATÉGIA -----------------------------
  {
    traco: "estrategia",
    texto: "Como você encara problemas complexos?",
    opcoes: [
      "Tento várias coisas na hora.",
      "Pergunto opiniões externas.",
      "Divido em partes menores.",
      "Vejo o caminho direto para a solução.",
      "Faço um planejamento completo.",
    ],
  },
  {
    traco: "estrategia",
    texto: "Antes de agir em uma situação importante, você:",
    opcoes: [
      "Improvisa no momento.",
      "Age rápido.",
      "Pensa um pouco e vai.",
      "Compartilha a decisão.",
      "Cria um plano detalhado.",
    ],
  },
  {
    traco: "estrategia",
    texto: "Quando está aprendendo algo novo, você:",
    opcoes: [
      "Vai tentando até acertar.",
      "Faz sem medo.",
      "Testa e ajusta.",
      "Pergunta para outras pessoas.",
      "Estuda e entende o conceito.",
    ],
  },

  // CONTROLE EMOCIONAL -----------------------------
  {
    traco: "controle_emocional",
    texto: "Quando está sob pressão, você:",
    opcoes: [
      "Se deixa levar pela emoção.",
      "Busca apoio emocional.",
      "Tenta analisar racionalmente.",
      "Fica firme.",
      "Respira fundo e se controla.",
    ],
  },
  {
    traco: "controle_emocional",
    texto: "Quando algo te magoa, você:",
    opcoes: [
      "Reage na hora.",
      "Fala com alguém.",
      "Mantém a postura.",
      "Analisa por que se sentiu assim.",
      "Tenta entender sem explodir.",
    ],
  },
  {
    traco: "controle_emocional",
    texto: "Quando está irritado, você:",
    opcoes: [
      "Explode facilmente.",
      "Conversa para aliviar.",
      "Se afasta e respira.",
      "Tenta manter a compostura.",
      "Pensa antes de reagir.",
    ],
  },

  // IMPULSIVIDADE -----------------------------
  {
    traco: "impulsividade",
    texto: "Você costuma agir:",
    opcoes: [
      "Com firmeza e decisão.",
      "Depois de analisar tudo.",
      "Após conversar com alguém.",
      "Após pensar um pouco.",
      "No impulso.",
    ],
  },
  {
    traco: "impulsividade",
    texto: "Quando está muito animado com algo, você:",
    opcoes: [
      "Aguarda o momento certo.",
      "Planeja antes.",
      "Comenta com os outros.",
      "Vai com tudo.",
      "Age sem pensar.",
    ],
  },
  {
    traco: "impulsividade",
    texto: "Em uma situação urgente, você:",
    opcoes: [
      "Mantém o controle.",
      "Pede apoio.",
      "Planeja rápido.",
      "Corre para resolver.",
      "Parte para ação imediatamente.",
    ],
  },
];

//  VARIÁVEIS DE CONTROLE

var indiceAtual = 0;
var respostas = [];

var campoNumeroAtual = document.getElementById("numAtual");
var textoPergunta = document.getElementById("question-text");
var campoOpcoes = document.getElementById("options-container");

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

//  FUNÇÃO: PRÓXIMA PERGUNTA

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

  console.log(respostas);

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


  fetch("/teste/cadastrar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fkUsuario: sessionStorage.ID_USUARIO,
      fkTeste: 1,
      resiliencia: total.resiliencia,
      confianca: total.confianca,
      estrategia: total.estrategia,
      controleEmocional: total.controle_emocional,
      impulsividade: total.impulsividade,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: " + resposta);

      console.log("ESTOU NO THEN DO entrar()!");
      if (resposta.ok) {
        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));

          setTimeout(function () {
            window.location = "./dashboard.html";
          }, 2000); // apenas para exibir o loading
        });
      } else {
        console.log("Houve um erro ao persistir o resultado!");
        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch((err) => {
      console.error("Erro ao salvar resultado:", err);
    });
}
