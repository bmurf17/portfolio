export interface Todo {
  text: string;
  complete: boolean;
}

export const TodoList: Todo[] = [
  {
    text: "Make a React Native Todo List",
    complete: false,
  },
  {
    text: "Make a Bot to Manage my Fantasy Basketball Team",
    complete: false,
  },
  {
    text: "Make an app to track all my fantasy football teams",
    complete: false,
  },
  {
    text: "Improve my book tracking website",
    complete: false,
  },
  {
    text: "Find more learning resources for Firebase and Google Cloud",
    complete: false,
  },
];

export type ToggleTodo = (selectedTodo: Todo) => void;
