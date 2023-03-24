import { Controller, Get, Patch } from '@nestjs/common';
import { Body, Param, Post, Delete } from '@nestjs/common/decorators';
import { CreateTaskDto } from './dto/create.task.dto';
import { Task, TasksStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTask(): Task[] {
    return this.taskService.getAllTasks();
  }
  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    this.taskService.deleteTask(id);
  }
  @Patch(':id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TasksStatus,
  ): Task {
    return this.taskService.updateTaskStatus(id, status);
  }
}
