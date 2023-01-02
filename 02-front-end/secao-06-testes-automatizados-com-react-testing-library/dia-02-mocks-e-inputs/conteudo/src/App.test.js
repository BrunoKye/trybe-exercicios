import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
});

it('verify first render and button click', async () => {
  const joke = {
    joke: 'Why do crabs never give to charity? Because they’re shellfish.',
  };
  const newJoke = {
    joke: 'How do you fix a damaged jack-o-lantern? You use a pumpkin patch.',
  }
  
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const buttonJoke = screen.getByText('New Joke');

  expect(await screen.findByText(joke.joke)).toBeInTheDocument();
  expect(screen.queryByText(newJoke.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(newJoke),
  });
  
  userEvent.click(buttonJoke);
  expect(await screen.findByText(newJoke.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke.joke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
})
