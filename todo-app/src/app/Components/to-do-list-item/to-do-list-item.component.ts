import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TASK, Task } from 'src/app/tasks/tasks';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {
  @Input() list!: Task;
  @Output() isDelete = new EventEmitter<number>();

  delete() {
    this.isDelete.emit();
  }
}
