import { Injectable } from '@nestjs/common';
import { TasksStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create.task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { User } from '../auth/user.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTasks(filterDto: GetTaskFilterDto, user: User) {
    return this.taskRepository.getTasks(filterDto, user);
  }

  async getTaskById(id: number, user: User): Promise<Task> {
    const existingTask = await this.taskRepository.findOne({
      where: { id, userId: user.id },
    });
    if (!existingTask) {
      throw new NotFoundException(`Task with ID:- ${id} Not found`);
    } else {
      return existingTask;
    }
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto, user);
  }

  async deleteTask(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID:- ${id} Not found`);
    }
  }

  async updateTaskStatus(
    id: number,
    status: TasksStatus,
    user: User,
  ): Promise<Task> {
    const task = await this.getTaskById(id, user);
    task.status = status;
    await task.save();
    return task;
  }
}
