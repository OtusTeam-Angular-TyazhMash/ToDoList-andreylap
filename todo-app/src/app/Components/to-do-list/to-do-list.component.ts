import { Component } from '@angular/core';

export interface Task {
  id: number;
  task: string | undefined;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  title = 'Todo List';

  public list: Task[] = [
    { id: 1, task: 'Buy a new gaming laptop' },
    { id: 2, task: 'Complete previous task' },
    { id: 3, task: 'Create some angular app' },
  ];
  public text: string | undefined;

  del(id: number) {}

  add() {}
}
