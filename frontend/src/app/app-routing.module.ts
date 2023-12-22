import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoPageComponent } from './components/pages/add-todo-page/add-todo-page.component';
import { ListTodoPageComponent } from './components/pages/list-todo-page/list-todo-page.component';

const routes: Routes = [
  {path: 'todo/add-todo', component: AddTodoPageComponent},
  {path: 'todo/list-todo', component: ListTodoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
