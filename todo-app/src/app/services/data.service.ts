import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastService } from './toast.service';
import { TasksService } from './tasks.service';
import { NgForm } from '@angular/forms';

export interface Task {
  id: string;
  name: string;
  description?: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  isShow: boolean = false;
  isShowForm: boolean = false;
  selectedItemId!: number | null;
  editItemId!: string | null;
  isLoading: boolean = true;
  tasks: any[] = [];
  private toDoListItems$: BehaviorSubject<Array<Task>> = new BehaviorSubject<
    Array<Task>
  >([]);
  constructor(public toast: ToastService, public taskService: TasksService) {}

  get getItems(): Observable<Array<Task>> {
    return this.toDoListItems$.asObservable();
  }
  update(): void {
    this.taskService.getTasks().subscribe({
      next: (receivedItems) => {
        this.toDoListItems$.next(receivedItems);
      },
      error: () => {
        this.toDoListItems$.next([]);
      },
    });
  }

  addItem(formData: NgForm): void {
    this.taskService
      .createTask(formData.value.name, formData.value.description)
      .subscribe({
        next: (addedToDoListItem: any) => {
          console.log(this.toDoListItems$.value);
          this.toDoListItems$.next([
            ...this.toDoListItems$.value,
            addedToDoListItem,
          ]);
        },
        error: () => {
          this.toast.show('Failed to add todo', '');
        },
      });
  }

  deleteItemById(itemId: Task['id']): void {
    this.taskService.deleteTaskById(itemId).subscribe({
      next: () => {
        const deletedItemIndex = this.toDoListItems$.value.findIndex(
          (item) => item.id === itemId
        );
        if (deletedItemIndex > -1)
          this.toDoListItems$.value.splice(deletedItemIndex, 1);
        this.toast.show('Todo deleted', 'edit');
      },
      error: () => {
        this.toast.show('Failed to delete todo', '');
      },
    });
  }

  editItemTitleById(item: Task): void {
    this.taskService.updateTask(item).subscribe({
      next: (editedToDoListItem: any) => {
        const deprecatedItemIndex = this.toDoListItems$.value.findIndex(
          (item) => item.id === editedToDoListItem.id
        );
        this.toDoListItems$.value[deprecatedItemIndex] = editedToDoListItem;
        this.toast.show('Задача успешно изменена', 'edit');
      },
      error: () => {
        this.toast.show('Failed to edit todo', '');
      },
    });
  }

  editItemStatusById(item: Task): void {
    this.taskService.updateTask(item).subscribe({
      next: (editedToDoListItem: any) => {
        const deprecatedItemIndex = this.toDoListItems$.value.findIndex(
          (item) => item.id === editedToDoListItem.id
        );
        this.toDoListItems$.value[deprecatedItemIndex] = editedToDoListItem;
        this.toast.show('Task status has been changed', 'edit');
      },
      error: () => {
        this.toast.show('Failed to edit todo', '');
      },
    });
  }
}
