import AutoOwnersInsurance from "../pictures/AutoOwnersInsurance.png";

export interface Todo {
  text: string;
  complete: boolean;
}

export interface Experience {
  image: string;
  company: string;
  jobTitle: string;
  technologies: string;
  description: string;
  dates: string;
}

export const ExperienceList: Experience[] = [
  {
    image: AutoOwnersInsurance,
    company: "Auto Owners",
    jobTitle: "Associate Software Develope",
    technologies: "C#, .NET, WPF, SQL Server, Datacap",
    description:
      "I was a developer on the capture team. My responsiblities centered around automating ingestion of files.",
    dates: "August 2021-Present",
  },
];

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
