import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './classes/todo';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private todoDataService: TodoDataService) {}

  addTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  countCompleted(todos: Todo[]) {
    return todos.filter(todo => !todo.completed).length;
  }
}
