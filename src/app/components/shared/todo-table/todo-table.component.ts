import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { action_deleteTodo } from 'src/app/state/todo/todo.action';
import { selectAllTodos } from 'src/app/state/todo/todo.selector';
@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  public allTodos$ = this.store.select(selectAllTodos);
  constructor(private store: Store<AppState>) {
  }
  ngOnInit(): void {
    this.allTodos$ = this.store.select(selectAllTodos);
  }
  public deleteTodo(event: Event, todoTitle: string) {
    event.preventDefault();
    this.store.dispatch(action_deleteTodo({ todoTitle }));
  }
}
