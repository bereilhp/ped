const net = require('net');
process.title = "cli4";

const socketFile = '/tmp/soyElSocketGrupo3';

const client = net.connect(socketFile, () => {
  console.log('Me conecto al socket ' + socketFile);
});

client.on('data', function (data) {
  console.log(data.toString());
});

client.end();
