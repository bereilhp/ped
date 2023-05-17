const net = require('node:net');
const fs = require('fs');

process.title = "serv4";

process.on('SIGINT', function () {
  console.error(' fue pulsado.');
  console.error('Cerrando Servidor');
  process.exit();
});

const socketFile = '/tmp/soyElSocketGrupo3';

if (fs.existsSync(socketFile)) {
  fs.unlinkSync(socketFile);
}


const server = net.createServer(function (socket) {
  console.error('Se conecto un cliente');

  socket.on('data', function (data) {
    let file = data.toString();
    console.error(`Recibo el path del cliente: ${file}`);

    fs.access(file, fs.constants.F_OK, (error) => {
      if (error) {
        console.error(`El archivo no fue encotrado: ${file}`);
      } else {
        console.error(`El archivo fue encontrado: ${file}`);
      }
    });

    const contenido = fs.readFileSync(file);
    socket.write(contenido);

  });

  socket.on('close', () => {
    console.error('Se cerro conexión con el cliente');
  });

  //socket.end()

});

server.listen(socketFile, () => {
  console.error(`Servidor arrancado y conectado al socket en ${socketFile}`);
});