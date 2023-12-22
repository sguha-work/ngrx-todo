import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoModel } from 'src/app/interfaces/todo.interface';
import { Store } from '@ngrx/store';
import { action_addTodo } from 'src/app/state/todo/todo.action';
@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
 public todoForm: FormGroup;
 constructor(private formBuilder: FormBuilder, private store: Store) {
  this.todoForm = this.formBuilder.group({
    title: ["", Validators.required],
    important: [true, Validators.required]
   });
 }
 public submitTodo(form: FormGroup) {
  if(form.valid) {
    let todo: TodoModel = {
      title: form.value.title,
      important: form.value.important,
      addedOn: Date.now()
    }
    console.log({todo});
    this.store.dispatch(action_addTodo({ newTodo: todo }));
  } else {

  }
 }
 ngOnInit(): void {
   
 }
}
