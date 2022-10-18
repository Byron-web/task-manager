import {Component} from '@angular/core';
import {TaskList} from "./models/task-list.model";

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public taskList: TaskList = {
    title: 'My Task List',
    tasks: [{name: 'Task1', detail: 'Blah', dateCompleted: new Date},
      {name: 'Task2', detail: 'Blah', dateCompleted: new Date},
      {name: 'Task3', detail: 'Blah', dateCompleted: new Date},
      {name: 'Task4', detail: 'Blah', dateCompleted: new Date},
      {name: 'Task5', detail: 'Blah', dateCompleted: new Date},
      {name: 'Task6', detail: 'Blah', dateCompleted: new Date},]
  };
}
