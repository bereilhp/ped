const {Palindromo} = require("./palindromo")
describe("Class, Object and Function Exists", () => {
    it("Class Exists", () => {
        expect(typeof(Palindromo)).toBe("function");
    });

    it("Object Exists", () => {
        const palindromo = new Palindromo();
        expect(typeof(palindromo)).toBe("object");
    });

    it("Function Exists", () => {
        const palindromo = new Palindromo();
        expect(typeof(palindromo.esPalindromo)).toBe("function");
    });
});

describe("Function esPalindromo() tests", () => {
    it("Simple test ana", () => {
        const palindromo = new Palindromo();
        expect(palindromo.esPalindromo("ana")).toBe(true);
    })

    it("Simple test Juan", () => {
        const palindromo = new Palindromo();
        expect(palindromo.esPalindromo("Juan")).toBe(false);
    })

    it("Simple test 121", () => {
        const palindromo = new Palindromo();
        expect(palindromo.esPalindromo("121")).toBe(true);
    })

    it("Hard test Ana", () => {
        const palindromo = new Palindromo();
        expect(palindromo.esPalindromo("Ana")).toBe(true);
    })
});
