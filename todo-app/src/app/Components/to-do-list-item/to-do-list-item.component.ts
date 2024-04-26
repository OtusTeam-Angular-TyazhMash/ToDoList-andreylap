import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService, Task } from 'src/app/services/data.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {
  @Input() list!: Task;
  @Output() isDelete = new EventEmitter<number>();
  @Output() isSave = new EventEmitter<string>();
  constructor(public data: DataService, public toast: ToastService) {}
  delete() {
    this.isDelete.emit();
  }
  save(str: string) {
    this.list.task = str;
    this.toast.message.edit = true;
    this.toast.show(`Задача успешно изменена`, 'edit');
    this.data.editItemId = null;
  }
}
