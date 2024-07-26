import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DataService, Task } from 'src/app/services/data.service';

@Component({
  selector: 'app-to-do-item-view',
  templateUrl: './to-do-item-view.component.html',
  styleUrls: ['./to-do-item-view.component.scss'],
})
export class ToDoItemViewComponent {
  desk: string | undefined;
  taskId: string = '';
  deskItems$!: Observable<any>;
  constructor(
    public data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.taskId = params['id'];
      this.deskItems$ = this.data.getItems.pipe(
        map((items) => items.find((i) => i.id == this.taskId))
      );

      // this.inProgressToDoListItems$ = this.dataService.getItems.pipe(
      //   map((items) => items.filter((item) => item.status === 'InProgress'))
      this.data.update();
      // this.desk = this.data.tasks.find((i) => i.id == this.taskId).description;
    });
  }
}
