"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divide = exports.Multiplica = exports.Subtrai = exports.Soma = void 0;
class Soma {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 + numero2;
        };
    }
}
exports.Soma = Soma;
class Subtrai {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 - numero2;
        };
    }
}
exports.Subtrai = Subtrai;
class Multiplica {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 * numero2;
        };
    }
}
exports.Multiplica = Multiplica;
class Divide {
    constructor() {
        this.calcular = (numero1, numero2) => {
            return numero1 / numero2;
        };
    }
}
exports.Divide = Divide;
