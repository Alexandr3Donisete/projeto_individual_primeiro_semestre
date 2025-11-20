// EXEMPLO TEMPORÁRIO — 
var dadosUsuario = {
  resiliencia: 12,
  confianca: 15,
  estrategia: 10,
  controle_emocional: 18,
  impulsividade: 8
};

// KPIS ----------------------------------------
document.getElementById("kpiDominante").innerHTML = "Controle Emocional";
document.getElementById("kpiCompatibilidade").innerHTML = "82%";
document.getElementById("kpiMedia").innerHTML = "12.6";
document.getElementById("kpiTop3").innerHTML = "Maki, Shinobu, Megumi";

// GRÁFICO RADAR --------------------------------
var ctxRadar = document.getElementById("graficoRadar");

new Chart(ctxRadar, {
  type: "radar",
  data: {
    labels: [
      "Resiliência",
      "Confiança",
      "Estratégia",
      "Controle Emocional",
      "Impulsividade"
    ],
    datasets: [
      {
        label: "Meu Perfil",
        data: Object.values(dadosUsuario),
        borderColor: "#b65df5",
        backgroundColor: "rgba(182, 93, 245, 0.25)"
      }
    ]
  }
});

// BARRA — ranking de personagens --------------
var ctxBarra = document.getElementById("graficoBarra");

new Chart(ctxBarra, {
  type: "bar",
  data: {
    labels: [
      "Maki Zenin",
      "Shinobu Kochou",
      "Megumi Fushiguro",
      "Tanjiro",
      "Nobara Kugisaki"
    ],
    datasets: [
      {
        label: "Compatibilidade (%)",
        data: [82, 78, 66, 59, 54],
        backgroundColor: "#b65df5"
      }
    ]
  }
});
