class Calculator {
    /**
     * 
     * @param {Number} a 
     * @param {Number} b 
     * @returns Sum of a + b
     */
    add(a, b) {
        try {
            if (typeof (a) != "number" || typeof (b) != "number") {
                throw "No es un número"
            } else return a + b;
        } catch (error) {
            return error
        }
    }

    sub(){}
};

module.exports = {
    Calculator
}