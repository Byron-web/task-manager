import { TaskItem } from './task-item.model';

export interface TaskList {
  id: string;
  title: string;
  icon: string;
  tasks: TaskItem[];
  editMode: boolean;
}
