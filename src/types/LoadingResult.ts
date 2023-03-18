import { TodoItem } from "./TodoItem"

export class LoadingResult {
    err?:       string;
    todoitems:  TodoItem[];

    constructor(todoItems: TodoItem[]) {
        this.todoitems = todoItems;
    }
}