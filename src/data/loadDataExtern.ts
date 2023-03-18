import { TodoItem } from "@/types/TodoItem";

export default async function loadDataExternal(quantity: number): Promise<TodoItem[]> {
    let url = 'https://dummyjson.com/todos?limit='+quantity;

    let localData: TodoItem[] = [];
    await fetch(url)
            .then(res => res.json())
            .then(obj => {
                for(let i = 0; i < obj.todos.length; i++) {
                    const rawTodo = obj.todos[i];
                    let localTodo = produceLocalElem(
                                        rawTodo.id, 
                                        rawTodo.todo, 
                                        "Detail: "+rawTodo.todo);
                    localData.push(localTodo);
                }
            })
            .catch((err) => {
                //handle the error somehow
            });
    return localData;
}

function produceLocalElem(id: number, text: string, detail: string): TodoItem {
    let todo: TodoItem = {
        id: id,
        text: text,
        detail: "Today",
        completed: false,
    }
    return todo;
}