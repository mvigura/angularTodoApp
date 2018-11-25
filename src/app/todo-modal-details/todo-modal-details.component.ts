import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from '../classes/todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-modal-details',
  templateUrl: './todo-modal-details.component.html',
  styleUrls: ['./todo-modal-details.component.less']
})
export class TodoModalDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<TodoModalDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private todoDataService: TodoDataService
  ) {}

  onDeleteClick(todo): void {
    this.todoDataService.deleteTodoById(todo.id);
    this.dialogRef.close();
  }
}
