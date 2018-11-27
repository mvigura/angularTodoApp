import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../classes/todo';
import * as moment from 'moment';
@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss']
})
export class AddNewTodoComponent {
  @Output() addNewTodo = new EventEmitter<Todo>();
  avPeriods: { label: string; value: number }[] = [
    { label: '15 minutes', value: 15 * 60 * 1000 },
    { label: '1 hour', value: 60 * 60 * 1000 },
    { label: '3 hours', value: 3 * 60 * 60 * 1000 },
    { label: '12 hours', value: 12 * 60 * 60 * 1000 },
    { label: '1 day', value: 24 * 60 * 60 * 1000 },
    { label: '3 days', value: 3 * 24 * 60 * 60 * 1000 },
    { label: '5 days', value: 5 * 24 * 60 * 60 * 1000 },
    { label: '1 week', value: 7 * 24 * 60 * 60 * 1000 }
  ];
  newTodo: Todo = new Todo({ expireDate: this.avPeriods[0].value });
  constructor() {}

  addTodo() {
    if (!this.newTodo.title) return;
    this.newTodo.expireDate = moment(
      new Date().getTime() + this.newTodo.expireDate
    ).format(moment.HTML5_FMT.DATETIME_LOCAL);
    this.addNewTodo.emit(this.newTodo);
    this.newTodo = new Todo({ expireDate: this.avPeriods[0].value });
  }
}
