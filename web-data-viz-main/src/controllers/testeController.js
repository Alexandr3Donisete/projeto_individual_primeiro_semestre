var testeModel = require("../models/testeModel");

function listar(req, res) {
  testeModel
    .listar()
    .then((resultado) => res.status(200).json(resultado))
    .catch((erro) => res.status(500).json(erro.sqlMessage));
}

function cadastrar(req, res) {
  try {
    console.log(req);

    var fkUsuario = req.body.fkUsuario;
    var resiliencia = req.body.resiliencia;
    var confianca = req.body.confianca;
    var estrategia = req.body.estrategia;
    var controleEmocional = req.body.controleEmocional;
    var impulsividade = req.body.impulsividade;

    if (!fkUsuario) {
      res.status(400).send("Usuário ou teste não recebido!");
      return;
    }

    testeModel.cadastrar(
      fkUsuario,
      resiliencia,
      confianca,
      estrategia,
      controleEmocional,
      impulsividade
    );
    res.status(200).json({ mensagem: "Resultado salvo com sucesso!" });
  } catch (erro) {
    console.log(erro);
    res.status(500).json(erro.sqlMessage);
  }
}

module.exports = {
  listar,
  cadastrar,
};
