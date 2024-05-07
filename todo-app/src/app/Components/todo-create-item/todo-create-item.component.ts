import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { TasksService } from 'src/app/services/tasks.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-todo-create-item',
  templateUrl: './todo-create-item.component.html',
  styleUrls: ['./todo-create-item.component.scss'],
})
export class TodoCreateItemComponent {
  task = {
    name: '',
    description: '',
  };

  constructor(
    private readonly taskService: TasksService,
    public data: DataService,
    public toast: ToastService
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskService
        .createTask(form.value.name, form.value.description)
        .subscribe(() => {
          this.taskService
            .getTasks()
            .subscribe((data) => (this.data.tasks = data));
        });
    }
    this.data.isShowForm = false;
    this.toast.show(`Задача успешно добавлена`, 'access');
  }
}
