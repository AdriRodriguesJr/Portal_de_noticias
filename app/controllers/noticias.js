// Rota para renderizar a página de listagem de notícias
module.exports.noticias = function(application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    
    noticiasModel.getNoticias(function(error, result) {
      res.render("noticias/noticias", {noticias : result });
    });
  };
  
  // Rota para renderizar a página de visualização de uma notícia específica
  module.exports.noticia = function(application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    var id_noticia = req.params.id;
  
    // Chama o método getNoticia do modelo, passando o ID como parâmetro e uma função de callback para tratar o resultado da consulta
    noticiasModel.getNoticia(id_noticia, function(error, result) {
      res.render("noticias/noticia", { noticia : result });
    });
  };