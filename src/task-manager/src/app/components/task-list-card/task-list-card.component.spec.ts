import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListCardComponent } from './task-list-card.component';

describe('TaskListCardComponent', () => {
  let component: TaskListCardComponent;
  let fixture: ComponentFixture<TaskListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
