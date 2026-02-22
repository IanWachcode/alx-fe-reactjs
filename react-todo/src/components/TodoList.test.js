import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from '@jest/globals';
import TodoList from './TodoList';

test('renders TodoList with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build Todo')).toBeInTheDocument();
});

test('adds new todo', async () => {
  const user = userEvent.setup();
  render(<TodoList />);
  const input = screen.getByTestId('todo-input');
  await user.type(input, 'Test Todo{enter}');
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

test('toggles todo completion', async () => {
  const user = userEvent.setup();
  render(<TodoList />);
  const todoItem = screen.getByTestId('todo-1');
  await user.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes todo', async () => {
  const user = userEvent.setup();
  render(<TodoList />);
  const deleteBtn = screen.getByTestId('delete-1');
  await user.click(deleteBtn);
  expect(screen.queryByTestId('todo-1')).not.toBeInTheDocument();
});
