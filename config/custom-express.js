const express = require('express');
const session = require('express-session');
var consign = require('consign');
const bodyParser = require('body-parser');

module.exports = ()=>{
    var app = express();

    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }));
    
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());

    consign()
        .include('./app/controllers')
        .into(app)

    return app;
}