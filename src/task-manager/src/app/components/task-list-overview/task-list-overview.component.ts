import { TaskList } from '../../models/task-list.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-task-list-overview',
  templateUrl: './task-list-overview.component.html',
  styleUrls: ['./task-list-overview.component.scss'],
})
export class TaskListOverviewComponent implements OnInit, OnDestroy {
  public taskLists: TaskList[] = [];
  public currentTaskList!: TaskList;
  public isOpened: boolean = true;

  constructor() {}

  ngOnDestroy(): void {
    this.saveData('taskLists', JSON.stringify(this.taskLists));
  }

  ngOnInit(): void {
    let raw = this.getData('taskLists');
    if (raw === '{}') raw = '[]';
    this.taskLists = JSON.parse(raw);
    setInterval(
      () => this.saveData('taskLists', JSON.stringify(this.taskLists)),
      10000
    );
  }

  public saveData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public getData(key: string): string {
    return localStorage.getItem(key) ?? '[]';
  }

  public selectList(taskList: TaskList): void {
    this.currentTaskList = taskList;
  }

  public addList(): void {
    this.taskLists.push({
      id: uuidv4(),
      title: 'New List',
      icon: '',
      tasks: [],
      editMode: true,
    });
  }

  public miniList(): void {
    document.getElementById('list-wrapper')?.style.width;
  }

  public toggleNav(): void {
    this.isOpened = !this.isOpened;
  }
}
