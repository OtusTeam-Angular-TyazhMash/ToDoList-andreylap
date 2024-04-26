export interface Task {
  id: number;
  task: string;
  description: string;
}

export let TASK = [
  { id: 1, task: 'Buy a new gaming laptop', description: '1' },
  { id: 2, task: 'Complete previous task', description: '2' },
  { id: 3, task: 'Create some angular app', description: '3' },
];
