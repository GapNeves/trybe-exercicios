import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Verifica email", () => {

  it('Verificando se existe um input de email na tela.', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
  });

  it('Verificando se existe dois botões na tela.', () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
  });

  it('Verificando se existe um botão de enviar na tela.', () => {
    render(<App />);
    const button = screen.getByTestId("id-send");

    expect(button).toBeInTheDocument();
    expect(button).toHaveValue("Enviar");
  });

  it('Verificando que, ao digitar o email e clicar em Enviar, o email é rederizado.', async () => {
    render(<App />);
    const inputEmail = screen.getByLabelText("Email");
    const button = screen.getByTestId("id-send");
    const userEmail = screen.getByTestId("id-email-user");

    userEvent.type(inputEmail, "teste@teste.com");
    await userEvent.click(button);

    expect(inputEmail).toHaveValue("");
    expect(userEmail).toHaveTextContent("Valor: teste@teste.com");
  });
});