import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskItem} from "../../models/task-item.model";
import {DateTime} from "luxon";

@Component({
  selector: 'app-task-item', templateUrl: './task-item.component.html', styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() public task!: TaskItem;
  @Output() public removeTask = new EventEmitter<TaskItem>();

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public toggleEdit(): void {
    this.task.editMode = !this.task.editMode;
  }

  public deleteTask(): void {
    this.removeTask.emit(this.task);
  }

  public completeTask(): void {
    if (this.task.completed) {
      this.task.dateCompleted = new Date();
    }
  }

  public formatDate(date: Date): string {
    return DateTime.fromJSDate(date)
                   .toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);
  }

}
