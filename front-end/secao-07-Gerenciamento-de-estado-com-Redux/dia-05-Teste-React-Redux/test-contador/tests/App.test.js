import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import renderWithRedux from './helpers/renderWithRedux';
import App from '../src/App';

describe('Testes do contador:',() => {
  test('A página renderiza dois botões e o número 0', () => {
    renderWithRedux(<App />);
  
    const buttons = screen.getAllByRole('button');
  
    expect(buttons).toHaveLength(2);
    expect(screen.getByText("0")).toBeInTheDocument();
  })
  
  // test('Incrementa o valor da store ao clicar no botão', () => {
  //   const { store } = renderWithRedux(<App />);
  //   expect(screen.getByText('0')).toBeInTheDocument();
  //   const button = screen.getByText('Incrementa 1');
  //   userEvent.click(button);
  //   expect(screen.getByText('1')).toBeInTheDocument();
  // });
});
