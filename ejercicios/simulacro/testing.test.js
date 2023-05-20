const {Fecha} = require("./fecha.js")
describe("Check if they exists", () => {
    it("Class Fecha Exists", () => {
        expect(typeof(Fecha)).toBe("function");
    });

    it("Object fecha Exists", () => {
        const fecha = new Fecha();
        expect(typeof(fecha)).toBe("object");
    });
});

describe("Function darFecha()",  () => {
    it("darFecha() exists", () => {
        const fecha = new Fecha();
        expect(typeof(fecha.darFecha)).toBe("function")
    })

    it("darFecha() simple test", () => {
        const fechaSimple = new Fecha();
        let fecha = new Date().toDateString();
        expect(fechaSimple.darFecha()).toBe(fecha)
    })
})