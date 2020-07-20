import { Component, OnInit } from '@angular/core';
import { ToDo } from './../../models/todo';
import { ToDoService } from '../../services/to-do.service';
import { ApplicationMessageService } from '../../services/applicationMessage.service';

@Component({
  selector: 'to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent implements OnInit {
	toDo: ToDo;
	updateing: boolean;
	editListener: any;

	constructor(
		private toDoService: ToDoService,
		private applicationMessageService: ApplicationMessageService
	) { }

	ngOnInit() {
		this.setupSubscriptions();
	}

	ngOnDestroy() {
		this.removeSubscriptions();
	}

	setupSubscriptions() {
		this.editListener = this.applicationMessageService.subscribe('EDIT_TODO', (params) => {
			this.updateing = true;
			// this.toDo = Object.assign(new ToDo(), params.toDo);
		});
  	}
  
	removeSubscriptions() {
		if (this.editListener) {
			this.editListener.remove();
		}
	}
	updateToDo() {
		this.updateing = true;
		this.toDoService.updateToDo(this.toDo).subscribe(
			(result: ToDo) => {
				console.log(result);
				this.updateing = false;
				this.applicationMessageService.publish('FIND_UPDATED_TODO_FROM_LIST', { toDo: result });
			},
		)
	}
    deleteToDo() {
		this.updateing = true;
		this.toDoService.deleteToDo(this.toDo).subscribe(
			(result) => {
				this.updateing = false;
				this.applicationMessageService.publish('REMOVE_DELETED_TODO_FROM_LIST', { toDo: this.toDo });
			}
		)
  	}
}
