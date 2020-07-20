
import { Injectable } from '@angular/core';
import { ToDo } from './../models/todo';
import { ToDoService } from '../services/to-do.service';
import {Observable} from "rxjs";
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

    /*
    addTodo(newTodo:ToDo):Observable {

        let obs = this.todoBackendService.saveTodo(newTodo);

        obs.subscribe(
                res => {
                    this._todos.next(this._todos.getValue().push(newTodo));
                });

        return obs;
    }


    deleteTodo(deleted:Todo): Observable {
        let obs: Observable = this.todoBackendService.deleteTodo(deleted);

        obs.subscribe(
                res => {
                    let todos: List<Todo> = this._todos.getValue();
                    let index = todos.findIndex((todo) => todo.id === deleted.id);
                    this._todos.next(todos.delete(index));

                }
            );

        return obs;
    }
    */
}
