const {Fecha} = require("./fecha")
describe("Check if they exists", () => {
    it("Class Fecha Exists", () => {
        expect(typeof(Fecha)).toBe("function");
    });
});