import { Injectable } from '@angular/core';
import { Todo } from './classes/todo';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  // Placeholder for todos
  todos: Todo[] = [
    new Todo({
      id: 1,
      title: 'Something amazing',
      completed: true,
      expireDate: moment(new Date().getTime() + 1 * 60 * 60 * 1000).format(
        moment.HTML5_FMT.DATETIME_LOCAL
      )
    }),
    new Todo({
      id: 2,
      title: 'Lunch',
      expireDate: moment(new Date().getTime() + 3 * 60 * 60 * 1000).format(
        moment.HTML5_FMT.DATETIME_LOCAL
      )
    }),
    new Todo({
      id: 3,
      title: 'Something beautiful',
      expireDate: moment(new Date().getTime() + 4 * 24 * 60 * 60 * 1000).format(
        moment.HTML5_FMT.DATETIME_LOCAL
      )
    }),
    new Todo({
      id: 4,
      title: 'Write a book',
      expireDate: moment(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).format(
        moment.HTML5_FMT.DATETIME_LOCAL
      )
    })
  ];

  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = this.todos.length + 1;

  constructor() {}

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
