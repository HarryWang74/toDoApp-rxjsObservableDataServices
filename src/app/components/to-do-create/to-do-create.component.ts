import { Component, OnInit } from '@angular/core';
import { ToDo } from './../../models/todo';
import { ToDoService } from '../../services/to-do.service';
import { ApplicationMessageService } from '../../services/applicationMessage.service';
@Component({
  selector: 'to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.scss']
})
export class ToDoCreateComponent implements OnInit {
  create: boolean = false;
  creating: boolean = false;
  toDo: ToDo;
  
  constructor(
    private toDoService: ToDoService,
    private applicationMessageService: ApplicationMessageService
  ) { }

  ngOnInit() {
  }

  startCreateToDo() {
    this.create = true;
    this.toDo.subject = "";
    setTimeout(() => {
        document.getElementById("newToDoSubject").focus();
    }, 100);
  }


  savingToDo() {

    if (this.toDo.subject !== undefined && this.toDo.subject.trim() !== "") {
        this.creating = true;
        console.log(this.toDo);
        /*
        this.toDoService.createToDo(this.toDo).subscribe(
            (result: ToDo) => {
                this.creating = false;
                this.create = false;
                this.toDo = new ToDo();
                this.applicationMessageService.publish('TODO_LIST_ADD_TODO', { toDo: result});
            },
        );
        */
    }
  } 
}
