import { Component, OnChanges } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  constructor(public toast: ToastService) {}
  public message = { access: false, edit: true };

  ngOnInit() {
    this.message = this.toast.message;
  }
}
