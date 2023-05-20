class Fecha {
    darFecha(){
        const fecha = new Date().toDateString();
        return fecha;
    }

};

module.exports = {
    Fecha
};