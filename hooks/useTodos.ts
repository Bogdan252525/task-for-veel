import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface Todo {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const useTodos = () => {
  const queryClient = useQueryClient();

  const {
    data: todos = [],
    isLoading,
    isError,
    error,
  } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: async (): Promise<Todo[]> => {
      const response = await axios.get<Todo[]>(`${API_URL}?_limit=10`);
      return response.data;
    },
  });

  const addTodo = useMutation<
    Todo,
    Error,
    { title: string; completed: boolean },
    unknown
  >({
    mutationFn: async (newTodo: {
      title: string;
      completed: boolean;
    }): Promise<Todo> => {
      const response = await axios.post<Todo>(API_URL, newTodo);
      return response.data;
    },
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) => [
        ...oldTodos,
        newTodo,
      ]);
    },
    onError: (error) => {
      console.error('Error adding todo:', error.message);
    },
  });

  const deleteTodo = useMutation<void, Error, number, unknown>({
    mutationFn: async (id: number): Promise<void> => {
      await axios.delete(`${API_URL}/${id}`);
    },
    onSuccess: (_, id) => {
      queryClient.setQueryData<Todo[]>(['todos'], (oldTodos = []) =>
        oldTodos.filter((todo) => todo.id !== id)
      );
    },
    onError: (error) => {
      console.error('Error deleting todo:', error.message);
    },
  });

  return {
    todos,
    isLoading,
    isError,
    error,
    addTodo,
    deleteTodo,
  };
};
