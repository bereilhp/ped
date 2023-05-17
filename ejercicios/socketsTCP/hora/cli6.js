const net = require('net');
const PORT = 3000;
const HOST = 'localhost';
process.title = "cli6";

let sock = net.Socket();
sock.connect(PORT);
sock.setEncoding('utf8');
console.log(`Me conecto al servidor ${HOST}:${PORT}`);

sock.on('data', function (data) {
  console.log(data.toString());
});

sock.end(() => {
  //console.log("Cierro conexión")
});
