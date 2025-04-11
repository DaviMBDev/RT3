class Soma {
    public static calcular = (numero1: number, numero2: number) => {
        return numero1 + numero2
    }
}

class Subtrai {
    public static calcular = (numero1: number, numero2: number) => {
        return numero1 - numero2
    }
}

class Multiplica {
    public static calcular = (numero1: number, numero2: number) => {
        return numero1 * numero2
    }
}

class Divide {
    public static calcular = (numero1: number, numero2: number) => {
        return numero1 / numero2
    }
}

export{ Soma, Subtrai, Multiplica, Divide}
