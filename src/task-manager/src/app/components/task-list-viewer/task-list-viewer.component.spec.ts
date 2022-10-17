import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListViewerComponent } from './task-list-viewer.component';

describe('TaskListViewerComponent', () => {
  let component: TaskListViewerComponent;
  let fixture: ComponentFixture<TaskListViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
