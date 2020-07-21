import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from './../../models/todo';
import { ToDoService } from '../../services/to-do.service';
import { ApplicationMessageService } from '../../services/applicationMessage.service';
import {TodoStore} from "../../state/TodoStore";

@Component({
  selector: 'to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.scss']
})
export class ToDoCreateComponent implements OnInit {
  create: boolean = false;
  creating: boolean = false;
  
  @Output() todo = new EventEmitter();

  constructor(
    private toDoService: ToDoService,
    private toDoStore: TodoStore,
    private applicationMessageService: ApplicationMessageService
  ) { }

  ngOnInit() {
  }

  startCreateToDo() {
    this.create = true;
    setTimeout(() => {
        document.getElementById("newToDoSubject").focus();
    }, 100);
  }


  savingToDo(input) {
    this.todo.emit(input.value);
    setTimeout(() => {
      input.value = ""
      this.create = false;
    }, 500);

    /*
    let toDo = {id:0, subject: input.value}
    this.toDoService.createToDo(toDo).subscribe(
      (result: ToDo) => {
        console.log(result);
      },
  );
  */
    // 
    // input.value = "";
  } 
}
