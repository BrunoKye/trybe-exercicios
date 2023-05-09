import { render, screen } from '@testing-library/react';
import App from '../App';

it('testa a requisção para a API', async () => {
  const enemy = [{
    id: 1,
    name: 'Chapolin Colorado',
    source: 'Chaves',
    defensePoints: 30,
  }];

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(enemy),
  });

  render(<App />);
  const renderedEnemy = await screen.findByRole('heading', {
    name: 'Chapolin Colorado',
  });

  expect(renderedEnemy).toBeInTheDocument();
});
