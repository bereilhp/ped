const fs = require('fs');
const net = require('net');
const PORT = 3000;
const HOST = 'localhost';
const { execSync } = require('child_process');

let path = "./fifos"

if (!fs.existsSync(path)) { //devuelve false si no existe lo niego para que entre
  execSync("mkfifo " + path);
  console.log("Creo la FIFO");
} else {
  console.log("La FIFO ya existe");
}

const client = net.createConnection(PORT, HOST, () => {
  console.log(`Me conecto al servidor ${HOST}:${PORT}`);
});

const readStream = fs.createReadStream(path); //abrir un stream a fifo (leer)

readStream.on("data", (data) => { //Leer datos cuando se pueda después de escribir
    console.log("-----------------------------------------------------------------")
    console.log(`Datos leidos: ${data}`);
    console.log("-----------------------------------------------------------------")
    //readStream.destroy();  //Para que el codigo deje de ejecutar y no se quede bloqueado. Destruir el lector
});

readStream.on("end", () => {
    console.log("Ya termine de leer.");
});