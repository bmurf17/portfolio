export interface Todo {
  text: string;
  complete: boolean;
}

export const TodoList: Todo[] = [
  {
    text: "Write a React Native Todo List",
    complete: false,
  },
  {
    text: "Write a Bot to Manage my Fantasy Basketball Team",
    complete: true,
  },
];

export type ToggleTodo = (selectedTodo: Todo) => void;
