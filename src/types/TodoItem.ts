export class TodoItem {
    
    id:         number
    text:       string
    detail:     string
    completed:  boolean

    constructor(id: number, text: string, detail: string, completed: boolean) {
        this.id = id;
        this.text = text;
        this.detail = detail;
        this.completed = completed;
    }
}
