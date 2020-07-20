import { Component, OnInit } from '@angular/core';
import { ApplicationMessageService } from '../../services/applicationMessage.service';
import { TodoStore } from '../../state/TodoStore';

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
}
