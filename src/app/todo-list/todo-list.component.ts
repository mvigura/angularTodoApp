import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../classes/todo';
import { MatDialog } from '@angular/material';
import { TodoModalDetailsComponent } from '../todo-modal-details/todo-modal-details.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog(todo): void {
    // e.preventDefault();
    const dialogRef = this.dialog.open(TodoModalDetailsComponent, {
      width: '300px',
      height: '280px',
      data: todo
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
