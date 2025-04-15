import { QueryProvider, TodoApp } from '@/components';

export default function Home() {
  return (
    <QueryProvider>
      <TodoApp />
    </QueryProvider>
  );
}
