import {Component, Input, OnInit} from '@angular/core';
import {TaskList} from "../../Models/task-list.model";

@Component({
  selector: 'app-task-list-viewer',
  templateUrl: './task-list-viewer.component.html',
  styleUrls: ['./task-list-viewer.component.scss']
})
export class TaskListViewerComponent implements OnInit {

  @Input() public taskList: TaskList = {
    title: 'My Task List',
    tasks: [{name: 'Task1', detail: 'Blah', dateCompleted: new Date},
      {name: 'Task2', detail: 'Blah', dateCompleted: new Date},
      {name: 'Task3', detail: 'Blah', dateCompleted: new Date},
      {name: 'Task4', detail: 'Blah', dateCompleted: new Date},
      {name: 'Task5', detail: 'Blah', dateCompleted: new Date},
      {name: 'Task6', detail: 'Blah', dateCompleted: new Date},]
  };

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
