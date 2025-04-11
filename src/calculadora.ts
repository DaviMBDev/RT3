import {Soma, Subtrai, Multiplica, Divide} from './conta'

class Calculadora{
    private soma = new Soma()
    private subtrai = new Subtrai()
    private multiplica = new Multiplica()
    private divide = new Divide()

    public calcular(operacao: string, numero1: number, numero2: number){
        switch(operacao){
            case 'soma':
                return this.soma.calcular(numero1, numero2)
            case 'subtrai':
                return this.subtrai.calcular(numero1, numero2)
            case 'multiplica':
                return this.multiplica.calcular(numero1, numero2)
            case 'divide': 
                if(numero2 === 0) return 'Erro, divisão por zero'
                return this.divide.calcular(numero1, numero2)
                default:
                    return 'Operação inválida'
             
        }
    }
}

export default Calculadora