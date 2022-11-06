import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toHaveStyle({ 'background-color': 'red' });
});

test('button turns blue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toHaveStyle({ 'background-color': 'red' });
  fireEvent.click(button);
  expect(button).toHaveStyle({ 'background-color': 'blue' });
  expect(button).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  // check button starts enabled
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toBeEnabled();

  // check that checkbox is unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('button is disabled when checkbox is checked, enabled when unchecked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
})