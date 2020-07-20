import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDo } from '../models/todo';

@Injectable()
export class ToDoService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  getToDoList() {
    return this.http.get('http://localhost:3000/todos');
  }

  createToDo(toDo: ToDo){
    return this.http.post<ToDo>('http://localhost:3000/todos/', toDo, this.httpOptions);
  }

  
  sortToDoList(list: ToDo[]): ToDo[] {
    let sortedList = list.sort((a, b) => {
        if (a.completed == b.completed) {
            return (b.dueDate > a.dueDate) ? -1 : (b.dueDate < a.dueDate) ? 1 : 0;
        }
        else {
            return (a.completed < b.completed) ? -1 : 1;
        }
    });

    return sortedList;
  }

  updateToDo(toDo: ToDo){
    return this.http.put<ToDo>('http://localhost:3000/todos/'+ toDo.id, toDo, this.httpOptions);
  }

  deleteToDo(toDo: ToDo){
    return this.http.delete('http://localhost:3000/todos/'+ toDo.id, this.httpOptions);
  }

}
