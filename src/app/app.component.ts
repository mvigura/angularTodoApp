import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  newTodo: Todo = new Todo();
  avPeriods: object[] = [
    { label: '15 minutes' },
    { label: '1 hour' },
    { label: '3 hours' },
    { label: '12 hours' },
    { label: '1 day' },
    { label: '3 days' },
    { label: '5 days' },
    { label: '1 week' }
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
