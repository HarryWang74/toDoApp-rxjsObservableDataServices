import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToDo } from './../../models/todo';

@Component({
  selector: 'to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent implements OnInit {
	@Output() delToDo = new EventEmitter();
	@Output() updateToDo = new EventEmitter();
	@Input() selectedToDo: ToDo;
	@Input() editing: boolean;

	constructor(
	) { }

	ngOnInit() {
		
	}

	saveToDo() {
		this.updateToDo.emit(this.selectedToDo);
		setTimeout(() => {
			this.editing = false;
		});
	}

    deleteToDo() {
		this.delToDo.emit(this.selectedToDo);
		setTimeout(() => {
			this.editing = false;
		});
  	}
}
