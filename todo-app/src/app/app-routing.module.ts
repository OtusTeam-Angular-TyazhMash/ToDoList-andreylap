import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './Components/to-do-list/to-do-list.component';
import { ToDoItemViewComponent } from './Components/to-do-item-view/to-do-item-view.component';
import { BoardComponent } from './Components/board/board.component';

const routes: Routes = [
  { path: '', redirectTo: 'backlog', pathMatch: 'full' },
  {
    path: 'backlog',
    component: ToDoListComponent,
    children: [{ path: ':id', component: ToDoItemViewComponent }],
  },
  {
    path: 'board',
    component: BoardComponent,
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
