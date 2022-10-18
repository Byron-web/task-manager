import {Component, Input, OnInit} from '@angular/core';
import {TaskItem} from "../../models/task-item.model";

@Component({
  selector: 'app-task-item', templateUrl: './task-item.component.html', styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() public task!: TaskItem;
  public editMode: boolean = false;

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public toggleEdit(): void {
    this.editMode = !this.editMode;
  }

}
