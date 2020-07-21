import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToDo } from './../../models/todo';
import { ToDoService } from '../../services/to-do.service';
import { ApplicationMessageService } from '../../services/applicationMessage.service';

@Component({
  selector: 'to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent implements OnInit {
	toDo: any;
	updateing: boolean;
	editListener: any;

	@Output() delToDo = new EventEmitter();
	@Output() updateToDo = new EventEmitter();

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
			this.toDo = params.toDo;
		});
  	}
  
	removeSubscriptions() {
		if (this.editListener) {
			this.editListener.remove();
		}
	}
	
	saveToDo() {
		this.updateToDo.emit(this.toDo);
		setTimeout(() => {
			this.updateing = false;
		});
	}

    deleteToDo() {
		this.delToDo.emit(this.toDo);
		setTimeout(() => {
			this.updateing = false;
		});
  	}
}
