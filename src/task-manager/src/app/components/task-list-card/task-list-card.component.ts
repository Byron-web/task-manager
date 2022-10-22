import { TaskList } from '../../models/task-list.model';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task-list-card',
  templateUrl: './task-list-card.component.html',
  styleUrls: ['./task-list-card.component.scss'],
})
export class TaskListCardComponent implements OnInit {
  @Input() public taskList!: TaskList;
  public noList = '';

  public constructor() {}

  public ngOnInit(): void {}

  public getCompletedTasksMessage(): string {
    let totalTasks: number = this.taskList.tasks.length;
    let completedTasks: number = this.taskList.tasks.filter(
      (x) => x.completed
    ).length;
    return `Completed ${completedTasks} out of ${totalTasks}`;
  }
}
