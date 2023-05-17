const net = require('node:net'); 
const fs = require('fs');
let date = new Date();
let dateString = date.toISOString();
process.title = "serv4";

process.on('SIGINT', function() {
  console.log(' fue pulsado.');
  console.log('Cerrando Servidor');
  process.exit();
});

const socketFile = '/tmp/soyElSocketGrupo3';

if (fs.existsSync(socketFile)) {
  fs.unlinkSync(socketFile);
}

const server = net.createServer();

server.listen(socketFile, () => {
  console.log(`Servidor arrancado en ${socketFile}`);
});

server.on('connection', (socket) => {
    console.log('Se conecto un cliente');
    socket.setEncoding('utf8');
    socket.write(dateString);
    //console.log('Cierro conexión con el cliente');
    socket.on('close', () => {
      console.log('Cierro conexión con el cliente');
    });
    socket.end();
});




