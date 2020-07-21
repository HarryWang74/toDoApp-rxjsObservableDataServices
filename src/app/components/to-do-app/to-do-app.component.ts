import { Component, OnInit } from '@angular/core';
import { TodoStore } from '../../state/TodoStore';
import { ToDo } from './../../models/todo';

@Component({
  selector: 'to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.scss']
})
export class ToDoAppComponent implements OnInit {
  editing: boolean = false;
  selectedToDo: ToDo;
  
  constructor(
    private todoStore: TodoStore
  ) { }

  ngOnInit() {
  }

  onDeleteToDo(toDo){
    this.todoStore.deleteTodo(toDo);
    this.editing = false;
  }

  onUpdateToDo(toDo){
    this.todoStore.updateTodo(toDo);
    this.editing = false;
  }

  onSelectToDo(toDo){
    this.selectedToDo = toDo;

    console.log(this.selectedToDo);
  }
}
