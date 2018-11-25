import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppComponent } from './app.component';
import { TodoModalDetailsComponent } from './todo-modal-details/todo-modal-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent, TodoModalDetailsComponent, TodoListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    DragDropModule
  ],
  entryComponents: [TodoListComponent, TodoModalDetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
