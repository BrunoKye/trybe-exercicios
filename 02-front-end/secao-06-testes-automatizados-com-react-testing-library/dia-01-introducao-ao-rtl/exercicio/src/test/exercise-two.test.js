import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring

    const inputTodo = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.getByText('Adicionar');

    listTodo.forEach((task) => {
      expect(screen.queryByText(task)).not.toBeInTheDocument();
      userEvent.type(inputTodo, task);
      userEvent.click(buttonAdd);
      expect(screen.queryByText(task)).toBeInTheDocument();
    });

    expect(inputTodo).toHaveValue('');
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="Isso é um teste" />);

    const getText = screen.getByText('Isso é um teste');
    expect(getText).toBeInTheDocument();
  });
});
