import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TasksStatus } from '../tasks.model';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn([TasksStatus.OPEN, TasksStatus.IN_PROGRESS, TasksStatus.DONE])
  status: TasksStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
