import { Injectable } from '@angular/core';
import { Todo } from './classes/todo';

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
      expireDate: new Date(new Date().getTime() + 0 * 60 * 1000)
    }),
    new Todo({
      id: 1001,
      title: 'To do',
      completed: true,
      expireDate: new Date(new Date().getTime() + 10 * 1000)
    }),
    new Todo({
      id: 1002,
      title: 'todo, todo, todo',
      expireDate: new Date(new Date().getTime() + 30 * 60 * 1000)
    }),
    new Todo({
      id: 1003,
      title: 'to doooo, dodododooodoooooo',
      expireDate: new Date(new Date().getTime() + 5 * 60 * 60 * 1000)
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
