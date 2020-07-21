import { Component, OnInit } from '@angular/core';
import { ToDo } from './../../models/todo';
import { ApplicationMessageService } from '../../services/applicationMessage.service';
import {TodoStore} from "../../state/TodoStore";


@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  constructor(
    private todoStore: TodoStore,
    private applicationMessageService: ApplicationMessageService
  ) { }

  ngOnInit() {
  }

  editTodo(toDo: ToDo) {
    this.applicationMessageService.publish('EDIT_TODO', { toDo: toDo });
  }
}
