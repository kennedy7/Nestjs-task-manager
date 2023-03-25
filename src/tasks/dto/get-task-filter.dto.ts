import { IsOptional } from 'class-validator';
import { TasksStatus } from '../tasks.model';

export class GetTaskFilterDto {
  @IsOptional()
  status: TasksStatus;

  @IsOptional()
  search: string;
}
