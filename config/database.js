var mongose = require('mongoose');

module.exports = function (uri) {
    mongose.connect(uri, {server: {poolSize: 15}});

    mongose.connection.on('connected', function () {
        console.log('Mongoose! Conectado em ' + uri);
    });

    mongose.connection.on('disconnected', function () {
        console.log('Mongoose! Desconectado de ' + uri);
    });

    mongose.connection.on('error', function (erro) {
        console.log('Mongoose! Erro na conexão: ' + erro);
    });

    process.on('SIGINT', function () {
        mongose.connection.close(function() {
            console.log('Mongoose! Desconectado pelo término da aplicação');
        process.exit(0);
        });
    });
}