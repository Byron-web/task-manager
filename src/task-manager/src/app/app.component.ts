import {Component} from '@angular/core';
import {TaskList} from "./models/task-list.model";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public taskList: TaskList = {
    id: uuidv4(),
    title: 'My Task List',
    tasks: [{id: uuidv4(), name: 'Task1', detail: 'Blah', completed: false, dateCompleted: new Date, editMode: false},
      {id: uuidv4(), name: 'Task2', detail: 'Blah', completed: false, dateCompleted: new Date, editMode: false},
      {id: uuidv4(), name: 'Task3', detail: 'Blah', completed: false, dateCompleted: new Date, editMode: false},
      {id: uuidv4(), name: 'Task4', detail: 'Blah', completed: false, dateCompleted: new Date, editMode: false},
      {id: uuidv4(), name: 'Task5', detail: 'Blah', completed: false, dateCompleted: new Date, editMode: false},
      {id: uuidv4(), name: 'Task6', detail: 'Blah', completed: false, dateCompleted: new Date, editMode: false},],
    editMode: false
  };
}
