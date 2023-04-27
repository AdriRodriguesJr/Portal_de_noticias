// Importa as dependências necessárias para criar o servidor web
var express = require ('express');
var consign = require ('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


var app = express();// Cria uma instância do servidor web utilizando o Express

app.set('view engine', 'ejs');// Configura o EJS como mecanismo de visualização

app.set('views', './app/views');// Define a pasta 'app/views' como pasta padrão para as visualizações

app.use(express.static('./app/public'));// Define a pasta 'app/public' como pasta de arquivos estáticos

app.use(bodyParser.urlencoded({extended: true}));// Configura o Body Parser como middleware para receber dados enviados por formulários

app.use(expressValidator());// Configura o Express Validator como middleware para validar dados de formulários

// Carrega as rotas, conexão com o banco de dados, modelos e controladores da aplicação
consign()
	.include('app/routes') // Inclui as rotas
	.then('config/dbConnection.js') // Inclui a conexão com o banco de dados
	.then('app/models') // Inclui os modelos
	.then('app/controllers') // Inclui os controladores
	.into(app); // Insere tudo no objeto 'app'


module.exports = app;// Exporta o objeto 'app' para que possa ser utilizado em outros arquivos da aplicação