import { Component, OnInit } from '@angular/core';
import { TASK, Task } from 'src/app/tasks/tasks';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  title = 'Todo List';
  text: string = '';
  list = TASK;
  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  deleteTodo(id: number) {
    this.list.splice(
      this.list.findIndex((i) => i.id == id),
      1
    );
  }

  addTodo() {
    let max_id = Math.max(0, ...this.list.map((i) => i.id));
    this.list.push({ id: max_id + 1, task: this.text });
    this.text = '';
  }
}
