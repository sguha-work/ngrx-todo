import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllTodos } from 'src/app/state/todo/todo.selector';
@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  public allTodos$ = this.store.select(selectAllTodos);
  constructor(private store: Store) {

  }
  ngOnInit(): void {
    
  }
}
