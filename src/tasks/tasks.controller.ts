import { Controller, Get, Patch } from '@nestjs/common';
import {
  Body,
  Param,
  Post,
  Delete,
  Query,
  UsePipes,
} from '@nestjs/common/decorators';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common/pipes';
import { CreateTaskDto } from './dto/create.task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TasksStatus } from './task-status.enum';
import { Task } from './task.entity';
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
  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.taskService.deleteTask(id);
  }

  @Patch(':id/status')
  updateTaskStatus(
    @Param('id') id: number,
    @Body('status', TaskStatusValidationPipe) status: TasksStatus,
  ): Promise<Task> {
    return this.taskService.updateTaskStatus(id, status);
  }
}
