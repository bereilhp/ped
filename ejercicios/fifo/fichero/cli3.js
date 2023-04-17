const fs = require('fs');
const net = require('net');
const PORT = 3000;
const HOST = 'localhost';
const read = require('readline');
const { execSync } = require('child_process');

const readline = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

let path = "fifos";

if (!fs.existsSync(path)) { //devuelve false si no existe lo niego para que entre
    execSync("mkfifo " + path);
    console.log("Creo la FIFO");
} else {
    console.log("La FIFO ya existe");
}

const client = net.createConnection(PORT, HOST, () => {
    console.log(`Me conecto al servidor ${HOST}:${PORT}`);

    readline.question('Introduzca el path del fichero: ', name => {
        client.write(name);
    })

    const readStream = fs.createReadStream(path); //abrir un stream a fifo (leer)

    readStream.on("data", (data) => { //Leer datos cuando se pueda después de escribir
        console.log("-----------------------------------------------------------------");
        console.log(`Datos leidos: ${data}`);
        console.log("-----------------------------------------------------------------");
        //readStream.destroy();  //Para que el codigo deje de ejecutar y no se quede bloqueado. Destruir el lector
    });

    readStream.on("end", () => {
        console.log("Ya termine de leer.");
    });
});

// client.end();

// client.on('end', () => {
//     console.log('Me desconecto del servidor'); 
// });