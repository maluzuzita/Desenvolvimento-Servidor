// CRUD é um acrônimo para Create (Criar), Read (Ler/Consultar), Update (Atualizar) e Delete (Excluir).
// Essas ações formam a base funcional de quase todas as aplicações de software modernas.

const tarefasModel = require("../models/tarefas.model");

const criarTarefa = (req, res) => {
    // console.log("conteudo", req.body);
    tarefasModel.cadastrarTarefa(req.body).then((status)=>{
        console.log(status.affectedRows);
    //    res.end("Vamos ver no que isso da"); 
        return res.redirect("/");
    });  
};

const mostrarTarefas = (req, res) => {
    //res.send("rota raiz");

    // Esse "tarefas" que está sendo utilizado como argumento é o Select do banco de dados.
    tarefasModel.readAllTarefas().then((tarefas) => { // realAllTarefas vai ler o conteudo do tarefasModel e criar uma promessa. Essa promessa vai ser tratada pelo Then e analisada por ele, até que ela seja devolvida pela função de callback (quando for cumprida) e exibida no views.
        res.render("index", { title: "principal", dados: tarefas }); // Objeto literal: encapsulamento de atributos de um objeto. Essa "tarefas" no "dados:" (conteudo do BCD) é o array das informações que computamos.
    });

}

const alterarTarefa = (req, res) => {
    res.end('alterarTarefa por implementar');
}

const deletarTarefa = (req, res) => {
    res.end('deletarTarefa por implementar');
}

// Se as tarefas não forem exportadas, não será possível utilizá-las
module.exports = {
    criarTarefa,
    alterarTarefa,
    deletarTarefa,
    mostrarTarefas
}