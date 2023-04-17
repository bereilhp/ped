const fs = require('fs');
const data = new Date();

fs.writeFile('date.txt', data.toISOString(), (err) => {
    if (err) throw err;
});

let readableStream = fs.createReadStream("date.txt");
let writableStream = fs.createWriteStream("res.txt");

readableStream.setEncoding('utf8');
readableStream.pipe(writableStream);

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
});




