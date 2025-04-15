# Todo App

## Description
Todo App is a simple task management application built with **Next.js** and **React Query**. It allows users to create tasks, delete them, toggle between light and dark themes, and interact with data via an API.

---

## Technologies
- **Next.js**: Framework for React applications with support for SSR/ISR.
- **React Query**: API request handling and data caching.
- **TailwindCSS**: Styling for modern and responsive design.
- **TypeScript**: Provides type safety and improves development workflow.

---

## Features
1. Add new tasks.
2. Delete existing tasks.
3. Toggle between light and dark mode.
4. Retrieve task list from an API.

---

## How to Run
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>

## Start the development server:
npm run dev

## Open in your browser:
http://localhost:3000

## API
https://jsonplaceholder.typicode.com/todos

GET: Retrieve the list of tasks.

POST: Add a new task.

DELETE: Remove a task.

## Components
**RootLayout:** Provides the global structure with a header, main content, and footer.

**Header:** Includes the app title and theme switcher.

**Footer:** Displays copyright information.

**TodoApp:** Core component managing task interactions.

**TodoForm:** Handles adding new tasks.

**TodoList:** Displays tasks with delete functionality.
