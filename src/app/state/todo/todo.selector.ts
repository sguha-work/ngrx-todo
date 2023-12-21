import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todo.state';

const selectTodos = (state: AppState) => state.todostate;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => {console.log({state});return state.TodoList}
);
