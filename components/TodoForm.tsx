'use client';

import React from 'react';

interface TodoFormProps {
  onAdd: {
    mutate: (newTodo: { title: string; completed: boolean }) => void;
  };
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      onAdd.mutate({ title, completed: false });
      setTitle('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex space-x-4 mb-6"
    >
      <input
        type="text"
        placeholder="New todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 flex-1 placeholder-gray-400 placeholder-italic placeholder-text-sm rounded-2xl"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-400"
      >
        Add
      </button>
    </form>
  );
};
