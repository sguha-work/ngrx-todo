import { TodoModel } from "src/app/interfaces/todo.interface";

export interface TodoState {
    TodoList: Array<TodoModel>
}

export const InitialTodoState: TodoState = {
    TodoList: []
};