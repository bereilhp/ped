const net = require('node:net'); 
const fs = require('fs');

const server = net.createServer();
const PORT = 3000;
let date = new Date();
let dateString = date.toISOString();
let path = "./fifos"

server.listen(PORT, () => {
  console.log(`Servidor arrancado en el puerto:${PORT}`);
});

server.on('connection', () => {
    console.log('Se conecto un cliente');

    const writeStream = fs.createWriteStream(path);
    writeStream.write(dateString); //Escribir
    writeStream.end();

    writeStream.on("finish", () => {
        console.log("Ya termine de escribir.");
    });  
});




