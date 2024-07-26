import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './Components/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './Components/to-do-list-item/to-do-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { SharedModule } from './shared/shared.module';
import { TooltipComponent } from './Components/tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { ToastComponent } from './Components/toast/toast.component';
import { TodoCreateItemComponent } from './Components/todo-create-item/todo-create-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ToDoItemViewComponent } from './Components/to-do-item-view/to-do-item-view.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { BoardComponent } from './Components/board/board.component';



@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    TooltipComponent,
    TooltipDirective,
    ToastComponent,
    TodoCreateItemComponent,
    ToDoItemViewComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    InputsModule,
    SharedModule,
    HttpClientModule,
    ButtonsModule,
    DialogsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
