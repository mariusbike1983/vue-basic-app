import { LoadingResult } from "@/types/LoadingResult";
import { produceLocalElem } from "./loadData";

export default async function loadDataExternal(quantity: number): Promise<LoadingResult> {
    let url = 'https://dummyjson.com/todos?limit='+quantity;

    let localData: LoadingResult = {
        todoitems: []
    };
    await fetch(url)
            .then(res => res.json())
            .then(obj => {
                for(let i = 0; i < obj.todos.length; i++) {
                    const rawTodo = obj.todos[i];
                    const localTodo = produceLocalElem(
                                        rawTodo.id, 
                                        rawTodo.todo, 
                                        "Detail: "+rawTodo.todo,
                                        rawTodo.completed);
                    localData.todoitems.push(localTodo);
                }
            })
            .catch(() => {
                localData.err = "No data available at ["+url+"]";
            });
    return localData;
}

export async function removeItem(id: number): Promise<boolean> {
    let url = 'https://dummyjson.com/todos/'+id;

    let isDeleted: boolean = false;
    await fetch(url, { method: 'DELETE' })
            .then(res => res.json())
            .then(obj => {
                isDeleted = obj.isDeleted
            }).catch((err) => {
                isDeleted = false;
            })
    return isDeleted;
}