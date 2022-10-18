import { TaskList } from './task-list.model';

export interface TaskCard {
  title: string;
  taskLists: TaskList[];
}
