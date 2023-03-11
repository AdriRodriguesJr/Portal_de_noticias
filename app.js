// Importa o módulo 'server' que contém as configurações do servidor
var app = require('./config/server');

// Configura o servidor para escutar na porta 3000 e executa uma função quando o servidor estiver pronto
app.listen(3000, function () {
    // Imprime no console a mensagem 'servidor on' indicando que o servidor está ativo
    console.log("servidor on")
});