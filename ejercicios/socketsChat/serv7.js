const net = require("net");
const PORT = 3000;
const connections = [];
const usernames = []
process.title = "serv7";

const server = net.createServer((socket) => {
    console.error("Nuevo usuario conectado");

    socket.write("Ingrese su username: ");

    let username = "";

    socket.on("data", (data) => {
        if (!username) {
            username = data.toString().trim();
            connections.push({ socket, username });
            if (!usernames) {
                socket.write(`Bienvenido al chat, ${username}!\n`);
                usernames.push(username);
            } else {
                if (usernames.includes(username.toLowerCase())) {
                    socket.write("Usuario ya existe\n");
                    socket.write("Cerrando Sesión\n");
                    socket.destroy()
                } else {
                    socket.write(`Bienvenido al chat, ${username}!\n`);
                    usernames.push(username);
                    for (const connection of connections) {
                        if (connection.socket !== socket) {
                            connection.socket.write(`${username} se ha conectado al chat\n`);
                        }
                    }
                }
            }
            
        } else {
            const message = data.toString().trim();

            for (const connection of connections) {
                if (connection.socket !== socket) {
                    connection.socket.write(`${username}: ${message}`);
                }
            }
        }
    });

    socket.on("end", () => {
        console.error(`${username} se ha desconectado`);
        connections.splice(connections.indexOf(socket), 1);

        for (const connection of connections) {
            connection.socket.write(`${username} se ha desconectado del chat\n`);
        }
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
