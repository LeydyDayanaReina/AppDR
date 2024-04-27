


import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Empleados from './empleados';

const React = require('react');
const { render, fireEvent, screen } = require('@testing-library/react');
const Empleados = require('./empleados').default; // Agrega .default debido a que el componente se exporta como un objeto

// Prueba para la función limpiarCampos
test('limpia los campos correctamente', () => {
  render(<Empleados />);
  
  // Simulamos llenar algunos campos
  fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'Juan' } });
  fireEvent.change(screen.getByLabelText(/Edad/i), { target: { value: '30' } });
  
  // Verificamos que los campos se llenaron correctamente
  expect(screen.getByLabelText(/Nombre/i)).toHaveValue('Juan');
  expect(screen.getByLabelText(/Edad/i)).toHaveValue(30);

  // Ejecutamos la función limpiarCampos
  fireEvent.click(screen.getByText(/Agregar/i));

  // Verificamos que los campos se hayan limpiado
  expect(screen.getByLabelText(/Nombre/i)).toHaveValue('');
  expect(screen.getByLabelText(/Edad/i)).toHaveValue('');
});

// Prueba para la función agregarEmpleado
test('agrega un nuevo empleado correctamente', () => {
  render(<Empleados />);
  
  // Simulamos llenar los campos del formulario
  fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'Ana' } });
  fireEvent.change(screen.getByLabelText(/Edad/i), { target: { value: '25' } });
  fireEvent.change(screen.getByLabelText(/País/i), { target: { value: 'España' } });
  fireEvent.change(screen.getByLabelText(/Cargo/i), { target: { value: 'Desarrollador' } });
  fireEvent.change(screen.getByLabelText(/Años de experiencia/i), { target: { value: '3' } });

  // Ejecutamos la función agregarEmpleado
  fireEvent.click(screen.getByText(/Agregar/i));

  // Verificamos que el nuevo empleado se agregue correctamente a la lista
  expect(screen.getByText(/Ana/)).toBeInTheDocument();
  expect(screen.getByText(/25/)).toBeInTheDocument();
  expect(screen.getByText(/España/)).toBeInTheDocument();
  expect(screen.getByText(/Desarrollador/)).toBeInTheDocument();
  expect(screen.getByText(/3/)).toBeInTheDocument();
});
