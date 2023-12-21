import { TodoModel } from "src/app/interfaces/todo.interface";

export interface TodoState {
    TodoList: TodoModel[]
}

export const InitialTodoState: TodoState = {
    TodoList: []
};