// Documento que contém todas as rotas da aplicação.
const express = require("express");
const tarefasController = require("../controllers/tarefas.controller"); 
const router = express.Router();

// rotas da aplicação
router.get("/", tarefasController.mostrarTarefas);
router.post("/cadastrar", tarefasController.criarTarefa);

module.exports = router; // Necessário para poder usar as funções deste módulo fora dele
