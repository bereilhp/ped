const { Calculator } = require("./calc");

describe("Class and object exists", () => {
    it("Calculator exists", () => {
        expect(typeof(Calculator)).toBe("function");
    });

    it("Object exists", () => {
        let calc = new Calculator();
        expect(typeof(calc)).toBe("object");
    });

    it("Object function exists", () => {
        let calc = new Calculator();
        expect(typeof(calc.add)).toBe("function");
    });
});

describe("Test function add", () => {
    it("Test add function", () => {
        let calc = new Calculator();
        expect(calc.add(1,3)).toBe(4);
    });

    it("Test add function Not a Number", () => {
        let calc = new Calculator();
        expect(calc.add(1,"a")).toBe("No es un número");
    });
});

describe("Test function sub", () => {
    it("Test sub function exists", () => {
        let calc = new Calculator();
        expect(typeof(calc.sub)).toBe("function");
    });

    it("Test sub function simple test", () =>{
        let calc = new Calculator;
        expect(calc.sub(4,2)).toBe(2)
    });

    it("Test sub function", () =>{
        let calc = new Calculator;
        expect(calc.sub(6,2)).toBe(4)
    });

    it("Test sub function error", () =>{
        let calc = new Calculator;
        expect(calc.sub(6,"a")).toBe("No es un número")
    });

    it("Test sub function negativos", () =>{
        let calc = new Calculator;
        let sub = calc.sub;
        expect(sub(1,-2)).toBe(3)
    });
});
