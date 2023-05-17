const net = require('net');
process.title = "cli4";
const socketFile = '/tmp/soyElSocketGrupo3';

const client = net.connect(socketFile, () => {
  console.error('Me conecto al socket ' + socketFile);
});

let filePath = process.argv[2];
client.write(filePath)

client.on('data', function (data) {
  console.log(data.toString());
});

//client.end();



