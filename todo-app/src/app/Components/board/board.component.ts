import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataService, Task } from 'src/app/services/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  allToDoListItems$!: Observable<Array<Task>>;
  inProgressToDoListItems$!: Observable<Array<Task>>;
  completedToDoListItems$!: Observable<Array<Task>>;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.allToDoListItems$ = this.dataService.getItems;
    this.inProgressToDoListItems$ = this.dataService.getItems.pipe(
      map((items) => items.filter((item) => item.status === 'InProgress'))
    );
    this.completedToDoListItems$ = this.dataService.getItems.pipe(
      map((items) => items.filter((item) => item.status === 'Completed'))
    );
    this.dataService.update();
  }
}
