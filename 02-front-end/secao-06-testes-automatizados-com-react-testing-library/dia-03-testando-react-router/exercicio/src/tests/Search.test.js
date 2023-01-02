import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Realize os testes da busca por Digimon', () => {
  afterEach(() => jest.clearAllMocks());

  it('É possível inserir um valor na caixa de busca', () => {
    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', {
      name: /digimon/i });

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'Greymon');
    expect(searchInput).toHaveValue('Greymon');
  });

  it('A tela inicia sem nenhum Digimon renderizado', () => {
    renderWithRouter(<App />);

    const renderDigimon = screen.queryByTestId('digimonName');
    expect(renderDigimon).not.toBeInTheDocument();
  });

  it('É possível buscar um Digimon com sucesso', async () => {
    const digimon = [{
      name: 'Greymon',
      level: 'Champion',
      img: 'https://digimon.shadowsmith.com/img/greymon.jpg',
    }];

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(digimon),
    }));

    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', {
      name: /digimon/i });
    const searchButton = screen.getByRole('button', {
      name: /search digimon/i });

    userEvent.type(searchInput, 'Greymon');
    userEvent.click(searchButton);

    const digimonName = await screen.findByText(/greymon/i);
    const digimonLevel = await screen.findByText(/champion/i);
    const digimonImage = await screen.findByAltText(/greymon/i);

    expect(digimonName).toBeInTheDocument();
    expect(digimonLevel).toBeInTheDocument();
    expect(digimonImage).toBeInTheDocument();
  });

  it('A mensagem de erro é renderizada caso o Digimon buscado não exista', async () => {
    const ErrorMsg = 'Naruto is not a Digimon in our database.';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', {
      name: /digimon/i });
    const searchButton = screen.getByRole('button', {
      name: /search digimon/i });

    userEvent.type(searchInput, 'Naruto');
    userEvent.click(searchButton);

    const error = await screen.findByText(ErrorMsg);
    expect(error).toBeInTheDocument();
  });

  it('Verifica se fetch não é chamado com o input vazio', () => {
    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', {
      name: /digimon/i });
    const searchButton = screen.getByRole('button', {
      name: /search digimon/i });

    expect(searchInput).toHaveValue('');
    userEvent.click(searchButton);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('Verifica o erro retornado pela API', async () => {
    const ERROR = 'Valor não encontrado.';
    const API_ERROR = `Erro ao fazer a requisição: Error: ${ERROR}`;

    jest.spyOn(global, 'fetch');
    await global.fetch.mockRejectedValue(
      new Error(ERROR),
    );

    jest.spyOn(global.console, 'log');

    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', {
      name: /digimon/i });
    const searchButton = screen.getByRole('button', {
      name: /search digimon/i });

    userEvent.type(searchInput, 'Pokémon');
    userEvent.click(searchButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalled();
      expect(console.log).toBeCalledWith(API_ERROR);
    });
  });
});
