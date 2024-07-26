import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {
  @Input() task!: any;

  constructor(public data: DataService) {}
  status(event: any) {
    let isChecked = event.target.checked;
    if (isChecked == true) {
      this.task.status = 'Completed';
      this.data.editItemStatusById(this.task);
    } else {
      this.task.status = 'InProgress';
      this.data.editItemStatusById(this.task);
    }
  }
}
