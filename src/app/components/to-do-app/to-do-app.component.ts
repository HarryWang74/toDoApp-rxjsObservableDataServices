import { Component, OnInit } from '@angular/core';
import { ApplicationMessageService } from '../../services/applicationMessage.service';
import { TodoStore } from '../../state/TodoStore';
import { ToDo } from './../../models/todo';

@Component({
  selector: 'to-do-app',
  templateUrl: './to-do-app.component.html',
  styleUrls: ['./to-do-app.component.scss']
})
export class ToDoAppComponent implements OnInit {
  editing: boolean = false;
  editListener: any;
  updateListener: any;
  deleteListener: any;

  constructor(
    private applicationMessageService: ApplicationMessageService,
    private todoStore: TodoStore
  ) { }

  ngOnInit() {
    this.setupSubscriptions();
  }

  ngOnDestroy() {
		this.removeSubscriptions();
  }

  setupSubscriptions() {
    this.editListener = this.applicationMessageService.subscribe('EDIT_TODO', (params) => {
			this.editing = true;
    });
    this.updateListener = this.applicationMessageService.subscribe('FIND_UPDATED_TODO_FROM_LIST', (params) => {
			this.editing = false;
    });
    this.deleteListener = this.applicationMessageService.subscribe('REMOVE_DELETED_TODO_FROM_LIST', (params) => {
			this.editing = false;
    });
  }

  removeSubscriptions(){
    if (this.editListener) {
			this.editListener.remove();
    }
    if (this.updateListener) {
			this.updateListener.remove();
    }
    if(this.deleteListener){
      this.deleteListener.remove();
    }
  }

  onAddTodo(description) {
    let newTodo = {id:0, subject: description};
    this.todoStore.addToDo(newTodo);
    // if subscribe here, It will write data into data base twice
    // need to sort out why and how to subscribe Store method
    /*
    this.todoStore.addToDo(newTodo).subscribe(res => {
      console.log(res)
    });
    */
  }

  onDeleteToDo(toDo){
    this.todoStore.deleteTodo(toDo);
  }
}
