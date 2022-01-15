import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

import { User } from "./user";
import { Emoji } from "./emoji";
import { Comment } from "./comment";

@Entity()
export class Diary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.diaries)
  user: User;

  @OneToMany("Comment", "diary")
  comments: Comment[];

  @OneToMany("Emoji", "diary")
  emojies: Emoji[];
}
