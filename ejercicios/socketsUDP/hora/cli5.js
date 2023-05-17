var udp = require('dgram');
process.title = "cli5";

var client = udp.createSocket('udp4');

let data = "Qué hora es?"

client.send(data,2222,'localhost',function(error){
  if(error){
    client.close();
  }else{
    console.log('Se enviaron los datos');
  }
});

client.on('message', function (msg, info) {
  console.log('Llegaron %d bytes de %s:%d', msg.length, info.address, info.port);
  console.log('Los datos recibidos del servidor son : ' + msg.toString());
  client.close()
});
