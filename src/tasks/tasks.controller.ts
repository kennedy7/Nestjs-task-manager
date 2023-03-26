import { Controller, Get, Patch } from '@nestjs/common';
import {
  Body,
  Param,
  Post,
  Delete,
  Query,
  UsePipes,
} from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateTaskDto } from './dto/create.task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TasksStatus } from './task-status.enum';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  //   @Get()
  //   getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): Task[] {
  //     if (Object.keys(filterDto).length) {
  //       return this.taskService.getTasksWithFilters(filterDto);
  //     } else {
  //       return this.taskService.getAllTasks();
  //     }
  //   }
  //   @Get(':id')
  //   getTaskById(@Param('id') id: string): Task {
  //     return this.taskService.getTaskById(id);
  //   }

  //   @Post()
  //   @UsePipes(ValidationPipe)
  //   createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //     return this.taskService.createTask(createTaskDto);
  //   }

  //   @Delete(':id')
  //   deleteTask(@Param('id') id: string): void {
  //     this.taskService.deleteTask(id);
  //   }
  //   @Patch(':id/status')
  //   updateTaskStatus(
  //     @Param('id') id: string,
  //     @Body('status', TaskStatusValidationPipe) status: TasksStatus,
  //   ): Task {
  //     return this.taskService.updateTaskStatus(id, status);
  //   }
}
