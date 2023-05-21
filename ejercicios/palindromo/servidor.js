const net = require("net");
const fs = require('fs');
const {Palindromo} = require("./palindromo");

const palindromo = new Palindromo();

const PORT = 16000 + 10 * 3 + 1;

process.title = "servidor";

const server = net.createServer((socket) => {
    socket.setEncoding('utf8');


    socket.on("data", (data) => {
        let file = data.toString();
        console.error(`Recibo el path del cliente: ${file}`);

        fs.access(file, fs.constants.F_OK, (error) => {
            if (error) {
                console.error(`El archivo no fue encotrado: ${file}`);
            } else {
                console.error(`El archivo fue encontrado: ${file}`);
                let contenido = fs.readFileSync(file, "utf-8").toString();
                let splitContenido = contenido.split(" ");
                for (const element of splitContenido){
                    if(palindromo.esPalindromo(element) === true){
                        socket.write(element)
                    }
                }
            }
        });
    });

    socket.on("end", () => {
        console.error("Cerrando conexión con cliente");

    });

    socket.on("error", (e) => {
        console.error(e);
    });
});

process.on('SIGINT', function () {
    console.error(' fue pulsado.');
    console.error('Cerrando Servidor');
    process.exit();
});

server.on("error", (err) => {
    console.error(err);
});

server.listen(PORT, () => {
    console.error(`Servidor arrancado y escuchando en el puerto ${PORT}`)
});
