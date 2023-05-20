class Fecha {
    /**
     * 
     * @returns La fecha actual
     */
    darFecha(){
        const fecha = new Date().toDateString();
        return fecha;
    }
};

module.exports = {
    Fecha
};