import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import mockFetch from './__mocks__/mockFetch';
import renderWithRedux from './helpers/renderWithRedux';
import App from './App';
import randomNumber from './utils/randomNumber';
import userEvent from '@testing-library/user-event';

jest.mock('./utils/randomNumber');

describe('Página principal', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  test('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    renderWithRedux(<App />);

    const loadingMessage = screen.getByText('Loading...');
    await waitForElementToBeRemoved(loadingMessage);

    expect(global.fetch).toHaveBeenCalledTimes(1);

    const nextPokemonButton = screen.getByRole('button');
    expect(nextPokemonButton).toBeInTheDocument();
  });

  test('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    const froakieNumber = 656;
    const froakie = `https://pokeapi.co/api/v2/pokemon/${froakieNumber}/`;
    randomNumber.mockReturnValue(froakieNumber);

    renderWithRedux(<App />);

    const loadingMessage = screen.getByText('Loading...');
    await waitForElementToBeRemoved(loadingMessage);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(froakie);
  });

  test('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    const froakieNumber = 656;
    const froakie = `https://pokeapi.co/api/v2/pokemon/${froakieNumber}/`;
    randomNumber.mockReturnValue(froakieNumber);

    renderWithRedux(<App />);

    const loadingMessage = screen.getByText('Loading...');
    await waitForElementToBeRemoved(loadingMessage);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(froakie);
    
    const drowzeeNumber = 96;
    const drowzee = `https://pokeapi.co/api/v2/pokemon/${drowzeeNumber}/`;
    randomNumber.mockReturnValue(drowzeeNumber);

    const nextPokemonButton = screen.getByRole('button');
    userEvent.click(nextPokemonButton);

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(drowzee);
  });

  test('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    renderWithRedux(<App />);

    const loadingMessage = screen.getByText('Loading...');
    await waitForElementToBeRemoved(loadingMessage);

    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonImage = screen.getByAltText('pokemon');

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
  });
});
