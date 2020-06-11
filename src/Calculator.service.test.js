import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorService from './Calculator.service';

describe('Teste de Calculadora', () => {

	const [calcular, concatenarNumero, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] = CalculatorService();

	it('garantir que 1 + 4 = 5', () => {
		let soma = calcular(1, 4, '+');
		expect(soma).toEqual(5);
	});

	it('garantir 1 - 4 = -3', () => {
		let subtrair = calcular(1, 4, SUBTRACAO);
		expect(subtrair).toEqual(-3);
	});

	it('garantir que 1 / 4 = 0.25', () => {
		let dividir = calcular(1, 4, DIVISAO);
		expect(dividir).toEqual(0.25);
	});

	it('garantir que 1 * 4 = *', () => {
		let multiplicar = calcular(1, 4, MULTIPLICACAO);
		expect(multiplicar).toEqual(4);
	});

	it('garantir operação inválida', () => {
		let invalido = calcular(1, 4, '%');
		expect(invalido).toEqual(0);
	});


});