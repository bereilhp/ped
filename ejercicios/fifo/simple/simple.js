const fs = require('fs');
const { execSync } = require('child_process');

let path = "./fifo";

if (!fs.existsSync(path)) { //devuelve false si no existe lo niego para que entre
    execSync("mkfifo " + path);
    console.log("Creo la FIFO");
} else {
    console.log("La FIFO ya existe");
}

let leer = fs.createReadStream(path);
let escribir = fs.createWriteStream(path);
leer.setEncoding('utf8');

escribir.on('open', () => {
    console.log('La FIFO esta lista para escribir');
    escribir.write('Hola');
});

leer.on("data", (data) => { 
    console.log("-----------------------------------------------------------------");
    console.log(`Datos leidos: ${data}`);
    console.log("-----------------------------------------------------------------");
    process.exit();
});



