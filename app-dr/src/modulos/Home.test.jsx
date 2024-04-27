import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home';

test('renders welcome message', () => {
  render(<Home />);
  const welcomeMessage = screen.getByText(/Bienvenido al sistema de gestión de citas del Salón de Belleza/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<Home />);
  const personalManagementLink = screen.getByText(/Gestión de Personal/i);
  const appointmentsLink = screen.getByText(/Ver Citas/i);
  const reportsLink = screen.getByText(/Informes/i);
  expect(personalManagementLink).toBeInTheDocument();
  expect(appointmentsLink).toBeInTheDocument();
  expect(reportsLink).toBeInTheDocument();
});