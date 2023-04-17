const net = require('node:net');
const fs = require('fs');
//const {basicPipes} = require("./basicPipe");

const server = net.createServer();
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor arrancado en el puerto:${PORT}`);
});

server.on('connection', (conn) => {
    console.log('Se conecto un cliente');
});