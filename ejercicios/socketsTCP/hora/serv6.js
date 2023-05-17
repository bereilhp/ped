const net = require('node:net'); 

process.title = "serv6";

process.on('SIGINT', function() {
  console.log(' fue pulsado.');
  console.log('Cerrando Servidor');
  process.exit();
});


const server = net.createServer();
const PORT = 3000;

let date = new Date();
let dateString = date.toISOString();


server.listen(PORT, () => {
  console.log(`Servidor arrancado en el puerto:${PORT}`);
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




