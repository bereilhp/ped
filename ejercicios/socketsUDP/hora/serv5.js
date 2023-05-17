var udp = require('dgram');
process.title = "serv5";

process.on('SIGINT', function () {
  console.log(' fue pulsado.');
  console.log('Cerrando Servidor');
  process.exit();
});

const server = udp.createSocket('udp4');
server.bind(2222);

server.on('listening',function(){
  let address = server.address();
  //console.log(address)
  let port = address.port;
  let family = address.family;
  let ipaddr = address.address;
  console.log('Servidor escuchando en el puerto : ' + port);
  console.log('La ip del servidor es : ' + ipaddr);
  console.log('Servidor ipv4/ipv6 : ' + family);
});

server.on('message', function (msg, info) {
  console.log('Llegaron %d bytes de %s:%d', msg.length, info.address, info.port);
  console.log('Los datos recibidos del cliente son : ' + msg.toString());
  let date = new Date();
  let dateString = date.toISOString();

  server.send(dateString, info.port, 'localhost', function (error) {
    if (error) {
      server.close();
    } else {
      console.log('Se enviaron los datos');
    }
  });
});

// server.on('close',function(){
//   console.log('Se cierra el Socket UDP');
// });

// setTimeout(function(){
//   server.close();
// },8000);
