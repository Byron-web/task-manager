export interface TaskItem {
  id: string,
  name: string,
  detail: string,
  completed: boolean,
  dateCompleted: Date,
  editMode: boolean
}
