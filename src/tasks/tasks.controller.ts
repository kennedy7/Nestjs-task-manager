import { Controller, Get } from '@nestjs/common';
import { Body, Param, Post } from '@nestjs/common/decorators';
import { CreateTaskDto } from './dto/create.task.dto';
import { Task } from './tasks.model';
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
}
