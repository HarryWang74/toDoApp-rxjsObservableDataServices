import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoStore } from '../../state/TodoStore';

@Component({
  selector: 'to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.scss']
})
export class ToDoCreateComponent implements OnInit {
  editing: boolean = false;
  create: boolean = false;
  
  @Output() todo = new EventEmitter();

  constructor(
    private todoStore: TodoStore
  ) { }

  ngOnInit() {
    this.todoStore.editing.subscribe((editing: boolean)=>{
      this.editing = editing;
    });
  }

  startCreateToDo() {
    this.create = true;
    setTimeout(() => {
        document.getElementById("newToDoSubject").focus();
    }, 100);
  }


  savingToDo(input) {
    let newTodo = {subject: input.value};
    this.todoStore.addToDo(newTodo);
    setTimeout(() => {
      input.value = ""
      this.create = false;
    });
  } 
}
