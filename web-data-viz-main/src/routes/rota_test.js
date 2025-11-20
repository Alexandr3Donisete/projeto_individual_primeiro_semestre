var express = require("express");
var router = express.Router();

var testeController = require("../controllers/testeController");

router.post("/cadastrar", function (req, res) {
    testeController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    testeController.listar(req, res);
});

module.exports = router;
