const net = require('node:net');
const fs = require('fs');

const PORT = 3000;
process.title = "serv6";

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
        let contenido = fs.readFileSync(file, "utf-8").toString();
        socket.write(contenido);
     }
    });
  });

  socket.on('close', () => {
    console.error('Se cerro conexión con el cliente');
  });
});

process.on('SIGINT', function () {
  console.error(' fue pulsado.');
  console.error('Cerrando Servidor');
  process.exit();
});

server.listen(PORT, () => {
  console.error(`Servidor arrancado en el puerto = ${PORT}`);
});