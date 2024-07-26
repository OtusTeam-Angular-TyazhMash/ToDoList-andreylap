import { Component } from '@angular/core';
import { Task } from 'src/app/services/data.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  allToDoListItems: Task[] = [];
  inProgressToDoListItems: Task[] = [];
  completedToDoListItems: Task[] = [];

  constructor(public taskService: TasksService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((toDoListItems) => {
      this.allToDoListItems = toDoListItems;
      this.inProgressToDoListItems = toDoListItems.filter(
        (item) => item.status === 'InProgress'
      );
      this.completedToDoListItems = toDoListItems.filter(
        (item) => item.status === 'Completed'
      );
    });
  }
}
