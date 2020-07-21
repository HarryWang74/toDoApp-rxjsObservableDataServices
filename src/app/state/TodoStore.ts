
import { Injectable } from '@angular/core';
import { ToDo } from './../models/todo';
import { ToDoService } from '../services/to-do.service';
import {Observable, Observer} from "rxjs";
import {Subject} from "rxjs";
import {List} from 'immutable';
import {asObservable} from "./asObservable";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class TodoStore {

    private _todos: BehaviorSubject<List<ToDo>> = new BehaviorSubject(List([]));

    constructor(private todoBackendService: ToDoService) {
        this.loadInitialData();
    }

    get todos() {
        return asObservable(this._todos);
    }

    loadInitialData() {
        this.todoBackendService.getToDoList().subscribe(
            (result: ToDo[]) => {          
                    this._todos.next(List(result));
                    console.log(this._todos);
            },
        );
    }
    
    addToDo(newTodo): Observable<Object> {
        let obs: Observable<Object> = this.todoBackendService.createToDo(newTodo);
        obs.subscribe(
            (res:ToDo) => {
                this._todos.next(this._todos.getValue().push(res));
            }
        );
            
        if(obs) return obs;
    }

    deleteTodo(deleted:ToDo) {
        let obs = this.todoBackendService.deleteToDo(deleted);
        obs.subscribe(
            res => {
                let todos: List<ToDo> = this._todos.getValue();
                let index = todos.findIndex((todo) => todo.id === deleted.id);
                this._todos.next(todos.delete(index));
            }
        );

        return obs;
    }

    updateTodo(toDo:ToDo): Observable<Object> {
        let obs: Observable<Object> = this.todoBackendService.updateToDo(toDo);
        obs.subscribe(
            (res: ToDo) => {
                let todos = this._todos.getValue();
                let index = todos.findIndex((todo: ToDo) => todo.id === res.id);
                this._todos.next(todos.set(index, res));
            }
        );

        return obs;
    }
}
