import Calculadora from './calculadora'

const calc = new Calculadora()

console.log(calc.calcular('soma', 10, 5))
console.log(calc.calcular('subtrai', 10, 5))
console.log(calc.calcular('multiplica', 10, 5))
console.log(calc.calcular('divide', 10, 5))