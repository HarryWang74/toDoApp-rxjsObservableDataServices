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

  onAddTodo(description) {
    let newTodo = {id:0, subject: description};
    this.todoStore.addToDo(newTodo);
    // if subscribe here, It will write data into data base twice
    // need to sort out why and how to subscribe Store method
    /*
    this.todoStore.addToDo(newTodo).subscribe(
      (res: ToDo) => {
        console.log(res)
      }
    );
    */
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
    this.editing = true;
    console.log(this.selectedToDo);
  }
}
