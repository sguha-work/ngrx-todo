import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoPageComponent } from './components/pages/add-todo-page/add-todo-page.component';
import { ListTodoPageComponent } from './components/pages/list-todo-page/list-todo-page.component';
import { TodoTableComponent } from './components/shared/todo-table/todo-table.component';
import { AddTodoFormComponent } from './components/shared/add-todo-form/add-todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoPageComponent,
    ListTodoPageComponent,
    TodoTableComponent,
    AddTodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
