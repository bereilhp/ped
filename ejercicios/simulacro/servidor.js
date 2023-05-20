const net = require("net");
const {Fecha} = require("./fecha.js");
const {Hora} = require("./hora.js");
const {ErrorMsj} = require("./error.js")
const PORT = 3000;

const fecha = new Fecha();
const hora = new Hora;
const error = new ErrorMsj();

process.title = "servidor";

const server = net.createServer((socket) => {
    socket.setEncoding('utf8');
    console.error("Nuevo cliente conectado");
    socket.write("Escribe FECHA o HORA\nCualquier otro mensaje dara ERROR")

    socket.on("data", (data) => {
        
        if(data.toString().trim() == "FECHA"){
            socket.write(fecha.darFecha())
        } else if (data.toString().trim() == "HORA"){
            socket.write(hora.darHora())
        }else {
            socket.write(error.darError())
            //socket.end()
        }
        
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
