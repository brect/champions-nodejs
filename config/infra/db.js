const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Joao0904*',
    database: 'champions'
});

module.exports = conexao;