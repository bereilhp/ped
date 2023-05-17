var udp = require('dgram');
const fs = require('fs');
process.title = "serv5";

process.on('SIGINT', function () {
  console.error(' fue pulsado.');
  console.error('Cerrando Servidor');
  process.exit();
});

const server = udp.createSocket('udp4');
server.bind(2222);

server.on('listening', function () {
  let address = server.address();
  //console.log(address)
  let port = address.port;
  let family = address.family;
  let ipaddr = address.address;
  console.error('Servidor escuchando en el puerto : ' + port);
  console.error('La ip del servidor es : ' + ipaddr);
  console.error('Servidor ipv4/ipv6 : ' + family);
});

server.on('message', function (msg, info) {
  console.error('Llegaron %d bytes de %s:%d', msg.length, info.address, info.port);
  let file = msg.toString();
  console.error(`Recibo el path del cliente: ${file}`);

  fs.access(file, fs.constants.F_OK, (error) => {
    if (error) {
      console.error(`El archivo no fue encotrado: ${file}`);
    } else {
      console.error(`El archivo fue encontrado: ${file}`);
    }
  });

  //const contenido = fs.readFileSync(file);

  fs.readFile(file, (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
    }
  
    const sizePaquete = 2048;
    let paquetesEnviados = 0;

    while (paquetesEnviados < data.length) {
      const chunk = data.slice(paquetesEnviados, paquetesEnviados + sizePaquete);
      console.log(chunk);
      server.send(chunk, info.port, 'localhost', function (error) {
        if (error) {
          //console.log(error)
          console.error("Fichero muy grande")
          server.close();
        } else {
          console.error('Se enviaron los datos');
        }
      });

      paquetesEnviados = paquetesEnviados + sizePaquete;
    }
  });
})
