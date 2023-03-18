import { TodoItem } from "./TodoItem"

export type LoadingResult = {
    err?:       string;
    todoitems:  TodoItem[];
}