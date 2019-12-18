const path = require('path');
const conexao = require('../../config/infra/db')

module.exports = function(app){

    app.get('/login', function(request, response) {
        response.sendFile(path.join(__dirname + '../../../views/login.html'));
        console.log('Página de login');
    });
    
    app.post('/auth', function(request, response) {
        var username = request.body.username;
        var password = request.body.password;

        if (username && password) {
            conexao.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
                if (results.length > 0) {
                    request.session.loggedin = true;
                    request.session.username = username;
                    response.redirect('/home');
                    console.log('Autenticado com sucesso!');
                    
                } else {
                    response.send('Usuário e/ou Senha Incorreto!');
                }			
                response.end();
            });
        } else {
            response.send('Por favor, insira o Usuário e Senha!');
            response.end();
        }
    });
    
    app.get('/home', function(request, response) {
        if (request.session.loggedin) {
            response.send('Você chegou na HomePage, ' + request.session.username + '!');
        } else {
            response.send('Por favor, realize login para acessar esta pagina!');
        }
        response.end();
    });
}

