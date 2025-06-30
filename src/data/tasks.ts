export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export let tasks: Task[] = [
  { id: crypto.randomUUID(), title: "Learn Next.js 15", completed: false },
  { id: crypto.randomUUID(), title: "Build a REST API", completed: true },
  { id: crypto.randomUUID(), title: "Deploy the app", completed: false },
];
