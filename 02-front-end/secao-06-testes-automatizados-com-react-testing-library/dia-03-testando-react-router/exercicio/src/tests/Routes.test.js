import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se a aplicação renderiza corretamente em seu estado inicial', () => {
  it('A página deverá possuir o título "Search Digimon', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: /search Digimon/i });

    expect(homeTitle).toBeInTheDocument();
  });

  it('A página deverá possuir os links "About" e "Search Digimon', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', {
      name: /about/i });
    const searchLink = screen.getByRole('link', {
      name: /search digimon/i });

    expect(aboutLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
  });

  it('Verifca o clique na página "About" e seu conteúdo', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', {
      name: /about/i });

    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', {
      name: /about/i });

    expect(aboutTitle).toBeInTheDocument();
  });

  it('Verifica um caminho não existente e seu conteúdo', () => {
    const { history } = renderWithRouter(<App />);
    const INVALID_URL = '/pagina/que-nao-existe/';

    act(() => { history.push(INVALID_URL); });

    const notFoundTitle = screen.getByRole('heading', {
      name: /page not found/i });
    const notFoundMessage = screen.getByText(
      /a página que você está procurando não existe!/i,
    );
    const notFoundImage = screen.getByAltText(/digimon nocauteado/i);

    expect(notFoundTitle).toBeInTheDocument();
    expect(notFoundMessage).toBeInTheDocument();
    expect(notFoundImage).toBeInTheDocument();
  });
});
