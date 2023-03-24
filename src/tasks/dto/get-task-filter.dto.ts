import { TasksStatus } from '../tasks.model';

export interface GetTaskFilterDto {
  status: TasksStatus;
  search: string;
}
