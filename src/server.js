const express = require('express');
const server = express();
const route = require('./routes');
const path = require('path');

server.listen(3000, () => console.log('RODANDO'));


server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({extended: true}));
server.use(express.static('public'));
server.use(route);
