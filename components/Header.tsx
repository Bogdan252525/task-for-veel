import { ThemeSwitcher } from './ThemeSwitcher';

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-around">
      <h1 className="text-3xl text-white text-center font-bold">Todo App</h1>
      <ThemeSwitcher />
    </header>
  );
};
