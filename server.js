const express = require('express');

const accountsModel = require('./data/accountsModel');
const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('/api/accounts', accountsModel);

server.get(('/', (req, res) => {
    res.send(200)('<h1> Welcome</h1>') 
}))
module.exports = server;