import { createReducer, on } from '@ngrx/store';
import { TodoModel } from 'src/app/interfaces/todo.interface';
import { action_addTodo, action_fetchTodo } from './todo.action';
import { InitialTodoState } from './todo.state';

export const reducer_todo = createReducer(
    InitialTodoState,
    on(action_addTodo, (state, { newTodo }) => ({
        ...state,
        TodoList: state.TodoList.concat([newTodo])
    })
    ),
    on(action_fetchTodo, (state) => ({
        ...state
    }))
);