const net = require('net');
const PORT = 3000;
const HOST = 'localhost';
const read = require('readline');

process.title = "cli6";

let sock = net.Socket();
sock.setEncoding('utf8');
let filePath = process.argv[2];

sock.connect(PORT, HOST, () => {
  console.error(`Me conecto al servidor ${HOST}:${PORT}`);
});

sock.write(filePath)

sock.on('data', function (data) {
  console.log(data);
});



