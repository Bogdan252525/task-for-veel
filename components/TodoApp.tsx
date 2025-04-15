'use client';

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { useTodos } from '../hooks/useTodos';

export function TodoApp() {
  const { todos, isLoading, isError, error, addTodo, deleteTodo } = useTodos();

  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded">
        <p>Error loading todos: {error?.message}</p>
      </div>
    );
  }

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
      />
    </div>
  );
}
