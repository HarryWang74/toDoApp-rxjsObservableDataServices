import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from './../../models/todo';
import {TodoStore} from "../../state/TodoStore";

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {
  editing: boolean = false;
  @Output() selectToDo = new EventEmitter();

  constructor(
    private todoStore: TodoStore,
  ) { }

  ngOnInit() {
    this.todoStore.editing.subscribe((editing: boolean)=>{
      this.editing = editing;
    });
  }

  editTodo(toDo: ToDo) {
    console.log("click");
    this.todoStore.selectToDo();
    // this.selectToDo.emit(toDo);
  }
}
