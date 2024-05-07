import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService, Task } from 'src/app/services/data.service';
import { TasksService } from 'src/app/services/tasks.service';
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
  desk: string | undefined;

  constructor(
    public data: DataService,
    public toast: ToastService,
    public taskService: TasksService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.data.isLoading = false;
    }, 500);
    this.taskService.getTasks().subscribe((data) => (this.data.tasks = data));
  }

  deleteTodo(id: string) {
    this.taskService.deleteTaskById(id).subscribe(() => {
      this.taskService.getTasks().subscribe((data) => (this.data.tasks = data));
    });
  }

  addTodo(show: boolean) {
    this.data.isShowForm = !show;
  }
  isSelected(data: any) {
    this.data.selectedItemId = data.id;
    if (this.data.selectedItemId != null) {
      this.desk = data.description;
    }
  }
  isShow(id: number) {
    this.data.editItemId = id;
  }
  save(task: Task) {
    this.toast.message.edit = true;
    this.toast.show(`Задача успешно изменена`, 'edit');
    this.data.editItemId = null;

    this.taskService.updateTask(task).subscribe(() => {
      this.taskService.getTasks().subscribe((data) => (this.data.tasks = data));
    });
  }

  filter(status: string) {
    this.taskService
      .getTasks()
      .pipe(
        map((el) =>
          status != 'All' ? el.filter((i) => i.status == status) : el
        )
      )
      .subscribe((data) => (this.data.tasks = data));
  }
}
