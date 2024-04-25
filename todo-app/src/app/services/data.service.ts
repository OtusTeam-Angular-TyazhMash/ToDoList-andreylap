import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  task: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  TASK = [
    { id: 1, task: 'Buy a new gaming laptop', description: '1' },
    { id: 2, task: 'Complete previous task', description: '2' },
    { id: 3, task: 'Create some angular app', description: '3' },
  ];
  isShow: boolean = false;
  selectedItemId!: number | null;
  editItemId!: number | null;
  constructor() {}
}
