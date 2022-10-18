import { Component, OnInit } from '@angular/core';
import { TaskCard } from './../../models/task-list-card.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task-list-card',
  templateUrl: './task-list-card.component.html',
  styleUrls: ['./task-list-card.component.scss'],
})
export class TaskListCardComponent implements OnInit {
  @Input() public taskCard!: TaskCard;
  cards: TaskCard[] = [{ title: 'Byron', taskLists: 26 }];

  constructor() {}

  ngOnInit(): void {}
}
