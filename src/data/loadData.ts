import { TodoItem } from "@/types/TodoItem";

export function produceData(quantity: number): TodoItem[] {
    const data: TodoItem[] = [];
    for(let i = 0; i<quantity; i++) {
        data.push(produceNewItem(i));
    }
    return data;
}

export function produceNewItem(index: number) : TodoItem {
    const item: TodoItem = {
        id: index,
        text: "Text for "+(index+1),
        completed: index % 2 == 0,
        detail: "detail for "+(index+1)
    }
    return item;
}