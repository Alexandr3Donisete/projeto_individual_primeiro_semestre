var database = require("../database/config");

function listar() {
  var instrucao = `
        SELECT * FROM resultado_quiz;
    `;
  return database.executar(instrucao);
}

function cadastrar(
  fkUsuario,
  resiliencia,
  confianca,
  estrategia,
  controleEmocional,
  impulsividade
) {
  var instrucao2 = `INSERT INTO teste (nome) VALUES ("Gougaz")`;
  var testeId = database.executar(instrucao2).then((value) => {
    var instrucao = `
        INSERT INTO resultado_quiz 
        (fkUsuario, fkTeste, resiliencia, confianca, estrategia, controleEmocional, impulsividade)
        VALUES (${fkUsuario}, ${value.insertId}, ${resiliencia}, ${confianca}, ${estrategia}, ${controleEmocional}, ${impulsividade});
    `;

    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
  });
}

module.exports = {
  cadastrar,
  listar,
};
