import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../classes/todo';
import { MatDialog } from '@angular/material';
import { TodoModalDetailsComponent } from '../todo-modal-details/todo-modal-details.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { interval } from 'rxjs';
import * as moment from 'moment';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] = [];
  now: Date;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.now = new Date();
    interval(3000).subscribe(value => {
      this.now = new Date();
    });
  }

  isExpired(expireDate: Date) {
    return moment(this.now)
      .local()
      .isAfter(expireDate);
  }

  isExpiring(expireDate: Date) {
    return moment(this.now)
      .add(3, 'days')
      .local()
      .isAfter(expireDate);
  }

  openDialog(todo): void {
    // e.preventDefault();
    const dialogRef = this.dialog.open(TodoModalDetailsComponent, {
      width: '300px',
      height: '320px',
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
