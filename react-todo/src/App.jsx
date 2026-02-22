import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Todo', completed: true },
  ]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input.trim(), completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px' }}>
      <h1>Todo List</h1>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          data-testid="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add todo..."
        />
        <button data-testid="add-btn" onClick={addTodo}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            data-testid={`todo-${todo.id}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              border: '1px solid #ccc',
              marginBottom: '0.5rem',
            }}
            onClick={() => toggleTodo(todo.id)}
          >
            <span>{todo.text}</span>
            <button
              data-testid={`delete-${todo.id}`}
              onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}
              style={{ background: 'red', color: 'white', border: 'none', padding: '0.2rem 0.5rem' }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

