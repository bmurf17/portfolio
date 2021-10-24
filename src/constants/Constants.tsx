import AutoOwnersInsurance from "../pictures/AutoOwnersInsurance.png";
import UnitedShore from "../pictures/UnitedShore.png";
import NavigatorTruckInsurance from "../pictures/NavigatorTruckInsurance.png";
import CFL from "../pictures/CFL.png";
import Hope from "../pictures/Hope.png";

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

export interface Education {
  image: string;
  school: string;
  study: string;
  date: string;
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
  {
    image: CFL,
    company: "Hope College Center for Leadership",
    jobTitle: "Student Team Leader",
    technologies: "Mircosoft Power BI, Microsoft Power Automate",
    description:
      "I was able to work with fellow students to develop real business solutions for Service Express. We built them an automated change managment bot and a dashboard for montoring IT goals.",
    dates: "August 2020-May 2021",
  },
  {
    image: NavigatorTruckInsurance,
    company: "Navigator Truck Insurance",
    jobTitle: "Software Development Intern",
    technologies: "React, Node.JS, Express, TypeORM, Typescript, MySQL",
    description:
      "I particapted in development on applications for the account managers. I also helped design an Agile approach to development.",
    dates: "July 2020-August 2020",
  },
  {
    image: UnitedShore,
    company: "United Wholesale Mortgage",
    jobTitle: "Summer Intern",
    technologies: "F#, .NET, Javascript, SQL Server",
    description:
      "I was apart of the underwriting development team were I helped improve their underwriting applications. I also helped to build a dashboard for viewing IT goals",
    dates: "November 2020-April 2021",
  },
];

export const EducationList: Education[] = [
  {
    image: Hope,
    school: "Hope College",
    study: "Major: Computer Science, Minor: Math",
    date: "2017-2021",
  },
];

export type ToggleTodo = (selectedTodo: Todo) => void;
