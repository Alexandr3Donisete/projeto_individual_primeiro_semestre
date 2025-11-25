var database = require("../database/config");

function listar(idUsuario) {
  var instrucao = `
        SELECT id, resiliencia, confianca, estrategia, controle_emocional, impulsividade FROM resultado_quizz WHERE fkUsuario = ${idUsuario} ORDER BY id DESC LIMIT 1;
    `;
  console.log(instrucao);
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
