const {Palindromo} = require("./palindromo")
describe("Class, Object and Function Exists", () => {
    it("Class Exists", () => {
        expect(typeof(Palindromo)).toBe("function");
    });
});