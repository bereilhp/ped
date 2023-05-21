class Palindromo {
    esPalindromo(palabra){
        let palabraDadaVuelta = "";
        for (let i = palabra.length-1; i >= 0; i--){
            palabraDadaVuelta = palabraDadaVuelta + palabra[i];
        }
        return palabra.toLowerCase() === palabraDadaVuelta.toLowerCase();
    }
}

module.exports = {
    Palindromo
}