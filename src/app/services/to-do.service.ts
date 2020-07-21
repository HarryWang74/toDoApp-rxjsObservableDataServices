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

  createToDo(toDo){
    return this.http.post('http://localhost:3000/todos/', toDo, this.httpOptions);
  }

  updateToDo(toDo: ToDo){
    return this.http.put<ToDo>('http://localhost:3000/todos/'+ toDo.id, toDo, this.httpOptions);
  }

  deleteToDo(toDo: ToDo){
    return this.http.delete('http://localhost:3000/todos/'+ toDo.id, this.httpOptions);
  }

}
