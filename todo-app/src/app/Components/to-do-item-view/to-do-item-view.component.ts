import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-to-do-item-view',
  templateUrl: './to-do-item-view.component.html',
  styleUrls: ['./to-do-item-view.component.scss'],
})
export class ToDoItemViewComponent {
  desk: string | undefined;
  taskId: string = '';
  constructor(
    public data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.taskId = params['id'];
      console.log(this.taskId);
      this.desk = this.data.tasks.find((i) => i.id == this.taskId).description;
    });
  }
}
