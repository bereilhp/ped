const net = require('net');
process.title = "cliente";

const client = new net.Socket();
client.setEncoding('utf8');

client.connect(3000, 'localhost', () => {
  console.log('Conectado al servidor');

  process.stdin.on('data', (data) => {
    client.write(data.toString().trim());
  });

  client.on('data', (data) => {
    console.log(data);
  });

  client.on('end', () => {
    console.log('Desconectado del servidor');
  });

  client.on('error', (err) => {
    console.error(err);
  });
});
