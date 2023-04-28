// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// função que faz com que a cada test nosso mock seja limpo, para que não haja interferência.
afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  
  // constante que retorna um obj parecido com o da APi
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // jest.spyOn espiona as chamadas da função, e por meio do globalque conseguimos usar qualquer função do sistema.
  jest.spyOn(global, 'fetch');
  // quando a função fetch é chamada ela nos retorna a API externa
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});
