import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title: string | undefined;
  @Input() primary: boolean | undefined;
  @Input() disabled: boolean | undefined;
}
