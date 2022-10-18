import { TaskList } from './../../models/task-list.model';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task-list-card',
  templateUrl: './task-list-card.component.html',
  styleUrls: ['./task-list-card.component.scss'],
})
export class TaskListCardComponent implements OnInit {
  @Input() public taskList!: TaskList;

  constructor() {}

  ngOnInit(): void {}
}
