import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from './../../models/todo';
import {TodoStore} from "../../state/TodoStore";

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {
  @Output() selectToDo = new EventEmitter();

  constructor(
    private todoStore: TodoStore,
  ) { }

  ngOnInit() {
  }

  editTodo(toDo: ToDo) {
    this.selectToDo.emit(toDo);
  }
}
