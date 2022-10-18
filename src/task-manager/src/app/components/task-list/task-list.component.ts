import {Component, Input, OnInit} from '@angular/core';
import {TaskList} from "../../models/task-list.model";

@Component({
  selector: 'app-task-list', templateUrl: './task-list.component.html', styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() public taskList!: TaskList;

  public constructor() {
  }

  public ngOnInit(): void {
  }

}
