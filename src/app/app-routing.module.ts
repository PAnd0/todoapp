import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'todos', component: ListComponent },
  { path: 'todos/:id', component: TodoComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
