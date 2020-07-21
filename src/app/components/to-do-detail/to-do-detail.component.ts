import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToDo } from './../../models/todo';
import { TodoStore } from '../../state/TodoStore';

@Component({
  selector: 'to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent implements OnInit {
	selectedToDo: ToDo;
	editing: boolean = false;

	constructor(
		private todoStore: TodoStore
	) { }

	ngOnInit() {
		this.todoStore.editing.subscribe((editing: boolean)=>{
			this.editing = editing;
		});
		this.todoStore.selectedToDo.subscribe((toDo:ToDo)=>{
			this.selectedToDo = toDo
		})
	}

	saveToDo() {
		this.todoStore.updateTodo(this.selectedToDo);
		setTimeout(() => {
			this.editing = false;
		});
	}

    deleteToDo() {
		this.todoStore.deleteTodo(this.selectedToDo);
		setTimeout(() => {
			this.editing = false;
		});
  	}
}
