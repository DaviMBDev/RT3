class Soma {
    public calcular = (numero1: number, numero2: number) => {
        return numero1 + numero2
    }
}

class Subtrai {
    public calcular = (numero1: number, numero2: number) => {
        return numero1 - numero2
    }
}

class Multiplica {
    public calcular = (numero1: number, numero2: number) => {
        return numero1 * numero2
    }
}

class Divide {
    public calcular = (numero1: number, numero2: number) => {
        return numero1 / numero2
    }
}

export{ Soma, Subtrai, Multiplica, Divide}
