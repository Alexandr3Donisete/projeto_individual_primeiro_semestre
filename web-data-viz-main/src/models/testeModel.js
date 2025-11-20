var database = require("../database/config");

function listar() {
  var instrucao = `
        SELECT * FROM resultado_quizz;
    `;
  return database.executar(instrucao);
}

function searchTestID() {
  var instrucao = `
        S 
    `;
  return database.executar(instrucao);
}

function cadastrar(
  fkUsuario,
  fkTeste,
  resiliencia,
  confianca,
  estrategia,
  controleEmocional,
  impulsividade
) {
  var instrucao = `
        INSERT INTO resultado_quizz
        (fkUsuario, fkTeste,resiliencia, confianca, estrategia, controle_emocional, impulsividade)
        VALUES (${fkUsuario}, ${fkTeste}, ${resiliencia}, ${confianca}, ${estrategia}, ${controleEmocional}, ${impulsividade});
    `;

  console.log("Executando SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  cadastrar,
  listar,
};
