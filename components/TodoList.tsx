interface TodoListProps {
  todos: { id: number; title: string; completed: boolean }[];
  onDelete: {
    mutate: (id: number) => void;
  };
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => (
  <ul className="space-y-4">
    {todos.map((todo) => (
      <li
        key={todo.id}
        className="flex justify-between items-center border-b pb-2"
      >
        <span>{todo.title}</span>
        <button
          onClick={() => onDelete.mutate(todo.id)}
          className="text-red-500 hover:text-red-400 hover:underline border-1 px-1 rounded-xl cursor-pointer"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
