const net = require('net');
process.title = "cli7";

const client = new net.Socket();

client.connect(3000, 'localhost', () => {
  console.log('Conectado al servidor');

  process.stdin.on('data', (data) => {
    client.write(data.toString().trim());
  });

  client.on('data', (data) => {
    console.log(data.toString());
  });

  client.on('end', () => {
    console.log('Desconectado del servidor');
  });

  client.on('error', (err) => {
    console.error(err);
  });
});

