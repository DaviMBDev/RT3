"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./conta");
class Calculadora {
    constructor() {
        this.soma = new conta_1.Soma();
        this.subtrai = new conta_1.Subtrai();
        this.multiplica = new conta_1.Multiplica();
        this.divide = new conta_1.Divide();
    }
    calcular(operacao, numero1, numero2) {
        switch (operacao) {
            case 'soma':
                return this.soma.calcular(numero1, numero2);
            case 'subtrai':
                return this.subtrai.calcular(numero1, numero2);
            case 'multiplica':
                return this.multiplica.calcular(numero1, numero2);
            case 'divide':
                if (numero2 === 0)
                    return 'Erro, divisão por zero';
                return this.divide.calcular(numero1, numero2);
            default:
                return 'Operação inválida';
        }
    }
}
exports.default = Calculadora;
