export default class calculadora {
    constructor (contas = [], valores = [], inicial = 0) {
        this.inicial = inicial
        this.contas = contas
        this.valores = valores

        let final = []

        this.contas.forEach(conta => {
            final.push(this.count(conta, this.valores))
        });

        return final
    }

    count (contas, valores) {
        switch (contas) {
            case '+':
                return this.add(valores);
            
            case '-':
                return this.sub(valores)
            
            case '*':
                return this.multi(valores)
            
            case '/':
                return this.div(valores)
            
            case '**':
                return this.exp(valores)

            case '%':
                return this.remainder(valores)
            default:
                break;
        }
    }

    add (valores) {
        let inicial = this.inicial

        valores.forEach(valor => {
            inicial += valor
        });

        return inicial
    }

    sub (valores) {
        let inicial = this.inicial

        valores.forEach(valor => {
            inicial -= valor
        });

        return inicial
    }

    multi (valores) {
        let inicial = this.inicial

        valores.forEach(valor => {
            inicial *= valor
        });

        return inicial
    }

    div (valores) {
        let inicial = this.inicial

        valores.forEach(valor => {
            inicial /= valor
        });

        return inicial
    }

    exp (valores) {
        let inicial = this.inicial

        valores.forEach(valor => {
            inicial **= valor
        });

        return inicial
    }

    remainder (valores) {
        let inicial = this.inicial

        valores.forEach(valor => {
            inicial %= valor
        });

        return inicial
    }
}


/* const count = new calculadora(['+','-','*','/','**', '%'], [4,5,6], 9)
console.log(count);
*/