import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
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
  toDoListItems$!: Observable<Array<Task>>;
  taskId: string = '';

  constructor(
    public data: DataService,
    public toast: ToastService,
    public taskService: TasksService,
    public route: ActivatedRoute
  ) {}

  public get id() {
    if (this.route.snapshot.children.length == 0) return '-1';
    return this.route.snapshot.children[0].params['id'];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.data.isLoading = false;
    }, 500);

    this.toDoListItems$ = this.data.getItems;
    this.data.update();
  }

  deleteTodo(id: Task['id']) {
    this.data.deleteItemById(id);
  }

  addTodo(show: boolean) {
    this.data.isShowForm = !show;
  }

  isShow(id: string) {
    this.data.editItemId = id;
  }
  save(task: Task) {
    this.toast.message.edit = true;
    this.data.editItemId = null;
    this.data.editItemTitleById(task);
  }

  filter(status: string) {
    this.toDoListItems$ = this.data.getItems.pipe(
      map((item) =>
        status != 'All' ? item.filter((i) => i.status == status) : item
      )
    );
  }
}
