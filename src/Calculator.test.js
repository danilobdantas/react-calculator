import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './Calculator';

describe('Módulo de testes da Calculadora', () => {

    it('carregar a tela sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Calculator />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('limpar caixa de numeros digitados', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('C'));
        expect(getByTestId('TxtNumeros')).toHaveValue('');
    });

    it('testar soma 2 + 3 = 5', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('TxtNumeros')).toHaveValue('5');
    });

    it('testar subtrari 5 - 6 = -1', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('6'));
        fireEvent.click(getByText('='));
        expect(getByTestId('TxtNumeros')).toHaveValue('-1');
    });

    it('testar multiplicar 2 x 3 = 6', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('*'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('TxtNumeros')).toHaveValue('6');
    });

    it('testar dividir 12 : 4 = 2', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('/'));
        fireEvent.click(getByText('4'));
        fireEvent.click(getByText('='));
        expect(getByTestId('TxtNumeros')).toHaveValue('3');
    });


});