import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../auth/user.entity';
import { TasksStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TasksStatus;

  //assigning task to the creator(user)
  @ManyToOne((type) => User, (user) => user.tasks, { eager: false })
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: User;
}
