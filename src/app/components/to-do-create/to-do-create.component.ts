import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.scss']
})
export class ToDoCreateComponent implements OnInit {
  create: boolean = false;
  
  @Output() todo = new EventEmitter();

  constructor() { }

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
    });
  } 
}
