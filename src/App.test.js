import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(button).toHaveStyle({ 'background-color': 'MediumVioletRed' });
});

test('button turns MidnightBlue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(button).toHaveStyle({ 'background-color': 'MediumVioletRed' });
  fireEvent.click(button);
  expect(button).toHaveStyle({ 'background-color': 'MidnightBlue' });
  expect(button).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);
  // check button starts enabled
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(button).toBeEnabled();

  // check that checkbox is unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test('button is disabled when checkbox is checked, enabled when unchecked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
})

test('Button is gray when disabled', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });
  fireEvent.click(checkbox);
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({ 'background-color': 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'MediumVioletRed' });

  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'gray' });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ 'background-color': 'MidnightBlue' });
})

describe('Spaces before came-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})