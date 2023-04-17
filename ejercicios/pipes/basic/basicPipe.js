const fs = require('fs');

let leer = fs.createReadStream("leer.txt");
let escribir = fs.createWriteStream("escribir.txt");

leer.pipe(escribir);

leer.on("end", () => {
    console.log("Ya termine de leer")
})

escribir.on("finish", () => {
    console.log("Ya termine de escribir")
})

leer.on("close", () => { 
    console.log("Se cerro el proceso de leer")
})

escribir.on("close", () => { 
    console.log("Se cerro el proceso de escribir")
})