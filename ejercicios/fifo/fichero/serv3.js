const net = require('node:net');
const fs = require('fs');

//const {readline} = require("./cli3");

const server = net.createServer();
const PORT = 3000;
let path = "fifos"

server.listen(PORT, () => {
    console.log(`Servidor arrancado en el puerto:${PORT}`);
});

server.on('connection', (conn) => {
    console.log('Se conecto un cliente');

    conn.on('data', (data) => {
        const name = data.toString();
        console.log(`Recibo el path del cliente: ${name}`);

        fs.access(name, fs.constants.F_OK, (error) => {
            if (error) {
                conn.write(`El archivo no fue encotrado: ${name}`);
            } else {
                conn.write(`El archivo fue encontrado: ${name}`);
            }
        });

        const writeStream = fs.createWriteStream(path); //abrir stream a fifo (escribir)

        const contenido = fs.readFileSync(name);

        writeStream.write(contenido); //Escribir contenido de fichero
        writeStream.end();

        writeStream.on("finish", () => {
            console.log("Ya termine de escribir.");
        });

      
    })

    conn.on('close', () => {
        console.log('Se cerro conexión con el cliente');
      });
});
