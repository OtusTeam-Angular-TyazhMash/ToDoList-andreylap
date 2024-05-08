import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './Components/to-do-list/to-do-list.component';
import { ToDoItemViewComponent } from './Components/to-do-item-view/to-do-item-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: 'tasks',
    component: ToDoListComponent,
    children: [{ path: ':id', component: ToDoItemViewComponent }],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
