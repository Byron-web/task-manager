import {TaskList} from '../../models/task-list.model';
import {Component, OnInit} from '@angular/core';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-task-list-overview',
  templateUrl: './task-list-overview.component.html',
  styleUrls: ['./task-list-overview.component.scss'],
})
export class TaskListOverviewComponent implements OnInit {
  public taskLists: TaskList[] = [{id: uuidv4(), title: 'Diet Plans', tasks: [], editMode: false},];
  public currentTaskList!: TaskList;

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectList(taskList: TaskList): void {
    this.currentTaskList = taskList;
  }
}
