function CalculatorService() {

    const SOMA = '+';
    const SUBTRACAO = '-';
    const MULTIPLICACAO = '*';
    const DIVISAO = '/';

    function calcular(numero1, numero2, operacao) {
        let resultado;

        switch (operacao) {
            case SOMA:
                resultado = numero1 + numero2;
                break;
            case SUBTRACAO:
                resultado = numero1 - numero2;
                break;
            case MULTIPLICACAO:
                resultado = numero1 * numero2;
                break;
            case DIVISAO:
                resultado = numero1 / numero2;
                break;
            default:
                resultado = 0;
        }

        return resultado;
    }

    function concatenarNumero(numAtual, numConcat) {
        // caso 0 ou null, reinicia variável
        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }

        // primeiro dígito '.' concatena com 0
        if (numConcat === '.' && numAtual === '') {
            return '0.';
        }

        //caso já tenha digitado '.', retorna sem fazer nada
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }

        return numAtual + numConcat;
    }

    return [
        calcular,
        concatenarNumero,
        SOMA,
        SUBTRACAO,
        MULTIPLICACAO,
        DIVISAO
    ];
}

export default CalculatorService;