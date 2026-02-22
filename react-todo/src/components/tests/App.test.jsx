import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import App from '../App';

test('renders todo list header', () => {
  render(<App />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
});

test('renders initial todos', () => {
  render(<App />);
  expect(screen.getByTestId('todo-item-1')).toBeInTheDocument();
  expect(screen.getByTestId('todo-item-2')).toBeInTheDocument();
});

test('adds new todo', async () => {
  const user = userEvent.setup();
  render(<App />);
  const input = screen.getByTestId('new-todo-input');
  const button = screen.getByTestId('new-todo-button');
  
  await user.type(input, 'New Todo');
  await user.click(button);
  
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion', async () => {
  const user = userEvent.setup();
  render(<App />);
  const checkbox = screen.getByTestId('todo-checkbox-1');
  
  expect(checkbox).not.toBeChecked();
  await user.click(checkbox);
  expect(checkbox).toBeChecked();
});

test('deletes todo', async () => {
  const user = userEvent.setup();
  render(<App />);
  const deleteButton = screen.getByTestId('delete-todo-1');
  
  await user.click(deleteButton);
  expect(screen.queryByTestId('todo-item-1')).not.toBeInTheDocument();
});
