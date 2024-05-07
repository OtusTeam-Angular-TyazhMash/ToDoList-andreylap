import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './buttoncomponent/button.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [ButtonComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, SpinnerComponent],
})
export class SharedModule {}
