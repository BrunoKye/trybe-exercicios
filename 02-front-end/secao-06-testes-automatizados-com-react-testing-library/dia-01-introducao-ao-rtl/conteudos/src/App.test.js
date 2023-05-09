import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ValidEmail from './ValidEmail';

describe('Tela de inserção de email', () => {
  it('Verificando se existe o campo Email.', () => {
    render(<App />);
  
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  it('Verificando se existem dois botões', () => {
    render(<App />);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  
  it('Verificando se existe um botão de enviar', () => {
    render(<App />);
  
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });
  
  it('Verificando se o botão e o campo email estão funcionando.', () => {
    render(<App />);
  
    const EMAIL_USER = 'email@email.com';
  
    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);
  
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  });

  it('Verificando se o texto de validação some caso o campo esteja vazio', () => {
    render(<ValidEmail email="" />);

    const emptyEmail = screen.queryByTestId('id-is-email-user');
    expect(emptyEmail).not.toBeInTheDocument('');
  })

  it('Verificando se o texto fica vermelho quando o email é inválido', () => {
    const EMAIL_USER = 'emailinvalido';
    render(<ValidEmail email={ EMAIL_USER } />);

    const redText = screen.getByTestId('id-is-email-valid');
    expect(redText).toHaveAttribute('class', 'red-text');
  })

  it('Verificando se o texto fica verde quando o email é válido', () => {
    const EMAIL_USER = 'emailvalido@gmail.com';
    render(<ValidEmail email={ EMAIL_USER } />);

    const redText = screen.getByTestId('id-is-email-valid');
    expect(redText).toHaveAttribute('class', 'green-text');
  })
})
