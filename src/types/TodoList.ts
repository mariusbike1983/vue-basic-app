import { produceData } from "@/data/loadData";
import loadDataExternal from "@/data/loadDataExtern";
import { LoadingResult } from "./LoadingResult";
import { TodoItem } from "./TodoItem";

export class TodoList {
    loadingStatus: {
        type: 'ERROR_LOADING' | 'LOADED_SUCCESFULLY' | 'NOT_LOADED',
        message: "";
    }
    items: TodoItem[];
    
    constructor() {
        this.items = [];
        this.loadingStatus = {type: 'NOT_LOADED', message: ""};
        this._loadItems();
    }

    addItem(item: TodoItem): boolean {
        if (this.hasItem(item)) {
            return false; // item already exists in the list
        }
        if (this._addItemToStore(item)) {
            return false;
        }
        this.items.push(item);
        return true;
    }

    hasItem(item: TodoItem): boolean {
        const found = this.items.find(citem => citem.id === item.id)
        return found !== undefined;
    }

    removeItem(item: TodoItem): boolean {
        if (this.hasItem(item)) {
            return false;
        }
        if (this._removeItemFromStore(item)) {
            return false;
        }
        this.items = this.items.filter(citem => citem.id !== item.id);
        return true;
    }

    getItemWithId(id: number): TodoItem | undefined{
        return this.items.find(citem => citem.id === id);
    }

    _removeItemFromStore(item: TodoItem): boolean {
        return false;
    }

    _addItemToStore(item: TodoItem): boolean {
        return false;
    }

    _loadItems() {
        loadDataExternal(5).then(result => {
            if (result.err) {
                result.err
                this.loadingStatus = {
                    type: 'ERROR_LOADING',
                    message: ""
                }
            } else {
                this.loadingStatus = {
                    type: 'LOADED_SUCCESFULLY',
                    message: ""
                }
                this.items.push(...result.todoitems);
            }
        });
    }
}