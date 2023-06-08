'use-strict'
const PORT = 8080;

const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('Que onda mi' + req.query.name);
})

server.listen(PORT,() => {
    console.log('listening on port', PORT);
})