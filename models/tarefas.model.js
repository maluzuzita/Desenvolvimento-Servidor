// O model é responsável pelo banco.
const db = require('../db/dbConnect.js');

// CRUD
class Tarefa {

    // READ
        static async readAllTarefas(){ // Função assíncrona não para o processamento.
            console.log('tarefas.model.js', 'realAllTarefas()');
            const query = "select * from tarefas";
            var dados = await db.executarQuery(query);
            return db.executarQuery(query); // PROMESSA: em algum momento ele vai ser executado e devolvido.
        }

        static async cadastrarTarefa(tarefa){
            console.log('tarefas.model.js', 'cadastrarTarefa()');
            console.log("tarefa", tarefa);
            const query = "INSERT INTO tarefas(data, hora, descricao) VALUES (?, ?, ?)";
            return db.executarQuery(query, [dataTarefa, horaTarefa, descricaoTarefa]);
        }
}

module.exports = Tarefa;