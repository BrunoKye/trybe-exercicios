import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);

    const getButton = screen.getByRole('button');
    expect(getButton).toHaveTextContent('Adicionar');
    expect(getButton).toHaveAttribute('type', 'button');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    render(<App />);

    const NEW_TODO = 'Faça um teste';
    const inputTodo = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByText('Adicionar');
    userEvent.type(inputTodo, NEW_TODO);

    expect(screen.queryByText(NEW_TODO)).not.toBeInTheDocument();
    userEvent.click(buttonAdd);
    expect(screen.queryByText(NEW_TODO)).toBeInTheDocument();

    expect(inputTodo).toHaveValue('');
  });
});
