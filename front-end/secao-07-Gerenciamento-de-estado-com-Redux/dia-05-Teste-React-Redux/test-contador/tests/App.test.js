import React from 'react';
import { screen } from '@testing-library/react';

import renderWithRedux from './helpers/renderWithRedux';
import App from '../src/App';

test('A página renderiza dois botões e o número 0', () => {
  renderWithRedux(<App />);

  const buttons = screen.getAllByRole('button');

  expect(buttons).toHaveLength(2);
  expect(screen.getByText("0")).toBeInTheDocument();
})