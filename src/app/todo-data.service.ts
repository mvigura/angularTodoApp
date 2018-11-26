import { Injectable } from '@angular/core';
import { Todo } from './classes/todo';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todos: Todo[] = [
    new Todo({
      id: 1000,
      title: 'To do',
      expireDate: moment(new Date().getTime() + 3 * 60 * 1000).format(
        moment.HTML5_FMT.DATETIME_LOCAL
      )
    }),
    new Todo({
      id: 1001,
      title: 'To do',
      completed: true,
      expireDate: moment(new Date().getTime() + 2 * 30 * 1000).format(
        moment.HTML5_FMT.DATETIME_LOCAL
      )
    }),
    new Todo({
      id: 1002,
      title: 'todo, todo, todo',
      expireDate: moment(new Date().getTime() + 30 * 60 * 1000).format(
        moment.HTML5_FMT.DATETIME_LOCAL
      )
    }),
    new Todo({
      id: 1003,
      title: 'to doooo, dodododooodoooooo',
      expireDate: moment(new Date().getTime() + 5 * 60 * 60 * 1000).format(
        moment.HTML5_FMT.DATETIME_LOCAL
      )
    })
  ];

  constructor() {}

  // Simulate POST /todos
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
