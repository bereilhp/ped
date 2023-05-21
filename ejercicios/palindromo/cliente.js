const net = require('net');
process.title = "cliente";

const client = new net.Socket();
client.setEncoding('utf8');
let filePath = process.argv[2];

client.connect(16031, 'localhost', () => {
  console.log('Conectado al servidor');
  client.write(filePath)

  process.stdin.on('data', (data) => {
    client.write(data.toString().trim());
  });

  client.on('data', (data) => {
    console.log(data);
  });

  client.on('end', () => {
    console.log('Desconectado del servidor');
  });

  process.on('SIGINT', function () {
    console.error(' fue pulsado.');
    console.log('Cerrando sesión Cliente');
    process.exit();
  });

  client.on('error', (err) => {
    console.error(err);
  });
});
