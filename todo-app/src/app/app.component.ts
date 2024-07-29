import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';
  constructor(private location: Location) {}

  switchLanguage(language: string) {
    const url = this.location.path().split('?')[0];
    window.location.href = `${url}?lang=${language}`;
  }
}
