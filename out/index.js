"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculadora_1 = __importDefault(require("./calculadora"));
const calc = new calculadora_1.default();
console.log(calc.calcular('soma', 10, 5));
console.log(calc.calcular('subtrai', 10, 5));
console.log(calc.calcular('multiplica', 10, 5));
console.log(calc.calcular('divide', 10, 5));
