module.exports.index = function (application, req, res) {

    // obtém uma conexão com o banco de dados
    var connection = application.config.dbConnection();

    // cria um objeto NoticiasDAO e passa a conexão como parâmetro
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    // chama o método get5UltimasNoticias do objeto noticiasModel para obter as 5 últimas notícias
    noticiasModel.get5UltimasNoticias(function (error, result) {
        
        // renderiza a página home/index e passa o resultado da busca das notícias como parâmetro
        res.render("home/index", { noticias : result });
    });
}