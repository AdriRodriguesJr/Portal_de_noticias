// Importa o módulo 'mysql', que permite trabalhar com o banco de dados MySQL
var mysql = require('mysql');

// Cria uma função que retorna uma nova conexão com o banco de dados MySQL
var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost', 
		user : 'root', 
		password : '1234', 
		database : 'noticias'
	});
}

// Exporta uma função que retorna a função 'connMySQL'
module.exports = function () {
	return connMySQL;
}