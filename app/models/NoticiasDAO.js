// Definição do construtor NoticiasDAO com a conexão como parâmetro
function NoticiasDAO(connection) {
	this._connection = connection;
}

// Método para buscar todas as notícias
NoticiasDAO.prototype.getNoticias = function (callback) {
	this._connection.query('select * from noticias order by data_criacao desc', callback);
}

// Método para buscar uma notícia pelo ID
NoticiasDAO.prototype.getNoticia = function (id_noticias, callback) {
	// Utiliza o ID como parâmetro para a consulta
	this._connection.query('SELECT * FROM noticias WHERE id_noticias = ?;', id_noticias, function (error, result) {
		if (error) {
			console.log(error);
			callback(error, null);
		} else {
			if (result && result.length > 0) {
				callback(null, result[0]);
			} else {
				callback(null, null);
			}
		}
	});
};

// Método para salvar uma notícia
NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
	this._connection.query('insert into noticias set ? ', noticia, callback)
}

// Método para buscar as 5 últimas notícias
NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

// Exporta o construtor NoticiasDAO
module.exports = function () {
	return NoticiasDAO;
};
