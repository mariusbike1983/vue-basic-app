import { LoadingResult } from "@/types/LoadingResult";
import { TodoItem } from "@/types/TodoItem";

export function produceData(quantity: number): LoadingResult {
    const result: LoadingResult = {
        todoitems: []
    }
    for(let i = 0; i<quantity; i++) {
        result.todoitems.push(produceNewItem(i));
    }
    return result;
}

export function produceNewItem(index: number) : TodoItem {
    return produceLocalElem(index, "Text for "+index, "Detail for "+index, index % 2 == 0);
}

export function produceLocalElem(id: number, text: string, detail: string, completed: boolean): TodoItem {
    let todo: TodoItem = {
        id: id,
        text: text,
        detail: "Today",
        completed: completed,
    }
    return todo;
}