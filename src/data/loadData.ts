import { LoadingResult } from "@/types/LoadingResult";
import { TodoItem } from "@/types/TodoItem";

export function produceData(quantity: number): LoadingResult {
    const result = new LoadingResult([]);
    for(let i = 0; i<quantity; i++) {
        result.todoitems.push(new TodoItem(i, "Text for "+i, "Detail for "+i, i % 2 == 0));
    }
    return result;
}