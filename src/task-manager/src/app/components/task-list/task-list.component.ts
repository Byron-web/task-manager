import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../../models/task-list.model';
import { TaskItem } from '../../models/task-item.model';
import * as _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { style } from '@angular/animations';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() public taskList!: TaskList;
  public iconDropDown: boolean = false;
  public iconList: string[] = [
    'academic-cap',
    'home',
    'work',
    'favorite',
    'important',
  ];

  public constructor() {}

  public ngOnInit(): void {}

  public toggleEdit(): void {
    this.taskList.editMode = !this.taskList.editMode;
  }

  public addTask(): void {
    this.taskList.tasks.push({
      id: uuidv4(),
      name: '',
      detail: '',
      completed: false,
      dateCompleted: new Date(),
      editMode: true,
    });
  }

  public deleteTask(task: TaskItem): void {
    _.remove(this.taskList.tasks, (x) => x.id === task.id);
  }

  public toggleIconDropDown(): void {
    this.iconDropDown = !this.iconDropDown;
  }

  public setIcon(icon: string): void {
    this.taskList.icon = icon;
  }
}
