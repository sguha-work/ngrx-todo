import { createAction, props } from "@ngrx/store";
import { TodoModel } from "src/app/interfaces/todo.interface";

export const action_addTodo = createAction(
    '[ToDo] addTodo',
    props<{ 
        newTodo: TodoModel; 
    }>()
)

export const action_deleteTodo = createAction(
    '[ToDo] deleteTodo',
    props<{ 
        todoTitle: string; 
    }>()
)

export const action_fetchTodo = createAction(
    '[ToDo] fetchTodo'
)