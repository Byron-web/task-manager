import {TaskItem} from "./task-item.model";

export interface TaskList {
  id: string,
  title: string,
  tasks: TaskItem[],
  editMode: boolean
}
