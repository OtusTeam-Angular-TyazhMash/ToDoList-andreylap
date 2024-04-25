import { Component, OnInit } from '@angular/core';
import { DataService, Task } from 'src/app/services/data.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  title = 'Todo List';
  text: string = '';
  textarea: string = '';
  isLoading: boolean = true;

  desk: string | undefined;
  constructor(public data: DataService, public toast: ToastService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  deleteTodo(id: number) {
    this.data.TASK.splice(
      this.data.TASK.findIndex((i) => i.id == id),
      1
    );
  }

  addTodo() {
    let max_id = Math.max(0, ...this.data.TASK.map((i) => i.id));
    this.data.TASK.push({
      id: max_id + 1,
      task: this.text,
      description: this.textarea,
    });

    this.toast.show(`Задача ${this.text} успешно добавлена`, 'access');
    this.text = '';
    this.textarea = '';
  }
  isSelected(data: Task) {
    this.data.selectedItemId = data.id;
    if (this.data.selectedItemId != null) {
      this.desk = data.description;
    }
  }
  isShow(data: Task) {
    this.data.editItemId = data.id;
  }
}
