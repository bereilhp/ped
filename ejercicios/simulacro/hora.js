class Hora {
    /**
     * 
     * @returns La hora actual en formato HH:MM:SS
     */
    darHora(){
        const date = new Date()
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`
    }
};

module.exports = {
    Hora
}