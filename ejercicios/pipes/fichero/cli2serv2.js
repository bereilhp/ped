const http = require('http');
const read = require('readline');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {});

server.listen(PORT, () => {});

const readline = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

function loop() {
    readline.question('Introduzca el path del fichero: ', name => {
        fs.access(name, fs.constants.F_OK, (error) => {

            let readableStream = fs.createReadStream(name);

            let writableStream = fs.createWriteStream("res.txt");

            if (error) {
                throw new Error(`El fichero: ${name} no existe.`);
            }

            readableStream.setEncoding('utf8');
            readableStream.pipe(writableStream);
            //readableStream.unpipe(writableStream);

            readableStream.on('data', (chunk) => {
                console.log(`Recibí ${chunk.length} bytes de data.`);
                console.log("El texto es: " + chunk)
                console.log("-------------------------------------------")
            });

            readableStream.on('end', () => {
                console.log('Ya termine de leer.');
            });
            
            writableStream.on('finish', () => {
                console.log('Ya termine de escribir.');
                loop();  
            });

            //readline.close();

            //readableStream.destroy();
            //writableStream.destroy();

        })
    });
};

loop()