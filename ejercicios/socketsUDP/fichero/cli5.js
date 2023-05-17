var udp = require('dgram');
process.title = "cli5";

var client = udp.createSocket('udp4');

let filePath = process.argv[2];

client.send(filePath,2222,'localhost',function(error){
  if(error){
    client.close();
  }else{
    console.error('Se enviaron los datos');
  }
});

client.on('message', function (msg, info) {
  console.error('Llegaron %d bytes de %s:%d', msg.length, info.address, info.port);
  console.error('Los datos recibidos del servidor son : ')
  console.log(msg.toString());
  //client.close()
});
