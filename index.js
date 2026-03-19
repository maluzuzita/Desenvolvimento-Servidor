// Importações de bibliotecas e configurações básicas.
const http = require("http");
const express = require("express"); // Framework que trabalha com problemas específicos de aplicações web.
const morgan = require("morgan"); // Framework que trabalha com a velocidade de resposta da aplicação no terminal.
const router = express.Router(); // Trabalha com as rotas.


const app = express(); // Representa a aplicação.
require("dotenv").config(); // Disponibiliza o trabalho com variáveis de ambiente.

// Importação de rotas
const tarefasRoutes = require("./routes/tarefas.routes");

// configurações iniciais
app.use(morgan("dev")); 
app.set("views", "./views"); // Configuração da pasta das views.
app.set("view engine", "ejs"); // Configuração da pasta das views.
app.use(express.static("./public")); // Arquivos estáticos são arquivos que não mudam frequentemente.
app.use(express.urlencoded({extended: true})); // Configura o express para retirar os dados do formulário HTML.

const porta = Number(process.env.PORTA); // Linha que consegue pegar o número da porta colocada no env

app.use("/", tarefasRoutes);

app.use((req, res) => {
  //res.status(404).send("Página não encontrada!");
  res.status(404).render("erro404", { title: "erro 404" });
});

// Coloca o servidor no ar
app.listen(porta, () => { // Coloca em uma porta específica e roda os comandos abaixo:
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});

