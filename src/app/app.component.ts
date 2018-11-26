import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTodo: Todo = new Todo();
  avPeriods: object[] = [
    { label: '15 minutes', value: 15 * 60 * 1000 },
    { label: '1 hour', value: 60 * 60 * 1000 },
    { label: '3 hours', value: 3 * 60 * 60 * 1000 },
    { label: '12 hours', value: 12 * 60 * 60 * 1000 },
    { label: '1 day', value: 24 * 60 * 60 * 1000 },
    { label: '3 days', value: 3 * 24 * 60 * 60 * 1000 },
    { label: '5 days', value: 5 * 24 * 60 * 60 * 1000 },
    { label: '1 week', value: 7 * 24 * 60 * 60 * 1000 }
  ];
  constructor(private todoDataService: TodoDataService) {}

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
