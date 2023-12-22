import { createReducer, on } from '@ngrx/store';
import { action_addTodo, action_deleteTodo, action_fetchTodo } from './todo.action';
import { InitialTodoState } from './todo.state';

export const reducer_todo = createReducer(
    InitialTodoState,
    on(action_addTodo, (state, { newTodo }) => ({
        ...state,
        TodoList: state.TodoList.concat([newTodo])
    })
    ),
    on(action_deleteTodo, (state, {todoTitle})=>{
        console.log("title",todoTitle);
        let filteredTodoList = state.TodoList.filter((todo)=>{
            return todo.title!=todoTitle
        })
        return {
            ...state,
            TodoList: filteredTodoList
        };
    }),
    on(action_fetchTodo, (state) => ({
        ...state
    }))
);